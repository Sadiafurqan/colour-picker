document.getElementById("colorPicker").addEventListener("input", function() {
    var color = this.value;
    document.body.style.backgroundColor = color;
});