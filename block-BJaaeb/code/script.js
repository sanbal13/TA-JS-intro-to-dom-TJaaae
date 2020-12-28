/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/
function createInputElm(label, type = "text") {
    let  label1 = document.createElement('label');
    let input = document.createElement(`input`);
    input.type = type;
    label1.innerText = `${label}:  ${input}`;
    return label1;
}

// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
function createInputElm(label, type = "text") {
  let  str = `<label>${label}: <input type="${type}"></label>`
  return str;
}

// TEST
createInputElm('Your name') //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number') //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(arr){
  let ul = document.createElement('ul');
  for(let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerText =arr[i];
    ul.append(li);
  }
  return ul;
}

// TEST
 //console.log(createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']));
 //console.log(createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']));

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(arr){
  let ul = document.createElement('ul');
  let li;
  for(let i = 0; i < arr.length; i++) {
    li = document.createElement('li');

    let p = document.createElement('p');
    p.innerText = arr[i].name;
    li.append(p);

    let input = document.createElement('input');
    input.type = "checkbox";
    input.setAttribute('checked',"");
    input.name=" ";
    input.id=" ";
    li.append(input);

    let span = document.createElement('span');
    span.innerText = arr[i].isDone === true ? 'Y' : 'X';
    li.append(span);

    ul.append(li);
  } 
  console.log(ul);
}

// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
