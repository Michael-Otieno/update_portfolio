const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
    <div class="footer-icons">
        <img src="./img/icons/linkedin-brands.svg" alt="" class="footer-icons_one">
        <img src="./img/icons/linkedin-brands.svg" alt=""  class="footer-icons_two">
        <img src="./img/icons/github-brands.svg" alt="" class="footer-icons_three">
        <img src="./img/icons/github-brands.svg" alt="" class="footer-icons_four">
    </div>
    <p class="footer-copyright">&copy;2022 Michael Otieno</p>

    `
}
createFooter();