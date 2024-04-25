document.addEventListener("DOMContentLoaded", function() {
    const recipes = document.querySelectorAll(".recipe");

    recipes.forEach(recipe => {
        recipe.addEventListener("click", function() {
            const ingredients = this.querySelector("p:nth-child(2)").textContent;
            const instructions = this.querySelector("p:nth-child(3)").textContent;

            document.getElementById("ingredients").textContent = "Ingredientes: " + ingredients;
            document.getElementById("instructions").textContent = "Instrucciones: " + instructions;
        });
    });
});
