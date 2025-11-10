import Image from "next/image";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col items-center py-10 px-4">
      {/* Orqa fonda animatsion elementlar */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="flex flex-col items-center max-w-xl w-full relative z-10">
        {/* Avatar qismi */}
        <div className="relative mb-6">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl shadow-purple-500/30 mb-4 relative">
            <Image 
              src="/avatar.jpg" 
              alt="Avatar" 
              width={144} 
              height={144} 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
          </div>
          <div className="absolute -inset-4 rounded-full border-2 border-purple-400/30 animate-ping"></div>
        </div>

        {/* Matn qismi */}
        <div className="text-center mb-8">
          <h2 className="text-sm opacity-80 tracking-widest mb-1 font-light">SOLO</h2>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">USTOZMLBB</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto my-3 rounded-full"></div>
          <p className="text-center text-base opacity-90 max-w-md leading-relaxed">
            Assalomu aleykum! Bizning rasmiy kanallarimiz bilan tanishib chiqing 👇🏻
          </p>
        </div>

        {/* Tugmalar */}
        <div className="flex flex-col w-full gap-4">
          {/* ADMIN */}
          <a
            href="https://t.me/suhrobgiyosov"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full py-4 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 text-white flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
          >
            <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
              <MdAdminPanelSettings size={22} />
            </div>
            <div className="text-left">
              <div className="font-medium">ADMIN</div>
              <div className="text-xs opacity-80">MUROJAT UCHUN</div>
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@UstozMLBB"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 text-white flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-1"
          >
            <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
              <FaYoutube size={22} />
            </div>
            <span className="font-medium">YOU TUBE KANAL</span>
          </a>

          {/* Telegram Kanal */}
          <a
            href="https://t.me/ustozmlbb"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 transition-all duration-300 text-white flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1"
          >
            <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
              <FaTelegramPlane size={22} />
            </div>
            <span className="font-medium">TELEGRAM KANAL</span>
          </a>
        </div>

        {/* Pastki qism */}
        <div className="mt-12 pt-6 border-t border-white/10 w-full text-center">
          <p className="text-xs opacity-60">Сделано на Taplink.ru</p>
        </div>
      </div>
    </div>
  );
}
