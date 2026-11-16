const nav=document.querySelector('.site-nav'),menu=document.querySelector('.menu-btn'),theme=document.querySelector('.theme-toggle');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
const saved=localStorage.getItem('eli-theme');if(saved)document.documentElement.dataset.theme=saved;
theme?.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('eli-theme',next);theme.textContent=next==='dark'?'☀ Light':'◐ Dark'});
document.querySelectorAll('.reveal').forEach(el=>new IntersectionObserver(([entry],o)=>{if(entry.isIntersecting){el.classList.add('show');o.unobserve(el)}}).observe(el));
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');button.classList.add('active');document.querySelectorAll('.project').forEach(card=>card.hidden=button.dataset.filter!=='all'&&!card.dataset.type.includes(button.dataset.filter))}));

// Contact form — sends to Web3Forms, shows status without leaving the page
const form=document.querySelector('.form');
form?.addEventListener('submit',async e=>{
  e.preventDefault();
  const status=document.querySelector('.form-status');
  const btn=form.querySelector('button[type="submit"]');
  status.textContent='Sending…';
  btn.disabled=true;
  try{
    const res=await fetch(form.action,{method:'POST',headers:{Accept:'application/json'},body:new FormData(form)});
    const data=await res.json();
    if(data.success){
      form.reset();
      status.textContent='Thanks — your message has been sent. I’ll get back to you soon.';
    }else{
      status.textContent='Something went wrong. Please email me directly instead.';
    }
  }catch(err){
    status.textContent='Network error. Please try again or email me directly.';
  }finally{
    btn.disabled=false;
  }
});
