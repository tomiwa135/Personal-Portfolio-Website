function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function downloadResume() {
    window.open('assets/tomiwa-Akinrotimi-Resume.pdf');
}

function openLink(url) {
    window.open(url, '_blank');
}

function promptUser() {
    var operations = prompt("Please enter password:");

    if (operations == 1111) {
        downloadResume();
    } else {
        alert("Wrong Password!");
    }
}

const form = document.querySelector('.contact-right-form');
const msg = document.getElementById("msg")

form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    var client = new XMLHttpRequest();
    client.open("post", "https://dev75340.service-now.com/api/now/table/u_contactform");

    client.setRequestHeader('Accept', 'application/json');
    client.setRequestHeader('Content-Type', 'application/json');

    client.setRequestHeader('Authorization', 'Basic ' + btoa('admin' + ':' + '2k^@zIV6ehBC'));

    client.onreadystatechange = function () {
        if (client.status = 201 && client.readyState == 4) {
            msg.innerHTML = "Message sent successfully!"
            setTimeout(() => {
                msg.innerHTML = "";
            }, 3000)
            form.reset()
        }
    };
    client.send(JSON.stringify(data));

});