# store.js
-------------------------------------------------------------------------

### this JS file is for user who want to use localStore as database
### so i offered some methods for user can use localStore in a easy way


## version

### 1.0.0

## Installation
-------------------------------------------------------------------------
### for this version is a test version and i didn't upload the js to npm
### so , u can't install use npm install . User have to copy the file to 
### your project and import the file to the HTML file. just like...

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>import</title>
    <script src="store.js"></script>
</head>
<body>
</body>
</html>
`

## Example
---------------------------------------------------------------------------

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>import</title>
    <script src="store.js"></script>
</head>
<body>
<script>
    store.init(['test1','test2']);
    var back = store.addOne({test1:'1',test2:'2'});
    console.log(back);
    var t = store.getOne(back.id);
    console.log(t);
    var all = store.queryAll({filed:'test1',value:'1'});
    console.log(all);
    var t = store.likely({filed:'test1',value:'q'});
    console.log(t);
    var t = store.likelyAll({value:'3'});
    console.log(t);
    var t = store.deleteOne('ab8b8724-8898-464f-8b74-75b642f7e6af');
    console.log(t);
    //store.deleteAll();
</script>
</body>
</html>
`

## APIs
--------------------------------------------------------------------------

### init(param) 
* @param : array needed
* @function : this method is for init store , and confirm the fileds
* @example : store.init(['name','age','sex']);


### addOne(param)
* @param : json obj needed
* @function : this method is for add one item to DB , but please
    input correct filed or the data will not not be saved.
* @example : store.addOne({name:'kevin',age:'28',sex:'male'});
* @notice : if u call the method like  
    store.addOne({test1:'kevin',test2:'28',test3:'male'});
    it will save an empty item to DB. 
    ----> {name:'',age:'',sex:'',id:'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'}


### getOne(param)
* @param : id needed after u add a new item u will get a id
* @function : get info user id
* @example : store.getOne('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');


### queryAll(param)
* @param : json obj needed 
* @function : get all items which filed equal the keywords
* @example : store.queryAll({filed:'age',value:'28'});
    //get all age=28 items
* @notice : user have to comply with the input rule 
    {filed:'*',value:'*'} and now u only can check on filed
    more the one fileds support will be finished in next version


