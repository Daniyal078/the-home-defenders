document.querySelector('.sidenav-tog').addEventListener('click', () => {
    document.querySelector('.side-bar').style.left = "0"
    document.querySelector('.mask').style.display = "block"
})

document.querySelector('.sidenav-close').addEventListener('click', () => {
    document.querySelector('.side-bar').style.left = "-100%"
    document.querySelector('.mask').style.display = "none"
})

