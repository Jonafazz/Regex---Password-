function CheckPassword() {
    let result = document.getElementById("validimi");
    let emailInput = document.getElementById("inputi").value;
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$/.test(emailInput)) {
        result.innerHTML = "Pasword is trong";
        result.style.color = 'green';
    }
    else {
        result.innerHTML = "Password is weak";
        result.style.color = 'red';
    }
    //^ -  tregon me qka duhet me fillu
    // ?=.*   - e kqyr a e ka perdore te pakten ndonje ...
    //.{8,} - qikjo e kqyr a e ka te pakten 8 karaktere
}