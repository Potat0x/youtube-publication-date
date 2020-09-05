function getVideoTitle() {
    return document.title.substring(0, document.title.length - " - YouTube".length);
}

function getTitleElement() {
    return document.querySelector("h1.ytd-video-primary-info-renderer yt-formatted-string");
}

function getPublicationDateElement() {
    const a = document.querySelector("div#date yt-formatted-string.ytd-video-primary-info-renderer");
    return a;
}

function appendPublicationDateToTitle() {
    const titleElement = getTitleElement();
    const publicationDate = getPublicationDateElement().innerText;
    titleElement.innerHTML = getVideoTitle() + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + publicationDate;
}

setTimeout(appendPublicationDateToTitle, 2000);
