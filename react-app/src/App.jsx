import React from 'react';

const I18N = {
  en: {
    fundraiser:'Fundraiser', marketplace:'Marketplace', notifications:'Notifications',
    myShares:'My shares', estValue:'Est. value', lastPrice:'Last trade price', activeListings:'Active listings', vol30:'30-day volume', sharesTraded:'shares traded',
    browseTile:'Browse listings', browseDesc:'Shares for sale from other shareholders', sellTile:'Sell shares', sellDesc:'Create a listing at your asking price',
    offersTile:'My offers', offersDesc:'Track negotiations and respond', historyTile:'Transactions', historyDesc:'Completed transfers and payouts',
    activity:'Recent activity', viewAll:'View all',
    browseTitle:'Marketplace listings', live:'live', seller:'Seller', qty:'Shares', ask:'Price / share', total:'Total', type:'Type', view:'View', yourListing:'Your listing',
    offersOk:'Offers welcome', fixedPrice:'Fixed price', reservedNote:'Listed shares are reserved and cannot be sold twice. Cancelled or expired listings release shares back to the seller.',
    listing:'Listing', verified:'Verified shareholder', listedOn:'Listed', expiresOn:'Expires', escrowNote:'Funds are held in escrow until the share transfer is confirmed in the registry. Sellers receive payout within 2 working days.',
    orderSummary:'Order summary', fee:'Marketplace fee', totalDue:'Total due', buyAtAsk:'Buy at asking price', makeOffer:'Make an offer', fixedOnly:'This seller only accepts the asking price.',
    offerPrice:'Your price per share', offerQty:'Quantity', max:'Max', offerTotal:'Offer total', sendOffer:'Send offer', cancel:'Cancel',
    sellTitle:'Sell shares', sellDetails:'Listing details', available:'available', sharesToSell:'Shares to sell', askPerShare:'Asking price per share', lastTrade:'Last trade',
    allowOffersLbl:'Allow offers', allowOffersDesc:'Buyers can negotiate below your asking price', expiry:'Listing expiry', days7:'7 days', days14:'14 days', days30:'30 days', noExpiry:'No expiry',
    reviewListing:'Review listing', reviewTitle:'Review your listing', listingValue:'Listing value', offersLbl:'Offers', yes:'Allowed', no:'Fixed price only',
    reserveWarn:'These shares will be reserved while the listing is live. You can cancel anytime to release them.', back:'Back', publish:'Publish listing',
    listingLive:'Your listing is live', viewInMarket:'View in marketplace', backHome:'Back to marketplace',
    offersTitle:'My offers', sendCounter:'Send counter', counter:'Counter', reject:'Reject', dealAgreed:'Deal agreed at', proceedPay:'Proceed to payment', noOffers:'No open offers. Make an offer on a listing to start a negotiation.',
    payTitle:'Payment', payWindow:'Pay within', payMethod:'Payment method', escrowShort:'Your payment is held in escrow and only released to the seller after the share transfer is confirmed.',
    payNow:'Pay', processing:'Processing…', selectMethod:'Select a payment method',
    doneTitle:'Payment received', viewReceipt:'View transaction', historyTitle:'Transactions', txId:'Reference', counterparty:'Counterparty', price:'Price', status:'Status',
    bought:'Bought from', sold:'Sold to', completed:'Completed', payoutPending:'Payout in 2 days',
    registryNote:'Every completed transaction is recorded permanently in the share registry.',
    stAwaiting:'Awaiting reply', stYourTurn:'Action needed', stAgreed:'Deal agreed', stRejected:'Rejected', stSettled:'Settled', stAwaitingPay:'Awaiting payment',
    evOffer:'made an offer', evCounter:'countered', evAccept:'accepted', evReject:'rejected', evPaid:'paid — shares transferred', you:'You', accept:'Accept', acceptFor:'Accept',
  },
  es: {
    fundraiser:'Recaudación', marketplace:'Mercado', notifications:'Notificaciones',
    myShares:'Mis acciones', estValue:'Valor est.', lastPrice:'Último precio', activeListings:'Ofertas activas', vol30:'Volumen 30 días', sharesTraded:'acciones operadas',
    browseTile:'Explorar ofertas', browseDesc:'Acciones en venta de otros accionistas', sellTile:'Vender acciones', sellDesc:'Crea una publicación a tu precio',
    offersTile:'Mis ofertas', offersDesc:'Sigue tus negociaciones y responde', historyTile:'Transacciones', historyDesc:'Transferencias y pagos completados',
    activity:'Actividad reciente', viewAll:'Ver todo',
    browseTitle:'Publicaciones del mercado', live:'activas', seller:'Vendedor', qty:'Acciones', ask:'Precio / acción', total:'Total', type:'Tipo', view:'Ver', yourListing:'Tu publicación',
    offersOk:'Acepta ofertas', fixedPrice:'Precio fijo', reservedNote:'Las acciones publicadas quedan reservadas y no pueden venderse dos veces. Al cancelar o expirar, se liberan al vendedor.',
    listing:'Publicación', verified:'Accionista verificado', listedOn:'Publicado', expiresOn:'Expira', escrowNote:'Los fondos quedan en custodia (escrow) hasta confirmar la transferencia en el registro. El vendedor recibe su pago en 2 días hábiles.',
    orderSummary:'Resumen de orden', fee:'Comisión del mercado', totalDue:'Total a pagar', buyAtAsk:'Comprar al precio de venta', makeOffer:'Hacer una oferta', fixedOnly:'Este vendedor solo acepta el precio de venta.',
    offerPrice:'Tu precio por acción', offerQty:'Cantidad', max:'Máx', offerTotal:'Total de la oferta', sendOffer:'Enviar oferta', cancel:'Cancelar',
    sellTitle:'Vender acciones', sellDetails:'Detalles de la publicación', available:'disponibles', sharesToSell:'Acciones a vender', askPerShare:'Precio por acción', lastTrade:'Último precio',
    allowOffersLbl:'Permitir ofertas', allowOffersDesc:'Los compradores pueden negociar bajo tu precio', expiry:'Vigencia', days7:'7 días', days14:'14 días', days30:'30 días', noExpiry:'Sin vencimiento',
    reviewListing:'Revisar publicación', reviewTitle:'Revisa tu publicación', listingValue:'Valor de la publicación', offersLbl:'Ofertas', yes:'Permitidas', no:'Solo precio fijo',
    reserveWarn:'Estas acciones quedarán reservadas mientras la publicación esté activa. Puedes cancelar en cualquier momento para liberarlas.', back:'Atrás', publish:'Publicar',
    listingLive:'Tu publicación está activa', viewInMarket:'Ver en el mercado', backHome:'Volver al mercado',
    offersTitle:'Mis ofertas', sendCounter:'Enviar contraoferta', counter:'Contraofertar', reject:'Rechazar', dealAgreed:'Trato cerrado en', proceedPay:'Ir al pago', noOffers:'Sin ofertas abiertas. Haz una oferta en una publicación para iniciar una negociación.',
    payTitle:'Pago', payWindow:'Paga en', payMethod:'Método de pago', escrowShort:'Tu pago queda en custodia y solo se libera al vendedor cuando se confirma la transferencia de acciones.',
    payNow:'Pagar', processing:'Procesando…', selectMethod:'Elige un método de pago',
    doneTitle:'Pago recibido', viewReceipt:'Ver transacción', historyTitle:'Transacciones', txId:'Referencia', counterparty:'Contraparte', price:'Precio', status:'Estado',
    bought:'Compra a', sold:'Venta a', completed:'Completada', payoutPending:'Pago en 2 días',
    registryNote:'Cada transacción completada queda registrada permanentemente en el registro de acciones.',
    stAwaiting:'Esperando respuesta', stYourTurn:'Requiere acción', stAgreed:'Trato cerrado', stRejected:'Rechazada', stSettled:'Liquidada', stAwaitingPay:'Esperando pago',
    evOffer:'hizo una oferta', evCounter:'contraofertó', evAccept:'aceptó', evReject:'rechazó', evPaid:'pagó — acciones transferidas', you:'Tú', accept:'Aceptar', acceptFor:'Aceptar',
  }
};
const AV = [['#FDECEF','#E4002B'],['#E7F6EF','#0E9F6E'],['#EEF0FF','#4F5AED'],['#FFF4E5','#C77700']];
const fmt = n => 'MX$' + Math.round(n).toLocaleString('en-US');

class App extends React.Component {
  static defaultProps = { commissionPct: 1.5, payWindowMins: 30 };

  state = {
    lang:'en', screen:'home', bellOpen:false, toast:null,
    listings: [
      {id:'L-1042', seller:'Alejandra Ríos', initials:'AR', av:0, qty:25, price:1150, allowOffers:true, listed:'Aug 1', expires:'Aug 20'},
      {id:'L-1038', seller:'Carlos Mendoza', initials:'CM', av:1, qty:60, price:1120, allowOffers:true, listed:'Jul 29', expires:'Aug 28'},
      {id:'L-1036', seller:'María F. Ortiz', initials:'MO', av:2, qty:10, price:1200, allowOffers:false, listed:'Jul 27', expires:'Aug 26'},
      {id:'L-1031', seller:'Jorge Luna', initials:'JL', av:3, qty:40, price:1095, allowOffers:true, listed:'Jul 24', expires:'Aug 23'},
      {id:'L-1029', seller:'Sofía Vargas', initials:'SV', av:1, qty:15, price:1175, allowOffers:false, listed:'Jul 22', expires:'—'},
      {id:'L-1044', seller:'Daniela Cruz', initials:'DC', av:0, qty:15, price:1180, allowOffers:true, listed:'Aug 3', expires:'Aug 17', mine:true},
    ],
    selId:null, offering:false, offerPrice:1100, offerQty:10, counterPrice:1150, counteringId:null,
    sellQty:20, sellPrice:1150, sellAllowOffers:true, sellExpiry:'14', sellStep:1,
    myShares:120, reserved:15,
    threads: [
      {id:'T-1', listingId:'L-1044', role:'seller', counterparty:'Ricardo Peña', initials:'RP', av:2, qty:15, status:'yourTurn',
       events:[{by:'them', type:'offer', price:1130, time:'Today 09:12'}]},
    ],
    deal:null, payMethod:null, payPhase:'idle', paySecs:30*60,
    doneStep:1,
    txs: [
      {id:'TX-2093', dir:'sell', counterparty:'Sofía Vargas', qty:5, price:1140, date:'Jul 28, 2026', status:'done'},
      {id:'TX-2041', dir:'buy', counterparty:'Jorge Luna', qty:10, price:1080, date:'Jul 12, 2026', status:'done'},
    ],
    notifs: [
      {text:'Ricardo Peña made an offer of MX$1,130 on your listing L-1044', time:'Today 09:12', unread:true},
      {text:'Your listing L-1044 is live — 15 shares reserved', time:'Aug 3', unread:false},
      {text:'Payout of MX$5,700 sent to your STP account', time:'Jul 30', unread:false},
    ],
  };
  _timers = [];

