
// const url = 'https://chinese-food-db.p.rapidapi.com/';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'a1068c7031msh2b195a008b98f24p147622jsn52b18b5cb4d7',
//         'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com'
//     }
// };

// fetch(url, options) // Agrega options para incluir los encabezados de RapidAPI
//     .then(response => response.json())
//     .then(data => {
//         // Filtrar solo los primeros 10 elementos
//         const firstTen = data.slice(0, 10);

//         // Iterar sobre los primeros 10 elementos y mostrar los detalles específicos
//         firstTen.forEach(item => {
//             console.log("ID:", item.id);
//             console.log("Título:", item.title);
//             console.log("Dificultad:", item.difficulty);
//             console.log("Imagen:", item.image);
//             console.log("------------------------");
//         });
//     })
//     .catch(err => console.log(err));




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
            const firstTen = data.slice(0, 10);
            const recipeContainer = document.getElementById("recipe-container");

            firstTen.forEach(item => {
                const recipeElement = document.createElement("div");
                recipeElement.classList.add("recipe");
                recipeElement.innerHTML = `
                    <h2>${item.title}</h2>
                    <img src="${item.image}" alt="${item.title}">
                    <p>Dificultad: ${item.difficulty}</p>
                `;
                recipeContainer.appendChild(recipeElement);
            });
        })
        .catch(err => console.log(err));
});
