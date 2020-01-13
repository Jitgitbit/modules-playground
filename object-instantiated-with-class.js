// object-instantiated-with-class.js
class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.posts = [];
  }
  authenticate(email, password) {
    if (email === this.email && password === this.password) {
      return true;
    } else {
      return false;
    }
  }
  post(title) {
    if (!title) return console.log("please provide a title to post");
    this.posts.push({ id: this.posts.length + 1, title: title });
  }
  getPosts() {
    return this.posts;
  }
};

const user = new User('Wouter', 'de Vos', 'wouter@wouter.com', 'likeABoss')
console.log(user) // console.log what user is
// TODO: uncomment these lines 1 by 1 and make them work as expected

const authAttempt1 = user.authenticate('wouter@wouter.com', 'hacketyhack')
console.log(authAttempt1) // returns false

const authAttempt2 = user.authenticate('wouter@wouter.com', 'likeABoss') // returns true
console.log(authAttempt1, authAttempt2)

user.post() // no post is created
user.post('7 Productivity hacks using Asana')
user.post('We need more diversity in programming')
const woutersPosts = user.getPosts() // array of 2 posts
console.log(woutersPosts)


const userThierry = new User('Thierry', 'Dekelver', 'rowowolf@gmail.com', 'popoAr');
console.log(userThierry); 

const authAttempt3 = userThierry.authenticate('rowowolf@gmail.com', 'hacketyhack') // returns false
const authAttempt4 = userThierry.authenticate('rowowolf@gmail.com', 'popoAr') // returns true
console.log(authAttempt1, authAttempt2)

userThierry.post() // no post is created
userThierry.post('My first post')
userThierry.post('My second post')
const thierrysPosts = userThierry.getPosts() // array of 2 posts
console.log(thierrysPosts)