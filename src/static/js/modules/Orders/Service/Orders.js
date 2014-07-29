define(['modules/app', 'jquery'], function(App, $) {

    var booksList = [{
        bookId: 1,
        authorId: 1,
        authorTitle: 'Erich Maria Remarque',
        bookTitle: 'All Quiet on the Western Front',
        publishYear: '1950',
        cover: {
            preview: 'static/img/books/preview/m.book1.jpg',
            fullsize: 'static/img/books/fullsize/book1.jpg'
        },
        userRating: 4.8,
        price: '20 EUR',
        description: 'Is a novel by Erich Maria Remarque, a German veteran of World War I. The book describes the German soldiers\' extreme physical and mental stress during the war, and the detachment from civilian life felt by many of these soldiers upon returning home from the front. The novel was first published in November and December 1928 in the German newspaper Vossische Zeitung and in book form in late January 1929. The book and its sequel, The Road Back, were among the books banned and burned in Nazi Germany. It sold 2.5 million copies in 22 languages in its first eighteen months in print.'
    }, {
        bookId: 2,
        authorId: 1,
        authorTitle: 'Erich Maria Remarque',
        bookTitle: 'Arch of Triumph',
        publishYear: '1972',
        cover: {
            preview: 'static/img/books/preview/m.book2.jpg',
            fullsize: 'static/img/books/fullsize/book2.jpg'
        },
        userRating: 4.2,
        price: '100 EUR',
        description: 'It is 1939, and, despite having no permission to perform surgery, Ravic, a very accomplished German surgeon and a stateless refugee living in Paris, has been ghost-operating on patients for two years on the behalf of two less skillful French physicians. Unwilling to return to Nazi Germany, which has stripped him of his citizenship, and unable to legally exist anywhere else in pre-war western Europe, Ravic manages to hang on. He is one of many displaced persons without passports or any other documents, who live under a constant threat of being captured and deported from one country to the next, and back again. Though Ravic has given up on the possibility of love, life has a curious way of taking a turn for the romantic, even during the worst of times, as he cautiously befriends an actress.'
    }, {
        bookId: 3,
        authorId: 2,
        authorTitle: 'George Orwell',
        bookTitle: '1984',
        publishYear: '2011',
        cover: {
            preview: 'static/img/books/preview/m.book3-1.jpg',
            fullsize: 'static/img/books/fullsize/book3-1.jpg'
        },
        price: '200 EUR',
        description: 'Eighty-Four is a dystopian novel by George Orwell published in 1949. The novel is set in Airstrip One (formerly known as Great Britain), a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance, and public mind control, dictated by a political system euphemistically named English Socialism (or, in the government\'s invented language, Newspeak, called Ingsoc) under the control of a privileged Inner Party elite that persecutes all individualism and independent thinking as "thoughtcrimes".',
        starred: {
            inTop: true,
            cover: 'static/img/books/crop/book3-1-res.jpg'
        },
        userRating: 4.9
    }, {
        bookId: 4,
        authorId: 3,
        authorTitle: 'Ray Bradbury',
        bookTitle: 'Fahrenheit 451',
        publishYear: '2012',
        cover: {
            preview: 'static/img/books/preview/m.book4.jpg',
            fullsize: 'static/img/books/fullsize/book4.jpg'
        },
        description: "Fahrenheit 451 is a dystopian novel by Ray Bradbury published in 1953. It is regarded as one of his best works.The novel presents a future American society where books are outlawed and firemen burn any that are found. Fahrenheit 451 is a dystopian novel by Ray Bradbury published in 1953. It is regarded as one of his best works.The novel presents a future American society where books are outlawed and firemen burn any that are found. Fahrenheit 451 is a dystopian novel by Ray Bradbury published in 1953. It is regarded as one of his best works.The novel presents a future American society where books are outlawed and firemen burn any that are found. Fahrenheit 451 is a dystopian novel by Ray Bradbury published in 1953. It is regarded as one of his best works.The novel presents a future American society where books are outlawed and firemen burn any that are found",
        price: '50 EUR',
        userRating: 4.9,
        starred: {
            inTop: true,
            cover: 'static/img/books/crop/book4-res.jpg'
        }
    }, {
        bookId: 5,
        authorId: 4,
        authorTitle: 'Aldous Huxley',
        bookTitle: 'Brave New World',
        publishYear: '1973',
        userRating: 4.9,
        cover: {
            preview: 'static/img/books/preview/m.book5.jpg',
            fullsize: 'static/img/books/fullsize/book5.jpg'
        },
        price: '60 EUR'
    }, {
        bookId: 6,
        authorId: 5,
        authorTitle: 'Herman Hesse',
        bookTitle: 'Siddhartha',
        publishYear: '1973',
        userRating: 3.2,
        cover: {
            preview: 'static/img/books/preview/m.book6.jpg',
            fullsize: 'static/img/books/fullsize/book6.jpg'
        },
        price: '60 EUR'
    }, {
        bookId: 7,
        authorId: 6,
        authorTitle: 'J. D. Salinger',
        bookTitle: 'The Catcher in the Rye',
        publishYear: '1953',
        userRating: 4.8,
        cover: {
            preview: 'static/img/books/preview/m.book7.jpg',
            fullsize: 'static/img/books/fullsize/book7.jpg'
        },
        price: '40 EUR',
        starred: {
            inTop: true,
            cover: 'static/img/books/crop/book7-res.jpg'
        }
    }, {
        bookId: 8,
        authorId: 7,
        authorTitle: 'J. R. R. Tolkien',
        bookTitle: 'The Lord of the Rings',
        publishYear: '1963',
        userRating: 4.7,
        cover: {
            preview: 'static/img/books/preview/m.book8.jpg',
            fullsize: 'static/img/books/fullsize/book8.jpg'
        },
        price: '50 EUR'
    }, {
        bookId: 9,
        authorId: 7,
        authorTitle: 'J. R. R. Tolkien',
        bookTitle: 'Hobbit',
        publishYear: '1960',
        userRating: 4.6,
        cover: {
            preview: 'static/img/books/preview/m.book9.jpg',
            fullsize: 'static/img/books/fullsize/book9.jpg'
        },
        price: '45 EUR',
        description: "The Hobbit, or There and Back Again, is a fantasy novel and children's book by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature."
    }, {
        bookId: 10,
        authorId: 8,
        authorTitle: 'F. Scott Fitzgerald',
        bookTitle: 'The Great Gatsby',
        publishYear: '2008',
        userRating: 3.1,
        cover: {
            preview: 'static/img/books/preview/m.book10.jpg',
            fullsize: 'static/img/books/fullsize/book10.jpg'
        },
        price: '45 EUR',
        description: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West Egg on prosperous Long Island in the summer of 1922.",
        starred: {
            inTop: true,
            cover: 'static/img/books/crop/book10-res.jpg'
        }
    }
    ];

    var ordersList = [{
        orderId: 1,
        status: 'inconfirm',
        price: '185 EUR',
        items: [
            booksList[0],
            booksList[1],
            booksList[2],
            booksList[3],
            booksList[4],
            booksList[5],
            booksList[6]
        ]
        }, {
            orderId: 2,
            status: 'payed',
            price: '202 EUR',
            items: [
                booksList[6],
                booksList[5],
                booksList[4],
                booksList[3],
                booksList[2],
                booksList[1],
                booksList[0]
            ]
        }
    ];

    var getTimeout = function() {
        return (parseFloat((Math.random() * 2).toFixed(2)) * 1000);
    };

    var Service = {
        getListForUser: function() {
            var def = new $.Deferred();
            setTimeout(function() {
                def.resolve(ordersList);
            }, getTimeout());
            return def.promise();
        }
    };

    App.reqres.setHandlers({
        'Orders:getUserOrders': Service.getListForUser
    });

    return Service;
});