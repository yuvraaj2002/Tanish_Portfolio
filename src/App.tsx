import React from "react";
import { useTheme } from "@heroui/use-theme";
import { Button, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ExperienceSection } from "./components/experience-section";
import { CertificationsSection } from "./components/certifications-section";
import { ResearchSection } from "./components/research-section";
import { ProjectsSection } from "./components/projects-section";
import { SkillsSection } from "./components/skills-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

function App() {
  const { setTheme } = useTheme();

  // Force light theme on component mount
  React.useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <CertificationsSection />
        <ResearchSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />

      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Tooltip content="Scroll to top">
              <Button
                isIconOnly
                radius="full"
                color="primary"
                variant="flat"
                className="shadow-md"
                onPress={scrollToTop}
              >
                <Icon icon="lucide:chevron-up" width={20} />
              </Button>
            </Tooltip>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;