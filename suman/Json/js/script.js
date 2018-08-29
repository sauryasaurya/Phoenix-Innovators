$(document).ready(function () {
    $.getJSON("data.json", function (data) {
        $("#home").click(function () {
            $.each(data, function (key, value) {
                if (value.category === "Food") {
                    $('#food .row').html(
                        '<div class="col-md-4 col-sm-6"><div class="sc-product-item img-thumbnail"><div class="menu">' +
                        '<div class="menuImageP"><div class="menuImageC"><img data-name="product_image"' +
                        'src="' + value.img + '" alt="..." class="img-fluid"></div></div></div>' +
                        '<div class="caption"><h4 data-name="product_name" class="foodName">' + value.foodName +
                        '</h4><p data-name="product_desc">Product details</p><hr class="line">' +
                        '<div><div class="form-group2"><input class="sc-cart-item-qty" name="product_quantity" min="1" value="1" type="number">' +
                        '</div><hr class="line"><strong class="price float-left">Rs.' + value.price +
                        '</strong><input name="product_price" value="50" type="hidden" />' +
                        '<input name="product_id" value="12" type="hidden" /><button class="sc-add-to-cart btn btn-success btn-sm float-right">Add to cart</button>' +
                        '</div><div class="clearfix"></div></div></div></div>'
                    );
                }
            });
        });

        $("#pizza").click(function () {
            $.each(data, function (key, value) {
                if (value.category === "Beverage") {
                    $('#food .row').append(
                        '<div class="col-md-4 col-sm-6"><div class="sc-product-item img-thumbnail"><div class="menu">' +
                        '<div class="menuImageP"><div class="menuImageC"><img data-name="product_image"' +
                        'src="' + value.img + '" alt="..." class="img-fluid"></div></div></div>' +
                        '<div class="caption"><h4 data-name="product_name" class="foodName">' + value.foodName +
                        '</h4><p data-name="product_desc">Product details</p><hr class="line">' +
                        '<div><div class="form-group2"><input class="sc-cart-item-qty" name="product_quantity" min="1" value="1" type="number">' +
                        '</div><hr class="line"><strong class="price float-left">Rs.' + value.price +
                        '</strong><input name="product_price" value="50" type="hidden" />' +
                        '<input name="product_id" value="12" type="hidden" /><button class="sc-add-to-cart btn btn-success btn-sm float-right">Add to cart</button>' +
                        '</div><div class="clearfix"></div></div></div></div>'
                    );

                }
            });
        });
    });
});