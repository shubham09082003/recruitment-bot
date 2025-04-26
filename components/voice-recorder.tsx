"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Mic, StopCircle, Play, Trash2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type VoiceRecorderProps = {
  onComplete: (transcription: string) => void
  onCancel: () => void
}

export default function VoiceRecorder({ onComplete, onCancel }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [hasRecording, setHasRecording] = useState(false)
  const [isTranscribing, setIsTranscribing] = useState(false)
  const [transcriptionProgress, setTranscriptionProgress] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const startRecording = () => {
    setIsRecording(true)
    setRecordingTime(0)

    // Start timer
    timerRef.current = setInterval(() => {
      setRecordingTime((prev) => {
        // Auto-stop after 60 seconds
        if (prev >= 60) {
          stopRecording()
          return prev
        }
        return prev + 1
      })
    }, 1000)
  }

  const stopRecording = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    setIsRecording(false)
    setHasRecording(true)
  }

  const resetRecording = () => {
    setHasRecording(false)
    setRecordingTime(0)
  }

  const submitRecording = () => {
    setIsTranscribing(true)

    // Simulate transcription progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setTranscriptionProgress(progress)

      if (progress >= 100) {
        clearInterval(interval)

        // Simulate transcription result with example questions
        const exampleTranscriptions = [
          "What are the requirements for the senior developer position?",
          "Does this job offer remote work options?",
          "Can you tell me more about the company culture?",
          "What is the interview process like?",
          "What skills are most important for this role?",
        ]

        const randomTranscription = exampleTranscriptions[Math.floor(Math.random() * exampleTranscriptions.length)]

        setTimeout(() => {
          onComplete(randomTranscription)
        }, 500)
      }
    }, 200)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center justify-between">
          <span>Voice Message</span>
          <Button variant="ghost" size="sm" onClick={onCancel}>
            Cancel
          </Button>
        </CardTitle>
      </CardHeader>

      <CardContent>
        {isTranscribing ? (
          <div className="space-y-4 py-4">
            <div className="flex justify-center">
              <div className="animate-pulse text-blue-600">
                <Mic className="h-12 w-12" />
              </div>
            </div>
            <p className="text-center text-sm">Transcribing your message...</p>
            <Progress value={transcriptionProgress} className="h-2" />
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="flex justify-center">
              {isRecording ? (
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                  <StopCircle className="relative h-12 w-12 text-red-600" />
                </div>
              ) : hasRecording ? (
                <Play className="h-12 w-12 text-blue-600" />
              ) : (
                <Mic className="h-12 w-12 text-blue-600" />
              )}
            </div>

            <div className="text-center">
              {isRecording ? (
                <div className="text-red-600 font-mono text-xl">{formatTime(recordingTime)}</div>
              ) : hasRecording ? (
                <div className="text-gray-700 font-mono text-xl">{formatTime(recordingTime)}</div>
              ) : (
                <p className="text-sm text-gray-500">Press the button to start recording</p>
              )}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-center space-x-2">
        {isRecording ? (
          <Button variant="destructive" onClick={stopRecording}>
            <StopCircle className="h-4 w-4 mr-2" />
            Stop Recording
          </Button>
        ) : hasRecording ? (
          <>
            <Button variant="outline" onClick={resetRecording}>
              <Trash2 className="h-4 w-4 mr-2" />
              Discard
            </Button>
            <Button onClick={submitRecording}>Send Voice Message</Button>
          </>
        ) : (
          <Button onClick={startRecording}>
            <Mic className="h-4 w-4 mr-2" />
            Start Recording
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
