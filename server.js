const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


const io = require('socket.io')(port, {
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
