window.htmlTemplate = `
<div class="product">
  <center>
    <a href="{{product_url}}">
        <img src="{{image}}" alt="{{prod_name}}">
        <div class="title">{{prod_name}}</div>
        <div class="price">{{currency_symbol}}{{price}}</div>    
    </a>
    <div class="size">
        <button class="variant-button {{prod_code}}-size" id="{{prod_code}}_s" onclick='selectSize("{{prod_code}}","s")'>S</button>
        <button class="variant-button {{prod_code}}-size" id="{{prod_code}}_m" onclick='selectSize("{{prod_code}}","m")'>M</button>
        <button class="variant-button {{prod_code}}-size" id="{{prod_code}}_l" onclick='selectSize("{{prod_code}}","l")'>L</button>
        <button class="variant-button {{prod_code}}-size" id="{{prod_code}}_xl" onclick='selectSize("{{prod_code}}","xl")'>XL</button>
    <div>
    <div class="color">
        <button class="color-button {{prod_code}}-color" style="background-color:green" id="{{prod_code}}_green" onclick='selectColor("{{prod_code}}","green")'></button>
        <button class="color-button {{prod_code}}-color" style="background-color:blue" id="{{prod_code}}_blue" onclick='selectColor("{{prod_code}}","blue")'></button>
        <button class="color-button {{prod_code}}-color" style="background-color:black" id="{{prod_code}}_black" onclick='selectColor("{{prod_code}}","black")'></button>
        <button class="color-button {{prod_code}}-color" style="background-color:navy" id="{{prod_code}}_navy" onclick='selectColor("{{prod_code}}","navy")'></button>
    </div>
    
    <button class="add-to-cart" id="{{prod_code}}" disabled> Add to cart </button>
  </center>
</div>
`

window.products = [
  {
    "variant_description": "Top Green SM",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_2",
    "product_types": ["green", "top", "top"],
    "prod_code": "4596234223693",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19355642.jpg?v=1587584694",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Top"
  },
  {
    "variant_description": "Pants Black 3",
    "product_url": "https://piedpiperstore.myshopify.com/products/pants_20",
    "product_types": ["pants", "pants"],
    "prod_code": "4596236255309",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788362829],
    "category_ids": [161788362829],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19355560.jpg?v=1587584791",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Pants"
  },
  {
    "variant_description": "Top Camo LG",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_13",
    "product_types": ["camo", "top", "top"],
    "prod_code": "4596234682445",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/17342044.jpg?v=1587584735",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "44.00",
    "prod_name": "Top"
  },
  {
    "variant_description": "Top Strip XSM",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_10",
    "product_types": ["stripe", "top", "top"],
    "prod_code": "4596234584141",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/20023083.jpg?v=1587584717",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Top"
  },
  {
    "variant_description": "Coat Suede lg",
    "product_url": "https://piedpiperstore.myshopify.com/products/coat_10",
    "product_types": ["suede", "“coat", "coats"],
    "prod_code": "4596237107277",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "300.00",
    "currency": "USD",
    "categories": [161788461133],
    "category_ids": [161788461133],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/17316459.jpg?v=1587584814",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Coat"
  },
  {
    "variant_description": "Dress Floral 6",
    "product_url": "https://piedpiperstore.myshopify.com/products/dress_13",
    "product_types": ["floral", "red", "white", "dress", "dress"],
    "prod_code": "4596233404493",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788002381],
    "category_ids": [161788002381],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/17106679.jpg?v=1587584670",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Dress"
  },
  {
    "variant_description": "Dress Floral 4",
    "product_url": "https://piedpiperstore.myshopify.com/products/dress_13",
    "product_types": ["floral", "red", "white", "“dress", "dress"],
    "prod_code": "4596233404493",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788002381],
    "category_ids": [161788002381],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/17106679.jpg?v=1587584670",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Dress"
  },
  {
    "variant_description": "Navy Top XL",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_6",
    "product_types": ["navy", "top", "top"],
    "prod_code": "4596234420301",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19355599.jpg?v=1587584707",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "44.00",
    "prod_name": "Top"
  },
  {
    "variant_description": "Green Top MD",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_16",
    "product_types": ["green", "top", "top"],
    "prod_code": "4596234813517",
    "manufacturer": "XGen",
    "is_in_stock": "0",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19017706.jpg?v=1587584741",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Top"
  },
  {
    "variant_description": "Blue Pants 0",
    "product_url": "https://piedpiperstore.myshopify.com/products/pants_6",
    "product_types": ["blue", "pants", "pants"],
    "prod_code": "4596235501645",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788362829],
    "category_ids": [161788362829],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19109567.jpg?v=1587584763",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Pants"
  },
  {
    "variant_description": "Navy Top SM",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_14",
    "product_types": ["navy", "top", "top"],
    "prod_code": "4596234747981",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19329164.jpg?v=1587584737",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Top"
  },
  {
    "variant_description": "Navy Top MD",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_3",
    "product_types": ["navy", "top", "top"],
    "prod_code": "4596234289229",
    "manufacturer": "XGen",
    "is_in_stock": "0",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19355648.jpg?v=1587584697",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Top"
  },
  {
    "variant_description": "Blue Coat LG ",
    "product_url": "https://piedpiperstore.myshopify.com/products/coat_15",
    "product_types": ["blue", "coat", "coats"],
    "prod_code": "4596237500493",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "300.00",
    "currency": "USD",
    "categories": [161788461133],
    "category_ids": [161788461133],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/17278769.jpg?v=1587584839",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Coat"
  },
  {
    "variant_description": "Black Top SM",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_18",
    "product_types": ["black", "top", "top"],
    "prod_code": "4596235010125",
    "manufacturer": "XGen",
    "is_in_stock": "0",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19329180.jpg?v=1587584746",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Top"
  }
]
