import { Link } from "react-router-dom";
import headshot from '../media/headshot.jpg';

// any css-accepted format
export const accent_color = "#A31F34";

export const name = "John Doe";

export const profile_pic = headshot;

// Use <Link> for internal links and <a> for external links.

export const introduction = <div>
  <p>I recently defended my thesis at No-Federal-Funding University, where I spent my entire time following the direction of a <Link to="/publications#pub-3">first-year project</Link> I randomly picked. My research focuses on things that sound impressive at dinner parties but are actually just me staring at error messages until they go away. I collaborate extensively with my rubber duck and occasionally with humans.</p>
  <p>My academic journey began when I realized I wasn't ready for the real world and discovered that universities will pay you a small but livable wage to have existential crises in their buildings. Before coming to NFFU, I didn't know what I was doing in college, which gave me the confidence to not know what I'm doing in grad school. I am supported by several <a href="https://en.wikipedia.org/wiki/Fellow">fellowships</a> for some mysterious reason.</p>
</div>;

// icons from fontawesome 6.4.2 (free), or academicons (https://jpswalsh.github.io/academicons/)
export const icons = [
  {
    className: "ai ai-cv",
    link: process.env.PUBLIC_URL + '/temp_cv.pdf'
  },
  {
    className: "ai ai-semantic-scholar",
    link: "https://www.semanticscholar.org/"
  },
  {
    className: "fa-brands fa-google",
    link: "https://scholar.google.com/"
  },
  {
    className: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/"
  },
  {
    className: "fa-brands fa-twitter",
    link: "https://twitter.com/"
  },
  {
    className: "fas fa-paper-plane",
    link: "mailto:johndoe@university.edu"
  }
];