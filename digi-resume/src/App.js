
import './App.css';
import GitHub from './Pages/GitHub';
import LeetCode from './Pages/LeetCode';

import Dashboard from './Pages/Dashboard';
import SignIn from './Pages/SignUp';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';

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
