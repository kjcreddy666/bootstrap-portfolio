const btn = document.querySelector("i");

btn.addEventListener("click", ()=> {
    document.querySelector(".sidebar").classList.toggle("hidden");
    btn.classList.toggle("fa-bars");
    btn.classList.toggle("fa-x");
});