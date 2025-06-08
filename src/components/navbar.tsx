import React from "react";
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [scrolled, setScrolled] = React.useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroNavbar
      maxWidth="xl"
      isBlurred={scrolled}
      className={`transition-all duration-300 ${scrolled ? "py-2 shadow-sm" : "py-4"}`}
      shouldHideOnScroll={false}
    >
      <NavbarContent>
        <NavbarBrand>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-inherit"
          >
            Tanish
          </motion.p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={item.name}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                className={`nav-link ${activeSection === item.href.substring(1) ? "active" : ""}`}
              >
                {item.name}
              </Link>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              as={Link}
              href="#contact"
              color="primary"
              variant="flat"
              radius="full"
              className="font-medium"
              endContent={<Icon icon="lucide:arrow-right" width={16} />}
            >
              Contact Me
            </Button>
          </motion.div>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              href={item.href}
              className={`block w-full py-3 text-lg ${activeSection === item.href.substring(1)
                  ? "text-primary"
                  : "text-default-600"
                }`}
              onPress={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            as={Link}
            href="#contact"
            color="primary"
            className="mt-4 w-full"
            onPress={() => setIsMenuOpen(false)}
          >
            Contact Me
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
};