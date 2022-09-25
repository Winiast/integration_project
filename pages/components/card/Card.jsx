import { useRouter } from "next/router";
import { React, useState } from "react";
// import { bounce, pulse } from "react-animations";

function Card() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin() {
    if (nome == "Gustavo" && senha == "12345") {
      let generateToken = "12092001";
      router.push("/login");
    } else {
      console.log("Login incorreto!");
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
