function oncroll() {
    var header = document.getElementsByClassName("header-scroll")
    console.log(header)

    function callBackfunc() {
        var y = window.scrollY;
        if (y > header[0].offsetHeight * 2) {

            for (let index = 0; index < header.length; index++) {
                const element = header[index];
                element.classList.add("scroll");

            }
        } else {
            for (let index = 0; index < header.length; index++) {
                const element = header[index];
                element.classList.remove("scroll");

            }
        }
    }
    window.addEventListener("scroll", callBackfunc());
}
window.onscroll = function() { oncroll() };