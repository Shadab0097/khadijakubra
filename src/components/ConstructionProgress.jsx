import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import con1 from '../assets/construction/con1.jpg'
import con2 from '../assets/construction/con2.jpg'
import con3 from '../assets/construction/con3.jpg'


export default function ConstructionProgress() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const constructionImages = [
    {
      url: con3,
      caption: 'Foundation Work - Phase 1'
    },
    {
      url: con2,
      caption: 'Structural Development - Phase 2'
    },
    {
      url: con1,
      caption: 'Complete Design - Phase 3'
    },
    // {
    //   url: 'https://images.unsplash.com/photo-1574359411659-11a7e16c0d12?w=800',
    //   caption: 'Classroom Setup - Phase 4'
    // },
    // {
    //   url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    //   caption: 'Library Construction - Phase 5'
    // }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Construction Progress</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Watch our school take shape as we build a brighter future for education.
          </p>
        </motion.div>

        <Slider {...settings} className="construction-carousel">
          {constructionImages.map((image, index) => (
            <div key={index} className="px-2">
              <div className="relative group">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}