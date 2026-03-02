window.addEventListener('unhandledrejection', function(e){
  const div = document.createElement('div');
  div.style.cssText = 'position:fixed;top:40px;left:0;right:0;background:orange;color:black;padding:10px;z-index:99999;font-size:12px;word-break:break-all';
  div.textContent = '⚠️ Promise Error: ' + e.reason;
  document.body.appendChild(div);
});

/* ══════════════════════════════════════
   CONFIG
══════════════════════════════════════ */
const ADMIN_PHONE = '6396989005'; // Admin ka phone number
const ADMIN_PASS  = 'farah@admin2026';

/* ══════════════════════════════════════
   DEFAULT TIMETABLE (Farah, Mathura)
══════════════════════════════════════ */
const DEFAULT_TT = [
  {r:1,  d:"Guruwaar",   dt:"19-02-2026", hi:"1 Ramadan 1447",  sh:"05:28", ih:"18:16"},
  {r:2,  d:"Shukrawaar", dt:"20-02-2026", hi:"2 Ramadan 1447",  sh:"05:27", ih:"18:17"},
  {r:3,  d:"Shaniwaar",  dt:"21-02-2026", hi:"3 Ramadan 1447",  sh:"05:26", ih:"18:17"},
  {r:4,  d:"Rawiwaar",   dt:"22-02-2026", hi:"4 Ramadan 1447",  sh:"05:25", ih:"18:18"},
  {r:5,  d:"Somwaar",    dt:"23-02-2026", hi:"5 Ramadan 1447",  sh:"05:24", ih:"18:18"},
  {r:6,  d:"Mangalwaar", dt:"24-02-2026", hi:"6 Ramadan 1447",  sh:"05:23", ih:"18:19"},
  {r:7,  d:"Budhwaar",   dt:"25-02-2026", hi:"7 Ramadan 1447",  sh:"05:22", ih:"18:19"},
  {r:8,  d:"Guruwaar",   dt:"26-02-2026", hi:"8 Ramadan 1447",  sh:"05:21", ih:"18:20"},
  {r:9,  d:"Shukrawaar", dt:"27-02-2026", hi:"9 Ramadan 1447",  sh:"05:21", ih:"18:20"},
  {r:10, d:"Shaniwaar",  dt:"28-02-2026", hi:"10 Ramadan 1447", sh:"05:21", ih:"18:21"},
  {r:11, d:"Rawiwaar",   dt:"01-03-2026", hi:"11 Ramadan 1447", sh:"05:20", ih:"18:22"},
  {r:12, d:"Somwaar",    dt:"02-03-2026", hi:"12 Ramadan 1447", sh:"05:19", ih:"18:23"},
  {r:13, d:"Mangalwaar", dt:"03-03-2026", hi:"13 Ramadan 1447", sh:"05:18", ih:"18:23"},
  {r:14, d:"Budhwaar",   dt:"04-03-2026", hi:"14 Ramadan 1447", sh:"05:17", ih:"18:24"},
  {r:15, d:"Guruwaar",   dt:"05-03-2026", hi:"15 Ramadan 1447", sh:"05:16", ih:"18:25"},
  {r:16, d:"Shukrawaar", dt:"06-03-2026", hi:"16 Ramadan 1447", sh:"05:15", ih:"18:25"},
  {r:17, d:"Shaniwaar",  dt:"07-03-2026", hi:"17 Ramadan 1447", sh:"05:14", ih:"18:26"},
  {r:18, d:"Rawiwaar",   dt:"08-03-2026", hi:"18 Ramadan 1447", sh:"05:13", ih:"18:27"},
  {r:19, d:"Somwaar",    dt:"09-03-2026", hi:"19 Ramadan 1447", sh:"05:12", ih:"18:27"},
  {r:20, d:"Mangalwaar", dt:"10-03-2026", hi:"20 Ramadan 1447", sh:"05:11", ih:"18:28"},
  {r:21, d:"Budhwaar",   dt:"11-03-2026", hi:"21 Ramadan 1447", sh:"05:10", ih:"18:29"},
  {r:22, d:"Guruwaar",   dt:"12-03-2026", hi:"22 Ramadan 1447", sh:"05:09", ih:"18:29"},
  {r:23, d:"Shukrawaar", dt:"13-03-2026", hi:"23 Ramadan 1447", sh:"05:08", ih:"18:30"},
  {r:24, d:"Shaniwaar",  dt:"14-03-2026", hi:"24 Ramadan 1447", sh:"05:07", ih:"18:31"},
  {r:25, d:"Rawiwaar",   dt:"15-03-2026", hi:"25 Ramadan 1447", sh:"05:06", ih:"18:31"},
  {r:26, d:"Somwaar",    dt:"16-03-2026", hi:"26 Ramadan 1447", sh:"05:05", ih:"18:32"},
  {r:27, d:"Mangalwaar", dt:"17-03-2026", hi:"27 Ramadan 1447", sh:"05:04", ih:"18:33", lq:true},
  {r:28, d:"Budhwaar",   dt:"18-03-2026", hi:"28 Ramadan 1447", sh:"05:03", ih:"18:33"},
  {r:29, d:"Guruwaar",   dt:"19-03-2026", hi:"29 Ramadan 1447", sh:"05:02", ih:"18:34"},
  {r:30, d:"Shukrawaar", dt:"20-03-2026", hi:"30 Ramadan 1447", sh:"05:01", ih:"18:34"},
];

/* Live timetable (from localStorage if admin edited) */
let TT = JSON.parse(localStorage.getItem('tt_data') || JSON.stringify(DEFAULT_TT));

/* ══════════════════════════════════════
   QUIZ BANK — HINGLISH
══════════════════════════════════════ */
const QB=[
  {c:"QURAN",q:"Quran ki kaun si Surah mein yeh aayat hai: 'Tumhare upar roza farz kiya gaya jaise pehle logon par kiya gaya'?",o:["Surah Al-Imran","Surah Al-Baqarah","Surah An-Nisa","Surah Al-Maidah"],a:1,e:"Surah Al-Baqarah (2:183) mein yeh aayat hai — jo Ramzan ke roze ki farziiyat bayan karti hai."},
  {c:"QURAN",q:"Poore Quran mein kitni Surahen hain?",o:["110","112","114","116"],a:2,e:"Quran mein bilkul 114 Surahen hain — Surah Al-Fatihah se Surah An-Nas tak!"},
  {c:"QURAN",q:"Quran ka 'Dil' (Heart) kis Surah ko kaha jaata hai?",o:["Al-Fatihah","Surah Yasin","Al-Ikhlas","Al-Kahf"],a:1,e:"Surah Yasin ko Quran ka dil kaha jaata hai — Huzoor ﷺ ki hadith ke mutabiq!"},
  {c:"QURAN",q:"Quran ki pehli wahi mein sabse pehla lafz kaun sa tha?",o:["Bismillah","Alhamdulillah","Iqra (Padho!)","Subhanallah"],a:2,e:"'Iqra' — Surah Al-Alaq (96:1). Ek ummi nabi ﷺ par 'Padho' ka pehla hukm!"},
  {c:"QURAN",q:"Quran kitne Juz (Sipaaron) mein divide hai?",o:["20","25","30","28"],a:2,e:"Quran 30 barabar Juz mein — isliye Ramzan mein roz ek Juz padho aur 30 din mein Khatm Quran!"},
  {c:"QURAN",q:"'Laylatul Qadr 1000 mahine se behtar hai' — yeh kaun si Surah mein hai?",o:["Surah Ad-Dukhan","Surah Al-Qadr","Surah Al-Fath","Surah Al-Muzzammil"],a:1,e:"Surah Al-Qadr (97:3) mein yeh azeem farman hai!"},
  {c:"SEERAH",q:"Huzoor ﷺ ko pehli wahi kitni umra mein aayi?",o:["35 saal","38 saal","40 saal","45 saal"],a:2,e:"40 saal ki umra mein Ghaar-e-Hira mein pehli wahi naazil hui!"},
  {c:"SEERAH",q:"Huzoor ﷺ ko nubuwwat se pehle log kya laqab dete the?",o:["Al-Karim","Al-Amin","Al-Ghani","Al-Hakim"],a:1,e:"'Al-Amin' — Sach Sachcha, Bharosemand. Kuffar-e-Makkah bhi yahi kehte the!"},
  {c:"SEERAH",q:"Islam qabool karne wali pehli khatoon kaun thi?",o:["Hazrat Aisha RA","Hazrat Fatima RA","Hazrat Khadijah RA","Hazrat Maryam AS"],a:2,e:"Hazrat Khadijah bint Khuwaylid (RA) — pehli Muslim khatoon!"},
  {c:"SEERAH",q:"Huzoor ﷺ ne Hijrat karke kis shahar mein gaye?",o:["Taif","Bait ul Muqaddas","Madinah al-Munawwarah","Kufah"],a:2,e:"622 CE mein Makkah se Madinah — yahi se Hijri calendar shuru hua!"},
  {c:"SEERAH",q:"Ghazwa-e-Badr kis mahine mein hua?",o:["Rajab","Sha'ban","Ramzan","Dhul Hijjah"],a:2,e:"Ghazwa-e-Badr 17 Ramzan 2 Hijri mein hua — Ramzan mein fath!"},
  {c:"HISTORY",q:"Islam ke pehle Khalifa kaun the?",o:["Hazrat Umar RA","Hazrat Uthman RA","Hazrat Abu Bakr Siddiq RA","Hazrat Ali RA"],a:2,e:"Hazrat Abu Bakr Siddiq (RA) — Huzoor ﷺ ke wisaal ke baad pehle Khalifa!"},
  {c:"HISTORY",q:"Kaba Shareef kis shahar mein hai?",o:["Madinah","Makkah","Bait ul Muqaddas","Taif"],a:1,e:"Masjid-ul-Haram, Makkah — duniya ki sabse muqaddas jagah!"},
  {c:"RAMADAN",q:"Laylatul Qadr kitne mahine se behtar hai?",o:["100 mahine","1000 saal","1000 mahine","70 saal"],a:2,e:"Surah Al-Qadr (97:3): 'Hazaar mahine se behtar' — yaani 83+ saal! SubhanAllah!"},
  {c:"RAMADAN",q:"Sirf Ramzan mein padhee jaane wali khaas namaz?",o:["Tahajjud","Tarawih","Ishraq","Awwabin"],a:1,e:"Tarawih! Isha ke baad sirf Ramzan mein — Sunnah Mu'akkadah!"},
  {c:"RAMADAN",q:"Ramzan mein Fajr se pehle khaya jaane wala khaana?",o:["Iftar","Sehri / Suhoor","Qurbani","Zakat"],a:1,e:"Sehri ya Suhoor! Huzoor ﷺ: 'Sehri mein barkat hai.' (Bukhari #1923)"},
  {c:"RAMADAN",q:"Roza kholte waqt kya kha kar shuru karna Sunnat hai?",o:["Doodh se","Khajoor ya Paani se","Meethe phal se","Kuch bhi chale"],a:1,e:"Khajoor ya Paani se Iftar karna Sunnah hai — Huzoor ﷺ ka tarika!"},
  {c:"RAMADAN",q:"Sadqa-e-Fitr kab ada karna wajib hai?",o:["Ramzan ke pehle din","Ramzan ke aakhri din","Eid ki Namaz se PEHLE","Eid ki Namaz ke baad"],a:2,e:"Eid ki Namaz se pehle — taake garib bhi Eid mein shareek ho sakein!"},
  {c:"RAMADAN",q:"Kya sirf bhookha rehna roza ke liye kaafi hai?",o:["Haan kaafi hai","Nahi — jhoot gaali bhi roza kharaab karta hai","Bas paani na peena","Koi fark nahi"],a:1,e:"Huzoor ﷺ: 'Jo jhoot na chhodc uske liye bhookhe rehne ki zaroorat nahi.' (Bukhari)"},
  {c:"GENERAL",q:"Islam ke kitne Arkaan (Pillars) hain?",o:["3","4","5","6"],a:2,e:"5 Arkaan: Kalima, Namaz, Roza, Zakat, Hajj!"},
  {c:"GENERAL",q:"Ek din mein Muslim kitni baar namaz padhte hain?",o:["3","4","5","6"],a:2,e:"5 waqt: Fajr, Dhuhr, Asr, Maghrib, Isha!"},
  {c:"GENERAL",q:"Zakat savings ka kitne percent hoti hai?",o:["1%","2%","2.5%","5%"],a:2,e:"2.5% — Nisaab ke barabar maal rakhein toh saal mein ek baar farz!"},
  {c:"GENERAL",q:"Quran kis mahine mein naazil hua?",o:["Rajab","Sha'ban","Ramzan","Dhul Hijjah"],a:2,e:"Ramzan mein! Isliye 'Shahrul Quran' — Quran ka mahina. (Al-Baqarah 2:185)"},
  {c:"GENERAL",q:"Jumme ke din Jumu'ah Namaz kab padhi jaati hai?",o:["Fajr ke waqt","Zuhr ki jagah","Asr ke baad","Maghrib ke baad"],a:1,e:"Jumu'ah Namaz Zuhr ki jagah padhi jaati hai — Friday (Jumme) ko!"},
  {c:"GENERAL",q:"Kaaba kis cheez se dhaka hua hai?",o:["Safed kapde se","Neele kapde se","Kale kapde (Kiswa) se","Sunehra kapde se"],a:2,e:"Kiswa — kali rida se dhaka hua Kaba — jis par Qurani aayatein sone se kashi hoti hain!"},
];

