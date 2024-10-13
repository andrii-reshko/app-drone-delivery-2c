import { PropsWithChildren, SVGProps } from "react";

type IconSvgProps = SVGProps<SVGSVGElement> & PropsWithChildren;

const SvgRoot = ({ children, ...props }: IconSvgProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    {children}
  </svg>
);

export const IconInbox = (props: SVGProps<SVGSVGElement>) => (
  <SvgRoot {...props}>
    <path d="M5 21c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5m10.3-5l-2.1-2.1L17 10l-2.8-2.8-3.8 3.9-2.2-2.2V16h7.1z" />
  </SvgRoot>
);

export const IconOutbox = (props: SVGProps<SVGSVGElement>) => (
  <SvgRoot {...props}>
    <path d="M19 3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14M8.7 8l2.1 2.1L7 14l2.8 2.8 3.8-3.9 2.1 2.1V8h-7z" />
  </SvgRoot>
);

export const IconAccount = (props: SVGProps<SVGSVGElement>) => (
  <SvgRoot {...props}>
    <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
  </SvgRoot>
);

export const IconLogout = (props: SVGProps<SVGSVGElement>) => (
  <SvgRoot {...props}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
  </SvgRoot>
);
