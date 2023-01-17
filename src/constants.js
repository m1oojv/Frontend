let API_ENDPOINT;
if (process.env.NODE_ENV === "development") {
  API_ENDPOINT = "http://localhost:4000";
} else {
  API_ENDPOINT = "https://api.lencustoms.com";
}

export { API_ENDPOINT };
