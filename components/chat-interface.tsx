"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Paperclip, Send, Mic } from "lucide-react"
import MessageBubble from "@/components/message-bubble"
import FileUpload from "@/components/file-upload"
import ResumePreview from "@/components/resume-preview"
import VoiceRecorder from "@/components/voice-recorder"

// Define message type
type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

// Mock chat data for different conversations
const mockChats: Record<string, Message[]> = {
  chat1: [
    {
      id: "1",
      content:
        "Hello! I'm your AI recruitment assistant. I can help you find job opportunities and answer questions about positions we have available.",
      sender: "ai",
      timestamp: new Date(Date.now() - 1000000),
    },
    {
      id: "2",
      content:
        "You can ask me about job requirements, company culture, or upload your resume for personalized recommendations.",
      sender: "ai",
      timestamp: new Date(Date.now() - 900000),
    },
    {
      id: "3",
      content: "What are the requirements for the senior developer position?",
      sender: "user",
      timestamp: new Date(Date.now() - 800000),
    },
    {
      id: "4",
      content:
        "The Senior Developer position requires 5+ years of experience with React and TypeScript, strong knowledge of modern frontend development practices, and experience with state management libraries like Redux or Zustand. A bachelor's degree in Computer Science or related field is preferred but not required if you have equivalent experience.",
      sender: "ai",
      timestamp: new Date(Date.now() - 700000),
    },
  ],
  chat2: [
    {
      id: "1",
      content: "Hello! I'm your AI recruitment assistant. How can I help you with your interview preparation?",
      sender: "ai",
      timestamp: new Date(Date.now() - 500000),
    },
    {
      id: "2",
      content: "How should I prepare for the technical interview?",
      sender: "user",
      timestamp: new Date(Date.now() - 400000),
    },
    {
      id: "3",
      content:
        "For the technical interview, I recommend reviewing data structures, algorithms, and system design concepts. Be prepared to solve coding problems on a whiteboard or in a shared editor. Also, review the company's tech stack and be ready to discuss your past projects in detail. Would you like me to provide some common interview questions for practice?",
      sender: "ai",
      timestamp: new Date(Date.now() - 300000),
    },
  ],
  chat3: [
    {
      id: "1",
      content: "Hello! I'm your AI recruitment assistant. I can help you with salary negotiation advice.",
      sender: "ai",
      timestamp: new Date(Date.now() - 200000),
    },
    {
      id: "2",
      content: "What's a reasonable salary range for this position?",
      sender: "user",
      timestamp: new Date(Date.now() - 100000),
    },
    {
      id: "3",
      content:
        "Based on market research and the job requirements, a reasonable salary range for this Senior Developer position in San Francisco is between $120,000 and $160,000 annually, depending on your experience level and specific skills. Benefits and equity compensation can also significantly impact the total compensation package.",
      sender: "ai",
      timestamp: new Date(Date.now() - 50000),
    },
  ],
  chat4: [
    {
      id: "1",
      content: "Hello! I'm your AI recruitment assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: "2",
      content: "Does this job offer remote work options?",
      sender: "user",
      timestamp: new Date(Date.now() - 200000),
    },
    {
      id: "3",
      content:
        "Yes, this position offers flexible work arrangements. The company has a hybrid policy where you can work remotely 3 days per week and come to the office 2 days per week for team collaboration. They also consider fully remote candidates in certain cases, depending on your location and experience level.",
      sender: "ai",
      timestamp: new Date(Date.now() - 100000),
    },
  ],
  chat5: [
    {
      id: "1",
      content: "Hello! I'm your AI recruitment assistant. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(Date.now() - 400000),
    },
    {
      id: "2",
      content: "Can you tell me more about the company culture?",
      sender: "user",
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: "3",
      content:
        "The company has a collaborative and innovative culture. They value work-life balance with flexible hours and regular team-building activities. The engineering team practices agile methodology with two-week sprints and emphasizes continuous learning. They offer professional development budgets, regular lunch-and-learns, and encourage open communication across all levels of the organization.",
      sender: "ai",
      timestamp: new Date(Date.now() - 200000),
    },
  ],
}

