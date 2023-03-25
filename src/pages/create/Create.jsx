import { useState, useRef, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigate = useNavigate();

  const { postData, data, error } = useFetch(
    'http://localhost:3000/recipes',
    'POST'
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      cookingTime: cookingTime + ' minutes',
      method,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prev) => [...prev, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  };

  //redirect user
  useEffect(() => {
    if (data) {
      navigate('/');
    }
  }, [data]);

  return (
    <div className='create'>
      <h2>Add a new recipe</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          <span>Recipe name</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder='type the recipe name here...'
            required
          />
        </label>

        <label>
          <span>Recipe ingredients</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button type='button' className='btn-add' onClick={handleAdd}>
              add
            </button>
          </div>
          <p className='current-ingredients'>
            Current ingredients:{' '}
            {ingredients.map((i) => (
              <em key={i}>{i}, </em>
            ))}
          </p>
        </label>

        <label>
          <span>Recipe method</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            placeholder='type the method here...'
            required
          />
        </label>
        <label>
          <span>Recipe cooking time(minutes)</span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            placeholder='type the duration of the recipe...'
            required
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Create;
