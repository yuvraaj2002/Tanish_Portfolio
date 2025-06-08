import React from "react";
import { Card, CardBody, CardFooter, Button, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from "@heroui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

interface ResearchPaper {
  id: number;
  title: string;
  journal: string;
  date: string;
  abstract: string;
  tags: string[];
  link: string;
}

export const ResearchSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPaper, setSelectedPaper] = React.useState<ResearchPaper | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

  const papers: ResearchPaper[] = [
    {
      id: 1,
      title: "Human Activity Detection Using Deep Learning",
      journal: "International Journal of Advances in Electrical Engineering",
      date: "2023",
      abstract: "Led the development of advanced algorithms and technologies for human activity detection using deep learning techniques, resulting in a publication in the International Journal of Advances in Electrical Engineering, and designed a user-friendly frontend interface with intuitive navigation and detailed activity descriptions.",
      tags: ["Deep Learning", "Activity Recognition", "Frontend"],
      link: "#"
    },
    {
      id: 2,
      title: "Illegal Forum Detection",
      journal: "Chandigarh University, Punjab, India",
      date: "2023",
      abstract: "Led the Illegal Forum Detection project at Chandigarh University, Punjab, India, developing advanced algorithms using Natural Language Processing and Machine Learning to identify illicit online platforms. Designed and implemented a user-friendly frontend interface with HTML, CSS, JavaScript, and ReactJS.",
      tags: ["NLP", "Machine Learning", "Web Development"],
      link: "#"
    }
  ];

  const allTags = React.useMemo(() => {
    const tagsSet = new Set<string>();
    papers.forEach(paper => {
      paper.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, [papers]);

  const filteredPapers = React.useMemo(() => {
    return papers.filter(paper => {
      const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.journal.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = activeFilter ? paper.tags.includes(activeFilter) : true;

      return matchesSearch && matchesTag;
    });
  }, [papers, searchQuery, activeFilter]);

  const handlePaperClick = (paper: ResearchPaper) => {
    setSelectedPaper(paper);
    onOpen();
  };

  const handleFilterClick = (tag: string) => {
    setActiveFilter(activeFilter === tag ? null : tag);
  };

  return (
    <section id="research" className="section-padding bg-content1">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Papers</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-default-600 max-w-2xl mx-auto">
            My published research work in various fields of computer science and artificial intelligence.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Input
              placeholder="Search papers..."
              value={searchQuery}
              onValueChange={setSearchQuery}
              startContent={<Icon icon="lucide:search" className="text-default-400" />}
              className="max-w-md"
            />
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Chip
                  key={tag}
                  color={activeFilter === tag ? "primary" : "default"}
                  variant={activeFilter === tag ? "solid" : "flat"}
                  className="cursor-pointer"
                  onClick={() => handleFilterClick(tag)}
                >
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
            >
              <Card className="paper-card h-full shadow-sm">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{paper.title}</h3>
                  <p className="text-default-600 text-sm mb-3">{paper.journal}</p>
                  <p className="text-default-500 text-sm mb-4">{paper.date}</p>
                  <p className="text-default-600 line-clamp-3 mb-4">{paper.abstract}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {paper.tags.map((tag) => (
                      <Chip key={tag} size="sm" variant="flat" color="primary">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
                <CardFooter className="px-6 py-4 border-t border-default-100 gap-2">
                  <Button
                    color="primary"
                    variant="light"
                    radius="full"
                    onPress={() => handlePaperClick(paper)}
                    className="flex-1"
                  >
                    Read Abstract
                  </Button>
                  <Button
                    as="a"
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    variant="flat"
                    radius="full"
                    endContent={<Icon icon="lucide:external-link" width={16} />}
                    className="flex-1"
                  >
                    View Paper
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="text-center py-12">
            <Icon icon="lucide:file-search" className="mx-auto mb-4 text-default-400" width={48} />
            <h3 className="text-xl font-medium mb-2">No papers found</h3>
            <p className="text-default-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {selectedPaper?.title}
                </ModalHeader>
                <ModalBody>
                  <p className="text-default-600 font-medium">{selectedPaper?.journal}</p>
                  <p className="text-default-500 mb-4">{selectedPaper?.date}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedPaper?.tags.map((tag) => (
                      <Chip key={tag} size="sm" variant="flat" color="primary">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                  <h4 className="font-medium mb-2">Abstract</h4>
                  <p className="text-default-600">{selectedPaper?.abstract}</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    as="a"
                    href={selectedPaper?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    endContent={<Icon icon="lucide:external-link" width={16} />}
                  >
                    View Full Paper
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};