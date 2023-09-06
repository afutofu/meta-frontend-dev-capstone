import "./styles/globals.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/hero.css";
import "./styles/specials.css";
import "./styles/testimonials.css";
import "./styles/about.css";
import "./styles/reservations.css";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div id="app">
      <Header />
      <main style={{ minHeight: "50vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
