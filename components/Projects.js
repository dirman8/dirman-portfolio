import Image from "next/image";
import styles from "./Projects.module.css";

const Projects = () => {
	return (
		<div className="max-w-7xl mx-auto ">
			<div className="pb-4 text-center text-4xl font-medium text-white ">PROJECTS</div>
			<div className="m-auto mb-8 h-1 w-20  "></div>

			<div className={styles.container}>
				<div className={styles.image}>
					<div className={styles.overlay}>
						<h2>Quote Generator</h2>
						<h4>Javascript</h4>
					</div>
					<img src="/web-project.jpg" alt="web project" />
					<div className={styles.bottomOverlay}>
						<a className="px-2 py-1 border-4 border-pink-600 rounded-md border-opacity-80" href="https://dirman8.github.io/Quote-Generator/">
							LEARN MORE
						</a>
					</div>
				</div>
				<div className="w-1/2">
					<h1 className="text-2xl ">First Project</h1>
					<p className="text-xl">Lorem ipsum dolor sit amet consectetur. Porttitor aliquam quis diam vestibulum malesuada enim egestas. Sed arcu lacinia volutpat viverra in. Integer etravida feugiat et. Ut dignissim mauris at at.</p>
				</div>
			</div>

			<div className={styles.container}>
				<div className="w-1/2">
					<h1 className="text-2xl ">First Project</h1>
					<p className="text-xl">Lorem ipsum dolor sit amet consectetur. Porttitor aliquam quis diam vestibulum malesuada enim egestas. Sed arcu lacinia volutpat viverra in. Integer etravida feugiat et. Ut dignissim mauris at at.</p>
				</div>
				<div className={styles.image}>
					<div className={styles.overlay}>
						<h2>Navigation App</h2>
						<h4>React & Map Lib</h4>
					</div>
					<img src="/navigation.jpg" alt="iphone" />
					<div className={styles.bottomOverlay}>
						<a className="px-2 py-1 border-4 border-pink-600 rounded-md border-opacity-80" href="https://dirman8.github.io/Quote-Generator/">
							LEARN MORE
						</a>
					</div>
				</div>
			</div>

			<div className={styles.container}>
				<div className={styles.image}>
					<div className={styles.overlay}>
						<h2>Mobile App</h2>
						<h4>React Native</h4>
					</div>
					<img src="/phone.jpg" alt="phone" />
					<div className={styles.bottomOverlay}>
						<a className="px-2 py-1 border-4 border-pink-600 rounded-md border-opacity-80" href="https://dirman8.github.io/Quote-Generator/">
							LEARN MORE
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
