import axios from "axios";

const apiLoginURL =
  "https://projeto-escola.herokuapp.com/postgres/professor/autenticar/";

const authService = {
  async authenticate(nome, senha) {
    const endpoint = `${apiLoginURL}${nome}/${senha}`;
    return axios.get(endpoint, () => {
      console.log("Encontrou");
    });
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
