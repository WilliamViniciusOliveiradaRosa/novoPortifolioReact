import { useState } from 'react'
import eu from './assets/eu.jpg'
import logo from './assets/logo.png'
import './App.css'
import Continuacao from './components/Continuacao'
import VideoCarousel from './components/VideoCarrocel'

function App() {
  const handlePlay = (e) => {
    e.target.play();
  };

  const handleStop = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
  };
  return (
    <>
      <div>
        <div className="flex justify-center items-center h-15 text-violet-100 bg-violet-800 rounded-t-lg">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Contato</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <img src={eu} alt="" className="w-[100%]" />
        </div>
        <div className="flex justify-center  h-50 w-[100%] bg-black">
          <img src={logo} alt="" className="" />
        </div>
      </div>
      <div className="bg-violet-200">
        <p className="pl-8 pt-8 text-violet-800">reels</p>
        <div className="flex justify-center ">
          <ul className="flex gap-4 text-violet-900">
            <li>top</li>
            <li>10</li>
          </ul>
        </div>
        <div className="bg-violet-200 p-8 flex gap-8 justify-center">
          <VideoCarousel/>
        </div>
      </div>
      <Continuacao/>
    </>
  )
}

export default App
