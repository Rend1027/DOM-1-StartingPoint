console.log("Hello! If you see this, the script is working.");

/*

- [check ] Select the section with an id of container without using querySelector.
- [ check] Select the section with an id of container using querySelector.
- [check ] Select all of the list items with a class of "second". 
- [ ] Select a list item with a class of third, but only the list item inside of the ol tag.
- [check ] Give the section with an id of container the text "Hello!".
- [ check ] Add the class main to the div with a class of footer.
- [ check ] Remove the class main on the div with a class of footer.
- [ check] Create a new li element.
- [check ] Give the li the text "four".
- [ check ] Append the li to the ul element.
- [check ] Loop over all of the lis inside the ol tag and give them a background color of "green".
- [ ] Remove the div with a class of footer.
*/









/* Select all of the list items with a class of "second". */
const secondListItems = document.querySelectorAll('.second');



secondListItems.forEach(item => {
    if (item.parentNode.tagName === 'UL') {
        const newli = document.createElement('li'); // Create a new li element.
        newli.textContent = "four"; // Give the li the text "four".
        item.parentNode.append(newli); // Append the li to the ul element.
    }
})


/* Add the class main to the div with a class of footer */
const footerEl = document.querySelector('.footer');
footerEl.classList.add('main');  // add class "main" to the footer div
footerEl.classList.remove('main'); // Remove the class main on the div with a class of footer.





- [check] Select the section with an id of container without using querySelector. (Flo)
- [check] Select the section with an id of container using querySelector. (Flo)
- [ ] Select all of the list items with a class of "second".
- [ ] Select a list item with a class of third, but only the list item inside of the ol tag.
- [check] Give the section with an id of container the text "Hello!". (Flo)
- [ ] Add the class main to the div with a class of footer.
- [ ] Remove the class main on the div with a class of footer.
- [ ] Create a new li element.
- [ ] Give the li the text "four".
- [ ] Append the li to the ul element.
- [cheack] Loop over all of the lis inside the ol tag and give them a background color of "green". (Flo)
- [ ] Remove the div with a class of footer.
*/

//Select the section with an id of container without using querySelector.
const container = document.getElementById("container");
//Give the section with an id of container the text "Hello!". 
const newPTag = document.createElement("p");
newPTag.textContent = "Hello";
container.append(newPTag);
//Select the section with an id of container using querySelector.
const container2 = document.querySelector("#container");
//Loop over all of the lis inside the ol tag and give them a background color of "green".
const olElement= document.querySelector("ol");
[...olElement.children].forEach(li => {
    li.style.backgroundColor = "green"
})





// Try rewriting this without using querySelector
const header = document.querySelector("#container");
// console.log("header", header);
