import Image from "next/image";
import styles from "./Projects.module.css";

const Projects = () => {
	return (
		<div id="projects" className="max-w-6xl mx-auto mt-10 pt-10">
			<div className="font-futuramdbt mb-4 pb-4 text-center text-3xl sm:text-4xl font-medium text-white ">PROJECTS</div>
			<div className="font-futuraltbt mb-8 items-center flex flex-col lg:flex-row ">
				<div className="w-3/4 h-auto lg:w-1/2">
					<div className={styles.overlay}>
						<h2>Dev Buddy Apps</h2>
					</div>
					<img src="/dev-buddy.png" alt="web project" />
					<div className={styles.bottomOverlay}>
						<a className="px-3 py-2 border-4 border-indigo-800 rounded-md border-opacity-80" href="https://devbuddy.vercel.app/">
							LEARN MORE ...
						</a>
					</div>
				</div>
				<div className="w-3/4 ml-5 my-auto mt-3 lg:mt-0 lg:w-1/2">
					<h1 className="text-3xl sm:text-4xl text-center mb-6">Dev Buddy</h1>
					<p className="text-xl mb-4">This App build to help Developer save their useful Snippets, so they can search it whenever they need it.</p>
					<p className="text-xl mb-4">Build with Next JS and Algolia as search platform make this app fast and powerful search machine.</p>
					<p className="text-xl">Masonry grid layout library make the display like card floating.</p>
				</div>
			</div>

			<div className="flex flex-col font-futuraltbt mb-8 items-center lg:flex-row">
				<div className="hidden w-3/4 ml-5 my-auto lg:block lg:w-1/2">
					<h1 className="text-3xl sm:text-4xl text-center mb-6">Amazon Clone</h1>
					<p className="text-xl mb-4">NextJS Amazon Clone featuring Stripe integration for seamless payments.</p>
					<p className="text-xl mb-4">Utilizes Firestore for product database and Next Auth for secure authentication.</p>
					<p className="text-xl mb-4">A minimalist yet comprehensive e-commerce solution, exemplifying essential online store functionalities.</p>
				</div>
				<div className="w-3/4 h-auto lg:w-1/2">
					<div className={styles.overlay}>
						<h2>Amazon Clone</h2>
					</div>
					<img src="/amazon-clone.png" alt="iphone" />
					<div className={styles.bottomOverlay}>
						<a className="px-3 py-2 border-4 border-indigo-800 rounded-md border-opacity-80" href="https://amazone-clone-brown.vercel.app/">
							LEARN MORE ...
						</a>
					</div>
				</div>
				<div className="block w-3/4 ml-5 mt-3 lg:hidden lg:w-1/2 my-auto">
					<h1 className="text-3xl sm:text-4xl text-center mb-6">Amazon Clone</h1>
					<p className="text-xl mb-4">NextJS Amazon Clone featuring Stripe integration for seamless payments.</p>
					<p className="text-xl mb-4">Utilizes Firestore for product database and Next Auth for secure authentication.</p>
					<p className="text-xl mb-4">A minimalist yet comprehensive e-commerce solution, exemplifying essential online store functionalities.</p>
				</div>
			</div>

			<div className="font-futuraltbt mb-8 items-center flex flex-col lg:flex-row">
				<div className="w-3/4 h-auto lg:w-1/2">
					<div className={styles.overlay}>
						<h2>Medium Clone</h2>
					</div>
					<img src="/medium-clone.png" alt="phone" />
					<div className={styles.bottomOverlay}>
						<a className="px-3 py-2 border-4 border-indigo-800 rounded-md border-opacity-80" href="https://mediumclone-livid.vercel.app/">
							LEARN MORE ...
						</a>
					</div>
				</div>
				<div className="w-3/4 ml-5 my-auto mt-3 lg:mt-0 lg:w-1/2">
					<h1 className="text-4xl text-center mb-6">Medium Clone</h1>
					<p className="text-xl mb-4">Built using NextJS, this app ensures top-notch code quality with Typescript integration.</p>
					<p className="text-xl mb-4">Styled with Tailwind for readability and fast loading.</p>
					<p className="text-xl">Includes Sanity CMS for easy article submission and editing.</p>
				</div>
			</div>
		</div>
	);
};

export default Projects;
