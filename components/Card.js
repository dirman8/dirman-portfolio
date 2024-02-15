import { useEffect } from "react";

const Card = ({ caleg, dapil, tingkat }) => {
	useEffect(() => {
		const fetchPerolehanSuara = async () => {
			try {
				const response = await fetch("http://localhost:3001/api/get?field1=DEMOKRAT0&field2=0&field3=DEMOKRAT1", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				console.log("data from Card :", data);
			} catch (error) {
				console.error("There was a problem with the fetch operation:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="w-full text-black sm:w-1/2 xl:w-1/3">
			<div className="mb-4">
				<div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
					<h1 className="text-3xl font-bold">
						{tingkat} {dapil}
					</h1>
					<p>Suara PKS (Partai) :</p>
					{caleg.map((nama, index) => {
						fetchPerolehanSuara(index);
						return (
							<p key={index}>
								{index + 1}. {nama}
							</p>
						);
					})}
					<h3>Total Suara Partai + Caleg :</h3>
				</div>
			</div>
		</div>
	);
};
export default Card;
