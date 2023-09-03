import "./styles/app.css";
import "./styles/header.css";
import "./styles/footer.css";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div id="app">
      <Header />
      <main style={{ minHeight: "50vh" }}></main>
      <Footer />
    </div>
  );
}

export default App;
