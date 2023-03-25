import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

function Recipe() {
  let { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div className='recipe'>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipe && (
        <>
          <h2>{recipe.title}</h2>
          <p className='cooking-time'>Takes {recipe.cookingTime} to make</p>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <h4>Process:</h4>
          <p className='process'>{recipe.method}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
