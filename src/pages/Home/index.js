import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.scss';
import images from '~/assets/images';
import {
    faDisplay,
    faMartiniGlassCitrus,
    faMugHot,
    faPersonSwimming,
    faSackDollar,
    faUtensils,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <div className="home-page">
            <div className="intro-section">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <div className="col-6">
                            <div className="intro-image-main">
                                <img src={images.intro_l} className="img-fluid"></img>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="intro-image">
                                <img src={images.intro_r_1} className="img-fluid"></img>
                            </div>
                            <div className="intro-image">
                                <img src={images.intro_r_2} className="img-fluid"></img>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="intro-image">
                                <img src={images.intro_r_3} className="img-fluid"></img>
                            </div>
                            <div className="intro-image">
                                <img src={images.intro_r_4} className="img-fluid"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="endow-section">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex endow-item">
                            <div className="endow-icon">
                                <FontAwesomeIcon icon={faSackDollar} />
                            </div>
                            <div className="d-flex flex-column">
                                <div className="endow-text">No Deposit Required</div>
                                <div className="endow-sub-text">Free of charge</div>
                            </div>
                        </div>
                        <div className="d-flex endow-item">
                            <div className="endow-icon">
                                <FontAwesomeIcon icon={faSackDollar} />
                            </div>
                            <div className="d-flex flex-column">
                                <div className="endow-text">No Deposit Required</div>
                                <div className="endow-sub-text">Free of charge</div>
                            </div>
                        </div>
                        <div className="d-flex endow-item">
                            <div className="endow-icon">
                                <FontAwesomeIcon icon={faSackDollar} />
                            </div>
                            <div className="d-flex flex-column">
                                <div className="endow-text">No Deposit Required</div>
                                <div className="endow-sub-text">Free of charge</div>
                            </div>
                        </div>
                        <div className="d-flex endow-item">
                            <div className="endow-icon">
                                <FontAwesomeIcon icon={faSackDollar} />
                            </div>
                            <div className="d-flex flex-column">
                                <div className="endow-text">No Deposit Required</div>
                                <div className="endow-sub-text">Free of charge</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories-section">
                <div className="container">
                    <div className="inner-category-section">
                        <div className="d-flex align-items-center">
                            <div className="col-3">
                                <div className="d-flex align-items-center category-item category-item-left-top">
                                    <div className="d-flex flex-column category-info">
                                        <div className="category-name">Deluxe</div>
                                        <div className="category-count">4 rooms</div>
                                    </div>
                                    <div className="category-image">
                                        <img src={images.deluxe_1} className="img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="d-flex align-items-center category-item category-item-mid-top">
                                    <div className="d-flex flex-column category-info">
                                        <div className="category-name">Premium</div>
                                        <div className="category-count">5 rooms</div>
                                    </div>
                                    <div className="category-image">
                                        <img src={images.premium_1} className="img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="d-flex align-items-center category-item category-item-mid-top">
                                    <div className="d-flex flex-column category-info">
                                        <div className="category-name">Deluxe</div>
                                        <div className="category-count">4 rooms</div>
                                    </div>
                                    <div className="category-image">
                                        <img src={images.deluxe_1} className="img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="d-flex align-items-center category-item category-item-right">
                                    <div className="d-flex flex-column category-info">
                                        <div className="category-name">Premium</div>
                                        <div className="category-count">5 rooms</div>
                                    </div>
                                    <div className="category-image">
                                        <img src={images.premium_1} className="img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="col-3">
                                <div className="d-flex align-items-center category-item category-item-left-bottom">
                                    <div className="d-flex flex-column category-info">
                                        <div className="category-name">Deluxe</div>
                                        <div className="category-count">4 rooms</div>
                                    </div>
                                    <div className="category-image">
                                        <img src={images.deluxe_1} className="img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="d-flex align-items-center category-item category-item-mid-bottom">
                                    <div className="d-flex flex-column category-info">
                                        <div className="category-name">Premium</div>
                                        <div className="category-count">5 rooms</div>
                                    </div>
                                    <div className="category-image">
                                        <img src={images.premium_1} className="img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="d-flex align-items-center category-item category-item-mid-bottom">
                                    <div className="d-flex flex-column category-info">
                                        <div className="category-name">Deluxe</div>
                                        <div className="category-count">4 rooms</div>
                                    </div>
                                    <div className="category-image">
                                        <img src={images.deluxe_1} className="img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="d-flex align-items-center category-item category-item-right">
                                    <div className="d-flex flex-column category-info">
                                        <div className="category-name">Premium</div>
                                        <div className="category-count">5 rooms</div>
                                    </div>
                                    <div className="category-image">
                                        <img src={images.premium_1} className="img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-section">
                <div className="container">
                    <div className='title-section'>Services</div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="col-4 service-item pe-5">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faWifi} />
                            </div>
                            <div className="service-text">Free Wi-Fi</div>
                            <div className="service-sub-text">
                                The massive investment in a hotel or resort requires constant reviews and control in
                                order to make it a successful investment.
                            </div>
                        </div>
                        <div className="col-4 service-item px-4">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faPersonSwimming} />
                            </div>
                            <div className="service-text">Premium Pool</div>
                            <div className="service-sub-text">
                                Choose from 4 unique ready made concepts, let us help you create the concept perfect for
                                you or let HCA.
                            </div>
                        </div>
                        <div className="col-4 service-item ps-5">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faMugHot} />
                            </div>
                            <div className="service-text">Coffee Maker</div>
                            <div className="service-sub-text">
                                HCA's Owner's Representation is taking care of just these important factors, may it be
                                through regular site visits and spot checks.
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-5">
                        <div className="col-4 service-item pe-5">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faMartiniGlassCitrus} />
                            </div>
                            <div className="service-text">Bar Wine</div>
                            <div className="service-sub-text">
                                For properties with third party management companies, HCA Consultants will as well
                                administer the terms and conditions.
                            </div>
                        </div>
                        <div className="col-4 service-item px-4">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faDisplay} />
                            </div>
                            <div className="service-text">TV HD</div>
                            <div className="service-sub-text">
                                We provide a critical analysis of a hotel's marketing strategy, bench-marking it against
                                industry and competitive practices.
                            </div>
                        </div>
                        <div className="col-4 service-item ps-5">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faUtensils} />
                            </div>
                            <div className="service-text">Restaurant</div>
                            <div className="service-sub-text">
                                HA hotel and restaurant investment deserves careful and market oriented financial
                                planning and projections.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
