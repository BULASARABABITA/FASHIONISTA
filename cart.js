document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    var addToCartBtn = document.getElementById("addToCartBtn");

    // Add click event listener to the "Add To Cart" button
    addToCartBtn.addEventListener("click", function () {
        // Get product details
        var productName = document.querySelector("#prodetails h4").innerText;
        var productPrice = document.querySelector("#prodetails h2").innerText;
        var productImage = document.querySelector("#MainImg").src;
        var selectedSize = document.querySelector("#prodetails select").value;
        var quantity = document.querySelector("#prodetails input").value;

        // Calculate subtotal
        var subtotal = parseFloat(productPrice.slice(1)) * parseInt(quantity);

        // Create a new table row for the cart
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><a href="#"><i class="far fa-times-circle"></i></a></td>
            <td><img src="${productImage}" alt=""></td>
            <td>${productName}</td>
            <td>${productPrice}</td>
            <td>${quantity}</td>
            <td>$${subtotal.toFixed(2)}</td>
        `;

        // Append the new row to the cart table body
        var cartTableBody = document.querySelector("#cart tbody");
        cartTableBody.appendChild(newRow);

        // Update cart totals
        updateCartTotals();
    });

    // Function to update cart totals
    function updateCartTotals() {
        var cartSubtotal = 0;
        var cartRows = document.querySelectorAll("#cart tbody tr");

        // Calculate total based on each row's subtotal
        cartRows.forEach(function (row) {
            var subtotal = parseFloat(row.cells[5].innerText.slice(1));
            cartSubtotal += subtotal;
        });

        // Update totals in the DOM
        document.querySelector("#subtotal td:nth-child(2)").innerText = "Rs." + cartSubtotal.toFixed(2);
        document.querySelector("#cart-add strong").innerText = "Rs." + cartSubtotal.toFixed(2);
    }
});