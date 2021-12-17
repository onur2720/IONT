
import React from "react";

//dette er data om monumentene som vi looper igjennom viser i views inne på Explorescreen, ikke alle properties er implementert i den endelige MVP
const previewData = [
    {
        id: "1",
        image: require('../images/lillehavfr.jpeg'),
        title:'The Little Mermaid',
        pay: 'Free',
        rating: '4.6',
        time: 'Open',
        description: "The little Mermaid is a monument on the west-coast of Copenhagen, a monument trully to be seen.",
        website: "http://www.mermaidsculpture.dk/"
    },
    {
        id: "2",
        image: require('../images/tivoli.jpeg'),
        title:'Tivoli',
        pay: '10-40€',
        rating: '3.2',
        time: 'Open until 7pm',
        description:"Tivoli is one the largest amusement parks in Denmark, located in the heart of Copenhagen. This park is suitable for both children and adults, and offer a variety of rides and activities ",
        website: "https://www.tivoli.dk/"
    },
    {
        id: "3",
        image: require('../images/giants.png'),
        title:'Forgotten Giants',
        pay: 'Free',
        rating: '4.0',
        time: 'Open',
        description: "The Forgotten Giants are found on the east outside of main Copenhagen and is a park where you can both wander around and do activities in, perfect for all age types.",
        website: "https://thomasdambo.com/"
    },
    {
        id: "4",
        image: require('../images/amal.jpeg'),
        title:'Amalienborg Palace',
        pay: 'Free',
        rating: '3.0',
        time: 'Open until 5pm',
    }
];

export default previewData;
