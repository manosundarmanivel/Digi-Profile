import React, { useEffect, useState } from "react";
import TimeAgo from "../Components/TimeStamp";
import CircularProgress from "@mui/joy/CircularProgress";

import LinearProgress from "@mui/joy/LinearProgress";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSearchParams } from "react-router-dom";
import Shimmer from "../Components/Shimmer";

const LeetCode = () => {
  const [submission, setSubmissions] = useState();

  const [problems, setProblems] = useState([]);

  const [searchParams] = useSearchParams();
  const username = searchParams.get("v");


  const getData = async () => {
    const query = `
        { 
            
            matchedUser(username: "${username}") 
            {
             
                userCalendar
                {
                  activeYears
                  streak
                  totalActiveDays
                  submissionCalendar
                }
              
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
    <Shimmer />
  ) : (
    <div className="flex justify-center">
      <div className="p-5 ">
        <div className="text-center">
          <div className=" flex justify-center" >
          <img
            className="rounded-full m-2  "
            src={submission.profile.userAvatar}
          />
          </div>
          <h1 className="font-bold text-[24px] ">
            {submission.profile.realName}
          </h1>
          <div className="flex p-2 justify-center">
            <LocationOnIcon />{" "}
            <h1 className="px-3">{submission.profile.countryName}</h1>
          </div>
          <h1 className="font-bold text-[18px]">
            Rank : {submission.profile.ranking}
          </h1>
          

          <div className="text-center justify-center  py-10 flex flex-wrap ">
            <div className="flex pb-5">
              <LinkedInIcon />{" "}
              <a className="px-3" href={submission.linkedinUrl}>
                LinkedIn
              </a>
            </div>
            <div className="flex pb-5">
              <GitHubIcon />{" "}
              <a className="px-3" href={submission.githubUrl}>
                GitHub
              </a>
            </div>
            <div className="flex pb-5">
              <TwitterIcon />{" "}
              <a className="px-3" href={submission.twitterUrl}>
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  justify-center">
          <div className=" ">
            <h1 className="font-bold text-[20px] py-5">Problems Solved</h1>
            <div className="flex  items-center p-5 rounded-lg bg-white shadow-lg">
              <CircularProgress
                sx={{ "--CircularProgress-size": "100px" }}
                size="lg"
                color="primary"
                determinate
                value={66.67}
              >
                <div className="text-center ">
                  <h1 className="font-bold text-[20px] text-black">
                    {submission.submitStats.acSubmissionNum[1].count +
                      submission.submitStats.acSubmissionNum[2].count +
                      submission.submitStats.acSubmissionNum[3].count}
                  </h1>
                  <h1 className="text-[15px] text-black">Solved</h1>
                </div>
              </CircularProgress>
              <div className="w-[180px] mb-2 pl-2 ml-3">
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
          <div className="">
            <h1 className="font-bold text-[20px] py-5">Languages</h1>
            <div className="items-center p-5 rounded-lg bg-white shadow-lg w-full">
              {submission.languageProblemCount.map((prb) => (
                <div className="flex p-[5px] items-center justify-between">
                  <div className="bg-[#f7f8fa] rounded-full p-2 px-4 ">
                    <h1>{prb.languageName}</h1>
                  </div>

                  <div>
                    <div className="flex justify-end">
                      <h1 className="font-extrabold  px-6">
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
        <h1 className="font-bold text-[20px] py-5  ">Recent Submissions</h1>
       <div className="flex justify-center">
       <div className="m-2 bg-white  p-4 w-full  rounded-lg shadow-lg ">
          {problems.map((problem, index) => (
            <div
              key={problem.timestamp}
              className={`  justify-center p-3 rounded-lg items-center ${
                index % 2 === 0 ? "bg-white" : "bg-[#f7f8fa]"
              }`}
            >
              <h1 className="text-[18px] font-semibold">{problem.title}</h1>
              <h1 className=" text-[14px] text-gray-600">
                <TimeAgo timestamp={problem.timestamp} />
              </h1>
            </div>
          ))}
        </div>
       </div>
      </div>
    </div>
  );
};

export default LeetCode;
