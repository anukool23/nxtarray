

import { useState } from 'react';

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    company: '',
    jobTitle: '',
    inquiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(2);
  const handlePrev = () => setStep(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted!');
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20 text-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 leading-snug">
              Let’s discuss how we can support your journey.
            </h2>
            <p className="text-sm text-gray-600">
              *Required fields in steps 1 & 2
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1 */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 font-medium">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Business Email*</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Country*</label>
                  <select
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 font-medium">Company Name*</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Job Title*</label>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1 font-medium">What are you looking for?*</label>
                  <select
                    name="inquiry"
                    required
                    value={formData.inquiry}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="">Select an Option</option>
                    <option value="AI Services">AI Services</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="Consulting">Consulting</option>
                  </select>
                </div>

                <p className="text-sm text-gray-500 md:col-span-2">
                  For career or internship opportunities, please apply via our{" "}
                  <a href="/careers" className="text-fuchsia-500 underline">Careers Page</a>. This form does not reach our recruitment team.
                </p>
              </div>
            )}

            {/* Progress Bar */}
            <div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    step === 1 ? 'w-1/2' : 'w-full'
                  } bg-fuchsia-500`}
                ></div>
              </div>
              <div className="text-sm text-center mt-2">{step}/2</div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              {step === 2 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2 bg-purple-500 text-white rounded"
                >
                  Previous
                </button>
              )}
              {step === 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto px-4 py-2 bg-purple-600 text-white rounded"
                >
                  Next
                </button>
              )}
              {step === 2 && (
                <button
                  type="submit"
                  className="ml-auto px-4 py-2 bg-purple-600 text-white rounded"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