/* ══════════════════════════════════════
   DAILY CONTENT (10 days sample)
══════════════════════════════════════ */
const DC=[
  {dt:"19-02-2026",aref:"Al-Baqarah 2:183",aar:"يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",atr:"Aye Imaan walo! Tumhare upar roza farz kiya gaya — jaise pehle logon par kiya gaya tha — taake tum muttaqi ban jao.",had:"Jab Ramzan aata hai, Jannat ke darwaze khul jaate hain, Jahannum ke darwaze band ho jaate hain aur Shaitaan qaid kar diye jaate hain.",hs:"Sahih Bukhari #1899",deed:"Aaj sachchi Tawbah karo — apni ek buri aadat se tawbah karo aur ise chhod dene ka pakka irada karo!",pts:15},
  {dt:"20-02-2026",aref:"Al-Baqarah 2:185",aar:"شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ",atr:"Ramzan ka mahina woh hai jisme Quran naazil hua — logon ke liye hidayat banke.",had:"Jo Ramzan ka roza iman ke saath aur sawab ki niyyat se rakhe, uske pichle saare gunah maaf ho jaate hain.",hs:"Sahih Bukhari #38",deed:"Aaj kam se kam ek Juz (paara) Quran padho — Ramzan Quran ka mahina hai!",pts:20},
  {dt:"21-02-2026",aref:"Al-Baqarah 2:186",aar:"وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",atr:"Jab mere bande mujhse mere bare mein poochhen — main qareeb hoon. Pukarne wale ki dua main qabool karta hoon.",had:"Teen logon ki dua radd nahi hoti: roza-dar ki Iftar ke waqt, insaaf-pasand haakim ki, aur mazloom ki.",hs:"Tirmidhi #3598",deed:"Iftar ke waqt 3 sachchi duaain karo — yeh qubooliyat ka khaas waqt hai!",pts:10},
  {dt:"22-02-2026",aref:"Al-Baqarah 2:153",aar:"يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",atr:"Aye Imaan walo! Sabr aur Namaz se madad maango — beshak Allah sabr karne walon ke saath hai.",had:"Roza dhaal hai. Jab tum roza mein ho toh fohash baat aur jhagda mat karo.",hs:"Sahih Bukhari #1904",deed:"Aaj poora din sabr rakho — gusse ki jagah 'Sabr' kaho aur 2 rakat namaz padho.",pts:10},
  {dt:"23-02-2026",aref:"Al-Imran 3:133",aar:"وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ",atr:"Daudo apne Rabb ki maghfirat aur us Jannat ki taraf — jo aasmanon aur zameen jitni chaudi hai.",had:"Ramzan mein kiya gaya sadqa sabse afzal sadqa hai.",hs:"Tirmidhi #663",deed:"Aaj kuch sadqa do — chahe khajoor hi kisi ko dena. Allah dono taraf se barakat deta hai!",pts:15},
  {dt:"24-02-2026",aref:"Al-Baqarah 2:43",aar:"وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ",atr:"Namaz qaim karo, Zakat do, aur rukoone waalon ke saath ruko.",had:"Ramzan mein umra karna Haj ke barabar (sawab mein) hai.",hs:"Sahih Bukhari #1782",deed:"Aaj panchon waqt ki namaz bilkul waqt par padho — ek bhi qaza na karo!",pts:20},
  {dt:"25-02-2026",aref:"Al-Dhariyat 51:56",aar:"وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",atr:"Main ne jinnon aur insaanon ko sirf isliye paida kiya ke woh meri ibadat karein.",had:"Allah Ta'ala raat ke aakhiri tihaai mein aasman-e-duniya par naazil hota hai aur farmata hai: Hai koi maangne wala?",hs:"Sahih Bukhari #1145",deed:"Aaj raat Tahajjud padho — chahe 2 rakat hi sahi. Allah khaas taur par qareeb hota hai!",pts:25},
  {dt:"26-02-2026",aref:"Al-Qamar 54:17",aar:"وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",atr:"Hum ne Quran ko yaad karne ke liye aasaan kar diya — toh kya hai koi jo yaad kare?",had:"Quran khobsorti se padhne wala maizzan-e-farishton ke saath hoga.",hs:"Sahih Bukhari #4937",deed:"Aaj Quran ki koi ek Surah yaad karne ki koshish karo!",pts:15},
  {dt:"27-02-2026",aref:"Al-Isra 17:78",aar:"أَقِمِ الصَّلَاةَ لِدُلُوكِ الشَّمْسِ إِلَىٰ غَسَقِ اللَّيْلِ وَقُرْآنَ الْفَجْرِ",atr:"Dhoop dhalne ke waqt se raat ke andheron tak namaz qaim karo — aur Fajr ki tilaawat bhi.",had:"Jis ki bhi Fajr ki namaz qaza ho gayi goya uske ghar waale aur maal sab loot liye gaye.",hs:"Sahih Bukhari #626",deed:"Aaj Fajr ki namaz masjid mein bajamat ada karo!",pts:25},
  {dt:"17-03-2026",aref:"Al-Qadr 97:1-3",aar:"إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",atr:"Hum ne isse Laylatul Qadr mein naazil kiya — Laylatul Qadr hazaar mahine se behtar hai!",had:"Laylatul Qadr ko Ramzan ke akhri 10 dino ki taaq raaton mein dhoondo.",hs:"Sahih Bukhari #2017",deed:"⭐ LAYLATUL QADR! Poori raat ibadat mein guzaaro — dua, Quran, Tarawih. Ek raat = 83+ saal!",pts:100},
];

/* ══════════════════════════════════════
   STATE
══════════════════════════════════════ */
let currentUser = JSON.parse(localStorage.getItem('user') || 'null');
let isAdmin = false;
let qQs=[], qIdx=0, qSc=0, qTmr=null;
let ddone = JSON.parse(localStorage.getItem('dd') || '{}');
let qprog = JSON.parse(localStorage.getItem('qp') || '[]');
let totSc = +(localStorage.getItem('ts') || 0);
let streak = +(localStorage.getItem('str') || 0);
let lastQD = localStorage.getItem('lqd') || '';
let dPts = +(localStorage.getItem('dp') || 0);

