
import './App.css';
import GitHub from './GitHub';
import LeetCode from './LeetCode';

import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Start from './Start';
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
      element:<Start/>
    },
    {
      path:'/leetcode',
      element:<LeetCode/>
    },
    {
      path:'/github',
      element:<GitHub/>
    }

  ])
  return (
    <div className='font-poppins bg-[#f7f8fa]'>
   
    <RouterProvider router={AppRouter}/>
     
    </div>
  );
}

export default App;
