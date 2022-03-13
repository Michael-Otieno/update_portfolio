const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
    <div class="footer-icons">
        <a href="https://www.linkedin.com/in/michael-otieno-924157217/" target="_blank">
            <img src="./img/icons/linkedin-brands.svg" alt="" class="footer-icons">
        </a>

        <a href="https://github.com/Michael-Otieno/" target="_blank">
            <img src="./img/icons/github-brands.svg" alt="" class="footer-icons">
        </a>
        <a href="https://twitter.com/justDoCode" target="_blank">
            <img src="./img/icons/twitter-square-brands.svg" alt=""  class="footer-icons">
        </a>
    </div>
    <p class="footer-copyright">&copy;2022 Michael Otieno</p>
`
}
createFooter();