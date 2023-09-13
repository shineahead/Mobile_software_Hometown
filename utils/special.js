//用来存储美食的数据文件

// 地方特色
var special = {
  food_left: [
    {
      id: "special001",
      lid: 2,
      name: "张飞牛肉",
      title: "地方特色",
      image: "/images/张飞牛肉.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.9",
      introduction: "内江张飞牛肉是四川地方特色的美食，得名于中国历史上著名的三国演义中的豪勇将领张飞。这道菜品以选用优质的牛肉为特点，通常是牛腱肉或牛脊肉，切成薄片。牛肉经过特制的腌制和调味，然后烹饪至外部微脆，内部保持嫩滑。关键的调味料包括辣椒酱、花椒、姜蒜等，赋予牛肉独特的四川风味，浓郁的辣味和麻辣口感。"
    },{
      id: "special003",
      lid: 3,
      name: "甜皮鸭",
      title: "地方特色",
      image: "/images/甜皮鸭.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.9",
      introduction: "乐山甜皮鸭是四川地方特色美食之一，因其独特的制作工艺和口味而广受欢迎。这道菜品以选用鸭子为主要材料，鸭皮炸得金黄酥脆，鸭肉嫩滑多汁。其特色在于独特的糖醋酱汁，这个汁料结合了酸甜口味，以及四川独特的辣味，带有微辣和微麻的风味。糖醋酱汁与鸭肉的搭配，构成了口感和味道的完美平衡。乐山甜皮鸭是四川餐桌上的一道珍馐，将甜美和辣味相结合，为食客带来了令人难以忘怀的美味体验。"
    },{
      id: "special005",
      lid: 4,
      name: "冷吃兔",
      title: "地方特色",
      image: "/images/冷吃兔.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.9",
      introduction: "自贡冷吃兔是四川地方特色美食之一，以其独特的制作方式和味道而著称。这道菜品选用嫩兔肉，切成薄片或块，然后用特制的调味料腌制。最引人注目的特色是使用冷水浸泡后再食用，因此得名'冷吃兔'。兔肉质鲜嫩，蘸配的调味料常常包括辣椒、花椒、姜蒜和香料，赋予兔肉丰富的麻辣和香味。这道菜独特的吃法和独特的调味，使自贡冷吃兔成为四川地方特色美食，吸引着食客们前来品尝。"
    },{
      id: "special007",
      lid: 0,
      name: "燃面",
      title: "地方特色",
      image: "/images/燃面.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.9",
      introduction: "宜宾燃面是四川地方特色美食，源自四川省宜宾市。这道菜品以细面条为主要食材，独特之处在于独特的红油酱汁。面条煮熟后，通常浇上浓郁的红油、花椒、蒜蓉、葱末等调味料，形成了麻辣的口味，赋予了宜宾燃面独特的风味。这道菜有着浓郁的辣味和麻味，因而非常受四川美食爱好者的喜爱。宜宾燃面以其独特的口味和丰富的调味汁料，成为四川地方特色中的一道令人垂涎的佳肴。"
    },{
      id: "special009",
      lid: 1,
      name: "豆花",
      title: "地方特色",
      image: "/images/豆花.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.9",
      introduction: "富顺豆花是四川地方特色美食，得名于四川省富顺县。这道菜品以细嫩的豆腐花为主要原料，制作工艺独特。首先，将黄豆浸泡、磨碎、过滤，得到浆汁，再将浆汁加热搅拌，形成豆腐花的细腻质地。最后，常常搭配特制的糖浆或辣椒酱，赋予豆腐花丰富的甜味或辣味，根据个人口味而定。富顺豆花有着细腻滑嫩的口感，以及独特的麻辣或甜味，常常成为四川地方特色小吃中的佳肴，让人流连忘返。"
    }
  ],
  food_right: [
    {
      id: "special002",
      lid: 1,
      name: "羊肉汤",
      title: "地方特色",
      image: "/images/羊肉汤.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超10w+|评分超9.5",
      introduction: "简阳羊肉汤是四川地方特色美食，起源于四川省简阳市。这道菜品以嫩羊肉为主要食材，独特之处在于制作过程。首先，选用优质的羊肉，炖煮数小时，直至肉质鲜嫩，羊骨熬出浓郁的高汤。然后，加入新鲜的蔬菜、面条或豆腐，调味以麻辣汤底，或者酸辣调味，形成浓郁的麻辣或酸辣风味。这道汤的特点是鲜、辣、烫，以及羊肉的浓郁香味。简阳羊肉汤常常在冬季食用，是四川地方特色美食中的一道令人垂涎的佳肴。"
    },{
      id: "special004",
      lid: 2,
      name: "牛肉干",
      title: "地方特色",
      image: "/images/牛肉干.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超10w+|评分超9.5",
      introduction: "阿坝州牛肉干是四川地方特色美食，源自四川省阿坝藏族羌族自治州。这道美味以优质的牛肉为主要原料，制作工艺独特。首先，选用新鲜的牛肉，经过切割、腌制和晾晒等多道工序，使其变得韧性十足，富有嚼劲。阿坝州牛肉干有着丰富的风味，常常带有微辣和香辣的口感，是一种肉质紧实、香气诱人的零食。这道美食常被当地藏族和羌族人民作为特色礼品，同时也受到各地食客的喜爱，成为四川地方特色美食中的一道独具风味的佳肴。"
    },{
      id: "special006",
      lid: 3,
      name: "兔子面",
      title: "地方特色",
      image: "/images/兔子面.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超10w+|评分超9.5",
      introduction: "资中兔子面是四川地方特色美食，来自四川省资中县。这道美味以嫩兔肉为主要原料，加上细面条，制作工艺独特。首先，选用优质的兔肉，切成小块或薄片，烹饪至嫩滑。然后，将兔肉与面条一起烹制，通常使用兔骨汤底，赋予汤面丰富的鲜美口感。资中兔子面以其鲜美的兔肉和细面搭配，再加上特制的汤底和调味料，味道鲜美，常常带有微辣的风味，是四川地方特色美食中的一道引人入胜的佳肴。"
    },{
      id: "special008",
      lid: 4,
      name: "米粉",
      title: "地方特色",
      image: "/images/米粉.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超10w+|评分超9.5",
      introduction: "南充米粉是四川地方特色美食，源自中国四川省的南充市。这道美味以高粱米为主要原料，制作工艺独特。首先，将高粱米磨成细腻的米粉，然后用开水烫熟，形成白色、半透明的面条，具有柔滑嫩口的特点。南充米粉通常搭配各种调味料和食材，如辣椒酱、酱油、豆腐、肉类和蔬菜等，形成丰富的风味组合。其特色在于浓郁的辣味和鲜美的口感，让人回味无穷。南充米粉是四川地方特色美食中的一道独具风味的佳肴，深受当地人和游客的喜爱。"
    },{
      id: "special010",
      lid: 0,
      name: "缠丝兔",
      title: "地方特色",
      image: "/images/缠丝兔.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超10w+|评分超9.5",
      introduction: "德阳缠丝兔是四川地方特色美食，来自四川省的德阳市。这道美味以兔肉为主要原料，制作工艺独特。首先，将嫩兔肉切成薄片或条状，然后用特制的麻辣调味料腌制，如辣椒酱、花椒、蒜蓉等，使其充分吸收浓郁的四川风味。最终，将腌制好的兔肉片缠绕在竹签上，经过炭火烤制，直至外表微脆，内部保持嫩滑。德阳缠丝兔以其麻辣的口感和独特的风味而著名，是四川地方特色美食中的一道令人垂涎的佳肴。"
    }
  ]
}

