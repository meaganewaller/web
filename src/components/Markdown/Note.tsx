import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface NoteProps {
  children: ReactNode
  title?: string
  type?: 'info' | 'warning' | 'error' | 'success'
}

const Note: React.FC<NoteProps> = ({ children, title, type = 'info' }) => {
  const className = {
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    success: 'bg-green-500',
  }
  return (
    <div className={cn(className[type], "rounded-md p-4 text-white-500")}>
      {title && <h3 className="text-lg font-bold">{title}</h3>}
      <div>{children}</div>
    </div>
  )
}

export default Note
