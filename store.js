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

    let _ls = window.localStorage;

    if(!_ls){
        console.log('your environment does not support localStorage');
        return null;
    }

    let _pf = private_function = {
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
        },
        _getNewId:function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        },
        _compare:function(_old,_new) {
            if(_old.length === _new.length){
                _old
            }
        }
    };

    function Store (){
        if(!this instanceof Store){
            return new Store();
        }
    }

    Store.prototype = {
        init:function(new_filded){
            if(new_filded instanceof Array?(_pr._compare(JSON.parse(_ls.getItem('filed')),new_filded)):false){
                
            }
        },
        addOne:function(info){
            let id = null;
            if(_pf._isJson(info)){
                id = _pf._getNewId();
                info.id = id;
                _ls.setItem(id,_ls._toString(info));
            }
            return id?{status:true,message:'add successed',id:id}:{status:false,message:'wrong json input'};
        },
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