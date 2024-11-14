
import './App.css';
import Signup from './pages/signup';
import Forgotpassword from './pages/forgotpassword';


import Home from './pages/home';
import Login from './pages/login';

import { createBrowserRouter, RouterProvider } from  "react-router-dom";
import NewPassword from './pages/newpassword';


const router = createBrowserRouter ([
{
 path: '/',
 element: <Home/>
},
{
  path: '/login',
  element: <Login/>
},
{
  path: '/signup',
  element: <Signup />
},
{
  path: '/forgotpassword',
  element: <Forgotpassword />
},
{
  path: '/verify',
  element: <NewPassword />
},

]);

function App() {

  return (
<div className="App">
<RouterProvider router={router} />
</div>
  );
}

export default App;
