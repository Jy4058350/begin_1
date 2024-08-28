import { recipes } from './data.js'

function Recipe({ id, name, ingredients }) {
  console.log(id, name, ingredients)
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  )
}

{
  /* <div className='p-4 mt-4'>
      <h1 className='mt-4 text-2xl font-bold'>Recipes</h1>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2 className='mt-8 text-lg font-base font-medium'>{recipe.name}</h2>
          <ul className='p-4 mt-2 text-base font-light list-disc'>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div> */
}
