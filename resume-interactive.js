const nameFade = () => {
    const element = document.getElementById("mainName")
    element.classList.add("animate__animated", "animate__fadeIn")
}

const picFade = () => {
    const element = document.getElementById("mainPic")
    element.classList.add("animate__animated", "animate__fadeOut")
}

function numberShow() {
    document.getElementById("phoneNumber").style.opacity = '1';
}
