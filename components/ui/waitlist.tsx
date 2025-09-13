"use client";
import { useState } from "react";
import { Button } from "./button";
import { Toaster, toast } from 'sonner';

export function InputDemo() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSuccess(true);
        setEmail("");
        toast.success("Joined the waitlist! 🎉"); 
      } else {
        toast.error("Something went wrong. Please try again."); 
      }
    } catch (err) {
      toast.error("Network error. Please try again."); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster /> 
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex w-full max-w-lg items-center rounded-md border border-gray-700 bg-black/40 backdrop-blur-md shadow-lg overflow-hidden mx-auto"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-4 bg-transparent text-lg text-white placeholder-gray-400 focus:outline-none"
        />
        <Button
          type="submit"
          variant="default"
          disabled={loading}
          className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-lg text-white font-bold transition-colors"
        >
          {loading ? "..." : success ? "Joined" : "Join the waitlist"}
        </Button>
      </form>
    </>
  );
}
