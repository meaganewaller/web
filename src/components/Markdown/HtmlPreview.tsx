import { lazy, memo, useMemo, type ReactNode } from "react";
import { TbExternalLink } from "react-icons/tb";

const IframeResizer = lazy(() => import("iframe-resizer-react"));

type HtmlPreviewProps = {
  children: ReactNode & ReactNode[];
  isLoading: boolean;
}

const toUrl = (html: string) => URL.createObjectURL(new Blob([html], { type: "text/html" }));

const HtmlPreview = ({ children, isLoading = false }: HtmlPreviewProps) => {
  const url = useMemo(() => {
    if (isLoading) {
      return "about:blank";
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(String(children), "text/html");
    const scriptElement = document.createElement("script");
    scriptElement.src = new URL("/js/iframeResizer.contentWindow.min.js", import.meta.url).href;
    doc.body.appendChild(scriptElement);
    const html = `<!DOCTYPE html>${doc.documentElement.innerHTML}`;
    return toUrl(html);
  }, [children, isLoading]);

  return (
    <div className="w-full h-96">
      <IframeResizer
        checkOrigin={false}
        src={url}
        style={{ width: "1px", minWidth: "100%" }}
        heightCalculationMethod={"max"}
      />
    </div>
  );
}

export default memo(HtmlPreview);
