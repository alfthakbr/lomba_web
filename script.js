const container = document.querySelector('.container');
const mainImg = document.querySelector('.mainImg');
const thumbs = document.querySelectorAll('.thumb');
const overlay = document.querySelector('.overlay');
const lightboxImg = document.querySelector('.lightboxImg');

container.addEventListener('click', function(e){
	// check class thumb(gambar kecil)
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

/*Nav next & prev */
var i = 1;
overlay.addEventListener('click', function(e){
	// pas di click next
	if (e.target.className == 'next') {
		i++;
		if (i >= thumbs.length + 1) {
			i = 1;			
		}
		lightboxImg.src = "img/pic"+ i +".jpg";
		console.log(lightboxImg);
	}
	// pas di click prev
	if (e.target.className == 'prev') {
		i--;
		if (i === 0) {
			i = thumbs.length;			
		}
		// i = menurut next(+1)/prev(-1)
		lightboxImg.src = "img/pic"+ i +".jpg";
		// debug
		console.log(lightboxImg);
	}
});