let userName=document.getElementById("userName");
let nameErr=document.getElementById("nameErr");
let id1=document.getElementById("id1");
let id1Err=document.getElementById("id1Err");
let cgpa=document.getElementById("cgpa");
let cgpaErr=document.getElementById("cgpaErr")
let ccredit=document.getElementById("ccredit");
let ccreditErr=document.getElementById("ccreditErr");
let dept=document.getElementById("dept");
let deptErr=document.getElementById("deptErr");
let excelCB=document.getElementById("excelCB");
let webdevCB=document.getElementById("webdevCB");
let djangoCB=document.getElementById("djangoCB");
let mlCB=document.getElementById("mlCB");
let skill=document.getElementById("skill");
let skillErr=document.getElementById("skillErr");
let selectskill="";
let maleRB=document.getElementById("maleRB");
let femaleRB=document.getElementById("femaleRB");
let genderErr=document.getElementById("genderErr");
let selectedGender="";

let idRegex=/^[a-zA-z0-9]{8,20}$/;
let cgpaRegex=/^[0-4]\.\d{2}$/;
let userNameRegex=/^[a-zA-Z]+$/;
let numRegex=/^(0?[1-9]|[1-9][0-9]|1[0-9]{2}|200)$/;

let isValidated=false;

function myFunction(){
    document.getElementById("myForm").reset();
}

function validationForm(){
    if(userNameRegex.test(userName.value)){
        isValidated=true;
    }
    else{
        isValidated=false;
        nameErr.innerHTML="Please Provide user name";
        nameErr.style.color="red";
    }
    if(idRegex.test(id1.value)){
        isValidated=true;
    }
    else{
        isValidated=false;
        id1Err.innerHTML="Please provide id";
        id1Err.style.color="red";
        
    }
    if(cgpa.value){
        isValidated=true;
    }
    else{
        isValidated=false;
        cgpaErr.innerHTML="Please provide your cgpa";
        cgpaErr.style.color="red";
    }
    if(numRegex.test(ccredit.value)){
        isValidated=true;
    }
    else{
        isValidated=false;
        ccreditErr.innerHTML="Please provide your completed credit number: ";
        ccreditErr.style.color="red";
    }
    if(dept!=""){
        isValidated=true;
    }
    else{
        isValidated=false;
        deptErr.innerHTML="Please choose your  department";
        deptErr.style.color="red";
    }
    if(excelCB.checked||djangoCB.checked||webdevCB.checked||mlCB.checked){
        isValidated=true;
        if(excelCB.checked){
            selectskill=excelCB.value;
        }
        if(djangoCB.checked){
            selectskill=selectskill+","+djangoCB.value;
        }
        if(webdevCB.checked){
            selectskill=selectskill+","+webdevCB.value;
        }
        if(mlCB.checked){
            selectskill=selectskill+","+mlCB.value;
        }

    }
    else{
        isValidated=false;
        skillErr.innerHTML="Please select at least one skill";
        skillErr.style.color="red";
    }
    if(maleRB.checked||femaleRB.checked){
        if(maleRB.checked){
            selectedGender=maleRB.value;
        }
        if(femaleRB.checked){
            selectedGender=femaleRB.value;
        }
    }
    else{
        isValidated=false;
        genderErr.innerHTML="Please select your gender";
        genderErr.style.color="red";
    }

    if(isValidated){
        alert("userName: " + userName.value+" "+"id: "+id1.value+" "+"CGPA: "+cgpa.value+" "+"Credit Completed: "+ccredit.value+" "+"department: "+dept.value +" "+"Selected skill: "+selectskill+" "+"Gender: "+selectedGender);
        return true;
    }
    else{
        return false;
    }
}