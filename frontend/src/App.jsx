import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Footer from "@components/Archi/Footer";
import Header from "@components/Archi/Header";
import News from "@pages/News";
import NonProfessional from "@pages/NonProfessional";
import NonProfessionalDetail from "@pages/NonProfessionalDetail";
import Shop from "@pages/Shop";
import FirstTeam from "@pages/FirstTeam";
import Contact from "@pages/Contact";
import Calendar from "@pages/Calendar";
import History from "@pages/History";
import Staff from "@pages/Staff";
import Coachs from "@pages/Coachs";
import Referee from "@pages/Referee";
import Philosophy from "@pages/Philosophy";
import HeadCount from "@pages/HeadCount";
import LifeStyle from "@pages/LifeStyle";
import Training from "@pages/Training";
import Apply from "@pages/Apply";
import Ambitions from "@pages/Ambitions";
import Partner from "@pages/Partner";
import NewsDetail from "@pages/NewsDetail";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          {/* page actus */}
          <Route path="/actus" element={<News />} />
          <Route path="/actus/:id" element={<NewsDetail />} />

          {/* menu club */}
          <Route path="/origineDeLaMeute" element={<History />} />
          <Route path="/ChefsDeMeute" element={<Staff />} />
          <Route path="/bergersDesLouveteaux" element={<Coachs />} />
          <Route path="/arbitres" element={<Referee />} />
          {/* menu D1F former LBE */}
          <Route path="/equipe" element={<FirstTeam />} />
          <Route path="/calendrier" element={<Calendar />} />
          {/* menu CF */}
          <Route path="/philosophie" element={<Philosophy />} />
          <Route path="/effectif" element={<HeadCount />} />
          <Route path="/vieQuotidienne" element={<LifeStyle />} />
          <Route path="/formation" element={<Training />} />
          <Route path="/candidature" element={<Apply />} />
          {/* page Rookies */}
          <Route path="/amateurs" element={<NonProfessional />} />
          <Route path="/amateurs/:id" element={<NonProfessionalDetail />} />
          {/* page Shop */}
          <Route path="/boutique" element={<Shop />} />
          {/* page billeterie */}

          {/* page ambition 2024 */}
          <Route path="/ambitions" element={<Ambitions />} />
          {/* page partenaires */}
          <Route path="/partenaires" element={<Partner />} />
          {/* Button contact */}
          <Route path="/contact" element={<Contact />} />
          {/* TODO
           
            SOCIAL NETWORK, LIGUE BUTAGAZ, LFH, BILLETERIE

           */}
        </Routes>
      </main>
      <Footer />
      <Header />
    </div>
  );
}

export default App;
