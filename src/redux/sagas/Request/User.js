import axios from "axios";

export function requestGetUser() {
  return axios.request({
    method: "get",
    // url: "https://api.github.com/users/shweta30g"
    url: "https://api.github.com/users/${username}"
  });
}
