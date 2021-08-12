import axios from "axios";

export function requestGetUser() {
  console.log("request api")
  return axios.request({
    method: "get",
     url: "https://api.github.com/users/shweta"
    // url: "https://api.github.com/users/${username}"
  });
}
