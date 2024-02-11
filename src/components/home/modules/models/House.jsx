import React from 'react';
import './style.css';

const House = ({ house, onClick }) => {
    // Optional: Fallback for any missing photo with a default image
    const defaultImage = '/path-to-default-image/default-house.jpg';

    const handleClick = () => {
        if (onClick && typeof onClick === 'function') {
            onClick(house);
        }
    };

    return (
        <div className="card house-card" onClick={handleClick}>
            <img src={house.photo || defaultImage} className="card-img-top house-image"
                 alt={`${house.name} - ${house.city}, ${house.state}`}/>
            <div className="card-body house-body">
                <h5 className="card-title house-title">{house.name}</h5>
                <p className="card-text house-text">{`${house.city}, ${house.state}`}</p>
                <ul className="list-unstyled house-list">
                    <li className="house-list-item">Available Units: {house.availableUnits}</li>
                    <li className="house-list-item">WiFi: {house.wifi ? 'Yes' : 'No'}</li>
                    <li className="house-list-item">Laundry: {house.laundry ? 'Yes' : 'No'}</li>
                </ul>
            </div>
        </div>
    );
};

export default House;
