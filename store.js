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
            obj.id = _id;
            return obj;
        },
        _checkExist:function(info){
            //TODO think about need to check same info want to store to database check
        },
        _checkFiledExist:function(_f){
            return _filed.toString().indexOf(_f)!==-1;
        },
        _getItem:function(item){
            return _ls.getItem(item)?_pf._toJson(_ls.getItem(item)):{};
        },
        _setItem:function(id,item){
            _ls.setItem(id,_pf._toString(item));
        },
        _removeItem:function(id){
            _ls.removeItem(id);
        },
        _clear:function(){
            _ls.clear();
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
                if(!_pf._compare(_pf._getItem(FNAME)||[],new_filded)){
                    _pf._setItem(FNAME,new_filded);
                }
            }
           _filed = _pf._getItem(FNAME);
        },
        addOne:function(info){
            var id = null;
            if(_pf._isJson(info)){
                id = _pf._getNewId();
                var _info = _pf._getFullInfo(id,info);
                _ls.setItem(id,_info);
            }
            return id?{status:true,message:'add successed',id:id}:{status:false,message:'wrong json input'};
        },
        getOne:function(id){
            return _pf._isId(id)?{status:true,message:'get successed',value:_pf._getItem(id)}:{status:false,message:'get failed , wrong id input or id not exist'};
        },
        queryAll:function(_param){
            var _filed = _param.filed,
            _keyWords = _param.value,
            all = [],
            obj = {};
            for(var s in _ls){
                if(s!==FNAME){
                    obj = _pf._getItem(s);
                    if(obj[_filed] === _keyWords){
                        all.push(obj);
                    }
                }
            }
            return all;
        },
        updateOne:function(id,info){
            var old = this.getOne(id);
            var status = old.status&&_pf._isJson(info);
            if(status){
                var obj = old.value;
                for(var i in info){
                    if(_pf._checkFiledExist(i)){
                        obj[i] = info[i];
                    }
                }
                _pf._setItem(id,obj);
            }
            return {status:status};
        },
        updateAll:function(_param,info){
            var all = this.queryAll(_param);
            var _this = this;
            all.forEach(function(obj){
                _this.updateOne(obj.id,info);
            });
        },
        likely:function(_param){
            var _filed =  _param.filed;
            var _keyWords = _param.value;
            var obj = {},
            all = [];
            for(var s in _ls){
                if(s!==FNAME){
                    obj = _pf._getItem(s);
                    if(obj[_filed].indexOf(_keyWords)!==-1){
                        all.push(obj);
                    }
                }
            }
            return all;
        },
        likelyAll:function(_param){
            var _keyWords = _param.value,
            obj={},
            all = [];
            for(var s in _ls){
                if(s!==FNAME){
                    obj = _pf._getItem(s);
                    if(_pf._toString(obj).indexOf(_keyWords)!==-1){
                        all.push(obj);
                    }
                }
            }
            return all;
        },
        deleteOne:function(id){
            var status = null;
            if(_pf._isId(id)){
                status = _ls.getItem(id);
                _pf._removeItem(id);
            }
            return status!==null;
        },
        deleteAll:function(){
            _pf._clear();
        }
    };
    for(var s in Store.prototype){
        store[s]= Store.prototype[s];
    }
    return store;
});