export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
                <span className="text-white font-bold text-sm">DS</span>
              </div>
              <span className="font-bold text-lg">
                Dev<span className="gradient-brand-text">Stack</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-4 flex gap-4 text-sm text-gray-500">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li><a href="#">Home</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}