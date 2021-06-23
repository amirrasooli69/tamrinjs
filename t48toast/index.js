function toast(message, duration) {
    const meassage = document.querySelector('.toast');
    meassage.classList.add('toast--show');
    meassage.innerText = message;

    setTimeout(() => {
        meassage.classList.remove('toast--show');
    }, duration);

}