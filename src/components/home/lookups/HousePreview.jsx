import React from 'react';
import './HousePreview.css'; // Assuming you have a CSS file for styling

const HousePreview = ({ house, onClose }) => {
    return (
        <div className="house-preview-modal">
            <div className="house-preview-content">
                <button className="house-preview-close" onClick={onClose}>✖</button>
                <img src={house.photo} alt={house.name} className="house-preview-image" />
                <div className="house-preview-details">
                    <h2 className="house-preview-title">{house.name}</h2>
                    <p className="house-preview-location">{house.city}, {house.state}</p>
                    <ul className="house-preview-features">
                        <li>Available Units: <strong>{house.availableUnits}</strong></li>
                        <li>WiFi: <strong>{house.wifi ? 'Yes' : 'No'}</strong></li>
                        <li>Laundry: <strong>{house.laundry ? 'Yes' : 'No'}</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HousePreview;
