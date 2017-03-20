# store.js
-------------------------------------------------------------------------

### this JS file is for user who want to use localStore as database
### so i offered some methods for user can use localStore in a easy way


## version
-------------------------------------------------------------------------
### 1.0.0

## auther
-------------------------------------------------------------------------
### kevin


### for question
-------------------------------------------------------------------------
### if u find any questions ,or any improvements please send me email !!!
### huangxiaomeng_vip@126.com

## Installation
-------------------------------------------------------------------------
### for this version is a test version and i didn't upload the js to npm
### so , u can't install use npm install . User have to copy the file to 
### your project and import the file to the HTML file. just like...

> <script src="store.js"></script>

## Example
---------------------------------------------------------------------------

please check the store.html file 

## APIs
--------------------------------------------------------------------------

### init(param):void
* @param : array needed
* @function : this method is for init store , and confirm the fileds
* @example : store.init(['name','age','sex']);
* @notice : every time u change fileds ,it will delete all data first


### addOne(param):object
* @param : json obj needed
* @function : this method is for add one item to DB , but please
    input correct filed or the data will not not be saved.
* @example : store.addOne({name:'kevin',age:'28',sex:'male'});
* @notice : if u call the method like  
    store.addOne({test1:'kevin',test2:'28',test3:'male'});
    it will save an empty item to DB. 
    ----> {name:'',age:'',sex:'',id:'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'}
* @return : this method will return the new itme's id;


### getOne(param):object
* @param : id needed after u add a new item u will get a id
* @function : get info user id
* @example : store.getOne('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
* @return : this method will return the itme's obj;


### queryAll(param):array
* @param : json obj needed 
* @function : get all items which filed equal the keywords
* @example : store.queryAll({filed:'age',value:'28'});
    //get all age=28 items
* @notice : user have to comply with the input rule 
    {filed:'*',value:'*'} and now u only can check on filed
    more the one fileds support will be finished in next version
* @return : this method will return an array include all items Satisfy the param;


### updateOne(param,info):object
* @param : item id needed
* @info : the new info u want to save to the item , like...
    {name:'cathy',age:'26',sex:'female'}
* @function : update one itme info use id to get the item
* @examole : store.updateOne('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',{name:'cathy',age:'26',sex:'female'});
* @return : this method will return an obj "{status:true or false}" 


### updateAll(param,info):object
* @param : obj needed ,same with queryAll's param
* @info : the new info u want to save to items
* @function : update all item which has same filed
* @example : store.updateAll({filed:'sex',value:'female'},{age:'18',name:'*'});
    //all female forever 18 years old
    //!!!!more the one fileds u can modify
* @return : this method will return an obj :"{status:true or false}" 


### likely(param):array
* @param : obj needed ,same with queryAll's param
* @function : u can get all items which the correct filed 
    likely has the keywords 
* @example : store.likely({filed:'name',value:'k'});
    //u will get all item which name contains 'k'
* @return : this method will return an array , include all obj


### likelyAll(param):array
* @param : obj needed like "{value:'k'}"
* @function : get all items which contain 'k', 
    no matter which filed contain the keywords
* @example : store.likelyAll({value:'k'});
* @return : this method will return an array .


### deleteOne(param):onject
* @param : id needed
* @function : delete one item use id select
* @example : store.deleteOne('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
* @return : this method will return an obj:"{status:true or false}"


### deleteAll():void
* @function : delete all localStore info 
* @example : store.deleteAll();


## by the end
### if this file can help u ,please give me a star ~
