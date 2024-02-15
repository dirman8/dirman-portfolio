import { username4 } from '../constant/username';
import { useEffect, useState } from 'react';

const PetugasDapil4 = () => {
    const usernames = username4.map(item => item.username);

    const [hasil, setHasil] = useState({});
    const [isLoading, setIsLoading] = useState(true); // State to indicate loading status

    const getTotalInput = async (username) => {
        try {
            const url = `https://data-collector-server-073fb68b758e.herokuapp.com/api/username?field1=username&field2=${username}&field3=username`;
            const response = await fetch(url);
            const responseData = await response.json();
            const length = responseData.length;
            return length;
        } catch (error) {
            console.error("Error calling API:", error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const results = {};
            for (const username of usernames) {
                const length = await getTotalInput(username);
                results[username] = length;
            }
            setHasil(results);
            setIsLoading(false); // Set loading status to false after fetching data
        };

        fetchData();
    }, [usernames]);

    return (
        <div className="flex flex-col items-center justify-center text-gray-800 mt-6">
            <h1 className="text-center text-4xl mb-4">PROGRESS INPUT MASING-MASING USER</h1>
            {isLoading ? ( // Show loading indicator while data is being fetched
                <p className='text-2xl mt-5'>Loading...</p>
            ) : (
                <div className="flex flex-col items-center text-2xl">
                    {Object.entries(hasil).map(([username, length], index) => (
                        <div key={index}>
                            <h1>{username}: {length}</h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PetugasDapil4;
