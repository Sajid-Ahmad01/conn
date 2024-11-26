import React, { useState } from 'react';

const About = () => {
  const [entry, setentry] = useState({
    device: "",
    model: "",
    condition: "",
    waranty: "",
    image: null, 
    price: ""
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setentry(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileInput = (event) => {
    const { name, files } = event.target;
    setentry(prevState => ({
      ...prevState,
      [name]: files 
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(entry);
    setFormAsFile(entry);
  };

  const setFormAsFile = (data) => {
    const formData = JSON.stringify(data, null, 2);
    const blob = new Blob([formData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "formData.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white shadow-xl rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Sell Your Used IT Equipment to Us - Best Prices Guaranteed!
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          With the Techbuyer decommissioning service, we buy back your used IT equipment, offering competitive prices for items from major brands like HPE, Dell, Intel, IBM, and Cisco.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.X5_g7QOUTU7zI3SXp0UjpQAAAA&pid=Api&P=0&h=220"
          alt="IT Equipment"
          className="w-full max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-6">
        <fieldset className="mb-6">
          <legend className="text-lg font-semibold text-gray-700 mb-2">Device Type</legend>
          <input
            type="text"
            name="device"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter device type"
            value={entry.device}
            onChange={handleInput}
            required
          />
        </fieldset>

        <fieldset className="mb-6">
          <legend className="text-lg font-semibold text-gray-700 mb-2">Model Number</legend>
          <input
            type="number"
            name="model"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter model number"
            value={entry.model}
            onChange={handleInput}
            required
          />
        </fieldset>

        <fieldset className="mb-6">
          <legend className="text-lg font-semibold text-gray-700 mb-2">Condition</legend>
          <input
            type="text"
            name="condition"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter device condition"
            value={entry.condition}
            onChange={handleInput}
            required
          />
        </fieldset>

        <fieldset className="mb-6">
          <legend className="text-lg font-semibold text-gray-700 mb-2">Warranty Until</legend>
          <input
            type="date"
            name="waranty"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={entry.waranty}
            onChange={handleInput}
            required
          />
        </fieldset>

        <fieldset className="mb-6">
          <legend className="text-lg font-semibold text-gray-700 mb-2">Upload Pictures of the Device</legend>
          <input
            type="file"
            name="image"
            onChange={handleFileInput}
            multiple
            accept="image/*"
            className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </fieldset>

        <fieldset className="mb-6">
          <legend className="text-lg font-semibold text-gray-700 mb-2">Price</legend>
          <input
            type="number"
            name="price"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your selling price"
            value={entry.price}
            onChange={handleInput}
            required
            min="1"
          />
        </fieldset>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default About;
