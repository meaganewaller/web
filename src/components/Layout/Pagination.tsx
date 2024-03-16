import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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
            <FaChevronLeft size={24} className='fill-primary-400' aria-hidden='true' />
          </Link>
        </li>
        <li>
          <Link
            href={`${url.replaceAll(`page=${page}`, `page=${page + 1}`)}`}
          >
            <FaChevronRight size={24} className='fill-primary-400' aria-hidden='true' />
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Pagination
