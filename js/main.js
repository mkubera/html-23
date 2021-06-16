// MAIN function
const main = () => {
  console.log("Hello, world!");

  const data = [
    { name: "Mikolaj", age: 37 },
    { name: "Slawomir", age: 44 },
  ];

  // Add strike-through to all list items
  document.querySelectorAll("ul li").forEach((li) => {
    li.addEventListener("click", (e) => {
      e.target.classList.toggle("done");
    });
  });
};

document.addEventListener("DOMContentLoaded", main);
