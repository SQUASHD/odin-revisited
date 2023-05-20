export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

type LiveLink = {
  href: string;
  label: "See live";
};

export type ProjectStatus = "DONE" | "WIP" | "TODO";

export type ProjectNavItem = {
  title: string;
  description: string;
  status: ProjectStatus;
  newLink?: LiveLink;
  oldLink?: LiveLink;
  docs?: {
    href: string;
    label: "Read more";
  };
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    portfolio?: string;
    shadTwitter?: string;
    github: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type ProjectConfig = {
  projectLinks: ProjectNavItem[];
  mainNav: MainNavItem[];
};
