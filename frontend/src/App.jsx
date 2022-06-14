import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Footer from "@components/Archi/Footer";
import Header from "@components/Archi/Header";
import News from "@pages/News";
import Rookies from "@pages/Rookies";
import Shop from "@pages/Shop";
import PlayerList from "@pages/PlayerList";
import StaffList from "@pages/StaffList";
import Contact from "@pages/Contact";
import Calendar from "@pages/Calendar";
import History from "@pages/History";
import OrigineDeLaMeute from "@pages/OrigineDeLaMeute";
import ChefDeLaMeute from "@pages/ChefDeLaMeute";
import BergersDesLouveteaux from "@pages/BergersDesLouveteaux";
import Arbitre from "@pages/Arbitre";
import Classement from "@pages/Classement";
import Philosophie from "@pages/Philosophie";
import Effectif from "@pages/Effectif";
import VieQuotidienne from "@pages/VieQuotidienne";
import Formation from "@pages/Formation";
import Candidature from "@pages/Candidature";
import Ambition from "@pages/Ambition";
import Partenaire from "@pages/Partenaire";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          {/* page actus */}
          <Route path="/actus" element={<News />} />
          {/* menu club */}
          <Route path="/origineDeLaMeute" element={<OrigineDeLaMeute />} />
          <Route path="/chefsDeLaMeute" element={<ChefDeLaMeute />} />
          <Route
            path="/bergersDesLouveteaux"
            element={<BergersDesLouveteaux />}
          />
          <Route path="/arbitres" element={<Arbitre />} />
          {/* menu D1F former LBE */}
          <Route path="/equipe" element={<PlayerList />} />
          <Route path="/calendrier" element={<Calendar />} />
          <Route path="/classement" element={<Classement />} />
          {/* menu CF */}
          <Route path="/philosophie" element={<Philosophie />} />
          <Route path="/effectif" element={<Effectif />} />
          <Route path="/vieQuotidienne" element={<VieQuotidienne />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/candidature" element={<Candidature />} />
          {/* page Rookies */}
          <Route path="/amateurs" element={<Rookies />} />
          {/* page Shop */}
          <Route path="/boutique" element={<Shop />} />
          {/* page billeterie */}

          {/* page ambition 2024 */}
          <Route path="/ambition" element={<Ambition />} />
          {/* page partenaires */}
          <Route path="/partenaires" element={<Partenaire />} />
          {/* Button contact */}
          <Route path="/contact" element={<Contact />} />
          {/* TODO
           
            SOCIAL NETWORK, LIGUE BUTAGAZ, LFH, BILLETERIE

           */}
          {/* Need validation */}
          <Route path="/staff" element={<StaffList />} />
          <Route path="/histoire" element={<History />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
