
var parent = document.getElementById("XgenElement");
var selectedVariants = [];

for(var i = 0; i < products.length; ++i){
  var child = window.htmlTemplate;
  var product = products[i];

  if(product.prod_name.includes("Top") && product.is_in_stock != 0){
    for(var key in product){
      const renderKey = `{{${key}}}`;
      var regex = new RegExp(renderKey, "g");
      if(child.includes(renderKey)) child = child.replace(regex, product[key]);

    }
    const selectedValues = {
      id : product.prod_code,
      selectedSize: "",
      selectedColor: ""
    }
    selectedVariants.push(selectedValues);
    parent.innerHTML += child;
  }
}

function selectSize(prod_code, size) {
  const allButtons = document.getElementsByClassName(prod_code+"-size");
  for(var i = 0; i < allButtons.length; ++i){
    allButtons[i].style.backgroundColor = 'white';
    allButtons[i].style.color = 'black';
  }
  const btn = document.getElementById(prod_code + '_' + size);
  for(let i = 0; i < selectedVariants.length; i++){
    if(selectedVariants[i].id === prod_code) {
      selectedVariants[i].selectSize = size;
      if(selectedVariants[i].selectColor !== undefined){
        console.log(selectedVariants[i].selectColor);
        document.getElementById(prod_code).disabled = false;
      } 
    }
    
  }
  btn.style.backgroundColor = 'salmon';
  btn.style.color = 'white'; 
  
}

function selectColor(prod_code, color) {
  const allButtons = document.getElementsByClassName(prod_code+"-color");
  for(var i = 0; i < allButtons.length; ++i){
    allButtons[i].style.border = '2px solid white';
  }
  const btn = document.getElementById(prod_code + '_' + color);
  for(let i = 0; i < selectedVariants.length; i++){
    if(selectedVariants[i].id === prod_code) {
      selectedVariants[i].selectColor = color;
      if(selectedVariants[i].selectSize !== undefined){
        console.log(selectedVariants[i].selectSize);
        document.getElementById(prod_code).disabled = false;
      } 
    }
  }
  btn.style.border = 'none';
}