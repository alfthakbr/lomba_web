const container = document.querySelector('.container');
const mainImg = document.querySelector('.mainImg');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
	if (e.target.className == 'thumb') {
		mainImg.src = e.target.src;
		mainImg.classList.add('fade');
		setTimeout(function(){
			mainImg.classList.remove('fade');
		}, 300);
		thumbs.forEach(function(thumb) {
			if (thumb.classList.contains('active')) {
				thumb.classList.remove('active');
			}
		});
		e.target.classList.add('active');
	}
});