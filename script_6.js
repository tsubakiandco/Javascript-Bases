function aaChains (str) {

    let codons = [];

    while (str.length >= 3) { // tant que la chaine de caractere est superieure a 3, on coupe par 3.
      codons.push(str.slice(0,3)); //on met ensuite chaque morceau de 3 dans notre tableau. Slice du 1er element '0' et s'arrete avant le 4e element '3'.
      str = str.slice(3); //on oublie pas de redefinir notre str pour ne pas se  retrouver avec une boucle infinie.
    }
    
    console.log("On checke le tableu de codons : " + codons) //on checke ce qu'il y a dans le tableau de codons.
    
    eachAminoAcid = codons.map( //On va assigner un nom a chaque codon de notre tableau.
      codon => {
        if (["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"].includes(codon)) {
          console.log(codon + " " + ":" + " " + "correspond à la Serine");
          return "Sérine"
        } else if (["CCU", "CCC", "CCA", "CCG"].includes(codon)) {
          console.log(codon + " " + ":" + " " + "correspond à la Proline");
          return "Proline"
        } else if (["UUA", "UUG"].includes(codon)) {
          console.log(codon + " " + ":" + " " + "correspond à la Leucine");
          return "Leucine"
        } else if (["UUU", "UUC"].includes(codon)) {
          console.log(codon + " " + ":" + " " + "correspond à la Phénylalanine")
          return "Phénylalanine"
        } else if (["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"].includes(codon)) {
          console.log(codon + " " + ":" + " " + "correspond à l'Arginine")
          return "Arginine"
        } else if (["UAU", "UAC"].includes(codon)) {
          console.log(codon + " " + ":" + " " + "correspond à la Tyrosine")
          return "Tyrosine"
        } else {
          return 
        }
      }
    );
    console.log(eachAminoAcid); //Pour voir le tableau d'acides aminés.
    return eachAminoAcid.join("-"); //On assemble chaque composant de la chaine.
}

  console.log("Premier ARN - CCGUCGUUGCGCUACAGC");
  console.log("1ere chaine d'acides aminés :"+"\n"+ aaChains("CCGUCGUUGCGCUACAGC"));
  console.log(" ")

  console.log("Deuxieme ARN - CCUCGCCGGUACUUCUCG");
  console.log("2e chaine d'acides aminés :" +"\n"+ aaChains("CCUCGCCGGUACUUCUCG"));