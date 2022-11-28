import styles from "./Nav.module.css";

export default function Nav () {
     return (
       <nav className="w-full">
         <div className=" h-14 bg-gray-800 flex flex-col items-left">
           <div className={styles.container}>
             <a className={styles.navLink}>HOME</a>
             <a className={styles.navLink}>ABOUT</a>
             <a className={styles.navLink}>PORTOFOLIO</a>
             <a className={styles.navLink}>BLOG</a>
             <a className={styles.navLink}>CONTACT</a>
           </div>
         </div>
        <div className="h-1 w-full bg-blue-400 "></div>
       </nav>
     );
}