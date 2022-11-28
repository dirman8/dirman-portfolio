import Image from "next/image";
import sky from "../public/sky.jpg"
import styles from "../styles/Fill.module.css";

const Fill = () => (
  <div className={styles.container}>
   <Image 
   alt="sample-foto" 
   src={sky}
    contain
    sizes="100%" 
    style=
    {{
      objectFit: "none",
    }}
    />
  </div>
);

export default Fill
