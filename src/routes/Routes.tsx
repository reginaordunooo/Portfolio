import { createBrowserRouter } from "react-router-dom";
import Portafolio from '../Portafolio.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portafolio />
  },
]);


export default router;