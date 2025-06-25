import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaTerminal, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 font-sans bg-[#0f0f1c]"
    >
      <div className="max-w-3xl text-center">
        {/* Name */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Divya Mali
        </h2>

        {/* Skills Heading with Typing Effect */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
          <span className="text-white">I am a </span>
          <ReactTypingEffect
            text={[
              'Computer Science Student',
              'Developer',
              'Coder',
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderer={(cursor) => (
              <span className="text-[#8245ec]">{cursor}</span>
            )}
          />
        </h3>

        {/* About Me Paragraph */}
        <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
Final-year Computer Science Engineering student with a passion for full-stack development and building efficient, user-friendly software solutions.        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="https://github.com/malidivya184"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-[#8245ec] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/divya-mali764"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-[#8245ec] transition duration-300"
          >
            <FaLinkedin />
          </a>
      <a
  href="mailto:divyamali764@gmail.com"
  className="text-white text-3xl hover:text-[#8245ec] transition duration-300 cursor-pointer"
  style={{ zIndex: 50, position: 'relative' }}
>
  <FaEnvelope />
</a>


          {/* CodeChef */}
          <a
            href="https://www.codechef.com/users/divyamali764"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-[#8245ec] transition duration-300"
          >
            <FaCode />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Divya_1818/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-[#8245ec] transition duration-300"
          >
            <FaTerminal />
          </a>

          {/* HackerRank
          <a
            href="https://www.hackerrank.com/profile/divyamali764"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-[#8245ec] transition duration-300"
          >
            <FaLaptopCode />
          </a> */}
        </div>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1fbhJ_pKDKvnpyfVqy1m_AlKVtsDqtZx6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
