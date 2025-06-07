/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HandleAllContext } from "../handleAllContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const context = useContext(HandleAllContext);
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <button
            className="btn navbar-toggler ms-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a
            className="navbar-brand fw-bold ms-3 ms-sm text-sm-center"
            style={{ fontSize: 25 + "px" }}
            onClick={() => context.handleGetProduct()}
          >
            <span style={{flexDirection:"row",display:"flex"}} onClick={() => navigate("/")}>
              <img
                className="me-1"
                src="https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png"
                style={{ width: 50, height: 50, marginTop: -10 }}
              />
              ShoeStore
            </span>
          </a>
          <button
            className="btn navbar-toggler me-1"
            style={{ fontSize: 25 }}
            type="button"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i className="bi bi-search"></i>
          </button>

          <div
            className="collapse navbar-collapse  mx-auto"
            style={{ width: 250, marginRight: 5 + "rem" }}
            id="collapseExample"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Tìm kiếm sản phẩm ..."
              aria-label="Search"
              value={context.searchProduct}
              onChange={(e) => context.setSearchProduct(e.target.value)}
              onKeyDown={(e) => context.handleSearchProductKeyDown(e)}
            />
          </div>

          <div
            className="collapse navbar-collapse me-5 ms-2"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ms-auto">
              <div className="navbar-nav me-5">
                {context.showAdmin ? (
                  <>
                    <a
                      className="nav-item nav-link"
                      onClick={() => context.navigate("/admin")}
                    >
                      <i className="bi bi-person-fill-gear me-1"></i>
                      Admin
                    </a>
                  </>
                ) : (
                  <>
                    <div className="nav-item nav-link">
                      <i className="bi bi-bell me-1"></i>
                      Thông báo
                    </div>
                    <div className="nav-item nav-link">
                      <div className="btn-group dropstart mb-1">
                        <i className="bi bi-gear me-1"></i>
                        <div
                          id="dropdownMenuButton2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Cài đặt
                        </div>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton2"
                          style={{ marginTop: 45, marginRight: -80 }}
                        >
                          <li>
                            <a className="dropdown-item">
                              <i className="bi bi-globe me-2"></i>
                              Ngôn ngữ
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              <i className="bi bi-person-lines-fill me-2"></i>
                              Hồ sơ
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              <i className="bi bi-question-circle me-2"></i>
                              Trợ giúp
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="nav-item nav-link"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas"
                      role="button"
                    >
                      <i className="bi bi-cart4 me-1"></i>
                      Giỏ hàng
                      <span
                        className="position-absolute top-2 start-40 translate-middle badge rounded-pill bg-danger ms-3"
                        style={{ fontSize: 10 + "px" }}
                      >
                        {context.cart.length === 0 ? "" : context.cart.length}
                      </span>
                    </div>
                  </>
                )}
              </div>
              {context.showAcount ? (
                <div className="btn-group dropstart">
                  <img
                    id="defaultDropdown"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                    src={context.avatarUser}
                    alt="avatar"
                    className="d-flex align-self-center me-3 dropdown-toggle rounded-circle"
                    width="40"
                  />

                  <ul
                    className="dropdown-menu"
                    style={{ marginTop: 55, marginRight: -40 }}
                  >
                    <li>
                      <a
                        className="dropdown-item text-success"
                        onClick={() => context.navigate("/profile")}
                      >
                        <i className="bi bi-person-circle me-2"></i>
                        {context.acount}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#order"
                        role="button"
                      >
                        <i className="bi bi-receipt me-2"></i>
                        Đơn mua
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <i className="bi bi-shield-lock me-2"></i>
                        Thay đổi mật khẩu
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider me-2 ms-2" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => context.handleLogout()}
                      >
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Đăng xuất
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <button
                    className="btn btn-secondary"
                    onClick={() => context.navigate("/login")}
                  >
                    Đăng nhập
                  </button>
                  <button
                    className="btn btn-outline-secondary text-dark ms-1"
                    onClick={() => context.navigate("/register")}
                  >
                    Đăng kí
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
