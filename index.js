function clickLogo(element) {
    element.classList.toggle('clicked');
    setTimeout(() => {
        element.classList.remove('clicked');
    }, 400);
}