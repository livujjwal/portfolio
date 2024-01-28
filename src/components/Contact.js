const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen pt-[4rem]">
      <div className="flex flex-col items-center justify-center ">
        <div className="pb-4">
          <h4 className="text-[#353535] text-base text-center ">
            Get To Know More
          </h4>
          <h1 className="text-5xl font-bold pb-[1rem] text-center">About Me</h1>
          <p className="py-6">Submit the from below to get in touch with me.</p>
        </div>
        <div className="flex items-center justify-center">
          <form
            action=""
            className="flex flex-col items-center justify-center w-full "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 border-2 rounded-md focus:outline-none w-[28rem]  max-sm:w-[20rem]"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 border-2 rounded-md focus:outline-none my-2 w-[28rem]  max-sm:w-[20rem]"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 border-2 rounded-md focus:outline-none w-[28rem]  max-sm:w-[20rem]"
            ></textarea>
            <button className="w-40 py-4 max-sm:w-24 max-sm:text-xs rounded-3xl border-2 border-black px-4 my-8 font-lg hover:bg-[#353535] hover:text-white hover:border-gray-700">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
      <h4 className="text-[#353535] text-base text-center pt-6 pb-8">
        Copyright © 2023 Ujjwal Singh. All Rights Reserved.
      </h4>
    </div>
  );
};
export default Contact;
