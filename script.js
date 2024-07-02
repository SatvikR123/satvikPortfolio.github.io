function showSideBar(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.visibility="visible";
}
function hideSideBar(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.visibility="hidden";
}
function showDescription(skillId) {
    const descriptionElement = document.getElementById(`description-${skillId}`);
    const modal = document.getElementById('skill-modal');
    const modalContent = document.getElementById('skill-description');
    
    modalContent.textContent = descriptionElement.textContent;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('skill-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('skill-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
const goBackToTop = document.querySelector("#goBackToTop");

goBackToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
})