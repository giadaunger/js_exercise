// A proper async function
// Inside async functions, we are allowed to use async and await-keywords
// This behaviour is basically the same in python!
// Anything after await should be asynchronous, meaning it is an I/O operation, such as a HTTP-call or database-call
// Meaning: We're going to have to wait a bit to get a response, so we might as well do other stuff in the meantime
document.getElementById('fetchBtn').addEventListener('click', async function() {
    const output = document.getElementById('output');
    output.innerHTML = '<p>Fetching products...</p>';

    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
        output.innerHTML = '<p>Products fetched successfully!</p>';
        products.forEach(product => {
            output.innerHTML += `<p>${product.title} - $${product.price}</p>`;
        });
    } catch (error) {
        output.innerHTML = '<p>Error fetching products!</p>';
    }
});

// We create an event-listener for a button
// It executes some asynchronous code, in this case "setTimeout()" which
// will execute some code after it has waited 3000 milliseconds (3 seconds)
document.getElementById('delayBtn').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.innerHTML = '<p>Wait for 3 seconds...</p>';

    setTimeout(function() {
        output.innerHTML += '<p>Delayed Message: This shows up after 3 seconds!</p>';
    }, 3000);
});
