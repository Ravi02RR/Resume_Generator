function addnewSkill() {
    let newNOde = document.createElement('textarea');
    newNOde.classList.add("form-control");
    newNOde.classList.add('skField');
    newNOde.classList.add('mt-2');
    newNOde.setAttribute("row", 1);
    newNOde.setAttribute("placeholder", "Enter here......");

    let skill = document.getElementById("sk");
    let skillbtn = document.getElementById('skbtn');

    skill.insertBefore(newNOde, skillbtn);


} function addNewwe() {
    let newNOde = document.createElement('textarea');
    newNOde.classList.add("form-control");
    newNOde.classList.add('weField');
    newNOde.classList.add('mt-2');
    newNOde.setAttribute("row", 1);
    newNOde.setAttribute("placeholder", "Enter here......");

    let wrke = document.getElementById("we");
    let wrkebtn = document.getElementById('webtn');

    wrke.insertBefore(newNOde, wrkebtn);

}

function addNewyq() {
    let newNOde = document.createElement('textarea');
    newNOde.classList.add("form-control");
    newNOde.classList.add('yqField');
    newNOde.classList.add('mt-2');
    newNOde.setAttribute("row", 1);
    newNOde.setAttribute("placeholder", "Enter here......");

    let wrke = document.getElementById("yq");
    let wrkebtn = document.getElementById('yqbtn');

    wrke.insertBefore(newNOde, wrkebtn);

}

function addNewpj() {
    let newNOde = document.createElement('textarea');
    newNOde.classList.add("form-control");
    newNOde.classList.add('pjField');
    newNOde.classList.add('mt-2');
    newNOde.setAttribute("row", 1);
    newNOde.setAttribute("placeholder", "Enter here......");

    let pje = document.getElementById("pj");
    let pjebtn = document.getElementById('pjbtn');

    pje.insertBefore(newNOde, pjebtn);

}

function genrateCV() {
    let nameField = document.getElementById("nameField").value;
    let namet1 = document.getElementById("nameT1");
    namet1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("adressT").innerHTML = document.getElementById("adressField").value;
    document.getElementById("linkT").textContent = document.getElementById("linkField").value;
    document.getElementById("gitT").textContent = document.getElementById("gitField").value;




    // skill,work,qualification,project
    let sks = document.getElementsByClassName("skField");

    let str = "";



    for (let e of sks) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("skT").innerHTML = str;









    let we = document.getElementsByClassName("weField");

    let str1 = "";



    for (let e of we) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str1;









    let cf = document.getElementsByClassName("yqField");

    let str3 = "";



    for (let e of cf) {
        str3 = str3 + `<li> ${e.value} </li>`;
    }

    document.getElementById("yqT").innerHTML = str3;



    let proj = document.getElementsByClassName("pjField");

    let str2 = "";



    for (let e of proj) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }

    document.getElementById("pjT").innerHTML = str2;


    let img = document.getElementById('imgd').files[0]
    let reader = new FileReader();
    reader.readAsDataURL(img);

    reader.onloadend = function () {
        document.getElementById("imgT").src = reader.result;
    }


    document.getElementById("gen-form").style.display = "none";
    document.getElementById("gen-templet").style.display = "block";








}

function resprint() {
    window.print();
}


