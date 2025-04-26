import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"

type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

type MessageBubbleProps = {
  message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isAi = message.sender === "ai"

  return (
    <div className={`flex ${isAi ? "justify-start" : "justify-end"}`}>
      <div className={`flex max-w-[80%] ${isAi ? "flex-row" : "flex-row-reverse"}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 ${isAi ? "mr-3" : "ml-3"}`}>
          <Avatar>
            <AvatarImage src={isAi ? "/placeholder.svg?height=40&width=40&query=robot face" : ""} />
            <AvatarFallback>{isAi ? "AI" : "ME"}</AvatarFallback>
          </Avatar>
        </div>

        {/* Message content */}
        <div>
          <div
            className={`rounded-lg p-3 ${
              isAi ? "bg-white border border-gray-200 text-gray-900" : "bg-blue-600 text-white"
            }`}
          >
            {message.content}
          </div>
          <div className={`text-xs text-gray-500 mt-1 ${isAi ? "text-left" : "text-right"}`}>
            {formatDistanceToNow(message.timestamp, { addSuffix: true })}
          </div>
        </div>
      </div>
    </div>
  )
}
