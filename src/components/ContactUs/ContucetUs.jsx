import React from "react";

const ContactUs = () => {
    return (
        <div className="bg-gray-200 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">Feel free to get in touch with us for any inquiries or feedback!</p>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-1">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-bold mb-1">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block font-bold mb-1">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
