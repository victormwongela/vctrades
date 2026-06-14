import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      <Navbar />

      <AppRoutes />

      <Footer />

    </div>
  );
}

export default App;