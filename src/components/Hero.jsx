import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallV } from '../utils';
import { useEffect, useState } from 'react';
import NavBar from "./NavBar";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallV : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallV)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <NavBar />
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="md:w-12/12 w-12/12">
          <video className="pointer-events-none" autoPlay muted loop playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#Highlight" className="btn">Explore</a>
        <p className="font-normal text-xl">Authentic Moroccan Cuisine</p>
      </div>
    </section>
  )
}

export default Hero