
// Referencia a la lista de tareas
const list = document.getElementById('list');

// Refiere al template
const templateRow = document.getElementById('contentRow').content;


const inputName = document.getElementById('inputName');
const inputNameHelp = document.getElementById('inputNameHelp');
const inputNameFormGroup = inputUsernameHelp.parentElement;
const inputSurname = document.getElementById('inputSurname');
const inputSurnameHelp = document.getElementById('inputSurnameHelp');
const inputSurnameFormGroup = inputSurnameHelp.parentElement;
const inputUsername = document.getElementById('inputUsername');
const inputUsernameHelp = document.getElementById('inputUsernameHelp');
const inputUsernameFormGroup = inputUsernameHelp.parentElement;
const createUserFormContent = document.getElementById('createUser');


 //AGREGAR ROW
 @param {*} nombre
 @param {*} apellido
 

 function addRow(id, nombre, apellido, task) {
 const row =templateRow.cloneNode(true);

  // Modifico el valor del nodo de texto por el ingesado por el usuario
row.querySelector('.txtTask').innerText = task;
row.querySelector('.txtDescription').innerText = description;


row.querySelector('.btnEdit').addEventListener('click', () => updateTask());

row.querySelector('.row').dataset.id = id;

  // Inserto en el contenido de la tabla
contentTable.appendChild(row);
}


// Cargar datos de la tabla
// async function loadTable() {
//  if (localStorage.getItem('token')) {
//    contentTable.innerHTML = '';
//    const data = await api('get', '/users');
//    data.forEach(({ name, age, id, tasks }) => addRow(name, age, id, tasks));
//  }
// }

// Inicio de la APP.
async function initApp() {
  await loadTable();
}

// Crear usuario.

async function createUser() {
  const nombre = inputNombre.value;
  const apellido = inputApellido.value;
  const email = inputEmail.value;
  const password = inputPassword.value;

 resetFormErrors();

  const response = await api('post', '/users', {
    name,
    apellido,
    password,
    email,
 });

  if (response.errors) {
    updateFormErrors(response.errors);
 } else {
   createUserForm.reset();
   loadTable();
  }
}


