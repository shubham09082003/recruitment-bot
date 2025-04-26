"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, FileText, X, Edit2, Calendar, Award } from "lucide-react"

type ResumePreviewProps = {
  fileName: string
  onClose: () => void
}

// Mock data for the extracted resume information
const mockResumeData = {
  personalInfo: {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/alexjohnson",
  },
  skills: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "GraphQL", level: 70 },
    { name: "UI/UX Design", level: 65 },
    { name: "Agile Methodology", level: 85 },
    { name: "Team Leadership", level: 80 },
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "Jan 2020 - Present",
      description:
        "Led the development of the company's flagship product, improving performance by 40%. Managed a team of 5 developers and implemented CI/CD pipelines.",
      highlights: ["React", "TypeScript", "Team Leadership"],
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions LLC",
      location: "Oakland, CA",
      period: "Mar 2017 - Dec 2019",
      description:
        "Developed responsive web applications for various clients. Collaborated with designers to implement pixel-perfect UIs.",
      highlights: ["JavaScript", "CSS", "Responsive Design"],
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub",
      location: "San Jose, CA",
      period: "Jun 2015 - Feb 2017",
      description:
        "Assisted in the development of web applications. Learned and implemented modern frontend technologies.",
      highlights: ["HTML", "CSS", "JavaScript"],
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2013 - 2015",
      gpa: "3.8/4.0",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2009 - 2013",
      gpa: "3.7/4.0",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2021",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2020",
    },
  ],
}

export default function ResumePreview({ fileName, onClose }: ResumePreviewProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(true)
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [resumeData, setResumeData] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("overview")

  // Simulate the analysis process
  useState(() => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      setAnalysisProgress(progress)

      if (progress >= 100) {
        clearInterval(interval)
        setIsAnalyzing(false)
        setResumeData(mockResumeData)
      }
    }, 100)

    return () => clearInterval(interval)
  })

  if (isAnalyzing) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <Card className="w-full max-w-2xl mx-4">
          <CardHeader>
            <CardTitle className="text-xl">Analyzing Resume</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <FileText className="h-12 w-12 text-blue-600" />
              <div className="flex-1">
                <p className="font-medium">{fileName}</p>
                <p className="text-sm text-gray-500">Extracting information...</p>
              </div>
            </div>
            <Progress value={analysisProgress} className="h-2" />
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className={`h-4 w-4 ${analysisProgress >= 30 ? "text-green-500" : "text-gray-300"}`} />
                <span className={analysisProgress >= 30 ? "" : "text-gray-400"}>Personal Information</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className={`h-4 w-4 ${analysisProgress >= 50 ? "text-green-500" : "text-gray-300"}`} />
                <span className={analysisProgress >= 50 ? "" : "text-gray-400"}>Skills</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className={`h-4 w-4 ${analysisProgress >= 70 ? "text-green-500" : "text-gray-300"}`} />
                <span className={analysisProgress >= 70 ? "" : "text-gray-400"}>Work Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className={`h-4 w-4 ${analysisProgress >= 90 ? "text-green-500" : "text-gray-300"}`} />
                <span className={analysisProgress >= 90 ? "" : "text-gray-400"}>Education</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8">
      <Card className="w-full max-w-4xl mx-4">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl">Resume Analysis</CardTitle>
            <p className="text-sm text-gray-500">Extracted information from {fileName}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5 mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Personal Info Card */}
                <Card className="flex-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <span>Personal Information</span>
                      <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{resumeData.personalInfo.name}</h3>
                      <p className="text-gray-500">{resumeData.personalInfo.location}</p>
                      <div className="text-sm space-y-1">
                        <p>{resumeData.personalInfo.email}</p>
                        <p>{resumeData.personalInfo.phone}</p>
                        <p>{resumeData.personalInfo.linkedin}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Skills Card */}
                <Card className="flex-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <span>Top Skills</span>
                      <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {resumeData.skills.slice(0, 6).map((skill: any) => (
                        <Badge key={skill.name} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Latest Experience Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <span>Latest Experience</span>
                    <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resumeData.experience.slice(0, 1).map((exp: any, index: number) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{exp.title}</h3>
                            <p className="text-sm">
                              {exp.company} • {exp.location}
                            </p>
                          </div>
                          <span className="text-sm text-gray-500">{exp.period}</span>
                        </div>
                        <p className="text-sm">{exp.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {exp.highlights.map((highlight: string) => (
                            <Badge key={highlight} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Latest Education Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <span>Latest Education</span>
                    <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resumeData.education.slice(0, 1).map((edu: any, index: number) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{edu.degree}</h3>
                            <p className="text-sm">
                              {edu.institution} • {edu.location}
                            </p>
                          </div>
                          <span className="text-sm text-gray-500">{edu.period}</span>
                        </div>
                        <p className="text-sm">GPA: {edu.gpa}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <span>Skills Assessment</span>
                    <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resumeData.skills.map((skill: any) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <span>Work Experience</span>
                    <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {resumeData.experience.map((exp: any, index: number) => (
                      <div key={index} className="relative pl-6 pb-6 border-l border-gray-200 last:border-0 last:pb-0">
                        <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600"></div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{exp.title}</h3>
                              <p className="text-sm">
                                {exp.company} • {exp.location}
                              </p>
                            </div>
                            <span className="text-sm text-gray-500 flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-sm">{exp.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {exp.highlights.map((highlight: string) => (
                              <Badge key={highlight} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <span>Education</span>
                    <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {resumeData.education.map((edu: any, index: number) => (
                      <div key={index} className="relative pl-6 pb-6 border-l border-gray-200 last:border-0 last:pb-0">
                        <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600"></div>
                        <div className="space-y-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{edu.degree}</h3>
                              <p className="text-sm">
                                {edu.institution} • {edu.location}
                              </p>
                            </div>
                            <span className="text-sm text-gray-500 flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {edu.period}
                            </span>
                          </div>
                          <p className="text-sm">GPA: {edu.gpa}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Certifications Tab */}
            <TabsContent value="certifications">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <span>Certifications</span>
                    <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resumeData.certifications.map((cert: any, index: number) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200">
                        <Award className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div className="flex-1">
                          <h3 className="font-medium">{cert.name}</h3>
                          <p className="text-sm text-gray-500">{cert.issuer}</p>
                        </div>
                        <span className="text-sm text-gray-500">{cert.date}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button>Confirm & Continue</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
