import axios from "axios";

const baseURL = "http://localhost:3001";

const getAll = async () => {
  const result = await axios.get(`${baseURL}/post`);
  return result.data.result;
}

export { getAll };