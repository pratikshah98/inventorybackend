var db=require('../dbconnection');
var inventory={
    getAllInventory:function(callback){
        return db.query("select * from  inventory_tbl",callback);
    },
    getInventoryById:function(inventory_id,callback){
        return db.query("select * from inventory_tbl  where inventory_id=?",[inventory_id],callback);
    },
    addInventory:function(item,callback){
        return db.query("insert into inventory_tbl values(?,?,?)",[item.inventory_name,inventory_description,inventory_price],callback);
    },
    updateInventory:function(inventory_id,item,callback){
        return db.query("update  inventory_tbl set inventory_name = ?,inventory_description = ?,inventory_price= ? where inventory_id=?",[inventory_name,item.inventory_description,inventory_price,inventory_id],callback);
    },
    deleteInventory:function(inventory_id,callback){
   
         return db.query("delete from inventory_tbl where inventory_id in (?)",[inventory_id],callback);
   }, 
   


};
module.exports=inventory;