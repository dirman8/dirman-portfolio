import styles from "./Nav.module.css";

export default function Nav() {
	return (
		<nav className="w-full bg-customTeal">
			<div className=" max-w-7xl h-16 mx-auto  flex flex-row justify-between text-2xl">
				<div className="flex items-center">
					<a>Sudirman Alimuddin</a>
				</div>
				<div className={styles.container}>
					<a className={styles.navLink}>HOME</a>
					<a className={styles.navLink}>ABOUT</a>
					<a className={styles.navLink}>PORTOFOLIO</a>
					<a className={styles.navLink}>BLOG</a>
					<a className={styles.navLink}>CONTACT</a>
				</div>
			</div>
			<div className="h-1 w-full bg-customBlack "></div>
		</nav>
	);
}
