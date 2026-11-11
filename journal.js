window.JOURNAL = {
  updated: "2026-11-11 17:00",

  // ---------- Jetzt: woran gerade gearbeitet wird ----------
  now: {
    inProgress: [
      { title: "Titelseite + „My bets“: Politik und Medien unübersehbar", area: "Spiel", detail: "10.11. nachts (User: Wahlen, Skandale, Abstimmungen dürfen keine Randnotiz sein). Gebaut und im Spiel getestet (Testinstanz ohne Maus: Titelseite der Wahlnacht pausiert das Solo-Spiel, „My bets“ zeigt das eigene Gesetz mit 64 %, Randkarte unter der FPS-Anzeige): (1) Titelseite – große Meldungen (Anklage, Umschlag beim Staatsanwalt, aufgeflogene Kampagne, Dossier, Leiche im Keller, Wirtschaftsereignis, Wahlnacht) erscheinen als Zeitung über dem Spiel mit Schlagzeile, „was das für dich heißt“, weiteren Meldungen und Knopf zur passenden Aktion; im Solo-Spiel pausiert die Zeit. (2) „My bets“ – Liste aller Einsätze (Gesetze mit Prognose, Anhörungen, Kandidaturen, Kampagnen, Angriffe gegen dich, Gebote, Umschläge, Verdacht, Ruf) im Radialmenü unter Agenda. (3) Randkarten rechts, wenn eine Prognose kippt, der Verdacht steigt, der Ruf fällt, ein Angriff beginnt oder eine Meldung dich betrifft." },
      { title: "Tester-Feedback abarbeiten (Discord + Board)", area: "Spiel", detail: "09.11. abends, User unterwegs: 0.1.218 (neun Fixes) und 0.1.220 (Politik früher spielbar, Gründe an grauen Knöpfen, Straßen bleiben im eigenen Bezirk) als Updates veröffentlicht, Tickets auf Test Fix. Offen: #8 Lüftungsgitter flimmern (neue Modell-Revision der 1970er-Hochhäuser), #13 Finanzen, #15 Straßen folgen dem Gelände, Wünsche #17/#20/#24, Plan für Kandidaten-Werte (#25)." },
      { title: "Online-Multiplayer ohne Portfreigabe (Epic Online Services)", area: "Spiel", detail: "Der letzte Playtest scheiterte an der Portfreigabe im Router (User 09.11.). Jetzt: Der Host wählt beim neuen Spiel „Online (room code)“, das Spiel loggt sich still und anonym bei Epic Online Services ein (kein Epic-Konto für die Spieler) und zeigt in der Lobby einen 6-stelligen Raumcode mit Copy-Knopf. Freunde tippen den Code unter JOIN ein; die Verbindung läuft per NAT-Durchstich, notfalls über Epics Relay – ohne Router-Einstellung. „LAN only (IP address)“ bleibt für das Heimnetz. Gebaut für Editor, Windows und Linux; LAN-Beitritt und der Fall ohne Zugangsdaten getestet. Es fehlen noch die EOS-Zugangsdaten des Users (Developer Portal) und ein Test über zwei Haushalte." },
      { title: "Politik, Medien und Wirtschaft spielbar – Agenda, War Room, Roll Call", area: "Spiel", detail: "Nachtschicht 09.11. (Auftrag: alle vier Konzepte einbauen, alle drei Bereiche verbunden). Gebaut und im PIE getestet: Stadtrat mit neun Sitzen und verborgenen Werten, Abstimmung jedes Quartal als Roll-Call-Szene, War Room mit sechs Schritten und Aussicht, Debrief/Playbook, Agenda-Band unter den Karten (Heute links), 66 Gesetze mit Wirkung, Epochen-/Krisengesetze, Wahlen für Bezirks- und Inselsitze ab 1954 (Spieler startet ohne Sitz), Stimmung je Bezirk mit Umfragen, Arbeitsmarkt für den Stab, Forschungstisch, Verträge zwischen Bezirken, Handelsstufen, zwölf Wirtschafts-Ereignisse, NPCs spielen alles mit. Als Nächstes: Klicktest des Users (War Room, Roll Call, Panels), dann Zahlen abstimmen; Titelseite für Wendepunkte und Medien-Kampagnen gegen Kandidaten mit Dossier sind angelegt, aber noch dünn." },
      { title: "Kompendium 1950–2030: der Scope für Politik, Medien und Wirtschaft", area: "Konzept", detail: "Auftrag des Users 09.11.: erst festhalten, was es überhaupt geben soll, dann die Wege dorthin. Geschrieben: 94 Gesetze in neun Bereichen mit Jahr, Quelle (Epoche, Katalog, Ereignis, Bürgerbegehren), Wirkung und Gewinnern/Verlierern; acht Ämter mit Wählern, Turnus und Einsätzen (Rat 9 Stimmen, 20 Wahlen 1954–2030); Medien-Scope (11 Sender-Typen, 8 Story-Typen, Lizenzen, Forschung); Stab mit Arbeitsmarkt; Wirtschafts-Scope (7 Güter, 6 Vertragsarten, Handel per Lkw bis Logistik-Hub, 12 Ereignisse); acht Wege zum Reichtum (der Spieler als Tycoon) und der Anfang in drei Akten (Small light → Player → Tycoon). Wartet auf die Durchsicht des Users – danach die politische Zeitschiene bauen." },
      { title: "Konzept: Agenda, War Room, Roll Call", area: "Konzept", detail: "Auftrag des Users 09.11.: das politische und mediale Geschehen muss zentral sichtbar sein (Wahlen, Termine, Restzeit – mit der Uhr verbunden), Kampagnen sollen wie Spiele in Mad Games Tycoon 2 eingestellt werden (viele Stellschrauben, verborgene Passung, zweiter Anlauf – für Politik und Medien), Abstimmungen so spannend wie die Richter in Die Fugger II. Konzept geschrieben mit Recherche zu neun Vorbildern, sieben Bildern (Agenda-Band im heutigen HUD, War Room, Kreislauf, Roll Call, Medien-Technik 1950–2030, Fallbeispiel, verborgene Stimmung) und drei Fallbeispielen mit Zahlen. Durchsicht des Users am selben Tag: Zeitband mit Heute links, War Room angenommen, Stab mit Arbeitsmarkt, Forschung wie in MGT2, Wirtschafts-Kampagnen später – offen bleibt nur die TV-Lizenz 1960 statt 1965." },
      { title: "Gärten, Höfe und Plattenbelag", area: "Stadtbild", detail: "Jedes Wohnhaus hat jetzt Rasen, Einfahrt, Weg, Briefkasten, Zaun oder Hecke und hinten Terrasse, Schuppen, Wäschespinne, Schaukel, Baum; Gewerbe bekommt Vorplatz, Hof, Container und Parkplätze. Die Innenstadt-Hinterhöfe sind Liefer-, Park-, Grün- oder gemischte Höfe, der Zentrumsboden große Betonplatten statt Gussbeton. Alles wechselt mit dem Jahrzehnt und sieht je nach Pflege des Bezirks (Zufriedenheit, Bodenwert, Umwelt) sauber oder verwahrlost aus. Nach dem Test des Users (Ruckeln beim Ranzoomen, Rasen/Hecken/Blumen künstlich, einzelne Zäune): für den Vergleich abgeschaltet; jetzt im Admin-Menü (World → Yards & gardens) live einzeln schaltbar: Plattenboden, Stadt-Hinterhöfe, Bezirksgärten sowie Boden, Zäune/Hecken, Bäume, Autos, Props, Gerümpel, Blumenkästen (gemerkt über Neustarts); als Nächstes nur die Innenstadt mit FPS-Anzeige, danach die Bezirke. 07.11. nach dem nächsten Test: Zäune rundum geschlossen und mit dem Nachbarn geteilt (Querbalken innen, keine Eck-Löcher), vorn Hecke oder Lattenzaun; Rasen, Einfahrt und Auto folgen am Hang dem Gelände; Hortensien statt Comic-Blumenkästen; eigener Regler „Grass – yards“ für den Gartenrasen; Ausbau der ganzen Insel baut keine Häuser mehr ineinander (171 Fälle bei Seed 641163). Danach: Ruckeln überall behoben (eine Zaun-Komponente über die ganze Insel; jetzt 1-km-Kacheln, Zäune nicht in Lumen – 450 → 16 ms), alte Meshes auf Nanite, NPCs und Spieler bauen nicht mehr in Full-island-Häuser, Einfahrt und Weg am Hang nicht mehr unter dem Rasen; Weg und Einfahrt fehlten bei Spieler-/NPC-Häusern nach dem Fertigbau (wiederverwendete Instanz-Plätze wurden nicht neu gezeichnet) – behoben. Hecken jetzt aus echtem Megascans-Buchsbaum (Fab) statt selbstgebauter Blöcke, aus der Ferne voll (Nanite „Preserve Area“), Helligkeit/Farbton/Sättigung im Admin-Menü (World → Hedges). Zäune ohne Mix (User): entweder weißer Lattenzaun rundum oder vorn Hecke und hinten Bretterzaun, der auf der Seite ohne Einfahrt zur Hauswand abknickt (Garten zu, wie bei echten Häusern)." },
      { title: "Fußgängerampeln", area: "Verkehr", detail: "An jedem Ampelmast hängt jetzt zusätzlich eine kleine Fußgängerampel, quer zur Fahrbahn gedreht und von beiden Straßenseiten lesbar: Rot oben, Grün unten. Sie zeigt genau die Phase, nach der die Passanten über den Zebrastreifen gehen (also erst nach dem 10-s-Abbiege-Vorlauf grün). Gebaut, wartet auf den Play-Test des Users." },
      { title: "Ladebild ohne Ruckler", area: "Spiel", detail: "Der Spinner stand, weil einzelne Bilder des Inselbaus Sekunden rechneten (User 06.11.). Messsonde eingebaut, Generator in viele Bilder zerlegt, Inselform-Kern auf einen Arbeits-Thread, Assets beim Hauptmenü vorgeladen, Passanten in Paketen. Für das gepackte Spiel zusätzlich der Lade-Thread der Engine. Zweite Runde: Parks einer je Bild (Planung im Hintergrund, Instanzen in Paketen), Skyline in Paketen, Generator wartet auf Parks und auf fertig gebaute Assets. Nachmessung: längstes Bild 0,37 s (anfangs 1,8 s), Stillstand zusammen 3,0 s statt 7,1 s, dafür mehr kurze Hänger (27 Bilder über 50 ms). Dritte Runde mit Unreal Insights: Messskript maß sich teils selbst (MCP-Aufrufe im Game-Thread), CountDistricts in C++, Gras-JPEG beim Weltstart. Stand: längstes Bild 0,17 s (anfangs 1,8 s), Stillstand zusammen 2,2 s (7,1 s). Rest: Ringstraßen-Gehwege, Relief, Render-Proxies. Play-Test des Users steht aus." },
      { title: "Spielbare Fassung V1: Das Machtdreieck läuft im Spiel", area: "Spiel", detail: "Auftrag des Users 05.11.: das ganze Konzept ins Spiel bringen – Baumenü, drei Pfeiler, NPC-Gegner, Hauptmenü mit Optionen, Hosten/Beitreten, selbst entscheiden, selbst testen. Gebaut: Spielstand als replizierte Datensätze im GameState, Monatstick (Bevölkerung, Arbeit, Strom, Steuern, Mieten), Anhörungen, Gesetze, Wahlen, Ausschreibungen, Berichte, Kampagnen, Recherchen, Werbung, fünf NPC-Profile, Katalog aus allen Gebäuden, Bauen mit Geister-Lot, Aktions-Panels am Radialmenü, Lobby, Endwertung, Hauptmenü, Listen-Server. Eine Partie 1950–1960 lief im Play von Anfang bis Ende; Zwei-Spieler-Test im Editor (Host + Client) bestanden. Als Nächstes: Klicktest des Users, Zahlen abstimmen." },
      { title: "Verkehr und Passanten am Zebrastreifen", area: "Verkehr", detail: "Sechs Nachbesserungen vom 05./06.11. (Autos als Hindernis zurückgenommen, auf der Fahrbahn nie stehen, Zebra-Knoten mittig, Abbiegekurven ohne Bordstein, 10 s Abbiege-Vorlauf, Auto auf dem Zebrastreifen durchlassen, Autoschlange fährt zügig durch) sind vom User committet – Einzelheiten im Meilenstein vom 06.11. Als Nächstes: weitere Beobachtungen aus dem Play." },
      { title: "Passanten weichen ins Grüne aus", area: "Menschen", detail: "Ist der Gehweg so dicht, dass keine Spur frei ist, weichen Passanten auf den Rasen oder den Vorplatz der Gebäude aus – nur auf der Seite weg von der Straße, nie auf die Fahrbahn – und nur zum Umgehen: sobald auf dem Gehweg wieder Platz ist, gehen sie zurück. Vorher wird geprüft, ob dort Boden ist und keine Wand, kein Busch oder Zaun im Weg steht. Gebaut, wartet auf den Play-Test des Users." },
      { title: "Bezirks-Overlay und Lobby-Karte", area: "Spiel", detail: "Glas-Flächen und Goldrahmen je Bezirk aus der Inselfläche, Bezirk je Dreieck exakt aus dem Generator, Grenzen reichen jetzt auf jeder Insel bis zur Küste (Prüfung im Log: genau 6 offene Enden am Zentrum, geprüft mit 4 Seeds). Lobby: nur der Bezirk unter der Maus im Look des eigenen Bezirks, reservierte in Spielerfarbe, Haarlinien-Rahmen. Noch nicht committet; Hover und Klick mit der Maus testet der User." },
      { title: "Gras im Admin-Menü umstellen", area: "Landschaft", detail: "Außen und Parks getrennt: Bibliothek mit 10 Grastexturen, eigene Bilder hochladen, Regler für Texturanteil, Größe, Helligkeit, Grünton und Sättigung. Gebaut, wartet auf den Play-Test des Users." },
      { title: "Mehr Passanten-Figuren", area: "Menschen", detail: "Arbeiter (Latzhose, Schiebermütze) freigegeben. Neu: Dame im hellblauen Hemdblusenkleid mit Strohhut, Handschuhen und Handtasche (nach Referenzblatt, ersetzt die ältere Dame) freigegeben. Danach: Kleidung je Epoche." },
      { title: "Autos der 1950er", area: "Verkehr", detail: "Limousine, Rosenwald 500 und Pickup Ranger 310 fahren gemischt im Verkehr. Als Nächstes: Coupé, Kombi, Lieferwagen nach demselben Weg." },
      { title: "Projekttagebuch", area: "Doku", detail: "Diese Seite: Verlauf, Konzepte, Galerie. Rückblick: 27.09., 30.10., 01.11. und heute nachträglich fotografiert (Seed 503555). Jetzt auf Deutsch und Englisch." },
      { title: "Spielkonzept: Das Machtdreieck", area: "Konzept", detail: "Wirtschaft, Politik und Medien als drei gleich starke Kräfte, die einander brauchen und beschädigen können; Verdacht als Bremse. Zehn Untermenüs (Vorgabe des Users), vier Kapitalien, sieben Bezirksrichtungen, Startzahlen zum Abstimmen – vom User am 05.11. angenommen (Ausschreibungen unter Politik, Startzahlen Stück für Stück anpassen, Spitzen-Regel ausprobieren). Seit dem Abend als spielbare Fassung V1 im Spiel (siehe oben); jetzt werden die Zahlen im Spiel abgestimmt." },
      { title: "Spielkonzept: Ökosystem der Stadt", area: "Konzept", detail: "Grundlagen: wer liefert was, wer braucht was, wie fließt Geld. Erst Konzept, dann bauen." }
    ],
    next: [
      { title: "EOS-Zugangsdaten eintragen und über zwei Haushalte testen", area: "Spiel", detail: "Im Epic Developer Portal ein Produkt anlegen, Client mit Richtlinie Peer2Peer, die fünf Werte in (Vorlage.example). Danach Paket bauen und mit einem Freund über den Raumcode verbinden – zwei Instanzen auf einem PC können EOS-P2P nicht prüfen." },
      { title: "Klicktest Politik/Medien/Wirtschaft und Zahlen abstimmen", area: "Spiel", detail: "Der User spielt die neue Schleife (Agenda → War Room → Roll Call → Debrief) im Play: Panels Laws, Council, Staff, Research, Contracts, Economy, Mood; Wahl 1954 mit Kandidatur. Danach Kurse nachziehen: Umschlag-Preise, Kampagnenkosten je Kanal, Sitz-Neigung, Gehälter, Forschungspunkte, Vertragspreise, Wirkung der Gesetze." },
      { title: "Titelseite für Wendepunkte, Medien-Kampagnen mit Dossier, Referendum", area: "Spiel", detail: "Große Karte statt Toast, wenn ein Gesetz mit eigenem Einsatz fällt oder ein Ereignis beginnt; Dossier-Trick im War Room an echte Recherchen koppeln (angelegt); Bürgerbegehren ab Referendum Act laufen, brauchen Feinschliff." },
      { title: "Zahlen des Machtdreiecks abstimmen", area: "Konzept", detail: "Der Monatstick läuft jetzt im Spiel (V1). Erste Korrekturen aus dem eigenen Test sind drin (Einfluss, NPC-Kredite, Nachfrage, Stromkosten, Wertung). Als Nächstes mit dem User spielen und Kurse, Schwellen, Preise und NPC-Tempo nachziehen." },
      { title: "Weitere Rückblick-Stände", area: "Doku", detail: "Optional: 27.10. (erste Seed-Insel), 28.10. (Lots an Straßen), 02.11. (Verkehr/Ampeln im Play)." },
      { title: "Privatvermögen & Siegbedingungen", area: "Konzept", detail: "In V1 entschieden (Claude, 05.11.): Privatvermögen aus Mieten und Umsätzen der eigenen Gebäude; Wertung am Endjahr aus Vermögen, Gebäudewert, Einfluss, Ansehen, Einwohnern und Bodenwert minus Verdacht – der Erste bekommt das Zentrum der Macht. Offen: ob diese Gewichtung Spaß macht." },
      { title: "Spieler-UI: Klicktest und Feinschliff", area: "Spiel", detail: "Die Oberfläche ist jetzt mit dem Spiel verbunden: Karten oben zeigen echte Werte, Radialmenü-Einträge öffnen Aktions-Panels (Katalog, Anhörungen, Gesetze, Sender …), Bauen mit Geister-Lot. Wartet auf den Klicktest des Users. Danach: Höhendeckel, Objekt-Panel mit echten Gebäudewerten, Minikarte mit Feldern." },
      { title: "Oberflächenmuster für Gebäude", area: "Gebäude", detail: "1950er fertig (Hochhaus im Play freigegeben, dann auf Kaufhaus, Krankenhaus, Café, Wohnhaus ausgerollt): Natursteinquader mit Fugen, Granitplatten, Klinker, Fliesen, Stulpschalung, Schindeln, Putz, Glas je Fenster verschieden, Metall mit Körnung – alles prozedural. Danach 1970er (Betonfertigteile, Waschbeton, Faserzement, Betondachsteine, Klinker) und 1990er (Granitplatten 1,2 × 0,8 m, planes Glas) gebaut – wartet auf den Play-Test des Users." }
    ],
    done: [
      { title: "Ring-Spitze: kein heller Betonkeil mehr ausserhalb der Ringstrasse (Seed 2147483647); an der Stelle bleibt ein leicht dunklerer Grasfleck - Sichtpruefung offen", area: "Stadtbild", date: "2026-11-11" },
      { title: "Sanierung schon ab 1965 (Feedback #40): 1970er-Buerotuerme und -Kaufhaus ab 1965, 1990er-Tuerme ab 1985; Infofenster nennt das Jahr bzw. „No newer version of this building yet“", area: "Spiel", date: "2026-11-11" },
      { title: "Arbeitsstand aller Sessions gesichert, und ergaenzt; weiter mit neuer Main + Kanban #1-#3", area: "Doku", date: "2026-11-11" },
      { title: "Update 0.1.305 veroeffentlicht: Strassen-Erlaubnis, Steuern + Grundsteuer, Strom-Inselnetz, Medienmacht, Baustellen ohne Ueberlappung, HUD-Umbau", area: "Spiel", date: "2026-11-10" },
      { title: "Infofenster lesen: Klick auf ein schraeges Infofenster dreht es weich flach, frontal und 1,4 x groesser in die Bildmitte, erneuter Klick zurueck in 3D (alle Infofenster; Knoepfe bleiben Knoepfe; Konsole hud.FlatCard). Im Spiel ohne Maus getestet.", area: "UI", date: "2026-11-10" },
      { title: "Admin-Zeitsprung (erster Hinweis aus dem Tester-Forum auf Discord): im Admin-Menü unter „Renovation test“ zwei Knöpfe „Skip 1 year“ und „Skip to next decade“ – die Spielzeit läuft Monat für Monat wie im Spiel weiter (Datum, Katalog, Wirtschaft, NPCs, Sanierungsfreigaben), nie über das Endjahr hinaus; Sanierungstest-Knöpfe heißen jetzt „… (next era)“. Per Konsole getestet (Mai 1950 → Mai 1951 → Jan 1960 → Jan 1970)", area: "Spiel", date: "2026-11-08" },
      { title: "Linux-Fassung: das Spiel gibt es jetzt auch nativ für Linux (Vulkan SM6 mit Nanite/Lumen, 4 GB, Anleitung für Fedora); Linux und Windows können zusammen spielen, wenn die Version gleich ist. Gebaut per Cross-Compiler unter Windows, auf Linux noch nicht gestartet", area: "Spiel", date: "2026-11-08" },
      { title: "Spielversion + Versionsprüfung: Version (v0.1.<Commit>) steht unten links auf dem Startbildschirm; beim Beitritt lehnt der Host eine andere Version mit klarer Meldung ab („Different game version: the host runs …, you have …“), und verlässt der Host das Spiel, landet der Mitspieler mit Grund im Hauptmenü. Getestet mit Host im Editor und zweiter Spielinstanz (falsche Version abgelehnt, gleiche angenommen, Host weg gemeldet)", area: "Spiel", date: "2026-11-08" },
      { title: "Erste installierbare Windows-Fassung (3,8 GB) für den Multiplayer-Test; Netzwerk-Architektur entschieden: Unreal-Online-Subsystem statt eigenem Transport – heute LAN/IP, später Steam (SteamSockets) oder EOS, kein fly.io-Relay für den Spielverkehr ", area: "Spiel", date: "2026-11-08" },
      { title: "Bezirksgrenzen in Spielerfarben: ab Spielstart ist jede Bezirksgrenze zweifarbig – jede Hälfte in der Farbe des Bezirks auf ihrer Seite (Mensch: gewählte Farbe, Computer: feste Platzfarbe), gleich breit wie die alte schwarze Linie. In der Lobby bleibt sie schwarz. Gebaut, Play-Test des Users steht aus", area: "Spiel", date: "2026-11-08" },
      { title: "Bauen mit Preis und Infofenster: im Radialmenü steht beim Überfahren eines Gebäudes der Preis in der Mitte (grün = Geld reicht, orange = zu wenig); im Baumodus zeigt ein schräges Infofenster Preis, Kontostand danach, Unterhalt, Bauzeit, Wirkung (Einwohner, Jobs, Umsatz, Strom, Zufriedenheit, Verschmutzung), Lotgröße und Knöpfe „Next variant“ und „Cancel“. Gebaut, Play-Test des Users steht aus", area: "Spiel", date: "2026-11-08" },
      { title: "Baumenü unterscheidet öffentliche und private Gebäude: öffentliche (Schule, Krankenhaus, Polizei, Feuerwehr, Post, Park, Plaza – bezahlt aus der Stadtkasse) in Behörden-Blau mit Säulen-Symbol und Hinweis unter dem Menü, der Katalog ist in „Private“ und „Public“ geteilt. Ein grauer Sanieren-Knopf nennt jetzt den Grund (z. B. Stadtkasse im Minus), neuer Admin-Knopf „+$10M (city treasury)“. Gebaut, Play-Test des Users steht aus", area: "Spiel", date: "2026-11-08" },
      { title: "Stadtplatz 1950 (r02) freigegeben: 24 gebogene Wasserstrahlen mit Schaum am Denkmal, Beete mit Steinkante und Hortensien, Boden wie geschliffener Naturstein (je Platte eigener Ton, Fugen) statt Plastik-Weiß", area: "Gebäude", date: "2026-11-08" },
      { title: "Stadtpark 1950 (r04) freigegeben: fließendes marineblaues Wasser mit Schaum, Buchsbaum-Hecken, Hortensien; der Parkrasen ist jetzt derselbe Rasen wie auf dem Feld drumherum (statt neongrün)", area: "Gebäude", date: "2026-11-08" },
      { title: "Baustellen an Spieler-, NPC- und Full-island-Gebäuden wie im Zentrum: Zaun, Kran, Container und Mulde im Hof, das alte Gebäude fährt unter dem Netz herunter, das neue wieder hoch. Ein einziges, schräges Infofenster für Gebäude und Felder (Renovieren/Abreißen direkt im Gebäude-Fenster). Glas des Bezirks-Overlays deckt jetzt auch das Land an Klippen und Bergfüßen ab. Gebaut, Play-Test des Users steht aus", date: "2026-11-08" },
      { title: "Upgrade-Test im Admin-Menü nimmt jetzt alle Gebäude mit neuerer Fassung, nicht nur das Zentrum: Spieler- und NPC-Gebäude (sofort und kostenlos, Spieljahr egal, Hof wird neu gebaut) und Full-island-Gebäude – Gerüst um die echten Umrisse, Tausch unter dem Netz; „Alle“ höchstens 150 Baustellen, die nächsten zur Kamera. Gebaut, Play-Test des Users steht aus", date: "2026-11-08" },
      { title: "Feld 1 jedes Bezirks ist beim Spielstart schon freigegeben (vor der Kamerafahrt) – Bauanhörungen erst für weitere Felder", date: "2026-11-08" },
      { title: "Spielstart-Kamera als eine flüssige Fahrt: vom Überblick über die Bezirks-Ansicht direkt auf Feld 1, ohne Pause, 2,6 s statt 4,6 s", date: "2026-11-07" },
      { title: "Flackern der Fassaden aus der Ferne behoben: Fugen, Steinfarben, Körnung und Fenster-Spiegelungen laufen im Gebäudematerial mit der Entfernung weich in ihren Mittelwert (vorher Fugen mind. 1 Pixel – TSR flackerte); Ursache per Bildvergleich und Konsolen-Tests eingegrenzt (Licht/Schatten/Nanite ohne Wirkung, 200 % Auflösung ließ es verschwinden); alle Gebäudefamilien neu gebaut", date: "2026-11-07" },
      { title: "Neue Spielregel für Spieler und NPCs: erst Feld 1 am Zentrum, danach nur Nachbarfelder freigeben; Straßen nur auf freigegebenen Feldern und immer an eine vorhandene Straße angeschlossen (Server prüft, Knöpfe nennen den Grund)", date: "2026-11-06" },
      { title: "Leistungstest „ganze Insel ausgebaut“: Knopf im Admin-Menü (World → Island) baut auf allen 54 Feldern ein Netz echter Spielerstraßen (Gehwege, Kreuzungen, Ampeln) und stellt Gebäude des Spieljahrs nur an die Straßen – alle Straßen hängen zusammen (je Bezirk ab Feld 1 am Ring, dann nur in Nachbarfelder) – 1950: 442 Straßen, 3876 Gebäude, 105 → 42 FPS im Editor; zweiter Klick räumt ab", date: "2026-11-06" },
      { title: "Kamerafahrt zum Spielstart: nach dem Bezirk zoomt die Kamera auf Feld 1 des eigenen Bezirks (Feld mittig, Stadt oben, Horizont knapp über dem Bildrand) – nach Referenzbild des Users, wartet auf den Blick des Users im Play", date: "2026-11-06" },
      { title: "Gebäude-Autopilot fertig: alle 93 Zeilen der Warteschlange gebaut, importiert und committet (bis 2030, Quellen in). Offen und in: Play-Test der 1970er–2030er, Türme auf 2/4 Lots im Spielcode, Fehler in Prüfskripten und apply_material_pbr bei Baum-Materialien", date: "2026-11-06" },
      { title: "Verkehr und Passanten am Zebrastreifen: Autos als Hindernis zurückgenommen, Passanten bleiben nie auf der Fahrbahn stehen, Zebra-Knoten mittig, Abbiegekurven ohne Bordstein, Abbieger mit 10 s Vorlauf (Grün 28 s), Auto auf dem Zebrastreifen wird durchgelassen, Autoschlange fährt zügig durch – vom User committet", date: "2026-11-06" },
      { title: "Multiplayer: Blueprint-Warnungen des Servers für fremde Controller behoben (BeginPlay des Controllers läuft nur noch lokal); Startbildschirm und HUD einmal je Welt, Client-Name aus den Optionen", date: "2026-11-06" },
      { title: "Flimmern am Hochhaus-Portal behoben: Die Seiten des Granitportals am 1950er-Hochhaus lagen genau in einer Ebene mit den hellen Pilastern des ersten Regelgeschosses und dem Gesims – im Spiel flackerte die Grenze. Portalseiten 2 cm breiter (Revision r02, alle drei Varianten), die drei Erdgeschoss-Meshes neu importiert, Showcase neu aufgebaut; neue Regel im Gebäude-Skill: Bauteile nie bündig mit Kanten eines Nachbarmoduls enden lassen. Wartet auf den Blick des Users im Play", date: "2026-11-06" },
      { title: "Spielbare Fassung V1: Spielstand und Monatstick im GameState, Befehle über den Server, Katalog aus 96 Gebäudefamilien, Bauen/Straßen/Anhörungen/Gesetze/Wahlen/Ausschreibungen/Berichte/Kampagnen/Recherchen/Werbung mit Wirkung, fünf NPC-Profile, Lobby, Endwertung, Hauptmenü mit Optionen, Hosten und Beitreten – Partie 1950–1960 und Zwei-Spieler-Test im Editor bestanden", date: "2026-11-05" },
      { title: "Konzept „Das Machtdreieck“: Wirtschaft, Politik, Medien mit vier Kapitalien, zehn Untermenüs, Epochen-Index und Beispielpartie – mit sieben Diagrammen im Tagebuch, vom User angenommen (Ausschreibungen unter Politik, Zahlen Stück für Stück, Spitzen-Regel ausprobieren); Radialmenü Politik/Medien entsprechend umgebaut und committet", date: "2026-11-05" },
      { title: "Spieler-Oberfläche 2. Fassung nach Referenzbild: Glas-Karten oben/unten, Icon-Radialmenü mit Bögen, schräges Objekt-Panel bei Klick auf ein Gebäude, Minikarte", date: "2026-11-05" },
      { title: "Spieler-Oberfläche (Prototyp): Statusleiste mit Panels, Tab-Radialmenü mit 3 Ebenen, Admin-Menü nur noch per F10", date: "2026-11-04" },
      { title: "Turm auf vier Lots 2030 „Der Sägezahnturm“: Neubau 48 × 36 m auf 2 × 2 Lots, ≈ 180 m, dunkles Holz, warmes Klarglas, Bronze, Krone aus drei Solar-Sheds mit Nordlicht, Sedum, Messing „SUMMIT TOWER“ (BLD_2030_MergedTower_02) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Turm auf zwei Lots 2030 „Der Solarkeil“: helle Lärche an Pfeilern und Bändern, warmes Klarglas, Bronze, Keil aus dunkelblauem PV-Glas, Sedum, Messing „ISLAND TOWER“, +9…+11 Geschosse auf ≈ 145 m (BLD_2030_MergedTower_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Parkhaus 2030 „Das Holzparkhaus“: helle Lärchenbänder, warmhell beschichteter Beton, Bronzerahmen und -buchstaben, blaues „P“ bleibt, warmweiße LED-Masten, +1 Parkdeck (BLD_2030_ParkingGarage_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Fernsehturm 2030 „Der Bronzekopf“: warmweißer Schaft, Turmkopf in dunkler Bronze mit warmem Klarglas, Sedum-Pavillon, Messing „TV TOWER“, rot-weißer Mast bleibt, +1 Schaftsegment (BLD_2030_TVTower_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Postamt 2030 „Das Solarglas-Postamt“: Granit bleibt, helle Lärchenbänder, dunkelblauer Solarglas-Risalit mit Uhr, Bronzefenster, Sedum-Dach, Messing „POST OFFICE“, +1…+2 Geschosse (BLD_2030_PostOffice_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Schule 2030 „Die Holzband-Schule“: Klinker bleibt, helle Lärchenbänder, Bronzefenster, warmweißer Risalit mit Uhr, Sedum-Dach, Messing „PUBLIC SCHOOL“, 0…+1 Geschoss (BLD_2030_School_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Tankstelle 2030 „Die Ladetankstelle“: Douglasien-Schalung, türkise Ladesäulen und Lichtleiste, Bronzerahmen, Sedum-Dach, „MOTOR SERVICE“/„GAS“ bleiben (BLD_2030_GasStation_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Mehrfamilien-Block 2030 „Der Silberholz-Block“: serielle Sanierung mit silbergrauer Lärche, Bronzefenster und -balkone, Sedum-Dach mit PV und Wärmepumpe, +1…+2 Geschosse (BLD_2030_ApartmentBlock_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Kino 2030 „Der grüne Saal“: Pflanzwand am Saal, Lärchen-Lisenen mit Bronzepaneelen, roter Pylon CINEMA, Sedum-Dach mit PV, +1…+2 Geschosse (BLD_2030_Theater_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Grand Hotel 2030 „Der Gartenturm“: Thermoholz-Lamellen, Pflanztröge in jeder Brüstung, Bronze-Marquee, Messing-Schild, +2 Geschosse (BLD_2030_Hotel_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Feuerwache 2030 „Die dunkle Holzwache“: verkohlte Lärche, rote Kante, warmgrauer Sockel, Sedum-Dach, weiße Buchstaben, +1…+2 Geschosse (BLD_2030_FireStation_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Polizeiwache 2030 „Die grüne Wache“: Lärchenschalung, Recyclingbeton-Faschen, warmgrauer Sockel, Sedum-Dach, blaues Dachband, +1…+2 Geschosse (BLD_2030_Police_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Plaza 2030 „Der Schwammplatz“: durchlässiges Kleinpflaster mit Rasenfugen-Bändern, Bronze-Obelisk mit Lichtspitze, Solar-Stelen, Lärchenbänke, Wildblumen (BLD_2030_Plaza_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Zeitungshaus 2030 „Das Holz-Bänderhaus“: +2…+3 Geschosse (~115 m), helle Eschenholz-Bänder, PV-Mittelstreifen, warmweißes LED-Band, Sedum-Terrassen, rote Trommel und leuchtende Kugel (BLD_2030_Newspaper_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Großbank 2030 „Der Solar-Tresor“: +2…+4 Geschosse (~120 m), helle Terrazzo-Platten, PV-Brüstungen, Sedum-Terrassen und eine Tonne aus PV-Glas mit Bronze-Rippen (BLD_2030_Bank_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "City Hall 2030 „Das grüne Rathaus“: auf vier Lots vertieft (80 × 48 m), +2…+6 Geschosse, Lärche, bepflanzte Brüstungen und Sedum-Dach, Turmschaft 110 m – mit ~205 m höchstes Gebäude der Insel (BLD_2030_CityHall_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Stadtpark 2030 „Der Schwammpark“: durchlässiges Pflaster, Rasenfugen, Wiesenbeete, Regenbecken mit Sprühnebel, Lärchenbänke, Solar-Stelen (BLD_2030_Park_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-06" },
      { title: "Krankenhaus 2030 „Die grüne Klinik“: Lärchenpaneele, Bronzeprofile, Sedum-Gründach, Holzlamellen, +1 Geschoss (BLD_2030_Hospital_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Café 2030 „Holz und Grün“: Lärchenbretter, bepflanzte Grünfelder, Sedum-Gründach, dunkle Bronze, Eichenschilder (BLD_2030_Cafe_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Wohnhaus 2030 „Lärche und Grün“: Lärchen-Holzfassade, Bronzefenster, Blumenkästen und Rankgitter statt Satellitenschüssel, PV bleibt (BLD_2030_Residential_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Kaufhaus 2030 „Grüne Bänder“: Lärchentrog mit Hecke auf jedem Geschoss, warm sandfarbene Keramik, Bronzeprofile, Dachgarten und PV statt Klimageräten, +1 Geschoss (BLD_2030_DepartmentStore_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Bürohochhaus 2030 mit runden Ecken „Heckenbänder und Solarpergola“: Hecke auf jedem Geschoss, warmweiße Keramik, Bronzelinien, Dachgarten mit PV-Pergola, +4 Geschosse (BLD_2030_Skyscraper_02) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Bürohochhaus 2030 „Holzlamellen und Dachgarten“: helle Lärche, Holzlamellen, Pflanzbänder, Dachgarten mit Bäumen und PV, +4 Geschosse (BLD_2030_Skyscraper_01) vom Autopiloten gebaut – zur Prüfung; erste 2030er-Fassung", date: "2026-11-05" },
      { title: "Turm auf zwei Lots 2010 „Gläserne Schräge“: 48 m breite Glasscheibe, silbergraue Pfeiler, blaugrünes Glas, Glaskeil als Krone, 110 m (BLD_2010_MergedTower_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Parkhaus 2010 „Petrol und LED“: petrolfarbene Aluminiumpaneele auf den Brüstungen, hellgrauer Beton, dunkelgraue Decks, weiße Schrift, blaues P, +1 Parkdeck (BLD_2010_ParkingGarage_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Fernsehturm 2010 „Weißer Schaft, dunkler Kopf“: weiß beschichteter Schaft, anthrazitfarbener Kopf mit Klarglas, längerer Digitalmast, +1 Schaftsegment (BLD_2010_TVTower_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Postamt 2010 „Granit und Opalglas“: Granit bleibt, anthrazitfarbene Fenster, Klarglas, weißer Opalglas-Risalit mit Uhr, gelbe Rolltore, +1…+2 Geschosse (BLD_2010_PostOffice_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Schule 2010 „Klinker, Anthrazit und Limette“: Klinker bleibt, anthrazitfarbene Fenster und Sonnenschutz, Klarglas, limettengrüne Brüstungen, 0…+1 Geschoss (BLD_2010_School_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Tankstelle 2010 „Anthrazit und Grün“: anthrazitfarbene Verbundplatten, weiße Blenden mit grüner Lichtleiste, grüne Zapfsäulen, Klarglas, ohne Aufstockung (BLD_2010_GasStation_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Mehrfamilien-Block 2010 „Weiß und Anthrazit“: weißer Putz, dunkelgraue Pfeiler und Sockel, anthrazitfarbene Fenster und Brüstungen, Eichenholz-Tür, +1…+2 Geschosse (BLD_2010_ApartmentBlock_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Kino 2010 „Die schwarze Lichtkiste“: anthrazit-schwarze Front zwischen hellgrauen Lisenen, Klarglas, dunkelgrauer Saal, roter Pylon, +1…+2 Geschosse (BLD_2010_Theater_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Grand Hotel 2010 „Das helle Grandhotel“: helle Steinplatten, Klarglas mit dunklen Brüstungen, anthrazit, Edelstahl-Schild, +3…+8 Geschosse bis ≈ 105 m (BLD_2010_Hotel_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Feuerwache 2010 „Die rote Kante“: hellgrauer Putz, rote Metall-Attika und Turmkappe, anthrazitfarbene Fenster und Sockel, +1…+2 Geschosse (BLD_2010_FireStation_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Polizeiwache 2010 „Die helle Wache“: weißer Putz auf Dämmung, Klarglas, anthrazitfarbener Sockel, blaues Dachband, +1…+2 Geschosse (BLD_2010_Police_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Plaza 2010 „Der helle Bürgerplatz“: hellgraue Platten, Edelstahl-Obelisk mit Lichtspitze, LED-Stelen, Holzbänke, Kiosk mit Zinkdach (BLD_2010_Plaza_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Zeitungshaus 2010 „Das gläserne Nachrichtenhaus“: +3…+8 Geschosse (Standard ≈ 108 m), helle Platten und Klarglas, weiß-blaues LED-Band, klare beleuchtete Glaskugel im roten Ring (BLD_2010_Newspaper_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Großbank 2010 „Der gläserne Tresor“: auf zwei Lots verbreitert (64 m), +3…+7 Geschosse (bis ~113 m, unter der City Hall), helle Platten und Klarglas, Glastonne mit Edelstahl-Rippen (BLD_2010_Bank_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "City Hall 2010 „Das Bürgerforum“: auf zwei Lots verbreitert (80 m), +3…+8 Geschosse, helle Platten und Klarglas, Turmschaft 50 m mit klarer Pyramide und Edelstahl-Spitze (BLD_2010_CityHall_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Stadtpark 2010 „Der helle Platz“: hellgraue Platten, Wasserspiel mit senkrechten Strahlen statt Obelisk, Holzbänke, LED-Stelen (BLD_2010_Park_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Krankenhaus 2010 „Die helle Klinik“: weiße Platten, Klarglas in anthrazitfarbenen Profilen, hellgrauer Stein, grüne Akzente, +1 Geschoss (BLD_2010_Hospital_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Café 2010 „Coffee House“: anthrazitfarbene Paneele, Eichenlamellen, dunkles Zink, warmweißes LED-Licht statt Neon (BLD_2010_Cafe_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Wohnhaus 2010 „Weiß, anthrazit, Solar“: energetisch saniert – weißer Putz, anthrazitfarbene Fenster ohne Sprossen und Pfannen, Photovoltaik auf der hinteren Dachfläche (BLD_2010_Residential_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Kaufhaus 2010 „Glas und Fläche“: helle Keramikplatten statt Granit, Klarglas, anthrazitfarbene Profile, klare Glaskronen, +1 Geschoss (BLD_2010_DepartmentStore_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Bürohochhaus 2010 mit runden Ecken „Glas und Fläche (hell)“: silberweiße Paneel-Bänder, helles Neutralglas, anthrazitfarbenes Vordach, Edelstahl-Eingang und -Schrift, +6 Geschosse (BLD_2010_Skyscraper_02) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Bürohochhaus 2010 „Glas und Fläche“: anthrazitfarbene Platten statt Granit, helles Neutralglas, flaches Oberlicht statt Pyramide, +6 Geschosse (BLD_2010_Skyscraper_01) vom Autopiloten gebaut – zur Prüfung; erste 2010er-Fassung", date: "2026-11-05" },
      { title: "Parkhaus 1990 „Beschichtung und Grün“: hell beschichtete Brüstungsbänder, grüngraue Decks, dunkelgrüne Schrift, +1 Deck (BLD_1990_ParkingGarage_01) vom Autopiloten gebaut – zur Prüfung; damit sind alle 1990er-Fassungen fertig", date: "2026-11-05" },
      { title: "Fernsehturm 1990 „Silber und Signal“: silberner Turmkopf mit blauem Spiegelglas, hellgrauer Schaft, Turm +10 m (BLD_1990_TVTower_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Postamt 1990 in Stein und Glas: hellgraue Granitplatten, blaugrüner Glasrisalit mit Uhr, dunkelblaue Rahmen, +1 Geschoss (BLD_1990_PostOffice_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Schule 1990 in Klinker und Grün: dunkelgrüne Fensterbänder, mintgrüne Brüstungen, weißer Eingangsrisalit mit Uhr, +1 Geschoss (BLD_1990_School_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Tankstelle 1990 mit Shop und Leuchtband: silbergraue Metallplatten, weiße Blenden mit rotem Band, rote Zapfsäulen, zwei Wohngeschosse (BLD_1990_GasStation_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Mehrfamilien-Block 1990 in Dämmung und Pastell: vanillegelber Putz, weiße Kunststofffenster und Balkonbrüstungen, terrakottafarbenes Hochparterre (BLD_1990_ApartmentBlock_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Kino 1990 in Neon und Türkis: türkise Paneele zwischen weißen Lisenen, blaues Spiegelglas, pfirsichfarbener Saal, violetter Pylon (BLD_1990_Theater_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Grand Hotel 1990 in Travertin und Bronzeglas: cremefarbene Lisenen, bronzenes Spiegelglas, grüner Granitsockel, goldene Reklame, +4 Geschosse (BLD_1990_Hotel_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Feuerwache 1990 in Weiß und Rot: weißer Putz, rote Fensterrahmen, Granit um die Tore, anthrazitfarbene Blende (BLD_1990_FireStation_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Polizeiwache 1990 in Klinker und Blau: rotbrauner Klinker, helle Faschen, blaue Fensterrahmen, Granitsockel, blaues Dachband (BLD_1990_Police_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Plaza 1990 als Obelisk-Platz: Granit grau-rosé, anthrazitfarbene Bänder, roter Granit-Obelisk mit Goldspitze, Laternen und Glaspavillon (BLD_1990_Plaza_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Zeitungshaus 1990 als Medien-Globus: hellgrauer Granit, blaues Spiegelglas, LED-Laufschrift, blauer Glasglobus mit rotem Ring (BLD_1990_Newspaper_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Großbank 1990 als Rosen-Granit-Turm: rosa Granit, grünes Spiegelglas, Kupfer-Tonnengewölbe mit Fächerfenster (BLD_1990_Bank_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "City Hall 1990 als Stadtkrone aus Glas und Gold: heller Granit, Spiegelglas, runde Säulen, Uhrturm mit Glaspyramide und goldener Spitze (BLD_1990_CityHall_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Stadtpark 1990 als Granit-Platz: heller Granit, Obelisk-Brunnen mit Wasserbögen, Nostalgie-Laternen, petrolgrüne Bänke (BLD_1990_Park_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Krankenhaus 1990 als Spiegel-Klinik: weiße Paneele, Spiegelglas, Granit-Erdgeschoss, türkise Säulen und Glaspyramide, +1…+2 Geschosse (BLD_1990_Hospital_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Diner 1990 als Neo-Diner: Edelstahl, Glasbausteine, Schachbrett-Sockel, türkise Mansarde mit pinkem Neon (BLD_1990_Cafe_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Wohnhaus 1990 in Apricot-Putz mit Sprossenfenstern, Erker bzw. Wintergarten und Satteldach-Vordach (BLD_1990_Residential_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Kaufhaus 1990 „Galerie“ mit Granitbändern, Spiegelglas, türkisen Profilen und Glaskrone (BLD_1990_DepartmentStore_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Parkhaus 1970 „CITY PARKING“ mit Waschbeton-Bändern, Rampe, Treppenturm mit „P“ und Schranken (BLD_1970_ParkingGarage_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Fernsehturm 1970 „TV TOWER“ mit Sichtbeton-Schaft, verglastem Turmkorb und rot-weißem Mast (BLD_1970_TVTower_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Postamt 1970 mit dunkelbrauner Keramikfassade, Bronzefenstern und weißem Uhr-Risalit (BLD_1970_PostOffice_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Schule 1970 mit Aluminium-Fensterbändern, gelben Brüstungspaneelen und Sonnenschutz-Kästen (BLD_1970_School_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Tankstelle 1970 in braunem Klinker mit Pächterwohnung, Leuchtblende am Tankdach und orangen Kastensäulen (BLD_1970_GasStation_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Mehrfamilien-Block 1970 mit heller Plattenverkleidung, breiten braunen Fenstern und Balkonbändern mit Brüstungsplatten (BLD_1970_ApartmentBlock_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Kino 1970 mit Aluminium-Front, schmalen Fenstern, Leuchttafel und orangem Pylon „CINEMA“ (BLD_1970_Theater_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Grand Hotel 1970 mit Beton-Lisenen, raumbreiten Aluminiumfenstern und oranger Dachreklame (BLD_1970_Hotel_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Feuerwache 1970 in Waschbeton mit breiten Fenstern, roten Toren und rotem Band am Schlauchturm (BLD_1970_FireStation_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Polizeiwache 1970 aus hellen Betonfertigteilen mit Fenster-Rahmen, dunklem Sockel und blauen Laternen (BLD_1970_Police_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Plaza 1970 „Island Plaza“ mit Waschbeton, Edelstahl-Würfelturm, Hochbeeten und orangem Kiosk (BLD_1970_Plaza_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Zeitungshaus 1970 „Daily News“ mit Waschbeton-Bändern, Aluminium-Fensterbändern, orangem Zylinder und Aluminium-Weltkugel (BLD_1970_Newspaper_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Großbank 1970 „Island Trust Bank“ in dunklem Granit mit Bronze-Fensterbändern und Lamellen-Aufbau (BLD_1970_Bank_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "City Hall 1970 in Waschbeton mit Pfeiler-Portikus, höherem Uhrturm, Betonkrone und Antennenmast (BLD_1970_CityHall_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Stadtpark 1970 mit Waschbeton-Belag, Pflanzwürfeln, Betonbrunnen und Kugelleuchten (BLD_1970_Park_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Krankenhaus 1970 mit Waschbeton-Bändern, Bronze-Fensterbändern und Aufstockung (BLD_1970_Hospital_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Diner/Café 1970 in Klinker mit Schindel-Mansarde und Kastenschildern (BLD_1970_Cafe_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Postamt 1950 mit Granit-Risalit, Uhr und Postrampe (BLD_1950_PostOffice_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Schule 1950 mit Uhr-Risalit und Fensterbändern (BLD_1950_School_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Tankstelle 1950 mit Vordach, Zapfsäulen und Schildscheibe GAS (BLD_1950_GasStation_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-05" },
      { title: "Mehrfamilien-Block 1950 mit weißen Balkonen (BLD_1950_ApartmentBlock_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-04" },
      { title: "Kino 1950 mit Zikkurat-Pylon und Marquise (BLD_1950_Theater_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-04" },
      { title: "Grand Hotel 1950 mit Marquise und Dachschild (BLD_1950_Hotel_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-04" },
      { title: "Feuerwache 1950 mit roten Toren und Schlauchturm (BLD_1950_FireStation_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-04" },
      { title: "Polizeiwache 1950 mit blauen Laternen und Funkmast (BLD_1950_Police_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-04" },
      { title: "Stadtplatz 1950 „Island Plaza“ mit Brunnen und Gedenksäule (BLD_1950_Plaza_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-04" },
      { title: "Zeitungshaus 1950 „Daily News“ mit Kupferpyramide und goldener Weltkugel (BLD_1950_Newspaper_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-04" },
      { title: "Großbank 1950 „Island Trust Bank“ mit Säulen-Loggia und Goldkrone (BLD_1950_Bank_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-04" },
      { title: "City Hall 1950 mit Uhrturm (BLD_1950_CityHall_01) vom Autopiloten gebaut – zur Prüfung", date: "2026-11-04" },
      { title: "Tagebuch auf Deutsch und Englisch (Umschalter oben rechts)", date: "2026-11-04" },
      { title: "Menü kommt nach dem Zu-Fuß-Gehen (F) wieder", date: "2026-11-04" },
      { title: "Passanten halten Abstand: Überholen mit Drehen statt Gleiten, 10 Warteplätze je Zebrastreifen-Seite, Gegenrichtung rechts", date: "2026-11-04" },
      { title: "Gebäude glänzen: Rauheit/Metall in allen 175 Materialien, Spiegelglas der 1990er spiegelt (im Play bestätigt)", date: "2026-11-04" },
      { title: "Play-Test bestanden: Hochhaus 1950 → 1970 → 1990 saniert", date: "2026-11-04" },
      { title: "Zentrum startet nur mit 1950ern (inkl. Krankenhaus und Café); Hochhäuser lassen sich zweimal sanieren (1950 → 1970 → 1990, alle Fassungen)", date: "2026-11-04" },
      { title: "1990er-Hochhausfassung mit Glaserker und Eckloggien (BLD_1990_Skyscraper_04) freigegeben und in Unreal importiert", date: "2026-11-04" },
      { title: "Admin-Menü neu: Reiter Build / World / Tools, ausklappbare Karten, Scrollen", date: "2026-11-04" },
      { title: "1990er-Hochhausfassung „Granit-Bilderrahmen“ (BLD_1990_Skyscraper_02) freigegeben und in Unreal importiert", date: "2026-11-04" },
      { title: "Zweite 1990er-Hochhausfassung (runde Ecken, Glasbänder) freigegeben und in Unreal importiert", date: "2026-11-04" },
      { title: "Gras-Bibliothek + Regler im Admin-Menü (außen / Parks)", date: "2026-11-04" },
      { title: "1990er-Hochhaus (Granit, Spiegelglas, Glaspyramide) freigegeben und in Unreal importiert", date: "2026-11-04" },
      { title: "Dame mit Strohhut, Handschuhen und Handtasche im Spiel", date: "2026-11-04" },
      { title: "Neuer Passant: Arbeiter mit Latzhose und Schiebermütze", date: "2026-11-04" },
      { title: "Heller Fleck unter dem Auge der Damen behoben", date: "2026-11-04" },
      { title: "Rock deckt beim Sitzen die Knie (Sitz-Form)", date: "2026-11-04" },
      { title: "Passanten optimiert: 3000 Figuren 29 → 42 FPS", date: "2026-11-04" },
      { title: "Leistungsmessung Passanten (300 / 3000)", date: "2026-11-04" },
      { title: "Startbildschirm mit Logo und START (neue Insel)", date: "2026-11-04" },
      { title: "Pickup Rosenwald Ranger 310 im Verkehr", date: "2026-11-04" },
      { title: "Rosenwald 500 (erfundene Luxus-Limousine) im Verkehr", date: "2026-11-04" },
      { title: "Passanten-Vielfalt: Farben, Stoffmuster, Größen, 6 Figuren", date: "2026-11-04" },
      { title: "1950er-Dame im Spiel (Quinn-Proportionen, Bob, weiblicher Gang)", date: "2026-11-04" },
      { title: "Erstes 1950er-Auto (Limousine) im Verkehr", date: "2026-11-04" },
      { title: "Erste echte Passanten-Figur (1950er-Herr, MakeHuman)", date: "2026-11-04" },
      { title: "Passanten setzen sich auf Parkbänke (mit Hinsetzen/Aufstehen)", date: "2026-11-04" },
      { title: "Parks als Ziele der Passanten", date: "2026-11-04" },
      { title: "Passanten-Verhalten + Stresstest-Knopf (10×)", date: "2026-11-03" },
      { title: "Fußgänger-Netz + 300 Passanten (Platzhalter)", date: "2026-11-03" },
      { title: "Ego-Perspektive zu Fuß (Taste F)", date: "2026-11-03" },
      { title: "Gerüst wächst flüssig statt stufenweise", date: "2026-11-03" },
      { title: "1950er-Krankenhaus in 3 Varianten", date: "2026-11-03" },
      { title: "1970er-Hochhäuser _04 und _05", date: "2026-11-03" }
    ]
  },

  // ---------- Phasen der Zeitleiste ----------
  phases: [
    { id: "p1", title: "Fundament", range: "26.–30.09.", text: "Insel aus der Kartenvorlage, Bezirke, Gebäude-Pipeline." },
    { id: "p2", title: "Lot-System", range: "25.–29.10.", text: "Grundstücke an der Straße, Vorschau, Raster." },
    { id: "p3", title: "Insel aus dem Seed", range: "26.10.–01.11.", text: "Die Insel entsteht zur Laufzeit – Form, Bezirke, Baufelder, Berge." },
    { id: "p4", title: "Die Stadt lebt", range: "01.–03.11.", text: "Straßenbau, Kreuzungen, Ampeln, Verkehr, Wolken, Innenstadt, Parks." },
    { id: "p5", title: "Epochen & Menschen", range: "03.11.", text: "Baustellen 1950 → 1970, neue Gebäude, zu Fuß unterwegs." },
    { id: "p6", title: "Spielkonzept", range: "03.–09.11.", text: "UI, Wirtschaft, Ökosystem – erst denken, dann bauen." },
    { id: "p7", title: "Spielbar", range: "seit 05.11.", text: "Monatstick, Befehle, NPC-Gegner, Multiplayer – das Konzept läuft im Spiel; seit 09.11. Politik, Medien und Wirtschaft mit Agenda, War Room und Roll Call." }
  ],

  // ---------- Meilensteine (neueste zuerst) ----------
  milestones: [
    {
      id: "live-council-portraits", date: "2026-11-11", phase: "p7", title: "Live-Portraets im Stadtrat: Ratsmitglieder atmen, blinzeln, schauen und zeigen ihre Haltung",
      summary: "User: „Yes, build live“ – statt gemalter Figuren echte 3D-Koepfe im Stadtrat-Fenster, im Spiel geprueft und freigegeben.",
      points: ["Zwei Ratsherren der 1950er (ca. 35 und 55 Jahre) aus MakeHuman/Blender mit sechs Gesichtsformen: Neutral, Erfreut, Wuetend, Nervoes, Misstrauisch, Blinzeln.", "Je Portraet eine unsichtbare Kabine im Spiel mit eigener Kamera, warmem Licht und Hintergrund; Ausdruck folgt der Haltung des Ratsmitglieds zum Spieler, Kopf dreht sich gelegentlich, Blinzeln in zufaelligem Takt.", "Kosten gemessen (-game): 9 Portraets live = 0,02 ms je Bild im Game-Thread, ~11 Bilder/s je Portraet; Grafikkarten-Kosten noch nicht gemessen.", "Standard: nur das erste Ratsmitglied live (Konsole hud.LivePortraits 9 = alle); fehlen die Modelle, bleibt die gemalte Figur.", "Offen: kleine Zacken am Haaransatz der juengeren Figur."],
      concepts: [], images: [{src: "img/2026-11-11_live_council_portraits.jpg", cap: "Live-Portraet aus dem Spiel: neutral, wuetend, erfreut (aelteres Modell)"}], commits: [], tags: ["UI", "Politik"]
    },
    {
      id: "belegung-nachfrage", date: "2026-11-11", phase: "p7", title: "Belegung und Nachfrage je Gebaeude (#44, Schritte 1-6)",
      summary: "Tester-Ticket #44: alle Gebaeude liefen voll, egal wie viele Leute in der Naehe wohnten. Umgesetzt nach dem Konzept „Belegung und Nachfrage“, Schritt fuer Schritt mit OK des Users.",
      points: ["1: Infofenster zeigen den echten Umsatz des letzten Monats und warum (Personal, Kundschaft, Strom, Werbung).", "2: jedes Gebaeude hat eine eigene Belegung; Neubauten starten bei 15 % und fuellen sich ueber Monate.", "3: Wohnhaeuser fuellen sich nach Lage (Jobs in Pendelreichweite, Park, Rauch); auf die Insel ziehen nur so viele, wie es Arbeit gibt.", "4: Pendler statt Bezirksquote - jedes Haus schickt seine Arbeitskraefte zu Jobs bis ~3 km, Besetzung je Betrieb, Arbeitslose zaehlen im Wohnbezirk.", "5: gleichartige Betriebe teilen sich ihren Markt (Kino-Besucher, Zeitungsleser, Buerobedarf, ein Industrie-Absatzmarkt) - Ueberbau senkt den Erloes.", "6: Messbefehl shady.Balance + zwei Laeufe 1950-66: Maerkte auf die echte Inselgroesse verkleinert, Miete 80 -> 95 $; danach verliert keine Gebaeudeart mehr Geld (ausser Kohlekraftwerk wie bisher).", "Offen: NPC-Bezirkskassen rutschen ab ~1960 tief ins Minus (eigenes Thema)."],
      concepts: ["belegung"], images: [], commits: [], tags: ["Wirtschaft"]
    },
    {
      id: "ring-tip-wedge", date: "2026-11-11", phase: "p7", title: "Ring-Spitze: kein heller Keil mehr ausserhalb der Ringstrasse",
      summary: "User („Yes, fix it“): an der West-Spitze des Rings (Seed 2147483647) lag ein ~10-m-Dreieck heller Platten im Gruenen.",
      points: ["Diagnose: Gehweg-Stuecke, Eckdreiecke und das Strassen-Backen waren es nicht; die Ursache lag im Inselraster - 30-m-Zellen mit lauter Zentrums-Ecken wurden ganz als Beton gezeichnet und ragten ueber die Ringkurve.", "Jetzt misst die Inselflaeche die echte Ringstrasse je Winkel: Beton endet hoechstens 3 m innerhalb der Ringmitte, Dreiecke nahe dem Ring werden dort zugeschnitten, aussen Gelaende in der Farbe des Nachbarlands.", "Nur Darstellung: Bezirke und Inselform unveraendert (Grenzpruefung weiter 6 offene Enden am Zentrum).", "Rest: an der Stelle ein leicht dunklerer Grasfleck - der User schaut ihn sich an."],
      concepts: [], images: [], commits: [], tags: ["Stadtbild"]
    },
    {
      id: "session-structure-11-11", date: "2026-11-11", phase: "p7", title: "Arbeitsstand gesichert: Uebergaben aller Sessions, neue Main + drei Kanban-Sessions",
      summary: "Auftrag des Users 11.11.: alle offenen Sessions der Gruppe abschliessen, alles in die MD-Dateien uebernehmen, dann frisch mit Main und Kanban #1-#3 weiter.",
      points: ["Jede der 12 Sessions schrieb ihren Stand nach (Erledigtes, Offenes, Testrezepte, Vorschlaege).", "Main uebernahm daraus (Ring-Ecken, Platzpruefung/Hoefe, Zahnrad-Fenster, Steuern, Strom, Medienmacht, Session-Struktur) und (offene Play-Tests, Ringspitze, EOS-Test u. a.).", "Struktur bleibt: Main orchestriert, vergibt EDITOR-/GAME-Slots und baut/veroeffentlicht Patches nur nach Rueckfrage; Kanban #1-#3 arbeiten Tickets vom Board ab und melden „ready for patch“.", "Naechster Patch bereit (,), wartet auf den Zahnrad-Test des Users."],
      concepts: [], images: [], commits: [], tags: ["Doku"]
    },
    {
      id: "hud-gear-popup", date: "2026-11-10", phase: "p7", title: "Zahnrad-Fenster: neben der Minikarte, Taste G, Esc und x",
      summary: "Play-Test des Users: das Fenster „Panels and layout“ lag ueber dem Zahnrad und liess sich nicht mehr schliessen.",
      points: ["Oeffnet links neben dem Minikarten-Rahmen (unten buendig), ohne Platz darueber, immer ganz auf dem Bildschirm und nie ueber Zahnrad oder Gluehbirne.", "Taste G oeffnet und schliesst, Esc schliesst, x oben rechts; Tooltip „Panels and layout (G)“.", "Im Anordnen-Modus folgt es dem verschobenen Minikarten-Rahmen.", "Play-Test des Users steht aus."],
      concepts: [], images: [], commits: [], tags: ["UI"]
    },
    {
      id: "city-ring-corners", date: "2026-11-10", phase: "p7", title: "Innenstadt: keine weissen Plattenflaechen mehr an den Ring-Ecken; Pinsel-Parks wachsen weiter",
      summary: "User mit Screenshot (Seed 2147483647): „so viel weisse Flaeche“ in der Stadt, zwischen den Haeusern und an der Ring-Spitze.",
      points: ["Ursache: Bloecke an Ring-Ecken verlieren seit #11 ihre Avenue, galten aber weiter als innere Bloecke – keine Haeuser, kein Park, nur Hinterhoefe auf nacktem Plattenbelag.", "Jetzt zaehlen solche Bloecke als aussen und werden Gruen bzw. Park; die Park-Suche deckt den ganzen Ring ab (die Spitze eines schiefen Rings wurde nie abgesucht).", "Im Spiel geprueft: 18 Parks mit 9,5 ha statt 6,7 ha.", "Pinsel-Parks und -Plaetze (#35): weitermalen an einer vorhandenen Flaeche vergroessert sie statt eine neue anzulegen, buendig am Gehweg.", "Offen: ein kleines Gehweg-Dreieck ausserhalb der Ring-Spitze (Ursache eingegrenzt, steht im BACKLOG)."],
      concepts: [], images: [], commits: [], tags: ["Stadtbild"]
    },
    {
      id: "sites-no-overlap", date: "2026-11-10", phase: "p7", title: "Baustellen ueberlappen nicht mehr; Hoefe passen in den freien Platz",
      summary: "Tester-Feedback #37 und #39: zwei Gebaeude landeten ineinander, Kran und Zaun standen im Nachbargrundstueck.",
      points: ["Der Server prueft jede Platzierung gegen alle Gebaeude-Datensaetze, auch gegen solche aus demselben Bild, die noch nicht stehen, sowie gegen Full-island-Bloecke und Pinsel-Flaechen.", "Strassen pruefen die echten Gebaeude-Grundrisse (auch Gebaeude ohne Lot-Actor).", "Der Baustellen-Hof misst den freien Platz hinter dem Haus: ab 9 m voller Hof mit Kran, 2,5-9 m nur Zaun, sonst kein Hof; er darf auf freies Land ueber das eigene Lot hinaus.", "Testhilfe: Log der Lot- und Hof-Positionen. Offen: Fall Ruecken an Ruecken im Play."],
      concepts: [], images: [], commits: [], tags: ["Spiel"]
    },
    {
      id: "power-grid-media-power", date: "2026-11-10", phase: "p7", title: "Strom als Inselnetz, Medienmacht, Grundsteuer im Admin-Menue; Update 0.1.305",
      summary: "Tester-Feedback #33 und #38: Kraftwerke verdienten nichts an fremden Bezirken, Zeitungen und Sender hatten keine Wirkung auf Kampagnen.",
      points: ["Strom: Vertraege, eigene Kraftwerke, Ueberschuss anderer Bezirke, dann Stadtstrom; jedes gelieferte MW zahlt dem Kraftwerksbesitzer 1000 $ x Epoche, der Rest geht in den Export. Leere Kasse = Blackout.", "Medienmacht: jede eigene Zeitung und jeder TV-Turm erhoeht die Reichweite (bis x2) und halbiert die Kosten eigener Kanaele.", "Grundsteuer fuer Gewerbe im Admin-Menue einstellbar (F10 > Lots, 0-1 % je Monat), damit wir die Balance selbst ausprobieren.", "Alles zusammen mit Strassen-Erlaubnis, Steuern und HUD-Umbau als Update 0.1.305 veroeffentlicht."],
      concepts: [], images: [], commits: [], tags: ["Wirtschaft", "Medien"]
    },
    {
      id: "hud-topbar-agenda-dots", date: "2026-11-10", phase: "p7", title: "HUD aufgeraeumt: Agenda ganz oben als Symbol-Punkte, Zahnrad nutzbar, weniger Knoepfe",
      summary: "Wuensche aus dem Play-Test: die Regler im Zahnrad liessen sich nicht bedienen, Zahnrad und Fenster lagen uebereinander, das Agenda-Band war zu breit und die Punkte schwer zu treffen, unten rechts gab es zu viele Schnellknoepfe.",
      points: ["Zahnrad: liegt jetzt ueber Info- und Hauptfenster, es ist immer nur eins offen, und beim Ziehen eines Reglers zeigt eine Vorschau die Wirkung.", "Hauptfenster im Anordnen-Modus verschieb- und skalierbar, mit eigener Schriftgroesse.", "Agenda-Band ganz oben ueber den Karten, nur noch 40 px hoch. Termine sind grosse runde Punkte mit Symbol (Buch = Abstimmung, Haken = Wahl, Leute = Arbeitsmarkt, Geld = neues Jahr...), ohne Text – der Titel steht im Tooltip, ein Klick oeffnet das Infofenster in halber Hoehe. Goldring = eigener Einsatz.", "FPS-Anzeige und \"My bets\"-Hinweise im Zahnrad ein- und ausschaltbar und verschiebbar.", "Panel \"District performance\" entfaellt, die Ringe stehen in der aufgeklappten Bezirkskarte.", "Schnellknopf-Reihe weg: nur Gluehbirne (How to play) und Zahnrad, klein in der Minikarte; Bauen, Strassen und Anhoerungen gehen ueber das Radialmenue, Overlay per O.", "Steuerregler im schraegen Infofenster: mit gehaltener Taste ziehen, Mausrad = eine Stufe."],
      concepts: [], images: [], commits: [], tags: ["UI"]
    },
    {
      id: "taxes-budget-proptax", date: "2026-11-10", phase: "p7", title: "Steuern und Haushalt: Grundsteuer auf jedes Gebaeude, vollstaendige Monate, Regler zum Ziehen",
      summary: "Tester-Feedback #34 und #36: Gewerbe zeigte keine Steuer, die Gewerbesteuer war viel zu niedrig, der Haushalt zeigte -0, pauschale Stadtprogramme und unerklaerte Abbuchungen. Dazu der Wunsch des Users: alle Gebaeude zahlen Grundsteuer, und der Steuerregler soll sich ziehen lassen.",
      points: ["Gewerbesteuer auf den Gewinn, je nach Ratsstufe 10-25 / 15-30 / 20-40 % (Standard 22,5 %), bleibt ganz im Bezirk – etwa 1,9 x so viel wie vorher.", "Grundsteuer auf jedes Gebaeude: Gewerbe, Buero, Industrie, Freizeit und Medien zahlen monatlich 0,25 % des Baupreises x Bodenwert x Bezirkssatz (der Besitzer, auch ohne Gewinn); Wohnhaeuser zeigen ihren Anteil an der Grundsteuer der Bewohner; oeffentliche Gebaeude, Dienste, Parks und Plaetze sind befreit (vom User bestaetigt).", "Infofenster je Gebaeude: Umsatz, Unterhalt, Gewerbe- und Grundsteuer des letzten Monats und der Gewinn nach Steuern.", "Haushalt: vollstaendige Monate (nichts verschwindet mehr zwischen zwei Monatswechseln), jede Kassenbewegung hat eine eigene Zeile, Stadtprogramme nennen jedes Gesetz, kein -0 mehr.", "Mehrspieler: 19 Werte kamen nie bei den Mitspielern an (u. a. Haushaltssummen, Steuern je Gebaeude, TV-Tuerme, Nein-Stimmen), weil Unreal bei mehreren Feldern in einer Zeile nur das erste uebertraegt.", "Steuerregler: grosse Klickzonen ohne Luecken, ziehen und Mausrad = eine Stufe.", "Geprueft mit Host + Client: Fabrik zahlt 22,5 % Gewerbesteuer, Grundsteuer je Gebaeude stimmt mit den Haushaltszeilen ueberein. Offen: ob 0,25 % am Spielanfang zu hoch ist (Fabrik in leerem Bezirk zahlt fast ihren ganzen Gewinn)."],
      concepts: [], images: [], commits: [], tags: ["Wirtschaft", "Multiplayer", "UI"]
    },
    {
      id: "main-window-council", date: "2026-11-10", phase: "p7", title: "Hauptfenster + Stadtrat als Sitzungstisch; Infofenster einstellbar",
      summary: "Neben dem kleinen Infofenster gibt es jetzt ein grosses Hauptfenster fuer grafische Ansichten: vom aeussersten Ring des Radialmenues bis vor die Minimap, unter dem Agenda-Band. Erstes Thema ist der Stadtrat: neun Figuren am Sitzungstisch mit Namensschildern statt einer Liste.",
      points: ["Stadtrat (Politics > Council): Buergermeister mit Amtskette am Kopfende, die zwei Insel-Sitze daneben, je drei Bezirkssitze an den Seiten. Anzug nach Haltung, Krawatte in der Spielerfarbe, eigener Sitz golden.", "Namensschild je Person: Name, Rolle, Haltung und die Knoepfe Lobby / Read / Envelope; graue Knoepfe zeigen den Grund. In der Tischmitte: 5 von 9 Stimmen und die Lager.", "Esc oder Close schliesst; Klicks auf das Fenster gehen nicht in die Welt. Spaeter kommen weitere Themen ins Hauptfenster.", "Infofenster: unter Zahnrad > Panels and layout lassen sich Groesse und Schrift fuer die schraege (3D) und die flache (2D) Ansicht getrennt einstellen. Die Fensterbreite bleibt, der Text wird groesser und bricht neu um. Die flache Ansicht klappt an Ort und Stelle auf."],
      concepts: [], images: [], commits: [], tags: ["UI", "Politik"]
    },
    {
      id: "road-permits-undo", date: "2026-11-10", phase: "p7", title: "Strassen: Erlaubnis fuer fremde Bezirke, Rechtsklick nimmt zurueck",
      summary: "Drei Wuensche aus dem Play-Test: ein Computerspieler hatte eine Strasse in den Bezirk des Users gebaut, eine Schleife vom Zentrumsring zurueck zum selben Punkt wurde ein loser Kreis, und Rechtsklick brach den ganzen Strassenbau ab.",
      points: ["Fremder Bezirk: Strassen dorthin gehen nur als Anfrage. Ein Computer-Besitzer entscheidet sofort, ein Mensch bekommt eine Karte mit Allow / Decline. Erlaubt sind hoechstens 10 m auf seinem Land (ueber Wasser per Bruecke weiter), ab dort baut der Besitzer selbst weiter.", "Rechtsklick im Strassenbau nimmt das letzte Stueck zurueck, die Kosten kommen voll zurueck, und es geht am vorigen Ankerpunkt weiter. Esc beendet den Strassenbau.", "Schleife am Ring: die Strasse bleibt offen und an beiden Enden am Ring angeschlossen, statt sich zu einem losen Kreis zu schliessen.", "Computer-Gegner bauen nicht mehr in fremde Bezirke; der T-Anschluss an eine fremde Spielerstrasse braucht jetzt auch eine Erlaubnis."],
      concepts: [], images: [], commits: [], tags: ["Strassen", "Multiplayer"]
    },
    {
      id: "road-border-exact", date: "2026-11-10", phase: "p7", title: "Strassen: Pruefung genau an der Feldgrenze",
      summary: "User im Play: mit kurzen, aneinandergehaengten Strassenstuecken liess sich bis in gesperrte Felder (sogar quer ueber die Karte) und ins Wasser bauen – die Strasse kippte dann ins Meer. Nur lange Strassen wurden abgelehnt. Ursache: 45 m um jeden Anschluss wurden Feld- und Landpruefung uebersprungen, ein Ueberbleibsel aus dem ungenauen 30-m-Raster.",
      points: ["Frei ist nur noch der Strassenraum der angeschlossenen Strasse (halbe Breite + 2 m Gehweg). Alles andere wird mit den exakten Feldern je 1 m auf der Mittellinie und beiden Raendern geprueft – unabhaengig von der Laenge.", "Eine Strasse darf bis an die Grenze reichen; sobald ihr Strassenraum ein gesperrtes oder fremdes Feld beruehrt, ist sie ungueltig.", "Ein offenes Ende im Wasser wird abgelehnt (Bruecken muessen auf beiden Ufern an Land enden) – jetzt auch auf dem Server, nicht nur in der Vorschau.", "Gilt fuer Spieler, Computer-Gegner und Server gleich; Admin-Strassen bleiben frei (nur physische Regeln)."],
      concepts: [], images: [], commits: [], tags: ["Strassen"]
    },
    {
      id: "speed-every-player", date: "2026-11-10", phase: "p7", title: "Mehrspieler: jeder Spieler stellt das Tempo",
      summary: "Bisher durfte nur der Host das Spieltempo aendern; bei Mitspielern taten die Knoepfe II > >> >>> auf der Uhr-Karte nichts. Jetzt darf jeder Spieler pausieren oder das Tempo stellen. Der zuletzt beim Server angekommene Befehl gilt, alle sehen eine Meldung wie \"Anna set speed to >>\" oder \"Anna paused the game\".",
      points: ["Server-Einstellung shady.SpeedControl: 0 = alle Spieler (Standard), 1 = nur Host - vorbereitet fuer ein spaeteres Optionsmenue.", "Meldung nur, wenn mehr als ein Mensch im Spiel ist; im Log steht jede Aenderung als \"Speed:...\".", "Unveraendert: Solo-Host pausiert bei der Titelseite automatisch, Baustellen stehen bei Pause still."],
      concepts: [], images: [], commits: [], tags: ["Multiplayer"]
    },
    {
      id: "infowindow-flat", date: "2026-11-10", phase: "p7", title: "Infofenster: Klick dreht es flach zum Lesen",
      summary: "Die schraege 3D-Ansicht der Infofenster (nach dem Referenzbild) bleibt der Standard. Neu: ein Klick auf das Fenster (nicht auf einen Knopf) dreht es in 0,3 s weich nach vorn, flach und 1,4 x groesser in die Bildmitte, damit es sich gut lesen laesst; ein zweiter Klick dreht es zurueck.",
      points: ["Gilt fuer alle schraegen Fenster: Themen-Fenster (Budget, Gesetze,...), Gebaeude- und Feld-Info, Bau-Infofenster.", "Animiert werden die Kamerawerte selbst (Drehung, Neigung, Augversatz gegen 0, Massstab und Lage zum Ziel) - jede Zwischenstellung bleibt exakt umkehrbar, Knoepfe und Mausrad-Scrollen treffen auch waehrend der Drehung richtig.", "Flach wird der Inhalt in der groesseren Aufloesung gezeichnet (scharf); auf den Bildschirm begrenzt. Strg + Mausrad, Schliessen, Esc und Scrollen bleiben gleich.", "Knoepfe, Regler, Haken und Bildlaufleisten (auch graue Knoepfe) schalten nicht um; ein Doppelklick schaltet nur einmal. Klicks auf das flache Fenster erreichen die Welt nicht.", "Nichts wird gespeichert: geschlossen und wieder geoeffnet ist das Fenster wieder schraeg. Test ohne Maus: Konsole hud.FlatCard 1 / 0."],
      concepts: [], images: [{ src: "img/2026-11-10_infowindow_tilted.jpg", cap: "Vorher: schraeg (Standard)" }, { src: "img/2026-11-10_infowindow_transition.jpg", cap: "Waehrend der Drehung" }, { src: "img/2026-11-10_infowindow_flat.jpg", cap: "Nachher: flach, gross, scharf" }],
      compare: { before: "2026-11-10_infowindow_tilted.jpg", after: "2026-11-10_infowindow_flat.jpg", cap: "Klick auf das Fenster: schraeg -> flach zum Lesen" },
      commits: [], tags: ["UI"]
    },
    {
      id: "waterfront-1950-assets", date: "2026-11-10", phase: "p7", title: "Fuenf Gebaeudearten am Wasser, je drei Formvarianten (#32)",
      summary: "Alle fuenf Waterfront-Familien aus dem Konzept sind als 1950er-Gebaeude fertig: Bootshaus, Strandvilla, Strandbad, Fischereihafen und Frachtkai, jede mit drei klar verschiedenen Formvarianten (A/B/C). Gebaeude stehen auf dem normalen Lot, Steg/Mole/Kai, Boote und Schiffe sind eigene Wasser-Module, die das Spiel auf die Wasserhoehe des jeweiligen Ufers setzt.",
      points: ["Gemeinsamer Baukasten fuer alle Wasser-Familien (wf_spec/wf_kit/wf_nanite/wf_validate): gleiche Koordinaten (Wasser-Module ab der Uferlinie hinter der Lotmitte), 4-m-Stegstueck fuer die Sandbank, gleiche Pruefungen (Pfaehle 6 m unter Wasser, Boote schwimmen, Lot passt, voller Material-Vertrag).", "Bootshaus: Clubhaus, Bootsverleih, Bootswerft – mit Steg, Ruder- und Motorbooten. Strandvilla: Flachdach-Bungalow, weisser Kubus, Haus auf Stelzen – mit Privatsteg und Boot.", "Strandbad (oeffentlich): Rotunde mit Kabinenfluegeln, Kiosk mit Kabinenreihe, Strandcafe mit Dachterrasse; Badesteg, Sprungturm, Badeinsel, Bojenkette, dazu Strandkorb, Schirm, Rettungsturm, Fahnenmast als eigene Teile fuer den Sand.", "Fischereihafen (nur Meer): Fischhalle mit Dachlaterne und Steinmole, Raeucherei mit drei Schornsteinen und Netzschuppen, Fischer-Genossenschaft mit Turm und ummauertem Hafenbecken; Kutter als eigene Meshes.", "Frachtkai (Meer, Steilkueste): Lagerschuppen mit Sheddach, Kohlesilos mit Foerderband und Bunkern, vierstoeckiges Backstein-Lagerhaus mit Wandkranen; Granit-Kaimauer mit Gleisen, Portalkraene und ein Kuestenfrachter. Grundlage der Handelsstufe Hafen.", "Validierung 185–213 Pruefungen je Familie, alle bestanden. Noch offen: Import nach Unreal, dann die Spielregeln (Waterfront-Lots, Bonus, Ufer-Pflicht je Gebaeudeart)."],
      concepts: ["waterfront"], images: [{ src: "img/2026-11-10_waterfront_boathouse.jpg", cap: "Bootshaus A/B/C" }, { src: "img/2026-11-10_waterfront_beachvilla.jpg", cap: "Strandvilla A/B/C" }, { src: "img/2026-11-10_waterfront_lido.jpg", cap: "Strandbad A/B/C" }, { src: "img/2026-11-10_waterfront_fishingharbor.jpg", cap: "Fischereihafen A/B/C" }, { src: "img/2026-11-10_waterfront_cargoquay.jpg", cap: "Frachtkai A/B/C" }],
      commits: [], tags: ["Gebäude"]
    },
    {
      id: "build-price-one", date: "2026-11-10", phase: "p7", title: "Angezeigter Baupreis = abgebuchter Preis",
      summary: "User im Play: Krankenhaus zeigte 250 k$ (gruen, Platzierung OK), die Stadtkasse hatte 257 k$, beim Klick kam „Not enough treasury money: 260 k$ needed“. Ursache: Anzeigen rechneten nur Grundpreis x Epoche, der Server zusaetzlich den Baukosten-Faktor (Gesetze, Ereignisse, Handel, Baustoff-Vertraege; 1950 mit LKW-Handel schon x1,09).",
      points: ["Eine Funktion fuer alles: BuildPrice (Bauen), RenovatePrice (Sanieren), AreaPrice (Pinsel-Park/-Platz). Radialmenue, Bau-Infofenster, Katalog, Sanieren-Knoepfe, Computer-Gegner und Server nutzen nur noch diese.", "Baustoff-Vertraege zaehlen jetzt aus der Vertragsliste, die jeder Rechner hat - vorher kannte nur der Host den Rabatt, Mitspieler sahen einen anderen Preis.", "Das Gesetz „Industrie baut 20 % billiger“ wirkte bisher nirgends - jetzt im Preis.", "Reicht das Konto nicht, zeigt das Bau-Infofenster unten rot „NO“ mit Kontostand und Bedarf statt eines gruenen OK.", "Test ohne Maus: shady.PriceTest setzt das zahlende Konto knapp ueber/unter den Preis und baut."],
      concepts: [], images: [], commits: [], tags: ["Spiel", "Wirtschaft", "UI"]
    },
    {
      id: "border-lake", date: "2026-11-10", phase: "p7", title: "Gemeinsamer See auf der Bezirksgrenze, sanfter Abhang unter Wasser (#32)",
      summary: "Jede Insel bekommt jetzt einen runden See genau auf der Grenze zweier Nachbarbezirke - zwei Spieler teilen sich ein Ufer (Wunsch aus dem Tester-Forum). Ausserdem brach der Strand unter Wasser hart ab; jetzt laeuft er in einen tieferen Abhang aus und verschwindet allmaehlich im Blau.",
      points: ["Grenzsee: rund, ~270 m Durchmesser, auf der Mittellinie zwischen den Rueckgraten zweier Nachbararme (gegenueber dem Grenzfoerde, nie neben Foerde oder Gabel), so nah am Ring wie die Schutzzone erlaubt; ringsum ein Landstreifen. Ohne zusaetzlichen Zufallszug, C++ und Python-Prototyp gleich.", "Bezirke bleiben gleich gross (alle 104 ha, geprueft mit 6 Seeds), offene Grenzenden weiter genau 6.", "Abhang unter Wasser (User: harte Kante, wo der Strand aufhoert): die Uferboeschung endete 2 m unter Wasser an einer 20-m-Wand. Jetzt folgt ein zweites, steileres Stueck bis ~22 m (Meer) bzw. ~12 m (Seen), die Tiefe waechst stetig.", "Noch offen in #32: besondere Grundstuecke am Wasser (Strand, Bootshafen, Fischerei, Villen am Strand, kleine Frachtterminals)."],
      concepts: ["wasser"], images: [{ src: "img/2026-11-10_border_lake.jpg", cap: "Seed 641163: See auf der Grenze von Bezirk 3 und 4 - Feld 4-4 und 3-3 reichen beide ans Ufer" }, { src: "img/2026-11-10_border_lake_seeds.jpg", cap: "Prototyp: sechs Seeds, je ein See auf einer Bezirksgrenze" }], commits: [], tags: ["Insel"]
    },
    {
      id: "beach-sand-swash", date: "2026-11-10", phase: "p7", title: "Sandstraende und Brandung an Meer und Seen (#32)",
      summary: "Die flachen Uferboeschungen waren Gras bzw. Fels. Jetzt liegt dort goldener Sand (Wunsch des Users: waermer als die erste graue Fassung), steile Kuesten bleiben Fels. Dazu schwappen Wellen an den Strand und laufen zurueck.",
      points: ["Sand: die Uferboeschungen (Meer 25 m, Seen 10 m) tragen eine Sand-Kennung in der Vertex-Farbe; M_IslandTerrain v11 macht daraus Sand mit Flecken und Korn, unten nasser und dunkler. Steilheit und Hoehe machen weiter Fels/Schnee.", "Zwei Stolpersteine: die Boeschung war zweiseitig, sichtbar war die Rueckseite mit Normale nach unten (erst Fels, dann schwarz) - jetzt eine Flaeche, nach oben gewunden.", "Brandung (User: Bewegung zumindest am Strand): im Wasser-Material laeuft eine Schaumfront schnell bis an die Wasserlinie und langsam zurueck, zwei Wellenzuege (7 s, 9,7 s), je Strandabschnitt versetzt, dahinter duenner Schaumfilm. Wellen und Schaum auf dem Meer laufen doppelt so schnell (wirkte vorher still).", "Kosten: nur Rechenarbeit im vorhandenen Wasser-Pass - gemessen 0,50 ms (vorher 0,68 ms in einer Ansicht mit mehr Wasser), also nicht messbar mehr. Echte Wellengeometrie waere deutlich teurer und lohnt erst fuer Boote.", "Bruecken ueber Seen baut die Park/Platz-Session (eigener Eintrag)."],
      concepts: ["wasser"], images: [{ src: "img/2026-11-10_beach_sand_coast.jpg", cap: "Ostkueste: goldener Strand, Schaum, tuerkises Flachwasser" }, { src: "img/2026-11-10_beach_sand_lake.jpg", cap: "See mit Sandufer" }, { src: "img/2026-11-10_beach_swash.jpg", cap: "Brandung: dieselbe Stelle in vier Bildern im Abstand von 1,5 s - die Schaumfront wandert" }], commits: [], tags: ["Insel", "Grafik"]
    },
    {
      id: "admin-roads-anywhere", date: "2026-11-10", phase: "p7", title: "Admin-Strassen ueberall",
      summary: "User: Im Admin-Modus soll der Admin Strassen ueberall bauen koennen, auch in fremden Bezirken.",
      points: ["Admin-Menue (F10) > Roads: jeder Bezirk, auch noch gesperrte Felder, ohne Anschluss ans Strassennetz.", "Physische Regeln bleiben: kein Wasser, Berg oder Zentrum, nicht durch Lots, Kurvenradius und Winkel.", "Im laufenden Spiel geht die Strasse ueber den Server: nur der Host, kostenlos, alle Mitspieler sehen sie, sie steht im Spielstand (vorher nur lokal und nicht gespeichert).", "Test ohne Maus: normale Strasse in Bezirk 4 abgelehnt, Admin-Strasse gebaut (200 m, Kasse unveraendert)."],
      concepts: [], images: [{ src: "img/2026-11-10_admin_road.jpg", cap: "Admin-Strasse auf dem gesperrten Feld 4-9 eines fremden Bezirks" }], commits: [], tags: ["Strassen", "Admin"]
    },
    {
      id: "bridges", date: "2026-11-10", phase: "p7", title: "Bogenbruecken, wo Strassen Wasser queren (#32)",
      summary: "Eine Strasse ueber einen See lag bisher flach auf Uferhoehe ueber dem Wasser. Jetzt wird sie dort automatisch zur Bogenbruecke: die Strasse hebt sich in einem flachen Buckel, darunter Steinboegen mit Stuetzen und Streben.",
      points: ["Erkennung entlang jeder Spieler-/NPC-Strasse: Gelaende unter dem Wasserspiegel = Bruecke, Widerlager am ersten trockenen Ufer; Buckel 2,2–5 m je nach Laenge, sanfte Rampen an beiden Ufern.", "Aufbau: Fahrbahnplatte mit Randbalken und Gesims, Eisengelaender, Kopfpfeiler an den vier Enden, Widerlager, Boegen um 16 m mit drei Rippen, Stuetzen alle 2,2 m, Querbalken und X-Streben, Pfeiler mit Wellenbrechern.", "Alles aus Spline + Gelaende berechnet, also auf jedem Rechner gleich (Mehrspieler).", "Test im Spiel (-game): drei Querungen der Insel 641163 per shady.BridgeAuto, je 110–115 m, 7 Boegen, Strasse 5 m ueber dem Ufer."],
      concepts: ["wasser"], images: [{ src: "img/2026-11-10_bridge_arches.jpg", cap: "Bogenbruecke ueber eine Bucht (Test-Strasse per shady.BridgeAuto)" }], commits: [], tags: ["Strassen", "Insel"]
    },
    {
      id: "water-slw", date: "2026-11-10", phase: "p7", title: "Echtes Wasser: Meer und Seen mit Tiefenfarbe, Wellen und Ufer-Schaum (#32)",
      summary: "Das Meer war eine flache, nah fast schwarze Flaeche 15 m unter dem Land hinter einer 20-m-Klippe. Nach einer Recherche (Water-Plugin, Fab, eigenes Material –) hat der User das eigene Material freigegeben: Meer und Seen sind jetzt klar-tuerkis im Flachen, tiefblau draussen, mit kleinen Wellen und Schaum am Ufer.",
      points: ["Eigenes Single-Layer-Water-Material (kein Plugin, keine Fremd-Assets): Farbe aus Absorption/Streuung nach Wassertiefe, drei Wellenlagen in verschiedenen Winkeln und Groessen (14 m, 6 m, 55 m Duenung), Schaum aus dem Abstand zum Boden hinter der Wasserflaeche. Meer (MI_Sea) lebhaft-tuerkis, Seen (MI_Lake) gruener und ruhiger.", "Wellen- und Schaumtextur selbst erzeugt (Python, nahtlos). Erste Fassung zeigte aus mittlerer Entfernung ein Gitter – alle Lagen hatten dieselbe Richtung; jetzt je Lage ein eigener Winkel und Abschwaechung ab 60 m.", "Kueste: statt der 20-m-Klippe faellt eine 25 m breite Uferzone 4,5 m ab, das Meer liegt 2,5 m unter der Insel-Ebene – die Uferzone scheint als flaches Wasser durch. Die Level-Flaeche SM_Water wird zur Laufzeit ausgeblendet.", "Kosten (ProfileGPU, Kuestenblick, Meer auf halbem Editorbild): 0,68 ms GPU fuer den Wasser-Pass. Offene Bezirksgrenzen weiter 6.", "Noch offen in #32: Sand an flachen Kuesten (Fels an steilen), automatische Bogenbruecken, wo Strassen Seen queren."],
      concepts: ["wasser"], images: [{ src: "img/2026-11-10_water_coast.jpg", cap: "Ostkueste: tuerkis im Flachen, Schaumsaum, tiefblau draussen" }, { src: "img/2026-11-10_water_lake.jpg", cap: "Lagunen-See: gruener und ruhiger als das Meer" }, { src: "img/2026-11-10_water_overview.jpg", cap: "Ueberblick: das Meer umgibt die ganze Insel" }], commits: [], tags: ["Insel", "Grafik"]
    },
    {
      id: "info-window-scroll", date: "2026-11-10", phase: "p7", title: "Infofenster: Mausrad scrollt, alle gleich gross, Public gruen",
      summary: "User-Wuensche vor dem naechsten Patch: in keinem Fenster liess sich scrollen, kurze Fenster wirkten viel groesser als lange, Public und Statistics hatten fast dasselbe Blau.",
      points: ["Ursache Scrollen: im Spiel erreicht das Mausrad die HUD-Widgets nicht ueber den Slate-Hit-Test (wie bei den Klicks in #12) - das HUD reicht es jetzt selbst an das Fenster unter der Maus weiter.", "Lange Fenster wurden bisher als Ganzes verkleinert (Fit) und ragten trotzdem ueber den Rand; jetzt bleibt die Groesse, die Liste darin scrollt.", "Ein fester Grundmassstab (0,65 x Zoom) fuer alle Infofenster = Groesse des bisherigen Wahlen-Fensters; Strg + Mausrad bleibt.", "Public im Radialmenue (und oeffentliche Gebaeude in den Bau-Ringen) gruen statt blau.", "Parallel: Minikarte mit echter Inselform + Sprung (Session #3), Wasser-Material (Session #2)."],
      concepts: [], images: [{ src: "img/2026-11-10_info_window_scroll.jpg", cap: "Wahlen-Fenster endet ueber der unteren Leiste, der Rest der Liste scrollt" }], commits: [], tags: ["UI"]
    },
    {
      id: "gen-park-plaza", date: "2026-11-10", phase: "p7", title: "Park-Pinsel und Platz-Generator statt fester Park-/Platz-Gebaeude",
      summary: "Spieler malen Parks jetzt mit einem runden Pinsel und ziehen Plaetze als Rechteck auf; beides entsteht aus Form, Seed und Optionen auf jedem Rechner gleich (Mehrspieler) und wird aus der Stadtkasse bezahlt.",
      points: ["Park: Pinsel 8/16/28/44 m (Strg = radieren), Live-Vorschau mit dem Park-Generator der Stadtparks; Strassen + Gehweg, Lots, fremde/geschlossene Felder und Wasser bleiben ausgespart. Reroll/Create/Cancel im Info-Fenster.", "Platz: Rechteck ziehen, Achse rastet an der Strasse ein, darf Wand und Strasse beruehren, nie ueberlappen. 20 prozedurale Belaege (Granit-Kleinpflaster, Segmentbogen, Kopfstein, Basalt, Polygonal, Sandstein, Travertin, Kalkstein, Beton, Waschbeton, Terrazzo mit Messing, Klinker Fischgraet/Laeufer/Korbgeflecht, Sechseck, konzentrische Ringe, Marmor-Schachbrett, Cotto, Kies mit Baendern, Porphyr-Faecher), 8 Layouts nach historischen Vorbildern, Pflanzen, Cafe-Tische mit/ohne Schirm, Lampen, Baenke, kleine Brunnen, ein grosser Brunnen – je an/aus + Variante.", "Der Rand loest sich organisch in Rasen auf: Fugen ergruenen, einzelne Steine fallen weg (maskiertes Material).", "Neue Props aus Blender headless (Bistro- und Vierertisch, Rund- und Quadratschirm mit Stofffarbe je Instanz, zwei kleine Brunnen, zwei Pflanzkuebel), alles Nanite + Instanzen.", "Lots, NPCs und Strassenbau sehen die neuen Flaechen als belegt; Fussgaenger nutzen Wege und Baenke. Test-Befehle shady.ParkAuto / shady.PlazaAuto / shady.AreaCreate.", "Test im Spiel (-game, Host): Platz 24 x 18 m mit konzentrischen Ringen, Brunnen, Schirmen und Baenken gebaut, 12 k$ aus der Stadtkasse, Datensatz repliziert. Park-Pinsel: kleine runde Flaechen fanden keinen Eingang (verlangte 16 m gerade Kante) – jetzt zweiter Versuch mit 6 m; danach Park 618 m² (9 Baeume, Bank, Weg) gebaut. Mehrspieler: ein beigetretener Client baute Park und Platz identisch (gleicher Seed, gleiche Teile)."],
      concepts: [], images: [{ src: "img/2026-11-10_plaza_generator.jpg", cap: "Erster Platz aus dem Generator in Feld 1-1 (konzentrische Ringe, Brunnen, Cafe-Schirme)" }, { src: "img/2026-11-10_park_brush_plaza.jpg", cap: "Gemalter Park (14-m-Pinsel) neben einem Platz mit Granit-Kleinpflaster" }], commits: [], tags: ["Spiel", "Parks"]
    },
    {
      id: "culdesac-terrain", date: "2026-11-10", phase: "p7", title: "Wendekreise folgen dem Gelaende (#15, 2. Runde)",
      summary: "Tester-Bild aus 0.1.234: die Strasse lag schon auf dem Boden, aber der Wendekreis am offenen Ende blieb flach auf der Hoehe des Strassenendes und verschwand im Huegel dahinter.",
      points: ["Wendekreis hinter dem Ende: bergauf mit dem Boden (10 cm Luft wie die Strasse), bergab weich vom Ende bis 8 m dahinter auf den Boden (RoadTool CulDeSacLift). Autos im Kreis nutzen dieselbe Hoehe.", "Test: 28 Monate NPC-Strassenbau, jeder neue Wendekreis an 12 Randpunkten gemessen – 0 Punkte unter dem Boden, 6–16 cm darueber. Steiler Hang direkt hinter einem Ende kam auf der Test-Insel nicht vor.", "Neue Test-Konsolenbefehle: shady.Hill <Bezirk> (hoechster Boden in/neben den offenen Feldern), shady.RoadProbe (neueste Spielerstrasse + Wendekreise gegen den Boden).", "Regel neu (User): jede Session darf Live Coding starten, fragt aber vorher die anderen."],
      concepts: [], images: [], commits: [], tags: ["Strassen", "Spiel"]
    },
    {
      id: "lakes-round", date: "2026-11-10", phase: "p7", title: "Runde Seen mit Uferböschung statt eckiger Löcher (#26, Stufe 1)",
      summary: "Tester-Wunsch #26: Binnenseen hatten die Form des 30-m-Knotenrasters und sahen wie schwarze Gruben aus. Jetzt sind sie rund, haben eine flache Böschung und eine eigene Wasserfläche knapp unter dem Ufer.",
      points: ["Ursache: Das Land rund um den Lagunen-See wird aufgefüllt, sein Feldwert steht dort fest auf 0,02 – jeder Uferpunkt lag deshalb direkt am Landknoten, der See bekam die Umrisse des Rasters. Das Meer liegt 15 m tiefer, dazu kam die 20-m-Klippe.", "Der Generator gibt jetzt den Abstand zum Lagunen-Kreis mit aus (Land-/Bezirksmasken unverändert, Python-Prototyp bleibt 1:1); das Ufer folgt diesem Abstand. Statt der Klippe fällt eine 10 m breite Böschung 3,5 m ab, die Wasserfläche liegt 1,2 m unter dem Ufer (Material wie das Meer).", "Das Bezirks-Overlay erkennt die Böschung als Küste; offene Grenzenden bleiben 6 (Seeds 641163, 12345, 5). Inseln ohne eingeschlossenen See (z. B. 777, 2024) sind unverändert.", "Stufe 2 offen: flache Küsten und Strände am Meer, Seen an Bezirksgrenzen (zwei Spieler teilen einen See), später Grundstücke am Wasser."],
      concepts: [], images: [{ src: "img/2026-11-10_lake_round.jpg", cap: "Insel 641163: der Lagunen-See ist jetzt rund" }, { src: "img/2026-11-10_lake_bank.jpg", cap: "Uferböschung, Bezirksgrenze bis ans Wasser" }], commits: [], tags: ["Insel"]
    },
    {
      id: "npc-brain", date: "2026-11-10", phase: "p7", title: "Klügere Computer-Gegner: sie bauen, was ihr Bezirk braucht (#29)",
      summary: "Tester-Wunsch #29: Statt einer festen Bauliste je Profil wägt jeder Computer-Spieler jeden Monat die Bedürfnisse seines Bezirks ab und baut den besten bezahlbaren Typ – wie ein Mensch mit demselben Geld und Kredit.",
      points: ["Zehn Ziele je Bezirk: Wohnungen, Arbeit, Strom, Schule, Krankenhaus, Sicherheit, Zufriedenheit, Privateinkommen, Stadtkasse, Wahrzeichen des Profils (Pressebaron: Zeitung/Fernsehturm, Industrieller: Fabrik/Kohlekraftwerk, Händler: Kaufhaus/Hotel, Schattenmann: Bank/Hochhaus). Dringlichkeit 0..1 aus den echten Bezirkszahlen, Punkte = Dringlichkeit × Wirkung × Persönlichkeit minus Kosten, Zinsen, Verschmutzung.", "Spart nur auf etwas klar Besseres, das in 5 Monaten (schwer: 8) erreichbar ist – der Industrielle wartete früher endlos auf ein Kohlekraftwerk für 312 k$.", "Die Politik gibt das Geld für einen offenen Bauwunsch nicht mehr aus (vorher scheiterten viele Bauten mit „Not enough private money“).", "Schwierigkeit: Konsole shady.NpcSkill 0|1|2 (leicht reagiert nur auf heutige Probleme und wählt etwas zufällig, schwer plant Baustellen mit ein). Begründungen: shady.NpcBrain [Platz] und Log „NPC brain: …“.", "Test Insel 641163, 24 Monate in Echtzeit: 62 Gebäude statt 12; Bauherren bauen Schulen, Polizei und Feuerwache (Zufriedenheit 98–99), der Pressebaron Zeitung und Theater, der Industrielle ein Kohlekraftwerk.", "Lektion: shady.Months springt Monate in einem Bild – NPC-Bauen sieht man nur in Echtzeit (kurzer Monat, z. B. shady.NewGame 641163 2030 8)."],
      concepts: [], images: [], commits: [], tags: ["Spiel"]
    },
    {
      id: "stats-customers", date: "2026-11-10", phase: "p7", title: "Statistik im Radialmenue (#31) und Kundschaft ueber Bezirksgrenzen (#17)",
      summary: "Zwei Tester-Wuensche fuer das naechste Update: Laeden bekommen ihre Kunden nach Entfernung aus allen Bezirken, und ein neuer Menuepunkt Statistics zeigt Stadt, Bezirks-Ranglisten, Kassen, Kampagnen und Politik.",
      points: ["#17: jedes Wohnhaus verteilt seine Bewohner auf die erreichbaren Cafes, Kaufhaeuser und Tankstellen (Gewicht 1/(1+(d/250 m)^2), ein Teil kauft ausserhalb). Umsatz-Faktor = Kunden / 600 (0,3–1,2), Warenvertrag und Bezirks-Boom wirken wie vorher. Konsole shady.CustomerLog 1.", "Test Insel 641163, 15 Monate einzeln: jedes Geschaeft hatte Kunden aus fuenf Bezirken.", "#31: Statistics statt Platzhalter \"Later\": City, Districts (Ranglisten mit Balken, eigener Bezirk mit Stern), Public funds, Campaigns (Bilanz + alle Kampagnen mit Reichweite je Bezirk), Politics & media.", "Lektion: shady.Months n rechnet alle Monate in einem Bild – NPCs stellen nur einen Bauantrag je Lauf. Fuer Bau-Tests Monate einzeln mit Pausen (shady.Months 1|wait 5)."],
      concepts: [], images: [{ src: "img/2026-11-10_statistics_districts.jpg", cap: "Statistik, Seite Districts: Bezirke nach Einwohnern" }, { src: "img/2026-11-10_statistics_pages.jpg", cap: "Die Seiten City, Public funds, Campaigns, Politics & media" }], commits: [], tags: ["Spiel", "UI"]
    },
    {
      id: "release-0234", date: "2026-11-10", phase: "p7", title: "0.1.234: Lueftungsgitter an allen Gebaeuden, abgenutzter Asphalt, Strassen am Hang, Verschmutzung mit Abstand",
      summary: "Drei Ticket-Sessions parallel (eine Arbeitskopie, Absprache per Nachricht), ein gemeinsames Update mit sieben Tester-Fixes: #2, #8, #10, #15, #24, #27, #28 plus ein Editor-Absturz.",
      points: ["#8: Der User sah im Spiel weiter Flimmern – am 1950er-Kalksteinturm, nicht an den 1970ern. 32 weitere Familien (Tuerme aller Epochen, Kaufhaeuser, Krankenhaeuser, Feuerwachen) hatten dieselben 12-cm-Lamellen. Alle neu gebaut, 91 Module neu importiert (: Module per FBX-Groessenaenderung, Materialien vom alten Mesh uebernommen).", "Lektion: der Nanite-Export schreibt neu – Status faellt auf pending_visual_approval, Unreal-Block und spaetere Ergaenzungen fehlen, haette die Familien verloren. stellt die gepflegte Fassung wieder her und aktualisiert nur die Pruefsummen (auch fuer die 1970er-Tuerme nachgeholt).", "Weitere Fixes (Sessions #2/#3): abgenutzter Asphalt (#2), Strassen folgen dem Gelaende (#15), zweite Zufahrt bei Gewerbe/Behoerden (#24), Einrasten von Strassen (#27), Verschmutzung faellt mit Abstand ab (#28), War-Room-Knopf (#10).", "Finanz-Tickets aufgeteilt: #13 und #21 Session #3, #20 Session #2, #17 Session #1."],
      concepts: [], images: [], commits: [], tags: ["Gebaeude", "Spiel"]
    },
    {
      id: "louvres-1970-r02", date: "2026-11-09", phase: "p7", title: "1970er-Hochhaeuser r02: Lueftungsgitter flimmern nicht mehr (#8)",
      summary: "Tester-Meldung #8: die Lueftungsgitter der 1970er-Buerotuerme flimmerten. Alle fuenf Familien neu gebaut und die 24 Module mit Gittern neu importiert.",
      points: ["Ursache: Lamellen alle 12 cm (kleiner als ein Pixel aus der Spielkamera) und Lamellen-Hinterkante in derselben Ebene wie die Rueckwand (Z-Fighting).", "Neu: Lamellen etwa alle 30 cm, 4 cm Luft zur Rueckwand; bei Familie 05 dunkle Rueckwand (SignMetal statt grauem RoofTech).", "Bau-Skripte kennen jetzt --revise (darf die in Git gesicherten Ausgaben ueberschreiben); alte Meshes in _Superseded/*_r01. Reimport: ", "Noch offen: Blick des Users im Spiel, dann Patch."],
      concepts: [], images: [], commits: [], tags: ["Gebaeude"]
    },
    {
      id: "tester-fixes-0911c", date: "2026-11-09", phase: "p7", title: "0.1.220: Politik startet frueher, graue Knoepfe sagen warum, Strassen bleiben im eigenen Bezirk",
      summary: "Neue Discord-Meldung #25 („das ganze Politiksystem ist tot“) und #18 (Strassen bis tief in fremde Bezirke) behoben und als zweites Update am selben Abend veroeffentlicht. 0.1.218 (neun Fixes) war vorher erschienen.",
      points: ["#25: Die erste Wahl lag im November 1954 – bei 90 s je Monat rund 1,5 Stunden ohne „Run“, ohne Kandidaten. Jetzt November 1951, danach alle vier Jahre; Buergermeister alle acht Jahre ab 1955.", "#25: Einfluss ohne Sitz +2 je Monat bis 30 (vorher +1 bis 20), mit Sitz +3. Start 10, Aktionen kosten 10–20 – nach einer Aktion war vorher alles lange grau.", "#25: Graue Knoepfe nennen ihren Grund in Orange darunter (z. B. „filing opens in January 1951“, „needs 10 influence, you have 4“).", "#18: Um jeden Anschluss galten 45 m ohne Bezirkspruefung – eine Kette kurzer Strassen kroch so in den Nachbarbezirk. Jetzt fremdes Bezirksland nur 10 m um den Anschluss (T-Anschluss an die Nachbarstrasse bleibt) und nur, wenn der Anschluss nicht an der eigenen Strasse im fremden Bezirk liegt.", "Lektion: baut aus dem Arbeitsordner – waehrend des Patch-Baus keine Quellen aendern (Aenderungen geparkt und nach dem Linux-Link zurueckgeholt; Binaerdateien auf Texte geprueft)."],
      concepts: [], images: [{ src: "2026-11-09_politics_why.jpg", cap: "Elections & offices: unter jedem grauen „Run“ steht jetzt der Grund, erste Wahl November 1951" }], commits: [], tags: ["Spiel", "UI"]
    },
    {
      id: "tester-fixes-0911b", date: "2026-11-09", phase: "p7", title: "Tester-Fixes 0.1.218: Klicks durch Fenster, Gehen im Mehrspieler, Startfeld, Ecken der Innenstadt",
      summary: "Zweite Runde Feedback aus Discord und dem Board, ohne Rueckfragen abgearbeitet (User unterwegs): neun Meldungen behoben (#9, #11, #12, #14, #16, #19, #22, #23 und teils #21), drei neue Discord-Posts als Tickets angelegt (#22–#24). Getestet ganz ohne Maus mit minimierten Spielinstanzen und neuen Test-Befehlen.",
      points: ["#12 Klicks in Fenster gingen in die Welt durch: jeder Linksklick wird jetzt gegen die echte Bildschirmflaeche aller sichtbaren HUD-Elemente geprueft (Desktop-Koordinaten wie die Mausereignisse); zu grosse Fenster schrumpfen automatisch auf den Bildschirm.", "#22 Nach dem Setzen eines Hauses blieb das Bau-Infofenster ueber jedem neu geoeffneten Panel liegen: Panel oeffnen beendet jetzt den Baumodus.", "#23 Haeuser anderer Spieler standen beim Mitspieler auf Kreuzungen: der Strassen-Name ist nicht auf jedem PC gleich – jetzt wird die Strasse gesucht, die zur gespeicherten Lot-Front passt.", "#11 Ecken der Innenstadt: Avenue und Eck-Querstrasse trafen den Ring bis 1,6 m nebeneinander (zwei Kreuzungen uebereinander) – die Avenue endet dort eine Querstrasse frueher, Hochhausreihen ebenso.", "#19 F (Gehen) wirkte beim Mitspieler nicht: Wechsel laeuft jetzt ueber den Server. #14 Startfeld liegt immer an einer Generator-Strasse. #9 Esc-Menue lesbar. #16 Schnellknoepfe eigene Groesse, Karten oben ueberlagern statt zu schieben. #21 NPC-Kreditlinie nie hoeher als die des Spielers.", "Neue Test-Befehle: hud.Click (Slate-Klick an Bildstelle), hud.Action (Radialmenue-Aktion), shady.Walk, -ShadyHudExec mit wait."],
      concepts: [], images: [], commits: [], tags: ["Spiel", "Multiplayer", "UI"]
    },
    {
      id: "mp-fixes-0911", date: "2026-11-09", phase: "p7", title: "Multiplayer-Fixes aus dem ersten Playtest (0.1.216)",
      summary: "Vier Tester-Meldungen aus Discord und dem Feedback-Board (#4–#7) behoben: falscher Name in der Lobby, doppelte Lobby nach „Back to main menu“, Beitritt schien einzufrieren, Beitritt per IP landete als Raumcode. Ursache der beiden groessten: Startbildschirm und HUD blieben bei jedem Levelwechsel am Bildschirm haengen.",
      points: ["Host-Name: Neues Spiel und Beitreten teilten sich ein Namensfeld – der Host las das versteckte Feld der Beitritts-Seite.", "Startbildschirm und HUD nehmen sich beim Schliessen ihrer Welt selbst ab – vorher lag nach einem Beitritt der „connecting“-Bildschirm mit Tastaturfokus ueber dem Spiel, und nach „Back to main menu“ zwei Lobbys uebereinander.", "IP-Adressen werden nicht mehr als Raumcode gelesen; Fehlertext erklaert, dass ein Online-Host nur per Code erreichbar ist.", "Namen und Stadtname werden gesaeubert (Buchstaben, Ziffern, wenige Zeichen, max. 24) – auch auf dem Server.", "Getestet ganz ohne Maus: zwei minimierte Spielinstanzen (-ShadyHost / -ShadyJoin=127.0.0.1), Bild per PrintWindow. Offen: echter EOS-Test zwischen zwei PCs durch Tester."],
      concepts: [], images: [{ src: "2026-11-09_mp_fixes.jpg", cap: "Host- und Client-Lobby nach dem Fix: ein Lobby-Fenster, gesaeuberter Name auf beiden Seiten" }], commits: [], tags: ["Spiel", "Multiplayer"]
    },
    {
      id: "eos-online-0911", date: "2026-11-09", phase: "p7", title: "Online ohne Portfreigabe: Raumcode über Epic Online Services",
      summary: "Der Playtest scheiterte an der Portfreigabe im Router. Statt eines eigenen Vermittlungsservers wie bei Starhunter (fly.io) nutzt das Spiel jetzt Epic Online Services: kostenlos, NAT-Durchstich mit Relay als Rückfall, direkt in Unreal eingebaut. Der Host bekommt einen Raumcode, Freunde tippen ihn ein – niemand muss am Router etwas einstellen.",
      points: ["Anmeldung: anonyme Device ID je PC (EOS_Connect_CreateDeviceId), danach Login über Online Services v2 – kein Konto, kein Steam.", "Raum: EOS-Lobby mit 6-stelligem Code als suchbares Attribut; die Lobby dient nur zum Finden des Hosts, der Spielverkehr läuft über den EOS-NetDriver (P2P, sonst Relay).", "Oberfläche: Neues Spiel mit Wahl „Online (room code)“ / „LAN only (IP address)“, Startbildschirm zeigt den Online-Status unten rechts, Join-Feld nimmt Code oder IP, Lobby zeigt dem Host den Code mit Copy.", "Ohne Zugangsdaten, im Editor und mit -ShadyNoEos fällt alles von selbst auf den IP-Weg zurück; die Lobby zeigt jetzt den wirklich belegten Port (vorher fest 7777, auch wenn die Engine 7778 nahm).", "Getestet: LAN-Beitritt zweier -game-Instanzen (Version geprüft, Insel aus dem Seed gebaut), Fall ohne Zugangsdaten; mit den Zugangsdaten des Users: anonymer Login, Raum VQ3FNF geöffnet, eine zweite Instanz fand ihn per Code und baute eine EOS-P2P-Verbindung auf (auf einem PC zu sich selbst, gleiche Device ID). Offen: Test über zwei Haushalte, Blick auf die neuen Knöpfe."],
      concepts: [], images: [], commits: [], tags: ["Spiel", "Multiplayer"]
    },
    {
      id: "politik-spielbar-0911", date: "2026-11-09", phase: "p7", title: "Politik, Medien und Wirtschaft spielbar: Agenda-Band, War Room, Roll Call, Stadtrat mit neun Sitzen, 66 Gesetze, Stab, Forschung, Verträge, Handel",
      summary: "Nachtschicht nach den vier Konzepten (Auftrag des Users 09.11.: „bau alles ein, alle drei Bereiche verbunden, frag nicht“). Der Stadtrat hat jetzt neun Sitze mit eigenen Figuren, verborgenen Werten und Gefälligkeiten; jedes Quartal stimmt er namentlich ab, und das Spiel zeigt die Abstimmung Sitz für Sitz als Szene – sichere Stimmen schnell, wackelige langsam, der Bürgermeister bei Gleichstand. Kampagnen werden im War Room gebaut wie Spiele in Mad Games Tycoon: Ziel, Vehikel, Botschaft, 40 Mix-Punkte, Tricks, Zeitplan, mit ehrlicher Aussicht als Spanne; danach ein Debrief, was wirkte. Unter den Karten läuft das Agenda-Band mit allen Terminen, Heute links. Dazu 66 Gesetze aus dem Kompendium mit echter Wirkung auf die Wirtschaft, Epochen- und Krisengesetze des Bürgermeisters, Wahlen für Bezirks- und Inselsitze alle vier Jahre, Stimmung je Bezirk, Arbeitsmarkt für den Stab, Forschungstisch für Kanäle und Methoden, Verträge zwischen Bezirken, Handelsstufen bis zum Hafen und zwölf Wirtschafts-Ereignisse. Im PIE-Test 1950–1960: Antrag → Kampagne → Abstimmung 6-3 → Debrief, Wahl 1954 mit eigener Kandidatur gewonnen, NPCs stellen Anträge, kaufen Umschläge, heuern Stab an, erforschen.",
      points: [
        "Regeln in C++ (ShadyPolitics): 8 Themen, 5 Zielgruppen, 10 Kanäle mit Reichweite je Zielgruppe und Epoche (Plakate … Social 2008), 8 Methoden, 66 Gesetze mit Wirkung als Multiplikatoren (Mieten, Bau, Industrie, Strom, Steuern, Kampagnen, Recherchen …), 12 Ereignisse mit Krisengesetz, 5 Handelsstufen. Sitz-Neigung = Haltung · Stimmung · Gunst · Druck · Pendel − Angst·Verdacht (+50 Umschlag, Wurf ±12); Aussicht als Monte-Carlo-Spanne.",
        "Stadtrat: 6 Bezirkssitze, 2 Inselsitze, Bürgermeister mit Stichentscheid – alle mit Namen, Haltung, Lieblingsthema, Preis, Angst, Ehrlichkeit (verborgen, bis Fixer oder Umfrage sie lesen). Abstimmung jedes Quartal, Antrag braucht zwei Monate Vorlauf, Menschen mit Sitz stimmen selbst; Anklage nimmt den Sitz. Der Spieler beginnt ohne Sitz (das „kleine Licht“) und kann im November 1954 für Bezirkssitz, Inselsitz oder Ausschuss antreten – eine Wahlnacht als Szene.",
        "War Room (ein Fenster, sechs Schritte): Ziel (Gesetz durch/stoppen, Anhörung, Kandidat, Rivalen beschädigen, Image, Thema, Boom, Verteidigen), Vehikel, Botschaft mit zwei Themen, vier Tonart-Reglern, Zielgruppen und Polarize, Mix mit 40 Punkten (gesperrte Kanäle zeigen Jahr/Lizenz/Forschung), Tricks mit Aufdeck-Risiko, Zeitplan; rechts die Aussicht (z. B. „4–6 von 9, Chance ~55 %“, unbekannte Sitze mit „?“), Stärke je Bezirk, Kosten. Nach dem Ende der Debrief im Playbook: welcher Kanal trug, welche Zielgruppe die Tonart mochte, wie heiß das Thema war, Sättigung, Aufdeckung.",
        "Agenda-Band unter den Karten: Heute links, 18 Monate nach rechts (Mausrad 6–36), Pins rot/orange/gold/grau für Politik/Medien/Wirtschaft/Stab, Goldring = eigener Einsatz, Puls im laufenden Monat, Hover zeigt den Stand, Klick öffnet das Panel; im Zahnrad schaltbar und im Anordnen-Modus verschiebbar. Politik-Karte oben zeigt den Rat, die Stimmung des eigenen Bezirks (nur mit Umfrage) und den Bürgermeister.",
        "Neue Panels: Laws (Tisch + Katalog nach Bereich mit Vorschlag/Lobby/Umschlag/War Room), Council, Staff & job market (8–12 Bewerber je Quartal, wer zuerst anheuert hat sie, Abwerben gegen Loyalität, Leichen im Keller), Research desk, Contracts (Strom, Arbeiter, Baustoffe, Waren, Werbezeit), Campaigns & Playbook, Economy (Ereignisse, Handelsstufe mit Hafen-Gesetz), Mood (Umfrage/Fokusgruppe je Bezirk), Agenda, Offices. Radialmenü neu geordnet: Politics, Media, Economy, Finances, Agenda.",
        "NPCs spielen alles mit: Anträge nach Haltung, Kampagnen für eigene und gegen schädliche Anträge, Umschläge an wackelige Sitze (Fixer, Industrielle), Stab nach Profil, Forschung, Stromverträge, Hafen, Kandidaturen. Test Seed 641163 bis 1960: 12 Roll Calls, TV-Lizenz 1960 angenommen 9-0, Public housing und Highway program beschlossen, Rent cap kippte zweimal, ein NPC gewann einen Inselsitz. Offen: Klicktest des Users, Zahlen abstimmen, Titelseite für Wendepunkte."
      ],
      concepts: ["kampagnen", "kompendium", "spiel-v1", "machtdreieck"],
      images: [{ src: "2026-11-09_agenda.jpg", cap: "Agenda-Band unter den Karten: Heute links, Termine der nächsten Monate, Politik-Karte mit Rat und Stimmung" }, { src: "2026-11-09_warroom.jpg", cap: "War Room: sechs Schritte, rechts die Aussicht als Spanne" }, { src: "2026-11-09_rollcall.jpg", cap: "Roll Call: die neun Sitze verkünden nacheinander, Zählbalken mit Mehrheitsmarke" }, { src: "2026-11-09_election.jpg", cap: "Wahlnacht 1954: je Amt der Sieger, der Spieler holt den Bezirkssitz" }, { src: "2026-11-09_playbook.jpg", cap: "Playbook: Debrief zweier Kampagnen – welcher Kanal trug, welche Tonart ankam, wie heiß das Thema war" }, { src: "2026-11-09_laws.jpg", cap: "Gesetze: Anträge auf dem Tisch mit War Room, Lobby, Sitzen/Umschlägen und eigener Stimme; darunter der Katalog nach Bereich" }],
      commits: [], tags: ["Spiel", "UI", "Konzept"]
    },
    {
      id: "kompendium-0911", date: "2026-11-09", phase: "p6", title: "Kompendium 1950–2030: Scope für Politik, Medien und Wirtschaft – und der Spieler als Tycoon",
      summary: "Der User hat die offenen Punkte des Kampagnen-Konzepts entschieden (Zeitband mit Heute links, War Room angenommen, Stab über einen Arbeitsmarkt, Forschung wie in Mad Games Tycoon, Handel und Verträge später) und einen neuen Auftrag gegeben: erst für alle drei Bereiche festhalten, was es überhaupt geben soll, dann die Wege dorthin. Dazu zwei Leitbilder: Der Spieler ist ein Tycoon wie die Tech-Milliardäre – reich auf ganz verschiedenen Wegen, der sein Geld dann in Politik und Medien steckt. Und er beginnt als kleines Licht: Der Rat entscheidet ohne ihn, er schaut zu und lernt, bis er das Geld hat, Entscheidungen zu drehen. Das Kompendium hält das alles fest: 94 Gesetze, acht Ämter, 20 Wahlen, Sender, Methoden, Stab, Güter, Verträge, Handel, acht Wege zum Reichtum, drei Akte.",
      points: [
        "Gesetze entstehen aus vier Quellen: Epochen-Gesetz der Stadt nach Jahr (Reconstruction 1950, Energy Act 1973, Privatization 1990, Climate Act 2010), Katalog ab Verfügbarkeitsjahr durch jeden Ratssitz, Ereignis aus der Simulation (Smog, Wohnungsnot, Krise), Bürgerbegehren ab 1970. Alle Gesetze haben Stufen oder an/aus und sind umkehrbar; Ratssitzung jeden Dezember, Sondersitzung für 15 Einfluss.",
        "Katalog mit 94 Einträgen in neun Bereichen (Bauen, Wohnen, Verkehr, Umwelt/Energie, Wirtschaft/Steuern, Ordnung, Medien, Sauberkeit, Soziales) mit Jahr, Wirkung als Startwert und Gewinnern/Verlierern je Säule – von Rent cap 1950 über Highway program 1956, Clean Air 1970, Deregulation 1981, Casino licence 1990, Platform immunity 1996, Congestion charge 2003, Unlimited PACs 2010 bis AI content labelling 2024. Die acht Gesetze aus V1 sind enthalten; Vorschlag für V2: diese plus 4–6 je Jahrzehnt.",
        "Ämter und Wähler: 6 Bezirkssitze (Bezirkswähler), 2 Stadtsitze (neu, ersetzen die zweite Stimme des Bürgermeisters), Bürgermeister (NPC, Stichentscheid, ab 1990 wählbar – offen), Ausschuss 3, Polizeichef, Kämmerer, Licensing board (1960), Inspector general (1978). Rat = 9 Stimmen, 5 nötig; 20 Wahlen von 1954 bis 2030, alle Ämter zugleich, Nachwahl bei Amtsverlust. Jede Wahl verschiebt alle drei Kräfte: Ratsmehrheit, Felder, Gefahr der Umschläge, Millionen der Ausschreibungen.",
        "Medien-Scope: 11 Sender-Typen von der Zeitung bis zum KI-Feed mit Reichweite, Glaubwürdigkeit, Kosten und Publikum; 8 Story-Typen; Recherche-Stufen mit Beschleunigern (Open records 1966, Investigativ 1974, Kameras 2002) und Bremsen; Umfragen je Epoche; TV-Debatte vor jeder Wahl ab 1960. Stab mit Arbeitsmarkt (Entscheidung des Users): 10 Rollen mit 1–5 Sternen, je Quartal 8–12 Bewerber (5 Sterne 3 %), wer zuerst anheuert, hat ihn, Abwerben gegen Loyalität, höchstens 6 Plätze. Forschung wie in MGT2: Lizenz macht verfügbar, die Research desk schaltet frei (Forschungspunkte, Geld).",
        "Wirtschafts-Scope (später umzusetzen): Prinzip der gegenseitigen Abhängigkeit, 7 Güter (Arbeiter, Strom, Baustoffe, Güter, Nahrung, Dienste, Abfall), 6 Vertragsarten mit Laufzeiten, Handel in 6 Stufen (Lkw über die Brücke 1950 → Depot → Hafen 1970 → Terminal → Freihafen → Logistik-Hub 2010), 12 Wirtschafts-Ereignisse von Baby boom bis Pandemie, Haushalt mit drei Kassen.",
        "Acht Wege zum Reichtum für den Tycoon (Landlord, Industrialist, Energy baron, Merchant, Banker, Media mogul, Host, Contractor) mit bestem Jahrzehnt, Voraussetzungen und Gegnern – zwei Hauptwege je Spieler, jeder Weg explodiert in einer Epoche und stirbt in einer anderen. Der Anfang in drei Akten: Small light 1950–54 (Roll Call als Zuschauer, mit Beschlüssen leben, Wahl 1954 vorbereiten), Player (ein Sitz, War Room), Tycoon (Millionen, Sender, Bürgermeisterwahl). Frühe Gesetze sind wichtig, aber umkehrbar; weiche Schwellen statt Freischaltung."
      ],
      concepts: ["kompendium", "kampagnen", "machtdreieck"],
      images: [], commits: [], tags: ["Konzept", "Spiel", "Wirtschaft"]
    },
    {
      id: "kampagnen-0911", date: "2026-11-09", phase: "p6", title: "Konzept: Agenda, War Room und Roll Call – Kampagnen als Werkstatt",
      summary: "Der User will das Geschehen der Stadt nicht am Rand mitlesen, sondern im Mittelpunkt haben: Wahlen, Abstimmungen, Fristen – groß, mit Restzeit, verbunden mit der Uhr. Und er will Kampagnen so einstellen wie Spiele in Mad Games Tycoon 2: Kandidat, Gesetz, Botschaft, Kanäle, Tricks, Timing; was wirkt, muss man herausfinden, der zweite Anlauf gehört dazu – für Politik und Medien gleichermaßen. Dazu Abstimmungen, die wie in Die Fugger II Richter für Richter enthüllt werden. Daraus ist ein Konzept mit fünf Begriffen geworden – Agenda, War Room, Roll Call, Debrief, Playbook – samt Recherche, was an solchen Spielen Spaß macht, sieben Bildern (Mockups auf dem heutigen HUD) und drei Fallbeispielen mit Zahlen.",
      points: [
        "Recherche zu neun Vorbildern (Mad Games Tycoon 2, Die Fugger II, Frostpunk 2, Crusader Kings 3, Tropico 6, Floor 13, Mad TV, Tycoon-Design, Reveal-Pacing) → acht Regeln: nichts verpassen, einstellen statt klicken, verborgen aber fair, ehrliche Spannen statt Prozent, Aussicht und Entdeckungsrisiko getrennt, der zweite Anlauf ist der Normalfall, die Szene ist die Belohnung, ein Band – eine Werkstatt – eine Szene (gegen den Klatter).",
        "Agenda: Zeitband unter den Karten – Heute links, die Zukunft kommt von rechts (vom User am selben Tag so entschieden), Pins in den Farben der drei Kräfte, Goldring für eigene Einsätze, Puls unter einem Monat; Hover zeigt den Stand, Klick öffnet den War Room. Titelseite, Rand-Karten und Ticker als drei Alarmstufen, Lager-Pendel statt Political Climate – alles vom User angenommen.",
        "War Room: ein Fenster für Politik, Medien und Wirtschaft mit sechs Schritten – Goal, Vehicle (Puppet, Sitze, Sender), Message (zwei Themen, vier Tonart-Regler, Zielgruppen, Polarize-Regler „us vs. them“, Versprechen), Mix (40 Punkte auf Kanäle, gesperrte grau mit Jahreszahl), Tricks (Umschlag, Redakteur kaufen, Dossier, Push poll, Astroturf – jeder mit Wirkung und Verdacht) und Timing (Spitze vor dem Termin, ein Pivot); rechts Aussicht als Spanne (5–7 von 9), Entdeckungsrisiko und Kosten in Geld, Einfluss und Gefälligkeiten.",
        "Verborgene Werte: Stimmung je Bezirk (Gewicht je Thema + Lager-Pendel, gespeist aus Mieten, Vorfällen, Arbeitslosen, Smog, Skandalen), Zielgruppen-Gewichte, Hot issue/Preis/Angst je Sitz, Reichweite Kanal × Zielgruppe × Epoche. Gefunden per Umfrage (±8 Punkte 1950 … ±2 2010), Fokusgruppe, eigenem Sender und Debrief; gemerkt als Karten im Playbook, die mit der Epoche altern. Je Partie anders (Seed) – nur die Kanal-Tabelle ist partieübergreifend lernbar.",
        "Roll Call: Ausschuss 3 Sitze (2 nötig), Rat 9 Sitze (6 Bezirke + 3 neue Stadtsitze, 5 nötig); sichere Sitze fallen schnell, Wackelkandidaten langsam, der letzte mit 3 s Pause und einem Satz Begründung; Gleichstand → Stichentscheid des Bürgermeisters (unser Los aus Fugger II); Leertaste überspringt. Wahlabend Bezirk für Bezirk. Der Debrief nennt, was wirkte, wer kippte und warum, legt Lektionen ins Playbook und öffnet den nächsten Anlauf zur nächsten Sitzung.",
        "Medien-Technik 1950–2030 als Lizenzen (Zeitung/Radio/Plakate/Kino-Wochenschau → TV s/w 1960 → Farbe 1970 → Kabel 1978 → Talk radio 1988 → Privat-TV 1990 → Web 1996 → Social 2008 → Mobile 2016 → Feeds/KI 2030) und Methoden zum Erforschen (Umfragen, Fokusgruppen, TV-Debatte, Attack spot, Investigativ-Team, Spin, Push poll, Astroturf, Micro-targeting, Bots, KI-Inhalte). Fallbeispiele: High-rise permit in zwei Anläufen (4:5 → 5:4, 146 k$), Schmutzkampagne gegen einen Polizeichef-Kandidaten 1966, Boom-Kampagne 1972. Umsetzung in drei Stufen, Stufe 1 = Agenda + Roll Call + Debrief."
      ],
      concepts: ["kampagnen", "machtdreieck"],
      images: [], commits: [], tags: ["Konzept", "UI", "Spiel"]
    },
    {
      id: "netz-updater-0811", date: "2026-11-08", phase: "p7", title: "Mitspielen übers Internet: Adresse kopieren, Esc-Menü, Auto-Updater",
      summary: "User 08.11.: Freunde kamen nicht ins Spiel („host may have left“, obwohl der Host spielte), und jede kleine Änderung hieß 3,4 GB neu laden. Jetzt sieht der Host seine Adressen zum Kopieren, Fehler sagen, was zu prüfen ist, und das Spiel holt Updates selbst von GitHub.",
      points: [
        "Lobby: Host sieht „Invite friends“ mit Internet- und Heimnetz-Adresse samt Port, je mit Copy-Knopf.",
        "Beitritt ohne Antwort meldet jetzt „Could not reach the host“ mit Hinweis auf Portweiterleitung UDP 7777 und Firewall (getestet).",
        "Esc im Spiel: Menü mit Resume / Back to main menu / Quit game; ein hängender Beitrittsversuch wird beim Hosten abgebrochen (danach ging Hosten nicht mehr).",
        "Standardwerte aus dem Editor (Gras, Hecken, Gartenwege, HUD) reisen im Paket mit und gelten bei frischer Installation.",
        "GitHub-Organisation vibecodes-studio: privates Repo mit dem Quellcode als Backup, öffentliches Repo nur für kompilierte Updates.",
        "Auto-Updater: Startbildschirm prüft das öffentliche Repo, lädt nur geänderte Dateien (gepackt, geprüft), tauscht sie nach dem Beenden und startet neu; Inhalte als Unreal-Patch gegen eine Basis-Fassung.",
      ],
      images: [],
      commits: []
    },
    {
      id: "park-plaza-0811", date: "2026-11-08", phase: "p7", title: "Park freigegeben, Rasen wie das Feld, Plaza mit echtem Wasser",
      summary: "User 08.11.: Der Park sieht gut aus und bleibt so – nur der neongrüne Rasen musste wie das Feld aussehen. Auf der Plaza sahen die Wasserstrahlen wie Zacken aus und die rosa Beete sollten weg.",
      points: [
        "Park r04 freigegeben (Status imported_validated, 281/281 Prüfungen).",
        "Rasen in Katalog-Gebäuden: eine Material-Instanz des Inselgeländes zwingt die Lawn-Flächen auf den Feldrasen (gleiche Gras-Textur und Regler wie draußen).",
        "Plaza r02: 24 gebogene Wasserstrahlen mit Schaumringen statt Kegeln, Beete mit Steinkante, Erde und 68 Hortensien; alte Fassung r01 aufbewahrt.",
        "Plaza r02 in Unreal importiert (Boden + Denkmal neu, Nanite), Katalog neu gebaut; 26 Hof-Materialien bekamen das fehlende Nanite-Flag.",
        "Plaza-Boden wirkte im Play wie weißes Plastik (User) → Platten, Bänder und Kanten jetzt geschliffener Naturstein mit Fugen, Grundton wärmer; danach freigegeben (imported_validated, 215/215 Prüfungen).",
      ],
    },
    {
      id: "hoefe-0711", date: "2026-11-07", phase: "p7", title: "Gärten und Hinterhöfe: Grundstücke sehen bewohnt aus",
      summary: "User 07.11.: Der graue Gussbeton zwischen den Hochhäusern war langweilig, Wohnhäuser standen nackt auf dem Rasen. Jetzt hat jedes Grundstück einen gestalteten Garten bzw. Hof, der sich über die Jahrzehnte ändert und zeigt, wie gut der Bezirk gepflegt ist.",
      points: [
        "23 neue Requisiten aus Blender (Lattenzaun, Bretterzaun, Hecke, Schuppen, Wäschespinne, Mülltonne/Rolltonne, Briefkasten, Carport, Blumenkasten, Gartenmöbel, Schaukel, Müllcontainer, Paletten, Kisten, Ölfässer, Müllsäcke, Reifen, Gerümpel, Radstopper, Laterne, Bodenplatten).",
        "Ein Bodenmaterial für alle Beläge (Rasen, Einfahrt, Weg, Terrasse, Pflasterhof, Parkplatz mit Markierung, Kies, Vorplatz, Zentrum): je Jahrzehnt ein anderer Belag (z. B. Einfahrt erst Betonspuren mit Kies, dann Asphalt, dann Pflaster; Zentrum erst 3 x 3 m Betonplatten, später Pflaster, dann Granit) – jedes Stück wechselt zu einem etwas anderen Jahr.",
        "Pflege je Bezirk aus Zufriedenheit, Bodenwert und Umweltbelastung: ungepflegt = Schmutz, Ölflecken, Risse, Unkraut in den Fugen, braune Hecken, vergraute Farben, dazu Müllsäcke, Reifen und Gerümpel; gepflegt = Mähstreifen im Rasen und Blumenkästen.",
        "Wohnhaus: Einfahrt auf der breiteren Seite (ab 1965 oft Carport), geparktes Epochen-Auto, Weg zur Tür, vorn Lattenzaun (bis 1990) oder Hecke, hinten Terrasse, Bretterzaun/Hecke, Schuppen, Wäschespinne (bis 1985), Schaukel, Baum.",
        "Innenstadt: Höfe hinter den Häusern bis zur Blockmitte – Kaufhaus/Café = Lieferhof, Krankenhaus = Parkplatz, Hochhaus zufällig Liefer-, Park-, Grün- oder gemischter Hof. Bei einer Sanierung verschwinden die Hof-Requisiten unter der Baustelle und kommen danach zurück.",
        "Alles als Instanzen in einem Actor. Ganze Insel ausgebaut (3864 Gebäude): 14,5 ms je Bild (69 FPS), GPU 7,8 ms – vorher rund 13 ms."
      ],
      images: [],
      commits: []
    },
    {
      id: "overlay-0611", date: "2026-11-06", phase: "p7", title: "Bezirks-Overlay: Glas, Goldrahmen und Grenzen, die wirklich bis zur Küste reichen",
      summary: "Ein Overlay aus Milchglas und Goldlinien zeigt die Bezirke und Baufelder – im Spiel für Anhörungen und Feldfreigaben (Taste O, Kartenknopf), in der Lobby für die Bezirkswahl: Insel ganz normal, nur der Bezirk unter der Maus bekommt Glas und einen hauchdünnen Goldrahmen, reservierte Bezirke bleiben so in der Spielerfarbe. Danach ein Deep Dive auf ein Problem, das seit Tagen mitlief: Grenzen, die nicht bis zum Inselrand reichten, Zacken und Löcher im Rahmen. Die Regel gilt jetzt für jede erzeugte Insel.",
      points: [
        "Bezirk je Dreieck exakt aus dem Generator (dieselbe Regel wie die Grenzlinien) statt aus Farbe und 30-m-Raster – keine Splitter mehr, Bergzellen werden an der Grat-Linie zugeschnitten.",
        "Ursache der fehlenden Grenze an der Küste: Wechselte der Bezirk genau an einem Küstenpunkt einer Zelle, zeichnete der Generator dort keine Linie. Jetzt entsteht an jedem Wechsel zwischen zwei Keilen eine Linie.",
        "Löcher im Rahmen: Die Seiten jeder Grenzlinie werden jetzt aus den Glas-Dreiecken selbst bestimmt (Proben 3/6/12 m) statt aus dem groben Raster.",
        "Selbstprüfung im Log: offene Grenz-Enden werden gezählt. Bei den Seeds 12345, 641163, 777 und 2024 bleiben nur die 6 gewollten Enden am Zentrum."
      ],
      images: [
        { src: "2026-11-06_bezirks-overlay-lobby.jpg", cap: "Lobby: reservierter Bezirk 2 in der Spielerfarbe, Rest der Insel normal" },
        { src: "2026-11-06_bezirks-overlay-kueste.jpg", cap: "Nah: Fläche und Rahmen laufen bis zur Küste, Feldlinien reichen ans Ufer" }
      ],
      commits: []
    },
    {
      id: "ladebild-0611", date: "2026-11-06", phase: "p7", title: "Ladebild ohne Ruckler: der Inselbau verteilt sich auf viele Bilder",
      summary: "Der Spinner im Ladebild stand oder ruckelte, während die Insel entstand (User 06.11.). Ursache: Im Editor zeichnet Unreal die ganze Oberfläche mit dem Spiel-Thread – ein Bild, das 300 ms rechnet, friert jede Animation ein, egal wie sie gebaut ist. Ein Spinner, der sich „von allein“ dreht, gibt es nur auf dem Lade-Thread der Engine, und der ist im Editor abgeschaltet. Deshalb wurde die Arbeit selbst verteilt: Eine Messsonde zeigt je langem Bild, welche Schritte die Zeit verbraucht haben; danach wurden die größten Brocken in eigene Bilder gelegt, auf Arbeits-Threads verlagert oder schon beim Hauptmenü vorgeladen. Für das gepackte Spiel läuft derselbe Spinner zusätzlich über den Lade-Thread der Engine – dort dreht er sich unabhängig vom Spiel-Thread.",
      points: [
        "Messsonde: Jede schwere Funktion meldet ihre Zeit je Bild; dauert ein Bild länger als 50 ms (Konsole shady.HitchMs), steht im Log, was darin steckte („Hitch 312 ms: BuildSkyline 180, UpdateIntersections 90 | gen stage 17“). Nicht zugeordnete Zeit erscheint als „other“ – das ist meist Blueprint-Arbeit.",
        "Messung vorher (Play im Editor, zwei Spieler): die Ring-Stufe des Generators brauchte 2,3 s in EINEM Bild (Skyline 0,9 s, Gehwege 0,6 s, Kreuzungen 0,2 s, Straßen-Spawn ~0,6 s), der Inselform-Kern 0,6 s, die Passanten-Assets 0,6 s, der erste Park 0,9 s und jeder weitere Park 0,1–0,4 s – zusammen gut fünf Sekunden, in denen der Spinner nur ein paarmal springen konnte.",
        "Generator in Schritte zerlegt: Hauptstraßen eine je Bild, dann Ring, Innenstadt-Straßen eine je Bild, Gehwege eine Straße je Bild, Kreuzungen, Skyline; Relief, Inselfläche und Rasen-Deckschicht je ein Bild. Der Inselform-Kern rechnet jetzt auf einem Arbeits-Thread, der Generator fragt jedes Bild nach, ob er fertig ist.",
        "Vorladen beim Hauptmenü: Hochhaus-, Kaufhaus-, Krankenhaus- und Café-Meshes der Skyline, alle 1950er-Gebäude, Passanten-Figuren und Mannequins, die Park-Sträucher, Blumen und Requisiten sowie das Lot-System werden im Hintergrund geladen, während der Spieler noch das Menü sieht – vorher lud jedes dieser Systeme seine Assets mitten im Inselbau synchron.",
        "Passanten: Das Gehweg-Netz entsteht ein Bild nach dem Straßenbau statt im selben Bild, und die 300 Figuren werden in Paketen von 25 je Bild angelegt statt alle auf einmal. Die Inselfläche kocht ihre Kollision im Hintergrund.",
        "Gepacktes Spiel: Ladebild über den MoviePlayer der Engine (eigener Slate-Thread) mit demselben Spinner und Statustext ist gebaut, aber vorerst abgeschaltet (Konsole shady.MovieLoadingScreen): Im Test als eigenständiges Spiel stürzte die Engine direkt nach „New Game“ ab – tickt die Engine unter dem MoviePlayer weiter (nötig, sonst entsteht keine Insel), zählt der Render-Thread die Bilder nicht mit, und das Ray-Tracing-System bricht mit einer Assertion ab. Damit zeigt auch das gepackte Spiel das normale Slate-Ladebild, und der verteilte Inselbau ist die eigentliche Lösung auf beiden Wegen.",
        "Messung nachher (Play im Editor, ein Spieler, Seed 641163, Editor ungedrosselt): Insel nach 4,1 s fertig; 14 Bilder über 50 ms, zusammen 3,7 s, das längste 0,8 s – beim alten Ablauf am selben Tag (zwei Spieler, Seed 12345) waren es 19 Bilder, 7,1 s und 1,8 s. Der Inselform-Kern taucht gar nicht mehr auf, die Gehwege kosten 30–90 ms je Straße, das Vorladen braucht 4 s im Hintergrund. Was noch stockt: die Stadtparks (je Park 0,1–0,4 s, per Timer parallel zu den letzten Generator-Stufen), die Skyline (0,25 s in einem Bild) und die Kreuzungen (0,1 s). Nächster Schritt dafür: Parks und Skyline ebenfalls auf mehrere Bilder bzw. einen Arbeits-Thread verteilen.",
        "Zweite Runde (User: auch Parks und Skyline verteilen): Die Parks kamen nicht vom Rechnen – der Schleifen-Timer (alle 0,1 s) holte nach einem langen Bild nach und baute mehrere Parks in EINEM Bild. Jetzt entsteht einer je Bild, die Planung rechnet auf einem Arbeits-Thread, die Instanzen kommen in Paketen zu 120 je Bild, und der Generator wartet in einer eigenen Stufe auf die Parks, bevor er fertig meldet. Die Skyline plant nur noch und setzt die Gebäude in Paketen zu dreien je Schritt; ihr Ring-Test lief als 720-Kanten-Polygon viermal je 4-m-Kachel (150 ms) und ist jetzt eine Radius-Tabelle. Dazu zwei Funde aus dem Log: Park-Bäume, Autos und Straßen-Materialien fehlten in der Vorlade-Liste (erster Zugriff lud sie synchron, 0,4 s), und im Editor werden vorgeladene Nanite-Meshes noch im Hintergrund gebaut – der erste Zugriff wartete bis 0,8 s darauf. Der Generator startet deshalb erst, wenn alles geladen UND gebaut ist; solange dreht der Spinner einfach weiter.",
        "Messung nach der zweiten Runde (gleiche Bedingungen): längstes Bild 0,37 s (vorher 0,8 s, ganz am Anfang 1,8 s), Stillstand zusammen 3,0 s (3,7 / 7,1 s), aber 27 Bilder über 50 ms statt 14 – die Arbeit ist breiter verteilt, die einzelnen Hänger kürzer. Die Sonde zeigt jetzt auch Welt-Tick, Garbage Collection, Render-Thread und GPU je Bild: GC lief nie, Render-Thread und GPU liegen unter 10 ms. Was bleibt (je 0,07–0,27 s): der Straßenbau je Straße im Blueprint (Spline-Meshes samt Kollision), das Relief (0,1 s) mit der Inselfläche, der Start von Gehweg-Netz und Passanten, und bei Skyline-Paketen und Parks die Render-Vorbereitung am Bild-Ende – dafür bräuchte es eine Unreal-Insights-Aufzeichnung statt der Sonde.",
        "Dritte Runde, Unreal Insights (User: „trace it“): Ein Inselbau im Play aufgezeichnet (Trace.File vor New Game, Trace.Stop danach), die Game-Thread-Ereignisse ohne Oberfläche exportiert und je langem Bild die Eigenzeit je Timer ausgewertet (Skripte in). Überraschung: Ein guter Teil der bisher „unzugeordneten“ Zeit war das Messskript selbst – jeder MCP-Aufruf (Log abfragen, Konsole tippen) läuft im Game-Thread des Editors und kostet 60–135 ms; das Skript hat sich also teils selbst gemessen und pollt jetzt nicht mehr während des Baus. Echte Reste laut Trace: eine Blueprint-Schleife über alle 31921 Knoten beim Ringschluss (63 ms, jetzt C++), die Gehwege der Ringstraße (92 ms), das Upload-JPEG der Gras-Bibliothek, das beim ersten Anwenden entpackt und skaliert wurde (66 ms, jetzt beim Weltstart), das Relief (38 ms), die Render-Proxies der Inselfläche (~23 ms je Abschnitt) und ein Editor-Plugin-Tick (Mass, ~20 ms, nicht unseres).",
        "Messung danach (ein Spieler, Seed 641163, ohne Polling): längstes Bild 0,17 s (Ausgang 1,8 s), Stillstand zusammen 2,2 s (7,1 s), 23 Bilder über 50 ms, davon 8 über 100 ms. Übrig: Gehwege der Ringstraße (0,17 s), Relief plus Inselfläche (0,16 s je), Start von Gehweg-Netz und Passanten (0,12 s), Parks und Skyline-Pakete 0,07–0,16 s – alles Arbeit, die im Editor am Bild-Ende die Render-Proxies der neuen Komponenten anlegt."
      ],
      images: [],
      commits: []
    },
    {
      id: "zebra-0611", date: "2026-11-06", phase: "p5", title: "Verkehr und Passanten am Zebrastreifen: sieben Nachbesserungen aus dem Play-Test",
      summary: "Der User hat im Play beobachtet, wo Autos und Passanten einander noch im Weg standen, und die Fixes Schritt für Schritt abgenommen. Der Versuch vom 05.11., Autos als Hindernis für Passanten zu behandeln, wurde zurückgenommen; stattdessen gibt es jetzt einfache, sichtbare Regeln am Zebrastreifen – wer wann geht, wer wann fährt. Vom User committet.",
      points: [
        "Zurückgenommen: Autos als Hindernis für Passanten und Abbieger, die erst in der Kurve halten (05.11.). Im Play drängten sich Passanten um ein Auto auf dem Zebrastreifen. Es gilt wieder der vorige Stand – Abbieger warten an der Haltelinie, bis ihre Kurve frei ist; das Ausweichen ins Grüne bleibt.",
        "Passanten bleiben nie auf der Fahrbahn stehen: Trafen sich Gruppen von beiden Seiten in der Streifenmitte, standen sie Sekunden lang voreinander. Jetzt schlüpfen sie aneinander vorbei – notfalls enger und auch links am Gegenverkehr –, gehen auf der Fahrbahn immer mindestens langsam weiter und suchen die ganze Streifenbreite ab (rechts bevorzugt), statt neben den Streifen auszuweichen.",
        "Weg über den Zebrastreifen mittig: Der User fand die Ursache für das Ausweichen neben den Streifen – die Laufroute lag am Rand, weil beim Netzbau ein Gehweg-Knoten bis 1,5 m neben der Streifenmitte einfach übernommen wurde. Jetzt liegt jeder Zebra-Knoten genau auf der Mitte.",
        "Abbieger bleiben auf der Fahrbahn: Beim Rechtsabbiegen fuhren Autos über den Bordstein, weil der Bogen von Haltelinie zu Haltelinie die Innenecke abschnitt. Jetzt folgt der Bogen der Spur bis nahe an die Ecke und biegt dort enger ein (links etwas weicher).",
        "Ampel: Abbieger zuerst. Abbieger blieben stehen, solange Fußgänger auf ihrem Zebrastreifen liefen, und die Schlange wuchs. Jetzt haben Abbieger 10 Sekunden Vorlauf – Fußgänger bekommen erst Grün, wenn die Querrichtung schon 10 s fährt. Damit Fußgängern genug Zeit bleibt, ist Grün für Autos von 20 auf 28 s verlängert (Umlauf 64 statt 48 s).",
        "Auto auf dem Zebrastreifen durchlassen: Stand ein Auto noch auf dem Streifen, als Fußgänger Grün bekamen, liefen manche hindurch. Jetzt bleibt stehen, wer den Weg des Autos noch vor sich hat (gut einen halben Meter davor), bis es durch ist; wer schon vor dem Auto ist, geht weiter. Das Auto bremst nicht für die Wartenden und kann wegfahren.",
        "Autoschlange fährt zügig durch: In einer Schlange fuhr immer nur ein Auto in die Kreuzung, das nächste wartete an der Haltelinie. Jetzt folgen Autos aus derselben Zufahrt direkt hinterher (ihre Wege laufen nur auseinander), und die Ausfahrt gilt nur als belegt, wenn dort ein Auto steht oder kriecht. Nachbesserung: Der Vordermann blieb direkt nach der Kurve stehen, weil eine Vorrangregel für „zwei Autos an derselben Stelle“ auch den Nachfolger in der Kurve mitzählte – behoben."
      ],
      images: [],
      commits: []
    },
    {
      id: "spiel-v1", date: "2026-11-05", phase: "p7", title: "Spielbare Fassung V1: Das Machtdreieck läuft im Spiel – Monatstick, Bauen, Politik, Medien, NPC-Gegner, Hauptmenü, Multiplayer",
      summary: "Auftrag des Users: das ganze Konzept ins Spiel bringen – Baumenü, die drei Pfeiler ineinander, NPC-Gegner für den Spielspaß, Hauptmenü mit Optionen, Hosten und Beitreten; entwerfen ohne Rückfragen, selbst testen, Schwachstellen selbst beheben. Entstanden ist in einem Tag eine erste spielbare Fassung: Eine Partie läuft von Mai 1950 bis zum gewählten Endjahr, sechs Bezirke mit Menschen oder NPC-Gegnern, Monatstick für Bevölkerung, Arbeit, Strom, Steuern und Mieten, dazu Anhörungen, Gesetze, Wahlen, Ausschreibungen, Berichte, Kampagnen, Recherchen und Werbung mit echter Wirkung auf die vier Kapitalien, am Ende eine Rangliste. Gespielt wird über das Radialmenü und ein Aktions-Panel je Thema; der Host öffnet ein Spiel, andere treten per IP bei. Alle Zahlen sind Startwerte.",
      points: [
        "Architektur: Daten getrennt von Darstellung (Anstoß aus der Regel-Datei des Users). Der Spielstand ist eine Handvoll replizierter Listen im GameState – Spieler, Gebäude, Straßen, Felder, Anhörungen, Gesetze, Ausschuss, Berichte, Ausschreibungen, Recherchen, Gefälligkeiten, Kandidaten; ein Gebäude ist ein Datensatz, kein Actor. Jede Spieleraktion ist ein Befehl an den Server (geprüft: Geld, Feld, Epoche, Sperren), die Antwort kommt als Einblendung. Auf jedem Rechner baut ein Sync-Subsystem nach, was fehlt: Insel aus dem replizierten Seed, Feldfreigaben, Straßen, Lots und Gebäude als Static-Mesh-Komponenten in einer Ebene.",
        "Katalog: aus allen ein JSON mit 96 Familien und 200 Varianten (Teile, Lotgröße, Anchor, Pivot, Geschosse). Spielwerte je Gebäudeart in einer Tabelle (Kosten, Unterhalt, Einwohner, Jobs, Strom, Umsatz, Verschmutzung, Dienst, Zufriedenheit), mal Epochen-Faktor 1 / 3 / 8 / 15 / 25. Das Hochhaus 1950 (Mesh-Liste fehlt, weil in Neubearbeitung) wird aus den.uassets zusammengesetzt; Fabrik, Kraftwerk und Lagerhaus sind Platzhalter aus dem Industriebau.",
        "Wirtschaft je Monat und Bezirk: Zuzug Richtung Wohnraum mal Attraktivität, Pendler zu Jobs der Nachbarn, Strom (Fehlbetrag teuer von der Stadt, Überschuss verkauft; Gewerbeanteil privat bezahlt), Umsatz mal Nachfrage (Einwohner der Insel) mal Tourismus mal Bildung, Miete 20 $ je Einwohner privat, Grundsteuer 12 $ je Einwohner in die Kasse, 20 % Abgabe an die Stadt; Zufriedenheit aus Arbeit, Diensten, Strom, Verschmutzung und Parks; Bodenwert; Überziehung wird zum Kredit (0,5 % je Monat).",
        "Politik: das erste Baufeld ist frei, jedes weitere braucht eine Anhörung (Antrag, Ausschuss-Sitzung im Quartal, drei Stimmen nach Haltung und Gunst; Lobby mit Einfluss, Umschlag an Mitglieder bringt Verdacht, Einspruch, Berufung). Acht Gesetze (Gewerbesteuer, Grundsteuer, Umwelt, Mietdeckel, Höhenlimit, Zuschüsse, Pressegesetz, Vergabe) im Dezember mit NPC-Stimmen nach Profil. Wahl alle vier Jahre im November (Zufriedenheit, Ansehen, Kampagne, Gefälligkeiten; Verdacht über 60 halbiert). Ausschreibungen alle zwei Jahre, fair oder gelenkt. Verdacht 30 / 60 / 85: Gerüchte, Ermittlung, Verfahren mit Sperrfrist.",
        "Medien: ein Zeitungshaus ist ein eigener Sender (Reichweite, Glaubwürdigkeit), der Stadtanzeiger steht allen offen. Berichte entstehen aus Ereignissen (Neubau, Stromausfall, Anhörung, Verdacht) – Push, Spike, Spin, Gegendarstellung; Kampagnen (Image, Angriff, Thema, Kundgebung; abnehmender Ertrag); Recherchen in drei Stufen (Gerücht, Hinweis, Beweis; veröffentlichen, anzeigen, Anwälte); Werbung (Nachfrage plus, Plakatwände, Sponsoring).",
        "NPC-Gegner mit fünf Profilen (Bauherr, Industrieller, Händler, Pressebaron, Schattenmann): beantragen Felder, bauen nach Programm (der Industrielle beginnt mit dem Kraftwerk), nehmen Kredite, bieten bei Ausschreibungen, lobbyieren, stecken Umschläge zu, recherchieren gegen den Spitzenreiter, kandidieren.",
        "Oberfläche: die Karten oben (Bezirk, Kasse, News, Politik, Zufriedenheit, Uhr) zeigen echte Werte; Radialmenü-Einträge öffnen ein Aktions-Panel (Katalog, Sanieren, Anhörungen, Gesetze, Abstimmungen, Gefälligkeiten, Ausschreibungen, Sender, Berichte, Kampagne, Recherchen, Werbung, Finanzen, Bürger, Hilfe). Bauen: Katalog, Geister-Lot folgt der Maus, Klick = Befehl; Straße mit zwei Klicks. Lobby (Bezirk 1–6, Host startet), Endwertung mit Rangliste (Vermögen, Gebäudewert, Einfluss, Ansehen, Einwohner, Bodenwert, minus Verdacht); das Zentrum der Macht geht an den Ersten.",
        "Hauptmenü: Neues Spiel (Name, Seed, Endjahr 1970 / 1990 / 2010 / 2030, Sekunden je Monat 4 / 8 / 15 / 30), Beitreten (IP), Beenden; Optionen bleiben gespeichert. Hosten = Listen-Server im laufenden Level ohne Neuladen (Port 7777); wer beitritt, überspringt das Menü, sobald der Server spielt.",
        "Testen ohne Maus: Konsolenbefehle shady.NewGame / Pick / Start / Months / Look / RoadAt / PlaceAt / Cmd / Cheat / Dump / World – damit lief die ganze Partie im Play: Menü, Insel, Lobby, Start, NPC-Felder und -Bauten, Anhörung, Straße, Haus, Karten, Katalog, Anhörungs-Panel, Endwertung 1960.",
        "Schwachstellen aus dem eigenen Test, schon korrigiert: Einfluss verfiel auf 0 (jetzt Drift auf 20 ohne Amt); NPCs konnten sich keine großen Bauten leisten (Kredite, Programm-Reihenfolge); jedes Wohnhaus wurde eine Schlagzeile (nur noch Gewerbe und Öffentliches); Kaufhäuser verdienten nichts (Nachfrage-Teiler); Fabrikstrom leerte die Bezirkskasse (Gewerbeanteil privat); Stromausfall-Meldungen im Dauerfeuer (höchstens alle sechs Monate); Nichtstun gewann die Rangliste (Gebäudewert zählt 70 %).",
        "Zwei-Spieler-Test im Editor (Host und Client in einem Prozess): der Client überspringt das Menü, bekommt dieselbe Insel aus dem Seed, wählt in der Lobby seinen Bezirk, sieht nach dem Start Feldfreigaben und Bauten der NPCs und die Karten mit echten Werten. Gefunden und behoben: je Spieler lag ein Startbildschirm übereinander (jeder Pawn rief ihn auf, auch die replizierten der anderen – jetzt einer je Welt), der Client hieß „Speedy-…“ statt mit seinem Namen (Name aus den Optionen an den Server), Konsolenbefehle erreichten nur den Host (shady.World schaltet um).",
        "Noch nicht: Verträge zwischen Spielern (Strom, Güter), Bürgermeister spielbar, Bauen im fremden Bezirk, Güterketten; Spieler-Gebäude ohne Straße im Raster; Autos und Passanten laufen auf dem Client noch unabhängig vom Host (nur Kulisse). Blueprint-Warnungen auf dem Server für fremde Controller (Admin-Menü) sind harmlos.",
        "Nachkontrolle am 06.11.: Das vom Sync gesetzte Haus steht mit derselben Drehung wie das Lot-Haus (Front zur Straße), aber 1 m daneben – der Katalog nahm das „empfohlene“ Lot der Variante (5 × 7) statt des Lot-Standards 20 × 24 m mit Anchor je Variante; jetzt nimmt er zuerst den Lot-Standard, Epochen-Fassungen erben ihn. Zwei NPC mit gleichem Profil waren bis auf den Dollar identisch (alles deterministisch) – jetzt hat jeder NPC ein Temperament (Bautempo, Kreditlinie).",
        "Blueprint-Warnungen behoben (06.11., User): Der Server rief das BeginPlay des Spieler-Controllers auch für die Controller der anderen Spieler auf und versuchte dort, Admin-Menü und Tastenbelegung anzulegen – das gab „Accessed None“-Warnungen und öffnete bei jedem Start das Message-Log-Fenster. Jetzt prüft eine Abzweigung direkt nach BeginPlay, ob der Controller lokal ist; nur dann läuft die Kette. Im Zwei-Spieler-Test: keine Warnung mehr, Host und Client haben ihr Menü, der Server-Stellvertreter des Clients keins."
      ],
      concepts: ["spiel-v1", "machtdreieck"],
      images: [
        { src: "2026-11-05_spiel_v1_hud_start.jpg", cap: "Partie läuft (Mai 1951): Karten oben mit echten Werten – Bezirk Northgate, Kasse 400 k$ und 150 k$ privat, drei Meldungen aus dem Stadtanzeiger, Politik, Zufriedenheit, Datum" },
        { src: "2026-11-05_spiel_v1_bezirk_felder.jpg", cap: "Bezirk 1 mit seinen neun Baufeldern; Kasse und Zufriedenheit haben sich schon bewegt" },
        { src: "2026-11-05_spiel_v1_katalog_panel.jpg", cap: "Aktions-Panel Wohnen (1955): Haus 12 k$ und Mietshaus 60 k$ mit Unterhalt, Einwohnern und Strom – Knopf Build startet das Geister-Lot" },
        { src: "2026-11-05_spiel_v1_anhoerungen_endwertung.jpg", cap: "Endjahr 1960: Rangliste der sechs Bezirke mit Punkten, Vermögen, Einfluss, Ansehen, Verdacht und Einwohnern; daneben das Anhörungs-Panel mit Feld 1 offen und Anträgen für die übrigen" }
      ],
      commits: []
    },
    {
      id: "hud-karten", date: "2026-11-05", phase: "p6", title: "Spieler-Oberfläche: Karten oben klappen auf (Mockup)",
      summary: "Jede Karte der oberen Leiste lässt sich anklicken und klappt nach unten auf – die Karte wächst in die Höhe und, wo nötig, in die Breite. Darin stehen die Zusatzinformationen. Der Bezirk zeigt zugeklappt nur noch seinen Namen; auf dem frei gewordenen Platz sitzt eine neue Karte Stadtkasse. Alle Werte sind Platzhalter.",
      points: [
        "Bedienung: Klick auf eine Karte = auf/zu, immer nur eine offen; Klick in die Welt klappt zu. Ein kleiner Pfeil oben rechts zeigt, dass die Karte aufklappt; beim Überfahren wird sie heller. Das Aufklappen dauert 0,22 s (Höhe und Breite gleiten mit), der Inhalt wird dabei freigelegt, nicht umgebrochen.",
        "Bezirk: Kennzahlen (Einwohner, Wohnen, Versorgung, Grün), Einwohner der letzten 12 Monate, Altersgruppen, Flächennutzung, Kennzahlen (Arbeit, Miete, Pendelzeit, Kriminalität, Schulen, Ärzte) und was die Bewohner sich wünschen.",
        "Stadtkasse (neu): Kontostand und Wochenergebnis; aufgeklappt Einnahmen und Ausgaben je Woche als Balken, Netto, Kredit und Bonität.",
        "City News: zugeklappt die 3 neuesten, aufgeklappt 15 Meldungen mit Filter All / City / Politics / Economy / Life.",
        "Political Climate: Zustimmung zum Bürgermeister, Stadtrat mit 23 Sitzen (Parteien, eigene Koalition), Stimmung der Gruppen (Gewerkschaften, Wirtschaft, Kirchen, Presse) und was ansteht.",
        "Citizen Happiness: warum 88 % – Gründe mit Plus/Minus (Arbeit, Parks, Sicherheit … Miete, Verkehr, Luft), Zufriedenheit je Gruppe, Verlauf 30 Tage, häufigste Beschwerden.",
        "Uhr: Monatskalender, der dem Spieldatum folgt (heute markiert, Tage mit Termin mit Punkt), anstehende Termine und Wetter der nächsten 5 Tage.",
        "Testbefehl hud.Card <0–5> (0 Bezirk … 5 Uhr, -1 zu). Das Radialmenü (Medien → News öffnet die News-Karte) kommt später."
      ],
      images: [
        { src: "2026-11-05_hud_cards_closed.jpg", cap: "Zugeklappt: Bezirk nur mit Namen, daneben die neue Stadtkasse" },
        { src: "2026-11-05_hud_cards_district.jpg", cap: "Bezirk aufgeklappt" },
        { src: "2026-11-05_hud_cards_all.jpg", cap: "Stadtkasse, News (15 mit Filter), Politik, Zufriedenheit und Kalender aufgeklappt" }
      ],
      commits: []
    },
    {
      id: "machtdreieck", date: "2026-11-05", phase: "p6", title: "Konzept: Das Machtdreieck – Wirtschaft, Politik, Medien",
      summary: "Aus den Untermenü-Vorschlägen des Users (Politik: Kandidaten, Gesetze, Anhörungen, Abstimmungen, Bestechung; Medien: Sender, Berichte, Kampagnen, Recherchen, Werbung) ist ein Konzept geworden, wie die drei Kräfte des Spiels zusammenhängen: Die Wirtschaft erzeugt Geld, die Politik verteilt Rechte, die Medien verteilen Aufmerksamkeit – und Verdacht bremst alles Krumme. Vom User am selben Tag angenommen: Ausschreibungen bleiben der sechste Politik-Punkt, die Zahlen gelten als Startwerte und werden Stück für Stück angepasst, die Regel „Die Spitze zieht Blicke an“ wird ausprobiert.",
      points: [
        "Vier Kapitalien je Spieler: Geld, Einfluss (0–100), Ansehen (−100 bis +100, auch je Bezirk) und Verdacht (0–100 mit Schwellen 30 Gerüchte / 60 Ermittlung / 85 Verfahren). Alle verfallen – nichts lässt sich horten.",
        "Sechs Kanten des Dreiecks mit Startkursen: 100 k$ Spende ≈ +5 Einfluss und eine Gefälligkeit; 50 k$ Kampagne ≈ +8 Ansehen × Reichweite × Glaubwürdigkeit; ein Umschlag kostet 5–10 % des Vorteils und bringt Verdacht +15…+30. Der ehrliche Weg ist langsam und sauber, der krumme zwei- bis dreimal schneller.",
        "Sieben Balance-Regeln, damit keine Seite gewinnt: jede Kante hat eine Gegenkante; Medien verstärken Verdacht (Recherche), Politik dämpft ihn (Polizei, Richter); eigene Bremsen (Glaubwürdigkeit je Sender, Legitimität, Unterhalt); abnehmender Ertrag; die Spitze zieht Blicke an; keine Totalblockade; die Stadt ist Lückenfüller (Stadtanzeiger, Prüfstelle, Festland).",
        "Politik mit sechs Punkten (die fünf des Users plus Ausschreibungen – vom User bestätigt), Medien mit fünf – je mit Aktionen für Ring 3 des Radialmenüs. Das Menü im Spiel ist entsprechend umgebaut (noch ohne Wirkung).",
        "Wirtschaft als dritte Kraft: sieben Richtungen aus den Säulen (Energie, Produktion, Bau & Immobilien, Wohnen & Bildung, Handel & Logistik, Finanzen & Dienste, Tourismus & Öffentliches), Epochen-Index 1950–2030, Beispielpartie mit sechs Bezirken, Hebel-Tabelle (was Politik und Medien an der Wirtschaft drehen) und Größenordnungen für 1955: eine Kampagne kostet ein halbes Jahr Überschuss – gewollt.",
        "Zeitstruktur (Monat, Quartal, Jahr, Wahl alle vier Jahre, Leitgesetz je Epoche), drei Spielstile (ehrlicher Bauherr, Königsmacher, Pressebaron – keiner gewinnt allein), Beispielkette in acht Zügen mit Zahlen, Umsetzung in vier Stufen (V1 Anhörungen + Berichte + Werbung)."
      ],
      concepts: ["machtdreieck", "oekosystem", "wirtschaft"],
      images: [], commits: [], tags: ["Konzept", "UI"]
    },
    {
      id: "spieler-hud-v2", date: "2026-11-05", phase: "p5", title: "Spieler-Oberfläche, 2. Fassung: Glas-Karten, Icon-Radialmenü, schräges Objekt-Panel",
      summary: "Die Spieler-Oberfläche nach dem zweiten Referenzbild des Users umgebaut: halbtransparente Glas-Karten oben und unten, ein Radialmenü aus Icons mit Bögen für die Unterebenen und ein schräg gestelltes Info-Panel, wenn man ein Gebäude anklickt. Weiter alles ohne Wirkung im Spiel, Werte sind Platzhalter.",
      points: [
        "Oben fünf Karten: Bezirk mit Kennzahlen (Einwohner, Wohnen, Dienste, Grünflächen), City News mit drei Meldungen, Political Climate (Links-Rechts-Skala, „Stable“), Citizen Happiness (88 % mit Verlaufslinie), Uhr/Datum/Wetter mit Tempo-Knöpfen.",
        "Unten links District Performance mit vier Ringanzeigen (Economy, Infrastructure, Environment, Safety), Mitte Mayor's Message (vier Sprüche im Wechsel, Punkte zum Blättern), rechts runde Schnellknöpfe (Transit, Nature, Roads, Leistung an/aus, Zahnrad = Panels ein-/ausschalten) und eine Minikarte mit sechs Bezirken.",
        "Tab: Radialmenü links im Bild. Innen 8 Themen als Glas-Segmente nur mit Icons (Buildings, Nature, Transport, Utilities, Politics, Media, Finances, Citizens), Mitte = Zurück. Ebene 2 und 3 öffnen sich als Bögen nach außen neben dem gewählten Segment (z. B. Nature → Trees → Oak, Pine, Birch), darunter der Pfad „Nature > Trees > Oak“.",
        "Klick auf ein Gebäude (Hochhaus, Kaufhaus, Krankenhaus, Café, Wohnhaus …): schräg gestelltes Panel rechts mit erfundenem Namen, Art/Jahrzehnt/Level, Belegung, Bewohner bzw. Angestellte, Zufriedenheit, Einnahmen, Unterhalt, Gewinn, Wert und Einnahmen-Verlauf der letzten 8 Wochen. Klick ins Leere oder × schließt es.",
        "Icons aus FontAwesome 4.4 (freie Lizenz SIL OFL). Testbefehl in der Konsole: hud.Inspect [x y] öffnet das Panel für die Bildmitte bzw. einen Bildpunkt.",
        "Gebäude werden am Mesh-Namen erkannt (SM_BLD_<Jahr>_<Typ>_…); die Werte hängen am Gebäude, bleiben also beim erneuten Anklicken gleich.",
        "Nachbesserung nach dem Test des Users: Das Panel war nur geschert (Parallelogramm, alle Zeilen gleich schräg, Kanten mit Treppenstufen). Jetzt echte Perspektive wie im Referenzbild – um die senkrechte Achse gedreht, rechte Kante näher und höher, oben steiler als unten. Slate kann nur 2D, deshalb wird das Panel jedes Bild in eine Textur gezeichnet und als fein unterteiltes Gitter projiziert; ein durchsichtiger Rand in der Textur macht die Kanten glatt. Der Schließen-Knopf wird über die Rückrechnung der Projektion getroffen.",
        "Zweite Nachbesserung: Winkel aus dem Referenzbild nachgemessen (Oberkante 6,8°, Unterkante 2,8°, rechte Kante 1,17 × so hoch, Fluchtpunkt auf 71 % Höhe, Seitenkanten laufen nach unten leicht zusammen) und das Modell in Python angepasst: Drehung 14°, Augabstand 3 halbe Kartenbreiten, 1,5° nach hinten gekippt, Auge links neben der Karte (Kamera schaut aus der Bildmitte). Im Spiel nachgemessen: 6,6° / 2,4° / 1,18. Dazu Glaskante links und unten, Lichtkante oben/links und ein weicher Schatten – die Scheibe hat jetzt Dicke.",
        "Dritte Runde (User): Der dicke Glasrand links gefiel nicht – entfernt, nur noch feine Lichtkanten und der weiche Schatten. Winkel samt Seitenverhältnis neu angepasst (Drehung 16°, Augabstand 3,4, Kippung 0,5°, Auge rechts der Mitte). Im Spiel nachgemessen: Oberkante 6,3°, Unterkante 2,8°, rechte Kante 1,16 × so hoch (Referenz 6,8° / 2,8° / 1,17).",
        "Vergrößern für bessere Lesbarkeit (User): Strg + Mausrad vergrößert/verkleinert das Element unter der Maus – Radialmenü oder Info-Panel (sonst das offene Menü, ohne Menü das Panel), 0,6–2,5 ×, in 10-%-Schritten. Das Panel wird dabei schärfer gerendert, nicht nur hochskaliert. Größen bleiben gespeichert; Testbefehl hud.Zoom <Menü> <Panel>. Strg fährt dafür die Kamera nicht mehr runter (dafür gibt es Q/E)."
      ],
      images: [
        { src: "2026-11-05_player_hud_v2.jpg", cap: "Neue Oberfläche über der Insel, Radialmenü bei Nature" },
        { src: "2026-11-05_player_hud_v2_radial.jpg", cap: "Nature → Trees → Oak: Icon-Ring innen, Bögen für Ebene 2 und 3" },
        { src: "2026-11-05_player_hud_v2_object_panel.jpg", cap: "Erste Fassung: Panel nur geschert (Kanten mit Stufen)" },
        { src: "2026-11-05_player_hud_v2_object_panel_perspective.jpg", cap: "Nachgebessert: echte Perspektive mit glatten Kanten" },
        { src: "2026-11-05_player_hud_v2_object_panel_measured.jpg", cap: "Winkel nach dem Referenzbild, mit Glaskante und Schatten" },
        { src: "2026-11-05_object_panel_norim.jpg", cap: "Ohne dicken Rand, Winkel nachgeschärft" },
        { src: "2026-11-05_hud_zoom.jpg", cap: "Strg + Mausrad: Radialmenü 1,5 ×, Panel 1,4 ×" }
      ],
      compare: { before: "2026-11-04_player_hud.jpg", after: "2026-11-05_player_hud_v2.jpg", cap: "Vorher: erster Prototyp (04.11.) – nachher: 2. Fassung nach dem neuen Referenzbild" },
      commits: []
    },
    {
      id: "gebaeude-showcase", date: "2026-11-05", phase: "p5", title: "Gebäude-Showcase in Unreal",
      summary: "Eigenes Level mit allen importierten Gebäuden: eine Reihe je Gebäudeart, Spalten 1950 → 2030, Varianten A/B/C nebeneinander, je Familie eine schräge Infotafel mit den Daten aus. Das Insel-Level bleibt unberührt.",
      points: [
        "Daten kommen nur aus (importiert und validiert): 91 Familien, 191 Varianten, rund 3000 Actors auf ~1,3 × 2,2 km.",
        "Infotafel links neben jeder Familie: Name, ID, Revision, Unikat, Stil, Varianten, Geschosse, Höhe, Grundfläche, Lot, Dreiecke/Nanite, Vorgänger/Nachfolger, Status. Vor jeder Variante ein kleines Pult (Form, Geschosse, Höhe, Grundfläche).",
        "Sanierungsketten stehen in derselben Reihe (eine Familie erbt die Reihe ihres Vorgängers) – so sieht man z. B. Hochhaus 1950 → 1970 → 1990 → 2010 → 2030 nebeneinander.",
        "Neu aufbauen, wenn der Autopilot Gebäude ergänzt hat:, dann (ca. 5 min, nur ohne Play). Alle Showcase-Actors tragen das Tag Showcase und werden vorher entfernt.",
        "Lektion: der Editor im Hintergrund drosselt auf ~3 Bilder/s, jeder MCP-Aufruf wartet darauf – das Skript schaltet die Drosselung für den Aufbau ab (30-mal schneller).",
        "Play im Showcase mit derselben Steuerung wie auf der Insel: WASD, rechte Maustaste + Mausrad = Kameratempo, F = zu Fuß, F10 = Admin-Menü. Startbildschirm und Inselbau entfallen dort."
      ],
      images: [
        { src: "2026-11-05_showcase.jpg", cap: "Showcase von oben: Reihen je Gebäudeart, Infotafeln links der Familien" }
      ],
      commits: []
    },
    {
      id: "spieler-hud-radial", date: "2026-11-04", phase: "p5", title: "Spieler-Oberfläche mit Radialmenü (Prototyp)",
      summary: "Erste Spieler-Oberfläche zum Ausprobieren, nach einem Referenzbild des Users: Statusleiste oben, Tab öffnet ein farbiges Radialmenü mit drei Ebenen. Noch ohne Wirkung im Spiel – es geht ums Gefühl für die Menüführung.",
      points: [
        "Nach dem Startbildschirm ist sofort die Spieler-Oberfläche da; das Admin-Menü ist versteckt und kommt nur noch per F10 (vorher Taste B).",
        "Oben: Leiste mit Logo, Schaltern für die Panels (District, News, Politics, Satisfaction, Finances), Datum ab Mo, 1. Mai 1950 und Tempo-Knöpfen. Panels lassen sich ein- und ausschalten (Schalter oder ×), gemerkt in ",
        "Tab: Radialmenü mit 6 Hauptthemen in eigenen Farben (Build, Finances, Politics, Infrastructure, Services, Research). Klick oder Taste 1–9 öffnet rundherum den nächsten Ring (z. B. Build → Zones, Buildings, Design, Lots, Renovate, Demolish), dort nochmal (Buildings → Houses, Apartments, Office towers …).",
        "Rechtsklick / Rücktaste / Klick in die Mitte = eine Ebene zurück, Klick daneben oder Tab = zu. Eine Aktion zeigt nur „not implemented yet“.",
        "Kleiner als im Referenzbild: Durchmesser ~480 statt ~800 Punkte (bei 1080p). Werte in den Panels sind Platzhalter.",
        "Technik: reines Slate in C++, Tasten über einen Slate-Input-Preprocessor (Tab würde sonst von der Fokus-Navigation geschluckt). Der Zu-Fuß-Modus erkennt das Admin-Menü jetzt am Widget statt am Mauszeiger."
      ],
      images: [
        { src: "2026-11-04_player_hud.jpg", cap: "Statusleiste und Radialmenü, Ebene 1 (Tab)" },
        { src: "2026-11-04_player_hud_radial.jpg", cap: "Build → Buildings: drei Ringe, die Aktionen außen nummeriert" }
      ],
      commits: []
    },
    {
      id: "mergedtower02-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Turm auf vier Lots 2030 (Neubau)",
      summary: "Der Sägezahnturm: neues Bürohochhaus in Holz-Hybridbauweise auf vier zusammengelegten Lots (2 × 2), 48 × 36 m und ≈ 180 m – zweithöchstes Gebäude nach der City Hall; Pfeiler, Technikbänder, Portal und Attika in dunklem Räuchereiche-Holz, warmes Klarglas, dunkle Bronze; die Krone sind drei Sheds mit senkrechtem Nordlicht-Glas zur Straße und dunkelblauen PV-Flächen nach Süden, Sedum dazwischen, Messing-Buchstaben „SUMMIT TOWER“.",
      points: [
        "Neubau (Unikat) auf 4 Lots 2 × 2 (Lot 64 × 56 m), Grundriss 48 × 36 m, eine Formvariante.",
        "44–49 Regelgeschosse (Standard 47 ≈ 179,5 m, max. 186,5 m) unter der City Hall 2030.",
        "Neue Krone: drei Sheds (Nordlicht + PV), Sedum-Streifen dazwischen – die einzige Sägezahn-Silhouette der Insel.",
        "Recherche: Holz-Hybrid-Bürotürme um 180 m, Sheddächer mit PV auf den Südflächen.",
        "Prüfung 168/168 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_mergedtower02_2030.jpg", cap: "Turm auf vier Lots 2030 von Nordost" },
        { src: "2026-11-06_mergedtower02_2030_ost.jpg", cap: "Ostansicht: Sägezahn-Krone" },
        { src: "2026-11-06_mergedtower02_2030_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-06_mergedtower02_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      compare: { before: "2026-11-06_mergedtower02_2030_vergleich_mt01.jpg", after: "2026-11-06_mergedtower02_2030.jpg", cap: "Turm auf zwei Lots 2030 → Turm auf vier Lots 2030" },
      commits: []
    },
    {
      id: "mergedtower-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Turm auf zwei Lots 2030",
      summary: "Der Solarkeil: die Glasscheibe auf zwei Lots wächst in Holz-Hybridbauweise um rund zehn Geschosse auf ≈ 145 m; Eckpfeiler, Technikbänder, Portal und Attika in heller Lärche, warmes Klarglas, Rahmen und Rippen dunkle Bronze, der Kronenkeil wird dunkelblaues PV-Glas, Sedum darunter, Messing-Buchstaben „ISLAND TOWER“.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_MergedTower_01: Scheibe, Pfeiler, Raster, Bänder, Lobby, Portal, Attika und Keil wie bisher.",
        "31–36 Regelgeschosse (Standard 35 ≈ 145,5 m, max. 149 m) – Ausnahme wegen Queue-Hinweis „~150 m“.",
        "Helle Lärche, warmes Klarglas, dunkle Bronze, dunkelblaues PV-Glas, Naturstein, Sedum, Messing.",
        "Recherche: Holz-Hybrid-Hochhäuser und vorgefertigte Holz-Aufstockungen bestehender Bürobauten mit PV und Gründach.",
        "Prüfung 196/196 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_mergedtower_2030.jpg", cap: "Turm auf zwei Lots 2030 von Nordost" },
        { src: "2026-11-06_mergedtower_2030_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-06_mergedtower_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_mergedtower_2030_vergleich_2010.jpg", after: "2026-11-06_mergedtower_2030.jpg", cap: "Turm auf zwei Lots 2010 → 2030" },
      commits: []
    },
    {
      id: "parkinggarage-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Parkhaus 2030",
      summary: "Das Holzparkhaus: die petrolfarbenen Brüstungsbänder werden mit heller Lärche verkleidet, der Beton warmhell beschichtet, Treppenturm-Rahmen und Tür dunkle Bronze, warmes Klarglas, dunkle Bronze-Buchstaben „CITY PARKING“ auf dem Holzband, das blaue „P“ bleibt, warmweiße Lichtmasten.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_ParkingGarage_01: Block, Decks, Rampe, Treppenturm, Einfahrt und Lichtmasten wie bisher.",
        "6–9 Parkdecks (Standard 7), +1 Deck.",
        "Helle Lärche, warmheller Beton, dunkle Bronze, warmes Klarglas, blaues P, rot-weiße Schranken.",
        "Recherche: Holz-Hybrid-Parkhäuser und Mobility Hubs mit Holzfassade, PV und Gründach.",
        "Prüfung 186/186 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_parkinggarage_2030.jpg", cap: "Parkhaus 2030 von Nordost" },
        { src: "2026-11-06_parkinggarage_2030_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-06_parkinggarage_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_parkinggarage_2030_vergleich_2010.jpg", after: "2026-11-06_parkinggarage_2030.jpg", cap: "Parkhaus 2010 → 2030" },
      commits: []
    },
    {
      id: "tvtower-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Fernsehturm 2030",
      summary: "Der Bronzekopf: der Fernsehturm wird saniert – Schaft warmweiß beschichtet, Turmkopf, Plattformen und Pavillon-Attika in dunklen Bronzepaneelen, warmes Klarglas im Aussichts- und Restaurantgeschoss, Sedum-Dach auf dem Pavillon, Messing-Buchstaben „TV TOWER“; rot-weißer Mast und Warnleuchte bleiben.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_TVTower_01: Pavillon, Schaft, Kopf, Plattformen und Mast wie bisher.",
        "7–9 Schaftsegmente (Standard 8, ≈ 107 m), Mast unverändert.",
        "Warmweißer Beton, dunkle Bronze, warmes Klarglas, Sedum, Messing, Mast rot-weiß.",
        "Recherche: sanierte Fernsehtürme mit neuen Aussichts- und Restaurantgeschossen.",
        "Prüfung 173/173 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_tvtower_2030.jpg", cap: "Fernsehturm 2030 von Nordost" },
        { src: "2026-11-06_tvtower_2030_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-06_tvtower_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_tvtower_2030_vergleich_2010.jpg", after: "2026-11-06_tvtower_2030.jpg", cap: "Fernsehturm 2010 → 2030" },
      commits: []
    },
    {
      id: "postoffice-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Postamt 2030",
      summary: "Das Solarglas-Postamt: der hellgraue Granit bleibt, die weißen Fensterbänder und die Attika werden helle Lärche, Fenster und Türen dunkle Bronze mit warmem Klarglas, der Uhr-Risalit bekommt dunkelblaue Solarglas-Paneele, Sedum-Dach, Messing-Buchstaben „POST OFFICE“, die gelben Rampentore bleiben.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_PostOffice_01: Block, Schalterhalle, Risalit mit Uhr, Vordach und Postrampe wie bisher.",
        "7–12 Bürogeschosse (Standard 8), Unikat-Grenze 56 m.",
        "Granit, helle Lärche, dunkelblaues Solarglas, dunkle Bronze, Sedum, Messing, Signalgelb.",
        "Recherche: Umbauten historischer Post- und Verwaltungsgebäude mit Holzaufstockung, Gründach und PV.",
        "Prüfung 199/199 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_postoffice_2030.jpg", cap: "Postamt 2030 von Nordost" },
        { src: "2026-11-06_postoffice_2030_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-06_postoffice_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_postoffice_2030_vergleich_2010.jpg", after: "2026-11-06_postoffice_2030.jpg", cap: "Postamt 2010 → 2030" },
      commits: []
    },
    {
      id: "school-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Schule 2030",
      summary: "Die Holzband-Schule: der rotbraune Klinker bleibt, die limettengrünen Brüstungsbänder werden helle Lärche, Fenster und Sonnenschutzkästen dunkle Bronze, der Eingangsrisalit mit Uhr warmweiß verputzt, Holztüren, Sedum-Dach, Messing-Buchstaben „PUBLIC SCHOOL“.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_School_01: Formen A/B/C, Klassenfenster, Risalit mit Uhr, Vordach und Türen wie bisher.",
        "3–6 Obergeschosse (Standard 5), Flachbau-Regel 0…+1.",
        "Klinker, helle Lärche, dunkle Bronze, warmweißer Putz, Sedum, Messing.",
        "Recherche: Schulsanierungen mit Holzfassaden, Gründach und PV (Netto-Null-Schulen).",
        "Prüfung 457/457 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_school_2030.jpg", cap: "Schule 2030 (Form A) von Nordost" },
        { src: "2026-11-06_school_2030_spiel.jpg", cap: "Spielansicht (Formen A, B, C)" },
        { src: "2026-11-06_school_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_school_2030_vergleich_2010.jpg", after: "2026-11-06_school_2030.jpg", cap: "Schule 2010 → 2030" },
      commits: []
    },
    {
      id: "gasstation-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Tankstelle 2030",
      summary: "Die Ladetankstelle: die Tankstelle wird zum Ladepunkt – türkise Ladesäulen statt Zapfsäulen auf derselben Insel, Fassade in warmer Douglasien-Schalung, weiße Blenden mit türkiser Lichtleiste, dunkle Bronzerahmen, Sedum-Dach; die Werkstatt „MOTOR SERVICE“ und die Schildwand „GAS“ bleiben.",
      points: [
        "Sanierung von BLD_2010_GasStation_01 ohne Aufstockung: Formen A/B, Büro, Tore, Vordach, Zapfinsel und Schildwand wie bisher.",
        "Douglasie, Türkis (Ladesäulen, Lichtleiste, Schrift), dunkle Bronze, warmes Klarglas, Sedum.",
        "Recherche: Umbau von Tankstellen zu Ladeparks mit Holzvordach und PV.",
        "Prüfung 334/334 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_gasstation_2030.jpg", cap: "Tankstelle 2030 (Form A) von Nordost" },
        { src: "2026-11-06_gasstation_2030_spiel.jpg", cap: "Spielansicht (Formen A und B)" },
        { src: "2026-11-06_gasstation_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_gasstation_2030_vergleich_2010.jpg", after: "2026-11-06_gasstation_2030.jpg", cap: "Tankstelle 2010 → 2030" },
      commits: []
    },
    {
      id: "apartmentblock-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Mehrfamilien-Block 2030",
      summary: "Der Silberholz-Block: der Wohnblock wird seriell saniert – vorgefertigte Holzelemente mit silbergrauer Lärche über der alten Fassade, dunkle Bronzefenster und Balkonbrüstungen, warmgraue Recyclingbeton-Pfeiler, Sedum-Dach mit PV und Wärmepumpe; Eichentür und Messing-Buchstaben „ELM COURT“.",
      points: [
        "Serielle Sanierung + Aufstockung von BLD_2010_ApartmentBlock_01: Umriss, Fenster, vier Balkonstapel, Treppenhaus, Eingang und Dachaufbau wie bisher.",
        "7–15 Obergeschosse (Standard 8 = neun Geschosse), Wohnblock-Regel +1…+2.",
        "Silbergraue Lärche, Recyclingbeton, dunkle Bronze, warmes Klarglas, warmgrauer Stein, Sedum + PV, Messing.",
        "Recherche: serielle Sanierung (Energiesprong) mit vorgefertigten Holzfassaden, PV-Dach und Wärmepumpe.",
        "Prüfung 208/208 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_apartmentblock_2030.jpg", cap: "Mehrfamilien-Block 2030 von Nordost" },
        { src: "2026-11-06_apartmentblock_2030_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-06_apartmentblock_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_apartmentblock_2030_vergleich_2010.jpg", after: "2026-11-06_apartmentblock_2030.jpg", cap: "Mehrfamilien-Block 2010 → 2030" },
      commits: []
    },
    {
      id: "theater-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Kino 2030",
      summary: "Der grüne Saal: der fensterlose Kinosaal verschwindet hinter einer lebenden Pflanzwand, die Front bekommt helle Lärchen-Lisenen mit dunklen Bronzepaneelen und warmem Klarglas; warmgrauer Steinsockel, Sedum-Dach mit PV – davor leuchtet weiter der rote Pylon „CINEMA“.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_Theater_01: Umriss, Lisenen, Fenster, Portal, Marquee, Bühnentür und Pylon wie bisher.",
        "5–11 Obergeschosse (Standard 6), Flachbau-Regel +1…+2.",
        "Pflanzwand (Slot `Render`), Lärche, dunkle Bronze, warmes Klarglas, warmgrauer Stein, Sedum + PV.",
        "Recherche: nachgerüstete Living Walls auf fensterarmen Bestandsfassaden, Kino in Holzbau mit Lehmwänden.",
        "Prüfung 207/207 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_theater_2030.jpg", cap: "Kino 2030 von Nordost" },
        { src: "2026-11-06_theater_2030_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-06_theater_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_theater_2030_vergleich_2010.jpg", after: "2026-11-06_theater_2030.jpg", cap: "Kino 2010 → 2030" },
      commits: []
    },
    {
      id: "hotel-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Grand Hotel 2030",
      summary: "Der Gartenturm: die Lisenen werden honigbraune Holzlamellen, jede Brüstung ein bepflanzter Trog, Rahmen, Portal und Marquee aus dunkler Bronze, warmes Klarglas, warmgrauer Steinsockel und Sedum-Dachgärten; „GRAND HOTEL“ in Messing. Zwei Geschosse mehr, unter Zeitungshaus und Bank.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_Hotel_01: Umriss, Lisenen-Achsen, Fenster, Rücksprünge, Portal, Marquee und Dachschild wie bisher.",
        "16–27 Zimmergeschosse (Standard 24 ≈ 101,7 m), oben auf +2 gedeckelt (Höhenhierarchie 2030).",
        "Thermoholz-Lamellen, Pflanztröge, dunkle Bronze, warmes Klarglas, warmgrauer Stein, Sedum, Messing-Buchstaben.",
        "Recherche: Hoteltürme mit Holzschirmen und Pflanzen an der Fassade, Holz-Hybrid-Hotelbauten mit Dachgärten.",
        "Prüfung 212/212 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_hotel_2030.jpg", cap: "Grand Hotel 2030 von Nordost" },
        { src: "2026-11-06_hotel_2030_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-06_hotel_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_hotel_2030_vergleich_2010.jpg", after: "2026-11-06_hotel_2030.jpg", cap: "Grand Hotel 2010 → 2030" },
      commits: []
    },
    {
      id: "firestation-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Feuerwache 2030",
      summary: "Die dunkle Holzwache: die Wache wächst um ein bis zwei Geschosse und wird mit dunkel verkohlter Lärche verkleidet – davor leuchten die roten Tore, die rote Attika und die Turmkappe umso stärker; warmgrauer Natursteinsockel, Sedum-Dach, weiße Buchstaben.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_FireStation_01 in allen drei Formen: Umrisse, Tore, Fenster, Türen, Vordach und Schlauchturm wie bisher.",
        "5–10 Obergeschosse (Standard 5), Niedrig-Regel +1…+2.",
        "Verkohlte Lärche (Slot `Render`), warmgrauer Naturstein, dunkle Bronze, warmes Klarglas, Sedum; Rot bleibt die Kennung.",
        "Recherche: Feuerwachen in Holzbauweise mit Netto-Null-Ziel, Sicherheitsbauten mit Gründach und PV.",
        "Prüfung 447/447 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_firestation_2030.jpg", cap: "Feuerwache 2030 (Form A) von Nordost" },
        { src: "2026-11-06_firestation_2030_familie.jpg", cap: "Familie A/B/C in der Spielansicht" },
        { src: "2026-11-06_firestation_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_firestation_2030_vergleich_2010.jpg", after: "2026-11-06_firestation_2030.jpg", cap: "Feuerwache 2010 → 2030" },
      commits: []
    },
    {
      id: "police-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Polizeiwache 2030",
      summary: "Die grüne Wache: die Bezirkswache bekommt eine waagrechte Lärchenschalung, helle Recyclingbeton-Faschen, warmes Glas in dunklen Bronzerahmen, einen warmgrauen Natursteinsockel und begrünte Dächer; Dachband, blaue Lampen und Schriftzug bleiben. Ein bis zwei Geschosse mehr.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_Police_01 in allen drei Formen: Umrisse, Eingang, Lampen, Garagen, Zellenfenster, Funkmast wie bisher.",
        "5–11 Regelgeschosse (Standard 6), Niedrig-Regel +1…+2.",
        "Lärchenschalung (Slot `Brick`), Recyclingbeton, warmes Klarglas, dunkle Bronze, Sedum; Polizeiblau als Dachband.",
        "Recherche: Polizeidienststellen als Netto-Null-Umbauten mit Gründächern, Holz-Hybrid-Polizeibauten.",
        "Prüfung 440/440 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_police_2030.jpg", cap: "Polizeiwache 2030 (Form A) von Nordost" },
        { src: "2026-11-06_police_2030_familie.jpg", cap: "Familie A/B/C in der Spielansicht" },
        { src: "2026-11-06_police_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_police_2030_vergleich_2010.jpg", after: "2026-11-06_police_2030.jpg", cap: "Polizeiwache 2010 → 2030" },
      commits: []
    },
    {
      id: "plaza-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Plaza 2030",
      summary: "Der Schwammplatz: gleiche Anlage, entsiegelte Oberfläche – sandgraues durchlässiges Kleinpflaster mit grünen Rasenfugen-Bändern im alten Layout, heller Recyclingbeton, ein Obelisk aus dunkler Bronze mit leuchtender Opalglas-Spitze, Solar-Lichtstelen, Lärchenbänke und Wildblumen in den Rundbeeten.",
      points: [
        "Neuausstattung von BLD_2010_Plaza_01 auf gleicher Fläche: Layout, Treppen, Becken, Obelisk-Form, Kiosk, Bäume und Requisiten-Plätze wie bisher; der Platz wächst nicht.",
        "Durchlässiges Kleinpflaster, grüne Rasenfugen-Bänder, Recyclingbeton für Plattform, Mauern, Beete und Becken.",
        "Obelisk aus dunkler Bronze mit Opalglas-Lichtspitze, Inschrift Bronze.",
        "Stadtmöbel wie im Stadtpark 2030 (Solar-Stele 3,5 m, Lärchenbank, Lärchen-Behälter); Kiosk mit Bronzerahmen und -tonne.",
        "Recherche: entsiegelte Stadtplätze nach dem Schwammstadt-Prinzip, Rathausplätze mit durchlässigem Pflaster und Regenspeicher.",
        "Prüfung 238/238 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-06_plaza_2030.jpg", cap: "Plaza 2030 von Nordost" },
        { src: "2026-11-06_plaza_2030_draufsicht.jpg", cap: "Draufsicht: Bänderlayout wie 2010, jetzt Rasenfugen" },
        { src: "2026-11-06_plaza_2030_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-06_plaza_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_plaza_2030_vergleich_2010.jpg", after: "2026-11-06_plaza_2030.jpg", cap: "Plaza 2010 → 2030" },
      commits: []
    },
    {
      id: "newspaper-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Zeitungshaus 2030",
      summary: "Das Holz-Bänderhaus: der DAILY-NEWS-Turm wächst um zwei Geschosse auf rund 115 m – helle Eschenholz-Schalung auf den Bändern, warmes Klarglas, ein dunkler PV-Mittelstreifen, ein warmweißes LED-Band, begrünte Rücksprünge; rote Trommel und leuchtende Kugel bleiben das Wahrzeichen.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_Newspaper_01 auf demselben Lot (26 × 18 m); Portal, Druckhalle, Rampen, Rücksprünge, Trommel und Kugel wie bisher.",
        "Aufstockung +2…+3 (15–26 Bürogeschosse, Standard 25): 79.6–118.1 m, Standard 114.6 m – Hierarchie 2030: über den normalen Hochhäusern, unter der Großbank.",
        "Eschen-Stülpschalung, warmes Klarglas, PV-Mittelstreifen, dunkle Bronze, warmgrauer Naturstein, warmweißes LED-Band, Sedum-Terrassen.",
        "Recherche: Medienhäuser in Holz-Hybridbauweise, Holz-Hybrid-Hochhäuser mit PV-Glas.",
        "Prüfung 193/193 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien unter)."
      ],
      images: [
        { src: "2026-11-06_newspaper_2030.jpg", cap: "Zeitungshaus 2030 von Nordost (Standard B25)" },
        { src: "2026-11-06_newspaper_2030_portal.jpg", cap: "Portal mit Schildband und warmweißem LED-Band" },
        { src: "2026-11-06_newspaper_2030_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-06_newspaper_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_newspaper_2030_vergleich_2010.jpg", after: "2026-11-06_newspaper_2030.jpg", cap: "Zeitungshaus 2010 → 2030" },
      commits: []
    },
    {
      id: "bank-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Großbank 2030",
      summary: "Der Solar-Tresor: die ISLAND TRUST BANK bleibt auf ihren zwei Lots, wächst um drei Geschosse auf rund 120 m und erzeugt Strom aus der Fassade – helle Terrazzo-Platten, warmes Klarglas, dunkle PV-Brüstungen, begrünte Terrassen und eine Tonne aus PV-Glas mit Bronze-Rippen.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_Bank_01 auf denselben 2 Lots (64 × 24 m); Loggia, Stufen, Hallenfenster, Rücksprünge und Krone wie bisher.",
        "Aufstockung +2…+4 (14–27 Bürogeschosse, Standard 25): 80.2–127.0 m, Standard 119.8 m – Hierarchie 2030: über den normalen Hochhäusern, unter den Türmen auf zusammengelegten Lots.",
        "Terrazzo-Platten, warmes Klarglas, dunkle PV-Brüstungen und PV-Tonne, dunkle Bronze, warmgrauer Naturstein, Sedum-Terrassen.",
        "Recherche: Bank-Hochhäuser mit Photovoltaik in den Brüstungsfeldern, Öko-Sanierungen von Firmenzentralen mit BIPV-Glas.",
        "Prüfung 188/188 nach dem Unreal-Import (4 Meshes Nanite, 11 Materialien unter)."
      ],
      images: [
        { src: "2026-11-06_bank_2030.jpg", cap: "Großbank 2030 von Nordost (Standard B25)" },
        { src: "2026-11-06_bank_2030_loggia.jpg", cap: "Loggia mit Bronze-Schrift, PV-Brüstungen" },
        { src: "2026-11-06_bank_2030_spiel.jpg", cap: "Spielansicht auf dem Doppel-Lot" },
        { src: "2026-11-06_bank_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_bank_2030_vergleich_2010.jpg", after: "2026-11-06_bank_2030.jpg", cap: "Großbank 2010 → 2030" },
      commits: []
    },
    {
      id: "cityhall-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: City Hall 2030",
      summary: "Das grüne Rathaus: der Block wächst auf die zwei Lots dahinter (80 × 48 m) und um zwei Geschosse, bekommt eine warme Haut aus Lärchenpaneelen mit bepflanzten Brüstungen und ein Sedum-Dach mit Wärmepumpen; der Uhrturm steigt auf einen 110-m-Schaft mit klarer Glaspyramide und Bronze-Spitze – mit rund 205 m das höchste Gebäude der Insel.",
      points: [
        "Sanierung + Erweiterung von BLD_2010_CityHall_01: Queue-Ausnahme 4 Lots → Block 80 × 48 m (20 × 12 Achsen), Lot 96 × 80 m; Front, Portikus, Treppe und Turmlage wie bisher.",
        "Aufstockung +2…+6 (12–27 Regelgeschosse, Standard 14), Turmschaft 110 m: Kronendach 182.4–242.4 m, Standard 190.4 m, Spitze 205.4 m.",
        "Lärchenpaneele, bepflanzte Brüstungen, Klarglas warm, dunkle Bronze-Profile, warmgrauer Naturstein, Sedum-Dach; Bronze statt Edelstahl.",
        "Recherche: Holz-Hybrid-Hochhäuser (bis 180 m), Netto-Null-Rathäuser in Holz, vertikal begrünte Fassaden.",
        "Prüfung 182/182 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien unter)."
      ],
      images: [
        { src: "2026-11-06_cityhall_2030.jpg", cap: "City Hall 2030 von Nordost (Standard B14, 205 m)" },
        { src: "2026-11-06_cityhall_2030_front.jpg", cap: "Front: Portikus, Lärche, bepflanzte Brüstungen" },
        { src: "2026-11-06_cityhall_2030_spiel.jpg", cap: "Spielansicht auf 4 Lots" },
        { src: "2026-11-06_cityhall_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_cityhall_2030_vergleich_2010.jpg", after: "2026-11-06_cityhall_2030.jpg", cap: "City Hall 2010 → 2030" },
      commits: []
    },
    {
      id: "park-2030", date: "2026-11-06", phase: "p5", title: "Autopilot: Stadtpark 2030",
      summary: "Der Schwammpark: Regen versickert im sandgrauen Kleinpflaster und in grünen Rasenfugen, die Hochbeete blühen als Wildblumenwiese, das Becken sammelt Regenwasser um eine bepflanzte Insel und kühlt mit einem Ring aus Sprühnebel – dazu Lärchenbänke, Solar-Lichtstelen und Lärchen-Behälter.",
      points: [
        "Neuausstattung von BLD_2010_Park_01 auf gleicher Fläche (A Square, B Plaza, C Promenade): Wege, Platz, Bäume, Lots und Requisiten-Plätze wie bisher.",
        "Durchlässiges Kleinpflaster sandgrau, Rasenfugen-Bänder, Recycling-Beton für Einfassung, Pflanzwürfel, Beetränder und Becken; Beete als Wildblumenwiese.",
        "Regenbecken: bepflanzte Insel im alten Becken, zwölf niedrige Sprühnebel bis 1,3 m.",
        "Möblierung: Solar-Stele 4,0 m mit Lärchenmast und PV-Feld, Lärchenbank auf Bronzewangen (Sitzhöhe für die Passanten unverändert), Lärchen-Behälter mit Bronzedeckel.",
        "Prüfung 281/281 nach dem Unreal-Import (8 Meshes Nanite, 11 Materialien unter)."
      ],
      images: [
        { src: "2026-11-06_park_2030.jpg", cap: "Form A Square mit Regenbecken" },
        { src: "2026-11-06_park_2030_plaza.jpg", cap: "Form B Plaza" },
        { src: "2026-11-06_park_2030_requisiten.jpg", cap: "Regenbecken mit Sprühnebel, Bank, Behälter, Solar-Stele" },
        { src: "2026-11-06_park_2030_familie.jpg", cap: "Familie A/B/C auf den Test-Lots" },
        { src: "2026-11-06_park_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-06_park_2030_vergleich_2010.jpg", after: "2026-11-06_park_2030.jpg", cap: "Stadtpark 2010 → 2030" },
      commits: []
    },
    {
      id: "hospital-2030", date: "2026-11-05", phase: "p5", title: "Autopilot: Krankenhaus 2030",
      summary: "Die grüne Klinik: das CITY HOSPITAL wird um ein Geschoss aufgestockt und an den Brüstungsbändern mit hellen Lärchenpaneelen verkleidet; Profile dunkle Bronze, Flachdächer als Sedum-Gründach, Technikraum mit Holzlamellen. Grundriss, Vordächer, Pyramide und Schilder bleiben.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_Hospital_01: Formen A/B/C mit gleichen Grundrissen, 7–14 Stationsgeschosse (Standard 8).",
        "Helle Lärchenpaneele mit senkrechten Brettern statt weißer Platten, Profile dunkle Bronze, Klarglas leicht warm.",
        "Sedum-Gründach auf Haupt- und Technikraumdach, Holzlamellen am Technikraum; Glaspyramide bleibt.",
        "Höhe Standard 37.6 m, höchste Fassung 58.6 m.",
        "Prüfung 425/425 nach dem Unreal-Import (12 Meshes Nanite, 13 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_hospital_2030.jpg", cap: "Krankenhaus 2030 (Form A) von Nordost" },
        { src: "2026-11-05_hospital_2030_dach.jpg", cap: "Sedum-Gründach von oben" },
        { src: "2026-11-05_hospital_2030_familie.jpg", cap: "Familie A/B/C" },
        { src: "2026-11-05_hospital_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-05_hospital_2030_vergleich_2010.jpg", after: "2026-11-05_hospital_2030.jpg", cap: "Krankenhaus 2010 → 2030" },
      commits: []
    },
    {
      id: "cafe-2030", date: "2026-11-05", phase: "p5", title: "Autopilot: Café 2030",
      summary: "Holz und Grün: das Coffee House wird mit senkrechten Lärchenbrettern neu verkleidet, die Felder zwischen den Obergeschossfenstern werden bepflanzt, das Flachdach wird Sedum-Gründach; Mansardband und Rahmen dunkle Bronze, Schilder in Eiche. Kubatur und Texte bleiben.",
      points: [
        "Sanierung von BLD_2010_Cafe_01: Formen A/B/C mit gleicher Geometrie, keine Aufstockung.",
        "Senkrechte Lärchenbretter statt anthrazitfarbener Paneele, Grünfelder statt Eichenlamellen, Sockel warmgrauer Stein.",
        "Mansardband, Halbsäulen und Rahmen dunkle Bronze, warmweiße LED-Linie, Leinenrollos.",
        "Sedum-Gründach; Schilder mit Eichenfront und warmweißer Schrift; innen salbeigrüne Polster.",
        "Prüfung 271/271 nach dem Unreal-Import (6 Meshes Nanite, 18 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_cafe_2030.jpg", cap: "Café 2030 (Form A, Eckdiner) von Nordost" },
        { src: "2026-11-05_cafe_2030_roadside.jpg", cap: "Form B Roadside" },
        { src: "2026-11-05_cafe_2030_familie.jpg", cap: "Familie A/B/C" },
        { src: "2026-11-05_cafe_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-05_cafe_2030_vergleich_2010.jpg", after: "2026-11-05_cafe_2030.jpg", cap: "Café 2010 → 2030" },
      commits: []
    },
    {
      id: "residential-2030", date: "2026-11-05", phase: "p5", title: "Autopilot: Wohnhaus 2030",
      summary: "Lärche und Grün: das Einfamilienhaus bekommt eine vorgefertigte Fassade aus senkrechten Lärchenbrettern, Holz-Alu-Fenster in dunkler Bronze, Blumenkästen vor den Fenstern und am Giebel ein Rankgitter mit Kletterpflanzen statt der Satellitenschüssel; Dach graphit, PV bleibt. Grundriss und Höhe bleiben.",
      points: [
        "Sanierung von BLD_2010_Residential_01: Formen A/B/C mit gleichen Grundrissen und Höhen, keine Aufstockung.",
        "Senkrechte Lärchenbretter statt weißem Putz, Fenster und Laibungen dunkle Bronze, graphitfarbene Pfannen, dunkelgraue Rinnen.",
        "Blumenkästen aus Holz mit Pflanzen vorn unter den großen Fenstern und hinten unter den Obergeschossfenstern.",
        "Rankgitter mit Kletterpflanzen am Giebel statt der Satellitenschüssel; PV-Feld von 2010 bleibt.",
        "Prüfung 263/263 nach dem Unreal-Import (3 Meshes Nanite, 16 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_residential_2030.jpg", cap: "Wohnhaus 2030 (Form A) von Nordost" },
        { src: "2026-11-05_residential_2030_rueck.jpg", cap: "Rückseite mit Blumenkästen und PV" },
        { src: "2026-11-05_residential_2030_familie.jpg", cap: "Familie A/B/C" },
        { src: "2026-11-05_residential_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-05_residential_2030_vergleich_2010.jpg", after: "2026-11-05_residential_2030.jpg", cap: "Wohnhaus 2010 → 2030" },
      commits: []
    },
    {
      id: "departmentstore-2030", date: "2026-11-05", phase: "p5", title: "Autopilot: Kaufhaus 2030",
      summary: "Grüne Bänder: das „Shopping Center“ bekommt auf jedem Brüstungsband einen Lärchentrog mit Hecke und wird um ein Geschoss aufgestockt; warm sandfarbene Keramik und dunkle Bronzeprofile ersetzen Hellgrau und Anthrazit, auf dem Dach liegen vorn ein Dachgarten mit Bäumen und hinten PV-Reihen statt Klimageräten.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_DepartmentStore_01: Formen A/B/C mit gleichen Grundrissen, 6–13 Obergeschosse (Standard 8).",
        "Auf jedem Brüstungsband der geraden Fassaden ein Lärchentrog mit dichter Hecke (0,28 m vor der Wand).",
        "Warm sandfarbene Keramik, Klarglas leicht warm, Profile/Vordach-Blende/Kronenrippen dunkle Bronze.",
        "Dach: Dachgarten vorn (Lärchen-Einfassung, Rasen, 3–4 Bäume), PV-Reihen hinten/seitlich, Klimageräte und Kanäle entfallen; Glaskegel/Giebel bleiben.",
        "Höhe Standard 42.1 m, höchste Fassung 61.1 m.",
        "Prüfung 419/419 nach dem Unreal-Import (12 Meshes Nanite, 17 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_departmentstore_2030.jpg", cap: "Kaufhaus 2030 (Form A) von Nordost" },
        { src: "2026-11-05_departmentstore_2030_dach.jpg", cap: "Dachgarten und PV von oben" },
        { src: "2026-11-05_departmentstore_2030_familie.jpg", cap: "Familie A/B/C" },
        { src: "2026-11-05_departmentstore_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-05_departmentstore_2030_vergleich_2010.jpg", after: "2026-11-05_departmentstore_2030.jpg", cap: "Kaufhaus 2010 → 2030" },
      commits: []
    },
    {
      id: "skyscraper2-2030", date: "2026-11-05", phase: "p5", title: "Autopilot: Bürohochhaus 2030 mit runden Ecken",
      summary: "Heckenbänder und Solarpergola: der runde CITY TOWER bekommt auf jedem Brüstungsband einen Bronzetrog mit dichter Hecke, die um die runden Ecken läuft; warmweiße Keramikpaneele und dunkle Bronzelinien ersetzen Silber und Anthrazit; hinter der Attika liegt ein Dachgarten mit Bäumen und einer Holz-Pergola mit PV-Dach.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_Skyscraper_02: Formen A/B/C mit gleichen Grundrissen und runden Ecken, 14–28 Obergeschosse (Standard A/B 24, C 26).",
        "Warmweiße Keramikpaneele, Klarglas leicht warm, Linien, Pfosten und Vordach in dunkler Bronze.",
        "Auf jedem Geschoss ein Bronzetrog mit dichter Hecke, umlaufend auch um die Ecken (Vorderkante 0,26 m vor der Wand).",
        "Krone: Attika bleibt, dahinter Dachgarten mit Rasen und 3–5 Bäumen und Holz-Pergola mit PV-Dach.",
        "Höhe bis Baumkrone A 94.6 m, C 101.6 m, höchste Fassung 108.6 m (Kappung 110,5 m).",
        "Prüfung 412/412 nach dem Unreal-Import (12 Meshes Nanite, 12 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_skyscraper02_2030.jpg", cap: "Bürohochhaus 2030 mit runden Ecken (Form A) von Nordost" },
        { src: "2026-11-05_skyscraper02_2030_dach.jpg", cap: "Dachgarten und PV-Pergola von oben" },
        { src: "2026-11-05_skyscraper02_2030_strasse.jpg", cap: "Eingang und Heckenbänder aus Augenhöhe" },
        { src: "2026-11-05_skyscraper02_2030_familie.jpg", cap: "Familie A/B/C" },
        { src: "2026-11-05_skyscraper02_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-05_skyscraper02_2030_vergleich_2010.jpg", after: "2026-11-05_skyscraper02_2030.jpg", cap: "Bürohochhaus mit runden Ecken 2010 → 2030" },
      commits: []
    },
    {
      id: "skyscraper-2030", date: "2026-11-05", phase: "p5", title: "Autopilot: Bürohochhaus 2030",
      summary: "Holzlamellen und Dachgarten: der CITY TOWER wird zum Holz-Hybrid – helle Lärche an Pfeilern und Bändern, senkrechte Holzlamellen vor dem Glas, jedes 4. Geschoss ein Pflanzband; statt Oberlicht und Antenne trägt die Krone einen Dachgarten mit Bäumen und PV-Felder.",
      points: [
        "Sanierung + Aufstockung von BLD_2010_Skyscraper_01: Formen A/B/C mit gleichen Grundrissen, 14–27 Obergeschosse (Standard A/B 24, C 26).",
        "Lärchenverkleidung an Pfeilern, Bändern und Rahmen; Holzlamelle vor jedem 2. Pfosten; Bronzeprofile.",
        "Pflanzband (Lärchentrog mit Hecke) jedes 4. Geschoss statt Technikband.",
        "Krone: PV-Felder auf Dach und Stufe 1, Dachgarten mit Bäumen und Glasbrüstung; Antenne entfällt.",
        "Höhe bis Baumkrone A 100.0 m, C 107.0 m, höchste Fassung 110.5 m (Kappung 110,5 m).",
        "Prüfung 472/472 nach dem Unreal-Import (15 Meshes Nanite, 13 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_skyscraper_2030.jpg", cap: "Bürohochhaus 2030 (Form A) von Nordost" },
        { src: "2026-11-05_skyscraper_2030_dach.jpg", cap: "Dachgarten und PV von oben" },
        { src: "2026-11-05_skyscraper_2030_strasse.jpg", cap: "Lobby und Holzlamellen aus Augenhöhe" },
        { src: "2026-11-05_skyscraper_2030_familie.jpg", cap: "Familie A/B/C" },
        { src: "2026-11-05_skyscraper_2030_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 2010er-Blatt)" }
      ],
      compare: { before: "2026-11-05_skyscraper_2030_vergleich_2010.jpg", after: "2026-11-05_skyscraper_2030.jpg", cap: "Bürohochhaus 2010 → 2030" },
      commits: []
    },
    {
      id: "mergedtower-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Turm auf zwei Lots 2010",
      summary: "Gläserne Schräge: ein neues Unikat auf zwei zusammengelegten Hochhaus-Lots – eine 48 m breite Glasscheibe mit silbergrauen Eckpfeilern und Technikbändern, oben ein Glaskeil, der von Westen nach Osten auf 18 m ansteigt. Standard 25 Regelgeschosse, 110,5 m.",
      points: [
        "Neubau (Unikat), nur Form A, Lot 64 × 28 m (zwei Hochhaus-Lots).",
        "22–27 Regelgeschosse (Standard 25), 100–117,5 m, unter der City Hall 2010.",
        "Silbergrau, blaugrünes Glas; Schriftzug „ISLAND TOWER“ in Edelstahl.",
        "Prüfung 168/168 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-05_mergedtower_2010.jpg", cap: "Turm auf zwei Lots 2010 von Nordost" },
        { src: "2026-11-05_mergedtower_2010_front.jpg", cap: "Vorderansicht" },
        { src: "2026-11-05_mergedtower_2010_blatt.jpg", cap: "Referenzblatt v2 (ChatGPT über Codex)" }
      ],
      compare: { before: "2026-11-05_mergedtower_2010_vergleich_hochhaus.jpg", after: "2026-11-05_mergedtower_2010.jpg", cap: "Bürohochhaus 2010 → Turm auf zwei Lots 2010" },
      commits: []
    },
    {
      id: "parkinggarage-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Parkhaus 2010",
      summary: "Petrol und LED: die Brüstungsbänder bekommen petrolfarbene, pulverbeschichtete Aluminiumpaneele, der Beton einen hellgrauen Schutzanstrich, die Decks eine dunkelgraue Beschichtung; Schrift weiß, das blaue P bleibt, die Lichtmasten leuchten kaltweiß. Ein Parkdeck mehr.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_ParkingGarage_01: Umriss, Decks, Rampe, Treppenhaus und Einfahrt wie bisher.",
        "5–8 Parkdecks (Standard 6), +1 wie 1990.",
        "Petrol, Hellgrau, Dunkelgrau, Anthrazit, Weiß; blaues P.",
        "Prüfung 186/186 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-05_parkinggarage_2010.jpg", cap: "Parkhaus 2010 von Nordost" },
        { src: "2026-11-05_parkinggarage_2010_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_parkinggarage_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_parkinggarage_2010_vergleich_1990.jpg", after: "2026-11-05_parkinggarage_2010.jpg", cap: "Parkhaus 1990 → 2010" },
      commits: []
    },
    {
      id: "tvtower-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Fernsehturm 2010",
      summary: "Weißer Schaft, dunkler Kopf: der Schaft wird weiß beschichtet, Turmkopf, Plattformen und Pavillon-Blende bekommen anthrazitfarbene Metallpaneele, das Glas wird klar. Ein Schaftsegment mehr und ein 4 m längerer Mast für die Digitalantenne; Spitze bis 107 m.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_TVTower_01 (Unikat): Pavillon, Schaft, Kopf, Plattformen wie bisher.",
        "6–8 Schaftsegmente (Standard 7), Mast 22 m, Spitze 95–107 m, unter der City Hall 2010.",
        "Weiß, Anthrazit, Klarglas; rot-weißer Mast bleibt.",
        "Prüfung 173/173 nach dem Unreal-Import; Lauf 1 wegen Prüf-/Metadaten-Fehler verworfen."
      ],
      images: [
        { src: "2026-11-05_tvtower_2010.jpg", cap: "Fernsehturm 2010 von Nordost" },
        { src: "2026-11-05_tvtower_2010_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_tvtower_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_tvtower_2010_vergleich_1990.jpg", after: "2026-11-05_tvtower_2010.jpg", cap: "Fernsehturm 1990 → 2010" },
      commits: []
    },
    {
      id: "postoffice-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Postamt 2010",
      summary: "Granit und Opalglas: der hellgraue Granit von 1990 bleibt, Fenster und Türen werden anthrazit mit Klarglas, der Eingangsrisalit mit der Uhr bekommt weißes, hinterleuchtetes Opalglas; die Rolltore im Posthof sind signalgelb. Ein bis zwei Geschosse mehr.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_PostOffice_01 (Unikat): Umriss, Fensterachsen, Risalit, Uhr und Posthof wie bisher.",
        "6–10 Bürogeschosse (Standard 7), höchstens 49 m.",
        "Granit hellgrau, Anthrazit, Klarglas, Opalglas weiß; Gelb an den Rolltoren.",
        "Prüfung 198/198 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-05_postoffice_2010.jpg", cap: "Postamt 2010 von Nordost" },
        { src: "2026-11-05_postoffice_2010_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_postoffice_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_postoffice_2010_vergleich_1990.jpg", after: "2026-11-05_postoffice_2010.jpg", cap: "Postamt 1990 → 2010" },
      commits: []
    },
    {
      id: "school-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Schule 2010",
      summary: "Klinker, Anthrazit und Limette: der Klinker bleibt, Fenster und Sonnenschutzkästen werden anthrazit mit Klarglas, die Brüstungen und Türen limettengrün; der weiße Risalit mit der Uhr bleibt. Höchstens ein Geschoss mehr.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_School_01 (Formen A/B/C): Umriss, Fensterbänder, Risalit und Uhr wie bisher.",
        "3–5 Obergeschosse (Standard 4), Aufstockung 0…+1.",
        "Klinker, Anthrazit, Limette, Weiß, Klarglas.",
        "Prüfung 454/454 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-05_school_2010.jpg", cap: "Schule 2010 von Nordost" },
        { src: "2026-11-05_school_2010_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_school_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_school_2010_vergleich_1990.jpg", after: "2026-11-05_school_2010.jpg", cap: "Schule 1990 → 2010" },
      commits: []
    },
    {
      id: "gasstation-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Tankstelle 2010",
      summary: "Anthrazit und Grün: dunkle Verbundplatten, weiße Blenden mit einer grünen Lichtleiste, grüne Zapfsäulen mit weißem Kopf, anthrazitfarbene Rahmen, Klarglas und kühles LED-Licht unter dem Vordach. Keine Aufstockung – die Tankstelle bleibt so hoch wie 1990.",
      points: [
        "Sanierung von BLD_1990_GasStation_01 (Formen A/B): Umriss, Büro, Tore, Vordach, Zapfinsel und Schildwand wie bisher.",
        "2–3 Wohngeschosse wie 1990 (Standard 2), keine Aufstockung.",
        "Anthrazit, Weiß, Grün, Klarglas; Farbvarianten Blau, Rot, Orange.",
        "Prüfung 334/334 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-05_gasstation_2010.jpg", cap: "Tankstelle 2010 von Nordost" },
        { src: "2026-11-05_gasstation_2010_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_gasstation_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_gasstation_2010_vergleich_1990.jpg", after: "2026-11-05_gasstation_2010.jpg", cap: "Tankstelle 1990 → 2010" },
      commits: []
    },
    {
      id: "apartmentblock-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Mehrfamilien-Block 2010",
      summary: "Weiß und Anthrazit: die zweite Dämmrunde bringt glatten weißen Putz, dazu dunkelgraue Pfeiler, Erdgeschoss und Vordach, anthrazitfarbene Fenster und Balkonbrüstungen und eine Eichenholz-Tür. Ein bis zwei Geschosse mehr.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_ApartmentBlock_01: Umriss, Balkone, Treppenhaus-Streifen und Eingang wie bisher.",
        "6–13 Obergeschosse (Standard 7 = 8 Geschosse), +1…+2, unter dem Hochhaus-Band 2010.",
        "Weiß, dunkelgrau, anthrazit, Klarglas; Eichenholz-Tür als warmer Akzent.",
        "Prüfung 207/207 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-05_apartmentblock_2010.jpg", cap: "Mehrfamilien-Block 2010 von Nordost" },
        { src: "2026-11-05_apartmentblock_2010_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_apartmentblock_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_apartmentblock_2010_vergleich_1990.jpg", after: "2026-11-05_apartmentblock_2010.jpg", cap: "Mehrfamilien-Block 1990 → 2010" },
      commits: []
    },
    {
      id: "theater-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Kino 2010",
      summary: "Die schwarze Lichtkiste: anthrazit-schwarze Metallpaneele zwischen hellgrauen Lisenen, Klarglas, ein dunkelgrauer Saal und ein schwarzer Sockel; Farbe gibt es nur noch am roten Pylon „CINEMA“ und an der hellen Anzeige über dem Eingang. Ein bis zwei Geschosse mehr.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_Theater_01 (Unikat): Umriss, Lisenen, Portal, Marquee und Pylon wie bisher.",
        "4–9 Obergeschosse (Standard 5), Flachbau-Regel +1…+2, unter dem Hochhaus-Band 2010.",
        "Anthrazit-schwarz, hellgrau, dunkelgrauer Saal, Klarglas; roter Pylon als einziger Akzent.",
        "Prüfung 205/205 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-05_theater_2010.jpg", cap: "Kino 2010 von Nordost" },
        { src: "2026-11-05_theater_2010_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_theater_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_theater_2010_vergleich_1990.jpg", after: "2026-11-05_theater_2010.jpg", cap: "Kino 1990 → 2010" },
      commits: []
    },
    {
      id: "hotel-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Grand Hotel 2010",
      summary: "Das helle Grandhotel: Lisenen und Bänder in hellen großformatigen Steinplatten, Klarglas mit dunklen Glasbrüstungen, anthrazitfarbene Profile und Marquee, schwarzer Granitsockel und hinterleuchtete Edelstahl-Buchstaben; im Standard sechs Geschosse höher (≈ 95 m).",
      points: [
        "Sanierung + Aufstockung von BLD_1990_Hotel_01 (Unikat): Umriss, Lisenen, Rücksprünge, Portal, Marquee und Dachschild-Gerüst wie bisher.",
        "14–25 Zimmergeschosse (Standard 22), Hochhaus-Regel 2010 +3…+8, alle Stufen unter der City Hall 2010.",
        "Helle Steinplatten, Klarglas, dunkle Brüstungen, anthrazit, schwarzer Granit, Edelstahl-Buchstaben.",
        "Prüfung 211/211 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-05_hotel_2010.jpg", cap: "Grand Hotel 2010 von Nordost" },
        { src: "2026-11-05_hotel_2010_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_hotel_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_hotel_2010_vergleich_1990.jpg", after: "2026-11-05_hotel_2010.jpg", cap: "Grand Hotel 1990 → 2010" },
      commits: []
    },
    {
      id: "firestation-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Feuerwache 2010",
      summary: "Die rote Kante: gedämmt und hellgrau verputzt, Fenster mit Klarglas in anthrazitfarbenen Rahmen, anthrazitfarbener Sockel; Rot wandert von den Fensterrahmen an Attika, Vordach und Turmkappe, die Tore bleiben rot. Ein bis zwei Geschosse mehr.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_FireStation_01 in allen drei Formen: Umrisse, Halle, Tore, Fenster, Schlauchturm wie bisher.",
        "4–8 Obergeschosse (Standard 4), Niedrig-Regel +1…+2.",
        "Hellgrauer Putz, anthrazitfarbener Sockel/Torrahmen, Klarglas, rote Metall-Attika und Turmkappe.",
        "Prüfung 447/447 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-05_firestation_2010.jpg", cap: "Feuerwache 2010 (Form A) von Nordost" },
        { src: "2026-11-05_firestation_2010_familie.jpg", cap: "Familie A/B/C in der Spielansicht" },
        { src: "2026-11-05_firestation_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_firestation_2010_vergleich_1990.jpg", after: "2026-11-05_firestation_2010.jpg", cap: "Feuerwache 1990 → 2010" },
      commits: []
    },
    {
      id: "police-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Polizeiwache 2010",
      summary: "Die helle Wache: energetisch saniert – weißer Putz auf Wärmedämmung, hellgraue Fensterfaschen, Klarglas in anthrazitfarbenen Rahmen, anthrazitfarbener Sockel; das polizeiblaue Dachband bleibt das Erkennungszeichen. Ein bis zwei Geschosse mehr.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_Police_01 in allen drei Formen: Umrisse, Eingang, Laternen, Garagen, Zellenfenster, Funkmast wie bisher.",
        "4–9 Regelgeschosse (Standard 5), Niedrig-Regel +1…+2.",
        "Weißer Putz (Slot `Brick`), hellgraue Fertigteile, Klarglas, anthrazit; Polizeiblau als Dachband.",
        "Pipeline-Meldung: Oberflächenwerkzeug legt auf den Putz-Slot `Brick` ein Klinkerfugen-Muster (Slotname schlägt Mustertyp) – gemeldet, nicht umgangen.",
        "Prüfung 440/440 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-05_police_2010.jpg", cap: "Polizeiwache 2010 (Form A) von Nordost" },
        { src: "2026-11-05_police_2010_familie.jpg", cap: "Familie A/B/C in der Spielansicht" },
        { src: "2026-11-05_police_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_police_2010_vergleich_1990.jpg", after: "2026-11-05_police_2010.jpg", cap: "Polizeiwache 1990 → 2010" },
      commits: []
    },
    {
      id: "plaza-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Plaza 2010",
      summary: "Der helle Bürgerplatz: gleiche Anlage, neue Oberfläche – großformatige hellgraue Platten mit anthrazitfarbenen Bändern, heller Beton, ein Obelisk aus gebürstetem Edelstahl mit leuchtender Opalglas-Spitze, LED-Stelen, Holzbänke und Lavendel in den Rundbeeten.",
      points: [
        "Neuausstattung von BLD_1990_Plaza_01 auf gleicher Fläche: Layout, Treppen, Becken, Obelisk-Form, Kiosk, Bäume und Requisiten-Plätze wie bisher; der Platz wächst nicht.",
        "Hellgraue Platten, anthrazitfarbene Bänder, heller Beton für Plattform, Mauern, Beete und Becken.",
        "Obelisk aus Edelstahl mit Opalglas-Lichtspitze, Inschrift Edelstahl.",
        "Stadtmöbel wie im Stadtpark 2010 (LED-Stele 3,5 m, Bank ohne Armlehnen, Behälter mit Edelstahl-Deckel); Kiosk anthrazit mit Zinkdach.",
        "Prüfung 238/238 nach dem Unreal-Import."
      ],
      images: [
        { src: "2026-11-05_plaza_2010.jpg", cap: "Plaza 2010 von Nordost" },
        { src: "2026-11-05_plaza_2010_draufsicht.jpg", cap: "Draufsicht: Bänderlayout wie 1990, helle Platten" },
        { src: "2026-11-05_plaza_2010_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_plaza_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_plaza_2010_vergleich_1990.jpg", after: "2026-11-05_plaza_2010.jpg", cap: "Plaza 1990 → 2010" },
      commits: []
    },
    {
      id: "newspaper-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Zeitungshaus 2010",
      summary: "Das gläserne Nachrichtenhaus: der DAILY-NEWS-Turm wächst um acht Geschosse auf rund 108 m, die Bänder werden helle Platten, die Fensterbänder klares Glas, das Laufband leuchtet weiß-blau – und die Kugel wird klares, von innen beleuchtetes Glas im roten Ring.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_Newspaper_01: Umriss, Bänder, Portal, Druckhalle, Rampen, Rücksprünge, Tambour und Kugel wie bisher.",
        "Aufstockung +3…+8 (13–24 Bürogeschosse, Standard 23): 72.6–111.1 m, Standard 107.6 m – über allen 2010er-Hochhäusern, unter der City Hall 2010.",
        "Helle großformatige Platten, Klarglas, anthrazitfarbene Profile und Sockel; LED-Band kühl weiß-blau; Kugel klar mit Edelstahl-Rippen, roter Ring bleibt.",
        "Recherche: Zeitungs- und Medienhäuser um 2010 – transparenter Newsroom hinter Klarglas, LED-Bänder in der Fassade.",
        "Prüfung 192/192 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_newspaper_2010.jpg", cap: "Zeitungshaus 2010 von Nordost (Standard B23)" },
        { src: "2026-11-05_newspaper_2010_strasse.jpg", cap: "Portal mit LED-Band auf Augenhöhe" },
        { src: "2026-11-05_newspaper_2010_spiel.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_newspaper_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_newspaper_2010_vergleich_1990.jpg", after: "2026-11-05_newspaper_2010.jpg", cap: "Zeitungshaus 1990 → 2010" },
      commits: []
    },
    {
      id: "bank-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Großbank 2010",
      summary: "Der gläserne Tresor: die ISLAND TRUST BANK wächst auf das Nachbar-Lot (64 × 24 m) und um sieben Geschosse auf rund 109 m, wird hell verkleidet – warmgraue Platten, blaugraues Klarglas, anthrazitfarbener Sockel – und die Kupfertonne wird zur Glastonne mit Edelstahl-Rippen. Sie bleibt in jeder Stufe unter der City Hall.",
      points: [
        "Sanierung + Erweiterung von BLD_1990_Bank_01: Queue-Ausnahme 2 Lots → Scheibe 64 × 24 m (16 Achsen), Lot 80 × 36 m; Loggia, Stufen, Türen und Krone in der Mitte wie bisher.",
        "Aufstockung +3…+7 (12–23 Bürogeschosse, Standard 22): 73.0–112.6 m, Standard 109.0 m – über allen 2010er-Hochhäusern, unter der City Hall 2010.",
        "Warmgraue großformatige Platten, blaugraues Klarglas, dunkle Glasbrüstungen, anthrazitfarbene Profile und Sockel; Edelstahl statt Messing und Kupfer.",
        "Recherche: Sanierungen von Bank-Hochhäusern der 70er/80er um 2010 – neue helle Haut, Klarglas statt Spiegel- und Bronzeglas, Erweiterung des Hauptsitzes.",
        "Prüfung 186/186 nach dem Unreal-Import (4 Meshes Nanite, 11 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_bank_2010.jpg", cap: "Großbank 2010 von Nordost (Standard B22)" },
        { src: "2026-11-05_bank_2010_front.jpg", cap: "Front: 64 m breite Scheibe, Loggia in der Mitte" },
        { src: "2026-11-05_bank_2010_spiel.jpg", cap: "Spielansicht auf dem Doppel-Lot" },
        { src: "2026-11-05_bank_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_bank_2010_vergleich_1990.jpg", after: "2026-11-05_bank_2010.jpg", cap: "Großbank 1990 → 2010" },
      commits: []
    },
    {
      id: "cityhall-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: City Hall 2010",
      summary: "Das Bürgerforum: das Rathaus wächst auf das Nachbar-Lot (80 × 24 m) und um vier Geschosse, wird hell und klar verkleidet – helle Platten, Klarglas, anthrazitfarbener Sockel – und der Uhrturm steigt auf einen 50-m-Schaft mit klarer Glaspyramide und Edelstahl-Spitze. Es bleibt das höchste Haus der Stadt.",
      points: [
        "Sanierung + Erweiterung von BLD_1990_CityHall_01: Queue-Ausnahme 2 Lots → Block 80 × 24 m (20 Achsen), Lot 96 × 40 m; Portikus, Treppe, Türen und Turm in der Mitte wie bisher.",
        "Aufstockung +3…+8 (10–21 Regelgeschosse, Standard 12), Turmschaft 50 m: Kronendach 114.4–158.4 m, Standard 122.4 m.",
        "Helle großformatige Platten, Klarglas mit dunkelgrauen Glasbrüstungen, anthrazitfarbene Profile und Natursteinsockel; Edelstahl statt Gold.",
        "Recherche: Rathaus-Sanierungen und -Erweiterungen der 70er-Bauten um 2010 – neue helle Haut, Klarglas, Anbau in derselben Sprache.",
        "Prüfung 179/179 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_cityhall_2010.jpg", cap: "City Hall 2010 von Nordost (Standard B12)" },
        { src: "2026-11-05_cityhall_2010_front.jpg", cap: "Front: 80 m breiter Block, Portikus in der Mitte" },
        { src: "2026-11-05_cityhall_2010_spiel.jpg", cap: "Spielansicht auf dem Doppel-Lot" },
        { src: "2026-11-05_cityhall_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_cityhall_2010_vergleich_1990.jpg", after: "2026-11-05_cityhall_2010.jpg", cap: "City Hall 1990 → 2010" },
      commits: []
    },
    {
      id: "park-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Stadtpark 2010",
      summary: "Der helle Platz: der Granit weicht großformatigen hellgrauen Platten, der Obelisk einem flachen Steintisch, aus dem senkrechte Wasserstrahlen steigen – dazu Holzbänke auf anthrazitfarbenen Wangen, LED-Lichtstelen und Beete mit Gräsern und Lavendel.",
      points: [
        "Neuausstattung von BLD_1990_Park_01 auf gleicher Fläche (A Square, B Plaza, C Promenade): Wege, Platz, Bäume, Lots und Requisiten-Plätze wie bisher.",
        "Großformatige hellgraue Platten, schmale anthrazitfarbene Bänder, heller Beton für Einfassung, Pflanzwürfel, Beetränder und Becken.",
        "Wasserspiel: Steintisch im alten Becken, Mittelstrahl 2,4 m, acht Ringstrahlen.",
        "Möblierung: LED-Stele 4,0 m, Holzbank ohne Armlehnen (Sitzhöhe für die Passanten unverändert), anthrazitfarbener Behälter mit Edelstahl-Deckel.",
        "Prüfung 281/281 nach dem Unreal-Import (8 Meshes Nanite, 11 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_park_2010.jpg", cap: "Form A Square mit Wasserspiel" },
        { src: "2026-11-05_park_2010_plaza.jpg", cap: "Form B Plaza" },
        { src: "2026-11-05_park_2010_requisiten.jpg", cap: "Wasserspiel, Bank, Behälter, LED-Stele" },
        { src: "2026-11-05_park_2010_familie.jpg", cap: "Familie A/B/C auf den Test-Lots" },
        { src: "2026-11-05_park_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_park_2010_vergleich_1990.jpg", after: "2026-11-05_park_2010.jpg", cap: "Stadtpark 1990 → 2010" },
      commits: []
    },
    {
      id: "hospital-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Krankenhaus 2010",
      summary: "Die helle Klinik: das „CITY HOSPITAL“ wird um ein Stationsgeschoss aufgestockt und hell neu verkleidet – weiße Plattenbänder, Klarglas in anthrazitfarbenen Profilen, hellgrauer Stein unten, grüne Vordachkanten; rotes Kreuz und Schilder bleiben.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_Hospital_01: Formen A/B/C mit gleichen Grundrissen, 6–12 Stationsgeschosse (Standard 7).",
        "Weiße großformatige Platten statt hellgrauer Alu-Verbundplatten; Klarglas in anthrazitfarbenen Profilen statt Spiegelglas mit Türkis.",
        "Erdgeschoss hellgrauer Stein, Säulen anthrazit, Vordachkanten grün; Glaspyramide klar mit dunklen Graten.",
        "Höhe Standard 34.1 m, höchste Fassung 51.6 m.",
        "Prüfung 424/424 nach dem Unreal-Import (12 Meshes Nanite, 13 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_hospital_2010.jpg", cap: "Krankenhaus 2010 (Form A) von Nordost" },
        { src: "2026-11-05_hospital_2010_b.jpg", cap: "Form B (L-Form)" },
        { src: "2026-11-05_hospital_2010_familie.jpg", cap: "Familie A/B/C" },
        { src: "2026-11-05_hospital_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_hospital_2010_vergleich_1990.jpg", after: "2026-11-05_hospital_2010.jpg", cap: "Krankenhaus 1990 → 2010" },
      commits: []
    },
    {
      id: "cafe-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Café 2010",
      summary: "Coffee House: der Neo-Diner wird dunkel und warm neu verkleidet – anthrazitfarbene Profilpaneele, Eichenlamellen, Mansardband in dunklem Zink mit warmweißer Lichtlinie, schwarze Schilder; Kubatur und Texte bleiben.",
      points: [
        "Sanierung von BLD_1990_Cafe_01: Formen A/B/C mit gleicher Geometrie, keine Aufstockung.",
        "Anthrazitfarbene Profilpaneele statt Edelstahl, Eichenlamellen statt Glasbausteinen, Sockel dunkler Stein.",
        "Mansardband und Halbsäulen in dunklem Zink, warmweiße LED-Linie statt pinkem Neon, schwarze Rahmen, Leinenrollos.",
        "Schilder schwarz mit warmweißer Schrift; innen Cognac-Leder, Beton, Pendelleuchten.",
        "Prüfung 270/270 nach dem Unreal-Import (6 Meshes Nanite, 18 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_cafe_2010.jpg", cap: "Café 2010 (Form A, Eckdiner) von Nordost" },
        { src: "2026-11-05_cafe_2010_roadside.jpg", cap: "Form B Roadside" },
        { src: "2026-11-05_cafe_2010_familie.jpg", cap: "Familie A/B/C" },
        { src: "2026-11-05_cafe_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_cafe_2010_vergleich_1990.jpg", after: "2026-11-05_cafe_2010.jpg", cap: "Café 1990 → 2010" },
      commits: []
    },
    {
      id: "residential-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Wohnhaus 2010",
      summary: "Energetische Sanierung: das Einfamilienhaus wird weiß verputzt, bekommt anthrazitfarbene Fenster ohne Sprossen und neue anthrazitfarbene Pfannen; auf der hinteren Dachfläche liegt eine Photovoltaikanlage. Grundriss, Erker/Wintergarten und Höhe bleiben.",
      points: [
        "Sanierung von BLD_1990_Residential_01: Formen A/B/C mit gleichen Grundrissen und Höhen, keine Aufstockung.",
        "Weißer Glattputz statt Pastell, anthrazitfarbene Fenster ohne Sprossen, anthrazitfarbene Flachdachpfannen, graue Rinnen.",
        "Photovoltaik auf der hinteren Hauptdachfläche: A/B 10, C 12 Module, Abstand zum Schornstein.",
        "Eichen-Haustür mit schmalem Glasstreifen; Erker/Wintergarten, Vordach und Satellitenschüssel bleiben.",
        "Prüfung 262/262 nach dem Unreal-Import (3 Meshes Nanite, 14 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_residential_2010.jpg", cap: "Wohnhaus 2010 (Form A) von Nordost" },
        { src: "2026-11-05_residential_2010_pv.jpg", cap: "Rückseite mit Photovoltaik" },
        { src: "2026-11-05_residential_2010_familie.jpg", cap: "Familie A/B/C" },
        { src: "2026-11-05_residential_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_residential_2010_vergleich_1990.jpg", after: "2026-11-05_residential_2010.jpg", cap: "Wohnhaus 1990 → 2010" },
      commits: []
    },
    {
      id: "departmentstore-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Kaufhaus 2010",
      summary: "Glas und Fläche: das „Shopping Center“ wird mit hellen großformatigen Keramikplatten neu verkleidet und um ein Geschoss aufgestockt; Klarglas ersetzt das Spiegelglas, Profile und Vordach-Blende werden anthrazit, die Kronen bleiben in klarem Glas.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_DepartmentStore_01: Formen A/B/C mit gleichen Grundrissen, 5–11 Obergeschosse (Standard 7).",
        "Brüstungsbänder, Pylone und Attika aus hellen großformatigen Keramikplatten statt poliertem rötlichem Granit.",
        "Klarglas im anthrazitfarbenen Raster statt blaugrünem Spiegelglas mit türkisen Profilen.",
        "Kronen bleiben (Glaskegel A/B klar, Giebel C keramikverkleidet); „SHOPPING“-Leuchtkästen und „Shopping Center“ bleiben.",
        "Höhe Standard 38.3 m, höchste Fassung 53.5 m.",
        "Prüfung 403/403 nach dem Unreal-Import (12 Meshes Nanite, 14 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_departmentstore_2010.jpg", cap: "Kaufhaus 2010 (Form A) von Nordost" },
        { src: "2026-11-05_departmentstore_2010_b.jpg", cap: "Form B mit runder Ecke" },
        { src: "2026-11-05_departmentstore_2010_familie.jpg", cap: "Familie A/B/C" },
        { src: "2026-11-05_departmentstore_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_departmentstore_2010_vergleich_1990.jpg", after: "2026-11-05_departmentstore_2010.jpg", cap: "Kaufhaus 1990 → 2010" },
      commits: []
    },
    {
      id: "skyscraper02-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Bürohochhaus 2010 mit runden Ecken",
      summary: "Glas und Fläche (hell): der runde CITY TOWER wird neu verkleidet und um sechs Geschosse aufgestockt; silberweiße Paneele ersetzen das kobaltblaue Brüstungsglas, helles Neutralglas das Spiegelglas, Vordach und Säulen werden anthrazit, Eingang und Schrift Edelstahl.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_Skyscraper_03: Formen A/B/C mit gleichen Grundrissen und runden Ecken, 12–29 Obergeschosse (Standard A/B 20, C 23).",
        "Umlaufende Bänder: silberweiße Aluminiumpaneele (0,80 m, vorher 1,00 m Kobaltglas) und höheres Sichtband aus hellem Neutralglas.",
        "Linien, Pfosten, Vordach und Säulen anthrazit; Eingangsrahmen und Schrift „CITY TOWER“ Edelstahl.",
        "Höhe A 76.9 m, C 87.4 m, höchste Fassung 108.4 m.",
        "Prüfung 397/397 nach dem Unreal-Import (12 Meshes Nanite, 9 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_skyscraper02_2010.jpg", cap: "Bürohochhaus 2010 mit runden Ecken (Form A) von Nordost" },
        { src: "2026-11-05_skyscraper02_2010_strasse.jpg", cap: "Eingang mit anthrazitfarbenem Vordach" },
        { src: "2026-11-05_skyscraper02_2010_familie.jpg", cap: "Familie A/B/C" },
        { src: "2026-11-05_skyscraper02_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_skyscraper02_2010_vergleich_1990.jpg", after: "2026-11-05_skyscraper02_2010.jpg", cap: "Bürohochhaus 1990 (runde Ecken) → 2010" },
      commits: []
    },
    {
      id: "skyscraper-2010", date: "2026-11-05", phase: "p5", title: "Autopilot: Bürohochhaus 2010",
      summary: "Glas und Fläche: der CITY TOWER wird neu verkleidet und um sechs Geschosse aufgestockt; anthrazitfarbene Metallplatten überdecken den roten Granit, helles Neutralglas ersetzt das Spiegelglas, die Glaspyramide wird zum flachen Oberlicht.",
      points: [
        "Sanierung + Aufstockung von BLD_1990_Skyscraper_01: Formen A/B/C mit gleichen Grundrissen, 12–29 Obergeschosse (Standard A/B 20, C 23).",
        "Pfeiler, Bänder, Rahmen und Portal mit anthrazitfarbenen Metallverbundplatten überdeckt; Technikband jedes 4. Geschoss.",
        "Helles Neutralglas in schlanken Anthrazit-Profilen statt blaugrünem Spiegelglas.",
        "Krone: zwei Glasstufen, flaches Glas-Oberlicht statt Pyramide, Antenne bleibt.",
        "Schrift „CITY TOWER“ Edelstahl, serifenlos.",
        "Höhe A 88.0 m, C 98.5 m, höchste Fassung 119.5 m (inkl. Antenne).",
        "Prüfung 454/454 nach dem Unreal-Import (15 Meshes Nanite, 10 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_skyscraper_2010.jpg", cap: "Bürohochhaus 2010 (Form A) von Nordost" },
        { src: "2026-11-05_skyscraper_2010_c.jpg", cap: "Form C (quadratisch, 23 Geschosse)" },
        { src: "2026-11-05_skyscraper_2010_strasse.jpg", cap: "Lobby aus Augenhöhe" },
        { src: "2026-11-05_skyscraper_2010_familie.jpg", cap: "Familie A/B/C" },
        { src: "2026-11-05_skyscraper_2010_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1990er-Blatt)" }
      ],
      compare: { before: "2026-11-05_skyscraper_2010_vergleich_1990.jpg", after: "2026-11-05_skyscraper_2010.jpg", cap: "Bürohochhaus 1990 → 2010" },
      commits: []
    },
    {
      id: "parkinggarage-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Parkhaus 1990",
      summary: "Beschichtung und Grün: das Parkhaus wird saniert, hell beschichtet und um ein Deck aufgestockt; die Decks bekommen eine grüngraue Beschichtung, Rahmen, Tür und Schrift werden dunkelgrün, das blaue „P“ bleibt.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_ParkingGarage_01: gleicher Block 40 × 32 m, 4–7 Parkdecks (Standard 5).",
        "Brüstungsbänder, Stützen und Treppenturm hellgrau-weiß beschichtet statt beigem Waschbeton.",
        "Decks grüngrau beschichtet, frische weiße Stellplatzlinien.",
        "Rahmen, Tür und Schrift „CITY PARKING“ dunkelgrün; blaues „P“ und rot-weiße Schranken bleiben.",
        "Höhe Standard 23.1 m, höchste Fassung 29.1 m.",
        "Prüfung 186/186 nach dem Unreal-Import (4 Meshes Nanite, 14 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_parkinggarage_1990.jpg", cap: "Parkhaus 1990 von Nordost" },
        { src: "2026-11-05_parkinggarage_1990_strasse.jpg", cap: "Einfahrt aus Augenhöhe" },
        { src: "2026-11-05_parkinggarage_1990_dach.jpg", cap: "Dachdeck mit grüngrauer Beschichtung" },
        { src: "2026-11-05_parkinggarage_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_parkinggarage_1990_vergleich_1970.jpg", after: "2026-11-05_parkinggarage_1990.jpg", cap: "Parkhaus 1970 → 1990" },
      commits: []
    },
    {
      id: "tvtower-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Fernsehturm 1990",
      summary: "Silber und Signal: der Fernsehturm wächst um ein Schaftsegment und einen längeren Mast, der Schaft wird saniert und hellgrau beschichtet, der Turmkopf bekommt silberne Aluminiumpaneele und blaues Spiegelglas.",
      points: [
        "Sanierung + Verlängerung von BLD_1970_TVTower_01: Pavillon, Schaft, Kopf und Plattformen gleich, 5–7 Schaftsegmente (Standard 6).",
        "Schaft hellgrau beschichtet, Turmkopf und Blende in silbernen Aluminiumpaneelen, Glas blau gespiegelt.",
        "Mast 18 statt 14 m, rot-weiß mit Warnleuchte; Geländer der oberen Plattform jetzt als Ring.",
        "Pavillon mit silbernen Rahmen und blauer Schrift „TV TOWER“.",
        "Höhe Standard 91.3 m, höchste Fassung 97.3 m (unter der City Hall 1990).",
        "Prüfung 173/173 nach dem Unreal-Import (4 Meshes Nanite, 13 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_tvtower_1990.jpg", cap: "Fernsehturm 1990 von Nordost" },
        { src: "2026-11-05_tvtower_1990_strasse.jpg", cap: "Pavillon aus Augenhöhe" },
        { src: "2026-11-05_tvtower_1990_front.jpg", cap: "Front" },
        { src: "2026-11-05_tvtower_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_tvtower_1990_vergleich_1970.jpg", after: "2026-11-05_tvtower_1990.jpg", cap: "Fernsehturm 1970 → 1990" },
      commits: []
    },
    {
      id: "postoffice-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Postamt 1990",
      summary: "Stein und Glas: das Postamt wird mit hellgrauen Granitplatten neu verkleidet und um ein bis zwei Bürogeschosse aufgestockt; der Eingangsrisalit mit der Uhr bekommt blaugrünes Glas, Rahmen und Türen werden dunkelblau.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_PostOffice_01: gleicher Umriss 36 × 22 m, 5–8 Bürogeschosse (Standard 6).",
        "Wände hellgraue Granitplatten statt dunkelbrauner Keramik, weiße Bänder bleiben.",
        "Eingangsrisalit in blaugrünem Glas mit Uhr, Schrift „POST OFFICE“ in Edelstahl.",
        "Rahmen und Türen dunkelblau, Rolltore am Postanlieferhof blau.",
        "Höhe Standard 30.4 m, höchste Fassung 37.6 m (≤ 38 m, unter der City Hall).",
        "Prüfung 197/197 nach dem Unreal-Import (4 Meshes Nanite, 15 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_postoffice_1990.jpg", cap: "Postamt 1990 von Nordost" },
        { src: "2026-11-05_postoffice_1990_front.jpg", cap: "Front mit Glasrisalit und Uhr" },
        { src: "2026-11-05_postoffice_1990_hof.jpg", cap: "Rückseite mit Postanlieferhof" },
        { src: "2026-11-05_postoffice_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_postoffice_1990_vergleich_1970.jpg", after: "2026-11-05_postoffice_1990.jpg", cap: "Postamt 1970 → 1990" },
      commits: []
    },
    {
      id: "school-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Schule 1990",
      summary: "Klinker und Grün: die Schule behält ihren Klinker, wird um ein Geschoss aufgestockt und bekommt Grün als Schulfarbe – dunkelgrüne Fensterbänder und Sonnenschutzkästen, mintgrüne Brüstungen und Türen – dazu einen weiß verputzten Eingangsrisalit mit Uhr.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_School_01: Formen A/B/C mit gleichen Umrissen, 3–4 Obergeschosse (Standard 3).",
        "Klinker gereinigt, Fensterbänder und Sonnenschutzkästen dunkelgrün.",
        "Brüstungsbänder und Türen mintgrün statt gelb.",
        "Eingangsrisalit, Blende und Vordachkante weiß verputzt; „PUBLIC SCHOOL“ dunkelgrün, Uhr bleibt.",
        "Höhe Standard 17.2 m, höchste Fassung 20.8 m.",
        "Prüfung 451/451 nach dem Unreal-Import (12 Meshes Nanite, 12 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_school_1990.jpg", cap: "Schule 1990 (Form A) von Nordost" },
        { src: "2026-11-05_school_1990_front.jpg", cap: "Front mit Risalit und Uhr" },
        { src: "2026-11-05_school_1990_family.jpg", cap: "Formen A, B und C" },
        { src: "2026-11-05_school_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_school_1990_vergleich_1970.jpg", after: "2026-11-05_school_1990.jpg", cap: "Schule 1970 → 1990" },
      commits: []
    },
    {
      id: "gasstation-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Tankstelle 1990",
      summary: "Shop und Leuchtband: die Tankstelle wird mit silbergrauen Metallplatten neu verkleidet und um ein Geschoss aufgestockt; weiße Blenden mit kräftigem rotem Band, rote Zapfsäulen und silberne Rahmen machen aus der Klinker-Werkstatt einen 90er-Markenshop.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_GasStation_01: Formen A/B mit gleichen Umrissen, 2–3 Obergeschosse (Standard 2).",
        "Wände silbergraue Metall-Verbundplatten statt Klinker, Rahmen und Stützen silbern.",
        "Gebäude- und Dachblende weiß mit rotem Band, Zapfsäulen rot mit weißem Kopf.",
        "Schrift „MOTOR SERVICE“ und Fahne „GAS“ rot.",
        "Höhe Standard 15.3 m, höchste Fassung 18.3 m – bleibt ein niedriges Bezirksgebäude.",
        "Prüfung 334/334 nach dem Unreal-Import (8 Meshes Nanite, 12 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_gasstation_1990.jpg", cap: "Tankstelle 1990 (Form A) von Nordost" },
        { src: "2026-11-05_gasstation_1990_front.jpg", cap: "Front mit Leuchtband und Werkstatt" },
        { src: "2026-11-05_gasstation_1990_family.jpg", cap: "Formen A und B" },
        { src: "2026-11-05_gasstation_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_gasstation_1990_vergleich_1970.jpg", after: "2026-11-05_gasstation_1990.jpg", cap: "Tankstelle 1970 → 1990" },
      commits: []
    },
    {
      id: "apartmentblock-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Mehrfamilien-Block 1990",
      summary: "Dämmung und Pastell: der Block wird gedämmt, vanillegelb verputzt und um ein bis zwei Geschosse aufgestockt; weiße Kunststofffenster und Balkonbrüstungen ersetzen das Braun der 70er, Hochparterre und Treppenhaus-Pfeiler werden terrakotta.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_ApartmentBlock_01: gleicher Umriss 30 × 12 m, 6–12 Geschosse (Standard sieben).",
        "Fassade: Wärmedämmung mit vanillegelbem Putz statt Faserzementplatten.",
        "Neue weiße Kunststofffenster, Balkone mit weißen Brüstungen, Glas leicht grünlich.",
        "Hochparterre, Treppenhaus-Pfeiler, Vordach und Blende terrakotta; Haustür blaugrün, „ELM COURT“ dunkelblau.",
        "Höhe Standard 26.9 m, höchste Fassung 41.9 m.",
        "Prüfung 206/206 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_apartmentblock_1990.jpg", cap: "Mehrfamilien-Block 1990 von Nordost" },
        { src: "2026-11-05_apartmentblock_1990_front.jpg", cap: "Front mit Treppenhaus und Balkonen" },
        { src: "2026-11-05_apartmentblock_1990_strasse.jpg", cap: "Eingang aus Augenhöhe" },
        { src: "2026-11-05_apartmentblock_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_apartmentblock_1990_vergleich_1970.jpg", after: "2026-11-05_apartmentblock_1990.jpg", cap: "Mehrfamilien-Block 1970 → 1990" },
      commits: []
    },
    {
      id: "theater-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Kino 1990",
      summary: "Neon und Türkis: das Zweisaal-Kino wird zum Multiplex, um ein bis zwei Geschosse aufgestockt und in den Farben der frühen 90er neu gefasst – türkise Metallpaneele zwischen weißen Lisenen, blaues Spiegelglas, ein pfirsichfarbener Saal und ein violetter Pylon.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_Theater_01: gleicher Umriss 30 × 36 m, 3–7 Obergeschosse (Standard 4).",
        "Front: weiße Glattputz-Lisenen, türkis lackierte Metallpaneele, Fenster in blauem Spiegelglas.",
        "Saal pfirsichfarben verputzt, Erdgeschoss schwarzer polierter Granit, Portal und Marquise türkis.",
        "Pylon „CINEMA“ jetzt violett, Tafel „NOW SHOWING“ weiß mit schwarzer Schrift.",
        "Höhe Standard 31.6 m, höchste Fassung 42.1 m (Pylon-Spitze) – bleibt ein niedriges Unikat.",
        "Prüfung 203/203 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_theater_1990.jpg", cap: "Kino 1990 von Nordost" },
        { src: "2026-11-05_theater_1990_front.jpg", cap: "Front mit Pylon und Marquise" },
        { src: "2026-11-05_theater_1990_strasse.jpg", cap: "Eingang aus Augenhöhe" },
        { src: "2026-11-05_theater_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_theater_1990_vergleich_1970.jpg", after: "2026-11-05_theater_1990.jpg", cap: "Kino 1970 → 1990" },
      commits: []
    },
    {
      id: "hotel-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Grand Hotel 1990",
      summary: "Travertin und Bronzeglas: derselbe Hotelturm wird um bis zu vier Geschosse aufgestockt und im Glanz der späten 80er neu verkleidet – cremefarbene Travertin-Lisenen, warmes Bronze-Spiegelglas, Champagner-Rahmen, ein dunkelgrüner Granitsockel und goldene Buchstaben.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_Hotel_01: gleicher Umriss 34 × 18 m, 11–17 Gästegeschosse (Standard 16).",
        "Fassade: Travertin-Lisenen und -Bänder, Fenster und Brüstungen Bronze-Spiegelglas, Rahmen champagnerfarben.",
        "Erdgeschoss: dunkelgrüner polierter Granitsockel, Travertin-Wände, Champagner-Portal und Marquee mit goldenen Buchstaben.",
        "Dachreklame „GRAND HOTEL“ jetzt gold statt orange, Rücksprünge wie 1970.",
        "Höhe Standard 73.7 m, höchste Fassung 77.2 m – im 1990er-Band (≤ 79 m) und unter der City Hall.",
        "Prüfung 206/206 nach dem Unreal-Import (4 Meshes Nanite, 10 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_hotel_1990.jpg", cap: "Grand Hotel 1990 von Nordost" },
        { src: "2026-11-05_hotel_1990_front.jpg", cap: "Front mit Marquee und Dachreklame" },
        { src: "2026-11-05_hotel_1990_strasse.jpg", cap: "Portal aus Augenhöhe" },
        { src: "2026-11-05_hotel_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_hotel_1990_vergleich_1970.jpg", after: "2026-11-05_hotel_1990.jpg", cap: "Grand Hotel 1970 → 1990" },
      commits: []
    },
    {
      id: "firestation-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Feuerwache 1990",
      summary: "Weiß und Rot: die Wache wird um ein bis zwei Geschosse aufgestockt und weiß verputzt; Feuerwehrrot wird zur Farbe der Architektur – an Fensterrahmen, Toren, Schrift und Turmband –, dazu grauer Granit um die Tore und eine anthrazitfarbene Blende.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_FireStation_01: Formen A/B/C mit gleichen Umrissen, 3–6 Obergeschosse (Standard 3).",
        "Fassade: weißer Putz statt Waschbeton, Fensterrahmen feuerwehrrot, Glas blaugrün.",
        "Erdgeschoss: Sockel, Band und Torrahmungen in grauem poliertem Granit; rote Tore mit Glasreihen, rote Buchstaben.",
        "Blende, Abdeckung und Turmkappe in anthrazitfarbenem Metall; Schlauchturm weiß mit rotem Band.",
        "Höhe Standard 24.9 m, höchste Fassung 35.4 m (Turmkappe) – bleibt ein niedriges Bezirksgebäude.",
        "Prüfung 447/447 nach dem Unreal-Import (12 Meshes Nanite, 11 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_firestation_1990.jpg", cap: "Feuerwache 1990 von Nordost" },
        { src: "2026-11-05_firestation_1990_front.jpg", cap: "Front mit roten Toren und Turm" },
        { src: "2026-11-05_firestation_1990_b.jpg", cap: "Form B mit vier Toren" },
        { src: "2026-11-05_firestation_1990_family.jpg", cap: "Formen A, B und C" },
        { src: "2026-11-05_firestation_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_firestation_1990_vergleich_1970.jpg", after: "2026-11-05_firestation_1990.jpg", cap: "Feuerwache 1970 → 1990" },
      commits: []
    },
    {
      id: "police-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Polizeiwache 1990",
      summary: "Klinker und Blau: die Wache wird um ein bis zwei Geschosse aufgestockt, der Klinker der 1950er kehrt zurück – mit hellen Faschen um jedes Fenster, polizeiblauen Rahmen, Granitsockel und einem blau glasierten Band am Dachrand.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_Police_01: Formen A/B/C mit gleichen Umrissen, 3–7 Obergeschosse (Standard 4).",
        "Fassade: rotbrauner Klinker, die alten Betonrahmen werden helle Kunststein-Faschen, Fensterrahmen polizeiblau.",
        "Erdgeschoss in anthrazitfarbenem poliertem Granit, Eingang mit „POLICE“ und blauen Laternen wie bisher.",
        "Blau glasiertes Band als Dachblende – die Wache ist von Weitem erkennbar.",
        "Höhe Standard 27.1 m, höchste Fassung 37.6 m (Mastspitze) – bleibt ein niedriges Bezirksgebäude.",
        "Prüfung 440/440 nach dem Unreal-Import (12 Meshes Nanite, 13 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_police_1990.jpg", cap: "Polizeiwache 1990 von Nordost" },
        { src: "2026-11-05_police_1990_front.jpg", cap: "Front mit Faschen und blauem Dachband" },
        { src: "2026-11-05_police_1990_portal.jpg", cap: "Eingang mit blauen Laternen" },
        { src: "2026-11-05_police_1990_family.jpg", cap: "Formen A, B und C" },
        { src: "2026-11-05_police_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_police_1990_vergleich_1970.jpg", after: "2026-11-05_police_1990.jpg", cap: "Polizeiwache 1970 → 1990" },
      commits: []
    },
    {
      id: "plaza-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Plaza 1990",
      summary: "Der Obelisk-Platz: die ISLAND PLAZA bekommt hellen Granit mit anthrazitfarbenen Bändern, auf dem alten Sockel im Brunnen steht jetzt ein roter Granit-Obelisk mit goldener Spitze, dazu Nostalgie-Laternen, petrolgrüne Bänke und ein gläserner Zeitungspavillon.",
      points: [
        "Neuausstattung von BLD_1970_Plaza_01 auf gleicher Fläche: Plattform, Treppen, Rasen, Bäume, Brunnen und Requisiten-Plätze bleiben.",
        "Belag heller Granit grau-rosé, Bänder (Ringe, Achsen, Rahmen, Ecklinien) in anthrazitfarbenem Granit.",
        "Denkmal: polierter roter Granit-Obelisk mit vergoldetem Pyramidion statt Würfelturm, Spitze 18,1 m wie 1970.",
        "Runde Hochbeete mit Granitrand und Magenta-Blumen; Bänke, Körbe und Laternen (3,5 m) wie im Stadtpark 1990.",
        "Glaspavillon mit petrolgrünem Stahlrahmen und Kupfer-Tonnendach statt des orangefarbenen Kiosks.",
        "Prüfung 238/238 nach dem Unreal-Import (6 Meshes Nanite, 16 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_plaza_1990.jpg", cap: "Plaza 1990 von Nordost" },
        { src: "2026-11-05_plaza_1990_front.jpg", cap: "Ansicht von der Straße mit Obelisk und Pavillon" },
        { src: "2026-11-05_plaza_1990_top.jpg", cap: "Draufsicht: Granitbänder, Rasen, runde Hochbeete" },
        { src: "2026-11-05_plaza_1990_lot.jpg", cap: "Auf dem Test-Lot" },
        { src: "2026-11-05_plaza_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_plaza_1990_vergleich_1970.jpg", after: "2026-11-05_plaza_1990.jpg", cap: "Plaza 1970 → 1990" },
      commits: []
    },
    {
      id: "newspaper-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Zeitungshaus 1990",
      summary: "Der Medien-Globus: das DAILY-NEWS-Haus wird um vier Geschosse aufgestockt, mit hellgrauem Granit und blauem Spiegelglas verkleidet, über dem Erdgeschoss läuft eine leuchtende Laufschrift rundum – und oben sitzt jetzt ein blauer Glasglobus mit rotem Ring.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_Newspaper_01: gleicher Turm mit eingezogenen Ecken, drei Rücksprünge, 10–16 Bürogeschosse (Standard 15).",
        "Fassade: Bänder in hellgrauem poliertem Granit, Fensterbänder und Mittelstreifen in blauem Spiegelglas, silberne Rahmen.",
        "LED-Laufschrift (bernstein) im alten Band über dem Erdgeschoss, rund um das ganze Haus.",
        "Krone: roter Zylinder, Globus aus blauem Spiegelglas mit silbernen Rippen und rotem Ring „DAILY NEWS“.",
        "Höhe Standard 79.6 m (≥ höchstes 1990er-Hochhaus), höchste Fassung 83.1 m – unter der City Hall 1990.",
        "Prüfung 192/192 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_newspaper_1990.jpg", cap: "Zeitungshaus 1990 von Nordost" },
        { src: "2026-11-05_newspaper_1990_front.jpg", cap: "Front mit Globus, Zylinder und Laufschrift" },
        { src: "2026-11-05_newspaper_1990_portal.jpg", cap: "Portal mit Schildband und Laufschrift" },
        { src: "2026-11-05_newspaper_1990_lot.jpg", cap: "Auf dem Test-Lot" },
        { src: "2026-11-05_newspaper_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_newspaper_1990_vergleich_1970.jpg", after: "2026-11-05_newspaper_1990.jpg", cap: "Zeitungshaus 1970 → 1990" },
      commits: []
    },
    {
      id: "bank-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Großbank 1990",
      summary: "Der Rosen-Granit-Turm: die ISLAND TRUST BANK wird um vier Geschosse aufgestockt, mit rosa poliertem Granit und dunkelgrünem Spiegelglas verkleidet – und statt des Lamellen-Aufbaus krönt sie jetzt ein grünes Kupfer-Tonnengewölbe mit Fächerfenster zur Straße.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_Bank_01: gleicher 32 × 24 m-Block, Schalterhalle mit Pfeiler-Loggia, zwei Rücksprünge, 9–16 Bürogeschosse (Standard 15).",
        "Fassade: rosa polierter Granit, dunkelgrünes Spiegelglas, Brüstungen aus dunkelgrünem Granit; Loggia-Pfeiler mit grüner Basis und Kapitell, Messing-Schriftzug.",
        "Krone: Granit-Tambour + Kupfer-Tonnengewölbe (Achse vorn–hinten) mit Stehfalzen und Fächerfenstern – Rundung statt Klotz.",
        "Höhe Standard 83.8 m (≥ höchstes 1990er-Hochhaus), höchste Fassung 87.4 m – bleibt unter der City Hall 1990.",
        "Recherche: postmoderne Bankhochhäuser der 80er – rosa Granit, getöntes Glas, Rücksprünge, Tonnengewölbe als Zitat.",
        "Prüfung 186/186 nach dem Unreal-Import (4 Meshes Nanite, 11 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_bank_1990.jpg", cap: "Großbank 1990 von Nordost" },
        { src: "2026-11-05_bank_1990_front.jpg", cap: "Front mit Kupfer-Gewölbe und Fächerfenster" },
        { src: "2026-11-05_bank_1990_loggia.jpg", cap: "Loggia mit Pfeilern und Messing-Schriftzug" },
        { src: "2026-11-05_bank_1990_lot.jpg", cap: "Auf dem Test-Lot" },
        { src: "2026-11-05_bank_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_bank_1990_vergleich_1970.jpg", after: "2026-11-05_bank_1990.jpg", cap: "Großbank 1970 → 1990" },
      commits: []
    },
    {
      id: "city-hall-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: City Hall 1990",
      summary: "Stadtkrone aus Glas und Gold: das Rathaus wird um zwei bis vier Geschosse aufgestockt, mit hellem Granit und Spiegelglas verkleidet, bekommt runde Säulen am Portikus – und der Uhrturm endet jetzt in einer Glaspyramide mit goldener Spitze.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_CityHall_01: gleicher 40 × 24 m-Block, Granitpodest und Freitreppe, 7–13 Regelgeschosse (Standard 8).",
        "Fassade: heller polierter Granit, Rippen wie 1970, Spiegelglas blau-grün, dunkelblaue Glasbrüstungen, petrolgrüne Profile.",
        "Portikus mit sechs runden Säulen, goldener Schriftzug „CITY HALL“.",
        "Uhrturm: Schaft 36 m, vier Uhren mit goldenen Zeigern, Kronenrahmen, Glaspyramide mit goldenen Graten, goldene Spitze – höchstes Gebäude der Epoche (Spitze ≈ 107 m).",
        "Recherche: postmoderne Rathäuser der späten 80er/frühen 90er – Uhrturm als Stadtzeichen, Glaspyramiden, Granit und Spiegelglas.",
        "Prüfung 179/179 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_cityhall_1990.jpg", cap: "City Hall 1990 von Nordost" },
        { src: "2026-11-05_cityhall_1990_portikus.jpg", cap: "Portikus mit runden Säulen und goldenem Schriftzug" },
        { src: "2026-11-05_cityhall_1990_front.jpg", cap: "Front: Uhrturm mit Glaspyramide und Spitze" },
        { src: "2026-11-05_cityhall_1990_lot.jpg", cap: "Auf dem Test-Lot" },
        { src: "2026-11-05_cityhall_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_cityhall_1990_vergleich_1970.jpg", after: "2026-11-05_cityhall_1990.jpg", cap: "City Hall 1970 → 1990" },
      commits: []
    },
    {
      id: "park-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Stadtpark 1990",
      summary: "Der Granit-Platz: Waschbeton weicht hellem Granit mit anthrazitfarbenen Bändern, in der Mitte steht jetzt ein Obelisk, aus dessen Sockel Wasserbögen ins runde Becken springen – dazu Nostalgie-Laternen und petrolgrüne Bänke.",
      points: [
        "Neuausstattung von BLD_1970_Park_01 auf gleicher Fläche (A Square, B Plaza, C Promenade): Wege, Platz, Bäume, Lots und Requisiten-Plätze wie bisher.",
        "Granitplatten grau-rosé, anthrazitfarbene Bänder, Granit-Pflanzwürfel mit Buchskugeln, runde Hochbeete mit Magenta-Blumen.",
        "Brunnen: rundes Granitbecken, gestufter Sockel, Obelisk bis 3,2 m, acht Wasserbögen.",
        "Möblierung: Laterne mit Pyramidendach (4,1 m), Bank mit Stahlwangen und Armlehnen (Sitzhöhe für die Passanten unverändert), Lochblech-Korb.",
        "Recherche: Stadterneuerung um 1990 – Naturstein statt Waschbeton, Leuchten im historischen Zitat, Platz-Brunnen als Monument.",
        "Prüfung 281/281 nach dem Unreal-Import (8 Meshes Nanite, 11 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_park_1990.jpg", cap: "Form A Square mit Obelisk-Brunnen" },
        { src: "2026-11-05_park_1990_plaza.jpg", cap: "Form B Plaza" },
        { src: "2026-11-05_park_1990_brunnen.jpg", cap: "Brunnen groß und klein" },
        { src: "2026-11-05_park_1990_requisiten.jpg", cap: "Bank, Laterne, Abfallkorb" },
        { src: "2026-11-05_park_1990_familie.jpg", cap: "Familie A/B/C auf den Test-Lots" },
        { src: "2026-11-05_park_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_park_1990_vergleich_1970.jpg", after: "2026-11-05_park_1990.jpg", cap: "Stadtpark 1970 → 1990" },
      commits: []
    },
    {
      id: "hospital-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Krankenhaus 1990",
      summary: "Die Spiegel-Klinik: das 70er-Krankenhaus bekommt ein bis zwei Stationen obendrauf, die Waschbeton-Bänder werden zu hellen Alu-Paneelen, die Fensterbänder zu blau-grünem Spiegelglas – unten polierter Granit, am Eingang türkise Säulen, auf dem Dach eine Glaspyramide.",
      points: [
        "Sanierung + Aufstockung von BLD_1970_Hospital_01 (A Scheibe, B L-Form, C T-Form): Grundrisse, Achsen, Lots und Schilder wie bisher.",
        "5–10 Stationsgeschosse (Standard 6, vorher 5) – Skyline-Regel für niedrige Bauten +1…+2.",
        "Bänder-Geometrie der 70er bleibt, neu verkleidet: Alu-Verbundplatten, Spiegelglas, türkise Pfosten; Erdgeschoss in rot-braunem Granit.",
        "Vordächer mit runden türkisen Säulen und roter Kante; Glaspyramide auf dem Technikraum als postmodernes Zitat.",
        "Recherche: Klinik-Fassadensanierungen und Glas-Eingänge der späten 80er/90er, Spiegelglas-Postmoderne.",
        "Prüfung 424/424 nach dem Unreal-Import (12 Meshes Nanite, 13 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_hospital_1990.jpg", cap: "Form A Scheibe mit Glaspyramide" },
        { src: "2026-11-05_hospital_1990_eingang.jpg", cap: "Eingang: türkise Säulen, Granit, CITY HOSPITAL" },
        { src: "2026-11-05_hospital_1990_lform.jpg", cap: "Form B L-Form" },
        { src: "2026-11-05_hospital_1990_tform.jpg", cap: "Form C T-Form" },
        { src: "2026-11-05_hospital_1990_familie.jpg", cap: "Familie A/B/C auf den Test-Lots" },
        { src: "2026-11-05_hospital_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_hospital_1990_vergleich_1970.jpg", after: "2026-11-05_hospital_1990.jpg", cap: "Krankenhaus 1970 → 1990" },
      commits: []
    },
    {
      id: "cafe-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Diner 1990",
      summary: "Der Diner zitiert seine eigene Herkunft: Klinker und Schindeln der 70er verschwinden unter gebürstetem Edelstahl, im Obergeschoss leuchten Glasbausteine, unten ein Schachbrett-Sockel – und an der Mansarde zieht sich ein pinkes Neonrohr ums Haus.",
      points: [
        "Sanierung von BLD_1970_Cafe_01 (A Eckdiner, B Roadside, C Doppelrund mit Turm): Grundriss, Rundecken, Höhen, Lots und Schildtexte wie bisher, keine Aufstockung.",
        "Mansarde bleibt als Form, jetzt türkises Stehfalz-Metall mit Chromblende und pinkem Neonrohr an der Traufe.",
        "Eingang (A/B) zwischen zwei türkisen Halbsäulen mit Chrom-Kapitell und Kugelleuchten; Fenster in Chrom mit pinken Jalousien.",
        "Schilder in gleicher Lage: dunkeltürkise Kästen mit neonpinker Schrift („Corner Café“, „Roadside Café“, „Central Café“, „DINER“).",
        "Recherche: Retro-Diner-Welle der späten 80er (Edelstahl, Glasbausteine, Neon, Schachbrett-Fliesen, Pastell Türkis/Pink).",
        "Prüfung 269/269 nach dem Unreal-Import (6 Meshes Nanite, 18 Materialien unter)."
      ],
      images: [
        { src: "2026-11-05_cafe_1990.jpg", cap: "Form A Eckdiner mit DINER-Kasten" },
        { src: "2026-11-05_cafe_1990_front.jpg", cap: "Form A Vorderansicht: Säulen, Kugelleuchten, Schachbrett-Sockel" },
        { src: "2026-11-05_cafe_1990_roadside.jpg", cap: "Form B Roadside (eingeschossig)" },
        { src: "2026-11-05_cafe_1990_turm.jpg", cap: "Form C mit Eingangsturm" },
        { src: "2026-11-05_cafe_1990_familie.jpg", cap: "Familie A/B/C auf den Test-Lots" },
        { src: "2026-11-05_cafe_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_cafe_1990_vergleich_1970.jpg", after: "2026-11-05_cafe_1990.jpg", cap: "Diner 1970 → 1990" },
      commits: []
    },
    {
      id: "residential-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Wohnhaus 1990",
      summary: "Das Einfamilienhaus bekommt seine 1990er-Sanierung: die grauen Eternit-Platten der 70er verschwinden unter Pastell-Putz, die Fenster haben wieder Sprossen und weiße Faschen, das Dach rote Tonziegel – und vorn wächst ein kleiner Erker bzw. ein Wintergarten.",
      points: [
        "Sanierung von BLD_1970_Residential_01 (A Kompakt, B L-Form, C gestreckt): Grundriss, Dach, Gauben, Höhen, Lots wie bisher, keine Aufstockung.",
        "A und C: Erker 2,4 m breit, 0,8 m tief mit Walmdach; B: Wintergarten mit Glas-Pultdach in der Innenecke – alles innerhalb der alten Veranda-Fläche von 1950.",
        "Kleines Satteldach-Vordach auf weißen Konsolen, Haustür mit Bogen-Glaseinsatz und Oberlicht, Laterne, Hausnummer; Satellitenschüssel am Giebel.",
        "Recherche: Sanierungen der späten 80er/90er (Wärmedämm-Putz in Pastell, Kunststoff-Sprossenfenster, Erker und Wintergärten als Nachrüstung).",
        "Prüfung 244/244 nach dem Unreal-Import (3 Meshes Nanite, 13 Materialien unter); neue Dächer bleiben unter der Hauptrinne."
      ],
      images: [
        { src: "2026-11-05_residential_1990.jpg", cap: "Form A mit Erker und Vordach" },
        { src: "2026-11-05_residential_1990_strasse.jpg", cap: "Form A aus Augenhöhe" },
        { src: "2026-11-05_residential_1990_wintergarten.jpg", cap: "Form B mit Wintergarten in der Innenecke" },
        { src: "2026-11-05_residential_1990_familie.jpg", cap: "Familie A/B/C auf den Test-Lots" },
        { src: "2026-11-05_residential_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_residential_1990_vergleich_1970.jpg", after: "2026-11-05_residential_1990.jpg", cap: "Wohnhaus 1970 → 1990" },
      commits: []
    },
    {
      id: "departmentstore-1990", date: "2026-11-05", phase: "p5", title: "Autopilot: Kaufhaus 1990",
      summary: "Erste 1990er-Fassung des Autopiloten. Das Shopping Center wird zur „Galerie“: die Betonbänder der 70er bekommen polierten rötlichen Granit, die Bronze-Fensterbänder werden blaugrünes Spiegelglas im Raster mit türkisen Profilen, und über dem Eingang sitzt eine gläserne Krone.",
      points: [
        "Sanierung von BLD_1970_DepartmentStore_01 (A Rotunde, B Eckhaus, C Eingangsturm): Grundriss, Geschosshöhen, Eingang, Lots wie bisher, +0…+1 Geschoss (4–9, Standard 6).",
        "Krone als postmodernes Zitat: halber Glaskegel über der Rotunde, Viertelkegel über der runden Ecke, Granitgiebel mit Rundfenster beim schmalen Haus.",
        "Granit-Brüstung 0,90 m nach dem Referenzblatt, Fenster 2,8 m hoch mit Kämpfer; Kragdach-Blende und Pylon-Kappen türkis.",
        "Recherche: Kaufhaus-Umbauten der späten 80er/90er (Naturstein + große Glasflächen, Lichthof unter Glaskuppel, Spiegel und Granit als Akzente).",
        "Prüfung 403/403 nach dem Unreal-Import (12 Meshes Nanite, 14 Materialien unter); der Sockel ist jetzt bündig, damit die Lieferzufahrt 3 m breit bleibt."
      ],
      images: [
        { src: "2026-11-05_departmentstore_1990.jpg", cap: "Form A mit Glaskrone über der Rotunde" },
        { src: "2026-11-05_departmentstore_1990_front.jpg", cap: "Vorderansicht Form A" },
        { src: "2026-11-05_departmentstore_1990_eckhaus.jpg", cap: "Form B Eckhaus mit Viertelkegel" },
        { src: "2026-11-05_departmentstore_1990_giebel.jpg", cap: "Form C mit Granitgiebel" },
        { src: "2026-11-05_departmentstore_1990_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1970er-Blatt)" }
      ],
      compare: { before: "2026-11-05_departmentstore_1990_vergleich_1970.jpg", after: "2026-11-05_departmentstore_1990.jpg", cap: "Kaufhaus 1970 → 1990" },
      commits: []
    },
    {
      id: "parkinggarage-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Parkhaus 1970",
      summary: "Neubau und Typengebäude (Reserve-Streifen am Ring, Bezirke). Leitidee „Stadtgarage“ – offene Parkdecks hinter kräftigen hell-beigen Waschbeton-Bändern, innen eine Rampe, an der Ecke ein Sichtbeton-Treppenturm mit Bronze-Glasband und blauem „P“, unten Kassenhäuschen, rot-weiße Schranken und orange „CITY PARKING“.",
      points: [
        "Eine Form: Block 40 × 32 m, Erdgeschoss 3,2 m + 3–6 Parkdecks zu 3,0 m (Standard 4), Dachdeck 12,5–21,5 m, ca. 215–359 Stellplätze.",
        "Stapelbar trotz Rampe: jedes Deck hat die Rampe im selben Streifen, der letzte Keil liegt im nächsten Modul.",
        "Dachdeck mit Brüstung, Markierungen, vier Lichtmasten und Geländer um die Rampenöffnung.",
        "Recherche: Parkhäuser der späten 60er/70er (Split-Level-Rampen, Waschbeton-Brüstungsplatten, Sichtbeton) – nur Typologie, kein Nachbau.",
        "Prüfung 164/164 nach dem Unreal-Import (4 Meshes Nanite, 14 Materialien unter); im ersten Lauf ragte der Rampen-Bordstein über die Modulgrenze – behoben.",
        "Zur Prüfung: Rampe sichtbar durch die Schlitze, Treppenturm in der Blockecke, Schriftzug über den Fahrspuren."
      ],
      images: [
        { src: "2026-11-05_parkinggarage_1970.jpg", cap: "Parkhaus 1970 von Nordost" },
        { src: "2026-11-05_parkinggarage_1970_front.jpg", cap: "Vorderansicht mit Treppenturm" },
        { src: "2026-11-05_parkinggarage_1970_einfahrt.jpg", cap: "Einfahrt mit Kassenhäuschen und Schranken" },
        { src: "2026-11-05_parkinggarage_1970_spielansicht.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_parkinggarage_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "tvtower-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Fernsehturm 1970",
      summary: "Neubau und Unikat für das Zentrum. Leitidee „Stadtfunkturm“ – ein schlanker Sichtbeton-Schaft auf einem flachen Eingangspavillon mit Glasfront und orangem „TV TOWER“, oben ein weißer Turmkorb mit zwei verglasten Etagen (Aussicht und Restaurant), Antennenbühnen mit Richtfunk-Schüsseln und ein rot-weißer Mast mit Flugwarnleuchte.",
      points: [
        "Eine Form (Unikat): Pavillon 24 × 24 m, Schaft Ø 7,2 m aus 4–6 Segmenten zu 6 m (Standard 5), Turmkorb Ø 22 m.",
        "Antennenspitze 75,3 / 81,3 / 87,3 m – bewusst unter der City Hall 1970 (ab 89,6 m), Betonkopf unter ihrer Krone.",
        "Module: Pavillon + Schaftfuß, Schaftsegment (stapelbar, Schlitzfenster des Treppenhauses), Turmkorb mit Mast; Buchstaben als eigenes Mesh.",
        "Recherche: Fernmeldetürme der 60er/70er (Typentürme, Turmkorb mit Aussicht und Drehrestaurant, rot-weiße Antennenträger) – nur Typologie, kein Nachbau.",
        "Prüfung 152/152 nach dem Unreal-Import (4 Meshes Nanite, 13 Materialien unter), erster Produktionslauf grün.",
        "Zur Prüfung: Höhe (Ausnahme der Höhenregel?), nur zwei Turmkorb-Etagen, Schriftzug am Pavillon."
      ],
      images: [
        { src: "2026-11-05_tvtower_1970.jpg", cap: "Fernsehturm 1970 von Nordost" },
        { src: "2026-11-05_tvtower_1970_front.jpg", cap: "Vorderansicht" },
        { src: "2026-11-05_tvtower_1970_pavillon.jpg", cap: "Eingangspavillon auf Augenhöhe" },
        { src: "2026-11-05_tvtower_1970_spielansicht.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_tvtower_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "postoffice-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Postamt 1970",
      summary: "Das Postamt „POST OFFICE“ wächst um ein Bürogeschoss und wird pflegeleicht: dunkelbraune glasierte Spaltplatten statt Kalkstein, weiße Sohlbänke und flache Blende, Bronzefenster, ein weißer Emaille-Risalit mit der alten Uhr und orange Rolltore an der Postrampe.",
      points: [
        "Sanierung + Aufstockung von BLD_1950_PostOffice_01 (Unikat, Form A): 4–6 Bürogeschosse (Standard 5, 1950: 3–5), 23,2–30,4 m.",
        "Umriss, Achsen, Öffnungen, Granitsockel, Risalit mit Uhr, Vordach, Stufen, Postrampe, Lot und Wege wie 1950.",
        "Keramik statt Kalkstein, heller Risalit, Höhe bis 30,4 m, orange Tore – zur Prüfung.",
        "Recherche: Post- und Behördenbauten der 70er mit keramischen Bekleidungen, eloxiertem Aluminium und gegliederten Fassaden – nur Typologie, kein Nachbau.",
        "Prüfung 196/196 nach dem Unreal-Import (4 Meshes Nanite, 15 Materialien unter), erster Produktionslauf grün."
      ],
      images: [
        { src: "2026-11-05_postoffice_1970.jpg", cap: "Postamt 1970 von Nordost" },
        { src: "2026-11-05_postoffice_1970_front.jpg", cap: "Vorderansicht mit Risalit und Uhr" },
        { src: "2026-11-05_postoffice_1970_rampe.jpg", cap: "Rückseite mit Postrampe und orangen Rolltoren" },
        { src: "2026-11-05_postoffice_1970_spielansicht.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_postoffice_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_postoffice_1970_vergleich_1950.jpg", after: "2026-11-05_postoffice_1970.jpg", cap: "Postamt 1950 → 1970" },
      commits: []
    },
    {
      id: "school-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Schule 1970",
      summary: "Die Klinkerschule „PUBLIC SCHOOL“ bekommt ein Klassengeschoss mehr und den Farbklang der 70er: silberne Aluminium-Fensterbänder, gelbe Brüstungspaneele unter jedem Band, Sonnenschutz-Kästen darüber, ein Eingangsrisalit aus hellem Beton mit der alten Uhr und gelbe Türen.",
      points: [
        "Sanierung + Aufstockung von BLD_1950_School_01 (Formen A, B, C): 2–3 Obergeschosse (Standard 2, 1950: 1–2), 13,6–17,2 m.",
        "Klinker, Umriss, Klassen-Raster, Fensterband-Maße, Risalit mit Uhr, Vordach, Stufen, Rücktür, Lot und Wege wie 1950.",
        "Gelbe Paneele und Türen, höchstens 4 Geschosse, Sonnenschutz-Kästen – zur Prüfung.",
        "Recherche: Schulbauten der 70er mit farbigen Brüstungsbändern, eloxiertem Aluminium und außenliegendem Sonnenschutz – nur Typologie, kein Nachbau.",
        "Prüfung 451/451 nach dem Unreal-Import (12 Meshes Nanite, 12 Materialien unter), erster Produktionslauf grün."
      ],
      images: [
        { src: "2026-11-05_school_1970.jpg", cap: "Schule 1970 (Form A) von Nordost" },
        { src: "2026-11-05_school_1970_front.jpg", cap: "Vorderansicht mit Risalit und Uhr" },
        { src: "2026-11-05_school_1970_lform.jpg", cap: "L-Form C mit Flügel" },
        { src: "2026-11-05_school_1970_spielansicht.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_school_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_school_1970_vergleich_1950.jpg", after: "2026-11-05_school_1970.jpg", cap: "Schule 1950 → 1970" },
      commits: []
    },
    {
      id: "gasstation-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Tankstelle 1970",
      summary: "Die weiße Emaille-Tankstelle wird zur 70er-Selbstbedienungsstation: brauner Klinker, Pächterwohnung obendrauf, eine hohe weiße Leuchtblende mit orangem Band am Tankdach und kantige orange Zapfsäulen ohne Glaskugel.",
      points: [
        "Sanierung + Aufstockung von BLD_1950_GasStation_01 (Formen A und B): 1–2 Obergeschosse (Standard 1, 1950: 0–1), 12–15 m bis zur Schildscheibe.",
        "Umriss, Büro, Tore, Tankdach-Platte mit lichter Höhe 3,15 m, Zapfinsel, Schildscheibe „GAS“, Schrift „MOTOR SERVICE“, Lot und Wege wie 1950.",
        "Leuchtblende des Tankdachs bis 3,85 m (Blatt: auf Blendenhöhe), Fenster oben wie 1950, Dachbrüstung in Klinker – zur Prüfung.",
        "Recherche: Selbstbedienung brachte in den 70ern große Tankdächer mit Lichtblende zurück, Ziegel und Naturstein ersetzten Emaille – nur Typologie, kein Nachbau.",
        "Prüfung 334/334 nach dem Unreal-Import (8 Meshes Nanite, 12 Materialien unter), erster Produktionslauf grün."
      ],
      images: [
        { src: "2026-11-05_gasstation_1970.jpg", cap: "Tankstelle 1970 (Form A) von Nordost" },
        { src: "2026-11-05_gasstation_1970_front.jpg", cap: "Vorderansicht mit Leuchtblende und Pächterwohnung" },
        { src: "2026-11-05_gasstation_1970_strasse.jpg", cap: "Form B aus Augenhöhe" },
        { src: "2026-11-05_gasstation_1970_spielansicht.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_gasstation_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_gasstation_1970_vergleich_1950.jpg", after: "2026-11-05_gasstation_1970.jpg", cap: "Tankstelle 1950 → 1970" },
      commits: []
    },
    {
      id: "apartmentblock-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Mehrfamilien-Block 1970",
      summary: "Der Klinkerblock „ELM COURT“ bekommt einen 70er-Mantel: helle Faserzementplatten über dem Klinker, breite braune Fenster, doppelt so viele Balkone hinter geschlossenen braunen Brüstungsplatten und eine orange Haustür; ein bis zwei Geschosse obendrauf.",
      points: [
        "Sanierung + Aufstockung von BLD_1950_ApartmentBlock_01: 4–9 Obergeschosse (Standard 5, 1950: 3–7), 21–36 m bis zur Antennenspitze – Regel „niedriges Gebäude: +1…+2“.",
        "Umriss, Achsen, Treppenhaus-Band, Eingang mit Stufen und Vordach, Rücktür, Dachaufbau, Antenne, Schornsteine, Lot und Wege wie 1950; Balkone gleich tief wie 1950, nur an zwei Achsen je Seite.",
        "Balkone als durchlaufende Bänder (Blatt: eine Achse), orange Haustür, keine Laterne – zur Prüfung.",
        "Recherche: Wohnblöcke der 60er/70er mit Faserzement-Fassaden, Betonbalkonen und Brüstungsplatten – nur Typologie, kein Nachbau.",
        "Prüfung 205/205 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien unter); ein Lauf verworfen (Deckleiste 1 cm zu weit vorn)."
      ],
      images: [
        { src: "2026-11-05_apartmentblock_1970.jpg", cap: "Mehrfamilien-Block 1970 von Nordost" },
        { src: "2026-11-05_apartmentblock_1970_front.jpg", cap: "Vorderansicht mit Balkonbändern und Treppenhaus" },
        { src: "2026-11-05_apartmentblock_1970_strasse.jpg", cap: "Eingang mit oranger Tür aus Augenhöhe" },
        { src: "2026-11-05_apartmentblock_1970_spielansicht.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_apartmentblock_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_apartmentblock_1970_vergleich_1950.jpg", after: "2026-11-05_apartmentblock_1970.jpg", cap: "Mehrfamilien-Block 1950 → 1970" },
      commits: []
    },
    {
      id: "theater-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Kino 1970",
      summary: "Aus dem Theater wird das Twin-Kino „CINEMA“: derselbe Bau mit Portal, Marquise und Zikkurat-Pylon, ein bis zwei Geschosse höher für den zweiten Saal; vorn dunkle Aluminiumpaneele zwischen weißen Beton-Lisenen mit schmalen hohen Fenstern, der Saal verputzt, der Pylon glatt und orange, die Marquise eine weiße Leuchttafel.",
      points: [
        "Sanierung + Aufstockung von BLD_1950_Theater_01: 2–5 Obergeschosse (Standard 3, 1950: 1–3), 25–35 m bis zur Pylon-Spitze – Regel „niedriges Gebäude: +1…+2“, unter der City Hall 1970.",
        "Umriss, Achsen, Glasband, Portal, Schaukästen, Marquise, Bühnentor, Pylon (Lage, Maße, Stufen), Lot und Wege wie 1950; Blende nicht weiter vor als das alte Gesims.",
        "Pylon „CINEMA“ statt „THEATER“, ohne Glühbirnen; Wandlaternen entfallen – zur Prüfung.",
        "Recherche: Kinos der 70er wurden zu Twin-Kinos geteilt und über Front und Marquise modernisiert (Aluminium, hinterleuchtete Wechseltafeln) – nur Typologie, kein Nachbau.",
        "Prüfung 201/201 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien unter), inkl. Upgrade-Regeln gegen die 1950er-Fassung."
      ],
      images: [
        { src: "2026-11-05_theater_1970.jpg", cap: "Kino 1970 von Nordost" },
        { src: "2026-11-05_theater_1970_front.jpg", cap: "Vorderansicht mit Lisenen, Aluminiumpaneelen, Marquise und Pylon" },
        { src: "2026-11-05_theater_1970_strasse.jpg", cap: "Portal und Leuchttafel aus Augenhöhe" },
        { src: "2026-11-05_theater_1970_spielansicht.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_theater_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_theater_1970_vergleich_1950.jpg", after: "2026-11-05_theater_1970.jpg", cap: "Kino 1950 → 1970" },
      commits: []
    },
    {
      id: "hotel-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Grand Hotel 1970",
      summary: "Das Grand Hotel wächst und wird hell: derselbe Turm mit eingezogenen Ecken, Marquee und Dachreklame, bis zu vier Geschosse höher; weiße Beton-Lisenen auf jeder Achse, dazwischen raumbreite Aluminiumfenster über dunkelbraunen Paneelen, die Buchstaben leuchten jetzt orange.",
      points: [
        "Sanierung + Aufstockung von BLD_1950_Hotel_01: 9–13 Gästegeschosse (Standard 12, 1950: 7–11), 49–63 m bis zur Reklame – im 1970er-Hochhausband (≤ 65 m) und unter der City Hall 1970.",
        "Umriss, Achsen, Glasband, Portal, Marquee, Restaurantfenster, Ladetore, Rücksprünge, Dachreklame, Lot und Wege wie 1950; Blenden nicht weiter vor als die alten Gesimse.",
        "Wandlaternen entfallen, Buchstaben orange (Blatt: weiß) – zur Prüfung.",
        "Recherche: Hoteltürme der 60er/70er mit hellen Betonpaneelen, Zimmerachsen als senkrechtes Raster, Dachreklamen – nur Typologie, kein Nachbau.",
        "Prüfung 204/204 nach dem Unreal-Import (4 Meshes Nanite, 10 Materialien unter), inkl. Upgrade-Regeln gegen die 1950er-Fassung."
      ],
      images: [
        { src: "2026-11-05_hotel_1970.jpg", cap: "Grand Hotel 1970 von Nordost" },
        { src: "2026-11-05_hotel_1970_front.jpg", cap: "Vorderansicht mit Lisenen-Raster, Marquee und Dachreklame" },
        { src: "2026-11-05_hotel_1970_strasse.jpg", cap: "Portal und Marquee aus Augenhöhe" },
        { src: "2026-11-05_hotel_1970_spielansicht.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_hotel_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_hotel_1970_vergleich_1950.jpg", after: "2026-11-05_hotel_1970.jpg", cap: "Grand Hotel 1950 → 1970" },
      commits: []
    },
    {
      id: "firestation-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Feuerwache 1970",
      summary: "Die Wache wird grau – und das Rot umso lauter: dieselben drei Formen mit Toren, Bürotür und Schlauchturm, ein bis zwei Geschosse höher, in hellem Waschbeton mit breiten Aluminiumfenstern; Farbe tragen nur noch die Tore mit ihren zwei Glasreihen, das breite Band am Turm und die Buchstaben.",
      points: [
        "Sanierung + Aufstockung von BLD_1950_FireStation_01: 2–4 Obergeschosse (Standard 2, 1950: 1–2), 21–28 m bis zur Turmkappe – Regel „niedriges Gebäude: +1…+2“.",
        "Umrisse A/B/C, Tore, Bürotür, Diensttür, Turm (Lage, Höhe, Lamellen), Lots und Wege wie 1950; Blende nicht weiter vor als das alte Gesims.",
        "Buchstaben rot statt weiß (weiß war auf dem hellen Beton unlesbar) – zur Prüfung.",
        "Recherche: Nachkriegs-/70er-Wachen in Sichtbeton und Kieselwaschbeton, Rot als Kontrast, Schlauchturm als Wahrzeichen – nur Typologie, kein Nachbau.",
        "Prüfung 447/447 nach dem Unreal-Import (12 Meshes Nanite, 11 Materialien unter), inkl. Upgrade-Regeln gegen die 1950er-Fassung."
      ],
      images: [
        { src: "2026-11-05_firestation_1970.jpg", cap: "Feuerwache 1970 (Form A) von Nordost" },
        { src: "2026-11-05_firestation_1970_front.jpg", cap: "Vorderansicht mit Toren, torbreiten Fenstern und Turm" },
        { src: "2026-11-05_firestation_1970_strasse.jpg", cap: "Tore aus Augenhöhe" },
        { src: "2026-11-05_firestation_1970_spielansicht.jpg", cap: "Spielansicht der Formen A, B, C" },
        { src: "2026-11-05_firestation_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_firestation_1970_vergleich_1950.jpg", after: "2026-11-05_firestation_1970.jpg", cap: "Feuerwache 1950 → 1970" },
      commits: []
    },
    {
      id: "police-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Polizeiwache 1970",
      summary: "Die Bezirkswache bekommt ein Betonkleid: dieselben drei Formen mit Eingang, blauen Laternen, Garagen und Funkmast, ein bis zwei Geschosse höher, mit hellen Betonfertigteilen statt Klinker – jedes breite Aluminiumfenster sitzt in einem vorstehenden Betonrahmen, darunter ein dunkler Sockel mit weißen Buchstaben „POLICE“.",
      points: [
        "Sanierung + Aufstockung von BLD_1950_Police_01: 2–5 Obergeschosse (Standard 3, 1950: 1–3), 20–31 m bis zur Mastspitze – Regel „niedriges Gebäude: +1…+2“.",
        "Umrisse A/B/C, Eingang, Stufen, Laternen, Vordach, Rolltore, Zellenfenster, Treppenhaus, Mast, Lots und Wege wie 1950; Rahmen und Blende nicht weiter vor als Band und Gesims 1950.",
        "Blatt zeigt vierteilige Fenster, gebaut sind dreiteilige (zur Prüfung).",
        "Recherche: Polizeibauten der 70er aus genormten Betonfertigteil-Systemen und brutalistische Wachen – nur Typologie, kein Nachbau.",
        "Prüfung 440/440 nach dem Unreal-Import (12 Meshes Nanite, 12 Materialien unter), inkl. Upgrade-Regeln gegen die 1950er-Fassung."
      ],
      images: [
        { src: "2026-11-05_police_1970.jpg", cap: "Polizeiwache 1970 (Form A) von Nordost" },
        { src: "2026-11-05_police_1970_front.jpg", cap: "Vorderansicht mit Betonrahmen, Sockel und Schild" },
        { src: "2026-11-05_police_1970_strasse.jpg", cap: "Eingang mit blauen Laternen aus Augenhöhe" },
        { src: "2026-11-05_police_1970_spielansicht.jpg", cap: "Spielansicht der Formen A, B, C" },
        { src: "2026-11-05_police_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_police_1970_vergleich_1950.jpg", after: "2026-11-05_police_1970.jpg", cap: "Polizeiwache 1950 → 1970" },
      commits: []
    },
    {
      id: "plaza-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Plaza 1970",
      summary: "Die „Island Plaza“ bekommt den Look der 70er: gleicher Platz mit denselben Treppen, Bäumen und Wegen, aber Waschbeton mit dunklen Bändern; auf dem alten Sockel steht statt Säule und Goldflamme ein Turm aus zehn verdrehten Edelstahl-Würfeln, dazu sechseckige Hochbeete, Kugelleuchten, Betonbänke und ein orangefarbener Kiosk.",
      points: [
        "Neuausstattung von BLD_1950_Plaza_01 auf derselben Fläche (76 × 76 m) – die Plaza wächst nicht in die Höhe: Würfelturm 18,55 m, so hoch wie die alte Flamme.",
        "Grundriss, Treppen, Becken, Rasen, Kübel, Bäume und alle Requisiten-Plätze wie 1950 (Prüfregeln gegen die 1950er-Spec).",
        "Erster Draft: Würfel mit 9° Drehung wirkten wie eine glatte Säule → 30° je Würfel.",
        "Recherche: Stadtplätze der 70er mit Edelstahl-Plastiken, Waschbeton-Brunnen und Betonästhetik – nur Typologie, kein Nachbau.",
        "Prüfung 238/238 nach dem Unreal-Import (6 Meshes Nanite unter)."
      ],
      images: [
        { src: "2026-11-05_plaza_1970.jpg", cap: "Plaza 1970 von Nordost" },
        { src: "2026-11-05_plaza_1970_front.jpg", cap: "Vorderansicht mit Würfelturm und Kiosk" },
        { src: "2026-11-05_plaza_1970_draufsicht.jpg", cap: "Draufsicht mit dunklen Bändern und Hochbeeten" },
        { src: "2026-11-05_plaza_1970_spielansicht.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_plaza_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_plaza_1970_vergleich_1950.jpg", after: "2026-11-05_plaza_1970.jpg", cap: "Plaza 1950 → 1970" },
      commits: []
    },
    {
      id: "newspaper-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Zeitungshaus 1970",
      summary: "„Daily News“ wird waagerecht: derselbe Turm mit eingezogenen Ecken und drei Rücksprüngen, bis zu vier Geschosse höher, mit hellen Waschbeton-Brüstungen und Aluminium-Fensterbändern statt Art-déco-Pfeilern; die Druckhalle bleibt sichtbar, und die Weltkugel sitzt jetzt silbern mit orangem Ring auf einem orangefarbenen Betonzylinder.",
      points: [
        "Sanierung + Aufstockung von BLD_1950_Newspaper_01: 8–12 Bürogeschosse (Standard 11, 1950: 6–9), 65,6 m bis zur Kugel – so hoch wie das höchste 1970er-Hochhaus; oben nur +3, damit die Kugel unter der City Hall 1970 (71,4 m) bleibt.",
        "Umriss, Portal, Druckhallen-Fenster, Glasband, Rücksprünge, Laderampen, Kugel-Lage, Lots und Wege wie 1950; Bänder und Blenden nicht weiter vor als die alte Fassade.",
        "Zylinder füllt die Höhe der alten Pyramide – höher als im Blatt (zur Prüfung).",
        "Recherche: Zeitungshäuser der 70er mit sichtbarer Druckerei, Bandfassaden der Spätmoderne – nur Typologie, kein Nachbau.",
        "Prüfung 192/192 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien unter), inkl. Upgrade-Regeln gegen die 1950er-Fassung."
      ],
      images: [
        { src: "2026-11-05_newspaper_1970.jpg", cap: "Zeitungshaus 1970 von Nordost" },
        { src: "2026-11-05_newspaper_1970_front.jpg", cap: "Vorderansicht mit Glasband, Rücksprüngen und Kugel" },
        { src: "2026-11-05_newspaper_1970_strasse.jpg", cap: "Portal mit dunklem Schildband aus Augenhöhe" },
        { src: "2026-11-05_newspaper_1970_spielansicht.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_newspaper_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_newspaper_1970_vergleich_1950.jpg", after: "2026-11-05_newspaper_1970.jpg", cap: "Zeitungshaus 1950 → 1970" },
      commits: []
    },
    {
      id: "bank-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Großbank 1970",
      summary: "Die „Island Trust Bank“ wird zum „Bronzeturm“: gleicher gestufter Block mit Schalterhalle und Loggia, aber bis zu vier Bürogeschosse höher, in dunklen polierten Granit mit schlanken Pfeilern und raumhohen Bronze-Fensterbändern gehüllt; vier eckige Pfeiler in der Loggia, und statt Goldpyramide und Mast ein flacher Technikaufbau mit Bronze-Lamellen.",
      points: [
        "Sanierung + Aufstockung von BLD_1950_Bank_01: 7–12 Bürogeschosse (Standard 11, 1950: 5–8), 65,3 m – so hoch wie das höchste 1970er-Hochhaus und unter der City Hall 1970 (≥ 71,4 m).",
        "Umriss 32 × 24 m, Schalterhalle, Loggia, Stufen, Türen, Rücksprünge, Garage, Lots und Wege wie 1950; Pfeiler und Blenden nicht weiter vor als die alte Fassade.",
        "Technikaufbau 10 × 6 × 4,5 m auf der alten Kronenfläche; das Blatt zeigte 9 Geschosse – Höhe nach der Prüfregel angehoben (zur Prüfung).",
        "Recherche: Bankhäuser der 70er mit Granitpfeilern und bronze getöntem Glas – nur Typologie, kein Nachbau.",
        "Prüfung 186/186 nach dem Unreal-Import (4 Meshes Nanite, 11 Materialien unter), inkl. Upgrade-Regeln gegen die 1950er-Fassung."
      ],
      images: [
        { src: "2026-11-05_bank_1970.jpg", cap: "Großbank 1970 von Nordost" },
        { src: "2026-11-05_bank_1970_front.jpg", cap: "Vorderansicht mit Rücksprüngen und Lamellen-Aufbau" },
        { src: "2026-11-05_bank_1970_strasse.jpg", cap: "Loggia mit eckigen Granitpfeilern aus Augenhöhe" },
        { src: "2026-11-05_bank_1970_spielansicht.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_bank_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_bank_1970_vergleich_1950.jpg", after: "2026-11-05_bank_1970.jpg", cap: "Großbank 1950 → 1970" },
      commits: []
    },
    {
      id: "cityhall-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: City Hall 1970",
      summary: "Das Rathaus wird zur „Stadtkrone in Beton“: gleicher Block mit Granitpodest und Freitreppe, aber zwei Amtsgeschosse höher, in helle Waschbeton-Fertigteile mit schlanken Rippen gehüllt; sechs eckige Pfeiler am Portikus, ein höherer Uhrturm mit modernen Zifferblättern und statt Laterne und Kupferhelm eine offene Betonkrone mit rot-weißem Antennenmast.",
      points: [
        "Sanierung + Aufstockung von BLD_1950_CityHall_01: 5–9 Regelgeschosse (Standard 6, 1950: 3–5), Kronendach ~75 m, Antenne bis ~94 m – höchstes Gebäude der 1970er (Hochhäuser bis 65 m).",
        "Umriss 40 × 24 m, Granitpodest, Freitreppe, Türen, Dienstzugang, Garage, Lots und Wege wie 1950; Rippen und Dachblende nicht weiter vor als die alte Fassade.",
        "Turm: Schaft 27 m statt 22 m, Uhren mit weißem Blatt und Strich-Indizes, offene Krone 9 × 9 m, Mast 18 m mit Warnlichtern.",
        "Recherche: Rathäuser aus Betonfertigteilen der späten 60er/70er (Rippenraster, getöntes Glas, Masse statt Ornament) – nur Typologie, kein Nachbau.",
        "Prüfung 179/179 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien unter), inkl. Upgrade-Regeln gegen die 1950er-Fassung."
      ],
      images: [
        { src: "2026-11-05_cityhall_1970.jpg", cap: "City Hall 1970 von Nordost" },
        { src: "2026-11-05_cityhall_1970_front.jpg", cap: "Vorderansicht mit Pfeiler-Portikus und Betonkrone" },
        { src: "2026-11-05_cityhall_1970_strasse.jpg", cap: "Aus Augenhöhe von der Straße" },
        { src: "2026-11-05_cityhall_1970_spielansicht.jpg", cap: "Spielansicht" },
        { src: "2026-11-05_cityhall_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_cityhall_1970_vergleich_1950.jpg", after: "2026-11-05_cityhall_1970.jpg", cap: "City Hall 1950 → 1970" },
      commits: []
    },
    {
      id: "park-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Stadtpark 1970",
      summary: "Der kleine Stadtpark wird zum „Waschbeton-Platz“: gleiche Wege, Hecken und Bäume, aber Waschbetonplatten mit dunklen Bändern, Pflanzwürfel statt Steinpfeiler, sechseckige Hochbeete, ein gestufter Betonbrunnen mit Fontänen, Kugelleuchten und Betonbänke mit Holzauflage.",
      points: [
        "Neuausstattung von BLD_1950_Park_01 auf gleicher Fläche (A Square 40 × 40 m, B Plaza 24 × 24 m, C Promenade 40 × 16 m), keine Aufstockung.",
        "Alle Wege, Lots, Eingänge, Bäume und Requisiten-Plätze wie 1950; Bank-Sitzhöhe gleich, damit Passanten weiter sitzen können.",
        "Neue Requisiten: achteckiger Brunnen mit gestuften Säulen (D 10 m / 5 m), Kugelleuchte 4,1 m, Betonbank, runder Betonkorb.",
        "Recherche: Waschbeton als Belag der 60er/70er, Beton-Pflanzkübel, Kugelleuchten, Spielplastiken aus Waschbeton (nicht gebaut, zur Prüfung).",
        "Prüfung 276/276 nach dem Unreal-Import (8 Meshes Nanite, 11 Materialien unter), inkl. Upgrade-Regeln gegen die 1950er-Fassung."
      ],
      images: [
        { src: "2026-11-05_park_1970.jpg", cap: "Familie: Square, Plaza, Promenade an der Straße" },
        { src: "2026-11-05_park_1970_square.jpg", cap: "Form A Square mit Betonbrunnen" },
        { src: "2026-11-05_park_1970_plaza.jpg", cap: "Form B Plaza" },
        { src: "2026-11-05_park_1970_requisiten.jpg", cap: "Requisiten: Brunnen, Bank, Kugelleuchte, Korb" },
        { src: "2026-11-05_park_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_park_1970_vergleich_1950.jpg", after: "2026-11-05_park_1970_square.jpg", cap: "Stadtpark 1950 → 1970" },
      commits: []
    },
    {
      id: "hospital-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Krankenhaus 1970",
      summary: "Das City Hospital wird zur „Bänder-Klinik“: ein bis zwei Stationsgeschosse mehr, die Obergeschosse in waagrechte Bänder aus Waschbeton und durchlaufende Bronze-Fensterbänder gehüllt, Klinker-Erdgeschoss, flache Vordächer mit oranger Kante und leuchtender Kastenschrift.",
      points: [
        "Sanierung + Aufstockung von BLD_1950_Hospital_01 (A Scheibe, B L-Form, C T-Form): 4–8 Stationsgeschosse statt 3–6, Standard 5 (26 m mit Technik).",
        "Grundriss, Geschosshöhen, Eingänge, Notaufnahme, Anlieferung, Lots und Schildtexte wie 1950; neue Fassade nur 0,15 m vor der alten Wand.",
        "Ecken geschlossen, Technikraum mit Lamellen, Rückbalkone mit geschlossenen Brüstungen und Bronze-Handlauf.",
        "Recherche: Klinik-Umbauten der 70er (Lochfenster → Fensterbänder), Waschbeton-Fertigteile als Standard öffentlicher Bauten.",
        "Prüfung 418/418 nach dem Unreal-Import (12 Meshes Nanite, 13 Materialien unter), inkl. Upgrade-Regeln gegen die 1950er-Fassung."
      ],
      images: [
        { src: "2026-11-05_hospital_1970.jpg", cap: "Haupteingang auf Augenhöhe" },
        { src: "2026-11-05_hospital_1970_scheibe.jpg", cap: "Form A Scheibe (5 Stationsgeschosse)" },
        { src: "2026-11-05_hospital_1970_lform.jpg", cap: "Form B L-Form" },
        { src: "2026-11-05_hospital_1970_rueckseite.jpg", cap: "Form C Rückseite mit Balkonen" },
        { src: "2026-11-05_hospital_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_hospital_1970_vergleich_1950.jpg", after: "2026-11-05_hospital_1970_scheibe.jpg", cap: "Krankenhaus 1950 → 1970" },
      commits: []
    },
    {
      id: "cafe-1970", date: "2026-11-05", phase: "p5", title: "Autopilot: Diner/Café 1970",
      summary: "Erste 1970er-Fassung des Autopiloten: das Stromlinien-Café wird zum „eingepackten Diner“. Gleiche Kubaturen mit runden Ecken, aber dunkelroter Klinker, eine umlaufende Schindel-Mansarde über dem Erdgeschoss, Bronzefenster und beleuchtete Kastenschilder statt Chrom, Fliesen, Markisen und Neon.",
      points: [
        "Sanierung von BLD_1950_Cafe_01 (A Eckdiner, B Roadside, C Doppelrund), keine Aufstockung – Grundriss, Höhen, Eingänge, Lots und Schildtexte wie 1950.",
        "Mansarde rundum (Traufe 3,7 m, 0,6 m tief, bei C bündig mit dem Turm 0,4 m); bei B bildet sie die Attika.",
        "Kastenschilder „Corner Café“ / „Roadside Café“ / „Central Café“ vor der Mansarde, DINER als senkrechter Kasten (A, C) bzw. auf Pfosten (B); Kolonial-Laternen am Eingang.",
        "Innen Terrakotta-Fliesen, Holzdecke, orange Polster. Recherche: Diner-Umbauten der 60er/70er („Environmental Diner“).",
        "Prüfung 257/257 nach dem Unreal-Import (6 Meshes Nanite, 16 Materialien unter), inkl. Upgrade-Regeln gegen die 1950er-Fassung."
      ],
      images: [
        { src: "2026-11-05_cafe_1970.jpg", cap: "Eckdiner 1970 auf Augenhöhe" },
        { src: "2026-11-05_cafe_1970_eckdiner.jpg", cap: "Form A Eckdiner" },
        { src: "2026-11-05_cafe_1970_roadside.jpg", cap: "Form B Roadside (Mansarde als Attika)" },
        { src: "2026-11-05_cafe_1970_doppelrund.jpg", cap: "Form C Doppelrund mit Turm" },
        { src: "2026-11-05_cafe_1970_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Eingabe: 1950er-Blatt)" }
      ],
      compare: { before: "2026-11-05_cafe_1970_vergleich_1950.jpg", after: "2026-11-05_cafe_1970_eckdiner.jpg", cap: "Eckdiner 1950 → 1970" },
      commits: []
    },
    {
      id: "postoffice-1950", date: "2026-11-05", phase: "p5", title: "Autopilot: Postamt 1950",
      summary: "Zwölftes Gebäude des Autopiloten und letzter 1950er-Neubau, ein Unikat für das Zentrum. Leitidee „Das Amt mit der Uhr“ – ein heller Kalksteinblock mit Schalterhalle und vier Bürogeschossen, in der Mitte ein rotbrauner Granit-Risalit mit großer Uhr über dem Dach und „POST OFFICE“ über dem Vordach.",
      points: [
        "Eine Form (Unikat): 36 × 22 m, Schalterhalle 5,2 m und 3–5 Bürogeschosse, Standard 4 → ~23 m bis zum Risalit.",
        "Je 4-m-Achse ein hohes Hallenfenster, darüber Einzelfenster; dunkelgrauer Granitsockel, breite Granittreppe, Doppeltür mit Seitenlichtern.",
        "Rückseite: Postrampe mit zwei Rolltoren unter einem Stahlvordach, Treppen an beiden Enden, Zufahrt über die Ostseite.",
        "Abgeleitet von der Schule (Risalit mit Uhr, Fensterachsen); Revision r02 (Vorplatz-Zone lag unter den Vordach-Stützen). Prüfung 155/155 nach dem Unreal-Import (4 Meshes Nanite, 15 Materialien unter).",
        "Zur Prüfung: zusätzlicher Slot für den dunklen Sockel; Simse noch ohne Steinmuster."
      ],
      images: [
        { src: "2026-11-05_postoffice_1950.jpg", cap: "Postamt 1950 auf Augenhöhe" },
        { src: "2026-11-05_postoffice_1950_front.jpg", cap: "Frontansicht" },
        { src: "2026-11-05_postoffice_1950_rampe.jpg", cap: "Rückseite mit Postrampe" },
        { src: "2026-11-05_postoffice_1950_perspektive.jpg", cap: "Schrägansicht" },
        { src: "2026-11-05_postoffice_1950_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "school-1950", date: "2026-11-05", phase: "p5", title: "Autopilot: Schule 1950",
      summary: "Elftes Gebäude des Autopiloten, ein Typgebäude für die Bezirke. Leitidee „Die Schule mit der Uhr“ – ein langer Klinkerriegel mit Fensterbändern je Klassenraum, in der Mitte ein heller Kalkstein-Risalit mit runder Uhr über dem Dach und „PUBLIC SCHOOL“ über dem Vordach.",
      points: [
        "Drei Formen: A Riegel 40 × 14 m, B langer Riegel 56 × 14 m, C L-Form mit Flügel nach hinten um den Schulhof; 1–2 Obergeschosse, Höhe bis zur Uhr ~10 m.",
        "Je Klassenachse ein Band aus drei grünen Stahlfenstern mit Mittelpfosten und Kämpfer, durchlaufende Kalkstein-Brüstungsbänder, Betonsockel.",
        "Eingang: Doppeltür mit zwei Seitenlichtern, drei breite Stufen, flaches Betonvordach auf zwei grünen Stützen.",
        "Abgeleitet von der Feuerwache (Formvarianten, L-Form); Revision r02 (Uhr-Nabe, Rasen an den Stufen, Lot B 68 m für die Zufahrt). Prüfung 396/396 nach dem Unreal-Import (12 Meshes Nanite, 12 Materialien unter).",
        "Zur Prüfung: keine eigene Turnhalle; Risalit schmaler und niedriger als im Prompt (wie im Blatt)."
      ],
      images: [
        { src: "2026-11-05_school_1950.jpg", cap: "Schule 1950 auf Augenhöhe" },
        { src: "2026-11-05_school_1950_front.jpg", cap: "Frontansicht Form A" },
        { src: "2026-11-05_school_1950_lform.jpg", cap: "Form C mit Flügel (L-Form)" },
        { src: "2026-11-05_school_1950_spiel.jpg", cap: "Aus der Spielkamera" },
        { src: "2026-11-05_school_1950_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "gasstation-1950", date: "2026-11-05", phase: "p5", title: "Autopilot: Tankstelle 1950",
      summary: "Zehntes Gebäude des Autopiloten, ein Typgebäude für die Bezirke. Leitidee „Die weiße Kiste mit dem roten Streifen“ – ein eingeschossiger Kasten aus weißen Emailpaneelen mit Glasbüro, Werkstatttoren und einem flachen Vordach über der Zapfinsel; darüber die rote Schildscheibe GAS.",
      points: [
        "Zwei Formen: A mit zwei Hallen (20 × 10 m), B mit drei Hallen (26 × 10 m); Halle 4,4 m, Schildscheibe bis 9,3 m, optional ein Obergeschoss (Wohnung).",
        "Büro im Westen mit Aluminium-Schaufenstern und Glastür; Werkstatttore weiß mit Glasfeldern, darüber „MOTOR SERVICE“ rot auf der Blende.",
        "Vorplatz: Betonvordach 6 m tief auf zwei Stützen, runde Zapfinsel mit zwei rot-weißen Zapfsäulen mit Glaskugeln.",
        "Abgeleitet von der Feuerwache (Formvarianten, Tore, Büro); Revision r02, weil der Wegbeginn der Bürotür in r01 auf der Stufenkante lag. Prüfung 285/285 nach dem Unreal-Import (8 Meshes Nanite, 12 Materialien unter).",
        "Zur Prüfung: Vordach und Zapfsäulen gehören zum Gebäude; Email noch ohne Fugenraster (Mustertyp fehlt im gemeinsamen Oberflächen-Skript)."
      ],
      images: [
        { src: "2026-11-05_gasstation_1950.jpg", cap: "Tankstelle 1950 auf Augenhöhe" },
        { src: "2026-11-05_gasstation_1950_front.jpg", cap: "Frontansicht Form A (zwei Hallen)" },
        { src: "2026-11-05_gasstation_1950_drei_hallen.jpg", cap: "Form B mit drei Hallen" },
        { src: "2026-11-05_gasstation_1950_spiel.jpg", cap: "Aus der Spielkamera" },
        { src: "2026-11-05_gasstation_1950_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "apartmentblock-1950", date: "2026-11-04", phase: "p5", title: "Autopilot: Mehrfamilien-Block 1950",
      summary: "Neuntes Gebäude des Autopiloten und das erste Typgebäude für die Wohnbezirke. Leitidee „Der Block mit den weißen Balkonen“ – ein rotbrauner Klinkerblock mit gläsernem Treppenhaus in der Mitte, Reihen weißer Betonbalkone links und rechts und einem Steinvordach mit dem Hausnamen ELM COURT über der Haustür.",
      points: [
        "Eine Form 30 × 12 m, 3–7 Obergeschosse (4–8 Geschosse, Standard 5): Hauptdach 16 m, Antenne 21 m – Wohnmaßstab weit unter den Hochhäusern.",
        "Front: gläsernes Treppenhaus zwischen zwei Kalkstein-Lisenen, je Seite drei Achsen, in der mittleren Balkontür und Balkon mit schwarzem Stahlgeländer.",
        "Hochparterre in cremefarbenem Stein: Holz-Doppeltür mit Seitenlichtern, drei Stufen, dickes Steinvordach, eine Laterne; hinten Fenster und Hoftür.",
        "Dach: niedrige Attika, Treppenhaus-Aufbau mit Oberlicht und Fernsehantenne, zwei Schornsteine mit Töpfen.",
        "Abgeleitet vom Grand Hotel (gleicher Umriss-Generator, neue Fassade mit Balkonen, neues Erdgeschoss und Dach); Revision r02, weil die Balkontür-Schwelle in r01 unter der Platte lag. Prüfung 157/157 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien, 9 Farbpaletten unter).",
        "Zur Prüfung: Balkone nur in der mittleren Achse je Seite (wie das Blatt); Erdgeschoss Stein statt Klinker; Hoftür braun statt grün."
      ],
      images: [
        { src: "2026-11-04_apartmentblock_1950.jpg", cap: "Mehrfamilien-Block 1950 von Nordost" },
        { src: "2026-11-04_apartmentblock_1950_front.jpg", cap: "Frontansicht mit Treppenhaus und Balkonen" },
        { src: "2026-11-04_apartmentblock_1950_eingang.jpg", cap: "Eingang unter dem Vordach „ELM COURT“" },
        { src: "2026-11-04_apartmentblock_1950_spiel.jpg", cap: "Aus der Spielkamera" },
        { src: "2026-11-04_apartmentblock_1950_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "theater-1950", date: "2026-11-04", phase: "p5", title: "Autopilot: Kino 1950",
      summary: "Achtes Gebäude des Autopiloten, ein Unikat für das Zentrum. Leitidee „Das Kino mit dem Leuchtturm“ – eine cremeweiße Schaufront aus Kalkstein, dahinter der fensterlose Ziegelsaal, darüber ein roter Zikkurat-Pylon mit THEATER in gestapelten Buchstaben und vorn eine breite Marquise mit NOW SHOWING.",
      points: [
        "Eine Form 30 × 36 m mit gekerbten Ecken, 1–3 Obergeschosse (Standard 2): Hauptdach 13 m, Pylon-Spitze 24,6 m – ein Flachbau, der über das Schild wirkt.",
        "Front: Kalkstein mit Pfeilern und Foyerfenstern; Seiten und Rückseite: Ziegel mit flachen Pfeilern, ohne Fenster (Saal).",
        "Erdgeschoss in dunklem Granit: drei Glastüren unter der Marquise (16 × 3,5 m, weiße Schrifttafel, Glühbirnen), vier Schaukästen, zwei Laternen, Foyer mit Theke.",
        "Pylon 10 m über dem Dach mit vier Stufen, Glühbirnen an der Vorderkante und cremefarbenen Buchstaben auf beiden Seiten; hinten Bühnentor und Ausgangstür.",
        "Abgeleitet vom Grand Hotel (gleicher Umriss-Generator); Revision r02, weil der Pylon in r01 über das Gesims ragte. Prüfung 159/159 nach dem Unreal-Import (4 Meshes Nanite, 12 Materialien, 9 Farbpaletten unter).",
        "Zur Prüfung: Pylon auf dem Dach statt vor der Fassade; Lot 40 × 48 m; Ecken gekerbt statt gerundet; hinten nur eine Ausgangstür."
      ],
      images: [
        { src: "2026-11-04_theater_1950.jpg", cap: "Kino 1950 von Nordost" },
        { src: "2026-11-04_theater_1950_front.jpg", cap: "Frontansicht mit Pylon" },
        { src: "2026-11-04_theater_1950_eingang.jpg", cap: "Eingang unter der Marquise" },
        { src: "2026-11-04_theater_1950_spiel.jpg", cap: "Aus der Spielkamera" },
        { src: "2026-11-04_theater_1950_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "hotel-1950", date: "2026-11-04", phase: "p5", title: "Autopilot: Grand Hotel 1950",
      summary: "Siebtes Gebäude des Autopiloten, ein Unikat für das Zentrum. Leitidee „Das Hotel mit dem Dachschild“ – ein rotbrauner Ziegelturm mit hellen Kalksteinpfeilern, einer Bronze-Marquise voller Glühbirnen über dem Portal und den Worten GRAND HOTEL in großen roten Buchstaben auf einem Stahlgerüst über der obersten Terrasse.",
      points: [
        "Eine Form 34 × 18 m mit gekerbten Ecken, 7–11 Zimmergeschosse (Standard 9): Hauptdach 37,5 m, Dachschild-Oberkante 49 m – unter der City Hall.",
        "Fassade: Klinker mit Kalksteinpfeilern auf jeder Achse, ein Bronzefenster je Zimmer, mittiger Glasstreifen fürs Treppenhaus, zwei Rücksprünge oben.",
        "Erdgeschoss ganz in dunklem Granit: Portal mit drei Glastüren unter der Marquise (12 × 3 m, Glühbirnen, Schrift), zwei Laternen, vier Restaurantfenster mit Tischen dahinter.",
        "Dachschild aus 3,2 m hohen roten Buchstaben auf einem Gittergerüst mit Streben, dahinter ein Wassertank; hinten zwei Ladetore (Küche, Wäscherei) und eine Dienstür.",
        "Abgeleitet vom Zeitungshaus (gleicher Umriss-Generator, neue Fassade, neues Erdgeschoss und Dach); Prüfung 162/162 nach dem Unreal-Import (4 Meshes Nanite, 10 Materialien, 9 Farbpaletten unter).",
        "Zur Prüfung: Marquise-Schrift rot statt gold wie auf dem Blatt; zwei Rücksprünge statt einem; Lot 44 × 28 m."
      ],
      images: [
        { src: "2026-11-04_hotel_1950.jpg", cap: "Grand Hotel 1950 von Nordost" },
        { src: "2026-11-04_hotel_1950_front.jpg", cap: "Frontansicht mit Dachschild" },
        { src: "2026-11-04_hotel_1950_eingang.jpg", cap: "Portal unter der Marquise mit Glühbirnen" },
        { src: "2026-11-04_hotel_1950_spiel.jpg", cap: "Aus der Spielkamera" },
        { src: "2026-11-04_hotel_1950_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "fire-1950", date: "2026-11-04", phase: "p5", title: "Autopilot: Feuerwache 1950",
      summary: "Sechstes Gebäude des Autopiloten, wieder für die Spieler-Bezirke. Leitidee „Die Wache mit dem Turm“ – ein niedriger, breiter Klinkerbau mit roten Toren, hellem Schriftzug und einem schlanken Schlauchturm an der Ecke, der über die Nachbarschaft schaut.",
      points: [
        "Drei Formen: A 24 × 18 m mit drei Toren, B 32 × 18 m mit vier Toren, C L-Form mit Flügel hinten und zwei Toren zum Übungshof; 1–2 Obergeschosse für die Mannschaft (Standard 1).",
        "Fahrzeughalle 5,4 m hoch: rote Sektionaltore 3,6 × 4,0 m mit Glasstreifen in Kalksteinrahmen, darüber helle Relief-Buchstaben FIRE STATION, rechts die Bürotür mit Vordach.",
        "Schlauchturm 4 × 4 m an der Westecke, 17,85 m hoch, je Seite drei hohe Lamellen unter einer auskragenden Betonplatte – das Wahrzeichen der Wache.",
        "Vor den Toren bleibt ein 10 m tiefes Betonvorfeld bis zur Straße frei (eigene Prüfung je Tor).",
        "Abgeleitet von der Polizeiwache; nach der ersten Prüfung eine Korrektur-Revision (Bürotür saß 12 cm zu tief, Übungshof-Zone). Prüfung 407/407 nach dem Unreal-Import (12 Meshes Nanite, 11 Materialien, 6 Farbpaletten unter).",
        "Zur Prüfung: Tore 4,0 statt 4,2 m hoch, damit die Schrift unter das Band passt; Turm bündig mit der Front (Blatt: leicht vorgezogen)."
      ],
      images: [
        { src: "2026-11-04_fire_1950.jpg", cap: "Feuerwache 1950: Formen A, B, C aus der Spielkamera" },
        { src: "2026-11-04_fire_1950_ecke.jpg", cap: "Form C von Nordost mit Schlauchturm" },
        { src: "2026-11-04_fire_1950_tore.jpg", cap: "Drei rote Tore, Schriftzug und Bürotür" },
        { src: "2026-11-04_fire_1950_rueckseite.jpg", cap: "Rückseite mit Dienstür" },
        { src: "2026-11-04_fire_1950_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "police-1950", date: "2026-11-04", phase: "p5", title: "Autopilot: Polizeiwache 1950",
      summary: "Fünftes Gebäude des Autopiloten und das erste für die Spieler-Bezirke (kein Unikat). Leitidee „Die Wache an der Ecke“ – ein freundlich-strenger Klinkerbau mit hellem Kalksteinsockel, blauen Laternen am Eingang, Rolltoren für die Streifenwagen und einem Funkmast auf dem Dach.",
      points: [
        "Drei Formen wie beim Krankenhaus: A Riegel 28 × 14 m mit 7 Achsen, B L-Form mit Garagenflügel zur Ostzufahrt, C T-Form 32 × 14 m mit Mittelflügel hinten; 1–3 Obergeschosse (Standard 2).",
        "Erdgeschoss Kalkstein, darüber roter Klinker, Kalksteinband und auskragendes Gesims; grüne Stahlfenster mit zwei Flügeln, eines je Achse.",
        "Eingang in der Mitte: Kalksteinrahmen bis zum Band mit Relief-Buchstaben POLICE, schmales Vordach mit Zugstangen, drei Stufen zwischen Steinwangen, darauf zwei Laternen mit blauen Glaskugeln.",
        "Rückseite: zwei Rolltore 3,2 m für Streifenwagen, Dienstür, kleine hohe Zellenfenster mit Gittern; auf dem Dach Treppenhaus und dreibeiniger Gitter-Funkmast (Spitze 20 m).",
        "Ableitung vom Krankenhaus-Generator (Umriss → Wände/Fenster je Achse); Prüfung 393/393 nach dem Unreal-Import (12 Meshes Nanite, 12 Materialien, 6 Farbpaletten unter).",
        "Zur Prüfung: Tore von vorn gesehen rechts (Zufahrt Ost), auf dem Blatt im Westen; Seiten mit 4 Fenstern je Geschoss statt einem."
      ],
      images: [
        { src: "2026-11-04_police_1950.jpg", cap: "Polizeiwache 1950: Formen A, B, C aus der Spielkamera" },
        { src: "2026-11-04_police_1950_ecke.jpg", cap: "Form A von Nordost mit Funkmast und Treppenhaus" },
        { src: "2026-11-04_police_1950_eingang.jpg", cap: "Eingang mit POLICE-Rahmen und blauen Laternen" },
        { src: "2026-11-04_police_1950_rueckseite.jpg", cap: "Rückseite: Rolltore, Zellenfenster, Dienstür" },
        { src: "2026-11-04_police_1950_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "plaza-1950", date: "2026-11-04", phase: "p5", title: "Autopilot: Stadtplatz 1950 „Island Plaza“",
      summary: "Viertes Gebäude des Autopiloten: der Stadtplatz als Unikat für einen ganzen Innenblock des Zentrums. Leitidee „Bühne der Stadt“ – ein erhöhter Granitplatz mit Ring- und Achsbändern, Rasenparterres, Baumreihe in Trögen und in der Mitte ein Brunnen mit Gedenksäule und goldener Flamme.",
      points: [
        "76 × 76 m = genau ein Innenblock, 0,45 m über dem Gehweg; Treppen in jeder Seitenmitte (zur Straße 16 m) und vier diagonale Ecktreppen, dazwischen Sitzmauern.",
        "Heller Granit mit roten Bändern: Ringe um den Brunnen, Doppellinien auf den Achsen, Rahmenband und Diagonalen zu den Ecken – aus der Spielkamera ein klares Muster.",
        "Brunnen Ø 20 m mit 24 Wasserstrahlen, Insel mit Sockel (Inschrift ISLAND PLAZA), kannelierter Säule, Bronzekapitell und goldener Flamme – 18,6 m, einziges hohes Element.",
        "Vier Rasenfelder mit runden Blumenbeeten, 16 Hainbuchen in Granittrögen (dieselben Megascans-Bäume wie im Stadtpark), 24 Bänke, 16 Leuchten, 8 Papierkörbe, grüner Zeitungskiosk.",
        "Aufbau wie der Stadtpark: ein Bodenmesh + Requisiten als Instanzen; Prüfung 199/199 nach dem Unreal-Import (6 Meshes Nanite, 16 Materialien, 9 Farbpaletten unter).",
        "Zur Prüfung: nur eine Form, keine Rampe, Name ISLAND PLAZA erfunden, Kiosk vorn an der Straße statt hinten wie auf dem Blatt. Laufzeit: Kandidat für den Block nächst der Mitte (bisher immer Park)."
      ],
      images: [
        { src: "2026-11-04_plaza_1950.jpg", cap: "Stadtplatz 1950, Blender-Vorschau von Nordost" },
        { src: "2026-11-04_plaza_1950_draufsicht.jpg", cap: "Draufsicht: Ringe, Achsen, Rasenparterres, Baumtröge" },
        { src: "2026-11-04_plaza_1950_ansicht.jpg", cap: "Ansicht von der Straße mit Säule, Kiosk und Bäumen" },
        { src: "2026-11-04_plaza_1950_spielkamera.jpg", cap: "Aus der Spielkamera" },
        { src: "2026-11-04_plaza_1950_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "newspaper-1950", date: "2026-11-04", phase: "p5", title: "Autopilot: Zeitungshaus 1950 „Daily News“",
      summary: "Drittes Gebäude des Autopiloten: das Zeitungshaus als Unikat fürs Zentrum. Leitidee „Leuchtturm der Nachrichten“ – ein schlanker Art-déco-Turm aus Kalkstein mit senkrechten Fensterbändern, drei Rücksprüngen, grüner Kupferpyramide und goldener Weltkugel.",
      points: [
        "Turm 26 × 18 m mit eingekerbten Ecken auf dunklem Granitsockel; vortretende Pfeiler und dunkle Brüstungen bilden durchlaufende senkrechte Bänder, die Mittelachse vorn ist ein dunkler Glasstreifen.",
        "Erdgeschoss: Bronzeportal mit drei Türen, Schriftband DAILY NEWS und zwei Wandlaternen; daneben große Druckhallen-Fenster mit Rotationsmaschinen dahinter. Hinten zwei Ladedocks unter einem Stahlvordach.",
        "Krone: drei Rücksprünge, Kupferpyramide, goldene Weltkugel Ø 5,2 m mit Rippen und geneigtem Schriftring – Standard 51,6 m, immer unter der City Hall.",
        "6–9 Regelgeschosse à 3,5 m, 4 Farbvarianten, Lot 36 × 28 m mit LKW-Zufahrt zu den Docks.",
        "Prüfung 154/154 nach dem Unreal-Import: 4 Meshes mit Nanite, 12 Materialien, 9 Farbpaletten unter Die Validierung fand in r01 zwei Fehler (Vordach-Stangen zu hoch, Kronenhöhe ohne Rippen) → Revision r02.",
        "Zur Prüfung: nur eine Formvariante, 51,6 statt 99,5 m wie in der Stilvorlage, Schild DAILY NEWS (Gattungsname), Docks Ost / Dienstür West wie Blatt."
      ],
      images: [
        { src: "2026-11-04_newspaper_1950.jpg", cap: "Zeitungshaus 1950, Blender-Vorschau von Nordost" },
        { src: "2026-11-04_newspaper_1950_eingang.jpg", cap: "Bronzeportal mit Schriftband auf Augenhöhe" },
        { src: "2026-11-04_newspaper_1950_spielkamera.jpg", cap: "Aus der Spielkamera auf dem 36 × 28-m-Lot" },
        { src: "2026-11-04_newspaper_1950_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex, Stilvorlage des Users)" }
      ],
      commits: []
    },
    {
      id: "bank-1950", date: "2026-11-04", phase: "p5", title: "Autopilot: Großbank 1950 „Island Trust Bank“",
      summary: "Zweites Gebäude des Autopiloten: eine Großbank als Unikat fürs Zentrum. Leitidee „Tresor mit Krone“ – unten eine Schalterhalle mit Tempelfront, darüber ein Kalksteinschaft, oben zweimal gestaffelt und von einer goldenen Stufenpyramide gekrönt.",
      points: [
        "Kalksteinschaft 32 × 24 m auf poliertem rosagrauem Granit, Lochfenster mit Bronzerahmen je Achse.",
        "Schalterhalle 9 m hoch: in der Front eine 3 m tiefe Loggia mit vier Kolossalsäulen zwischen Wandpfeilern, Stufen, drei Bronzetüren mit Gittern, Bronzelettern ISLAND TRUST BANK (erfunden).",
        "Krone: zwei Rücksprünge (2 m und 5 m), vergoldete Stufenpyramide und Mast mit Leuchtfeuer – Standard 54,5 m, das zweithöchste Gebäude der 1950er, immer unter der City Hall.",
        "5–8 Bürogeschosse à 3,6 m, 4 Farbvarianten, Lot 40 × 36 m; hinten Dienstür und Tor für den Geldtransporter.",
        "Prüfung 135/135, nach dem Unreal-Import 151/151: 4 Meshes mit Nanite, 11 Materialien, 9 Farbpaletten unter Rauheit/Oberflächen nach Play-Ende gespeichert.",
        "Zur Prüfung: nur eine Formvariante, je Loggia-Seite ein Hallenfenster (wie Blatt), Leuchtfeuer bernstein statt rot."
      ],
      images: [
        { src: "2026-11-04_bank_1950.jpg", cap: "Großbank 1950, Blender-Vorschau von Nordost" },
        { src: "2026-11-04_bank_1950_eingang.jpg", cap: "Loggia mit Kolossalsäulen auf Augenhöhe" },
        { src: "2026-11-04_bank_1950_spielkamera.jpg", cap: "Aus der Spielkamera auf dem 40 × 36-m-Lot" },
        { src: "2026-11-04_bank_1950_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "cityhall-1950", date: "2026-11-04", phase: "p5", title: "Autopilot: City Hall 1950 mit Uhrturm",
      summary: "Erstes Gebäude des Gebäude-Autopiloten, ohne Zwischenfragen: Recherche (Rathäuser der 1930er–50er), Plan, Referenzblatt über ChatGPT, Bau in Blender, Prüfung. Das Rathaus ist ein Unikat und das höchste Gebäude der 1950er-Stadt.",
      points: [
        "Kalksteinblock 40 × 24 m auf Granitsockel, Säulenportikus mit Schriftzug CITY HALL, drei Bronzetüren, Freitreppe über die ganze Breite.",
        "Uhrturm aus der Dachmitte: Schaft 22 m, Uhrgeschoss mit vier Zifferblättern, achteckige Laterne, grüner Kupferhelm, Fahnenmast – Laternendach 65 m, Mast 71,5 m (Hochhäuser 1950: höchstens 51 m).",
        "3–5 Regelgeschosse à 4 m, 4 Farbvarianten, Lot 48 × 40 m mit Vorplatz; hinten Dienstür und Garagentor mit Zufahrt.",
        "Revision r02: In r01 fehlten alle Türen (lagen genau auf Achsgrenzen) – die Prüfung fand es, neu gebaut. Neue Lehre #34 im Gebäude-Skill.",
        "Prüfung 135/135, nach dem Unreal-Import 151/151: 4 Meshes mit Nanite, 12 Materialien mit Rauheit/Metall, 9 Farbpaletten unter Die Laufzeit (Zentrum) kennt das Rathaus noch nicht.",
        "Zur Prüfung: nur eine Formvariante (Unikat), Regelgeschoss 4 m, Turm im Dachmodul, Turm höher als auf dem Blatt (folgt dem Prompt)."
      ],
      images: [
        { src: "2026-11-04_cityhall_1950.jpg", cap: "City Hall 1950, Blender-Vorschau von Nordost" },
        { src: "2026-11-04_cityhall_1950_spielkamera.jpg", cap: "Aus der Spielkamera auf dem 48 × 40-m-Lot" },
        { src: "2026-11-04_cityhall_1950_blatt.jpg", cap: "Referenzblatt (ChatGPT über Codex)" }
      ],
      commits: []
    },
    {
      id: "passanten-abstand", date: "2026-11-04", phase: "p5", title: "Passanten halten Abstand",
      summary: "Nach drei Testrunden des Users laufen und stehen die Passanten nicht mehr ineinander, auch im Stresstest mit 3000 Figuren.",
      points: [
        "Etwa 0,5 m zwischen den Körpern; Schnellere suchen eine Spur, die gegen alle frei ist, und überholen – sonst bleiben sie weich bremsend dahinter.",
        "Ausweichen wie echte Menschen: zur Seite drehen, schräg gehen, zurückdrehen (vorher glitten sie seitlich).",
        "Zebrastreifen: 10 Warteplätze je Seite, so breit wie der Streifen und nur auf dem Gehweg. Sind sie voll, ändern die Leute ihr Ziel statt auf der Fahrbahn zu warten.",
        "Hinüber geht jeder in der rechten Hälfte – die beiden Richtungen laufen aneinander vorbei statt frontal in einen Stau.",
        "Kein Zittern mehr: Wartende werden nicht geschoben, Tempo und Stehen/Gehen wechseln mit Übergang."
      ],
      images: [],
      commits: []
    },
    {
      id: "hochhaus-1990-04", date: "2026-11-04", phase: "p5", title: "Vierte 1990er-Fassung: City Tower mit Glaserker und Eckloggien",
      summary: "Noch eine Sanierungs-Variante für alle fünf 1970er-Hochhäuser, nach dem Referenzblatt des Users: glatte blaue Spiegelglasfassade, vorn ein gebogener hellblauer Glaserker über die ganze Höhe, oben zwei Eckloggien. Gebaut, geprüft, am 04.11. vom User freigegeben und in Unreal importiert.",
      points: [
        "Erker A/B 12 m, C 9 m breit, bis 1,50 m vor der alten Wand – Ausnahme von der 0,30-m-Regel, vom User angenommen. Seiten und Rückseite bleiben bei 0,30 m.",
        "Erdgeschoss: vier Granitsäulen auf einem flachen Podest unter dem gebogenen Vordach, Schriftzug CITY TOWER auf den Bogen gebogen, Lobby und zwei Läden dahinter.",
        "Oberstes Geschoss mit Eckloggien (Glasbrüstung, verglaste Rückwände, Deckenlicht) steckt im Dachmodul (Entscheidung des Users: „Loggias in roof“). Höhe Standard 55 m wie auf dem Blatt.",
        "Revision r02: Das Podest hatte unsichtbare Splitterflächen (Bogenpunkte geklemmt statt geschnitten) – neu gebaut, alte Lieferung aufbewahrt. Neue Lehre #33 im Gebäude-Skill.",
        "Prüfung 399/399, Schriftzug nur 1.040 Dreiecke.",
        "Unreal: 12 Meshes mit Nanite, 10 Materialien, 9 Farbpaletten unter Dreiecke, Maße, Materialplätze und Kollision wie aus Blender exportiert; Prüfung danach 445/445. Laufzeit (Skyline, Baustelle) kennt die Fassung noch nicht."
      ],
      images: [
        { src: "2026-11-04_hochhaus_1990_04_familie.jpg", cap: "Formen A, B, C auf dem gemeinsamen 32 × 28-m-Lot (Blender-Vorschau)" },
        { src: "2026-11-04_hochhaus_1990_04_eingang.jpg", cap: "Augenhöhe: Granitsäulen unter dem gebogenen Vordach" },
        { src: "2026-11-04_hochhaus_1990_04_loggia.jpg", cap: "Eckloggia im obersten Geschoss" }
      ],
      commits: []
    },
    {
      id: "admin-menue-reiter", date: "2026-11-04", phase: "p4", title: "Admin-Menü aufgeräumt: Reiter, ausklappbare Karten, Scrollen",
      summary: "Freigegeben. Das Menü lief mit den Gras-Reglern unten aus dem Bild. Jetzt drei Reiter (Build, World, Tools), jeder Bereich eine Karte mit Kopfzeile zum Auf- und Zuklappen, und jede Seite scrollt. Reiter und offene/geschlossene Karten bleiben gemerkt.",
      points: [
        "Muster aus Engine-Debug-Menüs (ImGui-Collapsing-Header, Unity DebugSheet): oben Bereiche, darin einklappbare Gruppen, feste Höhe mit Scrollbalken.",
        "Build: Lots, Roads, Parks · World: Island, Clouds, Grass – outside, Grass – parks · Tools: Overlays, Renovation test, Walk & pedestrians.",
        "Vorhandene Knöpfe wurden nur verschoben – alle Funktionen bleiben gleich; Beschriftungen auf Englisch.",
        "Gras-Zeile entzerrt: Name zwischen < > allein, Upload/Reset in eigener Zeile.",
        "Vom User im Play freigegeben (04.11.)."
      ],
      images: [],
      commits: []
    },
    {
      id: "hochhaus-1990-02", date: "2026-11-04", phase: "p5", title: "Weitere 1990er-Fassung: City Tower im Granit-Bilderrahmen",
      summary: "Noch eine Sanierungs-Variante für alle fünf 1970er-Hochhäuser, nach dem Referenzblatt des Users: ein rotbrauner Granitrahmen fasst die Spiegelglas-Fassade ein wie ein Bild. Gebaut, geprüft, vom User freigegeben und in Unreal importiert.",
      points: [
        "Vorn breite Granitpfeiler (3 m, schlanke Form C 2,75 m), oben ein 3 m hoher Rahmen – alles höchstens 0,30 m vor der alten Wand, der Grundriss bleibt.",
        "Spiegelglas-Vorhangfassade mit großen Scheiben (~2,5 m) im gleichen Raster auf allen Seiten, Alu-Pfosten, eine Reihe je Geschoss.",
        "Erdgeschoss: Lobbyglas 1,5 m zurückgesetzt unter einem Alu-Soffit mit Downlights, Edelstahltür, Schriftzug CITY TOWER in Serifenschrift auf dem Granitsturz, Läden und Lobby dahinter.",
        "Dach: Technik hinter dem Granitrahmen verborgen. Höhe Standard 57,1 m (Blatt: ≈ 57 m), Spanne 9–22 Regelgeschosse.",
        "Prüfung 347/347 (u. a. Maßkasten im Spiel, Regeln gegen alle fünf 1970er-Specs). Schriftzug mit 19.000 Dreiecken recht schwer – Thema für eine spätere Revision.",
        "Unreal: 12 Meshes mit Nanite, 9 Materialien, 9 Farbpaletten unter Dreiecke, Maße, Materialplätze und Kollision wie aus Blender exportiert; Prüfung danach 393/393. Laufzeit (Skyline, Baustelle) kennt die Fassung noch nicht."
      ],
      images: [
        { src: "2026-11-04_hochhaus_1990_02_familie.jpg", cap: "Formen A, B, C auf dem gemeinsamen 32 × 28-m-Lot (Blender-Vorschau)" },
        { src: "2026-11-04_hochhaus_1990_02_eingang.jpg", cap: "Augenhöhe: zurückgesetzte Lobby unter dem Soffit, Schriftzug auf dem Granitsturz" }
      ],
      commits: []
    },
    {
      id: "hochhaus-1990-03", date: "2026-11-04", phase: "p5", title: "Zweite 1990er-Fassung: City Tower mit runden Ecken",
      summary: "Alternative zur Granit-Fassung: dieselbe Sanierung für alle fünf 1970er-Hochhäuser, aber mit gerundeten Ecken und durchlaufenden Glasbändern – nach dem Referenzblatt des Users. Gebaut, geprüft, am 04.11. vom User freigegeben und in Unreal importiert; der Einbau in Skyline und Baustelle steht noch aus.",
      points: [
        "Alle vier Ecken mit 4 m Radius (schlanke Form C: 3,5 m), die Rundung liegt innerhalb des alten Grundrisses – das Haus wird nicht breiter.",
        "Fassade in waagrechten Bändern rundum: hellblaues Spiegelglas, tiefblaues Brüstungsglas, dünne weiße Alu-Linien; an den Ecken gebogene Scheiben.",
        "Erdgeschoss: zurückgesetzte Ladenfront mit Innenraum, weiße Stützen, weißes Kragdach mit Schriftzug CITY TOWER, das um die vorderen Ecken schwingt, Eingang in einem signalroten Rahmen.",
        "Dach: flache gerundete tiefblaue Attika, Technik dahinter verborgen. Höhe Standard 55,9 m (Blatt: ≈ 56 m), Spanne 9–22 Regelgeschosse.",
        "Prüfung 371/371, u. a. neue Prüfung „runde Ecken innerhalb des alten Grundrisses“ und Kragdach im Maßkasten des Spiels (2,26 m ≤ 2,6 m).",
        "Unreal-Import: 12 Meshes mit Nanite unter, 9 Materialien (ISM + Nanite), Farbpaletten Grün, Silber, Türkis; Prüfung danach 417/417."
      ],
      images: [
        { src: "2026-11-04_hochhaus_1990_03_familie.jpg", cap: "Formen A, B, C auf dem gemeinsamen 32 × 28-m-Lot (Blender-Vorschau)" },
        { src: "2026-11-04_hochhaus_1990_03_eingang.jpg", cap: "Augenhöhe: Kragdach mit Schriftzug, roter Eingangsrahmen, Laden dahinter" }
      ],
      commits: []
    },
    {
      id: "gras-bibliothek", date: "2026-11-04", phase: "p4", title: "Gras großflächig umstellen: Bibliothek, Upload, Regler",
      summary: "Neuer Abschnitt im Admin-Menü: Gras außen (Inselfläche + Rasen der Baufelder) und in den Parks getrennt einstellen. 10 Texturen zur Auswahl, eigene Bilder hochladen, Regler für Texturanteil, Größe, Helligkeit, Grünton und Sättigung. Einstellungen bleiben gespeichert.",
      points: [
        "Bibliothek: 5 Megascans-Gräser des Geländes + 5 eigene, nahtlos kachelnde Texturen (feiner Rasen, Klee, Blumenwiese, Moos, trockenes Gras) aus einem Python-Skript.",
        "Material M_IslandTerrain v7: Parameter für Textur, Anteil, Größe, Helligkeit, Grünton (warm ↔ kühl) und Sättigung – Standardwerte = bisheriger Look.",
        "C++-Subsystem gibt jeder Gras-Fläche eine eigene Material-Instanz, Parks und Außenbereich getrennt; neue Parks bekommen die Einstellung automatisch.",
        "Upload… öffnet eine Dateiauswahl (nur im Editor), das Bild wird nach kopiert und mit Mip-Stufen geladen.",
        "Offen: Play-Test und optische Abnahme durch den User."
      ],
      images: [],
      commits: []
    },
    {
      id: "hochhaus-1990", date: "2026-11-04", phase: "p5", title: "City Tower der 1990er: Granit, Spiegelglas, Glaspyramide",
      summary: "Dritte Epoche des Hochhauses: eine postmoderne Sanierung, die auf alle fünf 1970er-Fassungen passt. Gleiche Grundfläche und Geschosshöhen, +2 bis +4 Geschosse, neue gestufte Krone. Am 04.11. vom User freigegeben und in Unreal importiert.",
      points: [
        "Fassade: rotbraune Granit-Eckpfeiler in zwei Stufen, dazwischen bündiges blaugrünes Spiegelglas in Alu-Profilen (eine Scheibe je ~1,3 m), höchstens 0,30 m vor der alten Wand.",
        "Neues Modul B_BandFloor (Entscheidung des Users): jedes 4. Regelgeschoss hat ein Granitband statt Brüstungsglas – nie das oberste.",
        "Erdgeschoss: Glaslobby mit Innenraum, Säulenportal aus Granit, Rundbogen mit Oberlicht und Messingtüren, Schriftzug CITY TOWER in Messing (Georgia Bold).",
        "Krone: Attika, zwei zurückgesetzte Glasstufen mit Granitrahmen, Glaspyramide bis 9 m, Antenne bis 13 m.",
        "Höhen Standard: A und B 14 Regelgeschosse (63 m bis zur Spitze), C 17 (73,5 m); Spanne 9–22.",
        "Prüfung 477/477 (u. a. Maßkasten im Spiel, Regeln gegen alle fünf 1970er-Specs, Unreal-Import). Laufzeit (Skyline, Baustelle) kennt die 1990er-Stufe noch nicht.",
        "Unreal: 15 Meshes mit Nanite, 10 Materialien, 9 Farbpaletten unter Dreiecke, Maße, Materialplätze und Kollision wie aus Blender exportiert."
      ],
      images: [
        { src: "2026-11-04_hochhaus_1990_familie.jpg", cap: "Formen A, B, C auf dem gemeinsamen 32 × 28-m-Lot (Blender-Vorschau)" },
        { src: "2026-11-04_hochhaus_1990_portal.jpg", cap: "Augenhöhe: Säulenportal mit Oberlicht und Messing-Schriftzug" }
      ],
      commits: []
    },
    {
      id: "rock-sitzen", date: "2026-11-04", phase: "p5", title: "Der Rock bleibt beim Sitzen über den Knien",
      summary: "Bisher hing der Rock der Damen auf der Bank senkrecht nach unten und die Oberschenkel kamen vorne heraus. Jetzt hat jede Dame eine zweite Form des Rocks für das Sitzen, die beim Hinsetzen weich eingeblendet wird.",
      points: [
        "Warum eine eigene Form: Der Rock hängt beim Gehen am Becken, damit er nicht mit jedem Schritt mit den Beinen schwingt. Für das Sitzen passt das nicht.",
        "Die Sitz-Form wird in Blender berechnet: vom Gürtel auf den Schoß, an den Oberschenkeln entlang bis vor die Knie, dann gerade herunter; hinten liegt er auf der Sitzfläche.",
        "Erster Versuch (Rock dreht mit den Oberschenkeln) klappte den weiten Rock vor die Brust hoch – verworfen.",
        "Im Spiel: beim Hinsetzen eingeblendet, beim Sitzen voll, beim Aufstehen wieder weg. Gilt für alle drei Damen-Figuren.",
        "Stolperstein: Der Import ließ die Form still weg (Importer-Vorgabe aus) – jetzt im Import-Skript eingeschaltet."
      ],
      images: [
        { src: "2026-11-04_rock_sitzen.jpg", cap: "Vorschau aus Blender: Sitz-Form des Rocks auf einer angedeuteten Bank" }
      ],
      commits: []
    },
    {
      id: "passanten-messung", date: "2026-11-04", phase: "p5", title: "Was kosten die Passanten? – gemessen und optimiert",
      summary: "Automatische Messung im Spiel: Passanten aus, 300 und 3000 (Stresstest), Kamera schräg über der belebtesten Stelle. Ergebnis: 300 Passanten sind billig, bei 3000 wird der Hauptthread zum Engpass.",
      points: [
        "Ohne Passanten: Spiel-Thread 9,4 ms, Render-Thread 9,7 ms, Grafikkarte 8,6 ms je Bild.",
        "300 Passanten (213 in der Nähe, 61 im Bild): Spiel-Thread +2,3 ms, Render-Thread und Grafikkarte praktisch unverändert.",
        "3000 Passanten (2220 in der Nähe, 470 im Bild): Spiel-Thread 30,5 ms (+21), Render-Thread +5, Grafikkarte +2,4 → etwa 30 Bilder/s, der Spiel-Thread bremst.",
        "Mehr verschiedene Figuren-Modelle kosten nur Speicher (je ~5–8 MB), keine Rechenzeit je Bild – teuer ist die Zahl der Figuren in der Nähe.",
        "Optimierung danach: Figuren außerhalb des Blickfelds oder hinter Häusern pausieren (keine Animation, nur jedes 6. Bild nachgezogen).",
        "Ergebnis ohne Editor-Drosselung: 3000 Passanten Spiel-Thread 34,2 → 23,1 ms (29 → 42 Bilder/s), aktiv nur noch 436 statt 2230 Figuren; 300 Passanten kosten jetzt praktisch nichts mehr.",
        "Hebel für später: ferne Figuren als Vertex-Animation, die Wegelogik (Crowd-Tick 3–5 ms bei 3000) zeitlich verteilen."
      ],
      images: [],
      commits: []
    },
    {
      id: "titelbild", date: "2026-11-04", phase: "p5", title: "Startbildschirm wie im alten Spiel",
      summary: "Jedes Spiel beginnt jetzt mit einem Titelbild: Skyline im Abendlicht, goldenes Logo, Schriftzug Shady Tycoon und ein goldener START-Knopf. Start erzeugt eine neue Insel.",
      points: [
        "Bilder aus dem alten Spiel (Hintergrund, Logo, Schriftzug, Knopf) zugeschnitten und als UI-Texturen importiert.",
        "Eigener C++-Bildschirm über allem anderen; auf 1920 × 1080 ausgelegt und mit dem Fenster skaliert.",
        "START (oder Enter) blendet in einer halben Sekunde aus und startet wie der Admin-Knopf „Neue Insel“ eine Insel mit Zufalls-Seed.",
        "Bisher entstand die Insel sofort beim Spielstart – jetzt erst nach dem Klick."
      ],
      images: [
        { src: "2026-11-04_titelbild.jpg", cap: "Startbildschirm im Play-Fenster des Editors" }
      ],
      commits: []
    },
    {
      id: "ranger310", date: "2026-11-04", phase: "p5", title: "Drittes 1950er-Auto: Pickup Rosenwald Ranger 310",
      summary: "Der erste Nutzwagen in der Stadt: ein erfundener Pickup von 1955 aus der Rosenwald-Familie, nach dem Designblatt mit Schild-Emblem, Schriftzügen und Holzaufsatz auf der Pritsche.",
      points: [
        "Eigenes Skript – anders als bei den Limousinen aus Einzelteilen: runde Kotflügel vorn, gewölbte Haube, Kabine, Stepside-Pritsche mit außen liegenden Kotflügeln und Trittbrettern.",
        "Maße aus dem Blatt: 5,2 m lang, 3,10 m Radstand, knapp 2 m hoch; große Weißwandräder mit Chromkappe und rotem R.",
        "Details: Grill mit drei schweren Chromstäben und rotem R-Schild, Glas-Scheinwerfer, „Rosenwald“ auf Haube und Heckklappe, „Ranger 310“ auf den Kotflügeln, Kennzeichen RW-310, runde Rückleuchten.",
        "Holz als neues Material: Ladeboden aus Bohlen, Rungen und Latten rundherum.",
        "Sechs Farbpaare aus dem Blatt (Waldgrün, Rubinrot, Stahlblau, Sandbeige, Taubenblau, Schwarz – je mit Creme oder Hellgrau); fährt gemischt mit den beiden Limousinen."
      ],
      images: [
        { src: "2026-11-04_ranger310_front.jpg", cap: "Ranger 310 – Front mit R-Schild und Glas-Scheinwerfern (Blender-Vorschau)" },
        { src: "2026-11-04_ranger310_heck.jpg", cap: "Pritsche mit Holzaufsatz, Heckklappe mit Schriftzug, RW-310" }
      ],
      commits: [], tags: ["Verkehr", "Technik"]
    },
    {
      id: "passanten-vielfalt", date: "2026-11-04", phase: "p5", title: "Passanten-Vielfalt: Farben, Stoffe, Größen",
      summary: "Aus zwei Figuren wird eine bunte 50er-Menge: jede Person bekommt eigene Farben und Stoffmuster aus Paletten der Zeit, eine eigene Körpergröße – und es gibt jetzt sechs Grundfiguren.",
      points: [
        "Farben je Person ohne zusätzliche Texturen: Anzug, Krawatte, Hut, Schuhe, Haare, Kleid, Gürtel und Hautton kommen aus Werten am Mesh (wie der Lack der Autos).",
        "Kleider mit Mustern: Original-Tupfen, uni, Streifen, Vichy-Karo, kleine Tupfen – gezeichnet im Material über eigene Stoff-Koordinaten.",
        "Anzüge glatt oder als Tweed; das weiße Hemd bleibt weiß, die Krawatte bekommt eine eigene Farbe.",
        "Neue Formen: Herr ohne Hut, älterer kräftiger Herr mit anderem Hut, Dame mit Pferdeschwanz, ältere Dame mit anderem Bob.",
        "Jede Person ist ±5 % größer oder kleiner und etwas breiter oder schmaler; die Schrittfrequenz passt sich an.",
        "Davor: Frauen gehen aufrechter (Rücken gestreckt, Kopf gerade) – live einstellbar.",
        "Danach: Damen tragen Pfennigabsätze (Figur steht auf den Ballen, beim Sitzen gehen die Knie etwas hoch) und jede zweite eine Perlenkette."
      ],
      images: [],
      commits: [], tags: ["Menschen", "Technik"]
    },
    {
      id: "rosenwald500", date: "2026-11-04", phase: "p5", title: "Zweites 1950er-Auto: Rosenwald 500",
      summary: "Eine von ChatGPT erfundene Luxus-Limousine (Baujahr 1954) – ohne Markenrecht, deshalb diesmal mit Emblemen, Schriftzug „Rosenwald“ und Kennzeichen „RW-500“ möglichst detailgetreu nach dem Designblatt gebaut.",
      points: [
        "Eigenes Skript, nutzt die Bausteine der ersten Limousine.",
        "Zweifarbig wie im Blatt: Grundfarbe unten, Akzent auf Dach, Haube und Heckpartie über dem geschwungenen Chromspeer; sechs Farbpaare aus dem Blatt (Rubinrot/Creme, Petrol/Weiß, Pastellgrün/Creme …).",
        "Details: breiter Kühlergrill mit Stoßstangenhörnern, Flügel-Emblem mit R, drei Bullaugen, Flossen mit hohen Rückleuchten, eigene Räder mit breiter Weißwand und roter Nabe.",
        "Nach dem Play-Test: Zierleisten beider Autos enden jetzt vor den Radläufen statt über das Rad zu laufen; Scheinwerfer aus Glas statt weiß; die erste Limousine hat eine Chrom-A-Säule, wo die Panoramascheibe um die Ecke läuft.",
        "Beide Modelle fahren gemischt im Verkehr; rund 75 000 Dreiecke, Nanite."
      ],
      images: [
        { src: "2026-11-04_rosenwald_front.jpg", cap: "Rosenwald 500 – Front mit RW-500 und Glas-Scheinwerfern (Blender-Vorschau)" },
        { src: "2026-11-04_rosenwald_heck.jpg", cap: "Heck mit Flossen-Leuchten und Flügel-Emblem" },
        { src: "2026-11-04_auto1950_asaeule.jpg", cap: "Erste Limousine mit neuer Chrom-A-Säule, Zierleisten enden vor dem Rad" }
      ],
      commits: [], tags: ["Verkehr", "Technik"]
    },
    {
      id: "passantin-1950", date: "2026-11-04", phase: "p5", title: "Zweite Passanten-Figur: 1950er-Dame",
      summary: "Nach dem Referenzblatt des Users läuft jetzt eine Dame im weißen Neckholder-Tupfenkleid mit Tellerrock durch die Stadt – mit weiblichen Proportionen, blondem Bob und eigenem Gang.",
      points: [
        "Kleid selbst gebaut: Oberteil aus der Körperhaut zugeschnitten, Tupfen gleichmäßig über eine eigene Abwicklung, Tellerrock mit Gürtel und Falten.",
        "Brustform in mehreren Runden am Referenzprofil nachgearbeitet (MakeHuman-Regler reichten nicht) – erst hängend, dann spitz, schließlich rund und hoch: vom User freigegeben.",
        "Nach dem ersten Play-Test (zu breite Schultern, männlicher Gang, Frisur falsch): Körper auf Quinn statt Manny eingepasst, fertige Bob-Frisur blond eingefärbt, Pony über den Brauen sauber abgeschnitten.",
        "Weiblicher Gang: Frauen laufen mit der Gehanimation von Quinn, das Tempo der Animation passt sich der Laufgeschwindigkeit an.",
        "Jede Figur hat jetzt ihr eigenes Material (gleiches Grundmaterial, eigene Textur) – Grundlage für weitere Figuren und Farbvarianten."
      ],
      images: [
        { src: "2026-11-04_passantin_1950_profil.jpg", cap: "Profil: Referenzblatt links, Modell rechts (Brustform)" }
      ],
      commits: [], tags: ["Menschen", "Technik"]
    },
    {
      id: "auto1950", date: "2026-11-04", phase: "p5", title: "Erstes 1950er-Auto: Limousine mit Heckflossen",
      summary: "Die modernen Autos passten nicht in die 50er. Aus einem generierten Designsheet entstand per Blender-Skript eine eigene Limousine – Heckflossen, Chrom-Stoßstangen mit Hörnern, Zweifarblack und Weißwandreifen, die sich wirklich drehen.",
      points: [
        "Vorlage: Designsheet – übernommen wird nur die Form, keine Markenzeichen, Schriftzüge oder Embleme.",
        "Gebaut wie die Häuser per Skript: Karosserie aus Querschnitten, Kabine mit Panoramascheiben, Radläufe vorn rund, hinten mit Radabdeckung.",
        "Echte Räder statt flacher Scheiben: Weißwand, Chromkappe mit Rippen, damit man das Drehen sieht – wichtig, seit man zu Fuß durch die Stadt gehen kann.",
        "Eine Mesh, viele Lackierungen: Karosserie- und Dachfarbe kommen je Auto aus den Komponentendaten (Koralle, Pastellblau, Mint, Buttergelb, Nachtblau …, Dach meist cremeweiß).",
        "Epochen-Schalter im Verkehr: solange es kein Spieljahr gibt, fahren nur Autos der 1950er; die modernen bleiben für später.",
        "Rund 20 000 Dreiecke, Nanite – auch beim Stresstest mit 300 Autos unkritisch."
      ],
      images: [
        { src: "2026-11-04_auto1950_limousine.jpg", cap: "Limousine 1950 (Blender-Vorschau)" },
        { src: "2026-11-04_auto1950_heck.jpg", cap: "Heck mit Flossen, Geschoss-Rückleuchten und Kennzeichenfeld" },
        { src: "2026-11-04_auto1950_vergleich.jpg", cap: "Seitenansicht: Designsheet oben, Modell unten" }
      ],
      commits: [], tags: ["Verkehr", "Technik"]
    },
    {
      id: "passanten-mpfb", date: "2026-11-04", phase: "p5", title: "Erste echte Passanten-Figur (1950er-Herr)",
      summary: "Statt des grauen Mannequins laufen jetzt Menschen aus MakeHuman (CC0-Bibliothek in Blender) – mit Anzug, Hut und Gesicht, aber so sparsam, dass Hunderte gleichzeitig gehen.",
      points: [
        "Werkzeug: MPFB (MakeHuman für Blender) mit den freien Grundpaketen (Körper, Kleidung, Hauttypen).",
        "Die Figur wird auf das Mannequin-Skelett eingepasst – Gehen, Sitzen, Aufstehen und Drehen funktionieren ohne neue Animationen.",
        "Sparsam: verdeckter Körper unter der Kleidung gelöscht, Dreiecke reduziert (39 000 → 15 000), alle Texturen in einem Atlas, ein Material für alle Figuren.",
        "Vorbereitet für Farbvarianten: jeder Teil (Haut, Anzug, Hut, Schuhe) trägt eine Kennung, damit dieselbe Figur später mit anderen Farben wiederverwendet werden kann.",
        "Lektion: Wirbelsäulen gleich benannt abbilden (MPFB hat 3, das Mannequin 5 Wirbel) und die oberste nach Höhe aufteilen – sonst blähte sich das Sakko auf.",
        "Nach dem ersten Play-Test: Haltung wieder gerade (Bauch stand vor – die Figur behält jetzt ihre eigene Tiefe), kahler Kopf unter dem Hut mit Durchblick ersetzt durch Haare, die gerade entlang der Hutkante abgeschnitten sind, plus dunkles Hutfutter.",
        "Neuer Prüfschritt: jede Figur kommt erst als Blender-Datei zur Durchsicht (mit Vergleichsfigur und Hinsetz-Animation), dann ins Spiel."
      ],
      images: [
        { src: "2026-11-04_mpfb_rohfigur.jpg", cap: "Rohfigur aus MakeHuman (39 000 Dreiecke, 8 Materialien)" },
        { src: "2026-11-04_passant_1950_mpfb.jpg", cap: "Fertig fürs Spiel: auf dem Mannequin-Skelett, 15 000 Dreiecke, 1 Material" },
        { src: "2026-11-04_passant_hut_haare.jpg", cap: "Hut und Haare überarbeitet: gerader Schnitt, natürlicher Haaransatz, Hutfutter" }
      ],
      commits: [], tags: ["Menschen", "Technik"]
    },
    {
      id: "konzept", date: "2026-11-03", phase: "p6", title: "Erst das Konzept: Spieler-UI, Wirtschaft, Ökosystem",
      summary: "Bevor das Spieler-Menü gebaut wird, klären wir, wovon das Spiel lebt. Drei Konzeptpapiere entstanden an einem Abend.",
      points: [
        "Recherche, wie Aufbauspiele ihre Oberfläche anordnen → Layout abgestimmt: Status oben, Bauen unten, Panel am Objekt.",
        "Wirtschaft im Bezirk: Haushalt von der Stadt, Steuern wie bei Anno, Energie als erster Engpass.",
        "Ökosystem: sieben Säulen, Geldquellen und -senken, zwei Rollen des Spielers (Amt und Unternehmer)."
      ],
      concepts: ["oekosystem", "wirtschaft", "ui"],
      images: [], commits: [], tags: ["Konzept"]
    },
    {
      id: "walker", date: "2026-11-03", phase: "p5", title: "Zu Fuß durch die Stadt, Fußgänger-Netz, Passanten",
      summary: "Mit Taste F steigt man aus der Vogelperspektive auf die Straße. Ein eigenes Netz verbindet Gehwege, Ecken, Zebrastreifen und Hauseingänge.",
      points: [
        "Ego-Perspektive: Augenhöhe 1,64 m, Shift rennt, Leertaste springt.",
        "Fußgänger-Netz aus den sichtbaren Gehwegen, Zebrastreifen mit Ampelphasen, Wegsuche (A*).",
        "300 Passanten als Platzhalter-Figuren laufen von Eingang zu Eingang und warten an Rot.",
        "Nach dem ersten Test: kein Pulk mehr am Zebrastreifen (eigener Halteabstand, Reaktionszeit und Tempo je Figur), Abbieger warten auf Fußgänger, manche queren mitten im Block, wenn kein Auto in der Nähe ist.",
        "Debug-Ansicht zeigt den Restweg jeder Figur bis zum Ziel – sie planen den ganzen Weg im Voraus.",
        "Stresstest-Knopf im Admin-Menü: 10× so viele Autos (300) und Passanten (3000) – läuft im Play flüssig.",
        "Ampeln: Grünphase verdoppelt (20 s statt 10 s, Zyklus 48 s); Passanten gehen 1,5 × so schnell (1,4–2,5 m/s; 2 × war zu viel).",
        "Fix Laufanimation: erst glitten die Passanten in der Grundpose, dann traten sie auf der Stelle (falsche Animation MM_Walk_InPlace) – jetzt echte Schritte mit MM_Walk_Fwd, abgestimmt auf 2,3 m/s.",
        "Auf dem Zebrastreifen steigen die Passanten jetzt vom Bordstein auf die Fahrbahn hinab, statt auf Gehweg-Höhe zu schweben.",
        "Parks als Ziele (04.11.): Parkwege gehören zum Fußgänger-Netz, Passanten gehen durch Parks und bleiben 30–120 s an einer Bank.",
        "Sitzen auf der Bank (04.11.): eigene Sitzpose für das Mannequin in Blender gebaut (MM_Sit_Idle, leichtes Atmen), dazu Hinsetzen und Aufstehen (je 1,4 s, Füße bleiben am Boden): zur Bank drehen, hinsetzen, sitzen, aufstehen, weitergehen.",
        "Flüssiges Drehen (04.11.): Passanten drehen sich nicht mehr schlagartig um 90° oder 180°, sondern laufen Ecken in einem Bogen, drehen sich an der Ampel zur Straße und treten beim Umdrehen auf der Stelle.",
        "Weiche Übergänge (04.11.): eigene Animations-Klasse blendet zwischen zwei Animationen über (0,25 s) – kein Flackern mehr beim Hinsetzen, Aufstehen und Losgehen."
      ],
      images: [], commits: [], tags: ["Stadt", "Technik"]
    },
    {
      id: "heute", date: "2026-11-03", phase: "p5", title: "Stand heute: dieselbe Insel, jetzt mit Stadt",
      summary: "Seed 503555 mit dem heutigen Code: Gelände-Gras, Berge, Wolkenschatten, Innenstadt mit Hochhäusern und Kaufhäusern, Parks, Ring. Die Insel entsteht in 10 Sekunden statt 200.",
      points: ["Alle vier Rückblick-Stände mit gleichem Seed und gleicher Kamera aufgenommen – direkt vergleichbar.", "Aufnahme im Editor-Simulate: dort baut der Generator nur den Ring, nicht die Hauptstraßen."],
      images: [
        { src: "2026-11-03_hist_sky.jpg", cap: "Skyline der Innenstadt, Berg im Hintergrund" },
        { src: "2026-11-03_hist_city.jpg", cap: "Innenstadt im Ring, Baufelder ringsum" },
        { src: "2026-11-03_hist_near.jpg", cap: "Nah: Zentrum mit Hochhäusern" },
        { src: "2026-11-03_hist_obl.jpg", cap: "Schrägansicht" },
        { src: "2026-11-03_hist_top.jpg", cap: "Von oben: Wolkenschatten, Berge, Stadt in der Mitte" }
      ],
      compare: { before: "2026-11-01_hist_near.jpg", after: "2026-11-03_hist_near.jpg", cap: "Gleiche Kamera, gleicher Seed: 01.11. → heute" },
      commits: [], tags: ["Rückblick", "Stadt"]
    },
    {
      id: "baustelle", date: "2026-11-03", phase: "p5", title: "Epochen-Umbau: Baustellen machen aus 1950 die 1970er",
      summary: "Gebäude werden nicht ausgetauscht, sondern sichtbar saniert: Zaun, Gerüst, Netz mit Werbeplanen, Kran – unter der Plane wechselt die Fassade, oben kommen Geschosse dazu.",
      points: [
        "Drei Gebäudearten: Hochhaus, Kaufhaus, Wohnhaus.",
        "Echte Baustellen-Teile aus Blender: Gerüstrohre, Kupplungen, Bauzaun, Turmdrehkran, Container, Mulde.",
        "Gerüst und Netz wachsen jetzt flüssig mit, statt Etage für Etage aufzuploppen."
      ],
      images: [
        { src: "2026-11-03_skyscraper_1970.jpg", cap: "1970er City Tower – die Sanierung des 1950er-Hochhauses" },
        { src: "2026-11-03_deptstore_1970.jpg", cap: "1970er-Kaufhaus" },
        { src: "2026-11-03_residential_1970.jpg", cap: "1970er-Wohnhaus" }
      ],
      compare: { before: "2026-11-02_skyscraper_1950.jpg", after: "2026-11-03_skyscraper_1970.jpg", cap: "Hochhaus 1950 → 1970" },
      commits: [], tags: ["Gebäude", "Epochen"]
    },
    {
      id: "gebaeude70", date: "2026-11-03", phase: "p5", title: "Neue Gebäudefamilien: 1970er-Hochhäuser und ein Krankenhaus",
      summary: "Die Gebäude-Pipeline (Referenzblatt → Blender → Prüfungen → Unreal) lief den ganzen Tag in einer zweiten Session parallel.",
      points: [
        "Hochhäuser 1970: Waffelraster (_03), Klinker (_02), _04 und _05.",
        "1950er-Krankenhaus in drei Varianten.",
        "Jede Familie: drei Formvarianten, Farbpaletten, Nanite."
      ],
      images: [
        { src: "2026-11-03_skyscraper_1970_02.jpg", cap: "Hochhaus 1970 _02 (Klinker)" },
        { src: "2026-11-03_skyscraper_1970_03.jpg", cap: "Hochhaus 1970 _03 (Waffelraster)" },
        { src: "2026-11-03_skyscraper_1970_04.jpg", cap: "Hochhaus 1970 _04" },
        { src: "2026-11-03_skyscraper_1970_05.jpg", cap: "Hochhaus 1970 _05" },
        { src: "2026-11-03_hospital_1950.jpg", cap: "Krankenhaus 1950" },
        { src: "2026-11-03_ref_sky04.jpg", cap: "Referenzblatt (Bild-KI) für Hochhaus _04" }
      ],
      commits: [], tags: ["Gebäude"]
    },
    {
      id: "innenstadt", date: "2026-11-02", phase: "p4", title: "Innenstadt, Verkehr, Wolken und Stadtparks",
      summary: "Das Zentrum bekommt ein gerades Straßenraster mit Hochhäusern und Kaufhäusern, auf den Straßen fahren Autos, Ampeln schalten, Wolken ziehen.",
      points: [
        "Kreuzungen mit Zebrastreifen und Haltelinien, Ampeln im 28-s-Takt.",
        "30 Autos fahren rechts, halten an Rot, biegen ab.",
        "Skyline: Hochhäuser in Reihen an den Avenues, zur Mitte hin höher; Kaufhäuser an den Ecken.",
        "Parks werden prozedural erzeugt (Wege, See, Büsche)."
      ],
      images: [
        { src: "2026-11-02_park_city.jpg", cap: "Park-Generator: großer Stadtpark mit zwei Seen" },
        { src: "2026-11-02_park_l.jpg", cap: "Park-Generator: L-förmige Fläche" },
        { src: "2026-11-02_skyscraper_1950.jpg", cap: "1950er-Hochhaus – Grundbaustein der Skyline" },
        { src: "2026-11-02_cafe_1950.jpg", cap: "1950er-Café" },
        { src: "2026-11-02_deco_1950.jpg", cap: "1950er-Kaufhaus" }
      ],
      commits: [], tags: ["Stadt", "Verkehr"]
    },
    {
      id: "cpp", date: "2026-11-01", phase: "p3", title: "Inselgenerator in C++: Berge, Plateau, Gelände-Texturen",
      summary: "Die rechenintensiven Teile wandern von Blueprint nach C++. Die Insel bekommt Berge ohne Kanten, ein rundes Zentrums-Plateau und echte Gras-/Fels-Texturen.",
      points: ["Baufelder ausgeglichen, kein Strand, kleineres Zentrum.", "Admin-Menü im Warm-Parchment-Look.", "Spieler können Straßen bauen (gerade), mit Kreuzungen."],
      images: [
        { src: "2026-11-01_hist_top.jpg", cap: "Seed 503555 mit dem C++-Generator, von oben (nachträglich aus)" },
        { src: "2026-11-01_hist_obl.jpg", cap: "Schrägansicht: Blütenform, Berge am Rand, noch ohne Gras-Texturen" },
        { src: "2026-11-01_hist_near.jpg", cap: "Nah: rundes Zentrums-Plateau, Felder mit Namen" },
        { src: "2026-11-01_terrain_a.jpg", cap: "Prototyp: Berge (Höhenlinien) – Seed 871242" },
        { src: "2026-11-01_terrain_b.jpg", cap: "Prototyp: Berge – Seed 959715" }
      ],
      compare: { before: "2026-10-30_hist_top.jpg", after: "2026-11-01_hist_top.jpg", cap: "Gleicher Seed 503555: Blueprint-Generator (30.10.) → C++-Generator mit Charakter-Form (01.11.)" },
      commits: [], tags: ["Insel", "Technik", "Rückblick"]
    },
    {
      id: "charakter", date: "2026-10-31", phase: "p3", title: "Inselform mit Charakter (Python-Prototyp v6)",
      summary: "Statt runder Kleckse: Buchten, Halbinseln, ein Seen-Auge, flächengleiche Bezirke. Erst in Python ausprobiert, dann 1:1 nach C++.",
      points: ["Viele Seeds nebeneinander verglichen, Buchten gezielt geprüft.", "Baufelder per gewichtetem Voronoi: ~9 Felder je Bezirk, gleiche Fläche."],
      images: [
        { src: "2026-10-30_char_gallery.jpg", cap: "Formen-Galerie (mehrere Seeds)" },
        { src: "2026-10-31_core_shape.jpg", cap: "Zentrumsform und Bezirksstrahlen" },
        { src: "2026-10-31_bays.jpg", cap: "Buchten-Test" },
        { src: "2026-10-31_fields.jpg", cap: "Baufelder: 6 Bezirke × ~9 Felder, alle gleich groß" },
        { src: "2026-10-31_strip.jpg", cap: "Vergleichsreihe für die Auswahl" }
      ],
      commits: [], tags: ["Insel"]
    },
    {
      id: "baufelder", date: "2026-10-30", phase: "p3", title: "Seed-Insel mit Baufeldern (Stand 30.10.)",
      summary: "So sah die Seed-Insel vor der Umstellung auf C++ aus: sechs gleich große Bezirke, je 9 Baufelder, Ring und Hauptstraßen – noch ohne Berge und ohne Gelände-Texturen.",
      points: ["Seed 503555: 717 ha Land, je Bezirk ~104 ha, Felder 11–12 ha.", "Erzeugung im Editor ~200 s (Blueprint), davon 43 s Rechenzeit – Anlass für C++."],
      images: [
        { src: "2026-10-30_hist_top.jpg", cap: "Seed 503555 von oben (nachträglich aus erzeugt)" },
        { src: "2026-10-30_hist_obl.jpg", cap: "Schrägansicht: grüne Felder am Ring" },
        { src: "2026-10-30_hist_near.jpg", cap: "Nah: Zentrum, Ringstraße, Hauptadern" }
      ],
      compare: { before: "2026-09-27_hist_top.jpg", after: "2026-10-30_hist_top.jpg", cap: "Karteninsel (27.09.) → Seed-Insel (30.10.), gleiche Draufsicht" },
      commits: [], tags: ["Insel", "Rückblick"]
    },
    {
      id: "strassen", date: "2026-10-28", phase: "p2", title: "Straßennetz mit Gehweg-Ecken, Lots rechtwinklig zur Straße",
      summary: "Straßen bekommen echte Einmündungen mit Gehweg-Ecken; Grundstücke richten sich an der Straße aus und rasten an Nachbarn ein.",
      points: ["Lots folgen auch Kurven (Fächerlücken gefüllt).", "Vorschau-Geist grün/rot beim Setzen."],
      images: [
        { src: "2026-10-28_road_junction.jpg", cap: "Einmündung am Ring" },
        { src: "2026-10-28_road_sidewalk.jpg", cap: "Gehweg-Ecke" },
        { src: "2026-10-28_lots_corner.jpg", cap: "Lots an einer Einmündung" },
        { src: "2026-10-28_lots_row.jpg", cap: "Reihe von Lots entlang einer Straße" },
        { src: "2026-10-28_lots_ghost.jpg", cap: "Lot-Vorschau (Geist)" }
      ],
      commits: [], tags: ["Lots", "Straßen"]
    },
    {
      id: "seed", date: "2026-10-27", phase: "p3", title: "Die Insel entsteht aus einem Seed",
      summary: "Wende: Die Karteninsel ist nur noch Prototyp. Jede Partie bekommt eine eigene Insel aus einer Zahl – mit sechs gleich großen Bezirken, Ring und Hauptstraßen.",
      points: [
        "Erste Versuche: zerfranste Fraktal-Inseln, blasse Farben, dunkle Nachtstimmung.",
        "Dann klare Bezirksfarben, Ring ums Zentrum, Beschriftung mit Hektar.",
        "Viele Iterationen in einer Nacht (s1 … s13)."
      ],
      images: [
        { src: "2026-10-26_seed_grid_python.jpg", cap: "Python: 8 Seeds im Vergleich" },
        { src: "2026-10-26_seed_first_unreal.jpg", cap: "Erste Seed-Insel in Unreal" },
        { src: "2026-10-26_seed_fractal.jpg", cap: "Fraktal-Variante (verworfen)" },
        { src: "2026-10-26_seed_dark_far.jpg", cap: "Nacht-Look (verworfen)" },
        { src: "2026-10-26_seed_green_near.jpg", cap: "Grüner Ring-Test" },
        { src: "2026-10-26_seed_colored.jpg", cap: "Klare Bezirksfarben" },
        { src: "2026-10-27_districts_top.jpg", cap: "Seed-Insel von oben" },
        { src: "2026-10-27_districts_mid.jpg", cap: "Zentrum mit Ring" },
        { src: "2026-10-27_districts_ring.jpg", cap: "Bezirke mit Flächenangabe" },
        { src: "2026-10-27_districts_labels.jpg", cap: "Bezirke beschriftet" }
      ],
      compare: { before: "2026-10-26_seed_first_unreal.jpg", after: "2026-10-27_districts_top.jpg", cap: "Seed-Insel: erster Versuch → einen Tag später" },
      commits: [], tags: ["Insel"]
    },
    {
      id: "lot", date: "2026-10-25", phase: "p2", title: "Lot-System-Prototyp",
      summary: "Regelkette Straße → Gehweg → Vorgarten → Grundstück → Gebäude. Erstes Testgrundstück in Bezirk 4.",
      points: ["Admin-/Testmenü im Spiel.", "Start-Automatik für Unreal und Blender."],
      images: [
        { src: "2026-10-25_lot_overview.jpg", cap: "Testlot an der Straße in D4" },
        { src: "2026-10-25_lot_top.jpg", cap: "Lot von oben mit Raster" }
      ],
      commits: [], tags: ["Lots"]
    },
    {
      id: "pipeline", date: "2026-09-30", phase: "p1", title: "Gebäude-Pipeline: Residential_01 von Anfang bis Ende",
      summary: "Der Weg vom Referenzbild über Blender bis zum fertigen Nanite-Gebäude in Unreal steht – als Skill dokumentiert.",
      points: ["Ingame-Baumenü (Grobgerüst).", "Industrie, Lager, Wohnhaus als erste 1950er-Familien."],
      images: [{ src: "2026-09-30_residential_1950.jpg", cap: "1950er-Einfamilienhaus, drei Varianten" }],
      commits: [], tags: ["Gebäude"]
    },
    {
      id: "start", date: "2026-09-26", phase: "p1", title: "Start: Insel aus der Kartenvorlage",
      summary: "Neubau von Shady Tycoon in Unreal 5.8. Die Insel kommt aus einer gezeichneten Karte: schwarz = Land, blau = Wasser, rot = Straßen.",
      points: ["Hauptverkehrsstraßen, Bezirks-Overlay, Bauraster für Bezirk 4.", "Steuerung von Unreal durch Claude über MCP."],
      images: [
        { src: "2026-09-27_hist_top.jpg", cap: "Die Karteninsel in Unreal, von oben (nachträglich aus fotografiert)" },
        { src: "2026-09-27_hist_oblique.jpg", cap: "Schrägansicht: sechs Bezirke in Pastell, Zentrum, Hauptstraßen" },
        { src: "2026-09-27_hist_near.jpg", cap: "Nah: Bucht und Zentrum, noch flache Platten" },
        { src: "2026-09-26_island_map.jpg", cap: "Kartenvorlage der Insel" },
        { src: "2026-09-27_d4_grid.jpg", cap: "Bauraster Bezirk 4" }
      ],
      commits: [], tags: ["Insel", "Rückblick"]
    }
  ],

  // ---------- Konzepte ----------
  concepts: [
    {
      id: "medien-imperium", title: "Medien-Imperium: Redaktion, Exklusivmeldungen, Publikum, Skandale – Medien als PvP", file: "", status: "Vorschlag", updated: "2026-11-11",
      summary: "Wunsch von Tester Nohr (Discord, Ticket #46) mit Design-Dokument und zwei UI-Bogen: Medien sollen mehr Spass machen, mehr bedeuten und Spieler gegeneinander antreten lassen. Kern: einen Sender zu besitzen ist erst der Anfang – das Spiel ist die Entscheidung, welche Geschichte recherchiert, begraben, gerahmt und wann gebracht wird, und den Gegenschlag zu ueberstehen. Baut auf dem auf, was es schon gibt (Meldungen, Recherchen, War Room, Stab, Zeitung/Fernsehturm, Titelseite, Publikum aus #44).",
      sections: [
        { h: "Stand heute (0.1.305)", s: "Offen", items: [
          "Vorhanden: Zeitung/Fernsehturm als Gebaeude mit Reichweite, Meldungen (Push/Spike/Spin/Gegendarstellung), Recherchen (Geruecht → Spur → Dossier), War Room mit 10 Kanaelen je Epoche, Stab mit Sternen/Loyalitaet/Abwerben, Werbung, Titelseite, My bets.",
          "Es fehlt die Entscheidungsebene: der Spieler schreibt und rahmt keine Geschichte, Sender haben keinen Namen/Ruf, Werbekunden verlangen nichts, Stab hat kein Gesicht, Gegenschlaege sind kein eigener Ablauf."
        ]},
        { h: "Kreislauf und Kernsysteme", s: "Vorschlag", items: [
          "Kreislauf: Entdecken → Formen (Geschichte, Rahmen, Platz, Zeitpunkt) → Publikum gewinnen → in Macht umwandeln (Werbegeld, Druck auf Abstimmungen, Wahlen, Nachfrage) → Gegenschlag ueberstehen. Eine Ausgabe = ein Monat.",
          "Sender als Figuren (`FOutletRec`): Name, Blattlinie, vier Werte Glaubwuerdigkeit / Reichweite / Einfluss / Angreifbarkeit – Boulevard und Qualitaetsblatt beide spielbar.",
          "Spuren als Informationsmarkt (`FLeadRec`): aus echten Ereignissen (gelenkte Ausschreibungen, Umschlaege, Abstimmungen gegen die Stimmung, Fabriken, Leichen im Keller); Beweislage 0–100, Exklusivitaet, Ablauf. Wahl: weiter recherchieren, jetzt bringen, verkaufen, zurueckhalten, begraben.",
          "Redaktion je Monat: Rahmen (investigativ, ausgewogen, kritisch, wohlwollend, reisserisch) und Platz (Titelseite, innen, versteckt, zurueckhalten), Prognose wie im War Room; die gebaute Titelseite IST die, die andere sehen.",
          "Begrenztes Publikum je Bezirk/Zielgruppe (aus #44), Werbekunden mit Bedingungen, Stab mit Gesicht (Personen-System), Medienverbund mit abnehmendem Zusatznutzen."
        ]},
        { h: "Skandal-Kette und PvP", s: "Vorschlag", items: [
          "Fuenf Stufen: Entdeckung → Entscheidung → Kampf um die Veroeffentlichung (Erster bekommt den Exklusiv-Bonus) → Folgen (Rat, Wahl, Bodenwert, Vertraege, Verdacht) → Vergeltung (Werbekunde springt ab, Klage, Gegen-Enthuellung). Jede Stufe als Karte in My bets, grosse als Titelseite.",
          "PvP: Wettlauf um Exklusivmeldungen, Abwerben von Moderatoren, Werbekriege, zwei Rahmen fuer dasselbe Ereignis, Zweckbuendnisse. Regel: ein Angriff schafft ein Problem, nimmt aber nie die Spielfaehigkeit."
        ]},
        { h: "Fenster (aus den UI-Bogen)", s: "Vorschlag", items: [
          "Alle im grossen Hauptfenster mit Portraets: Redaktion, Recherche-Tisch, Programmplaner (ab 1960), Publikumsanalyse, Talente, Konkurrenz, Uebernahme, Krise, Artikel schreiben.",
          "Zuerst Redaktion + Recherche-Tisch + Krise (tragen die Skandal-Kette)."
        ]},
        { h: "Stufen und offene Fragen", s: "Offen", items: [
          "1 ein Sender macht Spass · 2 zwei Sender konkurrieren · 3 Saeulen verbunden (Skandal-Kette, Krisenfenster, NPC-Pressebarone) · 4 Imperium (Programmplaner, Uebernahmen, Kabel/Web/Social).",
          "Offen: welche Gebaeude werden Sender, Unterbrechung mitten im Monat, Portraets jetzt oder nach dem Personen-Piloten, Stufe 1 oder Skandal-Kette zuerst."
        ]}
      ]
    },
    {
      id: "hierarchie", title: "Hierarchie & Personen: Politiker mit Gesicht, Charakter und Karriere", file: "", status: "Vorschlag", updated: "2026-11-11",
      summary: "Wunsch des Users nach dem Stadtrat-Hauptfenster: die ganze politische Hierarchie mit echten Menschen. Jede Figur wird eine dauerhafte Person (Gesicht, Archetyp, Eigenschaften, Meinung je Spieler, Karriere über Jahrzehnte); Vorwahlen auf Bezirksebene, in denen man früh Kandidaten unterstützt; Gesichter als einmal gerenderte MetaHuman-Porträts mit 5 Ausdrücken und 2–3 Altersstufen.",
      sections: [
        { h: "Personen", s: "Vorschlag", items: [
          "Neue Liste `People`: Id, Name, Geburtsjahr, Heimatbezirk, Gesicht, Archetyp (Parteiboss, Reformer, Populist, Gewerkschafter, altes Geld …), Eigenschaften (Ehrgeiz, Gier, Mut, Ehrlichkeit, Loyalität, Temperament, Nachtragen), Meinung je Spieler mit den letzten Gründen, Karriere.",
          "Sitze und Kandidaten zeigen nur noch auf eine Person; Werte wie Umschlag-Preis/Angst kommen von der Person. Personen altern, gehen in Rente, sterben, werden angeklagt – und kommen wieder."
        ]},
        { h: "Hierarchie", s: "Vorschlag", items: [
          "Bezirks-Vorwahl ~6 Monate vor der Ratswahl: 2–4 Kandidaten je Bezirk; Spieler können unterstützen (Geld), empfehlen (Einfluss/Medien), Schmutz suchen oder anwerben.",
          "Danach Stadtrat wie heute, Inselsitze aus den besten Verlierern, Bürgermeister alle 8 Jahre aus Rats-Veteranen. Später Ausschussvorsitze, Amtsleiter, Pressebarone.",
          "Hauptfenster „Hierarchie“: Bezirke mit Kandidaten → Rat → Bürgermeister, je Karte Porträt, Amt, Archetyp, Meinung von dir (mit Grund); Klick = Personenblatt mit Laufbahn und Abstimmungen."
        ]},
        { h: "Charakter → Verhalten", s: "Vorschlag", items: [
          "Alles bleibt feste Regeln auf dem Server (Mehrspieler: jeder PC rechnet gleich); Archetypen nach historischen Typen, keine echten Personen.",
          "Sprachmodelle nur vorab für Biografien, Zitate, Zeitungszeilen; ein live KI-Dialog höchstens später als Beiwerk ohne Spielwirkung."
        ]},
        { h: "Gesichter", s: "Entschieden", items: [
          "Variante B der Recherche (User 11.11.): Personen einmal in MetaHuman Creator bauen, je Jahrzehnt einkleiden, Brustbilder im Ratssaal-Licht rendern; im Spiel nur Bilder (wenige MB), Atmen/Blinzeln/Überblenden im UI.",
          "5 Ausdrücke (neutral, zufrieden, wütend, nervös, misstrauisch) nach Meinung, Stimme, Skandal; 2–3 Altersstufen (~35/55/70)."
        ]},
        { h: "Schritte und offene Punkte", s: "Offen", items: [
          "1 Pilot-Porträt (eine Person, 2 Alter × 5 Ausdrücke im Ratsfenster) · 2 Datenmodell · 3 Vorwahlen · 4 Hierarchie-Ansicht · 5 Besetzung ~40 Personen · 6 Altern/Rente/Comeback, Bürgermeisterwahl.",
          "Offen: Größe des Personen-Pools, Porträts für menschliche Spieler, Vorwahl immer oder nur bei Konkurrenz, Anteil Politikerinnen je Jahrzehnt."
        ]}
      ]
    },
    {
      id: "transit", title: "Nahverkehr: Allee, Bus, Tram, Fähre, U-Bahn", file: "", status: "Vorschlag", updated: "2026-11-11",
      summary: "Tester-Wunsch #41 (Nohr): Das Transit-Menü zeigt Allee, Bus, Tram, U-Bahn und Fähre, nichts davon gibt es. Vorschlag: zuerst eine Verkehrslast je Bezirk (Wege, Autoanteil je Epoche, Straßenkapazität → Stau kostet Zufriedenheit, Umsatz, Luft), dann die Verkehrsmittel nach Epoche: Bus 1950, Allee/Tram/Fähre 1965, U-Bahn 1990.",
      sections: [
        { h: "Kern: Verkehrslast", s: "Vorschlag", items: [
          "Je Bezirk und Monat: Wege aus Einwohnern + Arbeitsplätzen, Autoanteil 35 % (1950) bis 75 % (1990), Kapazität = Straßenmeter × Spurfaktor.",
          "Stau ab 0,7: Zufriedenheit bis −12, Gewerbeumsatz bis −15 %, Verschmutzung bis +30 %; sichtbar als mehr/langsamere Autos, Bezirkskarte und Verkehrs-Overlay.",
          "Nahverkehr nimmt Wege im Einzugsbereich seiner Haltestellen aus dem Autoanteil."
        ]},
        { h: "Verkehrsmittel", s: "Vorschlag", items: [
          "Bus 1950: Depot + Linie aus Haltestellen auf vorhandenen Straßen; Busse fahren als echte Fahrzeuge im Verkehr.",
          "Allee 1965: Option im Straßenwerkzeug, 2 × 2 Spuren, Baum-Mittelstreifen, Kapazität ×2,5; an der Bezirksgrenze nur mit beiden Nachbarn (Idee aus #18).",
          "Tram 1965 (Option: Rückbau-Gesetz 1970, Stadtbahn 1985), Fähre 1965 an Waterfront-Lots, U-Bahn 1990 als Inselprojekt per Gesetz „Metro Act“.",
          "Brücke ist kein eigenes Werkzeug: Straßen über Wasser werden schon automatisch Bogenbrücken – der Menüpunkt zeigt nur einen Hinweis."
        ]},
        { h: "Shady + Kunst", s: "Vorschlag", items: [
          "Privater Busbetreiber per Ausschreibung (Umschlag hilft, Verdacht bei eigener Firma); Linienführung an eigenen Lots vorbei hebt den Bodenwert; Fahrpreis-Gesetz; Streik, Ölkrise.",
          "Kunst (erfundene Marken): 1950er-Bus creme mit Bezirksfarbe („Rosenwald Transit Coach“), Haltestelle mit Rundschild, Gelenk-Tram creme/rot mit Oberleitung, Doppelend-Fähre mit Schornsteinen in Bezirksfarbe, U-Bahn-Kiosk mit „METRO“-Schild."
        ]},
        { h: "Offen", s: "Offen", items: [
          "Zuerst Stau-Simulation oder zuerst Busse als Extra?",
          "Tram fest 1965 oder Rückbau-/Stadtbahn-Geschichte?",
          "Privater Nahverkehr erlaubt?",
          "Sofort machbar nach OK: Menü zeigt Epoche + „coming later“."
        ]}
      ]
    },
    {
      id: "services", title: "Mehr öffentliche Dienste: Uni, Praxis, Bezirksamt, Bauhof, Grünflächenamt", file: "", status: "Vorschlag", updated: "2026-11-11",
      summary: "Tester-Wunsch #42 (Nohr): fünf neue Dienstgebäude. Arztpraxis (auch privat), Universität (Forschung, Büro/Medien +), Bezirksamt (Anhörungen billiger, Einfluss für den Sitzinhaber), Bauhof (führt Straßenzustand ein) und Grünflächenamt (führt Parkzustand ein).",
      sections: [
        { h: "Gebäude", s: "Vorschlag", items: [
          "Arztpraxis 1950: 1 Lot, versorgt 1500 Einwohner, privat möglich (Einnahmen).",
          "Universität 1955: Campus 3–6 Lots, Forschung +12/Monat, Büro/Medien +5 %, einmal je Bezirk, die erste = „State University“.",
          "Bezirksamt 1950: Feld-Anhörungen −30 % Einfluss und einen Monat schneller, +2 Einfluss/Monat für den Inhaber des Bezirkssitzes.",
          "Bauhof 1950: Straßen nutzen sich ab (Risse/Schlaglöcher, Kapazität −20 %), je Bauhof ~3 km Reparatur/Monat.",
          "Grünflächenamt 1950: Parks/Plätze brauchen Pflege (gelber Rasen, braune Hecken, Müll – Hof-Pflege-Look existiert), Sommerkonzerte."
        ]},
        { h: "Verknüpfung + Shady", s: "Vorschlag", items: [
          "Bezirksamt hilft dem Sitzinhaber – hält ein Rivale deinen Sitz, hilft dein Amt dem Rivalen: Grund, die Wahl zu gewinnen.",
          "Straßenreparatur per Ausschreibung: eigene Baufirma, Umschlag; billige Firma = Schlaglöcher kommen zurück (Skandal).",
          "Verwahrloster Park = Zeitungsmeldung; Uni beschleunigt Forschung und verschiebt Themen (Bildung/Umwelt)."
        ]},
        { h: "Kunst", s: "Vorschlag", items: [
          "Praxis: Klinkerhaus, Messingschild, grünes Kreuz (kein rotes Kreuz – geschütztes Zeichen).",
          "Uni: klassizistische Haupthalle mit Säulen und Uhrturm, Rasen-Quad; 1970 Beton-Hörsaal, 1990 Glas-Atrium.",
          "Bezirksamt: kleines Kalksteinhaus mit Treppe, Fahne in Bezirksfarbe, Uhr, Aushangbrett.",
          "Bauhof: Klinkerdepot, orange Laster, Dampfwalze, Kies; Grünflächenamt: Gärtnerhaus, Gewächshaus, Baumschule, Musikpavillon."
        ]},
        { h: "Offen", s: "Offen", items: [
          "Bonus des Bezirksamts an Sitzinhaber oder Bezirksbesitzer?",
          "Straßen- und Parkzustand (Abnutzung) überhaupt einführen?",
          "Private Praxen ja/nein? Uni als Lots oder gemalte Fläche?"
        ]}
      ]
    },
    {
      id: "water-sewage", title: "Wasserversorgung und Abwasser", file: "", status: "Vorschlag", updated: "2026-11-11",
      summary: "Tester-Wunsch #43 (Nohr): „Water“ und „Pumps“ im Utility-Menü sind dasselbe. Vorschlag: „Water supply“ (Pumpwerk, Wasserturm, ab 1990 Entsalzung) als Kopie des Stromnetzes und „Sewage“ (Abwasser-Pumpstation, Auslass, Kläranlage) mit Wasserqualität je Ufer.",
      sections: [
        { h: "Wasser", s: "Vorschlag", items: [
          "Leitungen werden nicht gezeichnet – sie folgen den Straßen wie Strom.",
          "Pumpwerk (See/Brunnen), Wasserturm (Druck, Wahrzeichen in Bezirksfarbe, Werbefläche), Entsalzung 1990.",
          "Bedarf je Einwohner steigt je Epoche; Mangel: Zufriedenheit −, kein Zuzug, Feuerwehr schwächer. Verkauf an andere Bezirke wie Strom."
        ]},
        { h: "Abwasser", s: "Vorschlag", items: [
          "Pumpstation + Auslass ins Meer/den See (gratis, senkt die Wasserqualität) oder Kläranlage (1950 Absetzbecken, 1970 Rundklärbecken).",
          "Schlechte Wasserqualität: Waterfront/Strandbad/Fischerei verlieren, Krankheiten; am Grenzsee trifft es den Nachbarn.",
          "1970 „Clean Water Act“: Strafe für ungeklärte Auslässe; nächtliches Verklappen = billig, aber Aufdeck-Risiko (Verdacht, Titelseite)."
        ]},
        { h: "Kunst", s: "Vorschlag", items: [
          "Pumpwerk Art déco mit hohem Schornstein und Ansaugsteg; Wasserturm = Stahltank auf vier Beinen mit Bezirksnamen (B: Backsteinturm, 1970 Beton-Pilz).",
          "Kläranlage mit runden Becken und langsam drehender Räumerbrücke, 1990 silberne Faultürme; Auslass mit brauner Fahne im Wasser.",
          "Wasserqualität sichtbar: sauber türkis, schlecht grünlich-trüb, grauer Schaum, Müll am Ufer, „No swimming“-Schild."
        ]},
        { h: "Offen", s: "Offen", items: [
          "Echtes System (Bedarf, Ausfälle) oder nur Gebäude mit Bonus?",
          "Wasser privat wie Strom oder immer öffentlich?",
          "Wasserqualität jetzt oder erst mit den Waterfront-Lots?"
        ]}
      ]
    },
    {
      id: "belegung", title: "Belegung und Nachfrage je Gebäude", file: "", status: "Vorschlag", updated: "2026-11-11",
      summary: "Antwort auf #44 (Tester: alles läuft nach kurzer Zeit auf Maximum). Befund: Wohnen, Industrie und Freizeit laufen tatsächlich fast immer voll, weil fast alles je Bezirk statt je Gebäude und Ort gerechnet wird und es keine Sättigung gibt; Arbeit und Läden nicht. Vorschlag: eigene Belegung je Gebäude mit Erstvermietung, Zuzug nur bei freien Jobs, Pendlermodell, Nachfrage je Branche mit Sättigung, Infofenster mit echten Zahlen.",
      sections: [
        { h: "Befund (0.1.305)", s: "Entschieden", items: [
          "Wohnen: Belegung je Bezirk einheitlich; Ziel = Wohnraum × Anziehung (0,6 + 0,4 · Zufriedenheit + Ansehen/400), gedeckelt bei 100 %, 20 % Annäherung je Monat → meist nach ~12 Monaten voll. Jobs und Lage zählen für den Zuzug nicht.",
          "Arbeit: 45 % der Einwohner arbeiten, Besetzung je Bezirk 20–100 % – nicht maximal (die 20 % aus #40), aber für jeden Betrieb im Bezirk gleich.",
          "Läden schon ortsabhängig (Kundschaft in Reichweite, 0,3–1,2×); Büro × Bildung, Hotel × Tourismus; Industrie, Freizeit, Medien ohne Nachfrage = immer voller Umsatz × Besetzung.",
          "Infofenster zeigt Umsatz bei voller Besetzung × Besetzung und lässt Nachfrage, Strom, Werbung, Ereignisse weg – oft mehr, als der Server bucht."
        ]},
        { h: "Vorschlag", s: "Vorschlag", items: [
          "Eigene Belegung je Gebäude (repliziert), ~15 % je Monat Richtung Ziel; Neubau startet bei 10–20 % und ist nach 6–12 Monaten voll.",
          "Wohnen nach Wohnwert am Ort (Jobs in Pendelreichweite, Dienste, Parks, Verschmutzung, Bodenwert gegen Miete); Zuzug inselweit nur so weit, wie es freie Jobs gibt, die besten Häuser zuerst.",
          "Pendlermodell: Wohnhäuser verteilen ihre Arbeitskräfte auf Betriebe in Reichweite; Besetzung je Betrieb, Arbeitslose senken die Zufriedenheit am Ort.",
          "Nachfrage je Branche mit Sättigung: Freizeit nach Besuchern, Büro nach Gebildeten + Bürobedarf, Industrie nach Absatzmarkt (Insel + Export) geteilt durch alle Fabriken, Medien nach Reichweite.",
          "Infofenster mit echtem Umsatz und einer Zeile je Faktor (mit Link zum Grund); später ein Overlay „Demand“ beim Bauen. NPCs planen mit derselben Bewertung."
        ]},
        { h: "Schritte und Offenes", s: "Offen", items: [
          "1 Anzeige-Fix · 2 Belegung je Gebäude · 3 Wohnwert + Zuzug · 4 Pendler · 5 Branchen-Nachfrage · 6 Abstimmung (Ziel: Haus trägt sich in ~2 Jahren).",
          "Offen: Rechenaufwand des Pendlermodells bei ~4 000 Gebäuden messen; Zufriedenheit/Bodenwert künftig je Ort; Leerstand sichtbar machen."
        ]}
      ]
    },
    {
      id: "waterfront", title: "Grundstuecke am Wasser", file: "", status: "Entschieden", updated: "2026-11-10",
      summary: "Letzter offener Teil von #32: Grundstuecke, deren Rueckseite ans Ufer grenzt, werden Waterfront-Lots - normale Gebaeude verdienen dort mehr, und fuenf neue Gebaeudearten gibt es nur dort (Strandbad, Bootshaus/Yachthafen, Fischereihafen, Strandvilla, Frachtkai).",
      sections: [
        { h: "Regel", s: "Vorschlag", items: [
          "Waterfront = Rueckkante des Lots hoechstens 12 m vom Ufer, mindestens 60 % davon zeigen aufs Wasser; geprueft auf dem Server aus den Generator-Daten.",
          "Jeder Bezirk nutzt nur sein eigenes Ufer; am gemeinsamen Grenzsee bauen beide Nachbarn.",
          "Uferstrassen: eine Strasse 20-60 m parallel zur Kueste - die Lots auf der Wasserseite reichen genau bis ans Ufer."
        ]},
        { h: "Neue Gebaeude", s: "Vorschlag", items: [
          "Strandbad (oeffentlich, Sandufer), Bootshaus/Yachthafen (Meer oder See), Fischereihafen (Meer), Strandvilla (jedes Ufer), Frachtkai (Meer, Steilkueste).",
          "Lot = Landteil + Wasserteil (Steg-/Kaizone 10-40 m); Stege mit fester Deckhoehe ueber dem jeweiligen Wasserspiegel (Meer -2,5 m, See -1,2 m).",
          "Bestehende Gebaeude am Wasser: Wohnen +25 % Miete, Cafe/Hotel +20 %; Industrie verschlechtert die Wasserqualitaet - am Grenzsee trifft das den Nachbarn."
        ]},
        { h: "Reihenfolge und Entscheidungen", s: "Entschieden", items: [
          "1 Waterfront-Regel + Bonus, 2 Uferstrassen, 3 Bootshaus als erstes echtes Gebaeude, 4 Villa + Strandbad, 5 Fischerei + Frachtkai, 6 spaetere Epochen.",
          "User 10.11.: Ja - der Frachtkai macht die Handelsstufen koerperlich (Hafen 1970 braucht einen Kai an der eigenen Kueste).",
          "User 10.11.: Ja - Wasserqualitaet ist ein Konflikt; Industrie verdirbt das Ufer, am Grenzsee trifft es den Nachbarn.",
          "User 10.11.: zuerst alle fuenf Gebaeude (1950) mit je 3 Varianten ueber die Gebaeude-Pipeline, danach die Spielregeln."
        ]}
      ]
    },
    {
      id: "wasser", title: "Wasser fuer Meer und Seen", file: "", status: "Entschieden", updated: "2026-11-10",
      summary: "Vergleich fuer realistisches Wasser bei einer Insel, die zur Laufzeit aus dem Seed entsteht: (A) eigenes Single-Layer-Water-Material auf den eigenen Wasserflaechen, (B) Water-Plugin von Unreal (experimentell, auf Splines und den Editor ausgelegt), (C) Fab-Pakete (meist Comic-Stil oder teure FFT-Ozeane). Entschieden (User 10.11.): A – umgesetzt, 0,68 ms GPU gemessen. B erst spaeter, falls Boote/Haefen mit Auftrieb kommen.",
      sections: [
        { h: "Optionen", s: "Entschieden", items: [
          "A) Eigenes Single-Layer-Water-Material auf den eigenen Wasserflaechen: echte Farbe nach Wassertiefe (flach klar/tuerkis, tief blau), Brechung, Spiegelung, Ufer-Schaum ueber die Tiefendifferenz, kleine Wellen per Normal-Maps – passt zur Insel aus dem Seed.",
          "B) Water-Plugin von Unreal: auf Splines und den Editor ausgelegt, zur Laufzeit schwer zu erzeugen, schwer (Landmass, Niagara), seit 5.0 experimentell.",
          "C) Fab-Pakete: meist Comic-Stil oder teure FFT-Ozeane; nichts Kostenloses, das A klar schlaegt."
        ]},
        { h: "Entscheidung und Umsetzung (User 10.11.)", s: "Entschieden", items: [
          "Jetzt A: ein Material fuer Meer und Seen, angewendet durch ShadySync; gemessen 0,68 ms GPU, altes Material bleibt als Rueckfall.",
          "Straende: Sand am flachen Ufer, steile Kueste bleibt Fels – unter dem flachen Wasser sichtbar.",
          "Strassen ueber Seen werden zu Bogenbruecken (unabhaengig von der Wasserwahl).",
          "Spaeter nur bei Bedarf B: Boote, Haefen mit Auftrieb und Wellen."
        ]}
      ]
    },
    {
      id: "kompendium", title: "Kompendium 1950–2030: Scope für Politik, Medien, Wirtschaft", file: "", status: "teils entschieden", updated: "2026-11-09",
      summary: "Was es im Spiel überhaupt geben soll, bevor die Wege dorthin entworfen werden (Auftrag des Users 09.11.): 94 Gesetze aus vier Quellen, acht Ämter mit Wählern und Turnus, 20 Wahlen, Sender und Methoden je Epoche, Stab mit Arbeitsmarkt, Forschung wie in MGT2, Güter, Verträge und Handel bis zum Hafen, acht Wege zum Reichtum und der Anfang als kleines Licht. Entscheidungen des Users sind markiert, der Rest ist Vorschlag.",
      diagrams: [
        { id: "laws", note: "42 von 94 Gesetzen auf der Zeitachse, sechs Bereiche. Gold = Epochen-Gesetz der Stadt, hell = Katalog ab seinem Jahr, rot gestrichelt = Ereignis aus der Simulation. Die vollständige Tabelle mit Wirkungen steht im Dokument." },
        { id: "council", note: "Wer wählt, wer sitzt, wer entscheidet: Bezirkswähler → 6 Bezirkssitze; alle Wähler → 2 Stadtsitze (neu), Polizeichef, Ausschuss; Bürgermeister als NPC mit Stichentscheid. Rat = 9 Stimmen, 5 nötig; Ernennungen für Kämmerer, Lizenzen und Ethik." },
        { id: "staff", note: "Der Arbeitsmarkt des Stabs (Entscheidung des Users): jedes Quartal neue Bewerber mit 2–5 Sternen, selten ein Spitzenmann – wer zuerst anheuert, hat ihn. Rollen sind Multiplikatoren für den War Room, höchstens 6 Plätze." },
        { id: "acts", note: "Der Anfang als kleines Licht (Richtung des Users): drei Akte vom Zuschauer im Roll Call über den ersten Sitz bis zum Tycoon mit Sendern und Puppets. Frühe Gesetze sind wichtig, aber umkehrbar." },
        { id: "trade", note: "Kreislauf der Bezirke (Prinzip des Users): Arbeiter, Güter, Strom, Kredit und Importe fließen über Verträge zwischen den Bezirken und zum Festland; Handel in sechs Stufen vom Lkw bis zum Logistik-Hub. Umsetzung nach Politik und Medien." }
      ],
      sections: [
        { h: "Entscheidungen des Users (09.11.)", s: "Entschieden", items: [
          "Zeitband: Heute links, die Zukunft kommt von rechts herein (Variante B); die Uhr-Karte zeigt Datum und Kalender.",
          "War Room angenommen. Stab nach dem Angestellten-Prinzip: je besser die Leute, desto besser die Ergebnisse; Arbeitsmarkt mit vielen Durchschnittlichen und ab und zu einem Guten – wer zuerst zugreift, hat ihn.",
          "Forschung wie in Mad Games Tycoon: Dinge werden über die Jahre verfügbar und müssen dann erforscht werden, auch bei den Medien (eigene Forschungsabteilung).",
          "Wirtschaft: Handel (erst per Lkw über die Brücke, später über einen Hafen) und Verträge mit NPCs und Spielern kommen, aber später. Festgehalten: kein Bezirk gleicht dem anderen – Bewohner-Bezirke liefern Arbeiter, Industrie liefert Produkte, jeder hängt von jedem ein wenig ab.",
          "Der Spieler ist ein Tycoon wie die Tech-Milliardäre (Autos und Raketen, Handelshaus, Social-Media-Imperium): viele Wege, Geld zu verdienen; am Ende steckt er es in Politik und Medien.",
          "Der Anfang als kleines Licht (Neigung des Users): Der Rat entscheidet ohne einen, man bekommt es mit wie in einem kleinen Tutorial und muss damit leben, bis man das Geld hat, es zu drehen.",
          "Reihenfolge: erst der Scope für alle drei Bereiche (dieses Kompendium), dann die Wege dorthin – beginnend mit der politischen und medialen Zeitschiene."
        ]},
        { h: "Wie Gesetze entstehen", s: "Vorschlag", items: [
          "Vier Quellen: Epochen-Gesetz der Stadt zum festen Jahr (Spieler können verzögern, beschleunigen, abschwächen), Katalog-Gesetz ab Verfügbarkeitsjahr durch jeden Ratssitz oder per Lobby, Ereignis-Gesetz aus der Simulation (Schwellenwert → Pflicht-Abstimmung), Bürgerbegehren ab dem Referendum Act 1970 (Sonderabstimmung der Wähler).",
          "Stufen oder an/aus; umkehrbar (Rücknahme = Abstimmung); Ratssitzung jeden Dezember, Sondersitzung 15 Einfluss, gescheitert = frühestens nächste Sitzung. NPC-Vertreter bringen nach Profil ein (Builder, Industrialist, Merchant, Press baron, Fixer)."
        ]},
        { h: "Wer wählt, wer sitzt, worum es geht", s: "Vorschlag", items: [
          "6 Bezirkssitze (Wähler des Bezirks, 4 Jahre, Nov 1954 … 2030), 2 Stadtsitze neu (alle Wähler; ersetzen die zweite Stimme des Bürgermeisters), Bürgermeister NPC mit Stichentscheid und Epochen-Gesetzen (ab 1990 wählbar – offen), Ausschuss 3 (heute gewählt; Vorschlag 2 gewählt + 1 ernannt), Polizeichef (Ermittlungstempo), Kämmerer (Ausschreibungen, vom Rat ernannt), Licensing board ab 1960 (Sender-Lizenzen, vom Bürgermeister), Inspector general ab 1978.",
          "Rat = 9 Stimmen, 5 nötig; ein Spieler ohne Sitz hat keine Stimme, nur Lobby – das ist der Einsatz bei Wahlen. 20 Wahlen, alle Ämter zugleich, Nachwahl bei Amtsverlust binnen 6 Monaten, Term limits nur per Gesetz (1990).",
          "Einsätze: Ratsmehrheit (Gesetze), Ausschuss (Felder), Polizeichef (Gefahr der Umschläge), Bürgermeister (Epochen, Stichentscheid, Haushalt), Kämmerer (Millionen der Ausschreibungen). Wählerformel wie bisher plus Zielgruppen, Polarize und nachgehaltene Versprechen."
        ]},
        { h: "Gesetzeskatalog 1950–2030", s: "Vorschlag", items: [
          "94 Einträge in neun Bereichen, je mit Jahr, Quelle, Wirkung (Startwert), Gewinnern/Verlierern und historischem Anker. Bauen: Reconstruction 1950, Urban renewal 1954, Historic preservation 1966, Parking minimums 1975, Inclusionary 2005, Upzoning 2019. Wohnen: Rent cap, Public housing 1955, Fair housing 1968, Vouchers 1974, Vacancy tax 2024.",
          "Verkehr: Highway program 1956, Transit 1962, Harbor authority 1970, Fuel rationing 1973, Congestion charge 2003, Light rail 2012. Umwelt/Energie: Smoke ordinance 1955, Clean Air 1970, Energy Act 1973, Nuclear licence 1975, Privatization 1990, Climate Act 2010, Coal phase-out 2018, Solar mandate 2026.",
          "Wirtschaft: Import tariff 1951, Minimum wage 1962, Enterprise zone 1968, TIF 1977, Deregulation 1981, Casino 1990, Free port 1996, Stimulus 2009, Remote-work zoning 2021. Ordnung: Police budget, Liquor licensing 1953, Open records 1966, Cameras 2002 (Recherchen +25 %), Pandemic 2020.",
          "Medien: Press law, Fairness rule 1950 (Aufhebung 1987), TV licence 1960, Cable 1978, Private TV 1990, Platform immunity 1996, Data protection 2018, AI labelling 2024. Sauberkeit: Lobbying register 1958, Referendum 1970, Finance limits 1974, Ethics Act 1978, Term limits 1990, Unlimited PACs 2010, Revolving-door ban 2016.",
          "Vorschlag für V2: die 8 vorhandenen Gesetze plus 4–6 je Jahrzehnt (≈ 40) und die 5 Epochen-Gesetze; Übersicht je Jahrzehnt zeigt, was gerade los ist (Epochen-Gesetz, Katalog-Themen, Ereignisse, neue Medien, Wirtschafts-Index)."
        ]},
        { h: "Medien-Scope", s: "Vorschlag", items: [
          "11 Sender-Typen mit Reichweite, Glaubwürdigkeit, Gründungskosten, Publikum und Erlös: Zeitung, Radio, Stadtanzeiger (nie kaufbar), TV 1960, Kabel 1978, Talk radio 1988, Privat-TV 1990, Portal 1996, Social 2008, Streaming 2016, KI-Feed 2030. Reichweite × Glaubwürdigkeit = Wirkung; Glaubwürdigkeit bleibt die Selbstbremse.",
          "8 Story-Typen (Report, Exposé, Human interest, Fear, Hope, Satire ab 1970, Endorsement, Puff piece), Kampagnenziele aus dem War Room, Recherche-Stufen mit Beschleunigern und Bremsen, Werbung je Epoche, Umfragen ±8 … ±2, Medien-Ereignisse (TV-Debatte vor jeder Wahl ab 1960, Pressepreis, Skandalwellen), Eigentum über Gründen und Anteile."
        ]},
        { h: "Stab und Arbeitsmarkt", s: "teils entschieden", items: [
          "10 Rollen mit 1–5 Sternen und je einer Wirkung je Stern: Campaign manager (Mix +6 %), Pollster (Spanne −10 %), Spin doctor ab 1980, Fixer (Umschlag-Verdacht −3, hat selbst Leichen im Keller), Editor, Investigative reporter (nimmt sein Dossier mit), Researcher (+10 RP), Lobbyist ab 1958, Lawyer, Data analyst ab 2012.",
          "Arbeitsmarkt je Quartal 8–12 Bewerber (2★ 45 %, 3★ 40 %, 4★ 12 %, 5★ 3 %), Gehalt 2 k × Sterne × Epoche, 5★ verlangen das Doppelte und ein Campaign HQ; wer zuerst anheuert, hat ihn (Server: erster Befehl); Abwerben +30 % gegen Loyalität; Fortbildung bis 4★; höchstens 6 Plätze (8 mit HQ) – Rollen sind Multiplikatoren, kein Mikromanagement."
        ]},
        { h: "Forschung", s: "teils entschieden", items: [
          "Verfügbar wird ein Kanal durch das Lizenz-Gesetz der Stadt, eine Methode mit ihrem Jahr; erforscht wird mit der Research desk im War Room (Researcher; ohne 10 RP/Monat): kleiner Kanal 60 RP + 30 k, großer 120 RP + 100 k, Methode 45–90 RP, Story-Typ 30 RP, Verbesserungen wiederholbar mit abnehmendem Ertrag.",
          "Wer zuerst erforscht, hat 1–2 Jahre Vorsprung, dann holen NPCs nach. Gleiches Prinzip klein für die Politik (Whip count, Committee stacking); Gebäude-Technik der Wirtschaft bleibt im Katalog nach Epoche."
        ]},
        { h: "Wirtschafts-Scope (später umzusetzen)", s: "teils entschieden", items: [
          "Prinzip (Entschieden): Bewohner-Bezirk liefert Arbeiter, Industrie liefert Güter und Baustoffe, Energie liefert Strom, Handel bringt Importe herein und Exporte hinaus – jeder hängt von jedem ein wenig ab, deshalb Verträge.",
          "7 Güter (Arbeiter/Fachkräfte/Akademiker, Strom, Baustoffe, Güter, Nahrung nur vom Festland, Dienste, Abfall) mit Ersatz ohne Vertrag (Stadtwerke 3×, Festland 2×); 6 Vertragsarten (Power supply, Labour agreement, Materials, Goods offtake, Port access, Waste) mit Laufzeiten und Hebeln.",
          "Handel in 6 Stufen: Lkw über die Brücke 1950 (Import 2×), Depot 1958, Hafen 1970 (Küstenfeld, Harbor authority, Ausschreibung – „man muss erst ans Meer kommen“), Container-Terminal 1990, Freihafen 1996, Logistik-Hub 2010. 12 Wirtschafts-Ereignisse von Baby boom 1955 über Ölkrise 1973 und Finanzkrise 2008 bis Pandemie 2020; Haushalt mit drei Kassen. Bewusst später: Güterketten, Preisbildung, Handel-Minispiel, Stromtrassen."
        ]},
        { h: "Wege zum Reichtum – der Tycoon", s: "teils entschieden", items: [
          "Acht Wege mit bestem Jahrzehnt, Voraussetzungen und typischem Gegner: Landlord (Mieten, Umwidmung; 1950er/2010er), Industrialist (Autos 1960, Elektronik 1990), Energy baron (Kohle → Atom → Wind), Merchant (Lkw → Hafen → Hub), Banker (1990er), Media mogul (TV 1960, Social 2000er), Host (Hotels, Casino 1990), Contractor (Ausschreibungen, Spitzen 1956 und 2009).",
          "Zwei Hauptwege + ein Nebenweg je Spieler; jeder Weg explodiert in einer Epoche und stirbt in einer anderen – rechtzeitig wechseln oder per Politik die Epoche bremsen. Endbild: Kampagnen sind Kleingeld, Sender im Besitz, Puppets im Rat, ab 1990 die Bürgermeisterwahl. Neue Gebäude dafür: Freight depot, Harbor, Terminal, Casino, Campaign HQ, Sender je Epoche."
        ]},
        { h: "Der Anfang: vom kleinen Licht zum Tycoon", s: "Vorschlag", items: [
          "Drei Akte ohne harte Schwellen: Small light 1950–54 (ohne Sitz, Roll Call als Zuschauer, Felder und Straßen, kleine Spende, Wahl 1954 vorbereiten, mit Beschlüssen leben), Player 1954–70 (ein Sitz oder Kampagnen-Geld, War Room, Zeitung/Radio, erster Stab), Tycoon 1970–2030 (Millionen, Puppets, Sender, Stab 5★, Bürgermeisterwahl ab 1990, die Spitze zieht Blicke an).",
          "Frühe Entscheidungen sind wichtig, aber umkehrbar („Repeal the 1955 Smoke ordinance“ als Akt-2-Ziel); das Playbook füllt sich durch Zuschauen; die Agenda zählt von Anfang an auf die Wahl 1954 hinunter; alle Menschen starten als kleine Lichter, wer zuerst reich wird, zieht Blicke an."
        ]},
        { h: "Die Wege dorthin (Reihenfolge)", s: "Vorschlag", items: [
          "1 Politik-Zeitschiene: Gesetzeskatalog als Datentabelle, Rat auf 9 Stimmen, Wahlen für alle Ämter, Agenda-Band und Roll Call. 2 Medien-Zeitschiene: Sender-Typen, Lizenzen, Story-Typen, Umfragen, Research desk, Stab und Arbeitsmarkt. 3 War Room mit Stimmung je Bezirk. 4 Wirtschaft: Güter, Verträge, Handel, acht Wege."
        ]},
        { h: "Offen", s: "Offen", items: [
          "Bürgermeister spielbar ab 1990 (Endspiel) – ja/nein; Ausschuss 3 gewählt oder 2 + 1 ernannt; welche 40 Katalog-Gesetze zuerst; Forschung auch für Produktions-Technik; Umsatzsteuer; Nahrung als Gut; Stab-Obergrenze 6; erster Sitz 1954 oder 1958 realistisch."
        ]}
      ]
    },
    {
      id: "kampagnen", title: "Agenda, War Room, Roll Call: Kampagnen als Werkstatt", file: "", status: "teils entschieden", updated: "2026-11-09",
      summary: "Eine Kampagne ist unser „Spiel“ aus Mad Games Tycoon 2: im War Room aus Ziel, Vehikel, Botschaft, Mix, Tricks und Timing zusammengestellt, Monate laufen gelassen, als Roll Call Sitz für Sitz erlebt, im Debrief erklärt und im Playbook gemerkt – die Agenda oben hält jeden Termin sichtbar. Auftrag des Users vom 09.11. (zentrales Geschehen, MGT2-Werkstatt für Politik und Medien, Spannung wie in Die Fugger II); die Ausgestaltung ist Vorschlag, die Zahlen sind Startwerte.",
      diagrams: [
        { id: "agenda", note: "Mockup auf dem heutigen HUD: Zeitband unter den Karten, Heute links, die Zukunft kommt von rechts herein (Entscheidung des Users 09.11.). Pins in den Farben der drei Kräfte, Goldring = mein Einsatz, Puls = bald und offen; Hover-Karte mit Stand, Klick = War Room." },
        { id: "warroom", note: "Der War Room als Werkstatt: links sechs Schritte, in der Mitte die Einstellungen (zwei Themen, vier Tonart-Regler, Zielgruppen, Polarize, Versprechen, 40 Mix-Punkte, Tricks, Timing), rechts Aussicht als Spanne, Entdeckungsrisiko, Kosten und Launch." },
        { id: "loop", note: "Der Kreislauf mit der MGT2-Entsprechung je Schritt: Agenda → War Room → Monate → Roll Call → Debrief → Playbook – und zurück in den War Room für den zweiten Anlauf." },
        { id: "rollcall", note: "Roll Call im Rat: acht Sitze gefallen, 4:4, Okafor zuletzt mit Pause – die Spannung aus Die Fugger II und Frostpunk 2. Begründungssatz je Sitz, Stichentscheid des Bürgermeisters bei Gleichstand, Leertaste überspringt." },
        { id: "mediatech", note: "Kanäle (per Lizenz-Gesetz der Stadt) und Methoden (per Forschung im War Room) von 1950 bis 2030 – die Technik-Linie aus MGT2, auf die Spiel-Epochen gerundet. Jahre sind Vorschlag (TV 1960 statt 1965)." },
        { id: "case", note: "Fallbeispiel mit Zahlen: das High-rise permit scheitert 1958 mit 4:5, der Debrief erklärt warum (Housing-Angst in West, Plakate am falschen Ort), der zweite Anlauf 1959 mit Housing + Jobs geht 5:4 durch." },
        { id: "mood", note: "Was verborgen ist: die Stimmung eines Bezirks (Themen-Gewichte, Lager-Pendel) und die Reichweite je Kanal und Zielgruppe. Links je Partie anders (Seed), rechts partieübergreifend lernbar." }
      ],
      sections: [
        { h: "Auftrag des Users (09.11.)", s: "Entschieden", items: [
          "Das Geschehen muss zentral sein: Wahlen, Termine, Inhalte, Restzeit immer sichtbar – keine Randnotiz, kein Ticker, den man beim Bauen verpasst. Die sechs Vorschläge aus dem Hauptfenster (Agenda-Leiste, Titelseite statt Ticker, War Room vor Abstimmungen, Wettliste, Lager-Barometer, drei Alarmstufen) sind alle angenommen – ohne zu viel Klatter.",
          "Die Agenda-Leiste mit der Uhr und dem Kalender oben rechts verbinden (Fortlauf der Zeit), aber groß und zentral platzieren.",
          "Kampagnen wie in Mad Games Tycoon 2 einstellen: Puppet unterstützen oder finanzieren, Gesetz(e) wählen, beim Einbringen Werte mitgeben, Anhörungen steuern – herausfinden, was wirkt; klappt es nicht, beim zweiten Mal mit anderen Einstellungen. Umgekehrt bei den Medien: Kampagne gegen einen Kandidaten, Mitspieler oder NPC oder für einen Boom; Stories mit Werten (mitreißend, ernsthaft …), Stimmung der Bezirke erkunden, Werbung schalten.",
          "Technik über die Jahrzehnte: 1950 kein Internet – Zeitung, Radio, Schwarz-Weiß-Fernsehen, später Neues; beeinflusst, was man erforschen kann.",
          "Abstimmungen spannend wie in Die Fugger II: erst beeinflussen, dann geben die Richter nacheinander ihr Urteil ab, Mehrheit nötig, oft entscheidet der Dritte.",
          "Vorlage ist die Wirklichkeit: Geldgeber finanzieren Kandidaten, Medien machen aus allem Stories, Reibung und „wir gegen die“ halten die Leute bei der Stange – wir sind die, die manipulieren; alles läuft über Geld. Offen: wie die Wirtschaft hier funktioniert, Verträge vielleicht als Minispiel."
        ]},
        { h: "Was an solchen Spielen Spaß macht (Recherche 09.11.)", s: "Recherche", items: [
          "Mad Games Tycoon 2: Produkt aus Genre, Untergenre, Themen, Zielgruppe, 40 Prioritätspunkten, Richtungs-Reglern und Features; die passenden Werte sind verborgen und werden durch Erfahrung gefunden; Technik wird nach und nach frei. Häufigste Kritik: das Spiel erklärt nicht, wie man gute Spiele macht, Spieler googeln die Regler – darum nennt unser Debrief die Ursache, und die Passung ist je Partie anders.",
          "Die Fugger II: Ämterkette (Ratsherren wählen den Bürgermeister, der setzt Baumeister, Richter, Kämmerer), Spenden-Balken je Amtsträger, Richter bestechen, 2 von 3 genügen, bei Gleichstand entscheidet das Los, Erpressung zwingt eine Stimme.",
          "Frostpunk 2: Rat mit 100 Sitzen, 51 nötig, vorher mit Fraktionen verhandeln (Versprechen mit Frist oder Druck), Auszählung sichtbar wie ein Würfelwurf in Baldur’s Gate 3, gescheitertes Gesetz nach 10 Wochen zurück, Gesetze umkehrbar; Kritik: UI unlesbar, wenn etwas schiefgeht.",
          "Crusader Kings 3: Erfolgschance und Geheimhaltung sind zwei Zahlen, Fortschritt über Monate, Agenten; Ärger über „95 % und trotzdem gescheitert“ → wir zeigen ehrliche Spannen statt Prozent.",
          "Tropico 6 (Wahlrede mit Versprechen, die nachgehalten werden), Floor 13 (fester Takt: alle 21 Tage die Umfrage), Mad TV / Mad News (Publikum, Quote, Werbung bezahlt den Sender), Tycoon-Design (schnelle Rückkopplung, sichtbare Ursache in der Welt, überlappende Bögen, verborgene Systeme, Belohnung in mehreren Zeitmaßstäben), Reveal-Pacing (kurze Pause vor dem Ergebnis, überspringbar).",
          "Acht Regeln daraus: nichts verpassen · einstellen statt klicken · verborgen, aber fair · ehrliche Spannen · zwei Zahlen (Aussicht, Entdeckungsrisiko) · der zweite Anlauf ist der Normalfall · die Szene ist die Belohnung · ein Band, eine Werkstatt, eine Szene."
        ]},
        { h: "Agenda", s: "teils entschieden", items: [
          "Zeitband (ca. 36 px) direkt unter der oberen Kartenreihe über die ganze Breite; Heute links unter der Bezirks-Karte, die Zukunft kommt von rechts herein und wandert auf Heute zu – erreicht ein Pin das linke Ende, findet das Ereignis statt (Entscheidung des Users 09.11., Variante B). Die Uhr-Karte rechts oben zeigt Datum und Kalender.",
          "Pins nach Kraft: Politik rot (Rat, Anhörung, Wahl), Medien orange (Story, Kampagnenende, Recherche-Stufe), Wirtschaft gold (Ausschreibung, Vertrag, Haushalt); Kurztitel, Restzeit und Stand („4:5“, „Hale 46 %“). Eigene Einsätze mit Goldring vorn; unter einem Monat und offen → Puls.",
          "Hover = Karte mit Einzelheiten, Klick = War Room zu diesem Termin, Mausrad = Horizont 6 / 12 / 24 Monate, Strg + Mausrad = Größe. Die aufgeklappte Uhr-Karte zeigt dieselben Termine als Liste.",
          "Titelseite bei Wendepunkten (Island Gazette, eine Schlagzeile, zwei Unterzeilen, Bild), später je Sender in seiner Linie; drei Alarmstufen: Ticker für Kleines, Rand-Karte für alles mit eigenem Einsatz, Titelseite mit Pause für Wendepunkte.",
          "Lager-Pendel statt Political Climate: „us“ ↔ „them“ (Progress ↔ Tradition), darunter das Top-Thema der Stadt; Schlagzeilen bewegen das Pendel sichtbar, Gruppen-Einzelheiten in der aufgeklappten Karte."
        ]},
        { h: "War Room – die Kampagnen-Werkstatt", s: "Vorschlag", items: [
          "Ein Fenster (Look des New-Game-Fensters) für Politik, Medien und Wirtschaft; geöffnet über Agenda-Pin, Politics → Bills/Puppet/Hearings oder Media → Campaign. Links sechs Schritte, Mitte Einstellungen, rechts Aussicht, Risiko, Kosten, Launch.",
          "1 Goal: Pass/Block bill (Rat, 5 von 9), Win hearing (Ausschuss, 2 von 3), Elect puppet (Wähler), Sink rival, Lift image, Swing issue, Boom, Defend. 2 Vehicle: Puppet (Fund/Endorse/Run), Ziel-Sitze mit allem, was man weiß, eigene oder gemietete Sender, später Spokesperson.",
          "3 Message: Theme 1 + 2 (Jobs, Housing, Safety, Progress, Tradition, Taxes, Clean Hands; ab 1970 Environment, 1990 Opportunity, 2010 Climate), vier Tonart-Regler (Emotional ↔ Factual, Hope ↔ Fear, Positive ↔ Attack, Local ↔ City-wide), bis zwei Zielgruppen (Workers, Families, Seniors, Business; ab 1960 Youth, 1990 Commuters, 2010 Online crowd), Polarize 0–100 (eigene Seite lauter, Mitte und Glaubwürdigkeit leiden), optional ein nachprüfbares Versprechen.",
          "4 Mix: 40 Punkte auf Kanäle (Posters, Newspaper, Radio, Rallies, Door-to-door, Newsreel, TV, Mailers, Talk radio, Web, Social, Mobile, Feeds) – gesperrte grau mit Jahreszahl; der richtige Mix je Zielgruppe und Epoche ist die eigentliche Entdeckung.",
          "5 Tricks mit zwei Zahlen (Wirkung / Verdacht): Envelope (+50 Lean, Verdacht +15…+30, Ehrliche melden), Spike, Dossier drop (Timing!), Push poll (1992), Astroturf (2004), Buy editor. 6 Timing: Start, Dauer 1–6 Monate, Spitze 1–2 Monate vor dem Termin (Ansehen verfällt 10 %/Monat), ein Pivot für 20 % des Budgets.",
          "Rechts: Outlook als Spanne („Council 4–6 of 9 · needs 5“), Umfragen verengen sie; Rat-Halbkreis mit sicher/wackelt/dagegen; Exposure low/medium/high; Cost in Geld, Einfluss und Gefälligkeiten; Launch bzw. Update."
        ]},
        { h: "Verborgene Werte und Playbook", s: "Vorschlag", items: [
          "Mood je Bezirk: Gewicht je Thema (Summe 100) + Lager-Pendel −100…+100; gespeist aus Arbeitslosigkeit (Jobs), Mieten/Leerstand (Housing), Vorfällen (Safety), Smog (Environment ab 1970), Steuern, Skandalen (Clean Hands), Leitgesetz (Progress/Tradition). Stories und Kampagnen verschieben Salienz und Pendel, beides driftet monatlich zurück.",
          "Zielgruppen-Gewichte je Bezirk aus Einwohnern, Jobs und Gebäuden; Sitze bekommen Hot issue, Preis, Angst vor Entdeckung und Loyalität (Stimmung oder Haltung). Öffentlich: Haltung und Abstimmungsverhalten; per Dossier: Hot issue und Preis.",
          "Kanal × Zielgruppe × Epoche als feste Tabelle – partieübergreifend lernbar wie die Genre-Kombinationen in MGT2 (1958: Radio und Haustür erreichen Arbeiterfamilien, Zeitung und Plakate die Geschäftsleute, TV kaum; 1972 kippt es).",
          "Entdecken: Poll (±8 Punkte 1950, ±5 1970, ±3 1990, ±2 2010, ±3 2030), Focus group ab 1958 (Tonart-Vorlieben), eigener Sender (Leserbriefe kostenlos), Debrief (zwei größte Abweichungen).",
          "Playbook: jede Erkenntnis als Karte mit Bezirk, Epoche, Datum („Westbrook Seniors 1958: Safety > Progress, Fear-Ton, Radio“); Karten altern mit der Epoche („may be outdated“). Unser Spielerwissen aus MGT2 – im Spiel statt in einer Wiki."
        ]},
        { h: "Roll Call und Wahlabend", s: "teils entschieden", items: [
          "Ausschuss (3): sicherster Sitz zuerst (0,6 s), zweiter (1,5 s), bei 1:1 der dritte mit 3 s Pause; jede Karte mit einem Satz Begründung aus Haltung, Hot issue, Gefälligkeit oder Umschlag.",
          "Rat (9 = 6 Bezirkssitze + 3 Stadtsitze, 5 nötig): Halbkreis wie im Politik-Panel, sichere Sitze schnell, Wackelkandidaten langsam, der entscheidende zuletzt; Gleichstand → Stichentscheid des Bürgermeisters (NPC, folgt dem Stadt-Pendel) – unser Los aus Fugger II. Leertaste überspringt.",
          "Wahlabend (Bezirkssitze, Polizeichef): Bezirke melden nacheinander, laufende Summe, „projected“ ab 70 %, eigene Wetten hervorgehoben, 10–20 s.",
          "In der Welt: Passanten mit Schildern vor der City Hall, Zeitungsjunge ruft das Ergebnis, Plakate an Laternen, Kundgebung auf der Plaza. Der Wurf ist ehrlich (einer je Sitz, kein Nachbessern) – die Pause ist Inszenierung."
        ]},
        { h: "Debrief und zweiter Anlauf", s: "Vorschlag", items: [
          "Debrief-Karte nach Roll Call, Wahlabend oder Kampagnenende: Ergebnis, Kosten (Geld, Einfluss, Verdacht), Vergleich zur Aussicht, Bewegung je Zielgruppe, Effizienz je Kanal, Passung Thema ↔ Stimmung, Tonart, je Sitz die ausschlaggebende Größe.",
          "Lessons → 1–3 Playbook-Karten. Knopf „Plan next attempt“ öffnet den War Room mit den alten Einstellungen; Termin = nächste Sitzung (Ausschuss Quartal, Rat Dezember oder Sondersitzung für 15 Einfluss, Wahl 4 Jahre). Gefallene Gesetze frühestens in der nächsten Sitzung (Frostpunk-Abkühlzeit); Gefälligkeiten bleiben, Lobby verfällt.",
          "Versprechen aus der Botschaft werden nachgehalten: einlösen +10 Ansehen und Bindung des Bezirks, brechen −15 und die Medien erinnern daran."
        ]},
        { h: "Medien-Technik 1950–2030", s: "Vorschlag", items: [
          "Kanäle per Lizenz-Gesetz der Stadt (Leitgesetz-Mechanik: Spieler beschleunigen oder bremsen): 1950 Newspaper, Radio, Posters, Rallies, Door-to-door, Newsreel · 1960 TV s/w (bisher 1965 → vorziehen) · 1970 Color TV · 1978 Cable · 1988 Talk radio · 1990 Private TV · 1996 Web · 2008 Social · 2016 Mobile/Streaming · 2030 Feeds/AI.",
          "Methoden per Forschung im War Room: Polls ±8 (1950), Focus groups (1956), TV debate (1960), Attack spot (1964), Investigative unit (1974), Sound bites/Spin (1980), Push poll (1992), Astroturf (2004), Micro-targeting (2012), Bots (2016), AI content (2026), Synthetic personas (2030).",
          "Historische Anker (NTSC-Farbe 1953/54, Farbfernseher-Mehrheit frühe 1970er, Kennedy–Nixon 1960, „Daisy“ 1964, Watergate 1972–74, CNN 1980, Fairness Doctrine 1987, Web 1991/95, Facebook 2004, iPhone 2007) auf die Spiel-Epochen gerundet."
        ]},
        { h: "Fallbeispiele", s: "Vorschlag", items: [
          "High-rise permit 1958/59: Anlauf 1 (Progress + Taxes, Business owners, Zeitung/Plakate, 48 k$ + 20 Einfluss, Aussicht 4–6) scheitert 4:5 – Okafor kippt nach der Story „Shadows over Elm Row“. Debrief: Progress in West nur Rang 4, Business war schon dafür, Plakate in Northgate verpufft. Anlauf 2 (Housing + Jobs, lokal, Workers + Families, Radio 14 / Haustür 10, Versprechen „Rent cap stays“, Redakteur gekauft, Hale bringt ein, Sondersitzung) geht 5:4 durch – Okafor zuletzt. Rechnung: 146 k$, 35 Einfluss, Verdacht +5, Bodenwert ×1,8 auf 12 Feldern.",
          "Schmutzkampagne 1966: Probe gegen Dorsey (Polizeichef-Kandidat des Rivalen C) liefert den Beweis; Dossier drop im Oktober, Clean Hands + Safety, Fear/Attack, Families + Seniors, Own paper 14 / Radio 12 / TV 10, Polarize 40. Risiko: Enttarnung = „Smear campaign by Northgate“. Wahlabend: Dorsey 51 → 43 %, eigener Puppet gewinnt mit 47 %. Debrief: TV trug Seniors, Radio in East verpufft (gehört C).",
          "Boom 1972 (Tiefe offen): Progress + Opportunity, Families + Commuters, TV 18 / Zeitung 10 / Billboards 12, 90 k$ → Ansehen des Bezirks +14, Zuzug +6 %/Monat für 4 Monate, Bodenwert +7 %, Hotels +20 %; dritte Kampagne im Jahr nur 25 %."
        ]},
        { h: "Formeln (Startwerte)", s: "Vorschlag", items: [
          "Sitz-Neigung Lean = 35·Fit(Haltung, Gesetz) + 25·MoodFit(Bezirk, Themen) + 15·Favor/100 + 15·Pressure + 10·Pendel + Envelope(50) − 20·Fear·PublicHeat; Wurf ±12 je Sitz, einmal am Termin; dafür wenn Lean > 0. Aussicht = Monte-Carlo-Spanne (200 Würfe, 80 %-Band).",
          "Kampagnenstärke je Bezirk S = Σ Punkte_c · Reach_c(Zielgruppe, Epoche) · ThemeFit · ToneFit · Credibility · (1 − Sättigung); 50 k$ bei S = 1 ≈ +8 Ansehen (wie Machtdreieck), Salienz +S·6 je Monat, Pendel ±S·4·Polarize/100; dritte Kampagne im Jahr 25 %.",
          "Wahl wie Machtdreieck 5.4 (40 % Zufriedenheit + 30 % Ansehen + 20 % Kampagne + 10 % Gefälligkeiten; Verdacht > 60 halbiert); Polarize erhöht Turnout der eigenen Seite (+Polarize/10 %) und der Gegenseite (+Polarize/20 %).",
          "Exposure = Verdacht/100 · (0,5 + Tricks·0,25) + 0,3·fremde Recherchen gegen mich (low < 0,25, medium < 0,5). Kosten je Mix-Punkt 1950: Posters 0,8 k$, Newspaper 1,2, Radio 1,5, Rallies 1,0, Door-to-door 0,6, Newsreel 2,0, TV 4,0 (1960); Poll 8 k$ je Bezirk."
        ]},
        { h: "Einbindung ins heutige Menü", s: "Vorschlag", items: [
          "Agenda-Band unter den Karten, Mood-Karte statt Political Climate, Titelseite und Rand-Karten als Alarmstufen.",
          "Radialmenü: Politics-Einträge bleiben, Ring 3 bekommt überall „War Room“ (Lobby, Fix, Fund … wandern hinein); Media → Campaign öffnet den War Room direkt, neu Poll und Playbook.",
          "Benennung (User 09.11.: Deals/Contracts unklar): Deals → Arrangements (Schuldbuch), Contracts → Tenders (öffentliche Aufträge), Contracts unter Finances streichen; jeder Ring-2-Eintrag bekommt beim Überfahren eine Erklärzeile in der Mitte.",
          "Tasten: Klick auf Pin oder W = War Room, Leertaste in Szenen = überspringen."
        ]},
        { h: "Umsetzung in drei Stufen", s: "Vorschlag", items: [
          "Vorhanden: Anhörungen (DecideMonth, Yes/No, Arranged), Gesetze (Proposed, Lobby, Stimmen je Spieler, Dezember), Ausschuss-Mitglieder (Haltung, Ehrlichkeit, Gefälligkeit), Kandidaten, Stories, Recherchen (Stufe, Termin), Deals, Ausschreibungen (OpenUntil), Kalender-Ereignisse im HUD. Neu: FCampaignRec, FMoodRec je Bezirk, Mitglieder mit Hot issue/Preis/Angst/Loyalität, 3 Stadtsitze, Stimmen je Sitz, Playbook-Einträge, Methoden-Freischaltung, Kanal-Lizenzen.",
          "Stufe 1 – Agenda + Roll Call: Band aus den vorhandenen Terminen, Goldringe, Hover-Karte, Klick öffnet das Panel; Roll Call für Anhörungen und Rat mit Begründungssatz, Debrief-Karte, Mood-Karte.",
          "Stufe 2 – War Room: sechs Schritte, Stimmungs-Modell je Bezirk, Kanal-Tabelle 1950/1970, Umfragen, voller Debrief, Playbook, Titelseite, Versprechen. Stufe 3 – Methoden-Baum, Lizenzen als Gesetze, Wahlabend, Plakate/Kundgebungen/Schilder in der Welt, Stab, Boom-Kampagnen.",
          "Leistung: alles Daten und Slate; Monte-Carlo über 9 Sitze und Mood je Bezirk im Monatstick sind vernachlässigbar."
        ]},
        { h: "Offen", s: "Offen", items: [
          "Erledigt am 09.11.: Zeitband Heute links (B); Handel und Verträge später, Prinzip der Abhängigkeit festgehalten; Stab mit Arbeitsmarkt ja; Forschung wie in MGT2 ja – siehe Kompendium 1950–2030.",
          "TV-Lizenz 1960 statt 1965 (Änderung am Machtdreieck 6.1); Dauer der Abkühlzeit; Titelseite mit Pause ja/nein (Multiplayer nur beim Betroffenen); Stichentscheid Bürgermeister oder Los."
        ]}
      ]
    },
    {
      id: "spiel-v1", title: "Spielbare Fassung V1: das Machtdreieck im Spiel", file: "", status: "Vorschlag", updated: "2026-11-05",
      summary: "Wie das Konzept als Spiel läuft: Spielstand als Datensätze im GameState, Befehle über den Server, Darstellung je Client aus den Daten; Zeit in Monaten mit Epochen-Faktor; Wirtschaftstabelle je Gebäudeart; Politik, Medien und NPC-Gegner als Regeln des Monatsticks; Wertung am Endjahr; Oberfläche mit einem Aktions-Panel je Thema; Multiplayer als Listen-Server. Von Claude entworfen und gebaut (Auftrag des Users 05.11.: selbst entscheiden); die Zahlen sind Startwerte für den Spieltest.",
      sections: [
        { h: "Ziel und Grenzen der V1", s: "Vorschlag", items: [
          "Eine Partie von Mai 1950 bis zum Endjahr (1970 / 1990 / 2010 / 2030): sechs Bezirke, je ein Spieler (Mensch oder NPC), das Zentrum bleibt Stadt. Jeder Spieler hat zwei Kassen (Bezirkskasse als Amt, Privatvermögen als Unternehmer) und die vier Kapitalien.",
          "Spielbar heißt: Baufelder beantragen, Straßen und Gebäude bauen, Monatstick für Bevölkerung, Arbeit, Strom und Steuern, Politik und Medien mit echter Wirkung, NPC-Gegner, Endwertung, Hauptmenü, Hosten und Beitreten.",
          "Nicht in V1: Verträge zwischen Spielern (Strom, Güter), Bürgermeister spielbar, Bauen im fremden Bezirk, Güterketten, Stromtrassen als Bauteil – jeder Punkt hat im Modell schon einen Platz."
        ]},
        { h: "Architektur", s: "Vorschlag", items: [
          "Simulation nur auf dem Server: replizierte Listen (Spieler, Gebäude, Straßen, Felder, Anhörungen, Gesetze, Ausschuss, Berichte, Ausschreibungen, Recherchen, Gefälligkeiten, Kandidaten) und ein Monatstick. Ein Gebäude ist ein Datensatz (Familie, Variante, Straße, Station, Seite, Feld, Geschosse, Zustand), kein Actor.",
          "Befehle: jede Aktion ist ein Befehl (Typ, Zahlen, Text, Punkte) per Server-RPC über den PlayerState, auf dem Server geprüft und ausgeführt; Antwort als Einblendung per Client-RPC.",
          "Darstellung je Client: ein Sync-Subsystem fordert die Insel aus dem replizierten Seed an, spiegelt Feldfreigaben, Straßen (als Spielerstraßen) und Gebäude (Lot plus Static-Mesh-Komponenten in einer Ebene; NPC-Bauten ohne Straße im Knotenraster der Feldmitte).",
          "Katalog aus allen: je Variante Teile, Lotgröße, Anchor, Pivot, Geschosse; Spielwerte je Gebäudeart in einer C++-Tabelle mal Epochen-Faktor. Oberfläche liest je Bild einen Schnappschuss aus dem GameState."
        ]},
        { h: "Zeit und Wirtschaft", s: "Vorschlag", items: [
          "Monat = Grundtakt, Standard 8 s (Option 4 / 8 / 15 / 30), Tempo setzt der Host. Quartal = Ausschuss, Dezember = Rat, November alle vier Jahre = Wahl. Epochen-Faktor 1 / 3 / 8 / 15 / 25 auf Preise, Umsätze, Mieten, Steuern je Kopf.",
          "Start: Bezirkskasse 400 k$, Privatvermögen 150 k$, Kredit bis 300 k$ (0,5 % je Monat). Erstes Baufeld frei, alle weiteren per Anhörung.",
          "Gebäudearten mit Kosten, Unterhalt, Einwohnern, Jobs, Strom, Umsatz, Verschmutzung, Dienst, Zufriedenheit – z. B. Haus 12 k$ / 6 Einwohner, Mietshaus 60 k$ / 48, Kaufhaus 180 k$ / 60 Jobs / 7 200 $ Umsatz, Fabrik 250 k$ / 120 Jobs / 4 MW, Kraftwerk 300 k$ / 20 MW, Schule 90 k$ (Dienst für 3 000), Park 30 k$ (Zufriedenheit +4).",
          "Je Monat: Zuzug, Pendler, Strombilanz (Fehlbetrag teuer von der Stadt), Umsatz mal Nachfrage mal Tourismus mal Bildung, Mieten privat, Grundsteuer in die Kasse, Abgabe an die Stadt, Zufriedenheit, Bodenwert, Verfall von Ansehen und Verdacht, Einfluss aus Ämtern."
        ]},
        { h: "Politik, Medien, NPC", s: "Vorschlag", items: [
          "Anhörungen (Antrag, Einspruch, Lobby, Umschlag, Berufung), acht Gesetze mit Stufen, Wahl mit Kandidaten und Spenden, Ausschreibungen (Bieten, Lenken, Prüfen), Gefälligkeiten mit Ledger und Reinigung; Verdacht 30 / 60 / 85 mit Folgen.",
          "Sender (Zeitungshaus oder Anteile am Stadtanzeiger), Berichte aus Ereignissen mit Push / Spike / Spin / Gegendarstellung, Kampagnen mit abnehmendem Ertrag, Recherchen in drei Stufen mit Veröffentlichen / Anzeigen / Verteidigen, Werbung und Plakatwände.",
          "NPC-Profile Bauherr, Industrieller, Händler, Pressebaron, Schattenmann mit Bauprogrammen, Krediten, Geboten, Umschlägen, Recherchen gegen den Spitzenreiter und Kandidaturen."
        ]},
        { h: "Wertung und Oberfläche", s: "Vorschlag", items: [
          "Punkte am Endjahr: (Privatvermögen + halbe Kasse − Kredit) je Epoche + 70 % der Baukosten + Einfluss × 10 k + Ansehen × 5 k + Einwohner × 100 + Bodenwert × Einwohner / 10 − Verdacht × 2 k. Der Erste bekommt das Zentrum der Macht.",
          "Radialmenü wählt das Thema, dazu ein Aktions-Panel (Titel, Abschnitte, Zeilen mit Text, Wert, Knopf); Bauen über Katalog und Geister-Lot; Lobby und Endwertung in der Mitte; Hauptmenü mit Neues Spiel / Beitreten / Beenden und gespeicherten Optionen."
        ]},
        { h: "Offen", s: "Offen", items: [
          "Zahlen abstimmen (Kurse, Schwellen, Preise, NPC-Tempo), Spielspaß der Wertung, Verträge zwischen Spielern, Bürgermeister, Kleidung und Autos je Epoche im Zusammenspiel mit dem Spieljahr."
        ]}
      ]
    },
    {
      id: "machtdreieck", title: "Das Machtdreieck: Wirtschaft, Politik, Medien", file: "", status: "Entschieden", updated: "2026-11-05",
      summary: "Die Wirtschaft erzeugt Geld, die Politik verteilt Rechte, die Medien verteilen Aufmerksamkeit. Jede Kraft braucht die beiden anderen und kann sie beschädigen; Verdacht ist die Bremse für alles Krumme. Zehn Untermenüs, vier Kapitalien, sieben Bezirksrichtungen und Startzahlen zum Abstimmen. Vom User am 05.11. angenommen; die Zahlen werden im Spiel Stück für Stück abgestimmt.",
      diagrams: [
        { id: "tri", note: "Die drei Kräfte und ihre sechs Kanten. Gestrichelt: Politik dämpft den Verdacht (Polizei, Richter), Medien verstärken ihn (Recherche), die Wirtschaft bezahlt beides." },
        { id: "meter", note: "Die vier Kapitalien je Spieler mit Quellen, Senken und Verfall. Verdacht ist nicht öffentlich – sichtbar wird er erst, wenn Medien eine Story daraus machen." },
        { id: "menu", note: "Die Untermenüs des Users (Ring 2) und die vorgeschlagenen Aktionen (Ring 3); Namen im Spiel englisch. Ausschreibungen als sechster Politik-Punkt – vom User bestätigt (05.11.)." },
        { id: "era", note: "Epochen-Index: wie gut jede Richtung je Epoche trägt (Vorschlag). Wer 1950 mit Kohle groß wurde, muss sich 1990 neu erfinden – oder per Politik und Medien gegenhalten." },
        { id: "bezirke", note: "Beispielpartie: sechs Spieler, sechs Richtungen aus den Lagestärken des Seeds. Pfeile = Hauptlieferung an den Nachbarn." },
        { id: "takt", note: "Der Takt des Spiels: Monat, Quartal, Jahr, Wahl alle vier Jahre, Leitgesetz je Epoche." },
        { id: "chain", note: "Ein Beispiel mit Zahlen: Spieler A gewinnt Bodenwert und verliert Ansehen und Sitz – alle zehn Menüs greifen ineinander." }
      ],
      sections: [
        { h: "Auftrag des Users (05.11.)", s: "Entschieden", items: [
          "Politik-Menü: Kandidaten, Gesetze (Bills), Anhörungen des Bauausschusses, Abstimmungen, Bestechung. Medien-Menü: Sender/Verlage, Berichte, Kampagnen, Recherchen, Werbung.",
          "Politik und Medien gleich stark, aber mit heftigem Einfluss aufeinander; keine Seite zu komplex oder zu schwer.",
          "Die Bezirkswirtschaft ist die dritte Kraft: läuft im Hintergrund, finanziert Umschläge und Kampagnen, wird von Politik und Medien gelenkt und wirkt zurück – ein Kreislauf im Gleichgewicht.",
          "Bezirke unterscheiden sich durch die Investitionsentscheidung des Spielers (Energie, Produktion, Bau …)."
        ]},
        { h: "Die vier Kapitalien", s: "Vorschlag", items: [
          "Geld: Bezirkskasse und Privatvermögen – Quellen Steuern, Mieten, Gewinne, Verträge, Export, Werbeerlöse; Senken Unterhalt, Importe, Zinsen, Strafen, Spenden, Umschläge.",
          "Einfluss 0–100: aus Ämtern (je Monat), Spenden, gewonnenen Abstimmungen, Gefälligkeiten; ausgegeben beim Lobbyieren (10–25 je Vorgang); −2 je Monat ohne Amt.",
          "Ansehen −100 bis +100, je Spieler und je Bezirk: aus Berichten, Kampagnen, Zufriedenheit; Skandale −15 bis −40; jeden Monat 10 % Richtung 0 (Nachrichtenzyklus).",
          "Verdacht 0–100: Umschlag +15…+30, Insider-Umwidmung +15, Story unterdrücken +5, Vertuschung +10; −2 je Monat, Anwälte (Geld), wohlgesonnene Polizei (Einfluss).",
          "Schwellen: 30 Gerüchte (Medien dürfen eine Story anstoßen), 60 Ermittlung (Bußgelder, Verdacht in der Statusleiste), 85 Verfahren (Amtsverlust, Genehmigungen zurück, Vermögensstrafe, Sperrfrist)."
        ]},
        { h: "Sechs Kanten – Umwandlungskurse", s: "Vorschlag", items: [
          "Geld → Einfluss: 100 k$ Spende ≈ +5 Einfluss + 1 Gefälligkeit (öffentlich, abnehmend); Umschlag ≈ 5–10 % des Vorteils (Verdacht, Spur).",
          "Einfluss → Geld: Genehmigung, Umwidmung, Auftrag, Zuschuss, Steuerregel für 10–25 Einfluss; für sich selbst = Interessenkonflikt (Verdacht +15).",
          "Geld → Ansehen: 50 k$ Kampagne ≈ +8 × Reichweite × Glaubwürdigkeit; 20 k$ Werbung ≈ +10 % Nachfrage für 3 Monate.",
          "Ansehen → Geld: +50 Ansehen ≈ +20 % Zuzug, +10 % Bodenwert, +30 % Tourismus, −1 Punkt Kreditzins – langsam, hält nur bei Pflege.",
          "Einfluss → Ansehen: Amt als Bühne (+1 je Monat, Einweihung +3); Amtsmissbrauch wird zur Story. Ansehen → Einfluss: Wahlen, Druck auf den Ausschuss, Bürgerbegehren.",
          "Ehrlich = langsam und sauber; krumm = 2–3× schneller plus Verdacht. Der Spieler wählt bei jeder Aktion."
        ]},
        { h: "Balance-Regeln", s: "Vorschlag", items: [
          "Jede Kante hat eine Gegenkante: Pressegesetz, Lizenzen, Polizei gegen Recherche, Kampagne, Umfrage – gleich teuer, beides braucht Geld.",
          "Verdacht ist die Bremse: Medien verstärken ihn (Recherche → Story → Verfahren), Politik dämpft ihn (Polizei, Richter, Ausschuss). Nur Medien = Schwerter ohne Schild, nur Politik = Schild ohne Schwerter.",
          "Eigene Bremsen: Glaubwürdigkeit je Sender (gekaufte Story −5, bestätigte Enthüllung +5; Wirkung = Reichweite × Glaubwürdigkeit), Legitimität (Zufriedenheit, Wahlen), Unterhalt und gesättigte Märkte.",
          "Abnehmender Ertrag: die dritte Kampagne im Jahr bringt ein Viertel der ersten, die dritte Spende an denselben Kandidaten fast nichts.",
          "Die Spitze zieht Blicke an: Wer vorn liegt, sammelt Verdacht 50 % schneller und ist Lieblingsziel der NPC-Journalisten.",
          "Keine Totalblockade (Aufsichtsprüfung nach dreimaliger unbegründeter Ablehnung); die Stadt ist Lückenfüller: Stadtanzeiger (neutral, nie kaufbar), unabhängige Prüfstelle, Festland."
        ]},
        { h: "Politik: sechs Untermenüs", s: "Vorschlag", items: [
          "Candidates – wer um Ämter antritt (Ausschuss 3 Sitze, Rat, Polizeichef, später Bürgermeister), mit Agenda, Bindungen und Leichen im Keller. Run · Endorse · Fund · Dossier.",
          "Bills – stadtweite Regeln: Gewerbesteuer, Zoll, Umweltauflagen, Mietdeckel, Höhenlimit, Subventionen, Sender-Lizenzen, Pressegesetz, Vergabeordnung; je Epoche ein Leitgesetz der Stadt, das Spieler bremsen oder beschleunigen können. Propose · Lobby · Amend · Forecast.",
          "Hearings – der Bauausschuss je Baufeld: Freigabe, Umwidmung, Höhen-Ausnahme, Großbauten. Antrag → Termin → Einwände → 3 Stimmen; der klassische Shady-Zug (privat kaufen, als Amt umwidmen, Bodenwert ×3, Verdacht +15). Apply · Object · Lobby · Arrange · Appeal.",
          "Votes – Kalender: Wahlen alle 4 Jahre, Rat jährlich, Ausschuss im Quartal. Wahlformel: 40 % Zufriedenheit + 30 % Ansehen + 20 % Kampagne + 10 % Gefälligkeiten; Verdacht > 60 halbiert. Cast · Forecast · Call in favor · Schedule.",
          "Arrangements (Bestechung) – Umschlag, Posten für den Neffen, günstige Wohnung, Firmenanteil, Wahlkampfspende; jede Form hinterlässt eine andere Spur; ehrliche NPCs melden (Verdacht +20). Bestechungsgeld ist eine echte Geldsenke. Offer · Collect · Ledger · Clean up.",
          "Tenders (sechster Punkt, vom User bestätigt) – öffentliche Aufträge: Straßen, Klinik, Netz, Sanierungswellen; fair (günstigstes Angebot) oder freihändig (Einfluss). Bid · Steer · Inspect · Overview."
        ]},
        { h: "Medien: fünf Untermenüs", s: "Vorschlag", items: [
          "Outlets – 1950 Zeitung + Radio, 1965 TV (Fernsehturm existiert), 1990 Privat-TV, 2010 Online, 2030 Feeds; je Sender Reichweite je Bezirk, Glaubwürdigkeit, Haltung, Eigentümer. Zeitungshaus bauen oder Anteile kaufen (25 % Linie, 51 % Kontrolle); Missbrauch senkt Glaubwürdigkeit und damit Wirkung und Einnahmen.",
          "Stories – Ereignisse der Simulation (Baustelle fertig, Stau, Stromausfall, Verdachtsschwelle) werden zu Berichten mit Ton und Ziel; Eigentümer oder gekaufter Redakteur: Push, Spike (Verdacht +5), Spin. Wirkung auf Ansehen und Wirtschaft („neue gute Adresse“ → Zuzug, Bodenwert). Echte Schlagzeilen im News-Panel.",
          "Campaign – Meinung kaufen: für dich (Wahl), den Bezirk (Zuzug, Touristen), ein Gesetz, gegen einen Rivalen (bei Aufdeckung eigenes Ansehen −). Kandidaten = wer, Kampagne = Werkzeug. Plakate an Laternen, Kundgebung auf der Plaza.",
          "Investigations – in beide Richtungen: Journalist oder Detektiv auf einen Rivalen (Gerücht → Hinweis → Beweis, je Stufe 1–3 Monate und 10–40 k$, Chance ∝ Verdacht des Ziels – Ehrliche sind sicher); Verteidigung: sehen, wer gräbt, Anwälte, Gegen-Story, Sender kaufen, Polizei verzögern. Beweise veröffentlichen, anzeigen oder als Druckmittel halten. NPC-Journalisten laufen sichtbar durch die Stadt.",
          "Ads – Nachfrage für eigene Firmen (+10…+25 % für 3 Monate); Werbefläche als Produkt: Plakatwände an belebten Ecken verdienen aus echten Passanten- und Verkehrszahlen (Baustellen-Planen, Skyline-Schriftzüge). Werbeetats finanzieren die Sender – die Wirtschaft trägt die Medien, ohne sie zu besitzen."
        ]},
        { h: "Wirtschaft: sieben Richtungen", s: "Vorschlag", items: [
          "Keine Startklassen: jeder Spieler wählt Schwerpunkte (realistisch zwei Haupt- und eine Nebenrichtung), der Rest kommt von Nachbarn oder teurer von der Stadt.",
          "Energie (Berg → Wasserkraft; Zufriedenheit und Bodenwert sinken, Umweltgesetze treffen zuerst), Produktion (viel Strom und Arbeiter, 1990 wandert Industrie ab), Bau & Immobilien (Ausschreibungen, jede Sanierungswelle), Wohnen & Bildung (Pendler, Fachkräfte, Akademiker), Handel & Logistik (Hafen, Zölle), Finanzen & Dienste (Kredite, Sender, braucht Akademiker), Tourismus & Öffentliches (Fremdgeld, erst ab 1970 lohnend).",
          "Fairness: der Seed gibt jedem Bezirk mindestens zwei Lagestärken (Berg, Küste, Wald, Fluss, Zentrumsnähe, Brückenkopf, flaches Land).",
          "Epochen-Index 1–5 je Richtung und Epoche (siehe Diagramm): keine Richtung ist immer vorn; das Leitgesetz jeder Epoche verschiebt die Werte und ist selbst ein Spielzug.",
          "Beispielpartie: Nord Energie, Ost Handel/Hafen, Süd Produktion, West Wohnen & Bildung, zentrumsnah Finanzen bzw. Bau + Tourismus – jeder braucht mindestens drei andere; gleiche Wahl sättigt den Markt.",
          "Hebel der Politik an der Wirtschaft: Steuersätze, Zuschüsse (Unterhalt −50 %), Zölle (+20 % Importpreis), Umweltauflagen (+15 % Kosten), Mietdeckel, Freigabe/Umwidmung (Bodenwert ×1,5…×3), Ausschreibungen, Lizenzen. Hebel der Medien: Zuzug ±20 %, Bodenwert ±10 %, Tourismus ±30 %, Kundschaft ±15 %, Kreditzins ±1 Punkt, Werbung, Werbeerlöse, Boykott-Story (−30 % für 3 Monate), Ermittlungen (Bußgeld bis 10 % des Vermögens)."
        ]},
        { h: "Größenordnungen 1950", s: "Vorschlag", items: [
          "Start: Bezirkskasse 500 k$, Privatvermögen 50 k$ (knapp, wie entschieden). Wohnhaus 20 k$, Mietshaus 60 k$, Kohlekraftwerk 400 k$, Fabrik 250 k$, Zeitungshaus 180 k$, Hafen 600 k$.",
          "Steuern 5 $ je Einwohner und Monat, 20 % Anteil an die Stadt; Gewerbesteuer 15 % vom Gewinn am Standort. Strom bei der Stadt 3× Eigenpreis, Güter vom Festland 2× Nachbarpreis.",
          "Monatsbilanz 1955 (2 000 Einwohner, Fabrik, Kraftwerk): +10 k Steuern, +8 k Stromverträge, +6 k Gewerbe; −9 k Unterhalt, −2 k Abgabe, −5 k Schule/Klinik ≈ +8 k$. Eine Kampagne (50 k) kostet ein halbes Jahr Überschuss, ein Umschlag (20 k) ein Quartal – Politik und Medien sind teuer, das ist gewollt.",
          "1975 ×3, 1995 ×8, 2015 ×15 (Inflation + Wachstum; Katalogpreise ziehen mit)."
        ]},
        { h: "Zeitstruktur", s: "Vorschlag", items: [
          "Monat: Wirtschaftstick, Verfall von Ansehen (10 %) und Verdacht (−2), Einfluss aus Ämtern, 2–5 Stories aus Ereignissen.",
          "Quartal: Ausschusssitzung (Anhörungen), Umfragen, Werbekampagnen laufen aus. Jahr: Haushalt der Stadt (NPC), Zuschüsse, Ratssitzung über Gesetze, Verbände stellen Forderungen.",
          "Alle 4 Jahre (1954, 1958 …): Wahlen für Ausschuss, Rat, Polizeichef; Bürgermeister ab 1990 (Offen). Epoche: Leitgesetz, Sanierungswelle, neue Medientypen, Index verschiebt sich."
        ]},
        { h: "Drei Spielstile", s: "Vorschlag", items: [
          "Der ehrliche Bauherr: Wirtschaft, kein Verdacht – sicher vor Recherchen, verwundbar durch Blockade im Ausschuss (Gegenmittel: Öffentlichkeit und Aufsicht).",
          "Der Königsmacher: Ausschuss, Rat, Gefälligkeiten, nimmt Wegzoll – stark gegen Bauherr und Pressebaron (Pressegesetz, Polizei), verwundbar durch Recherchen (viele Spuren) und Wahlen bei schlechtem Ansehen.",
          "Der Pressebaron: Sender, Kampagnen, Recherchen, Werbefläche – stürzt Königsmacher, verwundbar durch Pressegesetz, Glaubwürdigkeitsverlust und Geldmangel.",
          "Kein Stil gewinnt allein; Mischen ist der Normalfall, die Reinformen sind die Pole."
        ]},
        { h: "Umsetzung", s: "Vorschlag", items: [
          "Drei C++-Subsysteme ohne Actors (Economy, Politics, Media) mit Monatstick; je Spieler FPlayerStanding { Money, Influence, Reputation, Heat }, je Bezirk Ansehen, Zufriedenheit, Bodenwert; Ereignis-Bus aus allen Systemen → Stories → News-Panel.",
          "Radialmenü: Politics → Candidates, Bills, Hearings, Votes, Arrangements, Tenders; Media → Outlets, Stories, Campaign, Investigations, Ads; Ring 3 = Aktionen (umgebaut, noch ohne Wirkung).",
          "Reihenfolge: V1 Anhörungen + Berichte + Werbung (Baufelder, News-Panel, Planen und Passantenzahlen existieren) → V2 Gesetze, Abstimmungen, Kalender, NPC-Ausschuss → V3 Kandidaten/Wahlen, Kampagnen, Sender → V4 Gefälligkeiten, Recherchen, Ausschreibungen."
        ]},
        { h: "Offen", s: "Offen", items: [
          "Bürgermeister spielbar – ab wann (Vorschlag 1990)? Siegbedingung(en): Vermögen, Einfluss, Ansehen, Bezirksgröße oder Punkte aus allen vier?",
          "Verbände/Lobbys, Umfragen, Wahlversprechen, Dossiers als Druckmittel – Ideen ohne Mechanik (siehe Ideenpool).",
          "Genaue Zahlen: Startwerte stehen, Feinabstimmung Stück für Stück im Spiel (Prototyp des Monatsticks)."
        ]},
        { h: "Entscheidungen des Users (05.11.)", s: "Entschieden", items: [
          "Ausschreibungen sind der sechste Politik-Punkt – im Radialmenü unter Politics (Tenders), nicht unter Finanzen.",
          "Die Zahlen (Kurse, Schwellen, Preise, Verfall) werden als Startwerte übernommen und Stück für Stück im Spiel angepasst – kein Balancing am Reißbrett.",
          "„Die Spitze zieht Blicke an“ (Spitzenreiter sammelt Verdacht 50 % schneller) wird ausprobiert; ob Regel und Faktor passen, entscheidet der Spieltest.",
          "Damit ist das Konzept Arbeitsgrundlage; offen bleiben Bürgermeister, Siegbedingungen und die Ideen ohne Mechanik."
        ]}
      ]
    },
    {
      id: "oekosystem", title: "Die Stadt als Ökosystem", file: "", status: "Vorschlag", updated: "2026-11-03",
      summary: "Jeder trägt etwas bei, jeder braucht etwas. Sieben Säulen, Geldflüsse, zwei Rollen des Spielers, Epochen verschieben das Gleichgewicht.",
      diagram: "eco",
      sections: [
        { h: "Was die echte Welt sagt", s: "Recherche", items: [
          "Wirtschaftskreislauf: Haushalte ↔ Firmen, dazu Staat (Steuern/Ausgaben), Banken (Sparen → Kredit), Ausland (Export rein, Import raus).",
          "Exportbasis-Theorie: Eine Stadt wächst durch das, was sie nach außen verkauft. Jeder Export-Job zieht 1–2 lokale Jobs nach.",
          "Spiel-Ökonomien: Geld braucht Quellen und Senken; Spezialisierung entsteht nur, wenn Rollen voneinander abhängen und Märkte satt werden."
        ]},
        { h: "Sieben Säulen", s: "Vorschlag", items: [
          "Menschen (Wohnen) – Arbeitskraft, Kaufkraft, Steuern.",
          "Versorgung – Strom, Wasser, Wärme.",
          "Rohstoffe & Produktion – Baustoffe, Konsumgüter.",
          "Bau & Immobilien – Gebäude, Mieten.",
          "Handel & Logistik – Läden, Hafen, Export/Import.",
          "Dienstleistung & Finanzen – Kredit, Versicherung, Medien.",
          "Öffentliches – Bildung, Gesundheit, Sicherheit, Freizeit."
        ]},
        { h: "Zwei Rollen des Spielers", s: "Vorschlag", items: [
          "Amt: verwaltet die Bezirkskasse (gehört ihm nicht).",
          "Unternehmer: Privatvermögen in Firmen und Immobilien – auch in fremden Bezirken.",
          "Der Interessenkonflikt ist das Spiel: günstig kaufen, dann als Amt freigeben → Gewinn und Verdacht."
        ]},
        { h: "Epochen verschieben das Gleichgewicht", s: "Vorschlag", items: [
          "1950 Wiederaufbau: Wohnraum, Baustoffe, Kohle.",
          "1970: Autos, Konsumgüter, Ölkrise.",
          "1990: Dienstleistung, Finanzen.",
          "2010: Bildung, Lebensqualität, saubere Energie."
        ]},
        { h: "Offen", s: "Offen", items: ["Simulationstiefe (Vorschlag: abstrakt je Bezirk und Monat).", "Umfang Version 1.", "Siegbedingungen, Rolle des Zentrums der Macht."] }
      ]
    },
    {
      id: "bewohner", title: "Bewohner – Mitte des Ökosystems", file: "", status: "Vorschlag", updated: "2026-11-03",
      summary: "Die einzige Säule, die alle anderen speist und von allen etwas braucht. Daran misst sich der Wert eines Bezirks.",
      sections: [
        { h: "Was Bewohner liefern", s: "Vorschlag", items: ["Arbeitskraft in drei Stufen: einfache Arbeiter, Fachkräfte, Akademiker.", "Kaufkraft für Läden und Dienstleister.", "Steuern in die Bezirkskasse."] },
        { h: "Was Bewohner brauchen (Stufen)", s: "Vorschlag", items: [
          "Grundbedarf: Wohnung, Strom, Wasser, Lebensmittel.",
          "Arbeit in erreichbarer Nähe (Pendeln kostet Zufriedenheit).",
          "Versorgung: Schule, Arzt, Sicherheit.",
          "Lebensqualität: Parks, Freizeit, saubere Luft.",
          "Status (spätere Epochen): Auto, Elektronik, gute Adresse."
        ]},
        { h: "Zufriedenheit steuert Zu- und Wegzug", s: "Vorschlag", items: [
          "Zufriedene Bewohner ziehen zu → mehr Steuern, höherer Bodenwert, mehr Nachfrage.",
          "Kraftwerk, Fabrik, Lärm → Wegzug, Bodenwert fällt.",
          "Bildung macht aus Arbeitern Fachkräfte – ein Wohn-/Bildungsbezirk wird so zum Lieferanten."
        ]}
      ]
    },
    {
      id: "wirtschaft", title: "Bezirkswirtschaft", file: "", status: "teils entschieden", updated: "2026-11-03",
      summary: "Haushalt von der Stadt, Steuern wie bei Anno, Energie als erster Engpass, Verträge, Spezialisierung.",
      sections: [
        { h: "Haushalt", s: "Entschieden", items: ["Die Stadt (NPC) stellt jedes Jahresende den Haushalt auf.", "Wer Lasten trägt (z. B. Kraftwerk), bekommt Zuschüsse.", "Startkapital ist knapp."] },
        { h: "Einnahmen wie bei Anno", s: "Entschieden", items: ["Wohnhäuser → Einwohner → Steuern in die Bezirkskasse.", "Anteil geht an die Stadt.", "Bezirk zahlt Energie, Schulen, Krankenhäuser, Parks (Vorbild Deutschland)."] },
        { h: "Energie", s: "Entschieden", items: ["Die Stadt liefert wenig und teuer – alles Selbstproduzierbare ist bei der Stadt kaufbar, nur teurer.", "Kohle (1950) → später Atom; Wasserkraft am Berg.", "Überschuss verkaufen per Vertrag und Stromtrasse."] },
        { h: "Spezialisierung", s: "Entschieden", items: ["Energie, Industrie, Wohnen (Pendler), Finanzen, Handel/Hafen.", "Pendler zahlen Steuern am Wohnort, Firmengewinn wird am Standort versteuert."] },
        { h: "Offen", s: "Offen", items: ["Steuerarten und -sätze.", "Vertragsmechanik.", "Wie der Spieler Privatvermögen aufbaut."] }
      ]
    },
    {
      id: "ui", title: "Spieler-UI", file: "", status: "Layout entschieden", updated: "2026-11-03",
      summary: "Status oben, Baumenü unten, Objekt-Panel am angeklickten Objekt, Overlays und Meldungen. Höhendeckel unter den Wolken.",
      sections: [
        { h: "Layout", s: "Entschieden", items: ["Oben: Statusleiste (Bezirkskasse und Privatvermögen getrennt, Datum, Einwohner).", "Unten Mitte: Baumenü mit Kategorien.", "Rechts: Objekt-Panel nur bei Klick.", "Unten rechts: Overlays, oben rechts: Meldungen."] },
        { h: "Baumenü", s: "Vorschlag", items: ["Straßen, Baufelder, Wohnen, Gewerbe & Handel, Industrie, Öffentlich, Privat.", "Nach Epoche gefiltert."] },
        { h: "Offen", s: "Offen", items: ["Bau wartet auf das Wirtschaftskonzept.", "Wie viel Politik/Medien in Version 1."] }
      ]
    },
    {
      id: "epochen", title: "Epochen-Umbau", file: "", status: "entschieden", updated: "2026-11-04",
      summary: "Jedes Gebäude startet 1950 und wird in vier Stufen modernisiert (1970, 1990, 2010, 2030) – im Zentrum automatisch, in den Bezirken per Upgrade-Knopf.",
      sections: [
        { h: "Zentrum", s: "Entschieden", items: ["Kein Spieler baut dort; die Jahreszahl löst den Umbau aus.", "Startbestand nur 1950er (Hochhaus, Kaufhaus, 1–2 Krankenhäuser, vereinzelt Cafés); Hochhaus zweimal sanierbar 1950 → 1970 → 1990.", "Stück für Stück über 10 Jahre, Normalfall Sanierung.", "Später legt die Stadt 2 oder 4 Grundstücke zusammen (Abriss + großer Neubau) – nie durch Spieler."] },
        { h: "Bezirke", s: "Entschieden", items: ["Spieler baut frei, darf abreißen.", "Upgrade kostet echtes Geld – bewusste Entscheidung."] }
      ]
    },
    {
      id: "baufelder", title: "Bodenschichten & Baufelder", file: "", status: "entschieden", updated: "2026-10-29",
      summary: "1950 sind die Bezirke leer. Der Generator teilt jeden Bezirk in ~9 gleich große Baufelder; der Spieler lässt sie freigeben und baut darauf.",
      sections: [
        { h: "Start", s: "Entschieden", items: ["Bezirke ohne Altbau (Fairness).", "Ring und Hauptadern gehören der Stadt.", "Kein Feld ist anfangs frei – jeder wählt selbst."] },
        { h: "Schichten", s: "Entschieden", items: ["Wiese/Wald (noch nicht frei) → Küstenstreifen (nie bebaubar) → freigegebenes Baufeld (Rasen) → Lot."] }
      ]
    }
  ],

  // ---------- Entscheidungen ----------
  decisions: [
    { date: "2026-11-10", area: "Spiel", title: "Eine Main-Session orchestriert, drei Kanban-Sessions arbeiten das Board ab", why: "User 10.11.: Main vergibt EDITOR-/GAME-Slots (hoechstens ein Host+Client-Paar am PC, GPU-Absturz mit vier Instanzen), leitet Bugs an die zustaendige Session und baut/veroeffentlicht Patches nur nach Rueckfrage; Kanban-Sessions committen nur eigene Dateien und melden „ready for patch“." },
    { date: "2026-11-09", area: "Spiel", title: "Online über Epic Online Services mit Raumcode statt Portfreigabe oder eigenem fly.io-Relay", why: "User 09.11.: Freunde sollen ohne Technik beitreten können. Ein eigener Relay (wie fly.io bei Starhunter) müsste den ganzen Spielverkehr tragen und kostet Betrieb; EOS ist kostenlos, in Unreal schon als NetDriver vorhanden und übernimmt NAT-Durchstich und Relay. Steam bleibt später per Config möglich, LAN/IP bleibt für das Heimnetz." },
    { date: "2026-11-09", area: "Spiel", title: "Ratsabstimmung jedes Quartal statt nur im Dezember; Antrag braucht zwei Monate Vorlauf", why: "Claude in der Nachtschicht: Ein Jahr Wartezeit je Abstimmung hätte die Schleife Agenda → War Room → Roll Call → Debrief zu selten laufen lassen. Vier Sitzungen im Jahr geben vier Spannungsmomente, die zwei Monate Vorlauf geben jeder Kampagne Zeit zu wirken. Ereignis-Gesetze kommen zur nächsten Sitzung." },
    { date: "2026-11-09", area: "Spiel", title: "Verborgene Sitz-Werte werden nur durch Fixer, Umfrage oder einen Handel bekannt", why: "Claude: Lieblingsthema, Preis, Angst und Ehrlichkeit jedes Sitzes sind pro Partie zufällig (Seed). Die Aussicht im War Room zeigt sie als „?“ und verbreitert die Spanne – das ist die Entdeckungsschleife aus Mad Games Tycoon 2; ein Fixer im Stab liest einen Sitz für 3 k$, eine Umfrage des Bezirks verrät das Thema seines Sitzes, ein gezahlter Umschlag den Preis." },
    { date: "2026-11-09", area: "UI", title: "Roll-Call-Szene nur bei eigenem Einsatz und in der Wahlnacht; sonst eine Zeile", why: "Claude: Vier Abstimmungen im Jahr mit bis zu fünf Anträgen – als Szene für jede wäre das der Klatter, den der User nicht will. Eigener Antrag, Kampagne, Umschlag, Lobby, Kandidatur oder ein eigener Sitz = Szene; alles andere eine Zeile (Toast/Zeitung). Leertaste deckt auf." },
    { date: "2026-11-09", area: "UI", title: "Zeitband: Heute links, die Zukunft kommt von rechts herein", why: "Antwort des Users auf die offene Frage des Kampagnen-Konzepts: Variante B. Das Band bleibt unter den Karten über die ganze Breite, die Uhr-Karte rechts oben zeigt Datum und Kalender. Die Variante „Band läuft in die Uhr“ ist verworfen; das Mockup im Konzept ist umgezeichnet." },
    { date: "2026-11-09", area: "Konzept", title: "War Room angenommen; Stab über einen Arbeitsmarkt wie Angestellte in Mad Games Tycoon", why: "User 09.11.: „Das mit dem War Room finde ich super.“ Für den Stab (Campaign Manager, Pollster, Fixer …) gilt das Angestellten-Prinzip, das ganz am Anfang schon überlegt war: je besser die Leute, desto besser die Ergebnisse; ein Arbeitsmarkt mit vielen Durchschnittlichen und ab und zu einem Guten – wer ihn zuerst wegschnappt, hat ihn. Rollen, Sterne, Quartalsmarkt und Abwerben sind Vorschlag im Kompendium." },
    { date: "2026-11-09", area: "Konzept", title: "Medien-Technik wird erforscht wie in Mad Games Tycoon: erst verfügbar, dann selbst erforschen", why: "User 09.11.: Entwicklung über die Jahre ist cool; vielleicht muss man Dinge selbst erforschen wie in MGT2 mit eigener Forschungsabteilung – auch bei den Medien. Vorschlag: das Lizenz-Gesetz der Stadt macht einen Kanal verfügbar, die eigene Research desk mit Researchern schaltet ihn frei (Forschungspunkte und Geld), Methoden ebenso." },
    { date: "2026-11-09", area: "Wirtschaft", title: "Handel und Verträge kommen später; festgehalten ist das Prinzip der gegenseitigen Abhängigkeit der Bezirke", why: "User 09.11.: Handeln wäre cool (erst per Lkw über die Brücke, später über einen Hafen – man muss erst ans Meer kommen), Verträge mit NPCs und Spielern auch, aber das ist komplexer und wird hinten angestellt. Festgehalten: kein Bezirk gleicht dem anderen – Bewohner-Bezirke liefern Arbeiter, Industrie liefert Produkte, die woanders gebraucht werden, jeder hängt von jedem ein wenig ab." },
    { date: "2026-11-09", area: "Spiel", title: "Der Spieler ist ein Tycoon mit vielen Wegen zum Reichtum, der sein Geld in Politik und Medien steckt", why: "User 09.11.: Vorbild sind die Tech-Milliardäre – reich geworden durch Autos und Raketen, ein Handelshaus oder ein Social-Media-Imperium. Es muss viele Möglichkeiten geben, Geld zu verdienen; am Ende will man der Typ sein, der viel Geld hat und es in Politik und Medien steckt, um seine Ziele zu erreichen. Im Kompendium als acht Wege festgehalten (Landlord, Industrialist, Energy baron, Merchant, Banker, Media mogul, Host, Contractor)." },
    { date: "2026-11-09", area: "Spiel", title: "Der Anfang als kleines Licht: der Rat entscheidet ohne einen, erst mit Geld dreht man es später", why: "Frage des Users, ob am Anfang unwichtige oder wichtige Entscheidungen fallen – seine Neigung: wichtige, die man mitbekommt wie in einem kleinen Tutorial und mit denen man leben muss, bis man das Geld hat, sie zu seinen Gunsten zu ändern. Als Richtung festgehalten; Vorschlag: drei Akte (Small light 1950–54, Player, Tycoon), frühe Gesetze wichtig, aber umkehrbar, weiche Schwellen statt Freischaltung." },
    { date: "2026-11-09", area: "Konzept", title: "Erst der Scope für alle drei Bereiche (Kompendium 1950–2030), dann die Wege dorthin", why: "User 09.11.: zuerst eine komplette Liste 1950–2030 – welche Gesetze es geben kann, wie sie initiiert werden, wie oft gewählt wird, wer im Rat sitzt; dasselbe für Medien und Wirtschaft – damit klar ist, worum es bei den Wahlen geht und was machbar sein soll. Danach die Umsetzung, beginnend mit der politischen und medialen Zeitschiene." },
    { date: "2026-11-09", area: "UI", title: "Das politische und mediale Geschehen bekommt eine zentrale Agenda, mit der Uhr verbunden – kein Ticker am Rand", why: "Der User (09.11.): Wahlen, Termine, Inhalte und Restzeit müssen eines der zentralen Gebiete des Spiels sein; die kleinen City-News-Zeilen würde er beim Bauen glatt verpassen. Die sechs Darstellungs-Vorschläge aus dem Hauptfenster (Agenda-Leiste, Titelseite statt Ticker, War Room vor Abstimmungen, Wettliste, Lager-Barometer, drei Alarmstufen) sind alle angenommen, ohne zu viel Klatter zu erzeugen; die Agenda gehört zur Uhr/zum Kalender oben rechts, muss aber groß und zentral sein. Form (Zeitband, das in die Uhr läuft) ist Vorschlag." },
    { date: "2026-11-09", area: "Konzept", title: "Kampagnen werden wie Spiele in Mad Games Tycoon 2 eingestellt: viele Stellschrauben, verborgene Passung, zweiter Anlauf – für Politik und Medien", why: "Der User (09.11.): In MGT2 stellt man sein Spiel lange ein (Thema, Untergenre, Technik) und findet erst heraus, welche Werte funktionieren – das hat Spaß gemacht und soll hier für Kampagnen gelten: Puppet unterstützen oder finanzieren, Gesetz(e) wählen, Werte mitgeben, Anhörungen steuern; klappt es nicht beim ersten Mal, herausfinden warum und umstellen. Genauso Medienkampagnen gegen Kandidaten, Mitspieler oder NPCs oder für einen Boom: Stories mit Werten, Stimmung der Bezirke erkunden, Werbung schalten. Technik entwickelt sich über die Jahrzehnte (1950 kein Internet)." },
    { date: "2026-11-09", area: "Spiel", title: "Abstimmungen als Szene: Sitz für Sitz enthüllt wie die Richter in Die Fugger II", why: "Der User (09.11.): Das Spannendste an Die Fugger II war, dass nach dem Beeinflussen abgestimmt wurde und die Richter nacheinander ihr Urteil abgaben – Mehrheit nötig, oft 1:1 nach zweien, der Dritte entschied. So soll der Roll Call hier laufen (Ausschuss 3, Rat 9, Wahlabend Bezirk für Bezirk); Reihenfolge, Pausen und Stichentscheid sind Vorschlag." },
    { date: "2026-11-06", area: "Spiel", title: "Bezirke wachsen vom Zentrum nach außen: erst Feld 1, dann nur Nachbarfelder, Straßen immer angeschlossen", why: "Vorgabe des Users: keine frei schwebenden Straßen, Autos müssen bis zum Ring fahren können. Das erste Feld ist Feld 1 am Zentrum, jedes weitere muss an ein freigegebenes eigenes Feld grenzen, und jede Straße beginnt oder endet an einer vorhandenen. Erst im Leistungstest „ganze Insel“ erprobt, dann als echte Regel für Spieler und NPCs übernommen (Server prüft)." },
    { date: "2026-11-05", area: "Technik", title: "Simulation als Daten im GameState, Darstellung baut jeder Client aus den Daten nach", why: "Entscheidung von Claude (Auftrag: selbst entscheiden), nach der Regel-Datei des Users: die Simulation kennt keine Actors, nur Datensätze; so bleibt der Monatstick billig, der Spielstand ist von selbst replizierbar, und die Darstellung kann später auf Instanzen umgestellt werden, ohne die Regeln anzufassen." },
    { date: "2026-11-05", area: "Technik", title: "Multiplayer als Listen-Server im laufenden Level, Beitritt per IP", why: "Einfachster Weg ohne Online-Dienste: der Host öffnet den Port 7777 in der laufenden Welt (kein Neuladen, die Insel bleibt), Clients bekommen denselben Seed und bauen die Insel selbst. Lobby mit Bezirkswahl, der Host startet, NPCs füllen die freien Bezirke." },
    { date: "2026-11-05", area: "Spiel", title: "Erstes Baufeld frei, jedes weitere per Anhörung; NPC-Bauten ohne Straße im Raster", why: "Damit jede Partie sofort losgeht (Gründungsfreigabe) und der Ausschuss trotzdem von Anfang an zählt. NPCs bauen Straßen noch nicht, ihre Gebäude stehen im Knotenraster um die Feldmitte – sichtbar, billig, später durch echte NPC-Straßen ersetzbar." },
    { date: "2026-11-05", area: "Spiel", title: "Wertung am Endjahr aus allen vier Kapitalien plus Gebäudewert und Einwohnern", why: "Im ersten Test gewann, wer nichts tat (Startgeld blieb ganz). Deshalb zählen 70 % der Baukosten als Vermögen, dazu Einfluss, Ansehen, Einwohner und Bodenwert, Verdacht zieht ab. Gewichtung ist ein Startwert." },
    { date: "2026-11-05", area: "Konzept", title: "Machtdreieck angenommen: Startzahlen Stück für Stück abstimmen, „Die Spitze zieht Blicke an“ wird ausprobiert", why: "Durchsicht des Users 05.11.: Die Zahlen passen als Startwerte und werden im Spiel nachjustiert statt am Reißbrett; ob der Spitzenreiter wirklich 50 % schneller Verdacht sammeln soll, zeigt erst der Spieltest. Damit ist das Konzept Arbeitsgrundlage für den Monatstick-Prototyp (V1)." },
    { date: "2026-11-05", area: "Konzept", title: "Politik und Medien gleich stark, die Wirtschaft als dritte Kraft im Hintergrund", why: "Der User will einen Kreislauf im Gleichgewicht: Politik und Medien sollen einander heftig beeinflussen können, ohne dass eine Seite zu komplex wird oder zu viel Gewicht bekommt; die Bezirkswirtschaft finanziert beides (Umschläge, Kampagnen), wird von beiden gelenkt und wirkt zurück. Daraus das Machtdreieck mit Verdacht als Bremse." },
    { date: "2026-11-05", area: "UI", title: "Politik-Menü: Kandidaten, Gesetze, Anhörungen, Abstimmungen, Bestechung – Medien-Menü: Sender, Berichte, Kampagnen, Recherchen, Werbung", why: "Vorgabe des Users für die Untermenüs (Ring 2 des Radialmenüs). Ausschreibungen als sechster Politik-Punkt: Vorschlag von Claude, vom User am 05.11. bestätigt – unter Politik, nicht unter Finanzen." },
    { date: "2026-11-04", area: "Gebäude", title: "Gebäude-Autopilot: alle Epochen bis 2030 ohne Zwischenfragen", why: "Die Pipeline lief fehlerfrei; der User will nicht jeden Schritt selbst anstoßen. Claude recherchiert im Web, schreibt den Bild-Prompt, lässt das Referenzblatt über ChatGPT (Codex) erzeugen, baut, importiert und committet. Der User prüft hinterher hier im Tagebuch. Hochhäuser dürfen ab 2010 stärker wachsen (2010 +3…+8, 2030 +4…+12 Geschosse, bis ~150 m), damit 2030 eine echte Skyline entsteht." },
    { date: "2026-11-04", area: "Epochen", title: "Zentrum startet nur mit 1950ern; Hochhäuser zweimal sanierbar (1950 → 1970 → 1990)", why: "Die Stadt soll sichtbar altern und sich über die Jahrzehnte modernisieren; neuere Fassungen entstehen nur auf der Baustelle. Krankenhaus 1–2 je Stadt, Cafés vereinzelt." },
    { date: "2026-11-04", area: "Epochen", title: "Zentrum: Stadt darf 2 oder 4 Grundstücke zusammenlegen", why: "1950er-Grundflächen sind für richtig große Hochhäuser zu klein; die Stadt modernisiert sich selbst, Spieler bauen dort weiterhin nicht." },
    { date: "2026-11-03", area: "Konzept", title: "Erst Konzept, dann bauen", why: "Das Wirtschaftssystem trägt das ganze Spiel; UI und Politik/Medien hängen davon ab." },
    { date: "2026-11-03", area: "UI", title: "Layout: Status oben, Bauen unten, Panel am Objekt", why: "Fast alle Aufbauspiele nutzen diesen Dreiklang; Spieler kennen ihn." },
    { date: "2026-11-03", area: "UI", title: "Höhendeckel für Spieler unter den Wolken", why: "Die Wolkenschicht soll Kulisse bleiben; Admins ohne Deckel." },
    { date: "2026-11-03", area: "Wirtschaft", title: "Alles Selbstproduzierbare ist bei der Stadt kaufbar – teurer", why: "Niemand bleibt stecken, aber eigene Produktion und Verträge lohnen sich." },
    { date: "2026-11-03", area: "Epochen", title: "Gebäude werden saniert, nicht ersetzt", why: "Wiedererkennung der Stadt über die Jahrzehnte, sichtbare Baustellen statt Austausch." },
    { date: "2026-11-03", area: "Stadt", title: "Passanten als eigenes C++-System statt Mass/ZoneGraph", why: "Die Stadt entsteht erst zur Laufzeit." },
    { date: "2026-11-02", area: "Stadt", title: "Innenstadt als gerades Raster mit Hochhäusern aus dem Seed", why: "Kontrast zur organischen Insel; Spieler bauen dort nicht." },
    { date: "2026-11-01", area: "Insel", title: "Kein Startfeld je Bezirk – jeder wählt selbst", why: "Erste strategische Entscheidung des Spielers." },
    { date: "2026-10-30", area: "Technik", title: "Rechenkerne in C++", why: "Blueprint war für Inselform, Felder und Mesh zu langsam (Sekunden-Ruckler)." },
    { date: "2026-10-26", area: "Insel", title: "Insel aus dem Seed statt aus der Karte", why: "Jede Partie eine eigene Insel; Karteninsel bleibt Prototyp." },
    { date: "2026-09-26", area: "Technik", title: "Neuaufbau in Unreal 5.8, Steuerung per MCP", why: "Vorgänger (PCG/CitySample) war zu schwer zu kontrollieren." }
  ],

  // ---------- Ideenpool ----------
  ideas: [
    { title: "Titelseite für Wendepunkte", text: "Fällt ein Gesetz mit eigenem Einsatz, beginnt eine Krise oder gewinnt ein Rivale einen Sitz, erscheint statt der Toast-Zeile eine große Zeitungs-Titelseite mit Schlagzeile, Bild des Rats und Knopf in den War Room – die dritte Alarmstufe aus dem Kampagnen-Konzept.", source: "Nachtschicht 09.11." },
    { title: "Wahlnacht Bezirk für Bezirk mit Hochrechnung", text: "Die Wahlnacht zeigt heute je Amt den Sieger. Spannender: erst Hochrechnungen mit Spanne, dann Bezirk für Bezirk die Auszählung, der eigene Bezirk zuletzt – wie der Roll Call, nur mit Prozenten.", source: "Nachtschicht 09.11." },
    { title: "Gesetze zurücknehmen als Kampagnenziel", text: "Jedes Gesetz der frühen Jahre kann später zur Rücknahme auf die Tagesordnung – „Repeal the 1955 Smoke ordinance“ als typisches Ziel, sobald man Geld und einen Sitz hat. So wird der Anfang zum Tutorial ohne Tutorial-Texte.", source: "Kompendium 1950–2030" },
    { title: "Bürgerbegehren als vierte Gesetzesquelle", text: "Ab dem Referendum Act 1970 legen Bürgerinitiativen Gesetze zur Sonderabstimmung der Wähler vor, wenn die Zufriedenheit bei einem Thema tief fällt – „Stop the power plant“ gegen den Energie-Baron.", source: "Kompendium 1950–2030" },
    { title: "TV-Debatte vor jeder Wahl ab 1960", text: "Fester Medien-Termin: der Puppet tritt auf, Skill des Kandidaten plus Spin doctor entscheiden ±5 Ansehen – ein kleines Roll-Call-Ereignis vor dem Wahlabend.", source: "Kompendium 1950–2030" },
    { title: "Abgeworbene Reporter nehmen ihr Dossier mit", text: "Wer einen Investigativ-Reporter des Rivalen mit +30 % Gehalt abwirbt, bekommt dessen angefangene Recherche – Druckmittel inklusive.", source: "Kompendium 1950–2030" },
    { title: "Wahlabend Bezirk für Bezirk", text: "Bei Wahlen melden die Bezirke nacheinander (kleinster zuerst), laufende Summe, „projected“ ab 70 % ausgezählt, eigene Wetten hervorgehoben – die Roll-Call-Spannung für Wahlen.", source: "Kampagnen-Konzept" },
    { title: "Playbook: gelernte Stimmungen als Karten", text: "Jede Erkenntnis aus Umfragen, Fokusgruppen und Debriefs wird eine Karte mit Bezirk, Epoche und Datum; Karten altern mit der Epoche. Das Spielerwissen aus Mad Games Tycoon 2 – im Spiel statt in einer Wiki.", source: "Kampagnen-Konzept" },
    { title: "Stab: Wahlkampfmanager, Pollster, Spin Doctor, Fixer", text: "Personen mit Fähigkeit, die Aussicht genauer machen, Kanäle billiger oder Tricks leiser – wie Mitarbeiter in MGT2. Offen, ob die Komplexität lohnt.", source: "Kampagnen-Konzept" },
    { title: "Boom-Kampagne für den Bezirk", text: "Wirtschaft als Kampagnenziel: Image + Werbung für den eigenen Bezirk → Zuzug, Bodenwert, Hotels. Einfache Fassung zuerst; ob Verträge und Güter ein eigenes Minispiel werden, ist offen.", source: "Kampagnen-Konzept" },
    { title: "NPC-Straßen und NPC-Lots", text: "NPC-Gegner bauen heute nur im Raster um die Feldmitte. Mit eigenen Straßen (Planer aus dem Spieler-Straßenbau) würden ihre Bezirke wie Spielerbezirke aussehen – und der Spieler könnte dort später Grundstücke kaufen.", source: "Spielbare Fassung V1" },
    { title: "Gebäude-Instanzen statt Komponenten", text: "Die Darstellung der Spielergebäude läuft über Static-Mesh-Komponenten je Teil; ab einigen Tausend Gebäuden lohnt ein ISM je Mesh (wie die Skyline), die Daten bleiben gleich.", source: "Spielbare Fassung V1" },
    { title: "Verträge zwischen Spielern", text: "Strom und Güter von Nachbarn kaufen statt teuer von der Stadt – Angebot im Finanzen-Panel, Laufzeit in Monaten, Kündigung als Druckmittel.", source: "Spielbare Fassung V1" },
    { title: "Ausschreibungen als Geldhebel", text: "Stadt und Bezirke vergeben Straßen, Klinik, Stromnetz, Sanierungswellen; Vergabeordnung fair oder freihändig – der größte legale und illegale Hebel, Brücke zur Bausäule.", source: "Machtdreieck-Konzept" },
    { title: "Verbände und Lobbys als NPC-Parteien", text: "Handelskammer, Mieterbund, Stadtwerke-Lobby, ab 1970 Umweltgruppe: stehen hinter Abstimmungen und lassen sich gewinnen.", source: "Machtdreieck-Konzept" },
    { title: "Dossiers als Druckmittel", text: "Beweise aus Recherchen als Karten: veröffentlichen, anzeigen oder halten – eine erzwungene Gefälligkeit ohne Geld.", source: "Machtdreieck-Konzept" },
    { title: "Umfragen und Wahlversprechen", text: "Umfragen zeigen vor dem Termin, wo man steht (teuer, manipulierbar); Versprechen werden nachgehalten, gebrochene erinnern die Medien.", source: "Machtdreieck-Konzept" },
    { title: "Werbefläche aus Passantenzahlen", text: "Plakatwände an belebten Kreuzungen verdienen aus den echten Fußgänger- und Verkehrszählungen; Baustellen-Planen und Skyline-Schriftzüge sind die ersten Flächen.", source: "Machtdreieck-Konzept" },
    { title: "Journalisten sichtbar in der Stadt", text: "NPC-Reporter laufen als Passanten herum, sitzen im Café, fotografieren deine Baustelle – man sieht, dass jemand gräbt.", source: "Machtdreieck-Konzept" },
    { title: "Epochen-Leitgesetz als Spielzug", text: "Wiederaufbau 1950, Energiegesetz 1973, Privatisierung 1990, Klimagesetz 2010: Spieler können es bremsen, beschleunigen oder abschwächen – die Epochenverschiebung wird spielbar.", source: "Machtdreieck-Konzept" },
    { title: "Video „Wie die Insel entstand“", text: "Zeitraffer aus den Timeline-Bildern und nachträglich fotografierten alten Ständen.", source: "User, 03.11." },
    { title: "Zeitung als Spielmechanik", text: "Wer eine Zeitung besitzt, lenkt Stimmung und Ermittlungen.", source: "Ökosystem-Konzept" },
    { title: "Baustoff-Boom je Epoche", text: "Jede Sanierungswelle (1965–75 …) treibt die Nachfrage nach Baustoffen – Chance für den Baustoff-Bezirk.", source: "Ökosystem-Konzept" },
    { title: "Lagevorteile ausgleichen", text: "Berg → Wasserkraft, Küste → Hafen/Tourismus, Zentrumsnähe → Büros. Jeder Bezirk bekommt mindestens zwei Stärken.", source: "Ökosystem-Konzept" },
    { title: "Bürgermeister spielbar?", text: "Im Endgame könnte ein Spieler das Zentrum der Macht erobern.", source: "User, 03.11." },
    { title: "Pendlerströme sichtbar machen", text: "Morgens Autos und Passanten in die Industriebezirke, abends zurück.", source: "Ökosystem-Konzept" }
  ]
};
