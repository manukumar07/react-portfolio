import React, { useState } from "react";
import emailjs from "emailjs-com";
// import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const contact_info = [
    { logo: "mail", text: "palmanukumar53@gmai.com" },
    { logo: "logo-whatsapp", text: "123 456 780" },
    { logo: "location", text: "demo location" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your Email.js template and service ID
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    // Replace 'your_service_id' and 'your_template_id' with your actual Email.js service and template IDs
    emailjs.send(
      "",
      "",
      templateParams,
      ""  // Replace 'your_user_id' with your actual Email.js user ID
    )
    .then(
      (response) => {
        console.log("Email sent successfully:", response);
        // You can handle success state or redirect the user to a thank you page.
      },
      (error) => {
        console.error("Failed to send email:", error);
      }
    );
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-5 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Your Email Address"
              name="email"
              onChange={handleChange}
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              name="mobile"
              onChange={handleChange}
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              name="message"
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
