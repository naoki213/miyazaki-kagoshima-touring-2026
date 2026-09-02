'use client';
import {useEffect,useState} from 'react';
import {Bike,CalendarDays,Check,ChevronRight,Coffee,ExternalLink,Hotel,MapPin,Mountain,Navigation,Ship,Sparkles,Utensils} from 'lucide-react';
type Stop={time:string;title:string;note:string;ride?:string;type:'ride'|'rest'|'spot'|'food'|'hotel'|'ship';query:string};
const day1:Stop[]=[
{time:'08:40',title:'宮崎港 到着',note:'下船・荷物整理。9:15出発を目安に。',type:'ship',query:'宮崎港フェリーターミナル'},
{time:'10:00',title:'道の駅 フェニックス',note:'日南海岸を眺めながら最初の休憩。日向夏ソフトも。',ride:'約45分',type:'rest',query:'道の駅 フェニックス 宮崎'},
{time:'10:50',title:'鵜戸神宮',note:'海沿いの参道を歩いて参拝。滞在45〜50分。',ride:'約25分',type:'spot',query:'鵜戸神宮'},
{time:'12:10',title:'しゃんしゃん茶屋 日南店',note:'昼食は宮崎名物チキン南蛮。',ride:'約30分',type:'food',query:'しゃんしゃん茶屋 日南店'},
{time:'13:20',title:'日南海岸 小休憩',note:'道の駅なんごうは休館予定。海沿いで10〜15分休憩。',ride:'約25分',type:'rest',query:'栄松ビーチ 日南'},
{time:'14:15',title:'都井岬・小松ヶ丘',note:'御崎馬と太平洋の絶景。ゆっくり約60分。',ride:'約40分',type:'spot',query:'都井岬 小松ヶ丘'},
{time:'16:00',title:'道の駅 くしま',note:'ホテルまで一気に走らず20〜30分休憩。',ride:'約35分',type:'rest',query:'道の駅 くしま'},
{time:'17:45',title:'ビジネスホテルしらさぎ',note:'チェックイン後、風呂と着替えでひと休み。',ride:'約1時間15分',type:'hotel',query:'ビジネスホテルしらさぎ 鹿屋'},
{time:'19:00',title:'鹿屋で夕食',note:'第一候補はとんかつ竹亭。うなぎの川豊も候補。',type:'food',query:'とんかつ竹亭 鹿屋本店'}];
const day2:Stop[]=[
{time:'09:00',title:'ホテル出発',note:'フェリー優先で余裕をもってスタート。',type:'ride',query:'ビジネスホテルしらさぎ 鹿屋'},
{time:'09:40',title:'道の駅 たるみずはまびら',note:'桜島を眺めながらコーヒー休憩。約20分。',ride:'約40分',type:'rest',query:'道の駅 たるみずはまびら'},
{time:'10:30',title:'有村溶岩展望所',note:'溶岩原を散策。ここから桜島一周へ。',ride:'約30分',type:'spot',query:'有村溶岩展望所'},
{time:'11:20',title:'黒神埋没鳥居',note:'大正噴火の記憶を残す鳥居。滞在15〜20分。',ride:'約25分',type:'spot',query:'黒神埋没鳥居'},
{time:'12:00',title:'味の里 珍満',note:'桜島で鹿児島らしい昼ごはん。30〜40分で。',ride:'約15分',type:'food',query:'味の里 珍満 桜島'},
{time:'13:00',title:'湯之平展望所',note:'北岳4合目、桜島で最も高い一般立入地点。約25分。',ride:'約25分',type:'spot',query:'湯之平展望所'},
{time:'14:00',title:'道の駅 たるみず',note:'時間に余裕がある場合のみ、10〜15分の最終休憩。',ride:'約45分',type:'rest',query:'道の駅 たるみず 湯っ足り館'},
{time:'15:30',title:'志布志港 到着',note:'15:00受付開始／16:00乗船開始／17:00出港。',ride:'約1時間15分',type:'ship',query:'志布志港 フェリーターミナル'}];
const checks=['免許証・車検証','フェリー予約画面','雨具・防寒インナー','モバイルバッテリー','ETCカード・現金','常備薬・救急用品','タイヤ空気圧チェック','ガソリン満タン'];
const iconMap={ride:Bike,rest:Coffee,spot:Mountain,food:Utensils,hotel:Hotel,ship:Ship};
const maps=(q:string)=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export default function Home(){const[day,setDay]=useState<1|2>(1);const[tab,setTab]=useState<'schedule'|'food'|'check'>('schedule');const[done,setDone]=useState<string[]>([]);useEffect(()=>{const s=localStorage.getItem('miyakago-checks');if(s)setDone(JSON.parse(s))},[]);const toggle=(x:string)=>setDone(p=>{const n=p.includes(x)?p.filter(y=>y!==x):[...p,x];localStorage.setItem('miyakago-checks',JSON.stringify(n));return n});const stops=day===1?day1:day2;return <main>
<section className="hero"><img src="./touring-hero.png" alt="日南海岸を望むツーリングバイク"/><div className="heroShade"/><div className="heroContent"><p className="eyebrow"><Sparkles size={14}/> MIYAZAKI → KAGOSHIMA</p><h1>海と火山を走る、<br/>2日間。</h1><p className="date"><CalendarDays size={17}/> 2026.10.10 SAT — 10.11 SUN</p></div></section>
<section className="tripSummary"><div><span>2 DAYS</span><strong>宮崎 → 鹿児島</strong></div><div className="summaryDivider"/><div><span>GOAL</span><strong>志布志港 15:30</strong></div></section>
<nav className="tabs" aria-label="アプリメニュー"><button className={tab==='schedule'?'active':''} onClick={()=>setTab('schedule')}><Navigation size={18}/>工程</button><button className={tab==='food'?'active':''} onClick={()=>setTab('food')}><Utensils size={18}/>グルメ</button><button className={tab==='check'?'active':''} onClick={()=>setTab('check')}><Check size={18}/>準備</button></nav>
{tab==='schedule'&&<section className="content"><div className="daySwitch"><button className={day===1?'selected':''} onClick={()=>setDay(1)}><b>DAY 1</b><span>日南海岸・都井岬</span></button><button className={day===2?'selected':''} onClick={()=>setDay(2)}><b>DAY 2</b><span>桜島一周・志布志</span></button></div><div className="notice"><Coffee size={18}/><p><b>休憩多めの安心プラン</b><br/>30〜60分走ったら、ひと息。時間は目安です。</p></div><div className="timeline">{stops.map((s,i)=>{const Icon=iconMap[s.type];return <article className="stop" key={s.time+s.title}><div className={`stopIcon ${s.type}`}><Icon size={19}/></div><div className="stopBody"><div className="stopTop"><time>{s.time}</time>{s.ride&&<span>🏍 {s.ride}</span>}</div><h2>{s.title}</h2><p>{s.note}</p><a href={maps(s.query)} target="_blank" rel="noreferrer"><Navigation size={16}/>ナビで開く<ChevronRight size={16}/></a></div>{i<stops.length-1&&<div className="line"/>}</article>})}</div></section>}
{tab==='food'&&<section className="content foodGrid"><header className="sectionHead"><span>LOCAL FOOD</span><h2>旅のごはん</h2><p>営業時間と定休日は出発前に再確認してください。</p></header>{[['DAY 1・昼','しゃんしゃん茶屋 日南店','チキン南蛮','しゃんしゃん茶屋 日南店'],['DAY 1・夜 第一候補','とんかつ竹亭 鹿屋本店','鹿児島のとんかつ','とんかつ竹亭 鹿屋本店'],['DAY 1・夜 もう一案','うなぎの川豊','うな重・うな丼','うなぎの川豊 鹿屋'],['DAY 2・昼','味の里 珍満','桜島ランチ','味の里 珍満 桜島']].map(([label,name,dish,q])=><article className="foodCard" key={name}><span>{label}</span><h3>{name}</h3><p>{dish}</p><a href={maps(q)} target="_blank" rel="noreferrer"><MapPin size={16}/>地図を見る<ExternalLink size={14}/></a></article>)}<div className="ferryCard"><Ship size={24}/><div><span>RETURN FERRY</span><h3>志布志 17:00 → 大阪 07:40</h3><p>15:30港着を厳守。バイクの乗船手続きは出港60分前まで。</p></div></div></section>}
{tab==='check'&&<section className="content"><header className="sectionHead"><span>BEFORE YOU RIDE</span><h2>出発前チェック</h2><p>{done.length} / {checks.length} 完了</p></header><div className="progress"><i style={{width:`${done.length/checks.length*100}%`}}/></div><div className="checkList">{checks.map(x=><button key={x} onClick={()=>toggle(x)} className={done.includes(x)?'done':''}><i><Check size={16}/></i><span>{x}</span></button>)}</div><button className="reset" onClick={()=>{setDone([]);localStorage.removeItem('miyakago-checks')}}>すべてリセット</button></section>}
<footer>安全運転で、よい旅を。<br/><small>天候・道路・営業時間は当日に再確認してください。</small></footer></main>}
