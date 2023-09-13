//用来存储美食的数据文件

// 川式烧烤
var barbecue = {
  food_left: [
    {
      id: "barbucue001",
      lid: 4,
      name: "烤排骨",
      title: "川式烧烤",
      image: "/images/烤排骨.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.9",
      introduction: "四川烧烤的烤排骨是一道美味的川菜，以其独特的风味和口感而闻名。首先，选用嫩而多汁的排骨，经过腌制，涂抹上香辣的辣椒酱、蒜蓉、姜末等调味料。接着，将排骨串在炭火上慢慢烤熟，以确保外脆内嫩。烤制过程中，时不时地刷上一层辣椒酱，增加了独特的香辣味道。最终，烤排骨热气腾腾，香气四溢，每一口都是酥脆、辣味十足的享受。这道四川烧烤的招牌美食常常伴随着一杯冰凉的啤酒，是夏日露天烧烤的绝佳选择。"
    },{
      id: "barbucue003",
      lid: 0,
      name: "烤郡肝",
      title: "川式烧烤",
      image: "/images/烤郡肝.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.9",
      introduction: "四川烧烤的烤郡肝是一道具有浓厚川菜特色的美食。选用嫩嫩的郡肝，事先用秘制的调味料腌制，包括辣椒、花椒、姜蒜等，使其充分吸收风味。随后，将郡肝串在炭火上烤制，以保持其嫩滑和鲜美。烤制过程中，常常会用辣椒酱涂抹，赋予独特的辛辣香味。烤郡肝通常热气腾腾，味道浓郁，带有微辣和麻辣的口感，是四川烧烤中的一道不可错过的美味佳肴，常常搭配啤酒，为美食爱好者带来满足的味蕾享受。"
    },{
      id: "barbucue005",
      lid: 1,
      name: "烤鸭舌",
      title: "川式烧烤",
      image: "/images/烤鸭舌.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.9",
      introduction: "四川烧烤的烤鸭舌是一道令人垂涎的美味。首先，选用鲜嫩的鸭舌，经过腌制，涂抹上独特的四川调味料，包括辣椒酱、花椒、蒜蓉等，使其充分吸收风味。随后，将鸭舌串在炭火上慢烤，以确保外脆内嫩。烤制过程中，不断刷上调味酱，增添浓厚的辛辣香味。最终，烤鸭舌热气腾腾，味道鲜美，兼具香脆和微辣的口感，是四川烧烤中的一道必尝美食，常常伴随着冷啤酒，为美食爱好者带来绝妙的享受。"
    },{
      id: "barbucue007",
      lid: 2,
      name: "烤鸭肠",
      title: "川式烧烤",
      image: "/images/烤鸭肠.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.9",
      introduction: "四川烧烤的烤鸭肠是一道令人垂涎欲滴的特色美食。首先，精选新鲜的鸭肠，经过特制的调味和腌制，涂抹上四川独特的辣椒酱、花椒、蒜蓉等香料，确保风味浓郁。然后，将鸭肠串在炭火上烤制，慢慢烹饪至金黄酥脆，保持内外嫩滑。烤制过程中，多次刷上辣椒酱，增添独特的香辣味道。最终，烤鸭肠香气扑鼻，辣味十足，既酥脆又多汁，是四川烧烤中的一道必尝佳肴，常常搭配啤酒，为美食爱好者带来极致的口感享受。"
    },{
      id: "barbucue009",
      lid: 3,
      name: "烤牛筋",
      title: "川式烧烤",
      image: "/images/烤牛筋.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.9",
      introduction: "四川烧烤的烤牛筋是一道独具特色的美食。首先，选用嚼劲十足的牛筋，经过精心腌制和调味，涂抹上四川独有的香辣酱料、花椒、蒜蓉等，确保风味浓郁。接着，将牛筋串在炭火上烤制，慢慢烹饪至外脆内嫩。烤制过程中，不断刷上辣椒酱，增添独特的香辣味道。最终，烤牛筋香气四溢，咸香鲜美，具有独特的口感，韧性和辛辣相互交织，是四川烧烤中的一道必尝佳肴，常常伴随着啤酒，为美食爱好者带来美妙的味蕾体验。"
    }
  ], 
  food_right: [
    {
      id: "barbucue002",
      lid: 1,
      name: "烤茄子",
      title: "川式烧烤",
      image: "/images/烤茄子.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超10w+|评分超9.5",
      introduction: "四川烧烤的烤茄子是一道独特的美食。首先，选择新鲜的茄子，切成块或片，然后用特制的调味料腌制，包括辣椒酱、蒜蓉、姜末等，以增强风味。接着，将茄子片串在炭火上烤制，慢慢烹饪至外部烤熟，内部嫩滑。烤制过程中，常常涂抹辣椒酱，赋予独特的辣味。最终，烤茄子散发出诱人的香气，味道浓郁，既有烟熏的香味，又有微辣的风味，是四川烧烤中的一道必尝美食，常常成为素食者的首选，也能为美食爱好者带来愉悦的味蕾体验。"
    },{
      id: "barbucue004",
      lid: 2,
      name: "烤豆腐皮",
      title: "川式烧烤",
      image: "/images/烤豆腐皮.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超10w+|评分超9.5",
      introduction: "四川烧烤的烤豆腐皮是一道美味的素食选择。首先，选用新鲜的豆腐皮，切成适当大小的片或块，然后用四川特有的调味料腌制，包括辣椒酱、花椒、蒜蓉等，以赋予豆腐皮独特的风味。接着，将豆腐皮片串在炭火上烤制，慢慢烹饪至外脆内嫩。烤制过程中，不断刷上调味酱，增添浓郁的辛辣香味。最终，烤豆腐皮香气扑鼻，味道鲜美，具有香脆和微辣的口感，是四川烧烤中的一道受欢迎的素食佳肴，适合各种口味的人们品味。"
    },{
      id: "barbucue006",
      lid: 3,
      name: "烤掌中宝",
      title: "川式烧烤",
      image: "/images/烤掌中宝.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超10w+|评分超9.5",
      introduction: "四川烧烤的烤掌中宝是一道令人垂涎的特色美食。首先，选择鲜嫩的掌中宝（也叫掌中宝鸡翅中段），经过腌制和涂抹四川特有的调味料，包括辣椒酱、花椒、姜蒜等，以确保风味浓郁。然后，将掌中宝串在炭火上烤制，慢慢烹饪至外部酥脆，内部多汁。烤制过程中，不断刷上调味酱，增添独特的香辣味道。最终，烤掌中宝香气四溢，味道鲜美，既酥脆又辛辣，是四川烧烤中的一道必尝佳肴，常常搭配啤酒，为美食爱好者带来绝妙的享受。"
    },{
      id: "barbucue008",
      lid: 4,
      name: "烤牛肉",
      title: "川式烧烤",
      image: "/images/烤牛肉.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超10w+|评分超9.5",
      introduction: "四川烧烤的烤牛肉是一道令人垂涎欲滴的特色美食。首先，选用优质的牛肉，如牛腩或牛脊，将其切成薄片或小块。然后，通过腌制和涂抹四川独特的调味料，如辣椒酱、花椒、蒜蓉等，让牛肉吸收浓郁的风味。接着，将牛肉片串在炭火上烤制，慢烤至外部微脆、内部保持嫩滑。烤制过程中，不断刷上调味酱，增添独特的香辣味道。最终，烤牛肉散发出迷人的香气，味道浓郁，韧性十足，兼具牛肉的鲜美和四川辣味的独特风味，是四川烧烤中的一道必尝佳肴，常常成为美食爱好者的首选。"
    },{
      id: "barbucue010",
      lid: 0,
      name: "烤五花肉",
      title: "川式烧烤",
      image: "/images/烤五花肉.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超10w+|评分超9.5",
      introduction: "四川烧烤的五花肉是一道美味的烤肉佳肴。首先，挑选新鲜的五花肉，将其切成薄片或小块，以确保在烤制过程中更容易入味。然后，将五花肉块腌制并涂抹上四川特色的调味料，如辣椒酱、花椒、蒜蓉等，使其充分吸收独特的香辣风味。接着，将五花肉片串在炭火上烤制，烹饪至外脆内嫩。烤制过程中，不断刷上调味酱，增添浓郁的辣味。最终，烤五花肉香气四溢，味道鲜美，既有香脆的外皮，又有多汁的肉质，是四川烧烤中备受欢迎的美食。"
    }
  ]
}

