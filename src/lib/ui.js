// ui.js — global UI behavior: lazy-loading images, lightbox modal, smooth scroll and small interactions.
export function initUI(){
  // Lazy load images with IntersectionObserver
  const lazyImgs = document.querySelectorAll('img.lazy');
  if('IntersectionObserver' in window && lazyImgs.length){
    const io = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          obs.unobserve(img);
        }
      });
    }, {rootMargin: '100px'});
    lazyImgs.forEach(i=>io.observe(i));
  }

  // Lightbox container
  let lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `<div class="lb-inner" role="dialog" aria-modal="true"><button class="lb-close" aria-label="Close">×</button><img class="lb-img" alt="" /><div class="lb-caption"></div></div>`;
  document.body.appendChild(lightbox);
  const lbImg = lightbox.querySelector('.lb-img');
  const lbCaption = lightbox.querySelector('.lb-caption');
  const closeBtn = lightbox.querySelector('.lb-close');
  function showLightbox(detail){
    lbImg.src = detail.src;
    lbImg.alt = detail.title || '';
    lbCaption.textContent = detail.title || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function hideLightbox(){
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  closeBtn.addEventListener('click', hideLightbox);
  lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) hideLightbox(); });
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') hideLightbox(); });
  window.addEventListener('openLightbox', (ev)=> showLightbox(ev.detail));

  // Smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
}