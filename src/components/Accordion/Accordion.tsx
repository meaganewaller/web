import { m, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import React from 'react';
import { ReactNode } from 'react';

type AccordionProps = {
  label: string;
  children: ReactNode;
};

function Accordion({ label, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full mx-auto mb-6 outlined outline-pink-500 rounded-sm p-1 bg-pink-100"
    >
      <m.div
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FCC5DF" : "#Fee2EF" }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-sm"
      >
        <button
          className="flex justify-between items-center p-2 w-full text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-monoItalic text-pink-500">{label}</span>
          <m.span key={isOpen ? "up" : "down"} initial={{ rotate: 0 }} animate={{ rotate: 180 }}>{isOpen ? <FaChevronDown size={20} className="text-pink-500" /> : <FaChevronUp size={20} className="text-pink-500" />}</m.span>
        </button>
      </m.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="bg-pink-100 py-0 px-4 rounded-sm text-pink-500"
          >
            {children}
          </m.section>
        )}
      </AnimatePresence>
    </div>
  )
}

export default React.memo(Accordion);

// function AccordionComponent({
//   label,
//   expanded = false,
//   setExpanded,
//   children,
// }: {
//   label: string;
//   expanded: boolean;
//   setExpanded: () => void;
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <m.header
//         initial={false}
//         animate={{ backgroundColor: expanded ? "#FF0088" : "#0055FF" }}
//         onClick={setExpanded}
//         style={{
//           width: "300px",
//           padding: "0 20px",
//           cursor: "pointer",
//           height: "50px",
//           backgroundColor: "lightblue",
//           borderBottom: "1px solid black",
//           margin: "10px auto",
//           borderRadius: "8px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <p style={{ color: "white" }}>{label}</p>
//         <m.div
//           animate={expanded ? "opened" : "closed"}
//           variants={{
//             closed: { rotate: 0 },
//             opened: { rotate: -180 },
//           }}
//           transition={{ duration: 0.2 }}
//         >
//           <FaChevronDown
//             size={16}
//             style={{ height: "16px", width: "16px", color: "white" }}
//           />
//         </m.div>
//       </m.header>
//       {expanded && (
//         <m.section
//           key="content"
//           initial="collapsed"
//           animate="open"
//           exit="collapsed"
//           variants={{
//             open: { opacity: 1, height: "auto" },
//             collapsed: { opacity: 0, height: 0 },
//           }}
//           transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
//           style={{
//             width: "300px",
//             padding: "20px",
//             cursor: "pointer",
//             height: "50px",
//             backgroundColor: "#d9d9d9",
//             borderRadius: "8px",
//           }}
//         >
//           {children}
//         </m.section>
//       )}
//     </>
//   );
// }
//
// export interface AccordionProps {
//   label: string;
//   children: React.ReactNode;
// }
//
// const Accordion: React.FC<AccordionProps> = ({ label, children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//
//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };
//
//   return (
//     <>
//       <AccordionComponent
//         expanded={isOpen}
//         setExpanded={toggleAccordion}
//         label={label}
//         children={children}
//       />
//     </>
//   );
// };
//
//
// // export function Accordion() {
// //   const [expanded, setExpanded] = useState<false | number>(0);
// //
// //   return (
// //     <>
// //       {[0, 1, 2, 3].map((i) => (
// //         <AccordionComponent
// //           i={i}
// //           expanded={expanded}
// //           setExpanded={setExpanded}
// //         />
// //       ))}
// //     </>
// //   );
// // }
//
// export default Accordion;
//
// // "use client";
// // import { m } from "framer-motion";
// // import { useState } from "react";
// // import tw, { styled } from "twin.macro";
// //
// // const AccordionContainer = styled(m.div)`
// //   ${tw`border border-purple-600 rounded-sm bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 my-2`}
// // `;
// //
// // const AccordionHeader = styled(m.button)`
// //   ${tw`w-full py-2 px-4 text-left text-purple-700 font-monoItalic border-b border-purple-200 focus:outline-none`}
// // `;
// //
// // const AccordionContent = styled(m.div)(({ isOpen }: { isOpen: boolean }) => [
// //   tw`py-2 px-4 text-purple-700 font-monoItalic border-b border-purple-200`,
// //   isOpen ? tw`block text-base` : tw`hidden`,
// // ]);
// //
// // // Accordion component
// //
// // export default Accordion;
