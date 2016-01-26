


var shopping_basket = {
  items:[],
  add_item: function(item){
    this.items.push(item);
  },
  items_price:function(items){
    var totalPrice = 0
    for(item of this.items){
     totalPrice += item.price;
    }
    return totalPrice
  },

}





module.exports = shopping_basket
