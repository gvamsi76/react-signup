export default function validateInfo (values) {
    let errors ={}

    // user name 
    if(!values.username.trim()){
        errors.username ="username requrired"
    }
    //Email
    if(!values.email){
        errors.email ="Email required"
    }else if(!/^[A-Z0-9,_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email ="Email address is invalide"
    }
    //possword
    if(!values.password){
        errors.password ="Password Required"
    }else if(values.password.length < 6){
        errors.password ="Password needs to be 6 charecters or more";
    }
    // conform possword
    if(!values.password2){
        errors.password2 ="Password do not match"
    }else if(values.password2 !==values.password){
        errors.password2 ="Password is requried";
    }
    return errors;
}
