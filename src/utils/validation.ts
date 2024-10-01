// Validate email format using a regular expression
export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };
  
  // Validate password format
  // Password must have at least 8 characters, one uppercase letter, one number, and one special character
  export const validatePassword = (password: string): boolean => {
    const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return re.test(password);
  };
  