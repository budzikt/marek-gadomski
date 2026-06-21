import type { L10n } from '../types'

export interface QuizOption {
  text: L10n
  correct: boolean
  why: L10n
}

export interface QuizQuestion {
  q: L10n
  options: QuizOption[]
}

export const QUESTIONS: QuizQuestion[] = [
  {
    q: {
      pl: 'Osoba obok Ciebie nagle upada i zaczyna mieć drgawki. Co robisz w pierwszej kolejności?',
      en: 'Someone next to you suddenly falls and starts convulsing. What is the first thing you do?',
      de: 'Jemand neben dir fällt plötzlich hin und beginnt zu krampfen. Was tust du zuerst?',
    },
    options: [
      {
        text: { pl: 'Wkładam coś do ust, żeby nie połknęła języka', en: "Put something in their mouth so they don't swallow their tongue", de: 'Etwas in den Mund stecken, damit sie die Zunge nicht verschluckt' },
        correct: false,
        why: { pl: 'To groźny mit — języka nie da się połknąć, a wkładanie czegokolwiek do ust grozi zakrztuszeniem i urazem.', en: 'A dangerous myth — you cannot swallow your tongue, and putting anything in the mouth risks choking and injury.', de: 'Ein gefährlicher Mythos — man kann die Zunge nicht verschlucken, und etwas in den Mund zu stecken birgt Erstickungs- und Verletzungsgefahr.' },
      },
      {
        text: { pl: 'Sprawdzam godzinę i usuwam z otoczenia twarde przedmioty', en: 'Note the time and clear hard objects out of the way', de: 'Auf die Uhr schauen und harte Gegenstände aus dem Weg räumen' },
        correct: true,
        why: { pl: 'Dokładnie tak. Zmierz czas trwania napadu i zabezpiecz osobę przed urazem — to dwie najważniejsze rzeczy na starcie.', en: 'Exactly. Time the seizure and protect the person from injury — those are the two most important things at the start.', de: 'Genau. Miss die Dauer des Anfalls und schütze die Person vor Verletzungen — das sind die zwei wichtigsten Dinge zu Beginn.' },
      },
      {
        text: { pl: 'Mocno przytrzymuję ręce i nogi, żeby przestała się ruszać', en: 'Hold their arms and legs firmly to stop the movements', de: 'Arme und Beine festhalten, um die Bewegungen zu stoppen' },
        correct: false,
        why: { pl: 'Nie krępuj ruchów — przytrzymywanie na siłę może doprowadzić do urazów. Napad musi „przejść" sam.', en: "Don't restrain the movements — forcibly holding someone can cause injuries. The seizure has to run its course.", de: 'Bewegungen nicht einschränken — gewaltsames Festhalten kann Verletzungen verursachen. Der Anfall muss von selbst ablaufen.' },
      },
    ],
  },
  {
    q: {
      pl: 'Co najlepiej podłożyć pod głowę osoby w trakcie drgawek?',
      en: 'What is best to place under the head of a person who is convulsing?',
      de: 'Was legt man am besten unter den Kopf einer krampfenden Person?',
    },
    options: [
      {
        text: { pl: 'Coś miękkiego, np. złożoną kurtkę', en: 'Something soft, e.g. a folded jacket', de: 'Etwas Weiches, z. B. eine zusammengefaltete Jacke' },
        correct: true,
        why: { pl: 'Tak. Miękka podkładka chroni głowę przed uderzaniem o twarde podłoże.', en: 'Yes. A soft cushion protects the head from hitting a hard surface.', de: 'Ja. Eine weiche Unterlage schützt den Kopf vor dem Aufschlagen auf hartem Boden.' },
      },
      {
        text: { pl: 'Nic — przeciwnie, unoszę głowę wysoko do góry', en: 'Nothing — instead, lift the head up high', de: 'Nichts — stattdessen den Kopf hoch anheben' },
        correct: false,
        why: { pl: 'Nie unoś głowy ani nie prostuj ciała. Chodzi o ochronę przed urazem, a nie zmianę pozycji na siłę.', en: "Don't lift the head or straighten the body. The goal is protection from injury, not forcing a position.", de: 'Heb den Kopf nicht an und streck den Körper nicht. Ziel ist Schutz vor Verletzung, nicht eine erzwungene Position.' },
      },
      {
        text: { pl: 'Butelkę z wodą, żeby ją schłodzić', en: 'A bottle of water to cool them down', de: 'Eine Wasserflasche zum Abkühlen' },
        correct: false,
        why: { pl: 'Twarde przedmioty pod głową tylko zwiększają ryzyko urazu. Usuń je, nie podkładaj.', en: 'Hard objects under the head only increase the risk of injury. Remove them, don\'t add them.', de: 'Harte Gegenstände unter dem Kopf erhöhen nur das Verletzungsrisiko. Entfernen, nicht hinlegen.' },
      },
    ],
  },
  {
    q: {
      pl: 'Drgawki ustały. Osoba oddycha, ale nie jest jeszcze w pełni przytomna. Co teraz?',
      en: 'The convulsions have stopped. The person is breathing but not yet fully conscious. What now?',
      de: 'Die Krämpfe haben aufgehört. Die Person atmet, ist aber noch nicht voll bei Bewusstsein. Was nun?',
    },
    options: [
      {
        text: { pl: 'Sadzam ją prosto i podaję wodę do picia', en: 'Sit them upright and give them water to drink', de: 'Sie aufrecht hinsetzen und Wasser zu trinken geben' },
        correct: false,
        why: { pl: 'Nie podawaj nic do picia ani jedzenia, dopóki osoba nie odzyska pełnej świadomości — grozi to zachłyśnięciem.', en: "Don't give anything to eat or drink until the person is fully alert — it risks choking.", de: 'Gib nichts zu essen oder zu trinken, bis die Person voll wach ist — es droht Verschlucken.' },
      },
      {
        text: { pl: 'Delikatnie układam ją w pozycji bezpiecznej (na boku) i zostaję przy niej', en: 'Gently roll them onto their side (recovery position) and stay with them', de: 'Sie sanft in die stabile Seitenlage bringen und bei ihr bleiben' },
        correct: true,
        why: { pl: 'Tak. Pozycja boczna chroni drogi oddechowe, a Twoja obecność daje bezpieczeństwo do czasu pełnego powrotu świadomości.', en: 'Yes. The recovery position protects the airway, and your presence provides safety until they fully recover.', de: 'Ja. Die Seitenlage schützt die Atemwege, und deine Anwesenheit gibt Sicherheit bis zur vollständigen Erholung.' },
      },
      {
        text: { pl: 'Odchodzę, żeby dać jej przestrzeń', en: 'Walk away to give them space', de: 'Weggehen, um ihr Raum zu geben' },
        correct: false,
        why: { pl: 'Nigdy nie zostawiaj osoby samej po napadzie. Bywa zdezorientowana i potrzebuje wsparcia.', en: 'Never leave a person alone after a seizure. They can be disoriented and need support.', de: 'Lass eine Person nach einem Anfall nie allein. Sie kann desorientiert sein und braucht Unterstützung.' },
      },
    ],
  },
  {
    q: {
      pl: 'Jak długo może trwać napad, zanim trzeba wezwać pogotowie (112)?',
      en: 'How long can a seizure last before you should call emergency services (112)?',
      de: 'Wie lange darf ein Anfall dauern, bevor man den Notruf (112) rufen sollte?',
    },
    options: [
      {
        text: { pl: 'Dłużej niż 5 minut', en: 'Longer than 5 minutes', de: 'Länger als 5 Minuten' },
        correct: true,
        why: { pl: 'Zgadza się. Napad trwający ponad 5 minut (lub seria napadów bez odzyskania przytomności) to wezwanie pomocy.', en: 'Correct. A seizure lasting over 5 minutes (or repeated seizures without regaining consciousness) means calling for help.', de: 'Richtig. Ein Anfall über 5 Minuten (oder wiederholte Anfälle ohne Bewusstsein) bedeutet: Hilfe rufen.' },
      },
      {
        text: { pl: 'Dłużej niż 30 sekund', en: 'Longer than 30 seconds', de: 'Länger als 30 Sekunden' },
        correct: false,
        why: { pl: 'Wiele napadów trwa krócej niż minutę–dwie i mija samoistnie. Granicą alarmową jest zwykle 5 minut.', en: 'Many seizures last under a minute or two and pass on their own. The usual alarm threshold is 5 minutes.', de: 'Viele Anfälle dauern unter ein bis zwei Minuten und gehen von selbst vorbei. Die übliche Alarmgrenze sind 5 Minuten.' },
      },
      {
        text: { pl: 'Zawsze trzeba dzwonić natychmiast przy każdym napadzie', en: 'You must always call immediately for every seizure', de: 'Man muss bei jedem Anfall sofort anrufen' },
        correct: false,
        why: { pl: 'Nie każdy napad wymaga karetki. Dzwoń m.in. gdy trwa >5 min, się powtarza, jest pierwszy w życiu, w wodzie lub doszło do urazu.', en: 'Not every seizure needs an ambulance. Call e.g. if it lasts >5 min, repeats, is a first-ever seizure, happens in water, or causes injury.', de: 'Nicht jeder Anfall braucht einen Krankenwagen. Ruf z. B. an, wenn er >5 Min dauert, sich wiederholt, der erste ist, im Wasser passiert oder eine Verletzung verursacht.' },
      },
    ],
  },
  {
    q: {
      pl: 'Mit kontra fakt: „włożenie czegoś do ust podczas napadu...”',
      en: 'Myth vs fact: "putting something in the mouth during a seizure..."',
      de: 'Mythos vs. Fakt: „etwas während eines Anfalls in den Mund stecken…”',
    },
    options: [
      {
        text: { pl: '...zapobiega połknięciu języka', en: '...prevents swallowing the tongue', de: '...verhindert das Verschlucken der Zunge' },
        correct: false,
        why: { pl: 'Języka nie da się połknąć. To jeden z najgroźniejszych mitów o pierwszej pomocy.', en: 'You cannot swallow your tongue. This is one of the most dangerous first-aid myths.', de: 'Man kann die Zunge nicht verschlucken. Das ist einer der gefährlichsten Erste-Hilfe-Mythen.' },
      },
      {
        text: { pl: '...jest niebezpieczne i grozi zakrztuszeniem lub złamaniem zębów', en: '...is dangerous and can cause choking or broken teeth', de: '...ist gefährlich und kann zu Ersticken oder gebrochenen Zähnen führen' },
        correct: true,
        why: { pl: 'Dokładnie. Nigdy nie wkładaj niczego do ust osoby w trakcie napadu — także palców.', en: 'Exactly. Never put anything in the mouth of a person during a seizure — including your fingers.', de: 'Genau. Steck einer Person während eines Anfalls nie etwas in den Mund — auch nicht deine Finger.' },
      },
      {
        text: { pl: '...jest zalecane, jeśli masz miękką szmatkę', en: '...is recommended if you have a soft cloth', de: '...wird empfohlen, wenn du ein weiches Tuch hast' },
        correct: false,
        why: { pl: 'Nie. Żadna wersja „czegoś do ust" nie jest zalecana. Chroń głowę i drogi oddechowe inaczej.', en: 'No. No version of "something in the mouth" is recommended. Protect the head and airway in other ways.', de: 'Nein. Keine Variante von „etwas in den Mund" wird empfohlen. Schütze Kopf und Atemwege anders.' },
      },
    ],
  },
  {
    q: {
      pl: 'Napady Marka często zaczynają się nagłym upadkiem. Dlaczego jest to tak groźne?',
      en: "Marek's seizures often begin with a sudden fall. Why does that make them so dangerous?",
      de: 'Mareks Anfälle beginnen oft mit einem plötzlichen Sturz. Warum ist das so gefährlich?',
    },
    options: [
      {
        text: { pl: 'Bo upadek w miejscu publicznym jest krępujący', en: 'Because falling in public is embarrassing', de: 'Weil ein Sturz in der Öffentlichkeit peinlich ist' },
        correct: false,
        why: { pl: 'Problem nie jest natury towarzyskiej, lecz medycznej — chodzi o realne ryzyko urazu.', en: 'The problem is not social but medical — it is about a real risk of injury.', de: 'Das Problem ist nicht sozialer, sondern medizinischer Natur — es geht um ein echtes Verletzungsrisiko.' },
      },
      {
        text: { pl: 'Bo upadek jest początkiem ataku — nie da się go przewidzieć ani zamortyzować, grozi urazem głowy', en: "Because the fall is the start of the attack — it can't be predicted or cushioned, risking head injury", de: 'Weil der Sturz der Beginn des Anfalls ist — nicht vorhersehbar, nicht abfangbar, mit Risiko einer Kopfverletzung' },
        correct: true,
        why: { pl: 'Tak. U Marka upadek to początek napadu, nie jego skutek. Każdy taki upadek może skończyć się poważnym urazem — dlatego czas gra rolę.', en: 'Yes. For Marek the fall is the beginning of the seizure, not its result. Each such fall can end in serious injury — which is why time matters.', de: 'Ja. Bei Marek ist der Sturz der Beginn des Anfalls, nicht dessen Folge. Jeder solche Sturz kann schwere Verletzungen verursachen — deshalb zählt die Zeit.' },
      },
      {
        text: { pl: 'Bo upadek oznacza, że napad zaraz się skończy', en: 'Because falling means the seizure is about to end', de: 'Weil ein Sturz bedeutet, dass der Anfall gleich endet' },
        correct: false,
        why: { pl: 'Przeciwnie — upadek rozpoczyna napad. To moment największego ryzyka, nie ulgi.', en: 'On the contrary — the fall begins the seizure. It is the moment of greatest risk, not relief.', de: 'Im Gegenteil — der Sturz beginnt den Anfall. Es ist der Moment des größten Risikos, nicht der Erleichterung.' },
      },
    ],
  },
]

