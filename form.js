const form = document.getElementById('form');
const nam = document.getElementById('name');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const adrs = document.getElementById('address');
const zip = document.getElementById('zip');

var validName,
    validLastName,
    validAge,
    validGender,
    validAddress,
    validZip;



// Event listener

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkInputs();
   // getFormData(event);
    //createTable();
    if(validName != undefined && validLastName != undefined && validAge != undefined && validGender != undefined && validAddress != undefined && validZip != undefined){
        GenerateTable()

    }
});


// ============== Reseet Page ==============

//window.location.reload(true);

// form.addEventListener('reset', (event) => {
//     window.location.reload(true);
// });


function checkInputs() {
    // Get the values from the inputs
    const namValue = nam.value.trim();
    const lastNameValue = lastName.value.trim();
    const ageValue = age.value.trim();
    const genderValue = gender.value.trim();
    const adrsValue = adrs.value.trim();
    const zipValue = zip.value.trim();

    // Validation

    if (namValue === '') {
        // show error
        // add error class
        setErrorFor(nam, 'Username cannnot be empty!');
    } else {
        // console.log(namValue.charAt(0));
        const first = namValue.charAt(0);
        if ((first >= 'a' && first <= 'z') || (first >= 'A' && first <= 'Z')) {
            // console.log(first);
            setSuccessFor(nam);
            validName = namValue;

        } else {
            setErrorFor(nam, 'First letter of the name should be a character!');
        }
        // add success class
    }

    if (lastNameValue === '') {
        // show error
        // add error class
        setErrorFor(lastName, 'Last Name cannot be empty!');
    } else {
        const first = lastNameValue.charAt(0);
        if ((first >= 'a' && first <= 'z') || (first >= 'A' && first <= 'Z')) {
            // console.log(first);
            setSuccessFor(lastName);
            validLastName = lastNameValue;

        } else {
            setErrorFor(lastName, 'First letter of the last-name should be a character!');
        }
    }
    // ============= Age ==========
    if (ageValue === '') {
        // show error
        // add error class
        setErrorFor(age, 'Age cannot be empty!');
    } else if (isNaN(ageValue)) {
        setErrorFor(age, 'Age should be in number!');

    } else if (ageValue < 0 || ageValue > 114) {
        setErrorFor(age, 'Age should be between 0 and 114');

    } else {
        // add success class
        setSuccessFor(age);
        validAge = ageValue;
    }
    if (genderValue === '') {
        // show error
        // add error class
        setErrorFor(gender, 'Please select gender!');
    } else {
        // add success class
        setSuccessFor(gender);
        validGender = genderValue;
    }

    //=============== Validation for Address ==============
    if (adrsValue === '') {
        // show error
        // add error class
        setErrorFor(adrs, 'Please select address!');
    } else {
        // add success class
        setSuccessFor(adrs);
        validAddress = adrsValue;
    }
    // ==================== Validation for Zip =============
    if (zipValue === '') {
        // show error
        // add error class
        setErrorFor(zip, 'Zip cannot be empty!');
    } else if (isNaN(zipValue)) {
        setErrorFor(zip, 'Zip should be in number!');
    } else {
        // console.log(adrsValue);
        if (adrsValue == 'us') {
            // console.log(adrsValue);
            if (/^\d{5}$/.test(zipValue)) {
                setSuccessFor(zip);
                validZip = zipValue;
            } else {
                setErrorFor(zip, 'Plese enter 5 digit zip-code for US!');
            }
        }

        if (adrsValue == 'canada') {
            if (/^\d{6}$/.test(zipValue)) {
                setSuccessFor(zip);
            } else {
                setErrorFor(zip, 'Please enter 6 digit zip-code for Canada!');
            }
        }

    }




    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        // console.log(formControl);
        const small = formControl.querySelector('small');

        // Add error message inside small tag
        small.innerText = message;

        // add error class
        formControl.className = 'col-md-6 error';
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'col-md-6 success';
    }


}


// ================= Form Data ====================

// const container = document.querySelector('.container'),
//     form1 = document.querySelectorAll('.form'),
//     submittedInputs = form1[0].querySelector('button[type="submit"]');
//     var formData = new FormData(form1[0]);


// function getFormData(event) {
//     event.preventDefault();

//     var formData = new FormData(form1[0]);

//     alert(formData.get('name') + ' - ' + formData.get('lastName'));
//     console.log(formData.get('name'));
// }

// document.addEventListener('DOMContentLoaded', function() {
//     submittedInputs.addEventListener('click', getFormData, false);
// }, false);

// ================ Function to Create Table =========================

// var tableArea = document.getElementById('divTable'),
//     table = document.createElement('table');

// let i = 0;
// function createTable() {
//     tr[i] = document.createElement('tr');
//     var td1 = document.createElement('td');
//     var td2 = document.createElement('td');
//     td1.appendChild(document.createTextNode('Text1'));
//     td2.appendChild(document.createTextNode('Text2'));
//     tr[i].appendChild(td1);
//     tr[i].appendChild(td2);
//     table.appendChild(tr[i]);
//     tableArea.appendChild(table);
//     i++;
// }

// =============== Dynamically Generate Table =====================
var exist = false;

function GenerateTable(){
    var customers = new Array();
    var table = document.createElement("TABLE");
    table.border = "1";
    var row;
    var columnCount;
    console.log(exist);
    console.log(table);
    if(!exist)
    {
        exist = true;
        customers.push(["Full Name", "Age", "Gender", "Address", "Zip-code", "Action"]);
        alert(validName +" "+ validLastName+" "+ validAge + " " + validGender + " " + validAddress + " " + validZip);
        
        
 
        //Get the count of columns.
        columnCount = customers[0].length;
 
        //Add the header row.
        row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = customers[0][i];
            row.appendChild(headerCell);
        }

    }
    
        customers.push([validName, validAge, validGender, validAddress, validZip]);
        // customers.push([2, "Mudassar Khan", "India"]);
        // customers.push([3, "Suzanne Mathews", "France"]);
        // customers.push([4, "Robert Schidner", "Russia"]);
 
        //Create a HTML Table element.
        
 
        //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = customers[i][j];
            }
        }
 
        var dvTable = document.getElementById("divTable");
        //dvTable.innerHTML = "";
        dvTable.appendChild(table);

}


// ===================== Delete Button =================

function Delete() {
    var table = document.getElementById("table");
    table.Delete;
}