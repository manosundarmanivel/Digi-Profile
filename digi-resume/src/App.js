
import './App.css';
import GitHub from './GitHub';
import LeetCode from './LeetCode';

import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';


function App() {

  const AppRouter = createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      children: [
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'login',
          element:<SignIn/>
        },
        {
          path:'signup',
          element:<SignUp/>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:'/leetcode',
      element:<LeetCode/>
    },
    {
      path:'/github',
      element:<GitHub/>
    },
   

  ])
  return (
    <div className='font-poppins '>
   
    <RouterProvider router={AppRouter}/>
     
    </div>
  );
}

export default App;
