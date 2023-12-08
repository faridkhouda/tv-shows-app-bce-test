
export interface Show {
    id: number;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    ended: string;
    image: {
      medium: string;
      original: string;
    };

  }
  