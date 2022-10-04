import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import EventPage from "./pages/Event";
import CreatePage from "./pages/Create";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/event",
    element: <EventPage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
]);
