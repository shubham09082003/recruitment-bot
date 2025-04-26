import Image from "next/image"
import LoginForm from "@/components/login-form"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Hero image and branding */}
      <div className="bg-blue-600 text-white md:w-1/2 p-8 flex flex-col justify-center items-center">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">AI Recruitment Assistant</h1>
          <p className="text-xl mb-6">Your personal AI recruiter to help you find the perfect job</p>
          <div className="relative w-full h-64 md:h-80">
            <Image src="/ai-recruitment-interview.png" alt="AI Recruitment" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
