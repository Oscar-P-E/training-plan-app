import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./routes/index";
import { Root } from "./routes/root";
import { NotFound } from "./not-found";
import { Onboard } from "./routes/onboard";
import { About } from "./routes/about";
import { Quiz } from "./routes/quiz/quiz";
import { Complexity } from "./routes/quiz/complexity";
import { Experience } from "./routes/quiz/experience";
import { Goal } from "./routes/quiz/goal";
import { Days } from "./routes/quiz/days";
import { Customisation } from "./routes/quiz/customisation";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Index /> },
        { path: "/about", element: <About /> },
        { path: "/onboard", element: <Onboard /> },
        {
          path: "/routes/quiz/quiz",
          element: <Quiz />,
          errorElement: <NotFound />,
          children: [
            { index: true, element: <Experience /> },
            { path: "/routes/quiz/complexity", element: <Complexity /> },
            { path: "/routes/quiz/goal", element: <Goal /> },
            { path: "/routes/quiz/days", element: <Days /> },
            { path: "/routes/quiz/customisation", element: <Customisation /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
