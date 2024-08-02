document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll(".image");

  divs.forEach(div => {
    div.addEventListener("dragstart", dragStart);
    div.addEventListener("dragover", dragOver);
    div.addEventListener("drop", drop);
  });

  let draggedElement = null;

  function dragStart(event) {
    draggedElement = event.target;
    event.dataTransfer.effectAllowed = "move";
  }

  function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  function drop(event) {
    event.preventDefault();
    if (event.target.classList.contains("image")) {
      swapElements(draggedElement, event.target);
    }
  }

  function swapElements(element1, element2) {
    const parent = element1.parentNode;
    const sibling = element1.nextSibling === element2 ? element1 : element1.nextSibling;

    element2.parentNode.insertBefore(element1, element2);
    parent.insertBefore(element2, sibling);
  }
});
