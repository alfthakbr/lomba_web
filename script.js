const container = document.querySelector('.container');
const mainImg = document.querySelector('.mainImg');
const thumbs = document.querySelectorAll('.thumb');
const overlay = document.querySelector('.overlay');
const lightboxImg = document.querySelector('.lightboxImg');
/* animasi mainImg */
function animasi() {
	// tambahin animasi
	mainImg.classList.add('fade');
	// reset animasi setiap 0.3s
	setTimeout(function(){
		mainImg.classList.remove('fade');
	}, 300);
	// hapus setiap transisi gambar yang udah gak di click
	thumbs.forEach(function(thumb) {
		if (thumb.classList.contains('active')) {
			thumb.classList.remove('active');
		}
	});
}
/* click to mainImg */
container.addEventListener('click', function(e){
	// check class thumb(gambar kecil)
	if (e.target.className == 'thumb') {
		// cari gambar sesuai user pilih/click (fix lightBox)
		mainImg.src = e.target.src;
		lightboxImg.src = e.target.src;
		console.log(mainImg);
		console.log(lightboxImg);
		// animasi
		animasi();
		// balikin transisi opacity jadi 1 setiap di click
		e.target.classList.add('active');
	}
});
/* animasi LightBox Right */
function animasiLbR() {
	// tambahin animasi
	overlay.classList.add('fadeLbR');
	// reset animasi setiap 0.3s
	setTimeout(function(){
		overlay.classList.remove('fadeLbR');
	}, 400);
}
/* animasi lightBox Left */
function animasiLbL() {
	// tambahin animasi
	overlay.classList.add('fadeLbL');
	// reset animasi setiap 0.3s
	setTimeout(function(){
		overlay.classList.remove('fadeLbL');
	}, 400);
}
/* Nav next & prev */
var i = 1;
overlay.addEventListener('click', function(e){
	// next
	if (e.target.className == 'next') {
		i++;
		if (i >= thumbs.length + 1) {
			i = 1;			
		}
		// i = menurut next(+1)/prev(-1)
		lightboxImg.src = "img/pic"+ i +".jpg";
		console.log(lightboxImg);
		// ganti mainImg
		mainImg.src = "img/pic"+ i +".jpg";
		animasiLbR();
		console.log(mainImg);
	}
	// prev
	if (e.target.className == 'prev') {
		i--;
		if (i === 0) {
			i = thumbs.length;			
		}
		// i = menurut next(+1)/prev(-1)
		lightboxImg.src = "img/pic"+ i +".jpg";
		console.log(lightboxImg);
		// ganti mainImg
		mainImg.src = "img/pic"+ i +".jpg";
		animasiLbL();
		console.log(mainImg);
	}
});

