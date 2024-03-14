const firebaseConfig = {
    apiKey: "AIzaSyCTYXHJCKaxLnzbc3MDCKd7pQnFwFXYx44",
    authDomain: "contact-form-8b6b1.firebaseapp.com",
    databaseURL: "https://contact-form-8b6b1-default-rtdb.firebaseio.com",
    projectId: "contact-form-8b6b1",
    storageBucket: "contact-form-8b6b1.appspot.com",
    messagingSenderId: "1085299808087",
    appId: "1:1085299808087:web:454c7370c5f247d96fd012"
};
//initialize firebse
firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var contactNo = getElementVal("Contact No");
    var emailid = getElementVal("emailid");
    var dob = getElementVal("dob");
    var msgContent = getElementVal("msgContent");
    var pan = getElementVal("PAN");
    var aadhaar = getElementVal("Aadhaar");

    saveMessages(name, contactNo, emailid, dob, msgContent, pan, aadhaar);

    // Enable alert
    document.querySelector(".alert").style.display = "block";

    // Remove the alert after 3 seconds
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, contactNo, emailid, dob, msgContent, pan, aadhaar) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        contactNo: contactNo,
        emailid: emailid,
        dob: dob,
        msgContent: msgContent,
        pan: pan,
        aadhaar: aadhaar
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};