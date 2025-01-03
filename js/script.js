function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function downloadResume() {
    window.open('assets/My Resume.pdf');
}

function downloadITIL() {
    window.open('assets/ITIL.pdf');
}

function downloadSNDev() {
    window.open('assets/ServiceNowCAD.pdf');
}

function downloadSNAdmin() {
    window.open('assets/ServiceNowCSA.pdf');
}

function downloadSNDiscovery() {
    window.open('assets/ServiceNow CIS - Discovery.pdf');
}

function downloadSN_HAM() {
    window.open('assets/ServiceNowCIS - HAM.pdf');
}

function downloadSN_HRSD() {
    window.open('assets/ServiceNowCIS - HRSD.pdf');
}

function downloadMicroCMDB() {
    window.open('assets/Micro-Certification - Configure the CMDB.pdf');
}

function downloadFlowDesigner() {
    window.open('assets/Micro-Certification - Flow Designer.pdf');
}

function downloadVirtualAgent() {
    window.open('assets/ServiceNow Micro-Certification - Virtual Agent.pdf');
}

function downloadIntHub() {
    window.open('assets/Micro-Certification - Integration Hub.pdf');
}

function downloadAWS() {
    window.open('assets/AWS Certified Solutions Architect.pdf');
}

function openLink(url) {
    window.open(url, '_blank');
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

    var bearer = 'JeGB51ZdVCn-vjJgPijpPvcQe1swZbLFKW97K9J54686Z9woY8DNkltYFvdO-vF7Sxpt-af0Q5aKqzrO-fwryA'
    client.setRequestHeader('Authorization', 'Bearer ' + bearer);

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

var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Please enter your name';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Please enter your full name';
        return false;
    }

    nameError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone No. is required';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone No. should be 10 digits';
        return false;
    }

    if (!phone.match(/^\d{10}$/)) {
        phoneError.innerHTML = 'Phone No. should be 10 digits';
        return false;
    }

    phoneError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }

    emailError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters left';
        return false;
    }

    if (message.length == 0) {
        messageError.innerHTML = 'Please enter your message';
        return false;
    }

    messageError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(()=>{
            submitError.style.display = 'none';
        },3000);
        return false;
    }
}

