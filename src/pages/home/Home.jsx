import RecipeList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';

function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes');

  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Home;
