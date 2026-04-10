const OPTION_LABELS = ["不太像我", "有一点", "非常像我"];

const DIMENSIONS = {
  core: {
    name: "自我锚点",
    model: "内核模型",
    explain: {
      L: "你的自我评价容易被外界天气带着跑，别人的一句话有时像突然刮来的横风。",
      M: "底盘基本还在，只是偶尔会被比较心和临场状态偷偷拔电源。",
      H: "内核相对稳，外界噪音不太容易直接改写你的自我说明书。"
    },
    bank: [
      { text: "当别人明显比我强时，我脑内会自动播放“我不配”纪录片。", reverse: true },
      { text: "我很少因为别人一句评价就怀疑自己。" },
      { text: "换到陌生环境时，我也能慢慢找回自己的节奏。" },
      { text: "计划被打断时，我第一反应通常不是“果然我不行”。" },
      { text: "看见同龄人发光，我更容易被激励，而不是被压扁。" },
      { text: "我做错事时，会把自己骂到像系统崩溃。", reverse: true },
      { text: "我知道自己身上有哪些稳定拿得出手的东西。" },
      { text: "别人没看懂我时，我不会急着把自己判死刑。" },
      { text: "一次失误很容易让我觉得“整个人都不行了”。", reverse: true },
      { text: "即使状态一般，我也知道自己不是残次品。" }
    ]
  },
  drive: {
    name: "目标牵引",
    model: "驱动模型",
    explain: {
      L: "你对目标不是没感觉，只是点火门槛较高，很多事得先说服心里那个值班的自己。",
      M: "你有推进欲，也有躺平欲，像两股势力在日常里轮流值班。",
      H: "你比较容易被方向、成长和完成感点燃，做事常带着一点向前的惯性。"
    },
    bank: [
      { text: "没有一个“为什么”，我做事很快就会断电。" },
      { text: "如果突然多出一周空档，我会主动安排一些想推进的事。" },
      { text: "我对成长这件事，常常是收藏了就算开始。", reverse: true },
      { text: "一旦认定方向，我会给自己加一点难度当热身。" },
      { text: "“把一件事做成”这件事，本身就很能点燃我。" },
      { text: "我的长期计划经常停留在脑补阶段。", reverse: true },
      { text: "我对未来大致有方向，不是完全随机漫步。" },
      { text: "只要眼前舒服，长期后果可以以后再看。", reverse: true },
      { text: "为了重要目标，我可以暂时忍住即时快乐。" },
      { text: "就算迷茫，我也会想办法先往前挪一格。" }
    ]
  },
  mood: {
    name: "情绪回弹",
    model: "情绪模型",
    explain: {
      L: "情绪来了容易占满屏幕，一点波动也可能被你看成整片天色都变了。",
      M: "你会受影响，但通常还有回正能力，只是恢复速度看当天电量。",
      H: "你未必一直稳定，但比较知道怎么把自己从低谷里慢慢拎回来。"
    },
    bank: [
      { text: "事情翻车后，我通常能在一段时间内重新上线。" },
      { text: "被误会后，我会在脑内反刍很久。", reverse: true },
      { text: "情绪很满的时候，我还能分清“我难受”和“世界完了”。" },
      { text: "一件小糟心，常能把我整天的底色都染灰。", reverse: true },
      { text: "我有几种对自己真正有效的回血方式。" },
      { text: "压力一大，我容易把所有问题一口气放大。", reverse: true },
      { text: "我允许自己难过，但不会一直往下掉。" },
      { text: "情绪来了时，我经常顺手伤害自己最在意的节奏。", reverse: true },
      { text: "难受过去之后，我一般还能把残局捡回来。" },
      { text: "我不要求自己永远稳定，但我知道怎么慢慢回正。" }
    ]
  },
  bond: {
    name: "关系投入",
    model: "亲密模型",
    explain: {
      L: "你在关系里偏谨慎，真心不是没有，只是不会轻易整包寄出。",
      M: "你会投入，但常给自己留一些缓冲带，热情和防备基本同步上线。",
      H: "一旦认定值得，你会把时间、注意力和情绪都真的放进去。"
    },
    bank: [
      { text: "一旦认真在乎一个人，我会愿意拿出真时间。" },
      { text: "我常在关系里留很多后手，不太敢全上。", reverse: true },
      { text: "对我来说，陪伴不是口号，是日程表里真的留位置。" },
      { text: "我习惯把喜欢压在安全线以内。", reverse: true },
      { text: "关系值得的话，我会主动经营，不等对方猜。" },
      { text: "我的热情有时来得快，撤得也快。", reverse: true },
      { text: "我能持续表达在乎，而不只是偶尔灵光一闪。" },
      { text: "我害怕投入后落空，所以宁愿先淡一点。", reverse: true },
      { text: "对重要的人，我愿意调整自己的一部分生活节奏。" },
      { text: "我更喜欢把关系当长期建设，而不是短时烟花。" }
    ]
  },
  bound: {
    name: "边界密度",
    model: "关系模型",
    explain: {
      L: "你更容易把人请进内圈，亲近感对你来说比清晰边界更重要。",
      M: "你既想靠近，也想留缝，边界像会呼吸的门，不是一堵死墙。",
      H: "你需要稳定的个人空间和自主权，靠近可以，但最好别直接并轨。"
    },
    bank: [
      { text: "我很需要一块不被随时打扰的个人领地。" },
      { text: "就算关系很近，我也想保留独处权限。" },
      { text: "别人连续轰炸消息时，我会本能性后退半步。" },
      { text: "我喜欢什么都黏在一起，最好连沉默也共享。", reverse: true },
      { text: "关系太黏时，我会开始想透气。" },
      { text: "我不太习惯别人替我安排时间或决定。" },
      { text: "熟到一定程度后，我几乎不设界线。", reverse: true },
      { text: "我更舒服的亲密感，是靠近但不吞没。" },
      { text: "当别人过度打听我的内心，我会自动拉闸。" },
      { text: "我并不介意别人随时闯进我的生活节奏。", reverse: true }
    ]
  },
  trust: {
    name: "信任速度",
    model: "世界模型",
    explain: {
      L: "你看世界会先开防火墙，安全感往往要靠足够的证据慢慢充电。",
      M: "你不算盲信，也不算过分警惕，更多时候是在观察里决定开几分权限。",
      H: "你比较愿意先给善意和可能性，默认大多数人不是来拆你的。"
    },
    bank: [
      { text: "刚认识的人，我通常会先给一点善意额度。" },
      { text: "别人一句客气话，我常先想“他是不是另有所图”。", reverse: true },
      { text: "我更容易先看见别人想合作的那一面。" },
      { text: "生活里出现小好意时，我能自然接住。" },
      { text: "我经常把世界想成大型风险展示墙。", reverse: true },
      { text: "没有证据前，我不会轻易把人往坏处判。" },
      { text: "我很难相信别人会稳定地站在我这边。", reverse: true },
      { text: "我愿意相信，大多数人至少不是故意来伤人的。" },
      { text: "一点点失约就容易让我把整个人拉黑到心里。", reverse: true },
      { text: "我接受人会有瑕疵，但不等于都不可靠。" }
    ]
  },
  rule: {
    name: "规则姿态",
    model: "秩序模型",
    explain: {
      L: "你对框架的耐心有限，能绕开的流程就不想老老实实走完全程。",
      M: "你对规则态度比较务实，能配合时配合，没必要时也不爱死磕。",
      H: "秩序感会给你安全和效率，你更愿意在清晰边界里把事情做稳。"
    },
    bank: [
      { text: "临近截止时，清晰流程会让我安心。" },
      { text: "规则一多，我就想翻窗走人。", reverse: true },
      { text: "我喜欢先把框架搭好，再临场发挥。" },
      { text: "别人频繁改计划，对我来说挺耗血。" },
      { text: "只要最后能成，中间怎么来都无所谓。", reverse: true },
      { text: "我对“先定边界再行动”这件事总体友好。" },
      { text: "场面一乱，我会本能地想整理顺序。" },
      { text: "我享受打破常规带来的新鲜感，多过稳定感。", reverse: true },
      { text: "已经说好的事被反复改动，会让我很烦。" },
      { text: "自由很重要，但秩序确实能救命。" }
    ]
  },
  risk: {
    name: "风险胃口",
    model: "冒险模型",
    explain: {
      L: "你对不确定性的胃口不大，稳一点往往比刺激一点更能让你睡着。",
      M: "你不是不敢试，只是会先看看落点和缓冲区，再决定跳多远。",
      H: "你对未知有一定热情，愿意拿适量风险去换更大的成长和变化。"
    },
    bank: [
      { text: "面对一个七成把握的新机会，我通常愿意上桌。" },
      { text: "只要有一点翻车可能，我就想先躲远。", reverse: true },
      { text: "“先试试看再说”对我并不算可怕。" },
      { text: "没完全想明白之前，我很难迈步。", reverse: true },
      { text: "我能接受可控范围内的试错成本。" },
      { text: "新方向带给我的兴奋，常常多过害怕。" },
      { text: "我常因为想稳一点，而错过一些可能性。", reverse: true },
      { text: "没人走过的路，对我有一点吸引力。" },
      { text: "我对不确定性的容忍度比较一般。", reverse: true },
      { text: "必要时，我愿意拿胆量去换增长。" }
    ]
  },
  swift: {
    name: "决断速度",
    model: "判断模型",
    explain: {
      L: "你做决定前容易多开好几轮脑内会议，谨慎是优点，但拖太久也耗电。",
      M: "你会思考，也能拍板，只是速度会随事情分量和情绪温度浮动。",
      H: "你比较能在信息够用时做出决定，不太爱把选择永远悬空。"
    },
    bank: [
      { text: "做选择时，我通常不会在同一件事上盘太久。" },
      { text: "买个小东西，我都能开三轮内部评审会。", reverse: true },
      { text: "一旦信息够用了，我愿意先定下来。" },
      { text: "我很怕做错，所以容易把思考拖成连续剧。", reverse: true },
      { text: "别人来催之前，我往往已经有了倾向。" },
      { text: "我不太喜欢把所有选项永远挂起。" },
      { text: "重要决定上，我有时会卡到连自己都烦。", reverse: true },
      { text: "我接受“没有完美答案”，所以能拍板。" },
      { text: "我常在选项之间来回横跳，像浏览器标签页。", reverse: true },
      { text: "决定以后，我通常不爱回头无休止复盘。" }
    ]
  },
  build: {
    name: "落地执行",
    model: "行动模型",
    explain: {
      L: "你脑子里可能有很多好东西，只是启动键和现实世界有时不在一个楼层。",
      M: "你能推进事情，但执行力常看情境、兴趣和死线是否亲自上门。",
      H: "你比较擅长把想法往现实里搬，哪怕先交粗稿，也愿意继续往前拱。"
    },
    bank: [
      { text: "我更擅长把想法推进到现实里，而不只是收藏。" },
      { text: "很多事我不是不会，只是一直没开机。", reverse: true },
      { text: "只要开始了，我通常能继续往前拱。" },
      { text: "我的待办列表经常像文物展柜。", reverse: true },
      { text: "我会给事情安排下一步，而不是只停在“应该”。" },
      { text: "死线不来，我的灵魂也不太来。", reverse: true },
      { text: "我愿意先交一个粗糙版本，再慢慢打磨。" },
      { text: "我很容易把准备阶段过成常驻地址。", reverse: true },
      { text: "推进一件事会给我一种踏实感。" },
      { text: "我对“先动起来再优化”总体是认同的。" }
    ]
  }
};

