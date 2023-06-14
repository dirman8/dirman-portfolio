import Image from "next/image";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div className="pt-24 pb-32 bg-white">
      <div className="pb-4 text-center text-4xl font-medium text-gray-700 ">BLOG</div>
      <div className="m-auto mb-8 bg-gray-700 h-1 w-20  "></div>

      <div className={styles.container}>
          <div className={styles.image}>
               <img  src="/iphone.jpg" alt="iphoe" />
          </div>
          <div className={styles.image}>
               <img src="/imac.jpg" alt="imac" />
          </div>
          <div className={styles.image}>
               <img src="/apps.jpg" alt="apps" />
          </div>
          <div className={styles.image}>
               <img src="/navigation.jpg" alt="navigation" />
          </div>
      </div>
      {/* <div className="inline-block">
        <Image fill src="/iphone.jpg" alt="iphone"/>
        <Image fill src="/imac.jpg" alt="imac"/>
        <Image fill src="/apps.jpg" alt="apps"/>
        <Image fill src="/navigation.jpg" alt="navigation"/>
        <Image fill src="/smart-watch.jpg" alt="smart watch"/>
        <Image fill src="/woman.jpg" alt="woman"/>
        <Image fill src="/phone.jpg" alt="phone"/>
        <Image fill src="/iphone.jpg" alt="iphone"/>
        <Image fill src="/apps.jpg" alt="apps"/>
      </div> */}
    </div>
  );
};

export default Blog;
