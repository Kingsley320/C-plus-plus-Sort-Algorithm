var subsets = function(nums) {
    
  let arr=[];
  arr.push([])
  for (let i = 0; i<nums.length; i++){
    let k=0;
    let j = i;
    let subarr = [];
    let fullset = []
    arr.push([nums[i]])
    fullset.push(nums[i])
    while(j != 0){
      subarr.push(nums[k],nums[i])
      arr.push(subarr)
      subarr = [];
      k++
      j--
    }
    let l = [...fullset, nums[i+1]];
//     console.log(fullset, l)
//     if(arr.includes(l)){
//     arr.push(l)
//     }
  }
  return arr
};

console.log(subsets([1,2,3]))
