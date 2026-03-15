import { FadeIn } from 'react-slide-fade-in';
import "../styles/home.css";
import { name, profile_pic, introduction, icons } from '../content/profile_info.js';

const makeIcon = (icon) => {
  return (
    icon.svg ?  (
      <a key={icon.link} className="icon" href={icon.link}>{icon.svg}</a>
    ) : (
      <a key={icon.link} className={icon.className.includes("ai ai-") ? "icon ai-icon" : "icon"} href={icon.link}>
        <i className={icon.className}></i>
      </a>
    )
  );
}

const Home = () => {
  return (
    <div id="home-div">
      <FadeIn
      durationInMilliseconds={500}
      >
        <h1 className="section-head">About</h1>
      </FadeIn>
      <FadeIn
      from="bottom"
      positionOffset={50}
      durationInMilliseconds={500}
      >
      <div id="intro-div">
        <div id="text-and-icons">
          {introduction}
          <div id="icons">
            {icons.map(makeIcon)}
          </div>
        </div>
        <div className="pic-container" id="profile-pic">
          <img alt={name} src={profile_pic} width="300" height="300" />
        </div>
      </div>
      </FadeIn>
      </div>
  );
}

export default Home;