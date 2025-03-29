import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ImageCarousel from './components/ImageCarousel';
import VideoCarousel from './components/VideoCarousel';
import DonationForm from './components/DonationForm';
import ZigzagSection from './components/ZigzagSection';
import ImpactCounter from './components/ImpactCounter';
import TestimonialCard from './components/TestimonialCard';
import WhatWeDo from './components/WhatWeDo';
import DonationImpact from './components/DonationImpact';
import ConstructionProgress from './components/ConstructionProgress';
import BuildingAnimation from './components/BuildingAnimation';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      title: "Education Support",
      description: "Providing quality education to underprivileged children through our comprehensive scholarship programs and learning centers.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800",
    },
    {
      title: "Healthcare Initiatives",
      description: "Operating mobile medical units and permanent clinics to ensure healthcare reaches the most remote communities.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800",
    },
    {
      title: "Food Distribution",
      description: "Organizing regular food distribution drives and maintaining food banks to support families in need.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
    },
  ];

  const testimonials = [
    {
      text: "The support from Welfare Trust has transformed our community. Their dedication to education has given our children a brighter future.",
      name: "Sarah Johnson",
      role: "Community Leader",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
    },
    {
      text: "Thanks to the medical camp organized by Welfare Trust, many in our village received much-needed healthcare services.",
      name: "Michael Chen",
      role: "Healthcare Worker",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
    },
    {
      text: "The food distribution program has been a lifeline for many families during difficult times. We're grateful for their continuous support.",
      name: "Priya Sharma",
      role: "Program Beneficiary",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            zIndex: 9999,
          },
        }}
      />
      <Navbar />

      <main>
        <HeroCarousel />

        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-neutral-900" data-aos="fade-up">About Us</h2>
            <p className="text-lg text-neutral-800 max-w-3xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
              We are dedicated to improving lives through various welfare programs and initiatives.
              Our mission is to create positive change in communities and help those in need.
            </p>
          </div>
        </section>

        <WhatWeDo />

        <ImpactCounter />
        <BuildingAnimation />

        <ConstructionProgress />

        <DonationImpact />

        <ZigzagSection features={features} />

        {/* <section id="testimonials" className="py-16 bg-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">What People Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
            </div>
          </div>
        </section> */}

        <section id="gallery" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-neutral-900" data-aos="fade-up">Our Gallery</h2>
            <div data-aos="fade-up" data-aos-delay="100">
              <ImageCarousel />
            </div>
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-neutral-900" data-aos="fade-up">Video Gallery</h3>
              <div data-aos="fade-up" data-aos-delay="100">
                <VideoCarousel />
              </div>
            </div>
          </div>
        </section>

        <section id="donate" className="py-16 bg-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-neutral-900" data-aos="fade-up">Make a Donation</h2>
            <div data-aos="fade-up" data-aos-delay="100">
              <DonationForm />
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-neutral-900" data-aos="fade-up">Contact Us</h2>
            <div className="max-w-2xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
              <p className="text-lg mb-4 text-neutral-800">
                <strong>Address:</strong> Jamia Khadija Tul Kubra,Village Shamshabad Khurd Tehsil , Punhana Dist. Nuh  Mewat , Harayana
              </p>
              <p className="text-lg mb-4 text-neutral-800">
                <strong>Email:</strong> contact@jamiakhadijatulkubratrust.com

              </p>
              <p className="text-lg text-neutral-800">
                <strong>Phone:</strong> +91 8930739977
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Jamia Khadijatul Kubra Welfare & Trust. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;