import React, { useEffect } from 'react'

const Topcoder = () => {
  useEffect(()=>{
const fetchData = async () =>{
  try{
    const response = await fetch("https://api.topcoder.com/v5/members/ecnerwal");
    if(!response.ok)
    {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    console.log(data);
  }
  catch (error)
  {
    console.error("Error in fectching data");
  }
};
fetchData();
  },[])
  return (
    // https://api.topcoder.com/v5/members/ecnerwal
    <div>Topcoder</div>
  )
}

export default Topcoder