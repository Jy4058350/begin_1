import { recipes } from './data.js'

export default function RecipeList() {
  const recipeList = recipes.map(recipe => (
    <li key={recipe.id}>{recipe.name}</li>
  ))
  const ingredientItems = recipes.map(item => (
    <li key={item.id}>{item.ingredients}</li>
  ))
  return (
    <div>
      <h1>Recipes</h1>
      <h2>{recipeList}</h2>
      <ul>{ingredientItems}</ul>
    </div>
  )
}
