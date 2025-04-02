import { FaInstagram, FaFacebookF, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";



function Footer() {
  return (
    <footer className="bg-[#0A1735] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-6">
      
        <div>
          <h3 className="text-lg font-semibold">Features</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Online CRM</li>
            <li>Project Management</li>
            <li>Task Management</li>
            <li>Financial Management</li>
            <li>Online Invoicing</li>
            <li>Knowledge Base</li>
            <li>Mind Maps</li>
          </ul>
        </div>
       
        <div>
          <h3 className="text-lg font-semibold">Features</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Marketing Agencies</li>
            <li>Building & Construction</li>
            <li>IT Departments</li>
            <li>Business Consultants</li>
            <li>Legal Professionals</li>
            <li>Educational Institutions</li>
            <li>Manufacturing Sector</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Success Stories</li>
            <li>Use Cases</li>
            <li>Project Templates</li>
            <li>Free Invoice Generator</li>
            <li>Sitemap</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">Pricing</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Become a Partner</li>
            <li>Find a Partner</li>
            <li>Implementation</li>
            <li>Integrations</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">Stay up to date with platform news and event announcements</h3>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded w-full">Subscribe</button>
          <div className="flex space-x-4 mt-6">
          <FaInstagram className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaPinterest className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
          <p className="mt-4 text-gray-400">support@dsolutions.com</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
        Copyright © 2025 - 2025 All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
