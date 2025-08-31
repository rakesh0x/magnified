import { Input } from "@/components/ui/input"
import { Button } from "./button"


export function InputDemo() {
  return (
    <div className="mt-10 flex w-full max-w-md h-18 items-center rounded-md border ml-100 border-gray-700 bg-black/40 backdrop-blur-md shadow-lg overflow-hidden">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 bg-transparent text-md text-white placeholder-gray-400 focus:outline-none"
      />
      <Button variant="default" className="px-5 py-3 bg-pink-500 hover:bg-pink-600 h-13 text-md mr-3 text-white font-medium transition-colors">
        Join the waitlist
      </Button>
    </div>
  )
}
