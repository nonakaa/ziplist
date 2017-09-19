let list1 = ['a','b','c'];
let list2 = [1,2,3];

function zipList(list1,list2){
  let newList =[];
  if(list1.length === list2.length){
    for(let i = 0; i<list1.length; i++){
      newList.push(list1[i],list2[i]);
    }
  }
  return newList;
}

function zipListTheSimpleWay(list1,list2) {
  return _.flatten(_.zip(list1,list2));
}
console.log(zipList(list1,list2));
console.log(zipListTheSimpleWay(list1,list2));