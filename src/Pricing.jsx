import React from 'react'
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
    const plans = [
        {
          title: "Free",
          price: "₹0",
          users: "2 Users",
          storage: "10GB Storage",
          button: "Sign Up",
          features: [
            "Unlimited Projects & Tasks",
            "Unlimited Contacts",
            "Invoicing & Online Payments",
            "Expense Tracking",
            "1 Project Template",
            "1 Knowledge Base",
          ],
        },
        {
          title: "Team",
          price: "₹1,990",
          users: "8 Users",
          storage: "10GB Storage",
          button: "Start free trial",
          features: [
            "Client Portal",
            "3 Project Templates",
            "2 Knowledge Bases",
            "Task Automation",
            "API and Webhooks",
            "Email Integration",
            "Time Tracking",
            "CRM Automation",
          ],
        },
        {
          title: "Business",
          price: "₹4,990",
          users: "16 Users",
          storage: "50GB Storage",
          button: "Start free trial",
          recommended: true,
          features: [
            "Custom Fields",
            "Time Billing",
            "Task Automation",
            "Click & Open Tracking for Email",
            "Telephony Integration",
            "Mailchimp Integration",
            "Advanced Reports",
          ],
        },
        {
          title: "Professional",
          price: "₹9,990",
          users: "25 Users",
          storage: "100GB Storage",
          button: "Start free trial",
          features: [
            "20 Project Templates",
            "Unlimited Knowledge Bases",
            "Change History",
            "Advanced Reports",
            "Custom Logo",
            "Report: Project Cash Flow Forecast",
            "Additional Transactions Reports",
            "External User Roles",
            "User Roles",
          ],
        },
        {
          title: "Enterprise",
          price: "₹19,990",
          users: "Unlimited Users",
          storage: "1000GB Storage",
          button: "Start free trial",
          features: [
            "Formula Fields",
            "Custom Domain",
            "Unlimited External Users",
            "IP Whitelist",
          ],
        },
      ];
  return (
    <div>
         <section className="py-16 bg-gray-50 text-center px-6">
        <h2 className="text-4xl font-semibold">Pricing</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          With tools for work management and collaboration all in one place, DSolutions makes teamwork seamless. Start for free—no credit card required.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
        <button className="border border-blue-600 bg-blue-600 text-white px-4 py-1 rounded-3xl">
          Monthly
        </button>
        <button className="border border-gray-300 text-gray-600 px-4 py-1 rounded-3xl bg-blue-100">
          Yearly
        </button>
      </div>

   
      <div className="mt-12 grid md:grid-cols-5 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg bg-white border relative ${
              plan.recommended ? "border-2 border-orange-500" : "border-gray-200"
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                Recommended
              </span>
            )}
            <h3 className="text-xl font-semibold mt-2">{plan.title}</h3>
            <p className="text-gray-500 mt-1">{plan.users}</p>
            <p className="text-gray-500">{plan.storage}</p>
            <p className="text-blue-600 text-2xl font-bold mt-2">{plan.price}/month</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded w-full">
              {plan.button}
            </button>
            <ul className="text-gray-600 mt-4 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-blue-600 text-sm cursor-pointer mt-6">Show all features</p>
          </div>
        ))}
      </div>
      
      </section>

      
      <section className="py-12 bg-white text-center px-6">
        <h2 className="text-3xl font-semibold">Get Started with Expert Help</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur. Tellus sed dictumst tristique semper ultrices. In metus nunc integer magna accumsan tempus sed quam.
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="p-6 rounded-lg shadow-md bg-blue-50 w-full md:w-1/3 text-left">
            <h3 className="text-xl font-semibold">Consultation & Training</h3>
            <p className="text-gray-600 mt-2">Our experts are here to answer your questions and guide you through every step, helping you set up workflows that truly fit how your team operates.</p>
            <button className="mt-4 bg-blue-400 text-white px-8 py-2 rounded-xl mt-8">Schedule a Consultation</button>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-blue-50 w-full md:w-1/3 text-left">
            <h3 className="text-xl font-semibold">Full Implementation</h3>
            <p className="text-gray-600 mt-2">Leave the setup to us—account configuration, data migration, workflow customization, and team onboarding are all part of the package.
            </p>

            <button className="mt-4 bg-blue-400 text-white px-8 py-2 rounded-xl mr-8 mt-8">Book a Call</button>
            <button className="mt-4 bg-blue-400 text-white px-8 py-2 rounded-xl">Explore all</button>
          </div>
        </div>
      </section>

      <section className="py-12 text-center px-4">
  <h2 className="text-3xl font-semibold">Got Questions?</h2>
  <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
    You will find the answers in the knowledge base or write to us in the online chat.
  </p>

  
  <div className="mt-8 border-2 border-blue-500 p-6 rounded-lg max-w-5xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
      {[
        ["Is there a discount on Annual plans?", "What's the difference between annual and monthly billing?"],
        ["Can I have a trial?", "Can I change my plan?"],
        ["Is the 'free forever' plan really free?", "How can I manage my billing?"],
        ["What plan should I choose?", "How do I cancel the automatic subscription renewal option?"],
        ["Do you offer any discounts?", "How can I get assistance with my project implementation?"]
      ].map(([leftQuestion, rightQuestion], index) => (
        <React.Fragment key={index}>
         
          <div className="flex justify-between items-center border-b py-3 md:px-4">
            <span className="text-sm md:text-base">{leftQuestion}</span>
            <span className="font-bold text-lg md:text-xl cursor-pointer">+</span>
          </div>
         
          <div className="flex justify-between items-center border-b py-3 md:px-4">
            <span className="text-sm md:text-base">{rightQuestion}</span>
            <span className="font-bold text-lg md:text-xl cursor-pointer">+</span>
          </div>
        </React.Fragment>
      ))}
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
  )
}

export default Pricing
