import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ReportIcon from '@mui/icons-material/Report';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import  { useState, useEffect } from 'react';
const Dashboard = () => {

  const [contributions, setContributions] = useState({});
  const [avatar , setAvatar] = useState("");
  const username = 'manosundarmanivel';
  const accessToken = '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';
  console.log(contributions.totalCommitContributions


    )
  useEffect(() => {
    const fetchData = async () => {
      const query = `
        {
          user(login: "${username}") {
            avatarUrl
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
              totalCommitContributions
              totalIssueContributions
              totalPullRequestContributions
              totalPullRequestReviewContributions
              totalRepositoriesWithContributedCommits
              totalRepositoriesWithContributedIssues
              totalRepositoriesWithContributedPullRequests
              totalRepositoriesWithContributedPullRequestReviews
            }
          }
        }
      `;

      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const responseData = await response.json();
        setAvatar(responseData.data.user.avatarUrl);
        setContributions(responseData.data.user.contributionsCollection);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
 contributions==null ? <h1>Loding...</h1>:
  
    <div className="font-poppins p-14 bg-[#f5f5f5]">
      <div>
        <div className="flex">
          <img
            src={avatar}
            className="h-52 rounded-full"
          />
          <div className="px-10">
            <h1 className="text-[35px] font-bold text-[#2d2d2d]">
              Mano Sundar M
            </h1>
            <div className="flex text-[20px] items-center" >
    <LocationOnIcon sx={{color:'red'}}/>
    <h1 className="pl-2">India</h1>
            </div>
            {/* <h1 className="font-bold text-[#2d2d2d]">@manosundar</h1> */}
            <div className="bg-white rounded-3xl p-2 mt-4">
              <div className="flex text-center bg-[#f5f5f5] p-5 rounded-2xl">
                <div className="px-4">
                  <h1 className="text-[23px] font-bold">2</h1>
                  <h1 className="text-[18px] text-[#7a7a7a] font-bold">
                    Followers
                  </h1>
                </div>
                <div className="px-4">
                  <h1 className="text-[23px] font-bold">14</h1>
                  <h1 className="text-[18px] text-[#7a7a7a] font-bold">
                    Following
                  </h1>
                </div>
                <div className="px-4">
                  <h1 className="text-[23px] font-bold">{contributions.totalCommitContributions}</h1>
                  <h1 className="text-[18px] text-[#7a7a7a] font-bold">
                    Contributions
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <h1 className="font-bold text-[30px]">Total Statistics</h1>
          <div className="flex text-center pt-5">
            <div className="bg-white rounded-3xl p-2 m-3 w-52">
              <div className="bg-[#e4f0d3] rounded-2xl p-3">
                <DoneIcon sx={{ fontSize: 50, color: "#9fca63" }} />
              </div>
              <div className="pt-3 p-3">
                <h1 className="text-[18px] text-[#7a7a7a] font-bold">
                  Recent Commits
                </h1>
                <h1 className="text-[20px] font-bold">{contributions.totalRepositoriesWithContributedCommits}</h1>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-2 m-3 w-52">
              <div className="bg-[#fde6cc] rounded-2xl p-3">
                <TimelapseIcon sx={{ fontSize: 50, color: "#ff9c27" }}/>
                
              </div>
              <div className="pt-3 p-3">
                <h1 className="text-[18px] text-[#7a7a7a] font-bold">
                  Pull Request
                </h1>
                <h1 className="text-[20px] font-bold">15</h1>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-2 m-3 w-52">
              <div className="bg-[#cce1fc] rounded-2xl p-3">
                <ReportIcon  sx={{ fontSize: 50, color: "#3e8dfd" }}/>
               
              </div>
              <div className="pt-3 p-3">
                <h1 className="text-[18px] text-[#7a7a7a] font-bold">
                  Issues
                </h1>
                <h1 className="text-[20px] font-bold">{contributions.totalIssueContributions
}</h1>
              </div>
            </div>
            
          </div>
        </div>
        <div>
        <h1 className="font-bold text-[30px]">Repositories</h1>
          <div>
            <div className="flex">
              <div>
                <h1>icon</h1>
              </div>
              <div>
                <h1>Committed Learner</h1>
                <h1>Progress</h1>
                <h1>Reach a 3 day streak</h1>
              </div>
            </div>
            <div className="flex">
              <div>
                <h1>icon</h1>
              </div>
              <div>
                <h1>Committed Learner</h1>
                <h1>Progress</h1>
                <h1>Reach a 3 day streak</h1>
              </div>
            </div>
            <div className="flex">
              <div>
                <h1>icon</h1>
              </div>
              <div>
                <h1>Committed Learner</h1>
                <h1>Progress</h1>
                <h1>Reach a 3 day streak</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
