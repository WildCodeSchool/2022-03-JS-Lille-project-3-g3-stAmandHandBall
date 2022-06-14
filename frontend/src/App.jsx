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
import LesLouves from "@pages/LesLouves";
import Calendrier from "@pages/Calendrier";
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
          <Route path="/actus" element={<News />} />
          <Route path="/amateurs" element={<Rookies />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/equipe" element={<PlayerList />} />
          <Route path="/staff" element={<StaffList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendrier" element={<Calendar />} />
          <Route path="/histoire" element={<History />} />
          <Route path="origineDeLaMeute" element={<OrigineDeLaMeute />} />
          <Route path="chefsDeLaMeute" element={<ChefDeLaMeute />} />
          <Route
            path="bergersDesLouveteaux"
            element={<BergersDesLouveteaux />}
          />
          <Route path="arbitres" element={<Arbitre />} />
          <Route path="lesLouves" element={<LesLouves />} />
          <Route path="calendrier" element={<Calendrier />} />
          <Route path="classement" element={<Classement />} />
          <Route path="philosophie" element={<Philosophie />} />
          <Route path="effectif" element={<Effectif />} />
          <Route path="vieQuotidienne" element={<VieQuotidienne />} />
          <Route path="formation" element={<Formation />} />
          <Route path="candidature" element={<Candidature />} />
          <Route path="ambition" element={<Ambition />} />
          <Route path="partenaires" element={<Partenaire />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
