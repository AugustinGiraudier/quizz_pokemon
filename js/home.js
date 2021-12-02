function drawGride(){
    let divGride = document.querySelector("#training-gride");
    let divTable = document.createElement("table");
    divGride.appendChild(divTable);

    let nbrTypes = TabTypes.length;

    let divFirstTR = document.createElement("tr");
    divTable.appendChild(divFirstTR);


    // image dans l'angle
    let divFirstTD = document.createElement("td");
    let divFirstImg = document.createElement("img");
    divFirstImg.src = "./assets/logosTypes/corner.png";
    divFirstImg.className = "tab-img"
    divFirstTR.appendChild(divFirstTD);
    divFirstTD.appendChild(divFirstImg);

    // premiere ligne avec logos
    for(let i_type = 0; i_type < nbrTypes; i_type++){
        let div_TD = document.createElement("td");
        let div_img = document.createElement("img");
        div_img.src = "./assets/logosTypes/" + TabTypes[i_type] + ".png";
        div_img.className = "tab-img"
        divFirstTR.appendChild(div_TD);
        div_TD.appendChild(div_img);
    }

    // Pour chaque ligne :
    for(let x = 0; x < nbrTypes; x++){
        let div_TR = document.createElement("tr");
        div_TR.height = "30px";
        let div_TDImg = document.createElement("td");
        let div_img = document.createElement("img");
        div_img.src = "./assets/logosTypes/" + TabTypes[x] + ".png";
        div_img.className = "tab-img"
        div_TR.appendChild(div_TDImg);
        div_TDImg.appendChild(div_img);
        for(let y = 0; y < nbrTypes; y++){
            let div_TD = document.createElement("td");
            let factor = GetFactorWithId(x,y);
            let bgClass;
            switch(factor){
                case 0.5: bgClass = "bg-half"; break;
                case 0: bgClass = "bg-0"; break;
                case 1: bgClass = "bg-1"; break;
                case 2: bgClass = "bg-2"; break;
            }
            div_TD.className = "gride-slot " + bgClass;
            div_TR.appendChild(div_TD);
        }
        divTable.appendChild(div_TR);
    }

}