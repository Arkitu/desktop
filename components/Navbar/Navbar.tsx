"use client";

import styles from "./navbar.module.scss";
import LeftButton from "./LeftButton/LeftButton";
import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleLeftButtonClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setIsOpen(!isOpen);
  }
  return (
    <motion.div 
      className={styles.navbar}
      animate={isOpen ? "open" : "closed"}
      variants={{
        closed: {},
        open: {
          height: "100%",
          width: "100%",
        }
      }}
    >
      <LeftButton onClick={e=>handleLeftButtonClick(e)}/>
    </motion.div>
  );
}

export default Navbar;