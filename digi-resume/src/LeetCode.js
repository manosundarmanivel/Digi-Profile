import React, { useEffect, useState } from "react";

const LeetCode = () => {
  const [submission, setSubmissions] = useState();
  const [website, setWebsite] = useState();
  const username = "manosundar";

  const getData = async () => {
    const query = `
        { 
            
            matchedUser(username: "${username}") 
            {
                twitterUrl
                githubUrl
                linkedinUrl
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
                profile: profile
                {
                    aboutMe
                    categoryDiscussCount
                    categoryDiscussCountDiff
                    company
                    countryName
                    jobTitle
                    postViewCount
                    postViewCountDiff
                    ranking
                    realName
                    reputation
                    reputationDiff
                    school
                    skillTags
                    solutionCount
                    solutionCountDiff
                    userAvatar
                   



                }
                languageProblemCount: languageProblemCount
                {
                  languageName
                  problemsSolved
                }
                problemsSolvedBeatsStats: problemsSolvedBeatsStats
                {
                  difficulty
                  percentage
                }
                


                
            }
            recentAcSubmissionList(username:"${username}")
                {
                  id
                  title
                  timestamp
                }
            streakCounter: streakCounter
            {
              currentDayCompleted
              daysSkipped
              streakCount
            }
        }
      `;

    const data = await fetch("https://leetcode.com/graphql?query=" + query);
    const json = await data.json();
    console.log(json);
    setSubmissions(json.data.matchedUser);
  };
  useEffect(() => {
    getData();
  }, []);
  return submission == null ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>{submission.submitStats.acSubmissionNum[0].difficulty}</h1>
    </div>
  );
};

export default LeetCode;