/* ══════════════════════════════════════
   STARS
══════════════════════════════════════ */
function mkStars(){
  const c=document.getElementById('stars');
  for(let i=0;i<60;i++){
    const s=document.createElement('div');s.className='star';
    s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${Math.random()<.3?3:2}px;height:${Math.random()<.3?3:2}px;--d:${2+Math.random()*4}s;--op:${.25+Math.random()*.6};--dl:${Math.random()*7}s`;
    c.appendChild(s);
  }
}


function saveQuizScore(sc, tot, dt){
  if(!currentUser) return;
  var pct = Math.round(sc/tot*100);
  var all = JSON.parse(localStorage.getItem('all_quiz_scores') || '[]');
  all.push({ naam:currentUser.name, mobile:currentUser.phone, date:dt, score:sc+'/'+tot, pct:pct, total_pts:totSc, streak:streak });
  localStorage.setItem('all_quiz_scores', JSON.stringify(all));
}

/* ══════════════════════════════════════
   LOGIN / LOGOUT
══════════════════════════════════════ */
function doLogin(){
  const name = document.getElementById('ln-name').value.trim();
  const phone = document.getElementById('ln-phone').value.trim();
  const err = document.getElementById('ln-err');
  const btn = document.querySelector('.login-btn');

  if(!name){ err.style.color='#ef5350'; err.textContent='❌ Naam zaroori hai'; return; }
  if(!/^[0-9]{10}$/.test(phone)){ err.style.color='#ef5350'; err.textContent='❌ 10 ank ka sahi mobile number dalein'; return; }
  err.textContent = '';

  // Admin check
  if(phone === ADMIN_PHONE){
    const pass = prompt('🔐 Admin Password dalein:');
    if(pass !== ADMIN_PASS){ err.style.color='#ef5350'; err.textContent='❌ Galat password'; return; }
    isAdmin = true;
  }

  const prevUser = JSON.parse(localStorage.getItem('user') || 'null');
  const isNewUser = !prevUser || prevUser.phone !== phone;

  currentUser = { name, phone, isAdmin };
  localStorage.setItem('user', JSON.stringify(currentUser));

  if(isNewUser && phone !== ADMIN_PHONE){
    registerUser(name, phone);
    err.style.color = '#4caf50';
    err.textContent = '✅ Register ho gaya!';
    setTimeout(function(){ err.textContent = ''; showApp(); }, 900);
  } else {
    showApp();
  }
}

function showApp(){
  document.getElementById('login-overlay').style.display = 'none';
  document.getElementById('main-app').style.display = 'block';
  document.getElementById('bnav').style.display = 'flex';
  document.getElementById('tb-name').textContent = currentUser.name;
  document.getElementById('tb-phone').textContent = '+91 ' + currentUser.phone;
  // Check by phone number directly — not just saved flag
  if(currentUser.phone === ADMIN_PHONE || currentUser.isAdmin){
    isAdmin = true;
    document.getElementById('admin-btn').classList.remove('hidden');
  } else {
    document.getElementById('admin-btn').classList.add('hidden');
  }
  initApp();
  // Ask notification permission
  setTimeout(askNotifPermission, 1000);
  // Unlock AudioContext on first touch (phone requirement)
  const _unlockAudio = ()=>{ try{ getAudioCtx().resume(); }catch(e){} };
  document.addEventListener('touchstart', _unlockAudio, {once:true});
  document.addEventListener('click', _unlockAudio, {once:true});
  // Schedule all alerts via JS timers
  setTimeout(scheduleAllAlerts, 2000);
}

function logout(){
  if(!confirm('Logout karna chahte hain?')) return;
  localStorage.removeItem('user');
  currentUser = null; isAdmin = false;
  document.getElementById('main-app').style.display = 'none';
  document.getElementById('bnav').style.display = 'none';
  document.getElementById('login-overlay').style.display = 'flex';
  document.getElementById('ln-name').value = '';
  document.getElementById('ln-phone').value = '';
  document.getElementById('cwin').innerHTML = '';
  }

/* ══════════════════════════════════════
   ADMIN PANEL
══════════════════════════════════════ */
function openAdmin(){
  buildAdminTT();
  loadAdminStats();
  loadExtraDuas();
  loadExtraQuiz();
  loadUsers(); // Auto-load users & scores
  // Pre-fill API key

  // Prefill namaz times
  const nz = JSON.parse(localStorage.getItem('namaz_times') || 'null');
  const e = getTodayEntry();
  document.getElementById('nz-fajr').value    = nz ? nz.fajr    : (e ? e.sh   : '05:20');
  document.getElementById('nz-dhuhr').value   = nz ? nz.dhuhr   : '12:28';
  document.getElementById('nz-asr').value     = nz ? nz.asr     : '16:08';
  document.getElementById('nz-maghrib').value = nz ? nz.maghrib : (e ? e.ih   : '18:22');
  document.getElementById('nz-isha').value    = nz ? nz.isha    : '19:38';
  document.getElementById('admin-overlay').classList.add('on');
}
function closeAdmin(){
  document.getElementById('admin-overlay').classList.remove('on');
}

function loadAdminStats(){
  // Roza number
  const tod = getTodayEntry();
  document.getElementById('adm-roza').textContent = tod ? tod.r : '—';
  // Days remaining
  const end = new Date('2026-03-20T23:59:59+05:30');
  const rem = Math.max(0, Math.ceil((end - new Date()) / 864e5));
  document.getElementById('adm-left').textContent = rem;
  // Show admin phone
  document.getElementById('adm-show-phone').textContent = ADMIN_PHONE;

  // Quick time inputs — prefill today's values
  if(tod){
    document.getElementById('quick-sehri').value = tod.sh;
    document.getElementById('quick-iftar').value = tod.ih;
    document.getElementById('cur-sehri').textContent = tod.sh;
    document.getElementById('cur-iftar').textContent = tod.ih;
  }

  // Load users count from localStorage
  var _allU = JSON.parse(localStorage.getItem('all_users') || '[]');
  document.getElementById('adm-users').textContent = _allU.length;
}

function buildAdminTT(){
  const c = document.getElementById('admin-tt-rows');
  c.innerHTML = '';
  TT.forEach((t, i) => {
    const isToday = getTodayEntry() && t.r === getTodayEntry().r;
    const row = document.createElement('div');
    row.className = 'tt-edit-row';
    row.id = `tt-row-${t.r}`;
    if(isToday) row.style.cssText = 'background:rgba(27,94,32,.5);border-color:rgba(255,215,0,.3)';
    row.innerHTML = `
      <div class="tt-rn" style="${isToday?'color:var(--gold)':''}">${t.r}${isToday?'<br><span style="font-size:7px;background:var(--gold);color:#000;border-radius:2px;padding:0 2px">AAJ</span>':''}</div>
      <div class="tt-edit-d">${t.dt.slice(0,5)}<br><span style="font-size:9px;color:var(--txtd)">${t.d.slice(0,3)}${t.lq?'⭐':''}</span></div>
      <input class="tt-inp" id="s-${i}" value="${t.sh}" placeholder="HH:MM" maxlength="5" 
        style="border-color:rgba(100,200,100,.2)" onfocus="this.select()">
      <input class="tt-inp" id="f-${i}" value="${t.ih}" placeholder="HH:MM" maxlength="5"
        style="border-color:rgba(255,215,0,.2)" onfocus="this.select()">
    `;
    c.appendChild(row);
  });
}

function filterTTRows(val){
  const roza = parseInt(val);
  document.querySelectorAll('.tt-edit-row').forEach(row => {
    if(!val || isNaN(roza)){
      row.style.display = '';
    } else {
      const rn = parseInt(row.querySelector('.tt-rn').textContent);
      row.style.display = rn === roza ? '' : 'none';
      if(rn === roza) row.scrollIntoView({behavior:'smooth', block:'center'});
    }
  });
}

function saveQuickTime(){
  const sehri = document.getElementById('quick-sehri').value;
  const iftar = document.getElementById('quick-iftar').value;
  if(!sehri || !iftar){ flashMsg('quick-flash','❌ Dono waqt bharein!','#ef5350'); return; }

  const tod = getTodayEntry();
  if(!tod){ flashMsg('quick-flash','❌ Aaj ka roza nahi mila!','#ef5350'); return; }

  const idx = TT.findIndex(t => t.r === tod.r);
  if(idx === -1){ flashMsg('quick-flash','❌ Error — row nahi mili','#ef5350'); return; }

  TT[idx].sh = sehri;
  TT[idx].ih = iftar;
  localStorage.setItem('tt_data', JSON.stringify(TT));

  document.getElementById('cur-sehri').textContent = sehri;
  document.getElementById('cur-iftar').textContent = iftar;

  // Also update the full table input
  const rowIdx = TT.findIndex(t => t.r === tod.r);
  const sEl = document.getElementById(`s-${rowIdx}`);
  const fEl = document.getElementById(`f-${rowIdx}`);
  if(sEl) sEl.value = sehri;
  if(fEl) fEl.value = iftar;

  renderHome(); renderTT();
  flashMsg('quick-flash', `✅ Roza ${tod.r} — Sehri ${sehri} · Iftar ${iftar} save ho gaya!`, '#4caf50');
}

function saveTT(){
  const newTT = TT.map((t, i) => {
    const shEl = document.getElementById(`s-${i}`);
    const ihEl = document.getElementById(`f-${i}`);
    const sh = shEl ? shEl.value.trim() || t.sh : t.sh;
    const ih = ihEl ? ihEl.value.trim() || t.ih : t.ih;
    return {...t, sh, ih};
  });
  TT = newTT;
  localStorage.setItem('tt_data', JSON.stringify(TT));
  renderHome(); renderTT();
  flashMsg('tt-flash', '✅ Poori timetable save ho gayi! Sab users ko updated waqt dikhega. 🌙', '#4caf50');
}

function loadUsers(){
  var c = document.getElementById('adm-users-list');
  var users  = JSON.parse(localStorage.getItem('all_users')  || '[]');
  var scores = JSON.parse(localStorage.getItem('all_quiz_scores') || '[]');
  document.getElementById('adm-users').textContent = users.length;

  var html = '';

  // ── REGISTERED USERS ──
  html += '<div style="font-size:11px;font-weight:700;color:#ffd700;letter-spacing:1px;padding:8px 0 6px;border-bottom:1px solid rgba(255,215,0,.2);margin-bottom:8px">👥 REGISTERED USERS (' + users.length + ')</div>';
  if(users.length === 0){
    html += '<div style="font-size:12px;color:#888;padding:8px 0 14px;text-align:center">Abhi koi user nahi</div>';
  } else {
    html += '<div style="max-height:240px;overflow-y:auto;margin-bottom:14px">';
    var rev = users.slice().reverse();
    for(var i=0; i<rev.length; i++){
      var u = rev[i];
      var bg = i%2===0 ? 'rgba(8,20,8,.7)' : 'rgba(18,40,18,.6)';
      html += '<div style="display:grid;grid-template-columns:24px 1fr;gap:8px;align-items:center;padding:9px 10px;background:' + bg + ';border-radius:10px;margin-bottom:4px">';
      html += '<div style="font-size:11px;color:#ffd700;font-weight:700;text-align:center">' + (users.length - i) + '</div>';
      html += '<div><div style="font-size:13px;font-weight:700;color:#fff">' + (u.naam||'—') + '</div>';
      html += '<div style="font-size:10.5px;color:#aaa;margin-top:2px">📱 ' + (u.mobile||'—') + ' &nbsp;·&nbsp; 📅 ' + (u.tarikh||'—') + ' &nbsp;·&nbsp; ⏰ ' + (u.waqt||'—') + '</div></div></div>';
    }
    html += '</div>';
  }

  // ── QUIZ SCORES ──
  html += '<div style="font-size:11px;font-weight:700;color:#ffd700;letter-spacing:1px;padding:8px 0 6px;border-bottom:1px solid rgba(255,215,0,.2);margin-bottom:8px">🏆 QUIZ SCORES (' + scores.length + ')</div>';
  if(scores.length === 0){
    html += '<div style="font-size:12px;color:#888;padding:8px 0;text-align:center">Abhi koi quiz score nahi</div>';
  } else {
    html += '<div style="max-height:260px;overflow-y:auto">';
    var sorted = scores.slice().reverse();
    for(var j=0; j<sorted.length; j++){
      var s = sorted[j];
      var pct = s.pct || 0;
      var clr = pct>=80 ? '#4caf50' : pct>=60 ? '#ffd700' : '#ff7043';
      var medal = pct>=80 ? '🥇' : pct>=60 ? '🥈' : '🥉';
      var bg2 = j%2===0 ? 'rgba(8,20,8,.7)' : 'rgba(18,40,18,.6)';
      html += '<div style="padding:10px;background:' + bg2 + ';border-radius:10px;margin-bottom:4px">';
      html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">';
      html += '<div style="font-size:13px;font-weight:700;color:#fff">' + medal + ' ' + (s.naam||'—') + '</div>';
      html += '<div style="font-size:14px;font-weight:800;color:' + clr + '">' + (s.score||'—') + ' (' + pct + '%)</div></div>';
      html += '<div style="font-size:10.5px;color:#aaa;margin-bottom:5px">📱 ' + (s.mobile||'—') + ' &nbsp;·&nbsp; 📅 ' + (s.date||'—') + ' &nbsp;·&nbsp; 🏅 ' + (s.total_pts||0) + ' pts &nbsp;·&nbsp; 🔥 ' + (s.streak||0) + ' din</div>';
      html += '<div style="height:5px;background:rgba(255,255,255,.1);border-radius:3px"><div style="height:5px;width:' + pct + '%;background:' + clr + ';border-radius:3px"></div></div>';
      html += '</div>';
    }
    html += '</div>';
  }

  // Buttons
  html += '<div style="margin-top:12px;display:flex;gap:8px">';
  html += '<button onclick="clearAllUsersData()" style="flex:1;padding:9px;background:rgba(239,83,80,.15);border:1px solid rgba(239,83,80,.3);border-radius:10px;color:#ef5350;font-size:11px;cursor:pointer">🗑 Sab Clear</button>';
  html += '<button onclick="exportUsersData()" style="flex:1;padding:9px;background:rgba(255,215,0,.1);border:1px solid rgba(255,215,0,.3);border-radius:10px;color:#ffd700;font-size:11px;cursor:pointer">📋 Export</button>';
  html += '</div>';

  c.innerHTML = html;
}



// Load saved API key — overrides hardcoded one


function clearAllUsersData(){
  if(!confirm('Sab users aur quiz scores delete karna chahte hain?')) return;
  localStorage.removeItem('all_users');
  localStorage.removeItem('all_quiz_scores');
  loadUsers();
  alert('Data clear ho gaya');
}

function exportUsersData(){
  var users  = JSON.parse(localStorage.getItem('all_users')  || '[]');
  var scores = JSON.parse(localStorage.getItem('all_quiz_scores') || '[]');
  var txt = '=== REGISTERED USERS ===\n';
  for(var i=0;i<users.length;i++){ var u=users[i]; txt+=(i+1)+'. '+u.naam+' | '+u.mobile+' | '+u.tarikh+' '+u.waqt+'\n'; }
  txt += '\n=== QUIZ SCORES ===\n';
  for(var j=0;j<scores.length;j++){ var s=scores[j]; txt+=(j+1)+'. '+s.naam+' | '+s.mobile+' | '+s.date+' | '+s.score+' ('+s.pct+'%) | '+s.total_pts+'pts\n'; }
  try{ navigator.clipboard.writeText(txt).then(function(){ alert('Copy ho gaya!'); }); }
  catch(e){ prompt('Copy karein:', txt); }
}


function loadAdminStats(){
  // Roza number
  const tod = getTodayEntry();
  document.getElementById('adm-roza').textContent = tod ? tod.r : '—';
  // Days remaining
  const end = new Date('2026-03-20T23:59:59+05:30');
  const rem = Math.max(0, Math.ceil((end - new Date()) / 864e5));
  document.getElementById('adm-left').textContent = rem;
  // Show admin phone
  document.getElementById('adm-show-phone').textContent = ADMIN_PHONE;

  // Quick time inputs — prefill today's values
  if(tod){
    document.getElementById('quick-sehri').value = tod.sh;
    document.getElementById('quick-iftar').value = tod.ih;
    document.getElementById('cur-sehri').textContent = tod.sh;
    document.getElementById('cur-iftar').textContent = tod.ih;
  }

  // Load users count from localStorage
  var _allU = JSON.parse(localStorage.getItem('all_users') || '[]');
  document.getElementById('adm-users').textContent = _allU.length;
}

function buildAdminTT(){
  const c = document.getElementById('admin-tt-rows');
  c.innerHTML = '';
  TT.forEach((t, i) => {
    const isToday = getTodayEntry() && t.r === getTodayEntry().r;
    const row = document.createElement('div');
    row.className = 'tt-edit-row';
    row.id = `tt-row-${t.r}`;
    if(isToday) row.style.cssText = 'background:rgba(27,94,32,.5);border-color:rgba(255,215,0,.3)';
    row.innerHTML = `
      <div class="tt-rn" style="${isToday?'color:var(--gold)':''}">${t.r}${isToday?'<br><span style="font-size:7px;background:var(--gold);color:#000;border-radius:2px;padding:0 2px">AAJ</span>':''}</div>
      <div class="tt-edit-d">${t.dt.slice(0,5)}<br><span style="font-size:9px;color:var(--txtd)">${t.d.slice(0,3)}${t.lq?'⭐':''}</span></div>
      <input class="tt-inp" id="s-${i}" value="${t.sh}" placeholder="HH:MM" maxlength="5" 
        style="border-color:rgba(100,200,100,.2)" onfocus="this.select()">
      <input class="tt-inp" id="f-${i}" value="${t.ih}" placeholder="HH:MM" maxlength="5"
        style="border-color:rgba(255,215,0,.2)" onfocus="this.select()">
    `;
    c.appendChild(row);
  });
}

function filterTTRows(val){
  const roza = parseInt(val);
  document.querySelectorAll('.tt-edit-row').forEach(row => {
    if(!val || isNaN(roza)){
      row.style.display = '';
    } else {
      const rn = parseInt(row.querySelector('.tt-rn').textContent);
      row.style.display = rn === roza ? '' : 'none';
      if(rn === roza) row.scrollIntoView({behavior:'smooth', block:'center'});
    }
  });
}

function saveQuickTime(){
  const sehri = document.getElementById('quick-sehri').value;
  const iftar = document.getElementById('quick-iftar').value;
  if(!sehri || !iftar){ flashMsg('quick-flash','❌ Dono waqt bharein!','#ef5350'); return; }

  const tod = getTodayEntry();
  if(!tod){ flashMsg('quick-flash','❌ Aaj ka roza nahi mila!','#ef5350'); return; }

  const idx = TT.findIndex(t => t.r === tod.r);
  if(idx === -1){ flashMsg('quick-flash','❌ Error — row nahi mili','#ef5350'); return; }

  TT[idx].sh = sehri;
  TT[idx].ih = iftar;
  localStorage.setItem('tt_data', JSON.stringify(TT));

  document.getElementById('cur-sehri').textContent = sehri;
  document.getElementById('cur-iftar').textContent = iftar;

  // Also update the full table input
  const rowIdx = TT.findIndex(t => t.r === tod.r);
  const sEl = document.getElementById(`s-${rowIdx}`);
  const fEl = document.getElementById(`f-${rowIdx}`);
  if(sEl) sEl.value = sehri;
  if(fEl) fEl.value = iftar;

  renderHome(); renderTT();
  flashMsg('quick-flash', `✅ Roza ${tod.r} — Sehri ${sehri} · Iftar ${iftar} save ho gaya!`, '#4caf50');
}

function saveTT(){
  const newTT = TT.map((t, i) => {
    const shEl = document.getElementById(`s-${i}`);
    const ihEl = document.getElementById(`f-${i}`);
    const sh = shEl ? shEl.value.trim() || t.sh : t.sh;
    const ih = ihEl ? ihEl.value.trim() || t.ih : t.ih;
    return {...t, sh, ih};
  });
  TT = newTT;
  localStorage.setItem('tt_data', JSON.stringify(TT));
  renderHome(); renderTT();
  flashMsg('tt-flash', '✅ Poori timetable save ho gayi! Sab users ko updated waqt dikhega. 🌙', '#4caf50');
}


function resetQuizLock(){
  if(!confirm('Quiz lock reset karein? User phir se khel sakenge.')) return;
  localStorage.removeItem('quiz_last_played');
  flashMsg('tools-flash', '✅ Quiz lock reset ho gaya!', '#4caf50');
  if(typeof updateQuizLockUI === 'function') updateQuizLockUI();
}

function resetTimetable(){
  if(!confirm('Timetable default par reset karein? Sare changes delete ho jaayenge!')) return;
  TT = JSON.parse(JSON.stringify(DEFAULT_TT));
  localStorage.setItem('tt_data', JSON.stringify(TT));
  buildAdminTT();
  loadAdminStats();
  renderHome(); renderTT();
  flashMsg('tools-flash', '✅ Timetable default par reset ho gaya!', '#4caf50');
}

function copyAdminInfo(){
  const txt = `Farah Ramzan Admin Info\nPhone: ${ADMIN_PHONE}\nPassword: ${ADMIN_PASS}\nStorage: Device localStorage`;
  navigator.clipboard.writeText(txt).then(() => {
    flashMsg('tools-flash', '✅ Admin info copy ho gayi!', '#4caf50');
  }).catch(() => {
    flashMsg('tools-flash', '⚠️ Copy nahi hua — manually karein', '#ffb74d');
  });
}

function exportData(){
  const data = {
    timetable: TT,
    exportDate: new Date().toLocaleString('en-IN'),
    app: 'Farah Ramzan 2026'
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'FarahRamzan_TT_Export.json';
  a.click();
  flashMsg('tools-flash', '✅ Data export ho gaya!', '#4caf50');
}

function flashMsg(id, msg, color){
  const el = document.getElementById(id);
  if(!el) return;
  el.style.color = color;
  el.textContent = msg;
  setTimeout(() => { el.textContent = ''; }, 4000);
}

/* ── Namaz Times ── */
function saveNamazTimes(){
  const fajr   = document.getElementById('nz-fajr').value;
  const dhuhr  = document.getElementById('nz-dhuhr').value;
  const asr    = document.getElementById('nz-asr').value;
  const maghrib= document.getElementById('nz-maghrib').value;
  const isha   = document.getElementById('nz-isha').value;
  if(!fajr||!dhuhr||!asr||!maghrib||!isha){
    flashMsg('nz-flash','❌ Sab waqt bharein!','#ef5350'); return;
  }
  const nz = {fajr, dhuhr, asr, maghrib, isha};
  localStorage.setItem('namaz_times', JSON.stringify(nz));
  renderNamaz();
  flashMsg('nz-flash',`✅ Namaz awqat save ho gaye!\nFajr: ${fajr} · Dhuhr: ${dhuhr} · Asr: ${asr} · Maghrib: ${maghrib} · Isha: ${isha}`,'#4caf50');
}

/* ── Extra Duas ── */
function loadExtraDuas(){
  const extras = JSON.parse(localStorage.getItem('extra_duas') || '[]');
  const container = document.getElementById('extra-duas');
  const admList = document.getElementById('adm-dua-list');
  const countEl = document.getElementById('extra-dua-count');
  if(countEl) countEl.textContent = extras.length;

  // Render in duas screen
  if(container){
    container.innerHTML = '';
    extras.forEach((d, i) => {
      const num = 6 + i;
      container.innerHTML += `
        <div class="dua-block">
          <div class="dua-hdr">
            <div class="dua-num">${num}</div>
            <div><div class="dua-ht">🤲 ${d.title}</div><div class="dua-hs">${d.sub||''}</div></div>
          </div>
          <div class="dua-body">
            ${d.arabic ? `<div class="dua-arabic">${d.arabic}</div>` : ''}
            ${d.hindi  ? `<div class="dua-row"><div class="dua-rlbl">🔹 Hindi Uchhaaran</div><div class="dua-rtxt hi">${d.hindi}</div></div>` : ''}
            ${d.matlab ? `<div class="dua-row"><div class="dua-rlbl">🇮🇳 Hindi Matlab</div><div class="dua-rtxt tr">${d.matlab}</div></div>` : ''}
          </div>
        </div>`;
    });
  }

  // Render in admin list
  if(admList){
    admList.innerHTML = extras.length === 0
      ? '<div style="font-size:11px;color:var(--txtd)">Koi extra dua nahi</div>'
      : extras.map((d,i) => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:7px 8px;background:rgba(8,20,8,.6);border-radius:7px;margin-bottom:4px">
          <div style="font-size:12px;color:var(--txts)">${i+1}. ${d.title}</div>
          <button onclick="deleteExtraDua(${i})" style="background:#ef5350;border:none;color:#fff;border-radius:5px;padding:3px 8px;font-size:10px;cursor:pointer">🗑</button>
        </div>`).join('');
  }
}

