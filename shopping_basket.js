
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

  bogof_lookup:function(){
    var hash = {};
    for(item of this.bogof()){
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

  bogof_reduction:function(){
    var discount = 0;
    var bogofhash = this.bogof_lookup();
    for(var product in bogofhash){
      if(bogofhash[product]["count"] % 2 === 0){
     var free_items =  (bogofhash[product]["count"]/2);
     discount += (free_items*bogofhash[product]["price"]);
      }else{
        var free_items = ((bogofhash[product]["count"]/2)-0.5);
        discount += (free_items*bogofhash[product]["price"])
      }
      return discount;
    }

  },

  items_price:function(){
    var discounts = this.bogof_reduction();
    var totalPrice = 0
    for(item of this.items){
     totalPrice += item.price;
    }
    totalPrice = totalPrice - discounts;
    return totalPrice
  },

  discount_price:function(){
    var totalPriced = this.items_price();
    if(totalPriced >= 20){
      var discountPrice = (totalPriced * 0.9);
    }else{
      var discountPrice = totalPriced;
    }
    return discountPrice;
  }

}












module.exports = shopping_basket
