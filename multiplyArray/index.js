const multiplyArray = (val) => {
    // please write your solution here
}


const testCase = (value = Array, testNumber, expectedResult) => {
    return console.log(testNumber == expectedResult 
        ? `multiply ${value} is equivalent with ${expectedResult}` 
        : `Expected ${expectedResult} but got ${testNumber}`);
}

testCase([1,2,3], multiplyArray([1,2,3]), 6);
testCase([4,8,2,9], multiplyArray([4,8,2,9]), 576);
testCase([15,210,32], multiplyArray([15,210,32]), 100800);