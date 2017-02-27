function autoPoke() {
    var thing = document.getElementsByTagName("a");
    for (var i = 0; i < thing.length; i++) {
        if (thing[i].innerHTML.contains("Poke Back")) {
            thing[i].click();
        }
    }
    setTimeout(autoPoke, 1000);
}
autoPoke();
