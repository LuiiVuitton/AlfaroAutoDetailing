function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-screen flex flex-col justify-center items-center">
      <div className="text-center 	">
        <p className="text-lg text-black mb-8">Welcome to</p>
        <h1 className="text-5xl font-bold text-black mb-4">
          Alfaro's Auto Detailing
        </h1>
        <p className="text-lg text-black mb-8">
          "A clean car gives more beauty"
        </p>
        <button className="bg-burgandy text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-400 hover:text-white transition duration-300">
          Book now
        </button>
      </div>
      <div className="absolute bottom-0 mb-6 text-black text-center">
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
