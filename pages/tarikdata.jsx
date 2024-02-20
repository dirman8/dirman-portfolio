import {useEffect, useState} from "react";

const TarikData = () => {
    const [hasil, setHasil] = useState();
    // console.log("hasil :", hasil)
    const parties = [ "PKB", "GERINDRA", "PDIP", "GOLKAR", "NASDEM", "PARTAI_BURUH", "GELORA", "PKS", "PKN", "HANURA", "PARTAI_GARUDA", "PAN", "PBB", "DEMOKRAT", "PSI", "PERINDO", "PPP", "PARTAI_UMMAT" ];

    useEffect(() => {
      const fetchHasil = async () => {
          let total
          try {
            // const res = await fetch("https://data-collector-server-073fb68b758e.herokuapp.com/api/get?field1=DEMOKRAT0&field2=0&field3=DEMOKRAT1");
            const res = await fetch("http://localhost:3001/api/getpusat?field1=dapil&field2=5");
            const results = await res.json();
            console.log("Result:", results)
            setHasil(results)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchHasil();
    }, [])

    const sumValuesByPattern = (partai, item) => {
        const filteredKeys = Object.keys(item).filter((key) => key.startsWith(partai));
        const sum = filteredKeys.reduce((acc, key) => acc + item[key], 0);
        return sum;
    };

    // let totalSum = 0;

    return (
        <div className="text-xl text-black">
            {parties.map((partai, index)=>{
                // let sum = 0;
                // hasil?.forEach((item) => {
                //     sum += sumValuesByPattern(partai, item);
                // })
                // totalSum += sum;
                return(
                <div key={index}>
                    {hasil?.map((item, index) => (
                        <p key={index} className="text-xl text-red-500">{item.dapil},{item.kecamatan},{item.kelurahan},{item.nomertps},{partai},{sumValuesByPattern(partai, item)}</p>
                        // <p key={index} className="text-xl text-red-500">{item.dapil},{item.kecamatan},{item.kelurahan},{item.nomertps},{item.sstidaksah}</p>
                    ))}
                    {/* <p className="text-xl text-green-500">Total for {partai}: {sum}     {Math.floor(sum/totalSum)*100}%</p> */}
                </div>
                );
            })}
            {/* <p className="text-xl text-red-500">Total Suara Sah : {totalSum}</p> */}
        </div>
    )
}

export default TarikData;