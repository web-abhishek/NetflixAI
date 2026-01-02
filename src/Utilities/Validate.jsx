export const checkValidData = (email, password) => {

    // const isValidName = /^[a-zA-Z\s'-]+$/.test(name);
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if (!isValidName) return "Invalid Name";

    if (!isValidEmail) return "Invalid Email";

    if (!isValidPassword) return "Invalid Password";

    // if (!isValidEmail && !isValidPassword) return "Invalid email and password";

    return null;
}