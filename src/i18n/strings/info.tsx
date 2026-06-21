import type { L10n, LocalizedNode } from '../types'

export const info = {
  title: { pl: 'O padaczce i pierwsza pomoc', en: 'About Epilepsy & First Aid', de: 'Über Epilepsie & Erste Hilfe' } as L10n,
  subtitle: {
    pl: 'Trochę kontekstu do historii Marka — i wiedza, która kiedyś może komuś uratować życie',
    en: "Some context for Marek's story — and knowledge that might one day save a life",
    de: 'Etwas Kontext zu Mareks Geschichte — und Wissen, das eines Tages ein Leben retten kann',
  } as L10n,

  lead: {
    pl: 'Ta strona nie zastępuje porady lekarskiej. Powstała, żeby przybliżyć, z czym mierzy się Marek, i pokazać, jak zachować się, gdy ktoś obok ma napad padaczkowy. To wiedza, którą warto mieć — także jeśli nie zdecydujesz się wpłacić.',
    en: 'This page does not replace medical advice. It exists to explain what Marek is up against, and to show what to do when someone near you has a seizure. It is knowledge worth having — even if you decide not to donate.',
    de: 'Diese Seite ersetzt keine ärztliche Beratung. Sie soll erklären, womit Marek konfrontiert ist, und zeigen, wie man sich verhält, wenn jemand neben dir einen Anfall hat. Es ist Wissen, das sich lohnt — auch wenn du dich gegen eine Spende entscheidest.',
  } as L10n,

  drugResistantHeading: {
    pl: 'Czym jest padaczka lekooporna?',
    en: 'What is drug-resistant epilepsy?',
    de: 'Was ist arzneimittelresistente Epilepsie?',
  } as L10n,
  drugResistantBody: {
    pl: (
      <>
        <p>O padaczce lekoopornej (inaczej: opornej na leczenie) mówimy, gdy mimo prawidłowo dobranych i tolerowanych dwóch leków przeciwpadaczkowych nie udaje się uzyskać trwałego ustąpienia napadów. Dotyczy to około jednej trzeciej osób chorych na padaczkę.</p>
        <p>Dla tych osób kolejne tabletki to często za mało. Wtedy rozważa się inne ścieżki: leczenie chirurgiczne, stymulację nerwu błędnego (VNS), dietę ketogenną czy specjalistyczną diagnostykę w ośrodkach takich jak Brno Epilepsy Center — i właśnie o taką drogę walczy rodzina Marka.</p>
      </>
    ),
    en: (
      <>
        <p>Epilepsy is called drug-resistant (or refractory) when adequate trials of two properly chosen and tolerated anti-seizure medications fail to achieve sustained freedom from seizures. This affects roughly one in three people with epilepsy.</p>
        <p>For these people, more pills are often not enough. Other paths are then considered: epilepsy surgery, vagus nerve stimulation (VNS), the ketogenic diet, or specialist evaluation at centers such as the Brno Epilepsy Center — and this is exactly the path Marek's family is fighting for.</p>
      </>
    ),
    de: (
      <>
        <p>Epilepsie gilt als arzneimittelresistent (oder refraktär), wenn trotz angemessener Versuche mit zwei richtig gewählten und vertragenen Anfallsmedikamenten keine dauerhafte Anfallsfreiheit erreicht wird. Davon ist etwa jeder dritte Mensch mit Epilepsie betroffen.</p>
        <p>Für diese Menschen reichen weitere Tabletten oft nicht aus. Dann kommen andere Wege in Betracht: Epilepsiechirurgie, Vagusnervstimulation (VNS), die ketogene Diät oder eine spezialisierte Abklärung in Zentren wie dem Brünn Epilepsiezentrum — und genau für diesen Weg kämpft Mareks Familie.</p>
      </>
    ),
  } as LocalizedNode,

  vnsHeading: {
    pl: 'Co to jest stymulator nerwu błędnego (VNS)?',
    en: 'What is a vagus nerve stimulator (VNS)?',
    de: 'Was ist ein Vagusnervstimulator (VNS)?',
  } as L10n,
  vnsBody: {
    pl: 'VNS to niewielkie urządzenie wszczepiane pod skórę w okolicy klatki piersiowej, połączone elektrodą z nerwem błędnym na szyi. Wysyła regularne, łagodne impulsy elektryczne do mózgu, co u części pacjentów zmniejsza częstotliwość i nasilenie napadów. Marek ma taki stymulator — to jeden z etapów leczenia, przez które już przeszedł, obok operacji guza mózgu i zabiegu w 2023 roku.',
    en: 'A VNS is a small device implanted under the skin near the chest, connected by a wire to the vagus nerve in the neck. It sends regular, gentle electrical pulses to the brain, which for some patients reduces the frequency and severity of seizures. Marek has such a stimulator — one of the treatment stages he has already been through, alongside brain-tumor surgery and a 2023 procedure.',
    de: 'Ein VNS ist ein kleines Gerät, das unter die Haut im Brustbereich eingesetzt und über eine Elektrode mit dem Vagusnerv am Hals verbunden wird. Es sendet regelmäßige, sanfte elektrische Impulse an das Gehirn, was bei manchen Patienten Häufigkeit und Schwere der Anfälle verringert. Marek trägt einen solchen Stimulator — eine der Behandlungsstufen, die er bereits durchlaufen hat, neben einer Hirntumor-Operation und einem Eingriff 2023.',
  } as L10n,

  seizureHeading: {
    pl: 'Napad nie zawsze wygląda tak samo',
    en: "A seizure doesn't always look the same",
    de: 'Ein Anfall sieht nicht immer gleich aus',
  } as L10n,
  seizureBody: {
    pl: (
      <>
        <p>W popularnym wyobrażeniu napad to drgawki całego ciała i utrata przytomności. To prawda — ale to tylko jeden z wielu rodzajów. Napady mogą wyglądać jak chwilowe „zawieszenie się", wpatrywanie w jeden punkt, dziwne ruchy ręki czy nagłe, niekontrolowane upadki.</p>
        <p>U Marka szczególnie groźne są właśnie te ostatnie. <strong>Upadek jest początkiem ataku, a nie jego skutkiem</strong> — nie da się go przewidzieć ani zamortyzować. Dlatego każde zwykłe wyjście niesie realne ryzyko urazu głowy. To dlatego czas w jego sprawie naprawdę ma znaczenie.</p>
      </>
    ),
    en: (
      <>
        <p>In the popular image, a seizure means whole-body convulsions and loss of consciousness. That is real — but it is only one of many types. Seizures can look like a brief "freeze", staring at a single point, odd hand movements, or sudden, uncontrolled falls.</p>
        <p>For Marek, it is those last ones that are especially dangerous. <strong>The fall is the start of the attack, not its result</strong> — it cannot be predicted or cushioned. That is why every ordinary outing carries a real risk of head injury, and why time genuinely matters in his case.</p>
      </>
    ),
    de: (
      <>
        <p>Im populären Bild bedeutet ein Anfall Krämpfe des ganzen Körpers und Bewusstseinsverlust. Das ist real — aber nur eine von vielen Arten. Anfälle können wie ein kurzes „Einfrieren" aussehen, wie Starren auf einen Punkt, seltsame Handbewegungen oder plötzliche, unkontrollierte Stürze.</p>
        <p>Bei Marek sind gerade die Letzteren besonders gefährlich. <strong>Der Sturz ist der Beginn des Anfalls, nicht seine Folge</strong> — er lässt sich weder vorhersagen noch abfangen. Deshalb birgt jeder gewöhnliche Ausgang ein echtes Risiko einer Kopfverletzung, und deshalb spielt die Zeit in seinem Fall wirklich eine Rolle.</p>
      </>
    ),
  } as LocalizedNode,

  firstAidHeading: {
    pl: 'Pierwsza pomoc przy napadzie z drgawkami',
    en: 'First aid for a convulsive seizure',
    de: 'Erste Hilfe bei einem Krampfanfall',
  } as L10n,
  doTitle: { pl: 'Rób to', en: 'Do this', de: 'Das solltest du tun' } as L10n,
  dontTitle: { pl: 'Nie rób tego', en: "Don't do this", de: 'Das solltest du nicht tun' } as L10n,

  doList: {
    pl: [
      'Zachowaj spokój i zostań przy osobie do końca napadu.',
      'Spójrz na zegarek — zmierz czas trwania napadu.',
      'Usuń z otoczenia twarde i ostre przedmioty.',
      'Podłóż coś miękkiego pod głowę (kurtkę, torbę).',
      'Poluzuj ubranie przy szyi.',
      'Po ustaniu drgawek ułóż osobę w pozycji bezpiecznej (na boku).',
      'Zostań przy niej, aż w pełni odzyska świadomość, i spokojnie wytłumacz, co się stało.',
    ],
    en: [
      'Stay calm and stay with the person until the seizure ends.',
      'Check the time — measure how long the seizure lasts.',
      'Move hard or sharp objects out of the way.',
      'Put something soft under their head (a jacket, a bag).',
      'Loosen anything tight around the neck.',
      'Once the convulsions stop, roll them onto their side (recovery position).',
      'Stay until they fully recover, then calmly explain what happened.',
    ],
    de: [
      'Bleib ruhig und bleib bei der Person bis zum Ende des Anfalls.',
      'Schau auf die Uhr — miss, wie lange der Anfall dauert.',
      'Räume harte oder scharfe Gegenstände aus dem Weg.',
      'Leg etwas Weiches unter den Kopf (Jacke, Tasche).',
      'Lockere enge Kleidung am Hals.',
      'Wenn die Krämpfe aufhören, bring die Person in die stabile Seitenlage.',
      'Bleib, bis sie sich vollständig erholt hat, und erkläre ruhig, was passiert ist.',
    ],
  } as L10n<string[]>,

  dontList: {
    pl: [
      'Nie wkładaj nic do ust — to mit, grozi to zakrztuszeniem i urazem.',
      'Nie przytrzymuj na siłę i nie krępuj ruchów.',
      'Nie próbuj „rozprostowywać" ani podnosić osoby w trakcie napadu.',
      'Nie podawaj wody, leków ani jedzenia, dopóki nie odzyska pełnej świadomości.',
      'Nie zostawiaj osoby samej.',
      'Nie panikuj — większość napadów mija samoistnie w ciągu kilku minut.',
    ],
    en: [
      "Don't put anything in their mouth — it's a myth; it risks choking and injury.",
      "Don't hold them down or restrain their movements.",
      'Don\'t try to "straighten" or lift the person during the seizure.',
      "Don't give water, medication, or food until they are fully alert.",
      "Don't leave the person alone.",
      "Don't panic — most seizures stop on their own within a few minutes.",
    ],
    de: [
      'Steck nichts in den Mund — das ist ein Mythos; es droht Ersticken und Verletzung.',
      'Halte die Person nicht fest und schränke ihre Bewegungen nicht ein.',
      'Versuche nicht, die Person während des Anfalls „geradezubiegen" oder hochzuheben.',
      'Gib kein Wasser, keine Medikamente und kein Essen, bis sie voll wach ist.',
      'Lass die Person nicht allein.',
      'Gerate nicht in Panik — die meisten Anfälle hören von selbst innerhalb weniger Minuten auf.',
    ],
  } as L10n<string[]>,

  emergencyTitle: {
    pl: 'Wezwij pomoc (112), jeśli:',
    en: 'Call emergency services (112) if:',
    de: 'Rufe den Notruf (112), wenn:',
  } as L10n,
  emergencyList: {
    pl: [
      'napad trwa dłużej niż 5 minut;',
      'jeden napad następuje zaraz po drugim bez odzyskania przytomności;',
      'osoba ma trudności z oddychaniem lub nie odzyskuje przytomności;',
      'doszło do poważnego urazu (np. uderzenia głową);',
      'napad zdarzył się w wodzie;',
      'to pierwszy napad w życiu tej osoby lub nie wiesz, że choruje.',
    ],
    en: [
      'the seizure lasts longer than 5 minutes;',
      'one seizure follows another without the person regaining consciousness;',
      'the person has trouble breathing or does not regain consciousness;',
      'there is a serious injury (e.g. a blow to the head);',
      'the seizure happened in water;',
      "it is the person's first-ever seizure, or you don't know they have epilepsy.",
    ],
    de: [
      'der Anfall länger als 5 Minuten dauert;',
      'ein Anfall direkt auf den nächsten folgt, ohne dass die Person das Bewusstsein wiedererlangt;',
      'die Person Atemprobleme hat oder das Bewusstsein nicht wiedererlangt;',
      'eine schwere Verletzung vorliegt (z. B. ein Schlag auf den Kopf);',
      'der Anfall im Wasser passiert ist;',
      'es der erste Anfall der Person ist oder du nicht weißt, dass sie Epilepsie hat.',
    ],
  } as L10n<string[]>,

  testHeading: { pl: 'Sprawdź, czy zapamiętałeś', en: 'Test what you remember', de: 'Teste, was du behalten hast' } as L10n,
  testBody: {
    pl: 'Przygotowaliśmy krótki, interaktywny quiz pierwszej pomocy oparty na realnych sytuacjach. Kilka minut — a wiedza zostaje na lata.',
    en: "We've put together a short, interactive first-aid quiz based on real-life situations. A few minutes — and the knowledge stays for years.",
    de: 'Wir haben ein kurzes, interaktives Erste-Hilfe-Quiz auf Basis realer Situationen erstellt. Ein paar Minuten — und das Wissen bleibt jahrelang.',
  } as L10n,
  testCta: { pl: 'Przejdź do quizu →', en: 'Go to the quiz →', de: 'Zum Quiz →' } as L10n,

  ctaHeading: { pl: 'Pomóż Markowi', en: 'Help Marek', de: 'Hilf Marek' } as L10n,
  ctaBody: {
    pl: 'Za tymi definicjami stoi konkretny człowiek i konkretny, kończący się czas. Każda wpłata i każde udostępnienie przybliża leczenie w Brnie.',
    en: 'Behind these definitions stands a real person and a real, running-out clock. Every donation and every share brings the treatment in Brno closer.',
    de: 'Hinter diesen Definitionen steht ein echter Mensch und eine real ablaufende Uhr. Jede Spende und jedes Teilen bringt die Behandlung in Brünn näher.',
  } as L10n,
} as const
