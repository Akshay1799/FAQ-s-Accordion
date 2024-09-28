document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelectorAll(".plus-icon");

    toggle.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            const card = this.closest('.box');
            const icon = this;
            card.classList.toggle('active')

            if(card.classList.contains('active')){
                icon.src = './assets/images/icon-minus.svg'
            }else{
                icon.src = './assets/images/icon-plus.svg'
            }
        })
    })
})