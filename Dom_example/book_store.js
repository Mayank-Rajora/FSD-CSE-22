
const bookData = [
    { image: "https://th.bing.com/th/id/OIP.1AJSRkONXap-dJLVSC0YYgHaJh?w=189&h=243&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3", price: 234 },
    { image: "https://m.media-amazon.com/images/I/51gZKgcmWBL.jpg", price: 300 },
    { image: "https://tse3.mm.bing.net/th/id/OIP.ZMcaAuaknEaH76-iJy2MGgAAAA?r=0&w=464&h=600&rs=1&pid=ImgDetMain&o=7&rm=3", price: 400 },
];

function book(b) {
    const div = document.createElement("div");
    div.setAttribute("class", "book");

    const image = document.createElement("img");
    image.setAttribute("src", b.image);
    image.setAttribute("height","100px");
    image.setAttribute("width", "100px");

    const h2 = document.createElement("h2");
    h2.innerText = `Price: ${b.price}/-`;
    h2.style.color = "blue";

    const bt = document.createElement("button");
    bt.innerText = "AddToCart";

    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(bt);

    return div; 
}

const parent = document.getElementById("bookstore");

bookData.forEach(b => {
    const bookElement = book(b);
    parent.appendChild(bookElement);
});



