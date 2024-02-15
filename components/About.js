import Image from "next/image";

const About = () => {
	const widthPercentage = 0.5 * 727;
	const heightPercentage = 0.5 * 800;
	const imageStyle = {
		marginLeft: "auto",
		marginRight: "0",
	};

	return (
		<div id="about" className=" max-w-6xl h-4/5 mx-auto px-10 pt-20 ">
			<div className="flex flex-col lg:flex-row">
				{/* Atur margin/padding agar saat medium content tidak terlalu kecil */}
				<div className="font-futuramdbt text-center full sm:w-5/6 m-auto order-2 lg:order-1 lg:w-7/12">
					<h1 className="text-3xl sm:text-5xl my-10 leading-124">
						Hello, I am Sudirman
						<br />I am Front-End Developer
					</h1>
					<h3 className="text-base sm:text-2xl">
						I build Website and Web Application with one of best and most popular Javascript Framework, React.
						<br />
						For Company Profile and Blog Sites I love using NextJS because its Speed and SEO Friendly.
						<br />
					</h3>
				</div>
				<div className="w-6/12 mx-auto order-1 lg:order-2">
					<div className="mx-auto">
						<Image src="/dirman.png" alt="Dirman Foto" width={widthPercentage} height={heightPercentage} style={imageStyle} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
