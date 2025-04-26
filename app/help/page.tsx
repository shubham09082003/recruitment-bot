import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageSquare,
  Upload,
  Mic,
  Search,
  User,
  FileText,
  Briefcase,
  HelpCircle,
  CheckCircle,
  History,
  PanelLeft,
  Plus,
  Eye,
} from "lucide-react"

export default function HelpPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Help Center</h1>
          <p className="text-gray-500">Learn how to use our AI Recruitment Assistant</p>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Platform Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Chat Interface */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <MessageSquare className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle>AI Chat Assistant</CardTitle>
                        <CardDescription>Interact with our AI recruiter</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Ask questions about job openings and requirements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Get personalized job recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Learn about company culture and benefits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Schedule interviews with hiring managers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Chat History - NEW */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <History className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle>Chat History</CardTitle>
                        <CardDescription>Access all your previous conversations</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>View and search through all previous conversations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Resume conversations where you left off</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Start new chats with a single click</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Organize and manage your conversation history</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Resume Upload */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Upload className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle>Resume Upload</CardTitle>
                        <CardDescription>Submit your resume for analysis</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Upload your resume in PDF, DOC, or DOCX format</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>AI automatically extracts your skills and experience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Review and edit extracted information</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Get matched with relevant job openings</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Voice Input */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Mic className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle>Voice Input</CardTitle>
                        <CardDescription>Speak your questions</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Record voice messages up to 60 seconds</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>AI transcribes your speech to text</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Review before sending your message</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Hands-free interaction with the AI assistant</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Resume Search */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Search className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle>Resume Search</CardTitle>
                        <CardDescription>Find and manage resumes</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Search through candidate resumes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Filter by skills, experience, and education</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Bulk upload multiple resumes at once</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>View detailed resume analysis and information</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Sidebar Navigation - NEW */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <PanelLeft className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle>Sidebar Navigation</CardTitle>
                        <CardDescription>Easily navigate between features</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Toggle chat history sidebar for easy access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>View available job positions in the job sidebar</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Customize your workspace layout</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Responsive design for all device sizes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 p-3 rounded-full mb-4">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">1. Create Your Profile</h3>
                    <p className="text-gray-600 text-sm">
                      Sign up and create your candidate profile with basic information.
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 p-3 rounded-full mb-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">2. Upload Your Resume</h3>
                    <p className="text-gray-600 text-sm">
                      Upload your resume and our AI will extract your skills and experience.
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 p-3 rounded-full mb-4">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">3. Chat with AI Recruiter</h3>
                    <p className="text-gray-600 text-sm">
                      Interact with our AI to find job matches and get your questions answered.
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 p-3 rounded-full mb-4">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">4. Get Matched to Jobs</h3>
                    <p className="text-gray-600 text-sm">
                      Receive personalized job recommendations based on your profile and resume.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* New section: Key Features Walkthrough */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features Walkthrough</h2>

              <div className="space-y-6">
                {/* Chat History Feature */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Using Chat History</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <Plus className="h-4 w-4 mr-2 text-blue-600" />
                        Starting a New Chat
                      </h3>
                      <p className="text-sm text-gray-600 ml-6">
                        Click the "New chat" button at the top of the chat history sidebar to start a fresh conversation
                        with the AI assistant.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <History className="h-4 w-4 mr-2 text-blue-600" />
                        Accessing Previous Conversations
                      </h3>
                      <p className="text-sm text-gray-600 ml-6">
                        All your previous conversations are saved in the chat history sidebar. Simply click on any
                        conversation to resume where you left off.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <Search className="h-4 w-4 mr-2 text-blue-600" />
                        Searching Conversations
                      </h3>
                      <p className="text-sm text-gray-600 ml-6">
                        Use the search bar in the chat history sidebar to quickly find specific conversations by
                        keywords or topics.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <PanelLeft className="h-4 w-4 mr-2 text-blue-600" />
                        Toggling the Sidebar
                      </h3>
                      <p className="text-sm text-gray-600 ml-6">
                        Click the sidebar toggle button in the header to show or hide the chat history sidebar, giving
                        you more space for your current conversation when needed.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Voice Input Feature */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Using Voice Input</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <Mic className="h-4 w-4 mr-2 text-blue-600" />
                        Recording Your Question
                      </h3>
                      <p className="text-sm text-gray-600 ml-6">
                        Click the microphone button in the chat input area, then speak your question clearly. The
                        recording will automatically stop after 60 seconds, or you can stop it manually.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                        Reviewing and Sending
                      </h3>
                      <p className="text-sm text-gray-600 ml-6">
                        After recording, you can review your message before sending. Click "Send Voice Message" to
                        submit your question to the AI assistant.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Resume Search Feature */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Using Resume Search</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <Upload className="h-4 w-4 mr-2 text-blue-600" />
                        Uploading Multiple Resumes
                      </h3>
                      <p className="text-sm text-gray-600 ml-6">
                        Switch to the "Upload Resumes" tab and drag-and-drop multiple files at once, or click to browse
                        and select files from your device.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <Search className="h-4 w-4 mr-2 text-blue-600" />
                        Searching and Filtering
                      </h3>
                      <p className="text-sm text-gray-600 ml-6">
                        Use the search bar to find resumes by name, skills, or position. Apply additional filters using
                        the "Filter by Skills" dropdown to narrow your results.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <Eye className="h-4 w-4 mr-2 text-blue-600" />
                        Viewing Resume Details
                      </h3>
                      <p className="text-sm text-gray-600 ml-6">
                        Click the eye icon in the Actions column to view a detailed breakdown of the candidate's resume,
                        including skills, experience, education, and certifications.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">How does the AI analyze my resume?</h3>
                  <p className="text-sm text-gray-600">
                    Our AI uses natural language processing to extract key information from your resume, including your
                    skills, work experience, education, and certifications. It then structures this data to match you
                    with relevant job openings.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Is my data secure?</h3>
                  <p className="text-sm text-gray-600">
                    Yes, we take data security seriously. All uploaded resumes and personal information are encrypted
                    and stored securely. We do not share your information with third parties without your explicit
                    consent.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">What file formats are supported for resume upload?</h3>
                  <p className="text-sm text-gray-600">
                    We support PDF, DOC, and DOCX file formats for resume uploads. For best results, we recommend using
                    PDF format as it maintains formatting across different devices.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">How accurate is the voice recognition?</h3>
                  <p className="text-sm text-gray-600">
                    Our voice recognition system is highly accurate for clear speech in quiet environments. It supports
                    multiple languages and accents, though background noise may affect accuracy. You can always review
                    and edit the transcription before sending.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Can I edit the information extracted from my resume?</h3>
                  <p className="text-sm text-gray-600">
                    Yes, after your resume is analyzed, you can review and edit any information that was extracted. This
                    ensures that your profile accurately represents your skills and experience.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">How long are my chat conversations saved?</h3>
                  <p className="text-sm text-gray-600">
                    Your chat conversations are saved indefinitely until you choose to delete them. You can access all
                    your previous conversations through the chat history sidebar and continue any conversation where you
                    left off.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Need help? Our support team is here to assist you.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Chat Support</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Chat with our support team in real-time during business hours.
                      </p>
                      <p className="text-sm font-medium">Available Monday-Friday, 9am-5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <HelpCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Support</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Send us an email and we'll get back to you within 24 hours.
                      </p>
                      <p className="text-sm font-medium">support@airecruitment.com</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h3 className="font-medium mb-4">Documentation & Resources</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                        <FileText className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-sm">User Guide</span>
                      </a>
                      <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                        <FileText className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-sm">Admin Documentation</span>
                      </a>
                      <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                        <FileText className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-sm">Video Tutorials</span>
                      </a>
                      <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                        <FileText className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-sm">API Documentation</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
