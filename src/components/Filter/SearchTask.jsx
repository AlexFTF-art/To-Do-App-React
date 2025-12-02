import "./SearchTask.css";

const SearchTask = ({ filter, setFilter}) => {
  return (
    <div className="search-container">
      <input 
        type="text"
        className="container-input-search"
        placeholder="Busca una Tarea"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchTask;