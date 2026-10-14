const MESSAGE = `Dear Beauty,

Even miles apart your cutie smile instantly warms my soul. 
I made this small digital gift with what my heart trusts, 
Hoping to bring you warmth and pure joy. 
No matter what comes our way through 
Every Laugh, Tear, Anger, or Quiet moment. 
I promise to stay stuck by your side like glue,
Comforting and pampering you always. 
You truly mean the entire world to me, now and forever.

— your Hubby`;

const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const song=$('#song');
const show=id=>{$$('section').forEach(s=>s.classList.toggle('on',s.id===id));scrollTo(0,0)};
$$('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));
$('#enter').onclick=()=>{$('#gate').remove();song.play().catch(()=>{})};
$('#mute').onclick=()=>{song.paused?song.play():song.pause()};

(function(){
    const rnd=(a,b)=>a+Math.random()*(b-a);
    const put=(id,x,y,a,k,cls,i)=>`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})"><g class="${cls}" style="animation-delay:${-i*.45}s"><use href="#${id}"/></g></g>`;
    const blade=(x,top,lean,w,c)=>`<path class="gr" fill="${c}" d="M${x} 396Q${x+lean*.3} ${top+120} ${x+lean} ${top}Q${x+lean*.3+w} ${top+130} ${x+w} 396Z"/>`;
    const fern=(x0,y0,cx,cy,x1,y1)=>{let o=`<path d="M${x0} ${y0}Q${cx} ${cy} ${x1} ${y1}" stroke="#1f8a3f" stroke-width="2.2" fill="none"/>`;
        for(let i=1;i<=12;i++){const t=i/13,u=1-t,x=u*u*x0+2*t*u*cx+t*t*x1,y=u*u*y0+2*t*u*cy+t*t*y1,an=Math.atan2(2*u*(cy-y0)+2*t*(y1-cy),2*u*(cx-x0)+2*t*(x1-cx))*180/Math.PI,k=.95-i*.05;
            o+=put('fl2',x,y,an-62,k,'bl2',i)+put('fl2',x,y,an+62,k,'bl2',i+3)}return o};

    const R=[[200,86,.95],[122,150,.95],[278,150,.95],[200,166,1.1]];

    const C=[[330,1],[296,1],[262,.95],[228,.85],[198,.7]];
    const S=[[178,310,.95],[160,273,.9],[142,230,.85],[130,193,.7]];
    let h=`<svg viewBox="0 0 400 420" aria-hidden="true"><defs>
<radialGradient id="gR" cx=".35" cy=".25" r=".9"><stop offset="0" stop-color="#f04558"/><stop offset=".55" stop-color="#b3001e"/><stop offset="1" stop-color="#650012"/></radialGradient>
<linearGradient id="gP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3223a"/><stop offset="1" stop-color="#a00a22"/></linearGradient>
<linearGradient id="gL" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#46c46a"/><stop offset="1" stop-color="#12602e"/></linearGradient>
<linearGradient id="gB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#238f45"/><stop offset="1" stop-color="#073418"/></linearGradient>
<radialGradient id="gG"><stop offset="0" stop-color="#ffb347" stop-opacity=".42"/><stop offset="1" stop-color="#ff7a30" stop-opacity="0"/></radialGradient>
<g id="rs">
<path d="M-4 16H4L0 34Z" fill="#23853f"/>
<path d="M-22-30C-30-12-18 4 0 6C18 4 30-12 22-30C14-44-14-44-22-30Z" fill="#7a0016"/>
<ellipse cx="0" cy="-33" rx="21" ry="9" fill="#4a000d"/>
<path d="M-17-33C-12-40 12-40 17-33C10-28-10-28-17-33Z" fill="#b30f28"/>
<path d="M-8-34C-4-38 6-38 8-34C4-31-4-31-8-34Z" fill="#e0314a"/>
<path d="M-22-30C-32-10-20 8-2 10C-14 0-18-14-14-28Z" fill="#c8102e"/>
<path d="M22-30C32-10 20 8 2 10C14 0 18-14 14-28Z" fill="#a50c24"/>
<path d="M-14-28C-18-8-6 8 6 8C20 6 22-12 14-28C6-22-6-22-14-28Z" fill="url(#gP)"/>
<path d="M-14-28C-6-22 6-22 14-28" fill="none" stroke="#ff7a86" stroke-width="2" stroke-linecap="round"/>
<path d="M-22-30C-30-12-24 4-8 9" fill="none" stroke="#ff6b7a" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>
<path d="M-18 14C-28 14-32 22-36 28C-24 28-14 25-5 20Z" fill="#2c9a4d"/>
<path d="M18 14C28 14 32 22 36 28C24 28 14 25 5 20Z" fill="#2c9a4d"/></g>
<g id="lf"><path d="M0 0C6-18 34-22 50 0Z" fill="#4fcf72"/><path d="M0 0C6 18 34 22 50 0Z" fill="#1f8a42"/><path d="M2 0H44" stroke="#c9f5d3" stroke-width="1.2" opacity=".7"/></g>
<g id="lr"><path d="M0 0C-4-24 44-28 56 0Z" fill="#46c46a"/><path d="M0 0C-4 24 44 28 56 0Z" fill="#17803a"/><path d="M2 0H48M18 0L28-10M18 0L28 10M32 0L42-8M32 0L42 8" stroke="#b6efc4" stroke-width="1" fill="none" opacity=".6"/></g>
<g id="ld"><path d="M0 0C-4-24 44-28 56 0Z" fill="#1f7d3d"/><path d="M0 0C-4 24 44 28 56 0Z" fill="#0b4a20"/><path d="M2 0H48" stroke="#5fbf7a" stroke-width="1" opacity=".4"/></g>
<path id="fl2" d="M0 0C6-5 22-6 36 0C22 6 6 5 0 0Z" fill="#2fa853"/>
<g id="ok"><path d="M0 0C-16-8-30-22-22-40C-16-34-14-40-14-52C-6-44-2-52 0-64C2-52 6-44 14-52C14-40 16-34 22-40C30-22 16-8 0 0Z" fill="url(#gL)"/><path d="M0 0V-58M0-18L-14-30M0-18L14-30M0-34L-10-44M0-34L10-44" stroke="#c9f5d3" stroke-width="1.2" fill="none" opacity=".6"/></g></defs>
<circle cx="200" cy="140" r="170" fill="url(#gG)" style="animation:halo 4s ease-in-out infinite;transform-origin:200px 140px"/>`;

    h+=`<g>`+[blade(76,260,8,6,'#1b7a38'),blade(100,310,-4,4,'#2a9a4b'),blade(324,260,-8,6,'#1b7a38'),blade(300,310,4,4,'#2a9a4b')].join('')+`</g>`;
    h+=`<g class="sw"><path d="M200 396C194 340 208 290 200 210" stroke="#2aa14f" stroke-width="9" stroke-linecap="round" fill="none"/>`;
    [[330,1],[286,0],[246,1]].forEach(([y,l],i)=>{const tx=l?196:204;h+=`<path d="M${tx} ${y} l${l?-7:7} 6 l${l?1:-1} -10Z" fill="#1d7a38"/>`});
    h+=put('lf',199,335,-152,1.9,'lv',0)+put('lf',201,292,-28,1.9,'lv',2)+put('lf',199,255,-150,1.4,'lv',1);
    h+=`<g transform="translate(200 150) scale(2.5)"><g class="fb"><use href="#rs"/></g></g></g>`;
    for(let a=-170;a<=-10;a+=20)h+=put('ld',200,396,a,Math.abs(a+90)<45?1.5:1.3,'bl2',a/20);
    for(let a=-155;a<=-25;a+=26)h+=put('lr',200,400,a,1.1,'bl2',a/26);
    for(let i=0;i<18;i++)h+=`<circle class="ff" cx="${rnd(40,360)}" cy="${rnd(20,300)}" r="${rnd(1.2,2.3)}" fill="#f6e27a" style="animation-duration:${rnd(3,6)}s;animation-delay:${-rnd(0,5)}s"/>`;
    $('#rose').innerHTML=h+'</svg>';


    const bg=document.createElement('div');bg.id='bgl';bg.innerHTML='<div class="mist"></div>';$('#menu').prepend(bg);
    for(let i=0;i<80;i++){const d=document.createElement('i'),z=rnd(1,3);d.className='st';
        d.style.cssText=`left:${rnd(0,100)}%;top:${rnd(0,92)}%;width:${z}px;height:${z}px;animation-delay:${-rnd(0,5)}s;animation-duration:${rnd(2,6)}s`;bg.appendChild(d)}
    setInterval(()=>{
        if(!$('#menu').classList.contains('on')||document.hidden)return;
        const e=document.createElement('div'),ring=Math.random()<.3,z=rnd(14,40),dur=rnd(6,12);
        e.className='bh'+(ring?' ring':'')+(!ring&&Math.random()<.3?' tr':'');e.textContent='♥';
        e.style.cssText=`left:${rnd(2,94)}%;top:${rnd(25,88)}%;font-size:${z}px;--dx:${rnd(-50,50)}px;animation-duration:${dur}s;`+(ring?`width:${z*2.2}px;height:${z*2.2}px`:'');
        bg.appendChild(e);setTimeout(()=>e.remove(),dur*1000+100);
    },450);
})();

setInterval(()=>{
    const e=document.createElement('div');e.className='petal';
    e.style.left=Math.random()*100+'vw';e.style.setProperty('--dx',(Math.random()*160-80)+'px');
    e.style.animationDuration=(5+Math.random()*5)+'s';document.body.appendChild(e);
    setTimeout(()=>e.remove(),10500);
},700);


setInterval(()=>{
    if(!$('#menu').classList.contains('on'))return;
    const r=$('#rose').getBoundingClientRect(),e=document.createElement('div');e.className='fly';
    e.style.left=(r.left+Math.random()*r.width*1.6-r.width*.3)+'px';e.style.top=(r.top+Math.random()*r.height)+'px';
    e.style.setProperty('--dx',(Math.random()*60-30)+'px');e.style.animationDuration=(3+Math.random()*3)+'s';
    document.body.appendChild(e);setTimeout(()=>e.remove(),6200);
},350);

$('#rose').onclick=()=>{
    const ro=$('#rose');ro.classList.remove('pop');void ro.offsetWidth;ro.classList.add('pop');
    const r=ro.getBoundingClientRect();
    for(let i=0;i<12;i++){
        const h=document.createElement('div');h.className='hrt';h.textContent=['❤️','🌹','💖','✨'][i%4];
        h.style.left=(r.left+60+Math.random()*80)+'px';h.style.top=(r.top+40+Math.random()*60)+'px';
        h.style.setProperty('--dx',(Math.random()*200-100)+'px');document.body.appendChild(h);setTimeout(()=>h.remove(),2000);
    }
};

$('#env').onclick=()=>{$('#env').style.display='none';const p=$('#paper');p.hidden=false;p.textContent=MESSAGE};


const cv=$('#cv'),g=cv.getContext('2d');g.imageSmoothingEnabled=false;
const W=480,H=270,S=2,HZ=150;
const keys={},press={};
const map={ArrowLeft:'left',a:'left',ArrowRight:'right',d:'right',ArrowUp:'up',w:'up',ArrowDown:'down',s:'down',' ':'hit',j:'hit',Shift:'dash',k:'dash',l:'throw',e:'throw'};
addEventListener('keydown',e=>{const k=map[e.key];if(k){if(!keys[k])press[k]=1;keys[k]=1;if(e.key===' '||e.key.startsWith('Arrow'))e.preventDefault()}});
addEventListener('keyup',e=>{const k=map[e.key];if(k)keys[k]=0});
$$('[data-k]').forEach(b=>{
    const k=b.dataset.k;
    b.onpointerdown=e=>{e.preventDefault();if(!keys[k])press[k]=1;keys[k]=1};
    ['pointerup','pointerleave','pointercancel'].forEach(ev=>b['on'+ev]=()=>keys[k]=0);
});

const PAL={O:'#2a0a14',K:'#16121f',H:'#3b3556',S:'#ffd2b0',E:'#1b1020',M:'#b0303a',P:'#ff8fa3',R:'#e0173f',r:'#a00f2b',L:'#ff5a78',N:'#5a3420',n:'#8a5a36',T:'#2a6fdb',t:'#6aa6ff',J:'#2b3a67'};
const GIRL=[".....OOOO.....","...OOKKKKOO...","..OKKHHKKKKO..",".OKKKKKKKKKKO.",".OKKSSSSSSKKO.",".OKSSSSSSSSKO.",".OKSSSSSSSSKO.",".OKSEESSEESKO.",".OKSEESSEESKO.",".OKSPSSSSPSKO.",".OKKSSMMSSKKO.",".OKKOSSSSOKKO.",".OKKKOSSOKKKO.",".OKKOOSSOOKKO.",".OKKRRRRRRKKO.",".OKRRLRRLRRKO.","..ORRRRRRRRO..","..ORRRrrRRRO..",".ORRRRRRRRRRO.",".ORRLRRRRLRRO.","ORRRRRRRRRRRRO","ORRRRRRRRRRRRO"];
const BOY=["....OOOOOO....","..OOBBBBBBOO..",".OBBbBBBBbBBO.",".OBBBBBBBBBBO.",".OBSSSSSSSSBO.",".OSSSSSSSSSSO.",".OSSEESSEESSO.",".OSSEESSEESSO.",".OSSSSSSSSSSO.",".OSSSSMMSSSSO.","..OSSSSSSSSO..","...OOSSSSOO...","....OOSSOO....","...OTTTTTTO...","..OTtTTTTtTO..",".OTTTTTTTTTTO.",".OTTTTTTTTTTO.",".OTTTTTTTTTTO.","..OTTTTTTTTO..","..OTTTTTTTTO..","..OJJJJJJJJO..","..OJJJJJJJJO.."].map(r=>r.replace(/B/g,'N').replace(/b/g,'n'));
GIRL.concat(BOY).forEach(r=>{if(r.length!==14)console.warn('bad sprite row',r)});
function mk(rows){const c=document.createElement('canvas'),w=document.createElement('canvas');c.width=w.width=14;c.height=w.height=rows.length;
    const a=c.getContext('2d'),b=w.getContext('2d');
    rows.forEach((r,j)=>[...r].forEach((ch,i)=>{if(ch!=='.'){a.fillStyle=PAL[ch];a.fillRect(i,j,1,1);b.fillStyle='#fff';b.fillRect(i,j,1,1)}}));return[c,w]}
const GS=mk(GIRL),BS=mk(BOY);
const spr=(im,x,y,fl)=>g.drawImage(fl?im[1]:im[0],Math.round(x),Math.round(y),14*S,22*S);
const HM=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."];
const R=(c,x,y,w,h)=>{g.fillStyle=c;g.fillRect(Math.round(x),Math.round(y),w,h)};
const heart=(x,y,z,c)=>{c=c||'#ff3b6b';HM.forEach((r,j)=>[...r].forEach((ch,i)=>{if(ch==='X')R(c,x+i*z,y+j*z,z,z)}))};
const txt=(s,x,y,c,z,al)=>{g.font=`bold ${z||11}px monospace`;g.textAlign=al||'center';g.fillStyle='#16060c';[[-1,0],[1,0],[0,-1],[0,1]].forEach(d=>g.fillText(s,x+d[0],y+d[1]));g.fillStyle=c||'#fff';g.fillText(s,x,y)};
const smallRose=(x,y)=>{R('#2a8a3a',x+3,y+6,2,9);R('#3cb34a',x+5,y+10,4,2);R('#7a0016',x,y,8,7);R('#e0173f',x+1,y+1,6,5);R('#ff5a78',x+2,y+2,2,2);R('#7a0016',x+3,y+3,3,2)};

const CHASE=["Wait, let me explain!","I'm sorry, okay?!","Please don't be mad 🥺","I brought you a rose!","Can we talk? Pleeease","You look beautiful when angry","I'll do the dishes forever!","Don't run, I'm trying here!"];
const TOUCH=["Hey, listen to me!","Just one hug?","Let me make it up to you","I miss your smile 💕","*puppy eyes*"];
const OUCH=["Ow!","Okay okay, I deserve that","Not the face!!","Ouch... fair enough","I'm still not giving up!","That hurt my pride more"];
const BEG=["Please forgive me 🥺","I'll never do it again!","You're my whole world","I'll buy you milk tea!","Just give me one more chance","I'm nothing without you","Pretty please? 🌹"];
const LOVE=["I love you 💖","Forever yours","You make me so happy","Best girl ever 🌹","Thank you for forgiving me","Can I hold your hand?"];
const pick=a=>a[Math.floor(Math.random()*a.length)];
let girl,boy,fx,pops,items,proj,shake,stop,flash,score=0,round=0,t=0,msg='';
const flies=Array.from({length:16},(_,i)=>({x:(i*97)%W,y:HZ+10+(i*53)%110,p:i}));
const say=s=>{boy.say=s;boy.sayT=150};
const pop=(x,y,s,z)=>pops.push({x,y,s,z:z||12,l:60});
const burst=(x,y,n,c,h)=>{for(let i=0;i<n;i++)fx.push({x,y,vx:Math.random()*6-3,vy:-Math.random()*5,l:30+Math.random()*30,c:c||'#ffd54a',h})};
function reset(keep){
    if(!keep){score=0;round=0}
    girl={x:70,y:165,f:1,atk:0,inv:0,dash:0,cd:0,tcd:0,step:0,mv:0,combo:0,ct:0,power:0};
    const hp=Math.min(5+round,9);
    boy={x:360,y:170,hp,max:hp,mode:'chase',hit:0,t:0,say:'',sayT:0,act:0,warn:0,lunge:0,lx:0,ly:0,dodged:0};
    fx=[];pops=[];items=[];proj=[];shake=0;stop=0;flash=0;msg='';say(round?`Round ${round+1}! I'm back!`:"We need to talk...");
}
reset();
function hitBoy(d,tag){
    girl.combo=girl.ct>0?girl.combo+1:1;girl.ct=110;
    if(!tag&&girl.combo%3==0){d=2;tag='CRIT!'}
    boy.hp-=d;boy.hit=12;boy.x+=girl.f*(d>1?36:22);stop=d>1?8:4;shake=d>1?9:4;
    score+=10*girl.combo*d;say(pick(OUCH));burst(boy.x+14,boy.y+20,d>1?20:9,d>1?'#fff':'#ffd54a');
    pop(boy.x,boy.y-26,tag||('x'+girl.combo),d>1?16:13);
    if(boy.hp<=0){boy.hp=0;boy.mode='beg';boy.act=0;say(pick(BEG));msg='He begs for forgiveness... press HIT to forgive 💖';burst(240,120,50,'#ff3b6b',1);shake=12;flash=8;score+=100*(round+1);pop(210,90,'K.O.!',26);pop(190,120,'+'+100*(round+1),14)}
}
function update(){
    t++;
    if(stop>0){stop--;return}
    const G=girl,B=boy;
    if(press.dash&&G.cd<=0){G.dash=9;G.cd=45;burst(G.x+14,G.y+50,8,'#ff9aa8')}
    let dx=(keys.right?1:0)-(keys.left?1:0),dy=(keys.down?1:0)-(keys.up?1:0);
    if(dx)G.f=dx;if(G.dash>0&&!dx&&!dy)dx=G.f;
    const sp=G.dash>0?7.5:2.4;if(G.dash>0){G.dash--;fx.push({x:G.x+10,y:G.y+14+Math.random()*34,vx:0,vy:0,l:16,c:'#ff3b6b'})}
    G.x=Math.max(8,Math.min(444,G.x+dx*sp));G.y=Math.max(126,Math.min(200,G.y+dy*sp*.8));
    G.mv=dx||dy;if(G.mv)G.step+=sp*.1;
    if(G.cd>0)G.cd--;if(G.tcd>0)G.tcd--;if(G.atk>0)G.atk--;if(G.inv>0)G.inv--;if(B.hit>0)B.hit--;
    if(G.ct>0&&--G.ct==0)G.combo=0;
    const near=r=>Math.abs(B.x-G.x)<r&&Math.abs(B.y-G.y)<r*.8;
    if(press.hit&&G.atk<=0){
        G.atk=14;
        const ddx=(B.x-G.x)*G.f,ddy=Math.abs(B.y-G.y);
        if(B.mode==='chase'&&ddx>-10&&ddx<68&&ddy<36){
            if(G.power>=3){G.power=0;burst(G.x+14,G.y+20,40,'#fff');hitBoy(2,'SUPER!')}else hitBoy(1)
        }else if(B.mode==='beg'&&Math.abs(B.x-G.x)<80){
            B.mode='love';B.act=2;B.t=0;say(pick(LOVE));msg='She smiles. He loves her. 💖 (tap Hit for next round)';burst(240,130,60,'#ff3b6b',1);shake=6
        }else if(B.mode==='love'&&B.t>40){round++;reset(1);return}
    }
    if(press.throw&&G.tcd<=0&&B.mode==='chase'){G.tcd=50;proj.push({x:G.x+(G.f>0?30:-6),y:G.y+30,vx:G.f*7,l:80})}
    press.hit=press.dash=press.throw=0;
    if(G.dash>0&&B.mode==='chase'&&B.hit<=0&&near(30))hitBoy(1,'DASH!');
    proj=proj.filter(p=>{p.x+=p.vx;p.l--;if(B.mode==='chase'&&Math.abs(p.x-(B.x+14))<22&&Math.abs(p.y-(B.y+26))<30){hitBoy(1,'ROSE!');return false}return p.l>0&&p.x>0&&p.x<W});
    if(B.mode==='chase'&&items.length<3&&t%170==0)items.push({x:30+Math.random()*420,y:165+Math.random()*70,b:Math.random()*6});
    items=items.filter(it=>{if(Math.abs(it.x-G.x-14)<28&&Math.abs(it.y-G.y-44)<26){G.power=Math.min(3,G.power+1);score+=25;pop(it.x,it.y-16,G.power>=3?'POWER FULL!':'+25');burst(it.x+7,it.y,10,'#ff3b6b',1);return false}return true});
    if(B.mode==='chase'){
        if(B.lunge>0){B.x+=B.lx;B.y+=B.ly;B.lunge--;if(G.dash>0&&near(46)&&!B.dodged){B.dodged=1;score+=50;pop(G.x,G.y-24,'DODGE! +50',14);say("How did you dodge that?!")}}
        else if(B.warn>0){if(--B.warn==0){const d=Math.hypot(G.x-B.x,G.y-B.y)||1;B.lx=(G.x-B.x)/d*5.4;B.ly=(G.y-B.y)/d*5.4;B.lunge=18}}
        else{
            const v=1+round*.09;B.x+=Math.sign(G.x-B.x)*v;B.y+=Math.sign(G.y-B.y)*v*.7;
            if(Math.random()<.004){B.warn=35;B.dodged=0;say("Here I come!!")}
        }
        B.x=Math.max(4,Math.min(448,B.x));B.y=Math.max(126,Math.min(200,B.y));
        if(near(22)&&!G.inv){
            G.inv=70;const r=Math.random();
            if(r<.34){say(pick(TOUCH));B.x-=G.f*28}
            else if(r<.67){say("🌹 For you?");burst(B.x+14,B.y+20,14,'#e0173f');B.x-=G.f*34}
            else{say("Hug? 🤗");burst(B.x+14,B.y+10,6,'#ff3b6b',1);B.x-=G.f*28}
        }
        if(!B.sayT&&Math.random()<.015)say(pick(CHASE));
    }
    if(B.mode==='beg')B.x+=((B.act===4?G.x+(G.f>0?30:-30):G.x+60)-B.x)*.03;
    if(B.mode==='beg'&&t%25==0)fx.push({x:B.x+14,y:B.y,vx:0,vy:-.8,l:50,h:1});
    if(B.mode==='love'&&t%5==0)fx.push({x:Math.random()*W,y:-6,vx:Math.random()*2-1,vy:1.8,l:150,c:['#ff3b6b','#ffd54a','#fff'][t%3]});
    if(B.sayT>0)B.sayT--;
    if(B.mode!=='chase'&&B.t%150==149){B.act=(B.act+1)%5;say(pick(B.mode==='beg'?BEG:LOVE))}
    B.t++;if(flash>0)flash--;
    fx.forEach(f=>{f.x+=f.vx;f.y+=f.vy;if(!f.h&&f.vy!==0)f.vy+=.25;if(f.h)f.vy=f.vy||-.8;f.l--});fx=fx.filter(f=>f.l>0);
    pops.forEach(p=>{p.y-=.6;p.l--});pops=pops.filter(p=>p.l>0);
}
function drawGirl(happy){
    const G=girl,x=G.x,y=G.y-(happy?Math.abs(Math.sin(t/6))*12:0),s=Math.sin(G.step)*(G.mv?1:0),SK='#ffd2b0';
    R('#0008',x+2,G.y+49,24,5);R('#0005',x+6,G.y+52,16,3);
    const a=s>.3?3:0,b=s<-.3?3:0;
    R(SK,x+8,y+44,4,8-a);R('#16121f',x+6,y+49-a,8,3);R(SK,x+16,y+44,4,8-b);R('#16121f',x+14,y+49-b,8,3);
    if(G.power>=3&&t%8<4){R('#ffd54a',x-6,y-4,4,4);R('#ffd54a',x+30,y+6,4,4);R('#fff',x+12,y-8,4,4)}
    spr(GS,x,y,G.inv%8>4);
    if(happy){R('#b0303a',x+10,y+20,8,2);R('#b0303a',x+8,y+18,2,2);R('#b0303a',x+18,y+18,2,2);
        const u=Math.sin(t/4)*4;R('#e0173f',x-6,y+20+u,6,6);R(SK,x-6,y+12+u,6,9);R('#e0173f',x+28,y+20-u,6,6);R(SK,x+28,y+12-u,6,9)}
    else{const w=s*3;R('#e0173f',x-3,y+30+w,4,5);R(SK,x-3,y+35+w,4,6);R('#e0173f',x+27,y+30-w,4,5);R(SK,x+27,y+35-w,4,6)}
    if(G.atk>0){const f=G.f;R(SK,f>0?x+26:x-14,y+30,16,5);
        for(let k=0;k<6;k++){const px=f>0?x+38+Math.sin(k/5*Math.PI)*18:x-16-Math.sin(k/5*Math.PI)*18;R(k%2?'#fff':'#ffd54a',px,y+6+k*8,6,8)}}
}
function drawBoy(){
    const B=boy,beg=B.mode!=='chase',a=B.act,SK='#ffd2b0',x=B.x+(B.hit>0?Math.sin(t)*3:0),
        yy=B.y+(beg?8:0)+(B.mode==='beg'&&a===1?7:0)-(B.mode==='love'?Math.abs(Math.sin(t/5))*10:0),s=Math.sin(t/5);
    R('#0008',B.x+2,B.y+49,24,5);R('#0005',B.x+6,B.y+52,16,3);
    if(beg){R('#16121f',x+4,B.y+48,8,4);R('#16121f',x+16,B.y+48,8,4)}
    else{const la=s>.3?3:0,lb=s<-.3?3:0;R('#2b3a67',x+8,yy+44,4,8-la);R('#16121f',x+6,yy+49-la,8,3);R('#2b3a67',x+16,yy+44,4,8-lb);R('#16121f',x+14,yy+49-lb,8,3)}
    spr(BS,x,yy,B.hit>0&&t%4<2);
    if(beg&&a===3){R('#fff',x+8,yy+14,2,2);R('#fff',x+18,yy+14,2,2);if(t%24==0)fx.push({x:x+Math.random()*28,y:yy+10,vx:0,vy:-.5,l:30,c:'#ffd54a'})}
    if(beg){const ty=t%20>10?4:0;R('#6cf',x+7,yy+18+ty,2,6);R('#6cf',x+19,yy+18+ty,2,6);R('#b0303a',x+10,yy+22,8,2)}
    const u=beg?Math.sin(t/3)*5:0;
    if(beg){
        if(B.mode==='beg'&&a===1){R('#2a6fdb',x-3,yy+32,4,5);R(SK,x-3,yy+37,4,6);R('#2a6fdb',x+27,yy+32,4,5);R(SK,x+27,yy+37,4,6)}
        else{R('#2a6fdb',x-5,yy+22+u,5,6);R(SK,x-5,yy+14+u,5,9);R('#2a6fdb',x+28,yy+22+u,5,6);R(SK,x+28,yy+14+u,5,9);if(a===2)smallRose(x+28,yy+4+u)}
    }else{const w=s*3;R('#2a6fdb',x-3,yy+28+w,4,5);R(SK,x-3,yy+33+w,4,6);R('#2a6fdb',x+27,yy+28-w,4,5);R(SK,x+27,yy+33-w,4,6)}
    if(B.mode==='chase'){R('#16060c',x-1,yy-11,30,6);R('#400',x,yy-10,28,4);R('#e22',x,yy-10,28*B.hp/B.max,4)}
    if(B.warn>0&&t%6<4){R('#ff0',x+12,yy-34,4,14);R('#ff0',x+12,yy-16,4,4)}
}
function scene(){
    const bands=['#12020a','#1d0510','#2b0716','#3d0a1c','#560e24','#741530','#93203b'];
    bands.forEach((c,i)=>R(c,-8,-8+i*22,W+16,22+(i==6?10:0)));
    for(let i=0;i<50;i++)R((i+(t>>5))%6?'#fff':'#f5c77a',(i*67)%W,(i*37)%110,2,2);
    const disc=(cx,cy,r,c)=>{for(let j=-r;j<r;j+=2){const w=Math.floor(Math.sqrt(r*r-j*j));R(c,cx-w,cy+j,w*2,2)}};
    disc(410,52,46,'#ffe9b012');disc(410,52,34,'#ffe9b01c');disc(410,52,24,'#ffe9b0');
    R('#e6c887',398,44,6,6);R('#e6c887',414,58,8,6);R('#d8b878',404,62,4,4);R('#d8b878',420,40,4,4);
    for(let x=0;x<W+8;x+=6){const h=46+20*Math.sin((x+girl.x*.05)*.03);R('#3a0b22',x,HZ-h,6,h)}
    for(let i=0;i<16;i++){const px=((i*61-girl.x*.2)%(W+60)+W+60)%(W+60)-30,hh=34+(i%3)*10;
        R('#230615',px+8,HZ-hh,4,hh);for(let k=0;k<4;k++)R('#230615',px+8-(k+1)*4,HZ-hh+k*10+8,8+(k+1)*8,10)}
    for(let x=0;x<W;x+=24){const y=16+8*Math.sin(x/50);R('#4a2a2a',x,y-2,24,2);R(['#ffd54a','#ff3b6b','#fff','#7fffd4'][(x/24+(t>>4))%4|0],x+10,y,5,6);R('#ffffff18',x+7,y-3,11,12)}
    R('#2d0a1a',-8,HZ,W+16,H);
    for(let y=HZ;y<H;y+=16)for(let x=((y/16)%2)*16;x<W;x+=32)R('#380d22',x,y,16,16);
    R('#47142c',-8,HZ-3,W+16,4);R('#1a0610',-8,HZ+2,W+16,2);
    for(let i=0;i<22;i++){const fx0=(i*83)%W,fy=HZ+12+(i*47)%100,sw=Math.sin(t/25+i)*1.5;R('#2a8a3a',fx0+sw,fy+4,2,6);R(i%3?'#e0173f':'#ff9bb5',fx0-1+sw,fy,6,5);R('#ffd54a',fx0+1+sw,fy+1,2,2)}
    flies.forEach(f=>{f.x+=Math.sin(t/60+f.p)*.4;f.y+=Math.cos(t/50+f.p)*.3;if(Math.sin(t/20+f.p)>-.3){R('#f6e27a',f.x,f.y,3,3);R('#f6e27a22',f.x-1,f.y-1,5,5)}});
}
function draw(){
    g.save();if(shake>.5){g.translate((Math.random()-.5)*shake,(Math.random()-.5)*shake);shake*=.85}
    scene();
    items.forEach(it=>{const b=Math.sin(t/8+it.b)*3;R('#0006',it.x,it.y+16,14,3);heart(it.x,it.y+b,2,'#ff6b8e');if(t%30<6)R('#fff',it.x+14,it.y+b-3,2,2)});
    const hap=boy.mode!=='chase';
    if(girl.y<boy.y){drawGirl(hap);drawBoy()}else{drawBoy();drawGirl(hap)}
    if(boy.mode==='love'){for(let k=0;k<6;k++){const a=t/20+k*1.05,mx=(girl.x+boy.x)/2+14;heart(mx+Math.cos(a)*64,girl.y-6+Math.sin(a)*26,2)}}
    proj.forEach(p=>smallRose(p.x,p.y+Math.sin(t/3)*2));
    fx.forEach(f=>f.h?heart(f.x,f.y,2):R(f.c,f.x,f.y,3,3));
    pops.forEach(p=>txt(p.s,p.x+14,p.y,p.l%6<3?'#fff':'#ffd54a',p.z));
    if(boy.sayT>0){g.font='bold 11px monospace';const w=g.measureText(boy.say).width+14,bx=Math.max(4,Math.min(W-4-w,boy.x+14-w/2)),by=boy.y-58;
        R('#16060c',bx-2,by-2,w+4,24);R('#fff',bx,by,w,20);R('#fff',boy.x+10,by+20,8,6);R('#16060c',boy.x+8,by+20,2,8);
        g.textAlign='center';g.fillStyle='#4a0a14';g.fillText(boy.say,bx+w/2,by+14)}
    // HUD
    for(let i=0;i<boy.max;i++)i<boy.max-boy.hp?heart(8+i*18,8,2):R('#400',8+i*18,8,12,12);
    txt('★ '+score+'   ROUND '+(round+1),W-8,20,'#ffd54a',13,'right');
    txt('PWR',8,40,'#fff',11,'left');for(let i=0;i<3;i++){R('#16060c',44+i*14,31,12,12);R(i<girl.power?'#ffd54a':'#400',46+i*14,33,8,8)}
    txt(girl.cd>0?'DASH…':'DASH ⚡',100,40,girl.cd>0?'#888':'#7fffd4',11,'left');
    txt(girl.tcd>0?'ROSE…':'ROSE 🌹',170,40,girl.tcd>0?'#888':'#ff9bb5',11,'left');
    if(girl.combo>1)txt('COMBO x'+girl.combo,W/2,44,'#ffd54a',15);
    if(boy.mode==='chase'&&boy.t<110)txt(boy.t<55?'READY?':'FIGHT!',W/2,100,boy.t<55?'#fff':'#ff3b6b',boy.t<55?24:34);
    if(msg)txt(msg,W/2,H-10,'#fff',11);
    if(flash>0){g.fillStyle='rgba(255,255,255,'+flash*.05+')';g.fillRect(0,0,W,H)}
    g.restore();
}
let last=0,acc=0;
function loop(ts){
    acc+=Math.min(ts-last,100);last=ts;
    if($('#game').classList.contains('on')){while(acc>=16.67){update();acc-=16.67}draw()}else acc=0;
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);