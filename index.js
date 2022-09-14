// Your code here
class Polygon{
    constructor(arr){
        this.arr=[]
    }
    get(arr){
        return arr.lenghth
    }
    get (perimeter){
        for (let i = 0; i < 
            this.arr.length; i += 1) {
           return perimeter+= array[i]
            }
    }
}
class Triangle extends Polygon{
    sides(updated){
        this.arr.push(updated)
        this.arr.length<3
    }
    isvalid(){
        if(arr[0]+ arr[1]<arr[2] && arr[2]+ arr[1]<arr[0] && arr[0]+ arr[2]<arr[1])
        return 'the triangle is valid'
        else{console.log('the triangle is invalid')}
    }
    
}

class square extends Polygon{
    sides(side){
        this.arr.push(side)
        this.arr.leghth< 5
        if(arr[0]===arr[1]&& arr[2]===arr[3]&&arr[2]===arrr[0]){
            return 'it is a valid square'
        }
        else{return 'not valid'}
    }
}