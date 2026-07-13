'use client'
import {Button} from "@/components/ui/button"

export default function Contact () {
  return (
   <section>
    <h1 className="text-4xl font-bold">
        Contact
    </h1>
    <p className="mt-5 text-gray-600">
        Interested in working together?
    </p>

    <div className="mt-8 flex gap-5">
        <a href="mailto:email@email.com" className="border px-5 py-3 rounded-lg">
            Email
        </a>

        <a href="https://github.com" className="border px-5 py-3 rounded-lg">
            Github
        </a>
    </div>

    <Button className="mt-8" onClick={() => window.location.href = 'mailto:email@email.com'}>
        Contact Me
    </Button>
   </section>
  )
}
