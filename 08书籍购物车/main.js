const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
            id:1,
            name:'大头儿子',
            date:'1998.10',
            price:2420.00,
            count:9
            },
            {
                id:2,
                name:'黑猫警长',
                date:'1958.10',
                price:210,
                count:2
            },
            {
                id:3,
                name:'葫芦娃',
                date:'1938.10',
                price:230.00,
                count:5
            },
            {
                id:4,
                name:'哪吒',
                date:'1992.10',
                price:202,
                count:1
            },
            {
                id:5,
                name:'邋遢大王',
                date:'1991.10',
                price:20.10,
                count:2
            },
        ]
    },
    methods: {
        getFinalPrice(price){
            return '￥' + price.toFixed(2)
        },
        increment(index){
            this.books[index].count += 1
        },
        decrement(index){
            // if (this.books[index].count != 1){
                this.books[index].count --
            // }

        },
        removeClick(index){
            this.books.splice(index,1)
        }

    },
    computed: {
        totalPrice(){
            // let result = 0;
            // for (let i = 0; i < this.books.length; i++){
            //     result += this.books[i].price * this.books[i].count
            // }
            //let i of books/in books 前者拿到对象，后者拿到下表
            return this.books.reduce(function (prevalue,book) {
                return prevalue + book.price * book.count
            },0);
        }
    },
    filters: {
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    }
})