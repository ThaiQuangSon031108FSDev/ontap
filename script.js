// ===================================================================================
// DỮ LIỆU (DATABASE)
// ===================================================================================

// --- DỮ LIỆU FLASHCARD ---
const flashcardDecks = [
    {
        name: "Family & People (Gia đình & Con người)",
        cards: [
            { front: "nephew", back: "cháu trai (của cô/dì/chú/bác)" },
            { front: "niece", back: "cháu gái (của cô/dì/chú/bác)" },
            { front: "relatives", back: "họ hàng" },
            { front: "handsome", back: "đẹp trai" },
            { front: "beautiful / pretty", back: "xinh đẹp" },
            { front: "beard", back: "râu quai nón" },
            { front: "mustache", back: "ria mép" },
            { front: "straight hair", back: "tóc thẳng" },
            { front: "funny", back: "vui tính" },
            { front: "serious", back: "nghiêm túc" },
            { front: "kind / nice", back: "tốt bụng, tử tế" },
            { front: "hard-working", back: "chăm chỉ" },
            { front: "outgoing", back: "cởi mở, hướng ngoại" },
            { front: "generous", back: "hào phóng" }
        ]
    },
    {
        name: "Jobs & Work (Nghề nghiệp & Công việc)",
        cards: [
            { front: "waiter / waitress", back: "bồi bàn nam / nữ" },
            { front: "chef / cook", back: "đầu bếp" },
            { front: "farmer", back: "nông dân" },
            { front: "firefighter", back: "lính cứu hỏa" },
            { front: "nurse", back: "y tá" },
            { front: "artist", back: "họa sĩ, nghệ sĩ" },
            { front: "scientist", back: "nhà khoa học" },
            { front: "manager", back: "người quản lý" },
            { front: "office worker", back: "nhân viên văn phòng" },
            { front: "police officer", back: "cảnh sát" }
        ]
    },
    {
        name: "Places & House (Địa điểm & Nhà cửa)",
        cards: [
            { front: "hall", back: "sảnh, hành lang" },
            { front: "garden / yard", back: "sân vườn" },
            { front: "balcony", back: "ban công" },
            { front: "bookshelf", back: "kệ sách" },
            { front: "mirror", back: "cái gương" },
            { front: "rug / carpet", back: "tấm thảm" },
            { front: "curtains", back: "rèm cửa" },
            { front: "pharmacy / drugstore", back: "hiệu thuốc" },
            { front: "bakery", back: "tiệm bánh mì" },
            { front: "train station", back: "nhà ga" },
            { front: "shopping mall", back: "trung tâm thương mại" },
            { front: "bridge", back: "cây cầu" }
        ]
    },
    {
        name: "Daily Routines & Activities",
        cards: [
            { front: "wake up", back: "tỉnh giấc" },
            { front: "brush my teeth", back: "đánh răng" },
            { front: "have a shower", back: "tắm vòi sen" },
            { front: "make the bed", back: "dọn giường" },
            { front: "do the laundry", back: "giặt giũ" },
            { front: "clean the house", back: "dọn dẹp nhà cửa" },
            { front: "check emails", back: "kiểm tra email" },
            { front: "go shopping", back: "đi mua sắm" },
            { front: "hang out with friends", back: "đi chơi với bạn bè" }
        ]
    },
    {
        name: "Entertainment & Hobbies",
        cards: [
            { front: "reading", back: "đọc sách" },
            { front: "painting / drawing", back: "vẽ" },
            { front: "traveling", back: "du lịch" },
            { front: "cycling", back: "đạp xe" },
            { front: "photography", back: "nhiếp ảnh" },
            { front: "documentary", back: "phim tài liệu" },
            { front: "cartoon", back: "phim hoạt hình" },
            { front: "exhibition", back: "buổi triển lãm" }
        ]
    },
    {
        name: "Weather & Seasons (Thời tiết & Các mùa)",
        cards: [
            { front: "spring", back: "mùa xuân" },
            { front: "summer", back: "mùa hè" },
            { front: "autumn / fall", back: "mùa thu" },
            { front: "winter", back: "mùa đông" },
            { front: "cloudy", back: "nhiều mây" },
            { front: "windy", back: "nhiều gió" },
            { front: "foggy", back: "có sương mù" },
            { front: "snowy", back: "có tuyết" },
            { front: "storm", back: "cơn bão" },
            { front: "temperature", back: "nhiệt độ" }
        ]
    },
    {
        name: "Food & Drink (Đồ ăn & Thức uống)",
        cards: [
            { front: "rice", back: "cơm, gạo" },
            { front: "bread", back: "bánh mì" },
            { front: "vegetables", back: "rau củ" },
            { front: "fruit", back: "trái cây" },
            { front: "cheese", back: "phô mai" },
            { front: "eggs", back: "trứng" },
            { front: "water", back: "nước" },
            { front: "milk", back: "sữa" },
            { front: "juice", back: "nước ép trái cây" },
            { front: "tea / coffee", back: "trà / cà phê" }
        ]
    }
];

