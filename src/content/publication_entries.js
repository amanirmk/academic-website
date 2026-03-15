const preprints = [
  {
    linkhash: "preprint-1",
    year: 2028,
    title: "After 10 Submissions to NeurIPS, We Gave Up.",
    author_span: <span>Author, <b>John Doe</b>, Author, Author, and Author</span>,
    paper: "paper1.pdf",
  },
  {
    linkhash: "preprint-2",
    year: 2027,
    title: "Genuinely Amazing Work: Stays a Preprint Forever.",
    author_span: <span>Author<sup>&dagger;</sup>, <b>John Doe<sup>&dagger;</sup></b>, Author, Author, Author, and Author</span>,
    paper: "paper1.pdf",
    doi: "https://www.doi.org/",
    code: "https://github.com/",
  },
];

const publications = [
  {
    linkhash: "pub-1",
    year: 2025,
    title: "Claude Messed Up Our References.",
    author_span: <span>Author<sup>&dagger;</sup>, <b>John Doe<sup>&dagger;</sup></b>, Author, Author, and Author</span>,
    location: "13th International Conference on a Very Cool Topic",
    paper: "paper1.pdf",
    doi: "https://www.doi.org/",
  },
  {
    linkhash: "pub-2",
    year: 2023,
    title: "On the Limitations of My Career.",
    author_span: <span>Author, <b>John Doe</b>, Author, Author and Author</span>,
    location: "57th Annual Conference in My Mom's Basement",
    paper: "paper1.pdf",
    doi: "https://www.doi.org/",
    code: "https://github.com/",
  },
  {
    linkhash: "pub-3",
    year: 2022,
    title: "We Trained a Model and It Worked, We're Not Sure Why Either.",
    author_span: <span><b>John Doe</b>, Author, Author, Author, and Author</span>,
    location: "2022 IEEE Conference on Computers and More",
    paper: "paper2.pdf",
    doi: "https://www.doi.org/",
  },
  {
    linkhash: "pub-4",
    year: 2021,
    title: "Our Baseline Outperformed Our Method So We Made It Look Worse.",
    author_span: <span><b>John Doe</b>, Author, Author, and Author</span>,
    location: "2021 IEEE Congress on Fancy Computation",
    paper: "paper2.pdf",
    doi: "https://www.doi.org/",
    code: "https://github.com/",
  },
];

// add sections to your publications here
export const publication_entries = [
  ["Preprints", preprints],
  ["Publications", publications], 
];