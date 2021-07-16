// NAVBAR

/* Fonction permettant de faire disparaitre la barre lorsque l'on scrolle vers le bas
en la décalant de 50 px vers le haut. Elle réapparaît en position initiale */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.querySelector(".navbar").style.top = "0";
	} else {
		document.querySelector(".navbar").style.top = "-50px";
	}
	prevScrollpos = currentScrollPos;
} 

// TYPED

var typed = new Typed('.typed', {
		strings: ['Bonjour et bienvenue sur mon site de présentation :)'
		, 'Un lien GitHub, situé en bas de la page, vous permettra de visualiser le code source du site.'
		, 'Bonne visite!'],
		typeSpeed: 25,
		backSpeed: 5,
		smartBackspace: true, // this is a default
		loop: false
	});

// COMPTEUR 

/* Fonction qui permet de compter jusqu'à une valeur défini en un délai défini */

	let compteur = 0;

	$(window).scroll(function() {

		const top = $('.counter').offset().top - window.innerHeight;

		if (compteur == 0 && $(window).scrollTop() > top){
				$('.counter-value').each(function() {
						let $this = $(this), countTo = $this.attr('data-count');
						$({
								countNum: $this.text()
						}).animate({
								countNum : countTo
						},
						{
								duration: 7000,
								easing: 'swing',
								step: function(){
										$this.text(Math.floor(this.countNum));
								},
								complete: function() {
										$this.text(this.countNum);
								}
						});
				});
				compteur = 1;
		}
	})

	// AOS LIBRARY
	AOS.init();