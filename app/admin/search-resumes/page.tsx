"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Upload, FileText, Filter, X, Eye, Download, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import ResumePreview from "@/components/resume-preview"

// Mock resume data
const mockResumes = [
  {
    id: "1",
    name: "Alex Johnson",
    fileName: "alex_johnson_resume.pdf",
    position: "Senior Frontend Developer",
    skills: ["React", "TypeScript", "Next.js"],
    experience: "5 years",
    education: "Stanford University",
    uploadDate: "2023-04-15",
  },
  {
    id: "2",
    name: "Sarah Williams",
    fileName: "sarah_williams_cv.pdf",
    position: "UX/UI Designer",
    skills: ["Figma", "Adobe XD", "User Research"],
    experience: "4 years",
    education: "Rhode Island School of Design",
    uploadDate: "2023-04-14",
  },
  {
    id: "3",
    name: "Michael Chen",
    fileName: "michael_chen_resume.pdf",
    position: "Full Stack Developer",
    skills: ["Node.js", "React", "MongoDB"],
    experience: "3 years",
    education: "MIT",
    uploadDate: "2023-04-13",
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    fileName: "emily_rodriguez_resume.pdf",
    position: "Product Manager",
    skills: ["Agile", "Jira", "Product Strategy"],
    experience: "6 years",
    education: "UC Berkeley",
    uploadDate: "2023-04-12",
  },
  {
    id: "5",
    name: "David Kim",
    fileName: "david_kim_resume.pdf",
    position: "DevOps Engineer",
    skills: ["AWS", "Docker", "Kubernetes"],
    experience: "4 years",
    education: "Carnegie Mellon University",
    uploadDate: "2023-04-11",
  },
]

export default function SearchResumesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [uploadingFiles, setUploadingFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [showResumePreview, setShowResumePreview] = useState(false)
  const [selectedResume, setSelectedResume] = useState<string | null>(null)

  const allSkills = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "Figma",
    "Adobe XD",
    "User Research",
    "Agile",
    "Jira",
    "Product Strategy",
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setUploadingFiles(filesArray)
    }
  }

  const handleUpload = () => {
    if (uploadingFiles.length === 0) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setUploadingFiles([])
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  const filteredResumes = mockResumes.filter((resume) => {
    // Filter by search query
    const matchesQuery =
      searchQuery === "" ||
      resume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resume.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resume.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    // Filter by selected skills
    const matchesSkills = selectedSkills.length === 0 || selectedSkills.every((skill) => resume.skills.includes(skill))

    return matchesQuery && matchesSkills
  })

  const viewResume = (resumeId: string) => {
    setSelectedResume(resumeId)
    setShowResumePreview(true)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Resume Search</h1>

      <Tabs defaultValue="search" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="search">Search Resumes</TabsTrigger>
          <TabsTrigger value="upload">Upload Resumes</TabsTrigger>
        </TabsList>

        <TabsContent value="search" className="space-y-6">
          {/* Search and filter bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by name, skills, or position..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter by Skills
                  {selectedSkills.length > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {selectedSkills.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {allSkills.map((skill) => (
                  <DropdownMenuCheckboxItem
                    key={skill}
                    checked={selectedSkills.includes(skill)}
                    onCheckedChange={() => toggleSkill(skill)}
                  >
                    {skill}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {selectedSkills.length > 0 && (
              <Button
                variant="ghost"
                onClick={() => setSelectedSkills([])}
                className="hidden md:flex items-center gap-1"
              >
                <X className="h-4 w-4" />
                Clear filters
              </Button>
            )}
          </div>

          {/* Selected skills pills */}
          {selectedSkills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="flex items-center gap-1 pl-2 pr-1 py-1">
                  {skill}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 ml-1 hover:bg-transparent"
                    onClick={() => toggleSkill(skill)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              <Button variant="ghost" size="sm" onClick={() => setSelectedSkills([])} className="text-xs h-7 md:hidden">
                Clear all
              </Button>
            </div>
          )}

          {/* Results count */}
          <div className="text-sm text-gray-500">
            Found {filteredResumes.length} {filteredResumes.length === 1 ? "resume" : "resumes"}
          </div>

          {/* Results table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4 hidden md:table-cell">Position</th>
                  <th className="text-left py-3 px-4 hidden lg:table-cell">Skills</th>
                  <th className="text-left py-3 px-4 hidden lg:table-cell">Experience</th>
                  <th className="text-right py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredResumes.map((resume) => (
                  <tr key={resume.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="font-medium">{resume.name}</div>
                      <div className="text-sm text-gray-500 md:hidden">{resume.position}</div>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">{resume.position}</td>
                    <td className="py-3 px-4 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {resume.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden lg:table-cell">{resume.experience}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => viewResume(resume.id)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredResumes.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No resumes found matching your search criteria.</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="upload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Resumes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {!isUploading && uploadingFiles.length === 0 ? (
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault()
                      if (e.dataTransfer.files) {
                        setUploadingFiles(Array.from(e.dataTransfer.files))
                      }
                    }}
                  >
                    <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-lg font-medium mb-2">Drag and drop files here</p>
                    <p className="text-sm text-gray-500 mb-4">or click to browse</p>
                    <input
                      type="file"
                      id="resume-upload"
                      multiple
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <Button variant="outline" onClick={() => document.getElementById("resume-upload")?.click()}>
                      Select Files
                    </Button>
                  </div>
                ) : isUploading ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Uploading {uploadingFiles.length} files...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="font-medium">Selected Files ({uploadingFiles.length})</div>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {uploadingFiles.map((file, index) => (
                        <div key={index} className="flex items-center p-2 bg-gray-50 rounded-lg">
                          <FileText className="h-5 w-5 text-blue-600 mr-3" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{file.name}</p>
                            <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              setUploadingFiles((prev) => prev.filter((_, i) => i !== index))
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setUploadingFiles([])}>
                        Cancel
                      </Button>
                      <Button onClick={handleUpload}>
                        Upload {uploadingFiles.length} {uploadingFiles.length === 1 ? "File" : "Files"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Resume Preview Modal */}
      {showResumePreview && selectedResume && (
        <ResumePreview
          fileName={mockResumes.find((r) => r.id === selectedResume)?.fileName || ""}
          onClose={() => setShowResumePreview(false)}
        />
      )}
    </div>
  )
}
