
var shopping_basket = {
  items:[],
  add_item: function(product){
    this.items.push(product);
  },
  
  bogof:function(){
    var bogof_items = [];
    for(item of this.items){
     
      if(item.bogof === true){
        bogof_items.push(item);
      }
    }
    return bogof_items
  },

  bogof_lookup:function(bogof_items){
    var hash = {};
    for(item of bogof_items){
      //Get name as Key
     var key = item.name
      // look up hash with that key
      var found = hash[key];

      if(found){
        found.count +=1;
      }else{
        hash[key] = {count:1, price:item.price};
      }
    }
    return hash
  },

  bogof_reduction:function(hash){
    discount = 0
    for(var product in hash){
      if(hash[product]["count"] % 2 === 0){
     var free_items =  (hash[product]["count"]/2);
     discount += (free_items*hash[product]["price"]);
      }else{
        var free_items = ((hash[product]["count"]/2)-0.5);
        discount += (free_items*hash[product]["price"])
      }
      return discount;
    }

  },

  items_price:function(){
    var totalPrice = 0
    for(item of this.items){
    var totalPrice += item.price;
    }
    return totalPrice - this,bogof_reduction();
  },

  discount_price:function(){
    if(this.items_price() >= 20){
      var discountPrice = (this.items_price() * 0.9);
    }else{
      var discountPrice = this.items_price();
    }
    return discountPrice;
  }

}







module.exports = shopping_basket
