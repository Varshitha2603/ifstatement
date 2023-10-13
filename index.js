//---------------------Check if a number is odd or even in JavaScript-----------------------------------
// let num=parseInt(prompt("Enter the num number"));
// if (num === num){
// if (num%2 == 0) 
// {
//     console.log("It is an even number");
// }
// else
// {
//     console.log("It is an odd number");
// }
// }
// else 
// {
//     console.log("Enter a number");
// }

//--------------------Check if input variable is a number or not-----------------------------------
// let num=parseInt(prompt("Enter a value of number"));
// if (num === num)
// {
//     console.log("It's a number");
// }
// else
// {
//     console.log("It's not a number");
// }

// ------------------------Find the largest of two numbers, Get the input using prompt-------------------------
// let num1=parseInt(prompt("Enter a value of num1"));
// let num2=parseInt(prompt("Enter a value of num2"));
//   if (num1==num1 && num2==num2)
//   {
//     if (num1>=num2)
//     {
//     console.log(num1 + " " + "Is the largest number");
//     }
//     else
//     {
//     console.log(num2 + " " +"Is the largest number");
//     }
//   }
//   else 
//   {
//   console.log("Enter a value");
//   }

// //-------------------------Find the largest of three number----------------------------------------
// let num1=parseInt(prompt("Enter a value of num1"));
// let num2=parseInt(prompt("Enter a value of num2"));
// let num3=parseInt(prompt("Enter a value of num3"));
// if (num1!=num2!=num3){
// if (num1<num2 && num2<num3 || num1<num2 && num2>num3) 
// {
//  if (num1>num2 && num1>num3)
//  {
//     console.log(num1 + " " + " num1 Is the largest number");
//  }
//  else if (num2>num1 && num2>num3)
//  {
//    console.log(num2 + " " +" num2 Is the largest number");
//  } 
//  else
//  {
//    console.log(num3 + " " +" num3 Is the largest number");
//  }
// }
//  else if (num2>num3 && num2>num1)
//   {
//     console.log(num2 + " " +" num2 Is the largest number");
//   }
//   else if (num3>num1 && num3>num2)
//   {
//     console.log(num3 + " " +" num3 Is the largest number")
//   }
//   else
//   {
//     console.log("Not a value");
//   }
// }
// else 
// {
//   console.log("Enter a value");
// }

//-------------------Find whether the number is present in given range-------------------------------------
// let startrange=prompt("Enter a starting range");
// let endrange=prompt("Enter a ending range");
// let num=prompt("Enter a num");
// if (startrange>=num && endrange<=num)
//   {
//     console.log("Between the range");
//   }
// else 
//   {
//     console.log("Outside the range");
// }

//-----------------------------------Check whether the given year is leap year or not--------------------------------

// let year=prompt("Enter a year from 20000 to 30000");
// if ((year % 4 == 0) && !(year % 100 == 0) || (year % 400 == 0))
// {
//     alert("Given year is a leap year");
// }
// else 
// {
//     alert("Given year is not a leap year");
// }

//-------------------------------Find the three largest number-----------------------------------------------------
//  let a=parseInt(prompt("Enter 'a' value"));
// let b=parseInt(prompt("Enter 'b' value"));
// let c=parseInt(prompt("Enter 'c' value"));
// if (a == b || b == c || c == a)
// {
//     if (a == b && b == c)
//     {
//         console.log("All the values are equal");
//     }
//     else if (a == b)
//     {
//         if(b < c)
//         {
//             console.log("a and b is less than c");
//         }
//         else
//         {
//             console.log("a and b is greater than c");
//         }
//     }
//     else if (b == c)
//     {
//         if (c < a)
//         {
//             console.log("b and c is less than a");
//         }
//         else
//         {
//             console.log("b and c is greater than a");
//         }
//     }
//     else if (c == a)
//     {
//         if (a < b)
//         {
//             console.log("c and a is less than b");
//         }
//         else
//         {
//             console.log("c and a is greater than b");
//         }
//     }
// }
// else if (a > b && a > c)
// {
//     console.log("a is the largest number");
// }
// else if (b > c)
// {
//     console.log("b is the largest number");
// }
// else
// {
//     console.log("c is the largest number");
// }

// ----------------------------------Range--------------------------------------------------------------------
// let startrange=parseInt(prompt("Enter the starting range value"));
// let endrange=parseInt(prompt("Enter the ending range value"));
// let num=parseInt(prompt("Enter the any number"));
// if (startrange>endrange)
// {
//     if (num > startrange && endrange < num)
//     {
//         console.log("Between the range");
//     }
//     else
//     {
//         console.log("Outside the range");
//     }
// }
// else
// {
//     if (num > startrange && endrange < num)
//     {
//         console.log("Between the range");
//     }
//     else
//     {
//         console.log("Outside the range");
//     }
// }

// let text = "Please visit Microsoft and Microsoft";
// console.log(text);
// let newText = text.replace(/Microsoft/g, "W3Schools");
// console.log(newText);

// --------------------------------------------Swapping---------------------------------------------------------
// let a = parseInt(prompt("Enter 'a' value"));
// let b = parseInt(prompt("Enter 'b' value"));
// let c;
// c=-((a**2-b**2)+b);
// b=c;
// a=(a+b+c)/2;
// console.log(a);
// console.log(b);