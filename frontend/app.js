const API_URL = "http://localhost:8000/search";

// Used when the backend isn't running
const exampleResults = [
  { trust: "Surrey and Sussex Healthcare NHS Trust", wait_weeks: 22, location: "Redhill" },
  { trust: "Royal Surrey NHS Foundation Trust", wait_weeks: 18, location: "Guildford" },
  { trust: "Ashford and St Peter's Hospitals NHS Foundation Trust", wait_weeks: 26, location: "Chertsey" }
];

const form = document.getElementById("search-form");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const treatment = document.getElementById("treatment").value.trim();
  const location = document.getElementById("location").value.trim();

  resultsDiv.innerHTML = '<p class="message">Searching...</p>';

  let results;
  let usingExamples = false;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ treatment: treatment, location: location })
    });
    if (!response.ok) {
      throw new Error("Server error " + response.status);
    }
    results = await response.json();
  } catch (error) {
    results = exampleResults;
    usingExamples = true;
  }

  showResults(results, usingExamples);
});

function showResults(results, usingExamples) {
  if (!Array.isArray(results) || results.length === 0) {
    resultsDiv.innerHTML = '<p class="message">No results found</p>';
    return;
  }

  const sorted = [...results].sort((a, b) => a.wait_weeks - b.wait_weeks);

  let html = '<h2 class="results-heading">Results</h2>';

  if (usingExamples) {
    html += '<p class="note">We could not connect to the server, so these are example results.</p>';
  }

  sorted.forEach(function (result, index) {
    const isShortest = index === 0;

    html += '<div class="result' + (isShortest ? " result-shortest" : "") + '">';
    if (isShortest) {
      html += '<span class="tag">Shortest wait</span>';
    }
    html += "<h3>" + escapeHtml(result.trust) + "</h3>";
    html += "<p>Location: " + escapeHtml(result.location) + "</p>";
    html += "<p>Waiting time: <strong>" + result.wait_weeks + " weeks</strong></p>";
    html += "</div>";
  });

  resultsDiv.innerHTML = html;
}

// Stop any HTML in the data from being rendered
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
