global.fetch = require("jest-fetch-mock");

const { loadTotalArticlesCount, loadSingleArticle, listTitles, loadFullArticlesTable } = require("./Ex11.js");

beforeEach(() => {
    document.body.innerHTML = `
        <input type="number" id="articleId" placeholder="Enter article ID" min="1">
        <button id="fetchButton">Fetch Article</button>
        <div id="articleContent"></div>
        <button id="listTitlesButton">List Article Titles</button>
        <div id="titlesList"></div>
        <button id="loadAllArticlesButton">Show Full Articles Table</button>
        <p id="totalArticlesCount"></p>
        <div id="articlesTable"></div>
    `;
});

const articleContent = document.getElementById("articleContent");
const titlesList = document.getElementById("titlesList");
const totalArticlesCount = document.getElementById("totalArticlesCount");
const articlesTable = document.getElementById("articlesTable");

describe("Ex11.js functionality tests", () => {
    beforeEach(() => {
        fetch.resetMocks();
        articleContent.innerHTML = "";
        titlesList.innerHTML = "";
        totalArticlesCount.textContent = "";
        articlesTable.innerHTML = "";
    });

    test("Should display total article count on page load", async () => {
        fetch.mockResponseOnce(JSON.stringify(Array(100).fill({}))); 
        await loadTotalArticlesCount();
        expect(totalArticlesCount.textContent).toBe("Total de artículos disponibles: 100");
    });

    test("Should handle error when loading total article count", async () => {
        fetch.mockRejectOnce(new Error("Request failed"));
        await loadTotalArticlesCount();
        expect(totalArticlesCount.textContent).toBe("No se pudo cargar el número total de artículos.");
    });

    test("Should fetch and display a specific article", async () => {
        fetch.mockResponseOnce(JSON.stringify({
            id: 1,
            title: "Sample Article",
            body: "Sample article content"
        }));

        await loadSingleArticle();

        expect(articleContent.innerHTML).toBe("<h2>Sample Article</h2><p>Sample article content</p>");
    });

    test("Should handle error when fetching a specific article", async () => {
        fetch.mockRejectOnce(new Error("Request failed"));
        await loadSingleArticle();
        expect(articleContent.innerHTML).toBe("<p style='color: red;'>No se pudo cargar el artículo.</p>");
    });

    test("Should list only the titles of articles", async () => {
        const articles = [
            { id: 1, title: "Title 1" },
            { id: 2, title: "Title 2" }
        ];
        fetch.mockResponseOnce(JSON.stringify(articles));

        await listTitles();

        expect(titlesList.innerHTML).toBe("<ul><li>Artículo 1: Title 1</li><li>Artículo 2: Title 2</li></ul>");
        expect(articlesTable.innerHTML).toBe("");
    });

    test("Should handle error when listing only article titles", async () => {
        fetch.mockRejectOnce(new Error("Request failed"));
        await listTitles();
        expect(titlesList.innerHTML).toBe("<p style='color: red;'>No se pudieron cargar los títulos.</p>");
    });

    test("Should display the full table with article titles and contents", async () => {
        const articles = [
            { id: 1, title: "Title 1", body: "Content 1" },
            { id: 2, title: "Title 2", body: "Content 2" }
        ];
        fetch.mockResponseOnce(JSON.stringify(articles));

        await loadFullArticlesTable();

        const expectedTableHTML = `
            <table border="1" style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title 1</td>
                    <td>Content 1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Title 2</td>
                    <td>Content 2</td>
                </tr>
            </table>
        `.replace(/\s+/g, " ").trim();

        expect(articlesTable.innerHTML.replace(/\s+/g, " ").trim()).toBe(expectedTableHTML);
        expect(titlesList.innerHTML).toBe(""); // Titles list should be empty
    });

    test("Should handle error when displaying full articles table", async () => {
        fetch.mockRejectOnce(new Error("Request failed"));
        await loadFullArticlesTable();
        expect(articlesTable.innerHTML).toBe("<p style='color: red;'>No se pudieron cargar los artículos.</p>");
    });
});
