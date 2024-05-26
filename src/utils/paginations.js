import _ from "lodash";
export function PaginationsCal(items,page,pageSize){
   const startIndex = (page-1) * pageSize
   return  _(items).slice(startIndex).take(pageSize).value()
}