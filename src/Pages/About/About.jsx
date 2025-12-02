import React from 'react';

const teamMembers = [
    {
        name: "A. Rahman",
        role: "Founder & Visionary",
        bio: "Passionate reader and the driving force behind Book-Website. Believes in the power of shared literary experiences.",
        // image: teamMember1, 
    },
    {
        name: "S. Karim",
        role: "Content Curator",
        bio: "Specializes in discovering hidden literary gems across genres. Ensures our ReadList is always fresh and exciting.",
        // image: teamMember2, 
    },
    {
        name: "Rahmatul Rovi",
        role: "Advisor",
        bio: "Expertly uncovering hidden literary treasures and crafting an ever-fresh, exciting ReadList.",
        // image: teamMember2, 
    },
    // Add more team members as needed
];
const About = () => {
    return(
   <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* 1. Hero/Header Section: Mission & Vision */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-4">
            Our Story: Connecting Readers & Books
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 mb-8">
            Book-Website was founded on the simple belief that every great book deserves a great reader. We are building the ultimate space for book discovery, curated reading lists, and honest reviews.
          </p>
          <a 
            href="#mission" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
          >
            Learn Our Mission
          </a>
        </div>
      </div>

      {/* 2. Mission Statement Section */}
      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Mission Card */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-600 mb-3">Mission</h3>
            <p className="text-gray-600">
              To simplify book curation, making it easier for users to track their reading journey and find their next unforgettable story.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-600 mb-3">Vision</h3>
            <p className="text-gray-600">
              To become the most trusted platform for personal reading recommendations and community engagement worldwide.
            </p>
          </div>

          {/* Value Card */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-600 mb-3">Our Value</h3>
            <p className="text-gray-600">
              Authenticity, Community, and the relentless pursuit of literary excellence.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Team Section */}
      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Passionate Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="w-32 h-32 mx-auto rounded-full bg-indigo-200 mb-4 flex items-center justify-center text-4xl text-indigo-700 overflow-hidden">
                    {/* Placeholder for image: Use <img src={member.image} alt={member.name} className="w-full h-full object-cover"/> */}
                    {member.name.charAt(0)}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 italic">"{member.bio}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call to Action (CTA) */}
      <section className="py-16 bg-indigo-700">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to start your next reading adventure?
          </h2>
          <div className="mt-8 flex justify-center">
            <a
              href="/" // Link to the main page or features page
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition duration-300"
            >
              Explore Book-Website
            </a>
          </div>
        </div>
      </section>

      {/* The Footer from your image would go here (or be imported as a Footer component) */}
      
    </div>
);
};


export default About;