"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Plus, Search, Trash2, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type ChatHistoryItem = {
  id: string
  title: string
  date: string
  preview: string
}

type ChatHistorySidebarProps = {
  chatHistory: ChatHistoryItem[]
  activeChatId: string
  onSelectChat: (chatId: string) => void
  onCreateNewChat: () => void
}

export default function ChatHistorySidebar({
  chatHistory,
  activeChatId,
  onSelectChat,
  onCreateNewChat,
}: ChatHistorySidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredChats = chatHistory.filter(
    (chat) =>
      chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.preview.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <Button onClick={onCreateNewChat} className="w-full flex items-center justify-center gap-2" variant="outline">
          <Plus className="h-4 w-4" />
          New chat
        </Button>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search conversations"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.length > 0 ? (
          <div className="py-2">
            {filteredChats.map((chat) => (
              <div
                key={chat.id}
                className={`w-full text-left px-4 py-3 hover:bg-gray-100 flex items-start ${
                  chat.id === activeChatId ? "bg-gray-100" : ""
                }`}
                onClick={() => onSelectChat(chat.id)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && onSelectChat(chat.id)}
              >
                <MessageSquare className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-sm truncate">{chat.title}</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-6 w-6 ml-2">
                          <MoreVertical className="h-3 w-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete chat
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{chat.preview}</p>
                  <p className="text-xs text-gray-400 mt-1">{chat.date}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center text-gray-500 text-sm">No conversations found</div>
        )}
      </div>
    </>
  )
}
