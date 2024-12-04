import abcls from "./About.module.css";
import aboutImg from "../images/about.png";

/**
 * Background story on publisher
 */
function AboutPage() {
  return (
    <>
      <div className={abcls.row}>
        <div className={abcls.imgcolumn}>
          <img className={abcls.aboutImg} src={aboutImg} />
        </div>
        <div>
          <p className={abcls.highlight}>
            In Fall 2024, the first issue of the Comal County Connectors
            Business & Dining Guide was published, finally realizing a goal that
            started in Spring 2021.{" "}
          </p>
          <p className={abcls.highlight}>
            We have been publishing direct mail magazines since 1993, starting
            in Oregon and then on to Colorado for 18 years. About five years
            ago, we took a trip to Texas and fell in love with the people and
            the climate (and the tacos!) and decided we were ready for a new
            adventure in life.
          </p>
          <p className={abcls.highlight}>
            In the two year process of building our home in Canyon Lake, we
            visited all of the restaurants and have personally worked with
            numerous businesses featured in the magazine. Many of these local
            business owners have become close, personal friends, and we feel
            truly blessed every day here in beautiful Hill Country.
          </p>
          <p className={abcls.highlight}>
            We hope you find the magazine is a useful guide for discovering a
            new restaurant to try, or locating a product or service from a
            local, quality business owner. Each quarter, we will be increasing
            the circulation, with a goal of reaching 100,000 homes in Comal
            County!
          </p>
          <p className={abcls.italic}>Dionne & Robbie</p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
