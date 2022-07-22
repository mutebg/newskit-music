import { Hidden } from "newskit";
export const HideMobile = ({ children }: { children: React.ReactNode }) => (
  // @ts-ignore
  <Hidden xs sm>
    {children}
  </Hidden>
);

export const HideDesktop = ({ children }: { children: React.ReactNode }) => (
  // @ts-ignore
  <Hidden md lg xl>
    {children}
  </Hidden>
);
