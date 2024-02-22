import { memo, useCallback, useMemo, type ReactNode } from 'react';
import { useClipboard } from "@/hooks/use-copy-to-clipboard";

type PreHeaderProps = {
  language: string;
  children: ReactNode;
  isLoading: boolean;
  onPrompt?: (prompt: string) => void;
  code: string;
  codeDownloadFilename?: string;
};

function CodeHeader({
  language,
  children,
  isLoading,
  onPrompt,
  code,
  codeDownloadFilename,
}: PreHeaderProps) {
  // Only show the "Run" button for JS code blocks, and only when we aren't already loading
  const shouldShowRunButton = false;
  const { ClipboardIcon, copy } = useClipboard();

  const toUrl = (code: string) =>
    URL.createObjectURL(new Blob([code], { type: "text/plain;charset=utf-8" }));

  const url = useMemo(() => {
    if (isLoading) {
      return "about:blank";
    }
    return toUrl(code);
  }, [isLoading, code]);

  const handlePreviewCode = useCallback(() => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, [url]);

  return (
    <>
      <div className="mb-2 flex h-8 items-center justify-between border-b p-1 pl-3">
        <div className="pl-2">
          <code className="text-xs">
            {language}
          </code>
        </div>
        <div
          className="flex items-center"
          style={{ visibility: isLoading ? "hidden" : "visible" }}
        >
          <ClipboardIcon copyData={code} message="Code copied!" />
        </div>
      </div>
      {children}
    </>
  );
}

export default memo(CodeHeader);
