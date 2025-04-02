import React, { useState } from 'react';

import mainImage from './assets/main.png';
import marketingImage from './assets/marketing.png';
import saleImage from './assets/sales.png';
import helpdeskImage from './assets/helpdesk.png';
import workImage from './assets/work.png';
import frameImage from './assets/frame.png';
import menImage from './assets/men.png';
import laptopImage from './assets/laptop.png';
import groundImage from "./assets/ground.jpg"
import groupImage from "./assets/group.png"
import { FaHeadset, FaMicrophoneAlt, FaIdCard, FaVideo } from "react-icons/fa";

import varientImage from "./assets/varient.png"



const Solution = () => {
  

  return (
    <div className="w-full min-h-screen bg-white font-sans">
     
      

      
      <section className="relative">
      <header className="relative flex flex-col-reverse md:flex-row justify-between px-4 py-30 bg-blue-100 space-x-8">
       
        <div className="md:w-1/2 text-center md:text-left ml-4 md:ml-18">
          <h1 className="text-4xl font-bold">Maximize Growth</h1>
          <h1 className="text-4xl font-bold mt-4">
            with the best <span className="text-blue-600">Online</span>
          </h1>
          <h1 className="text-4xl font-bold mt-4 text-blue-600">CRM</h1>
          <p className="text-gray-600 mt-4">
            DSolutions is an all-in-one CRM to optimize marketing and sales.
          </p>
          <p className="text-gray-600">Support teams with unified customer data powered by One View.</p>
          <p className="text-gray-600">CRM made easy</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">
            Get Started for Free
          </button>
        </div>

        
        <div className="relative md:w-1/2 flex justify-center mt-8 md:mt-0">
         
          <img src={groundImage} alt="CRM Background" className="w-3/4 md:w-3/4" />

         
          <img 
            src={groupImage} 
            alt="CRM Overlay" 
            className="absolute w-2/15 max-w-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </header>
      
     
      
       
        <div className=" absolute left-1/2 transform -translate-x-1/2 -translate-y-10 bg-white   p-6 text-center w-3/4  ">
          <img src={varientImage} alt="Award" className='h-60 w-full' />
        </div>
      
    </section>

     
      <section className="flex flex-col md:flex-row items-center px-4 py-12 space-y-6 md:space-y-0 md:space-x-10 mt-60">
        <div className="md:w-1/3 ms-60">
          <h2 className="text-3xl font-semibold ">Who are we</h2>
          <p className="text-gray-600 mt-4">
          DSolutions is an AI-powered customer platform with all the software, integrations, and resources you need to connect your marketing, sales, and customer service. HubSpot's connected platform enables you to grow your business faster by focusing on what matters most: your customers.
          Get a demo to learn about our premium software, or get started with our full suite of free tools and upgrade as you grow.
          </p>
          <button className="mt-8 bg-blue-600 text-white px-4 py-2 rounded mr-4">Get Demo</button>
          <button className="mt-8 bg-white text-blue-500 px-4 py-2 rounded border border-blue-600">
            Know More
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={laptopImage} alt="About Us" className="rounded-lg shadow-md md:w-3/4 h-90" />
        </div>
      </section>

      
    


      <section className="py-12 bg-blue-50 px-6 max-w-7xl mx-auto">
    
      <h2 className="text-3xl font-semibold text-center">
        CRM that's packed with sales, marketing, and analytics tools
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-center">
        DSolutions brings your marketing, sales, and service teams together on the same AI-powered customer platform. It's easy to use, provides value fast, and gives all teams a unified view of the customer at every stage in their journey.
      </p>

      
      <img src={mainImage} alt="CRM Main" className="mx-auto mt-6 w-full md:w-3/5" />

     
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Get Started</button>
        <button className="ml-4 border border-blue-600 text-blue-600 px-6 py-2 rounded">
          Get Demo
        </button>
      </div>

      
      <div className="mt-12 space-y-12">
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img src={marketingImage} alt="Marketing CRM" className="w-full md:w-2/5" />
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold">MARKETING CRM</h3>
            <p className="text-gray-600 mt-2">
              Manage marketing activities across all channels to attract ideal customers. With One View you get marketing and sales aligned on a common view of the customer.
            </p>
            <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">
              Learn more →
            </a>
          </div>
        </div>


        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
          <img src={saleImage} alt="Sales CRM" className="w-full md:w-2/5" />
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold">Sales CRM</h3>
            <p className="text-gray-600 mt-2">
              Deliver an outstanding sales experience for your potential customers with advanced lead routing, segmentation, and integrations.
            </p>
            <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">
              Learn more →
            </a>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img src={helpdeskImage} alt="Help Desk CRM" className="w-full md:w-2/5" />
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold">Help Desk CRM</h3>
            <p className="text-gray-600 mt-2">
              Deliver exceptional support by engaging with your customers across multiple channels. With One View, support teams get a complete view of all transactions.
            </p>
            <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">
              Learn more →
            </a>
          </div>
        </div>
      </div>

    
      <div className="mt-8 text-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded">
          Explore all
        </button>
      </div>
    </section>

    <section className="py-12 px-6 text-center">
      
      <h2 className="text-3xl font-semibold">Work from where you are</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        In addition to purely sales and marketing tools, DSolutions features everything your team
        needs to collaborate and communicate efficiently: chat, video calls and conferencing, file
        storage, calendar, online documents, mobile sales app, tasks, work time tracking, and more.
      </p>

      
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 border-2 border-blue-500 rounded-lg p-6 shadow-lg max-w-5xl mx-auto">
        
        <div className="text-left max-w-md space-y-4">
          <div className="flex items-center space-x-3">
            <FaHeadset className="text-blue-600 text-lg" />
            <p className="text-blue-600 font-semibold">Help Desk CRM</p>
          </div>
          <p className="text-gray-600 text-sm">
            View meeting details and get navigation details from within the app.
          </p>

          <div className="flex items-center space-x-3">
            <FaMicrophoneAlt className="text-blue-600 text-lg" />
            <p className="text-blue-600 font-semibold">Take voice notes</p>
          </div>
          <p className="text-gray-600 text-sm">
            Record calls and take notes for review and action at a later time.
          </p>

          <div className="flex items-center space-x-3">
            <FaIdCard className="text-blue-600 text-lg" />
            <p className="text-blue-600 font-semibold">Scan business cards</p>
          </div>
          <p className="text-gray-600 text-sm">
            Save time by quickly scanning business cards to capture information directly.
          </p>

          <div className="flex items-center space-x-3">
            <FaVideo className="text-blue-600 text-lg" />
            <p className="text-blue-600 font-semibold">Video calls and Chat</p>
          </div>
          <p className="text-gray-600 text-sm">
            Communicate seamlessly with your team using real-time video and messaging.
          </p>
        </div>

        
        <img
          src={workImage}
          alt="Work Remotely"
          className="md:w-2/4 w-full rounded-lg shadow-md"
        />
      </div>
    </section>

      
      <section className="py-12 px-6 text-center bg-blue-50">
      <h2 className="text-3xl font-semibold">For teams of all sizes</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        Everyone from start-ups to large enterprises prefers DSolutions.
      </p>
      
      <div className="mt-8 flex flex-wrap justify-center gap-6 items-center">
        <img src={frameImage} alt="Brand Logos" className="max-w-full md:max-w-5xl" />
      </div>
      
      <div className="mt-0 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto  p-8   w-full">
        <img
          src={menImage}
          alt="Wais Mojaddidi"
          className="w-36 h-46  object-cover mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-left">
          <span className="text-sm text-blue-600 font-semibold">Large enterprise</span>
          <p className="text-gray-700 mt-2 font-medium">
            “By leveraging Jira and Confluence for automated reporting, we’re saving over 800 hours
            and $500k per year in management consulting costs.”
          </p>
          <h5 className="mt-4 font-bold">Wais Mojaddidi</h5>
          <p className="text-sm text-gray-500">Director of Agile Delivery, Global E-commerce, Royal Caribbean</p>
        </div>
      </div>
    </section>

   
      <section className="py-12 text-center px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold">Great relationships start here</h2>
        <div className="mt-6 flex justify-center items-center max-w-lg mx-auto bg-white shadow-lg rounded-full px-4 py-2">
          <input type="email" placeholder="Your Working Email" className="flex-1 border-none outline-none text-gray-600 px-2" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Get started</button>
        </div>
        <div className="mt-6 flex justify-center space-x-6 text-gray-600">
          <span>🚀 Blazing fast UI</span>
          <span>🔍 One View</span>
          <span>🔗 Integrations</span>
        </div>
      </section>

      
   
    </div>
  );
};

export default Solution;
