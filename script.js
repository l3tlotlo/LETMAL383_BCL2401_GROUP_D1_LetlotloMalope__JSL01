function validateSyntax() {
    const input = document.getElementById("petInput").value;
    const resultMessage = document.getElementById("result");

    // Regular expression to match the desired syntax
    const regex = /^pet_[a-zA-Z0-9]+$/;

    // Check if the input matches the regular expression
    if (regex.test(input)) {
        resultMessage.innerHTML = "Valid Syntax" + '<span style="color:green; font-size:60px;">&#x25cf</span>';
    } else {
        resultMessage.innerHTML = "Invalid Syntax" + '<span style="color:red; font-size:60px;">&#x25cf</span>';
    }
}