// Given an array of integers 'nums' and an integer 'target',
// return indices of the two numbers such that they add up to target

const twoSum = (nums, target) => {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums[i]);
        const element = target - nums[i];
        if (element in hashMap ) {
            return [hashMap[element],i];
        }
        hashMap[nums[i]] = i;
    }
    
}

