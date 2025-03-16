

const burger = document.getElementById('burgerIcon');
const burger2 = document.getElementById('burgerMenu2');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
		burger2.classList.toggle('open');
});