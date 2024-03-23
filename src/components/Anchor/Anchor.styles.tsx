import tw, { css, styled } from 'twin.macro';
import React from 'react';
import { AnchorProps, ArrowPosition } from './Anchor.types'

const BaseAnchor = styled.a(({ discreet }: { discreet?: boolean }) => [
  tw`font-medium transition-colors duration-200 ease-in-out text-pink-700 hover:text-orange-600 focus:text-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500`,
  discreet && tw`text-primary-500`,
]);

const UnderlineAnchor = styled(BaseAnchor)(({ underline }: { underline?: boolean }) => [
  underline && tw`decoration-1 decoration-pink-600 decoration-wavy underline hover:decoration-2 hover:decoration-orange-500`,
]);

const ArrowAnchor = styled(BaseAnchor) <{ arrow?: ArrowPosition }>`
  ${({ arrow }) => arrow === 'left' && css`padding-right: 8px;`}
  ${({ arrow }) => arrow === 'right' && css`padding-left: 8px;`}
`;

const FaviconAnchor = styled(BaseAnchor) <{ favicon?: boolean }>`
  ${({ favicon }) =>
    favicon &&
    css`
      padding-left: 24px; // Add padding to accommodate the favicon
      background-repeat: no-repeat;
      background-size: 16px 16px; // Set the size of the favicon
      background-position: left center; // Position the favicon to the left
      /* You can also add more styles for the favicon here */
    `}
`;

export const StyledAnchor: React.FC<AnchorProps> = ({ arrow, underline, favicon, ...rest }) => {
  if (arrow) {
    return <ArrowAnchor arrow={arrow} {...rest} />;
  } else if (underline) {
    return <UnderlineAnchor underline {...rest} />;
  } else if (favicon) {
    return <FaviconAnchor favicon {...rest} />;
  } else {
    return <BaseAnchor {...rest} />;
  }
};
