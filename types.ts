
import { ComponentType } from 'react';

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  company?: string;
  period?: string;
  logo?: string;
  screenshots?: string[];
  codeSnippet?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  Icon?: ComponentType<{ className?: string }>;
  logo?: string;
}
