import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ImageCover from "../../../../static/assets/blades&bending_cover.png"

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
                
            </Col>
        </Row>
    )
}
