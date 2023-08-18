import axios from "axios";

const fetchdata = async () => {
  try {
    const response = await axios.get("https://opentdb.com/api.php?amount=10&category=18&type=multiple");
    const memesData = response.data.results;
    return memesData;
  } catch (error) {
    console.error("Error fetching:", error);
    return [];
  }
};

export { fetchdata };