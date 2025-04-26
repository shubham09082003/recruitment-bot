"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileText, X } from "lucide-react"

type FileUploadProps = {
  onUpload: (fileName: string) => void
  onCancel: () => void
}

export default function FileUpload({ onUpload, onCancel }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (!file) return

    setUploading(true)

    // Simulate upload progress
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 10
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)
        setUploading(false)
        // Show resume preview instead of just sending a message
        onUpload(file.name)
      }
    }, 300)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Upload Resume</h3>
        <Button variant="ghost" size="icon" onClick={onCancel} className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {!file ? (
        <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
          <FileText className="h-10 w-10 mx-auto text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 mb-4">Upload your resume to get personalized job recommendations</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.doc,.docx"
          />
          <Button onClick={triggerFileInput}>Select File</Button>
        </div>
      ) : (
        <div>
          <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg mb-4">
            <FileText className="h-6 w-6 text-blue-600 mr-3" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
              <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setFile(null)} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {uploading ? (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-center text-gray-500">Uploading... {progress}%</p>
            </div>
          ) : (
            <div className="flex space-x-2">
              <Button variant="outline" className="flex-1" onClick={() => setFile(null)}>
                Cancel
              </Button>
              <Button className="flex-1" onClick={handleUpload}>
                Upload
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
