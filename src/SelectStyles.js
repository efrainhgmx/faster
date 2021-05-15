const browser = navigator.userAgent.indexOf("Firefox");
const linkStyles = document.querySelector('.desktop-styles');

const setStyles = (browser) => browser !== -1 ? linkStyles.setAttribute("href", "./css/desktop-moz.css") : console.log(linkStyles.getAttribute("href"));

setStyles(browser);
