import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    {/* Page Header */}
    <header className="bg-blue-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          We are a passionate team dedicated to delivering quality products and excellent service.
        </p>
      </div>
    </header>

    {/* Main Content */}
    <div className="container mx-auto py-12">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Our Story</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat accumsan
          augue vel dignissim. Sed non justo et odio sollicitudin condimentum nec id justo. Proin
          feugiat ipsum vel turpis rhoncus, at consectetur justo tristique.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Our Mission</h2>
        <p className="mt-4">
          Our mission is to provide our customers with the best quality products and an exceptional
          shopping experience.
        </p>
      </div>
    </div>
  </div>
  )
}

export default About;
