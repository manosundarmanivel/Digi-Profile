import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import ReportIcon from "@mui/icons-material/Report";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Shimmer from "../Components/Shimmer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link } from "react-router-dom";

import AssessmentIcon from '@mui/icons-material/Assessment';
const GitHub = () => {
  const [contributions, setContributions] = useState({});
  const [pinnedRepo, setPinnedRepo] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [searchParams] = useSearchParams();
  const username = searchParams.get("v");
  const accessToken = process.env.REACT_APP_GITHUB_TOKEN;
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [bio, setBio] = useState("");
  const [contri, setContri] = useState({});
  const [totalrepo, setTotalRepo] = useState({});
  const [name, setName] = useState("");
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        {
          user(login: "${username}") {
            avatarUrl
            bio
            name
            
            repositories(first: 100) {
              nodes {
                name
                url
              }
            }
            gists(first: 10) {
              nodes {
                description
                files {
                  name
                }
                createdAt
              }
            }
          
            followers {
              totalCount
            }
            following {
              totalCount
            }
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
            pinnedItems(first: 6, types: REPOSITORY) {
              totalCount
              nodes{
                ... on Repository{
                  id
                    name
                    createdAt,
                    url,
                    description,
                    isFork,
                    languages(first:10){
                      nodes{
                        name
                      }
                    }
                }
              }
            }
            repositoriesContributedTo(last: 100){
              totalCount
              nodes{
                owner{
                  login
                  avatarUrl
                  __typename
                }
              }
            }
            
            pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}){
              totalCount
              nodes{
                id
                title
                url
                state
                mergedBy {
                    avatarUrl
                    url
                    login
                }
                createdAt
                number
                changedFiles
                additions
                deletions
                baseRepository {
                    name
                    url
                    owner {
                      avatarUrl
                      login
                      url
                    }
                  }
              }
            }
            issues(last: 100, orderBy: {field:CREATED_AT, direction: DESC}){
              totalCount
              nodes{
                id
                closed
                title
                createdAt
                url
                number
                assignees(first:100){
                  nodes{
                    avatarUrl
                    name
                    url
                  }
                }
                repository{
                  name
                  url
                  owner{
                    login
                    avatarUrl
                    url
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const responseData = await response.json();
        console.log(responseData);
        setAvatar(responseData.data.user.avatarUrl);
        setContributions(responseData.data.user.contributionsCollection);
        setPinnedRepo(responseData.data.user.pinnedItems.nodes);
        setFollowers(responseData.data.user.followers.totalCount);
        setFollowing(responseData.data.user.following.totalCount);
        setBio(responseData.data.user.bio);
        setContri(responseData.data.user.repositoriesContributedTo.nodes);
        setTotalRepo(responseData.data.user.repositories.nodes);
        setName(responseData.data.user.name);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return avatar == null || contributions == null || pinnedRepo == null ? (
    <Shimmer />
  ) : (
    <div className="font-poppins lg:p-14  p-3 bg-[#f5f5f5] ">
      <div>
        <div className="flex flex-wrap text-center justify-center  ">
          <img src={avatar} className="h-52 rounded-full" />
          <div className="lg:px-10   ">
            <h1 className="text-[30px] font-bold text-[#2d2d2d]">
              {name}
            </h1>
            <div className="flex justify-center items-center ">
              <LocationOnIcon sx={{ color: "red" }} />
              <h1 className="text-[20px]" >India</h1>
            </div>
            {/* <h1 className="font-bold text-[#2d2d2d]">@manosundar</h1> */}
            <div className="lg:w-[440px]  p-2 mt-4">
              <h1 className="text-[16px] ">{bio}</h1>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-2 mt-6   ">
           
            <div className="flex text-center bg-[#f5f5f5] p-3 rounded-2xl">
              <div className="px-2">
                <h1 className="text-[23px] font-bold">{followers}</h1>
                <h1 className="text-[18px] text-[#7a7a7a] font-bold">
                  Followers
                </h1>
              </div>
              <div className="px-2">
                <h1 className="text-[23px] font-bold">{following}</h1>
                <h1 className="text-[18px] text-[#7a7a7a] font-bold">
                  Following
                </h1>
              </div>
              <div className="px-2">
                <h1 className="text-[23px] font-bold">
                  {contributions.totalCommitContributions}
                </h1>
                <h1 className="text-[18px] text-[#7a7a7a] font-bold">
                  Contributions
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 ">
          <h1 className="font-bold text-[26px] ">Total Statistics</h1>
          <div className="flex  flex-wrap justify-center text-center pt-5">
          <div className="bg-white rounded-3xl p-2 m-2  w-36 ">
              <div className="bg-[#f7bed8] rounded-2xl p-3">
                <AssessmentIcon sx={{ fontSize: 50, color: "#f54293" }} />
              </div>
              <div className="pt-3 p-3">
                <h1 className="text-[14px]  text-[#7a7a7a] font-bold">Total Repositories</h1>
                <h1 className="text-[20px] font-bold">
                  {totalrepo.length}
                </h1>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-2 m-2 w-36">
              <div className="bg-[#e4f0d3] rounded-2xl p-3">
                <DoneIcon sx={{ fontSize: 50, color: "#9fca63" }} />
              </div>
              <div className="pt-3 p-3">
                <h1 className="text-[14px] text-[#7a7a7a] font-bold">
                  Recent Commits
                </h1>
                <h1 className="text-[20px] font-bold">
                  {contributions.totalRepositoriesWithContributedCommits}
                </h1>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-2 m-2 w-36">
              <div className="bg-[#fde6cc] rounded-2xl p-3">
                <TimelapseIcon sx={{ fontSize: 50, color: "#ff9c27" }} />
              </div>
              <div className="pt-3 p-3">
                <h1 className="text-[14px] text-[#7a7a7a] font-bold">
                  Pull Request
                </h1>
                <h1 className="text-[20px] font-bold">15</h1>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-2 m-2 w-36">
              <div className="bg-[#cce1fc] rounded-2xl p-3">
                <ReportIcon sx={{ fontSize: 50, color: "#3e8dfd" }} />
              </div>
              <div className="pt-3 p-3">
                <h1 className="text-[14px] text-[#7a7a7a] font-bold">Issues</h1>
                <h1 className="text-[20px] font-bold">
                  {contributions.totalIssueContributions}
                </h1>
              </div>
            </div>
            
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[26px]">Pinned Repositories</h1>
          <div className=" flex flex-wrap py-5 ">
            {pinnedRepo.map((repo, index) => (
              <Link to={repo.url}>
                <div className="flex bg-white   h-[120px] rounded-2xl p-2 m-5 ">
                  <div className="bg-[#e4f0d3] rounded-xl p-3 flex justify-center items-center ">
                    <EmojiEventsIcon
                      sx={{ fontSize: 40, color: "yellowgreen" }}
                    />
                  </div>
                  <div className="p-2 ml-2">
                    <h1 className="font-extrabold text-blue-600 text-[18px]">
                      {repo.name}
                    </h1>

                    <h1 className="text-[14px]">
                      {truncateText(repo.description, 50)}
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* {
          contri.totalCount != 0 ? null :
          <div>
          <h1 className="font-bold text-[30px] mt-5">Contributed Repositories</h1>
          <div className=" flex flex-wrap py-5 ">
            {contri.map((repo, index) => (
              <div className="flex bg-white w-[300px] h-[90px] rounded-2xl p-2 ml-5 mt-5 items-center">
                <img width={70} src={repo.owner.avatarUrl} className="rounded-full" />

                <div className="p-2 ml-2  ">
                  <h1 className="font-extraboldtext-[18px]">
                    {repo.owner.login.toUpperCase()}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        } */}
        <h1 className="font-bold text-[30px] mt-5">Total Repositories</h1>
        <div className="flex flex-wrap p-2 ">
        
          {
            totalrepo.map((repository,index)=>
              (
                <Link to={repository.url}>
                <div className="p-2 m-2 rounded-full border border-black">
                  <h1 className="">{repository.name}</h1>
                   </div></Link>
                
                
              )
            )
          }
        </div>
        
        <div>

        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GitHub;
