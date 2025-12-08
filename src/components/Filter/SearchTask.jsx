import "./SearchTask.css";

const SearchTask = ({ filter, setFilter }) => {
  return (
    <div className="search-container">
      <div className="search-inner">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="container-input-search"
          placeholder="Busca una tarea..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchTask;
