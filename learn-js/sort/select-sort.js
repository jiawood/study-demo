//选择排序，就是所有的值与最后一个值相比较，然后将最大的值放到最后
function selectSort(arr){
  let n = arr.length
  for(let i = n - 1; i >= 0; i--){
    for(let j = 0; j < i; j++){
      if(arr[j] > arr[i]){
        swap(i,j)
      }
    }
  }
  return arr

  function swap(i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}
