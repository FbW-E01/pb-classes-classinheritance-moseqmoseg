class Publication {
    identifier;
    author;
    title;
    content;
    created;
    constructor(id = null, author = null, title = null, content = null) {
        this.identifier = id;
        this.author = author;
        this.title = title;
        this.content = content;
        this.created = new Date();
    }

    describe() {
        console.log(`Publication number ${this.identifier} is  " ${this.title}" by ${this.author}`);
    }
}

class Blogpost extends Publication {
    edited;
    address;
    constructor(id, author, title, content, edited, address) {
        super(id, author, title, content);
        this.edited = edited;
        this.address = address;
    }
}

class Book extends Publication {
    isbn;
    constructor(id, author, title, content, ISBN) {
        super(id, author, title, content);
        this.isbn = ISBN;
    }
}

class Score extends Publication {
    score;
    constructor(id, author, title, content, score) {
        super(id, author, title, content);
        this.score = score;
    }
}

const blog1 = new Blogpost(45, "Lalo Cura", "Whatever it means", "La chica loca bailando en la playa", "edited by Frank", "Cookiestrasse 68");
const blog2 = new Blogpost(98, "Lalo Cura", "Whatever again", "La chica loca bailando en la playa", "edited by John", "Chicostrasse 50");
const blog3 = new Blogpost(88, "Kery Cura", "Beach Party", "La chica loca bailando en la playa", "edited by Larry Cura", "Chunkystrasse 60");

blog1.describe();
blog2.describe();
blog3.describe();


const book1 = new Book(65, "Thomas Tomato", "Its Red", "Rem quae optio quidem in voluptas quas architecto eos. Omnis id dolore tempora possimus voluptas. Nihil ut sit sunt quam velit aliquid autem sint. Sit velit nulla debitis architecto omnis sapiente libero quasi quis. Ut illo sunt reiciendis et architecto assumenda. Ut dolores veritatis.", "978-3-16-148410-0");
const book2 = new Book(78, "Rosty Malanosty", "The thing is..", "Natus corporis dolore enim in molestiae.", "9917–9989");
const book3 = new Book(30, "Kevin Bolo", "It hurts", "Voluptas cupiditate eligendi odio minus dolor enim nemo.", " 1-375-788-8001");

book1.describe();
book2.describe();
book3.describe();

const score1 = new Score(101, "blabla", "blubu", "bliblop", 100)
score1.describe();

console.log(blog1);