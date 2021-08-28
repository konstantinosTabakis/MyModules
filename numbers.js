// REversing a number 

function reverseNumber(num){
    let result=""
    let limit=0
    x=num.toString()
    if(x.charAt(0)=="-"){
        result+=x.charAt(0)
        limit=1
    }
    for(let i=x.length-1;i>=limit;i--){
        result+=x.charAt(i)
    }
    return parseInt(result) 
}
function reverseNumberPositives(num){

    let result=0
    while(num!=0){
        let pop=num%10
        result=result*10 + pop
        num=Math.floor(num/10)
    }
    return result
}


// Roman to integer
function romanToInt(roman){
    let result= romans(roman.charAt(0))
    for(i=1;i<roman.length;i++){
        if(result>= romans(roman.charAt(i))){
            result+=romans(roman.charAt(i))
        }else{
            result=romans(roman.charAt(i))-result
        }
    }
    return result
}

function romans(digit){
    if(digit=="I"){
        return 1
    }else if(digit=="V"){
        return 5
    }else if (digit=="X"){
        return 10
    }else if(digit== "L"){
        return 50
    }else if(digit=="C"){
        return 100
    }else if(digit=="D"){
        return 500
    }else{
        return 1000
    }
}


// merge two sorted lists

var mergeTwoLists = function(l1, l2) {
    let result=[]
    let p1=0,p2=0
    while (l1.length>p1 || l2.length>p2){
        if(l1[p1]==undefined || l1[p1]>=l2[p2]){
            result.push(l2[p2])
            p2++
        }else if(l2[p2]==undefined || l2[p2]>l1[p1]){
            result.push(l1[p1])
            p1++

        }
    }
    return result
}

// search insert Position

var searchInsert = function(nums, target) {
    let result=nums.length
    for(let i=0;i<nums.length;i++){
        if(target<=nums[i]){
            result=i
            break
        }
    }
    return result  
};

//maximum subArray
var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let prevMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        prevMax = Math.max(nums[i], nums[i] + prevMax);
        if (prevMax > maxSoFar){
            maxSoFar = prevMax;
        }
    }
    return maxSoFar;
};

//factorial

function factorial(num){
    if(num==1 || num==0){
        return 1
    }
    return num*factorial(num-1)
}

// trailling zeros of N factorial

function zeros (n) {
    n=factorial(n)
    let result=0
    while(true){
        if(n%10==0){
            result++
            n=Math.floor(n/10)
        }else{
            break
        }
    }
    return result      
}

// binary tree Path sum

var hasPathSum = function(root, targetSum) {
    let i=0, height=2, sums=[]
    while(i<=root.length){
        
    }
};
 