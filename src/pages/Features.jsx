import { useSelector } from "react-redux";
import ftcls from "./Features.module.css";
import coverImg from "../images/fallcover.png";
import TKOCarousel from "../components/TKOCarousel";

/**
 * Main display page for magazine features
 */
function FeaturesPage() {
  const distro = useSelector((state) => state.distro.distribution);

  return (
    <>
      <div className={ftcls.row}>
        <div className={ftcls.column}>
          <img src={coverImg} />
        </div>
        <div className={ftcls.column}>
          <h2 className={ftcls.title}>Magazine Features</h2>
          <p className={ftcls.paragraph}>
            Family Owned since 1993, we are proud to offer our high quality
            magazine packed with restaurant discounts to ensure a 16 week shelf
            life!
          </p>

          <h4 className={ftcls.bullet}>Highlights</h4>
          <ul>
            <li className={ftcls.highlight}>Mailed 4x per year</li>
            <li className={ftcls.highlight}>
              Exclusive Business Categories Available
            </li>
            <li className={ftcls.highlight}>No Mandatory Contracts</li>
          </ul>

          <h4 className={ftcls.bullet}>
            Winter 2025 Issue Mailed to over 60,000 Homes
          </h4>
          <table>
            <tr className={ftcls.theader}>
              <th>Town</th>
              <th>Zip Code</th>
              <th># Homes</th>
            </tr>
            {distro.map((zone) => (
              <tr key={zone.id} className={ftcls.tabledata}>
                <td>{zone.town}</td>
                <td>{zone.zip}</td>
                <td>{zone.homes}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div>
        <TKOCarousel />
      </div>
    </>
  );
}

export default FeaturesPage;
