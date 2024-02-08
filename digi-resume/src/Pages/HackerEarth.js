import React, { useEffect } from 'react'

const HackerEarth = () => {

    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await fetch("https://www.hackerearth.com/profiles/api/lboris/submission-activity");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data); 
            } catch(error)
            {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    },[]);


  return (
    <div>HackerEarth</div>
  )
}

export default HackerEarth