function getVideoTitle() {
    return document.title.substring(0, document.title.length - " - YouTube".length);
}

function getTitleElement() {
    return document.querySelector(".title yt-formatted-string.ytd-video-primary-info-renderer");
}

function getPublicationDateElement() {
    return document.querySelector("div#date yt-formatted-string.ytd-video-primary-info-renderer");
}

function getPublicationDate() {
    return getPublicationDateElement().innerHTML;
}

function appendPublicationDateToTitle() {
    getTitleElement().innerHTML = getVideoTitle() + `&nbsp;&nbsp;|&nbsp;&nbsp;${getPublicationDate()}`;
}

window.setInterval(appendPublicationDateToTitle, 2000);
