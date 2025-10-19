function Camera() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-slate-300">
          Kamera Foto Selfie
        </label>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl overflow-hidden">
          <div className="aspect-video flex items-center justify-center bg-slate-950/50 backdrop-blur-sm">
            <div className="text-center space-y-3">
              <div className="text-4xl">📷</div>
              Camera disini nanti
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camera;
