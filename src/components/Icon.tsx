'use client';

import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import { Icons } from '@/types/index';

interface Props {
  name: Icons;
  width?: number;
}

const IconWrapper = styled(SVG)`
  display: inline-block;
  line-height: 0;

  svg {
    height: auto;
    max-height: 100%;
    width: ${({ width }) => width};
  }
`;

function Icon({ name, width = 24 }: Props) {
  return (
    <IconWrapper height="100%" src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/icons/${name}.svg`} width={width} />
  );
}

export default Icon;
