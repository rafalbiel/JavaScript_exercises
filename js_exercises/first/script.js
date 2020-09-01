let form = document.querySelector("form");
let name = document.querySelector("#name");
let surname = document.querySelector("#surname");
let age = document.querySelector("#age");

let myTable = document.querySelector("#my-Table")


let pole = [];

function refreshTable(){

    let newRow = document.createElement("tr");
    newRow.innerHTML = '<td>'+name.value+'</td><td>'+surname.value+'</td><td>'+age.value+'</td><td><input type="button" value="UsuÅ„"></td>';
    let add = document.getElementById('my-Table');
    add.appendChild(newRow);

}


form.addEventListener("submit", function (event) {
    event.preventDefault();

    let person = {
        name: name.value,
        surname: surname.value,
        age: age.value
    }

    refreshTable();

    pole.push(person);
    console.log(pole);



});
form.addEventListener("button", function (event) {
    event.preventDefault();

    console.log(pole);
});