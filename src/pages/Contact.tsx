function Contact() {
  return (
    <div id="Contact">
      <section className="bg-sectionLight py-5">
        <div className="container">
          <div className="row">
            {/* Direction Steps */}
            <div className="col-lg-3 mb-4 flex flex-col items-center justify-center">
              <div className="flex flex-col justify-start">
                <div className="text-gray-700 text-sm mb-2">
                  <span className="text-lightBlue font-semibold italic">
                    {" "}
                    Step 1:
                  </span>{" "}
                  Fill out the Form down below
                </div>
                <div className="text-gray-700 text-sm mb-2">
                  <span className="text-lightBlue font-semibold italic">
                    {" "}
                    Step 2:
                  </span>{" "}
                  Let us know which service you want
                </div>
                <div className="text-gray-700 text-sm mb-2">
                  <span className="text-lightBlue font-semibold italic">
                    {" "}
                    Step 3:
                  </span>{" "}
                  Make sure to include pictures
                </div>

                <div className="text-gray-700 text-sm mb-2">
                  <span className="text-lightBlue font-semibold italic">
                    {" "}
                    Step 4:
                  </span>{" "}
                  Submit the form for an estimate
                </div>
              </div>
            </div>
            {/* Form */}
            <div className="col-lg-9">
              <div className="flex flex-col items-center justify-center">
                <form
                  className="w-full max-w-lg"
                  action="mailto:luis1134@icloud.com"
                  method="post"
                  encType="text/plain"
                >
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-name"
                      >
                        Your Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-name"
                        type="text"
                        name="Name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                        htmlFor="grid-email"
                      >
                        Your Email
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email"
                        type="email"
                        name="Email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-message"
                    >
                      Your Message
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-message"
                      name="Message"
                      placeholder="Your Message"
                      rows={6}
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
