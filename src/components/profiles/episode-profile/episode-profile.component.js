import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ImageCover from "../../../../static/logos/blades&bending_cover.png"

import "../profiles.scss"

function EpisodeProfile({episodeDate, episodeLength}) {
    return(
        <Row className="profile">
            <div className="image-cover d-none d-md-block">
                <img src={ImageCover} alt="Blades and Bending Logo" className="img-fluid rounded"></img>
            </div>
            <Col md={10} className="profile-details">
                <div className="details-wrapper">
                    <img src={ImageCover} alt="Mobile Blades and Bending Logo" className="img-fluid rounded hidden d-sm-block d-md-none" ></img>
                    <div className="details-inner">
                        <div className="podcast-title">Blades and Bending</div>
                        <div class="podcast-date-length ">{episodeDate}  {episodeLength}</div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default EpisodeProfile