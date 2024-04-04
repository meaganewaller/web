import Link from '@/components/Link'
import React, { FC } from 'react'
import { LiaCaretLeftSolid, LiaCaretRightSolid } from "react-icons/lia";
import cn from '@/utils/cn'

interface PaginationProps {
  page: number;
  url: string;
  previousPostUrl?: string;
  series: (string | number)[];
}

const Pagination: FC<PaginationProps> = ({ page, url, previousPostUrl, series }) => {
  const genUrl = (pageNumber: number) => {
    return pageNumber ? url.replace(/page=\d+/g, `page=${pageNumber}`) : null;
  };
  const active = (pageNumber: number) => {
    return page === pageNumber;
  };

  const links = [
    {
      label:
        <span className={cn("inline-flex items-center")}>
          <LiaCaretLeftSolid size={16} className='align-bottom' /> Prev
        </span>,
      url: previousPostUrl,
      active: false,
      key: 'prev',
    },
    ...series.map((page) => {
      return {
        label: page,
        url: genUrl(Number(page)),
        active: active(Number(page)),
        key: page,
      };
    }),
    {
      label: <span className="inline-flex items-center">Next <LiaCaretRightSolid size={16} className='align-bottom' /></span>,
      url: genUrl(page + 1),
      active: false,
      key: 'next',
    },
  ];

  return (
    <div className="flex p-2 flex-wrap bg-pink-400 rounded-full shadow-[0px_10px_15px_rgba(0,0,0,0.1)] justify-around w-full mt-32 dark:bg-purple-800">
      {links.map((link) => {
        return (
          <div
            key={link.key}
            className="leading-10 text-center text-lg font-medium cursor-pointer select-none transition-all duration-300 ease-in-out"
          >
            {link.label === 'gap' && <div>...</div>}
            {link.url !== undefined && link.url !== null &&
              <Link
                href={link.url}
                className={cn([
                  "text-pink-900 py-1.5 px-4 rounded-full transition-all duration-300 ease-in-out hover:text-pink-800 dark:text-purple-200 dark:hover:text-orange-50",
                  link.active && "bg-pink-100 text-pink-900 underline-offset-4 underline decoration-pink-900 dark:bg-purple-500 dark:text-purple-900 dark:underline-offset-4 dark:underline dark:decoration-purple-1000"
                ])}>
                {link.label}
              </Link>
            }
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
