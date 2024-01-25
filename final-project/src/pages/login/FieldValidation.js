// validation.js
export const validateSignUp = (field, value) => {
    switch (field) {
      case "first_name":
        return value ? '' : 'First Name is required';
      case "last_name":
        return value ? '' : 'Last Name is required';
      case "email":
        return value ? '' : 'Email is required';
      case "password":
        return value ? '' : 'Password is required';
      case "username":
        return value ? '' : 'Username is required';
      case "birth_date":
        return value ? '' : 'Birth Date is required';
      case "mobile":
        return value ? '' : 'Mobile Number is required';
      default:
        return '';
    }
  };
  
  export const validateSignIn = (field, value) => {
    switch (field) {
      case "email":
        return value ? '' : 'Email is required';
      case "password":
        return value ? '' : 'Password is required';
      default:
        return '';
    }
  };
  