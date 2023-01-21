import axios from "axios";

const baseURL = "http://localhost:3001";
const signIn_API = async (username, password) => {
  const datos = {
    username: username,
    password: password
  };
  const result = await axios.post(`${baseURL}/user/signin`, datos);
  return result;
}

const saveToken = async (token) => {
  localStorage.setItem("token", token);
}
const readToken = async () => {
  return localStorage.getItem("token");
}

const signIn = async (username, password) => {
  console.log(username);
  console.log(password);
  const result = await signIn_API(username, password);
  console.log(result);
  if (result) {
    saveToken(result.data.token);
    return true;
  }
  return false;
}

export { signIn, readToken };