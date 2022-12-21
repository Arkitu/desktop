'use client';

import styles from "./leftbutton.module.scss";
import Image from 'next/image';

interface Props {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function LeftButton(props: Props) {
  return (
    <div className={styles.leftbutton} onClick={(e)=>{
      props.onClick(e);
    }}>
        <Image className={styles.image} src="/burger-navbar.svg" width={40} height={40} alt="burger menu to open app list"/>
    </div>
  );
}

export default LeftButton;