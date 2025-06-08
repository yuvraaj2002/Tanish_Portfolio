import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const certifications = [
    {
        id: 1,
        title: "Microsoft Certified: Azure Data Engineer Associate",
        issuer: "Microsoft",
        issueDate: "Jul 2024",
        expiryDate: "Jul 2025",
        credentialId: "1E5DCA5295126108",
        icon: "logos:microsoft",
        credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/Tanish-5116/1E5DCA5295126108?sharingId"
    },
    {
        id: 2,
        title: "Creating a Business Plan",
        issuer: "LinkedIn",
        issueDate: "Apr 2022",
        expiryDate: null,
        credentialId: null,
        icon: "logos:linkedin-icon",
        credentialUrl: "https://www.linkedin.com/learning/creating-a-business-plan-2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDUFIM9d7TKKIEwiNeXPInw%3D%3D"
    }
];

export const CertificationsSection: React.FC = () => {
    return (
        <section id="certifications" className="section-padding bg-content1">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Licenses & Certifications</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * idx }}
                        >
                            <Card className="shadow-sm h-full">
                                <CardBody className="p-6 flex flex-col gap-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Icon icon={cert.icon} width={36} />
                                        <div>
                                            <h3 className="text-lg font-semibold leading-tight">{cert.title}</h3>
                                            <div className="text-default-600 text-sm">{cert.issuer}</div>
                                        </div>
                                    </div>
                                    <div className="text-default-500 text-sm mb-1">
                                        Issued {cert.issueDate}
                                        {cert.expiryDate && <> · Expires {cert.expiryDate}</>}
                                    </div>
                                    {cert.credentialId && (
                                        <div className="text-xs text-default-400 mb-2">
                                            Credential ID {cert.credentialId}
                                        </div>
                                    )}
                                    <Button
                                        as="a"
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="primary"
                                        variant="flat"
                                        radius="full"
                                        endContent={<Icon icon="lucide:external-link" width={16} />}
                                        className="w-fit"
                                    >
                                        Show credential
                                    </Button>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection; 