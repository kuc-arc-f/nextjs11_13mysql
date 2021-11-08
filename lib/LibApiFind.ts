import moment from 'moment'

const LibApiFind = {
  convertItems: function(items: any[]){
    const ret: any[] =[];
    items.forEach(function(item){
      let dt = moment(item.createdAt);
      const dtStr = dt.format("YYYY-MM-DD HH:mm")
//console.log(dt)
      item.createdAt = dtStr;
      ret.push(item)                        
    });        
    return ret
  },
  convertItemOne: function(item: any){
    let ret ={}
    const row: any ={
      id: item.id,
      created_at: item.createdAt,
    }
    item.values.forEach(function(value_item :any){
      row[value_item.name] = value_item.value
    })
    ret = row
    return ret
  },

}
export default LibApiFind;
