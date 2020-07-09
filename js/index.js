const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let newLastNavItem = document.createElement('a');
newLastNavItem.textContent = 'Inspiration';
newLastNavItem.style.color = 'green';

let nav = document.getElementsByTagName('nav');
nav[0].appendChild(newLastNavItem);


//DOM for nav
let navItems = document.getElementsByTagName('a');

navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[0].style.color = 'green';

navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[1].style.color = 'green';

navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[2].style.color = 'green';

navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[3].style.color = 'green';

navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[4].style.color = 'green';

navItems[5].textContent = siteContent.nav["nav-item-6"];
navItems[5].style.color = 'green';

let newFirstNavItem = document.createElement('a');
newFirstNavItem.textContent = 'Ideas';
nav[0].prepend(newFirstNavItem);
newFirstNavItem.style.color = 'green';


//DOM for cta
let awesome = document.getElementsByTagName('h1');
awesome[0].textContent = siteContent.cta.h1;

let button = document.getElementsByTagName('button');
button[0].textContent = siteContent.cta.button;

let ctaImage = document.getElementById('cta-img');
ctaImage.src = './img/header-img.png';


//DOM for main content

//top-content
let contentHeaders = document.getElementsByTagName('h4');
let paragraphs = document.getElementsByTagName('p');
let MiddleImg = document.getElementById('middle-img');

for(let i = 0; i < 9; i++){
  switch(i){

    case 0://features section
      contentHeaders[i].textContent = siteContent["main-content"]["features-h4"];
      paragraphs[i].textContent = siteContent["main-content"]["features-content"];
      break;

    case 1://about section
      contentHeaders[i].textContent = siteContent["main-content"]["about-h4"];
      paragraphs[i].textContent = siteContent["main-content"]["about-content"];
      break;

    case 2://services section
      contentHeaders[i].textContent = siteContent["main-content"]["services-h4"];
      paragraphs[i].textContent = siteContent["main-content"]["services-content"];
      break;

    case 3: //product section
      contentHeaders[i].textContent = siteContent["main-content"]["product-h4"];
      paragraphs[i].textContent = siteContent["main-content"]["product-content"];
      break;

    case 4: //vision section
      contentHeaders[i].textContent = siteContent["main-content"]["vision-h4"];
      paragraphs[i].textContent = siteContent["main-content"]["vision-content"];
      break;

    case 5://Contact header and address
      contentHeaders[i].textContent = siteContent.contact["contact-h4"];
      paragraphs[i].textContent = siteContent.contact.address;
      paragraphs[i].style.fontSize = '18px';
      break;

    case 6://phone number
      paragraphs[i].textContent = siteContent.contact.phone;
      paragraphs[i].style.fontSize = '18px';
      break;

    case 7://email contact
      paragraphs[i].textContent = siteContent.contact.email;
      paragraphs[i].style.fontSize = '18px';
      break;

    case 8://copyright
      paragraphs[i].textContent = siteContent.footer.copyright;
      paragraphs[i].style.fontSize = '18px';
      break;

  }
}

MiddleImg.src = './img/mid-page-accent.jpg';







