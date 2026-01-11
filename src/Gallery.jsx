import React from "react";
import Card from "./Card";

const cardsData = [
    {
        id: 1,
        title: 'Beautiful Sunset',
        description: 'A stunning sunset over the mountains.',
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 2,
        title: 'City Lights',
        description: 'Night view of a bustling city.',
        imageUrl: 'https://images.unsplash.com/photo-1494526585095-c4185f1d6c7d?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 3,
        title: 'Forest Path',
        description: 'A peaceful walk through the forest.',
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=60'
    }
];

const Gallery = () => {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
            }}>
            {cardsData.map(card => (
                <Card 
                key={card.id} 
                title={card.title} 
                description={card.description} 
                imageUrl={card.imageUrl} 
                />
            ))}
        </div>
    );
}; 

export default Gallery;