function addNewDua(){
  const title  = document.getElementById('dua-title').value.trim();
  const sub    = document.getElementById('dua-sub').value.trim();
  const arabic = document.getElementById('dua-arabic').value.trim();
  const hindi  = document.getElementById('dua-hindi').value.trim();
  const matlab = document.getElementById('dua-matlab').value.trim();
  if(!title){ flashMsg('dua-flash','❌ Dua ka title zaroori hai!','#ef5350'); return; }
  const extras = JSON.parse(localStorage.getItem('extra_duas') || '[]');
  extras.push({title, sub, arabic, hindi, matlab});
  localStorage.setItem('extra_duas', JSON.stringify(extras));
  // Clear inputs
  ['dua-title','dua-sub','dua-arabic','dua-hindi','dua-matlab'].forEach(id => document.getElementById(id).value = '');
  loadExtraDuas();
  flashMsg('dua-flash',`✅ "${title}" — Dua add ho gayi!`,'#4caf50');
}

function deleteExtraDua(idx){
  if(!confirm('Yeh dua delete karein?')) return;
  const extras = JSON.parse(localStorage.getItem('extra_duas') || '[]');
  extras.splice(idx, 1);
  localStorage.setItem('extra_duas', JSON.stringify(extras));
  loadExtraDuas();
}

