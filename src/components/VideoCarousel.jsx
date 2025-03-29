import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useRef, useEffect } from "react";

function VideoCarousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const videos = [
    {
      url: "https://www.youtube.com/embed/5mzC5VhO5FY?enablejsapi=1",
      title: "Supporting Education",
    },
    {
      url: "https://www.youtube.com/embed/UQJffg6j9_E?enablejsapi=1",
      title: "Making a Difference",
    },

    // Fixed URLs below
    {
      url: "https://www.youtube.com/embed/kx531cS1uYc?enablejsapi=1",
      title: "Our Impact",
    },
    {
      url: "https://www.youtube.com/embed/rSLfhVRd9O8?enablejsapi=1",
      title: "Our Impact",
    },
    {
      url: "https://www.youtube.com/embed/2JBiPtUPlmc?enablejsapi=1",
      title: "Our Impact",
    },
  ];

  const handleVideoStateChange = (event) => {
    const state = event.data;
    if (state === 1 && sliderRef.current) {
      sliderRef.current.slickPause(); // Pause slider when video plays
    } else if ((state === 2 || state === 0) && sliderRef.current) {
      sliderRef.current.slickPlay(); // Resume slider when video pauses/ends
    }
  };

  const onIframeLoad = (event) => {
    const iframe = event.target;
    new window.YT.Player(iframe, {
      events: {
        onStateChange: handleVideoStateChange,
      },
    });
  };

  // Load YouTube IFrame API script
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Impact Stories
        </h2>
        <div className="video-carousel relative pb-12">
          <Slider ref={sliderRef} {...settings}>
            {videos.map((video, index) => (
              <div key={index} className="outline-none">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-[500px] rounded-lg shadow-lg"
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={onIframeLoad}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default VideoCarousel;

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <Slider {...settings}>
//         {videos.map((video, index) => (
//           <div key={index} className="px-2">
//             <iframe
//               src={video}
//               title={`Video ${index + 1}`}
//               className="w-full h-[400px] rounded-lg"
//               allowFullScreen
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

