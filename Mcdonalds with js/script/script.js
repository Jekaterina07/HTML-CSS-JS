
window.addEventListener('DOMContentLoaded', (event) => {
    let scrollableElement = document.body;

    scrollableElement.addEventListener('wheel', checkScrollDirection);

    function checkScrollDirection(event) {
        if (checkScrollDirectionIsUp(event)) {
            console.log('Вверх');
        } else {
            console.log('Вниз');
        }
    }

    function checkScrollDirectionIsUp(event) {
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        }
        return event.deltaY < 0;
    }
});


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";
});