const DIMENSION_ORDER = Object.keys(DIMENSIONS);

const PERSONALITY_TYPES = [
  {
    code: "ANCHOR",
    cn: "稳盘者",
    intro: "场面开始晃的时候，你通常不是跟着晃的人。",
    desc: "ANCHOR 像一只把重心藏得很深的陀螺。你未必总是声音最大的人，但事情一旦需要落地、需要兜底、需要有人别慌，你往往会自然顶上去。别人看到的是你稳定、可靠、有边界；你自己感受到的，则是“总得有人把这个局面接住吧”。",
    strength: "你擅长稳住节奏、厘清秩序、把事情从散架边缘拽回来。",
    shadow: "太习惯当支点之后，容易把别人的失衡也默默扛在自己身上。",
    advice: "允许自己不是每次都当压舱石。你不是系统维护员，偶尔也可以先顾自己的电量。",
    pattern: "HMHMHMHLMH"
  },
  {
    code: "COMET",
    cn: "彗星人",
    intro: "你的能量不是慢慢烧的，是会拖着尾焰冲出去的。",
    desc: "COMET 的人生常常不是一条直线，而是一串被兴趣和机会点亮的轨迹。你对变化的敏感度高，对可能性的兴奋值也高，所以你很容易成为那个先点火、先尝试、先把静止场面撬出裂缝的人。",
    strength: "你敢开新局、敢上桌、敢让事情先动起来，存在感和带动性都很强。",
    shadow: "如果没有稳定的回收机制，你的热情也可能像烟火一样，亮得快，散得也快。",
    advice: "别只练冲刺，也练补给。留住后劲，你的天赋才不只是“一阵子很猛”。",
    pattern: "MHMLLMLHHM"
  },
  {
    code: "VELVET",
    cn: "绒感派",
    intro: "你像一块会吸收刺的布，先感到，再靠近。",
    desc: "VELVET 最明显的特征，不是柔软，而是柔软里带着判断。你对关系和气氛的细枝末节很敏感，知道什么话会让人松一点，什么动作会让人退一点。你不是天生讨好，而是更擅长用温度建立连接。",
    strength: "你有很强的情绪触感和陪伴能力，能让人感觉自己被认真接住。",
    shadow: "太会照顾气氛时，也容易把自己的真实感受悄悄压到后排。",
    advice: "继续保留你的温度，但别把体谅别人变成长期忽略自己。",
    pattern: "MMHHLHMLMM"
  },
  {
    code: "RADAR",
    cn: "雷达人",
    intro: "别人听见的是台词，你连背景电流都听见了。",
    desc: "RADAR 对风险、边界、微妙变化的感知非常快。你不是悲观，而是比大多数人更早察觉潜在走向，所以常常会提前做预案、留缓冲、把不稳定因素先圈出来。你身上有一种很强的“别急，我先看看这事靠不靠谱”。",
    strength: "你擅长看见隐藏信号，能比别人更早发现不对劲的地方。",
    shadow: "雷达太灵敏时，世界会显得处处有电流，让你很难彻底放松。",
    advice: "保留你的辨识力，但也给无害的人和事一点不被过度扫描的机会。",
    pattern: "MMMLHLHLMM"
  },
  {
    code: "PATCH",
    cn: "补丁人",
    intro: "哪里在漏风，你通常比门还先发现。",
    desc: "PATCH 有一种非常特殊的能力，叫“看见缺口之后忍不住补一下”。不管是团队中的流程缝隙、朋友情绪里的裂口，还是生活里那些小故障，你总会本能地伸手去修、去补、去让事情重新顺起来。",
    strength: "你很有修复力，能在别人慌乱时迅速找出下一步，把碎片拼回能运转的样子。",
    shadow: "长期当补丁也容易累，因为你会慢慢忘了，有些洞不是你一个人该补的。",
    advice: "把“帮忙修”升级成“判断值不值得修”。不是所有裂缝都配拥有你的精力。",
    pattern: "HMHHMHMLLH"
  },
  {
    code: "BLUEPRINT",
    cn: "蓝图派",
    intro: "你不是先走一步的人，你更像先把路画出来的人。",
    desc: "BLUEPRINT 天生对结构、方向和整体图景更敏感。你看事情时，脑子里很快会浮出路线、模块、优先级和依赖关系。别人还在说“先试试”，你已经开始想“这套机制以后怎么放大”。",
    strength: "你擅长搭框架、定秩序、抓主线，是很强的系统型选手。",
    shadow: "太擅长设计大图时，偶尔会对混乱和低完成度表现出较低耐心。",
    advice: "让蓝图继续存在，但记得给现实留一点粗糙空间。世界很少按设计稿首版上线。",
    pattern: "HHMLHMHLHH"
  },
  {
    code: "KITE",
    cn: "风筝人",
    intro: "你不是没有方向，你只是方向经常和风一起更新。",
    desc: "KITE 是那种特别会感受环境、关系和氛围变化的人。你对连接有需要，也会随着关系浓度、情绪气压、场景变化去调整自己。你不是飘，而是活得更像一根会根据风向修正姿态的线。",
    strength: "你灵活、好相处、反应快，能在复杂场景里找到人与人之间的柔性接口。",
    shadow: "风感太强时，也容易忘了自己的手里其实也有线轴。",
    advice: "继续保留你的适应力，但别把“会配合”误用成“只能被带走”。",
    pattern: "MMMHMHLMLL"
  },
  {
    code: "MOSS",
    cn: "青苔人",
    intro: "你不是慢，你是把生命用在真正需要长出来的地方。",
    desc: "MOSS 的节奏常常不符合外部世界对“积极向上”的标准模板。你更像一块低耗能却持续生长的区域：不抢灯、不抢风，却会在别人不注意的时候慢慢铺出自己的空间。你不擅长高举高打，但很擅长在安静里保存自己。",
    strength: "你耐受安静、对独处友好、能在低噪音环境里积累真正的东西。",
    shadow: "如果长期缩得太稳，也可能把自己和机会一起藏起来。",
    advice: "不必硬装成高能量的人，但可以练习在关键时刻主动露出一点存在感。",
    pattern: "LLMMHMMLLL"
  },
  {
    code: "SPARK",
    cn: "点火者",
    intro: "很多局面不是被你做完的，是先被你点着的。",
    desc: "SPARK 的强项不只是行动，而是让行动变得带电。你有一种很实用的生命力，能把原本停滞、犹豫、等待授权的状态，往前拨一格。你未必永远最稳，但你很容易成为最先让空气里出现“可以开始了”的那个人。",
    strength: "你有启动能力、临场能量和把别人一并带动起来的感染力。",
    shadow: "点火太频繁也会累，尤其当后续承接系统跟不上时，你会先被自己烧干。",
    advice: "别把“我能带起来”误判成“我必须一直带”。学会把火交给愿意续柴的人。",
    pattern: "MHMMLMLHHH"
  },
  {
    code: "LOCK",
    cn: "锁匠",
    intro: "你不是冷，你只是清楚什么门该开，什么门该留着。",
    desc: "LOCK 对边界、权限和可进入范围有很强的感知。你不喜欢一上来就交出全部，也不擅长被无差别索取情绪和时间。你会先观察，再授权，再决定让谁走到哪一层，这让你显得克制，但也相当稳定。",
    strength: "你有很好的边界意识和筛选能力，不容易被关系和环境随便拖着跑。",
    shadow: "如果锁太多，别人很难靠近，你自己也会在安全里变得孤立。",
    advice: "边界不是为了把世界永久关在外面，而是为了给真正重要的人留出清晰入口。",
    pattern: "HMHLHLHLMM"
  },
  {
    code: "TIDE",
    cn: "潮汐人",
    intro: "你不是反复横跳，你是在按自己的潮位生活。",
    desc: "TIDE 的节奏不是线性的，更像涨潮和退潮。你很容易被关系、情绪、环境温度影响，也因此比很多人更能感到“现在适合靠近”还是“现在只想缩回去”。你对自己的变化很诚实，只是不一定总能解释清楚。",
    strength: "你感受深、直觉准、对人与场景的细小变化有天然读取能力。",
    shadow: "潮位不稳时，外界会觉得你难预测，而你自己也会被波动拖得疲惫。",
    advice: "别急着把自己修成恒温系统。先学会认识自己的潮汐规律，比强行稳定更有用。",
    pattern: "LMLHLHLMLM"
  },
  {
    code: "CIRCUIT",
    cn: "回路人",
    intro: "你的脑子不只是在想问题，它经常在给世界搭电路。",
    desc: "CIRCUIT 喜欢理解事情怎么运作、为什么这样、有没有更优路径。你不一定外放，但内在始终在处理信息、拆解逻辑、试图把混乱变成某种可解释系统。很多人只是“觉得不对”，你会进一步追问“到底哪一环不对”。",
    strength: "你兼具思考力和推进力，既能分析，也不完全只停在分析。",
    shadow: "当脑内回路开得太多时，容易把自己困在过度处理和过度优化里。",
    advice: "理解世界很厉害，但不是每件事都值得你拉到全量分析模式。",
    pattern: "MHHLMMHMHH"
  },
  {
    code: "LANTERN",
    cn: "提灯人",
    intro: "你身上有一种很少见的能力，叫自己不吵，还能给别人照路。",
    desc: "LANTERN 往往兼具一定稳定度和一定温度。你对人并不冷，也不是没有边界，而是知道什么时候该照亮、什么时候该收回光。很多人觉得跟你待在一起会安心，不是因为你会说万能的话，而是因为你不轻易制造额外混乱。",
    strength: "你有安抚力、判断力和一种让局面变清楚的存在感。",
    shadow: "提灯久了，容易默默进入“总得我来照一下”的责任模式。",
    advice: "别把自己变成全天候公共照明系统。能照亮别人很好，先别把自己照空。",
    pattern: "HMHHMHMLMM"
  },
  {
    code: "BRICK",
    cn: "砌墙人",
    intro: "你不太爱喊口号，但很会一块砖一块砖把事情垒起来。",
    desc: "BRICK 给人的印象往往是硬、稳、耐压。你对结果有要求，对边界也有要求，不太容易被一时情绪带偏节奏。比起热闹的表达，你更像那种“事情先做出来再说”的人，哪怕不太柔软，也很有支撑力。",
    strength: "你重执行、重结构、重结果，是很难被轻易掀翻的现实派。",
    shadow: "太习惯靠扛和做来表达自己，可能让别人误以为你什么都不需要。",
    advice: "继续保留你的硬度，但也别把自己永远只用“能做事”这一个接口示人。",
    pattern: "MHMLHLHLHH"
  },
  {
    code: "THREAD",
    cn: "线团人",
    intro: "你不是脆，你只是有太多细线同时牵着心。",
    desc: "THREAD 常常是感受细、牵挂多、思绪也容易互相打结的人。你不是不想前进，而是很多时候太在乎了，于是每一根线都想顾，每一个风险都想先摸清，最后自己被缠在原地。你不是没深度，你是深度太容易彼此缠绕。",
    strength: "你细腻、真诚、能看见别人略过的情绪和关系纹理。",
    shadow: "如果一直只负责感受，不负责松线，生活会越来越像一个无法拆开的结。",
    advice: "别急着把所有线一次性理顺。先找到今天最该松开的那一根，就已经很了不起。",
    pattern: "LMLHLLMLLL"
  },
  {
    code: "WAVE",
    cn: "冲浪者",
    intro: "你的天赋不是制造海，而是看见浪来了就知道怎么站上去。",
    desc: "WAVE 对变化比较友好，也相对愿意和不确定性合作。你未必像彗星那么猛，也未必像蓝图派那么稳，但你很会借势、转向、抓住时机。遇到新场景时，你往往是那个能迅速适应并开始玩的类型。",
    strength: "你灵活、敢试、恢复快，对机会和变化的反应很有机动性。",
    shadow: "如果一直追着浪走，也可能忘了自己想去的是哪片岸。",
    advice: "继续保留你的流动感，同时给自己留一个偶尔停靠、确认方向的锚点。",
    pattern: "MHMMLMLHMM"
  }
];

