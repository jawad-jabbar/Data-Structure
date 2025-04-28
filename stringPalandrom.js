// check string palandrom

const isPalindrome = (str) => {
    str = str.toLowerCase()
    let reverseStr = str.split('').reverse().join('')
    if(str === reverseStr){
        return console.log(`${str} is Palindrome.`)
    } else {
        return console.log(`${str} is not Palindrome.`)
    }
}

isPalindrome("Wow");  
isPalindrome("hello");
isPalindrome("noon")
