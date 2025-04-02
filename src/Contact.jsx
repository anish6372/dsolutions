import askImage from "./assets/ask.png";
import answerImage from "./assets/answer.png"
import getdemoImage from "./assets/getdemo.png"


function Contact() {
  return (
    <div>
           <section className="py-12 px-6 text-center border-b">
        <h2 className="text-3xl font-semibold">Get in touch</h2>
        <p className="text-gray-600 mt-2">Want to get in touch? I would love to hear from you. Here’s </p>
        <p className="text-gray-600 ">how can you reach us</p>
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          
          <div className="text-left p-6     ms-20">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-gray-600 mt-2 font-bold">Contact us today to learn how DSolutions can make your team  </p>
            <p className="text-gray-600 font-bold">or agency more efficient and productive.</p>
               <p className="text-gray-600 font-bold">Our experts will advise you on the best plan to</p> 
               <p className="text-gray-600 font-bold"> manage your projects, workflows and processes..</p>

               <h4 className="text mt-8 font-semibold ms-8">we are glad to see you</h4>
            <div className="mt-6 flex jusify-between space-x-6 ">
                <div className="border border-black-500 p-6 rounded">
                <p className="text-blue-600 font-semibold">Our mailing address</p>
                <p className="text-gray-600">240, CI Building, </p>
                <p className="text-gray-600">One Central, WTC</p>
                <p className="text-gray-600">, Dubai PO 114142</p>

                </div>
             <div className="border border-black-500 p-6 rounded">
             <p className="text-blue-600 font-semibold">Email</p>
             <p className="text-gray-600">support@dsolutions.com</p>

             </div>
            
            
             
            </div>
          </div>
         
          <div className="p-6 bg-blue-100 rounded-lg shadow-md w-3/4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-4 py-2 rounded mb-4"
        />
        <input
          type="email"
          placeholder="Email ID"
          className="w-full border px-4 py-2 rounded mb-4"
        />
        <textarea
          placeholder="Message"
          className="w-full border px-4 py-2 rounded mb-4"
          rows="4"
        ></textarea>
        <button className="w-full bg-blue-600 text-white px-6 py-2 rounded">
          Submit
        </button>
        <p className="text-xs text-gray-500 mt-2">
          By submitting, you confirm that you agree to the storing and processing of your personal data by DSolutions as described in our{" "}
          <span className="text-blue-500 cursor-pointer">Privacy Statement</span>.
        </p>
      </div>
    
        </div>
      </section>

     
      <section className="py-12 px-6 text-center bg-white">
        <h3 className="text-xl font-semibold">Need Help?</h3>
        <p className="text-gray-600 mt-2">Explore our resources to quickly get started with 
            DSolutions business.</p>
            <p className="text-gray-600 mt-2 text-center mb-8">management software</p>
       
        <div className="flex space-x-6 justify-center px-6">
            <img src={getdemoImage} alt="" />
            <img src={answerImage} alt="" />
            <img src={askImage} alt="" />
        </div>
        <button className="justify-center">features </button>
      </section>
    </div>
  );
}

export default Contact;
