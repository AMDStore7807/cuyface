
import Camera from "./components/Camera";
import Footer from "./components/Footer";
import Navheader from "./components/Navheader";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        <Navheader />
        <Camera />
        <Footer />
      </div>
    </main>
  );
}
