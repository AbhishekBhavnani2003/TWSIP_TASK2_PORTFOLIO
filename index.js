function sendEmail() {
    var name = encodeURIComponent(document.getElementById('name').value);
    var location = encodeURIComponent(document.getElementById('location').value);
    var phone = encodeURIComponent(document.getElementById('phone').value);
    var email = encodeURIComponent(document.getElementById('email').value);
    var topic = encodeURIComponent(document.getElementById('topic').value);
    var message = encodeURIComponent(document.getElementById('message').value);

    var mailtoLink = 'mailto:abhishekbhavnani2003@gmail.com?subject=' + topic + '&body=' + 'name : ' + name + '%0D%0A' + 'location : ' +  location + '%0D%0A' + 'email : ' +  email  + '%0D%0A' + 'phone no : ' + phone + '%0D%0A' + 'message : ' + message ;

    window.location.href = mailtoLink;
}
