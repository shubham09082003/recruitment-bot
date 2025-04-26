import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA (Remote)",
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
    skills: ["React", "TypeScript", "Next.js"],
    description:
      "We are looking for a Senior Frontend Developer to join our team and help build innovative web applications.",
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "InnovateSoft",
    location: "New York, NY (Hybrid)",
    salary: "$130,000 - $160,000",
    posted: "1 week ago",
    skills: ["Node.js", "React", "MongoDB"],
    description: "Join our engineering team to develop scalable web applications using modern technologies.",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Austin, TX (On-site)",
    salary: "$90,000 - $120,000",
    posted: "3 days ago",
    skills: ["Figma", "Adobe XD", "User Research"],
    description: "Create beautiful and intuitive user interfaces for our flagship products.",
  },
]

export default function JobInfoSidebar() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">Available Positions</h2>
        <p className="text-sm text-gray-500">{jobs.length} jobs matching your profile</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}

function JobCard({ job }: { job: any }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{job.title}</CardTitle>
          <Badge variant="outline" className="text-xs">
            {job.posted}
          </Badge>
        </div>
        <p className="text-sm font-medium">{job.company}</p>
        <p className="text-sm text-gray-500">{job.location}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm mb-2">{job.description}</p>
        <p className="text-sm font-medium text-gray-700">{job.salary}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {job.skills.map((skill: string) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
