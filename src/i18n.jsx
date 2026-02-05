import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_contact: "Contact",
      hire_me: "Hire Me",

      // Hero Section
      hero_welcome: "WELCOME TO MY WORLD",
      hero_hello: "Hi, I'm",
      hero_name_only: "Shiful Islam",
      hero_passionate: "A Passionate",
      hero_role_frontend: "Frontend Developer",
      hero_role_mern: "MERN Stack Developer",
      hero_role_fullstack: "Full Stack Developer",
      hero_desc:
        "Designing and developing robust, full-stack solutions with a focus on MERN stack and Next.js. I turn complex problems into elegant, interactive web experiences.",
      hero_talk: "LET'S TALK",
      hero_cv: "Download CV",

      // About Section
      about_title: "About Me",
      about_subtitle: "Crafting digital experiences with code and creativity.",
      about_description:
        "I am a dedicated MERN Stack Developer passionate about building scalable web applications. With expertise in MongoDB, Express.js, React, and Node.js, I bridge the gap between complex backend logic and intuitive frontend design. Additionally, my SEO expertise ensures applications are not only functional but also highly visible. I focus on writing clean, maintainable code to deliver seamless digital experiences. Let's collaborate to turn your innovative ideas into reality through quality development and creative problem-solving.",
      about_exp_title: "Years Experience",
      about_project_title: "Projects Done",
      about_client_title: "Happy Clients",

      // Skills English (en)
      skills_title: "My Expertise",
      skills_subtitle: "Technologies I Use",

      // Services English (en)
      service_header: "Expertise",
      service_title: "My Specialized Services",
      ser_front_title: "FrontEnd Development",
      ser_front_desc:
        "I create visually stunning and highly interactive user interfaces. I focus on responsive design and smooth animations to provide the best user experience.",
      ser_mern_title: "MERN Stack Development",
      ser_mern_desc:
        "Providing full-stack solutions with the MERN power. From architecting the database to building the front-end, I handle the entire development lifecycle.",
      ser_full_title: "Full Stack Development",
      ser_full_desc:
        "I bridge the gap between frontend and backend to deliver complete web applications. My focus is on seamless data flow and high performance.",

      // Projects English (en)
      proj_header: "Recent Projects",
      proj_title_main: "Latest",
      proj_title_sub: "Masterpieces",
      cat_all: "All",
      cat_frontend: "Frontend",
      cat_mern: "MERN Stack",
      cat_fullstack: "Full Stack",
      cat_ecommerce: "E-Commerce",
      live_demo: "Live Demo",

      // Contact English (en)
      contact_header: "Get In Touch",
      contact_title_1: "Book",
      contact_title_2: "Now",
      contact_title_3: " & Let's Build Something!",
      contact_email: "Email Me",
      contact_whatsapp: "WhatsApp Me",
      contact_location: "Location",
      form_name: "Your Name",
      form_email: "Email Address",
      form_message: "Message",
      form_placeholder_name: "Enter your name",
      form_placeholder_email: "Email address",
      form_placeholder_msg: "Tell me about your project",
      form_button: "Send Message",
      form_sending: "Sending...",
      alert_success: "Success!",
      alert_success_msg: "Thank you, Shiful will contact you soon.",
      alert_error: "Error!",
      alert_error_msg: "Something went wrong. Please try again.",

      // Footer English (en)
      footer_bio:
        "Modern MERN Stack Developer specializing in building premium user experiences and robust web solutions.",
      footer_services: "Services",
      footer_company: "Company",
      footer_hire_title: "Start a project?",
      footer_hire_desc:
        "I’m available for freelance projects and full-time positions.",
      footer_hire_btn: "Hire Me Now",
      footer_all_rights: "All Rights Reserved.",
      footer_developed: "Developed with",
      footer_by: "by",
    },
  },

  bn: {
    translation: {
      // Navbar
      nav_home: "হোম",
      nav_about: "সম্পর্কে",
      nav_skills: "দক্ষতা",
      nav_services: "সার্ভিস",
      nav_projects: "প্রজেক্ট",
      nav_contact: "যোগাযোগ",
      hire_me: "হায়ার মি",

      // Hero Section
      hero_welcome: "আমার পৃথিবীতে স্বাগতম",
      hero_hello: "হাই, আমি",
      hero_name_only: "সাইফুল ইসলাম",
      hero_passionate: "একজন নিবেদিত",
      hero_role_frontend: "ফ্রন্টেন্ড ডেভেলপার",
      hero_role_mern: "মার্ন স্ট্যাক ডেভেলপার",
      hero_role_fullstack: "ফুল স্ট্যাক ডেভেলপার",
      hero_desc:
        "মার্ন স্ট্যাক এবং নেক্সট জেএস-এর উপর ভিত্তি করে শক্তিশালী ফুল-স্ট্যাক সমাধান ডিজাইন এবং ডেভেলপ করি। আমি জটিল সমস্যাগুলোকে সুন্দর এবং ইন্টারেক্টিভ ওয়েব অভিজ্ঞতায় রূপান্তর করি।",
      hero_talk: "কথা বলা যাক",
      hero_cv: "সিভি ডাউনলোড",

      // About Section
      about_title: "আমার সম্পর্কে",
      about_subtitle: "কোড এবং সৃজনশীলতা দিয়ে ডিজিটাল অভিজ্ঞতা তৈরি করি।",
      about_description:
        "আমি একজন নিবেদিতপ্রাণ মার্ন (MERN) স্ট্যাক ডেভেলপার, যা স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরিতে দক্ষ। মঙ্গোডিবি, এক্সপ্রেস, রিঅ্যাক্ট এবং নোড জেএস-এর সমন্বয়ে আমি জটিল ব্যাকএন্ড লজিক এবং চমৎকার ফ্রন্টেন্ড ডিজাইনের মধ্যে সমন্বয় করি। পাশাপাশি আমার এসইও (SEO) দক্ষতা ওয়েবসাইটকে টার্গেট অডিয়েন্সের কাছে পৌঁছাতে সাহায্য করে। আমি সবসময় ক্লিন কোড এবং নিরবচ্ছিন্ন ডিজিটাল অভিজ্ঞতা প্রদানের ওপর গুরুত্ব দেই। আপনার উদ্ভাবনী আইডিয়াগুলোকে বাস্তবে রূপান্তর করতে আমি প্রস্তুত।",
      about_exp_title: "বছরের অভিজ্ঞতা",
      about_project_title: "সম্পন্ন প্রজেক্ট",
      about_client_title: "সন্তুষ্ট ক্লায়েন্ট",

      // Skills Bengali (bn)
      skills_title: "আমার অভিজ্ঞতা",
      skills_subtitle: "যে প্রযুক্তিগুলো আমি ব্যবহার করি",

      // Servicer Bengali (bn)
      service_header: "দক্ষতা",
      service_title: "আমার বিশেষ সেবাগুলো",
      ser_front_title: "ফ্রন্টেন্ড ডেভেলপমেন্ট",
      ser_front_desc:
        "আমি দৃষ্টিনন্দন এবং ইন্টারেক্টিভ ইউজার ইন্টারফেস তৈরি করি। সেরা ইউজার এক্সপেরিয়েন্স নিশ্চিত করতে আমি রেসপনসিভ ডিজাইন এবং অ্যানিমেশনের ওপর গুরুত্ব দেই।",
      ser_mern_title: "মার্ন স্ট্যাক ডেভেলপমেন্ট",
      ser_mern_desc:
        "মার্ন স্ট্যাকের মাধ্যমে ফুল-স্ট্যাক সমাধান প্রদান করি। ডাটাবেস আর্কিটেকচার থেকে ফ্রন্টেন্ড তৈরি—সবকিছুই আমি দক্ষতার সাথে পরিচালনা করি।",
      ser_full_title: "ফুল স্ট্যাক ডেভেলপমেন্ট",
      ser_full_desc:
        "সম্পূর্ণ ওয়েব অ্যাপ্লিকেশন ডেলিভারি করতে আমি ফ্রন্টেন্ড এবং ব্যাকএন্ডের মধ্যে সমন্বয় করি। ডেটা ফ্লো এবং হাই পারফরম্যান্সই আমার মূল লক্ষ্য।",

      // Projects Bengali (bn)
      proj_header: "সাম্প্রতিক প্রজেক্ট",
      proj_title_main: "অসাধারণ কিছু",
      proj_title_sub: "কাজ",
      cat_all: "সব",
      cat_frontend: "ফ্রন্টেন্ড",
      cat_mern: "মার্ন স্ট্যাক",
      cat_fullstack: "ফুল স্ট্যাক",
      cat_ecommerce: "ই-কমার্স",
      live_demo: "লাইভ ডেমো",

      // Bengali (bn)
      contact_header: "যোগাযোগ করুন",
      contact_title_1: "বুক করুন",
      contact_title_2: "এখনই",
      contact_title_3: " এবং নতুন কিছু তৈরি করি!",
      contact_email: "ইমেইল করুন",
      contact_whatsapp: "হোয়াটসঅ্যাপ",
      contact_location: "ঠিকানা",
      form_name: "আপনার নাম",
      form_email: "ইমেইল ঠিকানা",
      form_message: "বার্তা",
      form_placeholder_name: "আপনার নাম লিখুন",
      form_placeholder_email: "আপনার ইমেইল লিখুন",
      form_placeholder_msg: "প্রজেক্ট সম্পর্কে বিস্তারিত বলুন",
      form_button: "বার্তা পাঠান",
      form_sending: "পাঠানো হচ্ছে...",
      alert_success: "সফল হয়েছে!",
      alert_success_msg: "ধন্যবাদ, শিফুল আপনার সাথে শীঘ্রই যোগাযোগ করবে।",
      alert_error: "দুঃখিত!",
      alert_error_msg: "কিছু একটা ভুল হয়েছে। আবার চেষ্টা করুন।",

      // Footer Bengali (bn)
      footer_bio:
        "আধুনিক মার্ন স্ট্যাক ডেভেলপার হিসেবে আমি প্রিমিয়াম ইউজার এক্সপেরিয়েন্স এবং শক্তিশালী ওয়েব সলিউশন তৈরিতে পারদর্শী।",
      footer_services: "সেবাসমূহ",
      footer_company: "কোম্পানি",
      footer_hire_title: "প্রজেক্ট শুরু করবেন?",
      footer_hire_desc:
        "আমি ফ্রিল্যান্স প্রজেক্ট এবং ফুল-টাইম কাজের জন্য উপলব্ধ আছি।",
      footer_hire_btn: "হায়ার করুন",
      footer_all_rights: "সর্বস্বত্ব সংরক্ষিত।",
      footer_developed: "তৈরি করা হয়েছে",
      footer_by: "দ্বারা",
    },
  },

  ar: {
    translation: {
      // Navbar
      nav_home: "الرئيسية",
      nav_about: "عني",
      nav_skills: "مهاراتي",
      nav_services: "خدماتي",
      nav_projects: "مشاريعي",
      nav_contact: "اتصل بنا",
      hire_me: "وظفني",

      // Hero Section
      hero_welcome: "مرحباً بك في عالمي",
      hero_hello: "أنا",
      hero_name_only: "شيفول إسلام",
      hero_passionate: "شخص شغوف",
      hero_role_frontend: "مطور واجهة أمامية",
      hero_role_mern: "مطور MERN Stack",
      hero_role_fullstack: "مطور Full Stack",
      hero_desc:
        "تصميم وتطوير حلول برمجية قوية باستخدام MERN stack و Next.js. أقوم بتحويل المشكلات المعقدة إلى تجارب ويب أنيقة وتفاعلية.",
      hero_talk: "دعونا نتحدث",
      hero_cv: "سيرة ذاتية",

      // About Section
      about_title: "عني",
      about_subtitle: "صياغة التجارب الرقمية بالبرمجيات والإبداع.",
      about_description:
        "أنا مطور MERN Stack مخصص وشغوف ببناء تطبيقات ويب قابلة للتوسع. مع الخبرة في MongoDB و Express و React و Node.js، أقوم بسد الفجوة بين منطق الخلفية المعقد وتصميم الواجهة الأمامية البديهي. بالإضافة إلى ذلك، تضمن خبرتي في سيو (SEO) أن تكون التطبيقات وظيفية ومرئية للغاية. أركز على كتابة كود نظيف وقابل للصيانة لتقديم تجارب رقمية سلسة. دعونا نتعاون لتحويل أفكاركم المبتكرة إلى حقيقة من خلال التطوير عالي الجودة.",
      about_exp_title: "سنوات الخبرة",
      about_project_title: "مشاريع مكتملة",
      about_client_title: "عملاء سعداء",

      // Skills Arabic (ar)
      skills_title: "خبراتي",
      skills_subtitle: "التقنيات التي أستخدمها",

      // Services Arabic (ar)
      service_header: "خبراتي",
      service_title: "خدماتي المتخصصة",
      ser_front_title: "تطوير الواجهة الأمامية",
      ser_front_desc:
        "أقوم بإنشاء واجهات مستخدم مذهلة بصريًا وتفاعلية للغاية. أركز على التصميم المتجاوب والرسوم المتحركة السلسة لتوفير أفضل تجربة للمستخدم.",
      ser_mern_title: "تطوير MERN Stack",
      ser_mern_desc:
        "تقديم حلول شاملة (Full-stack) باستخدام قوة MERN. من هندسة قواعد البيانات إلى بناء الواجهة الأمامية، أتولى دورة التطوير بالكامل.",
      ser_full_title: "تطوير الويب المتكامل",
      ser_full_desc:
        "أقوم بسد الفجوة بين الواجهة الأمامية والخلفية لتقديم تطبيقات ويب كاملة. تركيزي ينصب على تدفق البيانات بسلاسة والأداء العالي.",

      // Projects Arabic (ar)
      proj_header: "المشاريع الأخيرة",
      proj_title_main: "أحدث",
      proj_title_sub: "الإبداعات",
      cat_all: "الكل",
      cat_frontend: "واجهة أمامية",
      cat_mern: "مرن ستاك",
      cat_fullstack: "فول ستاك",
      cat_ecommerce: "متجر إلكتروني",
      live_demo: "عرض مباشر",

      // Contact Arabic (ar)
      contact_header: "تواصل معي",
      contact_title_1: "احجز",
      contact_title_2: "الآن",
      contact_title_3: " ولنبنِ شيئاً عظيماً!",
      contact_email: "راسلني",
      contact_whatsapp: "واتساب",
      contact_location: "الموقع",
      form_name: "اسمك",
      form_email: "البريد الإلكتروني",
      form_message: "رسالتك",
      form_placeholder_name: "أدخل اسمك",
      form_placeholder_email: "عنوان البريد الإلكتروني",
      form_placeholder_msg: "أخبرني عن مشروعك",
      form_button: "إرسال الرسالة",
      form_sending: "جاري الإرسال...",
      alert_success: "نجاح!",
      alert_success_msg: "شكراً لك، سيتواصل معك شيفول قريباً.",
      alert_error: "خطأ!",
      alert_error_msg: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",

      // Footer Arabic (ar)
      footer_bio:
        "مطور MERN Stack عصري متخصص في بناء تجارب مستخدم متميزة وحلول ويب قوية.",
      footer_services: "الخدمات",
      footer_company: "الشركة",
      footer_hire_title: "هل لديك مشروع؟",
      footer_hire_desc: "أنا متاح للمشاريع الحرة والوظائف بدوام كامل.",
      footer_hire_btn: "وظفني الآن",
      footer_all_rights: "جميع الحقوق محفوظة.",
      footer_developed: "تم التطوير بـ",
      footer_by: "بواسطة",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
