'use client'

import { fetchData } from '@/utils/fetchData'
import { useSearchParams } from 'next/navigation'
import type { Category } from '@/types'
import React, { useEffect, useState } from 'react'
import cn from '@/utils/cn'

async function getCategories(): Promise<Category[]> {
  const [data, error] = await fetchData<Category[]>(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/categories?published_only=true`,
  )

  if (error || !data) {
    throw new Error(`Error fetching categories: ${error}`)
  }

  return data
}

export default function Taxonomy() {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category')
  const [categories, setCategories] = useState<Category[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    getCategories().then((res) => {
      setCategories(res)
      setIsLoading(false)
    })
  }, [])

  return (
    <div>
      <div className="w-full">
        <p className="mb-4 font-pixel text-base text-orange-500 underline decoration-orange-400 underline-offset-4">
          Topics
        </p>
        {isLoading && <div>Is Loading...</div>}
        <ul className="list-outside pb-2 pl-0 pr-5 pt-2">
          {categories?.map((category: Category) => (
            <li
              className={cn(
                'my-1 w-full text-center rounded-full border-2 border-orange-50 bg-orange-100 p-1 shadow-inner shadow-orange-300 hover:border-purple-500 hover:bg-purple-200 hover:shadow-purple-400',
                currentCategory === category.slug &&
                  'border-teal-500 bg-teal-200 shadow-teal-100 hover:border-primary-300 hover:bg-primary-200 hover:shadow-primary-100',
              )}
              key={`${category.slug}`}
            >
              <button
                type="button"
                className="px-1 text-center font-extra text-sm lowercase text-secondary-txt"
                onClick={() => {
                  window.location.href = `/blog?category=${category.slug}`
                }}
              >
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
