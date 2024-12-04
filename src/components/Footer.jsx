import ftcls from "./Footer.module.css";
import ccImg from "../images/ccheader.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

/**
 * Footer component with contact info
 */
function Footer() {
  return (
    <footer className={ftcls.footer}>
      <div className={ftcls.row}>
        <div className={ftcls.column}>
          <div>
            <h2 className={ftcls.title}>Contact Us</h2>
          </div>
          <p className={ftcls.italic}>
            For sales inquiries, please contact Robbie:
          </p>
          <h3>
            <span>
              <FontAwesomeIcon icon={faPhone} /> 503-949-8779
            </span>
          </h3>
          <h3>
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> alyjoemedia@gmail.com
            </span>
          </h3>
        </div>
        <div className={ftcls.column}>
          <div>
            <p className={ftcls.italic}>Visit our Online Directory:</p>
          </div>
          <div className={ftcls.img}>
            <a href="http://comalcountyconnectors.com" target="new">
              <img src={ccImg} />
            </a>
          </div>
        </div>
      </div>
      <div className={ftcls.copy}>
        &copy; Copyright 2025 Take One Promos LLC
      </div>
    </footer>
  );
}

export default Footer;
