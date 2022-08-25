const path = require('path');

const file = "./assets/content/hello.txt";

console.log(`file: ${file}`);
console.log(`dirname(): ${path.dirname(file)}`);
console.log(`basename(): ${path.basename(file)}`);
console.log(`extname(): ${path.extname(file)}`);

console.log(`Séparateur système: ${path.sep}`);

const image = path.join('assets', 'images', 'image.png');

console.log(`Chemin vers mon image: ${image}`);

const absImage = path.join(__dirname, 'assets', 'images', 'image.png');

console.log(`Chemin absolu vers mon image: ${absImage}`);

console.log(path.resolve(image)); // résout le hemin pour obtenir le chemin absolu