  componentDidMount(){ this.startTick(); }
  componentWillUnmount(){ clearInterval(this._tick); this._timers.forEach(clearTimeout); }

  startTick(){ if(this._tick) return; this._tick = setInterval(()=>{ if(this.state.screen==='pay') this.setState({now:Date.now()}); },1000); }
  later(ms,fn){ this._timers.push(setTimeout(fn,ms)); }
  toast(msg){ this.setState({toast:msg}); this.later(3200,()=>this.setState(s=>s.toast===msg?{toast:null}:null)); }
  notify(text){ this.setState(s=>({notifs:[{text,time:this.state.lang==='es'?'Ahora':'Just now',unread:true},...s.notifs]})); }
  go(screen){ this.setState({screen, bellOpen:false, offering:false}); }
  agreeDeal(th, price){
    const l = this.state.listings.find(x=>x.id===th.listingId) || {};
    this.setState({deal:{seller:th.role==='buyer'?th.counterparty:'—', qty:th.qty, price, threadId:th.id, listingId:th.listingId}});
  }
  startPay(deal){ this.startTick(); this._payDeadline = Date.now()+(this.props.payWindowMins ?? 30)*60*1000; this.setState({deal, payMethod:null, payPhase:'idle', screen:'pay', bellOpen:false}); }

  sendOffer(sel){
    const price = Number(this.state.offerPrice)||0, qty = Math.min(Number(this.state.offerQty)||1, sel.qty);
    if(price<=0||qty<=0) return;
    const th = {id:'T-'+Date.now(), listingId:sel.id, role:'buyer', counterparty:sel.seller, initials:sel.initials, av:sel.av, qty,
      status:'awaiting', events:[{by:'me', type:'offer', price, time:this.state.lang==='es'?'Ahora':'Just now'}]};
    this.setState(s=>({threads:[th,...s.threads], offering:false, screen:'offers'}));
    this.toast(this.state.lang==='es'?'Oferta enviada a '+sel.seller:'Offer sent to '+sel.seller);
    this.later(3000, ()=>{
      const counter = Math.round((price+sel.price)/2/5)*5;
      this.setState(s=>({threads:s.threads.map(x=>x.id===th.id?{...x, status:'yourTurn', events:[...x.events,{by:'them', type:'counter', price:counter, time:this.state.lang==='es'?'Ahora':'Just now'}]}:x)}));
      this.notify((this.state.lang==='es'?`${sel.seller} contraofertó ${fmt(counter)} por acción`:`${sel.seller} countered at ${fmt(counter)} per share`));
      this.toast(this.state.lang==='es'?`${sel.seller} contraofertó ${fmt(counter)}`:`${sel.seller} countered at ${fmt(counter)}`);
    });
  }
  acceptThread(id){
    const th = this.state.threads.find(x=>x.id===id); if(!th) return;
    const price = [...th.events].reverse().find(e=>e.price).price;
    const now = this.state.lang==='es'?'Ahora':'Just now';
    this.setState(s=>({threads:s.threads.map(x=>x.id===id?{...x, status: x.role==='buyer'?'agreed':'awaitingPay', events:[...x.events,{by:'me', type:'accept', price:null, time:now}]}:x), counteringId:null}));
    if(th.role==='buyer'){ this.toast(this.state.lang==='es'?'Trato cerrado — procede al pago':'Deal agreed — proceed to payment'); }
    else {
      this.toast(this.state.lang==='es'?'Oferta aceptada — esperando el pago del comprador':'Offer accepted — awaiting buyer payment');
      this.later(4000, ()=>{
        this.setState(s=>({
          threads:s.threads.map(x=>x.id===id?{...x, status:'settled', events:[...x.events,{by:'them', type:'paid', price:null, time:this.state.lang==='es'?'Ahora':'Just now'}]}:x),
          myShares:s.myShares-th.qty, reserved:Math.max(0,s.reserved-th.qty),
          listings:s.listings.filter(l=>l.id!==th.listingId),
          txs:[{id:'TX-'+(2100+s.txs.length), dir:'sell', counterparty:th.counterparty, qty:th.qty, price, date:'Aug 5, 2026', status:'pending'},...s.txs],
        }));
        this.notify(this.state.lang==='es'?`${th.counterparty} pagó — pago a tu cuenta STP en 2 días hábiles`:`${th.counterparty} paid — payout to your STP account within 2 working days`);
        this.toast(this.state.lang==='es'?'Acciones transferidas — pago programado':'Shares transferred — payout scheduled');
      });
    }
  }
  rejectThread(id){
    const now = this.state.lang==='es'?'Ahora':'Just now';
    this.setState(s=>({threads:s.threads.map(x=>x.id===id?{...x, status:'rejected', events:[...x.events,{by:'me', type:'reject', price:null, time:now}]}:x), counteringId:null}));
    this.toast(this.state.lang==='es'?'Oferta rechazada':'Offer rejected');
  }
  submitCounter(id){
    const price = Number(this.state.counterPrice)||0; if(price<=0) return;
    const th = this.state.threads.find(x=>x.id===id);
    const now = this.state.lang==='es'?'Ahora':'Just now';
    this.setState(s=>({threads:s.threads.map(x=>x.id===id?{...x, status:'awaiting', events:[...x.events,{by:'me', type:'counter', price, time:now}]}:x), counteringId:null}));
    this.toast(this.state.lang==='es'?'Contraoferta enviada':'Counter sent');
    this.later(3500, ()=>{
      const cur = this.state.threads.find(x=>x.id===id); if(!cur||cur.status!=='awaiting') return;
      const nowl = this.state.lang==='es'?'Ahora':'Just now';
      if(th.role==='seller'){
        this.setState(s=>({threads:s.threads.map(x=>x.id===id?{...x, status:'awaitingPay', events:[...x.events,{by:'them', type:'accept', price:null, time:nowl}]}:x)}));
        this.notify(this.state.lang==='es'?`${th.counterparty} aceptó tu contraoferta de ${fmt(price)}`:`${th.counterparty} accepted your counter of ${fmt(price)}`);
        this.toast(this.state.lang==='es'?`${th.counterparty} aceptó tu contraoferta`:`${th.counterparty} accepted your counter`);
        this.later(4000, ()=>this.acceptSettle(id, price));
      } else {
        this.setState(s=>({threads:s.threads.map(x=>x.id===id?{...x, status:'yourTurn', events:[...x.events,{by:'them', type:'counter', price:price+20, time:nowl}]}:x)}));
        this.notify(this.state.lang==='es'?`${th.counterparty} contraofertó ${fmt(price+20)}`:`${th.counterparty} countered at ${fmt(price+20)}`);
      }
    });
  }
  acceptSettle(id, price){
    const th = this.state.threads.find(x=>x.id===id); if(!th || th.status!=='awaitingPay') return;
    this.setState(s=>({
      threads:s.threads.map(x=>x.id===id?{...x, status:'settled', events:[...x.events,{by:'them', type:'paid', price:null, time:this.state.lang==='es'?'Ahora':'Just now'}]}:x),
      myShares:s.myShares-th.qty, reserved:Math.max(0,s.reserved-th.qty),
      listings:s.listings.filter(l=>l.id!==th.listingId),
      txs:[{id:'TX-'+(2100+s.txs.length), dir:'sell', counterparty:th.counterparty, qty:th.qty, price, date:'Aug 5, 2026', status:'pending'},...s.txs],
    }));
    this.notify(this.state.lang==='es'?`${th.counterparty} pagó — pago a tu cuenta STP en 2 días hábiles`:`${th.counterparty} paid — payout to your STP account within 2 working days`);
    this.toast(this.state.lang==='es'?'Acciones transferidas — pago programado':'Shares transferred — payout scheduled');
  }
  publishListing(){
    const qty = Number(this.state.sellQty)||0, price = Number(this.state.sellPrice)||0;
    if(qty<=0||price<=0) return;
    const l = {id:'L-'+(1045+this.state.listings.length), seller:'Daniela Cruz', initials:'DC', av:0, qty, price,
      allowOffers:this.state.sellAllowOffers, listed:'Aug 5', expires:this.state.sellExpiry==='0'?'—':'Aug '+(5+Number(this.state.sellExpiry)), mine:true};
    this.setState(s=>({listings:[l,...s.listings], reserved:s.reserved+qty, sellStep:3}));
    this.notify(this.state.lang==='es'?`Tu publicación ${l.id} está activa — ${qty} acciones reservadas`:`Your listing ${l.id} is live — ${qty} shares reserved`);
  }
  payNow(){
    if(!this.state.payMethod) return;
    this.setState({payPhase:'processing'});
    this.later(1600, ()=>{
      const d = this.state.deal;
      this.setState(s=>({
        payPhase:'done', screen:'done', doneStep:1,
        listings:s.listings.filter(l=>l.id!==d.listingId),
        threads:s.threads.map(x=>x.id===d.threadId?{...x, status:'settled', events:[...x.events,{by:'me', type:'paid', price:null, time:this.state.lang==='es'?'Ahora':'Just now'}]}:x),
        myShares:s.myShares+d.qty,
        txs:[{id:'TX-'+(2100+s.txs.length), dir:'buy', counterparty:d.seller, qty:d.qty, price:d.price, date:'Aug 5, 2026', status:'done'},...s.txs],
      }));
      this.notify(this.state.lang==='es'?`Pago confirmado — ${d.qty} acciones transferidas a tu nombre`:`Payment confirmed — ${d.qty} shares transferred to your name`);
      this.later(1200, ()=>this.setState({doneStep:2}));
      this.later(2400, ()=>this.setState({doneStep:3}));
    });
  }

