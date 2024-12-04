import { useDispatch, useSelector } from "react-redux";
import { advertiserActions } from "../store/advertiserSlice";
import adcls from "./Advertisers.module.css";
import AdItem from "../components/AdItem";

/**
 * Uses redux data to filter and display advertisers by category and town
 */
function AdvertisersPage() {
  const advertisers = useSelector(
    (state) => state.advertisers.filteredAdvertisers
  );
  const selectedCategory = useSelector(
    (state) => state.advertisers.selectedCategory
  );
  const dispatch = useDispatch();

  const categoryOptions = [
    { value: "Business", label: "Business" },
    { value: "Fun", label: "Fun" },
    { value: "Restaurant", label: "Restaurant" },
  ];

  const townOptions = [
    { value: "Bulverde/Spring Branch", label: "Bulverde/Spring Branch" },
    { value: "Canyon Lake", label: "Canyon Lake" },
    { value: "Cibolo", label: "Cibolo" },
    { value: "Garden Ridge/Selma", label: "Garden Ridge/Selma" },
    { value: "Gruene", label: "Gruene" },
    { value: "New Braunfels", label: "New Braunfels" },
    { value: "San Antonio", label: "San Antonio" },
  ];

  const changeCategory = (event) => {
    dispatch(advertiserActions.changeCategory(event.target.value));
  };

  const changeTown = (event) => {
    dispatch(advertiserActions.filterRestaurants(event.target.value));
  };

  return (
    <>
      <div className={adcls.row}>
        <p className={adcls.paragraph}>
          Looking for a business professional or a dinner suggestion? Search
          through our advertisers here!
        </p>
      </div>
      <div className={adcls.row}>
        <div className={adcls.tkoselect}>
          <form>
            <label className={adcls.label} htmlFor="categorySelect">
              Select Category:
            </label>
            <select
              id="categorySelect"
              value={selectedCategory}
              onChange={changeCategory}
            >
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className={adcls.tkoselect}>
          {selectedCategory === "Restaurant" && (
            <form>
              <label className={adcls.label} htmlFor="townSelect">
                Select Town:
              </label>
              <select id="townSelect" onChange={changeTown}>
                <option value="">All</option>
                {townOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </form>
          )}
        </div>
      </div>
      <ul className={adcls.ads}>
        {advertisers.map((ad) => (
          <AdItem key={ad.id} ad={ad} />
        ))}
      </ul>
    </>
  );
}

export default AdvertisersPage;
