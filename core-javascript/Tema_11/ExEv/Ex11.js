// 6. Pide información con fetch a la url: https://jsonplaceholder.typicode.com/posts/1. Loguea el status de
// la petición e imprime por pantalla el contenido del artículo que has
// recibido.
// 7. Modifica el ejercicio anterior o crea uno nuevo que permita cambiar el
// número del artículo que se recibe.
// 8. Modifica el ejercicio anterior y recibe la lista de todos los artículos.
// ¿Cuántos hay? ¿Podrías listar los títulos? ¿Y hacer una tabla con los
// títulos y los contenidos?



let fetchButton = document.getElementById("fetchButton");
let articleIdInput = document.getElementById("articleId");
let articleContent = document.getElementById("articleContent");
let listTitlesButton = document.getElementById("listTitlesButton");
let titlesList = document.getElementById("titlesList");
let loadAllArticlesButton = document.getElementById("loadAllArticlesButton");
let totalArticlesCount = document.getElementById("totalArticlesCount");
let articlesTable = document.getElementById("articlesTable");


function loadTotalArticlesCount() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (!response.ok) throw new Error("Request failed");
            return response.json();
        })
        .then(data => {
            totalArticlesCount.textContent = `Total de artículos disponibles: ${data.length}`;
        })
        .catch(error => {
            console.error("Error loading total articles count:", error);
            totalArticlesCount.textContent = "No se pudo cargar el número total de artículos.";
        });
}

function loadSingleArticle() {
    let articleId = articleIdInput.value;

    if (!articleId) {
        articleContent.innerHTML = "<p style='color: red;'>Por favor, ingresa un ID de artículo válido.</p>";
        return;
    }

    return fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
        .then(response => {
            if (!response.ok) throw new Error("Request failed");
            return response.json();
        })
        .then(data => {
            articleContent.innerHTML = `<h2>${data.id}. ${data.title}</h2><p>${data.body}</p>`;
        })
        .catch(error => {
            console.error("Error loading article:", error);
            articleContent.innerHTML = "<p style='color: red;'>No se pudo cargar el artículo.</p>";
        });
}

function listTitles() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (!response.ok) throw new Error("Request failed");
            return response.json();
        })
        .then(data => {
            let titlesHTML = "<ul>";
            data.forEach(article => {
                titlesHTML += `<li>Nº ${article.id}: ${article.title}</li>`;
            });
            titlesHTML += "</ul>";
            titlesList.innerHTML = titlesHTML;
            articlesTable.innerHTML = ""; 
        })
        .catch(error => {
            console.error("Error loading titles:", error);
            titlesList.innerHTML = "<p style='color: red;'>No se pudieron cargar los títulos.</p>";
        });
}

function loadFullArticlesTable() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (!response.ok) throw new Error("Request failed");
            return response.json();
        })
        .then(data => {
            let tableHTML = `<table border="1" style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                                <tr>
                                    <th>ID</th>
                                    <th>Título</th>
                                    <th>Contenido</th>
                                </tr>`;
            data.forEach(article => {
                tableHTML += `<tr>
                                <td>${article.id}</td>
                                <td>${article.title}</td>
                                <td>${article.body}</td>
                              </tr>`;
            });
            tableHTML += `</table>`;
            articlesTable.innerHTML = tableHTML;
            titlesList.innerHTML = ""; 
        })
        .catch(error => {
            console.error("Error loading articles table:", error);
            articlesTable.innerHTML = "<p style='color: red;'>No se pudieron cargar los artículos.</p>";
        });
}

// Initialize function to bind event listeners
function initialize() {
    loadTotalArticlesCount();
    fetchButton.addEventListener("click", loadSingleArticle);
    listTitlesButton.addEventListener("click", listTitles);
    loadAllArticlesButton.addEventListener("click", loadFullArticlesTable);
}

// Only initialize if not in module environment (production)
if (typeof module === 'undefined') {
    initialize();
}


module.exports = {
    loadTotalArticlesCount,
    loadSingleArticle,
    listTitles,
    loadFullArticlesTable,
    initialize
};
