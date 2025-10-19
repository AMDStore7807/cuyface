import Camera from "./components/Camera";
import Foooter from "./components/Foooter";
import Navheader from "./components/Navheader";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen py-8">
      <div className="max-w-2xl mx-auto space-y-8 px-4">
        <Navheader />
        <Camera />
        <Foooter />
      </div>
    </main>
  );
}
