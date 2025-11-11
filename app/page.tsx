"use client"; 
import Image from "next/image";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col items-center py-10 px-4 overflow-hidden">
      {/* Orqa fonda animatsion elementlar */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="flex flex-col items-center max-w-xl w-full relative z-10">
        {/* Avatar qismi */}
        <div className="relative mb-8 animate-fade-in-down">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/30 mb-4 relative">
            <Image 
              src="/avatar.jpg" 
              alt="Avatar" 
              width={160} 
              height={160} 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
          </div>
          <div className="absolute -inset-4 rounded-full border-2 border-purple-400/30 animate-ping"></div>
          <div className="absolute -inset-6 rounded-full border border-cyan-400/20 animate-pulse"></div>
        </div>

        {/* Matn qismi */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-sm opacity-80 tracking-widest mb-1 font-light">SOLO</h2>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">USTOZMLBB</h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto my-4 rounded-full shadow-lg shadow-purple-500/30"></div>
          <p className="text-center text-lg opacity-90 max-w-md leading-relaxed font-light">
            Assalomu aleykum! Bizning rasmiy kanallarimiz bilan tanishib chiqing 👇🏻
          </p>
        </div>

        {/* Tugmalar - pastdan chiqish animatsiyasi */}
        <div className={`flex flex-col w-full gap-5 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* ADMIN */}
          <a
            href="https://t.me/Ustoz_Mlbb_servis_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500/90 to-blue-600/90 hover:from-blue-400 hover:to-blue-500 backdrop-blur-sm border border-white/10 transition-all duration-500 text-white flex items-center justify-center gap-4 shadow-2xl hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 transform-gpu"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
              <FaTelegramPlane size={24} />
            </div>
            <div className="text-center font-semibold text-lg">ALMAS NARXLARI 💎</div>
          </a>

          <a
            href="https://t.me/suhrobgiyosov"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full py-4 rounded-2xl bg-gradient-to-r from-purple-700/90 to-indigo-700/90 hover:from-purple-600 hover:to-indigo-600 backdrop-blur-sm border border-white/10 transition-all duration-500 text-white flex items-center justify-center gap-4 shadow-2xl hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2 transform-gpu"
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
              <MdAdminPanelSettings size={24} />
            </div>
            <div className="text-center">
              <div className="font-semibold text-lg">ADMIN</div>
              <div className="text-sm opacity-80 font-light">MUROJAT UCHUN</div>
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@UstozMLBB"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full py-4 rounded-2xl bg-gradient-to-r from-red-600/90 to-red-700/90 hover:from-red-500 hover:to-red-600 backdrop-blur-sm border border-white/10 transition-all duration-500 text-white flex items-center justify-center gap-4 shadow-2xl hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-2 transform-gpu"
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
              <FaYoutube size={24} />
            </div>
            <div className="text-center font-semibold text-lg">YOU TUBE KANAL</div>
          </a>

          {/* Telegram Kanal */}
          <a
            href="https://t.me/ustozmlbb"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500/90 to-blue-600/90 hover:from-blue-400 hover:to-blue-500 backdrop-blur-sm border border-white/10 transition-all duration-500 text-white flex items-center justify-center gap-4 shadow-2xl hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 transform-gpu"
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
              <FaTelegramPlane size={24} />
            </div>
            <div className="text-center font-semibold text-lg">TELEGRAM KANAL</div>
          </a>
        </div>

        {/* Pastki qism */}
        <div className="mt-16 pt-6 border-t border-white/10 w-full text-center animate-fade-in-up">
          <p className="text-sm opacity-60 font-light">Сделано на UstozMlbb.uz</p>
        </div>
      </div>

      {/* CSS animatsiyalari */}
      <style jsx global>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}