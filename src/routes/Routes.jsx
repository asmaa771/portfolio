import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Aboutpage from "../pages/Aboutpage";
import Home from "../pages/Home";
import Certificates from "../pages/Certificates";
import Contactme from "../pages/Contactme";
import Techskills from "../pages/Techskills";
import Projectspage from "../pages/Projectspage";
import Detailspage from "../pages/Detailspage";

export const routing =createBrowserRouter([{
path:"/",
element:<Navbar></Navbar>,
children:[
    {
        path:"/about",
        element:<Aboutpage></Aboutpage>
    },
    {
        path:"",
        element:<Home></Home>
    },
 {
        path:"/certificates",
        element:<Certificates></Certificates>
    },
     {
        path:"/Contact",
        element:<Contactme></Contactme>
    },
     {
        path:"/techskills",
        element:<Techskills></Techskills>
    },
     {
        path:"/projects",
        element:<Projectspage></Projectspage>
    },
    {
        path:"/projects/:id",
        element:<Detailspage/>
    },
]





}])