import React from "react";
import styles from "./memes.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import HeroSection from "../components/herosection";
import InteractionBar from "../components/interactionBar";
import Categories from "../components/categories";
import Feed from "../components/feed";

export default function PaginaMemes() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
            <HeroSection />
            <Categories />
            <Feed />
        </div>    
      </div>
      <div className={styles.feedGrid}>
        <InteractionBar meme={meme}/>
      </div>
      <Footer />

    </div>
  );
}
