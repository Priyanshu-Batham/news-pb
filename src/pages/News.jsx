import React from "react";
import CategoryStrip from "../components/CategoryStrip";
import Card from "../components/Card";
import Loader from "../components/Loader";
import BigLoader from "../components/BigLoader";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const News = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // fetchNews(category).then((output) => {
    //   setNews(output);
    // });

    setNews([
      {
        article_id: "8b4a8090ecb5eb152715dfa0e7fc620f",
        title:
          "IPL 2024: लीग स्टेज में कोलकाता बनी जीत की बादशाह, मुंबई ने गंवाए सबसे ज़्यादा मैच; जानें सभी टीमों का हाल",
        link: "https://www.abplive.com/sports/ipl/ipl-2024-kolkata-knight-riders-won-most-match-in-league-stage-and-mumbai-indians-lost-most-match-know-about-all-teams-2693910",
        keywords: ["आईपीएल"],
        creator: ["मोहम्मद अलफैज"],
        video_url: null,
        description:
          "IPL 2024 League Stage KKR To MI: आईपीएल 2024 अपने आखिरी चरण में पहुंच गया है. टूर्नामेंट के लीग मुकाबले खत्म हो गए. आखिरी लीग मैच कोलकाता नाइट राइडर्स और राजस्थान रॉयल्स के बीच खेला जाना था, जो बारिश के चलते बगैर टॉस के ही रद्द हो गया. तो आइए जानते हैं कि लीग स्टेज में कौन सी टीम बादशाह बनी और किस टीम के लिए यह सीज़न सबसे ज़्यादा खराब रहा. टेबल टॉपर रहने वाली कोलकाता नाइट राइडर्स ने लीग स्टेज में सबसे ज़्यादा मुकाबले जीते, जबकि सबसे पहले एलिमिनेट होने वाली मुंबई इंडियंस को लीग स्टेज में सबसे ज्यादा हार का सामना करना पड़ा. कोलकाता ने 14 में से 9 लीग मैचों में जीत दर्ज की और 3 गंवाए, जबकि दो मैच बेनतीजा रहे. टीम के पास 20 प्वाइंट्स रहे. दूसरी तरफ प्वाइंट्स टेबल में सबसे नीचे यानी 10वां पायदान पर रहने वाली मुंबई इंडियंस ने 14 लीग मैचों में 4 में जीत दर्ज की और 10 गंवाए. मुंबई के पास सबसे कम 8 प्वाइंट्स रहे. लीग स्टेज में बाकी टीमों का ऐसा रहा हाल (मुंबई-कोलकाता के अलावा)सनराइजर्स हैदराबाद- प्वाइंट्स टेबल में दूसरे पायदान पर रहने वाली सनराइजर्स हैदराबाद ने 14 लीग मैचों में 8 में जीत दर्ज की और 5 गंवाए, जबकि एक मुकाबला बेनतीजा रहा. टीम के पास 17 प्वाइंट्स रहे, जिसके साथ उन्होंने प्लेऑफ के लिए क्वालीफाई किया.राजस्थान रॉयल्स- प्वाइंट्स टेबल में तीसरे पायदान पर रही राजस्थान रॉयल्स ने 14 लीग मैचों में 8 में जीत दर्ज की और 5 गंवाए, जबकि टीम का एक मुकाबला बेनतीजा रहा. टीम के पास 17 प्वाइंट्स रहे, जिसके साथ उन्होंने प्लेऑफ के लिए क्वालीफाई किया.रॉयल चैलेंजर्स बेंगलुरु- प्वाइंट्स टेबल में चौथे नंबर पर रहने वाली रॉयल चैलेंजर्स बेंगलुरु ने 14 लीग मैचों में 7 जीत और 7 गंवाए. टीम के पास 14 प्वाइंट्स रहे, जिसके साथ उन्होंने प्लेऑफ के लिए क्वालीफाई किया.चेन्नई सुपर किंग्स- प्वाइंट्स टेबल में पांचवे नंबर पर रहकर एलिमिनेट हुई चेन्नई सुपर किंग्स ने लीग स्टेज में 14 में से 7 मैच जीते और 7 गंवाए. टीम के पास 14 प्वाइंट्स रहे. दिल्ली कैपिटल्स- प्वाइंट्स टेबल में छठे नंबर पर रहने वाली दिल्ली कैपिटल्स ने लीग स्टेज में 14 मैच खेले, जिसमें उन्होंने 7 जीते और 7 गंवाए. टीम के पास 14 प्वाइंट्स रहे, जिसके साथ वह एलिमिनेट हुई. लखनऊ सुपर जायंट्स- प्वाइंट्स टेबल में सातवें नंबर पर रहने वाली लखनऊ सुपर जायंट्स ने 14 लीग मैचों में 7 जीते और 7 गंवाए. टीम के पास 14 प्वाइंट्स रहे, जिसके साथ वह एलिमिनेट हुई. गुजरात टाइटंस- प्वाइंट्स टेबल में आठवें नंबर पर रहने वाली गुजरात टाइटंस ने 14 लीग मैचो में 5 जीते और 7 गंवाए, जबकि 2 मुकाबले बेनतीजा रहे. टीम टीम के पास 12 प्वाइंट्स रहे, जिसके साथ वह एलिमिनेट हुई. पंजाब किंग्स- प्वाइंट्स टेबल में नौवें नंबर पर रहने वाली पंजाब किंग्स ने 14 लीग मैचों में 5 जीते और 9 गंवाए. टीम के पास 10 प्वाइंट्स रहे, जिसके साथ वह एलिमिनेट हुई. ये भी पढ़ें...IPL 2024 Playoff: बारिश ने बिगाड़ा राजस्थान रॉयल्स का खेल, क्वालीफायर से एलिमिनेटर में पहुंची; होगा बड़ा नुकसान",
        content: "ONLY AVAILABLE IN PAID PLANS",
        pubDate: "2024-05-20 02:07:38",
        image_url:
          "https://feeds.abplive.com/onecms/images/uploaded-images/2024/05/20/045204476f10b73e853ed7fcb50de3f41716170585729582_original.jpg",
        source_id: "abplive",
        source_priority: 10959,
        source_url: "http://abplive.com",
        source_icon: "https://i.bytvi.com/domain_icons/abplive.jpg",
        language: "hindi",
        country: ["india"],
        category: ["sports"],
        ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      },
      {
        article_id: "4135154be39bab24834edd5981e8c3f2",
        title:
          "Kaiserganj Loksabha Seat: कैसरगंज में वोटिंग शुरू, बीजेपी के करणभूषण और सपा से भगतराम के बीच मुकाबला",
        link: "https://zeenews.india.com/hindi/india/up-uttarakhand/lok-sabha-chunav-2024/kaiserganj-loksabha-constituency-election-voting-updates-opposition-parties-key-candidates-voting-percentage/2255200",
        keywords: null,
        creator: ["Zee News Hindi"],
        video_url: null,
        description:
          "Kaiserganj Loksabha Seat Voting: कैसरगंज लोकसभा सीट पर 20 मई यानी आज सुबह 7 बजे से मतदान शुरू हो चुका है. बीजेपी से करण भूषण सिंह, समाजवादी पार्टी से भगत राम यादव और बसपा से नरेंद्र पांडेय चुनाव लड़ रहे हैं.",
        content: "ONLY AVAILABLE IN PAID PLANS",
        pubDate: "2024-05-20 02:07:32",
        image_url:
          "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2024/05/20/2879387-kaiserganj-loksabha-1.png?im=FitAndFill=(1200,900)",
        source_id: "zeenews",
        source_priority: 5319,
        source_url: "http://zeenews.india.com",
        source_icon: "https://i.bytvi.com/domain_icons/zeenews.png",
        language: "hindi",
        country: ["india"],
        category: ["top"],
        ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      },
      {
        article_id: "e708da75a89af897e074986033d3e0fb",
        title:
          "छत्तीसगढ़ में बादल छाए रहने के कारण तापमान कम, उमस से बढ़ी बेचैनी",
        link: "https://hindi.news18.com/news/chhattisgarh/due-to-the-presence-of-clouds-in-chhattisgarh-temperature-will-decrease-you-will-be-worried-about-the-heat-8336929.html",
        keywords: ["छत्तीसगढ़"],
        creator: ["News18 Hindi"],
        video_url: null,
        description:
          "Chhattisgarh Weather Update: मौसम विभाग का कहना है कि आज सोमवार को भी सुबह से आसमान पर बादल छाए रहेंगे और शाम या रात को गरज-चमक के साथ हल्की बारिश हो सकती है.",
        content: "ONLY AVAILABLE IN PAID PLANS",
        pubDate: "2024-05-20 02:07:25",
        image_url:
          "https://images.news18.com/ibnkhabar/uploads/2024/05/HYP_4444527_Ra_Ku_3427_Rai_1-3x2.jpg",
        source_id: "hindinews18",
        source_priority: 6509,
        source_url: "https://hindi.news18.com",
        source_icon: null,
        language: "hindi",
        country: ["india"],
        category: ["top"],
        ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      },
      {
        article_id: "c829d5db949208bd9f63230476601148",
        title:
          "'हेलो मैं SP चारू बोल रही हूं' महिला कांस्टेबल को आया फोन, घबराते हुए बोली...",
        link: "https://hindi.news18.com/news/uttar-pradesh/auraiya-fraud-with-lady-police-constable-on-a-phone-call-boy-become-sp-charu-nigam-with-voice-over-in-auraiya-dibiyapur-police-station-8336880.html",
        keywords: ["उत्तर प्रदेश"],
        creator: ["News18 Hindi"],
        video_url: null,
        description:
          "Auraiya Latest News: यूपी के औरैया में दिबियापुर थाने में तैनात महिला कॉन्स्टेबल के पास एक कॉल आई. दूसरी तरफ से आवाज आई कि मैं एसपी चारू निगम बात कर रही हूं. आप कई दिनों ने ड्यूटी पर नहीं आ रही हैं. यह सब कहकर महिला कॉन्स्टेबल को सस्पेंड करने की धमकी तक दे डाली. इसके बाद जो हुआ... आइए विस्तार से जानते हैं पूरा मामला...",
        content: "ONLY AVAILABLE IN PAID PLANS",
        pubDate: "2024-05-20 02:07:24",
        image_url:
          "https://images.news18.com/ibnkhabar/uploads/2024/05/lady-police-2024-05-11f4d9fb206222357d58a99b770f7dd9-3x2.jpg",
        source_id: "hindinews18",
        source_priority: 6509,
        source_url: "https://hindi.news18.com",
        source_icon: null,
        language: "hindi",
        country: ["india"],
        category: ["top"],
        ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      },
      {
        article_id: "457a54c42cce0af545b216cd30df666e",
        title:
          "बेतिया, मोतिहारी, मधुबनी में बारिश..मधेपुरा में छाए बादल:19 जिलों में 23 और 24 मई को बारिश-वज्रपात की संभावना; 45 डिग्री के करीब पहुंचा बक्सर",
        link: "https://www.bhaskar.com/local/bihar/patna/news/there-may-be-rain-in-19-districts-till-23-24-may-133047868.html",
        keywords: null,
        creator: null,
        video_url: null,
        description:
          "बिहार के मौसम में लगातार बदलाव देखने को मिल रहा है। कभी गर्मी तो कभी बारिश की संभावना बनी हुई है। बेतिया में सुबह तेज हवा के साथ झमाझम बारिश हुई, जिससे लोगों को यहां गर्मी से राहत मिली। इसके अलावा मोतिहारी में तेज बारिश हो रही है। वहीं, मुजफ्फरपुर, मधुबनी में बूंदाबांदी शुरू हो गई है। मधेपुरा में आसमान में काले बाद छाए हुए हैं। वहीं, राजधानी पटना में तेज पूरवा हवा से लोगों को गर्मी से हल्की राहत मिली है। मौसम विभाग ने आज प्रदेश के अधिकतर जिलों गर्म दिन रहने के साथ हल्की बूंदाबांदी की संभावनाएं जताई है। दक्षिण बिहार में भीषण गर्मी का दौर जारी रहेगा। हालांकि, उत्तर में हुई बारिश का असर दक्षिण बिहार के कुछ जिलों में देखने को मिल सकता है। मौसम विभाग के मुताबिक, 23 और 24 मई को 19 जिले में बारिश हो सकती है। विभाग के मुताबिक बंगाल की खाड़ी की तरफ से नमी युक्त हवा का आना जारी है। सतह पर उत्तर-पश्चिम से हवा भी आ रही है। इन सभी वजहों से मौसम में हलचल देखी जा रही है। रविवार को बक्सर का अधिकतम तापमान प्रदेश में सबसे अधिक 44.9 और औरंगाबाद में 44.3 डिग्री सेल्सियस दर्ज किया गया है। इन जिलों में बारिश की संभावना मौसम विभाग के अनुसार, उत्तर बिहार और सीमांचल के कटिहार, दरभंगा, समस्तीपुर, पूर्वी चंपारण, पश्चिमी चंपारण, गोपालगंज, सीवान, सारण, किशनगंज, पूर्णिया, अररिया, सहरसा, सुपौल, मधुबनी, वैशाली, सीतामढ़ी, शिवहर समेत 19 जिलों में गरज के साथ बारिश की चेतावनी दी गई है। बिहार में समय से दस्तक देगा मानसून मौसम विभाग की माने तो फिलहाल मानसून ने अंडमान निकोबार में दस्तक दे दिया है। सबकुछ सही रहा तो बिहार में 15 जून तक मानसून पहुंच जाएगा। हालांकि उससे पहले भी बंगाल की खाड़ी में बनते दबाव के चलते उत्तर बिहार में बारिश की प्रबल संभावना बन रही है। उससे पहले भी मानसून दस्तक दे सकता है।",
        content: "ONLY AVAILABLE IN PAID PLANS",
        pubDate: "2024-05-20 02:07:16",
        image_url:
          "https://images.bhaskarassets.com/thumb/1000x1000/web2images/521/2024/05/20/comp-157_1716175907.gif",
        source_id: "bhaskar_hindi",
        source_priority: 34179,
        source_url: "https://www.bhaskar.com",
        source_icon: null,
        language: "hindi",
        country: ["india"],
        category: ["top"],
        ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      },
      {
        article_id: "8d8b0f476f07c2958dba9b7cb3926cd4",
        title:
          "रात में दूध में भिगो दें ये एक चीज और सुबह खाली पेट कर लें सेवन, मसल्स बढ़ाने में है मददगार",
        link: "https://ndtv.in/food/soak-khajoor-with-milk-khajur-wala-doodh-pine-ke-fayde-how-to-uses-of-dates-for-muscles-gain-5681655#publisher=newsstand",
        keywords: null,
        creator: null,
        video_url: null,
        description:
          "Muscles Gain Drink: मसल्स को बढ़ाना चाहते हैं तो रात में दूध में 3-4 खजूर को भिगोकर रख दें. फिर अगली सुबह इनका सेवन कर लें.",
        content: "ONLY AVAILABLE IN PAID PLANS",
        pubDate: "2024-05-20 02:07:03",
        image_url:
          "https://c.ndtvimg.com/2023-09/q0r83q8g_milk_625x300_28_September_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738",
        source_id: "ndtv",
        source_priority: 1204,
        source_url: "http://www.ndtv.com",
        source_icon: "https://i.bytvi.com/domain_icons/ndtv.png",
        language: "hindi",
        country: ["india"],
        category: ["top"],
        ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      },
      {
        article_id: "077281c4e8f035e988e1d1a145414f70",
        title:
          "खाने से पहले मशरुम धूप में रखने से विटामिन D जाता है बढ़? जानिए इस बात में कितनी है सच्चाई",
        link: "https://ndtv.in/lifestyle/mushroom-sunlight-mein-rakhne-se-vitamin-d-badh-jayega-exposing-mushrooms-to-sunlight-before-eating-increase-vitamin-d-level-5701840#publisher=newsstand",
        keywords: null,
        creator: null,
        video_url: null,
        description:
          "Vitamin d deficiency : मशरूम को लेकर एक बात कही जाती है कि, इसे सूर्य की रोशनी में रखने से विटामिन 'डी' की मात्रा बढ़ जाती है. क्या सच में ऐसा है?",
        content: "ONLY AVAILABLE IN PAID PLANS",
        pubDate: "2024-05-20 02:06:52",
        image_url:
          "https://c.ndtvimg.com/2023-07/1tojdq7_mushrooms_625x300_12_July_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738",
        source_id: "ndtv",
        source_priority: 1204,
        source_url: "http://www.ndtv.com",
        source_icon: "https://i.bytvi.com/domain_icons/ndtv.png",
        language: "hindi",
        country: ["india"],
        category: ["top"],
        ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      },
      {
        article_id: "1dfb3ed559e28a67d7514dbf00535cb3",
        title:
          "अगर सुबह उठते ही सपने में दिखे ये 5 चीजें तो बदल सकती है आपकी किस्मत",
        link: "https://newsindialive.in/if-you-see-these-5-things-in-your-dreams-as-soon-as-you-wake-up-in-the-morning-your-luck-can-change/",
        keywords: ["धर्म"],
        creator: ["neha maurya"],
        video_url: null,
        description:
          "जरूरी नहीं कि सपने हमेशा सच हों, लेकिन कुछ सपने आपके भविष्य का संकेत भी दे सकते हैं। किसी भी सपने का अर्थ उसे देखने के समय पर भी निर्भर करता है। हम अक्सर सपनों को ऐसी घटनाओं के रूप में सोचते हैं जो हमारे लिए बहुत महत्वपूर्ण नहीं हैं और जागते ही हम उनके ...",
        content: "ONLY AVAILABLE IN PAID PLANS",
        pubDate: "2024-05-20 02:06:36",
        image_url:
          "https://newsindialive.in/wp-content/uploads/2024/05/image-2024-05-19T233624.504.jpg",
        source_id: "newsindialive",
        source_priority: 12366108,
        source_url: "https://newsindialive.in",
        source_icon: "https://i.bytvi.com/domain_icons/newsindialive.jpg",
        language: "hindi",
        country: ["india"],
        category: ["top"],
        ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      },
      {
        article_id: "2fbe0b7d20f3a2fa8ed424be9a76bf97",
        title:
          "सुमोना करेंगी ये TV शो, बताया क्यों नहीं किया 'द ग्रेट इंडियन कपिल शो' में काम",
        link: "https://hindi.news18.com/news/entertainment/tv-sumona-chakravarti-doing-networking-told-why-she-did-not-work-netflix-the-great-indian-kapil-show-will-do-this-tv-show-8336923.html",
        keywords: ["मनोरंजन"],
        creator: ["News18 Hindi"],
        video_url: null,
        description:
          "सुमोना चक्रवर्ती ने कपिल शर्मा के साथ कॉमेडी सर्कस से लेकर द कपिल शर्मा शो तक साथ काम किया. लेकिन वह अब नेटफ्लिक्स पर आ रहे 'द ग्रेट इंडियन कपिल शो' में नहीं हैं. इस पर उन्होंने प्रतिक्रिया दी है.",
        content: "ONLY AVAILABLE IN PAID PLANS",
        pubDate: "2024-05-20 02:06:08",
        image_url:
          "https://images.news18.com/ibnkhabar/uploads/2024/05/Sumona-Chakravarty-Kapil-sharma-Show-2024-05-4ce6cdf8a6f79d457149cbaf5574e002-3x2.jpg",
        source_id: "hindinews18",
        source_priority: 6509,
        source_url: "https://hindi.news18.com",
        source_icon: null,
        language: "hindi",
        country: ["india"],
        category: ["entertainment"],
        ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      },
      {
        article_id: "16b5f9796a56ad049f59d946410c527d",
        title:
          "ईरानी राष्ट्रपति के हेलीकॉप्टर दुर्घटना के बाद भू-राजनीतिक उथल-पुथल, धातु रैली के बीच सोने की कीमतें रिकॉर्ड ऊंचाई पर पहुंच गईं",
        link: "https://hi.investing.com/news/commodities-news/article-202455",
        keywords: null,
        creator: ["Investing.com"],
        video_url: null,
        description: null,
        content: "ONLY AVAILABLE IN PAID PLANS",
        pubDate: "2024-05-20 02:05:59",
        image_url: "https://i-invdn-com.investing.com/news/LYNXNPEAAH0G6_L.jpg",
        source_id: "investing_hi",
        source_priority: 1143,
        source_url: "https://hi.investing.com",
        source_icon: null,
        language: "hindi",
        country: ["india"],
        category: ["business"],
        ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      },
    ]);

    setTimeout(()=>{
      setIsLoading(false);
    }, 1000)
  }, [category]);

  async function fetchNews() {
    const apiKey = `pub_44558e2b48b708b113a3d00c7feec667b4e24`;

    // let url = `https://newsdata.io/api/1/latest?size=8&language=en&apikey=${apiKey}${
    //   category !== "" ? `&category=${category}` : ""
    // }`;

    let url = "https://randomuser.me/api/";
    let req = new Request(url);
    let res = await fetch(req);
    let data = await res.json();
    return data.results;
  }

  async function fetchMoreNews() {
    let output = await fetchNews(category);
    setNews(news.concat(output));
  }

  return (
    <div className="bg-secondary">
      <CategoryStrip
        fetchNews={fetchNews}
        category={category}
        setCategory={setCategory}
      />
      <div className="container bg-dark text-light">
        <h1 className="text-center py-5">This is a News Page</h1>
        {isLoading && <BigLoader />}
        {!isLoading && (
          <InfiniteScroll
            dataLength={news.length}
            next={fetchMoreNews}
            loader={<Loader />}
            hasMore={true}
            className="container d-flex flex-wrap justify-content-around align-items-center"
          >
            {news.map((data, index) => {
              return (
                <Card
                  key={index}
                  image_url={data.image_url}
                  title={data.title}
                  link={data.link}
                />
              );
            })}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default News;
