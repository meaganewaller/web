import Link from '@/components/Link'
import React, { FC } from 'react'
import { LiaCaretLeftSolid, LiaCaretRightSolid } from "react-icons/lia";
import cn from '@/utils/cn'

interface PaginationProps {
  page: number;
  url: string;
  previousPostUrl: string;
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
      label: <span className="inline-flex items-center"><LiaCaretLeftSolid size={16} className='align-bottom' /> Prev</span>,
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
    <div className="flex p-[8px] flex-wrap bg-primary-500/20 rounded-full shadow-[0px_10px_15px_rgba(0,0,0,0.1)] justify-around w-full">
      {links.map((link) => {
        return (
          <div
            key={link.key}
            className="text-primary-700 leading-10 text-center text-lg font-medium cursor-pointer select-none transition-all duration-[0.3s] ease-in-out"
          >
            {link.label === 'gap' && <div>...</div>}
            {link.url !== null &&
              <Link
                path={link.url}
                label={link.label}
                className={cn([
                  "text-primary-700 p-2 rounded-full transition-all duration-[0.3s] ease-in-out hover:bg-primary-400 hover:text-primary-100",
                  link.active && "bg-primary-500 text-primary-100 underline-offset-4 underline decoration-pink-500"
                ])} />
            }
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
