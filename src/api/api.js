import axios from "axios";

const fetchMemes = async () => {
  try {
    const response = await axios.get("https://api.imgflip.com/get_memes");
    const memesData = response.data.data.memes;
    return memesData;
  } catch (error) {
    console.error("Error fetching memes:", error);
    return [];
  }
};

export { fetchMemes };
