import playIcon from "./assets/play-icon.png";
import rightArrow from "./assets/arrow-right.png";

const Header = props => {
  const handleSelectChange = e => {
    props.handleSelectChange(e.target.value);
  };

  const handleInputChange = e => {
    props.handleInputChange(e.target.value);
  };
  return (
    <div className="header">
      <div className="top-section">
        <img src={playIcon} alt="play-icon" className="image-header" />
        <h2>
          Channel <span>Search</span>
        </h2>
      </div>

      <div className="bottom-section">
        <select
          name="channel-names"
          id="channel-names"
          className="channel-names"
          onChange={handleSelectChange}
          value={props.selectChannel}
        >
          <option value="UCi8e0iOVk1fEOogdfu4YgfA">Rotten Tomatoes Trailers</option>
          <option value="UCcmxOGYGF51T1XsqQLewGtQ">Trash Taste</option>
          <option value="UC6pGDc4bFGD1_36IKv3FnYg">Crunchyroll Collection</option>
        </select>

        <div className="search-container">
          <input type="text" placeholder="Search" onChange={handleInputChange} />
          <button onClick={props.handleSearch}>
            <img src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
