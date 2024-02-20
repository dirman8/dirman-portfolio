import {useEffect, useState} from "react";
import CreateData from "../lib/createData";
import * as XLSX from 'xlsx';
import Select from 'react-select';
import { kelurahan as allKelurahan, kecamatan as allKecamatan } from '../constant/dataKelurahan';

const TpsInput = () => {
    const [kecamatanPilihan, setKecamatanPilihan] = useState({value:"Asemrowo", label:"Asemrowo"});
    const [kelurahanPilihan, setKelurahanPilihan] = useState({value:"Asemrowo", label:"Asemrowo"});
    const [hasil, setHasil] = useState();
    const [noTps, setNoTps] = useState();
    const [fetching, setFetching] = useState(false);
    console.log("noTps :", noTps)

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
        const url = `http://localhost:3001/api/tpsinput?field1=kecamatan&field2=${kec}&field3=kelurahan&field4=${kel}&exclude=_id`
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

    useEffect(() => {
          const getNomerTps = async () => {
            if (hasil) {
                const totalTps = hasil.map((item) => {
                    const nomerTps = item.nomertps
                    return "return"
                });
                setNoTps(totalTps);
            }
        };
        getNomerTps();
    }, [hasil])
    

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

        {(fetching || hasil?.length === 0) ? <p>Loading...</p> : <div className="flex flex-row px-10 mt-20 justify-evenly ">
            <p>HASIL</p>
        </div>}
        
    </div>
    )
}

export default TpsInput;