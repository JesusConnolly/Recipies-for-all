

document.addEventListener("DOMContentLoaded", function() {
    const url = 'https://chinese-food-db.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a1068c7031msh2b195a008b98f24p147622jsn52b18b5cb4d7',
            'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            const firstTen = data.slice(0, 12);
            const recipeContainer = document.getElementById("recipe-container");

            firstTen.forEach(item => {
                var recipeElement = document.createElement("div");
                recipeElement.classList.add("recipe");
                recipeElement.innerHTML = `
                    <h2>${item.title}</h2>
                    <img src="${item.image}" alt="${item.title}">
                    <p>Dificultad: ${item.difficulty}</p>
                `;
                recipeContainer.append(recipeElement);
            });
        })
        .catch(err => console.log(err));
});
