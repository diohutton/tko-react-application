import dicls from "./DistroItem.module.css";

/**
 *  Backup card component for displaying town distributions
 */
export default function DistroItem({ zone }) {
  return (
    <li className={dicls.distro}>
      <article>
        <div>
          <h3>{zone.town}</h3>
          <p>{zone.homes}</p>
        </div>
      </article>
    </li>
  );
}
