const LIMIT = [
  {
    key: "16",
    value: "16",
  },
  {
    key: "20",
    value: "20",
  },
  {
    key: "24",
    value: "24",
  },
];

const TYPE = [
  {
    key: "all",
    value: "All",
  },
  {
    key: "tv",
    value: "TV Show",
  },
  {
    key: "movie",
    value: "Movie",
  },
  {
    key: "ova",
    value: "OVA",
  },
  {
    key: "special",
    value: "Special",
  },
  {
    key: "ona",
    value: "ONA",
  },
  {
    key: "music",
    value: "Music",
  },
  {
    key: "cm",
    value: "CM",
  },
  {
    key: "pv",
    value: "PV",
  },
  {
    key: "tv_special",
    value: "TV Special",
  },
];

const ORDER_BY = [
  {
    key: "popularity",
    value: "Popularity",
  },
  {
    key: "title",
    value: "Title",
  },
  {
    key: "score",
    value: "Score",
  },

  {
    key: "favorites",
    value: "Favorites",
  },
];

const SORT = [
  {
    key: "asc",
    value: "Ascending",
  },
  {
    key: "desc",
    value: "Descending",
  },
];

const SFW = [
  {
    key: "all",
    value: "All",
  },
  {
    key: "true",
    value: "Yes",
  },
  {
    key: "false",
    value: "No",
  },
];

const LIMIT_DEFAULT = "24";
const PAGE_DEFAULT = 1;
const SEARCH_DEFAULT = "";
const TYPE_DEFAULT = TYPE[0].key;
const ORDER_BY_DEFAULT = ORDER_BY[0].key;
const SORT_DEFAULT = SORT[0].key;
const SFW_DEFAULT = SFW[0].key;

const DELAY = 750;

export {
  LIMIT,
  LIMIT_DEFAULT,
  PAGE_DEFAULT,
  SEARCH_DEFAULT,
  TYPE,
  TYPE_DEFAULT,
  ORDER_BY,
  ORDER_BY_DEFAULT,
  SORT,
  SORT_DEFAULT,
  SFW,
  SFW_DEFAULT,
  DELAY,
};
