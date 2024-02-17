// work experience

function addNewWorkExeField() {
    
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('rows', '3');
    newNode.setAttribute("placeholder",'Enter here')


    let workExeOb=document.getElementById('workExp')
    let weAddButtonOb = document.getElementById('weAddButton') 
    
    workExeOb.insertBefore(newNode, weAddButtonOb)

}

//Academic quaification

function addNewAcaQalField() {
    let newNode1 = document.createElement('textarea')
    newNode1.classList.add('form-control');
    newNode1.classList.add('aqField');
    newNode1.classList.add("mt-2");
    newNode1.setAttribute('rows', '3');
    newNode1.setAttribute("placeholder", 'Enter here')
    
    let workExeOb=document.getElementById('addQualifation')
    let aqAddButtonOb = document.getElementById('aqAddButton') 
    
    workExeOb.insertBefore(newNode1, aqAddButtonOb)
}

// generate the cv

function generateCV() {
    let nameField = document.getElementById('nameField').value;

    let nameTemp1 = document.getElementById('nameTemp1');

    nameTemp1.innerHTML = nameField;
     //header name
    document.getElementById("nameTemp2").innerHTML = nameField;

    //for contact details
    document.getElementById("contactTemp").innerHTML = document.getElementById("contactField").value;

    //for address
    document.getElementById("addressTemp").innerHTML = document.getElementById("addressField").value;
    
    //for fb insta linkedin
    document.getElementById("fbTemp").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaTemp").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkedinTemp").innerHTML = document.getElementById("linkedField").value;
    

    //for objective field
    document.getElementById('objectiveTemp').innerHTML = document.getElementById("objectiveField").value;


    //for work experience
    let workExpS = document.getElementsByClassName('weField');
    let str = '';
    for (let e of workExpS)
    {
        str=str+`<li>${e.value}</li>`
        
    }
    document.getElementById('workExpTemp').innerHTML = str;


    //for academic qualification
    let academicQuals = document.getElementsByClassName('aqField');
    let str1 = '';
    for (let e of academicQuals)
    {
        str1 = str1 + `<li>${e.value}</li>`;
        }
    document.getElementById('academQualTemp').innerHTML = str1;
    
    //for set the image in template
    let file = document.getElementById('imgField').files[0];
    console.log(file);
   //to create a reader to read the file
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    //set the image into template
    reader.onloadend = function () {
        document.getElementById('imgTemplate').src=reader.result;
    };


    //hide cv form
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';



}

//print the cv

function printCV() {
    window.print();
}