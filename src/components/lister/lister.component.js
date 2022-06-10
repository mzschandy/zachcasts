import { Link } from 'gatsby';
import React from 'react';
import _ from 'lodash';
import PlayButton from '../episodes/play-button/play-button.component';

const Lister = ({ episodes = null, shows = null, home }) => {
  console.log("lister");

  // const { home, image } = options;

  const getShowList = () => {
    const showList = [];
    if (shows != null) {
      shows.forEach((show) => {
        showList.push(show);
      });
    }

    return showList;
  };

  const getEpisodeList = () => {
    const episodeList = [];
    if (episodes != null) {
      episodes.forEach((episode) => {
        episodeList.push({
          path: episode.node.fields.slug,
          tags: episode.node.frontmatter.tags,
          cover: episode.node.frontmatter.cover,
          title: episode.node.frontmatter.title,
          audio: episode.node.frontmatter.audioPath,
          date: episode.node.fields.date,
          show: episode.node.frontmatter.show,
          exerpt: episode.node.frontmatter.shortDescription,
          showLength: episode.node.frontmatter.showLength,
          timeToRead: episode.node.timeToRead,
        });
      });
    }
    return episodeList;
  };

  const episodeList = getEpisodeList();
  const showList = getShowList();
  console.log("episodeList", episodeList);
  console.log("showlist", showList);

  const homeEpisodeLister = episodeList.map((episode) => (
    <div key={episode.title} className="">
      <div className="">
        <div>HOME PAGE</div>
        <div className="">
          <div className="">{episode.date}</div>
          <div className="">{episode.showLength}</div>
        </div>
        <Link to={episode.path} className="">{episode.title}</Link>
        <div className="">{episode.show}</div>
      </div>
      <i className="fa fa-play-circle-o" />
    </div>
  ));

  const episodeLister = episodeList.map((episode) => (
    <div key={episode.title} className="">
      <div className="">
        <div>EPISODE PAGE</div>
        <div className="">
          <div className="">{episode.date}</div>
          <div className="">{episode.showLength}</div>
        </div>
        <Link to={episode.path} className="">{episode.title}</Link>
        <div className="">
          {episode.exerpt}
        </div>
      </div>
      <i className="fa fa-play-circle-o" />
      <PlayButton
        mp3={episode.audio}
        title={episode.title}
        imgPathCover="https://zachcasts.s3.us-east-2.amazonaws.com/blades%26bending_cover.png"
      />
    </div>
  ));

  const showsLister = showList.map((show) => (
    <Link key={show.show} to={`/shows/${_.kebabCase(show.show)}`}>
      <div>{show.show}</div>
    </Link>
  ));

  let list;

  if (episodes != null) {
    list = (
      <>
        {home
          ? homeEpisodeLister
          : episodeLister}
      </>
    );
  }

  if (shows != null) {
    list = (
      <>
        {showsLister}
      </>
    );
  }

  if (shows == null && episodes == null) {
    list = (<div>Lister cannot render</div>);
  }

  return (
    <>
      {list}
    </>
  );
};

export default Lister;
