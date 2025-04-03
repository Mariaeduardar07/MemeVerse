import React from "react";
import styles from "./memes.module.css";
import Header from "../components/header";
import Footer from "../components/footer";


export default function PaginaMemes() {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  );
}
