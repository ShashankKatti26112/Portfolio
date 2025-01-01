document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("h1, h3, p, img");
  
    elements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.style.color = "#6a5acd";
      });
  
      element.addEventListener("mouseleave", () => {
        element.style.color = "";
      });
    });
  });  