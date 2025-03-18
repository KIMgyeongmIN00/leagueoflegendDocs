interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

interface Stats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

interface BaseChampion {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: Image;
  tags: string[];
  partype: string;
  info: Info;
  stats: Stats;
}

export interface ApiChampions extends BaseChampion {
  version: string;
}

interface LevelTip {
  label?: string[];
  effect?: string[];
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip?: LevelTip;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: Record<string, unknown>;
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  vars?: [];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: Image;
  resource: string;
}

interface Passive {
  name: string;
  description: string;
  image: Image;
}

export interface Champion extends BaseChampion {
  skins: Array<Partial<Skin> & { id: string }>;
  lore: string;
  allytips: string[];
  enemytips: string[];
  spells: Spell[];
  passive: Passive;
  recommended?: [];
}

export interface DetailResponse {
  type: string;
  format: string;
  version: string;
  data: Record<string, Champion>;
}

export interface FilteredChampionArgs {
  initialChampions: ApiChampions[];
  tag: string;
}

type Skin = Partial<{
  num: number;
  name: string;
  chromas: boolean;
}> & {
  id: string;
};

interface ItemGold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

export interface ApiItem {
  id: string;
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from?: string[];
  into?: string[];
  image: Image;
  gold: ItemGold;
  tags: string[];
  maps: Record<string, boolean>;
  stats: Record<string, number>;
  depth?: number;
}

export interface ItemGridProps {
  category: string;
  items: ApiItem[];
}

export interface ItemPageLogicResult {
  version: string;
  items: ApiItem[];
}

export interface ItemGridSkeletonProps {
  count?: number;
}

export type ChampionGridProps = Pick<
  FilteredChampionArgs,
  "initialChampions" | "tag"
> & {
  version: string;
};