const FALLBACK_TYPE = {
  code: "GLITCH",
  cn: "故障艺术家",
  intro: "标准原型抓不住你，不代表你有问题，只代表你很难被装进一个整齐的抽屉。",
  desc: "你这轮的维度组合没有和标准人格库形成足够高的贴合度。换句话说，你不是没有轮廓，而是轮廓比较混搭：有的地方像在精密布线，有的地方又像随时准备拆掉重装。你可能比常规模板更矛盾，也更难一句话说清。",
  strength: "你不容易被单一路径定义，具备跳脱、混搭和意外组合的潜力。",
  shadow: "当内部拉扯过多时，容易让自己感觉像很多版本同时运行，却没有一个彻底落地。",
  advice: "别急着找一个标签把自己钉住。先承认复杂，再慢慢找出哪些部分是你的常态，而不是偶发噪声。"
};

const QUESTIONS_BY_DIMENSION = DIMENSION_ORDER.reduce((acc, key) => {
  acc[key] = DIMENSIONS[key].bank.map((item, index) => ({
    id: `${key}_${index + 1}`,
    dim: key,
    text: item.text,
    reverse: Boolean(item.reverse)
  }));
  return acc;
}, {});

const state = {
  selectedQuestions: [],
  answers: {},
  result: null
};

