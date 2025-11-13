import { createBrowserRouter } from "react-router-dom";
import Portafolio from '../Portafolio.tsx'
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portafolio />
  },
]);


export default router;