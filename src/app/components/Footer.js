function Footer() {
  return (
    <footer className="border-t border-slate-800 pt-8 mt-12">
      <div className="space-y-6">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-200">CuyFace</h3>
            <p className="text-xs text-slate-500">
              AI-powered face reading technology
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-200">Links</h3>
            <ul className="space-y-1 text-xs text-slate-500">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-200">Follow</h3>
            <ul className="space-y-1 text-xs text-slate-500">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800" />

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="text-xs text-slate-500">
            © 2025 CuyFace. Semua hak dilindungi.
          </p>
          <p className="text-xs text-slate-600 italic">
            Ramalan ini berdasarkan model AI vision, bukan untuk dipercaya
            sepenuhnya.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
