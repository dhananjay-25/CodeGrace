// search.js
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
  
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      performSearch();
    });
  
    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase();
      const searchItems = document.querySelectorAll(".searchable-item");
  
      searchItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchTerm)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }
  });
  