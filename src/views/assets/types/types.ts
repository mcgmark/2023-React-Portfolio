export type DesignItem = {
    id: number;
    title: string;
    type: string;
    category: string;
    software: string;
    description: string;
    thumbnail: string;
    full: string;
};

export type DevItem = {
    id: number;
    title: string;
    features: string[];
    type: string;
    tech: string[];
    description: string;
    link: string;
    github: string;
};