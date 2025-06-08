import React from "react";
import { Card, CardBody, CardFooter, Button, Image, Chip, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoLink: string;
  githubLink: string;
}

export const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Health Assistant",
      description: "A machine learning-based health assistant that provides personalized health recommendations based on user data and medical history.",
      image: "https://img.heroui.chat/image/ai?w=800&h=600&u=123",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      category: "AI",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Smart Home Dashboard",
      description: "A comprehensive dashboard for monitoring and controlling smart home devices with real-time analytics and automation capabilities.",
      image: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=456",
      technologies: ["React", "TypeScript", "MQTT", "Chart.js"],
      category: "Web",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Financial Portfolio Analyzer",
      description: "An application that analyzes investment portfolios, provides risk assessments, and recommends optimization strategies.",
      image: "https://img.heroui.chat/image/finance?w=800&h=600&u=789",
      technologies: ["Python", "Pandas", "React", "D3.js"],
      category: "Data",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const categories = ["all", ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-default-600 max-w-2xl mx-auto">
            A selection of my recent work, personal projects, and contributions.
          </p>
        </motion.div>

        <div className="mb-12">
          <Tabs
            aria-label="Project categories"
            color="primary"
            variant="light"
            selectedKey={selectedCategory}
            onSelectionChange={setSelectedCategory as any}
            classNames={{
              tabList: "gap-4 w-full justify-center",
              cursor: "bg-primary/20",
              tab: "px-4 py-2 text-sm font-medium"
            }}
          >
            {categories.map((category) => (
              <Tab
                key={category}
                title={category.charAt(0).toUpperCase() + category.slice(1)}
              />
            ))}
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
            >
              <Card className="project-card shadow-sm h-full">
                <CardBody className="p-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <Chip size="sm" variant="flat" color="primary">
                        {project.category}
                      </Chip>
                    </div>
                    <p className="text-default-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.map((tech) => (
                        <Chip key={tech} size="sm" variant="flat">
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="px-6 py-4 border-t border-default-100 gap-2">
                  <Button
                    as="a"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    variant="flat"
                    radius="full"
                    className="flex-1"
                    endContent={<Icon icon="lucide:external-link" width={16} />}
                  >
                    Live Demo
                  </Button>
                  <Button
                    as="a"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="light"
                    radius="full"
                    className="flex-1"
                    endContent={<Icon icon="lucide:github" width={16} />}
                  >
                    GitHub
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};