import { useRouter } from "next/router";
import { React, useState } from "react";
import authService from "../../../services/auth.service";
// import { bounce, pulse } from "react-animations";

function Card() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  async function fazerLogin(event) {
    event.preventDefault();
    let data = {
      name: nome,
      password: senha,
    };
    try {
      let resposta = await authService.authenticate(
        data["name"],
        data["password"]
      );
      console.log("resposta:", resposta.data);
      authService.setLoggedUser(resposta.data);
      router.push("/login");
    } catch (error) {
      console.log(error);
      alert("Erro ao efetuar login");
    }
  }

  function cadastrar() {
    console.log("Cadastrar");
  }

  const router = useRouter();

  return (
    <div className="card">
      <h2>Login</h2>
      <div className="inputs">
        <div className="name"></div>
        <input
          className="valueUser"
          value={nome}
          type="text"
          placeholder="Usuário"
          onChange={(e) => setNome(e.target.value)}
        ></input>
        <input
          className="valuePassword"
          value={senha}
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
        ></input>
      </div>
      <p>Esqueceu a senha?</p>
      <div className="butons">
        <button type="submit" className="entrar" onClick={fazerLogin}>
          Entrar
        </button>
        <button type="submit" className="cadastrar" onClick={cadastrar}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default Card;
