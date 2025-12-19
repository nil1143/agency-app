import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5b1eec96-0934-40eb-a1ce-c5c4a9ec8aa8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none bg-white dark:bg-gray-900 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/50"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email Address</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900">
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full p-3 text-sm outline-none bg-white dark:bg-gray-900 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/50"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/50"
            required
          />
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Submit <img src={assets.arrow_icon} alt="submit" className="w-4" />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
