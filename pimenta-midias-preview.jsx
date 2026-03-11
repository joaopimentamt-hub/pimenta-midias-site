import { useState, useEffect, useRef } from "react";

/* ─── Icon Components ─── */
const Icon = ({ d, size = 20, color = "currentColor", fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

const icons = {
  menu: (p) => <Icon {...p} d={["M4 12h16", "M4 6h16", "M4 18h16"]} />,
  x: (p) => <Icon {...p} d={["M18 6L6 18", "M6 6l12 12"]} />,
  arrowRight: (p) => <Icon {...p} d={["M5 12h14", "M12 5l7 7-7 7"]} />,
  msgSquare: (p) => <Icon {...p} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  zap: (p) => <Icon {...p} d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />,
  userX: (p) => <Icon {...p} d={["M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2", "M9 7a4 4 0 100-8 4 4 0 000 8", "M17 14l5 5m-5 0l5-5"]} />,
  clock: (p) => <Icon {...p} d={["M12 22a10 10 0 100-20 10 10 0 000 20z", "M12 6v6l4 2"]} />,
  trendDown: (p) => <Icon {...p} d={["M23 18l-9.5-9.5-5 5L1 6"]} />,
  alert: (p) => <Icon {...p} d={["M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z", "M12 9v4", "M12 17h.01"]} />,
  target: (p) => <Icon {...p} d={["M12 22a10 10 0 100-20 10 10 0 000 20z", "M12 18a6 6 0 100-12 6 6 0 000 12z", "M12 14a2 2 0 100-4 2 2 0 000 4z"]} />,
  bot: (p) => <Icon {...p} d={["M12 8V4H8", "M2 12h2", "M20 12h2", "M6 8h12v10a2 2 0 01-2 2H8a2 2 0 01-2-2V8z", "M9 13v2", "M15 13v2"]} />,
  barChart: (p) => <Icon {...p} d={["M12 20V10", "M18 20V4", "M6 20v-4"]} />,
  search: (p) => <Icon {...p} d={["M11 19a8 8 0 100-16 8 8 0 000 16z", "M21 21l-4.35-4.35"]} />,
  calendar: (p) => <Icon {...p} d={["M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z", "M16 2v4", "M8 2v4", "M3 10h18"]} />,
  sparkles: (p) => <Icon {...p} d={["M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"]} />,
  trendUp: (p) => <Icon {...p} d={["M23 6l-9.5 9.5-5-5L1 18"]} />,
  phone: (p) => <Icon {...p} d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
  rocket: (p) => <Icon {...p} d={["M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z", "M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z", "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"]} />,
  lightbulb: (p) => <Icon {...p} d={["M9 18h6", "M10 22h4", "M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"]} />,
  dollar: (p) => <Icon {...p} d={["M12 1v22", "M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"]} />,
  shield: (p) => <Icon {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  users: (p) => <Icon {...p} d={["M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2", "M9 7a4 4 0 100-8 4 4 0 000 8z", "M23 21v-2a4 4 0 00-3-3.87", "M16 3.13a4 4 0 010 7.75"]} />,
  check: (p) => <Icon {...p} d="M20 6L9 17l-5-5" />,
  checkCircle: (p) => <Icon {...p} d={["M22 11.08V12a10 10 0 11-5.93-9.14", "M22 4L12 14.01l-3-3"]} />,
  arrowUpRight: (p) => <Icon {...p} d={["M7 17L17 7", "M7 7h10v10"]} />,
  workflow: (p) => <Icon {...p} d={["M3 3h6v6H3z", "M15 3h6v6h-6z", "M9 15h6v6H9z", "M6 9v3a3 3 0 003 3", "M18 9v3a3 3 0 01-3 3"]} />,
  handshake: (p) => <Icon {...p} d={["M11 17l-2 2-4-4 4-4 2 2", "M13 7l2-2 4 4-4 4-2-2"]} />,
  msgCircle: (p) => <Icon {...p} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />,
  arrowDown: (p) => <Icon {...p} d={["M12 5v14", "M19 12l-7 7-7-7"]} />,
  mapPin: (p) => <Icon {...p} d={["M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z", "M12 13a3 3 0 100-6 3 3 0 000 6z"]} />,
  mail: (p) => <Icon {...p} d={["M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z", "M22 6l-10 7L2 6"]} />,
  instagram: (p) => <Icon {...p} d={["M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4z", "M12 15a3 3 0 100-6 3 3 0 000 6z"]} />,
};

/* ─── Hook: Scroll Reveal ─── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("vis"); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Styles ─── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
:root{--pr:#E63946;--prd:#C1121F;--prl:#FF6B6B;--bg:#0A0A0A;--bg2:#111;--g:#888;--gl:#AAA;--wa:#25D366}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:80px}
body{background:var(--bg);color:#F5F5F5;font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased}
h1,h2,h3,h4,h5,h6{font-family:'Plus Jakarta Sans',sans-serif}
.rvl{opacity:0;transform:translateY(30px);transition:all .8s cubic-bezier(.16,1,.3,1)}
.rvl.vis{opacity:1;transform:translateY(0)}
@keyframes fu{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes fi{from{opacity:0}to{opacity:1}}
@keyframes pg{0%,100%{box-shadow:0 0 20px rgba(230,57,70,.3)}50%{box-shadow:0 0 40px rgba(230,57,70,.6)}}
.afu{animation:fu .8s ease-out forwards}
.afi{animation:fi .6s ease-out forwards}
.apg{animation:pg 3s ease-in-out infinite}
.d1{animation-delay:.1s}.d2{animation-delay:.2s}.d3{animation-delay:.3s}.d5{animation-delay:.5s}
::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:var(--pr);border-radius:3px}
`;

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    ["Início", "#hero"], ["Serviços", "#solucao"], ["Como Funciona", "#como-funciona"],
    ["Benefícios", "#beneficios"], ["Processo", "#processo"]
  ];
  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:50,transition:"all .5s",
      background:scrolled?"rgba(10,10,10,.9)":"transparent",
      backdropFilter:scrolled?"blur(20px)":"none",
      borderBottom:scrolled?"1px solid rgba(255,255,255,.05)":"none",
      padding:scrolled?"12px 0":"20px 0"
    }}>
      <div style={{maxWidth:1280,margin:"0 auto",padding:"0 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a href="#hero" style={{display:"flex",alignItems:"center",gap:8,textDecoration:"none"}}>
          <div style={{width:36,height:36,borderRadius:8,background:"linear-gradient(135deg,#E63946,#C1121F)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,color:"#fff",fontSize:13}}>PM</div>
          <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:18,color:"#fff",letterSpacing:"-.01em"}}>Pimenta<span style={{color:"#E63946"}}>Mídias</span></span>
        </a>
        <div style={{display:"flex",alignItems:"center",gap:32}} className="nav-desktop">
          {links.map(([l,h])=><a key={h} href={h} style={{fontSize:14,color:"#AAA",textDecoration:"none",transition:"color .3s"}} onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="#AAA"}>{l}</a>)}
          <a href="#cta" style={{marginLeft:8,padding:"10px 20px",background:"#E63946",color:"#fff",fontSize:14,fontWeight:600,borderRadius:8,textDecoration:"none",transition:"all .3s"}} onMouseEnter={e=>e.target.style.background="#C1121F"} onMouseLeave={e=>e.target.style.background="#E63946"}>Agendar Reunião</a>
        </div>
      </div>
      <style>{`@media(max-width:768px){.nav-desktop{display:none!important}}`}</style>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section id="hero" style={{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-20%",left:"-10%",width:600,height:600,background:"rgba(230,57,70,.08)",borderRadius:"50%",filter:"blur(120px)"}} />
      <div style={{position:"absolute",bottom:"-10%",right:"-5%",width:400,height:400,background:"rgba(230,57,70,.05)",borderRadius:"50%",filter:"blur(100px)"}} />
      <div style={{position:"absolute",inset:0,opacity:.03,backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",backgroundSize:"60px 60px"}} />
      <div style={{position:"relative",zIndex:10,maxWidth:1280,margin:"0 auto",padding:"128px 20px 80px",width:"100%"}}>
        <div style={{maxWidth:800}}>
          <div className="afu" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 16px",background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",borderRadius:50,marginBottom:32}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:"#E63946",animation:"pg 2s infinite"}} />
            <span style={{fontSize:13,color:"#AAA",fontWeight:500}}>Especialistas em Tráfego Pago & Automação com IA</span>
          </div>
          <h1 className="afu d1" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"clamp(2.4rem,5vw,4.2rem)",fontWeight:800,lineHeight:1.08,color:"#fff",marginBottom:24,letterSpacing:"-.02em"}}>
            Seus clientes estão<br />
            <span style={{background:"linear-gradient(90deg,#E63946,#FF6B6B)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>esperando.</span><br />
            <span style={{color:"#AAA",fontWeight:600,fontSize:"clamp(1.6rem,3.8vw,3rem)"}}>Seu WhatsApp deveria estar vendendo.</span>
          </h1>
          <p className="afu d2" style={{fontSize:"clamp(1rem,1.8vw,1.2rem)",color:"#888",maxWidth:600,lineHeight:1.7,marginBottom:40}}>
            Atraímos clientes qualificados com tráfego pago e automatizamos seu atendimento no WhatsApp com inteligência artificial. <span style={{color:"#AAA"}}>Mais leads, mais vendas, menos trabalho manual.</span>
          </p>
          <div className="afu d3" style={{display:"flex",flexWrap:"wrap",gap:16}}>
            <a href="#cta" className="apg" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"16px 28px",background:"#E63946",color:"#fff",fontWeight:600,borderRadius:12,textDecoration:"none",fontSize:16,transition:"all .3s"}}> 
              Agendar Reunião Gratuita {icons.arrowRight({size:18,color:"#fff"})}
            </a>
            <a href="https://wa.me/5521988514602" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"16px 28px",background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",color:"#fff",fontWeight:600,borderRadius:12,textDecoration:"none",fontSize:16}}>
              {icons.msgSquare({size:18,color:"#25D366"})} Falar no WhatsApp
            </a>
          </div>
          <div className="afu d5" style={{marginTop:64,paddingTop:40,borderTop:"1px solid rgba(255,255,255,.05)",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:24}}>
            {[["24h","Atendimento IA"],["+200%","Aumento em leads"],["< 3s","Tempo de resposta"],["100%","Automático"]].map(([v,l])=>(
              <div key={l}><div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"clamp(1.5rem,3vw,1.8rem)",fontWeight:700,color:"#fff"}}>{v}</div><div style={{fontSize:13,color:"#888",marginTop:4}}>{l}</div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section Wrapper ─── */
function Section({id, children}) {
  const ref = useReveal();
  return (
    <section id={id} style={{position:"relative",padding:"96px 0"}}>
      <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent)"}} />
      <div ref={ref} className="rvl" style={{maxWidth:1280,margin:"0 auto",padding:"0 20px"}}>{children}</div>
    </section>
  );
}

function SectionHeader({icon,badge,title,subtitle}) {
  return (
    <div style={{textAlign:"center",marginBottom:72}}>
      <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 12px",background:"rgba(230,57,70,.1)",border:"1px solid rgba(230,57,70,.2)",borderRadius:50,marginBottom:20}}>
        {icon} <span style={{fontSize:11,color:"#E63946",fontWeight:600,textTransform:"uppercase",letterSpacing:2}}>{badge}</span>
      </div>
      <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:700,color:"#fff",lineHeight:1.15}} dangerouslySetInnerHTML={{__html:title}} />
      {subtitle && <p style={{marginTop:16,fontSize:"clamp(1rem,1.5vw,1.1rem)",color:"#888",maxWidth:600,margin:"16px auto 0"}}>{subtitle}</p>}
    </div>
  );
}

