/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Enhanced mailto links script: Attempts to open email client, then offers to copy address if it fails.
// Add this to your <head> or end of <body> in index.html, e.g., for Vastop.fi's marquee section.
// Note: Works in modern browsers (Chrome 66+, Firefox, etc.); requires HTTPS for clipboard API.
// Etsi kaikki mailto-linkit ja lisää parannettu klikkauskäsittelijä
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', function(e) {
    // Älä estä oletusta heti – anna selaimen yrittää avata
    // e.preventDefault();  // Poistettu: anna mailto toimia ensin
    
    // Yritä avata mailto (jos ei jo tehty)
    window.location.href = this.href;
    
    // Odota 1.5s (pienempi viive mobiilissa, pidempi desktopissa)
    setTimeout(() => {
      // Kysy aina vahvistus, jos haluat varmistuksen (tai ehdollista myöhemmin)
      if (confirm('Jos sähköpostiohjelma ei auennut, haluatko kopioida osoitteen leikepöydälle?')) {
        // Kopioi sähköpostiosoite (this.textContent = esim. "vastop@vastop.fi")
        navigator.clipboard.writeText(this.textContent).then(() => {
          alert('Osoite kopioitu leikepöydälle: ' + this.textContent + '\n\nLiitä se nyt sähköpostiohjelmaasi!');
        }).catch(err => {
          // Fallback: Jos clipboard epäonnistuu (esim. HTTP-sivu), näytä manuaalinen kopio
          prompt('Leikepöytä ei toiminut. Kopioi tämä osoite: ', this.textContent);
        });
      }
    }, 1500);  // 1.5s viive – säädä tarvittaessa (lyhyempi = aggressiivisempi)
    
    // Debug: Tarkista konsolista (F12 > Console)
    console.log('Mailto klikattu:', this.href, '– tarkista, avautuiko sovellus.');
  });
});