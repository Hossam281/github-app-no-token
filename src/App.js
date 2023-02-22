import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { GithubProvider } from "./context/github/GithubContext";


function App() {
  return (
    <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between  h-screen">
            <Navbar />
            <main className=" container mx-auto px-3 pb-12 ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/error" element={<Error />} />
                <Route path="/*" element={<Error />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
    </GithubProvider>
  );
}

export default App;
