"use client" 
import { Button, buttonVariants } from "./button"
import { SignInButton } from '@clerk/nextjs'

export  function Auth() {
    return (

        <SignInButton mode="modal">
            <Button>Get Started</Button>
        </SignInButton>
    )
}