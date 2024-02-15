// import React, {useState, useEffect} from 'react';
// import Select from 'react-select';
// import { kelurahan, kecamatan } from '../constant/dataKelurahan';
// import { tps } from '../constant/tps';

// const Tps = () => {
//     const [kecamatanPilihan, setKecamatanPilihan] = useState({value:"Asemrowo", label:"Asemrowo"});
//     const [kelurahanPilihan, setKelurahanPilihan] = useState({value:"Asemrowo", label:"Asemrowo"});
//     const [nomerTpsPilihan, setNomerTpsPilihan] = useState(1);
//     const [tpsPerKelurahan, setTpsPerKelurahan] = useState();
//     const [tpsMasuk, setTpsMasuk] = useState();

//      const kecamatanOptions = kecamatan.map((kec) => ({
//         value: kec,
//         label: kec
//     }));

//     const kelurahanOptions = kelurahan[kecamatanPilihan.value]?.map((kel) => ({
//         value: kel,
//         label: kel,
//     }));

//     const customStyles = {
//       option: (defaultStyles, state) => ({
//         // You can log the defaultStyles and state for inspection
//         // You don't need to spread the defaultStyles
//         ...defaultStyles,
//         color: state.isSelected ? "#212529" : "#fff",
//         backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
//       }),

//       control: (defaultStyles) => ({
//         ...defaultStyles,
//         // Notice how these are all CSS properties
//         backgroundColor: "#212529",
//         padding: "10px",
//         border: "none",
//         boxShadow: "none",
//       }),
//       singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
//     };

//      // Menggenerate nomer tps sebanyak jumlah tps dari masing-masing kelurahan yang dipilih
//     const findValueByKey = (arr, key) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].hasOwnProperty(key)) {
//         return arr[i][key];
//         }
//     }
//     return undefined; // Return undefined if the key is not found in any object
//     }
//     const getNomerTps = () => {
//         let completeNumbers = [];
//         const jumlahTps = findValueByKey(tps[kecamatanPilihan.value], kelurahanPilihan.value)
//         const numbers = Array.from({ length: jumlahTps }, (_, index) => index + 1);
//         if ((kecamatanPilihan.value === "Wonocolo" && kelurahanPilihan === "Siwalan Kerto") || (kecamatanPilihan === "Sukolilo" && kelurahanPilihan === "Keputih")) {
//             numbers.push(901, 902);
//         } else if ((kecamatanPilihan.value === "Jambangan" && kelurahanPilihan === "Jambangan") || (kecamatanPilihan === "Sambikerep" && kelurahanPilihan === "Sambikerep")) {
//             numbers.push(901);
//         }
//         const stringNumbers = numbers.map(number => number.toString());
//         return stringNumbers;
//     }

//     const tpsOptions = getNomerTps().map((no) => ({
//         value: no,
//         label: no,
//     }));

//   console.log(kecamatanPilihan, kelurahanPilihan, nomerTpsPilihan);
//   console.log("getNomerTps :", getNomerTps())
//   console.log("TPS MASUK :", tpsMasuk)


//   useEffect(() => {
//     setTpsPerKelurahan(getNomerTps())
//     const url = `https://data-collector-server-073fb68b758e.herokuapp.com/api/getmany?field1=kecamatan&field2=${kecamatanPilihan.value}&field3=kelurahan&field4=${kecamatanPilihan.value}&field5=nomertps&exclude=_id`;
//     fetch(url) // Relative URL to your API route
// 			.then((response) => response.json())
// 			.then((responseData) => {
// 				console.log("responseDAta:", responseData)
//         const arrayTpsMasuk = Object.values(responseData);
//         setTpsMasuk(arrayTpsMasuk);
// 			})
// 			.catch((error) => {
// 				console.error("Error calling API:", error);
// 			});
//   },[kecamatanPilihan.value, kelurahanPilihan.value])

//     return(
//       <div className='text-gray-700'>
//         <div className="flex flex-row px-10 justify-evenly ">
//           <div>
//             <h1>Pilih Kecamatan</h1>
//             <Select 
//               defaultValue={""}
//               onChange={setKecamatanPilihan}
//               options={kecamatanOptions}
//               styles={customStyles}
//               />
//           </div>
//           <div>
//             <h1>Pilih Kelurahan</h1>
//             <Select 
//               defaultValue={""}
//               onChange={setKelurahanPilihan}
//               options={kelurahanOptions}
//               styles={customStyles}
//               />
//           </div>
//           {/* <div>
//             <h1>Pilih TPS</h1>
//             <Select 
//               defaultValue={1}
//               onChange={setNomerTpsPilihan}
//               options={tpsOptions}
//               styles={customStyles}
//             />
//           </div> */}
//         </div>

//         <div className='flex flex-row px-20 pt-5'>
//           <div >
//             {tpsPerKelurahan?.map((tps, index)=> {
//                 return (([1].includes(tps))?<div key={index} className='text-gray-800'>{`TPS ${tps}`}</div>:<div key={index} className='text-red-500'>{`TPS ${tps}`}</div>
//                 )
//             })}
//           </div>

//           <div className='ml-10'> 
//             <h1>Total TPS yang Masuk {tpsMasuk?.length} dari {tpsPerKelurahan?.length} TPS</h1>
//             <p className='mt-10 ml-20 text-3xl text-bold'>{Math.floor((tpsMasuk?.length / tpsPerKelurahan?.length) * 100)}%</p>
//           </div>
//         </div>

//     </div>
//     )
// }

// export default Tps;
