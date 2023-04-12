import "./header.scss";

function Header() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand header__brand" href="#">
                    Navbar
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item header__item">
                            <a class="nav-link header__link" href="#">
                                Courses
                            </a>
                        </li>
                        <li class="nav-item header__item">
                            <a class="nav-link header__link" href="#">
                                Service
                            </a>
                        </li>
                        <li class="nav-item header__item">
                            <a class="nav-link header__link" href="#">
                                Blog
                            </a>
                        </li>
                        <li class="nav-item header__item">
                            <a class="nav-link header__link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
