var helloWorldButton: HTMLElement = document.getElementById("sayHelloBtn");

if (helloWorldButton !=  null) {
    helloWorldButton.addEventListener("click", function() {
        document.getElementById("helloWorldBlock").innerHTML = "Hello World";
    });
}