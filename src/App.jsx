import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import AdvertisersPage from "./pages/Advertisers";
import FeaturesPage from "./pages/Features";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <FeaturesPage /> },
      { path: "advertisers", element: <AdvertisersPage /> },
      { path: "about", element: <AboutPage />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
