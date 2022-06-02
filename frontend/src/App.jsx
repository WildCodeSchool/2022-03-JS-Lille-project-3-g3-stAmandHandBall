import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Footer from "@components/Archi/Footer";
import Header from "@components/Archi/Header";
import News from "@pages/News";
import Rookies from "@pages/Rookies";
import Shop from "@pages/Shop";
import PlayerList from "@pages/PlayerList";

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
