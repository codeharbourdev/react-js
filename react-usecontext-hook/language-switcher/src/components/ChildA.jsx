import React, { useContext } from 'react'
import sun from '../assets/sun.jpg'; 
import moon from '../assets/moon.jpg'; 
import './ChildA.css'
import { LanguageSwitcher } from '../App';
import { ThemeSwitcher } from '../App';


const translation = {
    en: {
        paragraph: "This is a simple paragraph in English. You can switch the language using the button below."
    },

    hindi: {
        paragraph: "यह एक साधारण अनुच्छेद है हिंदी में। आप नीचे दिए गए बटन से भाषा बदल सकते हैं।"
    },


    bengali: {
        paragraph: "এটি ইংরেজিতে একটি সাধারণ অনুচ্ছেদ। আপনি নিচের বোতাম ব্যবহার করে ভাষা পরিবর্তন করতে পারেন।"
    },


    gujarati: {
        paragraph: "આ અંગ્રેજીમાં એક સરળ પેરાગ્રાફ છે. તમે નીચેના બટનથી ભાષા બદલી શકો છો."
    },


    marathi: {
        paragraph: "हा इंग्रजीतील एक साधा परिच्छेद आहे. तुम्ही खालील बटण वापरून भाषा बदलू शकता."
    },


    tamil: {
        paragraph: "இது ஆங்கிலத்தில் ஒரு எளிய பகுதி. நீங்கள் கீழே உள்ள பொத்தானை ,பயன்படுத்தி மொழியை மாற்றலாம்."
    },


    telugu: {
        paragraph: "ఇది ఇంగ్లిష్‌లోని సాధారణ పేరాగ్రాఫ్. మీరు దిగువ బటన్‌ని ఉపయోగించి భాషను మార్చవచ్చు."
    },


    kannada: {
        paragraph: "ಇದು ಇಂಗ್ಲಿಷ್‌ನ ಸರಳ ಪ್ಯಾರಾಗ್ರಾಫ್. ನೀವು ಕೆಳಗಿನ ಬಟನ್ ಬಳಸಿಕೊಂಡು ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಬಹುದು."
    },


    punjabi: {
        paragraph: "ਇਹ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਇੱਕ ਸਧਾਰਣ ਪੈਰਾਗ੍ਰਾਫ ਹੈ। ਤੁਸੀਂ ਹੇਠਾਂ ਦਿੱਤੇ ਬਟਨ ਨਾਲ ਭਾਸ਼ਾ ਬਦਲ ਸਕਦੇ ਹੋ।"
    },


    urdu: {
        paragraph: "یہ انگریزی میں ایک سادہ پیراگراف ہے۔ آپ نیچے دیے گئے بٹن سے زبان تبدیل کر سکتے ہیں۔"
    }
}

const languages = [
  { code: "en", label: "En - English" },
  { code: "hindi", label: "Hindi - हिंदी" },
  { code: "bengali", label: "Bengali - বাংলা" },
  { code: "gujarati", label: "Gujarati - ગુજરાતી" },
  { code: "marathi", label: "Marathi - मराठी" },
  { code: "tamil", label: "Tamil - தமிழ்" },
  { code: "telugu", label: "Telugu - తెలుగు" },
  { code: "kannada", label: "Kannada - ಕನ್ನಡ" },
  { code: "punjabi", label: "Punjabi - ਪੰਜਾਬੀ" },
  { code: "urdu", label: "Urdu - اردو" },
];


const ChildA = () => {
    const {language, setLanguage} = useContext(LanguageSwitcher);
    const {theme, setTheme} = useContext(ThemeSwitcher);
    function toggleTheme() {
        if(theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light');
        }
    }

  return (
    <div id='child'>
        <nav>
            <h1>Language Switcher 🧠</h1>
            <button>
                <img src={theme === 'light' ? sun : moon} alt="sun" 
                onClick={toggleTheme} />
            </button>
        </nav>
        <main>
            <p>{translation[language].paragraph}</p>
        </main>
        <footer>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            {languages.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))}
            </select>
        </footer>

    </div>
  )
}

export default ChildA
