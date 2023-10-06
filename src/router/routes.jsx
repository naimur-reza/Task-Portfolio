import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Video from "../page/Video";
import Flex4k from "../page/Flex4k";
import News from "../page/News";
import About from "../page/About";
import Contact from "../page/Contact";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "video",
        element: <Video />,
      },
      {
        path: "flex4k",
        element: <Flex4k />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
