"use client";

import type React from "react";

import { useState } from "react";
import LoadingScreen from "./loading-screen";

export default function PaymentSetupForm() {
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  const [errors, setErrors] = useState({
    country: false,
    firstName: false,
    lastName: false,
    cardNumber: false,
    expiryMonth: false,
    expiryYear: false,
    cvc: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      country: !formData.country,
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      cardNumber:
        !formData.cardNumber ||
        !/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(formData.cardNumber),
      expiryMonth: !formData.expiryMonth,
      expiryYear: !formData.expiryYear,
      cvc: !formData.cvc || !/^\d{3,4}$/.test(formData.cvc),
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      // Form is valid, show loading screen
      setIsLoading(true);

      // Simulate API call with timeout
      setTimeout(() => {
        // Here you would typically send the data to your backend
        console.log("Form submitted successfully", formData);
      }, 2000);
    }
  };

  const formatCardNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");

    // Add dashes after every 4 digits
    let formatted = "";
    for (let i = 0; i < digits.length && i < 16; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += "-";
      }
      formatted += digits[i];
    }

    return formatted;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData((prev) => ({ ...prev, cardNumber: formatted }));
    if (formatted) {
      setErrors((prev) => ({ ...prev, cardNumber: false }));
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <h1 className="text-2xl font-bold text-center mb-2">
        How would you like to be paid?
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Enter location and payment details
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="country" className="block mb-1">
            Select country
          </label>
          <select
            id="country"
            name="country"
            className="w-full px-3 py-2 border rounded-md appearance-none bg-white"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="au">Australia</option>
            {/* Add more countries as needed */}
          </select>
          {errors.country && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <span className="text-red-500 mr-1">●</span> Select country to
              continue
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your name here"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="text-red-500 mr-1">●</span> First name must
                match
              </p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1">
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your name here"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="text-red-500 mr-1">●</span> Last name must
                match
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="cardNumber" className="block mb-1">
            Enter card number
          </label>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.cardNumber}
            onChange={handleCardNumberChange}
            maxLength={19} // 16 digits + 3 dashes
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <span className="text-red-500 mr-1">●</span> Invalid card number
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="expiryMonth" className="block mb-1">
              Expires
            </label>
            <select
              id="expiryMonth"
              name="expiryMonth"
              className="w-full px-3 py-2 border rounded-md appearance-none bg-white"
              value={formData.expiryMonth}
              onChange={handleChange}
            >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, i) => {
                const month = i + 1;
                return (
                  <option key={month} value={month.toString().padStart(2, "0")}>
                    {month.toString().padStart(2, "0")}
                  </option>
                );
              })}
            </select>
            {errors.expiryMonth && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="text-red-500 mr-1">●</span> Invalid month
              </p>
            )}
          </div>
          <div>
            <label htmlFor="expiryYear" className="block mb-1">
              Year
            </label>
            <select
              id="expiryYear"
              name="expiryYear"
              className="w-full px-3 py-2 border rounded-md appearance-none bg-white"
              value={formData.expiryYear}
              onChange={handleChange}
            >
              <option value="">Year</option>
              {Array.from({ length: 10 }, (_, i) => {
                const year = new Date().getFullYear() + i;
                return (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                );
              })}
            </select>
            {errors.expiryYear && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="text-red-500 mr-1">●</span> Invalid month
              </p>
            )}
          </div>
          <div>
            <label htmlFor="cvc" className="block mb-1">
              CVC
            </label>
            <input
              id="cvc"
              name="cvc"
              type="text"
              placeholder="CVC"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.cvc}
              onChange={handleChange}
              maxLength={4}
            />
            {errors.cvc && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="text-red-500 mr-1">●</span> Invalid month
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-200 text-gray-700 py-3 rounded-md hover:bg-gray-300 transition-colors"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
