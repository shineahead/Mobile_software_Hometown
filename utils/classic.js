//用来存储美食的数据文件

// 川味经典
var classic = {
  food_left: [
    {
      id: "classic001",
      lid: 4,
      name: "水煮牛肉",
      image: "/images/水煮牛肉.jpg",
      title: "川菜经典",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.5",
      introduction: "水煮牛肉是一道经典的川菜，以其火辣、麻辣的口味而著名。它由嫩牛肉片、大蒜、姜和一种叫做红油豆瓣酱的调味酱组成。通常，牛肉片先被烫熟，然后摆在蔬菜底下。接着，一锅滚烫的红油酱汤被倒在肉上，牛肉因此焦黄，而底下的蔬菜保持清脆。水煮牛肉的特点是辛辣、麻辣、鲜美，常常让人流连忘返。这道菜是川菜中的瑰宝，也是辣味菜肴的代表之一，深受辣食爱好者的喜爱。"
    },{
      id: "classic003",
      lid: 1,
      name: "回锅肉",
      title: "川菜经典",
      image: "/images/回锅肉.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超1000w+|评分超9.5",
      introduction: "回锅肉，比较家常菜的一种，川菜代表作之一。主要用猪后臀肉，配上青椒蒜苗等配料，口感独特，菜品呈现出来非常好看，肥而不腻，是一个非常适合下饭的一道菜。回锅肉一直以来被认为是川菜之首。因此四川回锅肉被评为四川十大经典名菜。"
    },{
      id: "classic005",
      lid: 2,
      name: "麻婆豆腐",
      title: "川菜经典",
      image: "/images/麻婆豆腐.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "95%好评|尝试人数超100w+|评分超9.1",
      introduction: "麻婆豆腐，非常常见了，基本家家户户都会做的一道菜。相传，这道菜的名字是因为，当时一家，名为“陈兴盛饭铺”老板娘脸上有麻点，所以她发明的烧豆腐，就被称之为麻婆豆腐，闻名至今。它既有麻麻辣辣，又有豆制品自带的软糯感，汤汁浓郁，豆腐非常入味。在家里可以自己尝试尝试哦，上手简单，而且味道绝佳。"
    },{
      id: "classic007",
      lid: 3,
      name: "鱼香肉丝",
      title: "川菜经典",
      image: "/images/鱼香肉丝.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.8",
      introduction: "鱼香肉丝是一道经典的川菜，以其独特的口味和烹饪方式而闻名。它由细切的猪肉丝和各种蔬菜丝构成，烹饪时加入充满鲜香和微辣的调味汁，通常包括蒜、姜、豆瓣酱、醋等。尽管名字中有“鱼香”，但并不包含鱼，而是以其调味汁带来的美味而得名。这道菜的特点是酸甜、微辣、鲜香，口感鲜嫩，非常受人喜爱。鱼香肉丝是川菜中的经典之一，也在国际上广受欢迎。"
    },{
      id: "classic009",
      lid: 0,
      name: "钵钵鸡",
      title: "川菜经典",
      image: "/images/钵钵鸡.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "92%好评|尝试人数超10w+|评分超9.0",
      introduction: "钵钵鸡是川菜中的一道独特美味。它由嫩鸡肉切成块，然后和各种蔬菜，如黄瓜、藕片、木耳等，一同烫熟。这些食材被放入浓郁的花生酱和香辣调味料中，形成了独特的酱汁。钵钵鸡通常以小碗或小锅的方式上桌，每位食客都可以在自己的碗中添加调味料，调整口味。它的特点是麻辣、香浓、多样，兼具咸甜之味。钵钵鸡是一道富有趣味性的火锅菜肴，广受川菜爱好者的喜爱。"
    },{
      id: "classic011",
      lid: 1,
      name: "四川火锅",
      title: "川菜经典",
      image: "/images/四川火锅.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超10000w+|评分超9.8",
      introduction: "四川火锅，作为川菜的代表之一，以其麻辣鲜香而著名。它通常由两种基本汤底组成：一种是麻辣火锅底，由花椒和辣椒烹制而成，带来麻辣口感；另一种是清汤底，保持了食材的原汁原味。食材多种多样，包括各种肉类、海鲜、豆腐、蔬菜等。吃火锅时，将生食材放入滚烫的汤底中烫煮，然后沾上各种调味料，如蒜泥、香菜、花生酱等，味道浓郁多变。四川火锅以其麻辣、鲜美、下饭的特点，成为中国及国际上备受欢迎的美食之一。"
    },{
      id: "classic013",
      lid: 2,
      name: "开水白菜",
      title: "川菜经典",
      image: "/images/开水白菜.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "91%好评|尝试人数超100w+|评分超9.3",
      introduction: "开水白菜是川菜中的一道传统佳肴。它以鲜嫩的大白菜为主要食材，经过精心处理后，再用滚烫的开水烫熟，之后拼配各种调味料，如蒜蓉、花椒、香醋、酱油等。这道菜的名字来源于制作过程中用沸水浸泡白菜，保持其原汁原味。开水白菜具有清爽的口感和鲜美的味道，同时兼具川菜的特点——微辣和麻辣。它既可以作为开胃菜，也可以作为川菜火锅的配菜之一。开水白菜是川菜中的一道经典，广受食客喜爱。"
    },{
      id: "classic015",
      lid: 3,
      name: "豆瓣鱼",
      title: "川菜经典",
      image: "/images/豆瓣鱼.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超100w+|评分超9.3",
      introduction: "豆瓣鱼是川菜中的一道美味菜肴，以其独特的麻辣味道而著名。这道菜的主要原料是鲜嫩的鱼肉，通常以鲈鱼、鲳鱼等为主。鱼肉被切成块，然后在特制的豆瓣酱、辣椒、花椒等调味料的浸泡中腌制，让其吸收丰富的香味。最后，鱼肉烹煮在浓郁的麻辣汤底中，汤底由豆瓣酱、辣椒、姜蒜等调味料熬制而成。豆瓣鱼具有浓郁的麻辣风味，同时鱼肉鲜嫩多汁。这道川菜代表了川菜的辣味特点，常常被美食爱好者追捧。"
    },{
      id: "classic017",
      lid: 4,
      name: "蒜泥白肉",
      title: "川菜经典",
      image: "/images/蒜泥白肉.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "97%好评|尝试人数超10w+|评分超9.5",
      introduction: "蒜泥白肉是川菜中的经典之一，以其口感嫩滑、鲜美可口而著称。这道菜主要由嫩猪肉片和蒜蓉组成。猪肉事先用白开水焯水，使其更加鲜嫩。蒜蓉则由蒜末、盐、醋等调味料混合而成，具有浓郁的蒜香味。在享用时，通常将蒜泥均匀摆放在猪肉片上，增添了美味的蒜味。蒜泥白肉的特点是蒜香四溢、清爽爽口，是川菜中一道轻盈美味的冷菜，也常常用来开胃。"
    },{
      id: "classic019",
      lid: 0,
      name: "蚂蚁上树",
      title: "川菜经典",
      image: "/images/蚂蚁上树.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "95%好评|尝试人数超10w+|评分超9.7",
      introduction: "蚂蚁上树是川菜中的一道经典川味面食，其独特之处在于粉丝与肉末的巧妙搭配。绿豆粉丝被烹饪至软糯，然后与爽口的猪肉末混合。调味方面，通常使用豆瓣酱、酱油、姜蒜等，带来麻辣和鲜香的味道。这道菜因粉丝如同树枝，肉末如蚂蚁爬行在上面而得名。蚂蚁上树以其丰富的层次感、辣味和咸香而著名，是川菜中的经典面食之一，深受各地食客的喜爱。"
    }
  ], 
  food_right: [
    {
      id: "classic002",
      lid: 0,
      name: "宫保鸡丁",
      title: "川菜经典",
      image: "/images/宫保鸡丁.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "98%好评|尝试人数超1000w+|评分超9.9",
      introduction: "宫保鸡丁，也是平时家里常做的一道家常菜。这道菜曾经被归纳为北京宫廷菜。主要是以鸡肉作主要材料，花生米，辣椒等辅料一起烹饪。味道鲜香可口。色泽诱人。辣中带着甜，甜中带着辣。入口又觉得酸酸的，酸辣甜，给人味蕾上带来强大的冲击。"
    },{
      id: "classic004",
      lid: 3,
      name: "夫妻肺片",
      title: "川菜经典",
      image: "/images/夫妻肺片.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "92%好评|尝试人数超100w+|评分超9.3",
      introduction: "夫妻肺片，一般都在饭店里出现。主料多是牛心，牛肚，牛肉，牛舌等。用辣味掩盖其特有的重口味，麻辣纯香。让人流连忘返，“欲罢不能”。夫妻肺片这道菜不仅好吃，还有它特有的营养价值，可以滋补脾胃，养血护肝等，气血不足的可以多吃一些。"
    },{
      id: "classic006",
      lid: 1,
      name: "东坡肘子",
      title: "川菜经典",
      image: "/images/东坡肘子.png",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "96%好评|尝试人数超100w+|评分超9.8",
      introduction: "东坡肘子，顾名思义就是和苏东坡有关系，是因为其妻子做菜时候的疏忽，把炖肘子误打误撞做成了，一道独特的风味美食。做出来的猪肘，特别软糯、因为火候和时间的原因，肉质烂软很好入口。"
    },{
      id: "classic008",
      lid: 2,
      name: "清蒸江团",
      title: "川菜经典",
      image: "/images/清蒸江团.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "95%好评|尝试人数超10w+|评分超9.2",
      introduction: "清蒸江团是川菜中的一道传统名菜。它以糯米粉制成的小圆子，内陷通常包括香糯的豆沙或芝麻糊。江团先以蒸汽蒸煮至熟软，然后撒上花生碎、糖粉、或椰丝，增添了不同的风味。江团的糯软外皮和香甜内馅，构成了绝妙的口感。它是川菜中的糕点之一，也在中国各地非常受欢迎，尤其在一些传统节庆中，如元宵节等。"
    },{
      id: "classic010",
      lid: 4,
      name: "毛血旺",
      title: "川菜经典",
      image: "/images/毛血旺.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "92%好评|尝试人数超1000w+|评分超9.5",
      introduction: "毛血旺是川菜中的经典辣味火锅，以其浓郁的香辣味道而闻名。它的基本食材包括各种肉类、海鲜、蔬菜、豆腐等，这些食材被烫煮在麻辣汤底中，麻辣汤底由花椒、辣椒、姜、蒜等调味料制成。特别之处在于毛血旺还包括了一种叫做“鲜毛肚”的猪肉火锅底，这是由猪肚、肠、血旺等制成的，增加了鲜嫩的口感。这道菜最终呈现在餐桌上，热气腾腾，辣味浓烈，令人垂涎欲滴，是川菜中的辣味经典，被广泛喜爱。"
    },{
      id: "classic012",
      lid: 0,
      name: "李庄白肉",
      title: "川菜经典",
      image: "/images/李庄白肉.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "95%好评|尝试人数超100w+|评分超9.4",
      introduction: "李庄白肉，是川菜中的一道经典凉菜。它以猪肉为主要原料，选用肉质鲜嫩的部位，如瘦肉或蹄筋，经过蒸煮后切成薄片。这些猪肉片通常搭配一种酱汁，包括蒜蓉、花椒粉、香醋等，调味浓郁，酸辣可口。最终，猪肉片浸泡在这浓郁的酱汁中，吸取了各种风味。李庄白肉因制作地点李庄而得名，是川菜中的一道典型的冷盘，清爽鲜美，常常用来开胃。"
    },{
      id: "classic014",
      lid: 1,
      name: "酸菜鱼",
      title: "川菜经典",
      image: "/images/酸菜鱼.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超100w+|评分超9.8",
      introduction: "酸菜鱼是川菜中的经典菜肴，以其鲜美的味道和独特的酸辣口感而著名。这道菜通常以鲜活的鱼为主料，如草鱼或鲶鱼，加入酸菜、辣椒、姜蒜等调味料一同烹制而成。酸菜鱼的独特之处在于汤底，它由酸菜和番茄等食材熬制而成，呈现出浓郁的酸味和微辣的风味。这道菜的特点是汤汁浓郁、鱼肉鲜嫩，令人回味无穷。酸菜鱼是川菜中的招牌菜之一，常常作为家庭聚餐或餐馆宴席的美味选择。"
    },{
      id: "classic016",
      lid: 2,
      name: "口水鸡",
      title: "川菜经典",
      image: "/images/口水鸡.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "98%好评|尝试人数超100w+|评分超9.3",
      introduction: "口水鸡是川菜中的一道招牌冷菜，以其麻辣、鲜美的口味而著名。这道菜的主要原料是嫩鸡肉，通常用鸡胸肉或鸡腿肉，将鸡肉先焯水烫熟，切成薄片。然后，将鸡肉与蒜蓉、花椒粉、香菜等调味料混合，最后淋上一种特制的辣椒油和酱汁。口水鸡因其让人垂涎欲滴的味道而得名，汤汁麻辣鲜香，是川菜中的一道清爽开胃的冷菜，非常受食客喜爱。"
    },{
      id: "classic018",
      lid: 3,
      name: "啤酒鸭",
      title: "川菜经典",
      image: "/images/啤酒鸭.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "94%好评|尝试人数超100w+|评分超9.4",
      introduction: "啤酒鸭是川菜中的一道美味佳肴。它以鸭肉为主要原料，将鸭肉切成块，然后用啤酒、姜、蒜、香料等调味料腌制一段时间。接着，将腌制过的鸭肉放入炖锅中，加入一定量的水，炖煮至鸭肉鲜嫩。啤酒鸭的特点是醇厚的啤酒味和鸭肉的香嫩，同时酱汁汤汁浓郁，让人回味无穷。这道菜适合搭配米饭或馒头食用，是川菜中的一道美味，深受食客的喜爱。"
    },{
      id: "classic020",
      lid: 4,
      name: "辣子鸡",
      title: "川菜经典",
      image: "/images/辣子鸡.jpg",
      //表示评分星星，1表示未选，2表示选中
      check: [1, 1, 1, 1, 1],
      evaluate: "99%好评|尝试人数超1000w+|评分超9.7",
      introduction: "辣子鸡，被誉为川菜的代表性佳肴，以其麻辣鲜香而闻名。这道菜选用鸡肉切成丁，与大量的红辣椒、花椒一同下锅炒制。炒制过程中，鸡丁迅速变得金黄脆嫩，与辣椒的鲜红形成鲜明的色彩对比。辣子鸡的味道麻辣而鲜香，每一口都充满了川菜特有的辣味。这道菜香气扑鼻、火辣刺激，经常成为餐桌上的明星菜肴，深受辣味爱好者的喜爱。"
    }
  ]
}

