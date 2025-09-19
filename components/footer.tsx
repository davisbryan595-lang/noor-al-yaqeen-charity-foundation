export function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">Haul Boyz</div>

        {/* Socials */}
        <div className="flex gap-4">
          {/* Facebook */}
          <a
            href="#"
            className="hover:text-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 5.012 3.657 9.165 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.165 22 17.012 22 12z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.162 5.656c-.793.352-1.645.589-2.538.696a4.42 4.42 0 0 0 1.943-2.44 8.792 8.792 0 0 1-2.795 1.07 4.41 4.41 0 0 0-7.512 4.017A12.514 12.514 0 0 1 3.153 4.96a4.41 4.41 0 0 0 1.365 5.879 4.394 4.394 0 0 1-1.997-.553v.056a4.41 4.41 0 0 0 3.536 4.32 4.42 4.42 0 0 1-1.991.076 4.412 4.412 0 0 0 4.118 3.062A8.837 8.837 0 0 1 2 19.54a12.455 12.455 0 0 0 6.737 1.974c8.084 0 12.502-6.7 12.502-12.502 0-.19-.004-.379-.013-.566a8.923 8.923 0 0 0 2.187-2.28l.001-.001z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56V24H.22V8zM8.22 8h4.38v2.2h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.04 5.48 6.98V24h-4.56v-7.72c0-1.84-.04-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.08V24H8.22V8z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Haul Boyz. All rights reserved.</div>
      </div>
    </footer>
  )
}
