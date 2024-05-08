document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateAge();
});

function calculateAge() {
    var dobInput = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var dob = new Date(dobInput);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    var result = "You are " + age + " years old. ";
    result += "Gender: " + gender.charAt(0).toUpperCase() + gender.slice(1);
    document.getElementById("result").innerText = result;
}
