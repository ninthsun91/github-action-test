export default {
    isEmail: (value)=>{
        const re = /^[\w][\w+_-]+@[\w.-]+\.[\w.-]{2,4}$/;
        const regex = new RegExp(re)
        if (regex.test(value)) return true;
        else return false;
    }
}


// const re = /^[\w][\w\.-]+@[\w\.-]+\.\w{2,4}$/
// const regex = new RegExp(re);
// const result = regex.test("test@email.com")
// console.log(result);