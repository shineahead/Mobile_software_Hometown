//用来存储美食的数据文件

// 川味小吃
var snack = {
  food_left: [
    {
      id: "snack001",
      lid: 4,
      name: "麻辣兔头",
      title: "川味小吃",
      image: "/images/麻辣兔头.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.9",
      introduction: "麻辣兔头是四川小吃中的一道特色美食。这道菜以新鲜的兔头为主要原料，将兔头切割成块，然后用各种香辛调料，如花椒、辣椒、姜蒜等，烹制而成。麻辣兔头的名字源自其独特的麻辣口感，这里的“麻辣”代表了四川菜的经典风味。兔头的肉质鲜美，配以香辣的调味汁，味道浓郁，香气扑鼻。这道小吃常常作为下酒菜或小吃摊的招牌之一，是四川街头巷尾的独特美食。"
    },{
      id: "snack003",
      lid: 0,
      name: "翘脚牛肉",
      title: "川味小吃",
      image: "/images/翘脚牛肉.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "95%好评|尝试人数超10w+|评分超9.5",
      introduction: "翘脚牛肉，是四川小吃中的一道特色菜品。这道菜以牛蹄筋为主要食材，将牛蹄筋切成薄片，然后经过烹煮和腌制，使其变得嚼劲十足，鲜嫩可口。翘脚牛肉的调味汁通常由大蒜、辣椒、花椒、香菜等香料调制而成，味道麻辣鲜美。它的名字来源于牛蹄筋的特殊形状，像是“翘起的脚”。这道小吃具有浓郁的川味，香气扑鼻，风味独特，经常作为小吃或夜宵的选择，深受食客喜爱。"
    },{
      id: "snack005",
      lid: 1,
      name: "灯影牛肉",
      title: "川味小吃",
      image: "/images/灯影牛肉.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "94%好评|尝试人数超1000w+|评分超9.7",
      introduction: "灯影牛肉，是四川小吃中的一道传统美食。这道菜的主要原料是嫩牛肉，通常选用牛里脊肉或牛肉片。牛肉切成薄片后，先经过煮熟，然后用特制的调味酱汁浸泡，以增加味道。灯影牛肉的调味料包括蒜蓉、香醋、花椒等，为这道菜赋予了酸辣的风味。这道川菜得名于其独特的制作方式，牛肉薄如纸，透光后如同灯影一般。灯影牛肉以其鲜嫩的口感和浓烈的川味而著称，常常成为四川小吃摊上的一道招牌菜。"
    },{
      id: "snack007",
      lid: 2,
      name: "叶儿粑",
      title: "川味小吃",
      image: "/images/叶儿粑.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "98%好评|尝试人数超10w+|评分超9.6",
      introduction: "叶儿粑，是四川小吃中的一种独特美食。它是由糯米粉和花生糖制成的，通常呈扁平的圆形或椭圆形。叶儿粑的外部有一层花生糖的糖衣，外脆内软，糯米香甜。这道小吃因其外形像极了植物的叶子而得名。叶儿粑具有浓郁的花生香味和甜度，口感丰富。它常常作为下午茶点心或零食，是四川地区的传统糕点之一，受到各年龄层的人们欢迎。"
    },{
      id: "snack009",
      lid: 3,
      name: "冰粉",
      title: "川味小吃",
      image: "/images/冰粉.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "100%好评|尝试人数超100w+|评分超9.7",
      introduction: "冰粉是四川小吃中的一道清凉美食，特别适合夏季享用。这道菜主要由凉粉制成，凉粉是一种用绿豆粉制成的透明半固体食品，质地滑嫩。冰粉通常会搭配各种调味料和配料，如花生碎、芝麻、糖水、酱油等。这道小吃的独特之处在于其冰凉清爽的口感，尤其是在炎热的夏季，是一种消暑的美食选择。冰粉可以根据个人口味选择不同的调味料，因此风味多样，受到四川地区和其他地方食客的喜爱。"
    }
  ], 
  food_right: [
    {
      id: "snack002",
      lid: 1,
      name: "龙抄手",
      title: "川味小吃",
      image: "/images/龙抄手.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超10w+|评分超9.5",
      introduction: "龙抄手，是四川小吃中的一道招牌面点，广受各地食客的喜爱。其主要为猪肉馅料的小型馄饨，馅中常混入虾仁、香菇等食材，增加口感和香味。制作过程中，选用的面皮薄而滑嫩，每个抄手都包裹得小巧玲珑。煮熟后，常配以麻油、葱花、辣椒油等调料，赋予其特有的麻辣鲜香口感。龙抄手不仅是四川人民的日常小吃，还常出现在各大宴会和餐厅的点心菜单中，与红油炸酱面、担担面并列为四川的“三大面”。"
    },{
      id: "snack004",
      lid: 2,
      name: "糍粑",
      title: "川味小吃",
      image: "/images/糍粑.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "96%好评|尝试人数超100w+|评分超9.2",
      introduction: "糍粑是四川小吃中的一道传统糕点，也是一种富有特色的甜点。它由糯米制成，通常呈方形或圆形，具有柔软的口感。糍粑的制作过程包括将糯米蒸熟，然后与红糖、花生、芝麻等各种香料和配料混合。这使得糍粑具有甜蜜的味道和浓郁的香气。糍粑既可以作为零食，也可以作为甜点，深受四川人民的喜爱。它常常在节庆、婚礼、新年等重要场合担当着传统的糕点之一，代表着四川的美食文化。"
    },{
      id: "snack006",
      lid: 3,
      name: "凉面",
      title: "川味小吃",
      image: "/images/凉面.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "95%好评|尝试人数超1000w+|评分超9.9",
      introduction: "四川凉面是一道清爽美味的小吃，特别适合炎炎夏日。这道菜的主要成分是宽阔的凉面，通常用鸡蛋、豆腐、黄瓜、葱姜蒜、辣椒等各种配料一同搭配。最重要的是浇在面上的麻辣酱汁，酱汁由花生酱、香油、香醋、辣椒粉等调味料调制而成，味道麻辣鲜香。四川凉面的特点是凉爽清新、麻辣美味，是一道消暑的佳肴，广受四川人和各地食客的欢迎。"
    },{
      id: "snack008",
      lid: 4,
      name: "麻辣土豆",
      title: "川味小吃",
      image: "/images/麻辣土豆.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "98%好评|尝试人数超100w+|评分超9.5",
      introduction: "麻辣土豆是四川小吃中的一道美味佳肴，以其独特的麻辣风味而著名。这道菜的主要原料是土豆，通常将土豆切成薄片或丝，然后油炸至酥脆。接着，将炸好的土豆片与大蒜、花椒、辣椒、花生等调味料一同翻炒，使其均匀裹上麻辣酱汁。麻辣土豆的特点是辛辣麻辣，鲜香诱人，酥脆可口。它通常作为下酒菜或小吃，是四川街头巷尾的独特美食之一，深受食客的喜爱。"
    },{
      id: "snack010",
      lid: 0,
      name: "小酥肉",
      title: "川味小吃",
      image: "/images/小酥肉.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超100w+|评分超9.6",
      introduction: "小酥肉是四川小吃中的一道美味佳肴。这道菜主要以猪肉为主要原料，将猪肉切成小块，然后用酱料和香料腌制一段时间。接着，将腌制好的猪肉块裹上一层薄薄的面粉，再炸至金黄酥脆。小酥肉的外酥内嫩，味道香脆，酥而不腻。这道小吃通常搭配辣椒、蒜末、香菜等调味料一起食用，增添了一份麻辣的风味。小酥肉常常作为下酒菜或小吃，深受四川人民的喜爱。"
    }
  ]
}

