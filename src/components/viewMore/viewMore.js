import './viewMore.css'
import viewMoreLogo from "../../assets/viewMoreLogo.jpeg"
import RoomLogo from "../../assets/RoomLogo.jpeg"
import locationIcon from '../../assets/locationIcon.svg'
import Bell from '../../assets/Bell.svg'


const ViewMore = () => {
    return (
        <section className="main-section-container">
            <div className="landing-section">
                <div className="left-landing-section">
                    <div className="header-div">
                        <div className="head-div">
                        <h2>Middleton Hotel</h2>
                        <div id="rating-div">
                            <p id="rating-p">8.5 <span>^</span></p>
                        </div>
                        </div>
                        <div className="address-div">
                            <img className="icon small-icon" src={locationIcon} />
                            <p>6, Rowtown, Ikeja, Georgia</p>
                        </div>
                    </div>

                        <div className="img-div">
                            <div className="main-img-div">
                                <img src={ viewMoreLogo } alt='Hotel'/>
                            </div>
                            <div className="slider">
                                <span className="icon left-icon">L</span>
                                <div className="slider-content">
                                    <div className="main-img-slider-div">
                                        <img src={ RoomLogo } alt='Room'/>
                                    </div>
                                    <div className="main-img-slider-div">
                                        <img src={ RoomLogo } alt='Room'/>
                                    </div>
                                    <div className="main-img-slider-div">
                                        <img src={ RoomLogo } alt='Room'/>
                                    </div>
                                </div>
                                <span className="icon right-icon">R</span>

                            </div>
                        </div>
                        <p id="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p> 

                        <div className="bottom-div">
                            <p>Date Created</p>
                        </div>
                </div>

                <div className="right-landing-section">
                    <div className="btn-div">
                        <div className="button-flex-div">
                            <img className="icon small-icon" src={Bell} />
                            <hr/>
                            <p>200,000 per Night</p>
                        </div>

                        <div className="button-flex-div">
                            <img className="icon small-icon" src={Bell} />
                            <hr/>
                            <p>AVAILABLE</p>
                        </div>

                        <div className="button-flex-div">
                            <img className="icon small-icon" src={Bell} />
                            <hr/>
                            <p>ROOM SERVICE 24H</p>
                        </div>

                        <div className="button-flex-div">
                            <img className="icon small-icon" src={Bell} />
                            <hr/>
                            <p>FITNESS CENTER</p>
                        </div>
                    </div>

                    <button className="delete-request-btn">Request to Delete</button>
                </div>
            </div>
        </section>
    )
}

export default ViewMore