export function verdict(score: number, total: number): L10n {
  const ratio = score / total
  if (ratio === 1) return { pl: 'Perfekcyjnie! Wiesz dokładnie, jak zareagować.', en: 'Perfect! You know exactly how to react.', de: 'Perfekt! Du weißt genau, wie man reagiert.' }
  if (ratio >= 0.66) return { pl: 'Bardzo dobrze. Kilka szczegółów warto utrwalić.', en: 'Very good. A few details are worth revisiting.', de: 'Sehr gut. Ein paar Details lohnt es sich zu wiederholen.' }
  if (ratio >= 0.33) return { pl: 'Niezły początek — wróć do strony z pierwszą pomocą.', en: 'A decent start — revisit the first-aid page.', de: 'Ein guter Anfang — schau dir die Erste-Hilfe-Seite noch einmal an.' }
  return { pl: 'Warto to przećwiczyć. Zajrzyj do sekcji „pierwsza pomoc".', en: 'Worth practicing. Take a look at the first-aid section.', de: 'Übenswert. Wirf einen Blick in den Erste-Hilfe-Abschnitt.' }
}

export const blurb: L10n = {
  pl: 'Ta wiedza nie zniknie po zamknięciu strony — i może kiedyś realnie komuś pomóc. Dziękujemy, że poświęciłeś chwilę.',
  en: "This knowledge won't vanish when you close the page — and one day it may genuinely help someone. Thank you for taking a moment.",
  de: 'Dieses Wissen verschwindet nicht, wenn du die Seite schließt — und es kann eines Tages wirklich jemandem helfen. Danke, dass du dir einen Moment genommen hast.',
}

