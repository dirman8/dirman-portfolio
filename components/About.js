import Image from "next/image";

const About = () => {
	const widthPercentage = 0.8 * 727;
	const heightPercentage = 0.8 * 800;
	const imageStyle = {
		marginLeft: "auto",
		marginRight: "0",
	};

	return (
		<div className="max-w-7xl h-4/5 mx-auto">
			<div className="md:flex w-full">
				{/* Atur margin/padding agar saat medium content tidak terlalu kecil */}
				<div className="w-6/12 m-auto md: w-5/6">
					<h1 className="text-5xl mb-10 leading-124">
						Hello,I'm Sudirman.
						<br />
						I'm Front-End Developer.
					</h1>
					<h3 className="text-3xl">
						I build Website and Web Application with one of best and most popular Javascript Framework, React.
						<br />
						<br />
						For Company Profile and Blog Sites I love using NextJS because its Speed and SEO Friendly.
						<br />
					</h3>
				</div>
				<div className="w-6/12 md: w-5/6">
					<div className="mx-auto">
						<Image src="/dirman.png" alt="Dirman's Foto" width={widthPercentage} height={heightPercentage} style={imageStyle} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