// Initial welcome messages for new chats
const initialMessages: Message[] = [
  {
    id: "1",
    content:
      "Hello! I'm your AI recruitment assistant. I can help you find job opportunities and answer questions about positions we have available.",
    sender: "ai",
    timestamp: new Date(),
  },
  {
    id: "2",
    content:
      "You can ask me about job requirements, company culture, or upload your resume for personalized recommendations.",
    sender: "ai",
    timestamp: new Date(),
  },
]

type ChatInterfaceProps = {
  chatId: string
}

export default function ChatInterface({ chatId }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [showFileUpload, setShowFileUpload] = useState(false)
  const [showVoiceRecorder, setShowVoiceRecorder] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Add a new state for showing the resume preview
  const [showResumePreview, setShowResumePreview] = useState(false)
  const [resumeFileName, setResumeFileName] = useState("")

  // Load chat messages when chatId changes
  useEffect(() => {
    if (chatId) {
      // If we have mock data for this chat, use it
      if (mockChats[chatId]) {
        setMessages(mockChats[chatId])
      } else {
        // Otherwise, use initial messages for new chats
        setMessages(initialMessages)
      }
    }
  }, [chatId])

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponses = [
        "I found several job openings that match your qualifications. Would you like me to share the details?",
        "That's a great question about our company culture. We prioritize work-life balance and professional growth.",
        "The position requires 3+ years of experience in a similar role. Do you meet this requirement?",
        "I'd be happy to schedule an interview with the hiring manager. What days work best for you?",
        "Your resume has been received. Based on your experience, I recommend applying for our Senior Developer position.",
      ]

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  const handleFileUpload = (fileName: string) => {
    setIsUploading(false)
    setShowFileUpload(false)
    setResumeFileName(fileName)
    setShowResumePreview(true)
  }

  const handleVoiceInput = (transcription: string) => {
    setShowVoiceRecorder(false)

    if (transcription) {
      // Add user message with voice transcription
      const userMessage: Message = {
        id: Date.now().toString(),
        content: transcription,
        sender: "user",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])

      // Simulate AI response after a short delay
      setTimeout(() => {
        const aiResponses = [
          "Thanks for your voice message. I understand you're asking about the job requirements. This position needs...",
          "I heard your question about remote work options. Yes, we offer flexible working arrangements including...",
          "Based on your question about the interview process, I can tell you that we typically have three rounds...",
          "Regarding your question about the company culture, we pride ourselves on being innovative and collaborative...",
        ]

        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: randomResponse,
          sender: "ai",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, aiMessage])
      }, 1000)
    }
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Resume Preview - shown after upload */}
      {showResumePreview && (
        <ResumePreview
          fileName={resumeFileName}
          onClose={() => {
            setShowResumePreview(false)

            // Add message about the uploaded file
            const fileMessage: Message = {
              id: Date.now().toString(),
              content: `Uploaded and analyzed: ${resumeFileName}`,
              sender: "user",
              timestamp: new Date(),
            }

            setMessages((prev) => [...prev, fileMessage])

            // Simulate AI response to the uploaded resume
            setTimeout(() => {
              const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                content:
                  "Thanks for uploading your resume! I've analyzed your experience and found 3 job openings that match your skills. Would you like me to tell you more about them?",
                sender: "ai",
                timestamp: new Date(),
              }

              setMessages((prev) => [...prev, aiMessage])
            }, 2000)
          }}
        />
      )}

      {/* File upload area - conditionally shown */}
      {showFileUpload && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <FileUpload onUpload={handleFileUpload} onCancel={() => setShowFileUpload(false)} />
        </div>
      )}

      {/* Voice recorder area - conditionally shown */}
      {showVoiceRecorder && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <VoiceRecorder onComplete={handleVoiceInput} onCancel={() => setShowVoiceRecorder(false)} />
        </div>
      )}

      {/* Input area */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => {
              setShowFileUpload(!showFileUpload)
              setShowVoiceRecorder(false)
            }}
            className="flex-shrink-0"
          >
            <Paperclip className="h-5 w-5" />
            <span className="sr-only">Attach file</span>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => {
              setShowVoiceRecorder(!showVoiceRecorder)
              setShowFileUpload(false)
            }}
            className="flex-shrink-0"
          >
            <Mic className="h-5 w-5" />
            <span className="sr-only">Voice input</span>
          </Button>

          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />

          <Button type="submit" size="icon" className="flex-shrink-0">
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  )
}
