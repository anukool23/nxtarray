"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ChevronRight, Mail, MapPin, Map } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    company: "",
    hearAboutUs: "",
    division: "",
    opportunity: "",
    file: null,
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, file: files[0] }));
      setFileName(files[0]?.name || "No file chosen");
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      await axios.post("/api/contact", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(
        "Your request has been successfully submitted. Our team will get in touch with you shortly!"
      );

      setFormData({
        name: "",
        email: "",
        countryCode: "",
        phone: "",
        company: "",
        hearAboutUs: "",
        division: "",
        opportunity: "",
        file: null,
        agree: false,
      });
      setFileName("No file chosen");
    } catch (err) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start p-6 pt-36 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-200">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-white">Let’s Talk</h1>
          <p className="text-gray-300">
            Whatever your question, we’d love to hear from you.
          </p>

          {/* Office Addresses */}
          <div className="space-y-5">
            {/* India */}
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-blue-400 mt-1" />
              <div>
                <p className="text-lg font-semibold text-white">
                  NxtArray India - Delhi
                </p>
                <p className="text-gray-300">
                  Rosewood Apt, Sector 13, Dwarka, New Delhi 110075
                </p>
                <p className="flex items-center gap-1 mt-1 text-blue-400 font-medium">
                  <Map className="h-5 w-5" />
                  <a
                    href="https://maps.app.goo.gl/ubM8MnHVXrcSzr2UA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-300"
                  >
                    Direction
                  </a>
                  <ChevronRight className="h-5 w-5" />
                </p>
              </div>
            </div>

            {/* UAE */}
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-blue-400 mt-1" />
              <div>
                <p className="text-lg font-semibold text-white">
                  NxtArray UAE - Ajman
                </p>
                <p className="text-gray-300">
                  26th Floor, Amber Gem Tower, Sheikh Khalifa Street, Ajman
                </p>
                <p className="flex items-center gap-1 mt-1 text-blue-400 font-medium">
                  <Map className="h-5 w-5" />
                  <a
                    href="https://maps.app.goo.gl/VAYv4Zj4XMEhv56L8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-300"
                  >
                    Direction
                  </a>
                  <ChevronRight className="h-5 w-5" />
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-start space-y-3 mt-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Mail className="h-8 w-8 text-blue-400" />
              Write to Us
            </h3>
            <a
              href="mailto:engage@nxtarray.com"
              className="border border-blue-400 text-blue-400 font-semibold px-6 py-3 rounded-lg hover:bg-blue-900/20 transition"
            >
              engage@nxtarray.com
            </a>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-950 p-8 rounded-3xl shadow-2xl flex flex-col gap-4 w-full border border-gray-800"
        >
          <input
            name="name"
            placeholder="Your name*"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-700 p-3 rounded-lg bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="email"
            placeholder="Email address*"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-700 p-3 rounded-lg bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <div className="flex gap-2">
            <input
              name="countryCode"
              placeholder="Country code*"
              value={formData.countryCode}
              onChange={handleChange}
              required
              className="border border-gray-700 p-3 rounded-lg bg-gray-900 text-gray-100 w-1/3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              name="phone"
              placeholder="Phone number*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-700 p-3 rounded-lg bg-gray-900 text-gray-100 w-2/3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <input
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="border border-gray-700 p-3 rounded-lg bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <select
            name="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={handleChange}
            required
            className="border border-gray-700 p-3 rounded-lg bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">How did you hear about us?*</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Google">Google</option>
            <option value="Referral">Referral</option>
          </select>

          <select
            name="division"
            value={formData.division}
            onChange={handleChange}
            required
            className="border border-gray-700 p-3 rounded-lg bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">
              Which division should we connect you to?*
            </option>
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
            <option value="Partnerships">Partnerships</option>
          </select>

          <textarea
            name="opportunity"
            placeholder="Tell us about your opportunity*"
            value={formData.opportunity}
            onChange={handleChange}
            required
            className="border border-gray-700 p-3 rounded-lg bg-gray-900 text-gray-100 h-28 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <div>
            <label
              htmlFor="file"
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-lg hover:brightness-105 inline-block transition"
            >
              Choose File
            </label>
            <input
              id="file"
              name="file"
              type="file"
              accept=".xlsx,.xls,.doc,.docx,.pdf,.rtf,.zip,.rar"
              onChange={handleChange}
              className="hidden"
            />
            <span className="ml-3 text-sm text-gray-400">{fileName}</span>
          </div>

          <label className="flex items-start gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <span>
              By clicking submit, you grant permission to store and process this
              information in accordance with our Privacy Policy.
            </span>
          </label>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 rounded-lg font-semibold shadow-lg hover:brightness-105 transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
