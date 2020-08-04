//将无序的部分插入到有序的部分
//将第一个元素设定为有序，然后将后面的元素放到前面的元素中
//可以直接遍历前面的数组，从第一个开始遍历，直到找到第一个大于所给值的数，然后将这个数插入到它的前面
//优化，寻找插入位置的时候，使用二分查找
function insertSort(arr){
  let n = arr.length
  if(n < 2){
    return arr
  }
  let res = [arr[0]]
  for(let i = 1; i < n; i++){
    if(arr[i] > res[res.length - 1]){
      res.push(arr[i])
      continue
    }
    for(let j = 0; j < res.length; j++){
      if(arr[j] > arr[i]){
        res.splice(j,0,arr[i])
        break
      }
    }
  }
  return res
}
