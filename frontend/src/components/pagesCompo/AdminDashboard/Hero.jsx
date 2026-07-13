import React, { useMemo, useState } from "react";
import {Award,Trophy,Search,Share2,Trash2,Plus,Users,Star,Medal,} from "lucide-react";
import {RiFacebookLine,RiInstagramLine,RiLinkedinLine,RiTwitterXLine,} from "@remixicon/react";
export default function Hero() {
  const [search, setSearch] = useState("");
  const [volunteers, setVolunteers] = useState([
    {id:1, position: 1, name: "Harsh", points: 1250, badges: ["🔥 5-Day Streak"] },
    {id:2, position: 2, name: "Piyush", points: 1100, badges: ["🌟 Unnatior"] },
    {id:3, position: 3, name: "Mohit", points: 1050, badges: [] },
    {id:4, position: 4, name: "Payal", points: 950, badges: ["🌱 Eco-Warrior"] },
  ]);
  const [pointsInput, setPointsInput] = useState({});
  const filteredVolunteers = useMemo(() => {
    return volunteers.filter((v) =>
      v.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, volunteers]);
  const totalPoints = volunteers.reduce((sum, v) => sum + v.points, 0);
  const topScore = Math.max(...volunteers.map((v) => v.points));
  const badgeCount = volunteers.reduce(
    (sum, v) => sum + v.badges.length,
    0
  );
  return (
    <div className="w-full max-w-7xl xl:max-w-[1600px] mx-auto px-6 py-6 bg-slate-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Volunteer Admin Dashboard
          </h1>
          <p className="text-slate-500 mt-1">
            Manage volunteers and reward points
          </p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl shadow">
          <Plus size={18} />
          Add Volunteer
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <div className="flex justify-between items-center">
            <Users className="text-indigo-600"/>
            <span className="text-xs text-slate-400">Total</span>
          </div>
          <h2 className="text-3xl font-bold mt-4">
            {volunteers.length}
          </h2>
          <p className="text-slate-500 mt-1">
            Volunteers
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <div className="flex justify-between items-center">
            <Award className="text-green-600"/>
            <span className="text-xs text-slate-400">Points</span>
          </div>
          <h2 className="text-3xl font-bold mt-4">
            {totalPoints}
          </h2>
          <p className="text-slate-500 mt-1">
            Total Points
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <div className="flex justify-between items-center">
            <Star className="text-yellow-500"/>
            <span className="text-xs text-slate-400">Highest</span>
          </div>
          <h2 className="text-3xl font-bold mt-4">
            {topScore}
          </h2>
          <p className="text-slate-500 mt-1">
            Top Score
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <div className="flex justify-between items-center">
            <Medal className="text-purple-600"/>
            <span className="text-xs text-slate-400">Earned</span>
          </div>
          <h2 className="text-3xl font-bold mt-4">
            {badgeCount}
          </h2>
          <p className="text-slate-500 mt-1">
            Badges
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl border shadow-sm p-4 flex items-center gap-3 mb-8">
        <Search className="text-slate-500"/>
        <input
          type="text"
          placeholder="Search Volunteer..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="w-full outline-none text-slate-700"
        />
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-600">
                <th className="p-4 text-center w-20">
                  Rank
                </th>
                <th className="p-4 text-left">
                  Volunteer
                </th>
                <th className="p-4 text-center w-36">
                  Points
                </th>
                <th className="p-4 text-center w-40">
                  Add Points
                </th>
                <th className="p-4 text-center">
                  Badges
                </th>
                <th className="p-4 text-center w-56">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredVolunteers.map((v,index)=>(
                <tr
                  key={v.id}
                  className="hover:bg-slate-50 transition"
                >
                  <td className="p-4 text-center font-bold">
                    {index===0
                      ?"🥇"
                      :index===1
                      ?"🥈"
                      :index===2
                      ?"🥉"
                      :index+1}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <h3 className="font-semibold">
                          {v.name}
                        </h3>
                        <p className="text-sm text-slate-500">
                          Volunteer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <span className="font-bold text-indigo-600 text-lg">
                      {v.points}
                    </span>
                  </td>
                  <td className="text-center">
                    <input
                      type="number"
                      placeholder="0"
                      value={pointsInput[v.id] || ""}
                      onChange={(e)=>
                        setPointsInput({
                          ...pointsInput,
                          [v.id]:e.target.value
                        })
                      }
                      className="w-24 border rounded-lg px-3 py-2 text-center focus:ring-2 focus:ring-indigo-300 outline-none"
                    />
                  </td>
                  <td>
                    <div className="flex flex-wrap justify-center gap-2">
                      {v.badges.length===0 && (
                        <span className="text-slate-400 text-sm">
                          None
                        </span>
                      )}
                      {v.badges.map((badge,i)=>(
                        <span
                          key={i}
                          className="px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs border"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={()=>{
                          const value=Number(pointsInput[v.id]||0);
                          if(value<=0) return;
                          setVolunteers(
                            volunteers.map(item=>
                              item.id===v.id
                              ?{
                                  ...item,
                                  points:item.points+value
                                }
                              :item
                            )
                          );
                          setPointsInput({
                            ...pointsInput,
                            [v.id]:""
                          });
                        }}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                      >
                        Update
                      </button>
                      <button
                        onClick={()=>{
                          setVolunteers(
                            volunteers.filter(item=>item.id!==v.id)
                          );
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                      >
                        <Trash2 size={18}/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
            <Trophy className="text-yellow-500" />
            Top Volunteers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[...volunteers]
              .sort((a, b) => b.points - a.points)
              .slice(0, 3)
              .map((v, index) => (
                <div
                  key={v.id}
                  className="bg-linear-to-br from-indigo-50 to-slate-50 border rounded-xl p-6 text-center hover:shadow-md transition"
                >
                  <div className="mt-4 text-2xl">
                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : "🥉"}
                  </div>
                  <h3 className="font-bold text-lg mt-2">
                    {v.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold mt-1">
                    {v.points} Points
                  </p>
                  <div className="flex justify-center flex-wrap gap-2 mt-4">
                    {v.badges.map((badge, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white border rounded-full px-2 py-1"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Harsh</span>
                <span className="text-green-600 font-semibold">
                  +100 pts
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Komal</span>
                <span className="text-red-500">
                  Removed
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Payal</span>
                <span className="text-green-600">
                  +50 pts
                </span>
              </div>
            </div>
          </div>
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
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-5">
          <Share2 className="text-indigo-600" />
          Connect With Us
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#"
            className="flex items-center justify-center gap-2 border rounded-xl p-4 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition">
            <RiFacebookLine size={22} />Facebook
          </a>
          <a href="#"
            className="flex items-center justify-center gap-2 border rounded-xl p-4 bg-slate-50 hover:bg-sky-50 hover:text-sky-500 transition">
            <RiTwitterXLine size={22} />Twitter
          </a>
          <a href="#"
            className="flex items-center justify-center gap-2 border rounded-xl p-4 bg-slate-50 hover:bg-pink-50 hover:text-pink-600 transition">
            <RiInstagramLine size={22} />Instagram
          </a>
          <a href="#"
            className="flex items-center justify-center gap-2 border rounded-xl p-4 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 transition">
            <RiLinkedinLine size={22} />LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}