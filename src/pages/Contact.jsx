// Imports
import React from 'react';

const Contact = () => {
    return (
        <main className="grow">
            <div className="m-4 px-3">
                <p className="text-justify">
                    Want to collaborate? Looking for a killer website? Just
                    wanna talk about vikings and runes? Shoot me a message below
                    and I'll get back to you ASAP!
                </p>
            </div>
            <div className="m-4 p-6 rounded-bl-2xl rounded-tr-2xl shadow-sm bg-theme-lilac/[.20]">
                <form>
                    <div className="form-group mb-6">
                        <input
                            type="text"
                            id="nameInput"
                            placeholder="Name"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <input
                            type="email"
                            id="emailInput"
                            placeholder="E-mail Address"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <textarea
                            id="messageInput"
                            rows="4"
                            placeholder="Your Message"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Contact;
