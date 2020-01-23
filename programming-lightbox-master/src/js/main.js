let lightboxLinks = document.querySelector('.lightboxify');

lightboxLinks.addEventListener('click', function(event){
	event.preventDefault()
	
	let overlay = document.createElement("div");
	overlay.style.position = 'fixed'
	overlay.style.width = '100%'
	overlay.style.height = '100%'
	overlay.style.top = 0
	overlay.style.backgroundColor = 'black'
	overlay.style.opacity = 0.75
	document.body.appendChild(overlay);





	let whiteBox  = document.createElement("div")
	whiteBox.classList.add('lightbox') //all styles from scss
	document.body.appendChild(whiteBox); //whitebox in body


	let img = document.createElement("img")

	whiteBox.appendChild(img);

	let biggerImgSrc = this.href
	img.setAttribute("src", biggerImgSrc)


	overlay.addEventListener('click',  function() {
		overlay.remove() 
		whiteBox.remove()
	})
})

// let img = document.createElement("img")
		

	