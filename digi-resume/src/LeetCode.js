import React, { useEffect, useState } from 'react'

const LeetCode = () => {
    const [submission , setSubmissions] = useState();
    const username = "manosundar"
    const getData = async ()=>{
        const query = `
        { 
            matchedUser(username: "${username}") 
            {
                username
                submitStats: submitStatsGlobal 
                {
                    acSubmissionNum 
                    {
                        difficulty
                        count
                        submissions
                    }
                }
            }
        }
      `;
       
       
        const data = await fetch("https://leetcode.com/graphql?query="+query);
        const json = await data.json();
        console.log(json)
        setSubmissions(json.data.matchedUser.submitStats);
    }
    useEffect(()=>
    {
        getData();
    },[])
    return submission == null ? <h1>Loading...</h1>: 
   (
    <div>
         <h1>{submission.acSubmissionNum[0].difficulty}</h1>
      
    </div>
  )
}

export default LeetCode