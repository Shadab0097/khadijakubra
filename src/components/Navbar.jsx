import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-lg font-bold">Jamia Khadijatul Kubra </h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:bg-secondary px-3 py-2 rounded-md">Home</a>
              <a href="#about" className="text-white hover:bg-secondary px-3 py-2 rounded-md">About</a>
              <a href="#gallery" className="text-white hover:bg-secondary px-3 py-2 rounded-md">Gallery</a>
              <a href="#donate" className="text-white hover:bg-secondary px-3 py-2 rounded-md">Donate</a>
              <a href="#contact" className="text-white hover:bg-secondary px-3 py-2 rounded-md">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-secondary focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-white block px-3 py-2 rounded-md hover:bg-secondary">Home</a>
            <a href="#about" className="text-white block px-3 py-2 rounded-md hover:bg-secondary">About</a>
            <a href="#gallery" className="text-white block px-3 py-2 rounded-md hover:bg-secondary">Gallery</a>
            <a href="#donate" className="text-white block px-3 py-2 rounded-md hover:bg-secondary">Donate</a>
            <a href="#contact" className="text-white block px-3 py-2 rounded-md hover:bg-secondary">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}