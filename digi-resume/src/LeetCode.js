import React, { useEffect, useState } from "react";
import TimeAgo from "./TimeStamp";
import CircularProgress from "@mui/joy/CircularProgress";
import ReportIcon from "@mui/icons-material/Report";
import LinearProgress from "@mui/joy/LinearProgress";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSearchParams } from "react-router-dom";

const LeetCode = () => {
  const [submission, setSubmissions] = useState();
  const [problemsCount, setProblemsCount] = useState(0);
  const [problems, setProblems] = useState([]);
  const [website, setWebsite] = useState();
  const [searchParams] = useSearchParams();
  const username = searchParams.get("v");
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
    <div className="flex p-5 m-5 ">
      <div className="p-5 m-5 text-center bg-white rounded-xl shadow-lg w-[250px] h-[900px]">
        <img className="rounded-full p-2" src={submission.profile.userAvatar} />
        <h1 className="font-bold text-[24px] p-2">
          {submission.profile.realName}
        </h1>
        <h1 className="font-bold text-[18px]">
          Rank : {submission.profile.ranking}
        </h1>

        <div className="text-start p-3 py-10 ">
          <div className="flex pb-5 ">
            
            <LocationOnIcon /> <h1 className="px-3">{submission.profile.countryName}</h1>
          </div>
          <div className="flex pb-5" >
            
            <LinkedInIcon /> <a  className="px-3" href={submission.linkedinUrl}>LinkedIn</a>
            </div>
            <div className="flex pb-5">
              
              <GitHubIcon /> <a  className="px-3" href={submission.githubUrl}>GitHub</a>
            </div>
            <div className="flex pb-5">
              
              <TwitterIcon /> <a  className="px-3" href={submission.twitterUrl}>Twitter</a>
            </div>
          
        </div>
      </div>
      <div className="">
        <div className="flex ">
          <div className="p-5 m-2">
            <h1 className="font-bold text-[20px] py-5">Problems Solved</h1>
            <div className="flex items-center p-5 rounded-lg bg-white shadow-lg">
              <CircularProgress
                sx={{ "--CircularProgress-size": "120px" }}
                size="lg"
                color="primary"
                determinate
                value={66.67}
              >
                <div className="text-center ">
                  <h1 className="font-bold text-[20px] text-black">
                    {submission.languageProblemCount.reduce(
                      (accumulator, problem) => {
                        return accumulator + problem.problemsSolved;
                      },
                      0
                    )}
                  </h1>
                  <h1 className="text-[15px] text-black">Solved</h1>
                </div>
              </CircularProgress>
              <div className="w-[300px] mb-2 pl-5 ml-3">
                <div className="flex py-2">
                  <h1>Easy :</h1>
                  <h1>{submission.submitStats.acSubmissionNum[1].count}</h1>
                </div>
                <LinearProgress
                  size="lg"
                  color="success"
                  determinate
                  value={submission.problemsSolvedBeatsStats[0].percentage}
                />
                <div className="flex py-2">
                  <h1>Medium :</h1>
                  <h1>{submission.submitStats.acSubmissionNum[2].count}</h1>
                </div>
                <LinearProgress
                  size="lg"
                  color="warning"
                  determinate
                  value={submission.problemsSolvedBeatsStats[1].percentage}
                />
                <div className="flex py-2">
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
            {/* <div className="font-bold text-[20px] py-5"> Earned Batches</div> */}
          </div>
          <div className="p-5 m-2">
            <h1 className="font-bold text-[20px] py-5">Languages</h1>
            <div className="items-center p-5 rounded-lg bg-white shadow-lg w-[480px]">
              {submission.languageProblemCount.map((prb) => (
                <div className="flex p-[5px] items-center justify-between">
                  <div className="bg-[#f7f8fa] rounded-full p-2 px-4 ">
                    <h1>{prb.languageName}</h1>
                  </div>
                 
                  <div>
                    <div className="flex justify-end">
                      <h1 className="font-extrabold  px-3">
                        {prb.problemsSolved}
                      </h1>
                      <h1>Problem Solved</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="font-bold text-[20px] py-5"> Earned Batches</div> */}
          </div>
        </div>
        <h1 className="font-bold text-[20px] px-6 ">Recent Submissions</h1>
        <div className="m-3 bg-white mt58 p-5 w-[1000px] rounded-lg shadow-lg mx-8">
          {problems.map((problem, index) => (
            <div
              key={problem.timestamp}
              className={`flex justify-start p-3 rounded-lg items-center ${
                index % 2 === 0 ? "bg-white" : "bg-[#f7f8fa]"
              }`}
            >
              <h1 className="text-[18px] font-semibold">{problem.title}</h1>
              <h1 className="ml-4 text-[14px] text-gray-600">
                <TimeAgo timestamp={problem.timestamp} />
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeetCode;
