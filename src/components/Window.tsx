import React, { useRef, useState } from 'react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
}

// {/*     <button className="bg-windowTitleBarButton active:bg-windowTitleBarButtonActive active:shadow:shadow-[1px_1px_0_#fff_-1px_-1px_#9c9c9c] active:bg-windowTitleBarButtonActive relative block size-[11px] border border-solid border-neutral-900 p-0 shadow-[inset_1px_1px_0_#fff_-1px_-1px_0_#9c9c9c_inset_1px_1px_0_#fff_inset_-1px_-1px_0_#9c9c9c] after:absolute after:left-0 after:top-0 after:size-[5px] after:border-solid after:content-[''] active:shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c]" /> */}
// {/*     <button className="bg-windowTitleBarButton active:bg-windowTitleBarButtonActive active:shadow:shadow-[1px_1px_0_#fff_-1px_-1px_#9c9c9c] after:border-top after:border-bottom after:border-accent active:bg-windowTitleBarButtonActive relative ml-[5px] block size-[11px] border border-solid border-neutral-900 p-0 shadow-[inset_1px_1px_0_#fff_-1px_-1px_0_#9c9c9c_inset_1px_1px_0_#fff_inset_-1px_-1px_0_#9c9c9c] after:absolute after:inset-x-0 after:top-[3px] after:h-[1px] after:border-solid after:content-[''] active:shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c]" /> */}
// {/*   </div> */}
// {/*   <div className="border-accent bg-background col-start-2 col-end-3 row-start-2 row-end-3 h-full overflow-y-auto overflow-x-hidden border border-solid shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c]"> */}
// {/*     {children} */}
// {/*   </div> */}
// {/*   <div className="col-start-1 col-end-2 row-start-1 row-end-4 cursor-[ew-resize]" /> */}
// {/*   <div className="col-start-3 col-end-4 row-start-1 row-end-4 cursor-[ew-resize]" /> */}
// {/*   <div className="col-start-1 col-end-4 row-start-3 row-end-4 cursor-[ew-resize]" /> */}
// {/* </div> */}

export const Window = ({ title, children }: WindowProps) => {
  return (
    <div className="text-gray shadow-[0_1px_3px_0_rgba(0, 0, 0.1)_0_1px_2px_0_rgba(0, 0, 0.06)] rounded-md border border-solid border-lime-400 bg-lime-50 font-extralight">
      {title}
    </div>
  );
};
