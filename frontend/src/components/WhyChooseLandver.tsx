import React from "react";
import {
  FaLock,
  FaEye,
  FaGlobe,
  FaUserCheck,
  FaCheckCircle,
  FaTasks,
} from "react-icons/fa";

const WhyChooseLandVer: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100">
  
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6   ">
          <FaLock size={40} className="mx-auto text-blue-600 mb-4 " />
          <h3 className="text-xl font-semibold mb-2">Decentralized & Secure</h3>
          <p className="text-gray-600">
            LandVer utilizes blockchain technology to ensure that your land
            records are tamper-proof and secure, offering peace of mind.
          </p>
        </div>

        <div className="p-6   ">
          <FaEye size={40} className="mx-auto text-green-600 mb-4 " />
          <h3 className="text-xl font-semibold mb-2">
            Transparent Transactions
          </h3>
          <p className="text-gray-600">
            All transactions are recorded on the blockchain, providing
            transparency and eliminating the need for intermediaries.
          </p>
        </div>

        <div className="p-6   ">
          <FaGlobe size={40} className="mx-auto text-yellow-600 mb-4 " />
          <h3 className="text-xl font-semibold mb-2">Global Accessibility</h3>
          <p className="text-gray-600">
            Access your land records from anywhere in the world with LandVer's
            intuitive and user-friendly platform.
          </p>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center p-3 mb-3 ">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6   ">
          <FaUserCheck size={40} className="mx-auto text-purple-600 mb-4 " />
          <h3 className="text-xl font-semibold mb-2">Register</h3>
          <p className="text-gray-600">Sign up and submit your land details.</p>
        </div>

        <div className="p-6   ">
          <FaCheckCircle size={40} className="mx-auto text-red-600 mb-4 " />
          <h3 className="text-xl font-semibold mb-2">Verification</h3>
          <p className="text-gray-600">
            Our system verifies and secures your land data on the blockchain.
          </p>
        </div>

        <div className="p-6   0">
          <FaTasks size={40} className="mx-auto text-teal-600 mb-4 " />
          <h3 className="text-xl font-semibold mb-2">Management</h3>
          <p className="text-gray-600">
            Manage, transfer, or sell your land with ease and security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseLandVer;
