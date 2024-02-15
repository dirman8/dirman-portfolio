import { useState } from "react";
import styles from "./Nav.module.css";

export default function Nav({ handleNavClick }) {
	const [isOpen, setIsOpen] = useState(false);
	console.log("isOpen: ", isOpen);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="w-full bg-customTeal fixed top-0 z-50">
			<div className="flex flex-row max-w-6xl h-14 sm:h-20 mx-auto justify-between text-xl sm:text-2xl">
				<div className="flex items-center ml-4 my-auto hidden sm:block">
					<a>Sudirman Alimuddin</a>
				</div>
				<div className="block my-auto ml-4 sm:hidden">
					<img src="/dirmandev-5.png " alt="" />
				</div>

				{/* Nav Menu */}
				<div className={`${styles.container} ${isOpen ? styles.active : ""}`}>
					<a href="#" goto="about" className={`${styles.navLink} ${isOpen ? styles.active : ""}`} onClick={handleNavClick}>
						HOME
					</a>
					<a href="#" goto="projects" className={styles.navLink} onClick={handleNavClick}>
						PROJECTS
					</a>
					{/* <a className={styles.navLink}>ARTICLES</a> */}
					<a href="#" goto="contact" className={styles.navLink} onClick={handleNavClick}>
						CONTACT
					</a>
				</div>

				{/* Hamburger Menu */}
				<button className="w-8 h-8 mr-4 my-auto cursor-pointer sm:hidden" onClick={toggleMenu}>
					<span className="block bg-black w-6 h-1 my-1 mx-auto"></span>
					<span className="block bg-black w-6 h-1 my-1 mx-auto"></span>
					<span className="block bg-black w-6 h-1 my-1 mx-auto"></span>
				</button>
			</div>
			<div className="h-1 w-full bg-customBlack "></div>
		</nav>
	);
}
