import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Badge from "../../node_modules/@mui/material/Badge/Badge";
import leet from "../Assets/img/leetcode.png";
import hack from "../Assets/img/hackerrank_logo.png"
import hackearth from "../Assets/img/HackerEarth.png"
import topcoder from "../Assets/img/topcoder.png"
import LeetCode from "../Pages/LeetCode";

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

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Essential Skills" {...a11yProps(0)} />
          <Tab label="Critical Thinking" {...a11yProps(1)} />
          <Tab label="Project Involvements" {...a11yProps(2)} />
          <Tab label="Interpersonal Abilities" {...a11yProps(3)} />
          <Tab label="Achievements" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        
       
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className="flex flex-wrap  justify-around">
        <div className="border p-3 m-3">
          <div className="flex items-center">
            <img src={leet} width={35} />
            <h1 className="font-semibold p-1">LeetCode</h1>
          </div>
          <div >
            <div className="flex justify-between">
              <div className="border p-2 m-3 w-[200px]">
                <h1>Total Solved</h1>
                <h1>NA</h1>
              </div>
              <div >
                <div className="border p-2 m-3">
                  <h1>Active </h1>
                  <h1>NA</h1>
                </div>
                <div className="border p-2 m-3">
                  <h1>Streak </h1>
                  <h1>NA</h1>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="border p-2 m-3">
                <h1>Rank </h1>
                <h1>NA</h1>
              </div>
              <div className="border p-2 m-3">
                <h1>Badge </h1>
                <h1>NA</h1>
              </div>
              <div className="border p-2 m-3">
                <h1>Submissions </h1>
                <h1>NA</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border p-3 m-3">
          <div className="flex items-center">
            <img src={hack} width={140} className="m-3" />
            
          </div>
          <div >
            <div className="flex justify-between">
              <div className="border p-2 m-3 w-[200px]">
                <h1>Total Solved</h1>
                <h1>NA</h1>
              </div>
              <div >
                <div className="border p-2 m-3">
                  <h1>Active </h1>
                  <h1>NA</h1>
                </div>
                <div className="border p-2 m-3">
                  <h1>Streak </h1>
                  <h1>NA</h1>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="border p-2 m-3">
                <h1>Rank </h1>
                <h1>NA</h1>
              </div>
              <div className="border p-2 m-3">
                <h1>Badge </h1>
                <h1>NA</h1>
              </div>
              <div className="border p-2 m-3">
                <h1>Submissions </h1>
                <h1>NA</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border p-3 m-3">
          <div className="flex items-center">
            <img src={hackearth} width={120} className="m-2" />
            
          </div>
          <div >
            <div className="flex justify-between">
              <div className="border p-2 m-3 w-[200px]">
                <h1>Total Solved</h1>
                <h1>NA</h1>
              </div>
              <div >
                <div className="border p-2 m-3">
                  <h1>Active </h1>
                  <h1>NA</h1>
                </div>
                <div className="border p-2 m-3">
                  <h1>Streak </h1>
                  <h1>NA</h1>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="border p-2 m-3">
                <h1>Rank </h1>
                <h1>NA</h1>
              </div>
              <div className="border p-2 m-3">
                <h1>Badge </h1>
                <h1>NA</h1>
              </div>
              <div className="border p-2 m-3">
                <h1>Submissions </h1>
                <h1>NA</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border p-3 m-3">
          <div className="flex items-center">
            <img src={topcoder} width={120} className="m-2" />
            
          </div>
          <div >
            <div className="flex justify-between">
              <div className="border p-2 m-3 w-[200px]">
                <h1>Total Solved</h1>
                <h1>NA</h1>
              </div>
              <div >
                <div className="border p-2 m-3">
                  <h1>Active </h1>
                  <h1>NA</h1>
                </div>
                <div className="border p-2 m-3">
                  <h1>Streak </h1>
                  <h1>NA</h1>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="border p-2 m-3">
                <h1>Rank </h1>
                <h1>NA</h1>
              </div>
              <div className="border p-2 m-3">
                <h1>Badge </h1>
                <h1>NA</h1>
              </div>
              <div className="border p-2 m-3">
                <h1>Submissions </h1>
                <h1>NA</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
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
