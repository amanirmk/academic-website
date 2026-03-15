const oral_presentations = [
  {
    linkhash: "oral-1",
    pub_linkhash: "pub-1",
    date: "2/7/26",
    title: "Really Amazing Oral Talk.",
    venue: "Annual Conference on Good Websites",
    location: "University",
    is_copresented: false,
    abstract: "abs.pdf"
  },
  {
    linkhash: "oral-2",
    pub_linkhash: "pub-2",
    date: "8/11/24",
    title: "Another Talk, This One Has Slides and a Video.",
    venue: "Meeting of Meetings",
    location: "Virtual",
    is_copresented: true,
    slides: "cool-talk.pdf",
    video: "https://www.youtube.com/"
  }
]

const poster_presentations = [
  {
    linkhash: "poster-1",
    pub_linkhash: "pub-4",
    date: "3/21/16",
    title: "The Best Research of My Life Got Only a Poster.",
    venue: "International Gathering of Reviewer 2s",
    location: "Earth",
    is_copresented: false,
    poster: "beamerrrr.pdf"
  },
];

// add sections to your presentations here
export const presentation_entries = [
  ["Oral Presentations", oral_presentations],
  ["Poster Presentations", poster_presentations],
];