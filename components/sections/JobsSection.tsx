"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaVenusMars,
  FaUsers,
  FaRupeeSign,
} from "react-icons/fa";

export default function JobsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSendResume = () => {
    window.location.href = "mailto:hr@suyashhealthcare.com?subject=Application for Job Opportunity";
  };

  return (
    <section
      ref={ref}
      className="w-full py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100"
      id="jobs"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-600 mb-6"
        >
          Job Opportunity: Health Check-up Survey Representative & Business Development Executive
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          <strong>Suvyash Health Care</strong> is expanding its mission to provide affordable
          healthcare services by hiring <strong>Health Check-up Survey Representatives</strong> and{" "}
          <strong>Business Development Executives</strong>.
          <br />
          If you are passionate about community health and wish to be a part of a growing
          organization, apply today!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg p-8 text-left border border-blue-100"
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
            <FaBriefcase className="text-blue-600" /> Job Details
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li><strong>Position:</strong> Health Check-up Survey Representative and Business Development Executive</li>
            <li><strong>Job Type:</strong> Full-time</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-500" /> Location: Swargate, Pune</li>
            <li className="flex items-center gap-2"><FaUsers className="text-blue-500" /> Vacancies: 50</li>
            <li className="flex items-center gap-2"><FaVenusMars className="text-blue-500" /> Gender: Male / Female</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">Eligibility Criteria</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Education:</strong> Minimum 12th Pass to Graduate</li>
            <li><strong>Experience:</strong> Experienced candidates preferred, but freshers can also apply</li>
            <li><strong>Skills:</strong> Good communication, ability to collect information, and interact effectively with people</li>
            <li><strong>Age Limit:</strong> 22–45 years</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">Job Responsibilities</h3>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Conduct health check-up surveys in the assigned area</li>
            <li>Accurately collect patients’ health-related data</li>
            <li>Educate people about Suvyash Health Care’s services</li>
            <li>Coordinate with the medical team</li>
            <li>Submit daily reports and insights</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">Salary and Benefits</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FaRupeeSign className="text-blue-500" /> <strong>During Training:</strong> ₹25,000 per month
            </li>
            <li className="flex items-center gap-2">
              <FaRupeeSign className="text-blue-500" /> <strong>After Training:</strong> ₹50,000 per month
            </li>
            <li><strong>Additional Benefits:</strong> Free accommodation and travel</li>
            <li><strong>Note:</strong> No marketing work involved</li>
          </ul>

          <div className="mt-10 text-center">
            <button
              onClick={handleSendResume}
              className="bg-blue-600 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium transition"
            >
              Send Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
