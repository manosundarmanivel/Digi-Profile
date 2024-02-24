import React from 'react'
import TabComponent from '../Components/TabComponent';
import Divider from '../../node_modules/@mui/material/Divider/Divider';
import profile from "../Assets/img/profile.jpeg"
import { Timeline } from '@mui/icons-material';
import OutlinedTimeline from '../Components/TimeLine';
const CompleteProfile = () => {



  return (

    <div className='flex  '>
        <div>
            <div className='text-center rounded-lg p-5 m-10' >
                <img src={profile} width={160}  className=' rounded-full  object-cover  ' />
                <div className='m-2'>
                <h1 className="font-bold text-lg">Mano Sundar M</h1>
                <div className='p-2 font-medium text-sm'>
                <h1>CGPA 8.5</h1>
                <h1>Till 8th Semester</h1>
                </div>
                </div>
            </div>
            <div className='text-center rounded-lg p-5 m-10'>
                <h1>Work Experience</h1>
                <OutlinedTimeline/>
            </div>
        </div>
        <div>
            <div className='p-5 m-10 w-[1000px]  '>
                <h1 className='font-bold text-lg my-5'>About Me </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s <br/>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h1></h1>
            </div>
            <div className='p-5 m-10 w-[1000px]  '>
                <TabComponent/>
            </div>
        </div>
    </div>
    // <div>
    //     <div className='flex'>
    //     <div></div>
    //     <div>
    //         <div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //         </div>
    //         <div>
    //         <TabComponent/>
    //         </div>
    //     </div>
    //     </div>
       
    // </div>
  )
}

export default CompleteProfile