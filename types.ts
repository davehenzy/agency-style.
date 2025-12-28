export interface Project {
  id: string;
  client: string;
  title: string;
  category: string;
  industry?: string;
  description: string;
  imageUrl: string;
  size: 'small' | 'medium' | 'large' | 'tall';
  theme: {
    text: string;
    background: string;
    accent: string;
  };
  details?: {
    involvement: string[];
    deliverables: string[];
    year: string;
    websiteUrl?: string;
    challenge?: string;
    images: string[];
  };
  featured?: boolean;
}

export interface Article {
  id: string;
  type: 'ARTICLE' | 'JOB POSTING' | 'ANNOUNCEMENT' | 'CASE STUDY';
  title: string;
  date: string;
  link: string;
  color?: string;
  content?: string; // HTML content for the detail view
}

export enum PageRoute {
  HOME = '/',
  WORK = '/work',
  ABOUT = '/about',
  THOUGHTS = '/thoughts',
  CONTACT = '/contact',
}
