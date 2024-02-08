
import './App.css';
import GitHub from './Pages/GitHub';
import LeetCode from './Pages/LeetCode';

import Dashboard from './Pages/Dashboard';
import SignIn from './Pages/SignUp';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProfileSettings from './Pages/Settings';
import store from './Utils/Store';
import { Provider } from 'react-redux';
import HackerRank from './Pages/HackerRank';
import Topcoder from './Pages/Topcoder';
import HackerEarth from './Pages/HackerEarth';
import CompleteProfile from './Pages/CompleteProfile';


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
    {
      path:'/hackerrank',
      element:<HackerRank/>
    },
    {
      path:'/topcoder',
      element:<Topcoder/>
    },
    {
      path :'/hackerearth',
      element: <HackerEarth/>
    },
    {
      path:'/settings',
      element:<ProfileSettings/>
    },
    {
      path:'/profile',
      element:<CompleteProfile/>
    }
   

  ])
  return (
   

   
    <div className='font-poppins '>
       <Provider store ={store}>
   
    <RouterProvider router={AppRouter}/>
    </Provider>
    </div>
  );
}

export default App;
