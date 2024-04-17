const thisYear = new Date()
document.getElementById("year").innerText = thisYear.getFullYear();

const app = Vue.createApp({
    // list of properties and functions
    data () {
        //This function returns another object for storing data
        return {
            phrase:"The best smoothie from Georgian@Ilac",
            siteName:"NI SMOOTHIES",
            img_source: 'img/blueberry.jpg',   //path for images to be displayed with v-bind
            img_source1: 'img/strawberry.jpg', //path for images to be displayed with v-bind
            img_source2: 'img/pineapple2.jpg', //path for images to be displayed with v-bind
            url: 'https://georgianatilac.com/',
            addTop: true, //boolean
            toppings: ["Whey Protein", "Jelly", "Tapioca", "Strawberry Popping Boba"] //items to be displayed in for each loop
        }
    }
});

function createSmoothie() {

    //Declaring variables
    let smoothieForm = document.getElementById('smoothieForm');
    let smoothie = smoothieForm.smoothie.value;
    let size = smoothieForm.size.value;
    let quantity = parseInt(smoothieForm.quantity.value);
    let toppings = Array.from(smoothieForm.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

    //Declaring price variables
    let smoothiePrice = 5.99;
    
    let sizePrice = 0;
    //if condition to get the adding price according to the size
    if (size == "medium") {
        sizePrice = 1.00;
    } else if (size == "large") {
        sizePrice = 2.00;
    }
   
    
    //Calculating total
    let total = (smoothiePrice + sizePrice) * quantity;

    //Generating order HTML
    let invoiceHTML = `
    <h2>Your order</h2>
    <p>Congratulations! You have ordered:</p>
    <p><strong>${quantity}x ${size.charAt(0).toUpperCase() + size.slice(1)} ${smoothie}</strong></p>
    <p>Toppings:</p>
    <ul>
        ${toppings.map(topping => `<li>${topping.charAt(0).toUpperCase() + topping.slice(1)}</li>`).join('')}
    </ul>
    <p>Total Cost: $${total.toFixed(2)}</p>
    `;

    //Displaying the order
    let invoiceDiv = document.getElementById('order');
    invoiceDiv.innerHTML = invoiceHTML;
}
