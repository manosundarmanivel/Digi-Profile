import React, { useEffect, useState } from "react";
import TimeAgo from "./TimeStamp";
import CircularProgress from "@mui/joy/CircularProgress";
import ReportIcon from "@mui/icons-material/Report";
import LinearProgress from "@mui/joy/LinearProgress";
const LeetCode = () => {
  const [submission, setSubmissions] = useState();
  const [problemsCount, setProblemsCount] = useState(0);
  const [problems, setProblems] = useState([]);
  const [website, setWebsite] = useState();
  const username = "manosundar";
  const value = 0;

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
    setProblems(json.data.recentAcSubmissionList);
  };

  useEffect(() => {
    getData();
  }, []);

  // const totalProblemsSolved = submission.languageProblemCount.reduce((accumulator, problem) => {
  //   return accumulator + problem.problemsSolved;
  // }, 0);

  return submission == null ? (
    <h1>Loading...</h1>
  ) : (
    <div className="flex p-5 m-5">
      <div className="p-5 m-5 text-center">
        <img className="rounded-full" src={submission.profile.userAvatar} />
        <h1 className="font-bold text-[20px]">{submission.profile.realName}</h1>
        <h1>{submission.profile.countryName}</h1>
        <h1>Ranking: {submission.profile.ranking}</h1>
        <a href={submission.linkedinUrl}>LinkedIn</a>
        <a href={submission.githubUrl}>GitHub</a>
        <a href={submission.twitterUrl}>X</a>
      </div>
      <div className="">
        <div className="flex ">
         
          <div className="p-5 m-3">
          <h1 className="font-bold text-[20px]">Problems Solved</h1>
            <div className="flex p-3">
              
              <CircularProgress
                sx={{ "--CircularProgress-size": "100px" }}
                size="lg"
                color="primary"
                determinate
                value={66.67}
              >
                <div className="text-center ">
                  <h1 className="font-bold text-[18px]">
                    {submission.languageProblemCount.reduce(
                      (accumulator, problem) => {
                        return accumulator + problem.problemsSolved;
                      },
                      0
                    )}
                  </h1>
                  <h1 className="text-[18px]">Solved</h1>
                </div>
              </CircularProgress>
              <div className="w-[300px] pl-5 ml-3">
                <div className="flex">
                  <h1>Easy :</h1>
                  <h1>{submission.submitStats.acSubmissionNum[1].count}</h1>
                </div>
                <LinearProgress
                  size="lg"
                  color="success"
                  determinate
                  value={submission.problemsSolvedBeatsStats[0].percentage}
                />
                <div className="flex">
                  <h1>Medium :</h1>
                  <h1>{submission.submitStats.acSubmissionNum[2].count}</h1>
                </div>
                <LinearProgress
                  size="lg"
                  color="warning"
                  determinate
                  value={submission.problemsSolvedBeatsStats[1].percentage}
                />
                <div className="flex">
                  <h1>Hard :</h1>
                  <h1>{submission.submitStats.acSubmissionNum[3].count}</h1>
                </div>
                <LinearProgress
                  size="lg"
                  color="danger"
                  determinate
                  value={submission.problemsSolvedBeatsStats[2].percentage}
                />
              </div>
            </div>
            <div> Earned Batches</div>
          </div>
          <div className="m-3">
            {problems.map((problem) => (
              <div key={problem.timestamp} className="flex bg-orange-300 m-2 justify-start  p-1 rounded-sm w-[600px]">
                
                <h1 >{problem.title}</h1>
                <h1 className="ml-10" >
                  <TimeAgo timestamp={problem.timestamp} />
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div>Activity</div>
      </div>
    </div>
  );
};

export default LeetCode;
