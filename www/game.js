/* ============================================================
   game.js — First-Aid Quiz + Memory Match
   Trilingual (pl/en/de), reacts to the global 'langchange' event
   fired by main.js. No flashing / strobing anywhere on purpose.
   ============================================================ */

(function () {
  'use strict';

  var LANG_KEY = 'marek-lang';
  var SUPPORTED = ['pl', 'en', 'de'];

  function currentLang() {
    var stored;
    try { stored = localStorage.getItem(LANG_KEY); } catch (e) { stored = null; }
    return SUPPORTED.indexOf(stored) !== -1 ? stored : 'pl';
  }

  function t(obj) {
    var l = currentLang();
    return obj[l] != null ? obj[l] : obj.pl;
  }

  /* ---------- UI strings ---------- */
  var UI = {
    question: { pl: 'Pytanie', en: 'Question', de: 'Frage' },
    of:       { pl: 'z',       en: 'of',       de: 'von' },
    next:     { pl: 'Dalej →', en: 'Next →',   de: 'Weiter →' },
    seeScore: { pl: 'Zobacz wynik →', en: 'See your score →', de: 'Ergebnis ansehen →' },
    again:    { pl: 'Zagraj jeszcze raz', en: 'Play again', de: 'Nochmal spielen' },
    yourScore:{ pl: 'Twój wynik', en: 'Your score', de: 'Dein Ergebnis' }
  };

  /* ---------- Quiz data ---------- */
  /* Each question: { q, options:[{text, correct, why}] } in 3 languages.
     `why` explains the answer regardless of right/wrong. */
  var QUESTIONS = [
    {
      q: {
        pl: 'Osoba obok Ciebie nagle upada i zaczyna mieć drgawki. Co robisz w pierwszej kolejności?',
        en: 'Someone next to you suddenly falls and starts convulsing. What is the first thing you do?',
        de: 'Jemand neben dir fällt plötzlich hin und beginnt zu krampfen. Was tust du zuerst?'
      },
      options: [
        {
          text: { pl: 'Wkładam coś do ust, żeby nie połknęła języka', en: 'Put something in their mouth so they don\'t swallow their tongue', de: 'Etwas in den Mund stecken, damit sie die Zunge nicht verschluckt' },
          correct: false,
          why: { pl: 'To groźny mit — języka nie da się połknąć, a wkładanie czegokolwiek do ust grozi zakrztuszeniem i urazem.', en: 'A dangerous myth — you cannot swallow your tongue, and putting anything in the mouth risks choking and injury.', de: 'Ein gefährlicher Mythos — man kann die Zunge nicht verschlucken, und etwas in den Mund zu stecken birgt Erstickungs- und Verletzungsgefahr.' }
        },
        {
          text: { pl: 'Sprawdzam godzinę i usuwam z otoczenia twarde przedmioty', en: 'Note the time and clear hard objects out of the way', de: 'Auf die Uhr schauen und harte Gegenstände aus dem Weg räumen' },
          correct: true,
          why: { pl: 'Dokładnie tak. Zmierz czas trwania napadu i zabezpiecz osobę przed urazem — to dwie najważniejsze rzeczy na starcie.', en: 'Exactly. Time the seizure and protect the person from injury — those are the two most important things at the start.', de: 'Genau. Miss die Dauer des Anfalls und schütze die Person vor Verletzungen — das sind die zwei wichtigsten Dinge zu Beginn.' }
        },
        {
          text: { pl: 'Mocno przytrzymuję ręce i nogi, żeby przestała się ruszać', en: 'Hold their arms and legs firmly to stop the movements', de: 'Arme und Beine festhalten, um die Bewegungen zu stoppen' },
          correct: false,
          why: { pl: 'Nie krępuj ruchów — przytrzymywanie na siłę może doprowadzić do urazów. Napad musi „przejść" sam.', en: 'Don\'t restrain the movements — forcibly holding someone can cause injuries. The seizure has to run its course.', de: 'Bewegungen nicht einschränken — gewaltsames Festhalten kann Verletzungen verursachen. Der Anfall muss von selbst ablaufen.' }
        }
      ]
    },
    {
      q: {
        pl: 'Co najlepiej podłożyć pod głowę osoby w trakcie drgawek?',
        en: 'What is best to place under the head of a person who is convulsing?',
        de: 'Was legt man am besten unter den Kopf einer krampfenden Person?'
      },
      options: [
        {
          text: { pl: 'Coś miękkiego, np. złożoną kurtkę', en: 'Something soft, e.g. a folded jacket', de: 'Etwas Weiches, z. B. eine zusammengefaltete Jacke' },
          correct: true,
          why: { pl: 'Tak. Miękka podkładka chroni głowę przed uderzaniem o twarde podłoże.', en: 'Yes. A soft cushion protects the head from hitting a hard surface.', de: 'Ja. Eine weiche Unterlage schützt den Kopf vor dem Aufschlagen auf hartem Boden.' }
        },
        {
          text: { pl: 'Nic — przeciwnie, unoszę głowę wysoko do góry', en: 'Nothing — instead, lift the head up high', de: 'Nichts — stattdessen den Kopf hoch anheben' },
          correct: false,
          why: { pl: 'Nie unoś głowy ani nie prostuj ciała. Chodzi o ochronę przed urazem, a nie zmianę pozycji na siłę.', en: 'Don\'t lift the head or straighten the body. The goal is protection from injury, not forcing a position.', de: 'Heb den Kopf nicht an und streck den Körper nicht. Ziel ist Schutz vor Verletzung, nicht eine erzwungene Position.' }
        },
        {
          text: { pl: 'Butelkę z wodą, żeby ją schłodzić', en: 'A bottle of water to cool them down', de: 'Eine Wasserflasche zum Abkühlen' },
          correct: false,
          why: { pl: 'Twarde przedmioty pod głową tylko zwiększają ryzyko urazu. Usuń je, nie podkładaj.', en: 'Hard objects under the head only increase the risk of injury. Remove them, don\'t add them.', de: 'Harte Gegenstände unter dem Kopf erhöhen nur das Verletzungsrisiko. Entfernen, nicht hinlegen.' }
        }
      ]
    },
    {
      q: {
        pl: 'Drgawki ustały. Osoba oddycha, ale nie jest jeszcze w pełni przytomna. Co teraz?',
        en: 'The convulsions have stopped. The person is breathing but not yet fully conscious. What now?',
        de: 'Die Krämpfe haben aufgehört. Die Person atmet, ist aber noch nicht voll bei Bewusstsein. Was nun?'
      },
      options: [
        {
          text: { pl: 'Sadzam ją prosto i podaję wodę do picia', en: 'Sit them upright and give them water to drink', de: 'Sie aufrecht hinsetzen und Wasser zu trinken geben' },
          correct: false,
          why: { pl: 'Nie podawaj nic do picia ani jedzenia, dopóki osoba nie odzyska pełnej świadomości — grozi to zachłyśnięciem.', en: 'Don\'t give anything to eat or drink until the person is fully alert — it risks choking.', de: 'Gib nichts zu essen oder zu trinken, bis die Person voll wach ist — es droht Verschlucken.' }
        },
        {
          text: { pl: 'Delikatnie układam ją w pozycji bezpiecznej (na boku) i zostaję przy niej', en: 'Gently roll them onto their side (recovery position) and stay with them', de: 'Sie sanft in die stabile Seitenlage bringen und bei ihr bleiben' },
          correct: true,
          why: { pl: 'Tak. Pozycja boczna chroni drogi oddechowe, a Twoja obecność daje bezpieczeństwo do czasu pełnego powrotu świadomości.', en: 'Yes. The recovery position protects the airway, and your presence provides safety until they fully recover.', de: 'Ja. Die Seitenlage schützt die Atemwege, und deine Anwesenheit gibt Sicherheit bis zur vollständigen Erholung.' }
        },
        {
          text: { pl: 'Odchodzę, żeby dać jej przestrzeń', en: 'Walk away to give them space', de: 'Weggehen, um ihr Raum zu geben' },
          correct: false,
          why: { pl: 'Nigdy nie zostawiaj osoby samej po napadzie. Bywa zdezorientowana i potrzebuje wsparcia.', en: 'Never leave a person alone after a seizure. They can be disoriented and need support.', de: 'Lass eine Person nach einem Anfall nie allein. Sie kann desorientiert sein und braucht Unterstützung.' }
        }
      ]
    },
    {
      q: {
        pl: 'Jak długo może trwać napad, zanim trzeba wezwać pogotowie (112)?',
        en: 'How long can a seizure last before you should call emergency services (112)?',
        de: 'Wie lange darf ein Anfall dauern, bevor man den Notruf (112) rufen sollte?'
      },
      options: [
        {
          text: { pl: 'Dłużej niż 5 minut', en: 'Longer than 5 minutes', de: 'Länger als 5 Minuten' },
          correct: true,
          why: { pl: 'Zgadza się. Napad trwający ponad 5 minut (lub seria napadów bez odzyskania przytomności) to wezwanie pomocy.', en: 'Correct. A seizure lasting over 5 minutes (or repeated seizures without regaining consciousness) means calling for help.', de: 'Richtig. Ein Anfall über 5 Minuten (oder wiederholte Anfälle ohne Bewusstsein) bedeutet: Hilfe rufen.' }
        },
        {
          text: { pl: 'Dłużej niż 30 sekund', en: 'Longer than 30 seconds', de: 'Länger als 30 Sekunden' },
          correct: false,
          why: { pl: 'Wiele napadów trwa krócej niż minutę–dwie i mija samoistnie. Granicą alarmową jest zwykle 5 minut.', en: 'Many seizures last under a minute or two and pass on their own. The usual alarm threshold is 5 minutes.', de: 'Viele Anfälle dauern unter ein bis zwei Minuten und gehen von selbst vorbei. Die übliche Alarmgrenze sind 5 Minuten.' }
        },
        {
          text: { pl: 'Zawsze trzeba dzwonić natychmiast przy każdym napadzie', en: 'You must always call immediately for every seizure', de: 'Man muss bei jedem Anfall sofort anrufen' },
          correct: false,
          why: { pl: 'Nie każdy napad wymaga karetki. Dzwoń m.in. gdy trwa >5 min, się powtarza, jest pierwszy w życiu, w wodzie lub doszło do urazu.', en: 'Not every seizure needs an ambulance. Call e.g. if it lasts >5 min, repeats, is a first-ever seizure, happens in water, or causes injury.', de: 'Nicht jeder Anfall braucht einen Krankenwagen. Ruf z. B. an, wenn er >5 Min dauert, sich wiederholt, der erste ist, im Wasser passiert oder eine Verletzung verursacht.' }
        }
      ]
    },
    {
      q: {
        pl: 'Mit kontra fakt: „włożenie czegoś do ust podczas napadu...”',
        en: 'Myth vs fact: "putting something in the mouth during a seizure..."',
        de: 'Mythos vs. Fakt: „etwas während eines Anfalls in den Mund stecken…”'
      },
      options: [
        {
          text: { pl: '...zapobiega połknięciu języka', en: '...prevents swallowing the tongue', de: '...verhindert das Verschlucken der Zunge' },
          correct: false,
          why: { pl: 'Języka nie da się połknąć. To jeden z najgroźniejszych mitów o pierwszej pomocy.', en: 'You cannot swallow your tongue. This is one of the most dangerous first-aid myths.', de: 'Man kann die Zunge nicht verschlucken. Das ist einer der gefährlichsten Erste-Hilfe-Mythen.' }
        },
        {
          text: { pl: '...jest niebezpieczne i grozi zakrztuszeniem lub złamaniem zębów', en: '...is dangerous and can cause choking or broken teeth', de: '...ist gefährlich und kann zu Ersticken oder gebrochenen Zähnen führen' },
          correct: true,
          why: { pl: 'Dokładnie. Nigdy nie wkładaj niczego do ust osoby w trakcie napadu — także palców.', en: 'Exactly. Never put anything in the mouth of a person during a seizure — including your fingers.', de: 'Genau. Steck einer Person während eines Anfalls nie etwas in den Mund — auch nicht deine Finger.' }
        },
        {
          text: { pl: '...jest zalecane, jeśli masz miękką szmatkę', en: '...is recommended if you have a soft cloth', de: '...wird empfohlen, wenn du ein weiches Tuch hast' },
          correct: false,
          why: { pl: 'Nie. Żadna wersja „czegoś do ust" nie jest zalecana. Chroń głowę i drogi oddechowe inaczej.', en: 'No. No version of "something in the mouth" is recommended. Protect the head and airway in other ways.', de: 'Nein. Keine Variante von „etwas in den Mund" wird empfohlen. Schütze Kopf und Atemwege anders.' }
        }
      ]
    },
    {
      q: {
        pl: 'Napady Marka często zaczynają się nagłym upadkiem. Dlaczego jest to tak groźne?',
        en: 'Marek\'s seizures often begin with a sudden fall. Why does that make them so dangerous?',
        de: 'Mareks Anfälle beginnen oft mit einem plötzlichen Sturz. Warum ist das so gefährlich?'
      },
      options: [
        {
          text: { pl: 'Bo upadek w miejscu publicznym jest krępujący', en: 'Because falling in public is embarrassing', de: 'Weil ein Sturz in der Öffentlichkeit peinlich ist' },
          correct: false,
          why: { pl: 'Problem nie jest natury towarzyskiej, lecz medycznej — chodzi o realne ryzyko urazu.', en: 'The problem is not social but medical — it is about a real risk of injury.', de: 'Das Problem ist nicht sozialer, sondern medizinischer Natur — es geht um ein echtes Verletzungsrisiko.' }
        },
        {
          text: { pl: 'Bo upadek jest początkiem ataku — nie da się go przewidzieć ani zamortyzować, grozi urazem głowy', en: 'Because the fall is the start of the attack — it can\'t be predicted or cushioned, risking head injury', de: 'Weil der Sturz der Beginn des Anfalls ist — nicht vorhersehbar, nicht abfangbar, mit Risiko einer Kopfverletzung' },
          correct: true,
          why: { pl: 'Tak. U Marka upadek to początek napadu, nie jego skutek. Każdy taki upadek może skończyć się poważnym urazem — dlatego czas gra rolę.', en: 'Yes. For Marek the fall is the beginning of the seizure, not its result. Each such fall can end in serious injury — which is why time matters.', de: 'Ja. Bei Marek ist der Sturz der Beginn des Anfalls, nicht dessen Folge. Jeder solche Sturz kann schwere Verletzungen verursachen — deshalb zählt die Zeit.' }
        },
        {
          text: { pl: 'Bo upadek oznacza, że napad zaraz się skończy', en: 'Because falling means the seizure is about to end', de: 'Weil ein Sturz bedeutet, dass der Anfall gleich endet' },
          correct: false,
          why: { pl: 'Przeciwnie — upadek rozpoczyna napad. To moment największego ryzyka, nie ulgi.', en: 'On the contrary — the fall begins the seizure. It is the moment of greatest risk, not relief.', de: 'Im Gegenteil — der Sturz beginnt den Anfall. Es ist der Moment des größten Risikos, nicht der Erleichterung.' }
        }
      ]
    }
  ];

  /* Verdict messages by score ratio */
  function verdict(score, total) {
    var ratio = score / total;
    if (ratio === 1) return { pl: 'Perfekcyjnie! Wiesz dokładnie, jak zareagować.', en: 'Perfect! You know exactly how to react.', de: 'Perfekt! Du weißt genau, wie man reagiert.' };
    if (ratio >= 0.66) return { pl: 'Bardzo dobrze. Kilka szczegółów warto utrwalić.', en: 'Very good. A few details are worth revisiting.', de: 'Sehr gut. Ein paar Details lohnt es sich zu wiederholen.' };
    if (ratio >= 0.33) return { pl: 'Niezły początek — wróć do strony z pierwszą pomocą.', en: 'A decent start — revisit the first-aid page.', de: 'Ein guter Anfang — schau dir die Erste-Hilfe-Seite noch einmal an.' };
    return { pl: 'Warto to przećwiczyć. Zajrzyj do sekcji „pierwsza pomoc".', en: 'Worth practicing. Take a look at the first-aid section.', de: 'Übenswert. Wirf einen Blick in den Erste-Hilfe-Abschnitt.' };
  }

  var blurb = {
    pl: 'Ta wiedza nie zniknie po zamknięciu strony — i może kiedyś realnie komuś pomóc. Dziękujemy, że poświęciłeś chwilę.',
    en: 'This knowledge won\'t vanish when you close the page — and one day it may genuinely help someone. Thank you for taking a moment.',
    de: 'Dieses Wissen verschwindet nicht, wenn du die Seite schließt — und es kann eines Tages wirklich jemandem helfen. Danke, dass du dir einen Moment genommen hast.'
  };

  /* ---------- Quiz engine ---------- */
  var quizState = { index: 0, score: 0, chosen: null };

  function renderQuiz() {
    var root = document.getElementById('quiz-root');
    if (!root) return;

    if (quizState.index >= QUESTIONS.length) {
      renderResult(root);
      return;
    }

    var qIdx = quizState.index;
    var q = QUESTIONS[qIdx];
    var total = QUESTIONS.length;
    var pct = Math.round((qIdx / total) * 100);

    var html = '';
    html += '<div class="quiz-stage">';
    html += '  <div class="quiz-progress">' + t(UI.question) + ' ' + (qIdx + 1) + ' ' + t(UI.of) + ' ' + total + '</div>';
    html += '  <div class="quiz-bar"><span style="width:' + pct + '%"></span></div>';
    html += '  <div class="quiz-scenario">' + t(q.q) + '</div>';
    html += '  <div class="quiz-options">';
    q.options.forEach(function (opt, i) {
      html += '<button type="button" data-opt="' + i + '">' + t(opt.text) + '</button>';
    });
    html += '  </div>';
    html += '  <div class="quiz-feedback" id="quiz-feedback"></div>';
    html += '  <button type="button" class="quiz-next" id="quiz-next"></button>';
    html += '</div>';
    root.innerHTML = html;

    var buttons = root.querySelectorAll('.quiz-options button');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (quizState.chosen !== null) return;
        choose(parseInt(btn.getAttribute('data-opt'), 10));
      });
    });

    // If this question was already answered (e.g. after a language switch), restore the answered view.
    if (quizState.chosen !== null) {
      paintAnswered(qIdx, quizState.chosen);
    }
  }

  function choose(optIdx) {
    quizState.chosen = optIdx;
    var q = QUESTIONS[quizState.index];
    if (q.options[optIdx].correct) quizState.score++;
    paintAnswered(quizState.index, optIdx);
  }

  function paintAnswered(qIdx, optIdx) {
    var q = QUESTIONS[qIdx];
    var root = document.getElementById('quiz-root');
    var buttons = root.querySelectorAll('.quiz-options button');
    buttons.forEach(function (btn, i) {
      btn.disabled = true;
      if (q.options[i].correct) btn.classList.add('correct');
      if (i === optIdx && !q.options[i].correct) btn.classList.add('wrong');
    });

    var chosenOpt = q.options[optIdx];
    var fb = document.getElementById('quiz-feedback');
    fb.className = 'quiz-feedback show ' + (chosenOpt.correct ? 'good' : 'bad');
    fb.innerHTML = t(chosenOpt.why);

    var nextBtn = document.getElementById('quiz-next');
    var isLast = quizState.index === QUESTIONS.length - 1;
    nextBtn.textContent = isLast ? t(UI.seeScore) : t(UI.next);
    nextBtn.className = 'quiz-next show';
    nextBtn.onclick = function () {
      quizState.index++;
      quizState.chosen = null;
      renderQuiz();
      document.getElementById('panel-quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }

  function renderResult(root) {
    var total = QUESTIONS.length;
    var v = verdict(quizState.score, total);
    var html = '';
    html += '<div class="quiz-stage quiz-result">';
    html += '  <div class="quiz-progress">' + t(UI.yourScore) + '</div>';
    html += '  <span class="quiz-score">' + quizState.score + ' / ' + total + '</span>';
    html += '  <p class="verdict">' + t(v) + '</p>';
    html += '  <p class="blurb">' + t(blurb) + '</p>';
    html += '  <button type="button" class="btn-restart" id="quiz-restart">' + t(UI.again) + '</button>';
    html += '</div>';
    root.innerHTML = html;
    document.getElementById('quiz-restart').addEventListener('click', function () {
      quizState = { index: 0, score: 0, chosen: null };
      renderQuiz();
    });
  }

  /* ---------- Memory match ---------- */
  // Purple (💜) nods to epilepsy awareness (Purple Day). No animation beyond gentle CSS.
  var SYMBOLS = ['🧠', '💜', '⏱️', '🛡️', '🤝', '➕', '🏥', '✋'];
  var memState = { deck: [], flipped: [], matched: 0, moves: 0, lock: false };

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  function buildMemory() {
    var pairs = SYMBOLS.concat(SYMBOLS).map(function (sym, i) {
      return { id: i, sym: sym, matched: false };
    });
    memState = { deck: shuffle(pairs), flipped: [], matched: 0, moves: 0, lock: false };
    renderMemory();
    updateMemoryMeta();
    var win = document.getElementById('mem-win');
    if (win) win.classList.remove('show');
  }

  function renderMemory() {
    var grid = document.getElementById('memory-grid');
    if (!grid) return;
    grid.innerHTML = '';
    memState.deck.forEach(function (card, idx) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mem-card';
      var isFlipped = memState.flipped.indexOf(idx) !== -1;
      if (card.matched) {
        btn.className += ' matched';
        btn.textContent = card.sym;
      } else if (isFlipped) {
        btn.className += ' flipped';
        btn.textContent = card.sym;
      } else {
        btn.innerHTML = '<span class="back" aria-hidden="true">?</span>';
      }
      btn.addEventListener('click', function () { flipCard(idx); });
      grid.appendChild(btn);
    });
  }

  function updateMemoryMeta() {
    var p = document.getElementById('mem-pairs');
    var m = document.getElementById('mem-moves');
    if (p) p.textContent = memState.matched + '/' + SYMBOLS.length;
    if (m) m.textContent = memState.moves;
  }

  function flipCard(idx) {
    if (memState.lock) return;
    var card = memState.deck[idx];
    if (card.matched || memState.flipped.indexOf(idx) !== -1) return;

    memState.flipped.push(idx);
    renderMemory();

    if (memState.flipped.length === 2) {
      memState.moves++;
      updateMemoryMeta();
      var a = memState.deck[memState.flipped[0]];
      var b = memState.deck[memState.flipped[1]];
      if (a.sym === b.sym) {
        a.matched = true; b.matched = true;
        memState.matched++;
        memState.flipped = [];
        renderMemory();
        updateMemoryMeta();
        if (memState.matched === SYMBOLS.length) {
          var win = document.getElementById('mem-win');
          if (win) win.classList.add('show');
        }
      } else {
        memState.lock = true;
        setTimeout(function () {
          memState.flipped = [];
          memState.lock = false;
          renderMemory();
        }, 850);
      }
    }
  }

  /* ---------- Tab switching (exposed globally for inline onclick) ---------- */
  window.showGame = function (which) {
    ['quiz', 'memory'].forEach(function (name) {
      var panel = document.getElementById('panel-' + name);
      var tab = document.getElementById('tab-' + name);
      var on = name === which;
      if (panel) panel.classList.toggle('active', on);
      if (tab) tab.classList.toggle('active', on);
    });
  };

  window.restartMemory = function () { buildMemory(); };

  /* ---------- Init + language reactivity ---------- */
  function init() {
    renderQuiz();
    buildMemory();
  }

  // Re-render dynamic content when the language changes.
  document.addEventListener('langchange', function () {
    renderQuiz();
    // memory cards have no text, so only the meta/labels (handled by main.js) need updating
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