/* ── Extra Quiz Questions ── */
function loadExtraQuiz(){
  const extras = JSON.parse(localStorage.getItem('extra_quiz') || '[]');
  const admList = document.getElementById('adm-qz-list');
  const countEl = document.getElementById('extra-qz-count');
  if(countEl) countEl.textContent = extras.length;
  if(admList){
    admList.innerHTML = extras.length === 0
      ? '<div style="font-size:11px;color:var(--txtd)">Koi extra sawaal nahi</div>'
      : extras.map((q,i) => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:7px 8px;background:rgba(8,20,8,.6);border-radius:7px;margin-bottom:4px">
          <div>
            <div style="font-size:11px;color:var(--txts)">${i+1}. ${q.q.slice(0,40)}...</div>
            <div style="font-size:9px;color:var(--txtd)">[${q.c}] Sahi: ${['A','B','C','D'][q.a]}</div>
          </div>
          <button onclick="deleteExtraQuiz(${i})" style="background:#ef5350;border:none;color:#fff;border-radius:5px;padding:3px 8px;font-size:10px;cursor:pointer;flex-shrink:0">🗑</button>
        </div>`).join('');
  }
  // Merge extra quiz into QB for gameplay
  window.QB_EXTRA = extras;
}

function addNewQuiz(){
  const cat = document.getElementById('qz-cat').value;
  const q   = document.getElementById('qz-q').value.trim();
  const a   = document.getElementById('qz-a').value.trim();
  const b   = document.getElementById('qz-b').value.trim();
  const c   = document.getElementById('qz-c').value.trim();
  const d   = document.getElementById('qz-d').value.trim();
  const ans = parseInt(document.getElementById('qz-ans').value);
  const exp = document.getElementById('qz-exp').value.trim();
  if(!q||!a||!b||!c||!d){ flashMsg('qz-flash','❌ Sawaal aur sab 4 options zaroori hain!','#ef5350'); return; }
  const extras = JSON.parse(localStorage.getItem('extra_quiz') || '[]');
  extras.push({c:cat, q, o:[a,b,c,d], a:ans, e:exp||'Sahi jawab!'});
  localStorage.setItem('extra_quiz', JSON.stringify(extras));
  ['qz-q','qz-a','qz-b','qz-c','qz-d','qz-exp'].forEach(id => document.getElementById(id).value = '');
  loadExtraQuiz();
  flashMsg('qz-flash',`✅ Sawaal add ho gaya! Ab quiz mein shamil hoga.`,'#4caf50');
}

function deleteExtraQuiz(idx){
  if(!confirm('Yeh sawaal delete karein?')) return;
  const extras = JSON.parse(localStorage.getItem('extra_quiz') || '[]');
  extras.splice(idx, 1);
  localStorage.setItem('extra_quiz', JSON.stringify(extras));
  loadExtraQuiz();
}

/* ══════════════════════════════════════
   NAV
══════════════════════════════════════ */
function go(id, btn){
  // Dismiss any open popup when user manually navigates
  const p = document.getElementById('ramzan-popup');
  if(p && _popupShowing){ _dismissPopup(p); }
  document.querySelectorAll('.sc').forEach(s=>s.classList.remove('on'));
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));
  document.getElementById(id).classList.add('on');
  btn.classList.add('on');
  if(id==='sc-quiz') showQuizStart();
  if(id==='sc-namaz') renderNamaz();
  if(id==='sc-tt') renderTT();
  if(id==='sc-daily') renderDaily();
  if(id==='sc-home') renderHome();
  if(id==='sc-settings') loadSettingsScreen();
  if(id!=='sc-settings' && window._stTimer){ clearInterval(window._stTimer); window._stTimer=null; }
}

/* Auto-navigate to screen on alert — no btn click needed */
function goToScreen(id){
  // Dismiss any open notification popup first
  const p = document.getElementById('ramzan-popup');
  if(p) _dismissPopup(p);
  document.querySelectorAll('.sc').forEach(s=>s.classList.remove('on'));
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));
  const sc = document.getElementById(id);
  if(!sc) return;
  sc.classList.add('on');
  // highlight correct nav button
  const idx = {'sc-home':0,'sc-tt':1,'sc-duas':2,'sc-daily':3,'sc-quiz':4,'sc-namaz':5};
  const nbs = document.querySelectorAll('.nb');
  if(idx[id] !== undefined && nbs[idx[id]]) nbs[idx[id]].classList.add('on');
  if(id==='sc-namaz') renderNamaz();
  if(id==='sc-quiz') showQuizStart();
}

/* ══════════════════════════════════════
   HELPERS
══════════════════════════════════════ */
function todayKey(){
  const n=new Date();
  return `${String(n.getDate()).padStart(2,'0')}-${String(n.getMonth()+1).padStart(2,'0')}-${n.getFullYear()}`;
}
function getTodayEntry(){ return TT.find(t=>t.dt===todayKey())||null; }
function fmt(t){
  const[h,m]=t.split(':').map(Number);
  const ap=h>=12?'PM':'AM';
  const h12=h===0?12:h>12?h-12:h;
  return{v:`${String(h12).padStart(2,'0')}:${String(m).padStart(2,'0')}`,ap};
}

/* ══════════════════════════════════════
   HOME
══════════════════════════════════════ */
function renderHome(){
  const e=getTodayEntry();
  const now=new Date();
  const start=new Date('2026-02-19T00:00:00+05:30');
  const end=new Date('2026-03-20T23:59:59+05:30');
  if(e){
    document.getElementById('h-roza').textContent=`🌙 Roza ${e.r} / 30`;
    document.getElementById('h-hijri').textContent=e.hi;
    document.getElementById('h-greg').textContent=`${e.d} · ${e.dt}`;
    const sv=fmt(e.sh),iv=fmt(e.ih);
    document.getElementById('h-sv').textContent=sv.v; document.getElementById('h-sa').textContent=sv.ap;
    document.getElementById('h-iv').textContent=iv.v; document.getElementById('h-ia').textContent=iv.ap;
    startCD(e.ih);
  } else {
    if(now<start){ const d=Math.ceil((start-now)/864e5); document.getElementById('h-roza').textContent=`Ramzan ${d} din mein!`; }
    else document.getElementById('h-roza').textContent='🎉 Eid Mubarak!';
    document.getElementById('h-greg').textContent=now.toLocaleDateString('hi-IN');
    document.getElementById('cdval').textContent='--:--:--';
  }
  if(now>=start&&now<=end){ const dl=Math.ceil((end-now)/864e5); document.getElementById('h-days').textContent=`${dl} din baaqi`; document.getElementById('h-pmsg').textContent='Ramzan 1447 chal raha hai — 19 Feb se 20 Mar 2026'; }
  else if(now<start){ const dl=Math.ceil((start-now)/864e5); document.getElementById('h-days').textContent=`${dl} din mein`; document.getElementById('h-pmsg').textContent='Ramzan 1447 — 19 February 2026 se shuru hoga'; }
  else { document.getElementById('h-days').textContent='Khatam'; document.getElementById('h-pmsg').textContent='Ramzan 1447 khatam hua — Eid Mubarak! 🎉'; }
}
/* ══════════════════════════════════════
   ISLAMIC AUDIO — Web Audio API
   (No external files needed!)
══════════════════════════════════════ */
let audioCtx = null;

function getAudioCtx(){
  if(!audioCtx){ audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }
  return audioCtx;
}

/* HIGH VOLUME Islamic Ringtone — Azan style beeps */
function playIslamicTone(type){
  try{
    const ctx = getAudioCtx();
    if(ctx.state==='suspended'){ ctx.resume(); }

    // Master gain — HIGH VOLUME
    const master = ctx.createGain();
    master.gain.setValueAtTime(1.5, ctx.currentTime); // Max volume
    master.connect(ctx.destination);

    // Also connect to a compressor to avoid distortion at high vol
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -6;
    comp.knee.value = 3;
    comp.ratio.value = 4;
    comp.attack.value = 0.001;
    comp.release.value = 0.1;
    comp.connect(ctx.destination);
    master.connect(comp);

    function beep(freq, startTime, duration, vol){
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(master);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);
      // Smooth envelope — no clicks
      gain.gain.setValueAtTime(0, ctx.currentTime + startTime);
      gain.gain.linearRampToValueAtTime(vol||1.0, ctx.currentTime + startTime + 0.05);
      gain.gain.setValueAtTime(vol||1.0, ctx.currentTime + startTime + duration - 0.08);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + startTime + duration);
      osc.start(ctx.currentTime + startTime);
      osc.stop(ctx.currentTime + startTime + duration + 0.01);
    }

    const now = 0;

    if(type === 'iftar'){
      // 🌅 IFTAR — Allahu Akbar rising melody — long and loud
      beep(392, now+0.0,  0.5, 1.0);  // G
      beep(440, now+0.6,  0.5, 1.0);  // A
      beep(494, now+1.2,  0.7, 1.0);  // B
      beep(523, now+2.0,  0.5, 1.0);  // C
      beep(587, now+2.6,  0.9, 1.0);  // D (peak)
      beep(523, now+3.6,  0.4, 0.9);  // C down
      beep(494, now+4.1,  0.4, 0.9);  // B down
      beep(440, now+4.6,  0.3, 0.8);  // A
      beep(392, now+5.0,  1.2, 1.0);  // G long ending
      // Second call — louder
      beep(440, now+6.8,  0.4, 1.0);
      beep(523, now+7.3,  0.4, 1.0);
      beep(587, now+7.8,  0.5, 1.0);
      beep(659, now+8.4,  0.9, 1.0);  // E high
      beep(587, now+9.4,  0.4, 0.9);
      beep(523, now+9.9,  0.4, 0.9);
      beep(440, now+10.4, 1.5, 1.0);  // Final long note
    }
    else if(type === 'sehri'){
      // 🌄 SEHRI — Urgent wake-up — repeated pattern
      beep(330, now+0.0, 0.3, 1.0);
      beep(392, now+0.4, 0.3, 1.0);
      beep(440, now+0.8, 0.5, 1.0);
      beep(392, now+1.4, 0.3, 0.9);
      beep(330, now+1.8, 0.3, 0.9);
      // Repeat louder
      beep(330, now+2.4, 0.3, 1.0);
      beep(392, now+2.8, 0.3, 1.0);
      beep(494, now+3.2, 0.6, 1.0);
      beep(440, now+4.0, 0.4, 1.0);
      beep(392, now+4.5, 1.0, 1.0);
      // Third time — highest
      beep(440, now+6.0, 0.3, 1.0);
      beep(494, now+6.4, 0.3, 1.0);
      beep(523, now+6.8, 0.6, 1.0);
      beep(587, now+7.5, 0.5, 1.0);
      beep(523, now+8.1, 0.3, 0.9);
      beep(440, now+8.5, 1.2, 1.0);
    }
    else {
      // 🕌 NAMAZ — Classic azan-style call
      beep(440, now+0.0, 0.4, 1.0);
      beep(494, now+0.5, 0.4, 1.0);
      beep(523, now+1.0, 0.7, 1.0);
      beep(494, now+1.8, 0.3, 0.9);
      beep(440, now+2.2, 0.4, 1.0);
      beep(392, now+2.7, 0.8, 1.0);
      // Second phrase
      beep(440, now+4.0, 0.3, 1.0);
      beep(523, now+4.4, 0.4, 1.0);
      beep(587, now+4.9, 0.7, 1.0);
      beep(523, now+5.7, 0.4, 0.9);
      beep(440, now+6.2, 1.0, 1.0);
    }
  } catch(e){ console.warn('tone err:', e); }
}
function sendNotification(title, body, tag='alert', arabic=''){
  if(Notification.permission !== 'granted') return;
  if(!getSetting('namaz_alert', true) && tag.includes('namaz')) return;
  if(!getSetting('sehri_alert', true) && tag.includes('sehri')) return;
  if(!getSetting('iftar_alert', true) && tag.includes('iftar')) return;
  try {
    const n = new Notification(title, {
      body: arabic ? arabic + '\n' + body : body,
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjMDQwYzA0IiByeD0iMTYiLz48dGV4dCB5PSI3OCIgeD0iNiIgZm9udC1zaXplPSI3NiI+8J+MiTwvdGV4dD48L3N2Zz4=',
      vibrate: [400, 150, 400, 150, 600],
      tag: tag,
      requireInteraction: false,
      silent: false
    });
    n.onclick = () => { window.focus(); n.close(); };
  } catch(e){ console.warn('Notif error:', e); }
}

/* ── WhatsApp-style In-App Popup Message ── */
let _popupQueue = [];
let _popupShowing = false;

/* _forceShowPopup: clears queue and shows immediately */
function _forceShowPopup(opts){
  _popupQueue = [opts];
  _popupShowing = false;
  _nextPopup();
}

function showPopup(opts){
  _popupQueue.push(opts);
  if(!_popupShowing) _nextPopup();
}

function _nextPopup(){
  if(!_popupQueue.length){ _popupShowing = false; return; }
  _popupShowing = true;
  const opts = _popupQueue.shift();

  let popup = document.getElementById('ramzan-popup');
  if(!popup){
    popup = document.createElement('div');
    popup.id = 'ramzan-popup';
    document.body.appendChild(popup);
  }

  const colors = {
    iftar:  { bg:'linear-gradient(135deg,#0d3320,#0a2010)', border:'#ffd700', glow:'rgba(255,215,0,.35)' },
    sehri:  { bg:'linear-gradient(135deg,#0a1a2a,#051015)', border:'#81d4fa', glow:'rgba(129,212,250,.3)' },
    namaz:  { bg:'linear-gradient(135deg,#1a1a0a,#0f0f05)', border:'#fff176', glow:'rgba(255,241,118,.25)' },
    warn:   { bg:'linear-gradient(135deg,#2a1a00,#150d00)', border:'#ffb74d', glow:'rgba(255,183,77,.3)' },
    test:   { bg:'linear-gradient(135deg,#0d3320,#0a2010)', border:'#ffd700', glow:'rgba(255,215,0,.35)' },
  };
  const c = colors[opts.type] || colors.namaz;

  popup.style.cssText = `
    display:block;
    position:fixed;bottom:85px;left:50%;transform:translateX(-50%) translateY(130px);
    width:calc(100% - 20px);max-width:430px;z-index:999999;
    background:${c.bg};
    border:2px solid ${c.border};
    border-radius:20px;padding:18px 20px;
    box-shadow:0 12px 48px rgba(0,0,0,.9), 0 0 30px ${c.glow}, 0 0 60px ${c.glow};
    cursor:pointer;user-select:none;pointer-events:auto;
    transition:transform .45s cubic-bezier(.34,1.4,.64,1), opacity .3s ease;
    opacity:0;
  `;

  popup.innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:14px">
      <div style="font-size:36px;line-height:1;flex-shrink:0;filter:drop-shadow(0 0 10px ${c.glow})">${opts.icon}</div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
          <div style="font-size:14.5px;font-weight:800;color:${c.border};letter-spacing:.3px">${opts.title}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.35);flex-shrink:0;margin-left:8px">${new Date().toLocaleTimeString('hi-IN',{hour:'2-digit',minute:'2-digit'})}</div>
        </div>
        ${opts.arabic ? `<div style="font-family:'Amiri',serif;font-size:16px;color:rgba(255,255,255,.95);direction:rtl;margin-bottom:5px;line-height:1.7;text-align:right">${opts.arabic}</div>` : ''}
        <div style="font-size:12.5px;color:rgba(210,240,210,.9);line-height:1.6;white-space:pre-line">${opts.msg}</div>
      </div>
    </div>
    <div style="margin-top:10px;padding-top:8px;border-top:1px solid rgba(255,255,255,.08);display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:9.5px;color:rgba(255,255,255,.3);letter-spacing:.8px">RAMZAN COMPANION • FARAH, MATHURA</div>
      <div style="font-size:11px;color:rgba(255,255,255,.3)">tap to close ✕</div>
    </div>
  `;

  popup.onclick = () => _dismissPopup(popup);

  // Slide up — double rAF ensures style reset is painted first
  requestAnimationFrame(() => requestAnimationFrame(() => {
    popup.style.opacity = '1';
    popup.style.transform = 'translateX(-50%) translateY(0)';
  }));

  popup._timer = setTimeout(() => _dismissPopup(popup), opts.duration || 8000);
}

function _dismissPopup(popup){
  if(!popup) return;
  clearTimeout(popup._timer);
  popup.style.transform = 'translateX(-50%) translateY(120px)';
  popup.style.opacity = '0';
  popup.style.pointerEvents = 'none'; // IMMEDIATELY stop blocking clicks
  setTimeout(() => {
    popup.style.display = 'none'; // fully hide
    popup.innerHTML = '';          // clear content
    _popupShowing = false;
    _nextPopup();
  }, 450);
}

/* ── Master Alert Function — plays tone + shows popup + sends notification ── */
function fireAlert(type, title, arabic, msg, notifBody, notifTag){
  // Check settings (warn/test always show)
  if(type === 'sehri' && !getSetting('sehri_alert', true)) return;
  if(type === 'iftar' && !getSetting('iftar_alert', true)) return;
  if(type === 'namaz' && !getSetting('namaz_alert', true)) return;

  // 1) Play Islamic ringtone — unlock ctx first
  const soundType = (type === 'warn') ? 'namaz' : (type === 'test') ? 'iftar' : type;
  if(getSetting('sound', true) || type === 'test'){
    try {
      const ctx = getAudioCtx();
      const doPlay = () => playIslamicTone(soundType);
      if(ctx.state === 'suspended'){
        ctx.resume().then(doPlay).catch(doPlay);
      } else {
        doPlay();
      }
    } catch(e){}
  }

  // 2) Vibrate phone
  if(navigator.vibrate){
    const patterns = {
      iftar:  [500,150,500,150,800],
      sehri:  [300,100,300,100,300],
      namaz:  [200,100,200,100,400],
      warn:   [200,100,200],
      test:   [300,100,300,100,600],
    };
    navigator.vibrate(patterns[type] || patterns.namaz);
  }

  // 3) Show in-app popup (force show for important alerts)
  const icons = { iftar:'🌅', sehri:'🌙', namaz:'🕌', warn:'⚠️', test:'🎵' };
  const popupFn = (type === 'iftar' || type === 'test') ? _forceShowPopup : showPopup;
  popupFn({
    icon: icons[type] || '🔔',
    title, arabic, msg,
    type, duration: type === 'iftar' ? 20000 : 12000
  });

  // 4) Browser notification
  if(Notification.permission === 'granted'){
    try {
      const n = new Notification(title, {
        body: (arabic ? arabic + '\n' : '') + (notifBody || msg),
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiByeD0iMTYiIGZpbGw9IiMwNDBjMDQiLz48dGV4dCB5PSI3OCIgeD0iNiIgZm9udC1zaXplPSI3NiI+8J+MiTwvdGV4dD48L3N2Zz4=',
        vibrate: [300,100,300,100,500],
        tag: notifTag || ('ramzan-' + type + '-' + Date.now()),
        requireInteraction: (type === 'iftar' || type === 'sehri'),
        silent: false
      });
      n.onclick = () => { window.focus(); n.close(); };
    } catch(e){ console.warn('Notif:', e); }
  }
}

/* ── Legacy wrapper (for old calls) ── */
function showAlertBanner(msg, color, duration){ /* replaced by showPopup */ }

/* ── Main Countdown + Alert System ── */
let cdInterval = null;
let alertedSehri = false;
let alertedIftar = false;
let alertedNamaz = {};

function tone(t){
  try{
    // Strong vibration pattern
    if(navigator.vibrate){
      if(t==='iftar')      navigator.vibrate([800,200,800,200,1200,200,800,200,600]);
      else if(t==='sehri') navigator.vibrate([600,150,600,150,1000,150,600,150,400]);
      else                 navigator.vibrate([400,100,400,100,700,100,400]);
    }
    // Play audio
    const c = getAudioCtx();
    const play = ()=>{ playIslamicTone(t); };
    if(c.state==='suspended'){ c.resume().then(play).catch(()=>{}); }
    else { play(); }
  }catch(e){ console.warn('tone err:',e); }
}

function vib(p){ try{ if(navigator.vibrate) navigator.vibrate(p); }catch(e){} }
function notif(title, body, tag, req){
  showSysNotif(title, body, tag, req);
}

function nav(sc,delay){
  setTimeout(()=>{
    // Only auto-navigate if user is on home screen - don't interrupt other screens
    const activeScreen = document.querySelector('.sc.on');
    const activeId = activeScreen ? activeScreen.id : '';
    if(activeId === 'sc-home' || activeId === '' || sc === 'sc-duas' || sc === 'sc-namaz'){
      goToScreen(sc);
    }
  }, delay||1200);
}

function startCD(iftarTime){
  if(cdInterval) clearInterval(cdInterval);
  alertedSehri=false; alertedIftar=false; alertedNamaz={};

  const iFmt = fmt(iftarTime);

  function tick(){
    const now=new Date();
    const [ih,im]=iftarTime.split(':').map(Number);
    const tgt=new Date(); tgt.setHours(ih,im,0,0);
    const diff=tgt-now;

    // ══════════════════════════════
    // IFTAR — exact time par
    // ══════════════════════════════
    if(diff<=0 && diff>-60000){
      document.getElementById('cdlbl').textContent='🌅 Iftar ka waqt!';
      document.getElementById('cdval').textContent='MUBARAK! 🎉';

      if(!alertedIftar){
        alertedIftar=true;
        if(getSetting('iftar_alert',true)){
          tone('iftar');
          vib([600,150,600,150,1000,150,600,150,400]);
          _forceShowPopup({
            icon:'🌅',
            title:'🌅 IFTAR — '+iFmt.v+' '+iFmt.ap+' — MUBARAK!',
            arabic:'اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَىٰ رِزْقِكَ أَفْطَرْتُ',
            msg:'Allahu Akbar! Aaj ka roza khatam hua 🌙\nIftar Mubarak! Dua padhen 🤲',
            type:'iftar', duration:30000
          });
          notif(
            '🌅 IFTAR — '+iFmt.v+' '+iFmt.ap+' — MUBARAK!',
            'اللَّهُمَّ إِنِّي لَكَ صُمْتُ\nRoza khol sakte hain! 🌙',
            'iftar-now', true
          );
          nav('sc-duas', 1500);
        }
      }
      return;
    }

    if(diff<=0){
      document.getElementById('cdlbl').textContent='🌅 Iftar ho gaya!';
      document.getElementById('cdval').textContent='Eid ki taraf! 🎉';
      return;
    }

    // ══════════════════════════════
    // COUNTDOWN DISPLAY
    // ══════════════════════════════
    const hh=String(Math.floor(diff/36e5)).padStart(2,'0');
    const mm2=String(Math.floor((diff%36e5)/6e4)).padStart(2,'0');
    const ss=String(Math.floor((diff%6e4)/1e3)).padStart(2,'0');
    document.getElementById('cdlbl').textContent='Iftar ('+iFmt.v+' '+iFmt.ap+') mein baaki';
    document.getElementById('cdval').textContent=hh+':'+mm2+':'+ss;

    // ══════════════════════════════
    // NAMAZ — exact time par (60 sec window)
    // ══════════════════════════════
    if(!getSetting('namaz_alert',true)) return;

    const savedNz=JSON.parse(localStorage.getItem('namaz_times')||'null');
    const e=getTodayEntry();
    const NZ=[
      {key:'fajr',   name:'Fajr',          emoji:'🌙', t:savedNz?.fajr    ||(e?.sh)||'05:20', arabic:'حَيَّ عَلَى الصَّلَاةِ — حَيَّ عَلَى الْفَلَاحِ', sc:'sc-namaz'},
      {key:'dhuhr',  name:'Dhuhr (Zuhr)',  emoji:'☀️', t:savedNz?.dhuhr   ||'12:28',          arabic:'حَيَّ عَلَى الصَّلَاةِ — الصَّلَاةُ خَيْرٌ',       sc:'sc-namaz'},
      {key:'asr',    name:'Asr',           emoji:'🌤', t:savedNz?.asr     ||'16:08',           arabic:'الصَّلَاةُ خَيْرٌ مِّنَ النَّوْمِ',                sc:'sc-namaz'},
      {key:'maghrib',name:'Maghrib',       emoji:'🌅', t:savedNz?.maghrib ||iftarTime,         arabic:'اللَّهُ أَكْبَرُ — Iftar ka waqt!',                sc:'sc-duas'},
      {key:'isha',   name:'Isha + Tarawih',emoji:'🌑', t:savedNz?.isha    ||'19:38',           arabic:'لَا إِلَٰهَ إِلَّا اللَّهُ',                       sc:'sc-namaz'},
    ];

    NZ.forEach(nz=>{
      const[nh,nm]=nz.t.split(':').map(Number);
      const nTgt=new Date(); nTgt.setHours(nh,nm,0,0);
      const nDiff=nTgt-now;
      // Exact time — 60 second window
      if(nDiff>=0 && nDiff<=60000 && !alertedNamaz[nz.key]){
        alertedNamaz[nz.key]=true;
        const nFmt=fmt(nz.t);
        tone('namaz');
        vib([300,100,300,100,600]);
        showPopup({
          icon:nz.emoji,
          title:nz.emoji+' '+nz.name+' — '+nFmt.v+' '+nFmt.ap+' — Namaz ka Waqt!',
          arabic:nz.arabic,
          msg:'Allahu Akbar! '+nz.name+' ki namaz ka waqt ho gaya\n⏰ '+nFmt.v+' '+nFmt.ap+' — Farah, Mathura\nWuzu karein aur namaz padhen 🕌',
          type:'namaz', duration:20000
        });
        notif(
          nz.emoji+' '+nz.name+' — '+nFmt.v+' '+nFmt.ap+' — Namaz Padhen!',
          nz.arabic+'\nAllahu Akbar! '+nz.name+' — '+nFmt.v+' '+nFmt.ap,
          'namaz-'+nz.key, false
        );
        nav(nz.sc, 1000);
      }
    });

    // ══════════════════════════════
    // SEHRI END — exact time par
    // ══════════════════════════════
    const tod=getTodayEntry();
    if(!tod || !getSetting('sehri_alert',true)) return;

    const[sh,sm]=tod.sh.split(':').map(Number);
    const sTgt=new Date(); sTgt.setHours(sh,sm,0,0);
    const sDiff=sTgt-now;
    const sF=fmt(tod.sh);

    // Sehri khatam — exact time
    if(sDiff>=0 && sDiff<=60000 && !alertedSehri){
      alertedSehri=true;
      tone('sehri');
      vib([500,150,500,150,800,150,500]);
      _forceShowPopup({
        icon:'🌄',
        title:'🌄 SEHRI KHATAM — '+sF.v+' '+sF.ap+' — ROZA SHURU!',
        arabic:'نَوَيْتُ أَنْ أَصُومَ صَوْمَ رَمَضَانَ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ',
        msg:sF.v+' '+sF.ap+' — Sehri khatam!\nRoza SHURU! Allahu Akbar! 🌙\nFajr ki namaz padhen 🕌',
        type:'sehri', duration:25000
      });
      notif(
        '🌄 SEHRI KHATAM — '+sF.v+' '+sF.ap,
        'نَوَيْتُ أَنْ أَصُومَ\nRoza shuru! Fajr padhen! 🌙',
        'sehri-end', true
      );
      nav('sc-namaz', 1500);
    }
  }

  tick();
  cdInterval=setInterval(tick,1000);
}

/* ══════════════════════════════════════
   TIMETABLE
══════════════════════════════════════ */
function renderTT(){
  const tod=getTodayEntry(); const c=document.getElementById('tt-body'); c.innerHTML='';
  TT.forEach(t=>{
    const isT=tod&&t.r===tod.r;
    const sv=fmt(t.sh),iv=fmt(t.ih);
    const row=document.createElement('div');
    row.className=`ttr${isT?' tod':''}`;
    row.innerHTML=`
      <div class="troza">${t.r}</div>
      <div class="tdate"><div>${t.dt.slice(0,5)}</div><div class="tday">${t.d.slice(0,5)}${isT?'<span class="tbdg">AAJ</span>':''}${t.lq?'<span class="lqb">⭐LQ</span>':''}</div></div>
      <div class="ttime s">${sv.v}</div>
      <div class="ttime f">${iv.v}</div>`;
    c.appendChild(row);
    if(isT) setTimeout(()=>row.scrollIntoView({behavior:'smooth',block:'center'}),200);
  });
}

/* ══════════════════════════════════════
   DAILY
══════════════════════════════════════ */
function renderDaily(){
  const tk=todayKey();
  const dc=DC.find(d=>d.dt===tk)||DC[(new Date().getDate()-1)%DC.length];
  document.getElementById('d-aref').textContent=dc.aref;
  document.getElementById('d-aar').textContent=dc.aar;
  document.getElementById('d-atr').textContent=dc.atr;
  document.getElementById('d-h').textContent=`"${dc.had}"`;
  document.getElementById('d-hs').textContent=`— ${dc.hs}`;
  document.getElementById('d-deed').textContent=dc.deed;
  document.getElementById('d-pts').textContent=`+${dc.pts}`;
  window._dp=dc.pts; window._ddk=tk;
  if(ddone[tk]){
    const b=document.getElementById('deed-btn'); b.textContent='✅ Pehle se kar chuke!'; b.disabled=true;
    const m=document.getElementById('deed-msg'); m.textContent=`Total points: ${dPts} 🌟`; m.classList.remove('hidden');
  }
}
function markDeed(){
  const k=window._ddk; if(ddone[k]) return;
  ddone[k]=true; dPts+=window._dp;
  localStorage.setItem('dd',JSON.stringify(ddone)); localStorage.setItem('dp',dPts);
  const b=document.getElementById('deed-btn'); b.textContent=`✅ Kiya! (+${window._dp} pts)`; b.disabled=true;
  const m=document.getElementById('deed-msg'); m.textContent=`Mashallah! Kul Points: ${dPts} 🌟`; m.classList.remove('hidden');
}

/* ══════════════════════════════════════
   QUIZ — 24 HOUR LOCK (1 session per 24h)
══════════════════════════════════════ */
function shuffle(a){ return a.sort(()=>Math.random()-.5); }

// Returns milliseconds remaining until quiz unlocks (0 = unlocked)
function getQuizLockMs(){
  const lastPlayed = parseInt(localStorage.getItem('quiz_last_played') || '0');
  if(!lastPlayed) return 0;
  const unlockAt = lastPlayed + 24 * 60 * 60 * 1000; // 24 hours later
  const remaining = unlockAt - Date.now();
  return remaining > 0 ? remaining : 0;
}

function formatCountdown(ms){
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

let quizCountdownTimer = null;

function showQuizStart(){
  document.getElementById('q-start').classList.remove('hidden');
  document.getElementById('qplay').classList.add('hidden');
  document.getElementById('q-result').classList.add('hidden');
  document.getElementById('qs-total').textContent = totSc + ' pts';
  document.getElementById('qs-streak').textContent = streak;
  updateQuizLockUI();
}

function updateQuizLockUI(){
  const lockMs = getQuizLockMs();
  const startBtn = document.getElementById('quiz-start-btn');
  const limitMsg = document.getElementById('quiz-limit-msg');

  if(quizCountdownTimer) clearInterval(quizCountdownTimer);

  if(lockMs > 0){
    startBtn.disabled = true;
    startBtn.textContent = '🔒 Quiz Lock Hai';
    startBtn.style.opacity = '0.55';
    limitMsg.style.display = 'block';
    limitMsg.innerHTML = `⏳ Agli baar <strong style="color:var(--gold)">${formatCountdown(lockMs)}</strong> mein khel sakte ho`;

    // Live countdown
    quizCountdownTimer = setInterval(() => {
      const rem = getQuizLockMs();
      if(rem <= 0){
        clearInterval(quizCountdownTimer);
        updateQuizLockUI();
      } else {
        limitMsg.innerHTML = `⏳ Agli baar <strong style="color:var(--gold)">${formatCountdown(rem)}</strong> mein khel sakte ho`;
      }
    }, 1000);
  } else {
    startBtn.disabled = false;
    startBtn.textContent = '▶ Quiz Shuru Karein (5 Sawaal)';
    startBtn.style.opacity = '1';
    limitMsg.style.display = 'none';
  }
}

function beginQuiz(){
  if(getQuizLockMs() > 0){ return; }
  localStorage.setItem('quiz_last_played', Date.now().toString());
  document.getElementById('q-start').classList.add('hidden');
  document.getElementById('qplay').classList.remove('hidden');
  document.getElementById('q-result').classList.add('hidden');
  // Merge default + admin-added questions
  const extraQ = JSON.parse(localStorage.getItem('extra_quiz') || '[]');
  const allQ = [...QB, ...extraQ];
  qQs=shuffle([...allQ]).slice(0,5); qIdx=0; qSc=0; showQ();
}

function startQuiz(){
  showQuizStart();
}
function showQ(){
  if(qIdx>=qQs.length){ showResult(); return; }
  const q=qQs[qIdx];
  document.getElementById('q-fill').style.width=(qIdx/qQs.length*100)+'%';
  document.getElementById('q-num').textContent=`Sawal ${qIdx+1} / ${qQs.length}`;
  document.getElementById('q-cat').textContent=q.c;
  document.getElementById('q-q').textContent=q.q;
  document.getElementById('q-exp').style.display='none';
  document.getElementById('q-nxt').classList.add('hidden');
  const oc=document.getElementById('q-opts'); oc.innerHTML='';
  ['A','B','C','D'].forEach((lbl,i)=>{
    const b=document.createElement('button'); b.className='qopt';
    b.textContent=`${lbl}) ${q.o[i]}`; b.onclick=()=>checkA(i,q,b); oc.appendChild(b);
  });
  clearInterval(qTmr); let s=30;
  const te=document.getElementById('q-tmr'); te.textContent=`⏱ ${s}s`; te.className='qtmr';
  qTmr=setInterval(()=>{ s--; te.textContent=`⏱ ${s}s`; if(s<=8) te.className='qtmr urg'; if(s<=0){ clearInterval(qTmr); autoTO(q); } },1000);
}
function checkA(sel,q,cb){
  clearInterval(qTmr);
  document.querySelectorAll('.qopt').forEach(b=>b.disabled=true);
  document.querySelectorAll('.qopt')[q.a].classList.add('ok');
  if(sel!==q.a) cb.classList.add('ng'); else qSc++;
  const ee=document.getElementById('q-exp'); ee.textContent=`💡 ${q.e}`; ee.style.display='block';
  document.getElementById('q-nxt').classList.remove('hidden');
}
function autoTO(q){
  document.querySelectorAll('.qopt').forEach(b=>b.disabled=true);
  document.querySelectorAll('.qopt')[q.a].classList.add('ok');
  const ee=document.getElementById('q-exp'); ee.textContent=`⏰ Waqt khatam! 💡 ${q.e}`; ee.style.display='block';
  document.getElementById('q-nxt').classList.remove('hidden');
}
function nextQ(){ qIdx++; showQ(); }
function showResult(){
  document.getElementById('qplay').classList.add('hidden');
  document.getElementById('q-result').classList.remove('hidden');
  const pct=Math.round(qSc/qQs.length*100);
  document.getElementById('r-sc').textContent=`${qSc}/${qQs.length}`;
  const msgs=['Himmat rakho, kal phir koshish! 🤲','Achi koshish! Seekhte raho 📚','Acha jawab, Shabash! 👍','Waah! Bahut khoob! 🌟','Perfect! SubhanAllah! 🏆'];
  document.getElementById('r-msg').textContent=msgs[Math.min(4,Math.floor(pct/21))];
  const td2=new Date().toISOString().slice(0,10);
  if(lastQD!==td2){ streak++; lastQD=td2; localStorage.setItem('str',streak); localStorage.setItem('lqd',td2); }
  totSc+=qSc; localStorage.setItem('ts',totSc);
  qprog.unshift({dt:td2,sc:qSc,tot:qQs.length}); if(qprog.length>7) qprog=qprog.slice(0,7);
  localStorage.setItem('qp',JSON.stringify(qprog));
  // Save quiz score locally
  saveQuizScore(qSc, qQs.length, td2);
  document.getElementById('r-str').textContent=streak;
  document.getElementById('r-tot').textContent=totSc;

  const lockMs = getQuizLockMs();
  const nextTxt = lockMs > 0
    ? `<div style="color:#ffb74d;font-size:12px;margin-bottom:10px;padding:8px;background:rgba(255,183,77,.08);border-radius:8px;text-align:center">🔒 Agla quiz <strong>${formatCountdown(lockMs)}</strong> mein unlock hoga</div>`
    : '';

  document.getElementById('lb').innerHTML = nextTxt + (qprog.map((p,i)=>
    `<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,215,0,.07)">
      <span style="color:var(--txtd);font-size:11.5px">${i+1}. ${p.dt}</span>
      <span style="color:var(--gold);font-weight:700;font-size:11.5px">${p.sc}/${p.tot}</span>
    </div>`).join('') || '<div style="font-size:11.5px;color:var(--txtd)">Abhi koi record nahi</div>');
}

/* ══════════════════════════════════════
   NAMAZ
══════════════════════════════════════ */
function renderNamaz(){
  const e=getTodayEntry(); const now=new Date();
  document.getElementById('n-date').textContent=now.toLocaleDateString('hi-IN',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});
  // Load saved namaz times (admin can override)
  const nz = JSON.parse(localStorage.getItem('namaz_times') || 'null');
  const fajr  = (e && !nz) ? e.sh : (nz ? nz.fajr   : '05:20');
  const dhuhr = nz ? nz.dhuhr   : '12:28';
  const asr   = nz ? nz.asr     : '16:08';
  const magh  = (e && !nz) ? e.ih : (nz ? nz.maghrib : '18:22');
  const isha  = nz ? nz.isha    : '19:38';
  const ps=[
    {nm:'🌙 Fajr (Sehri)',  t:fajr,  g:false},
    {nm:'☀️ Dhuhr',         t:dhuhr, g:false},
    {nm:'🌤 Asr',           t:asr,   g:false},
    {nm:'🌅 Maghrib (Iftar)',t:magh, g:true},
    {nm:'🌑 Isha + Tarawih',t:isha,  g:false},
  ];
  const nowM=now.getHours()*60+now.getMinutes();
  let nxt=-1; ps.forEach((p,i)=>{ const[h,m]=p.t.split(':').map(Number); if((h*60+m)>nowM&&nxt===-1) nxt=i; });
  const c=document.getElementById('n-rows'); c.innerHTML='';
  ps.forEach((p,i)=>{
    const fv=fmt(p.t);
    const row=document.createElement('div'); row.className=`nrow${i===nxt?' nxt':''}`;
    row.innerHTML=`<div class="nname" style="${p.g?'color:var(--gold)':''}">${p.nm}${i===nxt?'<span class="nbdg">AAGLA</span>':''}</div>
      <div class="ntime">${fv.v} <span style="font-size:10.5px;color:var(--txts)">${fv.ap}</span></div>`;
    c.appendChild(row);
  });
}

/* ══ NETWORK STATUS MONITOR ══ */


window.addEventListener('online',  () => updateChatNetStatus());
window.addEventListener('offline', () => updateChatNetStatus());















/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
/* ══════════════════════════════════════
   SETTINGS
══════════════════════════════════════ */
function saveSetting(key, val){
  const s = JSON.parse(localStorage.getItem('app_settings') || '{}');
  s[key] = val;
  localStorage.setItem('app_settings', JSON.stringify(s));
}
function getSetting(key, def){
  const s = JSON.parse(localStorage.getItem('app_settings') || '{}');
  return s[key] !== undefined ? s[key] : def;
}

/* helper: click toggle from row tap */
function stToggle(id){
  const el = document.getElementById(id);
  if(el){ el.checked = !el.checked; el.dispatchEvent(new Event('change')); }
}

function applyTheme(isDark){
  document.body.classList.toggle('light-mode', !isDark);
  saveSetting('dark_mode', isDark);
  const tog = document.getElementById('tog-dark');
  if(tog) tog.checked = isDark;
  const sub = document.getElementById('dark-st');
  const ic  = document.getElementById('dark-ic');
  if(sub) sub.textContent = isDark ? 'Dark (Default)' : 'Light Mode ON';
  if(ic)  ic.textContent  = isDark ? '🌙' : '☀️';
}

function setFontSize(size){
  const sizes  = {small:'13px', medium:'15px', large:'17px'};
  const labels = {small:'Chhota (A)', medium:'Medium (A)', large:'Bada (A)'};
  document.documentElement.style.fontSize = sizes[size] || '15px';
  const lbl = document.getElementById('st-font-lbl');
  if(lbl) lbl.textContent = labels[size];
  ['fb-s','fb-m','fb-l'].forEach(id => {
    const b = document.getElementById(id);
    if(b) b.classList.remove('stfb-on');
  });
  const map = {small:'fb-s', medium:'fb-m', large:'fb-l'};
  const active = document.getElementById(map[size]);
  if(active) active.classList.add('stfb-on');
  saveSetting('font_size', size);
}

function toggleStars(show){
  const stars = document.getElementById('stars');
  if(stars) stars.style.display = show ? '' : 'none';
  saveSetting('stars', show);
}

function testSound(){
  // MUST unlock AudioContext on user gesture first
  try {
    const ctx = getAudioCtx();
    if(ctx.state === 'suspended') ctx.resume();
  } catch(e){}

  playIslamicTone('iftar');
  if(navigator.vibrate) navigator.vibrate([300,100,300,100,600]);

  // Show Islamic message popup
  _forceShowPopup({
    icon: '🎵',
    title: 'Islamic Ringtone Test',
    arabic: 'الصَّلَاةُ خَيْرٌ مِّنَ النَّوْمِ',
    msg: 'Yeh awaaz Sehri, Iftar aur Namaz par aayegi\nPhone ka volume check karein 🌙',
    type: 'iftar',
    duration: 9000
  });

  // Browser notification bhi bhejo
  if(Notification.permission === 'granted'){
    try {
      new Notification('🎵 Islamic Ringtone Test', {
        body: 'الصَّلَاةُ خَيْرٌ مِّنَ النَّوْمِ\nYeh awaaz Sehri/Iftar par aayegi!',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiByeD0iMTYiIGZpbGw9IiMwNDBjMDQiLz48dGV4dCB5PSI3OCIgeD0iNiIgZm9udC1zaXplPSI3NiI+8J+MiTwvdGV4dD48L3N2Zz4=',
        tag: 'test-' + Date.now(),
        vibrate: [300,100,300,100,600]
      });
    } catch(e){}
  }
}

async function enableNotifFromSettings(){
  const btn = document.getElementById('st-notif-btn');
  if(btn){ btn.textContent = '⏳...'; btn.disabled = true; }

  // Unlock audio on this user click gesture
  try {
    const ctx = getAudioCtx();
    if(ctx.state === 'suspended') await ctx.resume();
  } catch(e){}

  const granted = await requestNotificationPermission();
  updateSettingsNotifUI();

  if(granted){
    setTimeout(() => {
      playIslamicTone('namaz');
      if(navigator.vibrate) navigator.vibrate([200,100,200,100,400]);
      _forceShowPopup({
        icon: '✅',
        title: 'Notifications Active! 🌙',
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        msg: 'Sehri, Iftar aur Namaz — teeno ka alert\nIslamic ringtone ke saath milega! ✅',
        type: 'iftar',
        duration: 10000
      });
      try {
        new Notification('✅ Ramzan Alerts Active! 🌙', {
          body: 'بِسْمِ اللَّهِ\nSehri, Iftar aur Namaz notifications ON ho gayi!',
          icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiByeD0iMTYiIGZpbGw9IiMwNDBjMDQiLz48dGV4dCB5PSI3OCIgeD0iNiIgZm9udC1zaXplPSI3NiI+8J+MiTwvdGV4dD48L3N2Zz4=',
          tag: 'notif-enabled',
          vibrate: [200,100,400],
          requireInteraction: false
        });
      } catch(e){}
    }, 500);
  } else {
    if(btn){ btn.disabled = false; }
  }
}

function updateSettingsNotifUI(){
  const btn    = document.getElementById('st-notif-btn');
  const status = document.getElementById('st-notif-status');
  if(!btn || !status) return;
  btn.className = 'st-enb';
  if(!('Notification' in window)){
    status.textContent = '❌ Is browser mein support nahi'; status.style.color='#ef5350';
    btn.textContent='N/A'; btn.classList.add('st-blocked'); btn.disabled=true; return;
  }
  const p = Notification.permission;
  if(p === 'granted'){
    status.textContent = '✅ Active! Sehri, Iftar, Namaz alerts milenge';
    status.style.color = '#34c759';
    btn.textContent = '✅ ON'; btn.classList.add('st-on'); btn.disabled = false;
  } else if(p === 'denied'){
    status.textContent = '❌ Blocked — Browser settings > Notifications se allow karein';
    status.style.color = '#ef5350';
    btn.textContent = '🚫 Blocked'; btn.classList.add('st-blocked'); btn.disabled = true;
  } else {
    status.textContent = 'Tap "Enable" karke alerts ON karein';
    status.style.color = '';
    btn.textContent = 'Enable'; btn.disabled = false;
  }
}

function resetFromSettings(){
  if(!confirm('Quiz lock reset karein? Aap phir se khel sakenge.')) return;
  localStorage.removeItem('quiz_last_played');
  updateQuizLockInfo();
  if(typeof updateQuizLockUI === 'function') updateQuizLockUI();
  showAlertBanner('<div>✅ Quiz lock reset ho gaya! Ab khel sakte hain 🎯</div>', '#0a3d13', 4000);
}

function updateQuizLockInfo(){
  const el = document.getElementById('st-quiz-lock');
  if(!el) return;
  const lockMs = getQuizLockMs();
  if(lockMs <= 0){
    el.textContent = '✅ Unlocked — Khel sakte hain!';
    el.style.color = '#4caf50';
  } else {
    el.textContent = `🔒 ${formatCountdown(lockMs)} mein unlock hoga`;
    el.style.color = '#ffb74d';
  }
}

function clearAllData(){
  if(!confirm('⚠️ Saara data delete hoga — Score, Streak, Settings sab! Confirm?')) return;
  if(!confirm('Pakka sure hain? Yeh wapas nahi aayega!')) return;
  const keep = ['user']; // keep login
  const user = localStorage.getItem('user');
  localStorage.clear();
  if(user) localStorage.setItem('user', user);
  showAlertBanner('<div>✅ Data clear ho gaya — App refresh ho raha hai!</div>', '#1a0a00', 3000);
  setTimeout(()=>location.reload(), 2500);
}

function loadSettingsScreen(){
  // Profile
  if(currentUser){
    const n = document.getElementById('st-name');
    const p = document.getElementById('st-phone');
    const b = document.getElementById('st-badge');
    if(n) n.textContent = currentUser.name;
    if(p) p.textContent = '+91 ' + currentUser.phone;
    if(b) b.textContent = isAdmin ? '👑 Admin' : '🌙 User';
  }
  // Stats
  const rozaLeft = (() => { const e=getTodayEntry(); if(!e) return '—'; return 30 - e.r + 1; })();
  const sEl = (id,v) => { const e=document.getElementById(id); if(e) e.textContent=v; };
  sEl('st-streak', streak); sEl('st-pts', totSc); sEl('st-deed-pts', dPts); sEl('st-roza-left', rozaLeft);
  // Apply saved settings → toggles
  const dark   = getSetting('dark_mode', true);
  const fSize  = getSetting('font_size', 'medium');
  const stars  = getSetting('stars', true);
  applyTheme(dark);
  setFontSize(fSize);
  toggleStars(stars);
  const setChk = (id, val) => { const el=document.getElementById(id); if(el) el.checked=val; };
  setChk('tog-stars',       stars);
  setChk('tog-sehri',       getSetting('sehri_alert', true));
  setChk('tog-iftar',       getSetting('iftar_alert', true));
  setChk('tog-namaz-alert', getSetting('namaz_alert', true));
  setChk('tog-sound',       getSetting('sound', true));
  // Notification button UI
  updateSettingsNotifUI();
  // Quiz lock countdown
  updateQuizLockInfo();
  if(window._stTimer) clearInterval(window._stTimer);
  window._stTimer = setInterval(updateQuizLockInfo, 1000);
}


/* Home screen notification button */
async function enableNotifications(){
  const btn = document.getElementById('notif-btn');
  if(btn){ btn.textContent='⏳ Permission...'; btn.disabled=true; }
  const granted = await requestNotificationPermission();
  updateNotifUI();
  updateSettingsNotifUI();
  if(granted){
    setTimeout(() => {
      fireAlert('test',
        '✅ Notifications Active!',
        'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        'Sehri, Iftar aur Namaz alerts milenge!\nIslamic ringtone ke saath 🌙',
        'Sehri, Iftar & Namaz notifications ON! 🌙',
        'ramzan-enabled-' + Date.now()
      );
      // Schedule background alerts via Service Worker
      scheduleAllAlerts();
    }, 600);
  }
}

function updateNotifUI(){
  const btn    = document.getElementById('notif-btn');
  const status = document.getElementById('notif-status');
  if(!btn || !status) return;
  if(!('Notification' in window)){
    btn.textContent='❌ Supported Nahi'; btn.disabled=true; return;
  }
  if(Notification.permission === 'granted'){
    btn.textContent='✅ Notifications ON';
    btn.style.background='#2e7d32'; btn.style.color='#fff';
    status.style.color='#4caf50';
    status.textContent='✅ Sehri, Iftar, Namaz alerts + Islamic ringtone active!';
  } else if(Notification.permission === 'denied'){
    btn.textContent='❌ Blocked'; btn.disabled=true;
    status.style.color='#ef5350';
    status.textContent='Browser settings se notifications allow karein';
  } else {
    btn.textContent='🔔 Notifications Enable Karein';
    btn.disabled=false;
  }
}

/* ══ TOPBAR PROFILE DROPDOWN ══ */
function toggleProfileMenu(e){
  e.stopPropagation();
  const drop = document.getElementById('profile-drop');
  const isOpen = drop.classList.contains('open');
  closeProfileMenu();
  if(!isOpen){
    drop.classList.add('open');
    document.getElementById('tb-arr').textContent = '▴';
    pdRefresh();
  }
}

function closeProfileMenu(){
  const drop = document.getElementById('profile-drop');
  if(drop) drop.classList.remove('open');
  const arr = document.getElementById('tb-arr');
  if(arr) arr.textContent = '▾';
}

// Close on outside click
document.addEventListener('click', function(e){
  const drop = document.getElementById('profile-drop');
  const user = document.querySelector('.topbar-user');
  if(drop && !drop.contains(e.target) && user && !user.contains(e.target)){
    closeProfileMenu();
  }
});

function pdRefresh(){
  // Sync user info
  if(currentUser){
    const n = document.getElementById('pd-name');
    const p = document.getElementById('pd-phone');
    if(n) n.textContent = currentUser.name || '—';
    if(p) p.textContent = '+91 ' + (currentUser.phone || '—');
  }

  const isDark = getSetting('dark_mode', true);
  const fs = getSetting('font_size', 'medium');
  const stars = getSetting('stars', true);

  // Theme
  const ic = document.getElementById('pd-theme-ic');
  const st = document.getElementById('pd-theme-st');
  const tog = document.getElementById('pd-theme-tog');
  if(ic) ic.textContent = isDark ? '🌙' : '☀️';
  if(st) st.textContent = isDark ? 'Dark Mode' : 'Light Mode';
  if(tog) tog.textContent = isDark ? '🌑' : '☀️';

  // Font size
  ['s','m','l'].forEach(f => {
    const btn = document.getElementById('pd-fs-' + f);
    if(btn) btn.classList.toggle('active',
      (f==='s'&&fs==='small')||(f==='m'&&fs==='medium')||(f==='l'&&fs==='large'));
  });

  // Stars
  const sst = document.getElementById('pd-stars-st');
  const stog = document.getElementById('pd-stars-tog');
  if(sst) sst.textContent = stars ? 'Animation ON' : 'Animation OFF';
  if(stog) stog.textContent = stars ? '⭐' : '—';

  // Admin button visibility
  const adminBtn = document.getElementById('admin-btn');
  if(adminBtn){
    if(isAdmin) adminBtn.classList.remove('hidden');
    else adminBtn.classList.add('hidden');
  }
}

function pdToggleTheme(){
  const isDark = getSetting('dark_mode', true);
  saveSetting('dark_mode', !isDark);
  applyTheme(!isDark);
  pdRefresh();
  lnMenuRefresh();
  const tog = document.getElementById('tog-dark');
  if(tog) tog.checked = !isDark;
}

function pdSetFont(size){
  saveSetting('font_size', size);
  setFontSize(size);
  pdRefresh();
  lnMenuRefresh();
}

function pdToggleStars(){
  const stars = getSetting('stars', true);
  saveSetting('stars', !stars);
  toggleStars(!stars);
  pdRefresh();
  lnMenuRefresh();
  const tog = document.getElementById('tog-stars');
  if(tog) tog.checked = !stars;
}

function pdGoSettings(){
  closeProfileMenu();
  // Navigate to settings screen
  document.querySelectorAll('.sc').forEach(s=>s.classList.remove('on'));
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));
  const sc = document.getElementById('sc-settings');
  if(sc){ sc.classList.add('on'); loadSettingsScreen(); }
}

