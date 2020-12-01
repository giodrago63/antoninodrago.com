function show(x){
    for (var i = 0; i < 3; i++) {
        if (i != x) {
            document.getElementById("main" + i).style="display: none;";
            document.getElementById("menu" + i).style="display: none;";
        }
    }

    document.getElementById("main" + x).style="display: block;";
    document.getElementById("menu" + x).style="display: block;";
}
