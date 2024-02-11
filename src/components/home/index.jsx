import React, { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import HomeHeader from "./modules/templates/HomeHeader";
import HousesList from './modules/entities/wrapper';
import HousePreview from "./lookups/HousePreview";
import './Home.css'; // Ensure you have this CSS file

const Home = () => {
    const [selectedHouse, setSelectedHouse] = useState(null);
    const { currentUser } = useAuth();

    const handleHouseClick = (house) => {
        setSelectedHouse(house);
    };

    return (
        <>
            <HomeHeader />
            <div className="home-container">
                <div className='greeting text-2xl font-bold pt-5'>
                    Hello {currentUser.displayName ? currentUser.displayName : ""}.
                    See our selected listing! Just for you...
                </div>
                <HousesList onHouseClick={handleHouseClick} />
                {selectedHouse && (
                    <div className="house-preview-container">
                        <HousePreview house={selectedHouse} onClose={() => setSelectedHouse(null)} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