  renderVals(){
    const s = this.state, t = I18N[s.lang], feePct = this.props.commissionPct ?? 1.5;
    const price = 1150;
    const sel = s.listings.find(l=>l.id===s.selId) || s.listings[0];
    const mkListing = l => ({...l,
      avBg:AV[l.av][0], avFg:AV[l.av][1], initials:l.initials,
      priceFmt:fmt(l.price), totalFmt:fmt(l.qty*l.price),
      tag: l.allowOffers?t.offersOk:t.fixedPrice, tagBg: l.allowOffers?'#E7F6EF':'#F4F5F7', tagFg: l.allowOffers?'#0E9F6E':'#5A616B',
      meta: (s.lang==='es'?'expira ':'expires ')+l.expires, notMine:!l.mine, noOffers:!l.allowOffers,
      feeFmt:fmt(l.qty*l.price*feePct/100), dueFmt:fmt(l.qty*l.price*(1+feePct/100)),
      open:()=>this.setState({selId:l.id, screen:'detail', offering:false, offerPrice:l.price-50, offerQty:l.qty}),
    });
    const offerTotal = (Number(s.offerPrice)||0)*(Number(s.offerQty)||0);
    const askTotal = sel.price*(Number(s.offerQty)||0);
    const delta = askTotal>0 ? Math.round((offerTotal-askTotal)/askTotal*100) : 0;
    const evLabel = (ev, th) => {
      const who = ev.by==='me' ? t.you : th.counterparty.split(' ')[0];
      const map = {offer:t.evOffer, counter:t.evCounter, accept:t.evAccept, reject:t.evReject, paid:t.evPaid};
      return who+' '+map[ev.type];
    };
    const stMap = {
      awaiting:{l:t.stAwaiting, bg:'#F4F5F7', fg:'#5A616B'}, yourTurn:{l:t.stYourTurn, bg:'#FDECEF', fg:'#E4002B'},
      agreed:{l:t.stAgreed, bg:'#E7F6EF', fg:'#0E9F6E'}, rejected:{l:t.stRejected, bg:'#F4F5F7', fg:'#8A909A'},
      awaitingPay:{l:t.stAwaitingPay, bg:'#FFF4E5', fg:'#C77700'}, settled:{l:t.stSettled, bg:'#E7F6EF', fg:'#0E9F6E'},
    };
    const threads = s.threads.map(th=>{
      const st = stMap[th.status];
      const lastPrice = [...th.events].reverse().find(e=>e.price)?.price || 0;
      const actionable = th.status==='yourTurn';
      const isCounter = s.counteringId===th.id;
      return {
        ...th, avBg:AV[th.av][0], avFg:AV[th.av][1],
        title: th.role==='seller' ? (s.lang==='es'?'Oferta recibida de ':'Offer received from ')+th.counterparty : (s.lang==='es'?'Tu oferta a ':'Your offer to ')+th.counterparty,
        subtitle: th.listingId+' · '+th.qty+' '+(s.lang==='es'?'acciones':'shares'),
        statusLbl:st.l, stBg:st.bg, stFg:st.fg,
        events: th.events.map((ev,i)=>({
          label: evLabel(ev,th), hasPrice: !!ev.price, priceFmt: ev.price?fmt(ev.price)+' '+(s.lang==='es'?'/ acción':'/ share'):'', time:ev.time,
          dot: ev.type==='accept'||ev.type==='paid' ? '✓' : (ev.by==='me'?(s.lang==='es'?'T':'Y'):th.initials[0]),
          dotBg: ev.type==='accept'||ev.type==='paid' ? '#0E9F6E' : (ev.by==='me'?'#191B1F':AV[th.av][0]),
          dotFg: ev.type==='accept'||ev.type==='paid' ? '#fff' : (ev.by==='me'?'#fff':AV[th.av][1]),
          hasLine: i<th.events.length-1, hasNote:false,
        })),
        actionable, countering:isCounter, notCountering:!isCounter,
        acceptLbl: t.accept+' '+fmt(lastPrice*th.qty),
        payable: th.status==='agreed' && th.role==='buyer',
        dealFmt: fmt(lastPrice)+' × '+th.qty+' = '+fmt(lastPrice*th.qty),
        accept:()=>this.acceptThread(th.id), reject:()=>this.rejectThread(th.id),
        startCounter:()=>this.setState({counteringId:th.id, counterPrice:lastPrice+ (th.role==='seller'?25:-25)}),
        cancelCounter:()=>this.setState({counteringId:null}),
        submitCounter:()=>this.submitCounter(th.id),
        pay:()=>this.startPay({seller:th.counterparty, qty:th.qty, price:lastPrice, threadId:th.id, listingId:th.listingId}),
      };
    });
    const pms = [
      {k:'stp', name:'STP · SPEI', desc:s.lang==='es'?'Transferencia bancaria inmediata':'Instant bank transfer', icon:'SPEI'},
      {k:'conekta', name:'Conekta', desc:s.lang==='es'?'Tarjeta de crédito o débito':'Credit or debit card', icon:'CARD'},
      {k:'oxxo', name:'OXXO', desc:s.lang==='es'?'Pago en efectivo con referencia':'Cash payment with voucher', icon:'OXXO'},
      {k:'ramp', name:s.lang==='es'?'Cripto (on-ramp)':'Crypto on-ramp', desc:s.lang==='es'?'Paga con cripto, convertido a MXN':'Pay in crypto, converted to MXN', icon:'⬡'},
    ].map(pm=>({...pm,
      selected:s.payMethod===pm.k, border:s.payMethod===pm.k?'#E4002B':'#ECEEF1', bg:s.payMethod===pm.k?'#FDECEF':'#fff',
      iconBg:s.payMethod===pm.k?'#E4002B':'#F4F5F7', iconFg:s.payMethod===pm.k?'#fff':'#5A616B',
      radioBorder:s.payMethod===pm.k?'#E4002B':'#D8DBE0',
      select:()=>this.setState({payMethod:pm.k}),
    }));
    const deal = s.deal || {seller:'—', qty:0, price:0};
    const dSub = deal.qty*deal.price, dFee = dSub*feePct/100;
    const paySecs = Math.max(0, Math.floor(((this._payDeadline||Date.now())-Date.now())/1000));
    const mm = Math.floor(paySecs/60), ss = paySecs%60;
    const dSteps = [
      {label:s.lang==='es'?'Pago recibido en custodia':'Payment received in escrow', desc:s.lang==='es'?'Los fondos están asegurados hasta confirmar la transferencia.':'Funds are held securely until the transfer is confirmed.', on:s.doneStep>=1},
      {label:s.lang==='es'?'Acciones transferidas':'Shares transferred', desc:(s.lang==='es'?'El registro de accionistas ahora te muestra como titular de ':'The share registry now records you as the owner of ')+deal.qty+(s.lang==='es'?' acciones.':' shares.'), on:s.doneStep>=2},
      {label:s.lang==='es'?'Pago al vendedor programado':'Seller payout scheduled', desc:s.lang==='es'?'El vendedor recibe los fondos en su cuenta STP en 2 días hábiles.':'The seller receives funds in their STP account within 2 working days.', on:s.doneStep>=3},
    ].map((st,i)=>({...st, done:st.on, pending:!st.on, bg:st.on?'#0E9F6E':'#F4F5F7', hasLine:i<2, lineBg:st.on&&i<s.doneStep-0?'#B9E8D4':'#ECEEF1', label:st.label, desc:st.desc}));
    const activity = [
      {chip:'↓', chipBg:'#FDECEF', chipFg:'#E4002B', text: s.lang==='es'?'Ricardo Peña hizo una oferta en tu publicación L-1044':'Ricardo Peña made an offer on your listing L-1044', amount:'MX$1,130 / '+(s.lang==='es'?'acción':'share'), amtColor:'#14161A', time:s.lang==='es'?'Hoy':'Today'},
      {chip:'●', chipBg:'#E7F6EF', chipFg:'#0E9F6E', text: s.lang==='es'?'Tu publicación L-1044 está activa — 15 acciones reservadas':'Your listing L-1044 is live — 15 shares reserved', amount:'MX$17,700', amtColor:'#14161A', time:'Aug 3'},
      {chip:'$', chipBg:'#E7F6EF', chipFg:'#0E9F6E', text: s.lang==='es'?'Pago enviado a tu cuenta STP por la venta TX-2093':'Payout sent to your STP account for sale TX-2093', amount:'+MX$5,700', amtColor:'#0E9F6E', time:'Jul 30'},
    ];
    const openCount = s.threads.filter(x=>x.status==='yourTurn'||x.status==='agreed').length;
    const visListings = s.listings;
    return {
      t, feePct,
      setEn:()=>this.setState({lang:'en'}), setEs:()=>this.setState({lang:'es'}),
      enBg:s.lang==='en'?'#191B1F':'transparent', enFg:s.lang==='en'?'#fff':'#5A616B',
      esBg:s.lang==='es'?'#191B1F':'transparent', esFg:s.lang==='es'?'#fff':'#5A616B',
      toggleBell:()=>this.setState(x=>({bellOpen:!x.bellOpen})), bellOpen:s.bellOpen,
      hasUnread:s.notifs.some(n=>n.unread),
      notifs:s.notifs.slice(0,5).map(n=>({...n, dot:n.unread?'#E4002B':'#D8DBE0'})),
      goHome:()=>this.go('home'), goBrowse:()=>this.go('browse'), goSell:()=>{this.setState({sellStep:1}); this.go('sell');},
      goOffers:()=>this.go('offers'), goHistory:()=>this.go('history'),
      isHome:s.screen==='home', isBrowse:s.screen==='browse', isDetail:s.screen==='detail', isSell:s.screen==='sell',
      isOffers:s.screen==='offers', isPay:s.screen==='pay', isDone:s.screen==='done', isHistory:s.screen==='history',
      myShares:s.myShares, reservedLine:s.reserved+' '+(s.lang==='es'?'reservadas en publicaciones':'reserved in live listings'),
      estValue:fmt(s.myShares*price), listingCount:visListings.length,
      listingSharesLine:visListings.reduce((a,l)=>a+l.qty,0)+' '+(s.lang==='es'?'acciones en venta':'shares for sale'),
      hasOpenOffers:openCount>0, openOfferCount:openCount,
      activity,
      listings:visListings.map(mkListing),
      sel:mkListing(sel), notOffering:!s.offering, offering:s.offering,
      buyAtAsk:()=>this.startPay({seller:sel.seller, qty:sel.qty, price:sel.price, listingId:sel.id}),
      startOffer:()=>this.setState({offering:true}),
      cancelOffer:()=>this.setState({offering:false}),
      offerPrice:s.offerPrice, offerQty:s.offerQty,
      onOfferPrice:e=>this.setState({offerPrice:e.target.value}), onOfferQty:e=>this.setState({offerQty:e.target.value}),
      offerTotalFmt:fmt(offerTotal),
      offerDeltaColor: delta<0?'#0E9F6E':'#5A616B',
      offerDeltaLine: delta===0 ? (s.lang==='es'?'Igual al precio de venta':'Same as asking price') : (delta<0? (s.lang==='es'?`${Math.abs(delta)}% bajo el precio de venta`:`${Math.abs(delta)}% below asking price`) : (s.lang==='es'?`${delta}% sobre el precio de venta`:`${delta}% above asking price`)),
      sendOffer:()=>this.sendOffer(sel),
      availShares:s.myShares-s.reserved,
      sellQty:s.sellQty, sellPrice:s.sellPrice, sellExpiry:s.sellExpiry,
      onSellQty:e=>this.setState({sellQty:e.target.value}), onSellPrice:e=>this.setState({sellPrice:e.target.value}), onSellExpiry:e=>this.setState({sellExpiry:e.target.value}),
      toggleAllowOffers:()=>this.setState(x=>({sellAllowOffers:!x.sellAllowOffers})),
      allowBg:s.sellAllowOffers?'#0E9F6E':'#D8DBE0', allowKnob:s.sellAllowOffers?'21px':'3px',
      sellStep1:s.sellStep===1, sellStep2:s.sellStep===2, sellStep3:s.sellStep===3,
      sellBar2:s.sellStep>=2?'#E4002B':'#ECEEF1', sellBar3:s.sellStep>=3?'#E4002B':'#ECEEF1',
      sellPriceFmt:fmt(Number(s.sellPrice)||0), sellTotalFmt:fmt((Number(s.sellQty)||0)*(Number(s.sellPrice)||0)),
      sellOffersLbl:s.sellAllowOffers?t.yes:t.no,
      sellExpiryLbl:s.sellExpiry==='0'?t.noExpiry:s.sellExpiry+' '+(s.lang==='es'?'días':'days'),
      sellReview:()=>this.setState({sellStep:2}), sellBack:()=>this.setState({sellStep:1}),
      sellPublish:()=>this.publishListing(),
      sellLiveLine:(s.lang==='es'?`${s.sellQty} acciones reservadas y publicadas a ${fmt(Number(s.sellPrice)||0)} por acción.`:`${s.sellQty} shares reserved and listed at ${fmt(Number(s.sellPrice)||0)} per share.`),
      threads, noThreads:threads.length===0,
      counterPrice:s.counterPrice, onCounterPrice:e=>this.setState({counterPrice:e.target.value}),
      payMethods:pms, deal:{...deal, priceFmt:fmt(deal.price), subFmt:fmt(dSub), feeFmt:fmt(dFee), dueFmt:fmt(dSub+dFee)},
      countdown:String(mm).padStart(2,'0')+':'+String(ss).padStart(2,'0'),
      payDisabled:!s.payMethod || s.payPhase==='processing',
      payBtnBg:!s.payMethod?'#D8DBE0':(s.payPhase==='processing'?'#B80022':'#E4002B'),
      payBtnHover:!s.payMethod?'#D8DBE0':'#B80022',
      payBtnShadow:!s.payMethod?'none':'0 8px 16px rgba(228,0,43,0.28)',
      payBtnLbl: s.payPhase==='processing'?t.processing:(!s.payMethod?t.selectMethod:t.payNow+' '+fmt(dSub+dFee)),
      payNow:()=>this.payNow(),
      doneSteps:dSteps,
      doneLine:(s.lang==='es'?`Compraste ${deal.qty} acciones de ${deal.seller} por ${fmt(dSub)}.`:`You bought ${deal.qty} shares from ${deal.seller} for ${fmt(dSub)}.`),
      txs:s.txs.map(tx=>({...tx,
        dirLbl:tx.dir==='buy'?t.bought:t.sold, priceFmt:fmt(tx.price),
        totalFmt:(tx.dir==='buy'?'−':'+')+fmt(tx.qty*tx.price), amtColor:tx.dir==='buy'?'#14161A':'#0E9F6E',
        stBg:tx.status==='done'?'#E7F6EF':'#FFF4E5', stFg:tx.status==='done'?'#0E9F6E':'#C77700',
        status:tx.status==='done'?t.completed:t.payoutPending,
      })),
      hasToast:!!s.toast, toast:s.toast,
    };
  }

