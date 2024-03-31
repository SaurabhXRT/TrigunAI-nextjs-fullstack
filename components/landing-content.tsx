"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const testimonials = [
  {
    name: "Amit",
    avatar: "A",
    title: "Software Developer",
    description:
      "Absolutely amazing! This application has made my workflow so much smoother.",
  },
  {
    name: "Priya",
    avatar: "P",
    title: "Graphic Designer",
    description:
      "Incredible tool! I rely on it heavily for creating stunning visuals.",
  },
  {
    name: "Rajesh",
    avatar: "R",
    title: "Entrepreneur",
    description:
      "Game-changer! TrigunAI has significantly boosted my productivity.",
  },
  {
    name: "Divya",
    avatar: "D",
    title: "Content Creator",
    description:
      "An indispensable resource for content creators like me. Highly recommended!",
  },
];

export const LandingContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((item) => (
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className="mx-auto w-2/3  text-white">
        <h2 className="text-center text-4xl font-bold mb-6">Contact Us</h2>
        <div className="bg-[#192339] px-8 py-8 border-none rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="px-4 py-2 bg-gray-800 text-white border-none rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="px-4 py-2 bg-gray-800 text-white border-none rounded-md"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="px-4 py-2 bg-gray-800 text-white border-none rounded-md resize-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-2  text-white rounded-md hover:bg-[#111827] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center text-sm m-auto mt-4 md:text-xl font-light text-zinc-400">
        © 2024 TrigunAI. All Rights Reserved.
      </div>
    </>
  );
};
