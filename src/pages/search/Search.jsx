import { useSearchParams } from 'react-router-dom';
import RecipeList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';

function Search() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('s');

  const url = `http://localhost:3000/recipes?q=${query}`;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className='search-title'>Recipes including "{query}"</h2>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Search;
