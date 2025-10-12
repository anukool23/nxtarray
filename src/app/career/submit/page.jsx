"use client";

import { useState, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

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
        options: [
            "LinkedIn",
            "Google",
            "Referral",
            "Naukari",
            "Career",
            "Others",
        ],
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
            toast.success("Thank you for submitting your resume. Our team will review it and get in touch with you soon.")

            //Reset both state and actual form fields
            setFormData(INITIAL_STATE);
            formRef.current?.reset();
        } catch {
            toast.error("Failed to submit resume. Please try again later.")
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-white p-4 text-gray-800">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
                {/* Left section - illustration */}
                <div className="hidden md:flex justify-center items-center">
                    <img
                        src="/logo.png"
                        alt="Illustration"
                        className="max-w-sm "
                    />
                </div>

                {/* Right section - form */}
                <div className="flex justify-center items-center">
                    <form
                        ref={formRef} 
                        onSubmit={handleSubmit}
                        className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col gap-4 w-full max-w-md"
                    >
                        {/* Basic fields */}
                        {["name", "email"].map((field) => (
                            <input
                                key={field}
                                name={field}
                                type={field}
                                placeholder={
                                    field === "name"
                                        ? "Your name*"
                                        : "Email address*"
                                }
                                value={formData[field]}
                                onChange={handleChange}
                                required
                                className="border p-2 rounded"
                            />
                        ))}

                        {/* Phone inputs */}
                        <div className="flex gap-2">
                            <input
                                name="countryCode"
                                placeholder="Country code*"
                                value={formData.countryCode}
                                onChange={handleChange}
                                required
                                className="border p-2 rounded w-1/3"
                            />
                            <input
                                name="phone"
                                placeholder="Phone number*"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="border p-2 rounded w-2/3"
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
                                className="border p-2 rounded"
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
                            className="border p-2 rounded h-24"
                        />

                        {/* File upload */}
                        <div>
                            <label
                                htmlFor="file"
                                className="cursor-pointer bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 inline-block"
                            >
                                Select your resume
                            </label>
                            <input
                                id="file"
                                name="file"
                                type="file"
                                accept=".doc,.docx,.pdf,"
                                onChange={handleChange}
                                className="hidden"
                            />
                            <span className="ml-3 text-sm text-gray-600">
                                {fileName}
                            </span>
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
                                By clicking submit, you grant permission to
                                store and process this information in accordance
                                with our Privacy Policy.
                            </span>
                        </label>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-blue-900 text-white py-2 rounded transition ${
                                loading
                                    ? "opacity-70 cursor-not-allowed"
                                    : "hover:bg-blue-800"
                            }`}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
