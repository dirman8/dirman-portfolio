import { ExcelExportData } from "../constant/excelData.js";
import ExportExcel from "../lib/excelexport.js";
const TryExcel = () => {
    return (
        <div>
            <ExportExcel excelData={ExcelExportData} fileName={"Excel File 1"} />
        </div>
    )
}

export default TryExcel;