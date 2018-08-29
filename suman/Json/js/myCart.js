$(document).ready(function () {
    $('.sc-product-item').click(function () {
        var name = $(this).find('div .foodName').html();
        console.log(name);
    });
});