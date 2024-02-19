import intDetail from "../assets/intDetail.jpg";
import extDetail from "../assets/extDetail.jpg";
import fullDetail from "../assets/fullDetail.jpg";

import dent1 from "../assets/dent1.jpeg";
import hailRepair from "../assets/hailRepair.jpg";
import extPDR from "../assets/extPDR.png";

function Services() {
  return (
    <div id="Services">
      <div className="bg-sectionDark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl italic">
              What do we offer?
            </h2>
            <p className="mt-4 text-lg text-white">
              Experience the{" "}
              <span className="text-lightBlue font-bold italic">
                {" "}
                ultimate restoration
              </span>{" "}
              as our technicians{" "}
              <span className="text-lightBlue font-bold italic">
                {" "}
                merge Auto Detailing with Paint-less Dent Repair (PDR)
              </span>{" "}
              , leaving your car looking flawless from every angle.
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
                  A Full-Auto detail aims to restore the vehicle's appearance to
                  its best possible condition, both exterior and interior, and
                  may take several hours to complete depending on the level of
                  service and the condition of the vehicle.{" "}
                </p>

                <button className="bg-lightBlue text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300">
                  Book Now
                </button>
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
                  Focused solely on the outside of the vehicle. Cleaning of
                  wheels and tires, polishing and waxing the paint, and possibly
                  applying protective coatings to enhance shine and durability.{" "}
                </p>

                <button className="bg-lightBlue text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300">
                  Book Now
                </button>
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
                  An interior detail focuses exclusively on cleaning and
                  restoring the inside of a vehicle. This includes shampoo and
                  vacuuming the carpets and upholstery, cleaning and
                  conditioning leather seats, wiping down and disinfecting
                  surfaces such as the dashboard, door, panels, and center
                  console, cleaning the windows and mirrors.{" "}
                </p>

                <button className="bg-lightBlue text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300">
                  Book Now
                </button>
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
                  src={dent1}
                  alt="Auto Detailing"
                />

                <p className="mt-2 text-sm text-gray-500">
                  Paintless dent repair (PDR) is a technique used to remove
                  minor dents and dings from the body of a vehicle without the
                  need for painting or refinishing. It's typically used for
                  small dents that haven't caused damage to the paint surface,
                  such as those caused by hail, door dings, or minor collisions.
                </p>

                <button className="bg-lightBlue text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300">
                  Book Now
                </button>
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
                  src={hailRepair}
                  alt="Auto Detailing"
                />

                <p className="mt-2 text-sm text-gray-500">
                  Hail damage can result in numerous small dents across the body
                  of a car, and PDR offers an efficient and effective way to
                  restore the vehicle's appearance without the need for
                  traditional bodywork and painting.{" "}
                </p>

                <button className="bg-lightBlue text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300">
                  Book Now
                </button>
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
                  src={extPDR}
                  alt="Auto Detailing"
                />

                <p className="mt-2 text-sm text-gray-500">
                  mobile PDR offers convenience by providing on-site repairs.
                  Technicians travel to the customer's location to perform
                  paintless dent repair on their vehicle. Instead of requiring
                  the vehicle owner to bring their car to a fixed location such
                  as an auto body shop, mobile PDR offers convenience by
                  providing on-site repairs.{" "}
                </p>

                <button className="bg-lightBlue text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
