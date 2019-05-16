let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let i;
function halfPyramid() {
	for (i = 1; i <= floors; i++) {
    console.log(" ".repeat(floors - i) + "#".repeat(i));
  }
}

halfPyramid(floors);


