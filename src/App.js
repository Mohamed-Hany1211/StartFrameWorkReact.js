import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Notfound from './Components/Notfound';


let router = createHashRouter([
  {path:'',element:<Layout/>,children:[
    {index : true,element:<Home />},
    {path:'about',element:<About />},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<Notfound />}
  ]}
])

export default function App() {
  return <RouterProvider router={router}></RouterProvider>
}
