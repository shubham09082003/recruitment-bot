"use client"

import React, { useState } from "react"
import ChatInterface from "@/components/chat-interface"
import JobInfoSidebar from "@/components/job-info-sidebar"
import ChatHistorySidebar from "@/components/chat-history-sidebar"
import { PanelLeft, PanelRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Message = {
  sender: string;
  text: string;
}

const mockChatHistory = [
  {
    id: "chat1",
    title: "Job requirements for Frontend Developer",
    date: "2023-04-15",
    preview: "What are the requirements for the senior developer position?",
  },
  {
    id: "chat2",
    title: "Interview preparation",
    date: "2023-04-14",
    preview: "How should I prepare for the technical interview?",
  },
  {
    id: "chat3",
    title: "Salary negotiation advice",
    date: "2023-04-12",
    preview: "What's a reasonable salary range for this position?",
  },
  {
    id: "chat4",
    title: "Remote work options",
    date: "2023-04-10",
    preview: "Does this job offer remote work options?",
  },
  {
    id: "chat5",
    title: "Company culture questions",
    date: "2023-04-08",
    preview: "Can you tell me more about the company culture?",
  },
]

export default function ChatPage() {
  const [showJobSidebar, setShowJobSidebar] = useState(false)
  const [showChatSidebar, setShowChatSidebar] = useState(true)
  const [activeChatId, setActiveChatId] = useState("chat1")
  const [chatHistory, setChatHistory] = useState(mockChatHistory)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const createNewChat = () => {
    const newChat = {
      id: `chat${Date.now()}`,
      title: "New conversation",
      date: new Date().toISOString().split("T")[0],
      preview: "",
    }
    setChatHistory([newChat, ...chatHistory])
    setActiveChatId(newChat.id)
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMsg = { sender: "user", text: input }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })

      const data = await res.json()
      setMessages((prev) => [...prev, { sender: "bot", text: data.text }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Try again later." },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Chat history sidebar */}
      {showChatSidebar && (
        <div className="w-64 border-r border-gray-200 bg-white flex flex-col h-full">
          <ChatHistorySidebar
            chatHistory={chatHistory}
            activeChatId={activeChatId}
            onSelectChat={setActiveChatId}
            onCreateNewChat={createNewChat}
          />
        </div>
      )}

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowChatSidebar(!showChatSidebar)}
              className="mr-2"
              aria-label="Toggle chat history"
            >
              <PanelLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold">
              {chatHistory.find((chat) => chat.id === activeChatId)?.title ||
                "AI Recruitment Assistant"}
            </h1>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowJobSidebar(!showJobSidebar)}
              className="md:hidden"
              aria-label="Toggle job sidebar"
            >
              {showJobSidebar ? "Hide Jobs" : "Show Jobs"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowJobSidebar(!showJobSidebar)}
              className="hidden md:flex"
              aria-label="Toggle job sidebar"
            >
              <PanelRight className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-hide">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xl px-4 py-2 rounded-md ${
                msg.sender === "user"
                  ? "bg-blue-100 self-end text-right"
                  : "bg-gray-200 self-start text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="self-start text-gray-500 italic">AI is typing...</div>
          )}
        </div>

        {/* Input area */}
        <div className="border-t border-gray-200 p-4 bg-white flex items-center gap-2">
          <input
            className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type a message..."
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>

      {/* Job info sidebar */}
      {showJobSidebar && (
        <div className="w-full md:w-80 lg:w-96 border-l border-gray-200 bg-white">
          <JobInfoSidebar />
        </div>
      )}
    </div>
  )
}
