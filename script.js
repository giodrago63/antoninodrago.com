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

function load(url) {
    document.getElementById("frame").src = url;
}
