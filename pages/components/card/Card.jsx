import { useRouter } from "next/router";
import { React, useState } from "react";
import ReactDOM from "react-dom";

function Card() {
  const [nome, setNome] = useState("");

  function fazerLogin() {
    if (Pessoa["nome"] == "Gustavo" && Pessoa["senha"] == "12345") {
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
          value={Pessoa["nome"]}
          type="text"
          placeholder="Usuário"
          onChange={() => {
            Pessoa.key = value;
          }}
        ></input>
        <input
          className="valuePassword"
          value={Pessoa["senha"]}
          type="password"
          placeholder="Senha"
          onChange={() => {
            Pessoa.key = value;
          }}
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