//获取食物列表总数
function getTotal(){
  return special.food_left.length
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
    temp.id = special.food_left[i].id
    temp.lid = special.food_left[i].lid
    temp.name = special.food_left[i].name
    temp.image = special.food_left[i].image
    temp.evaluate = special.food_left[i].evaluate
    obj.food_left.push(temp)
  }
  //右边
  for (var i = 0; i < n; i++){
    let temp = {}
    temp.id = special.food_right[i].id
    temp.lid = special.food_right[i].lid
    temp.name = special.food_right[i].name
    temp.image = special.food_right[i].image
    temp.evaluate = special.food_right[i].evaluate
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
  for (var i = 0; i < special.food_left.length; i++){
    if (id == special.food_left[i].id){
      msg.code = "200"
      msg.data = special.food_left[i]
      break;
    }
  }

  //再找右边
  for (var i = 0; i < special.food_right.length; i++){
    if (id == special.food_right[i].id){
      msg.code = "200"
      msg.data = special.food_right[i]
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

  id = "special0" + id
  return getFoodDetail(id)
}

function modify(id, list){
  let msg = {
    code: "404",
    data: {}
  }

  //先找左边
  for (var i = 0; i < special.food_left.length; i++){
    if (id == special.food_left[i].id){
      msg.code = "200"
      msg.data = special.food_left[i]
      special.food_left[i].check = [].concat(list)
      break;
    }
  }

  //再找右边
  for (var i = 0; i < special.food_right.length; i++){
    if (id == special.food_right[i].id){
      msg.code = "200"
      msg.data = special.food_right[i]
      special.food_right[i].check = [].concat(list)
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