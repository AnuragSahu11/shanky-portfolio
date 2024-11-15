import axios from "axios";

const sendEmail = async () => {
  const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
    service_id: import.meta.env.VITE_SERVICE_ID,
    template_id: import.meta.env.VITE_TEMPLATE_ID,
    user_id: import.meta.env.VITE_USER_ID,
    template_params: {
      to_name: "James",
      from_name: "Anurag",
      message: "NEWWWWW",
    },
  });
};

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center mb-20">
      <div className="w-full">
        <p className="font-casanova text-4xl ">Contact</p>
        <p>Get in touch or just to say!</p>
      </div>
      <div className="text-5xl flex gap-10 my-20">
        <img src="../../../../public/img/LinkedIn.svg"></img>
        <img src="../../../../public/img/Behance.svg"></img>
        <img src="../../../../public/img/Instagram.svg"></img>
        <img src="../../../../public/img/Dribbble.svg"></img>

        {/* <span className="iconify mdi--linkedin"></span> */}
        {/* <span className="iconify mdi--behance"></span>
        <span className="iconify mdi--instagram"></span>
        <span className="iconify mdi--dribble"></span> */}
      </div>
      <div className="flex flex-col border border-stone-900 p-10 w-1/2 border rounded-xl">
        <div className="w-full text-xl text-center">
          <p>SEND ME A MESSAGE</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="mb-5 w-[45%]">
            <label
              for="email"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-900 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-5 w-[45%]">
            <label
              for="email"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-900 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-5 w-full">
            <label
              for="email"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <textarea
              type="textarea"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-900 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <button className="bg-white text-black font-semibold w-full rounded py-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
