import { useRef } from "react";

const SearchBar = ({ onMovieSearched }) => {
  const nameRef = useRef();
  const typeRef = useRef();

  const searchBarStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const type = typeRef.current.value;

    if (name === "" || type === "") {
      alert("Please provide a movie, series, or episode name...");
    } else {
      onMovieSearched(name, type);
    }
  };

  return (
    <div className="searchstyleonsumbit" style={searchBarStyle}>
      <form onSubmit={handleSubmit}>
        <input className="entermovie"
          ref={nameRef}
          style={{ fontSize: "20px", marginRight: "20px", width: "500px" }}
          type="text"
          placeholder="Enter movie, series, or episode name..."
        />
        <select className="searchtype"   ref={typeRef} style={{ fontSize: "20px", marginRight: "20px", padding: "10px", color: "#616161" ,border: "solid #616161" }}>
          <option>movie</option>
          <option>series</option>
          <option>episode</option>
        </select>
        <button className= "submitbotton" style={{ fontSize: "20px" }} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
