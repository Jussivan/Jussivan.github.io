var toggleTheme = document.getElementById("toggleTheme");
var rootHtml = document.documentElement

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if(currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light");
    } else {
        rootHtml.setAttribute("data-theme", "dark");
    }
    toggleTheme.classList.toggle("bi-sun-fill");
    toggleTheme.classList.toggle("bi-moon-stars-fill");
}

toggleTheme.addEventListener("click", changeTheme);