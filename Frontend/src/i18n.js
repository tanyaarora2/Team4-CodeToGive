import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    en: {
      translation: {
        lang: "Language",
        login: "Login",
        cb: "Children Benefitted",
        cuwf: "Children United with families",
        ca: "Children Adopted",
        yms: "Yearly: Meal Served",
        yhc: "Yearly: Hours of Care",
        yhs: "Yearly: Hours of Schooling",
        yht: "Yearly: Hours of Therapy",
        ymi: "Yearly: Medical Tests & Immunization",
        yhcud: "Yearly: Health Checkup",
        sw: "Social Worker",
        cm: "Case Manager",
      },
    },
    hi: {
      translation: {
        lang: "भाषा",
        login: "लॉगिन",
        cb: "बच्चे लाभान्वित",
        cuwf: "बच्चे परिवारों के साथ संयुक्त",
        ca: "दत्तक बच्चे",
        yms: "वार्षिक: भोजन परोसा गया",
        yhc: "वार्षिक: देखभाल के घंटे",
        yhs: "वार्षिक: स्कूली शिक्षा के घंटे",
        yht: "वार्षिक: उपचार के घंटे",
        ymi: "वार्षिक: मेडिकल परीक्षण और टीकाकरण",
        yhcud: "वार्षिक: स्वास्थ्य जांच",
        sw: "समाज सेवक",
        cm: "प्रकरण प्रबंधक",
      },
    },
    mh: {
      translation: {
        lang: "भाषा",
        login: "लॉग इन",
        cb: "मुलांना फायदा झाला",
        cuwf: "मुले कुटुंबांसह युनायटेड",
        ca: "दत्तक मुले",
        yms: "वार्षिक: जेवण दिले",
        yhc: "वार्षिक: काळजीचे तास",
        yhs: "वार्षिक: शाळेचे तास",
        yht: "वार्षिक: थेरपीचे तास",
        ymi: "वार्षिक: माध्यमिक चाचण्या आणि लसीकरण",
        yhcud: "वार्षिक: आरोग्य तपासणी",
        sw: "सामाजिक कार्यकर्ता",
        cm: "प्रकरण व्यवस्थापक",
      },
    },
  },
});

export default i18n;
