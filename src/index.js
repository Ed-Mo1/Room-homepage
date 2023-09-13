const details = [
  {
    title: "Discover innovative ways to decorate",
    text: `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
    "large img": `./images/desktop-image-hero-1.jpg`,
    "small img": `./images/mobile-image-hero-1.jpg`,
  },
  {
    title: "We are available all across the globe",
    text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.
`,
    "large img": `./images/desktop-image-hero-2.jpg`,
    "small img": `./images/mobile-image-hero-2.jpg`,
  },
  {
    title: "Manufactured with the best materials",
    text: `  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
    "large img": `./images/desktop-image-hero-3.jpg`,
    "small img": `./images/mobile-image-hero-3.jpg`,
  },
];

document.querySelector("#forwards").onclick = forwards;
document.querySelector("#backwards").onclick = backwards;

let counter = 0;

function forwards() {
  ++counter;
  checkCounter();
  updateContent();
}

function backwards() {
  --counter;
  checkCounter();
  updateContent();
}

function checkCounter() {
  if (counter > details.length - 1) {
    counter = 0;
  }
  if (counter < 0) {
    counter = details.length - 1;
  }
}

function checkMedia() {}

function updateContent() {
  let small = window.matchMedia("(width<768px)");
  if (small.matches) {
    document.querySelector("#preview-img").src = details[counter]["small img"];
  } else {
    document.querySelector("#preview-img").src = details[counter]["large img"];
  }
  document.querySelector("#about-title").textContent = details[counter].title;
  document.querySelector("#about-text").textContent = details[counter].text;
}

updateContent();
