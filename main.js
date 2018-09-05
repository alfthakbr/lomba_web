current = document.querySelector('#current');
imgs = document.querySelectorAll('.imgs img');

opacity = 1;

function click(i) {
	imgs.forEach(img => img.style.opacity = 0.3);
	current.src = i.target.src;
	current.classList.add('fade-in');
	setTimeout(() => current.classList.remove('fade-in'),200)
	i.target.style.opacity = opacity;
}

imgs.forEach(img => img.addEventListener('click', click));

