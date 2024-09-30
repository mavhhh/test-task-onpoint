import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { First } from "./components/slides/First/First";
import { Second } from "./components/slides/Second/Second";
import { Third } from "./components/slides/Third/Third";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Header />
        <Footer />

        <div className="contentWrapper">
          {/* <First /> */}
          {/* <Second /> */}
          <Third />
        </div>
      </div>
    </div>
  );
}

export default App;
