const body = document.querySelector('body');
const openFeedbackPopup = document.querySelectorAll('.js--popup-feedback--open'),
    feedbackPopup = document.querySelector('.popup__feedback'),
    overlayFeedbackPopup = document.querySelector('.popup-feedback__overlay'),
    closeFeedbackPopup = document.querySelector('.popup-feedback__close');
    

function popupFunctions(openPopupBtn, popup, popupOverlay, popupClose) {
    if (!openPopupBtn || !popup || !popupOverlay || !popupClose) {
        console.error('Важный элемент попапа не найден!')
        return;
    } else {

        const openPopup = () => {
            popup.classList.add('open');
            popupOverlay.classList.add('open');
            body.classList.add('scroll-lock');
        }

        const closePopup = () => {
            popup.classList.remove('open');
            popupOverlay.classList.remove('open');
            body.classList.remove('scroll-lock');
        }

        if (openPopupBtn.forEach) {
            openPopupBtn.forEach(btn => {
                btn.addEventListener('click', openPopup)
            });
        } else {
            openPopupBtn.addEventListener('click', openPopup)
        }

        popupOverlay.addEventListener('click', openPopup);
        popupClose.addEventListener('click', closePopup);


    }
}

popupFunctions(openFeedbackPopup, feedbackPopup, overlayFeedbackPopup, closeFeedbackPopup);




