//归并排序，肯定是用了递归，时间复杂度O(n*log(n))
//基本的思路是：先拆分，将数组拆分成左右两边，然后将左右两边的数合并
//拆分的最小单元为1个，然后1个1个两两合并，合并的时候按从小到大的顺序
//合并过程中i,j两个数组的指针，k公共指针
function mergeSort(ary){
  if(ary.length <= 1){
    return ary
  }
  let mid = ary.length / 2 | 0 //好像是右中位数，但是无所谓
  let left = mergeSort(ary.slice(0,mid))
  let right = mergeSort(ary.slice(mid))
  let m = left.length
  let n = right.length
  let i = 0
  let j = 0
  let k = 0
  let res = []
  while(i < m && j < n){
    if(left[i] < right[j]){
      res[k++] = left[i++]
    }else{
      res[k++] = right[j++]
    }
  }
  while(i < m){
    res[k++] = left[i++]
  }
  while(j < n){
    res[k++] = right[j++]
  }
  return res
}
