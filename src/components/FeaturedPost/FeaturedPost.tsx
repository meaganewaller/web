import * as React from 'react'
import { PostResponse } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/utils/date'
import readingTime from "reading-time";

interface FeaturedPostProps {
  post: PostResponse
}

function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="story story--featured col-span-12">
      <Link
        href={`/blog/${post.slug}`}
        className="story__img rounded"
      >
        <figure className="aspect-w-4 aspect-h-3">
          <Image className="object-cover" src={post.cover_image} alt={post.description} width={2048} height={2048} />
        </figure>
      </Link>

      <div className="story__content">
        <div className="mb-2 lg:mb-3">
          <Link className="story__category" href={`/blog?category=${post.category.slug}`}>
            <svg className="icon mr-1 lg:mr-1.5" aria-hidden="true" viewBox="0 0 16 16"><g strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><circle cx='8' cy='7' r='1.5'></circle><path d='M12.121,14.263a7.5,7.5,0,1,0-8.242,0'></path><path d='M12.377,11.32a5.5,5.5,0,1,0-8.754,0'></path><path d='M6.605,10.5H9.4a1,1,0,0,1,1,1.1L10,15.5H6l-.39-3.9A1,1,0,0,1,6.605,10.5Z'></path></g></svg>
            <i className="not-italic">{post.category.title}</i>
          </Link>
        </div>

        <div className="text-component">
          <h2 className="story__title"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
          <p>{post.description}</p>
        </div>

        <div className="story__author mt-3 lg:mt-5">
          <Link className="hidden" href="#">
            <Image src={`/static/images/header.svg`} width={600} height={600} alt="Author picture" />
          </Link>

          <div className="leading-extra-tight">
            <address className="story__author-name hidden"><a href="#" rel="author">Meagan Waller</a></address>
            <p className="story__meta"><time>{formatDate(new Date(post.published_date))}</time> &mdash; {readingTime(post.content).text}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default FeaturedPost
