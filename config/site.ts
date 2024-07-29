export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Game Drive",
  description: "Reviewing Games",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "GameReview",
      href: "/[gameid]",
    },
  ],
  navMenuItems: [],
  links: {
  },
};
