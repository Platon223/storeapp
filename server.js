const io = require('socket.io')(3000, {
    cors: {
        origin: "*",
    },
});


const products = [];



io.on('connection', (socket) => {
    console.log('User Connected');

    socket.emit('launch', { products });

    socket.on('add-product', (product) => {
        products.push(product);
        io.emit('added-product', product);
        console.log(products);
    })
})