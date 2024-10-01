import json from './json/data.json'
export default{
    data(){
        return{
            myJson: json
        }
    }
}
var ele = new Vue({
    el : "#YourElement", 
   data : ObjName
});