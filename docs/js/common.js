document.addEventListener('DOMContentLoaded', function () {
    let frames = document.querySelectorAll('.player-frame');

    let tabs = document.createElement('div');
    tabs.classList.add('player-select');
    document.querySelector('.player-tabs').append(tabs);

    frames.forEach(function (frame, key) {
        // создаем кнопки для переключения плееров
        let balancer = frame.dataset.balancer ? frame.dataset.balancer : 'Player '+key;
        let tab = document.createElement('span');
        tab.innerText = balancer;
        tab.dataset.player = key;
        document.querySelector('.player-select').append(tab);

        // по умолчанию, показываем первый плеер
        if (key === 0) {
            frame.classList.remove("player-hide");
            tab.classList.add("active");
        }

        // переключение плееров
        tab.addEventListener('click', (event) => {
            // скрываем все плееры и показываем тот, по которому кликнули
            frames.forEach((el) => {
                el.classList.add("player-hide");
            });
            frame.classList.remove("player-hide");

            // отключаем все активные кнопки и включаем тот, по которому кликнули
            document.querySelectorAll(".player-select .active").forEach((el) => {
                el.classList.remove("active");
            });
            tab.classList.add("active");
        });
    });





});