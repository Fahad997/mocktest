import Typewriter from "typewriter-effect";

const App = () => {
  return (
    <>
    <head>
     <title>MOCK TEST</title>
     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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
      <h1 className="py-4 flex items-center gap-3 text-lg"><span className="border rounded-full px-3 py-1 bg-blue-400 text-white font-bold">1</span>CEOs/Managing Directors</h1>
      <h1 className="py-4 flex items-center gap-3 text-lg"><span className="border rounded-full px-3 py-1 bg-blue-400 text-white font-bold">2</span>CTOs/CIOs/Heads of Technology Innovation</h1>
      <h1 className="py-4 flex items-center gap-3 text-lg"><span className="border rounded-full px-3 py-1 bg-blue-400 text-white font-bold">3</span>Heads of Property Management</h1>
      </div>
      <div>
      <h1 className="py-4 flex items-center gap-3 text-lg"><span className="border rounded-full px-3 py-1 bg-blue-400 text-white font-bold">4</span>CEOs/Managing Directors</h1>
      <h1 className="py-4 flex items-center gap-3 text-lg"><span className="border rounded-full px-3 py-1 bg-blue-400 text-white font-bold">5</span>CTOs/CIOs/Heads of Technology Innovation</h1>
      <h1 className="py-4 flex items-center gap-3 text-lg"><span className="border rounded-full px-3 py-1 bg-blue-400 text-white font-bold">6</span>Heads of Property Management</h1>
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
    </>
  );
}

export default App;
