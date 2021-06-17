function start() {
    var url = new URL(window.location.href);
    var id = url.hash.replace("#", "");

    if (id) show(id);
    else show("home");
}

function show(x) {
    var id = [
        "home",
        "attivita",
        "pubblicazioni",
        "valori",
        "materiali"
    ]

    for (i in id) {
        document.getElementById(id[i]).style.display = "none";
    }

    document.getElementById(x).style.display = "block";
}
