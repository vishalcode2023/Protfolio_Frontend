import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNavbar from "../NavbarComponents/TopNavbar";
import BottomNavbar from "../NavbarComponents/BottomNavbar";
import { FaEnvelope, FaPhoneAlt, FaHeadset } from "react-icons/fa";

const ContactPage = () => {
  const [showDialog, setShowDialog] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const [callData, setCallData] = useState({
    name: "",
    phone: "",
  });

  const handleContactChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCallChange = (e) => {
    setCallData({ ...callData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://protfolio-backend-czut.onrender.com/api/user", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "" });
    } catch (error) {
      toast.error("Failed to send message!");
      console.error(error);
    }
  };

  const handleDialogSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://protfolio-backend-czut.onrender.com/api/call", callData);
      toast.success("Call booked successfully!");
      setCallData({ name: "", phone: "" });
      setShowDialog(false);
    } catch (error) {
      toast.error("Failed to book call!");
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />
      <TopNavbar />

      <div className="flex flex-col items-center px-4 py-24">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-gray-700 text-4xl md:text-5xl font-bold mb-3">
            Reach Me Anytime
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-xl">
            Have questions or need help? I'm just a message away.
          </p>
        </div>

        {/* Contact Cards & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          {/* Left Side - Contact Cards */}
          <div className="flex flex-col gap-6">
            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transition hover:scale-[1.02] duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600 text-xl">
                  <FaEnvelope />
                </div>
                <h3 className="text-xl font-semibold ml-4">Email Me</h3>
              </div>
              <p className="text-gray-600 mb-2">
                Got a question? Let’s chat over email.
              </p>
              <p className="font-medium text-gray-800">
                vishalcode2023@gmail.com
              </p>
            </div>

            {/* Call Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transition hover:scale-[1.02] duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-4 rounded-full text-green-600 text-xl">
                  <FaPhoneAlt />
                </div>
                <h3 className="text-xl font-semibold ml-4">Prefer a Call?</h3>
              </div>
              <p className="text-gray-600 mb-2">
                Schedule a call — sometimes voice is faster.
              </p>
              <button
                className="text-white bg-[#222E4C] px-4 py-2 rounded transition"
                onClick={() => setShowDialog(true)}
              >
                Book a Call
              </button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transition hover:shadow-xl duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-4 rounded-full text-purple-600 text-xl">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-semibold ml-4">
                I’d love to help — tell me how!
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleContactChange}
                  placeholder="Ikta Sollork"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleContactChange}
                  placeholder="vishalcode2023@gmail.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject of Interest
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleContactChange}
                  placeholder="e.g. Portfolio Collaboration"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-[#222E4C] text-white py-2 rounded-md transition"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Dialog Modal */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl w-80 shadow-lg relative">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Book a Call</h3>
            <form onSubmit={handleDialogSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={callData.name}
                  onChange={handleCallChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={callData.phone}
                  onChange={handleCallChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md text-gray-800 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#222E4C] text-white rounded-md hover:bg-[#1b243e]"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <BottomNavbar />
    </div>
  );
};

export default ContactPage;
