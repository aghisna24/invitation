import React, { useState } from 'react';
import { Gift, PartyPopper } from 'lucide-react';
import s1 from './assets/s-1.svg';
import s1_1 from './assets/s-1(1).svg';

const App = () => {
  const [isRSVPed, setIsRSVPed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center p-4 font-poppins animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 text-center relative animate-fade-in">
        <img src={s1_1} alt="Decoration" className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-2xl animate-fade-in" />
        <div className="relative z-10">
          <img src={s1} alt="Decoration" className="w-full rounded-lg mx-auto text-yellow-500 h-48 mb-6 animate-fade-in" />

          <h1 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in">
            Datang dan rayakan bersama kami...
          </h1>

          <div className="mb-6 animate-fade-in">
            <p className="text-xl text-gray-600 mb-2">
              ULANG TAHUN KE-7
            </p>
            <h2 className="text-3xl font-semibold text-purple-600">
              AIDAN
            </h2>
          </div>

          <div className="bg-pink-50 rounded-xl p-4 mb-6 animate-fade-in">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-2">
              <div className="flex items-center mb-2 lg:mb-0">
                <Gift className="mr-2 text-blue-500" />
                <span className="font-medium">Tanggal:</span>
              </div>
              <span className="text-gray-700">05 Desember 2024</span>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex items-center mb-2 lg:mb-0">
                <Gift className="mr-2 text-green-500" />
                <span className="font-medium">Jam:</span>
              </div>
              <span className="text-gray-700">16:00 WITA</span>
            </div>
          </div>

          <div className="mb-6 animate-fade-in">
            <div className="relative overflow-hidden pb-2/3 mb-6" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.3946411244556!2d117.66043099999999!3d4.142535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3215bdec095e5257%3A0xaf14ac4da2da84d6!2sRASOFTWARE!5e0!3m2!1sen!2sid!4v1733316552537!5m2!1sen!2sid"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Location: Jl. Gang H Daeng Toba RT.20 NO.101
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;