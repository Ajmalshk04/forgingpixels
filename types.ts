export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  link: string;
  imageUrl: string;
  details?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
