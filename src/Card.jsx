import React from "react";

// created a new card component
const Card = ({title, description, imageUrl}) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            width: '200px',
            padding: '10px',
            margin: '10px',
            boxShadow: '2px 2px 12px rgba(0,0,0,0.1)'
            }}>
            <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;