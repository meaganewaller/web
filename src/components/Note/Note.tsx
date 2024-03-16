import type { FC } from "react";
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
  tw`absolute py-0 px-[0.5em] ml-1 -mt-[10px] bg-primary-100 font-mono text-xs font-bold tracking-wide text-neutral-700 uppercase border border-solid rounded-lg`,
  type === "info" &&
  tw`border-info-500 text-info-500`,
  type === "warning" &&
  tw`border-warning-500 text-warning-500`,
  type === "error" &&
  tw`border-danger-500 text-danger-500`,
  type === "success" &&
  tw`border-success-500 text-success-500`,
]);

const NoteContent = styled.div(({ type }: { type: string }) => [
  tw`p-6 border border-solid rounded-lg font-sans tracking-wide text-lg`,
  type === "info" && tw`border-info-500 bg-info-200/50`,
  type === "warning" && tw`border-warning-500 bg-warning-200/50`,
  type === "error" && tw`border-danger-500 bg-danger-200/50`,
  type === "success" && tw`border-success-500 bg-success-200/50`,
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
