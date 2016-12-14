'use strict';
app.service('mainService', function ($http) {
    this.getData = () => $http.get('/api/get-all')
    this.login = (useremail, userpassword) => $http.post('/login', {
        useremail: useremail,
        userpassword: userpassword
    })
    this.addToCart = (item, userId) => $http.post('/add-to-cart', {
        item: item,
        userId: userId
    });
    this.checkOut = (userId) => $http.post('/check-out', {
        userId: userId
    })
})