// const gamename= new String('sujal');
// // console.log(gamename.substring(0,3));
// console.log(gamename.slice(0,3));




// console.log(gamename[0]);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('j'));
// console.log(gamename.substring(0,3));
// console.log(gamename.slice(0,3));


// const url="https://localhost:133f/.com";
// console.log(url.replace("133f","1337"));

// console.log(url.includes("ho"))


// let s="mohanyadavsujalprjapati";

// // console.log(s.split(" "));

// let arr = [22, 15, 66, 88];

// // Initialize maxValue with the first element
// let maxValue = arr[0];

// // Iterate through the array starting from the second element
// for (let i = 1; i < arr.length; i++) {
//     // If current element is greater than maxValue, update maxValue
//     if (arr[i] > maxValue) {
//         maxValue = arr[i];
//     }
// }

// // // Output the highest value
// console.log(maxValue);  // Output: 88


// let arr=[48,44,54,45];

// let maxval=arr[0];

// for(let i=1;i<arr.length;i++){
//     if(arr[i]>maxval){
//         maxval=arr[i];
//     }

// }
// console.log(maxval);


// let a=[22,44,66,88];

// let sum=0;
// for(let i=0;i<a.length;i++){
//     sum=sum+a[i];
// }
// console.log(sum);


// let date= new Date(2023,0,22)

// console.log(date.toDateString());
// // console.log(date.toISOString());
// // console.log(date.toString());
// console.log(date.toLocaleString());


// let mytimesetup=Date.now()

// console.log(Math.floor(mytimesetup/1000));

// let arr=[33,44,64,98];
// // console.log(arr.join());
// // arr.push(5);

// console.log(arr.indexOf(98));

// const arr=[11,22,33,44,55,66];
// console.log(arr.slice(1,3));
// console.log(arr)
//same array return slice not changes in array 


//but splice method it can be changes in to array elements remove from array then print elements remaing
// let arr1=[44,55];
// let arr2=[22,44];
// console.log(arr1.concat(arr2));
// console.log([...arr1,...arr2,])


// const array=[11,44,55,66,44,[55,44,[22,32,44]]]
// console.log(array.flat(Infinity));
// const arr="sujal"
// console.log(Array.from(arr));




// const a=54;
// const b=54;
// const c=54;

// console.log(Array.of(a,b,c));

//singelton 



// const mySym=Symbol()

// const  user={
//     [mySym]:"hero",
//     name:"sujal",
//     roll_no:105441,
//     location:"jaipur",
//     islooged:false,
//     v:["roll","v-rag"],
//     "shivam riv":"mohan"
// }
// user.name="shivay";
// console.log(user)
// Object.freeze(user);
// user.name="mohan";
// console.log(user);


//object sigelton

// const tinderuser=new Object()
// console.log(tinderuser)

// const tinderuser={}

// tinderuser.name="sujal"
// tinderuser.id="2135"
// tinderuser.isloggedin=false
// console.log(tinderuser)


// const obj1={"name":"sujal",surname:"prajapati"}
// const obj2={name:"shivi",surname:"sharma"}

// console.log(obj1.hasOwnProperty("name"))


// const course={

//     subject:"mathemetics",
//     roll_no:145,
// }


// const {roll_no:phase}=course;
// console.log(phase)


// function calculateprice(val1,val2,...num1){
//     let s=val1+val2;
//     console.log(s)
//     return num1;

// }

// console.log(calculateprice(200,400,600,800))


// let obj={
//     islogged:true,
//     movie_name:"veer"
// }


// function handleObject(val){

//     console.log(`movie name is ${val.movie_name}`);

// }

// handleObject(obj)
// const arr=[44,64,45];
// function returnsecod(getarray){
//     return getarray;
// }


// console.log(returnsecod(arr))



//  function one(){

//     const a="mohan";

//     function b(){
//         console.log(a)
//     }
//     b()
//  }
//  one();


// const user={
//     username:"sujal",
//     price:999,

//     welcome:function(){
//         console.log(`welcome to ${this.username}`);
//     }
// } 


// user.welcome();

let a=3;
if(a===3){
    console.log("right")
}


 







