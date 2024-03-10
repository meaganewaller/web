import type { FC, ReactElement } from "react";
import tw, { styled } from "twin.macro";

export interface NoteProps {
  children?: React.ReactNode;
  title?: string;
  type: "info" | "warning" | "error" | "success";
}

const NoteContainer = styled.div`
  ${tw`m-5 max-w-2xl`}
`;

const NoteTitle = styled.span(({ type }: { type: string }) => [
  tw`absolute py-0 px-[0.5em] ml-1 -mt-[10px] bg-pink-100 dark:bg-purple-800 font-mono text-xs font-bold tracking-wide text-neutral-700 uppercase dark:text-neutral-50 border border-solid rounded-lg`,
  type === "info" &&
  tw`border-blue-500 text-blue-500 dark:border-blue-300 dark:text-blue-300`,
  type === "warning" &&
  tw`border-yellow-500 text-yellow-500 dark:border-yellow-300 dark:text-yellow-300`,
  type === "error" &&
  tw`border-red-500 text-red-500 dark:border-red-300 dark:text-red-300`,
  type === "success" &&
  tw`border-green-500 text-green-500 dark:border-green-300 dark:text-green-300`,
]);

const NoteContent = styled.div(({ type }: { type: string }) => [
  tw`p-6 border border-solid rounded-lg font-sans tracking-wide text-lg dark:text-neutral-50`,
  type === "info" && tw`border-blue-500 bg-blue-200/50`,
  type === "warning" && tw`border-yellow-500 bg-yellow-200/50`,
  type === "error" && tw`border-red-500 bg-red-200/50`,
  type === "success" && tw`border-green-500 bg-green-200/50`,
]);

const Note: FC<NoteProps> = ({ children, title, type = "info" }) => {
  return (
    <NoteContainer>
      <NoteTitle type={type}>{title}</NoteTitle>
      <NoteContent type={type}>{children}</NoteContent>
    </NoteContainer>
  );
};

export default Note;
