const touches = [...document.querySelectorAll(".button")];
const listekeycode = touches.map(touches => touches.dataset.key);

document.addEventListener("keydown", (e)=>{
    const valeur = e.keyCode.toString();
    calculer(valeur);
})
document.addEventListener('click', (e)=>{
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) =>{
    if(listekeycode.includes(valeur)){
        switch (valeur){
            case '8':
                ecran.textContent = "";
                break;
                case '13':
                    const calcul = eval(ecran.textContent);
                    ecran.textContent = calcul;
                    break;
                    default:
                        const indexKeycode =listekeycode.indexOf(valeur);
                        const touche = touche(indexKeycode);
                        ecran.textContent += touche.innerHTML;
        }
        
    }
}

window.addEventListener('error', (e)=>{
    alert("une erreur est survenue dans votre calcul : " + e.message);
})