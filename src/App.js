import Footer from "./components/Essentails/Footer";
import Header from "./components/Essentails/Header";
import { Popup } from "./components/Overview/Popup";
import Bubblechart from "./Pages/Bubblechart";
import { Overview } from "./Pages/Overview";
import { Sales } from "./Pages/Sales";

function App() {
  return (
    <>
    <div className="">
     <Header/>
     <Overview/>
     <Sales/>
     <Bubblechart/>
     <Footer/>
     <Popup/>
     
    </div>
    </>
  );
}

export default App;
