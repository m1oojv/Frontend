import React, { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { Box, Link, ListItemButton } from "@mui/material";
import { Instagram, Mail, YouTube } from "@mui/icons-material";
import { isMobile as UAIsMobile, isIOS as UAIsIOS } from "react-device-detect";
import { useQuery } from "react-query";
import theme from "./Theme.js";
import { Text } from "./Typography.js";

import { API_ENDPOINT } from "../constants.js";

let mainColor = theme.palette.text.primary;

function HiddenLink({
  href,
  text = "",
  fontSize = "normal",
  iconLeft = null,
  iconRight = null,
  sx = {},
  newTab = true,
  children,
}) {
  // TODO change underline
  const [hover, setHover] = useState(false);

  let LinkComponent = Link;
  if (href.startsWith("/")) {
    LinkComponent = NavLink;
  }

  return (
    <Box
      sx={{
        display: "inline-block",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        sx={{
          position: "absolute",

          // TODO try to remove import
          borderBottom: "1px solid " + mainColor,
          opacity: hover ? 1 : 0,
          transform: hover
            ? "translate3d(0, 0, 0)"
            : "translate3d(-100%, 0, 0)",

          transition: "transform 300ms, opacity 300ms",

          zIndex: "-1",
        }}
      >
        <Text transparent fontSize={fontSize}>
          {iconLeft}
          {text}
          {iconRight}
        </Text>
      </Box>
      <LinkComponent
        target={newTab && !href.startsWith("/") ? "_blank" : null}
        underline="none"
        sx={
          !href.startsWith("/")
            ? {
                ...sx,
              }
            : null
        }
        style={
          href.startsWith("/")
            ? {
                textDecoration: "none",
                ...sx,
              }
            : null
        }
        href={href}
        to={href}
      >
        {children}
        <Text fontSize={fontSize}>
          {iconLeft}
          {text}
          {iconRight}
        </Text>
      </LinkComponent>
    </Box>
  );
}

const socialMediaLinks = {
  instagram: {
    link: "https://www.instagram.com/lenstudios.sg/",
    fmt: "@lenstudios.sg",
    icon: Instagram,
  },
  email: {
    link: "mailto:victoria_jc@moe.edu.sg",
    fmt: "victoria_jc@moe.edu.sg",
    icon: Mail,
  },
  youtube: {
    link: "https://www.youtube.com/@len.studios",
    fmt: "https://www.youtube.com/@len.studios",
    icon: YouTube,
  },
};

function SocialMediaButton({ name, showText = false, sx = {} }) {
  const obj = socialMediaLinks[name];
  const link = obj.link;
  const SMIcon = obj.icon;

  return (
    <HiddenLink
      href={link}
      sx={{
        width: "fit-content",
        color: mainColor,
      }}
    >
      <ListItemButton sx={{ justifyContent: "center" }}>
        <SMIcon sx={sx} />
        <span style={{ justifyContent: "center" }}>
          {showText ? obj.fmt : ""}
        </span>
      </ListItemButton>
    </HiddenLink>
  );
}

function toTitleCase(str) {
  // https://stackoverflow.com/a/196991/8129786
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

function UseViewportSize() {
  // https://stackoverflow.com/a/36862446/8129786
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function UseIsMobile(vwThreshold = 900) {
  const [vw] = UseViewportSize();
  return vw < vwThreshold;
}

function slug(str, customReplacements = {}) {
  let slugged = str.toLowerCase().replace(/ |@/g, "-");
  for (const [key, value] of Object.entries(customReplacements)) {
    slugged = slugged.replace(new RegExp(key, "g"), value);
  }
  return slugged;
}

function unslug(str) {
  return str.replace(/-/g, " ").replace(/And/g, "and").toLowerCase();
}

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function apiFetch(graphqlQuery, credentials) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    if (credentials) {
      headers["Authorization"] = `Bearer ${credentials}`;
    }
    fetch(`${API_ENDPOINT}/graphql`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ query: graphqlQuery }),
    }).then((res) =>
      res.json().then((data) => {
        if (data.errors) {
          reject(data.errors);
        } else {
          resolve(data.data);
        }
      })
    );
  });
}

function useApiQuery(queryKey, graphqlQuery, credentials, options = {}) {
  const headers = {
    "Content-Type": "application/json",
  };
  if (credentials) {
    headers["Authorization"] = `Bearer ${credentials}`;
  }

  const queryOptions = {
    ...options,
    onError: (err) => {
      console.log(err);
    },
  };

  const condition = options.condition === undefined ? true : options.condition;
  const autoRefetch =
    options.autoRefetch === undefined ? true : options.autoRefetch;

  const [enableQuery, setEnableQuery] = useState(true);

  if (!Object.keys(options).includes("enabled")) {
    queryOptions.enabled = enableQuery;
  } else {
    if (!autoRefetch) {
      throw new Error("Cannot disable autoRefetch and manually control enable");
    }
  }

  return useQuery(
    queryKey,
    () => {
      if (condition) {
        return apiFetch(graphqlQuery, credentials).then((data) => {
          if (!autoRefetch) {
            setEnableQuery(false);
          }
          return data;
        });
      }
    },
    queryOptions
  );
}

function calculateTotalsFromCart(cart, shippingType) {
  let subTotal = 0;

  for (const p of cart.products) {
    subTotal += p.product.price * p.quantity;
  }

  const shippingCostMapping = {
    DOMESTIC: 500,
    OVERSEAS: 1000,
  };
  // parse discount
  let discount = 0;
  if (cart.coupon !== null) {
    const coupon = cart.coupon;
    if (coupon.type === "PERCENTAGE") {
      discount = (coupon.value / 100) * subTotal;
    } else {
      discount = Math.min(coupon.value, subTotal);
    }
  }
  let shippingCost = 0;
  let shippingDiscount = 0;
  if (shippingType !== undefined) {
    shippingCost = shippingCostMapping[shippingType];
    if (cart.shippingCoupon !== null) {
      const coupon = cart.shippingCoupon;
      if (coupon.type === "PERCENTAGE") {
        console.log(coupon.value, shippingCost);
        shippingDiscount = (coupon.value / 100) * shippingCost;
      } else {
        shippingDiscount = Math.min(coupon.value, shippingCost);
      }
    }
  }
  return {
    subTotal: subTotal,
    discount: discount,
    shippingCost: shippingCost,
    shippingDiscount: shippingDiscount,
    total: subTotal - shippingDiscount - discount + shippingCost,
  };
}

function formatPrice(val) {
  return `$${(val / 100).toFixed(2)}`;
}
export {
  HiddenLink,
  SocialMediaButton,
  toTitleCase,
  UseViewportSize,
  UAIsMobile,
  UAIsIOS,
  UseIsMobile,
  slug,
  unslug,
  clamp,
  useApiQuery,
  apiFetch,
  calculateTotalsFromCart,
  formatPrice,
};
