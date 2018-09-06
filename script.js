const container = document.querySelector('.container');
const mainImg = document.querySelector('.mainImg');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
	// check apa yg di click class thumb(gambar kecil)
	if (e.target.className == 'thumb') {
		mainImg.src = e.target.src;
		// tambahin animasi
		mainImg.classList.add('fade');
		// reset animasi setiap 0.3 detik(pas-pasan dengan transisi opacity)
		setTimeout(function(){
			mainImg.classList.remove('fade');
		}, 300);
		// hapus setiap transisi gambar yang udah gak di click
		thumbs.forEach(function(thumb) {
			if (thumb.classList.contains('active')) {
				thumb.classList.remove('active');
			}
		});
		// balikin transisi opacity jadi 1 setiap di click
		e.target.classList.add('active');
	}
});