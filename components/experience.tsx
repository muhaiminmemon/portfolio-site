"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, MapPinIcon } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "DataAnnotation.tech",
    period: "September 2024 – December 2024",
    location: "Toronto, ON",
    responsibilities: [
      "Optimized Python code, ensuring performance and efficient data processing for AI/ML models",
      "Ensured code adheres to industry standards and best practices to prevent optimization and maintenance issues",
      "Initiated 20+ weekly code reviews resulting in increased efficiency and a 98% code coverage across core modules",
      "Fine-tuned AI models through prompt engineering and hyperparameter optimization, enhancing accuracy in sentiment analysis and data classification",
    ],
    skills: ["Python", "AI/ML", "Code Review", "Prompt Engineering"],
  },
  {
    title: "Information Security Analyst",
    company: "Symcor",
    period: "Jan 2024 – August 2024",
    location: "Mississauga, ON",
    responsibilities: [
      "Developed a PowerShell script leveraging Microsoft Graph API to automate creation, analysis, and customization of 400+ Azure access reviews, reducing manual effort by 90%",
      "Created Python-based ETL process using Graph API to optimize acquisition, routing, parsing of 120+ feeds",
      "Managed user onboarding, user life cycle and provisioning for Azure, GitLab, Active Directory through SailPoint",
      "Led implementation of Azure AD Privileged Identity Management (PIM) and Role-Based Access Control (RBAC) roles during large-scale database migration to Azure Cloud",
    ],
    skills: ["PowerShell", "Microsoft Graph API", "Python", "Azure", "SailPoint"],
  },
  {
    title: "Technical Specialist",
    company: "Minuteman Press",
    period: "June 2020 – February 2022",
    location: "Mississauga, ON",
    responsibilities: [
      "Conducted thorough virus and malware removal procedures on infected systems, preserving data integrity",
      "Troubleshot hardware and software issues in computers, conducting diagnostics to identify and resolve problems",
      "Built and configured 10+ custom PCs tailored to specific departmental requirements",
      "Upgraded and replaced laptop components, including RAM, SSDs, and wireless cards",
    ],
    skills: ["Hardware Troubleshooting", "Malware Removal", "PC Building", "Technical Support"],
  },
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:ml-auto md:mr-0" : "md:pl-12 md:mr-auto md:ml-0"
              } md:w-1/2 z-10`}
            >
              {/* Timeline dot */}
              <div className="absolute top-8 left-0 md:left-auto md:right-auto md:-left-4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <BriefcaseIcon className="h-4 w-4 text-white" />
              </div>

              {/* Timeline card */}
              <Card className="bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300 border-primary/10">
                <CardHeader>
                  <div className="flex flex-col gap-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      {exp.title}
                      <Badge variant="outline" className="ml-auto">
                        {exp.period}
                      </Badge>
                    </CardTitle>
                    <div className="text-lg font-medium text-primary flex flex-wrap gap-2 items-center">
                      {exp.company}
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm md:text-base">
                        {resp}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="animate-in fade-in-50 duration-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