/* ─── Card base ─── */
const cardStyle = {padding:"24px 32px",borderRadius:16,background:"#111",border:"1px solid rgba(255,255,255,.05)",transition:"all .5s"};

/* ─── Problems ─── */
function Problems() {
  const items = [
    [icons.userX,"Leads perdidos todo dia","Clientes mandam mensagem fora do horário e nunca mais voltam. Cada mensagem ignorada é dinheiro jogado fora."],
    [icons.clock,"Atendimento lento e manual","Você ou sua equipe perdem horas respondendo as mesmas perguntas. O concorrente já fechou a venda."],
    [icons.trendDown,"Dinheiro gasto sem retorno","Investe em anúncios mas não consegue medir resultado. Não sabe quanto cada lead custa."],
    [icons.alert,"WhatsApp desorganizado","Conversas misturadas, sem follow-up, sem qualificação. Impossível escalar um atendimento assim."],
  ];
  return (
    <Section id="problema">
      <SectionHeader icon={icons.alert({size:14,color:"#E63946"})} badge="O Problema" title="Isso parece familiar?" subtitle="A maioria dos empresários enfrenta esses problemas todos os dias — e perde vendas por causa disso." />
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20,maxWidth:900,margin:"0 auto"}}>
        {items.map(([ic,t,d])=>(
          <div key={t} style={cardStyle}>
            <div style={{width:48,height:48,borderRadius:12,background:"rgba(230,57,70,.1)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20}}>
              {ic({size:22,color:"#E63946"})}
            </div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:18,fontWeight:700,color:"#fff",marginBottom:12}}>{t}</h3>
            <p style={{fontSize:14,color:"#888",lineHeight:1.7}}>{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── Solution ─── */
function Solution() {
  const services = [
    {badge:"Tráfego Pago",title:"Atraímos os clientes certos até você",desc:"Campanhas estratégicas no Google e Meta Ads que colocam sua empresa na frente de quem está pronto para comprar.",color:"#E63946",
      feats:[
        [icons.search,"Google Ads","Apareça no topo quando buscarem por você"],
        [icons.target,"Meta Ads","Instagram e Facebook para o público ideal"],
        [icons.barChart,"Relatórios claros","Saiba exatamente o retorno de cada real"],
        [icons.trendUp,"Geração de leads","Fluxo constante de clientes qualificados"],
      ]},
    {badge:"Automação WhatsApp",title:"Sua IA atende, qualifica e agenda 24h",desc:"Um agente inteligente no WhatsApp que conversa como um humano e nunca deixa mensagem sem resposta.",color:"#25D366",
      feats:[
        [icons.bot,"Atendimento 24h","IA respondendo instantaneamente, sempre"],
        [icons.msgCircle,"Qualificação de leads","Identifica quem está pronto para comprar"],
        [icons.calendar,"Agendamento automático","Marca reuniões direto no calendário"],
        [icons.sparkles,"Respostas inteligentes","Conversa natural, não parece robô"],
      ]},
  ];
  return (
    <Section id="solucao">
      <SectionHeader icon={icons.sparkles({size:14,color:"#E63946"})} badge="A Solução" title={`Dois pilares para escalar<br/><span style="background:linear-gradient(90deg,#E63946,#FF6B6B);-webkit-background-clip:text;-webkit-text-fill-color:transparent">seu negócio</span>`} subtitle="Combinamos geração de demanda com atendimento inteligente para que nenhum lead seja desperdiçado." />
      <div style={{display:"flex",flexDirection:"column",gap:32}}>
        {services.map(s=>(
          <div key={s.badge} style={{...cardStyle,padding:0,overflow:"hidden",borderRadius:24}}>
            <div style={{height:4,background:`linear-gradient(90deg,${s.color}66,transparent)`}} />
            <div style={{padding:"32px 32px 40px",display:"flex",flexWrap:"wrap",gap:40}}>
              <div style={{flex:"1 1 300px"}}>
                <div style={{display:"inline-block",padding:"6px 12px",borderRadius:50,fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:2,color:s.color,background:`${s.color}15`,border:`1px solid ${s.color}30`,marginBottom:20}}>{s.badge}</div>
                <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"clamp(1.4rem,2.5vw,1.8rem)",fontWeight:700,color:"#fff",marginBottom:16,lineHeight:1.2}}>{s.title}</h3>
                <p style={{fontSize:15,color:"#888",lineHeight:1.7,maxWidth:450}}>{s.desc}</p>
              </div>
              <div style={{flex:"1 1 300px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12}}>
                {s.feats.map(([ic,l,d])=>(
                  <div key={l} style={{padding:16,borderRadius:12,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.05)"}}>
                    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
                      {ic({size:16,color:s.color})}
                      <span style={{fontSize:13,fontWeight:600,color:"#fff"}}>{l}</span>
                    </div>
                    <p style={{fontSize:12,color:"#888",lineHeight:1.6}}>{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── How It Works ─── */
function HowItWorks() {
  const steps = [
    [icons.phone,"Diagnóstico gratuito","Analisamos sua operação, canais de venda e atendimento atual em 30 minutos."],
    [icons.lightbulb,"Estratégia personalizada","Plano sob medida combinando tráfego pago e automação WhatsApp."],
    [icons.rocket,"Implementação rápida","Campanhas e agente IA configurados. Em poucos dias, tudo rodando."],
    [icons.barChart,"Otimização contínua","Métricas em tempo real, otimizações semanais para escalar resultados."],
  ];
  return (
    <Section id="como-funciona">
      <SectionHeader icon={icons.rocket({size:14,color:"#E63946"})} badge="Como Funciona" title={`Do zero aos resultados<br/><span style="color:#888">em 4 passos simples</span>`} />
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:24}}>
        {steps.map(([ic,t,d],i)=>(
          <div key={t} style={cardStyle}>
            <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:20}}>
              <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:28,fontWeight:800,color:"rgba(230,57,70,.2)"}}>{String(i+1).padStart(2,"0")}</span>
              <div style={{width:40,height:40,borderRadius:8,background:"rgba(230,57,70,.1)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                {ic({size:18,color:"#E63946"})}
              </div>
            </div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:17,fontWeight:700,color:"#fff",marginBottom:12}}>{t}</h3>
            <p style={{fontSize:14,color:"#888",lineHeight:1.7}}>{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── Benefits ─── */
function Benefits() {
  const items = [
    [icons.clock,"Atendimento 24 horas","Sua IA nunca dorme. Responde clientes de madrugada, feriado e fim de semana.","24/7"],
    [icons.zap,"Resposta instantânea","Tempo de resposta abaixo de 3 segundos. O cliente não vai para o concorrente.","< 3s"],
    [icons.trendUp,"Mais conversões","Tráfego pago traz o lead. A IA converte. Juntos, multiplicam suas vendas.","+200%"],
    [icons.dollar,"Redução de custos","Substitua horas de atendimento manual por automação inteligente.","-60%"],
    [icons.users,"Leads qualificados","A IA filtra curiosos de compradores reais. Sua equipe foca em fechar.","3x"],
    [icons.shield,"Dados e controle total","Dashboard em tempo real com métricas de campanhas e conversas.","100%"],
  ];
  return (
    <Section id="beneficios">
      <SectionHeader icon={icons.checkCircle({size:14,color:"#E63946"})} badge="Benefícios" title={`Por que empresários escolhem<br/><span style="background:linear-gradient(90deg,#E63946,#FF6B6B);-webkit-background-clip:text;-webkit-text-fill-color:transparent">a Pimenta Mídias</span>`} />
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20}}>
        {items.map(([ic,t,d,m])=>(
          <div key={t} style={{...cardStyle,position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:16,right:16,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:48,fontWeight:800,color:"rgba(255,255,255,.03)",userSelect:"none"}}>{m}</div>
            <div style={{position:"relative",zIndex:1}}>
              <div style={{width:48,height:48,borderRadius:12,background:"rgba(230,57,70,.1)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20}}>
                {ic({size:22,color:"#E63946"})}
              </div>
              <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:17,fontWeight:700,color:"#fff",marginBottom:12}}>{t}</h3>
              <p style={{fontSize:14,color:"#888",lineHeight:1.7}}>{d}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── Process ─── */
function Process() {
  const steps = [
    [icons.msgSquare,"Cliente envia mensagem","No WhatsApp, vindo do Google, Instagram ou indicação."],
    [icons.bot,"IA responde em segundos","Entende a necessidade, responde perguntas e coleta informações."],
    [icons.calendar,"Lead qualificado e agendado","A IA identifica o lead e agenda automaticamente no calendário."],
    [icons.handshake,"Você fecha a venda","Chega na reunião com todas as informações. Só falta o aperto de mão."],
  ];
  return (
    <Section id="processo">
      <SectionHeader icon={icons.workflow({size:14,color:"#E63946"})} badge="Processo de Trabalho" title={`Da primeira mensagem<br/><span style="color:#888">ao fechamento da venda</span>`} subtitle="Veja como o fluxo completo funciona quando tráfego pago e automação trabalham juntos." />
      <div style={{maxWidth:700,margin:"0 auto",display:"flex",flexDirection:"column",gap:16}}>
        {steps.map(([ic,t,d],i)=>(
          <div key={t}>
            <div style={cardStyle}>
              <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:12}}>
                <div style={{width:40,height:40,borderRadius:8,background:"rgba(230,57,70,.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  {ic({size:18,color:"#E63946"})}
                </div>
                <span style={{fontSize:11,color:"rgba(230,57,70,.6)",fontWeight:700,fontFamily:"'Plus Jakarta Sans',sans-serif"}}>PASSO {String(i+1).padStart(2,"0")}</span>
              </div>
              <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:17,fontWeight:700,color:"#fff",marginBottom:8}}>{t}</h3>
              <p style={{fontSize:14,color:"#888",lineHeight:1.7}}>{d}</p>
            </div>
            {i < steps.length-1 && <div style={{display:"flex",justifyContent:"center",padding:"8px 0"}}>{icons.arrowDown({size:20,color:"rgba(230,57,70,.4)"})}</div>}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── CTA ─── */
function CTA() {
  const checks = ["Diagnóstico gratuito do seu negócio","Sem compromisso, sem pegadinha","Plano personalizado em 30 minutos","Resultados desde a primeira semana"];
  return (
    <Section id="cta">
      <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:800,height:600,background:"rgba(230,57,70,.06)",borderRadius:"50%",filter:"blur(150px)"}} />
      <div style={{position:"relative",zIndex:10,maxWidth:800,margin:"0 auto"}}>
        <div style={{borderRadius:24,background:"#111",border:"1px solid rgba(255,255,255,.05)",overflow:"hidden"}}>
          <div style={{height:4,background:"linear-gradient(90deg,#E63946,#FF6B6B,#E63946)"}} />
          <div style={{padding:"48px 32px 56px",textAlign:"center"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 12px",background:"rgba(230,57,70,.1)",border:"1px solid rgba(230,57,70,.2)",borderRadius:50,marginBottom:24}}>
              {icons.calendar({size:14,color:"#E63946"})}
              <span style={{fontSize:11,color:"#E63946",fontWeight:600,textTransform:"uppercase",letterSpacing:2}}>Vamos Conversar</span>
            </div>
            <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:700,color:"#fff",lineHeight:1.15,marginBottom:16}}>
              Pronto para parar de<br /><span style={{background:"linear-gradient(90deg,#E63946,#FF6B6B)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>perder clientes?</span>
            </h2>
            <p style={{fontSize:"clamp(1rem,1.5vw,1.1rem)",color:"#888",maxWidth:520,margin:"0 auto 32px",lineHeight:1.7}}>
              Agende uma reunião gratuita de 30 minutos e descubra como podemos escalar suas vendas.
            </p>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"12px 24px",marginBottom:40}}>
              {checks.map(c=>(
                <div key={c} style={{display:"flex",alignItems:"center",gap:8}}>
                  {icons.check({size:16,color:"#E63946"})}
                  <span style={{fontSize:13,color:"#AAA"}}>{c}</span>
                </div>
              ))}
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center"}}>
              <a href="https://wa.me/5521988514602?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20reuni%C3%A3o" target="_blank" rel="noopener noreferrer" className="apg" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"16px 32px",background:"#E63946",color:"#fff",fontWeight:600,borderRadius:12,textDecoration:"none",fontSize:16}}>
                Agendar Reunião Gratuita {icons.arrowRight({size:18,color:"#fff"})}
              </a>
              <a href="https://wa.me/5521988514602" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"16px 32px",background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",color:"#fff",fontWeight:600,borderRadius:12,textDecoration:"none",fontSize:16}}>
                {icons.msgSquare({size:18,color:"#25D366"})} Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const links = [["Início","#hero"],["Serviços","#solucao"],["Como Funciona","#como-funciona"],["Benefícios","#beneficios"],["Processo","#processo"],["Contato","#cta"]];
  return (
    <footer style={{borderTop:"1px solid rgba(255,255,255,.05)"}}>
      <div style={{maxWidth:1280,margin:"0 auto",padding:"64px 20px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:40}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
              <div style={{width:36,height:36,borderRadius:8,background:"linear-gradient(135deg,#E63946,#C1121F)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,color:"#fff",fontSize:13}}>PM</div>
              <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:18,color:"#fff"}}>Pimenta<span style={{color:"#E63946"}}>Mídias</span></span>
            </div>
            <p style={{fontSize:13,color:"#888",lineHeight:1.7,maxWidth:280}}>Tráfego pago e automação de WhatsApp com IA para escalar negócios de verdade.</p>
          </div>
          <div>
            <h4 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,color:"#fff",fontSize:13,marginBottom:16,textTransform:"uppercase",letterSpacing:1.5}}>Navegação</h4>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {links.map(([l,h])=><li key={h}><a href={h} style={{fontSize:13,color:"#888",textDecoration:"none"}}>{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,color:"#fff",fontSize:13,marginBottom:16,textTransform:"uppercase",letterSpacing:1.5}}>Contato</h4>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              <a href="https://wa.me/5521988514602" target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#888",textDecoration:"none"}}>
                {icons.phone({size:14,color:"#E63946"})} (21) 98851-4602
              </a>
              <a href="mailto:pmtjoao3@gmail.com" style={{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#888",textDecoration:"none"}}>
                {icons.mail({size:14,color:"#E63946"})} pmtjoao3@gmail.com
              </a>
              <div style={{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#888"}}>
                {icons.mapPin({size:14,color:"#E63946"})} Rio de Janeiro, RJ
              </div>
            </div>
          </div>
        </div>
        <div style={{marginTop:48,paddingTop:32,borderTop:"1px solid rgba(255,255,255,.05)",display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:16}}>
          <p style={{fontSize:12,color:"#666"}}>© 2026 Pimenta Mídias. Todos os direitos reservados.</p>
          <p style={{fontSize:12,color:"#444"}}>Feito com ❤️ no Rio de Janeiro</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── WhatsApp Float ─── */
function WhatsAppFloat() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(()=>setVis(true),2000); return ()=>clearTimeout(t); }, []);
  if (!vis) return null;
  return (
    <a href="https://wa.me/5521988514602" target="_blank" rel="noopener noreferrer" style={{position:"fixed",bottom:24,right:24,zIndex:50,width:56,height:56,borderRadius:"50%",background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(37,211,102,.3)",transition:"all .3s",textDecoration:"none"}}>
      {icons.msgCircle({size:26,color:"#fff",fill:"#fff"})}
    </a>
  );
}

/* ─── Main App ─── */
export default function App() {
  return (
    <div style={{background:"#0A0A0A",color:"#F5F5F5",fontFamily:"'Inter',sans-serif",minHeight:"100vh",WebkitFontSmoothing:"antialiased"}}>
      <style>{css}</style>
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Process />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
