import award_pic from '../media/award.jpg';
import interview_pic from '../media/interview.gif';
import conference_pic from '../media/conference.jpg';
import thesis_pic from '../media/thesis.jpg';

export const news_items = [
  {
    key: "news-item-1",
    pic: thesis_pic,
    year: 2030,
    text_p: <p>Defended my thesis after successfully convincing committee that the 'future work' section counts as contributions.</p>
  },
  {
    key: "news-item-2",
    pic: award_pic,
    year: 2025,
    text_p: <p>Awarded the prestigious 'Still Going Strong' Fellowship for demonstrating exceptional commitment to not graduating yet.</p>
  },
  {
    key: "news-item-3",
    pic: conference_pic,
    year: 2021,
    text_p: <p>Attended conference, mostly for the open bar. Also presented poster.</p>
  },
  {
    key: "news-item-4",
    pic: interview_pic,
    year: 2020,
    text_p: <p>Interviewed by the campus magazine about single-handedly reviving the tradition of leaving work early.</p>
  },
];