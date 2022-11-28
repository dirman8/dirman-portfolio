import Image from "next/image";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className="pt-24 pb-32 bg-slate-100 w-full">
      <div className="pb-4 text-center text-4xl font-medium text-gray-700 ">PROJECTS</div>
      <div className="m-auto mb-8 bg-gray-700 h-1 w-20  "></div>

      <div className={styles.container}>
        <div className="m-auto flex flex-wrap">
          <div className={styles.image}>
            <div className={styles.overlay}>
              <h2>Quote Generator</h2>
              <h4>Javascript</h4>
            </div>
            <img src="/iphone.jpg" alt="iphone" />
            <div className={styles.bottomOverlay}>
              <a className="px-2 py-1 border-4 border-pink-600 rounded-md border-opacity-80" href="https://dirman8.github.io/Quote-Generator/">
                LEARN MORE
              </a>
            </div>
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
    </div>
  );
}

export default Projects