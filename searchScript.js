appendSearchFood = function (food) {
    if (food === undefined) {

        return false
    }
    foods_div = document.getElementById("foods");
    foods_div.style.display = "flex";
    foods_div.style.backgroundColor = "white";
    // foods_div.innerHTML = null;

        let p = document.createElement("p");
        p.innerText = food.strMeal;

        let img = document.createElement("img");
        img.src = food.strMealThumb;
        img.style.width = "50px";


        p.onclick = function () {
            localStorage.setItem("receipe",JSON.stringify(food));
            window.location.href="showReceipe.html";
        }

        foods_div.append(img,p);
    
}