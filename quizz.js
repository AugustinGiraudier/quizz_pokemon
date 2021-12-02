/*
3 niveaux :
    * 1 type -> trouver les supers efficace
    * 1 type -> trouver toutes les conséquences (super, affecte pas...)
    * 2 types -> tout trouver
*/

function DrawAnswerGride(){

    let divGride = document.querySelector("#answer-gride");
    let divTable = document.createElement("table");
    divGride.appendChild(divTable);

    let nbrTypes = TabTypes.length;

    let divFirstTR = document.createElement("tr");
    divTable.appendChild(divFirstTR);

    // premiere ligne avec logos
    for(let i_type = 0; i_type < nbrTypes; i_type++){
        let div_TD = document.createElement("td");
        let div_img = document.createElement("img");
        div_img.src = "./assets/logosTypes/" + TabTypes[i_type] + ".png";
        div_img.className = "tab-img";
        divFirstTR.appendChild(div_TD);
        div_TD.appendChild(div_img);
    }

    let divSecondTR = document.createElement("tr");
    divTable.appendChild(divSecondTR);
    // seconde ligne avec reponses
    for(let i_type = 0; i_type < nbrTypes; i_type++){
        let div_TD = document.createElement("td");
        div_TD.className = "gride-slot bg-1";
        div_TD.addEventListener("click",event => {
            if(div_TD.classList.contains("bg-1")){
                div_TD.classList.remove("bg-1");
                div_TD.classList.add("bg-2");
            }
            else{
                div_TD.classList.remove("bg-2");
                div_TD.classList.add("bg-1");
            }
        });
        divSecondTR.appendChild(div_TD);
    }
}