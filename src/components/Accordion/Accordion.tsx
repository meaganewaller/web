"use client";
import { useState } from "react";
import tw, { styled } from "twin.macro";

const AccordionContainer = styled.div`
  ${tw`border border-teal-300 rounded-lg bg-gradient-to-r from-purple-200 via-pink-200 to-teal-100 rounded-lg my-2`}
`;

const AccordionHeader = styled.button`
  ${tw`w-full py-2 px-4 text-left text-purple-50 font-monoItalic border-b border-gray-200 focus:outline-none`}
`;

const AccordionContent = styled.div(({ isOpen }: { isOpen: boolean }) => [
  tw`py-2 px-4`,
  isOpen ? tw`block` : tw`hidden`,
]);

// Accordion component
export interface AccordionProps {
  label: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>{label}</AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
