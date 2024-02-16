'use client';

import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/atelier-plateau-light.css';

interface IProps {
  htmlContent: string;
}

const Highlight = ({ htmlContent }: IProps) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [htmlContent]);

  return <div
    className="e-content prose dark:prose-invert mx-auto"
    dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Highlight;
