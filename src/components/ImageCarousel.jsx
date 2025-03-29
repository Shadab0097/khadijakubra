import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/gallery/image1.jpg'
import image2 from '../assets/gallery/image2.jpg'
import image3 from '../assets/gallery/image3.jpg'
import image4 from '../assets/gallery/image4.jpg'
import image5 from '../assets/gallery/image5.jpg'
import image from '../assets/gallery/image.jpg'
import image7 from '../assets/gallery/image7.jpg'


export default function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const images = [
    image1, image2, image3, image4, image5, image, image7,
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}