import * as React  from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Badge from "../../node_modules/@mui/material/Badge/Badge";
import leet from "../Assets/img/leetcode.png";
import hack from "../Assets/img/hackerrank_logo.png";
import hackearth from "../Assets/img/HackerEarth.png";
import topcoder from "../Assets/img/topcoder.png";
import LeetCode from "../Pages/LeetCode";
import github from "../Assets/img/git.png"
import HomeIcon from '@mui/icons-material/Home'; 
import { useEffect } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const[leetprofile , setLeetProfile] = React.useState("");


  const getLeetData = async () => {
    const query = `
        { 
            
            matchedUser(username: "manosundarmanivel") 
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
            
            
        }
      `;

    const data = await fetch("https://leetcode.com/graphql?query=" + query);
    const json = await data.json();
    console.log(json);
    setLeetProfile(json.data.matchedUser);

      }

      useEffect(() => {
        getLeetData();
      }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={<><HomeIcon /> Essential Skills</>} {...a11yProps(0)} /> {/* Add icon to label */}
        <Tab label={<><HomeIcon /> Critical Thinking</>} {...a11yProps(1)} />
        <Tab label={<><HomeIcon /> Project Involvements</>} {...a11yProps(2)} />
        <Tab label={<><HomeIcon /> Interpersonal Abilities</>} {...a11yProps(3)} />
        <Tab label={<><HomeIcon /> Achievements</>} {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h1>Programming Languages</h1>
        <h1>FrameWork and Libraries</h1>
        <h1>DataBase and Technologies</h1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex flex-wrap  justify-around">
          <div className="shadow-lg p-3 m-3">
            <div className="flex items-center">
              <img src={leet} width={35} />
              <h1 className="font-semibold p-1">LeetCode</h1>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="border p-2 m-3 w-[200px]">
                  <h1 className="text-sm font-light">Total Solved</h1>
                  <h1 className="text-xl ">NA</h1>
                </div>
                <div>
                  <div className="border rounded-lg p-2 m-3">
                    <h1>Active </h1>
                    <h1>NA</h1>
                  </div>
                  <div className="border rounded-lg p-2 m-3">
                    <h1>Streak </h1>
                    <h1>NA</h1>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="border rounded-lg p-2 m-3">
                  <h1>Rank </h1>
                  <h1>NA</h1>
                </div>
                <div className="border rounded-lg p-2 m-3">
                  <h1>Badge </h1>
                  <h1>NA</h1>
                </div>
                <div className="border rounded-lg p-2 m-3">
                  <h1>Submissions </h1>
                  <h1>NA</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg p-3 m-3">
            <div className="flex items-center">
              <img src={hack} width={140} className="m-3" />
            </div>
            <div>
              <div className="flex justify-between">
                <div className="border rounded-lg p-2 m-3 w-[200px]">
                  <h1>Total Solved</h1>
                  <h1>NA</h1>
                </div>
                <div>
                  <div className="border rounded-lg p-2 m-3">
                    <h1>Active </h1>
                    <h1>NO</h1>
                  </div>
                  <div className="border rounded-lg p-2 m-3">
                    <h1>Streak </h1>
                    <h1>NA</h1>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="border rounded-lg p-2 m-3">
                  <h1>Rank </h1>
                  <h1>NA</h1>
                </div>
                <div className="border rounded-lg p-2 m-3">
                  <h1>Badge </h1>
                  <h1>NA</h1>
                </div>
                <div className="border rounded-lg p-2 m-3">
                  <h1>Submissions </h1>
                  <h1>NA</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg p-3 m-3">
            <div className="flex items-center">
              <img src={hackearth} width={120} className="m-2" />
            </div>
            <div>
              <div className="flex justify-between">
                <div className="border rounded-lg p-2 m-3 w-[200px]">
                  <h1>Total Solved</h1>
                  <h1>NAA</h1>
                </div>
                <div>
                  <div className="border rounded-lg p-2 m-3">
                    <h1>Active </h1>
                    <h1>NA</h1>
                  </div>
                  <div className="border rounded-lg p-2 m-3">
                    <h1>Streak </h1>
                    <h1>NA</h1>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="border rounded-lg p-2 m-3">
                  <h1>Rank </h1>
                  <h1>NA</h1>
                </div>
                <div className="border rounded-lg p-2 m-3">
                  <h1>Badge </h1>
                  <h1>NA</h1>
                </div>
                <div className="border rounded-lg p-2 m-3">
                  <h1>Submissions </h1>
                  <h1>NA</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg p-3 m-3">
            <div className="flex items-center">
              <img src={topcoder} width={120} className="m-2" />
            </div>
            <div>
              <div className="flex justify-between">
                <div className="border rounded-lg p-2 m-3 w-[200px]">
                  <h1>Total Solved</h1>
                  <h1>NA</h1>
                </div>
                <div>
                  <div className="border rounded-lg p-2 m-3">
                    <h1>Active </h1>
                    <h1>NA</h1>
                  </div>
                  <div className="border rounded-lg p-2 m-3">
                    <h1>Streak </h1>
                    <h1>NA</h1>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="border rounded-lg p-2 m-3">
                  <h1>Rank </h1>
                  <h1>NA</h1>
                </div>
                <div className="border rounded-lg p-2 m-3">
                  <h1>Badge </h1>
                  <h1>NA</h1>
                </div>
                <div className="border rounded-lg p-2 m-3">
                  <h1>Submissions </h1>
                  <h1>NA</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="shadow-lg">
        <img src={github} width={120} className="m-2 " />
        <div className="flex  m-2 p-2 justify-around">
        
        <div>
          <div className="border rounded-lg p-2 m-3">
            <h1>Total Repositories</h1>
            <h1>NA</h1>
          </div>
          <div className="border rounded-lg p-2 m-3">
            <h1>Recent Commits</h1>
            <h1>NA</h1>
          </div>
        </div>
        <div>
          <div className="border rounded-lg p-2 m-3">
            <h1>Pull Request</h1>
            <h1>NA</h1>
          </div>
          <div className="border rounded-lg p-5 m-3">
            <h1>Issues</h1>
            <h1>NA</h1>
          </div>
        </div>
        <div className="border rounded-lg p-2 m-3 w-32">
          <h1>Pinned Repository</h1>
        </div>
        <div>
          <div className="border rounded-lg p-2 m-3">
            <h1>Followers</h1>
            <h1>NA</h1>
          </div>
          <div className="border rounded-lg p-2 m-3">
            <h1>Following</h1>
            <h1>NA</h1>
          </div>
          <div className="border rounded-lg p-2 m-3">
            <h1>Contributions</h1>
            <h1>NA</h1>
          </div>
        </div>
      </div>
        </div>
       
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