  render(){
    const v = this.renderVals();
    return (
      <div style={{minHeight:'100vh', background:'#F4F5F7', fontFamily:"'Manrope',sans-serif", color:'#14161A'}}>
        <header style={{position:'sticky', top:0, zIndex:50, background:'rgba(255,255,255,0.85)', backdropFilter:'blur(12px)', borderBottom:'1px solid #ECEEF1'}}>
          <div style={{maxWidth:1180, margin:'0 auto', padding:'0 28px', height:64, display:'flex', alignItems:'center', justifyContent:'space-between', gap:16}}>
            <div style={{display:'flex', alignItems:'center', gap:14}}>
              <div style={{width:34, height:34, borderRadius:10, background:'#E4002B', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:14, letterSpacing:'-0.02em'}}>J3</div>
              <div>
                <div style={{fontWeight:800, fontSize:14, letterSpacing:'-0.01em'}}>JAVA TIMES CAFFÈ · JAVA 300</div>
                <div style={{fontSize:11.5, color:'#8A909A', fontWeight:700, letterSpacing:'0.04em', textTransform:'uppercase'}}>
                  <span onClick={v.goHome} style={{cursor:'pointer'}}>{v.t.fundraiser}</span> / <span style={{color:'#E4002B'}}>{v.t.marketplace}</span>
                </div>
              </div>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:14}}>
              <div style={{display:'flex', background:'#F4F5F7', border:'1px solid #ECEEF1', borderRadius:999, padding:3}}>
                <button onClick={v.setEn} style={{border:'none', borderRadius:999, padding:'5px 13px', fontSize:12, fontWeight:800, cursor:'pointer', background:v.enBg, color:v.enFg}}>EN</button>
                <button onClick={v.setEs} style={{border:'none', borderRadius:999, padding:'5px 13px', fontSize:12, fontWeight:800, cursor:'pointer', background:v.esBg, color:v.esFg}}>ES</button>
              </div>
              <div style={{position:'relative'}}>
                <button onClick={v.toggleBell} className="hov-bell" style={{width:36, height:36, borderRadius:11, border:'1px solid #ECEEF1', background:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', position:'relative'}}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#5A616B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
                  {v.hasUnread && <span style={{position:'absolute', top:7, right:8, width:8, height:8, borderRadius:'50%', background:'#E4002B', border:'2px solid #fff'}}></span>}
                </button>
                {v.bellOpen && (
                  <div style={{position:'absolute', right:0, top:44, width:330, background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, boxShadow:'0 16px 40px rgba(20,22,26,0.12)', padding:8, animation:'pop .15s ease'}}>
                    <div style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A', padding:'10px 12px 6px'}}>{v.t.notifications}</div>
                    {v.notifs.map((n,i)=>(
                      <div key={i} className="hov-notif-row" style={{display:'flex', gap:10, padding:'10px 12px', borderRadius:11, alignItems:'flex-start'}}>
                        <span style={{width:7, height:7, borderRadius:'50%', background:n.dot, marginTop:6, flex:'none'}}></span>
                        <div><div style={{fontSize:13, fontWeight:600, lineHeight:1.4}}>{n.text}</div><div style={{fontSize:11.5, color:'#8A909A', fontWeight:600, marginTop:2}}>{n.time}</div></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div style={{width:36, height:36, borderRadius:'50%', background:'linear-gradient(135deg,#191B1F,#25282E)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:12.5}}>DC</div>
            </div>
          </div>
        </header>

        <main style={{maxWidth:1180, margin:'0 auto', padding:'28px 28px 64px'}}>

          {v.isHome && (
            <div style={{animation:'fadeUp .25s ease'}}>
              <div style={{display:'grid', gridTemplateColumns:'1.35fr 1fr 1fr 1fr', gap:16}}>
                <div style={{background:'linear-gradient(135deg,#191B1F,#25282E)', borderRadius:20, padding:26, color:'#fff', display:'flex', flexDirection:'column', justifyContent:'space-between', gridRow:'span 1'}}>
                  <div>
                    <div style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'rgba(255,255,255,0.55)'}}>{v.t.myShares}</div>
                    <div style={{fontFamily:"'Space Grotesk'", fontSize:44, fontWeight:700, letterSpacing:'-0.01em', fontVariantNumeric:'tabular-nums', marginTop:6}}>{v.myShares}</div>
                    <div style={{fontSize:13, color:'rgba(255,255,255,0.65)', fontWeight:600, marginTop:2}}>{v.reservedLine}</div>
                  </div>
                  <div style={{display:'flex', alignItems:'baseline', gap:8, marginTop:18}}>
                    <span style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'rgba(255,255,255,0.55)'}}>{v.t.estValue}</span>
                    <span style={{fontFamily:"'Space Grotesk'", fontSize:19, fontWeight:600, color:'#3DDC97', fontVariantNumeric:'tabular-nums'}}>{v.estValue}</span>
                  </div>
                </div>
                <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:20, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.lastPrice}</div>
                    <span style={{width:30, height:30, borderRadius:9, background:'#FDECEF', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E4002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg></span>
                  </div>
                  <div>
                    <div style={{fontFamily:"'Space Grotesk'", fontSize:26, fontWeight:700, fontVariantNumeric:'tabular-nums', letterSpacing:'-0.01em'}}>MX$1,150</div>
                    <div style={{display:'flex', alignItems:'center', gap:8, marginTop:6}}>
                      <span style={{background:'#E7F6EF', color:'#0E9F6E', borderRadius:999, padding:'2px 9px', fontSize:12, fontWeight:800}}>+4.5%</span>
                      <svg width="72" height="22" viewBox="0 0 72 22"><polyline points="0,17 12,15 24,16 36,11 48,12 60,7 72,4" fill="none" stroke="#0E9F6E" strokeWidth="2"></polyline></svg>
                    </div>
                  </div>
                </div>
                <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:20, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.activeListings}</div>
                    <span style={{width:30, height:30, borderRadius:9, background:'#FDECEF', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E4002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path><path d="M7 7h.01"></path></svg></span>
                  </div>
                  <div>
                    <div style={{fontFamily:"'Space Grotesk'", fontSize:26, fontWeight:700, fontVariantNumeric:'tabular-nums'}}>{v.listingCount}</div>
                    <div style={{fontSize:12.5, color:'#5A616B', fontWeight:600, marginTop:6}}>{v.listingSharesLine}</div>
                  </div>
                </div>
                <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:20, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.vol30}</div>
                    <span style={{width:30, height:30, borderRadius:9, background:'#FDECEF', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E4002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg></span>
                  </div>
                  <div>
                    <div style={{fontFamily:"'Space Grotesk'", fontSize:26, fontWeight:700, fontVariantNumeric:'tabular-nums'}}>320</div>
                    <div style={{fontSize:12.5, color:'#5A616B', fontWeight:600, marginTop:6}}>{v.t.sharesTraded} · MX$364,800</div>
                  </div>
                </div>
              </div>

              <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16, marginTop:16}}>
                <div onClick={v.goBrowse} className="hov-tile" style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:22, cursor:'pointer', transition:'box-shadow .15s,transform .15s'}}>
                  <span style={{width:38, height:38, borderRadius:11, background:'#FDECEF', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></span>
                  <div style={{fontWeight:800, fontSize:15, letterSpacing:'-0.01em', marginTop:14}}>{v.t.browseTile}</div>
                  <div style={{fontSize:12.5, color:'#5A616B', fontWeight:600, lineHeight:1.45, marginTop:4}}>{v.t.browseDesc}</div>
                </div>
                <div onClick={v.goSell} className="hov-tile" style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:22, cursor:'pointer', transition:'box-shadow .15s,transform .15s'}}>
                  <span style={{width:38, height:38, borderRadius:11, background:'#FDECEF', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path><path d="M7 7h.01"></path></svg></span>
                  <div style={{fontWeight:800, fontSize:15, letterSpacing:'-0.01em', marginTop:14}}>{v.t.sellTile}</div>
                  <div style={{fontSize:12.5, color:'#5A616B', fontWeight:600, lineHeight:1.45, marginTop:4}}>{v.t.sellDesc}</div>
                </div>
                <div onClick={v.goOffers} className="hov-tile" style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:22, cursor:'pointer', position:'relative', transition:'box-shadow .15s,transform .15s'}}>
                  <span style={{width:38, height:38, borderRadius:11, background:'#FDECEF', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg></span>
                  {v.hasOpenOffers && <span style={{position:'absolute', top:18, right:18, background:'#E4002B', color:'#fff', borderRadius:999, fontSize:11, fontWeight:800, padding:'3px 9px'}}>{v.openOfferCount}</span>}
                  <div style={{fontWeight:800, fontSize:15, letterSpacing:'-0.01em', marginTop:14}}>{v.t.offersTile}</div>
                  <div style={{fontSize:12.5, color:'#5A616B', fontWeight:600, lineHeight:1.45, marginTop:4}}>{v.t.offersDesc}</div>
                </div>
                <div onClick={v.goHistory} className="hov-tile" style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:22, cursor:'pointer', transition:'box-shadow .15s,transform .15s'}}>
                  <span style={{width:38, height:38, borderRadius:11, background:'#FDECEF', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg></span>
                  <div style={{fontWeight:800, fontSize:15, letterSpacing:'-0.01em', marginTop:14}}>{v.t.historyTile}</div>
                  <div style={{fontSize:12.5, color:'#5A616B', fontWeight:600, lineHeight:1.45, marginTop:4}}>{v.t.historyDesc}</div>
                </div>
              </div>

              <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, marginTop:16, padding:'8px 22px'}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 0 6px'}}>
                  <div style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.activity}</div>
                  <span onClick={v.goHistory} style={{fontSize:12.5, fontWeight:800, color:'#E4002B', cursor:'pointer'}}>{v.t.viewAll}</span>
                </div>
                {v.activity.map((a,i)=>(
                  <div key={i} style={{display:'flex', alignItems:'center', gap:14, padding:'13px 0', borderTop:'1px solid #F4F5F7'}}>
                    <span style={{width:30, height:30, borderRadius:9, background:a.chipBg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:800, color:a.chipFg}}>{a.chip}</span>
                    <div style={{flex:1, fontSize:13.5, fontWeight:600}}>{a.text}</div>
                    <div style={{fontFamily:"'Space Grotesk'", fontSize:13.5, fontWeight:600, fontVariantNumeric:'tabular-nums', color:a.amtColor}}>{a.amount}</div>
                    <div style={{fontSize:12, color:'#8A909A', fontWeight:600, width:70, textAlign:'right'}}>{a.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {v.isBrowse && (
            <div style={{animation:'fadeUp .25s ease'}}>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18}}>
                <div style={{display:'flex', alignItems:'center', gap:14}}>
                  <button onClick={v.goHome} className="hov-icon-btn" style={{width:34, height:34, borderRadius:10, border:'1px solid #ECEEF1', background:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A616B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
                  <h1 style={{fontSize:22, fontWeight:800, letterSpacing:'-0.02em', margin:0}}>{v.t.browseTitle}</h1>
                  <span style={{background:'#FDECEF', color:'#E4002B', borderRadius:999, padding:'3px 11px', fontSize:12, fontWeight:800}}>{v.listingCount} {v.t.live}</span>
                </div>
                <button onClick={v.goSell} className="hov-red-btn" style={{border:'none', background:'#E4002B', color:'#fff', borderRadius:11, padding:'10px 18px', fontSize:13.5, fontWeight:800, cursor:'pointer', boxShadow:'0 8px 16px rgba(228,0,43,0.28)'}}>{v.t.sellTile}</button>
              </div>
              <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, overflow:'hidden'}}>
                <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1.1fr 1.1fr 1.3fr 0.9fr', gap:12, padding:'13px 22px', borderBottom:'1px solid #ECEEF1', fontSize:11, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>
                  <div>{v.t.seller}</div><div style={{textAlign:'right'}}>{v.t.qty}</div><div style={{textAlign:'right'}}>{v.t.ask}</div><div style={{textAlign:'right'}}>{v.t.total}</div><div>{v.t.type}</div><div></div>
                </div>
                {v.listings.map(l=>(
                  <div key={l.id} className="hov-table-row" style={{display:'grid', gridTemplateColumns:'2fr 1fr 1.1fr 1.1fr 1.3fr 0.9fr', gap:12, padding:'15px 22px', borderBottom:'1px solid #F4F5F7', alignItems:'center'}}>
                    <div style={{display:'flex', alignItems:'center', gap:11}}>
                      <span style={{width:32, height:32, borderRadius:'50%', background:l.avBg, color:l.avFg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:800, flex:'none'}}>{l.initials}</span>
                      <div><div style={{fontSize:13.5, fontWeight:700}}>{l.seller}</div><div style={{fontSize:11.5, color:'#8A909A', fontWeight:600}}>{l.id} · {l.meta}</div></div>
                    </div>
                    <div style={{textAlign:'right', fontFamily:"'Space Grotesk'", fontSize:14, fontWeight:600, fontVariantNumeric:'tabular-nums'}}>{l.qty}</div>
                    <div style={{textAlign:'right', fontFamily:"'Space Grotesk'", fontSize:14, fontWeight:700, fontVariantNumeric:'tabular-nums'}}>{l.priceFmt}</div>
                    <div style={{textAlign:'right', fontFamily:"'Space Grotesk'", fontSize:14, fontWeight:600, fontVariantNumeric:'tabular-nums', color:'#5A616B'}}>{l.totalFmt}</div>
                    <div><span style={{background:l.tagBg, color:l.tagFg, borderRadius:999, padding:'3px 11px', fontSize:11.5, fontWeight:800}}>{l.tag}</span></div>
                    <div style={{textAlign:'right'}}>
                      {l.mine && <span style={{fontSize:12, fontWeight:800, color:'#8A909A'}}>{v.t.yourListing}</span>}
                      {l.notMine && <button onClick={l.open} className="hov-outline-red" style={{border:'1px solid #ECEEF1', background:'#fff', color:'#14161A', borderRadius:10, padding:'7px 15px', fontSize:12.5, fontWeight:800, cursor:'pointer'}}>{v.t.view}</button>}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{fontSize:12, color:'#8A909A', fontWeight:600, marginTop:12}}>{v.t.reservedNote}</div>
            </div>
          )}

          {v.isDetail && (
            <div style={{animation:'fadeUp .25s ease'}}>
              <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:18}}>
                <button onClick={v.goBrowse} className="hov-icon-btn" style={{width:34, height:34, borderRadius:10, border:'1px solid #ECEEF1', background:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A616B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
                <h1 style={{fontSize:22, fontWeight:800, letterSpacing:'-0.02em', margin:0}}>{v.t.listing} {v.sel.id}</h1>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:16, alignItems:'start'}}>
                <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:26}}>
                  <div style={{display:'flex', alignItems:'center', gap:14}}>
                    <span style={{width:48, height:48, borderRadius:'50%', background:v.sel.avBg, color:v.sel.avFg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, fontWeight:800}}>{v.sel.initials}</span>
                    <div>
                      <div style={{fontSize:16, fontWeight:800}}>{v.sel.seller}</div>
                      <div style={{display:'flex', alignItems:'center', gap:5, fontSize:12, fontWeight:700, color:'#0E9F6E', marginTop:2}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0E9F6E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>{v.t.verified}</div>
                    </div>
                  </div>
                  <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14, marginTop:24}}>
                    <div style={{background:'#F4F5F7', borderRadius:14, padding:16}}>
                      <div style={{fontSize:11, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.qty}</div>
                      <div style={{fontFamily:"'Space Grotesk'", fontSize:24, fontWeight:700, fontVariantNumeric:'tabular-nums', marginTop:4}}>{v.sel.qty}</div>
                    </div>
                    <div style={{background:'#F4F5F7', borderRadius:14, padding:16}}>
                      <div style={{fontSize:11, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.ask}</div>
                      <div style={{fontFamily:"'Space Grotesk'", fontSize:24, fontWeight:700, fontVariantNumeric:'tabular-nums', marginTop:4}}>{v.sel.priceFmt}</div>
                    </div>
                    <div style={{background:'#F4F5F7', borderRadius:14, padding:16}}>
                      <div style={{fontSize:11, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.total}</div>
                      <div style={{fontFamily:"'Space Grotesk'", fontSize:24, fontWeight:700, fontVariantNumeric:'tabular-nums', marginTop:4}}>{v.sel.totalFmt}</div>
                    </div>
                  </div>
                  <div style={{display:'flex', gap:18, marginTop:20, fontSize:12.5, color:'#5A616B', fontWeight:600}}>
                    <span>{v.t.listedOn} {v.sel.listed}</span><span>·</span><span>{v.t.expiresOn} {v.sel.expires}</span><span>·</span><span style={{color:v.sel.tagFg, fontWeight:800}}>{v.sel.tag}</span>
                  </div>
                  <div style={{background:'#FDECEF', borderRadius:12, padding:'13px 16px', fontSize:12.5, fontWeight:600, color:'#B80022', marginTop:20, display:'flex', gap:9, alignItems:'flex-start'}}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B80022" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flex:'none', marginTop:1}}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                    {v.t.escrowNote}
                  </div>
                </div>
                <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:24}}>
                  {v.notOffering && (
                    <>
                      <div style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.orderSummary}</div>
                      <div style={{marginTop:16, display:'flex', flexDirection:'column', gap:10, fontSize:13.5, fontWeight:600, lineHeight:1.5}}>
                        <div style={{display:'flex', justifyContent:'space-between', gap:12}}><span style={{color:'#5A616B', whiteSpace:'nowrap'}}>{v.sel.qty} × {v.sel.priceFmt}</span><span style={{fontFamily:"'Space Grotesk'", fontVariantNumeric:'tabular-nums', whiteSpace:'nowrap'}}>{v.sel.totalFmt}</span></div>
                        <div style={{display:'flex', justifyContent:'space-between', gap:12}}><span style={{color:'#5A616B'}}>{v.t.fee} ({v.feePct}%)</span><span style={{fontFamily:"'Space Grotesk'", fontVariantNumeric:'tabular-nums', whiteSpace:'nowrap'}}>{v.sel.feeFmt}</span></div>
                        <div style={{borderTop:'1px solid #ECEEF1', paddingTop:12, display:'flex', justifyContent:'space-between', fontWeight:800, fontSize:15}}><span>{v.t.totalDue}</span><span style={{fontFamily:"'Space Grotesk'", fontVariantNumeric:'tabular-nums'}}>{v.sel.dueFmt}</span></div>
                      </div>
                      <button onClick={v.buyAtAsk} className="hov-red-btn" style={{width:'100%', marginTop:20, border:'none', background:'#E4002B', color:'#fff', borderRadius:11, padding:13, fontSize:14, fontWeight:800, cursor:'pointer', boxShadow:'0 8px 16px rgba(228,0,43,0.28)'}}>{v.t.buyAtAsk}</button>
                      {v.sel.allowOffers && (
                        <button onClick={v.startOffer} className="hov-outline-red" style={{width:'100%', marginTop:10, border:'1px solid #ECEEF1', background:'#fff', color:'#14161A', borderRadius:11, padding:12, fontSize:14, fontWeight:800, cursor:'pointer'}}>{v.t.makeOffer}</button>
                      )}
                      {v.sel.noOffers && (
                        <div style={{textAlign:'center', fontSize:12, color:'#8A909A', fontWeight:700, marginTop:14}}>{v.t.fixedOnly}</div>
                      )}
                    </>
                  )}
                  {v.offering && (
                    <div>
                      <div style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.makeOffer}</div>
                      <div style={{marginTop:16}}>
                        <label style={{fontSize:12, fontWeight:800, color:'#5A616B'}}>{v.t.offerPrice}</label>
                        <div style={{display:'flex', alignItems:'center', border:'1px solid #ECEEF1', borderRadius:11, padding:'0 14px', marginTop:6, background:'#FAFBFC'}}>
                          <span style={{fontSize:13, fontWeight:800, color:'#8A909A'}}>MX$</span>
                          <input type="number" value={v.offerPrice} onChange={v.onOfferPrice} style={{border:'none', outline:'none', background:'transparent', padding:'12px 8px', fontFamily:"'Space Grotesk'", fontSize:16, fontWeight:600, width:'100%'}} />
                        </div>
                        <label style={{fontSize:12, fontWeight:800, color:'#5A616B', display:'block', marginTop:14}}>{v.t.offerQty}</label>
                        <div style={{display:'flex', alignItems:'center', border:'1px solid #ECEEF1', borderRadius:11, padding:'0 14px', marginTop:6, background:'#FAFBFC'}}>
                          <input type="number" value={v.offerQty} onChange={v.onOfferQty} style={{border:'none', outline:'none', background:'transparent', padding:'12px 0', fontFamily:"'Space Grotesk'", fontSize:16, fontWeight:600, width:'100%'}} />
                          <span style={{fontSize:12, fontWeight:800, color:'#8A909A'}}>{v.t.max} {v.sel.qty}</span>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between', fontSize:13, fontWeight:700, marginTop:16, color:'#5A616B'}}><span>{v.t.offerTotal}</span><span style={{fontFamily:"'Space Grotesk'", fontVariantNumeric:'tabular-nums', color:'#14161A'}}>{v.offerTotalFmt}</span></div>
                        <div style={{fontSize:12, fontWeight:700, marginTop:6, color:v.offerDeltaColor}}>{v.offerDeltaLine}</div>
                        <button onClick={v.sendOffer} className="hov-red-btn" style={{width:'100%', marginTop:18, border:'none', background:'#E4002B', color:'#fff', borderRadius:11, padding:13, fontSize:14, fontWeight:800, cursor:'pointer', boxShadow:'0 8px 16px rgba(228,0,43,0.28)'}}>{v.t.sendOffer}</button>
                        <button onClick={v.cancelOffer} className="hov-cancel-text" style={{width:'100%', marginTop:10, border:'none', background:'transparent', color:'#5A616B', borderRadius:11, padding:10, fontSize:13, fontWeight:800, cursor:'pointer'}}>{v.t.cancel}</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {v.isSell && (
            <div style={{animation:'fadeUp .25s ease', maxWidth:640, margin:'0 auto'}}>
              <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:18}}>
                <button onClick={v.goHome} className="hov-icon-btn" style={{width:34, height:34, borderRadius:10, border:'1px solid #ECEEF1', background:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A616B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
                <h1 style={{fontSize:22, fontWeight:800, letterSpacing:'-0.02em', margin:0}}>{v.t.sellTitle}</h1>
              </div>
              <div style={{display:'flex', gap:8, marginBottom:16}}>
                <div style={{flex:1, height:4, borderRadius:2, background:'#E4002B'}}></div>
                <div style={{flex:1, height:4, borderRadius:2, background:v.sellBar2}}></div>
                <div style={{flex:1, height:4, borderRadius:2, background:v.sellBar3}}></div>
              </div>
              {v.sellStep1 && (
                <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:26}}>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.sellDetails}</div>
                    <span style={{background:'#E7F6EF', color:'#0E9F6E', borderRadius:999, padding:'3px 11px', fontSize:11.5, fontWeight:800}}>{v.availShares} {v.t.available}</span>
                  </div>
                  <label style={{fontSize:12, fontWeight:800, color:'#5A616B', display:'block', marginTop:20}}>{v.t.sharesToSell}</label>
                  <div style={{display:'flex', alignItems:'center', border:'1px solid #ECEEF1', borderRadius:11, padding:'0 14px', marginTop:6, background:'#FAFBFC'}}>
                    <input type="number" value={v.sellQty} onChange={v.onSellQty} style={{border:'none', outline:'none', background:'transparent', padding:'13px 0', fontFamily:"'Space Grotesk'", fontSize:17, fontWeight:600, width:'100%'}} />
                    <span style={{fontSize:12, fontWeight:800, color:'#8A909A'}}>{v.t.max} {v.availShares}</span>
                  </div>
                  <label style={{fontSize:12, fontWeight:800, color:'#5A616B', display:'block', marginTop:16}}>{v.t.askPerShare}</label>
                  <div style={{display:'flex', alignItems:'center', border:'1px solid #ECEEF1', borderRadius:11, padding:'0 14px', marginTop:6, background:'#FAFBFC'}}>
                    <span style={{fontSize:13, fontWeight:800, color:'#8A909A'}}>MX$</span>
                    <input type="number" value={v.sellPrice} onChange={v.onSellPrice} style={{border:'none', outline:'none', background:'transparent', padding:'13px 8px', fontFamily:"'Space Grotesk'", fontSize:17, fontWeight:600, width:'100%'}} />
                    <span style={{fontSize:12, fontWeight:700, color:'#8A909A', whiteSpace:'nowrap'}}>{v.t.lastTrade} MX$1,150</span>
                  </div>
                  <div onClick={v.toggleAllowOffers} style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:20, padding:'15px 16px', border:'1px solid #ECEEF1', borderRadius:12, cursor:'pointer'}}>
                    <div><div style={{fontSize:13.5, fontWeight:800}}>{v.t.allowOffersLbl}</div><div style={{fontSize:12, color:'#5A616B', fontWeight:600, marginTop:2}}>{v.t.allowOffersDesc}</div></div>
                    <div style={{width:42, height:24, borderRadius:999, background:v.allowBg, position:'relative', transition:'background .15s', flex:'none'}}><span style={{position:'absolute', top:3, left:v.allowKnob, width:18, height:18, borderRadius:'50%', background:'#fff', transition:'left .15s', boxShadow:'0 1px 3px rgba(0,0,0,0.2)'}}></span></div>
                  </div>
                  <label style={{fontSize:12, fontWeight:800, color:'#5A616B', display:'block', marginTop:16}}>{v.t.expiry}</label>
                  <select value={v.sellExpiry} onChange={v.onSellExpiry} style={{width:'100%', marginTop:6, border:'1px solid #ECEEF1', borderRadius:11, padding:'13px 14px', background:'#FAFBFC', fontSize:14, fontWeight:700, color:'#14161A', outline:'none'}}>
                    <option value="7">{v.t.days7}</option><option value="14">{v.t.days14}</option><option value="30">{v.t.days30}</option><option value="0">{v.t.noExpiry}</option>
                  </select>
                  <button onClick={v.sellReview} className="hov-red-btn" style={{width:'100%', marginTop:24, border:'none', background:'#E4002B', color:'#fff', borderRadius:11, padding:13, fontSize:14, fontWeight:800, cursor:'pointer', boxShadow:'0 8px 16px rgba(228,0,43,0.28)'}}>{v.t.reviewListing}</button>
                </div>
              )}
              {v.sellStep2 && (
                <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:26}}>
                  <div style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.reviewTitle}</div>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginTop:18}}>
                    <div style={{background:'#F4F5F7', borderRadius:14, padding:16}}><div style={{fontSize:11, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.sharesToSell}</div><div style={{fontFamily:"'Space Grotesk'", fontSize:24, fontWeight:700, marginTop:4}}>{v.sellQty}</div></div>
                    <div style={{background:'#F4F5F7', borderRadius:14, padding:16}}><div style={{fontSize:11, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.askPerShare}</div><div style={{fontFamily:"'Space Grotesk'", fontSize:24, fontWeight:700, marginTop:4}}>{v.sellPriceFmt}</div></div>
                  </div>
                  <div style={{display:'flex', flexDirection:'column', gap:10, marginTop:18, fontSize:13.5, fontWeight:600}}>
                    <div style={{display:'flex', justifyContent:'space-between'}}><span style={{color:'#5A616B'}}>{v.t.listingValue}</span><span style={{fontFamily:"'Space Grotesk'", fontVariantNumeric:'tabular-nums'}}>{v.sellTotalFmt}</span></div>
                    <div style={{display:'flex', justifyContent:'space-between'}}><span style={{color:'#5A616B'}}>{v.t.offersLbl}</span><span style={{fontWeight:800}}>{v.sellOffersLbl}</span></div>
                    <div style={{display:'flex', justifyContent:'space-between'}}><span style={{color:'#5A616B'}}>{v.t.expiry}</span><span style={{fontWeight:800}}>{v.sellExpiryLbl}</span></div>
                  </div>
                  <div style={{background:'#FDECEF', borderRadius:12, padding:'13px 16px', fontSize:12.5, fontWeight:600, color:'#B80022', marginTop:18}}>{v.t.reserveWarn}</div>
                  <div style={{display:'flex', gap:10, marginTop:22}}>
                    <button onClick={v.sellBack} className="hov-gray-btn" style={{flex:1, border:'1px solid #ECEEF1', background:'#fff', color:'#14161A', borderRadius:11, padding:13, fontSize:14, fontWeight:800, cursor:'pointer'}}>{v.t.back}</button>
                    <button onClick={v.sellPublish} className="hov-red-btn" style={{flex:2, border:'none', background:'#E4002B', color:'#fff', borderRadius:11, padding:13, fontSize:14, fontWeight:800, cursor:'pointer', boxShadow:'0 8px 16px rgba(228,0,43,0.28)'}}>{v.t.publish}</button>
                  </div>
                </div>
              )}
              {v.sellStep3 && (
                <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:'40px 26px', textAlign:'center'}}>
                  <span style={{width:56, height:56, borderRadius:'50%', background:'#E7F6EF', display:'inline-flex', alignItems:'center', justifyContent:'center'}}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E9F6E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>
                  <div style={{fontSize:20, fontWeight:800, letterSpacing:'-0.01em', marginTop:16}}>{v.t.listingLive}</div>
                  <div style={{fontSize:13.5, color:'#5A616B', fontWeight:600, marginTop:8, lineHeight:1.5}}>{v.sellLiveLine}</div>
                  <div style={{display:'flex', gap:10, marginTop:26, justifyContent:'center'}}>
                    <button onClick={v.goBrowse} className="hov-red-btn" style={{border:'none', background:'#E4002B', color:'#fff', borderRadius:11, padding:'12px 22px', fontSize:13.5, fontWeight:800, cursor:'pointer', boxShadow:'0 8px 16px rgba(228,0,43,0.28)'}}>{v.t.viewInMarket}</button>
                    <button onClick={v.goHome} className="hov-gray-btn" style={{border:'1px solid #ECEEF1', background:'#fff', color:'#14161A', borderRadius:11, padding:'12px 22px', fontSize:13.5, fontWeight:800, cursor:'pointer'}}>{v.t.backHome}</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {v.isOffers && (
            <div style={{animation:'fadeUp .25s ease'}}>
              <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:18}}>
                <button onClick={v.goHome} className="hov-icon-btn" style={{width:34, height:34, borderRadius:10, border:'1px solid #ECEEF1', background:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A616B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
                <h1 style={{fontSize:22, fontWeight:800, letterSpacing:'-0.02em', margin:0}}>{v.t.offersTitle}</h1>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:16}}>
                {v.threads.map(th=>(
                  <div key={th.id} style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:24}}>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                      <div style={{display:'flex', alignItems:'center', gap:12}}>
                        <span style={{width:38, height:38, borderRadius:'50%', background:th.avBg, color:th.avFg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:800}}>{th.initials}</span>
                        <div style={{minWidth:0}}>
                          <div style={{fontSize:14.5, fontWeight:800, lineHeight:1.35}}>{th.title}</div>
                          <div style={{fontSize:12, color:'#8A909A', fontWeight:600, marginTop:2, lineHeight:1.4}}>{th.subtitle}</div>
                        </div>
                      </div>
                      <span style={{background:th.stBg, color:th.stFg, borderRadius:999, padding:'4px 13px', fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.03em'}}>{th.statusLbl}</span>
                    </div>
                    <div style={{marginTop:18, display:'flex', flexDirection:'column'}}>
                      {th.events.map((ev,i)=>(
                        <div key={i} style={{display:'flex', gap:14}}>
                          <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:26, flex:'none'}}>
                            <span style={{width:26, height:26, borderRadius:'50%', background:ev.dotBg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:800, color:ev.dotFg, zIndex:1}}>{ev.dot}</span>
                            {ev.hasLine && <span style={{width:2, flex:1, background:'#ECEEF1', minHeight:14}}></span>}
                          </div>
                          <div style={{paddingBottom:16, flex:1}}>
                            <div style={{display:'flex', alignItems:'baseline', gap:10, flexWrap:'wrap'}}>
                              <span style={{fontSize:13.5, fontWeight:800}}>{ev.label}</span>
                              {ev.hasPrice && <span style={{fontFamily:"'Space Grotesk'", fontSize:14, fontWeight:700, fontVariantNumeric:'tabular-nums', color:'#E4002B'}}>{ev.priceFmt}</span>}
                              <span style={{fontSize:11.5, color:'#8A909A', fontWeight:700}}>{ev.time}</span>
                            </div>
                            {ev.hasNote && <div style={{fontSize:12.5, color:'#5A616B', fontWeight:600, marginTop:3}}>{ev.note}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                    {th.actionable && (
                      <>
                        {th.countering && (
                          <div style={{display:'flex', gap:10, alignItems:'center', borderTop:'1px solid #F4F5F7', paddingTop:16}}>
                            <div style={{display:'flex', alignItems:'center', border:'1px solid #ECEEF1', borderRadius:11, padding:'0 14px', background:'#FAFBFC', flex:1}}>
                              <span style={{fontSize:13, fontWeight:800, color:'#8A909A'}}>MX$</span>
                              <input type="number" value={v.counterPrice} onChange={v.onCounterPrice} style={{border:'none', outline:'none', background:'transparent', padding:'11px 8px', fontFamily:"'Space Grotesk'", fontSize:15, fontWeight:600, width:'100%'}} />
                            </div>
                            <button onClick={th.submitCounter} className="hov-red-btn" style={{border:'none', background:'#E4002B', color:'#fff', borderRadius:11, padding:'11px 20px', fontSize:13, fontWeight:800, cursor:'pointer', boxShadow:'0 8px 16px rgba(228,0,43,0.28)'}}>{v.t.sendCounter}</button>
                            <button onClick={th.cancelCounter} className="hov-gray-btn" style={{border:'1px solid #ECEEF1', background:'#fff', color:'#5A616B', borderRadius:11, padding:'11px 16px', fontSize:13, fontWeight:800, cursor:'pointer'}}>{v.t.cancel}</button>
                          </div>
                        )}
                        {th.notCountering && (
                          <div style={{display:'flex', gap:10, borderTop:'1px solid #F4F5F7', paddingTop:16}}>
                            <button onClick={th.accept} className="hov-green-btn" style={{border:'none', background:'#0E9F6E', color:'#fff', borderRadius:11, padding:'11px 20px', fontSize:13, fontWeight:800, cursor:'pointer'}}>{th.acceptLbl}</button>
                            <button onClick={th.startCounter} className="hov-outline-red" style={{border:'1px solid #ECEEF1', background:'#fff', color:'#14161A', borderRadius:11, padding:'11px 20px', fontSize:13, fontWeight:800, cursor:'pointer'}}>{v.t.counter}</button>
                            <button onClick={th.reject} className="hov-gray-btn" style={{border:'1px solid #ECEEF1', background:'#fff', color:'#5A616B', borderRadius:11, padding:'11px 20px', fontSize:13, fontWeight:800, cursor:'pointer'}}>{v.t.reject}</button>
                          </div>
                        )}
                      </>
                    )}
                    {th.payable && (
                      <div style={{display:'flex', gap:10, borderTop:'1px solid #F4F5F7', paddingTop:16, alignItems:'center', justifyContent:'space-between'}}>
                        <div style={{fontSize:12.5, fontWeight:700, color:'#5A616B'}}>{v.t.dealAgreed} <span style={{fontFamily:"'Space Grotesk'", color:'#14161A'}}>{th.dealFmt}</span></div>
                        <button onClick={th.pay} className="hov-red-btn" style={{border:'none', background:'#E4002B', color:'#fff', borderRadius:11, padding:'11px 22px', fontSize:13, fontWeight:800, cursor:'pointer', boxShadow:'0 8px 16px rgba(228,0,43,0.28)'}}>{v.t.proceedPay}</button>
                      </div>
                    )}
                  </div>
                ))}
                {v.noThreads && (
                  <div style={{background:'#fff', border:'1px dashed #D8DBE0', borderRadius:18, padding:48, textAlign:'center', color:'#8A909A', fontWeight:700, fontSize:13.5}}>{v.t.noOffers}</div>
                )}
              </div>
            </div>
          )}

          {v.isPay && (
            <div style={{animation:'fadeUp .25s ease', maxWidth:920, margin:'0 auto'}}>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18}}>
                <div style={{display:'flex', alignItems:'center', gap:14}}>
                  <button onClick={v.goHome} className="hov-icon-btn" style={{width:34, height:34, borderRadius:10, border:'1px solid #ECEEF1', background:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A616B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
                  <h1 style={{fontSize:22, fontWeight:800, letterSpacing:'-0.02em', margin:0}}>{v.t.payTitle}</h1>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:8, background:'#FDECEF', borderRadius:999, padding:'7px 15px'}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E4002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span style={{fontSize:12.5, fontWeight:800, color:'#B80022'}}>{v.t.payWindow} <span style={{fontFamily:"'Space Grotesk'", fontVariantNumeric:'tabular-nums'}}>{v.countdown}</span></span>
                </div>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:16, alignItems:'start'}}>
                <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:24}}>
                  <div style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.payMethod}</div>
                  <div style={{display:'flex', flexDirection:'column', gap:10, marginTop:16}}>
                    {v.payMethods.map(pm=>(
                      <div key={pm.k} onClick={pm.select} style={{display:'flex', alignItems:'center', gap:14, padding:16, border:`1.5px solid ${pm.border}`, borderRadius:14, cursor:'pointer', background:pm.bg, transition:'border-color .15s'}}>
                        <span style={{width:38, height:38, borderRadius:11, background:pm.iconBg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:800, color:pm.iconFg, flex:'none'}}>{pm.icon}</span>
                        <div style={{flex:1}}>
                          <div style={{fontSize:14, fontWeight:800}}>{pm.name}</div>
                          <div style={{fontSize:12, color:'#5A616B', fontWeight:600, marginTop:1}}>{pm.desc}</div>
                        </div>
                        <span style={{width:20, height:20, borderRadius:'50%', border:`2px solid ${pm.radioBorder}`, display:'flex', alignItems:'center', justifyContent:'center', flex:'none'}}>{pm.selected && <span style={{width:10, height:10, borderRadius:'50%', background:'#E4002B'}}></span>}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:24}}>
                  <div style={{fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>{v.t.orderSummary}</div>
                  <div style={{marginTop:16, display:'flex', flexDirection:'column', gap:10, fontSize:13.5, fontWeight:600, lineHeight:1.5}}>
                    <div style={{display:'flex', justifyContent:'space-between', gap:12}}><span style={{color:'#5A616B'}}>{v.t.seller}</span><span style={{fontWeight:800, textAlign:'right'}}>{v.deal.seller}</span></div>
                    <div style={{display:'flex', justifyContent:'space-between', gap:12}}><span style={{color:'#5A616B', whiteSpace:'nowrap'}}>{v.deal.qty} × {v.deal.priceFmt}</span><span style={{fontFamily:"'Space Grotesk'", fontVariantNumeric:'tabular-nums', whiteSpace:'nowrap'}}>{v.deal.subFmt}</span></div>
                    <div style={{display:'flex', justifyContent:'space-between', gap:12}}><span style={{color:'#5A616B'}}>{v.t.fee} ({v.feePct}%)</span><span style={{fontFamily:"'Space Grotesk'", fontVariantNumeric:'tabular-nums', whiteSpace:'nowrap'}}>{v.deal.feeFmt}</span></div>
                    <div style={{borderTop:'1px solid #ECEEF1', paddingTop:12, display:'flex', justifyContent:'space-between', fontWeight:800, fontSize:15}}><span>{v.t.totalDue}</span><span style={{fontFamily:"'Space Grotesk'", fontVariantNumeric:'tabular-nums'}}>{v.deal.dueFmt}</span></div>
                  </div>
                  <div style={{background:'#F4F5F7', borderRadius:12, padding:'12px 14px', fontSize:12, fontWeight:600, color:'#5A616B', marginTop:16, display:'flex', gap:8, alignItems:'flex-start'}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A616B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flex:'none', marginTop:1}}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    {v.t.escrowShort}
                  </div>
                  <button
                    onClick={v.payNow}
                    disabled={v.payDisabled}
                    onMouseEnter={e=>{ e.currentTarget.style.background = v.payBtnHover; }}
                    onMouseLeave={e=>{ e.currentTarget.style.background = v.payBtnBg; }}
                    style={{width:'100%', marginTop:18, border:'none', background:v.payBtnBg, color:'#fff', borderRadius:11, padding:13, fontSize:14, fontWeight:800, cursor:'pointer', boxShadow:v.payBtnShadow}}
                  >{v.payBtnLbl}</button>
                </div>
              </div>
            </div>
          )}

          {v.isDone && (
            <div style={{animation:'fadeUp .25s ease', maxWidth:640, margin:'0 auto'}}>
              <div style={{background:'linear-gradient(135deg,#191B1F,#25282E)', borderRadius:20, padding:34, color:'#fff', textAlign:'center'}}>
                <span style={{width:56, height:56, borderRadius:'50%', background:'rgba(61,220,151,0.15)', display:'inline-flex', alignItems:'center', justifyContent:'center'}}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3DDC97" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>
                <div style={{fontSize:22, fontWeight:800, letterSpacing:'-0.01em', marginTop:14}}>{v.t.doneTitle}</div>
                <div style={{fontSize:13.5, color:'rgba(255,255,255,0.65)', fontWeight:600, marginTop:6}}>{v.doneLine}</div>
              </div>
              <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, padding:26, marginTop:16}}>
                {v.doneSteps.map((st,i)=>(
                  <div key={i} style={{display:'flex', gap:14}}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:28, flex:'none'}}>
                      <span style={{width:28, height:28, borderRadius:'50%', background:st.bg, display:'flex', alignItems:'center', justifyContent:'center', zIndex:1, transition:'background .3s'}}>
                        {st.done && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>}
                        {st.pending && <span style={{width:8, height:8, borderRadius:'50%', background:'#8A909A'}}></span>}
                      </span>
                      {st.hasLine && <span style={{width:2, flex:1, background:st.lineBg, minHeight:18}}></span>}
                    </div>
                    <div style={{paddingBottom:20}}>
                      <div style={{fontSize:14, fontWeight:800}}>{st.label}</div>
                      <div style={{fontSize:12.5, color:'#5A616B', fontWeight:600, marginTop:2, lineHeight:1.45}}>{st.desc}</div>
                    </div>
                  </div>
                ))}
                <div style={{display:'flex', gap:10, marginTop:8}}>
                  <button onClick={v.goHistory} className="hov-red-btn" style={{flex:1, border:'none', background:'#E4002B', color:'#fff', borderRadius:11, padding:12, fontSize:13.5, fontWeight:800, cursor:'pointer', boxShadow:'0 8px 16px rgba(228,0,43,0.28)'}}>{v.t.viewReceipt}</button>
                  <button onClick={v.goHome} className="hov-gray-btn" style={{flex:1, border:'1px solid #ECEEF1', background:'#fff', color:'#14161A', borderRadius:11, padding:12, fontSize:13.5, fontWeight:800, cursor:'pointer'}}>{v.t.backHome}</button>
                </div>
              </div>
            </div>
          )}

          {v.isHistory && (
            <div style={{animation:'fadeUp .25s ease'}}>
              <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:18}}>
                <button onClick={v.goHome} className="hov-icon-btn" style={{width:34, height:34, borderRadius:10, border:'1px solid #ECEEF1', background:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A616B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
                <h1 style={{fontSize:22, fontWeight:800, letterSpacing:'-0.02em', margin:0}}>{v.t.historyTitle}</h1>
              </div>
              <div style={{background:'#fff', border:'1px solid #ECEEF1', borderRadius:18, overflow:'hidden'}}>
                <div style={{display:'grid', gridTemplateColumns:'1.2fr 1.6fr 0.8fr 1fr 1.1fr 1.2fr', gap:12, padding:'13px 22px', borderBottom:'1px solid #ECEEF1', fontSize:11, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'#8A909A'}}>
                  <div>{v.t.txId}</div><div>{v.t.counterparty}</div><div style={{textAlign:'right'}}>{v.t.qty}</div><div style={{textAlign:'right'}}>{v.t.price}</div><div style={{textAlign:'right'}}>{v.t.total}</div><div style={{textAlign:'right'}}>{v.t.status}</div>
                </div>
                {v.txs.map(tx=>(
                  <div key={tx.id} className="hov-table-row" style={{display:'grid', gridTemplateColumns:'1.2fr 1.6fr 0.8fr 1fr 1.1fr 1.2fr', gap:12, padding:'15px 22px', borderBottom:'1px solid #F4F5F7', alignItems:'center'}}>
                    <div style={{fontFamily:"'Space Grotesk'", fontSize:13, fontWeight:600, color:'#5A616B'}}>{tx.id}</div>
                    <div>
                      <div style={{fontSize:13.5, fontWeight:700}}>{tx.dirLbl} {tx.counterparty}</div>
                      <div style={{fontSize:11.5, color:'#8A909A', fontWeight:600}}>{tx.date}</div>
                    </div>
                    <div style={{textAlign:'right', fontFamily:"'Space Grotesk'", fontSize:14, fontWeight:600, fontVariantNumeric:'tabular-nums'}}>{tx.qty}</div>
                    <div style={{textAlign:'right', fontFamily:"'Space Grotesk'", fontSize:14, fontWeight:600, fontVariantNumeric:'tabular-nums'}}>{tx.priceFmt}</div>
                    <div style={{textAlign:'right', fontFamily:"'Space Grotesk'", fontSize:14, fontWeight:700, fontVariantNumeric:'tabular-nums', color:tx.amtColor}}>{tx.totalFmt}</div>
                    <div style={{textAlign:'right'}}><span style={{background:tx.stBg, color:tx.stFg, borderRadius:999, padding:'3px 11px', fontSize:11.5, fontWeight:800}}>{tx.status}</span></div>
                  </div>
                ))}
              </div>
              <div style={{fontSize:12, color:'#8A909A', fontWeight:600, marginTop:12}}>{v.t.registryNote}</div>
            </div>
          )}
        </main>

        {v.hasToast && (
          <div style={{position:'fixed', bottom:28, left:'50%', transform:'translateX(-50%)', background:'#191B1F', color:'#fff', borderRadius:12, padding:'13px 22px', fontSize:13.5, fontWeight:700, boxShadow:'0 16px 40px rgba(20,22,26,0.3)', animation:'pop .2s ease', zIndex:100, display:'flex', alignItems:'center', gap:10}}>
            <span style={{width:8, height:8, borderRadius:'50%', background:'#3DDC97'}}></span>{v.toast}
          </div>
        )}
      </div>
    );
  }
}

export default App;
