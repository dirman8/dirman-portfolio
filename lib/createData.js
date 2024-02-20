const CrateData = (hasilGabungan) => {
	const parties = ["PKB", "GERINDRA", "PDIP", "GOLKAR", "NASDEM", "PARTAI_BURUH", "GELORA", "PKS", "PKN", "HANURA", "PARTAI_GARUDA", "PAN", "PBB", "DEMOKRAT", "PSI", "PERINDO", "PPP", "PARTAI_UMMAT"];
	// Mendapatkan keys masing-masing partai
	const partiesKeys = (tps) => {
		// if (tps && tps.length > 0) {
		return parties.flatMap((party) => {
			const filteredKeys = Object.keys(tps).filter((key) => key.startsWith(party));
			return filteredKeys.concat(`total${party}`);
		});
		// } else {
		// 	return [];
		// }
	};

	const readyData = hasilGabungan.map((tps) => {
		const tpsPlus = { ...tps, kosong: 0 };
		const {
			kosong,
			dapil,
			dispenggunalaki,
			dispenggunaperempuan,
			dptlaki,
			dptperempuan,
			kecamatan,
			kelurahan,
			nomertps,
			phpdpklaki,
			phpdpkperempuan,
			phpdptblaki,
			phpdptbperempuan,
			phpdptlaki,
			phpdptperempuan,
			sskembali,
			sspakai,
			sssah,
			ssterima,
			sstidakpakai,
			sstidaksah,
			totalDEMOKRAT,
			totalGELORA,
			totalGERINDRA,
			totalGOLKAR,
			totalHANURA,
			totalNASDEM,
			totalPAN,
			totalPARTAI_BURUH,
			totalPARTAI_GARUDA,
			totalPARTAI_UMMAT,
			totalPBB,
			totalPDIP,
			totalPERINDO,
			totalPKB,
			totalPKN,
			totalPKS,
			totalPPP,
			totalPSI,
			totaldispengguna,
			totaldisterdaftar,
			totaldpt,
			totalphp,
			totalphpdpk,
			totalphpdpt,
			totalphpdptb,
			totalphplaki,
			totalphpperempuan,
			totalss,
			username,
		} = tps;

		const arrIdentitasTpsObj = [
			{ nomertps },
			{ kosong },
			{ dptlaki },
			{ dptperempuan },
			{ totaldpt },
			{ kosong },
			{ phpdptlaki },
			{ phpdptperempuan },
			{ totalphpdpt },
			{ phpdptblaki },
			{ phpdptbperempuan },
			{ totalphpdptb },
			{ phpdpklaki },
			{ phpdpkperempuan },
			{ totalphpdpk },
			{ totalphplaki },
			{ totalphpperempuan },
			{ totalphp },
			{ kosong },
			{ ssterima },
			{ sspakai },
			{ sskembali },
			{ sstidakpakai },
			{ kosong },
			{ dispenggunalaki },
			{ dispenggunaperempuan },
			{ totaldispengguna },
			{ kosong },
			{ kosong },
		];

		const arrIdentitasTpsVal = arrIdentitasTpsObj.flatMap((obj) => {
			return Object.values(obj);
		});

		const arrKeys = partiesKeys(tps);
		const arrHasil = arrKeys.map((keys) => {
			return tps[keys];
		});

		const arrSahObj = [{ kosong }, { sssah }, { sstidaksah }, { totalss }];

		const arrSahVal = arrSahObj.flatMap((obj) => {
			return Object.values(obj);
		});

		const arrTotal = [...arrIdentitasTpsVal, ...arrHasil, ...arrSahVal];

		return arrTotal;
	});

	return readyData;
};

export default CrateData;
