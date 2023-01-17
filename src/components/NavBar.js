import React, { useState, useRef } from "react";
import { Box, List, ListItemButton, Slide } from "@mui/material";
// import AccountIcon from "./AccountIcon.jsx";
// import Cart from "./Cart.jsx";
import { slug } from "../utils/Utils.js";
import { Text } from "../utils/Typography.js";

function NavBar({ refetchCounter, pageIndex, currPage }) {
  if (pageIndex === undefined) {
    pageIndex = currPage;
  }

  // const [showcaseDropdown, setShowcaseDropdown] = useState(false);
  const [storeDropdown, setStoreDropdown] = useState(false);

  const showDropdown = {
    // "Showcase": showcaseDropdown,
    Store: storeDropdown,
  };

  const setShowDropdown = {
    // "Showcase": setShowcaseDropdown,
    Store: setStoreDropdown,
  };

  const dropdownChildren = {};

  // TODO underline current page
  function NavBarButton({
    location,
    head,
    fmt,
    dropdownItems,
    dropdown = false,
    parent = null,
  }) {
    if (head === undefined) head = fmt;

    return (
      <Box
        key={location}
        sx={{
          m: dropdown ? "auto" : "0 0.8rem",
          backgroundColor: dropdown ? "secondary.main" : null,
        }}
        onMouseLeave={() => {
          if (Object.keys(setShowDropdown).includes(fmt) && showDropdown[fmt]) {
            if (parent !== null) {
              setTimeout(() => {
                parent.style.height = "auto";
              }, 200);
            }

            if (dropdownChildren[fmt]) {
              dropdownChildren[fmt].forEach((child) => {
                setShowDropdown[child](false);
              });
              const totalTimeout = dropdownChildren[fmt].reduce(
                (acc, curr) => acc + (showDropdown[curr] ? 250 : 0),
                0
              );
              setTimeout(() => {
                setShowDropdown[fmt](false);
              }, totalTimeout);
            } else {
              setShowDropdown[fmt](false);
            }
          }
        }}
      >
        <a
          href={`${location}`}
          style={{
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            if (
              Object.keys(setShowDropdown).includes(fmt) &&
              !showDropdown[fmt]
            ) {
              if (parent !== null) {
                let elem = e.target.parentElement.parentElement.children[1];
                if (elem === undefined) {
                  elem =
                    e.target.parentElement.parentElement.parentElement
                      .children[1];
                }
                parent.style.height = `calc(${
                  getComputedStyle(parent).height
                } + ${getComputedStyle(elem).height})`;
              }
              setShowDropdown[fmt](true);
            }
          }}
        >
          <ListItemButton>
            <Text secondary={!dropdown} bold ls="wide">
              {fmt}
            </Text>
          </ListItemButton>
        </a>
        {dropdownItems}
      </Box>
    );
  }

  function Dropdown({ name, head, items }) {
    const ref = useRef(null);

    return (
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          overflow: "hidden",
          width: "auto",
          height: "auto",
          transition: "height 0.2s linear",
          pointerEvents: showDropdown[name] ? null : "none",
        }}
      >
        <Slide
          direction="down"
          in={showDropdown[name]}
          container={ref.current}
          timeout={200}
        >
          <Box
            className="check"
            sx={{
              position: "relative",
              width: "max-content",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            {items.map((item) =>
              NavBarButton({
                key: item.fmt,
                dropdown: true,
                head: head || name,
                location: item.location,
                fmt: item.fmt,
                dropdownItems: item.dropdownItems,
                parent: ref.current,
              })
            )}
          </Box>
        </Slide>
      </Box>
    );
  }

  // const showcaseCategories = ["Available", "In Progress"];
  // const ShowcaseDropdown = Dropdown({name: "Showcase", items: showcaseCategories.map(category => {
  //     const path = `/showcase/${slug(category)}`;
  //     return {
  //         location: path, fmt: category
  //     };
  // })});

  // const storeCategories = ["Build-A-Keyboard", "Commission Us"];
  const storeCategories = ["Commission Us"];
  const StoreDropdown = Dropdown({
    name: "Store",
    items: storeCategories.map((category) => {
      const path = `/store/${slug(category)}`;
      return {
        location: path,
        fmt: category,
      };
    }),
  });

  const navbarItems = [
    { location: "/", fmt: "Home" },
    // {location: "/showcase", fmt: "Showcase", dropdownItems: ShowcaseDropdown},
    { location: "/store", fmt: "Store", dropdownItems: StoreDropdown },
    // {location: "/vote", fmt: "Vote"},
  ];

  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        position: "sticky",
        height: "8vh",
        width: "100vw",
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <List sx={{ display: "flex", alignItems: "center" }}>
        {navbarItems.map((item) =>
          NavBarButton({
            location: item.location,
            fmt: item.fmt,
            dropdownItems: item.dropdownItems,
          })
        )}
      </List>
      <List sx={{ display: "flex", alignItems: "center" }}>
        {/* <Cart refetchCounter={refetchCounter} />
        <AccountIcon /> */}
      </List>
    </Box>
  );
}
export default NavBar;
