import React, { useState } from 'react';
import { MdOutlineMarkUnreadChatAlt, MdAddIcCall, MdAttachEmail } from "react-icons/md";

const Apply = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    area: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setformdata((prevdata) => ({
      ...prevdata,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    console.log(formdata);
    saveFormDataAsFile(formdata);
  };

  const saveFormDataAsFile = (data) => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "formData.json";
    link.click();
    URL.revokeObjectURL(url); // Clean up the URL object
  };

  return (
    <div className="container mx-auto p-6 md:p-12">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-4">Contact Us</h1>
      <p className="text-xl text-center text-gray-600 mb-8">Let's Connect: We're here to help if you want to sell your item</p>

      <div className="flex flex-col md:flex-row gap-8">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg flex-1 space-y-6">
          {/* Contact Options */}
          <div className="flex justify-center space-x-4 mb-6">
            <button type="button" className="btn btn-neutral flex items-center space-x-2 py-3 px-6 rounded-md shadow-md hover:bg-gray-100" onClick={() => prompt("Type your problem here:")}>
              <MdOutlineMarkUnreadChatAlt className="text-xl" />
              <span>Via Support Chat</span>
            </button>
            <button type="button" className="btn btn-neutral flex items-center space-x-2 py-3 px-6 rounded-md shadow-md hover:bg-gray-100" onClick={() => alert("Please call on 8923388421")}>
              <MdAddIcCall className="text-xl" />
              <span>Via Call</span>
            </button>
          </div>

          <div className="flex justify-center mb-6">
            <button type="button" className="btn btn-neutral flex items-center space-x-2 py-3 px-6 rounded-md shadow-md hover:bg-gray-100">
              <MdAttachEmail className="text-xl" />
              <span>Via Email Form</span>
            </button>
          </div>

          {/* Form Fields */}
          <fieldset className="space-y-2">
            <legend className="text-lg font-semibold text-gray-700">Name</legend>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formdata.name}
              onChange={handleInputChange}
              required
            />
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-lg font-semibold text-gray-700">Email</legend>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formdata.email}
              onChange={handleInputChange}
              required
            />
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-lg font-semibold text-gray-700">Describe Your Item Condition</legend>
            <textarea
              name="area"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the condition of your item"
              value={formdata.area}
              onChange={handleInputChange}
              required
            />
          </fieldset>

          <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </form>

        {/* Image Section */}
        <div className="flex justify-center items-center flex-1">
          <img src="https://image.freepik.com/free-vector/open-24-7_1045-27.jpg" alt="Support" className="rounded-lg shadow-md w-full max-w-md" />
        </div>
      </div>
    </div>
  );
}

export default Apply;
