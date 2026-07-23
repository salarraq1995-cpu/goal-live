const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => {
            t.classList.remove("active");
        });

        tab.classList.add("active");

    });

});



const search = document.querySelector(".search");
const cards = document.querySelectorAll(".card");


search.addEventListener("input", () => {

    let value = search.value.toLowerCase();


    cards.forEach(card => {

        let text = card.innerText.toLowerCase();


        if(text.includes(value)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });


});
