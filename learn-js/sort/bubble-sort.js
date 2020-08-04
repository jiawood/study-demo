//冒泡排序就是将相邻的两个值相比较，然后一轮操作之后将最大的值放到末尾
//剪枝：如果在一轮操作中，没有对换，那么说明排序已结束，可以直接结束程序
function bubbleSort(arr){
  let n = arr.length
  let sortOver = true
  for(let i = n-2; i >= 0; i--){
    for(let j = 0; j <= i; j++){
      if(arr[j] > arr[j+1]){
        swap(j,j+1)
        sortOver = false
      }
    }
    if(sortOver){
      break
    }
  }
  return arr


  function swap(i,j){
    let tep = arr[i]
    arr[i] = arr[j]
    arr[j] = tep
  }
}

