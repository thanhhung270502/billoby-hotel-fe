import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.scss';
import images from '~/assets/images';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';

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
                        <div className='d-flex align-items-center'>
                            
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
        </div>
    );
}

export default Home;
