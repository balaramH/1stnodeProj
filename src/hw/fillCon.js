function validateForm() {
    var x = document.forms["myForm"]["name"]["address"]["email"]["phone"].value;
    if (x == "" || x == null) {
        alert("All field must be filled out");
        return false;
    }
}