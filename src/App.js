import { recipes } from './data.js'

export default function RecipeList() {
  const recipeList = recipes.map(recipe => {
    return (
      <h2 className='mb-4' key={recipe.id}>
        {recipe.name}
        <ul key={recipe.id}>
          <li>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </li>
        </ul>
      </h2>
    )
  })
  return (
    <div>
      <h1 className='mb-4 font-bold '>Recipes</h1>
      <div>{recipeList}</div>
    </div>
  )
}
