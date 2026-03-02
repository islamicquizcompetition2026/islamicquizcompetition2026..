/* ══════════════════════════════════════
   PWA — INSTALL LOGIC + ERROR HANDLER
══════════════════════════════════════ */

/* ERROR CATCHER */
window.addEventListener('error', function(e){
  console.error('JS Error:', e.message, 'Line:', e.lineno);
});

// ── PWA Install Banner ──
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  if (!installed) {
    // Show banner after 3 seconds
    setTimeout(() => {
      document.getElementById('pwa-banner').classList.remove('hidden');
    }, 3000);
  } else {
    // Show FAB only
    document.getElementById('pwa-fab').classList.add('on');
  }
});

window.addEventListener('appinstalled', () => {
  localStorage.setItem('pwa_installed', '1');
  document.getElementById('pwa-banner').classList.add('hidden');
  document.getElementById('pwa-fab').classList.remove('on');
  showPwaToast();
});

async function pwaTriggerInstall() {
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isInStandalone = window.matchMedia('(display-mode: standalone)').matches;

  if (isInStandalone) {
    showPwaToast('✅ App pehle se install hai! 🌙');
    return;
  }

  if (isIos) {
    document.getElementById('ios-guide').classList.remove('hidden');
    document.getElementById('pwa-banner').classList.add('hidden');
    return;
  }

  if (deferredPrompt) {
    document.getElementById('pwa-banner').classList.add('hidden');
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    deferredPrompt = null;
    if (result.outcome === 'accepted') {
      showPwaToast();
    } else {
      document.getElementById('pwa-fab').classList.add('on');
    }
  } else {
    // Fallback for browsers without beforeinstallprompt
    const isAndroid = /android/i.test(navigator.userAgent);
    if (isAndroid) {
      alert('📲 Install karne ke liye:\n\nChrome menu (3 dots ⋮) → "App install karein" ya "Add to Home screen" par tap karein!');
    } else {
      alert('📲 Apne browser ke menu se "Add to Home Screen" ya "Install App" option use karein!');
    }
  }
}

function pwaDismiss() {
  document.getElementById('pwa-banner').classList.add('hidden');
  document.getElementById('pwa-fab').classList.add('on');
}

function closeIosGuide() {
  document.getElementById('ios-guide').classList.add('hidden');
  document.getElementById('pwa-fab').classList.add('on');
}

function showPwaToast(msg) {
  const t = document.getElementById('pwa-toast');
  if (msg) t.textContent = msg;
  t.classList.add('on');
  setTimeout(() => t.classList.remove('on'), 4000);
}

// ── Already installed? Show status ──
window.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    // Running as installed PWA
    console.log('Running as PWA ✅');
    document.title = '🌙 Ramzan 2026 — Farah';
  }
});

// ── iOS detection on load ──
window.addEventListener('load', () => {
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  const dismissed = localStorage.getItem('ios_banner_dismissed');

  if (isIos && !isStandalone && !dismissed) {
    setTimeout(() => {
      document.getElementById('pwa-banner').classList.remove('hidden');
    }, 3000);
  }
});