// --- DỮ LIỆU QUIZ (ĐẦY ĐỦ 45 CÂU) ---
const quizQuestions = [
    // Part 1: Vocabulary: Rooms & Furniture
    {
        question: "We cook meals in the ___.",
        options: ["bedroom", "kitchen", "bathroom", "living room"],
        answer: 1,
        explanation: "<b>Kitchen</b> là nhà bếp, nơi chúng ta nấu ăn. <b>Bedroom</b>: phòng ngủ, <b>bathroom</b>: phòng tắm, <b>living room</b>: phòng khách."
    },
    {
        question: "My dad likes to read a book on the ___ in the living room.",
        options: ["toilet", "sink", "armchair", "dishwasher"],
        answer: 2,
        explanation: "<b>Armchair</b> là ghế bành, thường đặt ở phòng khách để ngồi thư giãn, đọc sách. Các lựa chọn khác không phù hợp với phòng khách."
    },
    {
        question: "The ___ is usually next to the bathtub. You use it to wash your hands.",
        options: ["wardrobe", "sink", "cupboard", "stove"],
        answer: 1,
        explanation: "<b>Sink</b> là bồn rửa tay, thường có trong phòng tắm. <b>Wardrobe</b>: tủ quần áo, <b>cupboard</b>: tủ chén, <b>stove</b>: bếp lò."
    },
    {
        question: "People keep their clothes in a ___.",
        options: ["fridge", "microwave", "sofa", "wardrobe"],
        answer: 3,
        explanation: "<b>Wardrobe</b> là tủ quần áo. <b>Fridge</b>: tủ lạnh, <b>microwave</b>: lò vi sóng, <b>sofa</b>: ghế sô-pha."
    },
    {
        question: '"Where is the remote control?" - "It\'s on the ___."',
        options: ["coffee table", "oven", "shower", "garage"],
        answer: 0,
        explanation: "<b>Coffee table</b> là bàn cà phê/bàn trà, thường ở phòng khách và là nơi hợp lý để đặt điều khiển từ xa (remote control)."
    },
    // Part 2: Prepositions of Place
    {
        question: "The cat is sleeping ___ the table.",
        options: ["on", "between", "under", "next"],
        answer: 2,
        explanation: "<b>Under</b> có nghĩa là 'ở dưới'. Con mèo đang ngủ dưới gầm bàn. <b>On</b>: trên, <b>between</b>: ở giữa."
    },
    {
        question: "The bank is ___ the post office and the supermarket.",
        options: ["next to", "between", "on", "in"],
        answer: 1,
        explanation: "<b>Between</b> có nghĩa là 'ở giữa' hai vật hoặc hai địa điểm."
    },
    {
        question: "My school is ___ Le Loi street.",
        options: ["in", "on", "at", "for"],
        answer: 1,
        explanation: "Chúng ta dùng giới từ <b>on</b> khi nói về một địa chỉ nằm trên một con đường cụ thể."
    },
    {
        question: "Can you see the picture ___ the wall?",
        options: ["at", "under", "on", "next to"],
        answer: 2,
        explanation: "Chúng ta dùng giới từ <b>on</b> để chỉ một vật gì đó ở trên một bề mặt, ví dụ như bức tranh trên tường."
    },
    {
        question: "The fridge is ___ the microwave.",
        options: ["across", "between", "next to", "under"],
        answer: 2,
        explanation: "<b>Next to</b> có nghĩa là 'bên cạnh', dùng để chỉ hai vật ở gần nhau."
    },
    // Part 3: Simple Present & Daily Routines
    {
        question: "A doctor ___ sick people.",
        options: ["help", "helps", "is helping", "are helping"],
        answer: 1,
        explanation: "Thì hiện tại đơn (Simple Present) dùng cho sự thật hiển nhiên. Chủ ngữ 'A doctor' là ngôi thứ 3 số ít, nên động từ phải thêm '-s' → <b>helps</b>."
    },
    {
        question: "We don't have ___ milk for breakfast.",
        options: ["some", "any", "a", "an"],
        answer: 1,
        explanation: "<b>Any</b> được dùng trong câu phủ định ('don't have') và câu hỏi. <b>Some</b> dùng trong câu khẳng định."
    },
    {
        question: "My mother is a teacher. She ___ long hours.",
        options: ["work", "doesn't work", "works", "working"],
        answer: 2,
        explanation: "Thì hiện tại đơn. Chủ ngữ 'She' là ngôi thứ 3 số ít, nên động từ phải thêm '-s' → <b>works</b>."
    },
    {
        question: "I enjoy ___ to music in my free time.",
        options: ["listen", "to listen", "listening", "listened"],
        answer: 2,
        explanation: "Sau động từ 'enjoy' (thích thú), động từ theo sau phải ở dạng V-ing. → <b>enjoy listening</b>."
    },
    {
        question: "___ you like playing soccer?",
        options: ["Are", "Does", "Is", "Do"],
        answer: 3,
        explanation: "Đây là câu hỏi Yes/No ở thì hiện tại đơn với động từ thường 'like'. Với chủ ngữ 'you', ta dùng trợ động từ <b>Do</b>."
    },
    {
        question: "A pilot ___ a plane.",
        options: ["fly", "flies", "is flying", "flying"],
        answer: 1,
        explanation: "Thì hiện tại đơn. Chủ ngữ 'A pilot' là ngôi thứ 3 số ít. Động từ 'fly' kết thúc bằng 'y' nên đổi thành 'i' và thêm '-es' → <b>flies</b>."
    },
    {
        question: "Police officers ___ wear a uniform.",
        options: ["have to", "has to", "to have", "having to"],
        answer: 0,
        explanation: "<b>Have to</b> dùng để diễn tả sự bắt buộc. Chủ ngữ 'Police officers' là số nhiều nên dùng 'have to'. 'Has to' dùng cho số ít."
    },
    // Part 4: Simple Past Tense
    {
        question: "My family ___ to Da Lat last summer.",
        options: ["go", "goes", "went", "is going"],
        answer: 2,
        explanation: "'Last summer' là dấu hiệu của thì quá khứ đơn (Simple Past). Động từ bất quy tắc của 'go' là <b>went</b>."
    },
    {
        question: "She ___ me a letter two days ago.",
        options: ["send", "sends", "sended", "sent"],
        answer: 3,
        explanation: "'Two days ago' là dấu hiệu của thì quá khứ đơn. 'Send' là động từ bất quy tắc, dạng quá khứ là <b>sent</b>."
    },
    {
        question: "I saw him ten minutes ___.",
        options: ["last", "ago", "next", "later"],
        answer: 1,
        explanation: "<b>Ago</b> được dùng để nói một việc đã xảy ra cách đây bao lâu, và thường đứng cuối câu trong thì quá khứ đơn."
    },
    {
        question: "My grandfather ___ born in 1950.",
        options: ["were", "is", "was", "are"],
        answer: 2,
        explanation: "Cấu trúc 'to be born' (được sinh ra) ở quá khứ. Chủ ngữ 'My grandfather' là số ít nên dùng <b>was</b>."
    },
    {
        question: "___ you do your homework last night?",
        options: ["Do", "Did", "Does", "Was"],
        answer: 1,
        explanation: "Câu hỏi Yes/No ở thì quá khứ đơn ('last night') với động từ thường 'do'. Ta dùng trợ động từ <b>Did</b> cho tất cả các ngôi."
    },
    {
        question: "We ___ a taxi to the airport yesterday.",
        options: ["take", "took", "taked", "takes"],
        answer: 1,
        explanation: "'Yesterday' là dấu hiệu của thì quá khứ đơn. 'Take' là động từ bất quy tắc, dạng quá khứ là <b>took</b>."
    },
    {
        question: "He ___ history for twenty years before he retired.",
        options: ["teach", "teached", "taught", "teaches"],
        answer: 2,
        explanation: "Hành động đã xảy ra và kết thúc trong quá khứ. 'Teach' là động từ bất quy tắc, dạng quá khứ là <b>taught</b>."
    },
    {
        question: "They ___ the game 3-1.",
        options: ["win", "wins", "won", "wons"],
        answer: 2,
        explanation: "Hành động đã xảy ra trong quá khứ. 'Win' là động từ bất quy tắc, dạng quá khứ là <b>won</b>."
    },
    // Part 5: Find the Mistake
    {
        question: "Find the mistake: We `live` here. It's `ours` `house`.",
        options: ["live", "here", "ours", "house"],
        answer: 2,
        explanation: "Phải dùng tính từ sở hữu <b>our</b> trước danh từ 'house'. 'Ours' là đại từ sở hữu, nó đứng một mình (ví dụ: The house is ours)."
    },
    {
        question: "Find the mistake: `Do` `your` brother `like` `watching` TV?",
        options: ["Do", "your", "like", "watching"],
        answer: 0,
        explanation: "Chủ ngữ 'your brother' là ngôi thứ 3 số ít, nên phải dùng trợ động từ <b>Does</b> trong câu hỏi hiện tại đơn. → 'Does your brother like...?'"
    },
    {
        question: "Find the mistake: Please `don't` `to talk` `in` the library.",
        options: ["don't", "to talk", "in", "library"],
        answer: 1,
        explanation: "Sau 'don't' trong câu mệnh lệnh, động từ ở dạng nguyên mẫu không 'to'. → Please don't <b>talk</b>..."
    },
    {
        question: "Find the mistake: I `already` `send` the letter `to my friend` last week.",
        options: ["already", "send", "to my friend", "last week"],
        answer: 1,
        explanation: "'Last week' chỉ thời gian trong quá khứ, nên động từ phải ở thì quá khứ đơn. → I already <b>sent</b>..."
    },
    {
        question: "Find the mistake: There `aren't` `some` `chairs` in the dining room.",
        options: ["aren't", "some", "chairs", "in"],
        answer: 1,
        explanation: "<b>Any</b> được dùng trong câu phủ định ('aren't') và câu hỏi. 'Some' dùng trong câu khẳng định. → There aren't <b>any</b> chairs..."
    },
    {
        question: "Find the mistake: My birthday is `on` `2005`.",
        options: ["My", "is", "on", "2005"],
        answer: 2,
        explanation: "Chúng ta dùng giới từ <b>in</b> với năm. 'On' được dùng với ngày cụ thể (ví dụ: on July 20th)."
    },
    {
        question: "Find the mistake: He `doesn't` `has` `to work` on Sundays.",
        options: ["doesn't", "has", "to work", "on"],
        answer: 1,
        explanation: "Sau trợ động từ 'doesn't', động từ chính trở về dạng nguyên mẫu là <b>have</b>. → He doesn't <b>have</b> to work..."
    },
    {
        question: "Find the mistake: She `buyed` a new `car` `yesterday`.",
        options: ["buyed", "a new", "car", "yesterday"],
        answer: 0,
        explanation: "'Buy' là động từ bất quy tắc, dạng quá khứ là <b>bought</b>, không phải 'buyed'."
    },
    // Part 6: Reorder the Words
    {
        question: "Reorder the words: watching / I / TV / enjoy",
        options: ["I TV enjoy watching.", "I watching enjoy TV.", "I enjoy watching TV.", "I enjoy TV watching."],
        answer: 2,
        explanation: "Cấu trúc đúng là: Subject + enjoy + V-ing + Object. → <b>I enjoy watching TV.</b>"
    },
    {
        question: "Reorder the words: is / next / my / to / house / the park",
        options: ["My house is next to the park.", "The park is my house next to.", "My house next to is the park.", "The park next to my house is."],
        answer: 0,
        explanation: "Cấu trúc câu cơ bản: Subject + Verb + Object/Place. → <b>My house is next to the park.</b>"
    },
    {
        question: "Reorder the words: you / did / where / go / yesterday?",
        options: ["Where you did go yesterday?", "Where did you go yesterday?", "Yesterday where did you go?", "Did you go where yesterday?"],
        answer: 1,
        explanation: "Cấu trúc câu hỏi Wh- ở thì quá khứ: Wh-word + did + S + V (nguyên mẫu)? → <b>Where did you go yesterday?</b>"
    },
    {
        question: "Reorder the words: a / I / funny / really / movie / saw",
        options: ["I saw a movie really funny.", "I saw a really funny movie.", "I funny saw a really movie.", "I really movie saw a funny."],
        answer: 1,
        explanation: "Trật tự tính từ: Trạng từ (really) đứng trước tính từ (funny), và cả hai đứng trước danh từ (movie). → <b>I saw a really funny movie.</b>"
    },
    {
        question: "Reorder the words: soccer / sometimes / play / on / we / weekends",
        options: ["We play sometimes soccer on weekends.", "Sometimes we on weekends play soccer.", "We sometimes play soccer on weekends.", "We play soccer on sometimes weekends."],
        answer: 2,
        explanation: "Trạng từ chỉ tần suất (sometimes) thường đứng trước động từ chính (play). → <b>We sometimes play soccer on weekends.</b>"
    },
    // Part 7: General Review
    {
        question: 'A: "Could I have a glass of water, please?" B: "___"',
        options: ["Oh dear!", "Of course. Here you are.", "Anyway.", "Sorry, I'm afraid not."],
        answer: 1,
        explanation: "<b>Of course. Here you are.</b> (Dĩ nhiên rồi. Của bạn đây.) là cách lịch sự để đồng ý với một lời yêu cầu."
    },
    {
        question: "My birthday is ___ July 20th.",
        options: ["in", "at", "on", "for"],
        answer: 2,
        explanation: "Chúng ta dùng giới từ <b>on</b> cho một ngày cụ thể (bao gồm cả tháng và ngày)."
    },
    {
        question: '"Your hands are really cold." - "You should ___ these gloves."',
        options: ["look for", "take up", "put on", "take off"],
        answer: 2,
        explanation: "<b>Put on</b> là một cụm động từ (phrasal verb) có nghĩa là 'mặc vào' hoặc 'đeo vào'. <b>Take off</b>: cởi ra."
    },
    {
        question: '"Excuse me, can you tell me the way ___ the nearest hospital?"',
        options: ["for", "at", "to", "on"],
        answer: 2,
        explanation: "Cấu trúc hỏi đường là 'the way <b>to</b> + địa điểm'."
    },
    {
        question: "We take a plane at the ___.",
        options: ["airport", "library", "museum", "hospital"],
        answer: 0,
        explanation: "<b>Airport</b> là sân bay, nơi chúng ta đi máy bay (take a plane)."
    },
    {
        question: "The leaves fall off the trees in the ___.",
        options: ["winter", "fall", "summer", "spring"],
        answer: 1,
        explanation: "<b>Fall</b> (hoặc Autumn) là mùa thu, mùa lá rụng."
    },
    {
        question: "How about ___ to the cinema tonight?",
        options: ["go", "to go", "went", "going"],
        answer: 3,
        explanation: "Cấu trúc 'How about' dùng để đưa ra lời gợi ý, theo sau nó là một động từ ở dạng V-ing. → <b>How about going...?</b>"
    },
];

