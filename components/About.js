import Image from "next/image";

const About = () => {
  return (
    <div className="pt-24 pb-32 max-w-7xl md:px-16">
      <div className="pb-4 text-center text-4xl font-medium text-gray-700 ">ABOUT</div>
      <div className="m-auto mb-8 bg-gray-700 h-1 w-20  "></div>
      <div className="md:flex w-full">
        {/* Atur margin/padding agar saat medium content tidak terlalu kecil */}
        <div className="w-6/12 mx-auto relative pt-2 pb-6 md: w-5/6">
          <Image src="/sample-foto.jpg" alt="Sample Foto" width={960} height={636} />
        </div>
        <div className="w-6/12 mx-auto pl-4 pt-2 md: w-5/6">
          <p>
            Hi...!.<br />
            I am Front-End Developer.<br /> <br />

            I build Website and Web Application with one of best and most popular Javascript Framework, React.<br /><br />
            
            For Company Profile and Blog Sites I love using NextJS because its Speed and SEO Friendly.<br /><br />

          </p>
        </div>
      </div>
    </div>
  );}

export default About
