import React from 'react';
import { Award, Trophy, Trash2, Shield, Share2} from 'lucide-react';
import {RiInstagramLine,RiLinkedinLine,RiTwitterXLine,RiFacebookLine} from '@remixicon/react';

export default function Hero() {
  const volunteers = [
    { position: 1, name: "Harsh", points: 1250, badges: ["🔥 5-Day Streak"] },
    { position: 2, name: "Piyush", points: 1100, badges: ["🌟 Unnatior"] },
    { position: 3, name: "Mohit", points: 1050, badges: [] },
    { position: 4, name: "Payal", points: 950, badges: ["🌱 Eco-Warrior"] },
    
  ];

  return (
    <div className="w-full max-w-7xl xl:max-w-[1600px] mx-auto px-6 py-6 bg-slate-50 min-h-screen text-slate-800 font-Arial">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-600 font-semibold">
                <th className="p-4 w-32 text-center">Position</th>
                <th className="p-4">Name</th>
                <th className="p-4 w-40">Points</th>
                <th className="p-4 w-80 text-right">Badges / Admin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {volunteers.map((v) => (
                <tr key={v.position} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-center font-bold text-slate-500">
                    {v.position === 1 ? '🥇' : v.position === 2 ? '🥈' : v.position === 3 ? '🥉' : v.position}
                  </td>
                  <td className="p-4 font-medium text-slate-900">{v.name}</td>
                  <td className="p-4 font-semibold text-indigo-600">{v.points} pts</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {v.badges.map((badge, idx) => (
                        <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full border border-slate-200">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">     
        {/*Top 3 Volunteers*/}
        <div className="lg:col-span-8 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Trophy size={20} className="text-amber-500" /> Top 3 Volunteers
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {volunteers.slice(0, 3).map((v) => (
              <div key={v.position} className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center flex flex-col items-center justify-center min-h-40">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-2">
                  #{v.position}
                </div>
                <p className="text-sm font-semibold text-slate-800 line-clamp-1">{v.name.split(' ')[0]}</p>
                <p className="text-xs text-slate-500 mt-1">{v.points} pts</p>
              </div>
            ))}
          </div>
        </div>

        {/*Semester Prizes*/}
        <div className="lg:col-span-4 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Award size={20} className="text-indigo-500" /> Semester Prizes
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Exciting prizes for the top 2 volunteers of the semester!
            </p>
          </div>
          
          {/*Inner Prize Card display*/}
          <div className="bg-linear-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-lg p-4 flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-2xl">🎁</div>
            <div>
              <p className="text-sm font-bold text-indigo-950">1st Place: Tech Voucher & Certificate</p>
              <p className="text-xs text-indigo-700 mt-0.5">2nd Place: Custom Community Hoodie</p>
            </div>
          </div>
        </div>

      </div>


      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Share2 size={16} /> Connect With Us
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <a href="#" className="flex items-center justify-center gap-2 p-3 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 rounded-lg transition-colors font-medium text-sm">
            <RiFacebookLine size={18} />Facebook
          </a>
          <a href="#" className="flex items-center justify-center gap-2 p-3 bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-500 border border-slate-200 rounded-lg transition-colors font-medium text-sm">
            <RiTwitterXLine size={18}/>Twitter
          </a>
          <a href="#" className="flex items-center justify-center gap-2 p-3 bg-slate-50 hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-slate-200 rounded-lg transition-colors font-medium text-sm">
            <RiInstagramLine size={18}/>Instagram
          </a>
          <a href="#" className="flex items-center justify-center gap-2 p-3 bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 border border-slate-200 rounded-lg transition-colors font-medium text-sm">
            <RiLinkedinLine size={18}/>Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}