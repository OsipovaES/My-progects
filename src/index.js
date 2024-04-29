import "./main/index.html";
import "./pets/index.html";
import "normalize.css";
import "./sass/index.scss";
import json from "./json/pets.json";

//Burger 

const burgerCheckbox = document.getElementById('burger-checkbox');
const navigationLinks = document.querySelectorAll('.navigation__link');
const overlay = document.querySelector('.overlay')

const closeBurgerMenu = () => {
  burgerCheckbox.checked = false;
  document.body.classList.remove('stop-scrolling');
  overlay.classList.remove('overlay--show');
}

burgerCheckbox.addEventListener('click', function() {
  if (this.checked) {
    document.body.classList.add('stop-scrolling');
    overlay.classList.add('overlay--show');
  }
   else {
    closeBurgerMenu()
  }
});

navigationLinks.forEach(link => {
    link.addEventListener('click', closeBurgerMenu);
});

window.addEventListener('click', (e) => {
  if (e.target === overlay) closeBurgerMenu();
});

// Modal

window.addEventListener('DOMContentLoaded', () => {
  const modalEl = document.querySelector('.modal');
  const card = document.querySelector('.slider__wrapper');

  card?.addEventListener(
    'click',
    (e) => {
      const targetElement = e.target;

      if (targetElement.matches('.card, .card__image, .button')) {
        const foundCard = targetElement.closest('.card');

        if (foundCard) {
          const petName = foundCard.dataset.name;

          if (petName) {
            const pet = json.find((elem) => elem.name === petName);

            if (pet) {
              modalEl.classList.add('modal--show');
              document.body.classList.add('stop-scrolling');
              modalEl.innerHTML = `
            <div class="modal__card">
                <img class="modal__img" src="${pet.img}">
                <div class="modal__content">
                    <h1 class="modal__name">${pet.name}</h1>
                    <h3 class="modal__breed">${pet.type} - ${pet.breed}</h3>
                    <p class="modal__description">${pet.description}</p>
                    <ul class="modal__ul">
                        <li class="modal__list"> <span style="font-weight: bold;">Age:</span> ${pet.age}</li>
                        <li class="modal__list"> <span style="font-weight: bold;">Inoculations:</span> ${pet.inoculations}</li>
                        <li class="modal__list"> <span style="font-weight: bold;">Diseases:</span>  ${pet.diseases}</li>
                        <li class="modal__list"> <span style="font-weight: bold;">Parasites:</span> ${pet.parasites}</li>
                    </ul>
                </div>
                <button class="modal__close-btn"><svg width="12" height="12" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#2F281E"/></svg></button>
            </div>
        `;
              const closeModal = () => {
                modalEl.classList.remove('modal--show');
                document.body.classList.remove('stop-scrolling');
              };
              const closeBtn = document.querySelector('.modal__close-btn');
              closeBtn.addEventListener('click', () => closeModal());
              window.addEventListener('click', (e) => {
                if (e.target === modalEl) closeModal();
              });
            }
          }
        }
      }
    });
});









