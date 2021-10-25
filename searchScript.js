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


appendLatest = function(foods){
    for(let key in foods){
        let latest = document.getElementById("latest");
        let div = document.createElement("div");

        

        let name = document.createElement("p");
        name.innerText = foods[key].strCategory;
        
        let img = document.createElement("img");
        img.src = foods[key].strCategoryThumb;
        img.style.width = "100%";

        let des = document.createElement("p");
        des.innerText = foods[key].strCategoryDescription;

        div.append(img,name,des);

        latest.append(div);

    }

}