// --- DỮ LIỆU READING ---
const readingTexts = [
    {
        title: "Passage 1: Maria's Day (Easy)",
        passage: `<p>My name is Maria, and I'm a teacher. I work at a school near my house, so I usually walk to work. I have to get up at 6:00 am every day. I have a quick breakfast and leave home at 7:00 am. My school is between a library and a small park. I love my job because I like helping children learn new things. After work, I often go to the park to read a book. I live with my parents and my younger brother, Tom. Tom is a university student. He is very funny and friendly. On weekends, we don't work or study. We sometimes go to the movie theater together.</p>`,
        questions: [
            { type: 'multiple_choice', q: "Maria is a student.", options: ["True", "False", "Not Given"], answer: 1 },
            { type: 'multiple_choice', q: "How does Maria go to work?", options: ["By bus", "By car", "She walks", "By train"], answer: 2 },
            { type: 'multiple_choice', q: "What does Maria's family sometimes do on weekends?", options: ["They work", "They study", "They go to the movie theater", "They go to the library"], answer: 2 }
        ]
    },
    {
        title: "Passage 2: A Vacation in Da Nang (Easy)",
        passage: `<p>Last year, my family and I went on a vacation to Da Nang. We stayed in a hotel near the beach for three days. The hotel was very big and beautiful. There was a swimming pool, and there were two amazing restaurants. The weather was hot and sunny every day. In the mornings, my father and I went swimming. In the afternoons, my mother and my sister went shopping. In the evenings, we often ate special food at a restaurant. We didn't watch TV because we were very busy. I loved the vacation. It was a wonderful experience. I took a lot of photos. I want to go back there again next year.</p>`,
        questions: [
            { type: 'multiple_choice', q: "How long did they stay in Da Nang?", options: ["One day", "Two days", "Three days", "One week"], answer: 2 },
            { type: 'multiple_choice', q: "What was the weather like?", options: ["Cold and rainy", "Hot and sunny", "Cold and windy", "Hot and cloudy"], answer: 1 },
            { type: 'multiple_choice', q: "The writer enjoyed the vacation.", options: ["True", "False", "Not Given"], answer: 0 }
        ]
    },
    // NEW, HARDER READING PASSAGE
    {
        title: "Passage 3: The History of Coffee (Harder)",
        passage: `
            <p>Coffee is one of the most popular drinks in the world. Millions of people drink it every morning. But where did it come from? The story of coffee began in Ethiopia, a country in Africa. A legend says that a goat herder named Kaldi discovered coffee beans after he saw his goats became very energetic after eating berries from a certain tree.</p>
            <p>From Ethiopia, coffee traveled to the Middle East. By the 15th century, it was grown in Yemen. People in Arabia started to boil the beans to create a dark, hot beverage. They called it 'qahwa'. Coffee houses appeared in cities across the region and became important centers for social activity. People went there to talk, listen to music, and play games.</p>
            <p>In the 17th century, coffee arrived in Europe. At first, some people were suspicious of this new 'bitter invention of Satan'. However, it soon became very popular. The first European coffee house opened in Venice, Italy, in 1645. Today, you can find coffee shops in almost every city on Earth, from the famous brands to small local cafes.</p>
        `,
        questions: [
            { 
                type: 'multiple_choice', 
                q: "According to the legend, who first discovered coffee?", 
                options: ["An Arabian trader", "An Italian man named Venice", "An Ethiopian goat herder", "A suspicious European"], 
                answer: 2 
            },
            { 
                type: 'multiple_choice', 
                q: "What does the word 'beverage' in paragraph 2 mean?", 
                options: ["A type of food", "A type of plant", "A type of game", "A type of drink"], 
                answer: 3 
            },
            { 
                type: 'fill_in_blank',
                q: "In the Middle East, coffee houses became important centers for ____ activity.",
                answer: "social"
            },
            {
                type: 'fill_in_blank',
                q: "The first European coffee house opened in the city of ____.",
                answer: "Venice"
            },
            {
                type: 'multiple_choice',
                q: "When did coffee arrive in Europe?",
                options: ["In the 15th century", "In the 16th century", "In the 17th century", "In 1645"],
                answer: 2
            }
        ]
    }
];

