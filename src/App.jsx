import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Department from "./components/department/Department";
import Service from "./components/services/Service";
import Faq from "./components/faq/Faq";
import Consultation from "./components/consultation/Consultation";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Home />
      <About />
      <Department />
      <Service />
      {/* <Faq /> */}
      <Consultation />
      <Footer />
    </>
  );
}

export default App;

// {/* <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/aboutus" element={<About />} />
//         <Route path="/departments" element={<Department />} />
//         <Route path="/services" element={<Service />} />
//         <Route path="/faq" element={<Faq />} />
//         <Route path="/consultation" element={<Consultation />} />
//       </Routes> */}