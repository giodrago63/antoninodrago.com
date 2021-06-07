function load(url) {
    var iframe = document.getElementById("frame");
    iframe.src = url;
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
}
