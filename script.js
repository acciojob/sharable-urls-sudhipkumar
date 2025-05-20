// your code here
document.getElementById("button").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();

  let baseUrl = "https://localhost:8080/";
  let queryParams = [];

  if (name) {
    queryParams.push(`name=${encodeURIComponent(name)}`);
  }

  if (year) {
    queryParams.push(`year=${encodeURIComponent(year)}`);
  }

  if (queryParams.length > 0) {
    baseUrl += "?" + queryParams.join("&");
  }

  document.getElementById("url").innerText = baseUrl;
});
