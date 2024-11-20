import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const sendEmail = async (fromName, email, message) => {
  const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
    service_id: import.meta.env.VITE_SERVICE_ID,
    template_id: import.meta.env.VITE_TEMPLATE_ID,
    user_id: import.meta.env.VITE_USER_ID,
    template_params: {
      to_name: "Shubhanshu",
      from_name: fromName,
      message: message,
      from_email: email,
    },
  });
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onInputChange = (e) => {
    const key = event.target.name;
    const value = event.target.value;

    setFormData((prev) => {
      prev[key] = value;

      return { ...prev };
    });
  };

  const onSubmit = () => {
    sendEmail(formData.name, formData.email, formData.message);
    toast("Form Submitted Successfully");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const redirect = (e) => {
    let tabLink = "";
    console.log(e.target.name);
    switch (e.target.name) {
      case "linkdin":
        tabLink = "https://www.linkedin.com/feed/";
        break;
      case "behance":
        tabLink = "www.behance.com";
        break;
      case "instagram":
        tabLink = "www.instagram.com";
        break;
      case "dribble":
        tabLink = "www.dribble.com";
        break;
    }
    window.open(tabLink, "_blank");
  };

  return (
    <div className="flex flex-col items-center mb-20">
      <div className="w-full">
        <p className="font-casanova text-5xl ">Contact</p>
        <p className="text-xl font-thin pl-10">
          Get in touch or just to say! 👋
        </p>
      </div>
      <div className="flex gap-10 my-20 justify-center">
        <img
          name="linkdin"
          onClick={redirect}
          src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1731840439/LinkedIn.svg"
        ></img>
        <img
          name="behance"
          onClick={redirect}
          src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1731840439/Behance.svg"
        ></img>
        <img
          name="instagram"
          onClick={redirect}
          src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1731840440/Instagram.svg"
        ></img>
        <img
          name="dribble"
          onClick={redirect}
          src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1731840439/Dribbble.svg"
        ></img>

        {/* <span className="iconify mdi--linkedin"></span> */}
        {/* <span className="iconify mdi--behance"></span>
        <span className="iconify mdi--instagram"></span>
        <span className="iconify mdi--dribble"></span> */}
      </div>
      <div className="flex bg-transparent justify-center w-full">
        <div className="flex flex-col border border-stone-900 p-5 lg:p-20 w-full lg:w-4/6 border rounded-xl">
          <div className="w-full text-xl text-center">
            <p>SEND ME A MESSAGE</p>
          </div>
          <div className="flex flex-wrap mt-10 justify-between">
            <div className="mb-5 w-[45%]">
              <label
                for="name"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-900 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your name"
                required
                onChange={onInputChange}
              />
            </div>
            <div className="mb-5 w-[45%]">
              <label
                for="email"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-900 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your name"
                required
                onChange={onInputChange}
              />
            </div>
            <div className="mb-5 w-full">
              <label
                for="email"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                type="textarea"
                id="message"
                rows="7"
                name="message"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-900 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                placeholder="Enter your message"
                required
                onChange={onInputChange}
              />
            </div>
            <Toaster />
            <button
              onClick={onSubmit}
              className="mt-10 bg-white text-black font-semibold w-full rounded py-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
