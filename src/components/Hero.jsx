import { motion } from "framer-motion";
import { styles } from "../style";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiCodewars } from "react-icons/si"; // Using Codewars or replace with actual Codeleo icon if you have one
import heroImage from "../assets/hero2.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-[#050816] overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 40% 40%, rgba(145,94,255,0.08), transparent 60%), #050816`,
      }}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10`}
      >
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-start mt-5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Vansh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-lg`}>
            From frontend finesse to backend brilliance — I'm building it all.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-10 mt-12">
            {/* GitHub */}
            <SocialIcon
              href="https://github.com/Vansh-91"
              icon={<FaGithub />}
              label="GitHub"
              color="#915EFF"
            />

            {/* LinkedIn */}
            <SocialIcon
              href="https://www.linkedin.com/in/vansh-garg-871a1b28a/"
              icon={<FaLinkedin />}
              label="LinkedIn"
              color="#0077B5"
            />

            {/* Twitter */}
            <SocialIcon
              href="https://x.com/_Vanshgarg"
              icon={<FaTwitter />}
              label="Twitter"
              color="#1DA1F2"
            />

            {/* Codeleo (using placeholder icon SiCodewars) */}
            <SocialIcon
              href="https://codolio.com/profile/Vansh-91"
              icon={<SiCodewars />}
              label="Codolio"
              color="#EA3C53"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex items-end justify-center relative">
          <div className="w-[400px] h-[300px] relative mt-24">
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#0f0f1b] border border-[#2c2f42] shadow-xl shadow-[#915EFF33]">
              <img
                src={heroImage}
                alt="hero"
                className="w-full h-full object-cover mix-blend-screen rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

// 🧩 Reusable Component
const SocialIcon = ({ href, icon, label, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center group"
  >
    <div
      className="rounded-full p-5 text-4xl text-white border transition-transform duration-300 shadow-lg group-hover:scale-110"
      style={{
        borderColor: color,
        boxShadow: `0 0 20px ${color}55`,
      }}
    >
      {icon}
    </div>
    <span
      className="mt-2 text-white text-sm font-semibold group-hover:text-[color] transition-colors duration-300"
      style={{ color }}
    >
      {label}
    </span>
  </a>
);

export default Hero;
