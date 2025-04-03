import React from "react";
import styles from "./memes.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import HeroSection from "../components/herosection";

export default function PaginaMemes() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
            <HeroSection />
        </div>    
      </div>
      <Footer />
    </div>
  );
}
