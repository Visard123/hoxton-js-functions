/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */




           /*Number One */
// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a, b) {
 
 return a + b;
  
  }
  add(a,b)
  console.log(add(a,b))


  
             /*Number Two */      
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(number) {
    if (number%2==0)
    return "Even "
    else{
      return "Odd"
    }
  isEven()
  console.log(isEven())
    
  
   
          /*Number Three */    
  let name= prompt("What is your Name?")
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name) {
  
 return `Hello, ${name}`;

  }
  greet (name)
console.log( greet (name))




          /*Number Four */    
let age= Number (prompt('How old are you?'))

  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {

    if (age>18 )

 return 'Come in'
 return 'Go to your mama'
    }
    isAnAdult(age)
    console.log( isAnAdult(age))

  }
  

           /*Number Five */    
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(age) {
       let Age = 18-age;
        if(Age>0)  //This is just to avoid a negative number is someone is over 18.
       return `come back in,  ${Age} years`
    // write your code here
  }
  yearsToAdulthood(age)




           /*Number Six */    
  let age= Number (prompt('How old are you?'))
  let name= prompt("What is your name?")
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(age, name) {
    let Age = 18-age;
    if (age>18 )
    return `Hello Mr ${name}`
    return ` ${name} Come back in ${Age} years `
    
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
  }
  admit(age,name)

