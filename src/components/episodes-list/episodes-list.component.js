/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {Link} from "gatsby"
import PlayerContext from "../player/player.context"

import "./episodes.scss"

export default function EpisodesList({episodes}) {
    const player = useContext(PlayerContext)
    const getEpisodeList = () => {
        const episodeList = []
        episodes.forEach((episode) => {
            episodeList.push({
                path: episode.node.fields.slug,
                tags: episode.node.frontmatter.tags,
                cover: episode.node.frontmatter.cover,
                title: episode.node.frontmatter.title,
                audio: episode.node.frontmatter.audioPath,
                date: episode.node.fields.date,
                exerpt: episode.node.frontmatter.shortDescription,
                showLength: episode.node.frontmatter.showLength,
                timeToRead: episode.node.timeToRead,
            })
        //console.log(episode.node.frontmatter)
        })
        return episodeList
    }

    const episodeList = getEpisodeList()
    
    return (
             <div className="episodes-list">
                <div className="list-header sticky-top">All Episodes</div>
                {
                    episodeList.map((episode, index) => (
                            <Row className="episode">
                                <Col xs={1} md={1} className="play-button d-none d-md-block">
                                    <span onClick={() => player.setAudio(episode.audio)} className="fa fa-play-circle"></span>
                                </Col>
                                <div  key={`podcast-${index}`} className="col-12 col-md-11 episode-info">
                                    <div className="data d-none d-md-flex">
                                        <div className="date">{episode.date}</div>
                                        <div className="dot">•</div> 
                                        <div className="length">{episode.showLength}</div>
                                    </div>
                                    <Link to={episode.path} className="title">{episode.title}</Link>
                                    <div className="description">{episode.exerpt}</div>
                                    <div className="mobile-play-button d-sm-block d-md-none">
                                        <div className="btn play-button">
                                            <span onClick={() => player.setAudio(episode.audio)} className="fa fa-play-circle"></span>
                                            <div className="date">{episode.date}</div>
                                            <div className="length">{episode.length}</div>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                            </Row>
                    ))
                }
            </div>
        
    )
}