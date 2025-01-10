function submitForm(submit,isFormValid){
    if(isFormValid){
        console.log("Fields Validated Successfully")
        console.log(submit)
    }
    else{
        console.log("Form Validation Failed!")
        console.log("Form Submission Unsuccessful!")
    }
}
function formValidation(){
    email="sece@sece.ac.in"
    password="1234567"
    if(email==="sece@sece.ac.in" && password){
        return true
    }else{
        return false
    }
}
submitForm("Form Submitted Successfully",formValidation)