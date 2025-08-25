const $ = (sel, ctx=document) => ctx.querySelector(sel);
    const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

    const menuItems = $$('.menu-item');
    const continueBtn = $('#continueBtn');
    const themeBtn = $('#themeBtn');
  
    const optBtn = $('#settingsBtn');
    const optModal = $('#optModal');
    const credModal = $('#credModal');
    const bgMusic = $('#bgMusic');

    const vol = $('#vol');
    const volOut = $('#volOut');
    const diff = $('#diff');
    const tips = $('#tips');
    const saveBtn = $('#saveOptions');

    const clickSfx = $('#uiClick');
    let muted = JSON.parse(localStorage.getItem('muted') || 'false');

    function playClick(){
      if(muted) return;
      try{ clickSfx.currentTime = 0; clickSfx.play(); }catch(e){}
    }

    // Estado salvo (para habilitar "Continuar")
    function checkSave(){
      const hasSave = JSON.parse(localStorage.getItem('hasSave')||'false');
      continueBtn.disabled = !hasSave;
    }

    function loadPrefs(){
    const prefs = JSON.parse(localStorage.getItem('prefs')||'null');
    if(prefs){
      vol.value = prefs.volume; 
      volOut.value = prefs.volume;
      bgMusic.volume = prefs.volume / 100; // aplica volume salvo
      diff.value = prefs.diff; 
      tips.checked = !!prefs.tips;
    } else { 
      vol.value=50; volOut.value=50; 
      bgMusic.volume = 0.5; // padrão
      diff.value='normal'; tips.checked=true; 
    }
    muted = JSON.parse(localStorage.getItem('muted')||'false');
    updateMuteBtn();

    const storedTheme = localStorage.getItem('theme');
    if(storedTheme === 'light') document.body.classList.add('light');
    else document.body.classList.remove('light');
    }

    // Quando mover o slider de volume
    vol.addEventListener('input', ()=> { 
    volOut.value = vol.value; 
    bgMusic.volume = vol.value / 100; // altera o volume em tempo real
    });

    function savePrefs(){
    const prefs = { 
      volume: +vol.value, 
      diff: diff.value, 
      tips: !!tips.checked 
    };
    localStorage.setItem('prefs', JSON.stringify(prefs));
    bgMusic.volume = prefs.volume / 100; // garante que aplique
    }

    // Atualiza mute no botão
    function updateMuteBtn() { 
    muteBtn.textContent = muted ? '🔇 Mudo' : '🔊 Som'; 
    bgMusic.muted = muted; // aplica no áudio de fundo
    }

    // Ações de menu
    function handleAction(action){
      playClick();
      switch(action){
      case 'start':
        localStorage.setItem('hasSave','true');
        checkSave();

        // Pega a dificuldade salva no localStorage
        const prefs = JSON.parse(localStorage.getItem('prefs')||'{}');
        const diff = prefs.diff || 'normal';

        // Redireciona para a página de acordo com a dificuldade
        if (diff === 'easy') {
          window.location.href = "Facil.html";
        } else if (diff === 'normal') {
          window.location.href = "normal.html";
        } else if (diff === 'hard') {
          window.location.href = "dificil.html";
        }
          break;
        case 'continue':
        if(!continueBtn.disabled) alert('Continuar jogo… carregar save do localStorage.');
        break;
        case 'settings':
        optModal.showModal();
        break;
        case 'credits':
        credModal.showModal();
        break;
        case 'quit':
        alert('Encerrar – em apps nativos sairia');
        break;
      }
    }

    // Navegação por teclado
    let idx = 0;
    function focusItem(i){ idx = (i+menuItems.length)%menuItems.length; menuItems[idx].focus(); }
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'ArrowDown'){ e.preventDefault(); focusItem(idx+1); }
      else if(e.key === 'ArrowUp'){ e.preventDefault(); focusItem(idx-1); }
      else if(e.key === 'Enter'){ if(document.activeElement?.classList.contains('menu-item')) document.activeElement.click(); }
    });

    // Clique nos itens
    menuItems.forEach(btn=>{
      btn.addEventListener('click', ()=> handleAction(btn.dataset.action));
    });

    // Topbar actions
    themeBtn.addEventListener('click', ()=>{
      document.body.classList.toggle('light');
      localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
      playClick();
    });
    muteBtn.addEventListener('click', ()=>{ muted = !muted; localStorage.setItem('muted', JSON.stringify(muted)); updateMuteBtn(); playClick(); });
    optBtn.addEventListener('click', ()=> optModal.showModal());

    // Opções
    vol.addEventListener('input', ()=> volOut.value = vol.value);
    saveBtn.addEventListener('click', ()=>{ savePrefs(); playClick(); });

    // Inicialização
    loadPrefs();
    checkSave();
    focusItem(0);