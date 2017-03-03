/**
 * @author kevin
 * @function making localStorage powerful and user can use in a easy way
 *
 */
(function(fn){

})(function(){
    var fn,
        private_function,
        Store;
    var LS = window.localStorage;
    if(!LS){
        console.log('your environment does not support localStorage');
        return null;
    }
    var PF = private_function = {
        _isJson : function(obj){
            return (obj instanceof Object)&&
            Object.prototype.toString.call(obj).toLowerCase() === "[object object]" &&
             !obj.length;
        },
        _toString : function(obj){
            return JSON.stringify(obj);
        },
        _toJson : function(str){
            return JSON.parse(str);
        },
        _isId : function(id){
            return true;//TODO check id
        }
    };

    function Store (){
        if(!this instanceof Store){
            return new Store();
        }
    }

    Store.prototype = {
        /**
         * @function use id get one
         * @param id
         */
        getOne:function(id){
            
        },
        /**
         * @function use info to get all who has this info
         * @param info
         */
        queryAll:function(info){

        },
        updateOne:function(id,info){

        },
        updateAll:function(info){

        },
        likelyAll:function(info){

        },
        deleteOne:function(id){

        },
        deleteAll:function(info){

        }
    }
});