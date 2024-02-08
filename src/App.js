import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import FirstBiteGallery from "./pages/FirstBiteGallery";

import Nomatch from "./pages/Nomatch";

import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
      <Route path="firstbitegallery" element={<FirstBiteGallery />} />
      <Route path="*" element={<Nomatch />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