// --- DỮ LIỆU ÔN TẬP LÝ THUYẾT ---
const reviewContentHTML = `
    <h3>🧠 PHẦN 1 – OVERVIEW (TỔNG QUAN 6 UNIT)</h3>
    <p>Đây là tóm tắt nhanh toàn bộ 6 Unit để bạn có cái nhìn tổng thể.</p>
    <div class="overflow-x-auto">
        <table class="table-auto w-full">
            <thead>
                <tr><th>Unit</th><th>Topic</th><th>Key Vocabulary</th><th>Key Grammar</th><th>Example Sentence</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>1</strong></td><td><strong>Arrivals</strong></td><td>Countries, Nationalities, Everyday Items</td><td><strong>Simple Present "be"</strong>, <strong>a/an</strong>, <strong>this/that/these/those</strong></td><td><strong>This is</strong> my wallet. <strong>Are you</strong> from Brazil?</td></tr>
                <tr><td><strong>2</strong></td><td><strong>Family</strong></td><td>Family members, Appearance, Personality</td><td><strong>Possessives</strong> ('s, my, her), <strong>have/has</strong></td><td><strong>Her</strong> mother <b>has</b> curly hair.</td></tr>
                <tr><td><strong>3</strong></td><td><strong>Days</strong></td><td>Daily routines, Activities, Festivals</td><td><strong>Present Simple</strong>, <strong>Adverbs of Frequency</strong></td><td>I <strong>usually get up</strong> at 7 am.</td></tr>
                <tr><td><strong>4</strong></td><td><strong>Work</strong></td><td>Jobs, Work activities, Study</td><td><strong>have to/don't have to</strong>, <strong>Present Simple Questions</strong></td><td><strong>Do you have to</strong> wear a uniform?</td></tr>
                <tr><td><strong>5</strong></td><td><strong>Place</strong></td><td>Rooms, Furniture, Places in town</td><td><strong>There is/are</strong>, <strong>Can/Can't</strong>, <strong>Imperatives</strong></td><td><strong>Is there</strong> a park near your house?</td></tr>
                <tr><td><strong>6</strong></td><td><strong>Entertainment</strong></td><td>Movies, Music, Events, Past time</td><td><strong>Simple Past</strong> (was/were, V-ed/V2), <strong>like + V-ing</strong></td><td>We <strong>watched</strong> a movie <strong>yesterday</strong>.</td></tr>
            </tbody>
        </table>
    </div>
    <hr>
    <h3>📘 PHẦN 2 – GRAMMAR REVIEW</h3>
    <h4><strong>1. There is / There are</strong></h4>
    <ul>
        <li><strong>VI:</strong> Dùng để nói "có" cái gì tồn tại. <code>There is</code> cho số ít, <code>There are</code> cho số nhiều.</li>
        <li><strong>Công thức & Ví dụ:</strong>
            <ul>
                <li><code>There is + a/an + N (số ít).</code> → <strong>There is</strong> a book on the table.</li>
                <li><code>There are + N (số nhiều).</code> → <strong>There are</strong> two cats in the garden.</li>
            </ul>
        </li>
    </ul>
    <h4><strong>2. Can / Can’t</strong></h4>
    <ul>
        <li><strong>VI:</strong> Dùng để nói về khả năng (có thể/không thể làm gì).</li>
        <li><strong>Công thức & Ví dụ:</strong> <code>S + can/can't + V (nguyên mẫu).</code> → She <strong>can</strong> swim, but she <strong>can't</strong> drive.</li>
    </ul>
    <hr>
    <h3>🪄 PHẦN 6 – FINAL SUMMARY (TỔNG KẾT & MẸO THI)</h3>
    <h4><strong>A. Grammar You Must Remember</strong></h4>
    <ul>
        <li>✅ <strong>Present Simple vs. Present Continuous:</strong> <code>Present Simple</code> cho thói quen (every day, usually). <code>Present Continuous</code> cho hành động bây giờ (now).</li>
        <li>✅ <strong>Simple Past:</strong> Luôn dùng <code>V2/V-ed</code> với các từ chỉ thời gian quá khứ (<code>yesterday</code>, <code>last year</code>, <code>... ago</code>).</li>
    </ul>
    <h4><strong>C. Common Mistakes</strong></h4>
    <ul>
        <li><strong>Sai:</strong> <del>He don't like...</del> → <strong>Đúng:</strong> He <strong>doesn't</strong> like...</li>
        <li><strong>Sai:</strong> <del>I go to school yesterday.</del> → <strong>Đúng:</strong> I <strong>went</strong> to school yesterday.</li>
    </ul>
`;


