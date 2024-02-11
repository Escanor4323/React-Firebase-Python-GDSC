import React, { useEffect, useState } from 'react';
import RealtimeDatabase from "../../../../firebase/realtimeDatabase";
import House from "../models/House";
import './HousesList.css';

const HousesList = ({ onHouseClick }) => { // Accept onHouseClick prop
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const unsubscribe = RealtimeDatabase.listenData('houses', (data) => {
            const housesArray = data ? Object.keys(data).map(key => ({...data[key], id: key})) : [];
            setHouses(housesArray);
        });
        return () => unsubscribe(); // Cleanup subscription
    }, []);

    if (!houses.length) {
        return <div className="houses-list-loading">Loading...</div>; // Added class for potential styling
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {houses.map(house => (
                    // Pass onHouseClick to House component, triggering it with the selected house's data
                    <div key={house.id} className="col-sm-6 col-md-4 col-lg-3 mb-4" onClick={() => onHouseClick(house)}>
                        <House house={house} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HousesList;
