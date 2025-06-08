import React from "react";
import { Card, CardBody, Image, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

export const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "8+", label: "Projects Completed" },
    { number: "2", label: "Research Papers" }
  ];

  return (
    <section id="about" className="section-padding bg-content1">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-default-600 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me forward.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-2xl bg-white/80 rounded-xl shadow p-8 mb-10"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Software Engineer & Researcher</h3>
            <p className="text-default-600 mb-8 leading-relaxed text-center">
              I am an accomplished AI & Machine Learning professional with 2+ years of experience, 8+ projects completed, and 2 research papers published. My expertise lies in leveraging data and automation to build innovative solutions and drive efficiency.<br /><br />
              At WNS Holdings Limited, I've developed robust automation tools and predictive models, significantly optimizing processes and enabling proactive decision-making. My work at Samsung Research and Development focused on advanced human activity detection using cutting-edge deep learning techniques. Proficient in Python, SQL, and various ML/AI frameworks, I am driven by a passion for transforming complex challenges into efficient, data-driven solutions.
            </p>
          </motion.div>

          <div className="w-full flex flex-col items-center gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6 w-full max-w-2xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-default-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <Button
              color="primary"
              radius="full"
              endContent={<Icon icon="lucide:download" width={18} />}
              className="font-medium"
              as="a"
              href="https://drive.google.com/file/d/1uVXO2gIB4C2Wz1MvpuQ5MGlX9Hy70UpH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};