import axios from "axios";
import Books from "./Stories";
import { useState, useEffect } from "react";
import Stories from "./Stories";
import BlogCardDemo from "./imported/Card.js";

const API_URL = "http://localhost:3000/api/v1/stories.json";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function Home() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getAPIData().then((items) => {
      console.log(items);
      setStories(items);
    });
  }, []);

  return (
    <div>
      <Stories stories={stories} />
    </div>
  );
}

export default Home;
