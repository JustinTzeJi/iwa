"use client"
import { Button } from '@/components/ui/button'
import Resume from '@/data/markdown/resume.mdx'

export default function Page() {
  return (
    <div className=''>
      <article className="prose dark:prose-invert lg:prose-xl !max-w-none">
        <Resume />
      </article>
      <Button size="sm" asChild className='sticky bottom-5 max-h-screen flex mt-10 md:py-5 rounded-full'>
        <a href="https://1057056f61a8ee08998249b16c1c0f83.r2.cloudflarestorage.com/site/resume_Justin.pdf" target="_blank" rel="noopener noreferrer"> Download Resume
        </a>
      </Button>
    </div>
  )
}
