import { useState } from "react";
import Typewriter from "typewriter-effect";

const App = () => {
  const [changeColor,setChangeColor] = useState(0);
  return (
    <>
    <head>
     <title>MOCK TEST</title>
     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
     <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <header className="flex bg-purple-700 justify-around items-center">
    <div className="my-2">
    <img src="/logo.png" alt="Logo" width={250} />  
    </div>
    <div>
      <ul className="flex text-white gap-10">
        <li>Home</li>
        <li>Event Details</li>
        <li>Schedule</li>
        <li>Speakers</li>
        <li>Sponsors & Partners</li>
        <li>Contact</li>
      </ul>
    </div>
    <div>
    <a href="#" className="text-purple-700 bg-white border rounded-lg border-white py-3 px-5">Register</a>
    </div>
    </header>
    <section className="relative h-screen">
    <div className="relative h-full bg-[#000] overflow-hidden after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:block after:bg-[#000000cc]">
    <iframe className="block absolute w-full h-screen" src="https://www.youtube.com/embed/ihdm-FG_SqA?controls=0&autoplay=1&mute=1&loop=1&playsinline=1&playlist=ihdm-FG_SqA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; loop" allowfullscreen></iframe>
    </div>
    <div className="absolute top-0 left-0 w-full h-full text-[#fff]">
      <div className="absolute top-1/3 left-1/2 w-full -translate-x-1/2">
        <h1 className="text-center text-3xl uppercase">middle east</h1>
        <h1 className="text-center font-black text-6xl uppercase pt-5 pb-2">protech innovation</h1>
        <h1 className="text-center font-black text-6xl uppercase">summit 2023</h1>
        <div className="flex justify-evenly mt-12">
        <div>
          <h1 className="text-lg flex items-center"><i className="material-icons pr-3 text-lg">calendar_month</i>23rd - 24th MAY 2023</h1>
        </div>
        <div>
          <h1 className="text-lg flex items-center"><i className="material-icons pr-3">map</i>Dubai, UAE</h1>
        </div>
        </div>
        <div className="mt-16 flex justify-center font-bold text-lg">
        <Typewriter onInit={(typewriter) => {
          typewriter
         .typeString("Embracing Proptech to drive Innovation in Real Estate")
         .pauseFor(500)
         .deleteAll()
         .typeString("Embracing Proptech to drive Innovation in Real Estate")
         .start();
         }}
/>
        </div>
      </div>
    </div>
    </section>

    <section className="bgimage1 p-10">
      <h1 className="text-center text-white font-bold text-4xl">EVENT OVERVIEW</h1>
      <div className="flex gap-4 mt-6">
        <div className="text-white bg-black text-lg p-2">
          <h1 className="py-4">Despite global headwinds, the real estate market in Dubai continues to leap over other metropolises amid global economic challenges. The influx of HNWIs and overseas buyers investing in Dubai’s high-end developments with residents eyeing for stability and benefits from the new freehold and visa-related reforms, a rush of first-time home buyers has proven the resiliency of the Emirate that holds an abundance of safe and unmatched opportunities as a global hub for business, tourism and innovation</h1>
          <h1>Dubai Real Estate had over 84,196 real estate transactions in 2021 worth almost AED 300 billion. The value of these transactions is the highest it’s ever been in the recorded history of Dubai Real Estate. Q2 2022 when compared to Q2 2021 showed an increase of 45.86 percent for volume and an increase of 61.56 percent for value.</h1>
        </div>
        <div>
         <img src="/image2.jpg" alt="Event" width={3000}/>
        </div>
      </div>
      <div className="mt-8 text-white bg-black text-lg p-2">
        <h1 className="py-2">Proptech, a combination of property and technology cites to the management, handling, and monetization of real estate assets using technologies such as AI, blockchain and automation. The rising digital transformation throughout the property sector such as predictive analytics, asset digitization, IoT in workplace management, data analytics on market performance, and predictive analytics in asset performance is revolutionizing the industry and cannot be ignored.</h1>
      </div>
      <div className="mt-8 text-white bg-black text-lg p-2">
      <h1>Taking a view of this euphoria that looks at modifying the paradigm of the industry, we bring to you The Middle East Proptech Innovation Summit 2023. This forum aims at providing a platform for the regional Real Estate fraternity to gather and discuss the new era of Proptech with topics such as including transparency of Information, virtual viewings, valuations powered by AI, data-driven online listings and blockchain transactions, among others. This is an invaluable two-day opportunity to network with industry leaders and discuss all of the latest technological advances in Proptech imperative in driving your business forward.</h1>
    </div>
    </section>

    <section className="relative h-screen">
    <div className="relative h-full overflow-hidden after:absolute after:content-[''] after:top-0 after:w-full after:h-full after:block">
    <iframe className="block absolute w-full h-screen" src="https://www.youtube.com/embed/uc_A9ka-BCk?controls=0&autoplay=1&mute=1&loop=1&playsinline=1&playlist=uc_A9ka-BCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; loop" allowfullscreen></iframe>
    </div>
    <div className="absolute top-32 left-0 w-full h-full text-[#000]">
    <h1 className="capitalize font-bold text-center text-4xl">who will you meet ?</h1>
    <div className="flex justify-center mt-20 gap-32">
      <div>
      <h1 className="py-4 flex items-center gap-3 text-slate-700 text-lg"><span className="border rounded-full px-3 py-1 bg-blue-400 text-white font-bold">1</span>CEOs/Managing Directors</h1>
      <h1 className="py-4 flex items-center gap-3 text-slate-700 text-lg"><span className="border rounded-full px-3 py-1 bg-blue-400 text-white font-bold">2</span>CTOs/CIOs/Heads of Technology Innovation</h1>
      <h1 className="py-4 flex items-center gap-3 text-lg text-slate-700"><span className="border rounded-full px-3 py-1 bg-blue-400 text-white font-bold">3</span>Heads of Property Management</h1>
      </div>
      <div>
      <h1 className="py-4 flex items-center gap-3 text-lg text-slate-700"><span className="border rounded-full px-3 py-1 bg-blue-400 text-white font-bold">4</span>CEOs/Managing Directors</h1>
      <h1 className="py-4 flex items-center gap-3 text-lg text-slate-700"><span className="border rounded-full px-3 py-1 bg-blue-400 text-white font-bold">5</span>CTOs/CIOs/Heads of Technology Innovation</h1>
      <h1 className="py-4 flex items-center gap-3 text-lg text-slate-700"><span className="border rounded-full px-3 py-1 bg-blue-400 text-white font-bold">6</span>Heads of Property Management</h1>
      </div>
    </div>
    </div>
    </section>

    <section>
      <h1 className="mt-16 text-center text-3xl font-bold">INDUSTRIES COVERED</h1>
  
      <div className="mt-8 grid grid-cols-3 justify-center">
        <div>
          <img className="w-1/2 flex mx-auto py-4" src="/gif1.gif" alt="Animation1" />
          <h1 className="text-2xl text-center font-bold">Real-Estate</h1>
          <h1 className="text-2xl text-center font-bold">Consultants</h1>
        </div>
        <div>
          <img className="w-1/2 flex mx-auto border rounded-full border-transparent py-4" src="/communitymanagement.gif" alt="Community Management" />
          <h1 className="text-2xl text-center font-bold">Community</h1>
          <h1 className="text-2xl text-center font-bold">Management</h1>
          <h1 className="text-2xl text-center font-bold">Companies</h1>
        </div>
        <div>
          <img className="w-1/2 flex mx-auto border rounded-full border-transparent py-4" src="/realbrokers.gif" alt="Real Brokers" />
          <h1 className="text-2xl text-center font-bold">Real-Estate Brokers</h1>
        </div>
        <div>
          <img className="w-1/2 flex mx-auto border rounded-full border-transparent py-4" src="/investors.gif" alt="Investors" />
          <h1 className="text-2xl text-center font-bold">Investors & VCs</h1>
        </div>
        <div>
          <img className="w-1/2 flex mx-auto border rounded-full border-transparent py-4" src="/propertydevelopers.gif" alt="Animation1" />
          <h1 className="text-2xl text-center font-bold">Property Developers</h1>
        </div>
        <div>
          <img className="w-1/2 flex mx-auto border rounded-full border-transparent py-4" src="/propertymanagementcompany.gif" alt="Animation1" />
          <h1 className="text-2xl text-center font-bold">Property Management Companies</h1>
        </div>
      </div>
    </section>

    <section className="bgimage2 mt-16 py-8">
     <h1 className="py-8 text-center text-white text-4xl font-bold">Why Attend ?</h1>
     <div className="mx-12 text-white bg-indigo-700 p-6 border rounded-lg border-indigo-700">
     <h1 className="py-4">This Summit will focus on the emerging trends in digital transformation of the Real Estate Industry. Delegates will learn from real-life case studies, business insights and lessons learned from leaders to discover the best strategies, tools & methods for tapping into the potential of tech-driven management, handling and monetization of real estate assets.</h1>
     <h1 className="py-4">If you are ready to innovate and join the ranks of the industry thought leaders while resonating with the following reasons compelling enough to attend, then register today:</h1>
     <h1 className="py-6 flex items-center border-b border-b-white"><i className="material-icons text-lg">attach_file</i>Gain Knowledge and Insights from Top Industry Leaders and Experts from across the globe</h1>
     <h1 className="py-6 flex items-center border-b border-b-white"><i className="material-icons text-lg">attach_file</i>Network with Industry Peers in a solution-oriented environment</h1>
     <h1 className="py-6 flex items-center border-b border-b-white"><i className="material-icons text-lg">attach_file</i>Discuss Significant Partnerships and Collaborations with Industry leaders</h1>
     <h1 className="py-6 flex items-center border-b border-b-white"><i className="material-icons text-lg">attach_file</i>Deep Dive into Insights derived from real-time case studies</h1>
     <h1 className="py-6 flex items-center border-b border-b-white"><i className="material-icons text-lg">attach_file</i>Build Industry Ecosystem Collaboration to address latest challenges</h1>
     </div>
    </section>

    <section className="p-10">
     <h1 className="text-center font-black text-4xl">Topic Highlights</h1>
     <div className="grid grid-cols-5 mt-20 gap-5">
       <div onMouseEnter={() => setChangeColor(1)} onMouseLeave={() => setChangeColor(0)} className={`${changeColor === 1 ? 'bg-sky-400': 'bg-indigo-700'} grid justify-items-center p-5 border border-indigo-700 hover:border-sky-400 rounded-2xl`}>
        <span className={`material-symbols-outlined ${changeColor === 1 ? 'animate-beat' : 'animate-none'} text-white w-fit h-min p-5 bg-orange-400 border border-orange-400 rounded-xl`}>database</span>
        <h1 className="text-center text-white my-4 font-bold text-lg">Big Data collection and analysis of property data</h1>
       </div>
       <div onMouseEnter={() => setChangeColor(2)} onMouseLeave={() => setChangeColor(0)} className={`${changeColor === 2 ? 'bg-sky-400': 'bg-indigo-700'} grid justify-items-center p-5 border border-indigo-700 hover:border-sky-400 rounded-2xl`}>
        <i className={`material-icons ${changeColor === 2 ? 'animate-beat' : 'animate-none'} text-white w-fit h-min p-5 bg-blue-400 border border-blue-400 rounded-xl`}>smart_toy</i>
        <h1 className="text-center text-white my-4 font-bold text-lg">AI and cloud-based software to streamline administration tasks</h1>
       </div>
       <div onMouseEnter={() => setChangeColor(3)} onMouseLeave={() => setChangeColor(0)} className={`${changeColor === 3 ? 'bg-sky-400': 'bg-indigo-700'} grid justify-items-center p-5 border border-indigo-700 hover:border-sky-400 rounded-2xl`}>
        <i className={`material-icons ${changeColor === 3 ? 'animate-beat' : 'animate-none'} text-white w-fit h-min p-5 bg-gray-400 border border-gray-400 rounded-xl`}>android</i>
        <h1 className="text-center text-white my-4 font-bold text-lg">Virtual Reality tools to enhance the property viewing experience</h1>
       </div>
       <div onMouseEnter={() => setChangeColor(4)} onMouseLeave={() => setChangeColor(0)} className={`${changeColor === 4 ? 'bg-sky-400': 'bg-indigo-700'} grid justify-items-center p-5 border border-indigo-700 hover:border-sky-400 rounded-2xl`}>
        <i className={`material-icons ${changeColor === 4 ? 'animate-beat' : 'animate-none'} text-white w-fit h-min p-5 bg-pink-400 border border-pink-400 rounded-xl`}>dvr</i>
        <h1 className="text-center text-white my-4 font-bold text-lg">Automated Property Management</h1>
       </div>
       <div onMouseEnter={() => setChangeColor(5)} onMouseLeave={() => setChangeColor(0)} className={`${changeColor === 5 ? 'bg-sky-400': 'bg-indigo-700'} grid justify-items-center p-5 border border-indigo-700 hover:border-sky-400 rounded-2xl`}>
        <i className={`material-icons ${changeColor === 5 ? 'animate-beat' : 'animate-none'} text-white w-fit h-min p-5 bg-violet-400 border border-violet-400 rounded-xl`}>lan</i>
        <h1 className="text-center text-white my-4 font-bold text-lg">IoT ‘smart’ network devices and sensors for efficient property maintenance</h1>
       </div>
       <div onMouseEnter={() => setChangeColor(6)} onMouseLeave={() => setChangeColor(0)} className={`${changeColor === 6 ? 'bg-sky-400': 'bg-indigo-700'} grid justify-items-center p-5 border border-indigo-700 hover:border-sky-400 rounded-2xl`}>
        <i className={`material-icons ${changeColor === 6 ? 'animate-beat' : 'animate-none'} text-white w-fit h-min p-5 bg-gray-400 border border-gray-400 rounded-xl`}>receipt_long</i>
        <h1 className="text-center text-white my-4 font-bold text-lg">Blockchain powered Real Estate transactions</h1>
       </div>
       <div onMouseEnter={() => setChangeColor(7)} onMouseLeave={() => setChangeColor(0)} className={`${changeColor === 7 ? 'bg-sky-400': 'bg-indigo-700'} grid justify-items-center p-5 border border-indigo-700 hover:border-sky-400 rounded-2xl`}>
        <i className={`material-icons ${changeColor === 7 ? 'animate-beat' : 'animate-none'} text-white w-fit h-min p-5 bg-orange-400 border border-orange-400 rounded-xl`}>headset_mic</i>
        <h1 className="text-center text-white my-4 font-bold text-lg">Online platforms and chatbots to facilitate the customer experience</h1>
       </div>
       <div onMouseEnter={() => setChangeColor(8)} onMouseLeave={() => setChangeColor(0)} className={`${changeColor === 8 ? 'bg-sky-400': 'bg-indigo-700'} grid justify-items-center p-5 border border-indigo-700 hover:border-sky-400 rounded-2xl`}>
        <i className={`material-symbols-outlined ${changeColor === 8 ? 'animate-beat' : 'animate-none'} text-white w-fit h-min p-5 bg-blue-400 border border-blue-400 rounded-xl`}>crowdsource</i>
        <h1 className="text-center text-white my-4 font-bold text-lg">A new era of Crowdfunding as an alternate source of property funding</h1>
       </div>
       <div onMouseEnter={() => setChangeColor(9)} onMouseLeave={() => setChangeColor(0)} className={`${changeColor === 9 ? 'bg-sky-400': 'bg-indigo-700'} grid justify-items-center p-5 border border-indigo-700 hover:border-sky-400 rounded-2xl`}>
        <i className={`material-icons ${changeColor === 9 ? 'animate-beat' : 'animate-none'} text-white w-fit h-min p-5 bg-violet-400 border border-violet-400 rounded-xl`}>phone_android</i>
        <h1 className="text-center text-white my-4 font-bold text-lg">Innovation in mobile applications for tenants and landlords</h1>
       </div>
       <div onMouseEnter={() => setChangeColor(10)} onMouseLeave={() => setChangeColor(0)} className={`${changeColor === 10 ? 'bg-sky-400': 'bg-indigo-700'} grid justify-items-center p-5 border border-indigo-700 hover:border-sky-400 rounded-2xl`}>
        <i className={`material-icons ${changeColor === 10 ? 'animate-beat' : 'animate-none'} text-white w-fit h-min p-5 bg-pink-400 border border-pink-400 rounded-xl`}>currency_bitcoin</i>
        <h1 className="text-center text-white my-4 font-bold text-lg">Impact of Cryptocurrency on Real Estate sector</h1>
       </div>
     </div>
    </section>

    <section className="bgimage3 mt-4 flex p-5">
    <div className="p-10">
    <h1 className="text-white text-center text-4xl font-bold">Why Sponsor ?</h1>
    <h1 className="my-8 text-lg"><b>MIDDLE EAST PROPTECH INNOVATION SUMMIT 2023</b> presents the perfect opportunity for solution providers to engage with key decision makers such as CEOs, CIOs, Heads of Property Management, Heads of Facility Management etc from leading Property Developers, Property Management Companies, Real Estate brokerage houses to differentiate their solution offerings and put forward their value proposition in this crowded marketplace. Some of the key reasons why you should sponsor:</h1>
    <div className="mt-8 flex gap-5 items-center">
      <div>
      <span className="material-symbols-outlined text-white bg-pink-500 border border-pink-500 p-5 rounded-full">social_leaderboard</span>
      </div>
      <div>
        <h1 className="font-bold text-2xl py-2">Demonstrate Thought Leadership</h1>
        <p>Position your company as a thought leader by delivering a</p>
        <p>standalone presentation or moderating a panel discussion to a pre-</p>
        <p>qualified audience comprising decision-makers.</p>
      </div>
    </div>
    <div className="mt-8 flex gap-5 items-center">
      <div>
      <span className="material-symbols-outlined text-white bg-pink-500 border border-pink-500 p-5 rounded-full">connect_without_contact</span>
      </div>
      <div>
        <h1 className="font-bold text-2xl py-2">Network & Generate Leads</h1>
        <p>Optimize your networking opportunities by getting right in front of</p>
        <p>key prequalified decision makers based on seniority, budget</p>
        <p>availability, and motivation to learn about the latest technologies.</p>
      </div>
    </div>
    <div className="mt-8 flex gap-5 items-center">
      <div>
      <span className="material-symbols-outlined text-white bg-pink-500 border border-pink-500 p-5 rounded-full">monitoring</span>
      </div>
      <div>
        <h1 className="font-bold text-2xl py-2">Brand Positioning</h1>
        <p>Establish, strengthen and re-position your brand in front of business</p>
        <p>owners & technology leaders who are looking to re-align and</p>
        <p>strengthen their digital transformation strategies.</p>
      </div>
    </div>
    </div>
    <div>
      <img src="/sponsor.png" alt="Sponsor" width={2000} />
    </div>
    </section>

    <section className="my-8">
    <h1 className="uppercase text-blue-700 font-bold text-4xl text-center">sponsors & partners</h1>
    <div className="flex mt-10 gap-10 justify-center">
    <img src="/uaenews.png" className="w-40" alt="UAE NEWS" />
    <img src="/mygate.png" className="w-40" alt="MY GATE" />
    <img src="/exotel.png" className="w-40" alt="EXOTEL" />
    <img src="/blocktides.png" className="w-40" alt="BLOCK TIDES" />
    <img src="/tcu.png" className="w-40" alt="TCU" />
    </div>
    <h1 className="my-6 text-center">To find out more about the ROI-driven sponsorship and exhibition opportunities, contact us now at</h1>
    <h1 className="text-center">+971 4 243 4677 or email <a href="#" className="text-red-500">info@verve-management.com</a></h1>
    </section>

    <footer className="mt-8 px-10 py-6 bg-[#021159]">
      <div className="flex mt-8 justify-evenly border-b border-b-slate-400">
      <div className="w-1/2">
        <h1 className="text-white font-bold text-2xl">Quick Links</h1>
        <ul className="mt-8">
          <li className="uppercase text-white py-4 flex items-center"><i className="material-icons pr-3 text-blue-700">chevron_right</i>home</li>
          <li className="uppercase text-white py-4 flex items-center"><i className="material-icons pr-3 text-blue-700">chevron_right</i>schedule</li>
          <li className="uppercase text-white py-4 flex items-center"><i className="material-icons pr-3 text-blue-700">chevron_right</i>sponsors & partners</li>
          <li className="uppercase text-white py-4 flex items-center"><i className="material-icons pr-3 text-blue-700">chevron_right</i>contact us</li>
        </ul>
      </div>
      <div>
        <h1 className="text-white font-bold text-2xl">Address</h1>
        <h1 className="text-white py-4 flex items-center"><i className="material-icons pr-3 text-indigo-500">map</i>1702 & 1706 , Mazaya Business Avenue BB2, Al Thanya Fifth, Jumeirah Lakes Towers, Dubai, UAE</h1>
        <h1 className="text-white font-bold text-2xl">Call Us</h1>  
        <h1 className="text-white py-4 flex items-center"><i className="material-icons pr-3 text-indigo-500">phone_forwarded</i>+971 4 243 4677/88</h1>
        <h1 className="text-white font-bold text-2xl">Email Us</h1>
        <h1 className="text-white py-4 flex items-center"><i className="material-icons pr-3 text-indigo-500">mail</i>info@verve-management.com</h1>
      </div>
      <div className="pl-2">
      <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57823.351429511094!2d55.146148!3d25.069363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cafd619c309%3A0xfa853f4a41d8970!2sIL%20Mazaya%20Business%20Avenue%20BB-2!5e0!3m2!1sen!2sus!4v1690932957227!5m2!1sen!2sus" className="border-none" width={400} height={300} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
      <div className="mt-8">
         <h1 className="text-center text-white text-base">Copyrights © {new Date().getFullYear()} All Rights Reserved I Verve Management.</h1>
      </div>
    </footer>
    </>
  );
}

export default App;
