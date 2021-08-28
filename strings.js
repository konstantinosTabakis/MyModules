// largest common prefix of array 

function largestPrefix(strs){
    let pivot= strs[0]
    for(i=1;i<strs.length;i++){
        for(j=pivot.length;j>0;j--){
            if(strs[i].indexOf(pivot)==-1){
                pivot=pivot.substr(0,j-1)
            }else {
                break
            }

        }
    }
    return pivot
}

// implement strStr()

function strStr(haystack,needle){
    if(needle==""){
        return 0
    }else{
        return haystack.indexOf(needle)
    }
}

// length of last word

var lengthOfLastWord = function(s) {
   s=" "+ s.trimRight()
   let result=0,i=s.length-1
   while (true) {
        if(s[i]==" "){
            break
        }
        result++
        i--
   }
   return result  
};


// Valid palindrome


var isPalindrome = function(s) {
   s = s.toLowerCase().replace(/[^a-z0-9]/ig, "")  
   for(let i=0;i<s.length/2;i++){
        if(s[i] != s[s.length-i-1]){
           return false
        }
   }
   return true
};