//获取食物列表总数
function getTotal(){
  return barbecue.food_left.length
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
    temp.id = barbecue.food_left[i].id
    temp.lid = barbecue.food_left[i].lid
    temp.name = barbecue.food_left[i].name
    temp.image = barbecue.food_left[i].image
    temp.evaluate = barbecue.food_left[i].evaluate
    obj.food_left.push(temp)
  }
  //右边
  for (var i = 0; i < n; i++){
    let temp = {}
    temp.id = barbecue.food_right[i].id
    temp.lid = barbecue.food_right[i].lid
    temp.name = barbecue.food_right[i].name
    temp.image = barbecue.food_right[i].image
    temp.evaluate = barbecue.food_right[i].evaluate
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
  for (var i = 0; i < barbecue.food_left.length; i++){
    if (id == barbecue.food_left[i].id){
      msg.code = "200"
      msg.data = barbecue.food_left[i]
      break;
    }
  }

  //再找右边
  for (var i = 0; i < barbecue.food_right.length; i++){
    if (id == barbecue.food_right[i].id){
      msg.code = "200"
      msg.data = barbecue.food_right[i]
      break;
    }
  }

  return msg
}

function modify(id, list){
  let msg = {
    code: "404",
    data: {}
  }

  //先找左边
  for (var i = 0; i < barbecue.food_left.length; i++){
    if (id == barbecue.food_left[i].id){
      msg.code = "200"
      msg.data = barbecue.food_left[i]
      barbecue.food_left[i].check = [].concat(list)
      break;
    }
  }

  //再找右边
  for (var i = 0; i < barbecue.food_right.length; i++){
    if (id == barbecue.food_right[i].id){
      msg.code = "200"
      msg.data = barbecue.food_right[i]
      barbecue.food_right[i].check = [].concat(list)
      break;
    }
  }
}

// 对外暴露接口
module.exports = {
  getFoodList: getFoodList,
  getFoodDetail: getFoodDetail,
  getTotal: getTotal,
  modify: modify
}