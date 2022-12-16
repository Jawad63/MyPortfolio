const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};


// for active items in navbar: 
let headerItems = document.getElementById('nav');
let navItems = document.getElementsByClassName('item');

for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener('click', function() {
		let currentItem = document.getElementsByClassName('active');
		currentItem[0].className = currentItem[0].className.replace(' active', '');
		this.className += ' active';
	});
}

