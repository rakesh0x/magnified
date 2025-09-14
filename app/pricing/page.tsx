"use client"

import { ShineBorderDemo } from "@/components/magicui/pricing-page"

export default function Pricingpage() {
    return (
        <div className="relative gap-7 w-full text-center flex justify-center items-center flex-wrap py-16">
            <ShineBorderDemo order={1}/>
            <ShineBorderDemo order={2}/>
            <ShineBorderDemo order={3}/>
            <ShineBorderDemo order={4}/>
        </div>
    )
}