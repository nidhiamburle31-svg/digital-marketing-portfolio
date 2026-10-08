'use strict';
/* Add only your real details here. Empty values leave links inactive. */
const CONTACT = {
  email: '',
  linkedin: '', // https://www.linkedin.com/in/your-real-profile/
  github: '' // https://github.com/your-real-username
};
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
function closeMenu() {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
navLinks.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav')) closeMenu();
});
window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
// Only enable contact links when valid, real values have been configured.
for (const link of document.querySelectorAll('[data-contact]')) {
  const key = link.dataset.contact;
  const value = CONTACT[key].trim();
  const valid = key === 'email'
    ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    : /^https:\/\/(www\.)?(linkedin\.com|github\.com)\//.test(value);
  if (!valid) continue;
  link.href = key === 'email' ? `mailto:${value}` : value;
  link.removeAttribute('aria-disabled');
  if (key === 'email') link.firstChild.textContent = `${value} `;
  else if (link.closest('.contact-card')) link.firstChild.textContent = `${key === 'linkedin' ? 'View LinkedIn profile' : 'Explore GitHub'} `;
}
if (Object.values(CONTACT).some(Boolean)) {
  document.querySelector('#contact .section-note').textContent = 'Let’s connect through the profiles and contact details above.';
}
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  }, {threshold: 0.08});
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  document.documentElement.classList.add('js-reveal');
}
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.querySelectorAll('a').forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin: '-15% 0px -65% 0px'});
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}
/* Verify optional files before activating downloads or requesting video media.
   file:// browsers block fetch: use the README's local HTTP preview command. */
async function fileExists(path, type) {
  if (location.protocol === 'file:') return false;
  try {
    const response = await fetch(path, {method: 'HEAD', cache: 'no-store'});
    return response.ok && (response.headers.get('content-type') || '').toLowerCase().includes(type);
  } catch { return false; }
}
async function enableResume() {
  const link = document.querySelector('#resume-link');
  if (await fileExists(link.dataset.file, 'application/pdf')) {
    link.href = link.dataset.file;
    link.download = 'Resume.pdf';
    link.removeAttribute('aria-disabled');
    document.querySelector('#resume-status').textContent = 'Download my resume for my background and practical training.';
  }
}
async function enableVideo(video) {
  if (await fileExists(video.dataset.video, 'video/')) {
    video.src = video.dataset.video;
    video.closest('.video-card').querySelector('.media-status').textContent = 'Independent concept · not sponsored';
    video.closest('.video-wrap').querySelector('.image-label').hidden = true;
    video.addEventListener('error', () => {
      video.closest('.video-card').querySelector('.media-status').textContent = 'Video could not load. Please check the media file.';
    });
  }
}
// Check videos only when their gallery comes into view, without preloading video bytes.
if ('IntersectionObserver' in window) {
  const mediaObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      enableVideo(entry.target);
      mediaObserver.unobserve(entry.target);
    }
  }, {rootMargin: '150px'});
  document.querySelectorAll('video[data-video]').forEach(video => mediaObserver.observe(video));
} else document.querySelectorAll('video[data-video]').forEach(enableVideo);
enableResume();
