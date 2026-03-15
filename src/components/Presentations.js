import React from 'react';
import { Link } from "react-router-dom";
import { FadeIn } from './FadeIn.js';
import "../styles/listentries.css";
import { presentation_entries } from '../content/presentation_entries.js';

const Presentation = ({linkhash, date, title, venue, location, is_copresented, pub_linkhash, abstract, poster, slides, video}) => {
  return (
    <div className="listentry" linkhash={linkhash ? linkhash : ""}>
      <button className="deselect-button">&times;</button>
      <div>
        <p className="date">{date}</p>
      </div>
      <div>
        <p className="title">{venue}, {location} {is_copresented ? "(Co-Presented)" : ""}</p>
        <p className="pres-title">{title}</p>
        <span className="links">
          {pub_linkhash ? <Link to={`/publications#${pub_linkhash}`}>PUBLICATION&emsp;</Link> : ""}
          {abstract ? <a href={process.env.PUBLIC_URL + '/presentations/abstracts/' + abstract}>ABSTRACT&emsp;</a> : ""}
          {poster ? <a href={process.env.PUBLIC_URL + '/presentations/posters/' + poster}>POSTER&emsp;</a> : ""}
          {slides ? <a href={process.env.PUBLIC_URL + '/presentations/slides/' + slides}>SLIDES&emsp;</a> : ""}
          {video ? <a href={video}>VIDEO&emsp;</a> : ""}
        </span>
      </div>
    </div>
  );
}

const makePresentation = (pres) => {
  return (
    <Presentation
      linkhash={pres.linkhash}
      key={pres.linkhash ? pres.linkhash : pres.date + pres.title}
      date={pres.date}
      title={pres.title}
      venue={pres.venue}
      location={pres.location}
      is_copresented={pres.is_copresented}
      pub_linkhash={pres.pub_linkhash}
      abstract={pres.abstract}
      poster={pres.poster}
      slides={pres.slides}
      video={pres.video}
    />
  );
}

const makePresentationSection = (pres_section) => {
  return (
    <div key={pres_section[0]}>
      <h2>{pres_section[0]}</h2>
      {pres_section[1].map(makePresentation)}
    </div>
  );
}

const Presentations = () => {
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
        <h1 className="section-head">Presentations</h1>
      </FadeIn>
      <FadeIn
      from="bottom"
      positionOffset={50}
      durationInMilliseconds={500}
      >
      <div>
        {presentation_entries.map(makePresentationSection)}
      </div>
      </FadeIn>
    </div>
  );
}

export default Presentations;