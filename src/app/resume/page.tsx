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
        <a href="https://drive.usercontent.google.com/download?id=1m07FQ2oivTbJKHtTf5DWPwLtXXRS8s6x&export=download&authuser=0&confirm=t&uuid=cf63087f-8df9-4b52-b539-e39eebdf4deb&at=AEz70l7uqE3gIH2bZoODXzcI6I1T:1743197644531" target="_blank" rel="noopener noreferrer"> Download Resume
        </a>
      </Button>
    </div>
  )
}
