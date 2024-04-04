"use client";
import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div className="text-pink-900 w-3/4 mx-auto">
      <Giscus
        repo="meaganewaller/web"
        repoId="R_kgDOLTYTaA"
        category="Comments"
        categoryId="DIC_kwDOLTYTaM4Cd2lq"
        mapping="og:title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="bottom"
        theme="noborder_light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
