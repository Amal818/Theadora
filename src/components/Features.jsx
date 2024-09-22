import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, explore3Img, explore4Img } from '../utils';
import gsap from 'gsap';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })

    animateWithGsap('#features_title', { y:0, opacity:1})
    animateWithGsap(
      '.g_grow',
      { scale: 0.8, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Explore the full menu.</h1>
        </div>
        
        <div className="flex flex-col justify-center items-center overflow-hidden">

          <div className="flex-center flex-col sm:px-10">
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container flex flex-wrap justify-center gap-4">
                <div className="overflow-hidden flex-1 max-w-xs flex justify-center">
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow object-cover max-w-full h-auto" />
                </div>
                <div className="overflow-hidden flex-1 max-w-xs flex justify-center">
                  <img src={explore2Img} alt="titanium 2" className="feature-video g_grow object-cover max-w-full h-auto" />
                </div>
                <div className="overflow-hidden flex-1 max-w-xs flex justify-center">
                  <img src={explore2Img} alt="titanium 2" className="feature-video g_grow object-cover max-w-full h-auto" />
                </div>
              </div>

              <div className="feature-video-container flex flex-wrap justify-center gap-4 mt-4">
                <div className="overflow-hidden flex-1 max-w-xs flex justify-center">
                  <img src={explore3Img} alt="titanium" className="feature-video g_grow object-cover max-w-full h-auto" />
                </div>
                <div className="overflow-hidden flex-1 max-w-xs flex justify-center">
                  <img src={explore4Img} alt="titanium 2" className="feature-video g_grow object-cover max-w-full h-auto" />
                </div>
                 <div className="overflow-hidden flex-1 max-w-xs flex justify-center">
                  <img src={explore2Img} alt="titanium 2" className="feature-video g_grow object-cover max-w-full h-auto" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;
