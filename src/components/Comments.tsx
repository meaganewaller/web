"use client";
import Giscus from "@giscus/react";

export default function Comments() {
  return (
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
  );
}
