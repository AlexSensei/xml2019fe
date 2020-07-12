export const ARTICLES_ALL = [
  {
    id: "1",
    article: "First article",
  },
  {
    id: "2",
    article: "Second article",
  },
  {
    id: "3",
    article: "Third article",
  },
  {
    id: "4",
    article: "Fourth article",
  },
  {
    id: "5",
    article: "Fifth article",
  },
  {
    id: "6",
    article: "Sixth article",
  },
];

export const ARTICLES_AUTHOR = [
  {
    id: "1",
    article: "First article",
  },
  {
    id: "2",
    article: "Second article",
  },
];

export const ARTICLES_REVIEWER = [
  {
    id: "3",
    article: "Third article",
  },
  {
    id: "4",
    article: "Fourth article",
  },
];

export const articlesMockGet = (type) => {
  if (type === "author") {
    return ARTICLES_AUTHOR;
  }

  if (type === "author") {
    return ARTICLES_REVIEWER;
  }

  return ARTICLES_ALL;
};

export const AUTHOR_ARTICLES_STATUSES = [
  {
    id: "1",
    article: "First article",
    status: "pending",
  },
  {
    id: "2",
    article: "Second article",
    status: "pending",
  },
  {
    id: "3",
    article: "Third article",
    status: "approved",
  },
  {
    id: "4",
    article: "Fourth article",
    status: "approved",
  },
  {
    id: "5",
    article: "Fifth article",
    status: "declined",
  },
  {
    id: "6",
    article: "Sixth article",
    status: "declined",
  },
];

export const ARTICLE = {
  id: "1",
  article: "First article",
  status: "pending",
};

export const REVIEW_ARTICLES = [
  {
    id: "1",
    article: "Review First article",
    status: "pending",
  },
  {
    id: "2",
    article: "Review Second article",
    status: "pending",
  },
  {
    id: "3",
    article: "Review Third article",
    status: "approved",
  },
  {
    id: "4",
    article: "Review Fourth article",
    status: "approved",
  },
  {
    id: "5",
    article: "Review Fifth article",
    status: "declined",
  },
  {
    id: "6",
    article: "Review Sixth article",
    status: "declined",
  },
];

export const PENDING_ARTICLES = [
  {
    id: "1",
    article: "Pending First article",
    status: "pending",
  },
  {
    id: "2",
    article: "Pending Second article",
    status: "pending",
  },
  {
    id: "3",
    article: "Pending Third article",
    status: "approved",
  },
  {
    id: "4",
    article: "Pending Fourth article",
    status: "approved",
  },
  {
    id: "5",
    article: "Pending Fifth article",
    status: "declined",
  },
  {
    id: "6",
    article: "Pending Sixth article",
    status: "declined",
  },
];