// Update topbar avatar/name when showApp called
function updateTopbarProfile(){
  if(!currentUser) return;
  const nm = document.getElementById('tb-name');
  const ph = document.getElementById('tb-phone');
  if(nm) nm.textContent = currentUser.name;
  if(ph) ph.textContent = '+91 ' + currentUser.phone;
}

/* ══ LOGIN SCREEN THREE-DOT MENU ══ */
function toggleLnMenu(e){
  e.stopPropagation();
  const menu = document.getElementById('ln-menu');
  menu.classList.toggle('open');
  lnMenuRefresh();
}

// Close menu when clicking outside
document.addEventListener('click', function(e){
  const menu = document.getElementById('ln-menu');
  if(menu && !menu.contains(e.target) && !e.target.classList.contains('ln-menu-btn')){
    menu.classList.remove('open');
  }
});

function lnMenuRefresh(){
  const isDark = getSetting('dark_mode', true);
  const fs = getSetting('font_size', 'medium');
  const stars = getSetting('stars', true);

  const ic = document.getElementById('ln-theme-ic');
  const st = document.getElementById('ln-theme-st');
  const tog = document.getElementById('ln-theme-tog');
  if(ic) ic.textContent = isDark ? '🌙' : '☀️';
  if(st) st.textContent = isDark ? 'Dark Mode ON' : 'Light Mode ON';
  if(tog) tog.textContent = isDark ? '🌑' : '☀️';

  ['s','m','l'].forEach(f => {
    const btn = document.getElementById('ln-fs-' + f);
    if(btn) btn.classList.toggle('active', 
      (f==='s'&&fs==='small')||(f==='m'&&fs==='medium')||(f==='l'&&fs==='large'));
  });

  const stEl = document.getElementById('ln-stars-st');
  const stTog = document.getElementById('ln-stars-tog');
  if(stEl) stEl.textContent = stars ? 'Animation ON' : 'Animation OFF';
  if(stTog) stTog.textContent = stars ? '⭐' : '🔇';
}

