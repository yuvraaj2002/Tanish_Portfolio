import React from "react";
import { Card, CardBody, Badge } from "@heroui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  icon: string;
  color: string;
}

export const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      id: 102,
      role: "Data Analyst",
      company: "WNS Analytics",
      period: "June 2024 - Present",
      description: "Gurgaon, India",
      achievements: [
        "Working on advanced analytics projects, leveraging data-driven insights to support business decisions.",
        "Collaborating with cross-functional teams to deliver actionable solutions using modern analytics tools."
      ],
      icon: "https://media.licdn.com/dms/image/v2/D4D0BAQFI5jL6AnZYYQ/company-logo_100_100/company-logo_100_100/0/1724237042549/wnsanalytics_logo?e=1755129600&v=beta&t=PEckpolg1sDeqATlxqm-L7uY8XrRZxvzNLJwZzWFAAw",
      color: "bg-green-100"
    },
    {
      id: 100,
      role: "Prism Intern",
      company: "Samsung research and development",
      period: "June 2023 - June 2024",
      description: "Remote",
      achievements: [
        "Developed a sophisticated device leveraging cutting-edge technologies such as Memgraph, KnowledgeGraph, and Graph Machine Learning to accurately predict human activity.",
        "Implemented robust algorithms and data models within the device, enabling real-time analysis and interpretation of complex activity patterns."
      ],
      icon: "logos:samsung",
      color: "bg-blue-100"
    },
    {
      id: 101,
      role: "Frontend Intern",
      company: "Oasis Infobyte",
      period: "July 2023 - Aug. 2023",
      description: "Delhi, India",
      achievements: [
        "Developed a responsive website using HTML, CSS, JavaScript, Spring Boot and MySQL integrating user authentication, and checkout functionality."
      ],
      icon: "logos:html-5",
      color: "bg-orange-100"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-default-600 max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="mb-12 pl-12 relative"
            >
              <div className="timeline-dot"></div>

              <Card className="shadow-sm">
                <CardBody className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${exp.color}`}>
                      <Icon icon={exp.icon} width={24} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-default-600">{exp.company}</p>
                    </div>
                    <Badge variant="flat" color="primary" className="self-start md:self-center">
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-default-600 mb-4">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-default-600">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};