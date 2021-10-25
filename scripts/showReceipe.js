function showReceipe(food){

    let div  = document.createElement("div");

    let h2 =document.createElement("h2");
    h2.innerText = "Receipe: " + food.strMeal;
    
    let area = document.createElement("h4");
    area.innerText = "Area: " + food.strArea;

    let category = document.createElement("h4");
    category.innerText = "Category: " + food.strCategory;

    
    
    let flex_div = document.createElement("div");
    flex_div.setAttribute("id","flexdiv");

    let showfood = document.getElementById("showfood");

    let img  = document.createElement("img");
    img.src = food.strMealThumb;

    let ip = document.createElement("p");
    ip.innerText="Ingredients";

    ip.setAttribute("class","p");

    let ul1 = document.createElement("ul");

    let li1 = document.createElement("li");
    li1.innerText = food.strIngredient1
    let li2 = document.createElement("li");
    li2.innerText = food.strIngredient2
    let li3 = document.createElement("li");
    li3.innerText = food.strIngredient3
    let li4 = document.createElement("li");
    li4.innerText = food.strIngredient4
    let li5 = document.createElement("li");
    li5.innerText = food.strIngredient5
    let li6 = document.createElement("li");
    li6.innerText = food.strIngredient6
    let li7 = document.createElement("li");
    li7.innerText = food.strIngredient7
    let li8 = document.createElement("li");
    li8.innerText = food.strIngredient8
    let li9 = document.createElement("li");
    li9.innerText = food.strIngredient9
    let li10 = document.createElement("li");
    li10.innerText = food.strIngredient10

    ul1.append(ip,li1,li2,li3,li4,li5,li6,li7,li8,li9,li10);

    let mp = document.createElement("p");
    mp.innerText="Measures";

    mp.setAttribute("class","p");

    let ul2 = document.createElement("ul");

    let Mli1 = document.createElement("li");
    Mli1.innerText = food.strMeasure1
    let Mli2 = document.createElement("li");
    Mli2.innerText = food.strMeasure2
    let Mli3 = document.createElement("li");
    Mli3.innerText = food.strMeasure3
    let Mli4 = document.createElement("li");
    Mli4.innerText = food.strMeasure4
    let Mli5 = document.createElement("li");
    Mli5.innerText = food.strMeasure5
    let Mli6 = document.createElement("li");
    Mli6.innerText = food.strMeasure6
    let Mli7 = document.createElement("li");
    Mli7.innerText = food.strMeasure7
    let Mli8 = document.createElement("li");
    Mli8.innerText = food.strMeasure8
    let Mli9 = document.createElement("li");
    Mli9.innerText = food.strMeasure9
    let Mli10 = document.createElement("li");
    Mli10.innerText = food.strMeasure10

    ul2.append(mp,Mli1,Mli2,Mli3,Mli4,Mli5,Mli6,Mli7,Mli8,Mli9,Mli10);

    let ih2 =document.createElement("h2");
    ih2.innerText = "Receipe Instructions";

    let inst = document.createElement("p");
    inst.innerText = food.strInstructions;
    inst.setAttribute("id","inst");


    div.style.width="800px";
    div.style.margin="auto";
    flex_div.append(img,ul1,ul2)

    div.append(h2,area,category,flex_div,ih2,inst);

    showfood.append(div);
}

export default showReceipe;