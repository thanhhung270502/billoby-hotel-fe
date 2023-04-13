import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss';
import { faAngleDown, faBarcode, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

function Header() {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center inner-header-top">
                        <div className="header-top-items">Free Of Charge</div>
                        <div className="header-top-items">
                            <div className="d-flex align-items-center">
                                <div className="header-top-item pe-5">Hotline: (888) 1234 5678 - 0923 115 116</div>
                                <div className="header-top-item">
                                    English
                                    <span>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-mid">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center inner-header-mid">
                        <a className="header-brand" href="./">Billoby.</a>
                        <div className="header-search">
                            <div className="d-flex align-items-center">
                                <input
                                    type="text"
                                    className="header-form-search"
                                    placeholder="Search your demand"
                                ></input>
                                <div className="header-btn-search">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="header-mid-item">
                                <div className="d-flex align-items-center">
                                    <div className="header-mid-icon">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                    <div className="d-flex flex-column align-items-center header-mid-text">
                                        <div>Favourite</div>
                                        <div>Rooms</div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-mid-item">
                                <div className="d-flex align-items-center">
                                    <div className="header-mid-icon">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <div className="d-flex flex-column align-items-center header-mid-text">
                                        <div>Log In</div>
                                        <div>Account</div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-mid-item">
                                <div className="d-flex align-items-center">
                                    <div className="header-mid-icon">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </div>
                                    <div className="d-flex flex-column align-items-center header-mid-text">
                                        <div className="header-mid-count">1</div>
                                        <div>$100.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="d-flex align-items-center inner-header-bottom">
                        <div className="d-flex justify-content-between align-items-center header-category">
                            <div className="header-bottom-icon-main">
                                <FontAwesomeIcon icon={faBarcode} />
                            </div>
                            <div className="header-bottom-name">Hotel Categories</div>
                            <div className="header-bottom-icon">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </div>
                        <div className="d-flex align-items-center header-menu">
                            <div className="header-bottom-item">
                                <a className="header-bottom-link" href="#">
                                    Home
                                </a>
                            </div>
                            <div className="header-bottom-item">
                                <a className="header-bottom-link" href="#">
                                    Services
                                </a>
                            </div>
                            <div className="header-bottom-item">
                                <a className="header-bottom-link" href="#">
                                    Blogs
                                </a>
                            </div>
                            <div className="header-bottom-item">
                                <a className="header-bottom-link" href="#">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
