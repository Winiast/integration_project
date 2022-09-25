import axios from "axios";

const apiLoginURL = "https://projeto-escola.herokuapp.com/";

const authService = {
  async authenticate(data) {
    const endpoint = `${apiLoginURL}/auth/sign-in`;
    return axios.post(endpoint, data);
  },

  setLoggedUser(data) {
    let parsedData = JSON.stringify(data);
    localStorage.setItem("user", parsedData);
  },

  getLoggedUser() {
    let data = localStorage.getItem("user");
    if (!data) return null;
    try {
      let parsedData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      console.error();
      return null;
    }
  },
};

export default authService;
