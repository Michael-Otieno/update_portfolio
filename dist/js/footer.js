const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
    <div class="footer-icons">
        <img src="./img/icons/linkedin-brands.svg" alt="" class="footer-icons">
        <img src="./img/icons/linkedin-brands.svg" alt=""  class="footer-icons">
        <img src="./img/icons/github-brands.svg" alt="" class="footer-icons">
        <img src="./img/icons/github-brands.svg" alt="" class="footer-icons">
    </div>
    <p class="footer-copyright">&copy;2022 Michael Otieno</p>

    `
}
createFooter();