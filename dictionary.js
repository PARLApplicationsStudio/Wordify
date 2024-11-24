let dictionary = [];
if (localStorage.getItem('lang') === 'tr') {
dictionary = [
    {
      original: "about",
      translated: "hakkında",
      locked: false
    },
    {
      original: "adjective",
      translated: "sıfat",
      locked: false
    },
    {
      original: "afternoon",
      translated: "öğleden sonra",
      locked: true
    },
    {
      original: "apple",
      translated: "elma",
      locked: false
    },
    {
      original: "back",
      translated: "geri",
      locked: false
    },
    {
      original: "bad",
      translated: "kötü",
      locked: true
    },
    {
      original: "banana",
      translated: "muz",
      locked: true
    },
    {
      original: "bark",
      translated: "kabuk",
      locked: true
    },
    {
      original: "basket",
      translated: "sepet",
      locked: true
    },
    {
      original: "basketball",
      translated: "basketbol",
      locked: false
    },
    {
      original: "be",
      translated: "olmak",
      locked: false
    },
    {
      original: "beach",
      translated: "plaj",
      locked: true
    },
    {
      original: "bear",
      translated: "ayı",
      locked: true
    },
    {
      original: "beat",
      translated: "vurmak",
      locked: true
    },
    {
      original: "beautiful",
      translated: "güzel",
      locked: false
    },
    {
      original: "begin",
      translated: "başlamak",
      locked: true
    },
    {
      original: "before",
      translated: "önce",
      locked: true
    },
    {
      original: "beginning",
      translated: "başlangıç",
      locked: true
    },
    {
      original: "big",
      translated: "büyük",
      locked: false
    },
    {
      original: "bird",
      translated: "kuş",
      locked: true
    },
    {
      original: "black",
      translated: "siyah",
      locked: false
    },
    {
      original: "blue",
      translated: "mavi",
      locked: false
    },
    {
      original: "book",
      translated: "kitap",
      locked: false
    },
    {
      original: "born",
      translated: "doğmuş",
      locked: true
    },
    {
      original: "boy",
      translated: "erkek çocuk",
      locked: false
    },
    {
      original: "bread",
      translated: "ekmek",
      locked: true
    },
    {
      original: "breakfast",
      translated: "kahvaltı",
      locked: true
    },
    {
      original: "broke",
      translated: "kırmak",
      locked: true
    },
    {
      original: "brush",
      translated: "fırçalamak",
      locked: true
    },
    {
      original: "building",
      translated: "bina",
      locked: true
    },
    {
      original: "burn",
      translated: "yakmak",
      locked: true
    },
    {
      original: "buy",
      translated: "almak",
      locked: true
    },
    {
      original: "carrot",
      translated: "havuç",
      locked: true
    },
    {
      original: "cat",
      translated: "kedi",
      locked: false
    },
    {
      original: "chair",
      translated: "koltuk",
      locked: true
    },
    {
      original: "chicken",
      translated: "tavuk",
      locked: true
    },
    {
      original: "child",
      translated: "çocuk",
      locked: true
    },
    {
      original: "city",
      translated: "şehir",
      locked: false
    },
    {
      original: "clock",
      translated: "saat",
      locked: true
    },
    {
      original: "close",
      translated: "yakın",
      locked: false
    },
    {
      original: "clothing",
      translated: "giysi",
      locked: true
    },
    {
      original: "cold",
      translated: "soğuk",
      locked: true
    },
    {
      original: "come",
      translated: "gelmek",
      locked: false
    },
    {
      original: "common",
      translated: "yaygın",
      locked: true
    },
    {
      original: "condition",
      translated: "koşul",
      locked: true
    },
    {
      original: "correct",
      translated: "doğru",
      locked: true
    },
    {
      original: "color",
      translated: "renk",
      locked: false
    },
    {
      original: "cup",
      translated: "kupa",
      locked: true
    },
    {
      original: "cucumber",
      translated: "salatalık",
      locked: true
    },
    {
      original: "dark",
      translated: "karanlık",
      locked: true
    },
    {
      original: "daughter",
      translated: "kız",
      locked: true
    },
    {
      original: "day",
      translated: "gün",
      locked: false
    },
    {
      original: "dinner",
      translated: "akşam yemeği",
      locked: true
    },
    {
      original: "do",
      translated: "yapmak",
      locked: false
    },
    {
      original: "drink",
      translated: "içmek",
      locked: true
    },
    {
      original: "eat",
      translated: "yemek",
      locked: true
    },
    {
      original: "elephant",
      translated: "fil",
      locked: true
    },
    {
      original: "end",
      translated: "son",
      locked: false
    },
    {
      original: "enough",
      translated: "yeterince",
      locked: true
    },
    {
      original: "even",
      translated: "bile",
      locked: true
    },
    {
      original: "example",
      translated: "örnek",
      locked: true
    },
    {
      original: "exercise",
      translated: "egzersiz",
      locked: true
    },
    {
      original: "excited",
      translated: "heyecanlı",
      locked: true
    },
    {
      original: "far",
      translated: "uzak",
      locked: false
    },
    {
      original: "father",
      translated: "baba",
      locked: true
    },
    {
      original: "feel",
      translated: "hissetmek",
      locked: true
    },
    {
      original: "feeling",
      translated: "duygu",
      locked: true
    },
    {
      original: "find",
      translated: "bulmak",
      locked: true
    },
    {
      original: "first",
      translated: "ilk",
      locked: true
    },
    {
      original: "fish",
      translated: "balık",
      locked: true
    },
    {
      original: "floor",
      translated: "zemin",
      locked: true
    },
    {
      original: "foot",
      translated: "ayak",
      locked: true
    },
    {
      original: "football",
      translated: "futbol",
      locked: false
    },
    {
      original: "form",
      translated: "biçim",
      locked: true
    },
    {
      original: "fruit",
      translated: "meyve",
      locked: true
    },
    {
      original: "full",
      translated: "dolu",
      locked: false
    },
    {
      original: "game",
      translated: "oyun",
      locked: false
    },
    {
      original: "give",
      translated: "vermek",
      locked: false
    },
    {
      original: "go",
      translated: "gitmek",
      locked: false
    },
    {
      original: "grade",
      translated: "not",
      locked: true
    },
    {
      original: "green",
      translated: "yeşil",
      locked: false
    },
    {
      original: "had",
      translated: "vardı",
      locked: true
    },
    {
      original: "have",
      translated: "sahip olmak",
      locked: true
    },
    {
      original: "he",
      translated: "o",
      locked: false
    },
    {
      original: "homework",
      translated: "ödev",
      locked: true
    },
    {
      original: "horse",
      translated: "at",
      locked: true
    },
    {
      original: "house",
      translated: "ev",
      locked: true
    },
    {
      original: "ice",
      translated: "buz",
      locked: true
    },
    {
      original: "if",
      translated: "eğer",
      locked: false
    },
    {
      original: "into",
      translated: "içeri",
      locked: true
    },
    {
      original: "jump",
      translated: "zıplamak",
      locked: true
    },
    {
      original: "keep",
      translated: "tutmak",
      locked: true
    },
    {
      original: "key",
      translated: "anahtar",
      locked: true
    },
    {
      original: "kill",
      translated: "öldürmek",
      locked: true
    },
    {
      original: "king",
      translated: "kral",
      locked: true
    },
    {
      original: "know",
      translated: "bilmek",
      locked: true
    },
    {
      original: "laugh",
      translated: "gülmek",
      locked: true
    },
    {
      original: "learn",
      translated: "öğrenmek",
      locked: true
    },
    {
      original: "leave",
      translated: "ayrılmak",
      locked: true
    },
    {
      original: "light",
      translated: "ışık",
      locked: true
    },
    {
      original: "like",
      translated: "sevmek",
      locked: false
    },
    {
      original: "lion",
      translated: "aslan",
      locked: true
    },
    {
      original: "listen",
      translated: "dinlemek",
      locked: false
    },
    {
      original: "live",
      translated: "yaşamak",
      locked: false
    },
    {
      original: "long",
      translated: "uzun",
      locked: true
    },
    {
      original: "look",
      translated: "bakmak",
      locked: true
    },
    {
      original: "loud",
      translated: "yüksek",
      locked: true
    },
    {
      original: "love",
      translated: "sevmek",
      locked: false
    },
    {
      original: "lunch",
      translated: "öğle yemeği",
      locked: true
    },
    {
      original: "make",
      translated: "yapmak",
      locked: true
    },
    {
      original: "man",
      translated: "adam",
      locked: false
    },
    {
      original: "meal",
      translated: "yemek",
      locked: true
    },
    {
      original: "meat",
      translated: "et",
      locked: true
    },
    {
      original: "meeting",
      translated: "toplantı",
      locked: true
    },
    {
      original: "met",
      translated: "buldum",
      locked: true
    },
    {
      original: "morning",
      translated: "sabah",
      locked: true
    },
    {
      original: "mother",
      translated: "anne",
      locked: true
    },
    {
      original: "move",
      translated: "hareket etmek",
      locked: true
    },
    {
      original: "much",
      translated: "çok",
      locked: false
    },
    {
      original: "music",
      translated: "müzik",
      locked: false
    },
    {
      original: "near",
      translated: "yakın",
      locked: true
    },
    {
      original: "need",
      translated: "gerekmek",
      locked: false
    },
    {
      original: "neighbor",
      translated: "komşu",
      locked: true
    },
    {
      original: "new",
      translated: "yeni",
      locked: false
    },
    {
      original: "night",
      translated: "gece",
      locked: true
    },
    {
      original: "open",
      translated: "açık",
      locked: true
    },
    {
      original: "orange",
      translated: "portakal",
      locked: true
    },
    {
      original: "out",
      translated: "dışarı",
      locked: true
    },
    {
      original: "over",
      translated: "üstünde",
      locked: true
    },
    {
      original: "parent",
      translated: "ebeveyn",
      locked: true
    },
    {
      original: "park",
      translated: "park",
      locked: true
    },
    {
      original: "part",
      translated: "kısım",
      locked: true
    },
    {
      original: "party",
      translated: "parti",
      locked: false
    },
    {
      original: "pay",
      translated: "ödemek",
      locked: true
    },
    {
      original: "people",
      translated: "insanlar",
      locked: true
    },
    {
      original: "person",
      translated: "kişi",
      locked: true
    },
    {
      original: "picture",
      translated: "resim",
      locked: true
    },
    {
      original: "play",
      translated: "oynamak",
      locked: true
    },
    {
      original: "point",
      translated: "nokta",
      locked: true
    },
    {
      original: "put",
      translated: "koymak",
      locked: true
    },
    {
      original: "quick",
      translated: "hızlı",
      locked: true
    },
    {
      original: "rain",
      translated: "yağmur",
      locked: true
    },
    {
      original: "raise",
      translated: "kaldırmak",
      locked: true
    },
    {
      original: "read",
      translated: "okumak",
      locked: false
    },
    {
      original: "remember",
      translated: "hatırlamak",
      locked: true
    },
    {
      original: "report",
      translated: "rapor",
      locked: false
    },
    {
      original: "rest",
      translated: "dinlenmek",
      locked: true
    },
    {
      original: "return",
      translated: "geri dönmek",
      locked: true
    },
    {
      original: "rich",
      translated: "zengin",
      locked: true
    },
    {
      original: "ride",
      translated: "binmek",
      locked: true
    },
    {
      original: "river",
      translated: "nehir",
      locked: true
    },
    {
      original: "road",
      translated: "yol",
      locked: true
    },
    {
      original: "room",
      translated: "oda",
      locked: true
    },
    {
      original: "rose",
      translated: "gülmek",
      locked: true
    },
    {
      original: "run",
      translated: "koşmak",
      locked: true
    },
    {
      original: "said",
      translated: "söyledi",
      locked: false
    },
    {
      original: "same",
      translated: "aynı",
      locked: false
    },
    {
      original: "sat",
      translated: "oturdu",
      locked: false
    },
    {
      original: "say",
      translated: "söylemek",
      locked: false
    },
    {
      original: "school",
      translated: "okul",
      locked: true
    },
    {
      original: "see",
      translated: "görmek",
      locked: false
    },
    {
      original: "shop",
      translated: "mağaza",
      locked: true
    },
    {
      original: "short",
      translated: "kısa",
      locked: true
    },
    {
      original: "show",
      translated: "göstermek",
      locked: true
    },
    {
      original: "sing",
      translated: "şarkı söylemek",
      locked: true
    },
    {
      original: "sky",
      translated: "gök",
      locked: true
    },
    {
      original: "small",
      translated: "küçük",
      locked: true
    },
    {
      original: "smell",
      translated: "koklamak",
      locked: true
    },
    {
      original: "snow",
      translated: "kar",
      locked: false
    },
    {
      original: "soft",
      translated: "yumuşak",
      locked: true
    },
    {
      original: "some",
      translated: "bazı",
      locked: false
    },
    {
      original: "sound",
      translated: "ses",
      locked: true
    },
    {
      original: "special",
      translated: "özel",
      locked: true
    },
    {
      original: "spell",
      translated: "hecelemek",
      locked: true
    },
    {
      original: "speak",
      translated: "konuşmak",
      locked: true
    },
    {
      original: "spring",
      translated: "ilkbahar",
      locked: true
    },
    {
      original: "start",
      translated: "başlamak",
      locked: true
    },
    {
      original: "stay",
      translated: "kalmak",
      locked: true
    },
    {
      original: "stop",
      translated: "durmak",
      locked: true
    },
    {
      original: "storm",
      translated: "fırtına",
      locked: false
    },
    {
      original: "strong",
      translated: "güçlü",
      locked: false
    },
    {
      original: "study",
      translated: "çalışmak",
      locked: true
    },
    {
      original: "summer",
      translated: "yaz",
      locked: true
    },
    {
      original: "sun",
      translated: "güneş",
      locked: true
    },
    {
      original: "sure",
      translated: "emin",
      locked: false
    },
    {
      original: "surprise",
      translated: "sürpriz",
      locked: true
    },
    {
      original: "table",
      translated: "masa",
      locked: true
    },
    {
      original: "tall",
      translated: "uzun",
      locked: true
    },
    {
      original: "teach",
      translated: "öğretmek",
      locked: true
    },
    {
      original: "team",
      translated: "takım",
      locked: false
    },
    {
      original: "tell",
      translated: "söylemek",
      locked: false
    },
    {
      original: "temperature",
      translated: "sıcaklık",
      locked: true
    },
    {
      original: "thank",
      translated: "teşekkür",
      locked: false
    },
    {
      original: "thing",
      translated: "şey",
      locked: true
    },
    {
      original: "think",
      translated: "düşünmek",
      locked: true
    },
    {
      original: "time",
      translated: "zaman",
      locked: false
    },
    {
      original: "tired",
      translated: "yorgun",
      locked: true
    },
    {
      original: "train",
      translated: "tren",
      locked: true
    },
    {
      original: "travel",
      translated: "seyahat",
      locked: true
    },
    {
      original: "tree",
      translated: "ağaç",
      locked: true
    },
    {
      original: "try",
      translated: "denemek",
      locked: true
    },
    {
      original: "turn",
      translated: "dönmek",
      locked: false
    },
    {
      original: "under",
      translated: "altında",
      locked: true
    },
    {
      original: "up",
      translated: "yukarı",
      locked: true
    },
    {
      original: "use",
      translated: "kullanmak",
      locked: true
    },
    {
      original: "visit",
      translated: "ziyaret etmek",
      locked: true
    },
    {
      original: "walk",
      translated: "yürümek",
      locked: true
    },
    {
      original: "want",
      translated: "istemek",
      locked: false
    },
    {
      original: "water",
      translated: "su",
      locked: false
    },
    {
      original: "weather",
      translated: "hava",
      locked: true
    },
    {
      original: "went",
      translated: "gitti",
      locked: true
    },
    {
      original: "wet",
      translated: "ıslak",
      locked: true
    },
    {
      original: "what",
      translated: "ne",
      locked: false
    },
    {
      original: "where",
      translated: "nerede",
      locked: false
    },
    {
      original: "which",
      translated: "hangi",
      locked: false
    },
    {
      original: "white",
      translated: "beyaz",
      locked: false
    },
    {
      original: "who",
      translated: "kim",
      locked: false
    },
    {
      original: "why",
      translated: "neden",
      locked: false
    },
    {
      original: "wide",
      translated: "geniş",
      locked: true
    },
    {
      original: "wife",
      translated: "karı",
      locked: true
    },
    {
      original: "will",
      translated: "olacak",
      locked: false
    },
    {
      original: "wind",
      translated: "rüzgar",
      locked: true
    },
    {
      original: "winter",
      translated: "kış",
      locked: true
    },
    {
      original: "woman",
      translated: "kadın",
      locked: true
    },
    {
      original: "work",
      translated: "çalışmak",
      locked: false
    },
    {
      original: "worry",
      translated: "endişelenmek",
      locked: true
    },
    {
      original: "write",
      translated: "yazmak",
      locked: false
    },
    {
      original: "wrong",
      translated: "yanlış",
      locked: true
    },
    {
      original: "year",
      translated: "yıl",
      locked: false
    },
    {
      original: "yellow",
      translated: "sarı",
      locked: false
    },
    {
      original: "your",
      translated: "senin",
      locked: false
    }
  ];

} else if (localStorage.getItem('lang') === 'fa') {

    dictionary = [
        {
          original: "about",
          translated: "در مورد",
          locked: false
        },
        {
          original: "adjective",
          translated: "صفت",
          locked: false
        },
        {
          original: "afternoon",
          translated: "بعد از ظهر",
          locked: true
        },
        {
          original: "apple",
          translated: "سیب",
          locked: false
        },
        {
          original: "back",
          translated: "برگشت",
          locked: false
        },
        {
          original: "bad",
          translated: "بد",
          locked: true
        },
        {
          original: "banana",
          translated: "موز",
          locked: true
        },
        {
          original: "bark",
          translated: "پوسته",
          locked: true
        },
        {
          original: "basket",
          translated: "سبد",
          locked: true
        },
        {
          original: "basketball",
          translated: "بسکتبال",
          locked: false
        },
        {
          original: "be",
          translated: "بودن",
          locked: false
        },
        {
          original: "beach",
          translated: "ساحل",
          locked: true
        },
        {
          original: "bear",
          translated: "خرس",
          locked: true
        },
        {
          original: "beat",
          translated: "ضربه بزنید",
          locked: true
        },
        {
          original: "beautiful",
          translated: "زیبا",
          locked: false
        },
        {
          original: "begin",
          translated: "برای شروع",
          locked: true
        },
        {
          original: "before",
          translated: "قبل از",
          locked: true
        },
        {
          original: "beginning",
          translated: "شروع",
          locked: true
        },
        {
          original: "big",
          translated: "بزرگ",
          locked: false
        },
        {
          original: "bird",
          translated: "پرنده",
          locked: true
        },
        {
          original: "black",
          translated: "سیاه",
          locked: false
        },
        {
          original: "blue",
          translated: "آبی",
          locked: false
        },
        {
          original: "book",
          translated: "کتاب",
          locked: false
        },
        {
          original: "born",
          translated: "متولد شد",
          locked: true
        },
        {
          original: "boy",
          translated: "پسر",
          locked: false
        },
        {
          original: "bread",
          translated: "نان",
          locked: true
        },
        {
          original: "breakfast",
          translated: "صبحانه",
          locked: true
        },
        {
          original: "broke",
          translated: "شکستن",
          locked: true
        },
        {
          original: "brush",
          translated: "اسکراب",
          locked: true
        },
        {
          original: "building",
          translated: "ساختمان",
          locked: true
        },
        {
          original: "burn",
          translated: "سوختن",
          locked: true
        },
        {
          original: "buy",
          translated: "گرفتن",
          locked: true
        },
        {
          original: "carrot",
          translated: "هویج",
          locked: true
        },
        {
          original: "cat",
          translated: "گربه",
          locked: false
        },
        {
          original: "chair",
          translated: "صندلی راحتی",
          locked: true
        },
        {
          original: "chicken",
          translated: "مرغ",
          locked: true
        },
        {
          original: "child",
          translated: "کودک",
          locked: true
        },
        {
          original: "city",
          translated: "شهر",
          locked: false
        },
        {
          original: "clock",
          translated: "ساعت",
          locked: true
        },
        {
          original: "close",
          translated: "بستن",
          locked: false
        },
        {
          original: "clothing",
          translated: "لباس",
          locked: true
        },
        {
          original: "cold",
          translated: "سرد",
          locked: true
        },
        {
          original: "come",
          translated: "برای آمدن",
          locked: false
        },
        {
          original: "common",
          translated: "گسترده است",
          locked: true
        },
        {
          original: "condition",
          translated: "وضعیت",
          locked: true
        },
        {
          original: "correct",
          translated: "درست است",
          locked: true
        },
        {
          original: "color",
          translated: "رنگ",
          locked: false
        },
        {
          original: "cup",
          translated: "فنجان",
          locked: true
        },
        {
          original: "cucumber",
          translated: "خیار",
          locked: true
        },
        {
          original: "dark",
          translated: "تاریکی",
          locked: true
        },
        {
          original: "daughter",
          translated: "دختر",
          locked: true
        },
        {
          original: "day",
          translated: "روز",
          locked: false
        },
        {
          original: "dinner",
          translated: "وعده عصرانه",
          locked: true
        },
        {
          original: "do",
          translated: "انجام دادن",
          locked: false
        },
        {
          original: "drink",
          translated: "برای نوشیدن",
          locked: true
        },
        {
          original: "eat",
          translated: "غذا",
          locked: true
        },
        {
          original: "elephant",
          translated: "فیل",
          locked: true
        },
        {
          original: "end",
          translated: "آخرین",
          locked: false
        },
        {
          original: "enough",
          translated: "به اندازه کافی",
          locked: true
        },
        {
          original: "even",
          translated: "حتی",
          locked: true
        },
        {
          original: "example",
          translated: "مثال",
          locked: true
        },
        {
          original: "exercise",
          translated: "ورزش کردن",
          locked: true
        },
        {
          original: "excited",
          translated: "هیجان زده",
          locked: true
        },
        {
          original: "far",
          translated: "دور",
          locked: false
        },
        {
          original: "father",
          translated: "پدر",
          locked: true
        },
        {
          original: "feel",
          translated: "احساس کردن",
          locked: true
        },
        {
          original: "feeling",
          translated: "احساس",
          locked: true
        },
        {
          original: "find",
          translated: "برای پیدا کردن",
          locked: true
        },
        {
          original: "first",
          translated: "اول",
          locked: true
        },
        {
          original: "fish",
          translated: "ماهی",
          locked: true
        },
        {
          original: "floor",
          translated: "زمین",
          locked: true
        },
        {
          original: "foot",
          translated: "پا",
          locked: true
        },
        {
          original: "football",
          translated: "فوتبال",
          locked: false
        },
        {
          original: "form",
          translated: "قالب",
          locked: true
        },
        {
          original: "fruit",
          translated: "میوه",
          locked: true
        },
        {
          original: "full",
          translated: "پر",
          locked: false
        },
        {
          original: "game",
          translated: "بازی",
          locked: false
        },
        {
          original: "give",
          translated: "دادن",
          locked: false
        },
        {
          original: "go",
          translated: "رفتن",
          locked: false
        },
        {
          original: "grade",
          translated: "یادداشت ها",
          locked: true
        },
        {
          original: "green",
          translated: "سبز",
          locked: false
        },
        {
          original: "had",
          translated: "وجود داشت",
          locked: true
        },
        {
          original: "have",
          translated: "داشتن",
          locked: true
        },
        {
          original: "he",
          translated: "او",
          locked: false
        },
        {
          original: "homework",
          translated: "مشق شب",
          locked: true
        },
        {
          original: "horse",
          translated: "اسب",
          locked: true
        },
        {
          original: "house",
          translated: "خانه",
          locked: true
        },
        {
          original: "ice",
          translated: "یخ",
          locked: true
        },
        {
          original: "if",
          translated: "اگر",
          locked: false
        },
        {
          original: "into",
          translated: "در",
          locked: true
        },
        {
          original: "jump",
          translated: "جهش",
          locked: true
        },
        {
          original: "keep",
          translated: "نگه داشتن",
          locked: true
        },
        {
          original: "key",
          translated: "کلید",
          locked: true
        },
        {
          original: "kill",
          translated: "کشتن",
          locked: true
        },
        {
          original: "king",
          translated: "پادشاه",
          locked: true
        },
        {
          original: "know",
          translated: "دانستن",
          locked: true
        },
        {
          original: "laugh",
          translated: "برای خندیدن",
          locked: true
        },
        {
          original: "learn",
          translated: "برای یادگیری",
          locked: true
        },
        {
          original: "leave",
          translated: "برای ترک",
          locked: true
        },
        {
          original: "light",
          translated: "نور",
          locked: true
        },
        {
          original: "like",
          translated: "دوست داشتن",
          locked: false
        },
        {
          original: "lion",
          translated: "شیر",
          locked: true
        },
        {
          original: "listen",
          translated: "برای گوش دادن",
          locked: false
        },
        {
          original: "live",
          translated: "برای زندگی کردن",
          locked: false
        },
        {
          original: "long",
          translated: "بلند",
          locked: true
        },
        {
          original: "look",
          translated: "نگاه کردن",
          locked: true
        },
        {
          original: "loud",
          translated: "بالا",
          locked: true
        },
        {
          original: "love",
          translated: "دوست داشتن",
          locked: false
        },
        {
          original: "lunch",
          translated: "ناهار",
          locked: true
        },
        {
          original: "make",
          translated: "انجام دادن",
          locked: true
        },
        {
          original: "man",
          translated: "مرد",
          locked: false
        },
        {
          original: "meal",
          translated: "غذا",
          locked: true
        },
        {
          original: "meat",
          translated: "گوشت",
          locked: true
        },
        {
          original: "meeting",
          translated: "جلسه",
          locked: true
        },
        {
          original: "met",
          translated: "پیدا کردم",
          locked: true
        },
        {
          original: "morning",
          translated: "صبح",
          locked: true
        },
        {
          original: "mother",
          translated: "مادر",
          locked: true
        },
        {
          original: "move",
          translated: "عمل کنید",
          locked: true
        },
        {
          original: "much",
          translated: "خیلی",
          locked: false
        },
        {
          original: "music",
          translated: "موسیقی",
          locked: false
        },
        {
          original: "near",
          translated: "بستن",
          locked: true
        },
        {
          original: "need",
          translated: "نیاز دارند",
          locked: false
        },
        {
          original: "neighbor",
          translated: "همسایه",
          locked: true
        },
        {
          original: "new",
          translated: "جدید",
          locked: false
        },
        {
          original: "night",
          translated: "شب",
          locked: true
        },
        {
          original: "open",
          translated: "باز کردن",
          locked: true
        },
        {
          original: "orange",
          translated: "نارنجی",
          locked: true
        },
        {
          original: "out",
          translated: "خارج",
          locked: true
        },
        {
          original: "over",
          translated: "بالا",
          locked: true
        },
        {
          original: "parent",
          translated: "پدر و مادر",
          locked: true
        },
        {
          original: "park",
          translated: "پارک",
          locked: true
        },
        {
          original: "part",
          translated: "بخش",
          locked: true
        },
        {
          original: "party",
          translated: "مهمانی",
          locked: false
        },
        {
          original: "pay",
          translated: "پرداخت کنید",
          locked: true
        },
        {
          original: "people",
          translated: "مردم",
          locked: true
        },
        {
          original: "person",
          translated: "شخص",
          locked: true
        },
        {
          original: "picture",
          translated: "تصویر",
          locked: true
        },
        {
          original: "play",
          translated: "بازی کردن",
          locked: true
        },
        {
          original: "point",
          translated: "نقطه",
          locked: true
        },
        {
          original: "put",
          translated: "قرار دادن",
          locked: true
        },
        {
          original: "quick",
          translated: "سریع",
          locked: true
        },
        {
          original: "rain",
          translated: "باران",
          locked: true
        },
        {
          original: "raise",
          translated: "برای برداشتن",
          locked: true
        },
        {
          original: "read",
          translated: "برای خواندن",
          locked: false
        },
        {
          original: "remember",
          translated: "برای یادآوری",
          locked: true
        },
        {
          original: "report",
          translated: "گزارش دهید",
          locked: false
        },
        {
          original: "rest",
          translated: "برای استراحت",
          locked: true
        },
        {
          original: "return",
          translated: "بازگشت",
          locked: true
        },
        {
          original: "rich",
          translated: "ثروتمند",
          locked: true
        },
        {
          original: "ride",
          translated: "برای سوار شدن",
          locked: true
        },
        {
          original: "river",
          translated: "رودخانه",
          locked: true
        },
        {
          original: "road",
          translated: "مسیر",
          locked: true
        },
        {
          original: "room",
          translated: "اتاق",
          locked: true
        },
        {
          original: "rose",
          translated: "برای خندیدن",
          locked: true
        },
        {
          original: "run",
          translated: "برای اجرا",
          locked: true
        },
        {
          original: "said",
          translated: "گفت",
          locked: false
        },
        {
          original: "same",
          translated: "همان",
          locked: false
        },
        {
          original: "sat",
          translated: "نشست",
          locked: false
        },
        {
          original: "say",
          translated: "گفتن",
          locked: false
        },
        {
          original: "school",
          translated: "مدرسه",
          locked: true
        },
        {
          original: "see",
          translated: "برای دیدن",
          locked: false
        },
        {
          original: "shop",
          translated: "مرکز خرید",
          locked: true
        },
        {
          original: "short",
          translated: "کوتاه",
          locked: true
        },
        {
          original: "show",
          translated: "برای نشان دادن",
          locked: true
        },
        {
          original: "sing",
          translated: "برای خواندن یک آهنگ",
          locked: true
        },
        {
          original: "sky",
          translated: "آسمان",
          locked: true
        },
        {
          original: "small",
          translated: "کوچک",
          locked: true
        },
        {
          original: "smell",
          translated: "بو",
          locked: true
        },
        {
          original: "snow",
          translated: "سود",
          locked: false
        },
        {
          original: "soft",
          translated: "نرم",
          locked: true
        },
        {
          original: "some",
          translated: "برخی",
          locked: false
        },
        {
          original: "sound",
          translated: "صدا",
          locked: true
        },
        {
          original: "special",
          translated: "خاص",
          locked: true
        },
        {
          original: "spell",
          translated: "هجی کردن",
          locked: true
        },
        {
          original: "speak",
          translated: "صحبت کردن",
          locked: true
        },
        {
          original: "spring",
          translated: "بهار",
          locked: true
        },
        {
          original: "start",
          translated: "برای شروع",
          locked: true
        },
        {
          original: "stay",
          translated: "برای ماندن",
          locked: true
        },
        {
          original: "stop",
          translated: "توقف",
          locked: true
        },
        {
          original: "storm",
          translated: "طوفان",
          locked: false
        },
        {
          original: "strong",
          translated: "قوی",
          locked: false
        },
        {
          original: "study",
          translated: "برای کار کردن",
          locked: true
        },
        {
          original: "summer",
          translated: "تابستان",
          locked: true
        },
        {
          original: "sun",
          translated: "خورشید",
          locked: true
        },
        {
          original: "sure",
          translated: "مطمئن",
          locked: false
        },
        {
          original: "surprise",
          translated: "تعجب",
          locked: true
        },
        {
          original: "table",
          translated: "جدول",
          locked: true
        },
        {
          original: "tall",
          translated: "بلند",
          locked: true
        },
        {
          original: "teach",
          translated: "آموزش دهید",
          locked: true
        },
        {
          original: "team",
          translated: "مجموعه",
          locked: false
        },
        {
          original: "tell",
          translated: "گفتن",
          locked: false
        },
        {
          original: "temperature",
          translated: "گرما",
          locked: true
        },
        {
          original: "thank",
          translated: "با تشکر",
          locked: false
        },
        {
          original: "thing",
          translated: "چیز",
          locked: true
        },
        {
          original: "think",
          translated: "فکر کردن",
          locked: true
        },
        {
          original: "time",
          translated: "زمان",
          locked: false
        },
        {
          original: "tired",
          translated: "خسته",
          locked: true
        },
        {
          original: "train",
          translated: "قطار",
          locked: true
        },
        {
          original: "travel",
          translated: "سفر",
          locked: true
        },
        {
          original: "tree",
          translated: "درخت",
          locked: true
        },
        {
          original: "try",
          translated: "امتحان کردن",
          locked: true
        },
        {
          original: "turn",
          translated: "بازگشت",
          locked: false
        },
        {
          original: "under",
          translated: "زیر",
          locked: true
        },
        {
          original: "up",
          translated: "بالا",
          locked: true
        },
        {
          original: "use",
          translated: "برای استفاده",
          locked: true
        },
        {
          original: "visit",
          translated: "بازدید کنید",
          locked: true
        },
        {
          original: "walk",
          translated: "راه رفتن",
          locked: true
        },
        {
          original: "want",
          translated: "خواستن",
          locked: false
        },
        {
          original: "water",
          translated: "این",
          locked: false
        },
        {
          original: "weather",
          translated: "آب و هوا",
          locked: true
        },
        {
          original: "went",
          translated: "رفته",
          locked: true
        },
        {
          original: "wet",
          translated: "مرطوب",
          locked: true
        },
        {
          original: "what",
          translated: "چی",
          locked: false
        },
        {
          original: "where",
          translated: "کجا",
          locked: false
        },
        {
          original: "which",
          translated: "کدام",
          locked: false
        },
        {
          original: "white",
          translated: "سفید",
          locked: false
        },
        {
          original: "who",
          translated: "سازمان بهداشت جهانی",
          locked: false
        },
        {
          original: "why",
          translated: "از کجا",
          locked: false
        },
        {
          original: "wide",
          translated: "گسترده",
          locked: true
        },
        {
          original: "wife",
          translated: "همسر",
          locked: true
        },
        {
          original: "will",
          translated: "خواهد بود",
          locked: false
        },
        {
          original: "wind",
          translated: "باد",
          locked: true
        },
        {
          original: "winter",
          translated: "زمستان",
          locked: true
        },
        {
          original: "woman",
          translated: "زن",
          locked: true
        },
        {
          original: "work",
          translated: "برای کار کردن",
          locked: false
        },
        {
          original: "worry",
          translated: "نگران شدن",
          locked: true
        },
        {
          original: "write",
          translated: "برای نوشتن",
          locked: false
        },
        {
          original: "wrong",
          translated: "اشتباه",
          locked: true
        },
        {
          original: "year",
          translated: "سال",
          locked: false
        },
        {
          original: "yellow",
          translated: "زرد",
          locked: false
        },
        {
          original: "your",
          translated: "شما",
          locked: false
        }
      ];
    } else if (localStorage.getItem('lang') === 'ar') {
        dictionary = [
            {
              original: "about",
              translated: "عن",
              locked: false
            },
            {
              original: "adjective",
              translated: "صفة",
              locked: false
            },
            {
              original: "afternoon",
              translated: "بعد الظهر",
              locked: true
            },
            {
              original: "apple",
              translated: "تفاحة",
              locked: false
            },
            {
              original: "back",
              translated: "خلف",
              locked: false
            },
            {
              original: "bad",
              translated: "سيء",
              locked: true
            },
            {
              original: "banana",
              translated: "موز",
              locked: true
            },
            {
              original: "bark",
              translated: "صدَفَة",
              locked: true
            },
            {
              original: "basket",
              translated: "سلة",
              locked: true
            },
            {
              original: "basketball",
              translated: "كرة السلة",
              locked: false
            },
            {
              original: "be",
              translated: "يكون",
              locked: false
            },
            {
              original: "beach",
              translated: "شاطئ",
              locked: true
            },
            {
              original: "bear",
              translated: "دُبٌّ",
              locked: true
            },
            {
              original: "beat",
              translated: "يضرب",
              locked: true
            },
            {
              original: "beautiful",
              translated: "جميل",
              locked: false
            },
            {
              original: "begin",
              translated: "للبدء",
              locked: true
            },
            {
              original: "before",
              translated: "قبل",
              locked: true
            },
            {
              original: "beginning",
              translated: "بداية",
              locked: true
            },
            {
              original: "big",
              translated: "كبير",
              locked: false
            },
            {
              original: "bird",
              translated: "طائر",
              locked: true
            },
            {
              original: "black",
              translated: "أسود",
              locked: false
            },
            {
              original: "blue",
              translated: "أزرق",
              locked: false
            },
            {
              original: "book",
              translated: "كتاب",
              locked: false
            },
            {
              original: "born",
              translated: "وُلِدّ",
              locked: true
            },
            {
              original: "boy",
              translated: "ولد",
              locked: false
            },
            {
              original: "bread",
              translated: "خبز",
              locked: true
            },
            {
              original: "breakfast",
              translated: "إفطار",
              locked: true
            },
            {
              original: "broke",
              translated: "لكسر",
              locked: true
            },
            {
              original: "brush",
              translated: "فرك",
              locked: true
            },
            {
              original: "building",
              translated: "مبنى",
              locked: true
            },
            {
              original: "burn",
              translated: "يحرق",
              locked: true
            },
            {
              original: "buy",
              translated: "لاتخاذ",
              locked: true
            },
            {
              original: "carrot",
              translated: "جزرة",
              locked: true
            },
            {
              original: "cat",
              translated: "قطة",
              locked: false
            },
            {
              original: "chair",
              translated: "كرسي بذراعين",
              locked: true
            },
            {
              original: "chicken",
              translated: "فرخة",
              locked: true
            },
            {
              original: "child",
              translated: "طفل",
              locked: true
            },
            {
              original: "city",
              translated: "مدينة",
              locked: false
            },
            {
              original: "clock",
              translated: "ساعة",
              locked: true
            },
            {
              original: "close",
              translated: "يغلق",
              locked: false
            },
            {
              original: "clothing",
              translated: "ملابس",
              locked: true
            },
            {
              original: "cold",
              translated: "بارد",
              locked: true
            },
            {
              original: "come",
              translated: "ليأتي",
              locked: false
            },
            {
              original: "common",
              translated: "على نطاق واسع",
              locked: true
            },
            {
              original: "condition",
              translated: "حالة",
              locked: true
            },
            {
              original: "correct",
              translated: "حقيقي",
              locked: true
            },
            {
              original: "color",
              translated: "لون",
              locked: false
            },
            {
              original: "cup",
              translated: "كوب",
              locked: true
            },
            {
              original: "cucumber",
              translated: "خيار",
              locked: true
            },
            {
              original: "dark",
              translated: "الظلام",
              locked: true
            },
            {
              original: "daughter",
              translated: "بنت",
              locked: true
            },
            {
              original: "day",
              translated: "يوم",
              locked: false
            },
            {
              original: "dinner",
              translated: "وجبة المساء",
              locked: true
            },
            {
              original: "do",
              translated: "للقيام به",
              locked: false
            },
            {
              original: "drink",
              translated: "للشرب",
              locked: true
            },
            {
              original: "eat",
              translated: "طعام",
              locked: true
            },
            {
              original: "elephant",
              translated: "فيل",
              locked: true
            },
            {
              original: "end",
              translated: "آخر",
              locked: false
            },
            {
              original: "enough",
              translated: "كافٍ",
              locked: true
            },
            {
              original: "even",
              translated: "حتى",
              locked: true
            },
            {
              original: "example",
              translated: "مثال",
              locked: true
            },
            {
              original: "exercise",
              translated: "يمارس",
              locked: true
            },
            {
              original: "excited",
              translated: "متحمس",
              locked: true
            },
            {
              original: "far",
              translated: "بعيد",
              locked: false
            },
            {
              original: "father",
              translated: "أب",
              locked: true
            },
            {
              original: "feel",
              translated: "ليشعر",
              locked: true
            },
            {
              original: "feeling",
              translated: "إحساس",
              locked: true
            },
            {
              original: "find",
              translated: "للعثور على",
              locked: true
            },
            {
              original: "first",
              translated: "أولاً",
              locked: true
            },
            {
              original: "fish",
              translated: "سمكة",
              locked: true
            },
            {
              original: "floor",
              translated: "أرضي",
              locked: true
            },
            {
              original: "foot",
              translated: "قدم",
              locked: true
            },
            {
              original: "football",
              translated: "كرة القدم",
              locked: false
            },
            {
              original: "form",
              translated: "شكل",
              locked: true
            },
            {
              original: "fruit",
              translated: "الفاكهة",
              locked: true
            },
            {
              original: "full",
              translated: "ممتلىء",
              locked: false
            },
            {
              original: "game",
              translated: "لعبة",
              locked: false
            },
            {
              original: "give",
              translated: "لإعطاء",
              locked: false
            },
            {
              original: "go",
              translated: "للذهاب",
              locked: false
            },
            {
              original: "grade",
              translated: "ملحوظات",
              locked: true
            },
            {
              original: "green",
              translated: "أخضر",
              locked: false
            },
            {
              original: "had",
              translated: "كان هناك",
              locked: true
            },
            {
              original: "have",
              translated: "لديك",
              locked: true
            },
            {
              original: "he",
              translated: "هو",
              locked: false
            },
            {
              original: "homework",
              translated: "العمل في المنزل",
              locked: true
            },
            {
              original: "horse",
              translated: "حصان",
              locked: true
            },
            {
              original: "house",
              translated: "منزل",
              locked: true
            },
            {
              original: "ice",
              translated: "الجليد",
              locked: true
            },
            {
              original: "if",
              translated: "لو",
              locked: false
            },
            {
              original: "into",
              translated: "في",
              locked: true
            },
            {
              original: "jump",
              translated: "ترتد",
              locked: true
            },
            {
              original: "keep",
              translated: "لعقد",
              locked: true
            },
            {
              original: "key",
              translated: "مفتاح",
              locked: true
            },
            {
              original: "kill",
              translated: "قتل",
              locked: true
            },
            {
              original: "king",
              translated: "ملِك",
              locked: true
            },
            {
              original: "know",
              translated: "لتعرف",
              locked: true
            },
            {
              original: "laugh",
              translated: "للضحك",
              locked: true
            },
            {
              original: "learn",
              translated: "للتعلم",
              locked: true
            },
            {
              original: "leave",
              translated: "للمغادرة",
              locked: true
            },
            {
              original: "light",
              translated: "ضوء",
              locked: true
            },
            {
              original: "like",
              translated: "للحب",
              locked: false
            },
            {
              original: "lion",
              translated: "الأسد",
              locked: true
            },
            {
              original: "listen",
              translated: "للاستماع",
              locked: false
            },
            {
              original: "live",
              translated: "للعيش",
              locked: false
            },
            {
              original: "long",
              translated: "طويل",
              locked: true
            },
            {
              original: "look",
              translated: "للنظر",
              locked: true
            },
            {
              original: "loud",
              translated: "عالي",
              locked: true
            },
            {
              original: "love",
              translated: "للحب",
              locked: false
            },
            {
              original: "lunch",
              translated: "غداء",
              locked: true
            },
            {
              original: "make",
              translated: "للقيام به",
              locked: true
            },
            {
              original: "man",
              translated: "رجل",
              locked: false
            },
            {
              original: "meal",
              translated: "طعام",
              locked: true
            },
            {
              original: "meat",
              translated: "لحمة",
              locked: true
            },
            {
              original: "meeting",
              translated: "مقابلة",
              locked: true
            },
            {
              original: "met",
              translated: "لقد وجدت",
              locked: true
            },
            {
              original: "morning",
              translated: "صباح",
              locked: true
            },
            {
              original: "mother",
              translated: "الأم",
              locked: true
            },
            {
              original: "move",
              translated: "يمثل",
              locked: true
            },
            {
              original: "much",
              translated: "كثيراً",
              locked: false
            },
            {
              original: "music",
              translated: "موسيقى",
              locked: false
            },
            {
              original: "near",
              translated: "يغلق",
              locked: true
            },
            {
              original: "need",
              translated: "يحتاج",
              locked: false
            },
            {
              original: "neighbor",
              translated: "جار",
              locked: true
            },
            {
              original: "new",
              translated: "جديد",
              locked: false
            },
            {
              original: "night",
              translated: "ليلة",
              locked: true
            },
            {
              original: "open",
              translated: "يفتح",
              locked: true
            },
            {
              original: "orange",
              translated: "البرتقالي",
              locked: true
            },
            {
              original: "out",
              translated: "الخارج",
              locked: true
            },
            {
              original: "over",
              translated: "فوق",
              locked: true
            },
            {
              original: "parent",
              translated: "آباء",
              locked: true
            },
            {
              original: "park",
              translated: "حديقة",
              locked: true
            },
            {
              original: "part",
              translated: "جزء",
              locked: true
            },
            {
              original: "party",
              translated: "حزب",
              locked: false
            },
            {
              original: "pay",
              translated: "يدفع",
              locked: true
            },
            {
              original: "people",
              translated: "الناس",
              locked: true
            },
            {
              original: "person",
              translated: "شخص",
              locked: true
            },
            {
              original: "picture",
              translated: "صورة",
              locked: true
            },
            {
              original: "play",
              translated: "يلعب",
              locked: true
            },
            {
              original: "point",
              translated: "نقطة",
              locked: true
            },
            {
              original: "put",
              translated: "لوضع",
              locked: true
            },
            {
              original: "quick",
              translated: "سريع",
              locked: true
            },
            {
              original: "rain",
              translated: "مطر",
              locked: true
            },
            {
              original: "raise",
              translated: "لالتقاط",
              locked: true
            },
            {
              original: "read",
              translated: "للقراءة",
              locked: false
            },
            {
              original: "remember",
              translated: "لنتذكر",
              locked: true
            },
            {
              original: "report",
              translated: "تقرير",
              locked: false
            },
            {
              original: "rest",
              translated: "للاسترخاء",
              locked: true
            },
            {
              original: "return",
              translated: "يعود",
              locked: true
            },
            {
              original: "rich",
              translated: "ثري",
              locked: true
            },
            {
              original: "ride",
              translated: "للحصول على",
              locked: true
            },
            {
              original: "river",
              translated: "نهر",
              locked: true
            },
            {
              original: "road",
              translated: "طريق",
              locked: true
            },
            {
              original: "room",
              translated: "غرفة",
              locked: true
            },
            {
              original: "rose",
              translated: "للضحك",
              locked: true
            },
            {
              original: "run",
              translated: "للتشغيل",
              locked: true
            },
            {
              original: "said",
              translated: "قال",
              locked: false
            },
            {
              original: "same",
              translated: "نفس",
              locked: false
            },
            {
              original: "sat",
              translated: "جلس",
              locked: false
            },
            {
              original: "say",
              translated: "ليقول",
              locked: false
            },
            {
              original: "school",
              translated: "مدرسة",
              locked: true
            },
            {
              original: "see",
              translated: "لترى",
              locked: false
            },
            {
              original: "shop",
              translated: "مركز التسوق",
              locked: true
            },
            {
              original: "short",
              translated: "قصير",
              locked: true
            },
            {
              original: "show",
              translated: "لإظهار",
              locked: true
            },
            {
              original: "sing",
              translated: "ليغني أغنية",
              locked: true
            },
            {
              original: "sky",
              translated: "سماء",
              locked: true
            },
            {
              original: "small",
              translated: "صغير",
              locked: true
            },
            {
              original: "smell",
              translated: "يشم",
              locked: true
            },
            {
              original: "snow",
              translated: "ربح",
              locked: false
            },
            {
              original: "soft",
              translated: "ناعم",
              locked: true
            },
            {
              original: "some",
              translated: "بعض",
              locked: false
            },
            {
              original: "sound",
              translated: "صوت",
              locked: true
            },
            {
              original: "special",
              translated: "خاص",
              locked: true
            },
            {
              original: "spell",
              translated: "توضيح",
              locked: true
            },
            {
              original: "speak",
              translated: "للتحدث",
              locked: true
            },
            {
              original: "spring",
              translated: "ربيع",
              locked: true
            },
            {
              original: "start",
              translated: "للبدء",
              locked: true
            },
            {
              original: "stay",
              translated: "للبقاء",
              locked: true
            },
            {
              original: "stop",
              translated: "قف",
              locked: true
            },
            {
              original: "storm",
              translated: "عاصفة",
              locked: false
            },
            {
              original: "strong",
              translated: "قوي",
              locked: false
            },
            {
              original: "study",
              translated: "للعمل",
              locked: true
            },
            {
              original: "summer",
              translated: "صيف",
              locked: true
            },
            {
              original: "sun",
              translated: "شمس",
              locked: true
            },
            {
              original: "sure",
              translated: "بالتأكيد",
              locked: false
            },
            {
              original: "surprise",
              translated: "مفاجأة",
              locked: true
            },
            {
              original: "table",
              translated: "طاولة",
              locked: true
            },
            {
              original: "tall",
              translated: "طويل",
              locked: true
            },
            {
              original: "teach",
              translated: "تعليم",
              locked: true
            },
            {
              original: "team",
              translated: "تعيين",
              locked: false
            },
            {
              original: "tell",
              translated: "ليقول",
              locked: false
            },
            {
              original: "temperature",
              translated: "حرارة",
              locked: true
            },
            {
              original: "thank",
              translated: "شكرًا",
              locked: false
            },
            {
              original: "thing",
              translated: "شيء",
              locked: true
            },
            {
              original: "think",
              translated: "للتفكير",
              locked: true
            },
            {
              original: "time",
              translated: "وقت",
              locked: false
            },
            {
              original: "tired",
              translated: "مرهق",
              locked: true
            },
            {
              original: "train",
              translated: "يدرب",
              locked: true
            },
            {
              original: "travel",
              translated: "رحلة",
              locked: true
            },
            {
              original: "tree",
              translated: "شجرة",
              locked: true
            },
            {
              original: "try",
              translated: "لمحاولة",
              locked: true
            },
            {
              original: "turn",
              translated: "يعود",
              locked: false
            },
            {
              original: "under",
              translated: "تحت",
              locked: true
            },
            {
              original: "up",
              translated: "فوق",
              locked: true
            },
            {
              original: "use",
              translated: "للاستخدام",
              locked: true
            },
            {
              original: "visit",
              translated: "يزور",
              locked: true
            },
            {
              original: "walk",
              translated: "للمشي",
              locked: true
            },
            {
              original: "want",
              translated: "تريد",
              locked: false
            },
            {
              original: "water",
              translated: "هذا",
              locked: false
            },
            {
              original: "weather",
              translated: "طقس",
              locked: true
            },
            {
              original: "went",
              translated: "ذهب",
              locked: true
            },
            {
              original: "wet",
              translated: "مبتل",
              locked: true
            },
            {
              original: "what",
              translated: "ماذا",
              locked: false
            },
            {
              original: "where",
              translated: "أين",
              locked: false
            },
            {
              original: "which",
              translated: "أيّ",
              locked: false
            },
            {
              original: "white",
              translated: "أبيض",
              locked: false
            },
            {
              original: "who",
              translated: "من",
              locked: false
            },
            {
              original: "why",
              translated: "من أين",
              locked: false
            },
            {
              original: "wide",
              translated: "واسع",
              locked: true
            },
            {
              original: "wife",
              translated: "زوجة",
              locked: true
            },
            {
              original: "will",
              translated: "سوف يكون",
              locked: false
            },
            {
              original: "wind",
              translated: "رياح",
              locked: true
            },
            {
              original: "winter",
              translated: "شتاء",
              locked: true
            },
            {
              original: "woman",
              translated: "امرأة",
              locked: true
            },
            {
              original: "work",
              translated: "للعمل",
              locked: false
            },
            {
              original: "worry",
              translated: "للقلق",
              locked: true
            },
            {
              original: "write",
              translated: "للكتابة",
              locked: false
            },
            {
              original: "wrong",
              translated: "خطأ",
              locked: true
            },
            {
              original: "year",
              translated: "سنة",
              locked: false
            },
            {
              original: "yellow",
              translated: "أصفر",
              locked: false
            },
            {
              original: "your",
              translated: "لك",
              locked: false
            }
          ];
        } else if (localStorage.getItem('lang') === 'ru') {
          dictionary = [
            {
              original: "about",
              translated: "о",
              locked: false
            },
            {
              original: "adjective",
              translated: "прилагательное",
              locked: false
            },
            {
              original: "afternoon",
              translated: "полдень",
              locked: true
            },
            {
              original: "apple",
              translated: "яблоко",
              locked: false
            },
            {
              original: "back",
              translated: "назад",
              locked: false
            },
            {
              original: "bad",
              translated: "плохой",
              locked: true
            },
            {
              original: "banana",
              translated: "банан",
              locked: true
            },
            {
              original: "bark",
              translated: "оболочка",
              locked: true
            },
            {
              original: "basket",
              translated: "корзина",
              locked: true
            },
            {
              original: "basketball",
              translated: "баскетбол",
              locked: false
            },
            {
              original: "be",
              translated: "быть",
              locked: false
            },
            {
              original: "beach",
              translated: "пляж",
              locked: true
            },
            {
              original: "bear",
              translated: "медведь",
              locked: true
            },
            {
              original: "beat",
              translated: "ударять",
              locked: true
            },
            {
              original: "beautiful",
              translated: "Красивый",
              locked: false
            },
            {
              original: "begin",
              translated: "начать",
              locked: true
            },
            {
              original: "before",
              translated: "до",
              locked: true
            },
            {
              original: "beginning",
              translated: "начало",
              locked: true
            },
            {
              original: "big",
              translated: "большой",
              locked: false
            },
            {
              original: "bird",
              translated: "птица",
              locked: true
            },
            {
              original: "black",
              translated: "черный",
              locked: false
            },
            {
              original: "blue",
              translated: "синий",
              locked: false
            },
            {
              original: "book",
              translated: "книга",
              locked: false
            },
            {
              original: "born",
              translated: "рожденный",
              locked: true
            },
            {
              original: "boy",
              translated: "мальчик",
              locked: false
            },
            {
              original: "bread",
              translated: "хлеб",
              locked: true
            },
            {
              original: "breakfast",
              translated: "завтрак",
              locked: true
            },
            {
              original: "broke",
              translated: "сломать",
              locked: true
            },
            {
              original: "brush",
              translated: "скраб",
              locked: true
            },
            {
              original: "building",
              translated: "здание",
              locked: true
            },
            {
              original: "burn",
              translated: "гореть",
              locked: true
            },
            {
              original: "buy",
              translated: "взять",
              locked: true
            },
            {
              original: "carrot",
              translated: "морковь",
              locked: true
            },
            {
              original: "cat",
              translated: "кот",
              locked: false
            },
            {
              original: "chair",
              translated: "кресло",
              locked: true
            },
            {
              original: "chicken",
              translated: "курица",
              locked: true
            },
            {
              original: "child",
              translated: "ребенок",
              locked: true
            },
            {
              original: "city",
              translated: "город",
              locked: false
            },
            {
              original: "clock",
              translated: "час",
              locked: true
            },
            {
              original: "close",
              translated: "закрывать",
              locked: false
            },
            {
              original: "clothing",
              translated: "одежда",
              locked: true
            },
            {
              original: "cold",
              translated: "холодный",
              locked: true
            },
            {
              original: "come",
              translated: "прийти",
              locked: false
            },
            {
              original: "common",
              translated: "широко распространенный",
              locked: true
            },
            {
              original: "condition",
              translated: "состояние",
              locked: true
            },
            {
              original: "correct",
              translated: "истинный",
              locked: true
            },
            {
              original: "color",
              translated: "цвет",
              locked: false
            },
            {
              original: "cup",
              translated: "чашка",
              locked: true
            },
            {
              original: "cucumber",
              translated: "огурец",
              locked: true
            },
            {
              original: "dark",
              translated: "темнота",
              locked: true
            },
            {
              original: "daughter",
              translated: "девочка",
              locked: true
            },
            {
              original: "day",
              translated: "день",
              locked: false
            },
            {
              original: "dinner",
              translated: "ужин",
              locked: true
            },
            {
              original: "do",
              translated: "делать",
              locked: false
            },
            {
              original: "drink",
              translated: "пить",
              locked: true
            },
            {
              original: "eat",
              translated: "еда",
              locked: true
            },
            {
              original: "elephant",
              translated: "слон",
              locked: true
            },
            {
              original: "end",
              translated: "последний",
              locked: false
            },
            {
              original: "enough",
              translated: "достаточно",
              locked: true
            },
            {
              original: "even",
              translated: "даже",
              locked: true
            },
            {
              original: "example",
              translated: "пример",
              locked: true
            },
            {
              original: "exercise",
              translated: "упражнение",
              locked: true
            },
            {
              original: "excited",
              translated: "взволнованный",
              locked: true
            },
            {
              original: "far",
              translated: "далеко",
              locked: false
            },
            {
              original: "father",
              translated: "отец",
              locked: true
            },
            {
              original: "feel",
              translated: "чувствовать",
              locked: true
            },
            {
              original: "feeling",
              translated: "чувство",
              locked: true
            },
            {
              original: "find",
              translated: "найти",
              locked: true
            },
            {
              original: "first",
              translated: "первый",
              locked: true
            },
            {
              original: "fish",
              translated: "рыба",
              locked: true
            },
            {
              original: "floor",
              translated: "земля",
              locked: true
            },
            {
              original: "foot",
              translated: "ступня",
              locked: true
            },
            {
              original: "football",
              translated: "футбол",
              locked: false
            },
            {
              original: "form",
              translated: "формат",
              locked: true
            },
            {
              original: "fruit",
              translated: "фрукты",
              locked: true
            },
            {
              original: "full",
              translated: "полный",
              locked: false
            },
            {
              original: "game",
              translated: "игра",
              locked: false
            },
            {
              original: "give",
              translated: "дать",
              locked: false
            },
            {
              original: "go",
              translated: "идти",
              locked: false
            },
            {
              original: "grade",
              translated: "примечания",
              locked: true
            },
            {
              original: "green",
              translated: "зеленый",
              locked: false
            },
            {
              original: "had",
              translated: "там было",
              locked: true
            },
            {
              original: "have",
              translated: "иметь",
              locked: true
            },
            {
              original: "he",
              translated: "он",
              locked: false
            },
            {
              original: "homework",
              translated: "домашнее задание",
              locked: true
            },
            {
              original: "horse",
              translated: "лошадь",
              locked: true
            },
            {
              original: "house",
              translated: "дом",
              locked: true
            },
            {
              original: "ice",
              translated: "лед",
              locked: true
            },
            {
              original: "if",
              translated: "если",
              locked: false
            },
            {
              original: "into",
              translated: "в",
              locked: true
            },
            {
              original: "jump",
              translated: "подпрыгивать",
              locked: true
            },
            {
              original: "keep",
              translated: "держать",
              locked: true
            },
            {
              original: "key",
              translated: "ключ",
              locked: true
            },
            {
              original: "kill",
              translated: "убийство",
              locked: true
            },
            {
              original: "king",
              translated: "король",
              locked: true
            },
            {
              original: "know",
              translated: "знать",
              locked: true
            },
            {
              original: "laugh",
              translated: "смеяться",
              locked: true
            },
            {
              original: "learn",
              translated: "учиться",
              locked: true
            },
            {
              original: "leave",
              translated: "Уйти",
              locked: true
            },
            {
              original: "light",
              translated: "свет",
              locked: true
            },
            {
              original: "like",
              translated: "любить",
              locked: false
            },
            {
              original: "lion",
              translated: "лев",
              locked: true
            },
            {
              original: "listen",
              translated: "слушать",
              locked: false
            },
            {
              original: "live",
              translated: "жить",
              locked: false
            },
            {
              original: "long",
              translated: "ДЛИННЫЙ",
              locked: true
            },
            {
              original: "look",
              translated: "смотреть",
              locked: true
            },
            {
              original: "loud",
              translated: "высокий",
              locked: true
            },
            {
              original: "love",
              translated: "любить",
              locked: false
            },
            {
              original: "lunch",
              translated: "обед",
              locked: true
            },
            {
              original: "make",
              translated: "делать",
              locked: true
            },
            {
              original: "man",
              translated: "мужчина",
              locked: false
            },
            {
              original: "meal",
              translated: "еда",
              locked: true
            },
            {
              original: "meat",
              translated: "мясо",
              locked: true
            },
            {
              original: "meeting",
              translated: "встреча",
              locked: true
            },
            {
              original: "met",
              translated: "я нашел",
              locked: true
            },
            {
              original: "morning",
              translated: "утро",
              locked: true
            },
            {
              original: "mother",
              translated: "мать",
              locked: true
            },
            {
              original: "move",
              translated: "действовать",
              locked: true
            },
            {
              original: "much",
              translated: "Много",
              locked: false
            },
            {
              original: "music",
              translated: "музыка",
              locked: false
            },
            {
              original: "near",
              translated: "закрывать",
              locked: true
            },
            {
              original: "need",
              translated: "нуждаться",
              locked: false
            },
            {
              original: "neighbor",
              translated: "сосед",
              locked: true
            },
            {
              original: "new",
              translated: "новый",
              locked: false
            },
            {
              original: "night",
              translated: "ночь",
              locked: true
            },
            {
              original: "open",
              translated: "открыть",
              locked: true
            },
            {
              original: "orange",
              translated: "апельсин",
              locked: true
            },
            {
              original: "out",
              translated: "снаружи",
              locked: true
            },
            {
              original: "over",
              translated: "выше",
              locked: true
            },
            {
              original: "parent",
              translated: "родители",
              locked: true
            },
            {
              original: "park",
              translated: "парк",
              locked: true
            },
            {
              original: "part",
              translated: "часть",
              locked: true
            },
            {
              original: "party",
              translated: "вечеринка",
              locked: false
            },
            {
              original: "pay",
              translated: "платить",
              locked: true
            },
            {
              original: "people",
              translated: "люди",
              locked: true
            },
            {
              original: "person",
              translated: "человек",
              locked: true
            },
            {
              original: "picture",
              translated: "картина",
              locked: true
            },
            {
              original: "play",
              translated: "играть",
              locked: true
            },
            {
              original: "point",
              translated: "точка",
              locked: true
            },
            {
              original: "put",
              translated: "положить",
              locked: true
            },
            {
              original: "quick",
              translated: "быстрый",
              locked: true
            },
            {
              original: "rain",
              translated: "дождь",
              locked: true
            },
            {
              original: "raise",
              translated: "забрать",
              locked: true
            },
            {
              original: "read",
              translated: "читать",
              locked: false
            },
            {
              original: "remember",
              translated: "помнить",
              locked: true
            },
            {
              original: "report",
              translated: "отчет",
              locked: false
            },
            {
              original: "rest",
              translated: "расслабиться",
              locked: true
            },
            {
              original: "return",
              translated: "возвращаться",
              locked: true
            },
            {
              original: "rich",
              translated: "богатый",
              locked: true
            },
            {
              original: "ride",
              translated: "чтобы продолжить",
              locked: true
            },
            {
              original: "river",
              translated: "река",
              locked: true
            },
            {
              original: "road",
              translated: "путь",
              locked: true
            },
            {
              original: "room",
              translated: "комната",
              locked: true
            },
            {
              original: "rose",
              translated: "смеяться",
              locked: true
            },
            {
              original: "run",
              translated: "бежать",
              locked: true
            },
            {
              original: "said",
              translated: "сказал",
              locked: false
            },
            {
              original: "same",
              translated: "такой же",
              locked: false
            },
            {
              original: "sat",
              translated: "сел",
              locked: false
            },
            {
              original: "say",
              translated: "сказать",
              locked: false
            },
            {
              original: "school",
              translated: "школа",
              locked: true
            },
            {
              original: "see",
              translated: "чтобы увидеть",
              locked: false
            },
            {
              original: "shop",
              translated: "торговый центр",
              locked: true
            },
            {
              original: "short",
              translated: "короткий",
              locked: true
            },
            {
              original: "show",
              translated: "показать",
              locked: true
            },
            {
              original: "sing",
              translated: "спеть песню",
              locked: true
            },
            {
              original: "sky",
              translated: "небо",
              locked: true
            },
            {
              original: "small",
              translated: "Маленький",
              locked: true
            },
            {
              original: "smell",
              translated: "запах",
              locked: true
            },
            {
              original: "snow",
              translated: "выгода",
              locked: false
            },
            {
              original: "soft",
              translated: "мягкий",
              locked: true
            },
            {
              original: "some",
              translated: "некоторый",
              locked: false
            },
            {
              original: "sound",
              translated: "звук",
              locked: true
            },
            {
              original: "special",
              translated: "особенный",
              locked: true
            },
            {
              original: "spell",
              translated: "излагать",
              locked: true
            },
            {
              original: "speak",
              translated: "говорить",
              locked: true
            },
            {
              original: "spring",
              translated: "Весна",
              locked: true
            },
            {
              original: "start",
              translated: "начать",
              locked: true
            },
            {
              original: "stay",
              translated: "остаться",
              locked: true
            },
            {
              original: "stop",
              translated: "останавливаться",
              locked: true
            },
            {
              original: "storm",
              translated: "шторм",
              locked: false
            },
            {
              original: "strong",
              translated: "сильный",
              locked: false
            },
            {
              original: "study",
              translated: "работать",
              locked: true
            },
            {
              original: "summer",
              translated: "Лето",
              locked: true
            },
            {
              original: "sun",
              translated: "солнце",
              locked: true
            },
            {
              original: "sure",
              translated: "конечно",
              locked: false
            },
            {
              original: "surprise",
              translated: "сюрприз",
              locked: true
            },
            {
              original: "table",
              translated: "стол",
              locked: true
            },
            {
              original: "tall",
              translated: "ДЛИННЫЙ",
              locked: true
            },
            {
              original: "teach",
              translated: "учить",
              locked: true
            },
            {
              original: "team",
              translated: "набор",
              locked: false
            },
            {
              original: "tell",
              translated: "сказать",
              locked: false
            },
            {
              original: "temperature",
              translated: "нагревать",
              locked: true
            },
            {
              original: "thank",
              translated: "Спасибо",
              locked: false
            },
            {
              original: "thing",
              translated: "вещь",
              locked: true
            },
            {
              original: "think",
              translated: "думать",
              locked: true
            },
            {
              original: "time",
              translated: "время",
              locked: false
            },
            {
              original: "tired",
              translated: "усталый",
              locked: true
            },
            {
              original: "train",
              translated: "тренироваться",
              locked: true
            },
            {
              original: "travel",
              translated: "путешествие",
              locked: true
            },
            {
              original: "tree",
              translated: "дерево",
              locked: true
            },
            {
              original: "try",
              translated: "попробовать",
              locked: true
            },
            {
              original: "turn",
              translated: "возвращаться",
              locked: false
            },
            {
              original: "under",
              translated: "под",
              locked: true
            },
            {
              original: "up",
              translated: "выше",
              locked: true
            },
            {
              original: "use",
              translated: "использовать",
              locked: true
            },
            {
              original: "visit",
              translated: "посещать",
              locked: true
            },
            {
              original: "walk",
              translated: "ходить",
              locked: true
            },
            {
              original: "want",
              translated: "хотеть",
              locked: false
            },
            {
              original: "water",
              translated: "Этот",
              locked: false
            },
            {
              original: "weather",
              translated: "погода",
              locked: true
            },
            {
              original: "went",
              translated: "ушел",
              locked: true
            },
            {
              original: "wet",
              translated: "влажный",
              locked: true
            },
            {
              original: "what",
              translated: "Что",
              locked: false
            },
            {
              original: "where",
              translated: "где",
              locked: false
            },
            {
              original: "which",
              translated: "Который",
              locked: false
            },
            {
              original: "white",
              translated: "белый",
              locked: false
            },
            {
              original: "who",
              translated: "ВОЗ",
              locked: false
            },
            {
              original: "why",
              translated: "Откуда",
              locked: false
            },
            {
              original: "wide",
              translated: "широкий",
              locked: true
            },
            {
              original: "wife",
              translated: "жена",
              locked: true
            },
            {
              original: "will",
              translated: "будет",
              locked: false
            },
            {
              original: "wind",
              translated: "ветер",
              locked: true
            },
            {
              original: "winter",
              translated: "зима",
              locked: true
            },
            {
              original: "woman",
              translated: "Женщина",
              locked: true
            },
            {
              original: "work",
              translated: "работать",
              locked: false
            },
            {
              original: "worry",
              translated: "волноваться",
              locked: true
            },
            {
              original: "write",
              translated: "писать",
              locked: false
            },
            {
              original: "wrong",
              translated: "неправильный",
              locked: true
            },
            {
              original: "year",
              translated: "год",
              locked: false
            },
            {
              original: "yellow",
              translated: "желтый",
              locked: false
            },
            {
              original: "your",
              translated: "твой",
              locked: false
            }
          ];
        } else if (localStorage.getItem('lang') === 'de') {
          dictionary = [
            {
              original: "about",
              translated: "um",
              locked: false
            },
            {
              original: "adjective",
              translated: "Adjektiv",
              locked: false
            },
            {
              original: "afternoon",
              translated: "Nachmittag",
              locked: true
            },
            {
              original: "apple",
              translated: "Apfel",
              locked: false
            },
            {
              original: "back",
              translated: "zurück",
              locked: false
            },
            {
              original: "bad",
              translated: "schlecht",
              locked: true
            },
            {
              original: "banana",
              translated: "Banane",
              locked: true
            },
            {
              original: "bark",
              translated: "Hülse",
              locked: true
            },
            {
              original: "basket",
              translated: "Korb",
              locked: true
            },
            {
              original: "basketball",
              translated: "Basketball",
              locked: false
            },
            {
              original: "be",
              translated: "zu sein",
              locked: false
            },
            {
              original: "beach",
              translated: "Strand",
              locked: true
            },
            {
              original: "bear",
              translated: "tragen",
              locked: true
            },
            {
              original: "beat",
              translated: "Schlag",
              locked: true
            },
            {
              original: "beautiful",
              translated: "Schön",
              locked: false
            },
            {
              original: "begin",
              translated: "beginnen",
              locked: true
            },
            {
              original: "before",
              translated: "vor",
              locked: true
            },
            {
              original: "beginning",
              translated: "Anfang",
              locked: true
            },
            {
              original: "big",
              translated: "groß",
              locked: false
            },
            {
              original: "bird",
              translated: "Vogel",
              locked: true
            },
            {
              original: "black",
              translated: "Schwarz",
              locked: false
            },
            {
              original: "blue",
              translated: "Blau",
              locked: false
            },
            {
              original: "book",
              translated: "Buch",
              locked: false
            },
            {
              original: "born",
              translated: "geboren",
              locked: true
            },
            {
              original: "boy",
              translated: "Junge",
              locked: false
            },
            {
              original: "bread",
              translated: "brot",
              locked: true
            },
            {
              original: "breakfast",
              translated: "Frühstück",
              locked: true
            },
            {
              original: "broke",
              translated: "brechen",
              locked: true
            },
            {
              original: "brush",
              translated: "schrubben",
              locked: true
            },
            {
              original: "building",
              translated: "Gebäude",
              locked: true
            },
            {
              original: "burn",
              translated: "brennen",
              locked: true
            },
            {
              original: "buy",
              translated: "nehmen",
              locked: true
            },
            {
              original: "carrot",
              translated: "Karotte",
              locked: true
            },
            {
              original: "cat",
              translated: "Katze",
              locked: false
            },
            {
              original: "chair",
              translated: "Sessel",
              locked: true
            },
            {
              original: "chicken",
              translated: "Huhn",
              locked: true
            },
            {
              original: "child",
              translated: "Kind",
              locked: true
            },
            {
              original: "city",
              translated: "Stadt",
              locked: false
            },
            {
              original: "clock",
              translated: "Stunde",
              locked: true
            },
            {
              original: "close",
              translated: "schließen",
              locked: false
            },
            {
              original: "clothing",
              translated: "Kleidung",
              locked: true
            },
            {
              original: "cold",
              translated: "kalt",
              locked: true
            },
            {
              original: "come",
              translated: "kommen",
              locked: false
            },
            {
              original: "common",
              translated: "weit verbreitet",
              locked: true
            },
            {
              original: "condition",
              translated: "Zustand",
              locked: true
            },
            {
              original: "correct",
              translated: "WAHR",
              locked: true
            },
            {
              original: "color",
              translated: "Farbe",
              locked: false
            },
            {
              original: "cup",
              translated: "Tasse",
              locked: true
            },
            {
              original: "cucumber",
              translated: "Gurke",
              locked: true
            },
            {
              original: "dark",
              translated: "Dunkelheit",
              locked: true
            },
            {
              original: "daughter",
              translated: "Mädchen",
              locked: true
            },
            {
              original: "day",
              translated: "Tag",
              locked: false
            },
            {
              original: "dinner",
              translated: "Abendessen",
              locked: true
            },
            {
              original: "do",
              translated: "zu tun",
              locked: false
            },
            {
              original: "drink",
              translated: "zu trinken",
              locked: true
            },
            {
              original: "eat",
              translated: "Essen",
              locked: true
            },
            {
              original: "elephant",
              translated: "Elefant",
              locked: true
            },
            {
              original: "end",
              translated: "zuletzt",
              locked: false
            },
            {
              original: "enough",
              translated: "genug",
              locked: true
            },
            {
              original: "even",
              translated: "sogar",
              locked: true
            },
            {
              original: "example",
              translated: "Beispiel",
              locked: true
            },
            {
              original: "exercise",
              translated: "Übung",
              locked: true
            },
            {
              original: "excited",
              translated: "aufgeregt",
              locked: true
            },
            {
              original: "far",
              translated: "weit",
              locked: false
            },
            {
              original: "father",
              translated: "Vater",
              locked: true
            },
            {
              original: "feel",
              translated: "zu fühlen",
              locked: true
            },
            {
              original: "feeling",
              translated: "Gefühl",
              locked: true
            },
            {
              original: "find",
              translated: "zu finden",
              locked: true
            },
            {
              original: "first",
              translated: "Erste",
              locked: true
            },
            {
              original: "fish",
              translated: "Fisch",
              locked: true
            },
            {
              original: "floor",
              translated: "Boden",
              locked: true
            },
            {
              original: "foot",
              translated: "Fuß",
              locked: true
            },
            {
              original: "football",
              translated: "Fußball",
              locked: false
            },
            {
              original: "form",
              translated: "Format",
              locked: true
            },
            {
              original: "fruit",
              translated: "Obst",
              locked: true
            },
            {
              original: "full",
              translated: "voll",
              locked: false
            },
            {
              original: "game",
              translated: "Spiel",
              locked: false
            },
            {
              original: "give",
              translated: "geben",
              locked: false
            },
            {
              original: "go",
              translated: "gehen",
              locked: false
            },
            {
              original: "grade",
              translated: "Notizen",
              locked: true
            },
            {
              original: "green",
              translated: "Grün",
              locked: false
            },
            {
              original: "had",
              translated: "es gab",
              locked: true
            },
            {
              original: "have",
              translated: "zu haben",
              locked: true
            },
            {
              original: "he",
              translated: "Er",
              locked: false
            },
            {
              original: "homework",
              translated: "Hausaufgaben",
              locked: true
            },
            {
              original: "horse",
              translated: "Pferd",
              locked: true
            },
            {
              original: "house",
              translated: "Haus",
              locked: true
            },
            {
              original: "ice",
              translated: "Eis",
              locked: true
            },
            {
              original: "if",
              translated: "Wenn",
              locked: false
            },
            {
              original: "into",
              translated: "In",
              locked: true
            },
            {
              original: "jump",
              translated: "prallen",
              locked: true
            },
            {
              original: "keep",
              translated: "zu halten",
              locked: true
            },
            {
              original: "key",
              translated: "Schlüssel",
              locked: true
            },
            {
              original: "kill",
              translated: "töten",
              locked: true
            },
            {
              original: "king",
              translated: "König",
              locked: true
            },
            {
              original: "know",
              translated: "wissen",
              locked: true
            },
            {
              original: "laugh",
              translated: "lachen",
              locked: true
            },
            {
              original: "learn",
              translated: "zu lernen",
              locked: true
            },
            {
              original: "leave",
              translated: "Gehen",
              locked: true
            },
            {
              original: "light",
              translated: "Licht",
              locked: true
            },
            {
              original: "like",
              translated: "zu lieben",
              locked: false
            },
            {
              original: "lion",
              translated: "Löwe",
              locked: true
            },
            {
              original: "listen",
              translated: "zuzuhören",
              locked: false
            },
            {
              original: "live",
              translated: "leben",
              locked: false
            },
            {
              original: "long",
              translated: "LANG",
              locked: true
            },
            {
              original: "look",
              translated: "schauen",
              locked: true
            },
            {
              original: "loud",
              translated: "hoch",
              locked: true
            },
            {
              original: "love",
              translated: "zu lieben",
              locked: false
            },
            {
              original: "lunch",
              translated: "Mittagessen",
              locked: true
            },
            {
              original: "make",
              translated: "zu tun",
              locked: true
            },
            {
              original: "man",
              translated: "Mann",
              locked: false
            },
            {
              original: "meal",
              translated: "Essen",
              locked: true
            },
            {
              original: "meat",
              translated: "Fleisch",
              locked: true
            },
            {
              original: "meeting",
              translated: "treffen",
              locked: true
            },
            {
              original: "met",
              translated: "Ich habe gefunden",
              locked: true
            },
            {
              original: "morning",
              translated: "Morgen",
              locked: true
            },
            {
              original: "mother",
              translated: "Mutter",
              locked: true
            },
            {
              original: "move",
              translated: "Akt",
              locked: true
            },
            {
              original: "much",
              translated: "Eine Menge",
              locked: false
            },
            {
              original: "music",
              translated: "Musik",
              locked: false
            },
            {
              original: "near",
              translated: "schließen",
              locked: true
            },
            {
              original: "need",
              translated: "brauchen",
              locked: false
            },
            {
              original: "neighbor",
              translated: "Nachbar",
              locked: true
            },
            {
              original: "new",
              translated: "neu",
              locked: false
            },
            {
              original: "night",
              translated: "Nacht",
              locked: true
            },
            {
              original: "open",
              translated: "offen",
              locked: true
            },
            {
              original: "orange",
              translated: "orange",
              locked: true
            },
            {
              original: "out",
              translated: "draußen",
              locked: true
            },
            {
              original: "over",
              translated: "über",
              locked: true
            },
            {
              original: "parent",
              translated: "Eltern",
              locked: true
            },
            {
              original: "park",
              translated: "Park",
              locked: true
            },
            {
              original: "part",
              translated: "Teil",
              locked: true
            },
            {
              original: "party",
              translated: "Party",
              locked: false
            },
            {
              original: "pay",
              translated: "zahlen",
              locked: true
            },
            {
              original: "people",
              translated: "Menschen",
              locked: true
            },
            {
              original: "person",
              translated: "Person",
              locked: true
            },
            {
              original: "picture",
              translated: "Bild",
              locked: true
            },
            {
              original: "play",
              translated: "spielen",
              locked: true
            },
            {
              original: "point",
              translated: "Punkt",
              locked: true
            },
            {
              original: "put",
              translated: "stellen",
              locked: true
            },
            {
              original: "quick",
              translated: "schnell",
              locked: true
            },
            {
              original: "rain",
              translated: "Regen",
              locked: true
            },
            {
              original: "raise",
              translated: "abholen",
              locked: true
            },
            {
              original: "read",
              translated: "zu lesen",
              locked: false
            },
            {
              original: "remember",
              translated: "zu erinnern",
              locked: true
            },
            {
              original: "report",
              translated: "Bericht",
              locked: false
            },
            {
              original: "rest",
              translated: "zum Entspannen",
              locked: true
            },
            {
              original: "return",
              translated: "zurückkehren",
              locked: true
            },
            {
              original: "rich",
              translated: "reich",
              locked: true
            },
            {
              original: "ride",
              translated: "weiterkommen",
              locked: true
            },
            {
              original: "river",
              translated: "Fluss",
              locked: true
            },
            {
              original: "road",
              translated: "Weg",
              locked: true
            },
            {
              original: "room",
              translated: "Zimmer",
              locked: true
            },
            {
              original: "rose",
              translated: "lachen",
              locked: true
            },
            {
              original: "run",
              translated: "laufen",
              locked: true
            },
            {
              original: "said",
              translated: "sagte",
              locked: false
            },
            {
              original: "same",
              translated: "Dasselbe",
              locked: false
            },
            {
              original: "sat",
              translated: "setzte sich",
              locked: false
            },
            {
              original: "say",
              translated: "zu sagen",
              locked: false
            },
            {
              original: "school",
              translated: "Schule",
              locked: true
            },
            {
              original: "see",
              translated: "um zu sehen",
              locked: false
            },
            {
              original: "shop",
              translated: "Einkaufszentrum",
              locked: true
            },
            {
              original: "short",
              translated: "kurz",
              locked: true
            },
            {
              original: "show",
              translated: "zeigen",
              locked: true
            },
            {
              original: "sing",
              translated: "ein Lied singen",
              locked: true
            },
            {
              original: "sky",
              translated: "Himmel",
              locked: true
            },
            {
              original: "small",
              translated: "Klein",
              locked: true
            },
            {
              original: "smell",
              translated: "Geruch",
              locked: true
            },
            {
              original: "snow",
              translated: "profitieren",
              locked: false
            },
            {
              original: "soft",
              translated: "weich",
              locked: true
            },
            {
              original: "some",
              translated: "manche",
              locked: false
            },
            {
              original: "sound",
              translated: "Klang",
              locked: true
            },
            {
              original: "special",
              translated: "besonders",
              locked: true
            },
            {
              original: "spell",
              translated: "buchstabieren",
              locked: true
            },
            {
              original: "speak",
              translated: "reden",
              locked: true
            },
            {
              original: "spring",
              translated: "Frühling",
              locked: true
            },
            {
              original: "start",
              translated: "beginnen",
              locked: true
            },
            {
              original: "stay",
              translated: "bleiben",
              locked: true
            },
            {
              original: "stop",
              translated: "stoppen",
              locked: true
            },
            {
              original: "storm",
              translated: "Sturm",
              locked: false
            },
            {
              original: "strong",
              translated: "stark",
              locked: false
            },
            {
              original: "study",
              translated: "arbeiten",
              locked: true
            },
            {
              original: "summer",
              translated: "Sommer",
              locked: true
            },
            {
              original: "sun",
              translated: "Sonne",
              locked: true
            },
            {
              original: "sure",
              translated: "Sicher",
              locked: false
            },
            {
              original: "surprise",
              translated: "Überraschung",
              locked: true
            },
            {
              original: "table",
              translated: "Tisch",
              locked: true
            },
            {
              original: "tall",
              translated: "LANG",
              locked: true
            },
            {
              original: "teach",
              translated: "unterrichten",
              locked: true
            },
            {
              original: "team",
              translated: "Satz",
              locked: false
            },
            {
              original: "tell",
              translated: "zu sagen",
              locked: false
            },
            {
              original: "temperature",
              translated: "Hitze",
              locked: true
            },
            {
              original: "thank",
              translated: "Danke",
              locked: false
            },
            {
              original: "thing",
              translated: "Ding",
              locked: true
            },
            {
              original: "think",
              translated: "zu denken",
              locked: true
            },
            {
              original: "time",
              translated: "Zeit",
              locked: false
            },
            {
              original: "tired",
              translated: "müde",
              locked: true
            },
            {
              original: "train",
              translated: "Zug",
              locked: true
            },
            {
              original: "travel",
              translated: "Reise",
              locked: true
            },
            {
              original: "tree",
              translated: "Baum",
              locked: true
            },
            {
              original: "try",
              translated: "zu versuchen",
              locked: true
            },
            {
              original: "turn",
              translated: "zurückkehren",
              locked: false
            },
            {
              original: "under",
              translated: "unter",
              locked: true
            },
            {
              original: "up",
              translated: "über",
              locked: true
            },
            {
              original: "use",
              translated: "zu verwenden",
              locked: true
            },
            {
              original: "visit",
              translated: "besuchen",
              locked: true
            },
            {
              original: "walk",
              translated: "gehen",
              locked: true
            },
            {
              original: "want",
              translated: "wollen",
              locked: false
            },
            {
              original: "water",
              translated: "Das",
              locked: false
            },
            {
              original: "weather",
              translated: "Wetter",
              locked: true
            },
            {
              original: "went",
              translated: "gegangen",
              locked: true
            },
            {
              original: "wet",
              translated: "nass",
              locked: true
            },
            {
              original: "what",
              translated: "Was",
              locked: false
            },
            {
              original: "where",
              translated: "Wo",
              locked: false
            },
            {
              original: "which",
              translated: "Welche",
              locked: false
            },
            {
              original: "white",
              translated: "Weiß",
              locked: false
            },
            {
              original: "who",
              translated: "WHO",
              locked: false
            },
            {
              original: "why",
              translated: "Wovon",
              locked: false
            },
            {
              original: "wide",
              translated: "breit",
              locked: true
            },
            {
              original: "wife",
              translated: "Gattin",
              locked: true
            },
            {
              original: "will",
              translated: "wird sein",
              locked: false
            },
            {
              original: "wind",
              translated: "Wind",
              locked: true
            },
            {
              original: "winter",
              translated: "Winter",
              locked: true
            },
            {
              original: "woman",
              translated: "Frau",
              locked: true
            },
            {
              original: "work",
              translated: "arbeiten",
              locked: false
            },
            {
              original: "worry",
              translated: "sich Sorgen machen",
              locked: true
            },
            {
              original: "write",
              translated: "schreiben",
              locked: false
            },
            {
              original: "wrong",
              translated: "falsch",
              locked: true
            },
            {
              original: "year",
              translated: "Jahr",
              locked: false
            },
            {
              original: "yellow",
              translated: "Gelb",
              locked: false
            },
            {
              original: "your",
              translated: "dein",
              locked: false
            }
          ];
        } else if (localStorage.getItem('lang') === 'ja') {
          dictionary = [
            {
              original: "about",
              translated: "について",
              locked: false
            },
            {
              original: "adjective",
              translated: "形容詞",
              locked: false
            },
            {
              original: "afternoon",
              translated: "午後",
              locked: true
            },
            {
              original: "apple",
              translated: "りんご",
              locked: false
            },
            {
              original: "back",
              translated: "戻る",
              locked: false
            },
            {
              original: "bad",
              translated: "悪い",
              locked: true
            },
            {
              original: "banana",
              translated: "バナナ",
              locked: true
            },
            {
              original: "bark",
              translated: "シェル",
              locked: true
            },
            {
              original: "basket",
              translated: "バスケット",
              locked: true
            },
            {
              original: "basketball",
              translated: "バスケットボール",
              locked: false
            },
            {
              original: "be",
              translated: "なる",
              locked: false
            },
            {
              original: "beach",
              translated: "ビーチ",
              locked: true
            },
            {
              original: "bear",
              translated: "クマ",
              locked: true
            },
            {
              original: "beat",
              translated: "打つ",
              locked: true
            },
            {
              original: "beautiful",
              translated: "美しい",
              locked: false
            },
            {
              original: "begin",
              translated: "始める",
              locked: true
            },
            {
              original: "before",
              translated: "前に",
              locked: true
            },
            {
              original: "beginning",
              translated: "始まり",
              locked: true
            },
            {
              original: "big",
              translated: "大きい",
              locked: false
            },
            {
              original: "bird",
              translated: "鳥",
              locked: true
            },
            {
              original: "black",
              translated: "黒",
              locked: false
            },
            {
              original: "blue",
              translated: "青",
              locked: false
            },
            {
              original: "book",
              translated: "本",
              locked: false
            },
            {
              original: "born",
              translated: "生まれる",
              locked: true
            },
            {
              original: "boy",
              translated: "男の子",
              locked: false
            },
            {
              original: "bread",
              translated: "パン",
              locked: true
            },
            {
              original: "breakfast",
              translated: "朝食",
              locked: true
            },
            {
              original: "broke",
              translated: "壊す",
              locked: true
            },
            {
              original: "brush",
              translated: "スクラブ",
              locked: true
            },
            {
              original: "building",
              translated: "建物",
              locked: true
            },
            {
              original: "burn",
              translated: "やけど",
              locked: true
            },
            {
              original: "buy",
              translated: "取る",
              locked: true
            },
            {
              original: "carrot",
              translated: "ニンジン",
              locked: true
            },
            {
              original: "cat",
              translated: "猫",
              locked: false
            },
            {
              original: "chair",
              translated: "肘掛け椅子",
              locked: true
            },
            {
              original: "chicken",
              translated: "チキン",
              locked: true
            },
            {
              original: "child",
              translated: "子供",
              locked: true
            },
            {
              original: "city",
              translated: "市",
              locked: false
            },
            {
              original: "clock",
              translated: "時間",
              locked: true
            },
            {
              original: "close",
              translated: "近い",
              locked: false
            },
            {
              original: "clothing",
              translated: "服",
              locked: true
            },
            {
              original: "cold",
              translated: "寒い",
              locked: true
            },
            {
              original: "come",
              translated: "来る",
              locked: false
            },
            {
              original: "common",
              translated: "広く普及している",
              locked: true
            },
            {
              original: "condition",
              translated: "状態",
              locked: true
            },
            {
              original: "correct",
              translated: "真実",
              locked: true
            },
            {
              original: "color",
              translated: "色",
              locked: false
            },
            {
              original: "cup",
              translated: "カップ",
              locked: true
            },
            {
              original: "cucumber",
              translated: "キュウリ",
              locked: true
            },
            {
              original: "dark",
              translated: "暗闇",
              locked: true
            },
            {
              original: "daughter",
              translated: "女の子",
              locked: true
            },
            {
              original: "day",
              translated: "日",
              locked: false
            },
            {
              original: "dinner",
              translated: "夕食",
              locked: true
            },
            {
              original: "do",
              translated: "すること",
              locked: false
            },
            {
              original: "drink",
              translated: "飲む",
              locked: true
            },
            {
              original: "eat",
              translated: "食べ物",
              locked: true
            },
            {
              original: "elephant",
              translated: "象",
              locked: true
            },
            {
              original: "end",
              translated: "最後",
              locked: false
            },
            {
              original: "enough",
              translated: "十分",
              locked: true
            },
            {
              original: "even",
              translated: "平",
              locked: true
            },
            {
              original: "example",
              translated: "例",
              locked: true
            },
            {
              original: "exercise",
              translated: "エクササイズ",
              locked: true
            },
            {
              original: "excited",
              translated: "興奮した",
              locked: true
            },
            {
              original: "far",
              translated: "遠い",
              locked: false
            },
            {
              original: "father",
              translated: "父親",
              locked: true
            },
            {
              original: "feel",
              translated: "感じる",
              locked: true
            },
            {
              original: "feeling",
              translated: "フィーリング",
              locked: true
            },
            {
              original: "find",
              translated: "見つける",
              locked: true
            },
            {
              original: "first",
              translated: "初め",
              locked: true
            },
            {
              original: "fish",
              translated: "魚",
              locked: true
            },
            {
              original: "floor",
              translated: "地面",
              locked: true
            },
            {
              original: "foot",
              translated: "足",
              locked: true
            },
            {
              original: "football",
              translated: "フットボール",
              locked: false
            },
            {
              original: "form",
              translated: "形式",
              locked: true
            },
            {
              original: "fruit",
              translated: "フルーツ",
              locked: true
            },
            {
              original: "full",
              translated: "満杯",
              locked: false
            },
            {
              original: "game",
              translated: "ゲーム",
              locked: false
            },
            {
              original: "give",
              translated: "与える",
              locked: false
            },
            {
              original: "go",
              translated: "持ち帰り",
              locked: false
            },
            {
              original: "grade",
              translated: "メモ",
              locked: true
            },
            {
              original: "green",
              translated: "緑",
              locked: false
            },
            {
              original: "had",
              translated: "ありました",
              locked: true
            },
            {
              original: "have",
              translated: "持つ",
              locked: true
            },
            {
              original: "he",
              translated: "彼",
              locked: false
            },
            {
              original: "homework",
              translated: "宿題",
              locked: true
            },
            {
              original: "horse",
              translated: "馬",
              locked: true
            },
            {
              original: "house",
              translated: "家",
              locked: true
            },
            {
              original: "ice",
              translated: "氷",
              locked: true
            },
            {
              original: "if",
              translated: "もし",
              locked: false
            },
            {
              original: "into",
              translated: "で",
              locked: true
            },
            {
              original: "jump",
              translated: "跳ねる",
              locked: true
            },
            {
              original: "keep",
              translated: "保持する",
              locked: true
            },
            {
              original: "key",
              translated: "鍵",
              locked: true
            },
            {
              original: "kill",
              translated: "殺す",
              locked: true
            },
            {
              original: "king",
              translated: "王",
              locked: true
            },
            {
              original: "know",
              translated: "知ること",
              locked: true
            },
            {
              original: "laugh",
              translated: "笑うこと",
              locked: true
            },
            {
              original: "learn",
              translated: "学ぶ",
              locked: true
            },
            {
              original: "leave",
              translated: "出発するには",
              locked: true
            },
            {
              original: "light",
              translated: "ライト",
              locked: true
            },
            {
              original: "like",
              translated: "愛すること",
              locked: false
            },
            {
              original: "lion",
              translated: "ライオン",
              locked: true
            },
            {
              original: "listen",
              translated: "聞く",
              locked: false
            },
            {
              original: "live",
              translated: "生きる",
              locked: false
            },
            {
              original: "long",
              translated: "長さ",
              locked: true
            },
            {
              original: "look",
              translated: "見る",
              locked: true
            },
            {
              original: "loud",
              translated: "高い",
              locked: true
            },
            {
              original: "love",
              translated: "愛すること",
              locked: false
            },
            {
              original: "lunch",
              translated: "ランチ",
              locked: true
            },
            {
              original: "make",
              translated: "すること",
              locked: true
            },
            {
              original: "man",
              translated: "男",
              locked: false
            },
            {
              original: "meal",
              translated: "食べ物",
              locked: true
            },
            {
              original: "meat",
              translated: "肉",
              locked: true
            },
            {
              original: "meeting",
              translated: "ミーティング",
              locked: true
            },
            {
              original: "met",
              translated: "見つけました",
              locked: true
            },
            {
              original: "morning",
              translated: "朝",
              locked: true
            },
            {
              original: "mother",
              translated: "母親",
              locked: true
            },
            {
              original: "move",
              translated: "活動",
              locked: true
            },
            {
              original: "much",
              translated: "たくさん",
              locked: false
            },
            {
              original: "music",
              translated: "音楽",
              locked: false
            },
            {
              original: "near",
              translated: "近い",
              locked: true
            },
            {
              original: "need",
              translated: "必要",
              locked: false
            },
            {
              original: "neighbor",
              translated: "近所の人",
              locked: true
            },
            {
              original: "new",
              translated: "新しい",
              locked: false
            },
            {
              original: "night",
              translated: "夜",
              locked: true
            },
            {
              original: "open",
              translated: "開ける",
              locked: true
            },
            {
              original: "orange",
              translated: "オレンジ",
              locked: true
            },
            {
              original: "out",
              translated: "外",
              locked: true
            },
            {
              original: "over",
              translated: "その上",
              locked: true
            },
            {
              original: "parent",
              translated: "両親",
              locked: true
            },
            {
              original: "park",
              translated: "公園",
              locked: true
            },
            {
              original: "part",
              translated: "一部",
              locked: true
            },
            {
              original: "party",
              translated: "パーティー",
              locked: false
            },
            {
              original: "pay",
              translated: "支払う",
              locked: true
            },
            {
              original: "people",
              translated: "人々",
              locked: true
            },
            {
              original: "person",
              translated: "人",
              locked: true
            },
            {
              original: "picture",
              translated: "写真",
              locked: true
            },
            {
              original: "play",
              translated: "遊ぶ",
              locked: true
            },
            {
              original: "point",
              translated: "ポイント",
              locked: true
            },
            {
              original: "put",
              translated: "置く",
              locked: true
            },
            {
              original: "quick",
              translated: "速い",
              locked: true
            },
            {
              original: "rain",
              translated: "雨",
              locked: true
            },
            {
              original: "raise",
              translated: "拾う",
              locked: true
            },
            {
              original: "read",
              translated: "読む",
              locked: false
            },
            {
              original: "remember",
              translated: "思い出す",
              locked: true
            },
            {
              original: "report",
              translated: "報告",
              locked: false
            },
            {
              original: "rest",
              translated: "リラックスする",
              locked: true
            },
            {
              original: "return",
              translated: "戻る",
              locked: true
            },
            {
              original: "rich",
              translated: "リッチ",
              locked: true
            },
            {
              original: "ride",
              translated: "乗る",
              locked: true
            },
            {
              original: "river",
              translated: "川",
              locked: true
            },
            {
              original: "road",
              translated: "パス",
              locked: true
            },
            {
              original: "room",
              translated: "部屋",
              locked: true
            },
            {
              original: "rose",
              translated: "笑うこと",
              locked: true
            },
            {
              original: "run",
              translated: "走る",
              locked: true
            },
            {
              original: "said",
              translated: "言った",
              locked: false
            },
            {
              original: "same",
              translated: "同じ",
              locked: false
            },
            {
              original: "sat",
              translated: "座った",
              locked: false
            },
            {
              original: "say",
              translated: "言うこと",
              locked: false
            },
            {
              original: "school",
              translated: "学校",
              locked: true
            },
            {
              original: "see",
              translated: "見る",
              locked: false
            },
            {
              original: "shop",
              translated: "ショッピングセンター",
              locked: true
            },
            {
              original: "short",
              translated: "短い",
              locked: true
            },
            {
              original: "show",
              translated: "見せる",
              locked: true
            },
            {
              original: "sing",
              translated: "歌を歌うこと",
              locked: true
            },
            {
              original: "sky",
              translated: "空",
              locked: true
            },
            {
              original: "small",
              translated: "小さい",
              locked: true
            },
            {
              original: "smell",
              translated: "匂い",
              locked: true
            },
            {
              original: "snow",
              translated: "利益",
              locked: false
            },
            {
              original: "soft",
              translated: "柔らかい",
              locked: true
            },
            {
              original: "some",
              translated: "いくつかの",
              locked: false
            },
            {
              original: "sound",
              translated: "音",
              locked: true
            },
            {
              original: "special",
              translated: "特別",
              locked: true
            },
            {
              original: "spell",
              translated: "綴る",
              locked: true
            },
            {
              original: "speak",
              translated: "話す",
              locked: true
            },
            {
              original: "spring",
              translated: "春",
              locked: true
            },
            {
              original: "start",
              translated: "始める",
              locked: true
            },
            {
              original: "stay",
              translated: "滞在する",
              locked: true
            },
            {
              original: "stop",
              translated: "停止",
              locked: true
            },
            {
              original: "storm",
              translated: "嵐",
              locked: false
            },
            {
              original: "strong",
              translated: "強い",
              locked: false
            },
            {
              original: "study",
              translated: "働く",
              locked: true
            },
            {
              original: "summer",
              translated: "夏",
              locked: true
            },
            {
              original: "sun",
              translated: "太陽",
              locked: true
            },
            {
              original: "sure",
              translated: "もちろん",
              locked: false
            },
            {
              original: "surprise",
              translated: "驚き",
              locked: true
            },
            {
              original: "table",
              translated: "テーブル",
              locked: true
            },
            {
              original: "tall",
              translated: "長さ",
              locked: true
            },
            {
              original: "teach",
              translated: "教える",
              locked: true
            },
            {
              original: "team",
              translated: "セット",
              locked: false
            },
            {
              original: "tell",
              translated: "言うこと",
              locked: false
            },
            {
              original: "temperature",
              translated: "熱",
              locked: true
            },
            {
              original: "thank",
              translated: "ありがとう",
              locked: false
            },
            {
              original: "thing",
              translated: "もの",
              locked: true
            },
            {
              original: "think",
              translated: "考える",
              locked: true
            },
            {
              original: "time",
              translated: "時間",
              locked: false
            },
            {
              original: "tired",
              translated: "疲れた",
              locked: true
            },
            {
              original: "train",
              translated: "電車",
              locked: true
            },
            {
              original: "travel",
              translated: "旅行",
              locked: true
            },
            {
              original: "tree",
              translated: "木",
              locked: true
            },
            {
              original: "try",
              translated: "試してみる",
              locked: true
            },
            {
              original: "turn",
              translated: "戻る",
              locked: false
            },
            {
              original: "under",
              translated: "下",
              locked: true
            },
            {
              original: "up",
              translated: "その上",
              locked: true
            },
            {
              original: "use",
              translated: "使用する",
              locked: true
            },
            {
              original: "visit",
              translated: "訪問",
              locked: true
            },
            {
              original: "walk",
              translated: "歩く",
              locked: true
            },
            {
              original: "want",
              translated: "欲しい",
              locked: false
            },
            {
              original: "water",
              translated: "これ",
              locked: false
            },
            {
              original: "weather",
              translated: "天気",
              locked: true
            },
            {
              original: "went",
              translated: "消えた",
              locked: true
            },
            {
              original: "wet",
              translated: "濡れた",
              locked: true
            },
            {
              original: "what",
              translated: "何",
              locked: false
            },
            {
              original: "where",
              translated: "どこ",
              locked: false
            },
            {
              original: "which",
              translated: "どれの",
              locked: false
            },
            {
              original: "white",
              translated: "白",
              locked: false
            },
            {
              original: "who",
              translated: "誰が",
              locked: false
            },
            {
              original: "why",
              translated: "どこから",
              locked: false
            },
            {
              original: "wide",
              translated: "広い",
              locked: true
            },
            {
              original: "wife",
              translated: "妻",
              locked: true
            },
            {
              original: "will",
              translated: "になります",
              locked: false
            },
            {
              original: "wind",
              translated: "風",
              locked: true
            },
            {
              original: "winter",
              translated: "冬",
              locked: true
            },
            {
              original: "woman",
              translated: "女性",
              locked: true
            },
            {
              original: "work",
              translated: "働く",
              locked: false
            },
            {
              original: "worry",
              translated: "心配する",
              locked: true
            },
            {
              original: "write",
              translated: "書く",
              locked: false
            },
            {
              original: "wrong",
              translated: "間違っている",
              locked: true
            },
            {
              original: "year",
              translated: "年",
              locked: false
            },
            {
              original: "yellow",
              translated: "黄色",
              locked: false
            },
            {
              original: "your",
              translated: "あなたの",
              locked: false
            }
          ];
        }
