"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ChevronRight, Mail, MapPin, Map } from "lucide-react";

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
        <>
            <div className="min-h-screen flex justify-center items-center p-6 bg-white text-gray-800">
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Section */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold text-blue-900">
                            Let’s Talk
                        </h1>
                        <p className="text-gray-500">
                            Whatever your question, we’d love to hear from you.
                        </p>

                        {/* Address */}
                        <div className="space-y-5">
                            {/* India Office */}
                            <div className="flex items-start gap-3">
                                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                                <div>
                                    <p className="text-lg font-semibold">
                                        NxtArray India - Delhi
                                    </p>
                                    <p>
                                        Rosewood Apt, Sector 13, Dwarka, New
                                        Delhi 110075
                                    </p>
                                    <p className="flex items-center gap-1 mt-1">
                                        <Map className="h-5 w-5 text-blue-600" />
                                        <a
                                            href="https://maps.app.goo.gl/ubM8MnHVXrcSzr2UA"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-blue-600 hover:text-blue-800"
                                        >
                                            Direction
                                        </a>
                                        <ChevronRight className="h-5 w-5 text-blue-600" />
                                    </p>
                                </div>
                            </div>

                            {/* UAE Office */}
                            <div className="flex items-start gap-3">
                                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                                <div>
                                    <p className="text-lg font-semibold">
                                        NxtArray UAE - Ajman
                                    </p>
                                    <p>
                                        26th Floor, Amber Gem Tower, Sheikh
                                        Khalifa Street, Ajman
                                    </p>
                                    <p className="flex items-center gap-1 mt-1">
                                        <Map className="h-5 w-5 text-blue-600" />
                                        <a
                                            href="https://maps.app.goo.gl/VAYv4Zj4XMEhv56L8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-blue-600 hover:text-blue-800"
                                        >
                                            Direction
                                        </a>
                                        <ChevronRight className="h-5 w-5 text-blue-600" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-start space-y-3 mt-8">
                            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <Mail className="h-8 w-8 text-blue-600" />
                                <span>Write to Us</span>
                            </h3>

                            <a
                                href="mailto:contactus@nxtarray.com"
                                className="border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
                            >
                                CONTACTUS@NXTARRAY.COM
                            </a>
                        </div>
                    </div>

                    {/* Right Section (Form) */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col gap-4 w-full"
                    >
                        <input
                            name="name"
                            placeholder="Your name*"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border p-3 rounded focus:ring-2 focus:ring-blue-600 outline-none"
                        />

                        <input
                            name="email"
                            placeholder="Email address*"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border p-3 rounded focus:ring-2 focus:ring-blue-600 outline-none"
                        />

                        <div className="flex gap-2">
                            <input
                                name="countryCode"
                                placeholder="Country code*"
                                value={formData.countryCode}
                                onChange={handleChange}
                                required
                                className="border p-3 rounded w-1/3 focus:ring-2 focus:ring-blue-600 outline-none"
                            />
                            <input
                                name="phone"
                                placeholder="Phone number*"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="border p-3 rounded w-2/3 focus:ring-2 focus:ring-blue-600 outline-none"
                            />
                        </div>

                        <input
                            name="company"
                            placeholder="Company"
                            value={formData.company}
                            onChange={handleChange}
                            className="border p-3 rounded focus:ring-2 focus:ring-blue-600 outline-none"
                        />

                        <select
                            name="hearAboutUs"
                            value={formData.hearAboutUs}
                            onChange={handleChange}
                            required
                            className="border p-3 rounded focus:ring-2 focus:ring-blue-600 outline-none"
                        >
                            <option value="">
                                How did you hear about us?*
                            </option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Google">Google</option>
                            <option value="Referral">Referral</option>
                        </select>

                        <select
                            name="division"
                            value={formData.division}
                            onChange={handleChange}
                            required
                            className="border p-3 rounded focus:ring-2 focus:ring-blue-600 outline-none"
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
                            className="border p-3 rounded h-28 resize-none focus:ring-2 focus:ring-blue-600 outline-none"
                        />

                        {/* File Upload - Styled */}
                        <div>
                            <label
                                htmlFor="file"
                                className="cursor-pointer bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 inline-block"
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
                            <span className="ml-3 text-sm text-gray-600">
                                {fileName}
                            </span>
                        </div>

                        <label className="flex items-start gap-2 text-sm text-gray-700">
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

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
