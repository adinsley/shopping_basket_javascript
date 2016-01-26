


var shopping_basket = {
  items:[],
  add_item: function(item){
    this.items.push(item);
  },
  items_price:function(){
    var totalPrice = 0
    for(item of this.items){
     totalPrice += item.price;
    }
    return totalPrice
  },

  discount_price:function(){
    if(this.items_price() >= 20){
      discountPrice = (this.items_price() * 0.9);
    }else{
      discountPrice = this.items_price();
    }
    return discountPrice;
  }

}





module.exports = shopping_basket
