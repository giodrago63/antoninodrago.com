function load(url) {
    document.getElementById("frame").src = url;
}

function setHeight(iframe) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
}
