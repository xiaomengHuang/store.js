/**
 * @author kevin
 * @function making localStorage powerful and user can use in a easy way
 *
 */
(function(fn){
    var g;
    if (typeof window !== "undefined") {
        g = window;
    } else if (typeof self !== "undefined") {
        g = self;
    } else {
        g = this;
    }
    g.store = fn();
})(function(){
    'use strict';

    var fn,
        store={},
        _filed=[],
        private_function;

    const FNAME = 'store_filded';

    var _ls = window.localStorage;

    if(!_ls){
        console.log('your environment does not support localStorage');
        return null;
    }

    var _pf = private_function = {
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
            return id.length===36&&id.indexOf('-')===8;
        },
        _getNewId:function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        },
        _compare:function(_old,_new) {
                return (_old.length === _new.length)&&(_old.sort().toString() ===_new.sort().toString());
        },
        _getFullInfo:function(_id,_info){
            var obj = {};
            _filed.forEach(function(_f) {
                obj[_f] = _info[_f]||'';
            });
            return obj;
        }
    };

    function Store (){
        if(!this instanceof Store){
            return new Store();
        }
    }

    Store.prototype = {
        init:function(new_filded){
            if(new_filded instanceof Array){
                if(!_pf._compare(JSON.parse(_ls.getItem(FNAME))||[],new_filded)){
                    _ls.setItem(FNAME,_pf._toString(new_filded));
                }
            }
           _filed = _pf._toJson(_ls.getItem(FNAME));
        },
        addOne:function(info){
            var id = null;
            if(_pf._isJson(info)){
                id = _pf._getNewId();
                info.id = id;
                _ls.setItem(id,_pf._toString(info));
            }
            return id?{status:true,message:'add successed',id:id}:{status:false,message:'wrong json input'};
        },
        /**
         * @function use id get one
         * @param id
         */
        getOne:function(id){
            return _pf._isId(id)?{status:true,value:_pf._toJson(_ls.getItem(id))}:{status:false};
        },
        /**
         * @function use info to get all who has this info
         * @param info
         */
        queryAll:function(info){
            var _filed = info.filed;
            var _keyWords = info[_filed];
            console.log(_ls,'-------');
            _ls.forEach(function(){

            });
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
    };
    for(var s in Store.prototype){
        store[s]= Store.prototype[s];
    }
    return store;
});