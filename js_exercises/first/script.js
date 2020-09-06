let form = document.querySelector("#data");
let name = document.querySelector("#name");
let surname = document.querySelector("#surname");
let age = document.querySelector("#age");
let myTableBody = document.querySelector("#my-Table")

let filtrationForm = document.querySelector("#filter");
let key = document.querySelector("#key");

let myStorage = localStorage;
let pole = [];


if (myStorage.getItem("newElement")) {
    pole = JSON.parse(myStorage.getItem("newElement"));
}
refreshTable();

function refreshTable() {

    myTableBody.innerHTML = "";
    for (let i = 0; i < pole.length; i++) {
        let stringToBeCompared = pole[i].name + pole[i].surname;
        if (stringToBeCompared.includes(key.value) || key.value === null) {
            let newRow = document.createElement("tr");
            newRow.innerHTML = `<td>${pole[i].name}</td><td>${pole[i].surname}</td><td>${pole[i].age}</td><td><input type="button" class="btnUsun" value="Delete"></td><br>`;
            let btnUsun = newRow.querySelector(".btnUsun");

            btnUsun.addEventListener("click", function (event) {
                event.preventDefault();
                pole.splice(i, 1);
                myStorage.setItem("newElement", JSON.stringify(pole));
                refreshTable();
            })

            let add = document.getElementById('my-Table');
            add.appendChild(newRow);
        }
    }

}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let person = {
        name: name.value,
        surname: surname.value,
        age: age.value
    }
    pole.push(person);
    myStorage.setItem("newElement", JSON.stringify(pole));
    refreshTable();
});


filtrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    refreshTable();
})