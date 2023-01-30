export default function loadMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createRecipeItem(
        "Pizza1", 
        "Ingredient1, ingredient2, ingredient3, ingredient4.."
        ));
    
    menu.appendChild(createRecipeItem(
        "Pizza2", 
        "Ingredient1, ingredient2, ingredient3, ingredient4.."
        ));

    menu.appendChild(createRecipeItem(
        "Pizza3", 
        "Ingredient1, ingredient2, ingredient3, ingredient4.."
        ));

    menu.appendChild(createRecipeItem(
        "Pizza4", 
        "Ingredient1, ingredient2, ingredient3, ingredient4.."
        ));
    
    menu.appendChild(createRecipeItem(
        "Pizza5", 
        "Ingredient1, ingredient2, ingredient3, ingredient4.."
        )); 
    
    menu.appendChild(createRecipeItem(
        "Pizza6", 
        "Ingredient1, ingredient2, ingredient3, ingredient4.."
        ));

    function createRecipeItem(name, description) {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipeItem');
        
        const recipeImg = document.createElement('img');
        recipeImg.src = `images/pizzas/${name.toLowerCase()}.png`;

        const recipeName = document.createElement('h4');
        recipeName.textContent = name;
        
        const recipeDesc = document.createElement('p');
        recipeDesc.textContent = description;

        recipeItem.append(recipeImg, recipeName, recipeDesc);

        return recipeItem;
    }
    
    const main = document.querySelector('main');
    main.textContent = "";
    main.appendChild(menu);
}