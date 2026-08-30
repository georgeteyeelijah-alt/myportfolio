const nav=document.querySelector('.site-nav'),menu=document.querySelector('.menu-btn'),theme=document.querySelector('.theme-toggle');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
const saved=localStorage.getItem('eli-theme');if(saved)document.documentElement.dataset.theme=saved;
theme?.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('eli-theme',next);theme.textContent=next==='dark'?'☀ Light':'◐ Dark'});
document.querySelectorAll('.reveal').forEach(el=>new IntersectionObserver(([entry],o)=>{if(entry.isIntersecting){el.classList.add('show');o.unobserve(el)}}).observe(el));
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');button.classList.add('active');document.querySelectorAll('.project').forEach(card=>card.hidden=button.dataset.filter!=='all'&&!card.dataset.type.includes(button.dataset.filter))}));
document.querySelector('.form')?.addEventListener('submit',e=>{e.preventDefault();e.currentTarget.reset();document.querySelector('.form-status').textContent='Thanks — your message is ready to send. I’ll get back to you soon.'});
