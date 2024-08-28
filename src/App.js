import { recipes } from './data.js'

export default function RecipeList() {
  const recipeList = recipes.map(recipe => {
    return (
      <h2 className='mb-8 p-4 text-2xl' key={recipe.id}>
        {recipe.name}
        <ul className='mt-2 p-4 text-xl list-disc'>
          {recipe.ingredients.map(ingredient => (
            <li className=' text-basic' key={ingredient}>
              {ingredient}
            </li>
          ))}
        </ul>
      </h2>
    )
  })
  return (
    <div>
      <h1 className='mb-8 text-3xl font-bold '>Recipes</h1>
      <div>{recipeList}</div>
    </div>
  )
}
