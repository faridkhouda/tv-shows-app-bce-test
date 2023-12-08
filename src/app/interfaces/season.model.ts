// season.model.ts
export interface Season {
    id: number;
    url: string;
    number: number;
    name: string;
    episodeOrder: number;
    premiereDate: string;
    endDate: string;
    network: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      officialSite: string | null;
    };
    webChannel: string | null;
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    _links: {
      self: {
        href: string;
      };
    };
  }
  