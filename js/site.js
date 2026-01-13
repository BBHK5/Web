// No need for window.addSwipeSupport anymore
export function addSwipeSupport(dotNetHelper) {
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) { // min swipe distance in px
            if (diff > 0) {
                dotNetHelper.invokeMethodAsync('OnSwipeLeft');
            } else {
                dotNetHelper.invokeMethodAsync('OnSwipeRight');
            }
        }
    }
}

export function toggleFullscreen(selector) {
    const elem = document.querySelector(selector);
    if (!document.fullscreenElement) {
        elem?.requestFullscreen?.().catch(e => console.log(e));
    } else {
        document.exitFullscreen?.();
    }
}