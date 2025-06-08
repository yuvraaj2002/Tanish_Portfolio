import React from "react";
import { Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="section-padding min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-xl font-medium text-primary mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Tanish
            </h1>
            <div className="text-xl md:text-2xl font-medium text-default-600 mb-6 h-[70px]">
              <TypeAnimation
                sequence={[
                  'Data Enthusiast',
                  2000,
                  'Data Analyst',
                  2000,
                  'Automation Specialist',
                  2000,
                  'AI/ML Researcher',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-default-600 max-w-lg mb-8 leading-relaxed">
              I'm a passionate software engineer and researcher with expertise in artificial intelligence,
              machine learning, and web development. I create elegant solutions to complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                color="primary"
                size="lg"
                radius="full"
                className="font-medium"
                endContent={<Icon icon="lucide:arrow-right" width={18} />}
                as="a"
                href="#contact"
              >
                Contact Me
              </Button>
              <Button
                variant="bordered"
                size="lg"
                radius="full"
                className="font-medium"
                endContent={<Icon icon="lucide:download" width={18} />}
                as="a"
                href="https://drive.google.com/file/d/1uVXO2gIB4C2Wz1MvpuQ5MGlX9Hy70UpH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-default-600 hover:text-primary transition-colors">
                <Icon icon="logos:github-icon" width={24} />
              </a>
              <a href="https://www.linkedin.com/in/tanish-b0363621b/" target="_blank" rel="noopener noreferrer" className="text-default-600 hover:text-primary transition-colors">
                <Icon icon="logos:linkedin-icon" width={24} />
              </a>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="text-default-600 hover:text-primary transition-colors">
                <Icon icon="logos:google-scholar" width={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary-100 to-primary-50"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/MyImage.jpeg"
                  alt="Tanish"
                  className="object-cover w-full h-full"
                  radius="full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};