export interface ItemGridProps {
  category: string;
  items: ApiItem[];
}

export interface ApiItem {
  id: string;
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from?: string[];
  into?: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: Record<string, boolean>;
  stats: Record<string, number>;
  depth?: number;
}

export interface ItemPageLogicResult {
  version: string;
  items: ApiItem[];
}
