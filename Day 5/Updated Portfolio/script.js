/* =====================
   Typing Animation
===================== */

const words = [

    "Frontend Developer",
    "Web Developer",
    "Tech Enthusiast",
    "Computer Engineering Student"

];

let wordIndex = 0;

const typing =
document.getElementById("typing");

function changeText(){

    typing.style.opacity = "0";

    setTimeout(()=>{

        typing.innerHTML =
        words[wordIndex];

        typing.style.opacity = "1";

        wordIndex++;

        if(
            wordIndex >= words.length
        ){
            wordIndex = 0;
        }

    },300);

}

changeText();

setInterval(
    changeText,
    2500
);


/* =====================
   Scroll Reveal
===================== */

const cards =
document.querySelectorAll(".card");

function revealCards(){

    cards.forEach(card=>{

        const top =
        card.getBoundingClientRect().top;

        const visible =
        window.innerHeight - 100;

        if(top < visible){

            card.style.opacity = "1";

            card.style.transform =
            "translateY(0)";
        }

    });

}

window.addEventListener(
    "scroll",
    revealCards
);

revealCards();


/* =====================
   Initial Card State
===================== */

cards.forEach(card=>{

    card.style.opacity = "0";

    card.style.transform =
    "translateY(60px)";

    card.style.transition =
    "all 0.8s ease";

});


/* =====================
   Skill Bar Animation
===================== */

window.addEventListener(
    "load",
    ()=>{

        document
        .querySelector(".html")
        .style.width = "95%";

        document
        .querySelector(".css")
        .style.width = "90%";

        document
        .querySelector(".js")
        .style.width = "85%";

    }
);


/* =====================
   Smooth Navbar Scroll
===================== */

document
.querySelectorAll(
'a[href^="#"]'
)

.forEach(anchor=>{

    anchor.addEventListener(
        "click",

        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute(
                    "href"
                )
            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    );

});


console.log(
"Portfolio Loaded Successfully 🚀"
);