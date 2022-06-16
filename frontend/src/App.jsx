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
import Staff from "@pages/Staff";
import Coachs from "@pages/Coachs";
import Referee from "@pages/Referee";
import Philosophy from "@pages/Philosophy";
import Team from "@pages/Team";
import LifeStyle from "@pages/LifeStyle";
import Training from "@pages/Training";
import Apply from "@pages/Apply";
import Ambition from "@pages/Ambitions";
import Partner from "@pages/Partner";
import StaffList from "@components/StaffList";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          {/* page actus */}
          <Route path="/actus" element={<News />} />
          {/* menu club */}
          <Route path="/origineDeLaMeute" element={<History />} />
          <Route path="/lesChefsDeMeute" element={<Staff />} />
          <Route path="/bergersDesLouveteaux" element={<Coachs />} />
          <Route path="/arbitres" element={<Referee />} />
          {/* menu D1F former LBE */}
          <Route path="/equipe" element={<FirstTeam />} />
          <Route path="/calendrier" element={<Calendar />} />
          {/* menu CF */}
          <Route path="/philosophie" element={<Philosophy />} />
          <Route path="/effectif" element={<Team />} />
          <Route path="/vieQuotidienne" element={<LifeStyle />} />
          <Route path="/formation" element={<Training />} />
          <Route path="/candidature" element={<Apply />} />
          {/* page Rookies */}
          <Route path="/amateurs" element={<Rookies />} />
          {/* page Shop */}
          <Route path="/boutique" element={<Shop />} />
          {/* page billeterie */}

          {/* page ambition 2024 */}
          <Route path="/ambition" element={<Ambition />} />
          {/* page partenaires */}
          <Route path="/partenaires" element={<Partner />} />
          {/* Button contact */}
          <Route path="/contact" element={<Contact />} />
          {/* TODO
           
            SOCIAL NETWORK, LIGUE BUTAGAZ, LFH, BILLETERIE

           */}
          {/* Need validation */}
          <Route path="/staff" element={<StaffList />} />
        </Routes>
      </main>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