function lnToggleTheme(){
  const isDark = getSetting('dark_mode', true);
  saveSetting('dark_mode', !isDark);
  applyTheme(!isDark);
  lnMenuRefresh();
  // Also sync settings screen toggle if open
  const tog = document.getElementById('tog-dark');
  if(tog) tog.checked = !isDark;
}

function lnSetFont(size){
  saveSetting('font_size', size);
  setFontSize(size);
  lnMenuRefresh();
  // Sync settings screen
  const btn = document.getElementById('fb-' + size[0]);
  // highlight active
  ['fb-s','fb-m','fb-l'].forEach(id => {
    const b = document.getElementById(id);
    if(b) b.classList.remove('stfb-on');
  });
  const active = document.getElementById('fb-' + size[0]);
  if(active) active.classList.add('stfb-on');
}

function lnToggleStars(){
  const stars = getSetting('stars', true);
  saveSetting('stars', !stars);
  toggleStars(!stars);
  lnMenuRefresh();
  const tog = document.getElementById('tog-stars');
  if(tog) tog.checked = !stars;
}

function initApp(){
  renderHome();
  renderTT();
  renderDaily();
  loadExtraDuas();
  setTimeout(updateNotifUI, 300);
  // Apply saved settings on startup
  applyTheme(getSetting('dark_mode', true));
  setFontSize(getSetting('font_size', 'medium'));
  toggleStars(getSetting('stars', true));
}

