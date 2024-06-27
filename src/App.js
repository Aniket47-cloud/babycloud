import React from 'react';
import './App.css'
const App = () => {
  return (
    <div className="w-[100vw]">
      {/* Header */}
      <header className=" pb-[15px] w-[100vw] pt-5">
        <div className=" nav  flex  justify-between items-center  ">
          <p className="logo   text-[#ff5353] text-bold font-[Righteous]" >witt.</p>

          <nav>
            <ul className=" links flex  space-x-8">
              <li><a href="#" className="hover:text-gray-600 font-semibold">Home</a></li>
              <li><a href="#" className="hover:text-gray-600 font-semibold">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-600 font-semibold">Blogs</a></li>
              <li><a href="#" className="hover:text-gray-600 font-semibold">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-600 font-semibold">About Us</a></li>

            </ul>
          </nav>

        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section h-[100vh] max-w-[100vw] w-[100%] relative py-1">



        <img className="background max-w-[1273px] w-[100%] z-10 h-[720px]  absolute right-[8rem]" src="/assets/Screenshot 2024-06-26 231600.svg" alt="Hero" />
        <img src="/assets/Image2.svg" alt="img" className="man absolute   left-[10rem] h-[276px] w-[226px] z-20" />
        < img src="/assets/hero.svg" alt="img" className="hero   z-30" />
        <img className=" play w-[89px] h-[105px] absolute z-40  top-[0.97rem] left-[77.2rem]" src="/assets/Image3.svg" alt="play" />
        <div className="download   transition-all duration-200  text-center bg-black rounded-3xl px-4 p-3  absolute z-30">Download Now</div>


        <p className=" witt z-30 absolute text-white  font-bold font-[Righteous]">witt.</p>

        <div className=" hero-title absolute z-30 tracking-wider  text-white  font-semibold font-[Righteous]">
          <p className="desktop leading-none">  <span className="ml-[5rem]">your</span>   <br />
            second<br />
            <span className="ml-[5rem]">brain</span>
          </p>
          <p className="mobile">your second brain</p>

        </div>
        <p className="hero-content absolute z-30 text-white  font-[Righteous]">a personal assistant to organise, track and document your work </p>


      </section>


    </div>
  );
};

export default App;