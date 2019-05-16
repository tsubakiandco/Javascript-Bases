  function teenBot(){
    question = prompt("Tu peux parler a l'Acné-bot!");
  if (question.indexOf("?") !== -1) { //si il y a un ? dans notre question
    console.log("Ouais Ouais...");
  }else if (question === question.toUpperCase() && question !== "") {//detecte la phrase en MAJ
    console.log("Pwa, calme-toi...");
  }else if (question.toLowerCase().indexOf("fornite") !== -1) {
    console.log("on s' fait une partie soum-soum ?");
  }else if (question === "") {
    console.log("t'es en PLS ?");
  }else {
    console.log("balek");
  }
}

teenBot();