/* ══════════════════════════════════════
   SERVICE WORKER — Background Notifications
══════════════════════════════════════ */
/* ══ NOTIFICATION + ALERT SYSTEM — GitHub Pages Compatible ══
   Pure JS timers — works everywhere without Service Worker
════════════════════════════════════════════════════════════ */

// Request notification permission
async function askNotifPermission(){
  if(!('Notification' in window)) return false;
  if(Notification.permission === 'granted') return true;
  if(Notification.permission === 'denied') return false;
  const p = await Notification.requestPermission();
  return p === 'granted';
}

// Show system notification directly
function showSysNotif(title, body, tag, req){
  try{
    if(Notification.permission !== 'granted') return;
    const n = new Notification(title, {
      body: body,
      tag: tag || 'ramzan',
      requireInteraction: !!req,
      silent: false,
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiByeD0iMTYiIGZpbGw9IiMwNDBjMDQiLz48dGV4dCB5PSI3OCIgeD0iNiIgZm9udC1zaXplPSI3NiI+8J+MiTwvdGV4dD48L3N2Zz4='
    });
    n.onclick = ()=>{ window.focus(); n.close(); };
  } catch(e){ console.warn('notif err:', e); }
}

// Scheduled alerts store
const _alertTimers = {};

function scheduleAlert(key, fireAtMs, callback){
  if(_alertTimers[key]) clearTimeout(_alertTimers[key]);
  const delay = fireAtMs - Date.now();
  if(delay < 0 || delay > 24*60*60*1000) return; // skip past or >24h future
  _alertTimers[key] = setTimeout(callback, delay);
  console.log('Alert scheduled:', key, 'in', Math.round(delay/1000/60), 'min');
}

function scheduleAllAlerts(){
  const tod = getTodayEntry();
  if(!tod) return;

  const savedNz = JSON.parse(localStorage.getItem('namaz_times') || 'null');

  function timeToMs(hhmm){
    const [h,m] = hhmm.split(':').map(Number);
    const d = new Date();
    d.setHours(h, m, 0, 0);
    return d.getTime();
  }

  // ── SEHRI END ──
  if(getSetting('sehri_alert', true)){
    const sF = fmt(tod.sh);
    scheduleAlert('sehri', timeToMs(tod.sh), ()=>{
      tone('sehri');
      showSysNotif(
        '🌄 SEHRI KHATAM — ' + sF.v + ' ' + sF.ap + ' — ROZA SHURU!',
        'نَوَيْتُ أَنْ أَصُومَ — Roza shuru! Fajr ki namaz padhen! 🌙',
        'sehri-end', true
      );
    });
  }

  // ── IFTAR ──
  if(getSetting('iftar_alert', true)){
    const iF = fmt(tod.ih);
    scheduleAlert('iftar', timeToMs(tod.ih), ()=>{
      tone('iftar');
      showSysNotif(
        '🌅 IFTAR — ' + iF.v + ' ' + iF.ap + ' — MUBARAK!',
        'اللَّهُمَّ إِنِّي لَكَ صُمْتُ — Allahu Akbar! Iftar ka waqt! 🌙',
        'iftar-now', true
      );
    });
  }

  // ── NAMAZ ──
  if(getSetting('namaz_alert', true)){
    const NZ = [
      {key:'fajr',    name:'Fajr',    emoji:'🌙', t: savedNz?.fajr    || tod.sh || '05:20'},
      {key:'dhuhr',   name:'Dhuhr',   emoji:'☀️', t: savedNz?.dhuhr   || '12:28'},
      {key:'asr',     name:'Asr',     emoji:'🌤', t: savedNz?.asr     || '16:08'},
      {key:'maghrib', name:'Maghrib', emoji:'🌅', t: savedNz?.maghrib || tod.ih},
      {key:'isha',    name:'Isha',    emoji:'🌑', t: savedNz?.isha    || '19:38'},
    ];
    NZ.forEach(nz=>{
      const nF = fmt(nz.t);
      scheduleAlert('namaz-'+nz.key, timeToMs(nz.t), ()=>{
        tone('namaz');
        showSysNotif(
          nz.emoji + ' ' + nz.name + ' — ' + nF.v + ' ' + nF.ap + ' — Namaz ka Waqt!',
          'حَيَّ عَلَى الصَّلَاةِ — Allahu Akbar! Wuzu karein aur namaz padhen 🕌',
          'namaz-' + nz.key, false
        );
      });
    });
  }

  console.log('✅ All alerts scheduled!');
}

document.addEventListener('DOMContentLoaded',()=>{
  mkStars();
  // Auto-login if user saved
  if(currentUser){
    // Always re-check admin status by phone number
    isAdmin = (currentUser.phone === ADMIN_PHONE) || currentUser.isAdmin || false;
    currentUser.isAdmin = isAdmin;
    showApp();
  }
  // Phone field — numbers only
  document.getElementById('ln-phone').addEventListener('input', function(){
    this.value = this.value.replace(/[^0-9]/g,'');
  });
  // Enter key on login
  document.getElementById('ln-phone').addEventListener('keydown', e=>{ if(e.key==='Enter') doLogin(); });
  document.getElementById('ln-name').addEventListener('keydown', e=>{ if(e.key==='Enter') document.getElementById('ln-phone').focus(); });
});