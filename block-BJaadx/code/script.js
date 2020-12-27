// 1. Change the title of the page to `Hello AltCampus!`
document.title = "Hello AltCampus";
// 2. Select the element using the children property:

//    - Select the `h1` element and change the value to `Learning DOM`
let h1 = document.children[0].children[1].children[0];
h1.innerText = "Learning DOM";

//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
let li = document.children[0].children[1].children[5].children[0];
li.innerText = "all about document";
//    - Select the input element with name `email`
document.children[0].children[1].children[6].children[2];

// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
let liGroup = document.children[0].children[1].children[5].children;
for(let ele of liGroup){
    console.log(ele.children.length);
  }

// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let email = document.querySelector("input");
console.log(email);

// 5. Select the ul element using class selector and store in `topics`
let topics = document.querySelector(".topics");
console.log(topics);

// 6. Select the first label element and store in `label`
let label = document.querySelector("label");
console.log(label);

// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
let inputCheckbox = document.querySelector("#remember");
console.log(inputCheckbox);

// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
let password = document.querySelector("input[type=password]");
console.log(password);


// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`
let attrPassword = document.querySelector("input[placeholder=password]");
console.log(attrPassword);

// 10. Select all the `li` element and store in `allTopics`
let allTopics = document.querySelectorAll("li");
console.log(allTopics);

// 11. Select all the input element of any type and store in `allInput`
let allInput = document.querySelectorAll("input");
console.log(allInput);

// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
document.querySelectorAll("li").forEach((ele) => {
  console.log(ele.innerText);
});

// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
let listOfSelectedTopics = document.querySelectorAll(".list");
console.log(listOfSelectedTopics);

// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
let firstli = document.querySelector('ul>li');
console.log(firstli);

// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
let imagesList = document.querySelectorAll("img");
console.log(imagesList.length);
// 16. Select all the `p` element and store in `allPElement`
let allPElements = document.querySelectorAll("p");
console.log(allPElements);

// 17. Select all the buttons and log the count of buttons.
let buttons = document.querySelectorAll("input[type=submit]");
console.log(buttons.length);

// 18. Select all the `label` element and log the count.
let noOfLabels = document.querySelectorAll("label").length;
console.log(noOfLabels);

// 19. Select all the elements with `id` of `test`
let idTest = document.querySelectorAll('#test');
console.log(idTest);

// 20. Select the first element with id `test` using `getElementById`
let idTestFirst = document.getElementById('test');
console.log(idTestFirst);
// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.
console.log(topics.parentElement);
// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.
console.log(topics.nextElementSibling);

// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.
topics.previousElementSibling.innerText = 'Learning About Walking the DOM';


// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.
topics.firstElementChild.innerText = `This is the first child element`

// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.
console.log(typeof topics.lastElementChild);

// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.
let fieldsetElm = document.querySelector("fieldset");
console.log(fieldsetElm);
// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
console.log(typeof fieldsetElm.parentElement);
