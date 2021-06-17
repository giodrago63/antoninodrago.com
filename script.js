function start() {
    var url = new URL(window.location.href);
    var id = url.hash.replace("#", "");

    if (id) show(id);
    else show("home");
}

function show(x) {
    var id = [
        "home",
        "attivita1",
        "attivita2",
        "attivita3",
        "pubblicazioni1",
        "pubblicazioni2",
        "pubblicazioni3",
        "materiali1",
        "materiali2",
        "materiali3"
    ]

    for (i in id) {
        document.getElementById(id[i]).style.display = "none";
    }

    document.getElementById(x).style.display = "block";
}
