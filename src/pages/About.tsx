import image from "../assets/LexusImage.jpg";

function About() {
  return (
    <div id="About" className="bg-sectionLight text-black py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <div className="lg:w-1/2 lg:order-1 mt-10 lg:mt-0 pr-20 pb-10">
            <img
              src={image}
              alt="About Me"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:w-1/2 lg:order-2 px-4 lg:px-0">
            {/* Change order to 2 for the image column on larger screens */}
            <h1 className="text-3xl lg:text-3xl font-bold mb-4">
              "A clean Car gives more Beauty"
            </h1>
            <p className="text-lg mb-4">
              A family owned business based in Gaithersburg, MD.
            </p>
            <p className="mb-4">
              Welcome to Alfaro Auto Detail Shop, where our family owned
              business is committed to restoring your vehicle's beauty, inside
              and out. With our 10+ years of experience we promise to deliver
              amazing results and customer satisfaction.
            </p>
            <div className="text-center lg:text-left">
              <button className="bg-white text-burgandy font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-400 hover:text-white hover:scale-105 transition duration-300 mr-4">
                Contact Us
              </button>
              {/* Added hover:scale-105 class to increase size on hover */}
              <button className="bg-lightBlue text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-400 hover:text-white hover:scale-105 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
