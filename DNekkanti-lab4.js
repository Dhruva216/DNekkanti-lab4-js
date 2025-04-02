// Dhruva Krishna Nekkanti
// ITMD 541-01 Graduate Student

(function () {
    // 1. Change hero main headline
    const headline = document.querySelector('#hero h1');
    if (headline) {
      headline.textContent = 'Uplift Your Brand with Stellar Marketing';
    }
  
    // 2. Change subtext with bold and italic
    const subText = document.querySelector('#hero p');
    if (subText) {
      subText.innerHTML = '<b><i>Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel.</i></b>';
    }
  
    // 3. Change hero background image
    const hero = document.getElementById('hero');
    if (hero) {
      hero.style.backgroundImage = 'url("https://picsum.photos/id/683/1280/720")';
    }
  
    // 4. Match nav background to footer background
    const nav = document.querySelector('header.bg-blue-600');
    const footer = document.querySelector('footer');
    if (nav && footer) {
      nav.style.backgroundColor = getComputedStyle(footer).backgroundColor;
    }
  
    // 5. Remove "Get Started" CTA
    const cta = document.querySelector('#hero a');
    if (cta) {
      cta.remove();
    }
  
    // 6. Center align section headings (Services, Solutions, Contact)
    document.querySelectorAll('h2').forEach(h => {
      const txt = h.textContent.toLowerCase();
      if (txt.includes('services') || txt.includes('solutions') || txt.includes('contact')) {
        h.style.textAlign = 'center';
      }
    });
  
    // 7. Change service icons to green
    const serviceIcons = document.querySelectorAll('#services .material-symbols-outlined');
    serviceIcons.forEach(icon => {
      icon.style.color = '#47C714';
    });
  
    // 8. Change digital marketing icon to 'ads_click'
    const digitalIcon = document.querySelector('[data-icon="digital"]');
    if (digitalIcon) {
      digitalIcon.textContent = 'ads_click';
    }
  
    // 9. Update layout to 4 cards across at >= 1024px
    const style = document.createElement('style');
    style.textContent = `
      @media (min-width: 1024px) {
        [data-section="product_cards"] {
          grid-template-columns: repeat(4, 1fr) !important;
        }
      }
    `;
    document.head.appendChild(style);
  
    // 10. Change Musicians image
    const musicianImg = Array.from(document.querySelectorAll('#solutions img')).find(img =>
      img.alt.toLowerCase().includes('musician')
    );
    if (musicianImg) {
      musicianImg.src = 'https://picsum.photos/id/453/400/300';
    }
  
    // 11. Handle form submission for graduate requirement
    const form = document.querySelector('#contact form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
  
        if (name && email) {
          alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
        } else {
          alert('Please provide a name and email.');
        }
      });
    }
  })();
  