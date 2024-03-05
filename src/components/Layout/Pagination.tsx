import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { cn } from '@/utils/cn'

interface Params {
  page: number
  totalPages: number
  url: string
  previousPostUrl: string
  series: (string | number)[]
}

const Pagination = ({ page, totalPages, url, previousPostUrl, series }: Params) => {
  if (totalPages === 1) {
    return <></>
  }
  {/* <nav */ }
  {/*   aria-label="Content Pagination" */ }
  {/*   className="flex items-center justify-between border-t border-pink-300 px-4 sm:px-0" */ }
  {/* > */ }
  {/*   <div className="-mt-px flex w-0 flex-1"> */ }
  {/*     {page > 1 && ( */ }
  {/*       <Link */ }
  {/*         aria-label="Previous page" */ }
  {/*         href={previousPostUrl} */ }
  {/*         className='inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-pink-500 hover:border-pink-400 hover:text-pink-700' */ }
  {/*       > */ }
  {/*         <FaChevronLeft size={24} className="mr-3 h-5 w-5 fill-pink-400 max-w-[24px]" aria-hidden="true" /> */ }
  {/*       </Link> */ }
  {/*     )} */ }
  {/*   </div> */ }
  {/*   <div className='hidden md:-mt-px md:flex'> */ }
  {/*     {series.map((pageNumber) => */ }
  {/*       pageNumber.toString() === 'gap' ? ( */ }
  {/*         <span */ }
  {/*           key={pageNumber} */ }
  {/*           className='inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-pink-500' */ }
  {/*         > */ }
  {/*           ...{' '} */ }
  {/*         </span> */ }
  {/*       ) : ( */ }
  {/*         <Link */ }
  {/*           key={`pagination-${pageNumber}`} */ }
  {/*           href={url.replace(/page=\d+/g, `page=${pageNumber}`)} */ }
  {/*           className={cn( */ }
  {/*             'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-bold text-pink-400', */ }
  {/*             pageNumber.toString() === page.toString() */ }
  {/*               ? 'border-pink-600 text-pink-700 hover:text-pink-400  hover:border-pink-600' */ }
  {/*               : 'border-transparent text-pink-500 hover:text-pink-700 hover:border-pink-400' */ }
  {/*           )} */ }
  {/*         > */ }
  {/*           {pageNumber} */ }
  {/*         </Link> */ }
  {/*       ), */ }
  {/*     )} */ }
  {/*   </div> */ }
  {/*   <div className='-mt-px flex w-0 flex-1 justify-end'> */ }
  {/*     {totalPages > page && ( */ }
  {/*       <Link */ }
  {/*         href={`${url.replaceAll(`page=${page}`, `page=${page + 1}`)}`} */ }
  {/*         aria-label="Next page" */ }
  {/*         className='inline-flex border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-pink-500 hover:border-pink-400 hover:text-pink-700' */ }
  {/*       > */ }
  {/*         <FaChevronRight size={24} className="mr-3 h-5 w-5 fill-pink-400 max-w-[24px]" aria-hidden="true" /> */ }
  {/*       </Link> */ }
  {/*     )} */ }
  {/*   </div> */ }
  {/* </nav> */ }


  return (
    <div className='flex flex-col justify-center items-center'>
      <ul
        className="pagination"
        role="menubar"
        aria-label='Pagination'
      >
        <li>
          <Link
            href={previousPostUrl}
          >
            <FaChevronLeft size={24} className='fill-pink-400' aria-hidden='true' />
          </Link>
        </li>
        <li>
          <Link
            href={`${url.replaceAll(`page=${page}`, `page=${page + 1}`)}`}
          >
            <FaChevronRight size={24} className='fill-pink-400' aria-hidden='true' />
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Pagination
