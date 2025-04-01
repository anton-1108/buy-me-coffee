"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Camera } from "lucide-react";
import PaymentSetupForm from "./payment-setup-form";

export default function ProfileSetupForm() {
  const [step, setStep] = useState<"profile" | "payment">("profile");
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    socialUrl: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    about: false,
    socialUrl: false,
    image: false,
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string);
          setErrors((prev) => ({ ...prev, image: false }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name,
      about: !formData.about,
      socialUrl: !formData.socialUrl,
      image: !profileImage, // Now we'll validate the image too
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      setStep("payment");
    }
  };

  if (step === "payment") {
    return <PaymentSetupForm />;
  }

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Complete your profile page
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col items-center">
          <p className="mb-2">Add photo</p>
          <div className="relative cursor-pointer" onClick={handleImageClick}>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />

            {profileImage ? (
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-dashed border-gray-300">
                <img
                  src={profileImage || "/placeholder.svg"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                <Camera className="w-6 h-6 text-gray-400" />
              </div>
            )}

            {errors.image && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="text-red-500 mr-1">●</span> Please enter image
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name here"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <span className="text-red-500 mr-1">●</span> Please enter name
            </p>
          )}
        </div>

        <div>
          <label htmlFor="about" className="block mb-1">
            About
          </label>
          <textarea
            id="about"
            name="about"
            placeholder="Write about yourself here"
            className="w-full px-3 py-2 border rounded-md min-h-[120px]"
            value={formData.about}
            onChange={handleChange}
          />
          {errors.about && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <span className="text-red-500 mr-1">●</span> Please enter info
              about yourself
            </p>
          )}
        </div>

        <div>
          <label htmlFor="socialUrl" className="block mb-1">
            Social media URL
          </label>
          <input
            id="socialUrl"
            name="socialUrl"
            type="text"
            placeholder="https://"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.socialUrl}
            onChange={handleChange}
          />
          {errors.socialUrl && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <span className="text-red-500 mr-1">●</span> Please enter a social
              link
            </p>
          )}
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
