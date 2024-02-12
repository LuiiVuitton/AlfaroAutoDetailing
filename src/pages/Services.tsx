import image from "../assets/LexusImage.jpg";
import intDetail from "../assets/intDetail.jpg";
import extDetail from "../assets/extDetail.jpg";
import fullDetail from "../assets/fullDetail.jpg";

function Services() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What do we offer?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the ultimate restoration as our technicians merge Auto
            Detailing with the meticulous artistry of Paint-less Dent Repair
            (PDR), leaving your car looking flawless from every angle.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="bg-white shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300">
            <div className="px-6 py-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-black">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 truncate">
                Auto Detail- Full Package
              </h3>

              {/* Image */}
              <img
                className="w-full h-32 object-cover object-center"
                src={fullDetail}
                alt="Auto Detailing"
              />

              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                dicta beatae illo illum.
              </p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="bg-white shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300">
            <div className="px-6 py-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-black">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 truncate">
                Auto Detail- Exterior Package
              </h3>

              {/* Image */}
              <img
                className="w-full h-32 object-cover object-center"
                src={extDetail}
                alt="Auto Detailing"
              />

              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                dicta beatae illo illum.
              </p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="bg-white shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300">
            <div className="px-6 py-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-black">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 truncate">
                Auto Detail- Interior Package
              </h3>

              {/* Image */}
              <img
                className="w-full h-32 object-cover object-center"
                src={intDetail}
                alt="Auto Detailing"
              />

              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                dicta beatae illo illum.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300">
            <div className="px-6 py-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-black">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 truncate">
                Paint-less Dent Repair
              </h3>

              {/* Image */}
              <img
                className="w-full h-32 object-cover object-center"
                src={extDetail}
                alt="Auto Detailing"
              />

              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                dicta beatae illo illum.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-white shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300">
            <div className="px-6 py-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-black">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 truncate">
                Hail Damage Repairs
              </h3>

              {/* Image */}
              <img
                className="w-full h-32 object-cover object-center"
                src={extDetail}
                alt="Auto Detailing"
              />

              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                dicta beatae illo illum.
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div className="bg-white shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300">
            <div className="px-6 py-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-black">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 truncate">
                Mobile PDR
              </h3>

              {/* Image */}
              <img
                className="w-full h-32 object-cover object-center"
                src={extDetail}
                alt="Auto Detailing"
              />

              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                dicta beatae illo illum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