export const quizUI = {
  question: { pl: 'Pytanie', en: 'Question', de: 'Frage' } as L10n,
  of: { pl: 'z', en: 'of', de: 'von' } as L10n,
  next: { pl: 'Dalej →', en: 'Next →', de: 'Weiter →' } as L10n,
  seeScore: { pl: 'Zobacz wynik →', en: 'See your score →', de: 'Ergebnis ansehen →' } as L10n,
  again: { pl: 'Zagraj jeszcze raz', en: 'Play again', de: 'Nochmal spielen' } as L10n,
  yourScore: { pl: 'Twój wynik', en: 'Your score', de: 'Dein Ergebnis' } as L10n,
}

export const gamePage = {
  title: { pl: 'Quiz pierwszej pomocy', en: 'First-Aid Quiz', de: 'Erste-Hilfe-Quiz' } as L10n,
  subtitle: {
    pl: 'Gra, w której każda dobra odpowiedź to wiedza, która komuś — może komuś jak Marek — pomoże',
    en: 'A game where every correct answer is knowledge that could help someone — maybe someone like Marek',
    de: 'Ein Spiel, bei dem jede richtige Antwort Wissen ist, das jemandem helfen kann — vielleicht jemandem wie Marek',
  } as L10n,
  safeNoticeStrong: { pl: 'Bezpieczne dla wzroku.', en: 'Photosensitivity-safe.', de: 'Augenfreundlich.' } as L10n,
  safeNoticeRest: {
    pl: ' Ta strona celowo nie zawiera migających, pulsujących ani gwałtownie zmieniających się elementów.',
    en: ' This page deliberately contains no flashing, strobing, or rapidly changing visuals.',
    de: ' Diese Seite enthält bewusst keine blinkenden, pulsierenden oder sich schnell ändernden Elemente.',
  } as L10n,
  tabQuiz: { pl: 'Quiz pierwszej pomocy', en: 'First-Aid Quiz', de: 'Erste-Hilfe-Quiz' } as L10n,
  tabMemory: { pl: 'Gra pamięciowa', en: 'Memory Match', de: 'Memory-Spiel' } as L10n,
  memPairs: { pl: 'Dopasowane pary:', en: 'Pairs matched:', de: 'Gefundene Paare:' } as L10n,
  memMoves: { pl: 'Ruchy:', en: 'Moves:', de: 'Züge:' } as L10n,
  restart: { pl: 'Od nowa', en: 'Restart', de: 'Neu starten' } as L10n,
  memWinStrong: { pl: 'Gotowe!', en: 'Done!', de: 'Geschafft!' } as L10n,
  memWinRest: {
    pl: ' Dziękujemy za chwilę uwagi. Jeśli możesz — zostaw też ślad u Marka.',
    en: ' Thank you for a moment of attention. If you can — leave a mark with Marek too.',
    de: ' Danke für einen Moment Aufmerksamkeit. Wenn du kannst — hinterlasse auch bei Marek eine Spur.',
  } as L10n,
  backLink: {
    pl: '← Wróć do informacji o padaczce i pierwszej pomocy',
    en: '← Back to epilepsy & first-aid info',
    de: '← Zurück zu Epilepsie- & Erste-Hilfe-Infos',
  } as L10n,
  ctaHeading: {
    pl: 'Wiedza pomaga. Wpłata pomaga konkretnie.',
    en: 'Knowledge helps. A donation helps concretely.',
    de: 'Wissen hilft. Eine Spende hilft konkret.',
  } as L10n,
  ctaBody: {
    pl: 'Dziękujemy, że dotarłeś aż tutaj. Marek i jego rodzina walczą o leczenie w Brnie — każda złotówka się liczy.',
    en: 'Thank you for making it this far. Marek and his family are fighting for treatment in Brno — every coin counts.',
    de: 'Danke, dass du bis hierher gekommen bist. Marek und seine Familie kämpfen um eine Behandlung in Brünn — jeder Cent zählt.',
  } as L10n,
}
