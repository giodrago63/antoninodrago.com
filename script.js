function start() {
    var url = new URL(window.location.href);
    var id = url.hash.replace("#", "");

    if (id) show(id);
    else show("home");
}

function show(id) {
    var x = document.getElementsByClassName("main");

    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}
