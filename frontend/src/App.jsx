import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Footer from "@components/Archi/Footer";
import Header from "@components/Archi/Header";
import News from "@pages/News";
import Rookies from "@pages/Rookies";
import Shop from "@pages/Shop";
import FirstTeam from "@pages/FirstTeam";
import Contact from "@pages/Contact";
import Calendar from "@pages/Calendar";
import History from "@pages/History";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/actus" element={<News />} />
          <Route path="/amateurs" element={<Rookies />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/equipe" element={<FirstTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendrier" element={<Calendar />} />
          <Route path="/histoire" element={<History />} />
        </Routes>
      </main>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