//获取食物列表总数
function getTotal(){
  return snack.food_left.length
}

//获取食物列表
function getFoodList(n) {
  let obj = {
    food_left: [],
    food_right: []
  }
  //左边
  for (var i = 0; i < n; i++){
    let temp = {}
    temp.id = snack.food_left[i].id
    temp.lid = snack.food_left[i].lid
    temp.name = snack.food_left[i].name
    temp.image = snack.food_left[i].image
    temp.evaluate = snack.food_left[i].evaluate
    obj.food_left.push(temp)
  }
  //右边
  for (var i = 0; i < n; i++){
    let temp = {}
    temp.id = snack.food_right[i].id
    temp.lid = snack.food_right[i].lid
    temp.name = snack.food_right[i].name
    temp.image = snack.food_right[i].image
    temp.evaluate = snack.food_right[i].evaluate
    obj.food_right.push(temp)
  }

  return obj
}

//获取食物详情
function getFoodDetail(id){
  let msg = {
    code: "404",
    data: {}
  }

  //先找左边
  for (var i = 0; i < snack.food_left.length; i++){
    if (id == snack.food_left[i].id){
      msg.code = "200"
      msg.data = snack.food_left[i]
      break;
    }
  }

  //再找右边
  for (var i = 0; i < snack.food_right.length; i++){
    if (id == snack.food_right[i].id){
      msg.code = "200"
      msg.data = snack.food_right[i]
      break;
    }
  }

  return msg
}

//随机给出一个对象
function getRandomObj(){
  var n = getTotal()
  var rank = Math.ceil(Math.random() * n)
  var id
  if (rank < 10) id = "0" + rank.toString(10)
  else id = rank.toString(10)  

  id = "snack0" + id
  return getFoodDetail(id)
}

function modify(id, list){
  let msg = {
    code: "404",
    data: {}
  }

  //先找左边
  for (var i = 0; i < snack.food_left.length; i++){
    if (id == snack.food_left[i].id){
      msg.code = "200"
      msg.data = snack.food_left[i]
      snack.food_left[i].check = [].concat(list)
      break;
    }
  }

  //再找右边
  for (var i = 0; i < snack.food_right.length; i++){
    if (id == snack.food_right[i].id){
      msg.code = "200"
      msg.data = snack.food_right[i]
      snack.food_right[i].check = [].concat(list)
      break;
    }
  }
}

// 对外暴露接口
module.exports = {
  getFoodList: getFoodList,
  getFoodDetail: getFoodDetail,
  getTotal: getTotal,
  getRandomObj: getRandomObj,
  modify: modify
}