const screens = {
  intro: document.getElementById("introScreen"),
  test: document.getElementById("testScreen"),
  result: document.getElementById("resultScreen")
};

const questionList = document.getElementById("questionList");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const hintText = document.getElementById("hintText");
const submitBtn = document.getElementById("submitBtn");

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function sampleSize(array, size) {
  return shuffle(array).slice(0, size);
}

function levelToNumber(level) {
  return { L: 1, M: 2, H: 3 }[level];
}

function sumToLevel(score) {
  if (score <= 4) return "L";
  if (score <= 6) return "M";
  return "H";
}

function hashString(value) {
  return [...value].reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function showScreen(screenKey) {
  Object.entries(screens).forEach(([key, node]) => {
    node.classList.toggle("active", key === screenKey);
  });
}

function buildSessionQuestions() {
  const bucket = DIMENSION_ORDER.flatMap((dim) => sampleSize(QUESTIONS_BY_DIMENSION[dim], 3));
  return shuffle(bucket);
}

function createQuestionCard(question, index) {
  const dimension = DIMENSIONS[question.dim];
  const optionsMarkup = OPTION_LABELS.map((label, optionIndex) => {
    const value = optionIndex + 1;
    const checked = state.answers[question.id] === value ? "checked" : "";
    const code = ["A", "B", "C"][optionIndex];
    return `
      <label class="option">
        <input type="radio" name="${question.id}" value="${value}" ${checked} />
        <span class="option-code">${code}</span>
        <span>${label}</span>
      </label>
    `;
  }).join("");

  return `
    <article class="question-card">
      <div class="question-meta">
        <span>第 ${index + 1} 题</span>
        <span>${dimension.model} · ${dimension.name}</span>
      </div>
      <p class="question-title">${question.text}</p>
      <div class="options">${optionsMarkup}</div>
    </article>
  `;
}

function renderQuestions() {
  questionList.innerHTML = state.selectedQuestions.map(createQuestionCard).join("");

  questionList.querySelectorAll("input[type='radio']").forEach((input) => {
    input.addEventListener("change", (event) => {
      const target = event.target;
      state.answers[target.name] = Number(target.value);
      updateProgress();
    });
  });

  updateProgress();
}

function updateProgress() {
  const total = state.selectedQuestions.length;
  const done = state.selectedQuestions.filter((question) => state.answers[question.id] !== undefined).length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${done} / ${total}`;

  const complete = total > 0 && done === total;
  submitBtn.disabled = !complete;
  hintText.textContent = complete
    ? "都答完了。现在可以把这束光送进棱镜里。"
    : "题做完之前，系统暂时不发表人生意见。";
}

function scoreAnswer(question, answer) {
  return question.reverse ? 4 - answer : answer;
}

function rankTypes(levels) {
  const vector = DIMENSION_ORDER.map((dim) => levelToNumber(levels[dim]));

  return PERSONALITY_TYPES.map((type) => {
    const patternVector = [...type.pattern].map(levelToNumber);
    let distance = 0;
    let exact = 0;

    patternVector.forEach((num, index) => {
      const diff = Math.abs(num - vector[index]);
      distance += diff;
      if (diff === 0) exact += 1;
    });

    const similarity = Math.max(0, Math.round((1 - distance / 20) * 100));

    return {
      ...type,
      distance,
      exact,
      similarity
    };
  }).sort((a, b) => {
    if (a.distance !== b.distance) return a.distance - b.distance;
    if (b.exact !== a.exact) return b.exact - a.exact;
    return b.similarity - a.similarity;
  });
}

function computeResult() {
  const rawScores = DIMENSION_ORDER.reduce((acc, dim) => {
    acc[dim] = 0;
    return acc;
  }, {});

  state.selectedQuestions.forEach((question) => {
    rawScores[question.dim] += scoreAnswer(question, state.answers[question.id]);
  });

  const levels = DIMENSION_ORDER.reduce((acc, dim) => {
    acc[dim] = sumToLevel(rawScores[dim]);
    return acc;
  }, {});

  const ranked = rankTypes(levels);
  const bestMatch = ranked[0];
  const fallback = bestMatch.similarity < 62;
  const finalType = fallback ? FALLBACK_TYPE : bestMatch;
  const mode = fallback ? "系统识别为混合型轮廓" : "你的当前主类型";
  const badge = fallback
    ? `标准人格库最高贴合度 ${bestMatch.similarity}%`
    : `贴合度 ${bestMatch.similarity}% · 精准命中 ${bestMatch.exact}/10 维`;

  return {
    rawScores,
    levels,
    ranked,
    bestMatch,
    finalType,
    fallback,
    mode,
    badge
  };
}

function buildSignature(result) {
  const highs = DIMENSION_ORDER.filter((dim) => result.levels[dim] === "H").map((dim) => DIMENSIONS[dim].name);
  const lows = DIMENSION_ORDER.filter((dim) => result.levels[dim] === "L").map((dim) => DIMENSIONS[dim].name);

  const parts = [];

  if (highs.length > 0) {
    parts.push(`这轮最亮的部分是 ${highs.slice(0, 2).join("、")}`);
  }

  if (lows.length > 0) {
    parts.push(`相对收着的是 ${lows.slice(0, 2).join("、")}`);
  }

  if (parts.length === 0) {
    parts.push("你的各维度比较均衡，没有哪一块在大声抢镜。");
  }

  return `${parts.join("；")}。`;
}

function buildVectorText(result) {
  const vector = DIMENSION_ORDER.map((dim) => `${DIMENSIONS[dim].name}:${result.levels[dim]}`);
  return `维度向量：${vector.join(" · ")}`;
}

function renderTopMatches(result) {
  const node = document.getElementById("topMatches");
  node.innerHTML = result.ranked.slice(0, 3).map((type, index) => `
    <article class="top-match">
      <div class="top-match-head">
        <strong>${index + 1}. ${type.code} ${type.cn}</strong>
        <span>${type.similarity}%</span>
      </div>
      <p>${type.intro}</p>
    </article>
  `).join("");
}

function renderDimensions(result) {
  const node = document.getElementById("dimensionGrid");
  node.innerHTML = DIMENSION_ORDER.map((dim) => {
    const meta = DIMENSIONS[dim];
    const level = result.levels[dim];
    return `
      <article class="dim-card">
        <div class="dim-head">
          <div>
            <strong>${meta.name}</strong>
            <div class="question-meta">${meta.model}</div>
          </div>
          <span class="dim-score">${level} / ${result.rawScores[dim]} 分</span>
        </div>
        <p>${meta.explain[level]}</p>
      </article>
    `;
  }).join("");
}

function setPosterGradient(typeCode) {
  const poster = document.getElementById("typePoster");
  const hue = hashString(typeCode) % 360;
  const hueB = (hue + 44) % 360;
  const hueC = (hue + 96) % 360;

  poster.style.background = `
    radial-gradient(circle at top right, rgba(255,255,255,0.22), transparent 32%),
    linear-gradient(160deg, hsl(${hue} 45% 24%) 0%, hsl(${hueB} 54% 38%) 52%, hsl(${hueC} 78% 62%) 100%)
  `;
}

function renderResult() {
  state.result = computeResult();
  const { finalType } = state.result;

  document.getElementById("typeMode").textContent = state.result.mode;
  document.getElementById("typeName").textContent = `${finalType.code} ${finalType.cn}`;
  document.getElementById("typeIntro").textContent = finalType.intro;
  document.getElementById("typeBadge").textContent = state.result.badge;
  document.getElementById("typeDesc").textContent = finalType.desc;
  document.getElementById("typeStrength").textContent = finalType.strength;
  document.getElementById("typeShadow").textContent = finalType.shadow;
  document.getElementById("typeAdvice").textContent = finalType.advice;
  document.getElementById("signatureText").textContent = buildSignature(state.result);
  document.getElementById("vectorText").textContent = buildVectorText(state.result);
  document.getElementById("typePosterCode").textContent = finalType.code;

  setPosterGradient(finalType.code);
  renderTopMatches(state.result);
  renderDimensions(state.result);
  showScreen("result");
}

function startTest() {
  state.selectedQuestions = buildSessionQuestions();
  state.answers = {};
  state.result = null;
  renderQuestions();
  showScreen("test");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("startBtn").addEventListener("click", startTest);
document.getElementById("rerollBtn").addEventListener("click", startTest);
document.getElementById("restartBtn").addEventListener("click", startTest);
document.getElementById("submitBtn").addEventListener("click", renderResult);
document.getElementById("backBtn").addEventListener("click", () => showScreen("intro"));
document.getElementById("homeBtn").addEventListener("click", () => showScreen("intro"));
