import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "./components/card/Card";

export default function Home() {
  return (
    <>
      <Head />
      <div className="body-component container">
        <Card />
      </div>
    </>
  );
}
