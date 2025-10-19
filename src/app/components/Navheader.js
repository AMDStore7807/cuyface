function Navheader() {
  return (
    <header className="text-center space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-purple-400 tracking-widest uppercase">
          AI Face Reading
        </p>
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 text-transparent bg-clip-text text-balance">
          CUYFACE
        </h1>
      </div>

      <p className="text-lg text-slate-300 max-w-xl mx-auto text-balance">
        Ramal wajahmu berdasarkan foto selfie dengan teknologi AI vision
      </p>

      <p className="text-xs text-slate-500 italic">
        ⚠️ Ramalan ini berdasarkan model AI, bukan untuk dipercaya sepenuhnya
      </p>
    </header>
  );
}

export default Navheader;
