"use client";

import { useState } from "react";
import axios from "axios";

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
        captcha: "",
        agree: false,
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const form = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                form.append(key, value);
            });

            const res = await axios.post("/api/contact", form, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setMessage("✅ Your message has been sent successfully!");
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
                captcha: "",
                agree: false,
            });
        } catch (err) {
            setMessage("❌ Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-start p-8 bg-white text-gray-800">
            <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
                {/* Left section */}
                <div className="pt-8">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">
                        Let’s Talk
                    </h1>
                    <p className="text-sm text-gray-500">
                        Whatever your question, we’d love to hear from you.
                    </p>
                </div>

                {/* Right section */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col gap-4"
                >
                    {/* Name */}
                    <input
                        name="name"
                        placeholder="Your name*"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded"
                    />

                    {/* Email */}
                    <input
                        name="email"
                        placeholder="Email address*"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded"
                    />

                    {/* Phone */}
                    <div className="flex gap-2">
                        <input
                            name="countryCode"
                            placeholder="Country code*"
                            value={formData.countryCode}
                            onChange={handleChange}
                            required
                            className="border p-2 rounded w-1/3"
                        ></input>
                        <input
                            name="phone"
                            placeholder="Phone number*"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="border p-2 rounded w-2/3"
                        />
                    </div>

                    {/* Company */}
                    <input
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />

                    {/* How did you hear about us */}
                    <select
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded"
                    >
                        <option value="">How did you hear about us?*</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Google">Google</option>
                        <option value="Referral">Referral</option>
                    </select>

                    {/* Division */}
                    <select
                        name="division"
                        value={formData.division}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded"
                    >
                        <option value="">
                            Which division should we connect you to?*
                        </option>
                        <option value="Sales">Sales</option>
                        <option value="Support">Support</option>
                        <option value="Partnerships">Partnerships</option>
                    </select>

                    {/* Opportunity */}
                    <textarea
                        name="opportunity"
                        placeholder="Tell us about your opportunity*"
                        value={formData.opportunity}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded h-24"
                    />

                    {/* File upload */}
                    <input
                        name="file"
                        type="file"
                        accept=".xlsx,.xls,.doc,.docx,.pdf,.rtf,.zip,.rar"
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />

                    {/* Consent */}
                    <label className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            required
                        />
                        By clicking submit, you grant permission to store and
                        process this information in accordance with our Privacy
                        Policy.
                    </label>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>

                    {/* Message */}
                    {message && (
                        <p
                            className={`text-sm ${
                                message.includes("✅")
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
