import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Second from './components/Second';
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col overflow-x-hidden
     bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50"
    >
      <Navbar />
      <br />

      <main className="flex-1 w-full">
        <div className="w-full">
          <Banner />
        </div>

        <div className="w-full">
         <Second />
         <Third />
         <Fourth />
        </div>
      </main>

      <div className="mt-auto">
<Footer />
      </div>
    </div>
  );
}

export default App;
