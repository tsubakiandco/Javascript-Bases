let number = "";

number = prompt('De quel nombre veut tu calculer la factorielle ?')

function factor(number) {
  if (number < 0) 
        return -1;
  else if (number == 0) 
      return 1;
  else {
      return (number * factor(number - 1));
  }
}
console.log(`Le resultat est :${factor(number)}`);
