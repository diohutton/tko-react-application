import adcls from "./AdItem.module.css";

/**
 * Displays an individual ad card on the Advertisers page
 */
export default function Advertiser({ ad }) {
  return (
    <li className={adcls.aditem}>
      <article>
        <img src={ad.logo} alt={ad.name} />
        <div>
          <h3>{ad.name}</h3>
          <p className={adcls.phone}>{ad.phone}</p>
          <p className={adcls.desc}>{ad.services}</p>
          {ad.town && <p className={adcls.town}>{ad.town}</p>}
        </div>
      </article>
    </li>
  );
}
