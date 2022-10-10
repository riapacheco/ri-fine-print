
export interface IProjectSectionHeading {
  title: string;
}

export interface IProject {
  id?: number;
  name?: string;
  description?: string;
  url?: string;
  cover_image?: string;
  tools?: string[];
  toolsString?: string;
  spins: boolean;
}

