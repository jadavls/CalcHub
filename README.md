# 🚀 CalcHub - tecnical woker Calculatos

**CalcHub** એ એક પ્રોફેશનલ અને યુઝર-ફ્રેન્ડલી વેબ એપ્લિકેશન છે, જે ખાસ કરીને પ્રોડક્શન ફ્લોર પર કામ કરતા સુપરવાઈઝર અને ઓપરેટર્સ માટે બનાવવામાં આવી છે. આ એપ જટિલ ગણતરીઓને સરળ અને ઝડપી બનાવે છે.

## ✨ મુખ્ય ફિચર્સ (Features)

*   **Shift Calculator:** શિફ્ટના કલાકો અને મિનિટોની સચોટ ગણતરી.
*   **Roller Calculator:** Tube ID, Fin Width અને Pitch ના આધારે રોલર સેટિંગની ગણતરી (Auto History Save & Override logic સાથે).
*   **Job Card Calc:** શિફ્ટ ટાર્ગેટ અને પૂર્ણ કરેલા કામના આધારે સમયનું વિશ્લેષણ.
*   **PWA Support:** તમે આ એપને મોબાઇલમાં ઇન્સ્ટોલ કરી શકો છો અને ઓફલાઇન પણ વાપરી શકો છો.
*   **Modern UI:** ક્લીન બ્લુ ગ્રેડિયન્ટ ડિઝાઇન અને રિસ્પોન્સિવ લેઆઉટ.

## 📱 ઇન્સ્ટોલેશન (PWA)

આ એપને તમારા મોબાઇલમાં ઇન્સ્ટોલ કરવા માટે:
1. લિંકને Chrome બ્રાઉઝરમાં ખોલો.
2. ઉપરના ત્રણ ટપકા (Menu) પર ક્લિક કરો.
3. **'Install App'** અથવા **'Add to Home Screen'** પર ક્લિક કરો.

## 🛠️ ટેકનોલોજી (Tech Stack)

- **Frontend:** HTML5, CSS3 (Modern UI with Glassmorphism)
- **Scripting:** JavaScript (ES6)
- **Icons:** Font Awesome Pro
- **PWA:** Service Workers & Web Manifest

## 📂 ફાઇલ સ્ટ્રક્ચર (Structure)
```text
├── index.html          # મેઈન ડેશબોર્ડ પેજ
├── shift_calc.html     # શિફ્ટ કેલ્ક્યુલેટર
├── roller_calc.html    # રોલર કેલ્ક્યુલેટર
├── job_card_calc.html  # જોબ કાર્ડ કેલ્ક્યુલેટર
├── manifest.json       # PWA કોન્ફિગરેશન
├── sw.js               # ઓફલાઇન સર્વિસ વર્કર
└── icon.png        # એપ આઈકોન
