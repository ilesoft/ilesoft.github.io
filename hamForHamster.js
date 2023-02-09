const request = new XMLHttpRequest();
request.addEventListener("load", function() {
        console.log(this.responseText);
    });
request.open("GET", "logo.txt");
request.send();
