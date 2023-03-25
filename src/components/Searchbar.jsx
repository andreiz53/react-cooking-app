import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Searchbar() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm('');

    navigate(`/search?s=${term}`);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          required
          placeholder='search recipes...'
        />
      </form>
    </div>
  );
}

export default Searchbar;
