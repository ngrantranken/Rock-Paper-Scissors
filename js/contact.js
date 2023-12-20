const $ = selector => document.querySelector(selector);

let success;
let error;
const img = document.createElement('img');

let form = document.getElementById("contact-form");
function handleForm(event) { event.preventDefault(); };
form.addEventListener('submit', handleForm);

const displayErrorMsgs = msgs => {
    const ul = document.createElement('ul');
    ul.classList.add('messages');

    for (let msg of msgs) {
        const li = document.createElement('li');
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }
    
    const node = $('ul');
    if (node === null) {
        const form = $('form');
        form.parentNode.insertBefore(ul, form);
    } else {
        node.parentNode.replaceChild(ul, node);
    }
}

const processEntries = () => {
    const fName = $('#first-name');
    const lName = $('#last-name');
    const email = $('#email');
    const phone = $('#phone');
    const state = $('#states');
    const terms = $('#terms');

    const msgs = [];

    if (fName.value == "") {
        msgs[msgs.length] = "Please enter your first name.";
    }
    if (lName.value == "") {
        msgs[msgs.length] = "Please enter your last name.";
    }
    if (email.value == "") {
        msgs[msgs.length] = "Please enter an email address.";
    }
    if (phone.value == "") {
        msgs[msgs.length] = "Please enter a phone number.";
    }
    if (state.value == "") {
        msgs[msgs.length] = "Please enter your state.";
    }
    if (terms.checked == false) {
        msgs[msgs.length] = "You must agree to the terms of service.";
    }

    if (msgs.length == 0) {
        success = true;
        $('form').submit();
        $('#thanksImage').appendChild(img).src = 'images/thankyou.png';
        img.classList.add('img-fluid');
    } else {
        error = true;
        displayErrorMsgs(msgs);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    $('#submitBtn').addEventListener('click', processEntries);
    $('#resetBtn').addEventListener('click', () => {
        setTimeout( () => {
            $('form').reset();
            $('#first-name').focus();
            if (success == true) {
                img.remove();
            }
            if (error == true) {
                $('ul').remove();
            }
            success = false;
            error = false;
            }, 5000
        );
    });
    $('#first-name').focus();
});