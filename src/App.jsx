import { Footer, Navbar } from "@/components";
import {
  AboutPage,
  Classes,
  Contact,
  Day,
  GalleryPagination,
  Home,
  MainGallery,
  PricingPage,
  SchedulePage,
} from "@/pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<MainGallery />}>
          <Route path="page/:id" element={<GalleryPagination />} />
        </Route>
        <Route path="/schedule" element={<SchedulePage />}>
          <Route path=":str" element={<Day />} />
        </Route>
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
