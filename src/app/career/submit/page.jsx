"use client";

import { useState, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const INITIAL_STATE = {
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
};

const SELECT_FIELDS = [
  {
    name: "hearAboutUs",
    label: "How did you hear about us?*",
    options: ["LinkedIn", "Google", "Referral", "Naukari", "Career", "Others"],
  },
  {
    name: "division",
    label: "Which position you are applying to?*",
    options: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "QA Engineer",
      "Architect",
    ],
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
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
        if (value !== null && value !== "") form.append(key, value);
      });

      await axios.post("/api/join", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(
        "Thank you for submitting your resume. Our team will review it and get in touch with you soon."
      );

      setFormData(INITIAL_STATE);
      formRef.current?.reset();
      setFileName("No file chosen");
    } catch {
      toast.error("Failed to submit resume. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 relative overflow-hidden bg-gradient-to-br from-white via-gray-100 to-white/80 mt-10">
      {/* Optional: floating gradient orbs for premium effect */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-blue-300 via-teal-200 to-blue-100 blur-3xl opacity-40 -top-20 -left-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-pink-200 via-purple-200 to-red-100 blur-2xl opacity-30 bottom-0 right-0"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 relative z-10">
        {/* Left section - logo */}
        <div className="hidden md:flex justify-center items-center">
          <motion.img
            src="/logo.png"
            alt="Logo"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Right section - form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl p-8 rounded-3xl flex flex-col gap-5 w-full max-w-md hover:shadow-2xl transition"
        >
          {/* Inputs */}
          {["name", "email"].map((field) => (
            <input
              key={field}
              name={field}
              type={field}
              placeholder={field === "name" ? "Your name*" : "Email address*"}
              value={formData[field]}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-500 transition"
            />
          ))}

          {/* Phone */}
          <div className="flex gap-2">
            <input
              name="countryCode"
              placeholder="Country code*"
              value={formData.countryCode}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-lg w-1/3 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-500 transition"
            />
            <input
              name="phone"
              placeholder="Phone number*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-lg w-2/3 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-500 transition"
            />
          </div>

          {/* Select fields */}
          {SELECT_FIELDS.map(({ name, label, options }) => (
            <select
              key={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            >
              <option value="">{label}</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ))}

          {/* Opportunity */}
          <textarea
            name="opportunity"
            placeholder="Why do you want to join us? *"
            value={formData.opportunity}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg h-28 resize-none focus:ring-2 focus:ring-blue-400 outline-none transition"
          />

          {/* File upload */}
          <div>
            <label
              htmlFor="file"
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-lg hover:brightness-110 inline-block transition shadow-md"
            >
              Select your resume
            </label>
            <input
              id="file"
              name="file"
              type="file"
              accept=".doc,.docx,.pdf"
              onChange={handleChange}
              className="hidden"
            />
            <span className="ml-3 text-sm text-gray-600">{fileName}</span>
          </div>

          {/* Consent */}
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <span>
              By clicking submit, you grant permission to store and process this
              information in accordance with our Privacy Policy.
            </span>
          </label>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 rounded-lg font-semibold shadow-lg hover:brightness-110 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
