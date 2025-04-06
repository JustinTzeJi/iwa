"use client"
import { Button } from '@/components/ui/button'
import Resume from '@/data/markdown/resume.mdx'

export default function ResumePage() {
  return (
    <section className="px-3">
      <article className="prose dark:prose-invert lg:prose-xl max-w-screen-xl">
        <Resume />
      </article>
      <Button size="sm" asChild className='sticky bottom-5 max-h-screen flex mt-10 md:py-5 rounded-full'>
        <a href="https://pub-8df9262f53cd4b9f9158240ebb267359.r2.dev/resume_Justin.pdf" target="_blank" rel="noopener noreferrer"> Download Resume
        </a>
      </Button>
    </section>
  )
}
