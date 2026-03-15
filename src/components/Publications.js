import React from 'react';
import { FadeIn } from './FadeIn.js';
import "../styles/listentries.css";
import { publication_entries } from '../content/publication_entries.js';

const Publication = ({linkhash, year, title, author_span, location, paper, doi, code}) => {
  return (
    <div className="listentry" linkhash={linkhash ? linkhash : ""}>
      <button className="deselect-button">&times;</button>
      <div>
        <p className="year">{year}</p>
      </div>
      <div>
        <p className="title">{title}</p>
        <p className="authors">{author_span}</p>
        <p className="location">{location}</p>
        <span className="links">
          {paper ? <a href={process.env.PUBLIC_URL + '/publications/' + paper}>PAPER&emsp;</a> : ""}
          {doi ? <a href={doi}>DOI&emsp;</a> : ""}
          {code ? <a href={code}>CODE&emsp;</a> : ""}
        </span>
      </div>
    </div>
  );
}

const makePublication = (pub) => {
  return (
    <Publication
      linkhash={pub.linkhash}
      key={pub.linkhash ? pub.linkhash : pub.year + pub.title}
      year={pub.year}
      title={pub.title}
      author_span={pub.author_span}
      location={pub.location} 
      paper={pub.paper}
      doi={pub.doi}
      code={pub.code}
    />
  );
}

const makePublicationSection = (pub_section) => {
  return (
    <div key={pub_section[0]}>
      <h2>{pub_section[0]}</h2>
      {pub_section[1].map(makePublication)}
    </div>
  );
}

const Publications = () => {
  const [hash, setHash] = React.useState(window.location.hash);
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleNavigation = () => {
      setHasScrolled(false);
      setHash(window.location.hash);
    };
    
    handleNavigation();
    
    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('hashchange', handleNavigation);
    
    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  React.useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(`[linkhash="${window.location.hash.slice(1)}"]`);

      document.querySelectorAll('.listentry.selected').forEach(el => {
        if (el === element) return;
        el.classList.remove('selected');
        el.querySelector('.deselect-button')?.classList.remove('active');
      });

      if (!element) return;

      element.classList.add('selected');
      const button = element.querySelector(".deselect-button")
      button.classList.add('active');
      button.onclick = () => {
        element.classList.remove('selected');
        button.classList.remove('active');
        window.history.pushState("", document.title, window.location.pathname + window.location.search);
        setHash(window.location.hash);
      }

      if (hasScrolled) return;
      setHasScrolled(true);

      const scrollable_distance = document.body.scrollHeight - window.innerHeight;
      const ideal_top_position = Math.max(80, 0.1 * window.innerHeight);
      const rect = element.getBoundingClientRect();
      const ideal_scroll_distance = rect.top - ideal_top_position;
      const scroll_distance = Math.min(ideal_scroll_distance, scrollable_distance);
      const nontrivial_scroll = scroll_distance > 0.5 * window.innerHeight;
      const needs_scroll = rect.bottom > window.innerHeight || rect.top < 0;
      const should_scroll = needs_scroll || nontrivial_scroll;

      if (should_scroll) {
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    } else {
      document.querySelectorAll('.listentry.selected').forEach(el => {
        el.classList.remove('selected');
        el.querySelector('.deselect-button')?.classList.remove('active');
      });
    }
  }, [hash, hasScrolled]);
  
  return (
    <div className="listentries-div">
      <FadeIn
      durationInMilliseconds={500}
      >
        <h1 className="section-head">Publications</h1>
        <p className="subtitle"><sup>&dagger;</sup> denotes equal authorship</p>
      </FadeIn>
      <FadeIn
      from="bottom"
      positionOffset={50}
      durationInMilliseconds={500}
      >
      <div>
        {publication_entries.map(makePublicationSection)}
      </div>
      </FadeIn>
    </div>
  );
}

export default Publications;