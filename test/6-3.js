

/**
 * 
 * 객체의 속성 존재 여부.
 * 존재하지 않는 속성에 접근하면 undefined가 나온다.
 * 
 */


// const obj = {
//     title: "THIS IS TITLE",
//     content: "this is content"
// }
// // console.log(obj.user);

// if (obj.user) {
//     console.log(obj.user);
    
// } else {
//     console.log(obj.user);
//     obj.user = "I'M USER";
//     console.log(obj.user);
// }

// // Boolean(undefined)

// console.log(obj.title || "NO TITLE");
// console.log(obj.review || "NO REVIEW");

/**
 * 
 */

// const obj2 = {
//     title: "THIS IS TITLE",
//     content: "this is content",
// }
// obj2.user = obj2.user || "UNKNOWN"
// obj2.time = obj2.time || "2999/12/31"

// obj2.user = "qwe"
// console.log(obj2);


/**
 * 
 * 구조 분해 할당
 * 
 * 
 */

// const arr1 = [1,2,3,4,5];
// const [a, b, ...c] = arr1;

// console.log(a, b, c);


// const post = {
//     postId: 3,
//     userId: 10,
//     title: "TITLE",
//     content: "content",
//     createdAt: Date.now()
// };

// const { userId, title, content, ...rest } = post;
// console.log(userId, title, content, rest);

// const { postId: PID, userId: UID } = post;
// console.log(PID, UID);



/**
 * 
 * 전개 연산자
 * SPREAD & REST
 * 
 */

// const postList = [
//     { title: "TITLE1", content: "content1" },
//     { title: "TITLE2", content: "content2" },
//     { title: "TITLE3", content: "content3" }
// ]

// const newList = [...postList];
// console.log(newList);
// newList[1] = { title: "DELETED", content: "DELETED" }
// console.log(postList);
// console.log(newList);

// console.log({name:"qe", age:123}, ...newList)




// const payload = {
//     userId: 11,
//     username: "sparta"
// }
// const user = {
//     ...payload,
//     email: "email@domain.com",
//     contact: "010-1234-4321"
// }
// console.log(user);

// user.userId++;
// console.log(`payload: ${payload.userId}, user: ${user.userId}`);


// // // 전개 순서!!

// const profile = {
//     username: "hanghae",
//     email: "email@domain.com",
//     contact: "010-1234-4321",
//     ...payload,
// }
// console.log(profile);



/**
 * 
 * extends? new Class(), {}
 * 
 */



// class Parent {
//     constructor(lastName) {
//         this.lastName = lastName
//     }
//     method1 = function() {
//         console.log("THIS IS PARENT");
//     }
// }

// class Child {
//     parent = new Parent("Kim")

//     constructor(firstName) {
//         this.firstName = firstName
//     }
//     method1 = function(){
//         console.log("THIS IS CHILD");
//     }
//     fullName = function() {}
// }

// const child1 = new Child("qwe");

// console.log(child1);
// console.log(child1.parent.lastName);
// child1.method1();
// child1.parent.method1();


// class Child2 extends Parent {
//     constructor(firstName) {
//         super("Kim")
//         this.firstName = firstName
//     }
//     method1 = function() {
//         console.log("THIS IS CHILD");
//     }
//     fullName = function() {}
// }

// const child2 = new Child2("asd")

// console.log(child2);
// child2.method1()



/**
 * 
 * 
 * 
 */



// // parentModule.js
// class Parent {
//     arr1 = [];
//     obj = [];
//     str = ""
//     a = 2
//     method = () => {}
// }

// module.exports = Parent;

// // childModule.js
// const Parent = require("parentModule")

// class Child {
//     parent = new Parent();

//     method: () => {
//        const arr = this.parent.arr1
//        console.log(arr);
//     }
// }


// // parentModule.js
// module.exports = {
//     arr1: [],
//     obj: {},
//     b: 2,
//     method: ()=>{}
// }

// // childModule.js
// const Parent = require("parentModule")

// module.exports = {

//     method: () => {
//        const arr = Parent.arr1
//        console.log(arr);
//     }
// }




// class Child extends Parent

// const a = new Child();

// console.log(a.b);













// const users = [
//     { id: 1, name: 'Tony Stark', active: false },
//     { id: 2, name: 'Bruce Banner', active: true },
//     { id: 3, name: 'Natasha Romanoff', active: false },
//     { id: 4, name: 'Chris Evans', active: true },
//     { id: 5, name: 'Chris Hemsworth', active: false },
//     { id: 6, name: 'Clark Gregg', active: false },
//   ]
  
//   // good?
//   const result1 = users.reduce((acc, curr) => {
//     if (curr.active) {
//       return acc
//     }
//     return { ...acc, [curr.id]: curr.name }
//   }, {})
  
//   // bad?
//   const result2 = users
//     .filter((user) => !user.active)
//     .map((user = (user) => ({ [user.id]: user.name })))
//     // .reduce(Object.assign, {})
    
// console.log(result1);


// const items = [
//   { name: 'obama', age: 10, country: 'USA' },
//   { name: 'trump', age: 14, country: 'USA' },
//   { name: 'moon', age: 37, country: 'KOREA' },
//   { name: 'clinton', age: 64, country: 'USA' },
//   { name: 'bush', age: 49, country: 'USA' },
// ]


// const result = items.reduce((prev, item) => {
//   prev[item.name] = { age: item.age, country: item.country }
//   return prev
// }, {})

// const result2 = {}
// for (let item of items) {
//   result2[item.name] = { age: item.age, country: item.country }
// }

// console.log(result2);