{/* <li class = box>
    <div class ="heading">
        <img src=""
            alt="">
        <h2>
            Name              
        </h2> 
    </div> 
    <p>
        description
    </p>  
    <button>
        Learn More!
    </button>
</li> */}

let ul = document.querySelector("ul");
got.houses.forEach((house) => {
    house.people.forEach((person) =>{
     let li = document.createElement("li");
     li.classList.add("box");
     let div = document.createElement("div");
     div.classList.add("heading");
     div.classList.add("flex");
     let img = document.createElement('img');
     img.src = person.image;
     img.alt = person.name;
     let h2 = document.createElement('h2');
     h2.innerText = person.name;
     div.append(img, h2)
     let p = document.createElement('p');
     p.innerText = person.description;
     let a = document.createElement('a');
     a.href =person.wikiLink;
     let button = document.createElement('button');
     button.textContent = "Learn More!";
     a.append(button);
     div.append(img, h2);
     li.append(div, p, a);    
     ul.append(li);
    });
});
