document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
    
    form.addEventListener("submit", (event) => {
        
        event.preventDefault();
        
        const { email, password } = form.elements;
        
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        
        
        if (!emailValue || !passwordValue) {
            alert("Bütün alanlar dolu olmalıdır");
            return; 
        }
        
        
        const formData = {
            email: emailValue,
            password: passwordValue
        };
        
        
        console.log(formData);
        

        form.reset();
    });
});
