import {useEffect, useState} from "react";
import CreateData from "../lib/createData";
import * as XLSX from 'xlsx';
import Select from 'react-select';
import { kelurahan as allKelurahan, kecamatan as allKecamatan } from '../constant/dataKelurahan';

const TarikDataNdcc = () => {
    const [kecamatanPilihan, setKecamatanPilihan] = useState({value:"Asemrowo", label:"Asemrowo"});
    const [kelurahanPilihan, setKelurahanPilihan] = useState({value:"Asemrowo", label:"Asemrowo"});
    const [hasil, setHasil] = useState();
    const [hasilGabungan, setHasilGabungan] = useState();
     const [fetching, setFetching] = useState(false);

    const kecamatanOptions = allKecamatan.map((kec) => ({
        value: kec,
        label: kec
    }));

    const kelurahanOptions = allKelurahan[kecamatanPilihan.value]?.map((kel) => ({
        value: kel,
        label: kel,
    }));

    const parties = [ "PKB", "GERINDRA", "PDIP", "GOLKAR", "NASDEM", "PARTAI_BURUH", "GELORA", "PKS", "PKN", "HANURA", "PARTAI_GARUDA", "PAN", "PBB", "DEMOKRAT", "PSI", "PERINDO", "PPP", "PARTAI_UMMAT" ];

// MENGAMBIL OBJECT TPS SESUAI KECAMATAN dan KELURAHAN
    const fetchHasil = async (kec, kel) => {
        let total
        const url = `https://data-collector-server-073fb68b758e.herokuapp.com/api/getndcc?field1=kecamatan&field2=${kec}&field3=kelurahan&field4=${kel}&exclude=_id`
        console.log("url :", url)
        try {
            setFetching(true);
            // const res = await fetch("https://data-collector-server-073fb68b758e.herokuapp.com/api/get?field1=DEMOKRAT0&field2=0&field3=DEMOKRAT1");
            const res = await fetch(url);
            const results = await res.json();
            setHasil(results)
            setFetching(false)
        return results
        } catch (error) {
            console.error("Error fetching data:", error);
            setFetching(false);
        }
    };

    console.log("hasil :", hasil)

    useEffect(() => {
        fetchHasil(kecamatanPilihan.value, kelurahanPilihan.value);
    }, [kecamatanPilihan, kelurahanPilihan]);

// MENGGABUNGKAN HASIL MASING-MASING CALON DENGAN TOTAL MASING-MASING PARTAI
    const sumValuesByPattern = (partai, item) => {
        const filteredKeys = Object.keys(item).filter((key) => key.startsWith(partai));
        const sum = filteredKeys.reduce((acc, key) => acc + item[key], 0);
        return sum;
    };
    useEffect(() => {
        // Menggabungkan"hasil" dengan "total masing-masing partai"
        const calculateTotals = async () => {
            if (hasil) {
                const totals = hasil.map((item) => {
                    const totalSuaraPartai = parties.map((partai) => {
                        const getTotal = sumValuesByPattern(partai, item);
                        return { [`total${partai}`]: getTotal };
                    });

                    const spreadTotalSuaraPartai = Object.assign({}, ...totalSuaraPartai);
                    const hasilGabunganTotal = {
                        ...item,
                        ...spreadTotalSuaraPartai,
                    }
                    return hasilGabunganTotal
                });
                setHasilGabungan(totals);
            }
        };
        calculateTotals();
    },[hasil])

// MEMBUAT EXCEL Per KELURAHAN
    const generateExcel = (hasilGabungan) => {
        const dataForExcelCreate = CreateData(hasilGabungan);
        console.log("dataForExcelCreate :", dataForExcelCreate)

          var aoa = dataForExcelCreate;

         var ws = XLSX.utils.aoa_to_sheet(aoa);
        /* create workbook and export */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, "SheetJSExportAOA.xlsx");
    }

    const customStyles = {
      option: (defaultStyles, state) => ({
        // You can log the defaultStyles and state for inspection
        // You don't need to spread the defaultStyles
        ...defaultStyles,
        color: state.isSelected ? "#212529" : "#fff",
        backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
      }),

      control: (defaultStyles) => ({
        ...defaultStyles,
        // Notice how these are all CSS properties
        backgroundColor: "#212529",
        padding: "10px",
        border: "none",
        boxShadow: "none",
      }),
      singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
    };
    
    return (
        <div className="pt-10 text-xl text-black">
            <div className="flex flex-row px-10 justify-evenly ">
          <div>
            <h1>Pilih Kecamatan</h1>
            <Select 
              defaultValue={""}
              onChange={setKecamatanPilihan}
              options={kecamatanOptions}
              styles={customStyles}
              />
          </div>
          <div>
            <h1>Pilih Kelurahan</h1>
            <Select 
              defaultValue={""}
              onChange={setKelurahanPilihan}
              options={kelurahanOptions}
              styles={customStyles}
              />
          </div>
        </div>
        {(fetching || hasil.length === 0) ? <p>Loading...</p> : <div className="flex flex-row px-10 mt-20 justify-evenly ">
            <button className="px-4 py-2 font-bold text-white text-gray-700 bg-blue-500 rounded hover:bg-blue-300" onClick={() => generateExcel(hasilGabungan)} disabled={fetching}>Generate Excel</button>
        </div>}
        
    </div>
    )
}

export default TarikDataNdcc;