//获取食物列表总数
function getTotal(){
  return classic.food_left.length
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
    temp.id = classic.food_left[i].id
    temp.lid = classic.food_left[i].lid
    temp.name = classic.food_left[i].name
    temp.image = classic.food_left[i].image
    temp.evaluate = classic.food_left[i].evaluate
    obj.food_left.push(temp)
  }
  //右边
  for (var i = 0; i < n; i++){
    let temp = {}
    temp.id = classic.food_right[i].id
    temp.lid = classic.food_right[i].lid
    temp.name = classic.food_right[i].name
    temp.image = classic.food_right[i].image
    temp.evaluate = classic.food_right[i].evaluate
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
  for (var i = 0; i < classic.food_left.length; i++){
    if (id == classic.food_left[i].id){
      msg.code = "200"
      msg.data = classic.food_left[i]
      break;
    }
  }

  //再找右边
  for (var i = 0; i < classic.food_right.length; i++){
    if (id == classic.food_right[i].id){
      msg.code = "200"
      msg.data = classic.food_right[i]
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

  id = "classic0" + id
  return getFoodDetail(id)
}

//修改数组中元素的check数组
function modify(id, list){
  let msg = {
    code: "404",
    data: {}
  }

  //先找左边
  for (var i = 0; i < classic.food_left.length; i++){
    if (id == classic.food_left[i].id){
      msg.code = "200"
      msg.data = classic.food_left[i]
      classic.food_left[i].check = [].concat(list)
      console.log("修改成功左边")
      console.log(classic.food_left[i].check)
      break;
    }
  }

  //再找右边
  for (var i = 0; i < classic.food_right.length; i++){
    if (id == classic.food_right[i].id){
      msg.code = "200"
      msg.data = classic.food_right[i]
      classic.food_left[i].check = [].concat(list)
      console.log("修改成功右边")
      console.log(classic.food_left[i].check)
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