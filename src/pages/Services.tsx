function Services() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque
            exercitationem cupiditate, minima ipsam architecto.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-6 py-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
              <h3 className="mt-5 text-lg font-medium text-gray-900">
                Service 1
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                dicta beatae illo illum.
              </p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-6 py-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900">
                Service 2
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                dicta beatae illo illum.
              </p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-6 py-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
              <h3 className="mt-5 text-lg font-medium text-gray-900">
                Service 3
              </h3>
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
