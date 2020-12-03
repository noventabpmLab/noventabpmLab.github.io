
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToShoppingCartButton) => {
	addToShoppingCartButton.addEventListener('click', addToCartClicket);
}) ;

const shopingCardItemsContainer = document.querySelector('.shoppingCartItemsContainer');


function addToCartClicket(event){
    const button = event.target;
    const item = button.closest('.modal-content');

    const itemPrice = item.querySelector('.itemPrice').textContent;
    const itemImg = item.querySelector('.card-img-top').src;

    addItemToshoppingCar(itemPrice, itemImg);
    

}
function addItemToshoppingCar(itemPrice, itemImg){
	
	const shopingCartRow = document.createElement('div');
	const shopingCardItemsContent = 
          `
          <div class="row shoppingCartItem">
          <div class="col-8">
              <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img  width="150px;" src=${itemImg} class="shopping-cart-image">
                  <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
              </div>
          </div>
          <div class="col-3">
              <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="item-price mb-0 shoppingCartItemPrice"> $Col ${itemPrice} </p>
              </div>
          </div>
          <div class="col-1">
              <div
                  class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                  <input style="width: 75px;" class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                      value="1">
                  <button class="btn btn-danger buttonDelete" type="button">X</button>
              </div>
          </div>
      </div>`

          ;
	
	shopingCartRow.innerHTML = shopingCardItemsContent;
    shopingCardItemsContainer.append(shopingCartRow);
    
    shopingCartRow.querySelector('.buttonDelete').addEventListener('click',removeShoppingCartItem);
	
	shopingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);
	
	updateShoppingCartTotal();
}
 function updateShoppingCartTotal(){
	 let total = 0;
	 const ShoppingCartTotal = document.querySelector('.shoppingCartTotal');
	 
	 const shoppingCartItem = document.querySelectorAll('.shoppingCartItem');
	 shoppingCartItem.forEach(shoppingCartItem => {
		const shoppingCartItemPriceElements = shoppingCartItem.querySelector('.shoppingCartItemPrice');
		const shoppingCartItemPrice = Number(shoppingCartItemPriceElements.textContent.replace('$Col', ''));
		
		const shoppingCartItemQuantityElements = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
		const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElements.value);
				 
		total = total + shoppingCartItemPrice * shoppingCartItemQuantity; 
	});
	 
	 ShoppingCartTotal.innerHTML = `$Col ${total}`;
} 

function removeShoppingCartItem(event){
	const buttonClicked = event.target;
	buttonClicked.closest('.shoppingCartItem').remove();
	updateShoppingCartTotal();
} 

function quantityChanged(event){
	const imput = event.target;
	if(imput.value <= 0){
		imput.value =1
	};
	updateShoppingCartTotal();
	
}

}