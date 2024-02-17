import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import { useEffect } from "react"; // useEffect

const ExportExcel = ({ excelData, fileName }) => {
	const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
	const fileExtension = ".xlsx";

	const exportToExcel = async (fileName) => {
		const ws = XLSX.utils.json_to_sheet(excelData);
		const wb = {
			Sheets: { data: ws },
			SheetNames: ["data"],
		};
		const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
		const data = new Blob([excelBuffer], { type: fileType });
		FileSaver.saveAs(data, fileName + fileExtension);
	};

	return (
		<div className="flex items-center justify-center text-xl text-gray-800">
			<div className="h-5 p-5 mt-10 bg-slate-600">
				<button
					onClick={() => exportToExcel(fileName)}
					className="px-4 py-2 font-bold text-gray-700 bg-blue-500 rounded hover:bg-blue-700"
				>
					Export Excel
				</button>
			</div>
		</div>
	);
};

export default ExportExcel;
