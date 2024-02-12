function Home() {
  return (
    <div className="bg-white flex flex-col justify-center items-center pb-20 pt-10">
      <div className="text-center 	">
        <p className="text-lg text-black mb-8 italic">Welcome to</p>
        <h1 className="text-5xl font-bold text-black mb-4 italic ">
          Alfaro's Auto Detailing
        </h1>
        <p className="text-lg text-black mb-8"></p>
        <button className="bg-burgandy text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300 mr-4">
          Book now
        </button>
      </div>
      <div className="pt-10 text-black text-center italic">
        <p>Scroll down to learn more</p>
        <svg
          className="w-6 h-6 mx-auto mt-2 animate-bounce text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Home;
