"use client";

import styles from "./navbar.module.scss";
import LeftButton from "./LeftButton/LeftButton";

function Navbar() {
  function handleLeftButtonClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    
  }
  return (
    <div className={styles.navbar}>
      <LeftButton onClick={e=>handleLeftButtonClick(e)}/>
    </div>
  );
}

export default Navbar;