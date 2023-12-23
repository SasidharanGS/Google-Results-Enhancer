setTimeout(main, 600);
function ordinate( title ) {
    title = title.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var ordinator = "[\\?&]" + title + "=([^&#]*)";
    var ordination = new RegExp(ordinator);
    var ordinated = ordination.exec(window.location.href);
    if (ordinated == null)
        return ""; else
        return ordinated[1];
}
function main() {
    var sers = document.querySelectorAll('h3.LC20lb');
    var begin = parseInt(ordinate('begin')) || 0;
    for (x = 0; x < sers.length; x++) {
        if (!sers[x].classList.contains("ordinal")) {
            sers[x].classList.add("ordinal");
            sers[x].innerHTML = (x + 1 + begin).toString() + ". " + sers[x].innerHTML;
        }
    }
}
