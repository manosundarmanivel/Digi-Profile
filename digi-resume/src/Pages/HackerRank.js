import React, { useEffect } from 'react';

const HackerRank = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.hackerrank.com/rest/contests/master/hackers/manosundarm_21c1/profile");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []); 

    return (
        <div>HackerRank</div>
    );
};

export default HackerRank;
