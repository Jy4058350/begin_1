import { recipes } from './data.js'

export default function RecipeList() {
  console.log(recipes)
  console.log(recipes[0].id)
  return (
    <div>
      <h1>Recipes</h1>
      <div>
        <Recipe recipes={{ id, name, ingredients }} />
      </div>
    </div>
  )
}

function Recipe({ recipes }) {
  console.log(recipes)
  return (
    <div>
      {recipes.map(recipe => (
        <h1 key={recipe.id}>{recipes.name}</h1>
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