// ===================================================================================
// LOGIC CHÍNH CỦA ỨNG DỤNG (Không cần chỉnh sửa phần này)
// ===================================================================================
document.addEventListener('DOMContentLoaded', () => {

    let currentQuizQuestionIndex = 0;
    let userQuizAnswers = [];
    let quizStartTime;
    let currentReadingData;
    let currentFlashcardDeckIndex = 0;
    let currentFlashcardIndex = 0;
    
    const screens = {
        home: document.getElementById('home-screen'),
        quiz: document.getElementById('quiz-screen'),
        flashcard: document.getElementById('flashcard-screen'),
        reading: document.getElementById('reading-screen'),
        stats: document.getElementById('stats-screen'),
        review: document.getElementById('review-screen'),
        result: document.getElementById('result-screen'),
    };

    function showScreen(screenId) {
        Object.values(screens).forEach(screen => screen.classList.remove('active'));
        screens[screenId]?.classList.add('active');
    }

    // --- Event Listeners ---
    document.getElementById('start-quiz').addEventListener('click', startQuiz);
    document.getElementById('start-flashcards').addEventListener('click', startFlashcards);
    document.getElementById('start-reading').addEventListener('click', startReading);
    document.getElementById('show-stats').addEventListener('click', () => { displayStatistics(); showScreen('stats'); });
    document.getElementById('start-review').addEventListener('click', () => showScreen('review'));

    document.querySelectorAll('.back-to-home').forEach(btn => btn.addEventListener('click', () => showScreen('home')));
    
    document.getElementById('quiz-next-btn').addEventListener('click', nextQuizQuestion);
    document.getElementById('quiz-back-btn').addEventListener('click', prevQuizQuestion);
    document.getElementById('quiz-finish-btn').addEventListener('click', showQuizResult);
    
    document.getElementById('reading-submit-btn').addEventListener('click', showReadingResult);
    document.getElementById('reading-select').addEventListener('change', (e) => loadReadingPassage(parseInt(e.target.value)));

    document.getElementById('flashcard-deck-select').addEventListener('change', (e) => loadFlashcardDeck(parseInt(e.target.value)));
    document.getElementById('flashcard-prev-btn').addEventListener('click', prevFlashcard);
    document.getElementById('flashcard-next-btn').addEventListener('click', nextFlashcard);
    document.getElementById('flashcard').addEventListener('click', (e) => e.currentTarget.classList.toggle('is-flipped'));

    // --- UI Elements ---
    const quizQuestionEl = document.getElementById('quiz-question'), quizOptionsEl = document.getElementById('quiz-options'), quizProgressBar = document.getElementById('quiz-progress-bar'), quizIndicator = document.getElementById('quiz-indicator'), quizExplanationEl = document.getElementById('quiz-explanation'), quizNextBtn = document.getElementById('quiz-next-btn'), quizBackBtn = document.getElementById('quiz-back-btn'), quizFinishBtn = document.getElementById('quiz-finish-btn');
    const readingTitleEl = document.getElementById('reading-title'), readingPassageEl = document.getElementById('reading-passage'), readingQuestionsEl = document.getElementById('reading-questions'), readingSelectEl = document.getElementById('reading-select');
    const resultTitle = document.getElementById('result-title'), resultScore = document.getElementById('result-score'), resultCorrect = document.getElementById('result-correct'), resultWrong = document.getElementById('result-wrong'), resultTime = document.getElementById('result-time'), resultRestartBtn = document.getElementById('result-restart'), resultProgressRing = document.getElementById('result-progress-ring');
    const flashcardEl = document.getElementById('flashcard'), flashcardFront = flashcardEl.querySelector('.flashcard-front'), flashcardBack = flashcardEl.querySelector('.flashcard-back'), flashcardProgressEl = document.getElementById('flashcard-progress'), flashcardDeckSelectEl = document.getElementById('flashcard-deck-select'), flashcardPrevBtn = document.getElementById('flashcard-prev-btn'), flashcardNextBtn = document.getElementById('flashcard-next-btn');
    
    // --- Quiz Logic ---
    function startQuiz() {
        currentQuizQuestionIndex = 0;
        userQuizAnswers = new Array(quizQuestions.length).fill(null);
        quizStartTime = new Date();
        displayQuizQuestion();
        showScreen('quiz');
    }

    function displayQuizQuestion() {
        const questionData = quizQuestions[currentQuizQuestionIndex];
        quizQuestionEl.innerHTML = questionData.question.replace(/`([^`]+)`/g, '<code class="bg-gray-200 text-red-600 font-mono px-1 rounded">\$1</code>');
        quizOptionsEl.innerHTML = '';
        quizExplanationEl.classList.add('hidden');
        questionData.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'option-btn';
            button.dataset.index = index;
            button.onclick = () => selectQuizAnswer(index);
            quizOptionsEl.appendChild(button);
        });
        updateQuizUI();
    }

    function selectQuizAnswer(selectedIndex) {
        if (userQuizAnswers[currentQuizQuestionIndex] !== null) return;
        userQuizAnswers[currentQuizQuestionIndex] = selectedIndex;
        const { answer, explanation } = quizQuestions[currentQuizQuestionIndex];
        quizOptionsEl.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.add('disabled');
            const btnIndex = parseInt(btn.dataset.index);
            if (btnIndex === answer) btn.classList.add('correct');
            else if (btnIndex === selectedIndex) btn.classList.add('incorrect');
        });
        quizExplanationEl.innerHTML = `💡 <b>Giải thích:</b> ${explanation}`;
        quizExplanationEl.classList.remove('hidden');
    }

    function updateQuizUI() {
        quizProgressBar.style.width = `${((currentQuizQuestionIndex + 1) / quizQuestions.length) * 100}%`;
        quizIndicator.textContent = `Câu ${currentQuizQuestionIndex + 1} / ${quizQuestions.length}`;
        quizBackBtn.disabled = currentQuizQuestionIndex === 0;
        quizNextBtn.classList.toggle('hidden', currentQuizQuestionIndex === quizQuestions.length - 1);
        quizFinishBtn.classList.toggle('hidden', currentQuizQuestionIndex !== quizQuestions.length - 1);
        if (userQuizAnswers[currentQuizQuestionIndex] !== null) {
            const { answer, explanation } = quizQuestions[currentQuizQuestionIndex];
            quizOptionsEl.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.add('disabled');
                const btnIndex = parseInt(btn.dataset.index);
                if (btnIndex === answer) btn.classList.add('correct');
                else if (btnIndex === userQuizAnswers[currentQuizQuestionIndex]) btn.classList.add('incorrect');
            });
            quizExplanationEl.innerHTML = `💡 <b>Giải thích:</b> ${explanation}`;
            quizExplanationEl.classList.remove('hidden');
        }
    }
    
    function nextQuizQuestion() { if (currentQuizQuestionIndex < quizQuestions.length - 1) { currentQuizQuestionIndex++; displayQuizQuestion(); } }
    function prevQuizQuestion() { if (currentQuizQuestionIndex > 0) { currentQuizQuestionIndex--; displayQuizQuestion(); } }

    // --- Flashcard Logic ---
    function startFlashcards() {
        populateFlashcardDecks();
        loadFlashcardDeck(0);
        showScreen('flashcard');
    }

    function populateFlashcardDecks() {
        flashcardDeckSelectEl.innerHTML = '';
        flashcardDecks.forEach((deck, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = deck.name;
            flashcardDeckSelectEl.appendChild(option);
        });
    }

    function loadFlashcardDeck(deckIndex) {
        currentFlashcardDeckIndex = deckIndex;
        currentFlashcardIndex = 0;
        displayFlashcard();
    }

    function displayFlashcard() {
        const deck = flashcardDecks[currentFlashcardDeckIndex];
        if (!deck || deck.cards.length === 0) return;
        
        flashcardEl.classList.remove('is-flipped');
        
        setTimeout(() => {
            const card = deck.cards[currentFlashcardIndex];
            flashcardFront.textContent = card.front;
            flashcardBack.textContent = card.back;
        }, 150);

        flashcardProgressEl.textContent = `Thẻ ${currentFlashcardIndex + 1} / ${deck.cards.length}`;
        flashcardPrevBtn.disabled = currentFlashcardIndex === 0;
        flashcardNextBtn.disabled = currentFlashcardIndex === deck.cards.length - 1;
    }

    function nextFlashcard() {
        const deck = flashcardDecks[currentFlashcardDeckIndex];
        if (currentFlashcardIndex < deck.cards.length - 1) {
            currentFlashcardIndex++;
            displayFlashcard();
        }
    }

    function prevFlashcard() {
        if (currentFlashcardIndex > 0) {
            currentFlashcardIndex--;
            displayFlashcard();
        }
    }

    // --- Reading Logic ---
    function startReading() {
        populateReadingSelect();
        loadReadingPassage(0);
        showScreen('reading');
    }

    function populateReadingSelect() {
        readingSelectEl.innerHTML = '';
        readingTexts.forEach((text, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = text.title;
            readingSelectEl.appendChild(option);
        });
    }

    function loadReadingPassage(index) {
        currentReadingData = readingTexts[index];
        readingTitleEl.textContent = currentReadingData.title;
        readingPassageEl.innerHTML = currentReadingData.passage;
        readingQuestionsEl.innerHTML = '';
        currentReadingData.questions.forEach((q, qIndex) => {
            const qDiv = document.createElement('div');
            let inputHtml = '';

            // LOGIC MỚI: Kiểm tra loại câu hỏi
            if (q.type === 'fill_in_blank') {
                const questionParts = q.q.split('____');
                const questionText = `${questionParts[0]} <input type="text" id="reading-q-${qIndex}" class="reading-input"> ${questionParts[1] || ''}`;
                inputHtml = `<p class="font-semibold mb-2">Question ${qIndex + 1}: ${questionText}</p>`;
            } else { // Mặc định là multiple_choice
                inputHtml = `<p class="font-semibold mb-2">Question ${qIndex + 1}: ${q.q}</p>`;
                const optsDiv = document.createElement('div');
                optsDiv.className = 'flex flex-col space-y-2';
                q.options.forEach((opt, optIndex) => {
                    optsDiv.innerHTML += `
                        <label class="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-100">
                            <input type="radio" name="reading-q-${qIndex}" value="${optIndex}" class="mr-3 form-radio text-green-500">
                            ${opt}
                        </label>`;
                });
                qDiv.innerHTML = inputHtml;
                qDiv.appendChild(optsDiv);
            }
            if (q.type === 'fill_in_blank') {
                 qDiv.innerHTML = inputHtml;
            }
            
            readingQuestionsEl.appendChild(qDiv);
        });
    }

    // --- Result Logic ---
    function showQuizResult() {
        const timeTaken = Math.round((new Date() - quizStartTime) / 1000);
        const correctCount = userQuizAnswers.filter((ans, i) => ans === quizQuestions[i].answer).length;
        const score = Math.round((correctCount / quizQuestions.length) * 100);
        updateStatistics('quiz', correctCount, quizQuestions.length);
        displayResult({ title: "Kết quả Quiz", score, correct: correctCount, wrong: quizQuestions.length - correctCount, time: timeTaken, restartAction: startQuiz });
    }
    
    function showReadingResult() {
        let correctCount = 0;
        currentReadingData.questions.forEach((q, qIndex) => {
            // LOGIC MỚI: Kiểm tra câu trả lời dựa trên loại câu hỏi
            if (q.type === 'fill_in_blank') {
                const inputElement = document.getElementById(`reading-q-${qIndex}`);
                if (inputElement && inputElement.value.trim().toLowerCase() === q.answer.toLowerCase()) {
                    correctCount++;
                }
            } else { // multiple_choice
                const selected = document.querySelector(`input[name="reading-q-${qIndex}"]:checked`);
                if (selected && parseInt(selected.value) === q.answer) {
                    correctCount++;
                }
            }
        });
        const score = Math.round((correctCount / currentReadingData.questions.length) * 100);
        updateStatistics('reading', correctCount, currentReadingData.questions.length);
        displayResult({ title: "Kết quả Reading", score, correct: correctCount, wrong: currentReadingData.questions.length - correctCount, time: null, restartAction: startReading });
    }

    function displayResult({ title, score, correct, wrong, time, restartAction }) {
        resultTitle.textContent = title;
        resultScore.textContent = `${score}%`;
        resultCorrect.textContent = correct;
        resultWrong.textContent = wrong;
        resultTime.parentElement.style.display = time !== null ? 'block' : 'none';
        if (time !== null) resultTime.textContent = `${time}s`;
        const circumference = 2 * Math.PI * 15.9155;
        resultProgressRing.style.strokeDasharray = `${circumference}`;
        setTimeout(() => { resultProgressRing.style.strokeDashoffset = circumference - (score / 100) * circumference; }, 100);
        resultRestartBtn.onclick = restartAction;
        showScreen('result');
    }
    
    // --- Statistics Logic ---
    function getStatistics() {
        return JSON.parse(localStorage.getItem('englishLearningStats')) || { totalQuestions: 0, totalCorrect: 0, lastPractice: null };
    }

    function updateStatistics(type, correct, total) {
        const stats = getStatistics();
        stats.totalQuestions += total;
        stats.totalCorrect += correct;
        stats.lastPractice = new Date().toLocaleString('vi-VN');
        localStorage.setItem('englishLearningStats', JSON.stringify(stats));
    }

    function displayStatistics() {
        const stats = getStatistics();
        document.getElementById('stats-total-questions').textContent = stats.totalQuestions;
        const accuracy = stats.totalQuestions > 0 ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) : 0;
        document.getElementById('stats-accuracy').textContent = `${accuracy}%`;
        document.getElementById('stats-last-practice').textContent = stats.lastPractice || "Chưa có";
    }

    // --- Initial Load ---
    function initializeApp() {
        document.getElementById('review-content').innerHTML = reviewContentHTML;
        showScreen('home');
    }

    initializeApp();
});

