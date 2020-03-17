let pageCounter = 1;
let animalContainer = document.getElementById('animal-info');
let btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    let ourRequest = new XMLHttpRequest();

    ourRequest.open("GET", 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function () {
        let ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    }
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    let htmlString = "";

    data.forEach(element => {
        htmlString += "<p>" + element.name + " is a " + element.species + " that likes to eat ";
        for (i = 0; i < element.foods.likes.length; i++) {
            if (i == 0) {
                htmlString += element.foods.likes[i];
            }else{
                htmlString += " and " + " " + element.foods.likes[i];
            }
        }

        htmlString += " and dislikes ";

        for (i = 0; i < element.foods.dislikes.length; i++) {
            if (i == 0) {
                htmlString += element.foods.dislikes[i];
            }else{
                htmlString += " and " + " " + element.foods.dislikes[i];
            }
        }

        htmlString += "." + "</p>"
    });

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
};