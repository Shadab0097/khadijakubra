import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute, FaPlay, FaPause, FaExpand } from 'react-icons/fa';
import buildingVideo from '../assets/videos/animate.mp4';
// import buildingPoster from '../assets/images/video-poster.jpg';

export default function BuildingAnimation() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Handle video loading state
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => setIsLoading(false);
      video.addEventListener('loadeddata', handleLoadedData);
      return () => video.removeEventListener('loadeddata', handleLoadedData);
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <section className="py-16 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Vision</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Experience a virtual tour of our completed building project through this animated visualization.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="animate-pulse text-white">Loading video...</div>
            </div>
          )}

          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
          // poster={buildingPoster}
          >
            <source src={buildingVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          {/* Video Controls */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center justify-between p-4">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
              </button>

              <div className="flex space-x-3">
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <FaVolumeMute className="w-4 h-4" /> : <FaVolumeUp className="w-4 h-4" />}
                </button>

                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
                  aria-label="Toggle fullscreen"
                >
                  <FaExpand className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-neutral-900">Modern Facilities</h3>
            <p className="text-neutral-600">
              State-of-the-art classrooms, library, and computer labs designed for optimal learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-neutral-900">Sustainable Design</h3>
            <p className="text-neutral-600">
              Energy-efficient building with solar panels and rainwater harvesting systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-neutral-900">Community Spaces</h3>
            <p className="text-neutral-600">
              Multi-purpose halls and outdoor areas for community gatherings and events.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}