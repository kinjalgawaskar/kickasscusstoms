const imageArray = [
  "https://d2w9rnfcy7mm78.cloudfront.net/21302494/original_72c1c4e532efc277b3b32bcdd453252a.jpg?1680976143?bc=0",
  "https://d2w9rnfcy7mm78.cloudfront.net/21302537/original_40782efead47dd3e2bf8cebd48aa7752.jpg?1680976297?bc=0",
  "https://d2w9rnfcy7mm78.cloudfront.net/21302346/original_2447712e5b49a076bb973382c1736f70.jpg?1680975054?bc=0",
  "https://d2w9rnfcy7mm78.cloudfront.net/21302323/original_337112a03535b5c41173593ca0bb0758.jpg?1680974930?bc=0",
  "https://d2w9rnfcy7mm78.cloudfront.net/21302869/original_735ab8b6331deb02661cbd9b680e478c.jpg?1680978686?bc=0",
  "https://d2w9rnfcy7mm78.cloudfront.net/21302878/original_6570784f03a3a4e2b549af329ac43b98.webp?1680978782?bc=0",
  "https://d2w9rnfcy7mm78.cloudfront.net/21302888/original_115ac96528a12e8b8cd0b6fe62d87d5e.jpg?1680978858?bc=0",
  "https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1175135/pexels-photo-1175135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const image = document.getElementById("pictures");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}