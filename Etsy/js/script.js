window.onload = function () {
    document.getElementById("search-textbar").onclick = function () {
        console.log("inside onclick")
        document.getElementById("search-submit-button").style.color = "white";
        document.getElementById("search-submit-button").style.backgroundColor = "black";
    }
}