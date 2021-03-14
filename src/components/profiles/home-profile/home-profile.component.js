import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ImageCover from "../../../../static/logos/blades&bending_cover.png"

import "../profiles.scss"

export default function HomeProfile() {
    return(
        <Row className="profile">
            <Col md={4} className="image-cover d-none d-md-block">
                <img src={ImageCover} alt="Blades and Bending Logo" className="img-fluid rounded"></img>
            </Col>
            <Col md={8} className="profile-details">
                <div className="details-wrapper">
                    <img src={ImageCover} alt="Mobile Blades and Bending Logo" className="img-fluid rounded hidden d-sm-block d-md-none" ></img>
                    <div className="details-inner">
                        <div className="podcast-title">Blades and Bending</div>
                        <div className="podcast-author">Zach Schandorf-Lartey</div>
                    </div>
                </div>
                <div className="podcast-bio">
                    <div>Welcome to Blades and Bending, an Avatar themed Dungeons and Dragons podcast hosted by Zach Schandorf-Lartey and played by a ragtag team of his friends, most of who(m?) have have played Dungeons and Dragons before.
                    </div>
                    <div>Join Avatar San and the rest of the plucky Team Avatar as they try to follow in Aang and Korra's footsteps and save the world.</div>
                </div>
                
            </Col>
        </Row>
    )
}
