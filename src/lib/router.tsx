import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Error404 from "../pages/Error404";
import Listing from "../pages/joblisting/listing";
import Application from "../pages/Application/Application";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

//Add your routes here

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="Listing" element={<Listing />} />
      <Route path="Application" element={<Application />} />
      <Route path="SignIn" element={<SignIn />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

export default router;
