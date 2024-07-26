// src/components/PlayerCard.js
import React from 'react';

const PlayerCard = ({ image, name }) => {
    return (
        <div className="text-white text-center">
            <img alt={name} src={image} className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10" />
            <div>{name}</div>
        </div>
    );
};

export default PlayerCard;
