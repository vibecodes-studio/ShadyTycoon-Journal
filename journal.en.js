window.JOURNAL_EN = {
  now: {
    inProgress: [
      { title: "District councils (#47): data, election with rivals, motions, city treasury", area: "Game", date: "2026-11-11", detail: "Kanban #1 builds it after the user's six decisions (11 Nov): one council with 5 seats per district (leader = the district's city council seat), 3 permanent computer rivals, motions A–F, field releases by the district council instead of the building committee, a city treasury. Code for stages 1–3 is written and waits for the full build." },
      { title: "Preparing the next update", area: "Game", date: "2026-11-11", detail: "Patch notes drafted (English, for players); the committed state without other sessions' open work builds cleanly on its own. Main publishes after asking the user." },
      { title: "Front page + \"My bets\": politics and media you cannot miss", area: "Game", detail: "10 Nov, night (user: elections, scandals and votes must not be a footnote). Built and tested in play (hands-off test instance: the election-night front page pauses the solo game, \"My bets\" shows your own bill at 64 %, edge card below the FPS box): (1) Front page – big stories (charges, an envelope handed to the prosecutor, an exposed campaign, a dossier, a skeleton in the closet, an economic event, election night) appear as a newspaper over the game with headline, what it means for you, more stories and a button to the matching action; in a solo game time pauses. (2) \"My bets\" – every stake in one list (bills with forecast, hearings, candidacies, campaigns, attacks on you, bids, envelopes, suspicion, reputation), in the radial menu under Agenda. (3) Edge cards on the right when a forecast tips, suspicion rises, reputation falls, an attack starts or a story is about you." },
      { title: "Working through tester feedback (Discord + board)", area: "Game", detail: "9 Nov evening, user away: published 0.1.218 (nine fixes) and 0.1.220 (politics playable earlier, reasons on grey buttons, roads stay in your own district) as updates, tickets moved to Test Fix. Open: #8 flickering vent grilles (new model revision of the 1970s towers), #13 finances, #15 roads follow the terrain, wishes #17/#20/#24, a plan for candidate stats (#25)." },
      { title: "Online multiplayer without port forwarding (Epic Online Services)", area: "Game", detail: "The last playtest failed on port forwarding in the router (user, 09 Nov). Now the host picks \"Online (room code)\" for a new game; the game logs in to Epic Online Services silently and anonymously (no Epic account for the players) and shows a 6-character room code with a copy button in the lobby. Friends type the code under JOIN; the connection uses NAT punch-through, or Epic's relay if that fails, with no router settings. \"LAN only (IP address)\" stays for the home network. Built for editor, Windows and Linux; LAN join and the case without credentials tested. Still missing: the user's EOS credentials (Developer Portal) and a test across two households." },
      { title: "Politics, media and economy playable – agenda, War Room, Roll Call", area: "Game", detail: "Night shift 09 Nov (brief: build in all four concepts, all three areas connected). Built and tested in PIE: a nine-seat council with hidden values, a vote every quarter as a Roll Call scene, a War Room with six steps and an outlook, debrief/playbook, the agenda strip under the cards (today at the left), 66 laws with effects, era and crisis laws, elections for district and at-large seats from 1954 (the player starts without a seat), a mood per district with polls, a job market for staff, a research desk, contracts between districts, trade stages, twelve economic events, NPCs playing all of it. Next: the user's click test (War Room, Roll Call, panels), then tuning the numbers; a front page for turning points and media campaigns against candidates with a dossier exist but are still thin." },
      { title: "Compendium 1950–2030: the scope for politics, media and economy", area: "Concept", detail: "The user's brief of 09 Nov: first record what should exist at all, then the paths there. Written: 94 laws in nine domains with year, source (era, catalogue, event, citizens' initiative), effect and winners/losers; eight offices with voters, cycle and stakes (council 9 votes, 20 elections 1954–2030); media scope (11 outlet types, 8 story types, licences, research); staff with a job market; economy scope (7 goods, 6 contract types, trade from trucks to a logistics hub, 12 events); eight roads to wealth (the player as a tycoon) and the opening in three acts (small light → player → tycoon). Waiting for the user's review – then build the political timeline." },
      { title: "Concept: Agenda, War Room, Roll Call", area: "Concept", detail: "The user's brief of 09 Nov: what happens in politics and the media must be visible at the centre (elections, dates, time left – tied to the clock), campaigns should be set up like games in Mad Games Tycoon 2 (many settings, hidden fit, second attempt – for politics and media alike), votes as tense as the judges in Die Fugger II. Concept written with research on nine role models, seven pictures (agenda strip on today's HUD, War Room, loop, Roll Call, media technology 1950–2030, case example, hidden mood) and three worked examples with numbers. The user's review the same day: time strip with today at the left, War Room accepted, staff with a job market, research as in MGT2, economic campaigns later – only the TV licence 1960 instead of 1965 stays open." },
      { title: "Gardens, yards and paving slabs", area: "Cityscape", detail: "Every house now has a lawn, driveway, path, mailbox, fence or hedge, and at the back a patio, shed, washing line, swing and tree; commercial plots get a forecourt, yard, dumpsters and parking. Inner-city back yards are service, parking, green or mixed courts, and the centre floor is large concrete slabs instead of poured concrete. Everything changes with the decade and looks clean or run-down depending on how well the district is kept (satisfaction, land value, pollution). After the user's test (stutter when zooming in, lawn/hedges/flowers looked artificial, stray fences): switched off for a comparison; now switchable live and one by one in the admin menu (World → Yards & gardens): slab floor, city back yards, district gardens, plus ground, fences/hedges, trees, cars, props, mess, flower boxes (remembered across restarts); next the inner city alone with the FPS display, then the districts. 07 Nov after the next test: fences closed all round and shared with the neighbour (rails on the inside, no gaps at corners), hedge or picket fence at the front; lawn, driveway and car follow the ground on slopes; hydrangeas instead of cartoon flower boxes; own slider card “Grass – yards” for the garden lawn; the full-island build no longer puts houses inside each other (171 cases for seed 641163). Then: stutter everywhere fixed (one fence component spanning the whole island; now 1-km tiles and fences kept out of Lumen – 450 → 16 ms), old meshes switched to Nanite, NPCs and players no longer build inside full-island houses, driveways and paths on slopes no longer hidden under the lawn; paths and driveways missing at player/NPC houses after construction finished (reused instance slots were not redrawn) – fixed. Hedges now made of real Megascans boxwood (Fab) instead of self-made blocks, full from a distance (Nanite “Preserve Area”), brightness/tone/saturation in the admin menu (World → Hedges). Fences no longer mixed (user): either a white picket fence all around, or a hedge at the front and a board fence at the back that turns to the house wall on the side without a driveway (garden closed off, like real houses)." },
      { title: "Pedestrian signals", area: "Traffic", detail: "Every traffic-light pole now also carries a small pedestrian signal, turned across the road and readable from both sides: red on top, green below. It shows exactly the phase the pedestrians follow on the zebra crossing (so green only after the 10-second turning lead). Built, waiting for the user's play test." },
      { title: "Loading screen without stutter", area: "Game", detail: "The spinner froze because single frames of the island build computed for seconds (user, 06 Nov). Probe added, generator split into many frames, island-shape kernel on a worker thread, assets preloaded at the main menu, pedestrians in batches. For the packaged game additionally the engine's loading thread. Second round: parks one per frame (planning in the background, instances in chunks), skyline in batches, generator waits for the parks and for fully built assets. Re-measurement: longest frame 0.37 s (initially 1.8 s), total stall 3.0 s instead of 7.1 s, but more short hitches (27 frames over 50 ms). Third round with Unreal Insights: the measurement script partly measured itself (MCP calls on the game thread), CountDistricts in C++, grass JPEG at world start. Status: longest frame 0.17 s (initially 1.8 s), total stall 2.2 s (7.1 s). Left: ring-road sidewalks, relief, render proxies. The user's play test is pending." },
      { title: "Playable version V1: the triangle of power runs in the game", area: "Game", detail: "The user's brief of 05 Nov: bring the whole concept into the game – build menu, the three pillars, NPC opponents, main menu with options, host and join; design without asking, test it yourself, fix weaknesses yourself. Built: game state as replicated records in the GameState, monthly tick (population, jobs, power, taxes, rent), hearings, bills, elections, tenders, stories, campaigns, investigations, ads, five NPC profiles, catalogue from all buildings, building with a ghost lot, action panels on the radial menu, lobby, end screen, main menu, listen server. A 1950–1960 game ran in Play from start to finish; the two-player test in the editor (host + client) passed. Next: the user's click test, tuning the numbers." },
      { title: "Traffic and pedestrians at the zebra crossing", area: "Traffic", detail: "Six follow-ups from 5/6 Nov (cars as obstacles rolled back, never standing on the roadway, zebra nodes centred, turning curves off the kerb, 10 s head start for turning cars, letting a car off the zebra crossing, car queues flowing through) are committed by the user – details in the milestone of 6 Nov. Next: further observations from play." },
      { title: "Pedestrians step onto the grass", area: "People", detail: "When the sidewalk is so crowded that no lane is free, pedestrians sidestep onto the lawn or the forecourt of buildings – only on the side away from the road, never onto the carriageway – and only to get past: as soon as there is room on the sidewalk again, they step back. Before that they check that there is ground and no wall, bush or fence in the way. Built, waiting for the user's play test." },
      { title: "District overlay and lobby map", area: "Game", detail: "Glass surfaces and gold frames per district from the island surface, district per triangle taken exactly from the generator, borders now reach the coast on every island (log check: exactly 6 open ends at the centre, tested with 4 seeds). Lobby: only the district under the mouse in the look of your own district, reserved ones in the player colour, hairline frame. Not committed yet; the user tests hover and click with the mouse." },
      { title: "Switching grass in the admin menu", area: "Landscape", detail: "Outside and parks separate: library with 10 grass textures, upload your own images, sliders for texture blend, scale, brightness, green tone and saturation. Built, waiting for the user's play test." },
      { title: "More pedestrian figures", area: "People", detail: "Worker (dungarees, flat cap) approved. New: lady in a light-blue shirtwaist dress with straw hat, gloves and handbag (from a reference sheet, replaces the older lady) approved. Next: clothing per era." },
      { title: "Cars of the 1950s", area: "Traffic", detail: "Sedan, Rosenwald 500 and the Ranger 310 pickup drive mixed in traffic. Next: coupé, station wagon, delivery van the same way." },
      { title: "Project journal", area: "Docs", detail: "This page: history, concepts, gallery. Look back: 27.09., 30.10., 01.11. and today photographed afterwards (seed 503555). Now in German and English." },
      { title: "Game concept: the triangle of power", area: "Concept", detail: "Economy, politics and media as three equally strong forces that need each other and can damage each other; heat as the brake. Ten submenus (the user's list), four capitals, seven district directions, starting numbers to tune – accepted by the user on 05 Nov (tenders under Politics, starting numbers tuned step by step, leader rule to be tried out). Since the evening in the game as playable version V1 (see above); now the numbers are tuned in play." },
      { title: "Game concept: the city as an ecosystem", area: "Concept", detail: "Basics: who supplies what, who needs what, how money flows. Concept first, then build." }
    ],
    next: [
      { title: "Media empire stage 4c (#46): eras", area: "Game", date: "2026-11-11", detail: "4a (media chain, buying outlets, distress sales) and 4b (TV programme) are built and tested in game; next 4c: media per era." },
      { title: "Answers on transit (#41), services (#42) and water (#43)", area: "Concept", date: "2026-11-11", detail: "Three concept proposals with recommendations; once the user has answered them one by one, building starts (services first, with stand-in buildings)." },
      { title: "Scandals also hit the district council", area: "Game", date: "2026-11-11", detail: "Once the district councils are in: a printed scandal also lowers the district politicians' favour and unsettles councils where the subject holds a seat." },
      { title: "Enter EOS credentials and test across two households", area: "Game", detail: "Create a product in the Epic Developer Portal with a client using the Peer2Peer policy, put the five values into (template.example). Then build a package and connect with a friend through the room code; two instances on one PC cannot test EOS P2P." },
      { title: "Build the political timeline", area: "Game", detail: "After the review of the compendium: law catalogue as a data table (year, source, levels, effects as multipliers), council with 9 votes (6 districts + 2 city seats + casting vote), elections for all offices every four years, event bills from the simulation; then the agenda strip (today at the left) and the Roll Call." },
      { title: "Click test politics/media/economy and tune the numbers", area: "Game", detail: "The user plays the new loop (agenda → War Room → Roll Call → debrief) in Play: panels Laws, Council, Staff, Research, Contracts, Economy, Mood; the 1954 election with a candidacy. Then adjust the rates: envelope prices, campaign cost per channel, seat leaning, salaries, research points, contract prices, the effect of laws." },
      { title: "Front page for turning points, media campaigns with a dossier, referendum", area: "Game", detail: "A big card instead of a toast when a bill with your stake falls or an event begins; tie the dossier trick in the War Room to real investigations (in place); citizens' initiatives from the Referendum Act run but need polish." },
      { title: "Tune the numbers of the triangle of power", area: "Concept", detail: "The monthly tick now runs in the game (V1). First corrections from my own test are in (influence, NPC loans, demand, power costs, scoring). Next: play with the user and adjust rates, thresholds, prices and NPC pace." },
      { title: "More look-back snapshots", area: "Docs", detail: "Optional: 27.10. (first seed island), 28.10. (lots along roads), 02.11. (traffic/traffic lights in Play)." },
      { title: "Private wealth & win conditions", area: "Concept", detail: "Decided in V1 (Claude, 05 Nov): private wealth from rent and revenue of your own buildings; the score at the end year from wealth, building value, influence, reputation, residents and land value minus heat – first place takes the Centre of Power. Open: whether this weighting is fun." },
      { title: "Player UI: click test and polish", area: "Game", detail: "The interface is now wired to the game: the top cards show real values, radial-menu entries open action panels (catalogue, hearings, bills, outlets …), building with a ghost lot. Waiting for the user's click test. Then: height cap, object panel with real building values, minimap with fields." },
      { title: "Surface patterns for buildings", area: "Buildings", detail: "1950s done (tower approved in Play, then rolled out to department store, hospital, café, house): ashlar stone with joints, granite slabs, brick, tiles, clapboard, shingles, render, glass different per window, grained metal – all procedural. Then 1970s (precast concrete, exposed aggregate, fibre cement, concrete roof tiles, brick) and 1990s (granite slabs 1.2 × 0.8 m, flat glass) built – waiting for the user's play test." }
    ],
    done: [
      { title: "Update 0.1.425 published: ring road as an avenue (19.5 m), fewer stutters while building, buses, Classic HUD, coast and new services", area: "Game", date: "2026-11-12" },
      { title: "New base version 0.1.407 built for Windows and Linux (after the engine update to 5.8.4; updates no longer build on 0.1.210)", area: "Game", date: "2026-11-12" },
      { title: "Second interface \"Classic\" after the user's mockup (switch in the gear window, Radial stays)", area: "UI", date: "2026-11-12" },
      { title: "Coast roads of computer players (#32) and visible traffic by congestion (#41, stage T2)", area: "Game", date: "2026-11-12" },
      { title: "Politics windows with 45 councillor faces and your own vote in the district council (#47)", area: "Game", date: "2026-11-12" },
      { title: "More public services: clinic, district office, parks & rec, public works (#42)", area: "Game", date: "2026-11-12" },
      { title: "Media empire stage 3 (#46): scandal chain with consequences, crisis room with seven answers, selling leads (also \"catch and kill\"), computer media barons", area: "Game", date: "2026-11-11" },
      { title: "Media empire stage 2 (#46): every paper/TV tower competes for the audience, advertisers with conditions, counterstories", area: "Game", date: "2026-11-11" },
      { title: "District councils (#47) decided: the user answered all six questions", area: "Concept", date: "2026-11-11" },
      { title: "Computer districts no longer go bankrupt (#45): the cost of city programmes follows the number of residents", area: "Game", date: "2026-11-11" },
      { title: "Occupancy and demand per building (#44, steps 1–6): gradual move-in, location, commuting, saturated markets, balancing", area: "Game", date: "2026-11-11" },
      { title: "Concepts for transit (#41), five new services (#42, with an addendum on eras, stand-ins and the district council) and water/sewage (#43) as proposals", area: "Concept", date: "2026-11-11" },
      { title: "Ring tip: no more light concrete wedge outside the ring road (seed 2147483647); a slightly darker grass patch remains there - visual check pending", area: "Cityscape", date: "2026-11-11" },
      { title: "Renovation from 1965 (feedback #40): 1970 office towers and shopping center from 1965, 1990 towers from 1985; info window names the year or says \"No newer version of this building yet\"", area: "Game", date: "2026-11-11" },
      { title: "State of all sessions saved, and updated; continuing with a new Main + Kanban #1-#3", area: "Docs", date: "2026-11-11" },
      { title: "Update 0.1.305 published: road permits, taxes + property tax, power island grid, media power, sites without overlap, HUD rework", area: "Game", date: "2026-11-10" },
      { title: "Reading info windows: clicking a tilted info window turns it smoothly flat, frontal and 1.4 x larger in the middle of the screen, another click turns it back to 3D (all info windows; buttons stay buttons; console hud.FlatCard). Tested in the game without a mouse.", area: "UI", date: "2026-11-10" },
      { title: "Admin time skip (first report from the testers' Discord forum): two buttons under \"Renovation test\" in the admin menu, \"Skip 1 year\" and \"Skip to next decade\" – game time runs month by month as in the game (date, catalogue, economy, NPCs, renovation availability), never past the end year; the renovation test buttons are now called \"… (next era)\". Tested via console (May 1950 → May 1951 → Jan 1960 → Jan 1970)", area: "Game", date: "2026-11-08" },
      { title: "Linux build: the game now also exists natively for Linux (Vulkan SM6 with Nanite/Lumen, 4 GB, instructions for Fedora); Linux and Windows can play together if the version matches. Built with the cross-compiler on Windows, not yet started on Linux", area: "Game", date: "2026-11-08" },
      { title: "Game version + version check: the version (v0.1.<commit>) is shown bottom left on the title screen; when joining, the host rejects a different version with a clear message (\"Different game version: the host runs …, you have …\"), and if the host leaves, the other player lands in the main menu with the reason. Tested with the host in the editor and a second game instance (wrong version rejected, same version accepted, host leaving reported)", area: "Game", date: "2026-11-08" },
      { title: "First installable Windows build (3.8 GB) for the multiplayer test; network architecture decided: Unreal online subsystem instead of a custom transport – LAN/IP today, Steam (SteamSockets) or EOS later, no fly.io relay for game traffic ", area: "Game", date: "2026-11-08" },
      { title: "District borders in player colours: from game start every district border has two colours – each half in the colour of the district on its side (human: chosen colour, computer: fixed seat colour), same width as the old black line. It stays black in the lobby. Built, waiting for the user's Play test", area: "Game", date: "2026-11-08" },
      { title: "Building with price and info window: hovering a building in the radial menu shows its price in the centre (green = you can afford it, orange = not enough); in build mode a tilted info window shows price, balance afterwards, upkeep, construction time, effects (residents, jobs, revenue, power, happiness, pollution), lot size and buttons \"Next variant\" and \"Cancel\". Built, waiting for the user's Play test", area: "Game", date: "2026-11-08" },
      { title: "Build menu tells public and private buildings apart: public ones (school, hospital, police, fire station, post office, park, plaza – paid from the city treasury) in civic blue with a column icon and a hint under the menu; the catalog is split into Private and Public. A greyed-out Renovate button now says why (e.g. city treasury in the red), new admin button \"+$10M (city treasury)\". Built, waiting for the user's Play test", area: "Game", date: "2026-11-08" },
      { title: "City plaza 1950 (r02) approved: 24 arcing water jets with foam at the monument, beds with stone edging and hydrangeas, paving like polished natural stone (own shade per slab, joints) instead of plastic white", area: "Buildings", date: "2026-11-08" },
      { title: "City park 1950 (r04) approved: flowing navy water with foam, boxwood hedges, hydrangeas; the park lawn is now the same lawn as the field around it (instead of neon green)", area: "Buildings", date: "2026-11-08" },
      { title: "Construction sites on player, NPC and Full-island buildings now work like the center: fence, crane, container and skip in the yard; the old building lowers under the net and the new one rises. One single tilted info window for buildings and fields (renovate/demolish right in the building window). The district overlay glass now also covers land at cliffs and mountain feet. Built, waiting for the user's Play test", date: "2026-11-08" },
      { title: "The admin upgrade test now takes every building with a newer version, not just the center: player and NPC buildings (instant and free, game year ignored, yard rebuilt) and Full-island buildings – scaffolding around the real outline, swap under the net; \"All\" starts at most 150 sites, nearest to the camera. Built, waiting for the user's Play test", date: "2026-11-08" },
      { title: "Field 1 of every district is already released at game start (before the camera flight) – zoning hearings only for further fields", date: "2026-11-08" },
      { title: "Game-start camera as one smooth flight: from the overview past the district view straight onto Field 1, no pause, 2.6 s instead of 4.6 s", date: "2026-11-07" },
      { title: "Fixed distant facade flicker: joints, stone colours, grain and window reflections in the building material now fade smoothly into their average with distance (joints used to be kept at least 1 pixel wide – TSR flickered); cause narrowed down with frame comparisons and console tests (lighting/shadows/Nanite had no effect, 200 % resolution made it vanish); all building families rebuilt", date: "2026-11-07" },
      { title: "New game rule for players and NPCs: Field 1 at the centre first, then only neighbouring fields can be released; roads only on released fields and always connected to an existing road (checked by the server, buttons show the reason)", date: "2026-11-06" },
      { title: "Performance test “whole island built up”: an admin-menu button (World → Island) lays a network of real player roads on all 54 fields (sidewalks, intersections, traffic lights) and puts buildings of the game year only along those roads – all roads are connected (each district from Field 1 at the ring, then only into neighbouring fields) – 1950: 442 roads, 3,876 buildings, 105 → 42 FPS in the editor; a second click clears it", date: "2026-11-06" },
      { title: "Camera ride at game start: after the district, the camera zooms onto field 1 of your own district (field centred, city above, horizon just above the frame) – after the user's reference image, waiting for the user's look in Play", date: "2026-11-06" },
      { title: "Building autopilot finished: all 93 queue rows built, imported and committed (up to 2030, sources in). Open and listed in: Play test of the 1970s–2030s, towers on 2/4 lots in the game code, bugs in check scripts and apply_material_pbr on tree materials", date: "2026-11-06" },
      { title: "Traffic and pedestrians at the zebra crossing: cars as obstacles rolled back, pedestrians never stop on the roadway, zebra nodes centred, turning curves off the kerb, turning cars with a 10 s head start (green 28 s), a car on the zebra crossing is let off, car queues flow through – committed by the user", date: "2026-11-06" },
      { title: "Multiplayer: the server's Blueprint warnings for remote controllers fixed (the controller's BeginPlay only runs locally now); title screen and HUD once per world, client name from the options", date: "2026-11-06" },
      { title: "Flicker on the tower portal fixed: the sides of the granite portal on the 1950 skyscraper lay exactly in one plane with the light pilasters of the first regular floor and the cornice – in the game the boundary flickered. Portal sides 2 cm wider (revision r02, all three variants), the three ground-floor meshes re-imported, showcase rebuilt; new rule in the building skill: never let parts end flush with the edges of a neighbouring module. Waiting for the user to look in Play", date: "2026-11-06" },
      { title: "Playable version V1: game state and monthly tick in the GameState, commands via the server, catalogue of 96 building families, building/roads/hearings/bills/elections/tenders/stories/campaigns/investigations/ads with real effect, five NPC profiles, lobby, end screen, main menu with options, host and join – 1950–1960 game and two-player test in the editor passed", date: "2026-11-05" },
      { title: "Concept “The triangle of power”: economy, politics, media with four capitals, ten submenus, era index and example game – with seven diagrams in the journal, accepted by the user (tenders under Politics, numbers step by step, leader rule to be tried out); Politics/Media radial menu rebuilt accordingly and committed", date: "2026-11-05" },
      { title: "Player interface 2nd version after the reference image: glass cards top/bottom, icon radial menu with arcs, tilted object panel when clicking a building, minimap", date: "2026-11-05" },
      { title: "Player interface (prototype): status bar with panels, Tab radial menu with 3 levels, admin menu only via F10", date: "2026-11-04" },
      { title: "Four-lot tower 2030 \"the sawtooth tower\": new build 48 x 36 m on 2 x 2 lots, about 180 m, dark wood, warm clear glass, bronze, crown of three solar north-light sheds, sedum, brass \"SUMMIT TOWER\" (BLD_2030_MergedTower_02) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Merged-lot tower 2030 \"the solar wedge\": light larch piers and bands, warm clear glass, bronze, wedge of dark blue PV glass, sedum, brass \"ISLAND TOWER\", +9..+11 floors to about 145 m (BLD_2030_MergedTower_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Parking garage 2030 \"the timber car park\": light larch bands, warm light grey coated concrete, bronze frames and letters, blue \"P\" kept, warm white LED masts, +1 deck (BLD_2030_ParkingGarage_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "TV tower 2030 \"the bronze head\": warm white shaft, tower head in dark bronze with warm clear glass, sedum pavilion, brass \"TV TOWER\", red and white mast kept, +1 shaft segment (BLD_2030_TVTower_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Post office 2030 \"the solar glass post office\": granite kept, light larch bands, dark blue solar glass clock bay, bronze windows, sedum roof, brass \"POST OFFICE\", +1..+2 floors (BLD_2030_PostOffice_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "School 2030 \"the timber band school\": brick kept, light larch bands, bronze windows, warm white clock bay, sedum roof, brass \"PUBLIC SCHOOL\", 0..+1 floor (BLD_2030_School_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Gas station 2030 \"the charging station\": Douglas fir cladding, teal chargers and light strip, bronze frames, sedum roof, \"MOTOR SERVICE\"/\"GAS\" kept (BLD_2030_GasStation_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Apartment block 2030 \"the silver timber block\": serial retrofit with silver-grey larch, bronze windows and balconies, sedum roof with PV and a heat pump, +1..+2 floors (BLD_2030_ApartmentBlock_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Cinema 2030 \"the green hall\": living wall on the auditorium, larch fins with bronze panels, red pylon CINEMA, sedum roof with PV, +1..+2 floors (BLD_2030_Theater_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Grand hotel 2030 \"the garden tower\": thermowood lamellas, planter troughs in every spandrel, bronze marquee, brass sign, +2 floors (BLD_2030_Hotel_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Fire station 2030 \"the dark timber station\": charred larch, red edge, warm grey plinth, sedum roof, white letters, +1..+2 floors (BLD_2030_FireStation_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Police station 2030 \"the green station\": larch siding, recycled concrete surrounds, warm grey plinth, sedum roof, blue fascia band, +1..+2 floors (BLD_2030_Police_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Plaza 2030 \"the sponge square\": permeable small pavers with grass-joint bands, bronze obelisk with a light tip, solar light columns, larch benches, wildflowers (BLD_2030_Plaza_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Newspaper building 2030 \"the timber band house\": +2..+3 floors (~115 m), light ash-wood bands, photovoltaic central strip, warm white LED band, sedum terraces, red drum and lit globe (BLD_2030_Newspaper_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Bank 2030 \"the solar vault\": +2..+4 floors (~120 m), light terrazzo panels, photovoltaic spandrels, sedum terraces and a photovoltaic glass vault with bronze ribs (BLD_2030_Bank_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "City hall 2030 \"the green city hall\": deepened onto four lots (80 × 48 m), +2..+6 floors, larch, planted spandrels and a sedum roof, 110 m tower shaft – at ~205 m the tallest building on the island (BLD_2030_CityHall_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "City park 2030 \"the sponge park\": permeable pavers, grass joints, meadow beds, rain basin with mist, larch benches, solar light columns (BLD_2030_Park_01) built by the autopilot – for review", date: "2026-11-06" },
      { title: "Hospital 2030 \"the green clinic\": larch panels, bronze profiles, sedum green roof, wooden louvres, +1 floor (BLD_2030_Hospital_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Café 2030 \"wood and green\": larch boards, planted green fields, sedum roof, dark bronze, oak signs (BLD_2030_Cafe_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "House 2030 \"larch and green\": larch-board facade, bronze windows, flower boxes and a trellis instead of the satellite dish, PV stays (BLD_2030_Residential_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Department store 2030 \"green bands\": a larch trough with a hedge on every floor, warm sand ceramic, bronze profiles, roof garden and PV instead of AC units, +1 floor (BLD_2030_DepartmentStore_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Round-cornered office tower 2030 \"hedge bands and solar pergola\": a hedge on every floor, warm white ceramic, bronze lines, roof garden with PV pergola, +4 floors (BLD_2030_Skyscraper_02) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Office tower 2030 \"timber fins and roof garden\": light larch, timber fins, planter bands, roof garden with trees and PV, +4 floors (BLD_2030_Skyscraper_01) built by the autopilot – for review; first 2030 version", date: "2026-11-05" },
      { title: "Merged-lot tower 2010 \"glass wedge\": 48 m wide glass slab, silver-grey piers, blue-green glass, glass wedge crown, 110 m (BLD_2010_MergedTower_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Car park 2010 \"petrol and LED\": petrol aluminium panels on the spandrels, light grey concrete, dark grey decks, white letters, blue P, +1 deck (BLD_2010_ParkingGarage_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "TV tower 2010 \"white shaft, dark head\": white coated shaft, anthracite head with clear glass, longer digital mast, +1 shaft segment (BLD_2010_TVTower_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Post office 2010 \"granite and opal glass\": granite kept, anthracite windows, clear glass, white opal glass entrance bay with clock, yellow dock doors, +1..+2 floors (BLD_2010_PostOffice_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "School 2010 \"brick, anthracite and lime\": brick kept, anthracite windows and sun blinds, clear glass, lime green spandrels, 0..+1 floor (BLD_2010_School_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Gas station 2010 \"anthracite and green\": anthracite composite panels, white fascias with a green light line, green pumps, clear glass, no added floors (BLD_2010_GasStation_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Apartment block 2010 \"white and anthracite\": white render, dark grey piers and base, anthracite windows and parapets, oak door, +1..+2 floors (BLD_2010_ApartmentBlock_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Cinema 2010 \"the black light box\": anthracite-black front between light grey fins, clear glass, dark grey auditorium, red pylon, +1..+2 floors (BLD_2010_Theater_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Grand hotel 2010 \"the bright grand hotel\": light stone panels, clear glass with dark spandrels, anthracite, stainless sign, +3..+8 floors up to about 105 m (BLD_2010_Hotel_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Fire station 2010 \"the red edge\": light grey render, red metal fascia and tower cap, anthracite windows and plinth, +1..+2 floors (BLD_2010_FireStation_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Police station 2010 \"the bright station\": white render on insulation, clear glass, anthracite plinth, blue fascia band, +1..+2 floors (BLD_2010_Police_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Plaza 2010 \"the bright civic square\": light grey slabs, stainless obelisk with a light tip, LED light columns, wooden benches, kiosk with a zinc roof (BLD_2010_Plaza_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Newspaper building 2010 \"the glass newsroom\": +3..+8 floors (default ≈ 108 m), light panels and clear glass, white-blue LED band, clear lit glass globe in the red ring (BLD_2010_Newspaper_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Bank 2010 \"the glass vault\": widened onto two lots (64 m), +3..+7 floors (up to ~113 m, below the city hall), light panels and clear glass, glass barrel vault with stainless ribs (BLD_2010_Bank_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "City hall 2010 \"the civic forum\": widened onto two lots (80 m), +3..+8 floors, light panels and clear glass, 50 m tower shaft with a clear pyramid and stainless spire (BLD_2010_CityHall_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "City park 2010 \"the bright plaza\": light grey slabs, water feature with vertical jets instead of the obelisk, wooden benches, LED light columns (BLD_2010_Park_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Hospital 2010 \"the bright clinic\": white panels, clear glass in anthracite mullions, light grey stone, green accents, +1 floor (BLD_2010_Hospital_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Café 2010 \"coffee house\": anthracite panels, oak slats, dark zinc, warm-white LED light instead of neon (BLD_2010_Cafe_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "House 2010 \"white, anthracite, solar\": energy-renovated – white render, anthracite windows without glazing bars and tiles, solar panels on the rear roof slope (BLD_2010_Residential_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Department store 2010 \"glass and surface\": light ceramic panels instead of granite, clear glass, anthracite profiles, clear glass crowns, +1 floor (BLD_2010_DepartmentStore_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Round-cornered office tower 2010 \"glass and surface (light)\": silver-white panel bands, light neutral glass, anthracite canopy, stainless entrance and letters, +6 floors (BLD_2010_Skyscraper_02) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Office tower 2010 \"glass and surface\": anthracite panels instead of granite, light neutral glass, flat roof light instead of the pyramid, +6 floors (BLD_2010_Skyscraper_01) built by the autopilot – for review; first 2010 version", date: "2026-11-05" },
      { title: "Parking garage 1990 \"coating and green\": light coated spandrel bands, green-grey decks, dark green letters, +1 deck (BLD_1990_ParkingGarage_01) built by the autopilot – for review; all 1990 versions are now done", date: "2026-11-05" },
      { title: "TV tower 1990 \"silver and signal\": silver tower head with blue reflective glass, light grey shaft, tower +10 m (BLD_1990_TVTower_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Post office 1990 in stone and glass: light grey granite slabs, blue-green glass entrance bay with clock, dark blue frames, +1 floor (BLD_1990_PostOffice_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "School 1990 in brick and green: dark green window bands, mint green spandrels, white entrance bay with clock, +1 floor (BLD_1990_School_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Gas station 1990 with shop and illuminated band: silver-grey metal panels, white fascias with a red band, red pumps, two floors of flats (BLD_1990_GasStation_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Apartment block 1990 in insulation and pastel: vanilla-yellow render, white PVC windows and balcony parapets, terracotta raised ground floor (BLD_1990_ApartmentBlock_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Cinema 1990 in neon and turquoise: turquoise panels between white fins, blue mirror glass, peach auditorium, violet pylon (BLD_1990_Theater_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Grand hotel 1990 in travertine and bronze glass: cream fins, bronze mirror glass, green granite plinth, gold roof sign, +4 floors (BLD_1990_Hotel_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Fire station 1990 in white and red: white render, red window frames, granite around the doors, anthracite fascia (BLD_1990_FireStation_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Police station 1990 in clinker and blue: red-brown clinker, light surrounds, blue window frames, granite plinth, blue roof band (BLD_1990_Police_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Plaza 1990 as an obelisk square: grey-pink granite, anthracite bands, red granite obelisk with a gold tip, lanterns and a glass pavilion (BLD_1990_Plaza_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Newspaper house 1990 as a media globe: light grey granite, blue mirror glass, LED news ticker, blue glass globe with a red ring (BLD_1990_Newspaper_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Major bank 1990 as a rose granite tower: rose granite, green mirror glass, copper barrel vault with a fan window (BLD_1990_Bank_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "City hall 1990 as a crown of glass and gold: light granite, mirror glass, round columns, clock tower with a glass pyramid and gold spire (BLD_1990_CityHall_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "City park 1990 as a granite plaza: light granite, obelisk fountain with water arcs, historic-style lanterns, petrol-green benches (BLD_1990_Park_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Hospital 1990 as a mirror clinic: white panels, mirror glass, granite ground floor, turquoise columns and a glass pyramid, +1…+2 floors (BLD_1990_Hospital_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Diner 1990 as a neo-diner: stainless steel, glass blocks, checkerboard base, turquoise mansard with pink neon (BLD_1990_Cafe_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "House 1990 in apricot render with muntin windows, bay window or conservatory and a gabled porch roof (BLD_1990_Residential_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Department store 1990 \"Galleria\" with granite bands, mirror glass, turquoise profiles and a glass crown (BLD_1990_DepartmentStore_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Parking garage 1970 \"CITY PARKING\" with precast bands, ramp, stair tower with a P sign and barriers (BLD_1970_ParkingGarage_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "TV tower 1970 \"TV TOWER\" with an exposed-concrete shaft, a glazed tower head and a red and white mast (BLD_1970_TVTower_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Post office 1970 with dark brown ceramic cladding, bronze windows and a white clock bay (BLD_1970_PostOffice_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "School 1970 with aluminium window bands, yellow spandrel panels and sun-blind boxes (BLD_1970_School_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Gas station 1970 in brown brick with a manager's flat, an illuminated canopy fascia and orange box pumps (BLD_1970_GasStation_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Apartment block 1970 with pale panel cladding, wide brown windows and balcony bands with parapet panels (BLD_1970_ApartmentBlock_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Cinema 1970 with an aluminium front, narrow windows, a backlit letter board and an orange \"CINEMA\" pylon (BLD_1970_Theater_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Grand Hotel 1970 with concrete fins, room-wide aluminium windows and an orange roof sign (BLD_1970_Hotel_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Fire station 1970 in exposed-aggregate concrete with wide windows, red doors and a red band on the hose tower (BLD_1970_FireStation_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Police station 1970 in pale precast concrete with framed windows, a dark plinth and blue lamps (BLD_1970_Police_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Plaza 1970 \"Island Plaza\" with exposed-aggregate concrete, a stainless steel cube tower, raised planters and an orange kiosk (BLD_1970_Plaza_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Newspaper building 1970 \"Daily News\" with exposed-aggregate bands, aluminium window ribbons, an orange drum and an aluminium globe (BLD_1970_Newspaper_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Grand bank 1970 \"Island Trust Bank\" in dark granite with bronze window strips and a louvred penthouse (BLD_1970_Bank_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "City Hall 1970 in exposed-aggregate concrete with a pillar portico, taller clock tower, concrete crown and antenna mast (BLD_1970_CityHall_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "City park 1970 with exposed-aggregate paving, planter boxes, a concrete fountain and globe lamps (BLD_1970_Park_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Hospital 1970 with exposed-aggregate bands, bronze window bands and added floors (BLD_1970_Hospital_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Diner/café 1970 in brick with a shingled mansard and box signs (BLD_1970_Cafe_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Post office 1950 with granite entrance bay, clock and mail dock (BLD_1950_PostOffice_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "School 1950 with clock entrance bay and window bands (BLD_1950_School_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Gas station 1950 with canopy, pumps and GAS sign blade (BLD_1950_GasStation_01) built by the autopilot – for review", date: "2026-11-05" },
      { title: "Apartment block 1950 with white balconies (BLD_1950_ApartmentBlock_01) built by the autopilot – for review", date: "2026-11-04" },
      { title: "Cinema 1950 with ziggurat pylon and marquee (BLD_1950_Theater_01) built by the autopilot – for review", date: "2026-11-04" },
      { title: "Grand Hotel 1950 with marquee and roof sign (BLD_1950_Hotel_01) built by the autopilot – for review", date: "2026-11-04" },
      { title: "Fire station 1950 with red doors and hose tower (BLD_1950_FireStation_01) built by the autopilot – for review", date: "2026-11-04" },
      { title: "Police station 1950 with blue lamps and radio mast (BLD_1950_Police_01) built by the autopilot – for review", date: "2026-11-04" },
      { title: "Civic plaza 1950 \"Island Plaza\" with fountain and memorial column (BLD_1950_Plaza_01) built by the autopilot – for review", date: "2026-11-04" },
      { title: "Newspaper building 1950 \"Daily News\" with copper pyramid and gold globe (BLD_1950_Newspaper_01) built by the autopilot – for review", date: "2026-11-04" },
      { title: "Grand bank 1950 \"Island Trust Bank\" with columned loggia and gold crown (BLD_1950_Bank_01) built by the autopilot – for review", date: "2026-11-04" },
      { title: "City Hall 1950 with clock tower (BLD_1950_CityHall_01) built by the autopilot – for review", date: "2026-11-04" },
      { title: "Journal in German and English (switch top right)", date: "2026-11-04" },
      { title: "Menu comes back after walking (F)", date: "2026-11-04" },
      { title: "Pedestrians keep their distance: overtaking by turning instead of sliding, 10 waiting spots per crosswalk side, opposite direction on the right", date: "2026-11-04" },
      { title: "Buildings shine: roughness/metal in all 175 materials, 1990s mirror glass reflects (confirmed in Play)", date: "2026-11-04" },
      { title: "Play test passed: tower renovated 1950 → 1970 → 1990", date: "2026-11-04" },
      { title: "City centre starts with 1950s only (incl. hospital and café); towers can be renovated twice (1950 → 1970 → 1990, all versions)", date: "2026-11-04" },
      { title: "1990s tower version with glass bay and corner loggias (BLD_1990_Skyscraper_04) approved and imported into Unreal", date: "2026-11-04" },
      { title: "New admin menu: tabs Build / World / Tools, collapsible cards, scrolling", date: "2026-11-04" },
      { title: "1990s tower version “granite picture frame” (BLD_1990_Skyscraper_02) approved and imported into Unreal", date: "2026-11-04" },
      { title: "Second 1990s tower version (round corners, glass bands) approved and imported into Unreal", date: "2026-11-04" },
      { title: "Grass library + sliders in the admin menu (outside / parks)", date: "2026-11-04" },
      { title: "1990s tower (granite, mirror glass, glass pyramid) approved and imported into Unreal", date: "2026-11-04" },
      { title: "Lady with straw hat, gloves and handbag in the game", date: "2026-11-04" },
      { title: "New pedestrian: worker in dungarees and flat cap", date: "2026-11-04" },
      { title: "Bright spot under the ladies' eyes fixed", date: "2026-11-04" },
      { title: "Skirt covers the knees when sitting (sit shape)", date: "2026-11-04" },
      { title: "Pedestrians optimized: 3000 figures 29 → 42 FPS", date: "2026-11-04" },
      { title: "Pedestrian performance measurement (300 / 3000)", date: "2026-11-04" },
      { title: "Title screen with logo and START (new island)", date: "2026-11-04" },
      { title: "Rosenwald Ranger 310 pickup in traffic", date: "2026-11-04" },
      { title: "Rosenwald 500 (invented luxury sedan) in traffic", date: "2026-11-04" },
      { title: "Pedestrian variety: colours, fabric patterns, sizes, 6 figures", date: "2026-11-04" },
      { title: "1950s lady in the game (Quinn proportions, bob, female walk)", date: "2026-11-04" },
      { title: "First 1950s car (sedan) in traffic", date: "2026-11-04" },
      { title: "First real pedestrian figure (1950s gentleman, MakeHuman)", date: "2026-11-04" },
      { title: "Pedestrians sit down on park benches (with sitting down/standing up)", date: "2026-11-04" },
      { title: "Parks as pedestrian destinations", date: "2026-11-04" },
      { title: "Pedestrian behaviour + stress-test button (10×)", date: "2026-11-03" },
      { title: "Pedestrian network + 300 pedestrians (placeholders)", date: "2026-11-03" },
      { title: "First-person walking (key F)", date: "2026-11-03" },
      { title: "Scaffolding grows smoothly instead of in steps", date: "2026-11-03" },
      { title: "1950s hospital in 3 variants", date: "2026-11-03" },
      { title: "1970s towers _04 and _05", date: "2026-11-03" }
    ]
  },

  phases: {
    p1: { title: "Foundation", range: "26–30 Sep", text: "Island from the map template, districts, building pipeline." },
    p2: { title: "Lot system", range: "25–29 Oct", text: "Plots along the road, preview, grid." },
    p3: { title: "Island from a seed", range: "26 Oct – 1 Nov", text: "The island is created at runtime – shape, districts, building fields, mountains." },
    p4: { title: "The city comes alive", range: "1–3 Nov", text: "Road building, intersections, traffic lights, traffic, clouds, city centre, parks." },
    p5: { title: "Eras & people", range: "3 Nov", text: "Construction sites 1950 → 1970, new buildings, walking around." },
    p6: { title: "Game concept", range: "3–9 Nov", text: "UI, economy, ecosystem – think first, then build." },
    p7: { title: "Playable", range: "since 5 Nov", text: "Monthly tick, commands, NPC opponents, multiplayer – the concept runs in the game; since 9 Nov politics, media and economy with agenda, War Room and Roll Call." }
  },

  milestones: {
    "classic-hud": {
      title: "Second interface \"Classic\": calm bars top and bottom, main window, profile card on the left",
      summary: "Following the user's mockup there are now two interfaces, switchable in the gear window. \"Radial\" (the existing HUD) stays unchanged.",
      points: ["Top: a dark bar with city, district, date, a timeline of the next twelve months, city treasury/private account and speed.", "Bottom: six tabs (Build, Politics, Media, Economy, Population, Administration); each opens a calm column menu upwards, public buildings in blue under \"Public - city treasury\".", "Large views (e.g. the city council) fill the frame between the bars; a councillor's profile card sits on the left in the info window's place instead of over the main window.", "Clicking a bottom tab closes the main window and opens that menu directly.", "Buttons no longer wobble when clicked (pressed = same size). Graphics generated as sheets and cut up.", "Approved by the user in Play (12.11.)."],
      caps: ["Classic: top bar, bottom tabs, Build menu", "Classic: city council as the main window with all nine seats"]
    },
    "kueste-verkehr-12": {
      title: "Coast roads of computer players (#32) and visible traffic by congestion (#41)",
      summary: "More waterfront lots, and cars that follow the amount of traffic.",
      points: ["Computer players build short roads along the coast (in 25 m steps, about 40 m from the water) so waterfront lots appear; tested in game: 2 shore roads, 4 buildings on the water (cafes x1.20, apartment block x1.25).", "Still to improve: on a ragged shore the walk often stops after one step, long curves fail the bend rule.", "Traffic stage T2: the number of visible cars follows road congestion (test: 18 normally, 56 in heavy congestion); in the hearings overlay roads are coloured by congestion.", "Open: the user's visual check of the overlay colours and of slowing down in congestion."],
      caps: []
    },
    "ratsgesichter-47": {
      title: "Politics windows: 45 councillor faces, your own vote in the district council, crash fixed (#47)",
      summary: "City council, hierarchy and district council share one frame; every councillor has their own live portrait.",
      points: ["45 councillor figures (MakeHuman, Blender headless): different faces, ages, weights, skin tones, hairstyles, beards, glasses and hats, plus per-person suit/tie/hair colours.", "Models load only when a portrait shows them and are released after 30 s unseen.", "Hair after the user's contact sheet: soft fringe swept to one side instead of a straight edge; the side part keeps the eye free.", "Players with a district council seat vote themselves: Yes / No / Abstain on open motions and field releases, current vote in gold, changeable until the session.", "Crash in the district council fixed: the growing booth list invalidated the portraits' image pointers.", "Duplicate faces in the district council fixed: every district politician had seed 0 (random range overflowed) - the name is now the fallback.", "Approved by the user in Play (12.11.)."],
      caps: []
    },
    "dienste-42": {
      title: "More public services: clinic, district office, parks & rec, public works, condition of parks and roads (#42)",
      summary: "The user's decisions of 11.11. built in, first with stand-in models; the autopilot builds the real buildings later.",
      points: ["Doctor's clinic (public, 1,500 residents) and private clinic (user: a loss-maker - only costs from the private account, no income, makes the district happier).", "District office (one per district): the district council meets monthly instead of quarterly, hearings/objections cost 30 % less influence, the district leader (user: the seat holder, not the owner) gets +2 influence a month.", "Parks and plazas wear out; a parks & rec office looks after ~6 ha, park upkeep -20 %, summer concert in July; 'Renovate' in the info window (district treasury, by area x era).", "Roads wear with age and traffic (~15 years to 'poor'); a public works yard resurfaces 3 km a month; list Public > Transit > Road care with 'Renovate road' (without a yard city crews x3); below 50 % average -1 happiness.", "The new services are now in the radial menu (Services, Utility, Private > Health) - before they could not be reached.", "Tested in game (-game, seed 641163): building at the right price, park care, wear of NPC roads, panel. Still open: renovating your own road, visible cracks, tenders."],
      caps: []
    },
    "medien-stufe4c": {
      title: "Media empire stage 4c: cable, A/B headlines, viral stories (#46)",
      summary: "Media change with the eras.",
      points: ["Cable from 1978: small channels take 15-35 % of viewers, your own viewers stay loyal longer.", "A/B headlines from 1996: a second headline, the one with the better click forecast runs; if they contradict each other it costs credibility.", "Viral from 2008: strong front-page stories hit reputation much harder and sell more, part of it is forgotten the next month.", "Also: 10 % deposit on offers to humans; fix: withdrawing an offer did not work."],
      caps: []
    },
    "medien-stufe4ab": {
      title: "Media empire stages 4a + 4b: media chain, buying outlets, distress sales, TV programme (#46)",
      summary: "Single outlets become an empire: stories run across all your channels, rivals can be bought, and every station has a simple programme.",
      points: ["Media chain: a front-page story is followed up the next month by your other papers/stations (stations as an interview); a correction stops the chain.", "Buying outlets: computers sell at an asking price, humans get an offer; keep the line or merge it (some readers leave); the building stays with its owner; 12-month resale lock.", "Distress sales (user decision: option 2, provisional numbers): after a lost libel case or a confirmed scandal, outlets can be bought without consent for 6 months (-20 %); 3 months deep in debt = even the last outlet (-30 %).", "TV programme (user: no TV tycoon inside the tycoon): one direction per station fills daytime, prime time and late night, single slots by hand; keeps running unchanged, mild fatigue; drives audience, ads, credibility and votes.", "Holdings and shell companies come later with the finance pillar (user: \"Yes, later\").", "Tested in game (-game, 5 runs): programme, buying, refusals, forced sale of a last outlet, chain with its follow-up the next month, no errors."],
      caps: []
    },
    "redaktion-stufe3": {
      title: "Media empire stage 3: scandal chain with consequences, crisis room, selling leads, computer media barons (#46)",
      summary: "The three pillars are connected: a printed scandal costs support in the council, campaign strength and contracts, and the subject has to answer.",
      points: ["Fallout of every scandal: every council seat's favour drops (2-8, more on solid evidence and with honest councillors), running candidacies lose strength, computer contract partners may cancel; land value follows reputation.", "A loss of 3 reputation or more starts a crisis: 2 months to answer in the new crisis room (main window, radial menu Media > Crisis, red tab in the newsroom).", "Seven answers with a forecast before choosing: deny, apologise, spin (needs a spin doctor, may be exposed), sue (verdict after 3 months, damages from the publisher), hit back (print your own scandal lead about the publisher), ads, silence.", "Selling leads: to another newsroom or to the subject at 1.5x the price (catch and kill). Offers to you show up in the newsroom and the crisis room.", "Computer media barons use the same commands: they answer crises by evidence and profile and sell leads.", "Newsroom staff with live portraits from the portrait booth (initials until the booth slots reach the newsroom).", "Tested in game (-game, log): a crisis starts, computers apologise or sue, verdicts after 3 months (won and lost), catch and kill, crisis room and newsroom open, no errors."],
      caps: []
    },
    "redaktion-stufe2": {
      title: "Media empire stage 2: several outlets competing - audience, advertisers, counterstories (#46)",
      summary: "User: stages 2 and 3, one commit per stage. Every media building is now its own outlet with a name and an editorial line; all outlets fight for the same audience.",
      points: ["Every finished newspaper or TV tower becomes its own outlet (name, editorial line, credibility); the Island Gazette stays. Tabs at the top of the newsroom pick the outlet.", "Shared audience per kind (newspaper/TV): credibility, line, scoops and staff pull readers away from rivals, corrections cost some. A strip shows every outlet's share.", "Advertisers: offers with a monthly payment, some with a condition (nothing bad about a certain player). Print anyway and the contract ends; sit on a scandal too long and the others get a 'conflict of interest' lead.", "Big scandals can break mid-month as an extra edition when another newsroom knows them too (race for the scoop).", "Counterstory: answer a story about you within 3 months - on thin evidence it wins back reputation and costs the other outlet credibility, on solid evidence it hurts you. Computers answer by themselves.", "Tested in play (-game, log): outlets appear, shares move, a contract breaks on printing, computers accept offers, mid-month extra, counterstory."]
    },
    "redaktion-stufe1": {
      title: "Media empire stage 1: one newsroom with leads, frames and a front page (#46)",
      summary: "User: \"Stage 1: one outlet\" - the newsroom from the \"Media empire\" concept, playable in the big main window; laid out like tester Nohr's reference image (leads left, newspaper centre, frame + placement right).",
      points: ["Leads come from the game: envelopes, rigged tenders, staff skeletons, investigators' dossiers, high heat, pollution, good news (openings, prosperity). Each has evidence, impact, an expiry and knows which newsrooms have it.", "A newsroom = your own newspaper/TV tower or 51 % of the Island Gazette; editorial line (balanced, investigative, partisan, sensational) changeable once a year.", "Per story a frame (investigative, balanced, critical, supportive, sensational) and a placement (front page, inside, buried) with a forecast before printing: subject's reputation and heat, own credibility, risk of a correction, extra sales.", "Investigate (evidence +12..+38 in a month), extra edition right away, bury your own scandals (may leak), edition at the end of the month; whoever prints first has the scoop.", "Computer newsrooms (Gazette, districts) work on their own by profile; big front pages go to the front-page scene.", "Tested in game (-game, log): printing, corrections, burying with a leak, extra edition, investigation, editorial line."],
      caps: []
    },
    "live-council-portraits": {
      title: "Live council portraits: councillors breathe, blink, look around and show their attitude",
      summary: "User: \"Yes, build live\" - real 3D heads in the council window instead of painted figures, checked in game and approved.",
      points: ["Two 1950s councillors (about 35 and 55) from MakeHuman/Blender with six face shapes: neutral, pleased, angry, nervous, suspicious, blink.", "Each portrait is a hidden booth in the game with its own camera, warm light and backdrop; the expression follows the councillor's attitude towards the player, the head turns now and then, blinking at a random rhythm.", "Cost measured (-game): 9 live portraits = 0.02 ms per frame on the game thread, ~11 frames/s per portrait; GPU cost not measured yet.", "Default: only the first councillor live (console hud.LivePortraits 9 = all); without the models the painted figure stays.", "Open: small notches in the younger figure's hairline."],
      caps: ["Live portrait from the game: neutral, angry, pleased (older model)"]
    },
    "belegung-nachfrage": {
      title: "Occupancy and demand per building (#44, steps 1-6)",
      summary: "Tester ticket #44: every building ran at full capacity no matter how many people lived nearby. Implemented from the concept \"Occupancy and demand\", step by step with the user's OK.",
      points: ["1: info windows show last month's real revenue and why (staff, customers, power, ads).", "2: every building has its own occupancy; new buildings start at 15 % and fill up over months.", "3: homes fill by location (jobs within commuting reach, park, smoke); only as many people move to the island as there is work.", "4: commuting instead of district quotas - each home sends its workers to jobs up to ~3 km away, staffing per business, unemployment counts where people live.", "5: same-kind businesses share their market (cinema visitors, newspaper readers, office demand, one industrial sales market) - overbuilding lowers revenue.", "6: measuring command shady.Balance + two runs 1950-66: markets scaled down to the real island size, rent $80 -> $95; afterwards no building type loses money (except the coal plant, as before).", "Open: NPC district treasuries drop deep into the red from ~1960 (separate issue)."]
    },
    "ring-tip-wedge": {
      title: "Ring tip: no more light wedge outside the ring road",
      summary: "User (\"Yes, fix it\"): at the west tip of the ring (seed 2147483647) a ~10 m triangle of light paving lay in the green.",
      points: ["Diagnosis: not the sidewalk pieces, corner triangles or road baking; the cause was the island raster - 30 m cells whose corners were all centre were drawn fully as concrete and stuck out past the ring curve.", "The island surface now measures the real ring road per angle: concrete ends at most 3 m inside the ring centre line, triangles near the ring are clipped there, the outside becomes terrain in the colour of the neighbouring land.", "Display only: districts and island shape unchanged (border check still 6 open ends at the centre).", "Remaining: a slightly darker grass patch at that spot - the user will have a look."]
    },
    "session-structure-11-11": {
      title: "Work saved: handoffs from all sessions, a new Main + three Kanban sessions",
      summary: "User's brief 11 Nov: wrap up all open sessions of the group, take everything into the MD files, then continue fresh with Main and Kanban #1-#3.",
      points: ["Each of the 12 sessions wrote its state to (done, open, test recipes, proposals).", "Main merged them into (ring corners, placement check/yards, gear window, taxes, power, media power, session structure) and (pending play tests, ring tip, EOS test and more).", "The structure stays: Main orchestrates, grants EDITOR/GAME slots and builds/publishes patches only after asking; Kanban #1-#3 work tickets from the board and report \"ready for patch\".", "Next patch ready (,), waiting for the user's gear test."]
    },
    "hud-gear-popup": {
      title: "Gear window: next to the minimap, G key, Esc and x",
      summary: "User's play test: the \"Panels and layout\" window lay over the gear and could no longer be closed.",
      points: ["Opens left of the minimap frame (bottom aligned), above it when there is no room, always fully on screen and never over the gear or light bulb.", "G opens and closes it, Esc closes it, x at the top right; tooltip \"Panels and layout (G)\".", "In arrange mode it follows the moved minimap frame.", "User's play test pending."]
    },
    "city-ring-corners": {
      title: "City centre: no more white slab areas at ring corners; painted parks grow on",
      summary: "User with a screenshot (seed 2147483647): \"so much white area\" in the city, between the houses and at the ring tip.",
      points: ["Cause: since #11, blocks at ring corners lose their avenue but still counted as inner blocks – no houses, no park, only back yards on bare paving.", "Now such blocks count as outer blocks and become green or park; the park search covers the whole ring (the tip of a lopsided ring was never searched).", "Checked in game: 18 parks with 9.5 ha instead of 6.7 ha.", "Painted parks and plazas (#35): painting on at an existing area enlarges it instead of creating a new one, flush with the sidewalk.", "Open: a small sidewalk triangle outside the ring tip (cause narrowed down, in the BACKLOG)."]
    },
    "sites-no-overlap": {
      title: "Building sites no longer overlap; yards fit the free space",
      summary: "Tester feedback #37 and #39: two buildings ended up inside each other, crane and fence stood on the neighbouring lot.",
      points: ["The server checks every placement against all building records, including ones from the same frame that are not standing yet, plus full-island blocks and painted areas.", "Roads check the real building footprints (also buildings without a lot actor).", "The site yard measures the free space behind the house: from 9 m a full yard with crane, 2.5-9 m fence only, otherwise no yard; it may reach onto free land beyond its own lot.", "Test aid: log of lot and yard positions. Open: the back-to-back case in play."]
    },
    "power-grid-media-power": {
      title: "Power as an island grid, media power, property tax in the admin menu; update 0.1.305",
      summary: "Tester feedback #33 and #38: power plants earned nothing from other districts, newspapers and TV stations had no effect on campaigns.",
      points: ["Power: contracts, own plants, other districts' surplus, then city power; every MW delivered pays the plant owner 1,000 $ x era, the rest is exported. Empty treasury = blackout.", "Media power: every own newspaper and TV tower raises reach (up to x2) and halves the cost of own channels.", "Business property tax adjustable in the admin menu (F10 > Lots, 0-1 % per month) so we can try the balance ourselves.", "Published together with road permits, taxes and the HUD rework as update 0.1.305."]
    },
    "hud-topbar-agenda-dots": {
      title: "HUD tidied up: agenda at the very top as symbol dots, usable gear, fewer buttons",
      summary: "Wishes from the play test: the gear's sliders could not be used, gear and windows lay on top of each other, the agenda strip was too wide and its dots hard to hit, and there were too many quick buttons at the bottom right.",
      points: ["Gear: now lies above the info and main windows, only one of them is open at a time, and dragging a slider shows a preview of its effect.", "Main window can be moved and resized in arrange mode, with its own text size.", "Agenda strip at the very top above the cards, only 40 px high. Dates are big round dots with a symbol (book = vote, tick = election, people = job market, money = new year...), without text - the title is in the tooltip, a click opens the info window at half height. Gold ring = your own stake.", "FPS display and \"My bets\" alerts can be switched on and off and moved in the gear.", "The \"District performance\" panel is gone, its rings are in the expanded district card.", "Quick-button row gone: only the light bulb (How to play) and the gear, small inside the minimap; building, roads and hearings go through the radial menu, overlay with O.", "Tax slider in the tilted info window: drag with the button held, mouse wheel = one step."]
    },
    "taxes-budget-proptax": {
      title: "Taxes and budget: property tax on every building, complete months, a slider you can drag",
      summary: "Tester feedback #34 and #36: business buildings showed no tax, business tax was far too low, the budget showed -0, flat city programs and unexplained drops. Plus the user's wish: every building pays property tax, and the tax control should be a slider you drag.",
      points: ["Business tax on profit, 10-25 / 15-30 / 20-40 % depending on the council's level (default 22.5 %), stays fully in the district - about 1.9x as much as before.", "Property tax on every building: business, office, industry, leisure and media buildings pay 0.25 % of the build price x land value x district rate per month (the owner, even without profit); homes show their share of the residents' property tax; public buildings, services, parks and plazas are exempt (confirmed by the user).", "Info window per building: last month's revenue, upkeep, business and property tax and the profit after taxes.", "Budget: complete months (nothing vanishes between two month changes any more), every treasury movement has its own line, city programs name each law, no more -0.", "Multiplayer: 19 values never reached the other players (budget totals, taxes per building, TV towers, no votes and more), because Unreal only replicates the first field when several share one line.", "Tax control: big click zones without gaps, drag and mouse wheel = one step.", "Checked with host + client: the factory pays 22.5 % business tax, property tax per building matches the budget lines. Open: whether 0.25 % is too steep early in the game (a factory in an empty district pays almost all its profit)."]
    },
    "main-window-council": {
      title: "Main window + city council at a meeting table; info windows adjustable",
      summary: "Next to the small info window there is now a big main window for graphical views: from the outermost ring of the radial menu to just before the minimap, below the agenda strip. The first topic is the city council: nine figures at a meeting table with name plates instead of a list.",
      points: ["City council (Politics > Council): the mayor with his chain of office at the head, the two at-large seats beside him, three district seats on each side. Suit by stance, tie in the player colour, your own seat in gold.", "Name plate per person: name, role, stance and the Lobby / Read / Envelope buttons; grey buttons show the reason. In the middle of the table: 5 of 9 votes and the camps.", "Esc or Close closes it; clicks on the window don't reach the world. More topics will move into the main window later.", "Info windows: under Gear > Panels and layout, size and text can be set separately for the tilted (3D) and the flat (2D) view. The window keeps its width, the text grows and reflows. The flat view opens in place."]
    },
    "road-permits-undo": {
      title: "Roads: permission for other districts, right click undoes",
      summary: "Three wishes from the play test: a computer player had built a road into the user's district, a loop from the centre ring back to the same point became a loose circle, and right click cancelled the whole road building.",
      points: ["Other district: roads into it only go in as a request. A computer owner decides at once, a human gets a card with Allow / Decline. Allowed is at most 10 m on their land (further over water as a bridge); from there the owner builds on.", "Right click while building roads takes back the last piece, the cost is refunded in full, and building goes on from the previous anchor point. Esc ends road building.", "Loop at the ring: the road stays open and connected to the ring at both ends instead of closing into a loose circle.", "Computer opponents no longer build into other districts; a T-junction into another player's road now needs permission too."]
    },
    "road-border-exact": {
      title: "Roads: checked exactly at the field border",
      summary: "User in Play: by chaining short road pieces you could build into locked fields (even across the map) and into the water, where the road then dropped into the sea. Only long roads were rejected. Cause: within 45 m of every connection the field and land checks were skipped, a leftover from the inexact 30-m grid.",
      points: ["Only the connected road's own road space is exempt now (half width + 2 m sidewalk). Everything else is checked against the exact fields every 1 m on the centerline and both edges, whatever the length.", "A road may reach right up to the border; as soon as its road space touches a locked or foreign field it is invalid.", "An open end in the water is rejected (bridges must end on land on both shores), now on the server too, not only in the preview.", "Applies to players, computer opponents and the server alike; admin roads stay free (physical rules only)."]
    },
    "speed-every-player": {
      title: "Multiplayer: every player sets the speed",
      summary: "Until now only the host could change the game speed; for other players the II > >> >>> buttons on the clock card did nothing. Now every player may pause or set the speed. The command that reaches the server last wins, and everyone sees a message such as \"Anna set speed to >>\" or \"Anna paused the game\".",
      points: ["Server setting shady.SpeedControl: 0 = all players (default), 1 = host only - ready for a later options menu.", "The message only appears with more than one human in the game; the log records every change as \"Speed:...\".", "Unchanged: a solo host pauses automatically for the front page, construction sites stand still while paused."]
    },
    "infowindow-flat": {
      title: "Info windows: a click turns them flat for reading",
      summary: "The tilted 3D look of the info windows (matched to the reference image) stays the default. New: clicking the window (not a button) turns it smoothly forward in 0.3 s, flat and 1.4 x larger in the middle of the screen so it is easy to read; a second click turns it back.",
      points: ["Applies to all tilted windows: topic windows (budget, laws,...), building and field info, the build-mode card.", "The camera values themselves are animated (yaw, pitch, eye offset to 0, scale and position to the target) - every in-between state stays exactly invertible, so buttons and wheel scrolling hit correctly even during the turn.", "Flat, the content is rendered at the larger resolution (sharp) and kept on screen. Ctrl + mouse wheel, close, Esc and scrolling work as before.", "Buttons, sliders, checkboxes and scroll bars (greyed-out buttons too) do not toggle; a double click toggles only once. Clicks on the flat window never reach the world.", "Nothing is saved: closed and reopened, the window is tilted again. Test without a mouse: console hud.FlatCard 1 / 0."],
      caps: ["Before: tilted (default)", "During the turn", "After: flat, large, sharp"],
      compareCap: "Click on the window: tilted -> flat for reading"
    },
    "waterfront-1950-assets": {
      title: "Five waterfront building types, three form variants each (#32)",
      summary: "All five waterfront families from the concept are done as 1950s buildings: boathouse, beach villa, lido, fishing harbour and cargo quay, each with three clearly different form variants (A/B/C). Buildings sit on the normal lot; jetty/mole/quay, boats and ships are separate water modules that the game sets at the water level of each shore.",
      points: ["Shared kit for all waterfront families (wf_spec/wf_kit/wf_nanite/wf_validate): same coordinates (water modules from the shore line behind the lot centre), a 4 m walkway segment for the sand bank, the same checks (piles 6 m below the water, boats float, lot fits, full material contract).", "Boathouse: club house, boat rental, boat yard - with jetty, rowing and motor boats. Beach villa: flat-roof bungalow, white cube, house on stilts - with private jetty and boat.", "Lido (public): rotunda with cabin wings, kiosk with cabin row, beach cafe with roof terrace; bathing jetty, diving tower, raft, buoy line, plus beach chair, umbrella, lifeguard tower and flag pole as separate pieces for the sand.", "Fishing harbour (sea only): fish market hall with roof lantern and stone mole, smokehouse with three chimneys and net shed, fishermen's co-op with tower and walled basin; cutters as separate meshes.", "Cargo quay (sea, steep coast): transit shed with sawtooth roof, coal silos with conveyor and bunkers, four-storey brick warehouse with wall hoists; granite quay wall with rails, portal cranes and a coaster. Basis of the trade stage harbour.", "Validation 185-213 checks per family, all passed. Still open: import into Unreal, then the game rules (waterfront lots, bonus, shore requirement per building type)."],
      caps: ["Boathouse A/B/C", "Beach villa A/B/C", "Lido A/B/C", "Fishing harbour A/B/C", "Cargo quay A/B/C"]
    },
    "build-price-one": {
      title: "Shown build price = charged price",
      summary: "User in Play: the hospital showed 250 k$ (green, placement OK), the city treasury had 257 k$, and the click said “Not enough treasury money: 260 k$ needed”. Cause: the displays only used base price x era, the server also applied the build cost factor (laws, events, trade, material contracts; in 1950 with truck trade already x1.09).",
      points: ["One function for everything: BuildPrice (build), RenovatePrice (renovate), AreaPrice (brush park/plaza). Radial menu, build info card, catalog, renovate buttons, computer opponents and the server only use these now.", "Material contracts are now counted from the contract list every machine has - before, only the host knew the discount and other players saw a different price.", "The law “industry builds 20 % cheaper” had no effect anywhere - now it is in the price.", "If the account is short, the build info card shows a red “NO” with balance and amount needed instead of a green OK.", "Test without mouse: shady.PriceTest sets the paying purse just above/below the price and builds."]
    },
    "border-lake": {
      title: "Shared lake on a district border, gentle drop-off under water (#32)",
      summary: "Every island now gets a round lake right on the border of two neighbouring districts - two players share one shore (wish from the tester forum). Also, the beach ended in a hard edge under water; now it runs out into a deeper slope and fades gradually into the blue.",
      points: ["Border lake: round, ~270 m across, on the midline between the backbones of two neighbouring arms (opposite the border fjord, never next to the fjord or the fork), as close to the ring as the protection zone allows; a strip of land all around. No extra random draw, C++ and Python prototype identical.", "Districts stay the same size (all 104 ha, checked with 6 seeds), open border ends still exactly 6.", "Underwater drop-off (user: hard edge where the beach stops): the shore slope ended 2 m below the water at a 20 m wall. Now a second, steeper slope follows down to ~22 m (sea) or ~12 m (lakes), so the depth grows steadily.", "Still open in #32: special waterfront lots (beach, boat marina, fishing, beach-front villas, small cargo terminals)."],
      caps: ["Seed 641163: lake on the border of districts 3 and 4 - fields 4-4 and 3-3 both reach the shore", "Prototype: six seeds, each with a lake on a district border"]
    },
    "beach-sand-swash": {
      title: "Sandy beaches and swash on sea and lakes (#32)",
      summary: "The gentle shore slopes were grass or rock. Now they are golden sand (user's wish: warmer than the first grey version), steep coasts stay rock. And waves now wash up the beach and run back.",
      points: ["Sand: the shore slopes (sea 25 m, lakes 10 m) carry a sand flag in the vertex colour; M_IslandTerrain v11 turns it into sand with patches and grain, wetter and darker lower down. Steepness and height still give rock/snow.", "Two snags: the slope was two-sided and the visible side was the back face with a downward normal (first rock, then black) - now one face, wound upwards.", "Swash (user: movement at least at the beach): in the water material a foam front runs quickly up to the waterline and slowly back, two wave trains (7 s, 9.7 s), offset along the beach, with a thin foam sheet behind. Waves and foam on the sea move twice as fast (looked still before).", "Cost: only maths in the existing water pass - measured 0.50 ms (0.68 ms before in a view with more water), so no measurable increase. Real wave geometry would cost much more and only pays off for boats.", "Bridges over lakes are built by the park/plaza session (own entry)."],
      caps: ["East coast: golden beach, foam, turquoise shallows", "Lake with sandy shore", "Swash: the same spot in four frames 1.5 s apart - the foam front moves"]
    },
    "admin-roads-anywhere": {
      title: "Admin roads anywhere",
      summary: "User: in admin mode the admin should be able to build roads anywhere, also in other players' districts.",
      points: ["Admin menu (F10) > Roads: any district, also locked fields, no connection to the road network needed.", "Physical rules stay: no water, mountain or centre, not through lots, curve radius and angles.", "In a running game the road goes through the server: host only, free, all players see it and it is saved (before: local only, not saved).", "Hands-off test: normal road in district 4 rejected, admin road built (200 m, treasury unchanged)."],
      caps: ["Admin road on locked field 4-9 of another district"]
    },
    "bridges": {
      title: "Arched bridges where roads cross water (#32)",
      summary: "A road over a lake used to lie flat at shore height above the water. Now it automatically becomes an arched bridge there: the road rises in a gentle hump, with stone arches, posts and braces underneath.",
      points: ["Detection along every player/NPC road: ground below the water level = bridge, abutments at the first dry shore; hump 2.2–5 m depending on length, gentle ramps on both shores.", "Structure: deck with edge beams and cornice, iron railing, end pillars at the four corners, abutments, arches of about 16 m with three ribs, posts every 2.2 m, cross beams and X braces, piers with cutwaters.", "Everything is computed from spline + terrain, so it is identical on every machine (multiplayer).", "In-game test (-game): three crossings on island 641163 via shady.BridgeAuto, 110–115 m each, 7 arches, road 5 m above the shore."],
      caps: ["Arched bridge over a bay (test road via shady.BridgeAuto)"]
    },
    "water-slw": {
      title: "Real water: sea and lakes with depth colour, waves and shore foam (#32)",
      summary: "The sea was a flat surface, almost black up close, 15 m below the land behind a 20 m cliff. After a research pass (Water plugin, Fab, own material –) the user approved our own material: sea and lakes are now clear turquoise in the shallows, deep blue further out, with small waves and foam at the shore.",
      points: ["Own Single Layer Water material (no plugin, no third-party assets): colour from absorption/scattering by water depth, three wave layers at different angles and sizes (14 m, 6 m, 55 m swell), foam from the distance to the ground behind the water surface. Sea (MI_Sea) lively turquoise, lakes (MI_Lake) greener and calmer.", "Wave and foam textures generated ourselves (Python, seamless). The first version showed a grid from mid-distance – all layers had the same direction; now each layer has its own angle and the close layers fade from 60 m.", "Coast: instead of the 20 m cliff a 25 m wide shore zone drops 4.5 m and the sea lies 2.5 m below the island plane – the shore zone shows through as shallow water. The level plane SM_Water is hidden at runtime.", "Cost (ProfileGPU, coast view, sea on half the editor view): 0.68 ms GPU for the water pass. Open district border ends still 6.", "Still open in #32: sand on gentle coasts (rock on steep ones), automatic arched bridges where roads cross lakes."],
      caps: ["East coast: turquoise shallows, foam line, deep blue further out", "Lagoon lake: greener and calmer than the sea", "Overview: the sea surrounds the whole island"]
    },
    "info-window-scroll": {
      title: "Info windows: mouse wheel scrolls, all the same size, Public green",
      summary: "User requests before the next patch: no window could be scrolled, short windows looked much bigger than long ones, Public and Statistics had almost the same blue.",
      points: ["Scroll cause: in game the mouse wheel never reaches the HUD widgets through the Slate hit test (as with clicks in #12) - the HUD now hands it to the window under the mouse itself.", "Long windows used to be shrunk as a whole (Fit) and still ran off the screen; now they keep their size and the list inside scrolls.", "One fixed base scale (0.65 x zoom) for all info windows = the size of the former elections window; Ctrl + mouse wheel stays.", "Public in the radial menu (and public buildings in the build rings) green instead of blue.", "In parallel: minimap with the real island shape + jump (session #3), water material (session #2)."],
      caps: ["The elections window ends above the bottom bar, the rest of the list scrolls"]
    },
    "gen-park-plaza": {
      title: "Park brush and plaza generator instead of fixed park/plaza buildings",
      summary: "Players now paint parks with a round brush and drag plazas as rectangles; both are rebuilt identically on every machine from shape, seed and options (multiplayer) and are paid from the city treasury.",
      points: ["Park: brush 8/16/28/44 m (Ctrl = erase), live preview with the city-park generator; roads + sidewalks, lots, foreign/closed fields and water stay excluded. Reroll/Create/Cancel in the info window.", "Plaza: drag a rectangle, the axis snaps to the road, it may touch walls and roads but never overlap them. 20 procedural floors (granite setts, segmental arcs, cobblestone, basalt, crazy paving, sandstone, travertine, limestone, concrete, washed concrete, terrazzo with brass, brick herringbone/running bond/basketweave, hexagon, concentric rings, marble checkerboard, cotto, gravel with bands, porphyry fans), 8 layouts after historic models, plants, café tables with/without parasols, lamps, benches, small fountains, one large fountain – each on/off + variant.", "The edge dissolves organically into lawn: joints turn green, single stones drop out (masked material).", "New props from headless Blender (bistro and four-seat tables, round and square parasols with per-instance canvas colour, two small fountains, two planters), all Nanite + instances.", "Lots, NPCs and road building treat the new areas as occupied; pedestrians use their paths and benches. Test commands shady.ParkAuto / shady.PlazaAuto / shady.AreaCreate.", "In-game test (-game, host): 24 x 18 m plaza with concentric rings, fountain, parasols and benches built, 12k from the city treasury, record replicated. Park brush: small round areas found no entrance (needed 16 m of straight edge) - now a second try with 6 m; afterwards a 618 m² park (9 trees, bench, path) was built. Multiplayer: a joined client built park and plaza identically (same seed, same parts)."],
      caps: ["First generated plaza in field 1-1 (concentric rings, fountain, cafe parasols)", "Painted park (14 m brush) next to a plaza with granite setts"]
    },
    "culdesac-terrain": {
      title: "Turning circles follow the terrain (#15, round 2)",
      summary: "Tester image from 0.1.234: the road already lay on the ground, but the turning circle at its open end stayed flat at the road end's height and vanished into the hill behind it.",
      points: ["Turning circle behind the end: uphill it rises with the ground (10 cm clearance like the road), downhill it eases from the end to the ground within 8 m (RoadTool CulDeSacLift). Cars in the circle use the same height.", "Test: 28 months of NPC road building, every new turning circle measured at 12 edge points – 0 points below ground, 6–16 cm above it. A steep slope right behind an end did not occur on the test island.", "New test console commands: shady.Hill <district> (highest ground in/next to the open fields), shady.RoadProbe (newest player road + turning circles vs ground).", "New rule (user): every session may start Live Coding but asks the others first."]
    },
    "lakes-round": {
      title: "Round lakes with a sloped bank instead of square pits (#26, stage 1)",
      summary: "Tester wish #26: inland lakes had the shape of the 30 m node grid and looked like black pits. Now they are round, have a gentle bank and their own water surface just below the shore.",
      points: ["Cause: the land around the lagoon lake is filled in and its field value is fixed at 0.02 there - so every shore point sat right at the land node and the lake took the grid's outline. The sea lies 15 m lower, plus the 20 m cliff.", "The generator now also outputs the distance to the lagoon circle (land/district masks unchanged, Python prototype stays 1:1); the shore follows that distance. Instead of the cliff a 10 m wide bank drops 3.5 m, and the water surface sits 1.2 m below the shore (same material as the sea).", "The district overlay treats the bank as coast; open border ends stay 6 (seeds 641163, 12345, 5). Islands without an enclosed lake (e.g. 777, 2024) are unchanged.", "Stage 2 still open: gentle coasts and beaches at the sea, lakes on district borders (two players share a lake), waterfront lots later."],
      caps: ["Island 641163: the lagoon lake is now round", "Sloped bank, district border right up to the water"]
    },
    "npc-brain": {
      title: "Smarter computer opponents: they build what their district needs (#29)",
      summary: "Tester wish #29: instead of a fixed build list per profile, every computer player now weighs its district's needs each month and builds the best affordable type - like a human with the same money and credit.",
      points: ["Ten goals per district: housing, jobs, power, school, hospital, safety, happiness, private income, city treasury, signature buildings of the profile (press baron: newspaper/TV tower, industrialist: factory/coal plant, merchant: department store/hotel, fixer: bank/skyscraper). Urgency 0..1 from the district's real numbers, score = urgency x effect x personality minus cost, interest and pollution.", "Saves only for something clearly better that is reachable within 5 months (hard: 8) - the industrialist used to wait forever for a 312k coal plant.", "Politics no longer spends money set aside for a pending build (many builds used to fail with 'Not enough private money').", "Difficulty: console shady.NpcSkill 0|1|2 (easy reacts only to today's problems and picks somewhat at random, hard plans for buildings under construction). Reasons: shady.NpcBrain [slot] and log 'NPC brain:...'.", "Test island 641163, 24 months in real time: 62 buildings instead of 12; builders add schools, police and fire stations (satisfaction 98-99), the press baron a newspaper and theater, the industrialist a coal plant.", "Lesson: shady.Months jumps months in one frame - NPC building only shows in real time (short month, e.g. shady.NewGame 641163 2030 8)."]
    },
    "stats-customers": {
      title: "Statistics in the radial menu (#31) and customers across district borders (#17)",
      summary: "Two tester wishes for the next update: shops get customers from every district by distance, and a new Statistics menu shows the city, district rankings, treasuries, campaigns and politics.",
      points: ["#17: every home spreads its residents over the cafés, department stores and gas stations in reach (weight 1/(1+(d/250 m)^2), a share shops outside). Revenue factor = customers / 600 (0.3–1.2); goods contract and district boom work as before. Console shady.CustomerLog 1.", "Test island 641163, 15 single months: every shop had customers from five districts.", "#31: Statistics replaces the \"Later\" placeholder: City, Districts (rankings with bars, own district starred), Public funds, Campaigns (scoreboard + every campaign with reach per district), Politics & media.", "Lesson: shady.Months n runs all months in one frame – NPCs file only one build request per run. For build tests step single months with pauses (shady.Months 1|wait 5)."],
      caps: ["Statistics, Districts page: districts by residents", "The City, Public funds, Campaigns, Politics & media pages"]
    },
    "release-0234": {
      title: "0.1.234: vent grilles on all buildings, worn asphalt, roads on slopes, pollution falls off with distance",
      summary: "Three ticket sessions in parallel (one working tree, coordinated by messages), one shared update with seven tester fixes: #2, #8, #10, #15, #24, #27, #28 plus an editor crash.",
      points: ["#8: The user still saw shimmer in game – on the 1950s limestone tower, not the 1970s ones. 32 more families (towers of every era, department stores, hospitals, fire stations) had the same 12 cm blades. All rebuilt, 91 modules reimported (: modules picked by FBX size change, materials taken over from the old mesh).", "Lesson: the Nanite export rewrites – status drops to pending_visual_approval, the unreal block and later additions are lost, and would have dropped the families. restores the curated version and only refreshes the checksums (also done for the 1970s towers).", "Other fixes (sessions #2/#3): worn asphalt (#2), roads follow the terrain (#15), second driveway for commercial/public buildings (#24), road snapping (#27), pollution falls off with distance (#28), War Room button (#10).", "Finance tickets split: #13 and #21 to session #3, #20 to session #2, #17 to session #1."],
      caps: []
    },
    "louvres-1970-r02": {
      title: "1970s towers r02: vent grilles no longer flicker (#8)",
      summary: "Tester report #8: the vent grilles of the 1970s office towers flickered. All five families rebuilt and the 24 modules with grilles reimported.",
      points: ["Cause: blades every 12 cm (smaller than a pixel from the game camera) and the blade back edge in the same plane as the back plate (z-fighting).", "New: blades about every 30 cm, 4 cm clear of the back plate; family 05 gets a dark back plate (SignMetal instead of grey RoofTech).", "Build scripts now accept --revise (may overwrite the git-tracked outputs); old meshes in _Superseded/*_r01. Reimport: ", "Still open: the user's look in game, then a patch."],
      caps: []
    },
    "tester-fixes-0911c": {
      title: "0.1.220: politics starts earlier, grey buttons say why, roads stay in your own district",
      summary: "New Discord report #25 (\"the entire political system is dead\") and #18 (roads deep into other districts) fixed and published as a second update the same evening. 0.1.218 (nine fixes) had been released before.",
      points: ["#25: The first election was in November 1954 – at 90 s per month about 1.5 hours with no \"Run\" and no candidates. Now November 1951, then every four years; mayor every eight years from 1955.", "#25: Influence without a seat +2 per month up to 30 (was +1 up to 20), with a seat +3. You start with 10 and actions cost 10–20 – after one action everything stayed grey for a long time.", "#25: Grey buttons show their reason in orange underneath (e.g. \"filing opens in January 1951\", \"needs 10 influence, you have 4\").", "#18: Around every junction 45 m were exempt from the district check – a chain of short roads crept into the neighbour district. Now foreign district land only 10 m around the junction (a T-junction to the neighbour's road still works), and only if the junction is not on your own road inside the foreign district.", "Lesson: builds from the working tree – never change sources while a patch builds (changes parked and restored after the Linux link; binaries checked for strings)."],
      caps: ["Elections & offices: every grey \"Run\" now shows its reason, first election November 1951"]
    },
    "tester-fixes-0911b": {
      title: "Tester fixes 0.1.218: clicks through windows, walking in multiplayer, starting field, city-centre corners",
      summary: "Second round of feedback from Discord and the board, worked through without questions (user away): nine reports fixed (#9, #11, #12, #14, #16, #19, #22, #23 and partly #21), three new Discord posts filed as tickets (#22–#24). Tested hands-off with minimized game instances and new test commands.",
      points: ["#12 Clicks in windows went through to the world: every left click is now checked against the real screen area of all visible HUD elements (desktop coordinates like the mouse events); windows that are too big shrink to fit the screen.", "#22 After placing a house the build info window stayed on top of every newly opened panel: opening a panel now ends build mode.", "#23 Other players' houses stood on intersections on a joined PC: the road name is not the same on every PC – the game now looks for the road that matches the saved lot front.", "#11 City-centre corners: an avenue and the corner cross street met the ring as little as 1.6 m apart (two junctions on top of each other) – the avenue now ends one cross street earlier, and so do the high-rise rows.", "#19 F (walk) did nothing for a joined player: switching now goes through the server. #14 The starting field always touches a generated road. #9 Esc menu readable. #16 Quick buttons have their own size, top cards overlay instead of pushing. #21 AI credit line never higher than the player's.", "New test commands: hud.Click (Slate click at a screen spot), hud.Action (radial menu action), shady.Walk, -ShadyHudExec with wait."],
      caps: []
    },
    "mp-fixes-0911": {
      title: "Multiplayer fixes from the first playtest (0.1.216)",
      summary: "Fixed four tester reports from Discord and the feedback board (#4–#7): wrong name in the lobby, a duplicate lobby after \"Back to main menu\", joining seemed to freeze, joining by IP was read as a room code. Root cause of the two biggest: the start screen and HUD stayed stuck on screen across every level change.",
      points: ["Host name: New Game and Join shared one name field – the host read the hidden field of the Join page.", "The start screen and HUD now remove themselves when their world closes – before, after a join the \"connecting\" screen with keyboard focus stayed over the game, and after \"Back to main menu\" two lobbies lay on top of each other.", "IP addresses are no longer read as a room code; the error text explains that an online host can only be reached by code.", "Player and city names are sanitized (letters, digits, a few symbols, max. 24) – on the server too.", "Tested hands-off: two minimized game instances (-ShadyHost / -ShadyJoin=127.0.0.1), image via PrintWindow. Open: a real EOS test between two PCs by testers."],
      caps: ["Host and client lobby after the fix: one lobby window, sanitized name on both sides"]
    },
    "eos-online-0911": {
      title: "Online without port forwarding: room code through Epic Online Services",
      summary: "The playtest failed on port forwarding in the router. Instead of an own matchmaking server as in Starhunter (fly.io), the game now uses Epic Online Services: free, NAT punch-through with a relay as fallback, built right into Unreal. The host gets a room code, friends type it in – nobody has to touch the router.",
      points: ["Login: an anonymous device ID per PC (EOS_Connect_CreateDeviceId), then a login through Online Services v2 – no account, no Steam.", "Room: an EOS lobby with a 6-character code as a searchable attribute; the lobby only serves to find the host, game traffic runs over the EOS net driver (P2P, otherwise relay).", "UI: new game with the choice \"Online (room code)\" / \"LAN only (IP address)\", the title screen shows the online status at the bottom right, the join field takes a code or an IP, the lobby shows the host the code with copy.", "Without credentials, in the editor and with -ShadyNoEos everything falls back to the IP path by itself; the lobby now shows the port actually bound (before always 7777, even when the engine took 7778).", "Tested: LAN join of two -game instances (version checked, island built from the seed), the case without credentials; with the user's credentials: anonymous login, room VQ3FNF opened, a second instance found it by code and built an EOS P2P connection (to itself on one PC, same device ID). Open: a test across two households, a look at the new buttons."]
    },
    "politik-spielbar-0911": {
      title: "Politics, media and economy playable: agenda strip, War Room, Roll Call, nine-seat council, 66 laws, staff, research, contracts, trade",
      summary: "Night shift after the four concepts (the user's brief of 09 Nov: \"build it all in, all three areas connected, don't ask\"). The city council now has nine seats with their own figures, hidden values and favours; every quarter it votes by roll call, and the game shows the vote seat by seat as a scene – safe votes fast, swing votes slowly, the mayor on a tie. Campaigns are built in the War Room like games in Mad Games Tycoon: goal, vehicle, message, 40 mix points, tricks, timing, with an honest outlook as a range; afterwards a debrief of what worked. Under the cards runs the agenda strip with every date, today at the left. Plus 66 laws from the compendium with real effects on the economy, era and crisis laws from the mayor, elections for district and at-large seats every four years, a mood per district, a job market for staff, a research desk for channels and methods, contracts between districts, trade stages up to the harbor and twelve economic events. PIE test 1950–1960: proposal → campaign → vote 6-3 → debrief, the 1954 election won with the player's own candidacy, NPCs table bills, buy envelopes, hire staff, research.",
      points: [
        "Rules in C++ (ShadyPolitics): 8 issues, 5 audiences, 10 channels with reach per audience and era (posters … social 2008), 8 methods, 66 laws with effects as multipliers (rents, building, industry, power, taxes, campaigns, investigations …), 12 events with a crisis law, 5 trade stages. Seat leaning = stance · mood · favour · pressure · pendulum − fear·heat (+50 envelope, roll ±12); outlook as a Monte Carlo range.",
        "Council: 6 district seats, 2 at-large seats, mayor with the casting vote – all with name, stance, pet issue, price, fear, honesty (hidden until a fixer or a poll reads them). Vote every quarter, a proposal needs two months' notice, humans with a seat vote themselves; charges take the seat. The player starts without a seat (the \"small light\") and can run in November 1954 for a district seat, an at-large seat or the committee – one election night as a scene.",
        "War Room (one window, six steps): goal (pass/block a bill, hearing, candidate, sink a rival, image, issue, boom, defend), vehicle, message with two themes, four tone sliders, audiences and polarize, mix with 40 points (locked channels show year/licence/research), tricks with exposure risk, timing; on the right the outlook (e.g. \"4–6 of 9, chance ~55 %\", unknown seats marked \"?\"), strength per district, cost. After the end the debrief in the Playbook: which channel carried, which audience liked the tone, how hot the theme was, saturation, exposure.",
        "Agenda strip under the cards: today at the left, 18 months to the right (mouse wheel 6–36), pins red/orange/gold/grey for politics/media/economy/staff, gold ring = your own stake, pulse in the current month, hover shows the standing, click opens the panel; switchable in the gear menu and movable in arrange mode. The politics card at the top shows the council, your district's mood (only with a poll) and the mayor.",
        "New panels: Laws (table + catalogue by domain with propose/lobby/envelope/War Room), Council, Staff & job market (8–12 applicants per quarter, first to hire gets them, poaching against loyalty, skeletons in the closet), Research desk, Contracts (power, workers, materials, goods, ad time), Campaigns & Playbook, Economy (events, trade stage with the harbor law), Mood (poll/focus group per district), Agenda, Offices. Radial menu reordered: Politics, Media, Economy, Finances, Agenda.",
        "NPCs play all of it: bills by stance, campaigns for their own and against harmful bills, envelopes to swing seats (fixers, industrialists), staff by profile, research, power contracts, harbor, candidacies. Test seed 641163 to 1960: 12 roll calls, TV licence 1960 passed 9-0, Public housing and Highway program adopted, Rent cap flipped twice, an NPC won an at-large seat. Open: the user's click test, tuning the numbers, a front page for turning points."
      ],
      caps: ["Agenda strip under the cards: today at the left, the next months' dates, politics card with council and mood", "War Room: six steps, the outlook as a range on the right", "Roll Call: the nine seats announce one after another, tally bar with the majority mark", "Election night 1954: the winner per office, the player takes the district seat", "Playbook: debrief of two campaigns – which channel carried, which tone landed, how hot the theme was", "Laws: bills on the table with War Room, lobbying, seats/envelopes and your own vote; below, the catalogue by domain"]
    },
    "kompendium-0911": {
      title: "Compendium 1950–2030: scope for politics, media and economy – and the player as a tycoon",
      summary: "The user settled the open points of the campaign concept (time strip with today at the left, War Room accepted, staff via a job market, research as in Mad Games Tycoon, trade and contracts later) and gave a new brief: first record for all three areas what should exist at all, then the paths there. Plus two guiding images: the player is a tycoon like the tech billionaires – rich on very different roads – who then pours the money into politics and media. And he starts as a small light: the council decides without him, he watches and learns until he has the money to turn decisions around. The compendium records all of it: 94 laws, eight offices, 20 elections, outlets, methods, staff, goods, contracts, trade, eight roads to wealth, three acts.",
      points: [
        "Laws come from four sources: the city's era bill by year (Reconstruction 1950, Energy Act 1973, Privatization 1990, Climate Act 2010), the catalogue from its availability year through any council seat, events from the simulation (smog, housing shortage, crisis), citizens' initiatives from 1970. All laws have levels or on/off and are reversible; council session every December, special session for 15 influence.",
        "Catalogue with 94 entries in nine domains (zoning, housing, transport, environment/energy, economy/taxes, order, media, clean hands, social) with year, effect as a starting value and winners/losers per pillar – from Rent cap 1950 via Highway program 1956, Clean Air 1970, Deregulation 1981, Casino licence 1990, Platform immunity 1996, Congestion charge 2003, Unlimited PACs 2010 to AI content labelling 2024. The eight V1 bills are included; proposal for V2: those plus 4–6 per decade.",
        "Offices and voters: 6 district seats (district voters), 2 at-large seats (new, replacing the mayor's second vote), mayor (NPC, casting vote, electable from 1990 – open), committee 3, police chief, treasurer, licensing board (1960), inspector general (1978). Council = 9 votes, 5 needed; 20 elections from 1954 to 2030, all offices at once, by-election on loss of office. Every election shifts all three forces: council majority, fields, the danger of envelopes, the millions of the tenders.",
        "Media scope: 11 outlet types from the newspaper to the AI feed with reach, credibility, cost and audience; 8 story types; investigation stages with accelerators (Open records 1966, investigative unit 1974, cameras 2002) and brakes; polls per era; TV debate before every election from 1960. Staff with a job market (the user's decision): 10 roles with 1–5 stars, 8–12 applicants per quarter (5 stars 3 %), whoever hires first has them, poaching against loyalty, at most 6 slots. Research as in MGT2: a licence makes it available, the research desk unlocks it (research points, money).",
        "Economy scope (to be built later): the principle of interdependence, 7 goods (workers, power, materials, goods, food, services, waste), 6 contract types with terms, trade in 6 stages (trucks over the bridge 1950 → depot → harbor 1970 → terminal → free port → logistics hub 2010), 12 economic events from baby boom to pandemic, budget with three purses.",
        "Eight roads to wealth for the tycoon (landlord, industrialist, energy baron, merchant, banker, media mogul, host, contractor) with best decade, requirements and opponents – two main roads per player, each road explodes in one era and dies in another. The opening in three acts: small light 1950–54 (Roll Call as a spectator, live with decisions, prepare the 1954 election), player (one seat, War Room), tycoon (millions, outlets, mayoral election). Early laws matter but are reversible; soft thresholds instead of unlocks."
      ]
    },
    "kampagnen-0911": {
      title: "Concept: Agenda, War Room and Roll Call – campaigns as a workshop",
      summary: "The user does not want to follow the city's events at the edge of the screen but at its centre: elections, votes, deadlines – big, with time left, tied to the clock. And he wants to set up campaigns the way you set up games in Mad Games Tycoon 2: candidate, bill, message, channels, tricks, timing; what works has to be discovered, the second attempt is part of it – for politics and media alike. Plus votes revealed judge by judge as in Die Fugger II. Out of this grew a concept with five words – Agenda, War Room, Roll Call, Debrief, Playbook – including research on what makes such games fun, seven pictures (mock-ups on today's HUD) and three worked examples with numbers.",
      points: [
        "Research on nine role models (Mad Games Tycoon 2, Die Fugger II, Frostpunk 2, Crusader Kings 3, Tropico 6, Floor 13, Mad TV, tycoon design, reveal pacing) → eight rules: miss nothing, configure instead of click, hidden but fair, honest ranges instead of percentages, outlook and exposure risk separate, the second attempt is the normal case, the scene is the reward, one strip – one workshop – one scene (against clutter).",
        "Agenda: time strip under the cards – today at the left, the future comes in from the right (decided by the user the same day), pins in the colours of the three forces, gold ring for your own stakes, pulse under one month; hover shows the standing, click opens the War Room. Front page, edge cards and ticker as three alert levels, camp pendulum instead of Political Climate – all accepted by the user.",
        "War Room: one window for politics, media and economy with six steps – Goal, Vehicle (puppet, seats, outlets), Message (two themes, four tone sliders, audiences, Polarize slider “us vs. them”, promise), Mix (40 points across channels, locked ones grey with their year), Tricks (envelope, buy editor, dossier drop, push poll, astroturf – each with effect and heat) and Timing (peak before the date, one pivot); on the right the outlook as a range (5–7 of 9), exposure risk and cost in money, influence and favors.",
        "Hidden values: mood per district (weight per issue + camp pendulum, fed by rents, incidents, unemployment, smog, scandals), audience weights, hot issue/price/fear per seat, reach channel × audience × era. Found via polls (±8 points in 1950 … ±2 in 2010), focus groups, your own outlet and the debrief; kept as cards in the Playbook that age with the era. Different per game (seed) – only the channel table can be learned across games.",
        "Roll Call: committee 3 seats (2 needed), council 9 seats (6 districts + 3 new city seats, 5 needed); safe seats fall fast, swing seats slowly, the last one after a 3 s pause with a sentence of reasoning; tie → the mayor's casting vote (our lot from Fugger II); Space skips. Election night district by district. The debrief names what worked, who flipped and why, puts lessons into the Playbook and opens the next attempt for the next session.",
        "Media technology 1950–2030 as licences (newspaper/radio/posters/cinema newsreel → TV b/w 1960 → colour 1970 → cable 1978 → talk radio 1988 → private TV 1990 → web 1996 → social 2008 → mobile 2016 → feeds/AI 2030) and methods to research (polls, focus groups, TV debate, attack spot, investigative unit, spin, push poll, astroturf, micro-targeting, bots, AI content). Worked examples: high-rise permit in two attempts (4:5 → 5:4, 146 k$), smear campaign against a police-chief candidate in 1966, boom campaign in 1972. Implementation in three stages, stage 1 = agenda + Roll Call + debrief."
      ]
    },
    "netz-updater-0811": {
      title: "Playing over the internet: copy address, Esc menu, auto-updater",
      summary: "User, 08 Nov: friends could not join (\"host may have left\" while the host was playing), and every small change meant downloading 3.4 GB again. Now the host sees their addresses to copy, errors say what to check, and the game fetches updates from GitHub itself.",
      points: [
        "Lobby: the host sees \"Invite friends\" with internet and home-network address plus port, each with a Copy button.",
        "A join without answer now reports \"Could not reach the host\" with hints on UDP 7777 port forwarding and the firewall (tested).",
        "Esc in game: menu with Resume / Back to main menu / Quit game; a hanging join attempt is cancelled when hosting (hosting failed after it before).",
        "Defaults from the editor (grass, hedges, garden paths, HUD) ship in the package and apply on a fresh install.",
        "GitHub organisation vibecodes-studio: private repo with the source as backup, public repo for compiled updates only.",
        "Auto-updater: the title screen checks the public repo, downloads only changed files (compressed, verified), swaps them after exit and restarts; content as an Unreal patch against a base version.",
      ],
    },
    "park-plaza-0811": {
      title: "Park approved, lawn like the field, plaza with real water",
      summary: "User, 08 Nov: the park looks good and stays as it is – only the neon-green lawn had to look like the field. On the plaza the water jets looked like spikes and the pink beds were to go.",
      points: [
        "Park r04 approved (status imported_validated, 281/281 checks).",
        "Lawn in catalogue buildings: a material instance of the island terrain forces the lawn surfaces onto the field lawn (same grass texture and sliders as outside).",
        "Plaza r02: 24 arcing water jets with foam rings instead of cones, beds with stone edging, soil and 68 hydrangeas; old version r01 kept.",
        "Plaza r02 imported into Unreal (new ground + monument, Nanite), catalog rebuilt; 26 yard materials got the missing Nanite flag.",
        "The plaza paving looked like white plastic in Play (user) → slabs, bands and edges are now polished natural stone with joints and a warmer base tone; approved afterwards (imported_validated, 215/215 checks).",
      ],
    },
    "hoefe-0711": {
      title: "Gardens and back yards: plots look lived in",
      summary: "User, 07 Nov: the grey poured concrete between the towers was dull, and houses stood bare on the lawn. Now every plot has a designed garden or yard that changes over the decades and shows how well the district is kept.",
      points: [
        "23 new props from Blender (picket fence, board fence, hedge, shed, washing line, trash can/wheelie bin, mailbox, carport, planter, patio set, swing, dumpster, pallets, crates, oil drums, trash bags, tires, junk, wheel stop, lamp, ground slabs).",
        "One ground material for all surfaces (lawn, driveway, path, patio, cobbled court, parking with markings, gravel, forecourt, centre): a different surface per decade (e.g. driveway first concrete tracks with gravel, then asphalt, then pavers; centre first 3 x 3 m concrete slabs, later pavers, then granite) – each piece switches in a slightly different year.",
        "Upkeep per district from satisfaction, land value and pollution: poorly kept = dirt, oil stains, cracks, weeds in the joints, brown hedges, faded colours, plus trash bags, tires and junk; well kept = mowing stripes and planters.",
        "House: driveway on the wider side (often a carport from 1965), a parked period car, a path to the door, picket fence (until 1990) or hedge at the front, at the back patio, board fence/hedge, shed, washing line (until 1985), swing, tree.",
        "Inner city: yards behind the buildings up to the block centre – department store/cafe = service yard, hospital = car park, tower randomly service, parking, green or mixed court. During a renovation the yard props disappear under the construction site and return afterwards.",
        "Everything as instances in one actor. Full island built out (3864 buildings): 14.5 ms per frame (69 FPS), GPU 7.8 ms – before about 13 ms."
      ],
      caps: []
    },
    "overlay-0611": {
      title: "District overlay: glass, gold frame and borders that really reach the coast",
      summary: "An overlay of frosted glass and gold lines shows districts and building fields – in the game for hearings and field releases (key O, map button), in the lobby for choosing a district: the island looks normal, only the district under the mouse gets glass and a hairline gold frame, reserved districts keep that look in the player's colour. Then a deep dive into a problem that had been around for days: borders that did not reach the island edge, jagged edges and gaps in the frame. The rule now holds for every generated island.",
      points: [
        "District per triangle taken exactly from the generator (the same rule as the border lines) instead of from colour and a 30 m grid – no more slivers; mountain cells are clipped at the ridge line.",
        "Cause of the missing border at the coast: when the district changed exactly at a coast point of a cell, the generator drew no line there. Now every change between two wedges gets a line.",
        "Gaps in the frame: the sides of each border line now come from the glass triangles themselves (probes at 3/6/12 m) instead of the coarse grid.",
        "Self-check in the log: open border ends are counted. Seeds 12345, 641163, 777 and 2024 leave only the 6 intended ends at the centre."
      ],
      caps: ["Lobby: reserved district 2 in the player's colour, rest of the island normal", "Close-up: area and frame run to the coast, field lines reach the shore"]
    },
    "ladebild-0611": {
      title: "Loading screen without stutter: the island build is spread over many frames",
      summary: "The spinner on the loading screen froze or stuttered while the island was being built (user, 06 Nov). Cause: in the editor Unreal draws the whole interface on the game thread – a frame that computes for 300 ms freezes every animation, however it is built. A spinner that turns “on its own” exists only on the engine's loading thread, and that is disabled in the editor. So the work itself was spread out: a probe shows per long frame which steps consumed the time; then the biggest chunks were moved into frames of their own, onto worker threads, or preloaded while the main menu is still showing. For the packaged game the same spinner additionally runs on the engine's loading thread – there it turns independently of the game thread.",
      points: [
        "Probe: every heavy function reports its time per frame; if a frame takes longer than 50 ms (console shady.HitchMs), the log says what was in it (“Hitch 312 ms: BuildSkyline 180, UpdateIntersections 90 | gen stage 17”). Unattributed time shows as “other” – mostly Blueprint work.",
        "Measurement before (Play in the editor, two players): the generator's ring stage took 2.3 s in ONE frame (skyline 0.9 s, sidewalks 0.6 s, intersections 0.2 s, road spawning ~0.6 s), the island-shape kernel 0.6 s, the pedestrian assets 0.6 s, the first park 0.9 s and every further park 0.1–0.4 s – a good five seconds in which the spinner could only jump a few times.",
        "Generator split into steps: main roads one per frame, then the ring, city-centre roads one per frame, sidewalks one road per frame, intersections, skyline; relief, island surface and lawn cover one frame each. The island-shape kernel now computes on a worker thread; the generator asks every frame whether it is done.",
        "Preloading at the main menu: the tower, department-store, hospital and café meshes of the skyline, all 1950 buildings, pedestrian figures and mannequins, the park shrubs, flowers and props, and the lot system load in the background while the player still looks at the menu – before, each of these systems loaded its assets synchronously in the middle of the island build.",
        "Pedestrians: the sidewalk network is built one frame after the road build instead of in the same frame, and the 300 figures are created in batches of 25 per frame instead of all at once. The island surface cooks its collision in the background.",
        "Packaged game: a loading screen via the engine's movie player (its own Slate thread) with the same spinner and status text is built but switched off for now (console shady.MovieLoadingScreen): in the standalone-game test the engine crashed right after “New Game” – if the engine keeps ticking under the movie player (required, otherwise no island is built), the render thread does not count the frames along and the ray-tracing system aborts with an assertion. So the packaged game shows the normal Slate loading screen too, and the distributed island build is the real fix on both paths.",
        "Measurement after (Play in the editor, one player, seed 641163, editor unthrottled): island ready after 4.1 s; 14 frames over 50 ms, 3.7 s in total, the longest 0.8 s – with the old flow on the same day (two players, seed 12345) it was 19 frames, 7.1 s and 1.8 s. The island-shape kernel no longer shows up at all, the sidewalks cost 30–90 ms per road, preloading takes 4 s in the background. What still stalls: the city parks (0.1–0.4 s each, built by timer alongside the last generator stages), the skyline (0.25 s in one frame) and the intersections (0.1 s). Next step for those: spread parks and skyline over several frames or a worker thread as well.",
        "Second round (user: spread parks and skyline too): the parks were not slow to compute – the looping timer (every 0.1 s) caught up after a long frame and built several parks in ONE frame. Now one park is built per frame, the planning runs on a worker thread, the instances arrive in chunks of 120 per frame, and the generator waits in its own stage for the parks before reporting done. The skyline only plans now and places buildings in batches of three per step; its ring test ran as a 720-edge polygon four times per 4 m cell (150 ms) and is now a radius table. Plus two findings from the log: park trees, cars and road materials were missing from the preload list (the first access loaded them synchronously, 0.4 s), and in the editor preloaded Nanite meshes are still being built in the background – the first access waited up to 0.8 s for them. The generator therefore only starts once everything is loaded AND built; until then the spinner simply keeps turning.",
        "Measurement after the second round (same conditions): longest frame 0.37 s (before 0.8 s, at the very start 1.8 s), total stall 3.0 s (3.7 / 7.1 s), but 27 frames over 50 ms instead of 14 – the work is spread wider, the individual hitches are shorter. The probe now also shows world tick, garbage collection, render thread and GPU per frame: GC never ran, render thread and GPU stay under 10 ms. What remains (0.07–0.27 s each): the road build per road in the Blueprint (spline meshes with collision), the relief (0.1 s) with the island surface, the start of the sidewalk network and pedestrians, and for skyline batches and parks the render preparation at the end of the frame – that would need an Unreal Insights capture instead of the probe.",
        "Third round, Unreal Insights (user: “trace it”): recorded one island build in Play (Trace.File before New Game, Trace.Stop after), exported the game-thread events without the UI and evaluated the self time per timer for every long frame (scripts in). Surprise: a good part of the previously “unattributed” time was the measurement script itself – every MCP call (reading the log, typing into the console) runs on the editor's game thread and costs 60–135 ms; the script was partly measuring itself and no longer polls during the build. Real remainders according to the trace: a Blueprint loop over all 31921 nodes when the ring closes (63 ms, now C++), the sidewalks of the ring road (92 ms), the grass library's uploaded JPEG, which was decoded and resized on first use (66 ms, now at world start), the relief (38 ms), the render proxies of the island surface (~23 ms per section) and an editor plugin tick (Mass, ~20 ms, not ours).",
        "Measurement afterwards (one player, seed 641163, no polling): longest frame 0.17 s (initially 1.8 s), total stall 2.2 s (7.1 s), 23 frames over 50 ms, 8 of them over 100 ms. Left: ring-road sidewalks (0.17 s), relief plus island surface (0.16 s each), start of sidewalk network and pedestrians (0.12 s), parks and skyline batches 0.07–0.16 s – all work that creates the render proxies of the new components at the end of the frame in the editor."
      ],
      caps: []
    },
    "zebra-0611": {
      title: "Traffic and pedestrians at the zebra crossing: seven follow-ups from the play test",
      summary: "In play the user watched where cars and pedestrians still got in each other's way and approved the fixes step by step. The attempt of 5 Nov to treat cars as obstacles for pedestrians was rolled back; instead there are now simple, visible rules at the zebra crossing – who walks when, who drives when. Committed by the user.",
      points: [
        "Rolled back: cars as obstacles for pedestrians and turning cars that only stop inside the turn (5 Nov). In play, pedestrians crowded around a car on the zebra crossing. The previous behaviour applies again – turning cars wait at the stop line until their curve is clear; sidestepping onto the grass stays.",
        "Pedestrians never stop on the roadway: when groups from both sides met in the middle of the stripes they stood facing each other for seconds. Now they squeeze past – closer if needed and also passing oncoming people on the left –, always keep moving at least slowly on the roadway, and scan the full width of the stripes (right preferred) instead of stepping outside them.",
        "Path across the zebra crossing centred: the user found why pedestrians drifted beside the stripes – the route lay along the edge, because a sidewalk node up to 1.5 m from the stripe centre was reused unmoved when the network was built. Now every zebra node sits exactly on the centre.",
        "Turning cars stay on the road: turning right, cars drove over the kerb because the curve from stop line to stop line cut the inner corner. Now the curve follows the lane until close to the corner and turns more tightly there (a little softer for left turns).",
        "Traffic lights: turning cars first. Turning cars stood still while pedestrians were on their zebra crossing, and the queue grew. Now turning cars get a 10-second head start – pedestrians only get green once the cross direction has been moving for 10 s. To leave pedestrians enough time, the car green is extended from 20 to 28 s (cycle 64 instead of 48 s).",
        "Letting a car off the zebra crossing: if a car was still on the stripes when pedestrians got green, some walked straight through it. Now anyone who still has the car's path ahead of them stops a little short of it until the car has gone; anyone already in front of the car walks on. The car does not brake for the waiting pedestrians and can drive off.",
        "Car queues flow through: in a queue only one car at a time entered the junction, the next waited at the stop line. Now cars from the same approach follow straight behind (their paths only diverge), and the exit only counts as blocked if a car is standing or crawling there. Follow-up fix: the leading car stopped right after the turn because a priority rule for “two cars on the same spot” also counted the follower still in the turn – fixed."
      ],
      caps: []
    },
    "spiel-v1": {
      title: "Playable version V1: the triangle of power runs in the game – monthly tick, building, politics, media, NPC opponents, main menu, multiplayer",
      summary: "The user's brief: bring the whole concept into the game – build menu, the three pillars interlocking, NPC opponents for the fun, main menu with options, host and join; design without asking, test it yourself, fix weaknesses yourself. The result after one day is a first playable version: a game runs from May 1950 to the chosen end year, six districts with humans or NPC opponents, a monthly tick for population, jobs, power, taxes and rent, plus hearings, bills, elections, tenders, stories, campaigns, investigations and ads with real effect on the four capitals, and a ranking at the end. You play through the radial menu and one action panel per topic; the host opens a game, others join by IP. All numbers are starting values.",
      points: [
        "Architecture: data separated from visuals (prompted by the user's rules file). The game state is a handful of replicated lists in the GameState – players, buildings, roads, fields, hearings, bills, committee, stories, tenders, investigations, favors, candidates; a building is a record, not an actor. Every player action is a command to the server (checked: money, field, era, lockouts), the answer comes back as a toast. On every machine a sync subsystem rebuilds what is missing: island from the replicated seed, field releases, roads, lots and buildings as static-mesh components in one layer.",
        "Catalogue: from all files one JSON with 96 families and 200 variants (parts, lot size, anchor, pivot, floors). Game values per building type in one table (cost, upkeep, residents, jobs, power, revenue, pollution, service, happiness), times the era factor 1 / 3 / 8 / 15 / 25. The 1950 tower (no mesh list, as it is being reworked) is assembled from the.uassets; factory, power plant and warehouse are placeholders from the industrial building.",
        "Economy per month and district: migration towards housing times attractiveness, commuters to neighbours' jobs, power (shortfall bought dearly from the city, surplus sold; business share paid privately), revenue times demand (island residents) times tourism times education, rent 20 $ per resident privately, property tax 12 $ per resident into the treasury, 20 % levy to the city; happiness from jobs, services, power, pollution and parks; land value; an overdraft becomes a loan (0.5 % per month).",
        "Politics: the first field is free, every further one needs a hearing (application, committee session each quarter, three votes by alignment and favor; lobby with influence, an envelope to members adds heat, objection, appeal). Eight bills (business tax, property tax, environment, rent cap, height limit, subsidies, press law, procurement) in December with NPC votes by profile. Election every four years in November (happiness, reputation, campaign, favors; heat above 60 halves it). Tenders every two years, fair or steered. Heat 30 / 60 / 85: rumours, investigation, charges with a lockout.",
        "Media: a newspaper house is an outlet of your own (reach, credibility), the city gazette is open to all. Stories arise from events (new building, blackout, hearing, heat) – push, spike, spin, rebuttal; campaigns (image, attack, issue, rally; diminishing returns); investigations in three stages (rumour, lead, evidence; publish, file charges, lawyers); ads (demand up, billboards, sponsoring).",
        "NPC opponents with five profiles (builder, industrialist, merchant, press baron, fixer): apply for fields, build by programme (the industrialist starts with the power plant), take loans, bid in tenders, lobby, slip envelopes, investigate the leader, run for office.",
        "Interface: the top cards (district, treasury, news, politics, happiness, clock) show real values; radial-menu entries open an action panel (catalogue, renovate, hearings, bills, votes, favors, tenders, outlets, stories, campaign, investigations, ads, finance, citizens, help). Building: catalogue, a ghost lot follows the mouse, click = command; road with two clicks. Lobby (district 1–6, host starts), end screen with a ranking (wealth, building value, influence, reputation, residents, land value, minus heat); the Centre of Power goes to first place.",
        "Main menu: New game (name, seed, end year 1970 / 1990 / 2010 / 2030, seconds per month 4 / 8 / 15 / 30), Join (IP), Quit; options are saved. Hosting = listen server in the running level without reloading (port 7777); whoever joins skips the menu as soon as the server is playing.",
        "Testing without a mouse: console commands shady.NewGame / Pick / Start / Months / Look / RoadAt / PlaceAt / Cmd / Cheat / Dump / World – with them a whole game ran in Play: menu, island, lobby, start, NPC fields and buildings, hearing, road, house, cards, catalogue, hearings panel, end screen 1960.",
        "Weaknesses from my own test, already corrected: influence decayed to 0 (now drifts to 20 without office); NPCs could not afford big buildings (loans, programme order); every house became a headline (only commerce and public buildings now); shopping centres earned nothing (demand divisor); factory power drained the treasury (business share paid privately); blackout stories on repeat (at most every six months); doing nothing won the ranking (building value counts 70 %).",
        "Two-player test in the editor (host and client in one process): the client skips the menu, gets the same island from the seed, picks its district in the lobby, and after the start sees the NPC field releases and buildings and the cards with real values. Found and fixed: one title screen per player stacked on top of each other (every pawn called it, including the replicated ones of the others – now one per world), the client was called “Speedy-…” instead of its name (name from the options sent to the server), console commands only reached the host (shady.World switches).",
        "Not yet: contracts between players (power, goods), a playable mayor, building in someone else's district, goods chains; player buildings without a road in the grid; cars and pedestrians on the client still run independently of the host (scenery only). Blueprint warnings on the server for remote controllers (admin menu) are harmless.",
        "Follow-up check on 06 Nov: the house placed by the sync has the same rotation as the lot house (front to the road) but stood 1 m beside it – the catalogue took the variant's “recommended” lot (5 × 7) instead of the lot standard 20 × 24 m with an anchor per variant; now it takes the lot standard first and era versions inherit it. Two NPCs with the same profile were identical to the dollar (everything deterministic) – now every NPC has a temperament (building pace, credit line).",
        "Blueprint warnings fixed (06 Nov, user): the server ran the player controller's BeginPlay for the other players' controllers too and tried to create the admin menu and key mapping there – that produced “Accessed None” warnings and opened the Message Log window on every start. Now a branch right after BeginPlay checks whether the controller is local; only then does the chain run. In the two-player test: no warning, host and client have their menu, the server-side proxy of the client has none."
      ],
      caps: [
        "Game running (May 1951): top cards with real values – district Northgate, treasury 400 k$ and 150 k$ private, three stories from the city gazette, politics, happiness, date",
        "District 1 with its nine building fields; treasury and happiness have already moved",
        "Action panel Residential (1955): house 12 k$ and apartment block 60 k$ with upkeep, residents and power – the Build button starts the ghost lot",
        "End year 1960: ranking of the six districts with points, wealth, influence, reputation, heat and residents; next to it the hearings panel with field 1 open and applications for the rest"
      ]
    },
    "hud-karten": {
      title: "Player interface: the top cards expand (mockup)",
      summary: "Every card in the top bar can be clicked and expands downwards – the card grows in height and, where needed, in width. It holds the additional information. Collapsed, the district card only shows its name; the space freed up holds a new Treasury card. All values are placeholders.",
      points: [
        "Controls: click a card = open/close, only one open at a time; clicking into the world closes it. A small arrow top right shows that the card expands; it lights up on hover. Expanding takes 0.22 s (height and width glide along), the content is revealed, not re-wrapped.",
        "District: key figures (population, housing, services, green), population over the last 12 months, age groups, land use, figures (employment, rent, commute, crime, schools, clinics) and what residents ask for.",
        "Treasury (new): balance and weekly result; expanded, income and expenses per week as bars, net, loan and credit rating.",
        "City News: collapsed the 3 latest, expanded 15 stories with the filter All / City / Politics / Economy / Life.",
        "Political Climate: the mayor's approval, city council with 23 seats (parties, own coalition), mood of the groups (unions, business, churches, press) and what is coming up.",
        "Citizen Happiness: why 88 % – reasons with plus/minus (jobs, parks, safety … rent, traffic, air), happiness per group, 30-day trend, top complaints.",
        "Clock: a month calendar that follows the game date (today marked, days with appointments dotted), upcoming appointments and the weather for the next 5 days.",
        "Test command hud.Card <0–5> (0 district … 5 clock, -1 close). The radial menu (Media → News opens the news card) comes later."
      ],
      caps: ["Collapsed: district with its name only, next to it the new Treasury", "District expanded", "Treasury, news (15 with filter), politics, happiness and calendar expanded"]
    },
    machtdreieck: {
      title: "Concept: the triangle of power – economy, politics, media",
      summary: "The user's submenu suggestions (Politics: candidates, bills, zoning hearings, votes, bribes; Media: outlets, editorial stories, campaign, investigations, advertisement) grew into a concept of how the three forces of the game hang together: the economy creates money, politics distributes rights, the media distribute attention – and heat slows down everything crooked. Accepted by the user the same day: tenders stay the sixth Politics entry, the numbers count as starting values to be tuned step by step, and the rule “the leader draws attention” will be tried out.",
      points: [
        "Four capitals per player: money, influence (0–100), reputation (−100 to +100, also per district) and heat (0–100 with thresholds 30 rumours / 60 investigation / 85 charges). All of them decay – nothing can be hoarded.",
        "Six edges of the triangle with starting rates: a 100 k$ donation ≈ +5 influence and one favor; a 50 k$ campaign ≈ +8 reputation × reach × credibility; an envelope costs 5–10 % of the gain and adds heat +15…+30. The honest path is slow and clean, the crooked one two to three times faster.",
        "Seven balance rules so that no side wins: every edge has a counter-edge; media amplify heat (investigation), politics dampens it (police, judges); built-in brakes (credibility per outlet, legitimacy, upkeep); diminishing returns; the leader draws attention; no total blockade; the city fills every gap (city gazette, review board, mainland).",
        "Politics with six entries (the user's five plus tenders – confirmed by the user), media with five – each with actions for ring 3 of the radial menu. The in-game menu was rebuilt accordingly (no effect yet).",
        "Economy as the third force: seven directions from the pillars (energy, production, construction & real estate, housing & education, trade & logistics, finance & services, tourism & public), era index 1950–2030, example game with six districts, lever table (what politics and media turn on the economy) and orders of magnitude for 1955: a campaign costs half a year's surplus – on purpose.",
        "Time structure (month, quarter, year, election every four years, flagship bill per era), three play styles (honest builder, kingmaker, press baron – none wins alone), an example chain in eight moves with numbers, implementation in four stages (V1 hearings + stories + ads)."
      ]
    },
    "spieler-hud-v2": {
      title: "Player interface, 2nd version: glass cards, icon radial menu, tilted object panel",
      summary: "The player interface rebuilt after the user's second reference image: semi-transparent glass cards at the top and bottom, a radial menu of icons with arcs for the sub-levels, and a tilted info panel when you click a building. Still no effect in the game, values are placeholders.",
      points: [
        "Top, five cards: district with key figures (population, housing, services, green space), City News with three headlines, Political Climate (left-right scale, “Stable”), Citizen Happiness (88 % with sparkline), clock/date/weather with speed buttons.",
        "Bottom left District Performance with four ring gauges (Economy, Infrastructure, Environment, Safety), centre Mayor's Message (four rotating quotes, dots to page), right round quick buttons (Transit, Nature, Roads, performance on/off, cog = show/hide panels) and a minimap with six districts.",
        "Tab: radial menu on the left. Inside 8 topics as glass segments with icons only (Buildings, Nature, Transport, Utilities, Politics, Media, Finances, Citizens), centre = back. Levels 2 and 3 open as arcs outwards next to the chosen segment (e.g. Nature → Trees → Oak, Pine, Birch), below it the path “Nature > Trees > Oak”.",
        "Click a building (tower, department store, hospital, café, house …): tilted panel on the right with an invented name, type/decade/level, occupancy, residents or employees, satisfaction, income, upkeep, net income, value and income over the last 8 weeks. Clicking empty ground or × closes it.",
        "Icons from FontAwesome 4.4 (free SIL OFL licence). Console test command: hud.Inspect [x y] opens the panel for the screen centre or a pixel.",
        "Buildings are recognised by their mesh name (SM_BLD_<year>_<type>_…); the values belong to the building, so they stay the same when you click it again.",
        "Fix after the user's test: the panel was only sheared (a parallelogram, every row tilted the same way, edges with stair steps). Now a real perspective like in the reference – turned around the vertical axis, right edge closer and taller, the top steeper than the bottom. Slate can only do 2D, so the panel is drawn into a texture every frame and projected as a finely divided grid; a transparent margin in the texture keeps the edges smooth. The close button is hit by inverting the projection.",
        "Second fix: the angles were measured from the reference image (top edge 6.8°, bottom edge 2.8°, right edge 1.17 × as tall, vanishing point at 71 % height, side edges converge slightly downwards) and the model was fitted in Python: 14° turn, eye distance 3 half card widths, tilted back 1.5°, eye to the left of the card (the camera looks from the screen centre). Measured in the game: 6.6° / 2.4° / 1.18. Plus a glass edge on the left and bottom, a light edge top/left and a soft shadow – the pane now has thickness.",
        "Third round (user): the thick glass rim on the left was not liked – removed, only thin light edges and the soft shadow remain. Angles refitted including the aspect ratio (16° turn, eye distance 3.4, 0.5° tilt, eye right of centre). Measured in the game: top edge 6.3°, bottom edge 2.8°, right edge 1.16 × as tall (reference 6.8° / 2.8° / 1.17).",
        "Enlarging for readability (user): Ctrl + mouse wheel scales the element under the mouse – radial menu or info panel (otherwise the open menu, without a menu the panel), 0.6–2.5 ×, in 10 % steps. The panel is rendered sharper, not just upscaled. Sizes are remembered; test command hud.Zoom <menu> <panel>. Ctrl no longer moves the camera down for this (Q/E do that)."
      ],
      caps: ["New interface over the island, radial menu at Nature", "Nature → Trees → Oak: icon ring inside, arcs for levels 2 and 3", "First version: panel only sheared (stepped edges)", "Fixed: real perspective with smooth edges", "Angles matched to the reference, with glass edge and shadow", "Without the thick rim, angles refined", "Ctrl + mouse wheel: radial menu 1.5 ×, panel 1.4 ×"],
      compareCap: "Before: first prototype (04.11.) – after: 2nd version after the new reference image"
    },
    "gebaeude-showcase": {
      title: "Building showcase in Unreal",
      summary: "Separate level with every imported building: one row per building type, columns 1950 → 2030, variants A/B/C side by side, a tilted info card per family with the data from. The island level stays untouched.",
      points: [
        "Data comes only from (imported and validated): 91 families, 191 variants, about 3000 actors on ~1.3 × 2.2 km.",
        "Info card to the left of each family: name, ID, revision, unique flag, style, variants, floors, height, footprint, lot, triangles/Nanite, predecessor/successor, status. A small lectern in front of each variant (form, floors, height, footprint).",
        "Renovation chains share a row (a family inherits its predecessor's row) – e.g. skyscraper 1950 → 1970 → 1990 → 2010 → 2030 side by side.",
        "Rebuild after the autopilot adds buildings:, then (about 5 min, only without Play). All showcase actors carry the tag Showcase and are removed first.",
        "Lesson: the editor in the background throttles to ~3 frames/s and every MCP call waits for a frame – the script turns throttling off during the build (30× faster).",
        "Play in the showcase with the same controls as on the island: WASD, right mouse button + wheel = camera speed, F = walk, F10 = admin menu. No title screen and no island generation there."
      ],
      caps: ["Showcase from above: rows per building type, info cards left of the families"]
    },
    "spieler-hud-radial": {
      title: "Player interface with radial menu (prototype)",
      summary: "First player interface to try out, based on a reference image from the user: status bar at the top, Tab opens a colour-coded radial menu with three levels. No effect in the game yet – this is about getting a feel for the menu flow.",
      points: [
        "After the title screen the player interface is there right away; the admin menu is hidden and only comes up with F10 (was B).",
        "Top: bar with logo, toggles for the panels (District, News, Politics, Satisfaction, Finances), date from Mon, 1 May 1950 and speed buttons. Panels can be switched on and off (toggle or ×), remembered in ",
        "Tab: radial menu with 6 main topics in their own colours (Build, Finances, Politics, Infrastructure, Services, Research). A click or key 1–9 opens the next ring all the way round (e.g. Build → Zones, Buildings, Design, Lots, Renovate, Demolish), and once more there (Buildings → Houses, Apartments, Office towers …).",
        "Right-click / Backspace / click in the centre = one level back, click outside or Tab = close. An action only shows “not implemented yet”.",
        "Smaller than in the reference image: diameter ~480 instead of ~800 points (at 1080p). Panel values are placeholders.",
        "Tech: pure Slate in C++, keys via a Slate input preprocessor (otherwise focus navigation swallows Tab). Walk mode now detects the admin menu by its widget instead of the mouse cursor."
      ],
      caps: ["Status bar and radial menu, level 1 (Tab)", "Build → Buildings: three rings, actions numbered on the outside"]
    },
    "mergedtower02-2030": {
      title: "Autopilot: four-lot tower 2030 (new build)",
      summary: "The sawtooth tower: a new hybrid-timber office tower on four merged lots (2 x 2), 48 x 36 m and about 180 m – the second-tallest building after the City Hall; piers, technical bands, portal and attic in dark smoked-oak wood, warm clear glass, dark bronze; the crown is three sheds with vertical north-light glass to the street and dark blue PV slopes facing south, sedum in between, brass letters \"SUMMIT TOWER\".",
      points: [
        "New build (unique) on 4 lots 2 x 2 (lot 64 x 56 m), footprint 48 x 36 m, one form variant.",
        "44–49 regular floors (default 47 about 179.5 m, max. 186.5 m) below the City Hall 2030.",
        "New crown: three sheds (north light + PV), sedum strips between – the only sawtooth silhouette on the island.",
        "Research: hybrid-timber office towers around 180 m, sawtooth roofs with PV on the south faces.",
        "Checks 168/168 after the Unreal import."
      ],
      caps: ["Four-lot tower 2030 from the northeast", "East view: sawtooth crown", "Gameplay view", "Reference sheet (ChatGPT via Codex)"],
      compareCap: "Merged-lot tower 2030 → four-lot tower 2030"
    },
    "mergedtower-2030": {
      title: "Autopilot: merged-lot tower 2030",
      summary: "The solar wedge: the glass slab on two lots grows by about ten hybrid-timber floors to about 145 m; corner piers, technical bands, portal and attic in light larch, warm clear glass, dark bronze frames and ribs, the crown wedge becomes dark blue PV glass with sedum below, brass letters \"ISLAND TOWER\".",
      points: [
        "Renovation + extension of BLD_2010_MergedTower_01: slab, piers, grid, bands, lobby, portal, attic and wedge as before.",
        "31–36 regular floors (default 35 about 145.5 m, max. 149 m) – exception because of the queue hint \"~150 m\".",
        "Light larch, warm clear glass, dark bronze, dark blue PV glass, stone, sedum, brass.",
        "Research: hybrid-timber high-rises and prefabricated timber extensions of existing office buildings with PV and green roofs.",
        "Checks 196/196 after the Unreal import."
      ],
      caps: ["Merged-lot tower 2030 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Merged-lot tower 2010 → 2030"
    },
    "parkinggarage-2030": {
      title: "Autopilot: parking garage 2030",
      summary: "The timber car park: the petrol spandrel bands get light larch cladding, the concrete a warm light grey coating, stair tower frames and door dark bronze, warm clear glass, dark bronze letters \"CITY PARKING\" on the timber band, the blue \"P\" stays, warm white light masts.",
      points: [
        "Renovation + extension of BLD_2010_ParkingGarage_01: block, decks, ramp, stair tower, entrance and light masts as before.",
        "6–9 parking decks (default 7), +1 deck.",
        "Light larch, warm light grey concrete, dark bronze, warm clear glass, blue P, red and white barriers.",
        "Research: hybrid-timber car parks and mobility hubs with timber facades, PV and green roofs.",
        "Checks 186/186 after the Unreal import."
      ],
      caps: ["Parking garage 2030 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Parking garage 2010 → 2030"
    },
    "tvtower-2030": {
      title: "Autopilot: TV tower 2030",
      summary: "The bronze head: the TV tower gets a renovation – shaft coated warm white, tower head, platforms and pavilion attic in dark bronze panels, warm clear glass in the observation and restaurant floors, sedum roof on the pavilion, brass letters \"TV TOWER\"; the red and white mast and the warning lamp stay.",
      points: [
        "Renovation + extension of BLD_2010_TVTower_01: pavilion, shaft, head, platforms and mast as before.",
        "7–9 shaft segments (default 8, about 107 m), mast unchanged.",
        "Warm white concrete, dark bronze, warm clear glass, sedum, brass, red and white mast.",
        "Research: renovated TV towers with new observation and restaurant floors.",
        "Checks 173/173 after the Unreal import."
      ],
      caps: ["TV tower 2030 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "TV tower 2010 → 2030"
    },
    "postoffice-2030": {
      title: "Autopilot: post office 2030",
      summary: "The solar glass post office: the light grey granite stays, the white window bands and the attic become light larch, windows and doors dark bronze with warm clear glass, the clock bay gets dark blue solar glass panels, sedum roof, brass letters \"POST OFFICE\", the yellow dock doors stay.",
      points: [
        "Renovation + extension of BLD_2010_PostOffice_01: block, counter hall, clock bay, canopy and loading dock as before.",
        "7–12 office floors (default 8), unique-building limit 56 m.",
        "Granite, light larch, dark blue solar glass, dark bronze, sedum, brass, signal yellow.",
        "Research: conversions of historic post and office buildings with timber extensions, green roofs and PV.",
        "Checks 199/199 after the Unreal import."
      ],
      caps: ["Post office 2030 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Post office 2010 → 2030"
    },
    "school-2030": {
      title: "Autopilot: school 2030",
      summary: "The timber band school: the red-brown brick stays, the lime spandrel bands become light larch, windows and sun-shade boxes dark bronze, the clock bay warm white render, timber doors, sedum roof, brass letters \"PUBLIC SCHOOL\".",
      points: [
        "Renovation + extension of BLD_2010_School_01: forms A/B/C, classroom windows, clock bay, canopy and doors as before.",
        "3–6 upper floors (default 5), low-rise rule 0..+1.",
        "Brick, light larch, dark bronze, warm white render, sedum, brass.",
        "Research: school retrofits with timber facades, green roofs and PV (net-zero schools).",
        "Checks 457/457 after the Unreal import."
      ],
      caps: ["School 2030 (form A) from the northeast", "Gameplay view (forms A, B, C)", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "School 2010 → 2030"
    },
    "gasstation-2030": {
      title: "Autopilot: gas station 2030",
      summary: "The charging station: the gas station becomes a charging point – teal chargers instead of pumps on the same island, warm Douglas fir cladding, white fascias with a teal light strip, dark bronze frames, sedum roof; the \"MOTOR SERVICE\" workshop and the \"GAS\" sign wall stay.",
      points: [
        "Renovation of BLD_2010_GasStation_01 without extension: forms A/B, office, doors, canopy, pump island and sign wall as before.",
        "Douglas fir, teal (chargers, light strip, letters), dark bronze, warm clear glass, sedum.",
        "Research: gas stations converted into charging hubs with timber canopies and PV.",
        "Checks 334/334 after the Unreal import."
      ],
      caps: ["Gas station 2030 (form A) from the northeast", "Gameplay view (forms A and B)", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Gas station 2010 → 2030"
    },
    "apartmentblock-2030": {
      title: "Autopilot: apartment block 2030",
      summary: "The silver timber block: the apartment block gets a serial retrofit – prefabricated timber elements with silver-grey larch over the old facade, dark bronze windows and balcony parapets, warm grey recycled concrete piers, sedum roof with PV and a heat pump; oak door and brass letters \"ELM COURT\".",
      points: [
        "Serial retrofit + extension of BLD_2010_ApartmentBlock_01: outline, windows, four balcony stacks, staircase, entrance and roof housing as before.",
        "7–15 upper floors (default 8 = nine storeys), apartment block rule +1..+2.",
        "Silver-grey larch, recycled concrete, dark bronze, warm clear glass, warm grey stone, sedum + PV, brass.",
        "Research: serial retrofits (Energiesprong) with prefabricated timber facades, PV roofs and heat pumps.",
        "Checks 208/208 after the Unreal import."
      ],
      caps: ["Apartment block 2030 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Apartment block 2010 → 2030"
    },
    "theater-2030": {
      title: "Autopilot: cinema 2030",
      summary: "The green hall: the windowless auditorium disappears behind a living green wall, the front gets light larch fins with dark bronze panels and warm clear glass; warm grey stone plinth, sedum roof with PV – the red pylon \"CINEMA\" still glows in front.",
      points: [
        "Renovation + extension of BLD_2010_Theater_01: outline, fins, windows, portal, marquee, stage door and pylon as before.",
        "5–11 upper floors (default 6), low-building rule +1..+2.",
        "Living green wall (slot `Render`), larch, dark bronze, warm clear glass, warm grey stone, sedum + PV.",
        "Research: living walls retrofitted on facades with few windows, a timber cinema with rammed-earth walls.",
        "Checks 207/207 after the Unreal import."
      ],
      caps: ["Cinema 2030 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Cinema 2010 → 2030"
    },
    "hotel-2030": {
      title: "Autopilot: grand hotel 2030",
      summary: "The garden tower: the fins become honey-brown wood lamellas, every spandrel a planted trough, frames, portal and marquee in dark bronze, warm clear glass, warm grey stone plinth and sedum roof gardens; \"GRAND HOTEL\" in brass. Two more floors, below the newspaper building and the bank.",
      points: [
        "Renovation + extension of BLD_2010_Hotel_01: outline, fin axes, windows, setbacks, portal, marquee and roof sign as before.",
        "16–27 guest-room floors (default 24 ≈ 101.7 m), capped at +2 at the top (height hierarchy 2030).",
        "Thermowood lamellas, planter troughs, dark bronze, warm clear glass, warm grey stone, sedum, brass letters.",
        "Research: hotel towers with timber screens and planted facades, hybrid timber hotels with roof gardens.",
        "Checks 212/212 after the Unreal import."
      ],
      caps: ["Grand hotel 2030 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Grand hotel 2010 → 2030"
    },
    "firestation-2030": {
      title: "Autopilot: fire station 2030",
      summary: "The dark timber station: the station grows by one or two floors and is clad in dark charred larch – the red doors, red fascia and tower cap stand out all the more; warm grey stone plinth, sedum roof, white letters.",
      points: [
        "Renovation + extension of BLD_2010_FireStation_01 in all three forms: outlines, doors, windows, canopy and hose tower as before.",
        "5–10 upper floors (default 5), low-building rule +1..+2.",
        "Charred larch (slot `Render`), warm grey stone, dark bronze, warm clear glass, sedum; red stays the identifying mark.",
        "Research: timber fire stations with net-zero targets, public safety buildings with green roofs and PV.",
        "Checks 447/447 after the Unreal import."
      ],
      caps: ["Fire station 2030 (form A) from the northeast", "Family A/B/C in the gameplay view", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Fire station 2010 → 2030"
    },
    "police-2030": {
      title: "Autopilot: police station 2030",
      summary: "The green station: the district station gets horizontal larch siding, light recycled concrete surrounds, warm glass in dark bronze frames, a warm grey stone plinth and planted roofs; the fascia band, blue lamps and lettering stay. One or two more floors.",
      points: [
        "Renovation + extension of BLD_2010_Police_01 in all three forms: outlines, entrance, lamps, garages, cell windows, radio mast as before.",
        "5–11 regular floors (default 6), low-building rule +1..+2.",
        "Larch siding (slot `Brick`), recycled concrete, warm clear glass, dark bronze, sedum; police blue as the fascia band.",
        "Research: police stations converted to net zero with green roofs, hybrid timber police buildings.",
        "Checks 440/440 after the Unreal import."
      ],
      caps: ["Police station 2030 (form A) from the northeast", "Family A/B/C in the gameplay view", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Police station 2010 → 2030"
    },
    "plaza-2030": {
      title: "Autopilot: plaza 2030",
      summary: "The sponge square: same layout, unsealed surface – warm sand-grey permeable small pavers with green grass-joint bands in the old layout, light recycled concrete, a dark bronze obelisk with a glowing opal glass tip, solar light columns, larch benches and wildflowers in the round planters.",
      points: [
        "Refurbishment of BLD_2010_Plaza_01 on the same area: layout, stairs, basin, obelisk shape, kiosk, trees and prop places as before; the plaza does not grow.",
        "Permeable small pavers, green grass-joint bands, recycled concrete for platform, walls, planters and basin.",
        "Dark bronze obelisk with an opal glass light tip, bronze inscription.",
        "Street furniture as in the city park 2030 (solar light column 3.5 m, larch bench, larch bin); kiosk with a bronze frame and barrel roof.",
        "Research: unsealed city squares following the sponge-city principle, city hall plazas with permeable paving and rainwater storage.",
        "Checks 238/238 after the Unreal import."
      ],
      caps: ["Plaza 2030 from the northeast", "Top view: band layout as 2010, now grass joints", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Plaza 2010 → 2030"
    },
    "newspaper-2030": {
      title: "Autopilot: newspaper building 2030",
      summary: "The timber band house: the DAILY NEWS tower grows by two floors to about 115 m – light ash-wood siding on the bands, warm clear glass, a dark photovoltaic central strip, a warm white LED band, planted setbacks; the red drum and the lit globe remain its landmark.",
      points: [
        "Renovation + extension of BLD_2010_Newspaper_01 on the same lot (26 × 18 m); portal, press hall, docks, setbacks, drum and globe as before.",
        "Extension +2..+3 (15–26 office floors, default 25): 79.6–118.1 m, default 114.6 m – hierarchy 2030: above the normal high-rises, below the bank.",
        "Ash-wood siding, warm clear glass, photovoltaic central strip, dark bronze, warm grey stone, warm white LED band, sedum terraces.",
        "Research: media headquarters in hybrid timber construction, hybrid timber towers with photovoltaic glass.",
        "Checks 193/193 after the Unreal import (4 meshes with Nanite, 12 materials under)."
      ],
      caps: ["Newspaper building 2030 from the northeast (default B25)", "Portal with sign band and warm white LED band", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Newspaper building 2010 → 2030"
    },
    "bank-2030": {
      title: "Autopilot: bank 2030",
      summary: "The solar vault: the ISLAND TRUST BANK stays on its two lots, grows by three floors to about 120 m and makes power from its facade – light terrazzo panels, warm clear glass, dark photovoltaic spandrels, planted terraces and a photovoltaic glass vault with bronze ribs.",
      points: [
        "Renovation + extension of BLD_2010_Bank_01 on the same 2 lots (64 × 24 m); loggia, steps, hall windows, setbacks and crown as before.",
        "Extension +2..+4 (14–27 office floors, default 25): 80.2–127.0 m, default 119.8 m – hierarchy 2030: above the normal high-rises, below the towers on merged lots.",
        "Terrazzo panels, warm clear glass, dark photovoltaic spandrels and vault, dark bronze, warm grey stone, sedum terraces.",
        "Research: bank towers with photovoltaics in the spandrel panels, eco renovations of headquarters with BIPV glass.",
        "Checks 188/188 after the Unreal import (4 meshes with Nanite, 11 materials under)."
      ],
      caps: ["Bank 2030 from the northeast (default B25)", "Loggia with bronze letters, photovoltaic spandrels", "Gameplay view on the double lot", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Bank 2010 → 2030"
    },
    "cityhall-2030": {
      title: "Autopilot: city hall 2030",
      summary: "The green city hall: the block grows onto the two lots behind it (80 × 48 m) and by two floors, gets a warm skin of larch panels with planted spandrels and a sedum roof with heat pumps; the clock tower rises on a 110 m shaft with a clear glass pyramid and bronze spire – at about 205 m the tallest building on the island.",
      points: [
        "Renovation + extension of BLD_2010_CityHall_01: queue exception 4 lots → block 80 × 48 m (20 × 12 bays), lot 96 × 80 m; front, portico, staircase and tower position as before.",
        "Extension +2..+6 (12–27 regular floors, default 14), tower shaft 110 m: crown roof 182.4–242.4 m, default 190.4 m, spire 205.4 m.",
        "Larch panels, planted spandrels, warm clear glass, dark bronze frames, warm grey stone, sedum roof; bronze instead of stainless steel.",
        "Research: hybrid timber towers (up to 180 m), net-zero timber city halls, vertically greened facades.",
        "Checks 182/182 after the Unreal import (4 meshes with Nanite, 12 materials under)."
      ],
      caps: ["City hall 2030 from the northeast (default B14, 205 m)", "Front: portico, larch, planted spandrels", "Gameplay view on four lots", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "City hall 2010 → 2030"
    },
    "park-2030": {
      title: "Autopilot: city park 2030",
      summary: "The sponge park: rain soaks into sand-grey small pavers and green grass joints, the raised beds bloom as a wildflower meadow, the basin collects rain water around a planted island and cools the plaza with a ring of mist – plus larch benches, solar light columns and larch-clad bins.",
      points: [
        "Refurbishment of BLD_2010_Park_01 on the same area (A square, B plaza, C promenade): paths, plaza, trees, lots and prop places as before.",
        "Permeable sand-grey small pavers, grass-joint bands, recycled concrete for border, planter boxes, planter rims and basin; beds as wildflower meadow.",
        "Rain basin: planted island in the old basin, twelve low mist jets up to 1.3 m.",
        "Furniture: solar light column 4.0 m with a larch mast and PV panel, larch bench on bronze frames (seat height for the pedestrians unchanged), larch-clad bin with a bronze lid.",
        "Checks 281/281 after the Unreal import (8 meshes with Nanite, 11 materials under)."
      ],
      caps: ["Form A square with the rain basin", "Form B plaza", "Rain basin with mist ring, bench, bin, solar light column", "Family A/B/C on the test lots", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "City park 2010 → 2030"
    },
    "hospital-2030": {
      title: "Autopilot: hospital 2030",
      summary: "The green clinic: CITY HOSPITAL gains one floor and is clad with light larch panels on the spandrel bands; profiles dark bronze, flat roofs as sedum green roofs, plant room with wooden louvres. Footprint, canopies, pyramid and signs stay.",
      points: [
        "Renovation + extension of BLD_2010_Hospital_01: forms A/B/C with the same footprints, 7–14 ward floors (default 8).",
        "Light larch panels with vertical boards instead of white panels, dark bronze profiles, slightly warm clear glass.",
        "Sedum green roof on the main and plant-room roofs, wooden louvres on the plant room; the glass pyramid stays.",
        "Default height 37.6 m, tallest version 58.6 m.",
        "Checks 425/425 after the Unreal import (12 meshes with Nanite, 13 materials under)."
      ],
      caps: ["Hospital 2030 (form A) from the northeast", "Sedum green roof from above", "Family A/B/C", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Hospital 2010 → 2030"
    },
    "cafe-2030": {
      title: "Autopilot: café 2030",
      summary: "Wood and green: the coffee house is reclad in vertical larch boards, the fields between the upper windows become planted, the flat roof becomes a sedum green roof; mansard band and frames dark bronze, oak signs. Massing and texts stay.",
      points: [
        "Renovation of BLD_2010_Cafe_01: forms A/B/C with the same geometry, no extra floor.",
        "Vertical larch boards instead of anthracite panels, green fields instead of oak slats, warm grey stone base.",
        "Mansard band, half-columns and frames in dark bronze, warm-white LED line, linen blinds.",
        "Sedum green roof; signs with oak faces and warm-white letters; sage-green upholstery inside.",
        "Checks 271/271 after the Unreal import (6 meshes with Nanite, 18 materials under)."
      ],
      caps: ["Café 2030 (form A, corner diner) from the northeast", "Form B roadside", "Family A/B/C", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Café 2010 → 2030"
    },
    "residential-2030": {
      title: "Autopilot: house 2030",
      summary: "Larch and green: the family house gets a prefabricated facade of vertical larch boards, wood-aluminium windows in dark bronze, flower boxes below the windows and a trellis with climbing plants on the gable instead of the satellite dish; graphite roof, PV stays. Footprint and height stay.",
      points: [
        "Renovation of BLD_2010_Residential_01: forms A/B/C with the same footprints and heights, no extra floor.",
        "Vertical larch boards instead of white render, windows and reveals in dark bronze, graphite tiles, dark grey gutters.",
        "Timber flower boxes with plants below the large front windows and the rear upper-floor windows.",
        "Trellis with climbing plants on the gable instead of the satellite dish; the 2010 PV array stays.",
        "Checks 263/263 after the Unreal import (3 meshes with Nanite, 16 materials under)."
      ],
      caps: ["House 2030 (form A) from the northeast", "Rear with flower boxes and PV", "Family A/B/C", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "House 2010 → 2030"
    },
    "departmentstore-2030": {
      title: "Autopilot: department store 2030",
      summary: "Green bands: the \"Shopping Center\" gets a larch trough with a hedge on every spandrel band and gains one floor; warm sand ceramic and dark bronze profiles replace light grey and anthracite, the roof carries a garden with trees at the front and PV rows at the back instead of AC units.",
      points: [
        "Renovation + extension of BLD_2010_DepartmentStore_01: forms A/B/C with the same footprints, 6–13 upper floors (default 8).",
        "On every spandrel band of the straight facades a larch trough with a dense hedge (0.28 m in front of the wall).",
        "Warm sand ceramic, slightly warm clear glass, profiles/canopy fascia/crown ribs in dark bronze.",
        "Roof: garden at the front (larch edge, lawn, 3–4 trees), PV rows at the back/sides, AC units and ducts removed; glass cones/gable stay.",
        "Default height 42.1 m, tallest version 61.1 m.",
        "Checks 419/419 after the Unreal import (12 meshes with Nanite, 17 materials under)."
      ],
      caps: ["Department store 2030 (form A) from the northeast", "Roof garden and PV from above", "Family A/B/C", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Department store 2010 → 2030"
    },
    "skyscraper2-2030": {
      title: "Autopilot: round-cornered office tower 2030",
      summary: "Hedge bands and solar pergola: the round-cornered CITY TOWER gets a bronze trough with a dense hedge on every spandrel band, running round the rounded corners; warm white ceramic panels and dark bronze lines replace silver and anthracite; behind the parapet there is a roof garden with trees and a timber pergola with a PV roof.",
      points: [
        "Renovation + extension of BLD_2010_Skyscraper_02: forms A/B/C with the same footprints and rounded corners, 14–28 upper floors (default A/B 24, C 26).",
        "Warm white ceramic panels, clear slightly warm glass, lines, mullions and canopy in dark bronze.",
        "On every floor a bronze trough with a dense hedge, running round the corners too (front edge 0.26 m in front of the wall).",
        "Crown: the parapet stays, behind it a roof garden with lawn and 3–5 trees and a timber pergola with a PV roof.",
        "Height to the treetops A 94.6 m, C 101.6 m, tallest version 108.6 m (cap 110.5 m).",
        "Checks 412/412 after the Unreal import (12 Nanite meshes, 12 materials under)."
      ],
      caps: ["Round-cornered office tower 2030 (form A) from the northeast", "Roof garden and PV pergola from above", "Entrance and hedge bands at eye level", "Family A/B/C", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Round-cornered office tower 2010 → 2030"
    },
    "skyscraper-2030": {
      title: "Autopilot: office tower 2030",
      summary: "Timber fins and roof garden: the CITY TOWER becomes a timber hybrid – light larch on piers and bands, vertical timber fins in front of the glass, a planter band on every 4th floor; instead of the roof light and antenna the crown carries a roof garden with trees and PV fields.",
      points: [
        "Renovation + extension of BLD_2010_Skyscraper_01: forms A/B/C with the same footprints, 14–27 upper floors (default A/B 24, C 26).",
        "Larch cladding on piers, bands and frames; a timber fin in front of every 2nd mullion; bronze profiles.",
        "Planter band (larch trough with hedge) on every 4th floor instead of the technical band.",
        "Crown: PV fields on the roof and tier 1, roof garden with trees and a glass balustrade; the antenna is gone.",
        "Height to the treetops A 100.0 m, C 107.0 m, tallest version 110.5 m (cap 110.5 m).",
        "Checks 472/472 after the Unreal import (15 Nanite meshes, 13 materials under)."
      ],
      caps: ["Office tower 2030 (form A) from the northeast", "Roof garden and PV from above", "Lobby and timber fins at eye level", "Family A/B/C", "Reference sheet (ChatGPT via Codex, input: the 2010 sheet)"],
      compareCap: "Office tower 2010 → 2030"
    },
    "mergedtower-2010": {
      title: "Autopilot: merged-lot tower 2010",
      summary: "Glass wedge: a new unique building on two merged office-tower lots – a 48 m wide glass slab with silver-grey corner piers and technical bands, topped by a glass wedge rising from west to east to 18 m. Default 25 regular floors, 110.5 m.",
      points: [
        "New build (unique), form A only, lot 64 × 28 m (two office-tower lots).",
        "22–27 regular floors (default 25), 100–117.5 m, below the City Hall 2010.",
        "Silver-grey, blue-green glass; stainless steel letters \"ISLAND TOWER\".",
        "Checks 168/168 after the Unreal import."
      ],
      caps: ["Merged-lot tower 2010 from the northeast", "Front view", "Reference sheet v2 (ChatGPT via Codex)"],
      compareCap: "Office tower 2010 → merged-lot tower 2010"
    },
    "parkinggarage-2010": {
      title: "Autopilot: car park 2010",
      summary: "Petrol and LED: the spandrel bands get petrol powder-coated aluminium panels, the concrete a light grey protective coating, the decks a dark grey coating; white letters, the blue P stays, the light masts shine cool white. One more deck.",
      points: [
        "Renovation + extension of BLD_1990_ParkingGarage_01: outline, decks, ramp, stair tower and entrance as before.",
        "5–8 parking decks (default 6), +1 as in 1990.",
        "Petrol, light grey, dark grey, anthracite, white; blue P.",
        "Checks 186/186 after the Unreal import."
      ],
      caps: ["Car park 2010 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Car park 1990 → 2010"
    },
    "tvtower-2010": {
      title: "Autopilot: TV tower 2010",
      summary: "White shaft, dark head: the shaft is coated white, the tower head, platforms and pavilion fascia get anthracite metal panels, and the glass turns clear. One more shaft segment and a 4 m longer mast for the digital antenna; tip up to 107 m.",
      points: [
        "Renovation + extension of BLD_1990_TVTower_01 (unique building): pavilion, shaft, head and platforms as before.",
        "6–8 shaft segments (default 7), 22 m mast, tip 95–107 m, below the City Hall 2010.",
        "White, anthracite, clear glass; the red and white mast stays.",
        "Checks 173/173 after the Unreal import; run 1 discarded because of a check/metadata error."
      ],
      caps: ["TV tower 2010 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "TV tower 1990 → 2010"
    },
    "postoffice-2010": {
      title: "Autopilot: post office 2010",
      summary: "Granite and opal glass: the light grey granite of 1990 stays, windows and doors turn anthracite with clear glass, the entrance bay with the clock gets white backlit opal glass; the dock doors are signal yellow. One or two more floors.",
      points: [
        "Renovation + extension of BLD_1990_PostOffice_01 (unique building): outline, window axes, entrance bay, clock and mail dock as before.",
        "6–10 office floors (default 7), at most 49 m.",
        "Light grey granite, anthracite, clear glass, white opal glass; yellow dock doors.",
        "Checks 198/198 after the Unreal import."
      ],
      caps: ["Post office 2010 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Post office 1990 → 2010"
    },
    "school-2010": {
      title: "Autopilot: school 2010",
      summary: "Brick, anthracite and lime: the brick stays, windows and sun-blind boxes turn anthracite with clear glass, spandrels and doors lime green; the white entrance bay with the clock remains. At most one more floor.",
      points: [
        "Renovation + extension of BLD_1990_School_01 (forms A/B/C): outline, window bands, entrance bay and clock as before.",
        "3–5 upper floors (default 4), 0..+1 added floor.",
        "Brick, anthracite, lime, white, clear glass.",
        "Checks 454/454 after the Unreal import."
      ],
      caps: ["School 2010 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "School 1990 → 2010"
    },
    "gasstation-2010": {
      title: "Autopilot: gas station 2010",
      summary: "Anthracite and green: dark composite panels, white fascias with a green light line, green pumps with a white head, anthracite frames, clear glass and cool LED light under the canopy. No added floors – the gas station keeps its 1990 height.",
      points: [
        "Renovation of BLD_1990_GasStation_01 (forms A/B): outline, office, bays, canopy, pump island and sign blade as before.",
        "2–3 floors of flats as in 1990 (default 2), no added floors.",
        "Anthracite, white, green, clear glass; colour variants blue, red, orange.",
        "Checks 334/334 after the Unreal import."
      ],
      caps: ["Gas station 2010 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Gas station 1990 → 2010"
    },
    "apartmentblock-2010": {
      title: "Autopilot: apartment block 2010",
      summary: "White and anthracite: the second round of insulation brings smooth white render, with dark grey piers, ground floor and canopy, anthracite windows and balcony parapets and an oak door. One or two more floors.",
      points: [
        "Renovation + extension of BLD_1990_ApartmentBlock_01: outline, balconies, staircase strip and entrance as before.",
        "6–13 upper floors (default 7 = eight storeys), +1..+2, below the 2010 high-rise band.",
        "White, dark grey, anthracite, clear glass; an oak door as the warm accent.",
        "Checks 207/207 after the Unreal import."
      ],
      caps: ["Apartment block 2010 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Apartment block 1990 → 2010"
    },
    "theater-2010": {
      title: "Autopilot: cinema 2010",
      summary: "The black light box: anthracite-black metal panels between light grey fins, clear glass, a dark grey auditorium and a black base; the only colour left is the red \"CINEMA\" pylon and the bright display over the entrance. One or two more floors.",
      points: [
        "Renovation + extension of BLD_1990_Theater_01 (unique building): outline, fins, portal, marquee and pylon as before.",
        "4–9 upper floors (default 5), low-rise rule +1..+2, below the 2010 high-rise band.",
        "Anthracite-black, light grey, dark grey auditorium, clear glass; the red pylon is the only accent.",
        "Checks 205/205 after the Unreal import."
      ],
      caps: ["Cinema 2010 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Cinema 1990 → 2010"
    },
    "hotel-2010": {
      title: "Autopilot: grand hotel 2010",
      summary: "The bright grand hotel: fins and bands in large-format light stone panels, clear glass with dark glass spandrels, anthracite frames and marquee, a black granite plinth and lit stainless steel letters; six floors taller by default (about 95 m).",
      points: [
        "Renovation + extension of BLD_1990_Hotel_01 (unique building): outline, fins, setbacks, portal, marquee and roof sign frame as before.",
        "14–25 guest-room floors (default 22), 2010 high-rise rule +3..+8, every stage below the City Hall 2010.",
        "Light stone panels, clear glass, dark spandrels, anthracite, black granite, stainless letters.",
        "Checks 211/211 after the Unreal import."
      ],
      caps: ["Grand hotel 2010 from the northeast", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Grand hotel 1990 → 2010"
    },
    "firestation-2010": {
      title: "Autopilot: fire station 2010",
      summary: "The red edge: insulated and rendered light grey, clear glass in anthracite frames, an anthracite plinth; red moves from the window frames to the fascia, canopy and tower cap, the doors stay red. One or two more floors.",
      points: [
        "Renovation + extension of BLD_1990_FireStation_01 in all three forms: outlines, hall, doors, windows, hose tower as before.",
        "4–8 upper floors (default 4), low-building rule +1..+2.",
        "Light grey render, anthracite plinth/door surrounds, clear glass, red metal fascia and tower cap.",
        "Checks 447/447 after the Unreal import."
      ],
      caps: ["Fire station 2010 (form A) from the northeast", "Family A/B/C in the gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Fire station 1990 → 2010"
    },
    "police-2010": {
      title: "Autopilot: police station 2010",
      summary: "The bright station: energy refurbishment – white render on external insulation, light grey window surrounds, clear glass in anthracite frames, an anthracite plinth; the police-blue fascia band stays the identifying mark. One or two more floors.",
      points: [
        "Renovation + extension of BLD_1990_Police_01 in all three forms: outlines, entrance, lamps, garages, cell windows, radio mast as before.",
        "4–9 regular floors (default 5), low-building rule +1..+2.",
        "White render (slot `Brick`), light grey precast, clear glass, anthracite; police blue as the fascia band.",
        "Pipeline report: the surface tool puts a clinker joint pattern on the render slot `Brick` (slot name beats pattern type) – reported, not worked around.",
        "Checks 440/440 after the Unreal import."
      ],
      caps: ["Police station 2010 (form A) from the northeast", "Family A/B/C in the gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Police station 1990 → 2010"
    },
    "plaza-2010": {
      title: "Autopilot: plaza 2010",
      summary: "The bright civic square: same layout, new surface – large-format light grey slabs with anthracite bands, light concrete, an obelisk of brushed stainless steel with a glowing opal glass tip, LED light columns, wooden benches and lavender in the round planters.",
      points: [
        "Refurbishment of BLD_1990_Plaza_01 on the same area: layout, stairs, basin, obelisk shape, kiosk, trees and prop places as before; the plaza does not grow.",
        "Light grey slabs, anthracite bands, light concrete for platform, walls, planters and basin.",
        "Stainless steel obelisk with an opal glass light tip, stainless inscription.",
        "Street furniture as in the city park 2010 (LED light column 3.5 m, bench without armrests, bin with a stainless lid); kiosk anthracite with a zinc roof.",
        "Checks 238/238 after the Unreal import."
      ],
      caps: ["Plaza 2010 from the northeast", "Top view: band layout as 1990, light slabs", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Plaza 1990 → 2010"
    },
    "newspaper-2010": {
      title: "Autopilot: newspaper building 2010",
      summary: "The glass newsroom: the DAILY NEWS tower grows by eight floors to about 108 m, the bands become light panels, the window ribbons clear glass, the ticker glows white-blue – and the globe becomes clear glass lit from inside, in its red ring.",
      points: [
        "Renovation + extension of BLD_1990_Newspaper_01: outline, bands, portal, press hall, docks, setbacks, drum and globe as before.",
        "Extension +3..+8 (13–24 office floors, default 23): 72.6–111.1 m, default 107.6 m – above every 2010 high-rise, below the city hall 2010.",
        "Large-format light panels, clear glass, anthracite frames and base; LED band cool white-blue; globe clear with stainless ribs, the red ring stays.",
        "Research: newspaper and media buildings around 2010 – a transparent newsroom behind clear glass, LED bands in the facade.",
        "Checks 192/192 after the Unreal import (4 meshes with Nanite, 12 materials under)."
      ],
      caps: ["Newspaper building 2010 from the northeast (default B23)", "Portal with the LED band at eye level", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Newspaper building 1990 → 2010"
    },
    "bank-2010": {
      title: "Autopilot: bank 2010",
      summary: "The glass vault: the ISLAND TRUST BANK grows onto the neighbouring lot (64 × 24 m) and by seven floors to about 109 m, is reclad light – warm grey panels, blue-grey clear glass, anthracite base – and the copper vault becomes a glass vault with stainless ribs. At every stage it stays below the city hall.",
      points: [
        "Renovation + extension of BLD_1990_Bank_01: queue exception 2 lots → slab 64 × 24 m (16 bays), lot 80 × 36 m; loggia, steps, doors and crown in the middle as before.",
        "Extension +3..+7 (12–23 office floors, default 22): 73.0–112.6 m, default 109.0 m – above every 2010 high-rise, below the city hall 2010.",
        "Large-format warm grey panels, blue-grey clear glass, dark glass spandrels, anthracite frames and base; stainless steel instead of brass and copper.",
        "Research: renovations of 1970s/80s bank towers around 2010 – a new light skin, clear glass instead of mirror and bronze glass, extension of the headquarters.",
        "Checks 186/186 after the Unreal import (4 meshes with Nanite, 11 materials under)."
      ],
      caps: ["Bank 2010 from the northeast (default B22)", "Front: 64 m wide slab, loggia in the middle", "Gameplay view on the double lot", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Bank 1990 → 2010"
    },
    "cityhall-2010": {
      title: "Autopilot: city hall 2010",
      summary: "The civic forum: the city hall grows onto the neighbouring lot (80 × 24 m) and by four floors, is reclad light and clear – light panels, clear glass, anthracite podium – and the clock tower rises on a 50 m shaft with a clear glass pyramid and stainless spire. It stays the tallest building in town.",
      points: [
        "Renovation + extension of BLD_1990_CityHall_01: queue exception 2 lots → block 80 × 24 m (20 bays), lot 96 × 40 m; portico, staircase, doors and tower in the middle as before.",
        "Extension +3..+8 (10–21 regular floors, default 12), tower shaft 50 m: crown roof 114.4–158.4 m, default 122.4 m.",
        "Large-format light panels, clear glass with dark grey glass spandrels, anthracite frames and stone podium; stainless steel instead of gold.",
        "Research: renovations and extensions of 1970s city halls around 2010 – a new light skin, clear glass, an annex in the same language.",
        "Checks 179/179 after the Unreal import (4 meshes with Nanite, 12 materials under)."
      ],
      caps: ["City hall 2010 from the northeast (default B12)", "Front: 80 m wide block, portico in the middle", "Gameplay view on the double lot", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "City hall 1990 → 2010"
    },
    "park-2010": {
      title: "Autopilot: city park 2010",
      summary: "The bright plaza: the granite gives way to large-format light grey slabs, the obelisk to a flat stone table with vertical water jets – plus wooden benches on anthracite frames, LED light columns and beds of grasses and lavender.",
      points: [
        "Refurbishment of BLD_1990_Park_01 on the same area (A square, B plaza, C promenade): paths, plaza, trees, lots and prop places as before.",
        "Large-format light grey slabs, narrow anthracite bands, light concrete for border, planter boxes, planter rims and basin.",
        "Water feature: stone table in the old basin, centre jet 2.4 m, eight ring jets.",
        "Furniture: LED light column 4.0 m, wooden bench without armrests (seat height for the pedestrians unchanged), anthracite bin with a stainless lid.",
        "Checks 281/281 after the Unreal import (8 meshes with Nanite, 11 materials under)."
      ],
      caps: ["Form A square with the water feature", "Form B plaza", "Water feature, bench, bin, LED light column", "Family A/B/C on the test lots", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "City park 1990 → 2010"
    },
    "hospital-2010": {
      title: "Autopilot: hospital 2010",
      summary: "The bright clinic: \"CITY HOSPITAL\" gains one ward floor and is reclad in light tones – white panel bands, clear glass in anthracite mullions, light grey stone below, green canopy edges; red cross and signs stay.",
      points: [
        "Renovation + extension of BLD_1990_Hospital_01: forms A/B/C with the same footprints, 6–12 ward floors (default 7).",
        "Large-format white panels instead of light grey aluminium composite; clear glass in anthracite mullions instead of mirror glass with turquoise.",
        "Ground floor in light grey stone, anthracite columns, green canopy edges; the glass pyramid clear with dark ridges.",
        "Default height 34.1 m, tallest version 51.6 m.",
        "Checks 424/424 after the Unreal import (12 meshes with Nanite, 13 materials under)."
      ],
      caps: ["Hospital 2010 (form A) from the northeast", "Form B (L-shape)", "Family A/B/C", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Hospital 1990 → 2010"
    },
    "cafe-2010": {
      title: "Autopilot: café 2010",
      summary: "Coffee house: the neo-diner is reclad dark and warm – anthracite profiled panels, oak slats, a dark zinc mansard band with a warm-white light line, black signs; massing and texts stay.",
      points: [
        "Renovation of BLD_1990_Cafe_01: forms A/B/C with the same geometry, no extra floor.",
        "Anthracite profiled panels instead of stainless steel, oak slats instead of glass blocks, dark stone base.",
        "Mansard band and half-columns in dark zinc, a warm-white LED line instead of pink neon, black frames, linen blinds.",
        "Black signs with warm-white letters; inside cognac leather, concrete, pendant lights.",
        "Checks 270/270 after the Unreal import (6 meshes with Nanite, 18 materials under)."
      ],
      caps: ["Café 2010 (form A, corner diner) from the northeast", "Form B roadside", "Family A/B/C", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Café 1990 → 2010"
    },
    "residential-2010": {
      title: "Autopilot: house 2010",
      summary: "Energy renovation: the family house gets white render, anthracite windows without glazing bars and new anthracite tiles; a solar array covers the rear roof slope. Footprint, bay window/conservatory and height stay.",
      points: [
        "Renovation of BLD_1990_Residential_01: forms A/B/C with the same footprints and heights, no extra floor.",
        "White smooth render instead of pastel, anthracite windows without glazing bars, anthracite flat tiles, grey gutters.",
        "Solar panels on the rear main roof slope: A/B 10, C 12 modules, clear of the chimney.",
        "Oak front door with a narrow glass strip; bay window/conservatory, porch roof and satellite dish stay.",
        "Checks 262/262 after the Unreal import (3 meshes with Nanite, 14 materials under)."
      ],
      caps: ["House 2010 (form A) from the northeast", "Rear with the solar array", "Family A/B/C", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "House 1990 → 2010"
    },
    "departmentstore-2010": {
      title: "Autopilot: department store 2010",
      summary: "Glass and surface: the \"Shopping Center\" is reclad with light large-format ceramic panels and gains one floor; clear glass replaces the mirror glass, profiles and canopy fascia turn anthracite, the crowns stay in clear glass.",
      points: [
        "Renovation + extension of BLD_1990_DepartmentStore_01: forms A/B/C with the same footprints, 5–11 upper floors (default 7).",
        "Spandrel bands, pylons and attic in light large-format ceramic panels instead of polished reddish granite.",
        "Clear glass in an anthracite grid instead of blue-green mirror glass with turquoise profiles.",
        "The crowns stay (glass cones A/B clear, gable C ceramic-clad); \"SHOPPING\" light boxes and \"Shopping Center\" stay.",
        "Default height 38.3 m, tallest version 53.5 m.",
        "Checks 403/403 after the Unreal import (12 meshes with Nanite, 14 materials under)."
      ],
      caps: ["Department store 2010 (form A) from the northeast", "Form B with the round corner", "Family A/B/C", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Department store 1990 → 2010"
    },
    "skyscraper02-2010": {
      title: "Autopilot: round-cornered office tower 2010",
      summary: "Glass and surface (light): the round-cornered CITY TOWER is reclad and gains six floors; silver-white panels replace the cobalt spandrel glass, light neutral glass the mirror glass, canopy and columns turn anthracite, entrance and letters stainless steel.",
      points: [
        "Renovation + extension of BLD_1990_Skyscraper_03: forms A/B/C with the same footprints and rounded corners, 12–29 upper floors (default A/B 20, C 23).",
        "Bands all round: silver-white aluminium panels (0.80 m, before 1.00 m cobalt glass) and a taller vision band of light neutral glass.",
        "Lines, mullions, canopy and columns anthracite; entrance frame and letters \"CITY TOWER\" stainless steel.",
        "Height A 76.9 m, C 87.4 m, tallest version 108.4 m.",
        "Checks 397/397 after the Unreal import (12 meshes with Nanite, 9 materials under)."
      ],
      caps: ["Round-cornered office tower 2010 (form A) from the northeast", "Entrance with the anthracite canopy", "Family A/B/C", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Round-cornered office tower 1990 → 2010"
    },
    "skyscraper-2010": {
      title: "Autopilot: office tower 2010",
      summary: "Glass and surface: the CITY TOWER is reclad and gains six floors; anthracite metal panels cover the red granite, light neutral glass replaces the mirror glass, the glass pyramid becomes a flat roof light.",
      points: [
        "Renovation + extension of BLD_1990_Skyscraper_01: forms A/B/C with the same footprints, 12–29 upper floors (default A/B 20, C 23).",
        "Piers, bands, frames and portal covered with anthracite aluminium composite panels; technical band on every 4th floor.",
        "Light neutral glass in slim anthracite frames instead of blue-green mirror glass.",
        "Crown: two glass tiers, flat glass roof light instead of the pyramid, the antenna stays.",
        "Letters \"CITY TOWER\" in stainless steel, sans-serif.",
        "Height A 88.0 m, C 98.5 m, tallest version 119.5 m (incl. antenna).",
        "Checks 454/454 after the Unreal import (15 meshes with Nanite, 10 materials under)."
      ],
      caps: ["Office tower 2010 (form A) from the northeast", "Form C (square, 23 floors)", "Lobby at eye level", "Family A/B/C", "Reference sheet (ChatGPT via Codex, input: the 1990 sheet)"],
      compareCap: "Office tower 1990 → 2010"
    },
    "parkinggarage-1990": {
      title: "Autopilot: parking garage 1990",
      summary: "Coating and green: the car park is repaired, coated light and gains one deck; the decks get a green-grey coating, frames, door and letters turn dark green, the blue \"P\" stays.",
      points: [
        "Renovation + extension of BLD_1970_ParkingGarage_01: same 40 × 32 m block, 4–7 parking decks (default 5).",
        "Spandrel bands, columns and stair tower coated light grey-white instead of beige washed concrete.",
        "Decks coated green-grey, fresh white stall lines.",
        "Frames, door and letters \"CITY PARKING\" dark green; blue \"P\" and red and white barriers stay.",
        "Default height 23.1 m, tallest version 29.1 m.",
        "Checks 186/186 after the Unreal import (4 meshes with Nanite, 14 materials under)."
      ],
      caps: ["Parking garage 1990 from the northeast", "Entrance at eye level", "Roof deck with green-grey coating", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Parking garage 1970 → 1990"
    },
    "tvtower-1990": {
      title: "Autopilot: TV tower 1990",
      summary: "Silver and signal: the TV tower grows by one shaft segment and a longer mast, the shaft is repaired and coated light grey, the tower head gets silver aluminium panels and blue reflective glass.",
      points: [
        "Renovation + extension of BLD_1970_TVTower_01: same pavilion, shaft, head and platforms, 5–7 shaft segments (default 6).",
        "Shaft coated light grey, tower head and fascia in silver aluminium panels, blue reflective glass.",
        "Mast 18 instead of 14 m, red and white with warning light; the upper platform rail is now a ring.",
        "Pavilion with silver frames and blue letters \"TV TOWER\".",
        "Default height 91.3 m, tallest version 97.3 m (below the city hall 1990).",
        "Checks 173/173 after the Unreal import (4 meshes with Nanite, 13 materials under)."
      ],
      caps: ["TV tower 1990 from the northeast", "Pavilion at eye level", "Front", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "TV tower 1970 → 1990"
    },
    "postoffice-1990": {
      title: "Autopilot: post office 1990",
      summary: "Stone and glass: the post office is re-clad in light grey granite slabs and gains one or two office floors; the entrance bay with the clock gets blue-green glass, frames and doors turn dark blue.",
      points: [
        "Renovation + extension of BLD_1970_PostOffice_01: same 36 × 22 m outline, 5–8 office floors (default 6).",
        "Walls in light grey granite slabs instead of dark brown ceramic, white bands stay.",
        "Entrance bay in blue-green glass with the clock, \"POST OFFICE\" in stainless steel.",
        "Frames and doors dark blue, roll-up doors of the mail dock blue.",
        "Default height 30.4 m, tallest version 37.6 m (≤ 38 m, below the city hall).",
        "Checks 197/197 after the Unreal import (4 meshes with Nanite, 15 materials under)."
      ],
      caps: ["Post office 1990 from the northeast", "Front with glass bay and clock", "Rear with mail dock", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Post office 1970 → 1990"
    },
    "school-1990": {
      title: "Autopilot: school 1990",
      summary: "Brick and green: the school keeps its brick, gains a storey and takes green as its school colour – dark green window bands and sun-blind boxes, mint green spandrels and doors – plus a white rendered entrance bay with the clock.",
      points: [
        "Renovation + extension of BLD_1970_School_01: forms A/B/C with the same outlines, 3–4 upper floors (default 3).",
        "Brick cleaned, window bands and sun-blind boxes dark green.",
        "Spandrel bands and doors mint green instead of yellow.",
        "Entrance bay, fascia and canopy edge rendered white; \"PUBLIC SCHOOL\" dark green, the clock stays.",
        "Default height 17.2 m, tallest version 20.8 m.",
        "Checks 451/451 after the Unreal import (12 meshes with Nanite, 12 materials under)."
      ],
      caps: ["School 1990 (form A) from the northeast", "Front with entrance bay and clock", "Forms A, B and C", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "School 1970 → 1990"
    },
    "gasstation-1990": {
      title: "Autopilot: gas station 1990",
      summary: "Shop and illuminated band: the gas station is re-clad in silver-grey metal panels and gains a storey; white fascias with a bold red band, red pumps and silver frames turn the brick garage into a 90s branded shop.",
      points: [
        "Renovation + extension of BLD_1970_GasStation_01: forms A/B with the same outlines, 2–3 upper floors (default 2).",
        "Walls in silver-grey metal composite panels instead of brick, silver frames and columns.",
        "Building and canopy fascias white with a red band, red pumps with white heads.",
        "Letters \"MOTOR SERVICE\" and sign blade \"GAS\" in red.",
        "Default height 15.3 m, tallest version 18.3 m – stays a low district building.",
        "Checks 334/334 after the Unreal import (8 meshes with Nanite, 12 materials under)."
      ],
      caps: ["Gas station 1990 (form A) from the northeast", "Front with illuminated band and garage", "Forms A and B", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Gas station 1970 → 1990"
    },
    "apartmentblock-1990": {
      title: "Autopilot: apartment block 1990",
      summary: "Insulation and pastel: the block is insulated, rendered vanilla yellow and gains one or two storeys; white PVC windows and balcony parapets replace the 70s brown, the raised ground floor and staircase piers turn terracotta.",
      points: [
        "Renovation + extension of BLD_1970_ApartmentBlock_01: same 30 × 12 m outline, 6–12 storeys (default seven).",
        "Facade: external insulation with vanilla-yellow render instead of fibre-cement panels.",
        "New white PVC windows, balconies with white parapets, slightly green glass.",
        "Raised ground floor, staircase piers, canopy and fascia terracotta; blue-green door, \"ELM COURT\" dark blue.",
        "Default height 26.9 m, tallest version 41.9 m.",
        "Checks 206/206 after the Unreal import (4 meshes with Nanite, 12 materials under)."
      ],
      caps: ["Apartment block 1990 from the northeast", "Front with staircase and balconies", "Entrance at eye level", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Apartment block 1970 → 1990"
    },
    "theater-1990": {
      title: "Autopilot: cinema 1990",
      summary: "Neon and turquoise: the twin cinema becomes a multiplex, gains one or two storeys and is recoloured in early-90s colours – turquoise metal panels between white fins, blue mirror glass, a peach auditorium and a violet pylon.",
      points: [
        "Renovation + extension of BLD_1970_Theater_01: same 30 × 36 m outline, 3–7 upper floors (default 4).",
        "Front: white render fins, turquoise painted metal panels, windows in blue mirror glass.",
        "Auditorium rendered in peach, ground floor in polished black granite, portal and marquee turquoise.",
        "Pylon \"CINEMA\" now violet, \"NOW SHOWING\" board white with black letters.",
        "Default height 31.6 m, tallest version 42.1 m (pylon tip) – stays a low unique building.",
        "Checks 203/203 after the Unreal import (4 meshes with Nanite, 12 materials under)."
      ],
      caps: ["Cinema 1990 from the northeast", "Front with pylon and marquee", "Entrance at eye level", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Cinema 1970 → 1990"
    },
    "hotel-1990": {
      title: "Autopilot: grand hotel 1990",
      summary: "Travertine and bronze glass: the same hotel tower gains up to four storeys and is re-clad in late-80s glamour – cream travertine fins, warm bronze mirror glass, champagne frames, a dark green granite plinth and gold letters.",
      points: [
        "Renovation + extension of BLD_1970_Hotel_01: same 34 × 18 m outline, 11–17 guest-room floors (default 16).",
        "Facade: travertine fins and bands, bronze mirror glass in windows and spandrels, champagne frames.",
        "Ground floor: polished dark green granite plinth, travertine walls, champagne portal and marquee with gold letters.",
        "Roof sign \"GRAND HOTEL\" now gold instead of orange, setbacks as in 1970.",
        "Default height 73.7 m, tallest version 77.2 m – within the 1990 band (≤ 79 m) and below the city hall.",
        "Checks 206/206 after the Unreal import (4 meshes with Nanite, 10 materials under)."
      ],
      caps: ["Grand hotel 1990 from the northeast", "Front with marquee and roof sign", "Entrance at eye level", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Grand hotel 1970 → 1990"
    },
    "firestation-1990": {
      title: "Autopilot: fire station 1990",
      summary: "White and red: the station gains one or two storeys and is rendered white; fire-engine red becomes the colour of the architecture – window frames, doors, letters and tower band – with grey granite around the doors and an anthracite fascia.",
      points: [
        "Renovation + extension of BLD_1970_FireStation_01: forms A/B/C with the same outlines, 3–6 upper floors (default 3).",
        "Facade: white render instead of exposed aggregate, fire-engine red window frames, blue-green glass.",
        "Ground floor: plinth, band and door surrounds in polished grey granite; red doors with glass rows, red letters.",
        "Fascia, coping and tower cap in anthracite metal; hose tower white with a red band.",
        "Default height 24.9 m, tallest version 35.4 m (tower cap) – stays a low district building.",
        "Checks 447/447 after the Unreal import (12 meshes with Nanite, 11 materials under)."
      ],
      caps: ["Fire station 1990 from the northeast", "Front with red doors and tower", "Form B with four doors", "Forms A, B and C", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Fire station 1970 → 1990"
    },
    "police-1990": {
      title: "Autopilot: police station 1990",
      summary: "Clinker and blue: the station gains one or two storeys and the 1950s clinker returns – with light surrounds around every window, police-blue frames, a granite plinth and a blue glazed band along the roof edge.",
      points: [
        "Renovation + extension of BLD_1970_Police_01: forms A/B/C with the same outlines, 3–7 upper floors (default 4).",
        "Facade: red-brown clinker, the old concrete frames become light cast-stone surrounds, window frames police blue.",
        "Ground floor in polished anthracite granite, entrance with \"POLICE\" and blue lamps as before.",
        "Blue glazed band as the roof fascia – the station is recognisable from afar.",
        "Default height 27.1 m, tallest version 37.6 m (mast tip) – stays a low district building.",
        "Checks 440/440 after the Unreal import (12 meshes with Nanite, 13 materials under)."
      ],
      caps: ["Police station 1990 from the northeast", "Front with surrounds and blue roof band", "Entrance with blue lamps", "Forms A, B and C", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Police station 1970 → 1990"
    },
    "plaza-1990": {
      title: "Autopilot: plaza 1990",
      summary: "The obelisk square: ISLAND PLAZA gets light granite with anthracite bands, on the old pedestal in the fountain now stands a red granite obelisk with a golden tip, plus historic-style lanterns, petrol-green benches and a glass newspaper pavilion.",
      points: [
        "Refurbishment of BLD_1970_Plaza_01 on the same area: platform, stairs, lawns, trees, fountain and prop places stay.",
        "Paving in light grey-pink granite, bands (rings, axes, frame, corner lines) in anthracite granite.",
        "Monument: polished red granite obelisk with a gilded pyramidion instead of the cube tower, tip at 18.1 m as in 1970.",
        "Round raised planters with a granite rim and magenta flowers; benches, bins and lanterns (3.5 m) as in the city park 1990.",
        "Glass pavilion with a petrol-green steel frame and a copper barrel roof instead of the orange kiosk.",
        "Checks 238/238 after the Unreal import (6 meshes with Nanite, 16 materials under)."
      ],
      caps: ["Plaza 1990 from the northeast", "View from the street with obelisk and pavilion", "Top view: granite bands, lawns, round planters", "On the test lot", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Plaza 1970 → 1990"
    },
    "newspaper-1990": {
      title: "Autopilot: newspaper house 1990",
      summary: "The media globe: the DAILY NEWS house gains four storeys, is re-clad in light grey granite and blue mirror glass, a glowing news ticker runs round the building above the ground floor – and on top now sits a blue glass globe with a red ring.",
      points: [
        "Renovation + extension of BLD_1970_Newspaper_01: same tower with notched corners, three setbacks, 10–16 office floors (default 15).",
        "Facade: bands in light grey polished granite, window ribbons and the central strip in blue mirror glass, silver frames.",
        "Amber LED news ticker in the old band above the ground floor, all round the building.",
        "Crown: red drum, globe of blue mirror glass with silver ribs and a red \"DAILY NEWS\" ring.",
        "Default height 79.6 m (≥ tallest 1990 high-rise), tallest version 83.1 m – below the city hall 1990.",
        "Checks 192/192 after the Unreal import (4 meshes with Nanite, 12 materials under)."
      ],
      caps: ["Newspaper house 1990 from the northeast", "Front with globe, drum and ticker", "Portal with sign band and ticker", "On the test lot", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Newspaper house 1970 → 1990"
    },
    "bank-1990": {
      title: "Autopilot: major bank 1990",
      summary: "The rose granite tower: the ISLAND TRUST BANK gains four storeys, is re-clad in polished rose granite and dark green mirror glass – and instead of the louvred penthouse it is now crowned by a green copper barrel vault with a fan window facing the street.",
      points: [
        "Renovation + extension of BLD_1970_Bank_01: same 32 × 24 m block, banking hall with pillar loggia, two setbacks, 9–16 office floors (default 15).",
        "Facade: polished rose granite, dark green mirror glass, dark green granite spandrels; loggia pillars with green base and capital, brass lettering.",
        "Crown: granite drum + copper barrel vault (axis front to back) with standing seams and fan windows – a curve instead of a box.",
        "Default height 83.8 m (≥ tallest 1990 high-rise), tallest version 87.4 m – stays below the city hall 1990.",
        "Research: postmodern bank towers of the 80s – rose granite, tinted glass, setbacks, barrel vault as a quotation.",
        "Checks 186/186 after the Unreal import (4 meshes with Nanite, 11 materials under)."
      ],
      caps: ["Major bank 1990 from the northeast", "Front with copper vault and fan window", "Loggia with pillars and brass lettering", "On the test lot", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Major bank 1970 → 1990"
    },
    "city-hall-1990": {
      title: "Autopilot: city hall 1990",
      summary: "A crown of glass and gold: the city hall gains two to four storeys, is re-clad in light granite and mirror glass, gets round columns at the portico – and the clock tower now ends in a glass pyramid with a gold spire.",
      points: [
        "Renovation + extension of BLD_1970_CityHall_01: same 40 × 24 m block, granite podium and staircase, 7–13 upper floors (default 8).",
        "Facade: light polished granite, fins as in 1970, blue-green mirror glass, dark blue glass spandrels, petrol-green frames.",
        "Portico with six round columns, gold lettering \"CITY HALL\".",
        "Clock tower: 36 m shaft, four clocks with gold hands, crown frame, glass pyramid with gold ridges, gold spire – tallest building of the era (spire ≈ 107 m).",
        "Research: postmodern city halls of the late 80s/early 90s – clock tower as a landmark, glass pyramids, granite and mirror glass.",
        "Checks 179/179 after the Unreal import (4 meshes with Nanite, 12 materials under)."
      ],
      caps: ["City hall 1990 from the northeast", "Portico with round columns and gold lettering", "Front: clock tower with glass pyramid and spire", "On the test lot", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "City hall 1970 → 1990"
    },
    "park-1990": {
      title: "Autopilot: city park 1990",
      summary: "The granite plaza: exposed-aggregate concrete gives way to light granite with anthracite bands, an obelisk now stands in the middle with water arcs springing from its pedestal into the round basin – plus historic-style lanterns and petrol-green benches.",
      points: [
        "Refurbishment of BLD_1970_Park_01 on the same area (A square, B plaza, C promenade): paths, plaza, trees, lots and prop places as before.",
        "Grey-pink granite slabs, anthracite bands, granite planter boxes with box balls, round raised planters with magenta flowers.",
        "Fountain: round granite basin, stepped pedestal, obelisk up to 3.2 m, eight water arcs.",
        "Furniture: lantern with a pyramid roof (4.1 m), bench with steel frames and armrests (seat height for the pedestrians unchanged), perforated bin.",
        "Research: urban renewal around 1990 – natural stone instead of exposed aggregate, lamps quoting historic forms, the plaza fountain as a monument.",
        "Checks 281/281 after the Unreal import (8 meshes with Nanite, 11 materials under)."
      ],
      caps: ["Form A square with the obelisk fountain", "Form B plaza", "Large and small fountain", "Bench, lantern, bin", "Family A/B/C on the test lots", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "City park 1970 → 1990"
    },
    "hospital-1990": {
      title: "Autopilot: hospital 1990",
      summary: "The mirror clinic: the 70s hospital gains one or two ward floors, the exposed-aggregate bands become light aluminium panels, the window bands blue-green mirror glass – polished granite below, turquoise columns at the entrance, a glass pyramid on the roof.",
      points: [
        "Renovation + extension of BLD_1970_Hospital_01 (A slab, B L-shape, C T-shape): footprints, axes, lots and signs as before.",
        "5–10 ward floors (default 6, was 5) – skyline rule for low buildings +1…+2.",
        "The 70s band geometry stays, re-clad: aluminium composite panels, mirror glass, turquoise mullions; ground floor in red-brown granite.",
        "Canopies on round turquoise columns with a red edge; a glass pyramid on the plant room as a postmodern quote.",
        "Research: hospital facade renovations and glass entrances of the late 80s/90s, mirror-glass postmodernism.",
        "Checks 424/424 after the Unreal import (12 meshes with Nanite, 13 materials under)."
      ],
      caps: ["Form A slab with glass pyramid", "Entrance: turquoise columns, granite, CITY HOSPITAL", "Form B L-shape", "Form C T-shape", "Family A/B/C on the test lots", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Hospital 1970 → 1990"
    },
    "cafe-1990": {
      title: "Autopilot: diner 1990",
      summary: "The diner quotes its own origins: the 70s brick and shingles disappear under brushed stainless steel, glass blocks glow on the upper floor, a checkerboard base runs below – and a pink neon tube wraps the mansard.",
      points: [
        "Renovation of BLD_1970_Cafe_01 (A corner diner, B roadside, C twin-corner with tower): footprint, rounded corners, heights, lots and sign texts as before, no added floor.",
        "The mansard keeps its shape, now turquoise standing-seam metal with a chrome fascia and a pink neon tube along the eave.",
        "Entrance (A/B) between two turquoise half-columns with chrome capitals and globe lights; chrome windows with pink blinds.",
        "Signs in the same places: dark turquoise boxes with neon-pink letters (\"Corner Café\", \"Roadside Café\", \"Central Café\", \"DINER\").",
        "Research: the late-80s retro-diner wave (stainless steel, glass blocks, neon, checkerboard tiles, pastel turquoise/pink).",
        "Checks 269/269 after the Unreal import (6 meshes with Nanite, 18 materials under)."
      ],
      caps: ["Form A corner diner with the DINER box", "Form A front: columns, globe lights, checkerboard base", "Form B roadside (one storey)", "Form C with the entrance tower", "Family A/B/C on the test lots", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Diner 1970 → 1990"
    },
    "residential-1990": {
      title: "Autopilot: house 1990",
      summary: "The family house gets its 1990s renovation: the grey 70s fibre-cement slates disappear under pastel render, the windows have muntins and white surrounds again, the roof red clay tiles – and a small bay window or a conservatory grows at the front.",
      points: [
        "Renovation of BLD_1970_Residential_01 (A compact, B L-shape, C stretched): footprint, roof, dormers, heights and lots as before, no added floor.",
        "A and C: bay window 2.4 m wide, 0.8 m deep with a hipped roof; B: conservatory with a glass lean-to roof in the inner corner – all inside the old 1950 porch area.",
        "Small gabled porch roof on white brackets, front door with an arched glass insert and a top light, lantern, house number; satellite dish on the gable.",
        "Research: late 80s/90s renovations (insulated pastel render, PVC muntin windows, retrofitted bay windows and conservatories).",
        "Checks 244/244 after the Unreal import (3 meshes with Nanite, 13 materials under); new roofs stay below the main gutter."
      ],
      caps: ["Form A with bay window and porch roof", "Form A at eye level", "Form B with the conservatory in the inner corner", "Family A/B/C on the test lots", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "House 1970 → 1990"
    },
    "departmentstore-1990": {
      title: "Autopilot: department store 1990",
      summary: "The autopilot's first 1990 version. The Shopping Center becomes the \"Galleria\": the 70s concrete bands get polished reddish granite, the bronze window bands become blue-green mirror glass in a grid with turquoise profiles, and a glass crown sits above the entrance.",
      points: [
        "Renovation of BLD_1970_DepartmentStore_01 (A rotunda, B corner building, C entrance tower): footprint, floor heights, entrance and lots as before, +0…+1 floor (4–9, default 6).",
        "Crown as a postmodern quote: a half glass cone above the rotunda, a quarter cone above the round corner, a granite gable with a round window on the narrow store.",
        "Granite spandrels 0.90 m after the reference sheet, windows 2.8 m high with a transom; canopy fascia and pylon caps turquoise.",
        "Research: department store remodels of the late 80s/90s (natural stone + large glass areas, atrium under a glass dome, mirrors and granite as accents).",
        "Checks 403/403 after the Unreal import (12 meshes with Nanite, 14 materials under); the plinth is now flush so the delivery lane stays 3 m wide."
      ],
      caps: ["Form A with the glass crown above the rotunda", "Front elevation form A", "Form B corner building with a quarter cone", "Form C with a granite gable", "Reference sheet (ChatGPT via Codex, input: the 1970 sheet)"],
      compareCap: "Department store 1970 → 1990"
    },
    "parkinggarage-1970": {
      title: "Autopilot: parking garage 1970",
      summary: "New building and type building (reserve strips at the ring, districts). Guiding idea \"city garage\" – open parking decks behind strong pale beige exposed-aggregate bands, an internal ramp, a concrete stair tower with a bronze glass strip and a blue \"P\" at the corner, and at ground level a cashier booth, red and white barriers and orange \"CITY PARKING\".",
      points: [
        "One form: 40 × 32 m block, 3.2 m ground floor + 3–6 parking decks of 3.0 m (default 4), roof deck 12.5–21.5 m, about 215–359 spaces.",
        "Stackable despite the ramp: every deck has its ramp in the same strip, the last wedge lies in the next module.",
        "Roof deck with parapet, stall lines, four light masts and a railing round the ramp opening.",
        "Research: car parks of the late 60s/70s (split-level ramps, exposed-aggregate spandrel panels, fair-faced concrete) – typology only, no replica.",
        "Checks 164/164 after the Unreal import (4 meshes with Nanite, 14 materials under); in the first run the ramp curb crossed the module boundary – fixed.",
        "For review: ramp visible through the slots, stair tower inside the block corner, lettering above the lanes."
      ],
      caps: ["Parking garage 1970 from the northeast", "Front elevation with the stair tower", "Entrance with cashier booth and barriers", "Gameplay view", "Reference sheet (ChatGPT via Codex)"]
    },
    "tvtower-1970": {
      title: "Autopilot: TV tower 1970",
      summary: "New building and unique building for the centre. Guiding idea \"city telecom tower\" – a slender exposed-concrete shaft on a low entrance pavilion with a glass front and orange \"TV TOWER\", on top a white tower head with two glazed storeys (observation deck and restaurant), antenna platforms with microwave dishes and a red and white mast with an aviation warning light.",
      points: [
        "One form (unique building): pavilion 24 × 24 m, shaft Ø 7.2 m from 4–6 segments of 6 m (default 5), tower head Ø 22 m.",
        "Antenna tip 75.3 / 81.3 / 87.3 m – deliberately below the City Hall 1970 (from 89.6 m), concrete top below its crown.",
        "Modules: pavilion + shaft foot, shaft segment (stackable, staircase slit window), tower head with mast; letters as their own mesh.",
        "Research: 1960s/70s telecom towers (standard towers, tower head with observation deck and revolving restaurant, red and white antenna carriers) – typology only, no replica.",
        "Checks 152/152 after the Unreal import (4 meshes with Nanite, 13 materials under), first production run green.",
        "For review: height (exception to the height rule?), only two tower-head storeys, lettering on the pavilion."
      ],
      caps: ["TV tower 1970 from the northeast", "Front elevation", "Entrance pavilion at eye level", "Gameplay view", "Reference sheet (ChatGPT via Codex)"]
    },
    "postoffice-1970": {
      title: "Autopilot: post office 1970",
      summary: "The post office \"POST OFFICE\" grows by one office floor and becomes low-maintenance: dark brown glazed split tiles instead of limestone, white sill bands and a flat fascia, bronze windows, a white enamel entrance bay with the old clock and orange roll-up doors at the mail dock.",
      points: [
        "Renovation + extension of BLD_1950_PostOffice_01 (unique, form A): 4–6 office floors (default 5, 1950: 3–5), 23.2–30.4 m.",
        "Footprint, axes, openings, granite base, entrance bay with clock, canopy, steps, mail dock, lot and paths as in 1950.",
        "Ceramic instead of limestone, light entrance bay, height up to 30.4 m, orange doors – for review.",
        "Research: 1970s post and government buildings with ceramic cladding, anodised aluminium and articulated facades – typology only, no replica.",
        "Checks 196/196 after the Unreal import (4 meshes with Nanite, 15 materials under), first production run green."
      ],
      caps: ["Post office 1970 from the northeast", "Front view with the entrance bay and clock", "Rear with the mail dock and orange roll-up doors", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "Post office 1950 → 1970"
    },
    "school-1970": {
      title: "Autopilot: school 1970",
      summary: "The brick school \"PUBLIC SCHOOL\" gets one more classroom floor and the 1970s colour scheme: silver aluminium window bands, yellow spandrel panels under every band, sun-blind boxes above, a pale concrete entrance bay with the old clock and yellow doors.",
      points: [
        "Renovation + extension of BLD_1950_School_01 (forms A, B, C): 2–3 upper floors (default 2, 1950: 1–2), 13.6–17.2 m.",
        "Brick, footprint, classroom grid, window band sizes, entrance bay with clock, canopy, steps, back door, lot and paths as in 1950.",
        "Yellow panels and doors, at most 4 storeys, sun-blind boxes – for review.",
        "Research: 1970s schools with coloured spandrel bands, anodised aluminium and external sun shading – typology only, no replica.",
        "Checks 451/451 after the Unreal import (12 meshes with Nanite, 12 materials under), first production run green."
      ],
      caps: ["School 1970 (form A) from the northeast", "Front view with the entrance bay and clock", "L-shaped form C with the wing", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "School 1950 → 1970"
    },
    "gasstation-1970": {
      title: "Autopilot: gas station 1970",
      summary: "The white enamel gas station becomes a 1970s self-service station: brown brick, a manager's flat on top, a tall white illuminated fascia with an orange band on the canopy and boxy orange pumps without glass globes.",
      points: [
        "Renovation + extension of BLD_1950_GasStation_01 (forms A and B): 1–2 upper floors (default 1, 1950: 0–1), 12–15 m to the sign blade.",
        "Footprint, office, bay doors, canopy slab with 3.15 m clearance, pump island, sign blade \"GAS\", lettering \"MOTOR SERVICE\", lot and paths as in 1950.",
        "Canopy fascia up to 3.85 m (sheet: level with the building fascia), upper windows as in 1950, brick parapet – for review.",
        "Research: self-service brought back large canopies with lit fascias in the 1970s, brick and stone replaced enamel – typology only, no replica.",
        "Checks 334/334 after the Unreal import (8 meshes with Nanite, 12 materials under), first production run green."
      ],
      caps: ["Gas station 1970 (form A) from the northeast", "Front view with the lit canopy fascia and the manager's flat", "Form B at eye level", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "Gas station 1950 → 1970"
    },
    "apartmentblock-1970": {
      title: "Autopilot: apartment block 1970",
      summary: "The brick block \"ELM COURT\" gets a 1970s coat: pale fibre-cement panels over the brick, wide brown windows, twice as many balconies behind closed brown parapet panels and an orange front door; one or two floors on top.",
      points: [
        "Renovation + extension of BLD_1950_ApartmentBlock_01: 4–9 upper floors (default 5, 1950: 3–7), 21–36 m to the antenna tip – rule \"low building: +1..+2\".",
        "Footprint, axes, staircase strip, entrance with steps and canopy, back door, roof housing, antenna, chimneys, lot and paths as in 1950; balconies as deep as in 1950, only on two bays per side.",
        "Balconies as continuous bands (sheet: one bay), orange front door, no lantern – for review.",
        "Research: 1960s/70s apartment blocks with fibre-cement facades, concrete balconies and parapet panels – typology only, no replica.",
        "Checks 205/205 after the Unreal import (4 meshes with Nanite, 12 materials under); one run discarded (parapet cap 1 cm too far forward)."
      ],
      caps: ["Apartment block 1970 from the northeast", "Front view with balcony bands and staircase", "Entrance with the orange door at eye level", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "Apartment block 1950 → 1970"
    },
    "theater-1970": {
      title: "Autopilot: cinema 1970",
      summary: "The theater becomes the twin cinema \"CINEMA\": the same building with entrance, marquee and ziggurat pylon, one or two floors taller for the second auditorium; at the front dark aluminium panels between white concrete fins with narrow tall windows, the auditorium rendered, the pylon smooth and orange, the marquee a white backlit board.",
      points: [
        "Renovation + extension of BLD_1950_Theater_01: 2–5 upper floors (default 3, 1950: 1–3), 25–35 m to the top of the pylon – rule \"low building: +1..+2\", below City Hall 1970.",
        "Footprint, axes, glass strip, entrance, poster cases, marquee, stage door, pylon (position, size, steps), lot and paths as in 1950; the fascia projects no further than the old cornice.",
        "Pylon reads \"CINEMA\" instead of \"THEATER\", without bulbs; wall lanterns removed – for review.",
        "Research: 1970s cinemas were split into twin cinemas and modernised through the front and the marquee (aluminium, backlit changeable-letter boards) – typology only, no replica.",
        "Checks 201/201 after the Unreal import (4 meshes with Nanite, 12 materials under), including the upgrade rules against the 1950 version."
      ],
      caps: ["Cinema 1970 from the northeast", "Front view with fins, aluminium panels, marquee and pylon", "Entrance and backlit board at eye level", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "Cinema 1950 → 1970"
    },
    "hotel-1970": {
      title: "Autopilot: Grand Hotel 1970",
      summary: "The Grand Hotel grows and turns pale: the same tower with notched corners, marquee and roof sign, up to four floors taller; white concrete fins on every axis, room-wide aluminium windows over dark brown panels in between, and the letters now glow orange.",
      points: [
        "Renovation + extension of BLD_1950_Hotel_01: 9–13 guest floors (default 12, 1950: 7–11), 49–63 m to the top of the sign – inside the 1970 high-rise band (≤ 65 m) and below City Hall 1970.",
        "Footprint, axes, glass strip, entrance, marquee, restaurant windows, loading doors, setbacks, roof sign, lot and paths as in 1950; the fascias project no further than the old cornices.",
        "Wall lanterns removed, letters orange (sheet: white) – for review.",
        "Research: 1960s/70s hotel towers with pale concrete panels, room axes as a vertical grid, roof signs – typology only, no replica.",
        "Checks 204/204 after the Unreal import (4 meshes with Nanite, 10 materials under), including the upgrade rules against the 1950 version."
      ],
      caps: ["Grand Hotel 1970 from the northeast", "Front view with the fin grid, marquee and roof sign", "Entrance and marquee at eye level", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "Grand Hotel 1950 → 1970"
    },
    "firestation-1970": {
      title: "Autopilot: fire station 1970",
      summary: "The station turns grey – and the red gets louder: the same three forms with doors, office door and hose tower, one or two floors taller, in pale exposed-aggregate concrete with wide aluminium windows; only the doors with their two glass rows, the wide band on the tower and the letters carry colour.",
      points: [
        "Renovation + extension of BLD_1950_FireStation_01: 2–4 upper floors (default 2, 1950: 1–2), 21–28 m to the tower cap – rule \"low building: +1..+2\".",
        "Forms A/B/C, apparatus doors, office door, service door, tower (position, height, louvres), lots and paths as in 1950; the fascia projects no further than the old cornice.",
        "Letters red instead of white (white was unreadable on the pale concrete) – for review.",
        "Research: post-war and 1970s stations in fair-faced and exposed-aggregate concrete, red as contrast, the hose tower as a landmark – typology only, no replica.",
        "Checks 447/447 after the Unreal import (12 meshes with Nanite, 11 materials under), including the upgrade rules against the 1950 version."
      ],
      caps: ["Fire station 1970 (form A) from the northeast", "Front view with doors, door-wide windows and tower", "Doors at eye level", "Gameplay view of forms A, B, C", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "Fire station 1950 → 1970"
    },
    "police-1970": {
      title: "Autopilot: police station 1970",
      summary: "The district station gets a concrete coat: the same three forms with entrance, blue lamps, garages and radio mast, one or two floors taller, in pale precast concrete instead of brick – every wide aluminium window sits in a projecting concrete frame, above a dark plinth with white letters \"POLICE\".",
      points: [
        "Renovation + extension of BLD_1950_Police_01: 2–5 upper floors (default 3, 1950: 1–3), 20–31 m to the mast tip – rule \"low building: +1..+2\".",
        "Forms A/B/C, entrance, steps, lamps, canopy, roller shutters, cell windows, stair housing, mast, lots and paths as in 1950; frames and fascia project no further than the 1950 band and cornice.",
        "The sheet shows four-light windows; three-light windows were built (for review).",
        "Research: 1970s police buildings from standardised precast systems and brutalist stations – typology only, no replica.",
        "Checks 440/440 after the Unreal import (12 meshes with Nanite, 12 materials under), including the upgrade rules against the 1950 version."
      ],
      caps: ["Police station 1970 (form A) from the northeast", "Front view with concrete frames, plinth and sign", "Entrance with blue lamps at eye level", "Gameplay view of forms A, B, C", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "Police station 1950 → 1970"
    },
    "plaza-1970": {
      title: "Autopilot: plaza 1970",
      summary: "The \"Island Plaza\" gets the 1970s look: the same plaza with the same stairs, trees and paths, but in exposed-aggregate concrete with dark bands; on the old pedestal a tower of ten twisted stainless steel cubes replaces the column with the gold flame, plus hexagonal raised planters, globe lamps, concrete benches and an orange kiosk.",
      points: [
        "Refurbishment of BLD_1950_Plaza_01 on the same area (76 × 76 m) – the plaza does not grow: cube tower 18.55 m, as tall as the old flame.",
        "Layout, stairs, basin, lawns, planters, trees and every prop position as in 1950 (checks against the 1950 spec).",
        "First draft: cubes turned by 9° looked like a smooth column → 30° per cube.",
        "Research: 1970s city plazas with stainless steel sculptures, exposed-aggregate fountains and concrete aesthetics – typology only, no replica.",
        "Checks 238/238 after the Unreal import (6 meshes with Nanite under)."
      ],
      caps: ["Plaza 1970 from the northeast", "Front view with cube tower and kiosk", "Top view with dark bands and raised planters", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "Plaza 1950 → 1970"
    },
    "newspaper-1970": {
      title: "Autopilot: newspaper building 1970",
      summary: "\"Daily News\" turns horizontal: the same tower with notched corners and three setbacks, up to four floors taller, with pale exposed-aggregate spandrels and aluminium window ribbons instead of Art Deco piers; the press hall stays visible, and the globe now sits in silver with an orange ring on an orange concrete drum.",
      points: [
        "Renovation + extension of BLD_1950_Newspaper_01: 8–12 office floors (default 11, 1950: 6–9), 65.6 m to the top of the globe – as tall as the tallest 1970s high-rise; the top step only +3 so the globe stays below the City Hall 1970 (71.4 m).",
        "Footprint, portal, press-hall windows, glass strip, setbacks, loading docks, globe position, lots and paths as in 1950; bands and fascias project no further than the old facade.",
        "The drum fills the height of the old pyramid – taller than on the sheet (for review).",
        "Research: 1970s newspaper buildings with a visible printing press, late-modern ribbon facades – typology only, no replica.",
        "Checks 192/192 after the Unreal import (4 meshes with Nanite, 12 materials under), including the upgrade rules against the 1950 version."
      ],
      caps: ["Newspaper building 1970 from the northeast", "Front view with glass strip, setbacks and globe", "Portal with dark sign band at eye level", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "Newspaper building 1950 → 1970"
    },
    "bank-1970": {
      title: "Autopilot: grand bank 1970",
      summary: "The \"Island Trust Bank\" becomes the \"bronze tower\": the same stepped block with banking hall and loggia, but up to four office floors taller, clad in dark polished granite with slim piers and floor-to-ceiling bronze window strips; four square pillars in the loggia, and a flat penthouse with bronze louvres instead of the gold pyramid and mast.",
      points: [
        "Renovation + extension of BLD_1950_Bank_01: 7–12 office floors (default 11, 1950: 5–8), 65.3 m – as tall as the tallest 1970s high-rise and below the City Hall 1970 (≥ 71.4 m).",
        "Footprint 32 × 24 m, banking hall, loggia, steps, doors, setbacks, garage, lots and paths as in 1950; piers and fascias project no further than the old facade.",
        "10 × 6 × 4.5 m plant penthouse on the old crown base; the sheet showed 9 floors – height raised to meet the check rule (for review).",
        "Research: 1970s bank buildings with granite piers and bronze-tinted glass – typology only, no replica.",
        "Checks 186/186 after the Unreal import (4 meshes with Nanite, 11 materials under), including the upgrade rules against the 1950 version."
      ],
      caps: ["Grand bank 1970 from the northeast", "Front view with setbacks and louvred penthouse", "Loggia with square granite pillars at eye level", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "Grand bank 1950 → 1970"
    },
    "cityhall-1970": {
      title: "Autopilot: City Hall 1970",
      summary: "The city hall becomes a \"civic crown in concrete\": the same block with its granite podium and staircase, but two office floors taller and clad in pale exposed-aggregate precast with slim fins; six square pillars at the portico, a taller clock tower with modern dials, and an open concrete crown with a red-and-white antenna mast instead of the lantern and copper roof.",
      points: [
        "Renovation + extension of BLD_1950_CityHall_01: 5–9 upper floors (default 6, 1950: 3–5), crown roof ~75 m, antenna up to ~94 m – the tallest building of the 1970s (high-rises up to 65 m).",
        "Footprint 40 × 24 m, granite podium, staircase, doors, service entrance, garage, lots and paths as in 1950; fins and fascia project no further than the old facade.",
        "Tower: 27 m shaft instead of 22 m, clocks with white dials and bar markers, open 9 × 9 m crown, 18 m mast with warning lights.",
        "Research: precast-concrete city halls of the late 60s/70s (ribbed grid, tinted glass, mass instead of ornament) – typology only, no replica.",
        "Checks 179/179 after the Unreal import (4 meshes with Nanite, 12 materials under), including the upgrade rules against the 1950 version."
      ],
      caps: ["City Hall 1970 from the northeast", "Front view with pillar portico and concrete crown", "At eye level from the street", "Gameplay view", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "City Hall 1950 → 1970"
    },
    "park-1970": {
      title: "Autopilot: city park 1970",
      summary: "The small city park becomes the \"exposed-aggregate plaza\": the same paths, hedges and trees, but washed-pebble concrete slabs with dark bands, planter boxes instead of stone pillars, hexagonal raised planters, a stepped concrete fountain with jets, globe lamps and concrete benches with wooden seats.",
      points: [
        "Refurbishment of BLD_1950_Park_01 on the same area (A square 40 × 40 m, B plaza 24 × 24 m, C promenade 40 × 16 m), no added floors.",
        "All paths, lots, entrances, trees and prop places as in 1950; same bench seat height so pedestrians can still sit down.",
        "New props: octagonal fountain with stepped columns (D 10 m / 5 m), 4.1 m globe lamp, concrete bench, round concrete bin.",
        "Research: exposed-aggregate concrete as the paving of the 60s/70s, concrete planters, globe lamps, play sculptures in washed concrete (not built, for review).",
        "Checks 276/276 after the Unreal import (8 meshes with Nanite, 11 materials under), including the upgrade rules against the 1950 version."
      ],
      caps: ["Family: square, plaza, promenade along the street", "Form A square with the concrete fountain", "Form B plaza", "Props: fountain, bench, globe lamp, bin", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "City park 1950 → 1970"
    },
    "hospital-1970": {
      title: "Autopilot: hospital 1970",
      summary: "The City Hospital becomes the \"banded clinic\": one or two more ward floors, the upper floors wrapped in horizontal bands of exposed-aggregate concrete and continuous bronze window bands, a brick ground floor, flat canopies with an orange edge and lit box letters.",
      points: [
        "Renovation + extension of BLD_1950_Hospital_01 (A slab, B L-shape, C T-shape): 4–8 ward floors instead of 3–6, default 5 (26 m with the plant room).",
        "Footprint, floor heights, entrances, emergency, loading, lots and sign texts as in 1950; the new facade sits only 0.15 m in front of the old wall.",
        "Solid corners, a louvre-clad plant room, rear balconies with solid parapets and a bronze handrail.",
        "Research: 1970s hospital remodels (punched windows → window bands), exposed-aggregate precast as the standard of public buildings.",
        "Checks 418/418 after the Unreal import (12 meshes with Nanite, 13 materials under), including the upgrade rules against the 1950 version."
      ],
      caps: ["Main entrance at eye level", "Form A slab (5 ward floors)", "Form B L-shape", "Form C rear with balconies", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "Hospital 1950 → 1970"
    },
    "cafe-1970": {
      title: "Autopilot: diner/café 1970",
      summary: "First 1970 version by the autopilot: the streamline café becomes the \"wrapped diner\". Same volumes with rounded corners, but dark red face brick, a continuous shingled mansard above the ground floor, bronze windows and lit box signs instead of chrome, tiles, awnings and neon.",
      points: [
        "Renovation of BLD_1950_Cafe_01 (A corner diner, B roadside, C twin corner), no added floor – footprint, heights, entrances, lots and sign texts as in 1950.",
        "Mansard all around (eave 3.7 m, 0.6 m deep, on C flush with the tower at 0.4 m); on B it forms the parapet.",
        "Box signs \"Corner Café\" / \"Roadside Café\" / \"Central Café\" in front of the mansard, DINER as a vertical box (A, C) or on posts (B); colonial coach lanterns at the entrance.",
        "Inside terracotta tiles, a wooden ceiling, orange booths. Research: diner remodels of the 60s/70s (\"environmental diner\").",
        "Checks 257/257 after the Unreal import (6 meshes with Nanite, 16 materials under), including the upgrade rules against the 1950 version."
      ],
      caps: ["Corner diner 1970 at eye level", "Form A corner diner", "Form B roadside (mansard as parapet)", "Form C twin corner with tower", "Reference sheet (ChatGPT via Codex, input: the 1950 sheet)"],
      compareCap: "Corner diner 1950 → 1970"
    },
    "postoffice-1950": {
      title: "Autopilot: post office 1950",
      summary: "Twelfth building of the autopilot and the last 1950 new building, a unique building for the centre. Guiding idea \"the office with the clock\" – a pale limestone block with a public hall and four office floors, in the middle a red-brown granite entrance bay with a large clock above the roof and \"POST OFFICE\" above the canopy.",
      points: [
        "One form (unique building): 36 × 22 m, public hall 5.2 m and 3–5 office floors, default 4 → about 23 m to the top of the bay.",
        "One tall hall window per 4 m axis, single windows above; dark grey granite base, broad granite steps, double door with side lights.",
        "Rear: mail dock with two roll-up doors under a steel canopy, stairs at both ends, access over the east side.",
        "Derived from the school (entrance bay with clock, window axes); revision r02 (the forecourt zone lay under the canopy columns). Checks 155/155 after the Unreal import (4 meshes with Nanite, 15 materials under).",
        "For review: extra slot for the dark base; cornice and sill bands still without a stone pattern."
      ],
      caps: ["Post office 1950 at eye level", "Front elevation", "Rear with the mail dock", "Oblique view", "Reference sheet (ChatGPT via Codex)"]
    },
    "school-1950": {
      title: "Autopilot: school 1950",
      summary: "Eleventh building of the autopilot, a type building for the districts. Guiding idea \"the school with the clock\" – a long brick bar with a window band for every classroom, in the middle a pale limestone entrance bay with a round clock above the roof and \"PUBLIC SCHOOL\" above the canopy.",
      points: [
        "Three forms: A bar 40 × 14 m, B long bar 56 × 14 m, C L-shape with a rear wing around the schoolyard; 1–2 upper floors, about 10 m up to the clock.",
        "Every classroom bay has a band of three green steel windows with centre mullion and transom, continuous limestone sill bands, concrete base.",
        "Entrance: double door with two side lights, three broad steps, flat concrete canopy on two green columns.",
        "Derived from the fire station (form variants, L-shape); revision r02 (clock hub, lawn at the steps, lot B 68 m for the drive). Checks 396/396 after the Unreal import (12 meshes with Nanite, 12 materials under).",
        "For review: no separate gym; entrance bay narrower and lower than in the prompt (as on the sheet)."
      ],
      caps: ["School 1950 at eye level", "Front elevation of form A", "Form C with wing (L-shape)", "From the game camera", "Reference sheet (ChatGPT via Codex)"]
    },
    "gasstation-1950": {
      title: "Autopilot: gas station 1950",
      summary: "Tenth building of the autopilot, a type building for the districts. Guiding idea \"the white box with the red stripe\" – a one-storey box of white porcelain-enamel panels with a glazed office, service bay doors and a flat canopy over the pump island; above it the red GAS sign blade.",
      points: [
        "Two forms: A with two bays (20 × 10 m), B with three bays (26 × 10 m); hall 4.4 m, sign blade up to 9.3 m, optional upper floor (flat).",
        "Office on the west side with aluminium shop windows and a glass door; white service doors with glass panels, red \"MOTOR SERVICE\" on the fascia above.",
        "Forecourt: concrete canopy 6 m deep on two columns, round pump island with two red-and-white pumps with glass globes.",
        "Derived from the fire station (form variants, doors, office); revision r02 because the path start of the office door sat on the step edge in r01. Checks 285/285 after the Unreal import (8 meshes with Nanite, 12 materials under).",
        "For review: canopy and pumps belong to the building; enamel still without a panel joint pattern (pattern type missing in the shared surface script)."
      ],
      caps: ["Gas station 1950 at eye level", "Front elevation of form A (two bays)", "Form B with three bays", "From the game camera", "Reference sheet (ChatGPT via Codex)"]
    },
    "apartmentblock-1950": {
      title: "Autopilot: apartment block 1950",
      summary: "Ninth building of the autopilot and the first type building for the residential districts. Guiding idea \"the block with the white balconies\" – a red-brown brick block with a glazed staircase in the middle, rows of white concrete balconies left and right and a stone canopy with the house name ELM COURT over the front door.",
      points: [
        "One form 30 × 12 m, 3–7 upper floors (4–8 storeys, default 5): main roof 16 m, antenna 21 m – residential scale far below the high-rises.",
        "Front: glazed staircase between two limestone piers, three bays per side, the middle one with a balcony door and a balcony with a black steel railing.",
        "Raised ground floor in cream stone: wooden double door with side lights, three steps, a thick stone canopy, one lantern; windows and a yard door at the rear.",
        "Roof: low parapet, stair housing with a clerestory and a TV antenna, two chimneys with pots.",
        "Derived from the Grand Hotel (same outline generator, new facade with balconies, new ground floor and roof); revision r02 because the balcony door threshold sat below the slab in r01. Checks 157/157 after the Unreal import (4 meshes with Nanite, 12 materials, 9 colour palettes under).",
        "For review: balconies only in the middle bay of each side (as the sheet); ground floor in stone instead of brick; yard door brown instead of green."
      ],
      caps: ["Apartment block 1950 from the north-east", "Front elevation with staircase and balconies", "Entrance under the ELM COURT canopy", "From the game camera", "Reference sheet (ChatGPT via Codex)"]
    },
    "theater-1950": {
      title: "Autopilot: cinema 1950",
      summary: "Eighth building of the autopilot, a unique building for the centre. Guiding idea \"the cinema with the lighthouse\" – a cream limestone show front, the windowless brick auditorium behind it, a red ziggurat pylon with THEATER in stacked letters above and a wide marquee reading NOW SHOWING in front.",
      points: [
        "One form 30 × 36 m with notched corners, 1–3 upper floors (default 2): main roof 13 m, pylon tip 24.6 m – a low building that stands out through its sign.",
        "Front: limestone with piers and foyer windows; sides and rear: brick with shallow piers and no windows (auditorium).",
        "Ground floor in dark granite: three glass doors under the marquee (16 × 3.5 m, white letter board, bulbs), four poster cases, two lanterns, foyer with a counter.",
        "Pylon 10 m above the roof with four steps, bulbs along the front edge and cream letters on both sides; stage door and exit door at the rear.",
        "Derived from the Grand Hotel (same outline generator); revision r02 because the pylon overhung the cornice in r01. Checks 159/159 after the Unreal import (4 meshes with Nanite, 12 materials, 9 colour palettes under).",
        "For review: pylon on the roof instead of in front of the facade; lot 40 × 48 m; notched instead of rounded corners; only one exit door at the rear."
      ],
      caps: ["Cinema 1950 from the north-east", "Front elevation with pylon", "Entrance under the marquee", "From the game camera", "Reference sheet (ChatGPT via Codex)"]
    },
    "hotel-1950": {
      title: "Autopilot: Grand Hotel 1950",
      summary: "Seventh building of the autopilot, a unique building for the centre. Guiding idea \"the hotel with the roof sign\" – a red-brown brick tower with pale limestone piers, a bronze marquee full of light bulbs over the entrance and the words GRAND HOTEL in big red letters on a steel frame above the top terrace.",
      points: [
        "One form 34 × 18 m with notched corners, 7–11 guest-room floors (default 9): main roof 37.5 m, top of the roof sign 49 m – below the City Hall.",
        "Facade: brick with limestone piers on every axis, one bronze window per room, a central glass strip for the stairs, two setbacks at the top.",
        "Ground floor all in dark granite: entrance with three glass doors under the marquee (12 × 3 m, bulbs, lettering), two lanterns, four restaurant windows with tables behind.",
        "Roof sign of 3.2 m red letters on a braced lattice frame with a water tank behind it; at the rear two loading doors (kitchen, laundry) and a service door.",
        "Derived from the newspaper building (same outline generator, new facade, ground floor and roof); checks 162/162 after the Unreal import (4 meshes with Nanite, 10 materials, 9 colour palettes under).",
        "For review: marquee lettering red instead of gold as on the sheet; two setbacks instead of one; lot 44 × 28 m."
      ],
      caps: ["Grand Hotel 1950 from the north-east", "Front elevation with roof sign", "Entrance under the marquee with light bulbs", "From the game camera", "Reference sheet (ChatGPT via Codex)"]
    },
    "fire-1950": {
      title: "Autopilot: fire station 1950",
      summary: "Sixth building of the autopilot, again for the player districts. Guiding idea \"the station with the tower\" – a low, wide brick building with red doors, pale lettering and a slender hose tower on the corner looking out over the neighbourhood.",
      points: [
        "Three forms: A 24 × 18 m with three doors, B 32 × 18 m with four doors, C L-shape with a rear wing and two doors to the drill yard; 1–2 upper floors for the crew (default 1).",
        "Apparatus hall 5.4 m high: red sectional doors 3.6 × 4.0 m with a glass strip in limestone surrounds, pale relief letters FIRE STATION above, the office door with a canopy on the right.",
        "Hose tower 4 × 4 m on the west corner, 17.85 m high, three tall louvres per face under a projecting concrete cap – the landmark of the station.",
        "A 10 m deep concrete apron stays free in front of the doors up to the street (own check per door).",
        "Derived from the police station; one correction revision after the first check (office door sat 12 cm too deep, drill yard zone). Checks 407/407 after the Unreal import (12 meshes with Nanite, 11 materials, 6 colour palettes under).",
        "For review: doors 4.0 m instead of 4.2 m high so the lettering fits below the band; tower flush with the front (sheet: slightly proud)."
      ],
      caps: ["Fire station 1950: forms A, B, C from the game camera", "Form C from the north-east with hose tower", "Three red doors, lettering and office door", "Rear with service door", "Reference sheet (ChatGPT via Codex)"]
    },
    "police-1950": {
      title: "Autopilot: police station 1950",
      summary: "Fifth building of the autopilot and the first one for the player districts (not unique). Guiding idea \"the station on the corner\" – a friendly but strict brick building with a pale limestone base, blue lamps at the entrance, roller shutters for the patrol cars and a radio mast on the roof.",
      points: [
        "Three forms like the hospital: A slab 28 × 14 m with 7 bays, B L-shape with a garage wing towards the east drive, C T-shape 32 × 14 m with a central rear wing; 1–3 upper floors (default 2).",
        "Limestone ground floor, red brick above, limestone band and projecting cornice; green two-light steel windows, one per bay.",
        "Central entrance: limestone surround up to the band with relief letters POLICE, thin canopy with tie rods, three steps between stone cheeks carrying two lamps with blue glass globes.",
        "Rear: two 3.2 m roller shutters for patrol cars, a service door, small high barred cell windows; on the roof a stair housing and a three-legged lattice radio mast (tip at 20 m).",
        "Derived from the hospital generator (outline → walls/windows per bay); checks 393/393 after the Unreal import (12 meshes with Nanite, 12 materials, 6 colour palettes under).",
        "For review: garage doors on the right seen from the front (east drive), on the sheet they are in the west; sides with 4 windows per floor instead of one."
      ],
      caps: ["Police station 1950: forms A, B, C from the game camera", "Form A from the north-east with radio mast and stair housing", "Entrance with POLICE surround and blue lamps", "Rear: roller shutters, cell windows, service door", "Reference sheet (ChatGPT via Codex)"]
    },
    "plaza-1950": {
      title: "Autopilot: civic plaza 1950 \"Island Plaza\"",
      summary: "Fourth building of the autopilot: the civic plaza as a unique piece filling a whole inner block of the centre. Guiding idea \"stage of the city\" – a raised granite square with ring and axis bands, lawn parterres, a row of trees in planters and in the middle a fountain with a memorial column and a golden flame.",
      points: [
        "76 × 76 m = exactly one inner block, 0.45 m above the sidewalk; stairs in the middle of every side (16 m towards the street) and four diagonal corner stairs, seat walls in between.",
        "Pale granite with red bands: rings around the fountain, double lines on the axes, a frame band and diagonals to the corners – a clear pattern from the game camera.",
        "Fountain 20 m across with 24 water jets, island with pedestal (inscription ISLAND PLAZA), fluted column, bronze capital and golden flame – 18.6 m, the only tall element.",
        "Four lawns with round flower beds, 16 hornbeams in granite planters (the same Megascans trees as in the city park), 24 benches, 16 lamps, 8 bins, a green newspaper kiosk.",
        "Built like the city park: one ground mesh + props as instances; checks 199/199 after the Unreal import (6 meshes with Nanite, 16 materials, 9 colour palettes under).",
        "For review: only one shape, no ramp, invented name ISLAND PLAZA, kiosk at the front by the street instead of the rear as on the sheet. Runtime: candidate for the block next to the centre (so far always a park)."
      ],
      caps: ["Civic plaza 1950, Blender preview from the north-east", "Top view: rings, axes, lawn parterres, tree planters", "View from the street with column, kiosk and trees", "From the game camera", "Reference sheet (ChatGPT via Codex)"]
    },
    "newspaper-1950": {
      title: "Autopilot: newspaper building 1950 \"Daily News\"",
      summary: "Third building of the autopilot: the newspaper building as a unique building for the centre. Guiding idea \"lighthouse of the news\" – a slender Art Deco limestone tower with vertical window strips, three setbacks, a green copper pyramid and a golden globe.",
      points: [
        "Tower 26 × 18 m with notched corners on a dark granite plinth; projecting piers and dark spandrels form continuous vertical strips, the middle front bay is a dark glass strip.",
        "Ground floor: bronze portal with three doors, sign band DAILY NEWS and two wall lanterns; next to it large press-hall windows with rotary presses behind. Two loading docks under a steel canopy at the rear.",
        "Crown: three setbacks, copper pyramid, golden globe 5.2 m across with ribs and a tilted lettered ring – 51.6 m by default, always below the city hall.",
        "6–9 regular floors of 3.5 m, 4 colour variants, lot 36 × 28 m with a truck drive to the docks.",
        "Checks 154/154 after the Unreal import: 4 meshes with Nanite, 12 materials, 9 colour palettes under Validation found two faults in r01 (canopy rods too high, crown height without the ribs) → revision r02.",
        "For review: only one shape variant, 51.6 m instead of 99.5 m as in the style template, sign DAILY NEWS (generic name), docks east / service door west as on the sheet."
      ],
      caps: ["Newspaper building 1950, Blender preview from the north-east", "Bronze portal with sign band at eye level", "From the game camera on the 36 × 28 m lot", "Reference sheet (ChatGPT via Codex, user's style template)"]
    },
    "bank-1950": {
      title: "Autopilot: grand bank 1950 \"Island Trust Bank\"",
      summary: "Second building of the autopilot: a grand bank as a unique building for the centre. Guiding idea \"vault with a crown\" – a banking hall with a temple front at the bottom, a limestone shaft above, stepped back twice at the top and crowned by a gilded stepped pyramid.",
      points: [
        "Limestone shaft 32 × 24 m on polished pinkish-grey granite, punched windows with bronze frames in every bay.",
        "Banking hall 9 m tall: a 3 m deep loggia in the front with four giant columns between corner piers, steps, three bronze doors with grilles, bronze letters ISLAND TRUST BANK (fictional).",
        "Crown: two setbacks (2 m and 5 m), gilded stepped pyramid and a mast with a beacon – 54.5 m by default, the second-tallest building of the 1950s, always below the city hall.",
        "5–8 office floors of 3.6 m, 4 colour variants, lot 40 × 36 m; service door and armoured-car door at the rear.",
        "Checks 135/135, after the Unreal import 151/151: 4 meshes with Nanite, 11 materials, 9 colour palettes under Roughness/surfaces saved after Play ended.",
        "For review: only one shape variant, one hall window per loggia side (as on the sheet), amber beacon instead of red."
      ],
      caps: ["Grand bank 1950, Blender preview from the north-east", "Loggia with giant columns at eye level", "From the game camera on the 40 × 36 m lot", "Reference sheet (ChatGPT via Codex)"]
    },
    "cityhall-1950": {
      title: "Autopilot: City Hall 1950 with clock tower",
      summary: "First building of the building autopilot, without questions in between: research (city halls of the 1930s–50s), plan, reference sheet via ChatGPT, build in Blender, checks. The city hall is unique and the tallest building of the 1950s city.",
      points: [
        "Limestone block 40 × 24 m on a granite base, columned portico with the CITY HALL sign, three bronze doors, monumental staircase across the full width.",
        "Clock tower rising from the middle of the roof: 22 m shaft, clock stage with four dials, octagonal lantern, green copper roof, flag pole – lantern roof 65 m, mast 71.5 m (1950s towers: at most 51 m).",
        "3–5 regular floors of 4 m, 4 colour variants, lot 48 × 40 m with forecourt; service door and garage door with driveway at the rear.",
        "Revision r02: r01 had no doors at all (they sat exactly on bay boundaries) – the checks caught it, rebuilt. New lesson #34 in the building skill.",
        "Checks 135/135, after the Unreal import 151/151: 4 meshes with Nanite, 12 materials with roughness/metallic, 9 colour palettes under The runtime (city centre) does not know the city hall yet.",
        "For review: only one shape variant (unique building), 4 m regular floor, tower inside the roof module, tower taller than on the sheet (follows the prompt)."
      ],
      caps: ["City Hall 1950, Blender preview from the north-east", "From the game camera on the 48 × 40 m lot", "Reference sheet (ChatGPT via Codex)"]
    },
    "passanten-abstand": {
      title: "Pedestrians keep their distance",
      summary: "After three test rounds by the user, pedestrians no longer walk or stand inside each other – even in the stress test with 3000 figures.",
      points: [
        "About 0.5 m between bodies; faster ones look for a lane that is free of everyone and overtake – otherwise they stay behind, braking softly.",
        "Evading like real people: turn aside, walk diagonally, turn back (before, they slid sideways).",
        "Crosswalks: 10 waiting spots per side, as wide as the crosswalk and only on the sidewalk. When they are full, people change their destination instead of waiting on the road.",
        "Everyone crosses in the right half – the two directions pass each other instead of jamming head-on.",
        "No more jitter: waiting people are not pushed, speed and standing/walking change with a transition."
      ]
    },
    "hochhaus-1990-04": {
      title: "Fourth 1990s version: City Tower with glass bay and corner loggias",
      summary: "Another renovation variant for all five 1970s towers, from the user's reference sheet: smooth blue mirror-glass facade, a curved light-blue glass bay over the full height at the front, two corner loggias at the top. Built, checked, approved by the user on 04.11. and imported into Unreal.",
      points: [
        "Bay A/B 12 m, C 9 m wide, up to 1.50 m in front of the old wall – an exception to the 0.30 m rule, accepted by the user. Sides and rear stay at 0.30 m.",
        "Ground floor: four granite columns on a low podium under the curved canopy, CITY TOWER lettering bent along the arc, lobby and two shops behind.",
        "Top floor with corner loggias (glass balustrade, glazed back walls, ceiling light) sits in the roof module (user decision: “Loggias in roof”). Default height 55 m as on the sheet.",
        "Revision r02: the podium had invisible sliver faces (arc points clamped instead of cut) – rebuilt, old delivery kept. New lesson #33 in the building skill.",
        "Checks 399/399, lettering only 1,040 triangles.",
        "Unreal: 12 meshes with Nanite, 10 materials, 9 colour palettes under Triangles, dimensions, material slots and collision as exported from Blender; checks afterwards 445/445. The runtime (skyline, construction site) does not know this version yet."
      ],
      caps: ["Shapes A, B, C on the shared 32 × 28 m lot (Blender preview)", "Eye level: granite columns under the curved canopy", "Corner loggia on the top floor"]
    },
    "admin-menue-reiter": {
      title: "Admin menu tidied up: tabs, collapsible cards, scrolling",
      summary: "Approved. With the grass sliders the menu ran off the bottom of the screen. Now three tabs (Build, World, Tools), each section a card with a header to expand and collapse, and every page scrolls. Tab and open/closed cards are remembered.",
      points: [
        "Pattern taken from engine debug menus (ImGui collapsing header, Unity DebugSheet): sections at the top, collapsible groups inside, fixed height with a scrollbar.",
        "Build: Lots, Roads, Parks · World: Island, Clouds, Grass – outside, Grass – parks · Tools: Overlays, Renovation test, Walk & pedestrians.",
        "Existing buttons were only moved – all functions stay the same; labels in English.",
        "Grass row untangled: name between < > on its own, Upload/Reset in a separate row.",
        "Approved by the user in Play (04.11.)."
      ]
    },
    "hochhaus-1990-02": {
      title: "Another 1990s version: City Tower in a granite picture frame",
      summary: "Another renovation variant for all five 1970s towers, from the user's reference sheet: a red-brown granite frame encloses the mirror-glass facade like a picture. Built, checked, approved by the user and imported into Unreal.",
      points: [
        "Wide granite piers at the front (3 m, slim shape C 2.75 m), a 3 m high frame at the top – everything at most 0.30 m in front of the old wall, the footprint stays.",
        "Mirror-glass curtain wall with large panes (~2.5 m) in the same grid on all sides, aluminium mullions, one row per floor.",
        "Ground floor: lobby glass set back 1.5 m under an aluminium soffit with downlights, stainless-steel door, CITY TOWER lettering in a serif font on the granite lintel, shops and lobby behind.",
        "Roof: plant hidden behind the granite frame. Default height 57.1 m (sheet: ≈ 57 m), range 9–22 typical floors.",
        "Checks 347/347 (incl. in-game size box, rules against all five 1970s specs). Lettering with 19,000 triangles is rather heavy – topic for a later revision.",
        "Unreal: 12 meshes with Nanite, 9 materials, 9 colour palettes under Triangles, dimensions, material slots and collision as exported from Blender; checks afterwards 393/393. The runtime (skyline, construction site) does not know this version yet."
      ],
      caps: ["Shapes A, B, C on the shared 32 × 28 m lot (Blender preview)", "Eye level: recessed lobby under the soffit, lettering on the granite lintel"]
    },
    "hochhaus-1990-03": {
      title: "Second 1990s version: City Tower with round corners",
      summary: "Alternative to the granite version: the same renovation for all five 1970s towers, but with rounded corners and continuous glass bands – from the user's reference sheet. Built, checked, approved by the user on 04.11. and imported into Unreal; integration into skyline and construction site is still pending.",
      points: [
        "All four corners with a 4 m radius (slim shape C: 3.5 m); the rounding lies inside the old footprint – the building does not get wider.",
        "Facade in horizontal bands all round: light-blue mirror glass, deep-blue spandrel glass, thin white aluminium lines; curved panes at the corners.",
        "Ground floor: recessed shop front with interior, white columns, white cantilevered canopy with CITY TOWER lettering that sweeps round the front corners, entrance in a signal-red frame.",
        "Roof: low rounded deep-blue parapet, plant hidden behind it. Default height 55.9 m (sheet: ≈ 56 m), range 9–22 typical floors.",
        "Checks 371/371, incl. a new check “round corners inside the old footprint” and canopy inside the in-game size box (2.26 m ≤ 2.6 m).",
        "Unreal import: 12 meshes with Nanite under, 9 materials (ISM + Nanite), colour palettes green, silver, turquoise; checks afterwards 417/417."
      ],
      caps: ["Shapes A, B, C on the shared 32 × 28 m lot (Blender preview)", "Eye level: canopy with lettering, red entrance frame, shop behind"]
    },
    "gras-bibliothek": {
      title: "Changing grass across the island: library, upload, sliders",
      summary: "New section in the admin menu: adjust grass outside (island surface + lawn of the building fields) and in parks separately. 10 textures to choose from, upload your own images, sliders for texture blend, scale, brightness, green tone and saturation. Settings are saved.",
      points: [
        "Library: 5 Megascans grasses from the terrain + 5 own, seamlessly tiling textures (fine lawn, clover, flower meadow, moss, dry grass) from a Python script.",
        "Material M_IslandTerrain v7: parameters for texture, blend, scale, brightness, green tone (warm ↔ cool) and saturation – defaults = the previous look.",
        "A C++ subsystem gives every grass surface its own material instance, parks and outside separate; new parks get the setting automatically.",
        "Upload… opens a file dialog (editor only); the image is copied to and loaded with mip levels.",
        "Open: play test and visual sign-off by the user."
      ]
    },
    "hochhaus-1990": {
      title: "1990s City Tower: granite, mirror glass, glass pyramid",
      summary: "Third era of the tower: a postmodern renovation that fits all five 1970s versions. Same footprint and floor heights, +2 to +4 floors, new stepped crown. Approved by the user on 04.11. and imported into Unreal.",
      points: [
        "Facade: red-brown granite corner piers in two steps, flush blue-green mirror glass in aluminium frames between them (one pane per ~1.3 m), at most 0.30 m in front of the old wall.",
        "New module B_BandFloor (user decision): every 4th typical floor has a granite band instead of spandrel glass – never the top one.",
        "Ground floor: glass lobby with interior, granite column portal, round arch with fanlight and brass doors, CITY TOWER lettering in brass (Georgia Bold).",
        "Crown: parapet, two recessed glass steps with granite frames, glass pyramid up to 9 m, antenna up to 13 m.",
        "Default heights: A and B 14 typical floors (63 m to the tip), C 17 (73.5 m); range 9–22.",
        "Checks 477/477 (incl. in-game size box, rules against all five 1970s specs, Unreal import). The runtime (skyline, construction site) does not know the 1990s stage yet.",
        "Unreal: 15 meshes with Nanite, 10 materials, 9 colour palettes under Triangles, dimensions, material slots and collision as exported from Blender."
      ],
      caps: ["Shapes A, B, C on the shared 32 × 28 m lot (Blender preview)", "Eye level: column portal with fanlight and brass lettering"]
    },
    "rock-sitzen": {
      title: "The skirt stays over the knees when sitting",
      summary: "Until now the ladies' skirts hung straight down on the bench and the thighs stuck out at the front. Now every lady has a second skirt shape for sitting, blended in softly when she sits down.",
      points: [
        "Why a separate shape: when walking, the skirt hangs from the pelvis so it doesn't swing with the legs at every step. That doesn't work for sitting.",
        "The sit shape is computed in Blender: from the belt onto the lap, along the thighs to in front of the knees, then straight down; at the back it lies on the seat.",
        "First attempt (skirt rotating with the thighs) flipped the wide skirt up in front of the chest – discarded.",
        "In the game: blended in while sitting down, full while sitting, gone again when standing up. Applies to all three lady figures.",
        "Pitfall: the import silently dropped the shape (importer default off) – now switched on in the import script."
      ],
      caps: ["Blender preview: sit shape of the skirt on a suggested bench"]
    },
    "passanten-messung": {
      title: "What do the pedestrians cost? – measured and optimized",
      summary: "Automatic measurement in the game: pedestrians off, 300 and 3000 (stress test), camera at an angle above the busiest spot. Result: 300 pedestrians are cheap; with 3000 the game thread becomes the bottleneck.",
      points: [
        "Without pedestrians: game thread 9.4 ms, render thread 9.7 ms, GPU 8.6 ms per frame.",
        "300 pedestrians (213 nearby, 61 on screen): game thread +2.3 ms, render thread and GPU practically unchanged.",
        "3000 pedestrians (2220 nearby, 470 on screen): game thread 30.5 ms (+21), render thread +5, GPU +2.4 → about 30 frames/s, the game thread is the brake.",
        "More different figure models only cost memory (~5–8 MB each), no time per frame – what is expensive is the number of figures nearby.",
        "Optimization afterwards: figures outside the view or behind buildings pause (no animation, only updated every 6th frame).",
        "Result without editor throttling: 3000 pedestrians game thread 34.2 → 23.1 ms (29 → 42 frames/s), only 436 instead of 2230 figures active; 300 pedestrians now cost practically nothing.",
        "Levers for later: distant figures as vertex animation, spreading the path logic (crowd tick 3–5 ms at 3000) over time."
      ]
    },
    "titelbild": {
      title: "Title screen like in the old game",
      summary: "Every game now starts with a title screen: skyline in evening light, golden logo, Shady Tycoon lettering and a golden START button. Start creates a new island.",
      points: [
        "Images from the old game (background, logo, lettering, button) cropped and imported as UI textures.",
        "Own C++ screen on top of everything else; laid out for 1920 × 1080 and scaled with the window.",
        "START (or Enter) fades out in half a second and, like the admin button “New island”, starts an island with a random seed.",
        "Previously the island was created immediately at game start – now only after the click."
      ],
      caps: ["Title screen in the editor's Play window"]
    },
    "ranger310": {
      title: "Third 1950s car: Rosenwald Ranger 310 pickup",
      summary: "The first utility vehicle in the city: an invented 1955 pickup from the Rosenwald family, built from the design sheet with shield emblem, lettering and a wooden rack on the bed.",
      points: [
        "Own script – unlike the sedans, built from separate parts: round front fenders, domed hood, cab, stepside bed with outside fenders and running boards.",
        "Dimensions from the sheet: 5.2 m long, 3.10 m wheelbase, just under 2 m high; large whitewall wheels with chrome cap and red R.",
        "Details: grille with three heavy chrome bars and red R shield, glass headlights, “Rosenwald” on hood and tailgate, “Ranger 310” on the fenders, licence plate RW-310, round tail lights.",
        "Wood as a new material: plank bed floor, stakes and slats all round.",
        "Six colour pairs from the sheet (forest green, ruby red, steel blue, sand beige, dove blue, black – each with cream or light grey); drives mixed with the two sedans."
      ],
      caps: ["Ranger 310 – front with R shield and glass headlights (Blender preview)", "Bed with wooden rack, tailgate with lettering, RW-310"]
    },
    "passanten-vielfalt": {
      title: "Pedestrian variety: colours, fabrics, sizes",
      summary: "Two figures become a colourful 1950s crowd: every person gets their own colours and fabric patterns from period palettes, their own body size – and there are now six base figures.",
      points: [
        "Colours per person without extra textures: suit, tie, hat, shoes, hair, dress, belt and skin tone come from values on the mesh (like the cars' paint).",
        "Dresses with patterns: original polka dots, plain, stripes, gingham, small dots – drawn in the material via separate fabric coordinates.",
        "Suits smooth or as tweed; the white shirt stays white, the tie gets its own colour.",
        "New shapes: gentleman without a hat, older stocky gentleman with a different hat, lady with a ponytail, older lady with a different bob.",
        "Every person is ±5 % taller or shorter and somewhat wider or narrower; the stride rate adapts.",
        "Before that: women walk more upright (back straight, head level) – adjustable live.",
        "After that: ladies wear stiletto heels (the figure stands on the balls of the feet, knees rise a little when sitting) and every second one a pearl necklace."
      ]
    },
    "rosenwald500": {
      title: "Second 1950s car: Rosenwald 500",
      summary: "A luxury sedan (built 1954) invented by ChatGPT – no trademark issues, so this time with emblems, “Rosenwald” lettering and licence plate “RW-500”, built as faithfully as possible from the design sheet.",
      points: [
        "Own script, reuses the building blocks of the first sedan.",
        "Two-tone as on the sheet: base colour below, accent on roof, hood and rear above the swept chrome spear; six colour pairs from the sheet (ruby red/cream, petrol/white, pastel green/cream …).",
        "Details: wide grille with bumper horns, winged emblem with R, three portholes, fins with tall tail lights, own wheels with wide whitewall and red hub.",
        "After the play test: the trim strips of both cars now end before the wheel arches instead of running over the wheel; glass headlights instead of white; the first sedan has a chrome A-pillar where the panoramic windscreen wraps round the corner.",
        "Both models drive mixed in traffic; around 75,000 triangles, Nanite."
      ],
      caps: ["Rosenwald 500 – front with RW-500 and glass headlights (Blender preview)", "Rear with fin lights and winged emblem", "First sedan with new chrome A-pillar, trim strips end before the wheel"]
    },
    "passantin-1950": {
      title: "Second pedestrian figure: 1950s lady",
      summary: "From the user's reference sheet, a lady in a white halter-neck polka-dot dress with a circle skirt now walks through the city – with female proportions, a blond bob and her own walk.",
      points: [
        "Dress built from scratch: bodice cut from the body skin, dots spread evenly via its own unwrap, circle skirt with belt and folds.",
        "Bust shape reworked in several rounds against the reference profile (MakeHuman sliders were not enough) – first sagging, then pointed, finally round and high: approved by the user.",
        "After the first play test (shoulders too wide, male walk, wrong hairstyle): body fitted to Quinn instead of Manny, ready-made bob hairstyle dyed blond, fringe cut cleanly above the brows.",
        "Female walk: women walk with Quinn's walk animation; the animation speed adapts to the walking speed.",
        "Every figure now has its own material (same base material, own texture) – the basis for more figures and colour variants."
      ],
      caps: ["Profile: reference sheet left, model right (bust shape)"]
    },
    "auto1950": {
      title: "First 1950s car: sedan with tail fins",
      summary: "The modern cars did not fit the 1950s. From a generated design sheet a Blender script built our own sedan – tail fins, chrome bumpers with horns, two-tone paint and whitewall tyres that really turn.",
      points: [
        "Template: design sheet – only the shape is used, no trademarks, lettering or emblems.",
        "Built by script like the houses: body from cross-sections, cab with panoramic windows, round front wheel arches, rear with fender skirts.",
        "Real wheels instead of flat discs: whitewall, ribbed chrome cap so you can see them turn – important now that you can walk through the city.",
        "One mesh, many paint jobs: body and roof colour come per car from the component data (coral, pastel blue, mint, butter yellow, midnight blue …, roof mostly cream white).",
        "Era switch in traffic: as long as there is no game year, only 1950s cars drive; the modern ones are kept for later.",
        "Around 20,000 triangles, Nanite – no problem even in the stress test with 300 cars."
      ],
      caps: ["Sedan 1950 (Blender preview)", "Rear with fins, bullet tail lights and licence plate area", "Side view: design sheet above, model below"]
    },
    "passanten-mpfb": {
      title: "First real pedestrian figure (1950s gentleman)",
      summary: "Instead of the grey mannequin, people from MakeHuman (CC0 library in Blender) now walk the streets – with suit, hat and face, yet so lean that hundreds can walk at once.",
      points: [
        "Tool: MPFB (MakeHuman for Blender) with the free base packs (body, clothing, skin types).",
        "The figure is fitted to the mannequin skeleton – walking, sitting, standing up and turning work without new animations.",
        "Lean: hidden body under the clothes deleted, triangles reduced (39,000 → 15,000), all textures in one atlas, one material for all figures.",
        "Prepared for colour variants: every part (skin, suit, hat, shoes) carries an ID so the same figure can later be reused with other colours.",
        "Lesson: map spines with matching names (MPFB has 3, the mannequin 5 vertebrae) and split the top one by height – otherwise the jacket bulged.",
        "After the first play test: posture straight again (belly stuck out – the figure now keeps its own depth), bald head under the hat with see-through gap replaced by hair cut straight along the hat brim, plus a dark hat lining.",
        "New review step: every figure first comes as a Blender file for review (with comparison figure and sit-down animation), then into the game."
      ],
      caps: ["Raw figure from MakeHuman (39,000 triangles, 8 materials)", "Ready for the game: on the mannequin skeleton, 15,000 triangles, 1 material", "Hat and hair reworked: straight cut, natural hairline, hat lining"]
    },
    "konzept": {
      title: "Concept first: player UI, economy, ecosystem",
      summary: "Before building the player menu we clarify what the game lives on. Three concept papers were written in one evening.",
      points: [
        "Research on how city builders arrange their interface → layout agreed: status at the top, building at the bottom, panel at the object.",
        "District economy: budget from the city, taxes like in Anno, energy as the first bottleneck.",
        "Ecosystem: seven pillars, money sources and sinks, two player roles (office and entrepreneur)."
      ]
    },
    "walker": {
      title: "On foot through the city, pedestrian network, passers-by",
      summary: "Press F to step down from the bird's-eye view onto the street. A dedicated network connects sidewalks, corners, crosswalks and building entrances.",
      points: [
        "First-person view: eye height 1.64 m, Shift runs, Space jumps.",
        "Pedestrian network from the visible sidewalks, crosswalks with traffic-light phases, pathfinding (A*).",
        "300 pedestrians as placeholder figures walk from entrance to entrance and wait at red.",
        "After the first test: no more crowds at the crosswalk (own stopping distance, reaction time and speed per figure), turning cars wait for pedestrians, some cross mid-block when no car is near.",
        "The debug view shows each figure's remaining path to its destination – they plan the whole route in advance.",
        "Stress-test button in the admin menu: 10× as many cars (300) and pedestrians (3000) – runs smoothly in Play.",
        "Traffic lights: green phase doubled (20 s instead of 10 s, cycle 48 s); pedestrians walk 1.5 × as fast (1.4–2.5 m/s; 2 × was too much).",
        "Walk animation fix: first the pedestrians slid in the base pose, then they stepped on the spot (wrong animation MM_Walk_InPlace) – now real steps with MM_Walk_Fwd, tuned to 2.3 m/s.",
        "On the crosswalk the pedestrians now step down from the curb onto the road instead of floating at sidewalk height.",
        "Parks as destinations (04.11.): park paths are part of the pedestrian network; pedestrians walk through parks and stay 30–120 s at a bench.",
        "Sitting on the bench (04.11.): own sitting pose for the mannequin built in Blender (MM_Sit_Idle, light breathing), plus sitting down and standing up (1.4 s each, feet stay on the ground): turn to the bench, sit down, sit, stand up, walk on.",
        "Smooth turning (04.11.): pedestrians no longer snap round by 90° or 180° but take corners in an arc, turn towards the street at the traffic light and step on the spot when turning round.",
        "Soft transitions (04.11.): own animation class blends between two animations (0.25 s) – no more flicker when sitting down, standing up and setting off."
      ]
    },
    "heute": {
      title: "Today: the same island, now with a city",
      summary: "Seed 503555 with today's code: terrain grass, mountains, cloud shadows, city centre with towers and department stores, parks, ring. The island is created in 10 seconds instead of 200.",
      points: ["All four look-back snapshots taken with the same seed and the same camera – directly comparable.", "Captured in editor Simulate: there the generator only builds the ring, not the main roads."],
      caps: ["Skyline of the city centre, mountain in the background", "City centre inside the ring, building fields all round", "Close-up: centre with towers", "Oblique view", "From above: cloud shadows, mountains, city in the middle"],
      compareCap: "Same camera, same seed: 01.11. → today"
    },
    "baustelle": {
      title: "Era renovation: construction sites turn 1950 into the 1970s",
      summary: "Buildings are not swapped but visibly renovated: fence, scaffolding, net with advertising banners, crane – under the sheeting the facade changes, floors are added on top.",
      points: [
        "Three building types: tower, department store, house.",
        "Real construction parts from Blender: scaffold tubes, couplers, site fence, tower crane, container, skip.",
        "Scaffolding and net now grow smoothly instead of popping up floor by floor."
      ],
      caps: ["1970s City Tower – the renovation of the 1950s tower", "1970s department store", "1970s house"],
      compareCap: "Tower 1950 → 1970"
    },
    "gebaeude70": {
      title: "New building families: 1970s towers and a hospital",
      summary: "The building pipeline (reference sheet → Blender → checks → Unreal) ran in parallel all day in a second session.",
      points: [
        "Towers 1970: waffle grid (_03), brick (_02), _04 and _05.",
        "1950s hospital in three variants.",
        "Every family: three shape variants, colour palettes, Nanite."
      ],
      caps: ["Tower 1970 _02 (brick)", "Tower 1970 _03 (waffle grid)", "Tower 1970 _04", "Tower 1970 _05", "Hospital 1950", "Reference sheet (image AI) for tower _04"]
    },
    "innenstadt": {
      title: "City centre, traffic, clouds and city parks",
      summary: "The centre gets a straight street grid with towers and department stores, cars drive on the roads, traffic lights switch, clouds drift by.",
      points: [
        "Intersections with crosswalks and stop lines, traffic lights on a 28 s cycle.",
        "30 cars drive on the right, stop at red, turn.",
        "Skyline: towers in rows along the avenues, taller towards the middle; department stores at the corners.",
        "Parks are generated procedurally (paths, lake, shrubs)."
      ],
      caps: ["Park generator: large city park with two lakes", "Park generator: L-shaped area", "1950s tower – base building block of the skyline", "1950s café", "1950s department store"]
    },
    "cpp": {
      title: "Island generator in C++: mountains, plateau, terrain textures",
      summary: "The compute-heavy parts move from Blueprint to C++. The island gets mountains without edges, a round central plateau and real grass/rock textures.",
      points: ["Building fields balanced, no beach, smaller centre.", "Admin menu in the Warm Parchment look.", "Players can build roads (straight), with intersections."],
      caps: ["Seed 503555 with the C++ generator, from above (afterwards from commit)", "Oblique view: flower shape, mountains at the edge, no grass textures yet", "Close-up: round central plateau, fields with names", "Prototype: mountains (contour lines) – seed 871242", "Prototype: mountains – seed 959715"],
      compareCap: "Same seed 503555: Blueprint generator (30.10.) → C++ generator with character shape (01.11.)"
    },
    "charakter": {
      title: "Island shape with character (Python prototype v6)",
      summary: "Instead of round blobs: bays, peninsulas, a lake eye, districts of equal area. First tried out in Python, then ported 1:1 to C++.",
      points: ["Many seeds compared side by side, bays checked specifically.", "Building fields via weighted Voronoi: ~9 fields per district, equal area."],
      caps: ["Shape gallery (several seeds)", "Centre shape and district rays", "Bay test", "Building fields: 6 districts × ~9 fields, all the same size", "Comparison row for the selection"]
    },
    "baufelder": {
      title: "Seed island with building fields (state 30.10.)",
      summary: "This is how the seed island looked before the switch to C++: six equal districts with 9 building fields each, ring and main roads – still without mountains and terrain textures.",
      points: ["Seed 503555: 717 ha of land, ~104 ha per district, fields 11–12 ha.", "Generation in the editor ~200 s (Blueprint), 43 s of it computing time – the reason for C++."],
      caps: ["Seed 503555 from above (generated afterwards from commit)", "Oblique view: green fields along the ring", "Close-up: centre, ring road, main arteries"],
      compareCap: "Map island (27.09.) → seed island (30.10.), same top view"
    },
    "strassen": {
      title: "Road network with sidewalk corners, lots at right angles to the road",
      summary: "Roads get real junctions with sidewalk corners; plots align with the road and snap to their neighbours.",
      points: ["Lots also follow curves (fan gaps filled).", "Preview ghost green/red while placing."],
      caps: ["Junction at the ring", "Sidewalk corner", "Lots at a junction", "Row of lots along a road", "Lot preview (ghost)"]
    },
    "seed": {
      title: "The island is created from a seed",
      summary: "Turning point: the map island is only a prototype now. Every game gets its own island from a number – with six equal districts, ring and main roads.",
      points: [
        "First attempts: frayed fractal islands, pale colours, dark night mood.",
        "Then clear district colours, a ring round the centre, labels with hectares.",
        "Many iterations in one night (s1 … s13)."
      ],
      caps: ["Python: 8 seeds compared", "First seed island in Unreal", "Fractal variant (discarded)", "Night look (discarded)", "Green ring test", "Clear district colours", "Seed island from above", "Centre with ring", "Districts with area", "Districts labelled"],
      compareCap: "Seed island: first attempt → one day later"
    },
    "lot": {
      title: "Lot system prototype",
      summary: "Rule chain road → sidewalk → front yard → plot → building. First test plot in district 4.",
      points: ["Admin/test menu in the game.", "Auto-start for Unreal and Blender."],
      caps: ["Test lot along the road in D4", "Lot from above with grid"]
    },
    "pipeline": {
      title: "Building pipeline: Residential_01 from start to finish",
      summary: "The path from the reference image via Blender to the finished Nanite building in Unreal is in place – documented as a skill.",
      points: ["In-game build menu (rough skeleton).", "Industry, warehouse, house as the first 1950s families."],
      caps: ["1950s family house, three variants"]
    },
    "start": {
      title: "Start: island from the map template",
      summary: "Rebuild of Shady Tycoon in Unreal 5.8. The island comes from a drawn map: black = land, blue = water, red = roads.",
      points: ["Main roads, district overlay, building grid for district 4.", "Unreal controlled by Claude via MCP."],
      caps: ["The map island in Unreal, from above (photographed afterwards from commit)", "Oblique view: six districts in pastel, centre, main roads", "Close-up: bay and centre, still flat slabs", "Map template of the island", "Building grid district 4"]
    }
  },

  concepts: {
    "bezirksraete": {
      title: "District councils: politics below the city council",
      summary: "Ticket #47: every district gets its own council with five seats. The leader is the same person as the district's seat on the city council. The council decides programmes and exceptions, not every building project. The user answered all six open questions on 11 Nov.",
      sections: [
        { h: "Structure", items: [
          "5 seats per district: the leader (= the district's city council seat, no second record) and 4 members; majority 3 of 5.",
          "Politicians with several priorities (business, residents, by the book, environment, infrastructure, fiscal, social), honesty, price, fear, loyalty to the leader, credibility, support, favour per player and a memory of their last votes.",
          "Election every 4 years in November as today; losers stay in the game as politicians."
        ]},
        { h: "The user's six decisions (11 Nov)", items: [
          "Q1 District treasury: the council only votes on programmes and special projects; the district player keeps building public buildings themselves.",
          "Q2 Rivals: 3 permanent computer rivals per district for the leader post, the player runs as the fourth.",
          "Q3 Field releases are decided by the district council (3 of 5); the island-wide building committee goes away.",
          "Q4 A city treasury comes now: fed from a share of district taxes, the city council grants money from it to district programmes.",
          "Q5 Players can also win one of the 4 ordinary seats in the same election.",
          "Q6 Only two exceptions need a vote when building: a tower above the district's height limit and industry closer than 150 m to houses; everything else builds as today."
        ]},
        { h: "Motions", items: [
          "Areas A planning, B infrastructure, C services, D budget, E economy, F environment; flow motion → agenda → early positions → lobby/compromise/campaign/envelope → vote → carried out exactly once → news story.",
          "After a rejection the same motion is locked for 12 months; if the treasury cannot pay, it fails with a news story."
        ]},
        { h: "Provisional values (until the user confirms them)", items: [
          "Height limit 6 / 12 / 20 floors (until 1969 / until 1989 / after), motion 5 influence, programmes 50–80 k$ × era with 24 months of effect, envelope 10 k$ × era × price, city funds request 10 influence."
        ]},
        { h: "Links to media and services", items: [
          "A printed scandal (#46) will also lower the district politicians' favour and unsettle councils where the subject holds a seat.",
          "The planned district office (#42) becomes the seat of the district council."
        ]}
      ]
    },
    "medien-imperium": {
      title: "Media empire: newsroom, scoops, audiences, scandals – media as PvP",
      summary: "Request by tester Nohr (Discord, ticket #46) with a design document and two UI sheets: media should be more fun, more meaningful and pit players against each other. Core: owning an outlet is only the start – the game is deciding which story gets investigated, buried, framed and when it runs, and surviving the counterattack. Builds on what exists (stories, probes, War Room, staff, newspaper/TV tower, front page, audiences from #44).",
      sections: [
        { h: "Where we are (0.1.305)", items: [
          "Exists: newspaper/TV tower as buildings with reach, stories (push/spike/spin/rebuttal), probes (rumor → lead → dossier), War Room with 10 channels by era, staff with stars/loyalty/poaching, ads, front page, My bets.",
          "Missing is the decision layer: the player never writes or frames a story, outlets have no name/reputation, advertisers demand nothing, staff have no face, counterattacks are not a flow of their own."
        ]},
        { h: "Loop and core systems", items: [
          "Loop: discover → shape (story, frame, placement, timing) → capture the audience → convert into power (ad money, pressure on votes, elections, demand) → survive the counterattack. One edition = one month.",
          "Outlets as characters (`FOutletRec`): name, editorial line, four meters credibility / reach / influence / exposure – tabloid and quality paper both viable.",
          "Leads as an information market (`FLeadRec`): from real events (steered tenders, envelopes, votes against the mood, factories, skeletons in the closet); evidence 0–100, exclusivity, expiry. Choice: investigate further, publish now, sell, hold, bury.",
          "Monthly newsroom: frame (investigative, balanced, critical, supportive, sensational) and placement (front page, inside, buried, hold), forecast like the War Room; the front page you build IS the one others see.",
          "Finite audience per district/segment (from #44), advertisers with conditions, staff with faces (persons system), cross-media ownership with diminishing returns."
        ]},
        { h: "Scandal chain and PvP", items: [
          "Five stages: discovery → choice → publication battle (first gets the scoop bonus) → consequences (council, election, land value, contracts, suspicion) → retaliation (advertiser pulls out, lawsuit, counter-exposé). Each stage a card in My bets, big ones a front page.",
          "PvP: scoop races, poaching anchors, ad wars, two frames for the same event, alliances of convenience. Rule: an attack creates a problem but never removes a player's ability to play."
        ]},
        { h: "Screens (from the UI sheets)", items: [
          "All in the big main window with portraits: newsroom, investigation desk, programme planner (1960+), audience analytics, talent, competitors, acquisition, crisis, write article.",
          "First newsroom + investigation desk + crisis (they carry the scandal chain)."
        ]},
        { h: "Stages and decisions", items: [
          "1 one outlet is fun · 2 two outlets compete · 3 pillars connected (scandal chain, crisis screen, NPC press barons) · 4 empire (programme planner, acquisitions, cable/web/social).",
          "Decided (user, 11 Nov): every media building is its own outlet with name and line · big scoops may break mid-month · journalist portraits from the MPFB portrait pilot · after stage 1 now stages 2 and 3."
        ]},
        { h: "Built: stages 1–3 (11 Nov), plan for stage 4", items: [
          "Stage 1: one newsroom with leads from game events, frame, placement and front page. Stage 2: every paper/TV tower its own title competing for the audience, advertisers with conditions, counterstories. Stage 3: scandal chain with consequences (council, campaigns, contracts, land value), crisis room with seven answers, selling leads, computer media barons.",
          "Stage 4 (proposal, waiting for the user): 4a investigation desk, 4b media staff with faces and poaching, 4c outlet profiles and takeovers."
        ]}
      ]
    },
    hierarchie: {
      title: "Hierarchy & persons: politicians with a face, a character and a career",
      summary: "The user's wish after the council main window: the whole political hierarchy with real people. Every figure becomes a persistent person (face, archetype, traits, opinion per player, career over decades); district primaries where you can back candidates early; faces as MetaHuman portraits rendered once, with 5 expressions and 2–3 age stages.",
      sections: [
        { h: "Persons", items: [
          "New list `People`: id, name, birth year, home district, face, archetype (machine boss, reformer, populist, union man, old money …), traits (ambition, greed, courage, honesty, loyalty, temper, grudge), opinion per player with the last reasons, career.",
          "Seats and candidates only point to a person; values like bribe price/fear come from the person. People age, retire, die, get indicted – and come back."
        ]},
        { h: "Hierarchy", items: [
          "District primary ~6 months before the council election: 2–4 candidates per district; players can back (money), endorse (influence/media), dig dirt or recruit.",
          "Then the council as today, at-large seats from the best losers, mayor every 8 years from council veterans. Later committee chairs, department heads, press barons.",
          "Main window \"Hierarchy\": districts with candidates → council → mayor, each card with portrait, office, archetype, opinion of you (with reason); click = person sheet with career and voting record."
        ]},
        { h: "Character → behaviour", items: [
          "Everything stays fixed rules on the server (multiplayer: every PC computes the same); archetypes after historical types, no real people.",
          "Language models only beforehand for bios, quotes, newspaper lines; a live AI dialogue at most later, as flavour without game effect."
        ]},
        { h: "Faces", items: [
          "Option B of the research (user 11.11.): build each person once in MetaHuman Creator, dress them per decade, render bust portraits in council-room light; in the game only images (a few MB), breathing/blinking/cross-fades in the UI.",
          "5 expressions (neutral, pleased, angry, nervous, suspicious) by opinion, vote, scandal; 2–3 age stages (~35/55/70)."
        ]},
        { h: "Steps and open points", items: [
          "1 pilot portrait (one person, 2 ages × 5 expressions in the council window) · 2 data model · 3 primaries · 4 hierarchy view · 5 cast of ~40 people · 6 ageing/retirement/comeback, mayor election.",
          "Open: size of the people pool, portraits for human players, primaries always or only when contested, share of female politicians per decade."
        ]}
      ]
    },
    transit: {
      title: "Transit: avenue, bus, tram, ferry, subway",
      summary: "Tester wish #41 (Nohr): the Transit menu shows avenue, bus, tram, subway and ferry, none of which exists. Proposal: first a traffic load per district (trips, car share per era, road capacity → congestion costs satisfaction, revenue, clean air), then the modes by era: bus 1950, avenue/tram/ferry 1965, subway 1990.",
      sections: [
        { h: "Core: traffic load", items: [
          "Per district and month: trips from residents + jobs, car share 35 % (1950) to 75 % (1990), capacity = metres of road × lane factor.",
          "Congestion from 0.7: satisfaction down to −12, business revenue down to −15 %, pollution up to +30 %; visible as more/slower cars, the district card and a traffic overlay.",
          "Transit takes trips within its stops' catchment out of the car share."
        ]},
        { h: "Modes", items: [
          "Bus 1950: depot + a line of stops on existing roads; buses drive as real vehicles in traffic.",
          "Avenue 1965: road tool option, 2 × 2 lanes, tree median, capacity ×2.5; on a district border only with both neighbours (idea from #18).",
          "Tram 1965 (option: removal law 1970, light rail 1985), ferry 1965 at waterfront lots, subway 1990 as an island project via the law “Metro Act”.",
          "Bridge is not a separate tool: roads across water already become arched bridges – the menu entry only shows a hint."
        ]},
        { h: "Shady + art", items: [
          "Private bus operator via tender (an envelope helps, suspicion if it is your own company); routing past your own lots raises land value; fare law; strike, oil crisis.",
          "Art (invented brands): 1950s bus in cream with the district colour (“Rosenwald Transit Coach”), stop with a round sign, articulated tram cream/red with overhead wire, double-ended ferry with funnels in the district colour, subway kiosk with a “METRO” sign."
        ]},
        { h: "Open", items: [
          "Congestion simulation first, or buses first as an extra?",
          "Tram fixed at 1965, or the removal/light-rail story?",
          "Private transit allowed?",
          "Possible right after an OK: the menu shows the era + “coming later”."
        ]}
      ]
    },
    services: {
      title: "More public services: university, clinic, district office, public works, parks & recreation",
      summary: "Tester wish #42 (Nohr): five new service buildings. Doctor's clinic (private possible), university (research, offices/media +), district office (cheaper hearings, influence for the seat holder), public works yard (introduces road condition) and parks & recreation office (introduces park condition).",
      sections: [
        { h: "Buildings", items: [
          "Clinic 1950: 1 lot, serves 1500 residents, can be private (revenue).",
          "University 1955: campus 3–6 lots, research +12/month, offices/media +5 %, one per district, the first is “State University”.",
          "District office 1950: field hearings −30 % influence and one month faster, +2 influence/month for whoever holds the district seat.",
          "Public works yard 1950: roads wear (cracks/potholes, capacity −20 %), each yard repairs ~3 km/month.",
          "Parks & recreation office 1950: parks/plazas need care (yellow grass, brown hedges, litter – the yard care look exists), summer concerts."
        ]},
        { h: "Connections + shady", items: [
          "The district office helps the seat holder – if a rival holds your seat, your office helps them: a reason to win the election.",
          "Road repairs via tender: your own construction company, envelopes; a cheap contractor = potholes come back (scandal).",
          "A run-down park = newspaper story; the university speeds up research and shifts issues (education/environment)."
        ]},
        { h: "Art", items: [
          "Clinic: brick house, brass plate, green cross (no red cross – protected emblem).",
          "University: neoclassical main hall with columns and clock tower, lawn quad; 1970 concrete lecture hall, 1990 glass atrium.",
          "District office: small limestone building with steps, flag in the district colour, clock, notice board.",
          "Public works: brick depot, orange trucks, steamroller, gravel; parks & rec: gardener's lodge, greenhouse, tree nursery, bandstand."
        ]},
        { h: "Open", items: [
          "District office bonus to the seat holder or to the district owner?",
          "Introduce road and park condition (wear) at all?",
          "Private clinics yes/no? University as lots or a painted area?"
        ]},
        { h: "Addendum ", items: [
          "Era chain per service 1950–2030 (e.g. public works: brick depot → salt dome → recycling yard → e-fleet → robotics depot); renovation like every family.",
          "Stand-ins from existing buildings first (post office, warehouse, school) so the rules can be tested within a week; the 25 real families afterwards through the building autopilot.",
          "District office = seat of the district council (#47): with an office, monthly sessions and cheaper motions. Media (#46): new leads like \"potholes back after six months\" or \"park left to rot\", good stories like the summer concert, a journalism faculty brings better reporters.",
          "Recommendations (provisional until the user answers): bonus to the seat holder, mild wear in two steps (parks first, then roads), private clinics yes, university as a fixed multi-lot building, order clinic → district office → parks & rec → public works → university."
        ]}
      ]
    },
    "water-sewage": {
      title: "Water supply and sewage",
      summary: "Tester wish #43 (Nohr): “Water” and “Pumps” in the Utility menu are the same thing. Proposal: “Water supply” (pumping station, water tower, desalination from 1990) as a copy of the power grid, and “Sewage” (sewer pumping station, outfall, treatment plant) with water quality per shore.",
      sections: [
        { h: "Water", items: [
          "Pipes are not drawn – they follow the roads like power.",
          "Pumping station (lake/well), water tower (pressure, landmark in the district colour, ad space), desalination 1990.",
          "Demand per resident grows each era; shortage: satisfaction −, no new residents, weaker fire service. Sold to other districts like power."
        ]},
        { h: "Sewage", items: [
          "Pumping station + outfall into the sea/lake (free, lowers water quality) or treatment plant (1950 settling tanks, 1970 round clarifiers).",
          "Poor water quality: waterfront/lido/fishing lose, disease; on the border lake it hits the neighbour.",
          "1970 “Clean Water Act”: fine for untreated outfalls; night dumping = cheap but risk of exposure (suspicion, front page)."
        ]},
        { h: "Art", items: [
          "Art Deco pumping station with a tall chimney and an intake pier; water tower = steel tank on four legs with the district name (B: brick tower, 1970 concrete mushroom).",
          "Treatment plant with round basins and a slowly turning bridge arm, 1990 silver digesters; outfall with a brown plume in the water.",
          "Visible water quality: clean turquoise, poor greenish and murky, grey foam, litter on the shore, a “No swimming” sign."
        ]},
        { h: "Numbers (draft)", items: [
          "Unit WU = 1000 m³ per month (like MW for power): house 0.03, apartment block 0.24, factory 2.0; demand per head ×1.0 (1950) / 1.4 (1970) / 1.2 (1990).",
          "Pumping station at a lake 120 k$ (−40 WU, 1.5 MW), well field 60 k$ (−12), water tower 45 k$ (buffer against a “dry summer”), desalination 1990 900 k$ (−80, 6 MW).",
          "Sewer pumping station 25 k$, outfall 5 k$, treatment plant 1950 150 k$ (cleans 30 WU), 1970 280 k$ (60 WU).",
          "Network like power: contract → own pumping stations → surplus of other districts → the city buys expensive water (400 $/WU). Shortage −6 satisfaction, no new residents, fire service at 60 %.",
          "Water quality per shore: −0.1 per untreated WU within 600 m of an outfall, below 0.6 = “spoiled” like industry (no waterfront bonus)."
        ]},
        { h: "Decisions (each with a recommendation)", items: [
          "1. A real system or only buildings with a bonus? – decided (user, 11.11.): a real system as a copy of the power grid.",
          "2. Private or public? – decided (user, 11.11.): water supply AND sewage are public (the treasury builds and pays, no private waterworks, no water sales for profit); districts balance through their treasuries.",
          "3. How exact is water quality? – decided (user, 11.11.): per outfall with a 600 m radius, the same rule as industry for waterfront lots (no waterfront bonus there).",
          "4. The shady side (Clean Water Act, dumping, water contracts) right away? – decided (user, 11.11.): NOW, in the first water build – Clean Water Act, night dumping (saves money, scandal risk), tenders for waterworks/sewage plants (envelopes, favouritism); private builders/operators bid on the public contracts.",
          "5. Placeholders first or real 1950 buildings first? – decided (user, 11.11.): real models FIRST, no stand-ins – water tower, pumping station, treatment plant + outfall through the building pipeline (1950, Nanite, catalog), then the rules and the shady side."
        ]}
      ]
    },
    belegung: {
      title: "Occupancy and demand per building",
      summary: "Answer to #44 (tester: everything runs at maximum after a short time). Finding: housing, industry and leisure really do run almost always full, because nearly everything is computed per district instead of per building and location, and there is no saturation; jobs and shops do not. Proposal: own occupancy per building with lease-up, people move in only for free jobs, a commuter model, demand per sector with saturation, info window with real numbers.",
      sections: [
        { h: "Finding (0.1.305)", items: [
          "Housing: occupancy is the same for the whole district; target = housing × attraction (0.6 + 0.4 · happiness + reputation/400), capped at 100 %, 20 % closer each month → usually full after ~12 months. Jobs and location do not matter for moving in.",
          "Jobs: 45 % of residents work, staffing per district 20–100 % – not at maximum (the 20 % from #40), but the same for every business in the district.",
          "Shops already depend on location (customers in reach, 0.3–1.2×); offices × education, hotels × tourism; industry, leisure, media have no demand = always full revenue × staffing.",
          "The info window shows revenue at full staffing × staffing and leaves out demand, power, ads, events – often more than the server books."
        ]},
        { h: "Proposal", items: [
          "Own occupancy per building (replicated), ~15 % per month towards the target; a new building starts at 10–20 % and is full after 6–12 months.",
          "Housing by local desirability (jobs within commuting reach, services, parks, pollution, land value against rent); island-wide, people move in only as far as there are free jobs, best houses first.",
          "Commuter model: houses spread their workers over businesses in reach; staffing per business, unemployed residents lower local happiness.",
          "Demand per sector with saturation: leisure by visitors, offices by educated residents + office demand, industry by market (island + export) shared by all factories, media by reach.",
          "Info window with the real revenue and one line per factor (linked to the reason); later a \"Demand\" overlay while building. Computer players plan with the same rating."
        ]},
        { h: "Steps and open points", items: [
          "1 display fix · 2 occupancy per building · 3 desirability + moving in · 4 commuters · 5 sector demand · 6 tuning (target: a house pays for itself in ~2 years).",
          "Open: measure the commuter model's cost with ~4,000 buildings; happiness/land value per location in future; make vacancy visible."
        ]}
      ]
    },
    waterfront: {
      title: "Waterfront lots",
      summary: "Last open part of #32: lots whose back edge touches the shore become waterfront lots - ordinary buildings earn more there, and five new building types exist only there (lido, boathouse/marina, fishing harbour, beach villa, cargo quay).",
      sections: [
        { h: "Rule", items: [
          "Waterfront = back edge of the lot at most 12 m from the shore, at least 60 % of it facing water; checked on the server from the generator data.",
          "Each district uses only its own shore; on the shared border lake both neighbours can build.",
          "Shore roads: a road 20-60 m parallel to the coast - lots on the water side reach exactly to the shore."
        ]},
        { h: "New buildings", items: [
          "Lido (public, sandy shore), boathouse/marina (sea or lake), fishing harbour (sea), beach villa (any shore), cargo quay (sea, steep coast).",
          "Lot = land part + water part (jetty/quay zone 10-40 m); jetties with a fixed deck height above the water level of that shore (sea -2.5 m, lake -1.2 m).",
          "Existing buildings on the water: homes +25 % rent, café/hotel +20 %; industry lowers water quality - on the shared lake that hits the neighbour."
        ]},
        { h: "Order and decisions", items: [
          "1 waterfront rule + bonus, 2 shore roads, 3 boathouse as the first real building, 4 villa + lido, 5 fishing + cargo quay, 6 later eras.",
          "User 10 Nov: yes - the cargo quay makes the trade stages physical (Harbor 1970 needs a quay on your own coast).",
          "User 10 Nov: yes - water quality is a conflict; industry spoils the shore, on the shared lake it hits the neighbour.",
          "User 10 Nov: first all five buildings (1950) with 3 variants each through the building pipeline, then the game rules."
        ]}
      ]
    },
    wasser: {
      title: "Water for sea and lakes",
      summary: "Comparison for realistic water on an island generated at runtime from a seed: (A) our own Single Layer Water material on our own water surfaces, (B) Unreal's Water plugin (experimental, built around splines and the editor), (C) Fab packs (mostly cartoon style or expensive FFT oceans). Decided (user, 10 Nov): A – implemented, measured 0.68 ms GPU. B only later, if boats/harbours with buoyancy come.",
      sections: [
        { h: "Options", items: [
          "A) Our own Single Layer Water material on our own water surfaces: real colour by water depth (clear/turquoise in the shallows, deep blue further out), refraction, reflections, shore foam from the depth difference, small waves via normal maps – fits an island built from a seed.",
          "B) Unreal's Water plugin: built around splines and the editor, hard to create at runtime, heavy (Landmass, Niagara), experimental since 5.0.",
          "C) Fab packs: mostly cartoon style or expensive FFT oceans; nothing free that clearly beats A."
        ]},
        { h: "Decision and implementation (user, 10 Nov)", items: [
          "Now A: one material for sea and lakes, applied by ShadySync; measured 0.68 ms GPU, the old material stays as fallback.",
          "Beaches: sand on the gentle shore, steep coast stays rock – visible under the shallow water.",
          "Roads across lakes become arched bridges (independent of the water choice).",
          "Later, only if needed, B: boats and harbours with buoyancy and waves."
        ]}
      ]
    },
    kompendium: {
      title: "Compendium 1950–2030: scope for politics, media, economy",
      summary: "What should exist in the game at all, before the paths there are designed (the user's brief of 09 Nov): 94 laws from four sources, eight offices with voters and cycle, 20 elections, outlets and methods per era, staff with a job market, research as in MGT2, goods, contracts and trade up to the harbor, eight roads to wealth and the opening as a small light. The user's decisions are marked, the rest is a proposal.",
      dgNotes: [
        "42 of 94 laws on the time axis, six domains. Gold = the city's era bill, light = catalogue from its year, red dashed = event from the simulation. The full table with effects is in the document.",
        "Who votes, who sits, who decides: district voters → 6 district seats; all voters → 2 at-large seats (new), police chief, committee; the mayor as an NPC with the casting vote. Council = 9 votes, 5 needed; appointments for treasurer, licences and ethics.",
        "The staff job market (the user's decision): new applicants every quarter with 2–5 stars, rarely a top hire – whoever hires first has them. Roles are multipliers for the War Room, at most 6 slots.",
        "The opening as a small light (the user's direction): three acts from spectator in the Roll Call via the first seat to the tycoon with outlets and puppets. Early laws matter but are reversible.",
        "Cycle of the districts (the user's principle): workers, goods, power, credit and imports flow through contracts between the districts and to the mainland; trade in six stages from trucks to the logistics hub. Built after politics and media."
      ],
      sections: [
        { h: "The user's decisions (09 Nov)", items: [
          "Time strip: today at the left, the future comes in from the right (variant B); the clock card shows date and calendar.",
          "War Room accepted. Staff by the employee principle: the better the people, the better the results; a job market with many average ones and now and then a good one – whoever grabs first has them.",
          "Research as in Mad Games Tycoon: things become available over the years and then have to be researched, in the media too (own research department).",
          "Economy: trade (first by truck over the bridge, later via a harbor) and contracts with NPCs and players will come, but later. Recorded: no district is like another – residential districts supply workers, industry supplies products, everyone depends a little on everyone.",
          "The player is a tycoon like the tech billionaires (cars and rockets, a trading house, a social-media empire): many ways to make money; in the end he pours it into politics and media.",
          "The opening as a small light (the user's inclination): the council decides without you, you notice it like a small tutorial and have to live with it until you have the money to turn it around.",
          "Order: first the scope for all three areas (this compendium), then the paths there – starting with the political and media timeline."
        ]},
        { h: "How laws come about", items: [
          "Four sources: the city's era bill at a fixed year (players can delay, speed up, weaken), catalogue bill from its availability year through any council seat or via lobbying, event bill from the simulation (threshold → mandatory vote), citizens' initiative from the Referendum Act 1970 (special vote of the voters).",
          "Levels or on/off; reversible (repeal = a vote); council session every December, special session 15 influence, failed = earliest at the next session. NPC representatives propose by profile (builder, industrialist, merchant, press baron, fixer)."
        ]},
        { h: "Who votes, who sits, what is at stake", items: [
          "6 district seats (district voters, 4 years, Nov 1954 … 2030), 2 at-large seats new (all voters; replacing the mayor's second vote), mayor NPC with casting vote and era bills (electable from 1990 – open), committee 3 (elected today; proposal 2 elected + 1 appointed), police chief (pace of investigations), treasurer (tenders, appointed by the council), licensing board from 1960 (broadcast licences, by the mayor), inspector general from 1978.",
          "Council = 9 votes, 5 needed; a player without a seat has no vote, only lobbying – that is the stake at elections. 20 elections, all offices at once, by-election on loss of office within 6 months, term limits only by law (1990).",
          "Stakes: council majority (bills), committee (fields), police chief (danger of envelopes), mayor (eras, casting vote, budget), treasurer (the millions of the tenders). Voter formula as before plus audiences, Polarize and tracked promises."
        ]},
        { h: "Law catalogue 1950–2030", items: [
          "94 entries in nine domains, each with year, source, effect (starting value), winners/losers and a historical anchor. Zoning: Reconstruction 1950, Urban renewal 1954, Historic preservation 1966, Parking minimums 1975, Inclusionary 2005, Upzoning 2019. Housing: Rent cap, Public housing 1955, Fair housing 1968, Vouchers 1974, Vacancy tax 2024.",
          "Transport: Highway program 1956, Transit 1962, Harbor authority 1970, Fuel rationing 1973, Congestion charge 2003, Light rail 2012. Environment/energy: Smoke ordinance 1955, Clean Air 1970, Energy Act 1973, Nuclear licence 1975, Privatization 1990, Climate Act 2010, Coal phase-out 2018, Solar mandate 2026.",
          "Economy: Import tariff 1951, Minimum wage 1962, Enterprise zone 1968, TIF 1977, Deregulation 1981, Casino 1990, Free port 1996, Stimulus 2009, Remote-work zoning 2021. Order: Police budget, Liquor licensing 1953, Open records 1966, Cameras 2002 (investigations +25 %), Pandemic 2020.",
          "Media: Press law, Fairness rule 1950 (repealed 1987), TV licence 1960, Cable 1978, Private TV 1990, Platform immunity 1996, Data protection 2018, AI labelling 2024. Clean hands: Lobbying register 1958, Referendum 1970, Finance limits 1974, Ethics Act 1978, Term limits 1990, Unlimited PACs 2010, Revolving-door ban 2016.",
          "Proposal for V2: the 8 existing bills plus 4–6 per decade (≈ 40) and the 5 era bills; an overview per decade shows what is going on (era bill, catalogue topics, events, new media, economic index)."
        ]},
        { h: "Media scope", items: [
          "11 outlet types with reach, credibility, founding cost, audience and revenue: newspaper, radio, City Gazette (never for sale), TV 1960, cable 1978, talk radio 1988, private TV 1990, portal 1996, social 2008, streaming 2016, AI feed 2030. Reach × credibility = effect; credibility stays the self-brake.",
          "8 story types (report, exposé, human interest, fear, hope, satire from 1970, endorsement, puff piece), campaign goals from the War Room, investigation stages with accelerators and brakes, ads per era, polls ±8 … ±2, media events (TV debate before every election from 1960, press award, scandal waves), ownership via founding and stakes."
        ]},
        { h: "Staff and job market", items: [
          "10 roles with 1–5 stars and one effect per star each: campaign manager (mix +6 %), pollster (range −10 %), spin doctor from 1980, fixer (envelope heat −3, has skeletons of his own), editor, investigative reporter (takes his dossier along), researcher (+10 RP), lobbyist from 1958, lawyer, data analyst from 2012.",
          "Job market: 8–12 applicants per quarter (2★ 45 %, 3★ 40 %, 4★ 12 %, 5★ 3 %), salary 2 k × stars × era, 5★ demand double and a Campaign HQ; whoever hires first has them (server: first command); poaching +30 % against loyalty; training up to 4★; at most 6 slots (8 with HQ) – roles are multipliers, no micromanagement."
        ]},
        { h: "Research", items: [
          "A channel becomes available through the city's licence bill, a method with its year; research happens at the research desk in the War Room (researchers; 10 RP/month without): small channel 60 RP + 30 k, large 120 RP + 100 k, method 45–90 RP, story type 30 RP, improvements repeatable with diminishing returns.",
          "Whoever researches first has a 1–2 year lead, then NPCs catch up. The same principle in small for politics (whip count, committee stacking); building technology of the economy stays in the catalogue per era."
        ]},
        { h: "Economy scope (to be built later)", items: [
          "Principle (decided): the residential district supplies workers, industry supplies goods and materials, energy supplies power, trade brings imports in and exports out – everyone depends a little on everyone, hence contracts.",
          "7 goods (workers/skilled/graduates, power, materials, goods, food only from the mainland, services, waste) with substitutes without a contract (city utilities 3×, mainland 2×); 6 contract types (power supply, labour agreement, materials, goods offtake, port access, waste) with terms and levers.",
          "Trade in 6 stages: trucks over the bridge 1950 (imports 2×), depot 1958, harbor 1970 (coastal field, Harbor authority, tender – “you first have to reach the sea”), container terminal 1990, free port 1996, logistics hub 2010. 12 economic events from baby boom 1955 via oil crisis 1973 and financial crisis 2008 to pandemic 2020; budget with three purses. Deliberately later: goods chains, pricing, trade mini-game, power lines."
        ]},
        { h: "Roads to wealth – the tycoon", items: [
          "Eight roads with best decade, requirements and typical opponent: landlord (rents, rezoning; 1950s/2010s), industrialist (cars 1960, electronics 1990), energy baron (coal → nuclear → wind), merchant (trucks → harbor → hub), banker (1990s), media mogul (TV 1960, social 2000s), host (hotels, casino 1990), contractor (tenders, peaks 1956 and 2009).",
          "Two main roads + one side road per player; each road explodes in one era and dies in another – switch in time or slow the era down through politics. End picture: campaigns are small change, outlets owned, puppets on the council, from 1990 the mayoral election. New buildings for it: freight depot, harbor, terminal, casino, Campaign HQ, outlets per era."
        ]},
        { h: "The opening: from small light to tycoon", items: [
          "Three acts without hard thresholds: small light 1950–54 (no seat, Roll Call as a spectator, fields and roads, small donation, prepare the 1954 election, live with decisions), player 1954–70 (a seat or campaign money, War Room, newspaper/radio, first staff), tycoon 1970–2030 (millions, puppets, outlets, 5★ staff, mayoral election from 1990, the leader draws attention).",
          "Early decisions matter but are reversible (“Repeal the 1955 Smoke ordinance” as an act-2 goal); the Playbook fills by watching; the agenda counts down to the 1954 election from the start; all humans start as small lights, whoever gets rich first draws attention."
        ]},
        { h: "The paths there (order)", items: [
          "1 Political timeline: law catalogue as a data table, council with 9 votes, elections for all offices, agenda strip and Roll Call. 2 Media timeline: outlet types, licences, story types, polls, research desk, staff and job market. 3 War Room with mood per district. 4 Economy: goods, contracts, trade, eight roads."
        ]},
        { h: "Open", items: [
          "Mayor playable from 1990 (endgame) – yes/no; committee 3 elected or 2 + 1 appointed; which 40 catalogue laws first; research for production technology too; sales tax; food as a good; staff cap 6; first seat realistic in 1954 or 1958."
        ]}
      ]
    },
    kampagnen: {
      title: "Agenda, War Room, Roll Call: campaigns as a workshop",
      summary: "A campaign is our “game” from Mad Games Tycoon 2: assembled in the War Room from goal, vehicle, message, mix, tricks and timing, left to run for months, experienced seat by seat as a Roll Call, explained in the debrief and remembered in the Playbook – the agenda at the top keeps every date visible. The user's brief of 09 Nov (central events, an MGT2 workshop for politics and media, tension as in Die Fugger II); the detailed design is a proposal, the numbers are starting values.",
      dgNotes: [
        "Mock-up on today's HUD: time strip under the cards, today at the left, the future comes in from the right (the user's decision, 09 Nov). Pins in the colours of the three forces, gold ring = my stake, pulse = soon and open; hover card with the standing, click = War Room.",
        "The War Room as a workshop: six steps on the left, the settings in the middle (two themes, four tone sliders, audiences, Polarize, promise, 40 mix points, tricks, timing), on the right the outlook as a range, exposure risk, cost and Launch.",
        "The loop with its MGT2 counterpart per step: Agenda → War Room → months → Roll Call → Debrief → Playbook – and back into the War Room for the second attempt.",
        "Roll Call in the council: eight seats in, 4:4, Okafor last after a pause – the tension of Die Fugger II and Frostpunk 2. One sentence of reasoning per seat, the mayor's casting vote on a tie, Space skips.",
        "Channels (by the city's licence bills) and methods (by research in the War Room) from 1950 to 2030 – the technology line from MGT2, rounded to the game's eras. Years are a proposal (TV 1960 instead of 1965).",
        "Worked example with numbers: the high-rise permit fails 4:5 in 1958, the debrief explains why (housing fear in West, posters in the wrong place), the second attempt in 1959 with Housing + Jobs passes 5:4.",
        "What is hidden: a district's mood (issue weights, camp pendulum) and the reach per channel and audience. Left: different per game (seed); right: learnable across games."
      ],
      sections: [
        { h: "The user's brief (09 Nov)", items: [
          "Events must be central: elections, dates, contents, time left always visible – no side note, no ticker you miss while building. The six proposals from the main window (agenda bar, front page instead of ticker, war room before votes, watchlist, camp barometer, three alert levels) are all accepted – without too much clutter.",
          "Tie the agenda bar to the clock and calendar at the top right (the passage of time), but place it big and central.",
          "Set up campaigns as in Mad Games Tycoon 2: back or fund a puppet, pick the bill(s), give them values when proposing, steer hearings – find out what works; if it fails, try again with different settings. The reverse for the media: a campaign against a candidate, fellow player or NPC or for a boom; stories with values (rousing, serious …), explore the districts' mood, place ads.",
          "Technology across the decades: no internet in 1950 – newspaper, radio, black-and-white TV, new things later; it shapes what can be researched.",
          "Votes as tense as in Die Fugger II: influence first, then the judges give their verdict one after another, a majority is needed, often the third one decides.",
          "The model is reality: donors fund candidates, the media turn everything into stories, friction and “us against them” keep people hooked – we are the ones who manipulate; everything runs on money. Open: how the economy works here, contracts perhaps as a mini-game."
        ]},
        { h: "What makes such games fun (research 09 Nov)", items: [
          "Mad Games Tycoon 2: a product from genre, sub-genre, topics, target group, 40 priority points, direction sliders and features; the right values are hidden and found through experience; technology unlocks over time. Most frequent criticism: the game does not explain how to make good games, players google the sliders – so our debrief names the cause, and the fit differs per game.",
          "Die Fugger II: chain of offices (councillors elect the mayor, who appoints master builder, judge, treasurer), donation bar per office holder, bribing the judges, 2 of 3 suffice, a tie is decided by lot, blackmail forces a vote.",
          "Frostpunk 2: council with 100 seats, 51 needed, negotiate with factions beforehand (promises with a deadline or pressure), the count is shown live like a dice roll in Baldur's Gate 3, a failed law returns after 10 weeks, laws are reversible; criticism: UI unreadable when things go wrong.",
          "Crusader Kings 3: success chance and secrecy are two numbers, progress over months, agents; anger about “95 % and still failed” → we show honest ranges instead of percentages.",
          "Tropico 6 (election speech with promises that are tracked), Floor 13 (fixed rhythm: the poll every 21 days), Mad TV / Mad News (audience, ratings, ads pay for the station), tycoon design (fast feedback, visible cause in the world, overlapping arcs, hidden systems, rewards at several time scales), reveal pacing (short pause before the result, skippable).",
          "Eight rules from that: miss nothing · configure instead of click · hidden but fair · honest ranges · two numbers (outlook, exposure) · the second attempt is the normal case · the scene is the reward · one strip, one workshop, one scene."
        ]},
        { h: "Agenda", items: [
          "Time strip (about 36 px) directly under the top card row across the full width; today at the left under the district card, the future comes in from the right and drifts towards today – when a pin reaches the left end the event takes place (the user's decision, 09 Nov, variant B). The clock card at the top right shows date and calendar.",
          "Pins by force: politics red (council, hearing, election), media orange (story, campaign end, probe stage), economy gold (tender, contract, budget); short title, time left and standing (“4:5”, “Hale 46 %”). Your own stakes with a gold ring in front; under one month and still open → pulse.",
          "Hover = card with details, click = War Room for this date, mouse wheel = horizon 6 / 12 / 24 months, Ctrl + wheel = size. The expanded clock card lists the same dates.",
          "Front page at turning points (Island Gazette, one headline, two sub-stories, a photo), later per outlet in its own line; three alert levels: ticker for small things, edge card for everything with your own stake, front page with a pause for turning points.",
          "Camp pendulum instead of Political Climate: “us” ↔ “them” (Progress ↔ Tradition), below it the city's top issue; headlines move the pendulum visibly, group details in the expanded card."
        ]},
        { h: "War Room – the campaign workshop", items: [
          "One window (look of the New Game window) for politics, media and economy; opened via an agenda pin, Politics → Bills/Puppet/Hearings or Media → Campaign. Six steps on the left, settings in the middle, outlook, risk, cost and Launch on the right.",
          "1 Goal: pass/block bill (council, 5 of 9), win hearing (committee, 2 of 3), elect puppet (voters), sink rival, lift image, swing issue, boom, defend. 2 Vehicle: puppet (fund/endorse/run), target seats with everything you know, own or rented outlets, later a spokesperson.",
          "3 Message: theme 1 + 2 (Jobs, Housing, Safety, Progress, Tradition, Taxes, Clean Hands; from 1970 Environment, 1990 Opportunity, 2010 Climate), four tone sliders (Emotional ↔ Factual, Hope ↔ Fear, Positive ↔ Attack, Local ↔ City-wide), up to two audiences (Workers, Families, Seniors, Business; from 1960 Youth, 1990 Commuters, 2010 Online crowd), Polarize 0–100 (your own side gets louder, the middle and credibility suffer), optionally a verifiable promise.",
          "4 Mix: 40 points across channels (posters, newspaper, radio, rallies, door-to-door, newsreel, TV, mailers, talk radio, web, social, mobile, feeds) – locked ones grey with their year; the right mix per audience and era is the actual discovery.",
          "5 Tricks with two numbers (effect / heat): envelope (+50 lean, heat +15…+30, honest ones report you), spike, dossier drop (timing!), push poll (1992), astroturf (2004), buy editor. 6 Timing: start, duration 1–6 months, peak 1–2 months before the date (reputation decays 10 %/month), one pivot for 20 % of the budget.",
          "Right: outlook as a range (“Council 4–6 of 9 · needs 5”), polls narrow it; council half-circle with safe/swing/against; exposure low/medium/high; cost in money, influence and favors; Launch or Update."
        ]},
        { h: "Hidden values and the Playbook", items: [
          "Mood per district: weight per issue (sum 100) + camp pendulum −100…+100; fed by unemployment (Jobs), rents/vacancy (Housing), incidents (Safety), smog (Environment from 1970), taxes, scandals (Clean Hands), the flagship bill (Progress/Tradition). Stories and campaigns shift salience and pendulum, both drift back monthly.",
          "Audience weights per district from residents, jobs and buildings; seats get a hot issue, price, fear of exposure and loyalty (mood or alignment). Public: alignment and voting record; via dossier: hot issue and price.",
          "Channel × audience × era as a fixed table – learnable across games like the genre combinations in MGT2 (1958: radio and door-to-door reach working families, newspaper and posters the business owners, TV hardly; in 1972 it flips).",
          "Discovering: poll (±8 points 1950, ±5 1970, ±3 1990, ±2 2010, ±3 2030), focus group from 1958 (tone preferences), own outlet (letters to the editor for free), debrief (two biggest deviations).",
          "Playbook: every insight as a card with district, era and date (“Westbrook Seniors 1958: Safety > Progress, fear tone, radio”); cards age with the era (“may be outdated”). Our player knowledge from MGT2 – in the game instead of a wiki."
        ]},
        { h: "Roll Call and election night", items: [
          "Committee (3): safest seat first (0.6 s), second (1.5 s), at 1:1 the third after a 3 s pause; every card with one sentence of reasoning from alignment, hot issue, favor or envelope.",
          "Council (9 = 6 district seats + 3 city seats, 5 needed): half-circle like the politics panel, safe seats fast, swing seats slowly, the decisive one last; tie → the mayor's casting vote (NPC, follows the city pendulum) – our lot from Fugger II. Space skips.",
          "Election night (district seats, police chief): districts report one after another, running total, “projected” from 70 %, your own bets highlighted, 10–20 s.",
          "In the world: pedestrians with signs in front of City Hall, the newsboy shouts the result, posters on lamp posts, a rally on the plaza. The roll is honest (one per seat, no fudging) – the pause is staging."
        ]},
        { h: "Debrief and second attempt", items: [
          "Debrief card after a Roll Call, election night or campaign end: result, cost (money, influence, heat), comparison with the outlook, movement per audience, efficiency per channel, fit theme ↔ mood, tone, the decisive factor per seat.",
          "Lessons → 1–3 Playbook cards. The “Plan next attempt” button opens the War Room with the old settings; date = next session (committee quarterly, council in December or a special session for 15 influence, election every 4 years). Failed bills earliest at the next session (Frostpunk cooldown); favors stay, lobbying decays.",
          "Promises from the message are tracked: keeping one +10 reputation and the district's loyalty, breaking one −15 and the media remind people."
        ]},
        { h: "Media technology 1950–2030", items: [
          "Channels by the city's licence bills (flagship-bill mechanic: players speed up or slow down): 1950 newspaper, radio, posters, rallies, door-to-door, newsreel · 1960 TV b/w (so far 1965 → move forward) · 1970 colour TV · 1978 cable · 1988 talk radio · 1990 private TV · 1996 web · 2008 social · 2016 mobile/streaming · 2030 feeds/AI.",
          "Methods by research in the War Room: polls ±8 (1950), focus groups (1956), TV debate (1960), attack spot (1964), investigative unit (1974), sound bites/spin (1980), push poll (1992), astroturf (2004), micro-targeting (2012), bots (2016), AI content (2026), synthetic personas (2030).",
          "Historical anchors (NTSC colour 1953/54, colour-TV majority in the early 1970s, Kennedy–Nixon 1960, “Daisy” 1964, Watergate 1972–74, CNN 1980, Fairness Doctrine 1987, web 1991/95, Facebook 2004, iPhone 2007) rounded to the game's eras."
        ]},
        { h: "Worked examples", items: [
          "High-rise permit 1958/59: attempt 1 (Progress + Taxes, business owners, newspaper/posters, 48 k$ + 20 influence, outlook 4–6) fails 4:5 – Okafor flips after the story “Shadows over Elm Row”. Debrief: Progress only 4th in West, business was already for it, posters wasted in Northgate. Attempt 2 (Housing + Jobs, local, workers + families, radio 14 / door-to-door 10, promise “Rent cap stays”, editor bought, Hale proposes, special session) passes 5:4 – Okafor last. The bill: 146 k$, 35 influence, heat +5, land value ×1.8 on 12 fields.",
          "Smear campaign 1966: a probe against Dorsey (rival C's police-chief candidate) delivers the evidence; dossier drop in October, Clean Hands + Safety, fear/attack, families + seniors, own paper 14 / radio 12 / TV 10, Polarize 40. Risk: exposure = “Smear campaign by Northgate”. Election night: Dorsey 51 → 43 %, your own puppet wins with 47 %. Debrief: TV carried the seniors, radio in East wasted (owned by C).",
          "Boom 1972 (depth open): Progress + Opportunity, families + commuters, TV 18 / newspaper 10 / billboards 12, 90 k$ → district reputation +14, immigration +6 %/month for 4 months, land value +7 %, hotels +20 %; third campaign of the year only 25 %."
        ]},
        { h: "Formulas (starting values)", items: [
          "Seat lean Lean = 35·Fit(alignment, bill) + 25·MoodFit(district, themes) + 15·Favor/100 + 15·Pressure + 10·Pendulum + Envelope(50) − 20·Fear·PublicHeat; roll ±12 per seat, once on the date; for if Lean > 0. Outlook = Monte Carlo range (200 rolls, 80 % band).",
          "Campaign strength per district S = Σ points_c · Reach_c(audience, era) · ThemeFit · ToneFit · Credibility · (1 − saturation); 50 k$ at S = 1 ≈ +8 reputation (as in the triangle of power), salience +S·6 per month, pendulum ±S·4·Polarize/100; third campaign of the year 25 %.",
          "Election as in the triangle of power 5.4 (40 % satisfaction + 30 % reputation + 20 % campaign + 10 % favors; heat > 60 halves it); Polarize raises the turnout of your own side (+Polarize/10 %) and of the other side (+Polarize/20 %).",
          "Exposure = heat/100 · (0.5 + tricks·0.25) + 0.3·foreign probes against me (low < 0.25, medium < 0.5). Cost per mix point in 1950: posters 0.8 k$, newspaper 1.2, radio 1.5, rallies 1.0, door-to-door 0.6, newsreel 2.0, TV 4.0 (1960); poll 8 k$ per district."
        ]},
        { h: "Fitting into today's menu", items: [
          "Agenda strip under the cards, Mood card instead of Political Climate, front page and edge cards as alert levels.",
          "Radial menu: the Politics entries stay, ring 3 gets “War Room” everywhere (Lobby, Fix, Fund … move inside); Media → Campaign opens the War Room directly, new Poll and Playbook.",
          "Naming (user 09 Nov: Deals/Contracts unclear): Deals → Arrangements (the ledger of debts), Contracts → Tenders (public contracts), remove Contracts under Finances; every ring-2 entry gets an explanatory line in the centre on hover.",
          "Keys: click on a pin or W = War Room, Space in scenes = skip."
        ]},
        { h: "Implementation in three stages", items: [
          "Existing: hearings (DecideMonth, Yes/No, Arranged), bills (Proposed, Lobby, votes per player, December), committee members (alignment, honesty, favor), candidates, stories, probes (stage, date), deals, tenders (OpenUntil), calendar events in the HUD. New: FCampaignRec, FMoodRec per district, members with hot issue/price/fear/loyalty, 3 city seats, votes per seat, Playbook entries, method unlocks, channel licences.",
          "Stage 1 – Agenda + Roll Call: strip from the existing dates, gold rings, hover card, click opens the panel; Roll Call for hearings and council with a sentence of reasoning, debrief card, Mood card.",
          "Stage 2 – War Room: six steps, mood model per district, channel table 1950/1970, polls, full debrief, Playbook, front page, promises. Stage 3 – method tree, licences as bills, election night, posters/rallies/signs in the world, staff, boom campaigns.",
          "Performance: all data and Slate; Monte Carlo over 9 seats and the mood per district in the monthly tick are negligible."
        ]},
        { h: "Open", items: [
          "Settled on 09 Nov: time strip with today at the left (B); trade and contracts later, the principle of interdependence recorded; staff with a job market yes; research as in MGT2 yes – see the compendium 1950–2030.",
          "TV licence 1960 instead of 1965 (change to the triangle of power 6.1); length of the cooldown; front page with a pause yes/no (multiplayer only for the affected player); casting vote by the mayor or by lot."
        ]}
      ]
    },
    "spiel-v1": {
      title: "Playable version V1: the triangle of power in the game",
      summary: "How the concept runs as a game: game state as records in the GameState, commands via the server, visuals per client from the data; time in months with an era factor; economy table per building type; politics, media and NPC opponents as rules of the monthly tick; scoring at the end year; interface with one action panel per topic; multiplayer as a listen server. Designed and built by Claude (the user's brief of 05 Nov: decide yourself); the numbers are starting values for the play test.",
      sections: [
        { h: "Goal and limits of V1", items: [
          "A game from May 1950 to the end year (1970 / 1990 / 2010 / 2030): six districts, one player each (human or NPC), the centre stays with the city. Every player has two purses (district treasury as the office, private wealth as the entrepreneur) and the four capitals.",
          "Playable means: apply for building fields, build roads and buildings, monthly tick for population, jobs, power and taxes, politics and media with real effect, NPC opponents, end screen, main menu, host and join.",
          "Not in V1: contracts between players (power, goods), a playable mayor, building in someone else's district, goods chains, power lines as a building part – every item already has a place in the model."
        ]},
        { h: "Architecture", items: [
          "Simulation only on the server: replicated lists (players, buildings, roads, fields, hearings, bills, committee, stories, tenders, investigations, favors, candidates) and a monthly tick. A building is a record (family, variant, road, station, side, field, floors, state), not an actor.",
          "Commands: every action is a command (type, numbers, text, points) via server RPC through the PlayerState, checked and executed on the server; the answer is a toast via client RPC.",
          "Visuals per client: a sync subsystem requests the island from the replicated seed, mirrors field releases, roads (as player roads) and buildings (lot plus static-mesh components in one layer; NPC buildings without a road in the node grid of the field centre).",
          "Catalogue from all files: per variant parts, lot size, anchor, pivot, floors; game values per building type in a C++ table times the era factor. The interface reads one snapshot per frame from the GameState."
        ]},
        { h: "Time and economy", items: [
          "Month = base beat, default 8 s (option 4 / 8 / 15 / 30), the host sets the speed. Quarter = committee, December = council, November every four years = election. Era factor 1 / 3 / 8 / 15 / 25 on prices, revenue, rent, taxes per head.",
          "Start: district treasury 400 k$, private wealth 150 k$, loan up to 300 k$ (0.5 % per month). First building field free, all further ones by hearing.",
          "Building types with cost, upkeep, residents, jobs, power, revenue, pollution, service, happiness – e.g. house 12 k$ / 6 residents, apartment block 60 k$ / 48, shopping centre 180 k$ / 60 jobs / 7,200 $ revenue, factory 250 k$ / 120 jobs / 4 MW, power plant 300 k$ / 20 MW, school 90 k$ (service for 3,000), park 30 k$ (happiness +4).",
          "Per month: migration, commuters, power balance (shortfall bought dearly from the city), revenue times demand times tourism times education, rent privately, property tax into the treasury, levy to the city, happiness, land value, decay of reputation and heat, influence from offices."
        ]},
        { h: "Politics, media, NPC", items: [
          "Hearings (apply, object, lobby, envelope, appeal), eight bills with levels, election with candidates and donations, tenders (bid, steer, inspect), favors with ledger and clean-up; heat 30 / 60 / 85 with consequences.",
          "Outlets (newspaper house or shares in the city gazette), stories from events with push / spike / spin / rebuttal, campaigns with diminishing returns, investigations in three stages with publish / file charges / defend, ads and billboards.",
          "NPC profiles builder, industrialist, merchant, press baron, fixer with building programmes, loans, bids, envelopes, investigations against the leader and candidacies."
        ]},
        { h: "Scoring and interface", items: [
          "Points at the end year: (private wealth + half the treasury − loan) per era + 70 % of building costs + influence × 10 k + reputation × 5 k + residents × 100 + land value × residents / 10 − heat × 2 k. First place takes the Centre of Power.",
          "The radial menu picks the topic, with it one action panel (title, sections, rows with text, value, button); building via catalogue and ghost lot; lobby and end screen in the middle; main menu with New game / Join / Quit and saved options."
        ]},
        { h: "Open", items: [
          "Tune the numbers (rates, thresholds, prices, NPC pace), the fun of the scoring, contracts between players, mayor, clothing and cars per era in step with the game year."
        ]}
      ]
    },
    machtdreieck: {
      title: "The triangle of power: economy, politics, media",
      summary: "The economy creates money, politics distributes rights, the media distribute attention. Each force needs the other two and can damage them; heat is the brake on everything crooked. Ten submenus, four capitals, seven district directions and starting numbers to tune. Accepted by the user on 05 Nov; the numbers are tuned step by step in the game.",
      dgNotes: [
        "The three forces and their six edges. Dashed: politics dampens heat (police, judges), the media amplify it (investigation), the economy pays for both.",
        "The four capitals per player with sources, sinks and decay. Heat is not public – it only becomes visible once the media turn it into a story.",
        "The user's submenus (ring 2) and the proposed actions (ring 3); in-game names are English. Tenders as a sixth Politics entry – confirmed by the user (05 Nov).",
        "Era index: how well each direction carries per era (proposal). Whoever grew big on coal in 1950 must reinvent themselves by 1990 – or push back via politics and media.",
        "Example game: six players, six directions from the seed's location strengths. Arrows = main supply to the neighbour.",
        "The rhythm of the game: month, quarter, year, election every four years, flagship bill per era.",
        "An example with numbers: player A gains land value and loses reputation and seat – all ten menus interlock."
      ],
      sections: [
        { h: "The user's brief (05 Nov)", items: [
          "Politics menu: candidates, bills, zoning hearings, votes, bribes. Media menu: outlets, editorial stories, campaign, investigations, advertisement.",
          "Politics and media equally strong, but with heavy influence on each other; neither side too complex or too heavy.",
          "The district economy is the third force: runs in the background, pays for envelopes and campaigns, is steered by politics and media and feeds back – a cycle in balance.",
          "Districts differ through the player's investment choice (energy, production, construction …)."
        ]},
        { h: "The four capitals", items: [
          "Money: district treasury and private wealth – sources taxes, rents, profits, contracts, exports, ad revenue; sinks upkeep, imports, interest, fines, donations, envelopes.",
          "Influence 0–100: from offices (per month), donations, votes won, favors; spent on lobbying (10–25 per case); −2 per month without office.",
          "Reputation −100 to +100, per player and per district: from stories, campaigns, satisfaction; scandals −15 to −40; every month 10 % towards 0 (news cycle).",
          "Heat 0–100: envelope +15…+30, insider rezoning +15, spiking a story +5, cover-up +10; −2 per month, lawyers (money), friendly police (influence).",
          "Thresholds: 30 rumours (media may start a story), 60 investigation (fines, heat shown in the status bar), 85 charges (loss of office, permits revoked, wealth penalty, lock-out period)."
        ]},
        { h: "Six edges – conversion rates", items: [
          "Money → influence: 100 k$ donation ≈ +5 influence + 1 favor (public, diminishing); envelope ≈ 5–10 % of the gain (heat, trace).",
          "Influence → money: permit, rezoning, contract, subsidy, tax rule for 10–25 influence; for yourself = conflict of interest (heat +15).",
          "Money → reputation: 50 k$ campaign ≈ +8 × reach × credibility; 20 k$ ads ≈ +10 % demand for 3 months.",
          "Reputation → money: +50 reputation ≈ +20 % immigration, +10 % land value, +30 % tourism, −1 point loan interest – slow, only lasts with care.",
          "Influence → reputation: office as a stage (+1 per month, inauguration +3); abuse of office becomes a story. Reputation → influence: elections, pressure on the committee, citizens' petitions.",
          "Honest = slow and clean; crooked = 2–3× faster plus heat. The player chooses with every action."
        ]},
        { h: "Balance rules", items: [
          "Every edge has a counter-edge: press law, licences, police versus investigation, campaign, poll – equally expensive, both need money.",
          "Heat is the brake: media amplify it (investigation → story → charges), politics dampens it (police, judges, committee). Media only = swords without a shield, politics only = shield without swords.",
          "Built-in brakes: credibility per outlet (bought story −5, confirmed exposé +5; effect = reach × credibility), legitimacy (satisfaction, elections), upkeep and saturated markets.",
          "Diminishing returns: the third campaign in a year yields a quarter of the first, the third donation to the same candidate almost nothing.",
          "The leader draws attention: whoever is ahead accrues heat 50 % faster and is the favourite target of NPC journalists.",
          "No total blockade (review after three unjustified rejections); the city fills every gap: city gazette (neutral, never for sale), independent review board, mainland."
        ]},
        { h: "Politics: six submenus", items: [
          "Candidates – who runs for office (committee 3 seats, council, police chief, later mayor), with agenda, ties and skeletons in the closet. Run · Endorse · Fund · Dossier.",
          "Bills – city-wide rules: business tax, tariff, environmental rules, rent cap, height limit, subsidies, broadcast licences, press law, procurement rules; one flagship bill of the city per era, which players can slow down or speed up. Propose · Lobby · Amend · Forecast.",
          "Hearings – the zoning committee per field: release, rezoning, height variance, big projects. Application → date → objections → 3 votes; the classic shady move (buy privately, rezone as the office, land value ×3, heat +15). Apply · Object · Lobby · Arrange · Appeal.",
          "Votes – calendar: elections every 4 years, council yearly, committee quarterly. Election formula: 40 % satisfaction + 30 % reputation + 20 % campaign + 10 % favors; heat > 60 halves it. Cast · Forecast · Call in favor · Schedule.",
          "Arrangements (bribes) – envelope, a job for the nephew, a cheap flat, company shares, campaign donation; every form leaves a different trace; honest NPCs report it (heat +20). Bribe money is a real money sink. Offer · Collect · Ledger · Clean up.",
          "Tenders (sixth entry, confirmed by the user) – public contracts: roads, clinic, grid, renovation waves; fair (cheapest bid) or discretionary (influence). Bid · Steer · Inspect · Overview."
        ]},
        { h: "Media: five submenus", items: [
          "Outlets – 1950 newspaper + radio, 1965 TV (TV tower exists), 1990 private TV, 2010 online, 2030 feeds; per outlet reach per district, credibility, lean, owner. Build a newspaper house or buy stakes (25 % editorial line, 51 % control); abuse lowers credibility and with it effect and income.",
          "Stories – simulation events (site finished, traffic jam, blackout, heat threshold) become stories with tone and target; owner or bought editor: push, spike (heat +5), spin. Effect on reputation and the economy (“the new good address” → immigration, land value). Real headlines in the News panel.",
          "Campaign – buying opinion: for yourself (election), the district (immigrants, tourists), a bill, against a rival (own reputation − if exposed). Candidates = who, campaign = the tool. Posters on lamp posts, rally on the plaza.",
          "Investigations – in both directions: journalist or detective on a rival (rumour → lead → evidence, 1–3 months and 10–40 k$ per stage, chance ∝ the target's heat – honest players are safe); defence: see who is digging, lawyers, counter-story, buy the outlet, delay the police. Publish evidence, file charges or hold it as leverage. NPC journalists visibly walk the city.",
          "Ads – demand for your own companies (+10…+25 % for 3 months); ad space as a product: billboards at busy corners earn from real pedestrian and traffic counts (construction tarps, skyline lettering). Ad budgets finance the outlets – the economy carries the media without owning them."
        ]},
        { h: "Economy: seven directions", items: [
          "No starting classes: every player picks focus areas (realistically two main and one side direction), the rest comes from neighbours or, pricier, from the city.",
          "Energy (mountain → hydro; satisfaction and land value drop, environmental bills hit first), production (lots of power and workers, industry leaves in 1990), construction & real estate (tenders, every renovation wave), housing & education (commuters, skilled workers, graduates), trade & logistics (port, tariffs), finance & services (credit, outlets, needs graduates), tourism & public (outside money, only pays from 1970).",
          "Fairness: the seed gives every district at least two location strengths (mountain, coast, forest, river, near centre, bridgehead, flat land).",
          "Era index 1–5 per direction and era (see diagram): no direction leads forever; each era's flagship bill shifts the values and is a move in itself.",
          "Example game: North energy, East trade/port, South production, West housing & education, near the centre finance resp. construction + tourism – everyone needs at least three others; the same choice saturates the market.",
          "Levers of politics on the economy: tax rates, subsidies (upkeep −50 %), tariffs (+20 % import price), environmental rules (+15 % costs), rent cap, release/rezoning (land value ×1.5…×3), tenders, licences. Levers of the media: immigration ±20 %, land value ±10 %, tourism ±30 %, customers ±15 %, loan interest ±1 point, ads, ad revenue, boycott story (−30 % for 3 months), investigations (fine up to 10 % of wealth)."
        ]},
        { h: "Orders of magnitude 1950", items: [
          "Start: district treasury 500 k$, private wealth 50 k$ (tight, as decided). House 20 k$, tenement 60 k$, coal plant 400 k$, factory 250 k$, newspaper house 180 k$, port 600 k$.",
          "Taxes 5 $ per resident and month, 20 % share to the city; business tax 15 % of profit at the location. Power from the city 3× own price, goods from the mainland 2× neighbour price.",
          "Monthly balance 1955 (2,000 residents, factory, power plant): +10 k taxes, +8 k power contracts, +6 k business; −9 k upkeep, −2 k levy, −5 k school/clinic ≈ +8 k$. A campaign (50 k) costs half a year's surplus, an envelope (20 k) a quarter – politics and media are expensive, on purpose.",
          "1975 ×3, 1995 ×8, 2015 ×15 (inflation + growth; catalogue prices follow)."
        ]},
        { h: "Time structure", items: [
          "Month: economy tick, decay of reputation (10 %) and heat (−2), influence from offices, 2–5 stories from events.",
          "Quarter: committee session (hearings), polls, ad campaigns expire. Year: city budget (NPC), subsidies, council session on bills, lobbies make demands.",
          "Every 4 years (1954, 1958 …): elections for committee, council, police chief; mayor from 1990 (open). Era: flagship bill, renovation wave, new media types, index shifts."
        ]},
        { h: "Three play styles", items: [
          "The honest builder: economy, no heat – safe from investigations, vulnerable to blockade in the committee (remedy: publicity and review).",
          "The kingmaker: committee, council, favors, charges a toll – strong against builder and press baron (press law, police), vulnerable to investigations (many traces) and elections with poor reputation.",
          "The press baron: outlets, campaigns, investigations, ad space – topples kingmakers, vulnerable to press law, loss of credibility and lack of money.",
          "No style wins alone; mixing is the norm, the pure forms are the poles."
        ]},
        { h: "Implementation", items: [
          "Three C++ subsystems without actors (Economy, Politics, Media) with a monthly tick; per player FPlayerStanding { Money, Influence, Reputation, Heat }, per district reputation, satisfaction, land value; event bus from all systems → stories → News panel.",
          "Radial menu: Politics → Candidates, Bills, Hearings, Votes, Arrangements, Tenders; Media → Outlets, Stories, Campaign, Investigations, Ads; ring 3 = actions (rebuilt, no effect yet).",
          "Order: V1 hearings + stories + ads (fields, News panel, tarps and pedestrian counts exist) → V2 bills, votes, calendar, NPC committee → V3 candidates/elections, campaigns, outlets → V4 arrangements, investigations, tenders."
        ]},
        { h: "Open", items: [
          "Mayor playable – from when (proposal 1990)? Win condition(s): wealth, influence, reputation, district size or points from all four?",
          "Lobbies, polls, campaign promises, dossiers as leverage – ideas without mechanics (see idea pool).",
          "Exact numbers: starting values are set, fine-tuning step by step in the game (prototype of the monthly tick)."
        ]},
        { h: "The user's decisions (05 Nov)", items: [
          "Tenders are the sixth Politics entry – in the radial menu under Politics, not under Finances.",
          "The numbers (rates, thresholds, prices, decay) are taken over as starting values and adjusted step by step in the game – no balancing on the drawing board.",
          "“The leader draws attention” (whoever is ahead accrues heat 50 % faster) will be tried out; whether rule and factor fit is decided by the play test.",
          "With that the concept is the working basis; still open are the mayor, win conditions and the ideas without mechanics."
        ]}
      ]
    },
    oekosystem: {
      title: "The city as an ecosystem",
      summary: "Everyone contributes something, everyone needs something. Seven pillars, money flows, two player roles, eras shift the balance.",
      sections: [
        { h: "What the real world says", items: [
          "Economic cycle: households ↔ firms, plus state (taxes/spending), banks (saving → credit), abroad (exports in, imports out).",
          "Economic base theory: a city grows through what it sells to the outside. Every export job pulls 1–2 local jobs along.",
          "Game economies: money needs sources and sinks; specialization only arises when roles depend on each other and markets saturate."
        ]},
        { h: "Seven pillars", items: [
          "People (housing) – labour, purchasing power, taxes.",
          "Utilities – electricity, water, heat.",
          "Raw materials & production – building materials, consumer goods.",
          "Construction & real estate – buildings, rents.",
          "Trade & logistics – shops, port, export/import.",
          "Services & finance – credit, insurance, media.",
          "Public – education, health, safety, leisure."
        ]},
        { h: "Two player roles", items: [
          "Office: manages the district treasury (it isn't theirs).",
          "Entrepreneur: private wealth in companies and real estate – also in other districts.",
          "The conflict of interest is the game: buy cheap, then release as the office → profit and suspicion."
        ]},
        { h: "Eras shift the balance", items: [
          "1950 reconstruction: housing, building materials, coal.",
          "1970: cars, consumer goods, oil crisis.",
          "1990: services, finance.",
          "2010: education, quality of life, clean energy."
        ]},
        { h: "Open", items: ["Simulation depth (proposal: abstract per district and month).", "Scope of version 1.", "Win conditions, role of the Centre of Power."] }
      ]
    },
    bewohner: {
      title: "Residents – the centre of the ecosystem",
      summary: "The only pillar that feeds all others and needs something from all of them. A district's value is measured by it.",
      sections: [
        { h: "What residents provide", items: ["Labour in three levels: unskilled workers, skilled workers, graduates.", "Purchasing power for shops and service providers.", "Taxes into the district treasury."] },
        { h: "What residents need (levels)", items: [
          "Basic needs: home, electricity, water, food.",
          "Work within reach (commuting costs satisfaction).",
          "Services: school, doctor, safety.",
          "Quality of life: parks, leisure, clean air.",
          "Status (later eras): car, electronics, a good address."
        ]},
        { h: "Satisfaction drives moving in and out", items: [
          "Satisfied residents move in → more taxes, higher land value, more demand.",
          "Power plant, factory, noise → people move away, land value falls.",
          "Education turns workers into skilled workers – a residential/education district thus becomes a supplier."
        ]}
      ]
    },
    wirtschaft: {
      title: "District economy",
      summary: "Budget from the city, taxes like in Anno, energy as the first bottleneck, contracts, specialization.",
      sections: [
        { h: "Budget", items: ["The city (NPC) sets the budget at the end of each year.", "Whoever carries burdens (e.g. a power plant) gets subsidies.", "Starting capital is tight."] },
        { h: "Income like in Anno", items: ["Houses → residents → taxes into the district treasury.", "A share goes to the city.", "The district pays for energy, schools, hospitals, parks (modelled on Germany)."] },
        { h: "Energy", items: ["The city supplies little and expensively – everything you can produce yourself can be bought from the city, just more expensive.", "Coal (1950) → later nuclear; hydro power at the mountain.", "Sell surplus via contract and power line."] },
        { h: "Specialization", items: ["Energy, industry, housing (commuters), finance, trade/port.", "Commuters pay taxes where they live, company profit is taxed where the company is located."] },
        { h: "Open", items: ["Types and rates of taxes.", "Contract mechanics.", "How the player builds private wealth."] }
      ]
    },
    ui: {
      title: "Player UI",
      summary: "Status at the top, build menu at the bottom, object panel at the clicked object, overlays and notifications. Height cap below the clouds.",
      sections: [
        { h: "Layout", items: ["Top: status bar (district treasury and private wealth separate, date, population).", "Bottom centre: build menu with categories.", "Right: object panel only on click.", "Bottom right: overlays, top right: notifications."] },
        { h: "Build menu", items: ["Roads, building fields, housing, commerce & trade, industry, public, private.", "Filtered by era."] },
        { h: "Open", items: ["Building it waits for the economy concept.", "How much politics/media in version 1."] }
      ]
    },
    epochen: {
      title: "Era renovation",
      summary: "Every building starts in 1950 and is modernized in four stages (1970, 1990, 2010, 2030) – automatically in the centre, via an upgrade button in the districts.",
      sections: [
        { h: "City centre", items: ["No player builds there; the year triggers the renovation.", "Starting stock 1950s only (tower, department store, 1–2 hospitals, occasional cafés); towers can be renovated twice 1950 → 1970 → 1990.", "Piece by piece over 10 years, renovation as the normal case.", "Later the city merges 2 or 4 plots (demolition + large new building) – never by players."] },
        { h: "Districts", items: ["The player builds freely and may demolish.", "An upgrade costs real money – a deliberate decision."] }
      ]
    },
    baufelder: {
      title: "Ground layers & building fields",
      summary: "In 1950 the districts are empty. The generator divides each district into ~9 equal building fields; the player has them released and builds on them.",
      sections: [
        { h: "Start", items: ["Districts without old buildings (fairness).", "Ring and main arteries belong to the city.", "No field is free at the start – everyone chooses for themselves."] },
        { h: "Layers", items: ["Meadow/forest (not yet free) → coastal strip (never buildable) → released building field (lawn) → lot."] }
      ]
    }
  },

  decisions: {
    "Bezirksrat stimmt nur über Programme und Sonderprojekte ab (#47 Q1)": { title: "District council votes only on programmes and special projects (#47 Q1)", why: "User 11 Nov: otherwise every building would get slow. The district player keeps paying for public buildings from the district treasury." },
    "Drei dauerhafte Computer-Rivalen je Bezirk (#47 Q2)": { title: "Three permanent computer rivals per district (#47 Q2)", why: "User 11 Nov: 3 rivals run for the leader post, the player as the fourth; losers keep support, favour and memory – opponents with a history instead of names on a ballot." },
    "Feldfreigaben entscheidet der Bezirksrat statt des Bauausschusses (#47 Q3)": { title: "Field releases are decided by the district council instead of the building committee (#47 Q3)", why: "User 11 Nov: 3 of 5 district councillors; the island-wide three-member building committee goes away." },
    "Stadtkasse jetzt einbauen (#47 Q4)": { title: "Build the city treasury now (#47 Q4)", why: "User 11 Nov: an island treasury from a share of district taxes; the city council grants money from it to district programmes. What the game called \"city treasury\" so far becomes \"district treasury\"." },
    "Spieler können auch normale Bezirksratssitze gewinnen (#47 Q5)": { title: "Players can also win ordinary district council seats (#47 Q5)", why: "User 11 Nov: in the same election, not only the leader post." },
    "Nur zwei Bau-Ausnahmen brauchen eine Abstimmung (#47 Q6)": { title: "Only two building exceptions need a vote (#47 Q6)", why: "User 11 Nov: a tower above the district's height limit and industry closer than 150 m to houses; everything else builds as today without a vote." },
    "Kosten der Stadtprogramme richten sich nach den Einwohnern (#45)": { title: "City programme costs follow the number of residents (#45)", why: "User 11 Nov (\"Scale by population\"): before, every district paid the full amount and computer districts went bankrupt from ~1960. Now a factor by residents (0.1 to 3)." },
    "Eine Main-Session orchestriert, drei Kanban-Sessions arbeiten das Board ab": { title: "One Main session orchestrates, three Kanban sessions work the board", why: "User 10 Nov: Main grants EDITOR/GAME slots (at most one host+client pair on the PC, GPU crash with four instances), forwards bugs to the owning session and builds/publishes patches only after asking; Kanban sessions commit only their own files and report \"ready for patch\"." },
    "Online über Epic Online Services mit Raumcode statt Portfreigabe oder eigenem fly.io-Relay": { title: "Online through Epic Online Services with a room code instead of port forwarding or an own fly.io relay", why: "User 09 Nov: friends should join without anything technical. An own relay (like fly.io in Starhunter) would have to carry all game traffic and costs upkeep; EOS is free, already in Unreal as a net driver and handles NAT punch-through and relay. Steam stays possible later by config, LAN/IP stays for the home network." },
    "Ratsabstimmung jedes Quartal statt nur im Dezember; Antrag braucht zwei Monate Vorlauf": { title: "Council vote every quarter instead of only in December; a proposal needs two months' notice", why: "Claude on the night shift: a year of waiting per vote would have run the loop agenda → War Room → Roll Call → debrief too rarely. Four sessions a year give four moments of tension, the two months' notice give every campaign time to work. Crisis laws come up at the next session." },
    "Verborgene Sitz-Werte werden nur durch Fixer, Umfrage oder einen Handel bekannt": { title: "Hidden seat values become known only through a fixer, a poll or a deal", why: "Claude: pet issue, price, fear and honesty of every seat are random per game (seed). The outlook in the War Room shows them as \"?\" and widens the range – that is the discovery loop from Mad Games Tycoon 2; a fixer on the staff reads a seat for 3 k$, a poll of the district reveals its seat's issue, a paid envelope the price." },
    "Roll-Call-Szene nur bei eigenem Einsatz und in der Wahlnacht; sonst eine Zeile": { title: "Roll Call scene only with your own stake and on election night; otherwise one line", why: "Claude: four votes a year with up to five bills – a scene for each would be the clutter the user does not want. Your own bill, campaign, envelope, lobbying, candidacy or your own seat = scene; everything else one line (toast/newspaper). Space reveals all." },
    "Zeitband: Heute links, die Zukunft kommt von rechts herein": { title: "Time strip: today at the left, the future comes in from the right", why: "The user's answer to the open question of the campaign concept: variant B. The strip stays under the cards across the full width, the clock card at the top right shows date and calendar. The variant “strip runs into the clock” is dropped; the mock-up in the concept has been redrawn." },
    "War Room angenommen; Stab über einen Arbeitsmarkt wie Angestellte in Mad Games Tycoon": { title: "War Room accepted; staff via a job market like employees in Mad Games Tycoon", why: "User 09 Nov: “I think the War Room is great.” For the staff (campaign manager, pollster, fixer …) the employee principle applies, which was considered at the very beginning: the better the people, the better the results; a job market with many average ones and now and then a good one – whoever snatches them first has them. Roles, stars, quarterly market and poaching are a proposal in the compendium." },
    "Medien-Technik wird erforscht wie in Mad Games Tycoon: erst verfügbar, dann selbst erforschen": { title: "Media technology is researched as in Mad Games Tycoon: first available, then researched yourself", why: "User 09 Nov: development over the years is cool; perhaps you have to research things yourself as in MGT2 with your own research department – in the media too. Proposal: the city's licence bill makes a channel available, your own research desk with researchers unlocks it (research points and money), methods likewise." },
    "Handel und Verträge kommen später; festgehalten ist das Prinzip der gegenseitigen Abhängigkeit der Bezirke": { title: "Trade and contracts come later; the principle of the districts' interdependence is recorded", why: "User 09 Nov: trading would be cool (first by truck over the bridge, later via a harbor – you first have to reach the sea), contracts with NPCs and players too, but that is more complex and is put back. Recorded: no district is like another – residential districts supply workers, industry supplies products needed elsewhere, everyone depends a little on everyone." },
    "Der Spieler ist ein Tycoon mit vielen Wegen zum Reichtum, der sein Geld in Politik und Medien steckt": { title: "The player is a tycoon with many roads to wealth who pours his money into politics and media", why: "User 09 Nov: the model is the tech billionaires – rich through cars and rockets, a trading house or a social-media empire. There must be many ways to make money; in the end you want to be the guy who has a lot of money and puts it into politics and media to reach his goals. Recorded in the compendium as eight roads (landlord, industrialist, energy baron, merchant, banker, media mogul, host, contractor)." },
    "Der Anfang als kleines Licht: der Rat entscheidet ohne einen, erst mit Geld dreht man es später": { title: "The opening as a small light: the council decides without you, only with money do you turn it later", why: "The user's question whether unimportant or important decisions are made at the start – his inclination: important ones that you notice like a small tutorial and have to live with until you have the money to change them in your favour. Recorded as a direction; proposal: three acts (small light 1950–54, player, tycoon), early laws important but reversible, soft thresholds instead of unlocks." },
    "Erst der Scope für alle drei Bereiche (Kompendium 1950–2030), dann die Wege dorthin": { title: "First the scope for all three areas (compendium 1950–2030), then the paths there", why: "User 09 Nov: first a complete list 1950–2030 – which laws can exist, how they are initiated, how often elections are held, who sits on the council; the same for media and economy – so it is clear what the elections are about and what should be feasible. Then the implementation, starting with the political and media timeline." },
    "Das politische und mediale Geschehen bekommt eine zentrale Agenda, mit der Uhr verbunden – kein Ticker am Rand": { title: "Politics and media get a central agenda, tied to the clock – no ticker at the edge", why: "The user (09 Nov): elections, dates, contents and time left must be one of the central areas of the game; he would simply miss the small City News lines while building. The six presentation proposals from the main window (agenda bar, front page instead of ticker, war room before votes, watchlist, camp barometer, three alert levels) are all accepted, without creating too much clutter; the agenda belongs to the clock/calendar at the top right but must be big and central. Its form (a time strip running into the clock) is a proposal." },
    "Kampagnen werden wie Spiele in Mad Games Tycoon 2 eingestellt: viele Stellschrauben, verborgene Passung, zweiter Anlauf – für Politik und Medien": { title: "Campaigns are set up like games in Mad Games Tycoon 2: many settings, hidden fit, second attempt – for politics and media", why: "The user (09 Nov): in MGT2 you spend a long time setting up your game (topic, sub-genre, technology) and only find out afterwards which values work – that was fun and should apply to campaigns here: back or fund a puppet, pick the bill(s), give them values, steer hearings; if it fails the first time, find out why and adjust. The same for media campaigns against candidates, fellow players or NPCs or for a boom: stories with values, explore the districts' mood, place ads. Technology develops across the decades (no internet in 1950)." },
    "Abstimmungen als Szene: Sitz für Sitz enthüllt wie die Richter in Die Fugger II": { title: "Votes as a scene: revealed seat by seat like the judges in Die Fugger II", why: "The user (09 Nov): the most exciting part of Die Fugger II was that after influencing people the vote took place and the judges gave their verdict one after another – a majority was needed, often 1:1 after two, the third decided. That is how the Roll Call should run here (committee 3, council 9, election night district by district); order, pauses and casting vote are a proposal." },
    "Bezirke wachsen vom Zentrum nach außen: erst Feld 1, dann nur Nachbarfelder, Straßen immer angeschlossen": { title: "Districts grow outward from the centre: Field 1 first, then only neighbouring fields, roads always connected", why: "The user's rule: no roads floating free, cars must be able to drive to the ring. The first field is Field 1 at the centre, every further one must border a released field of the same district, and every road starts or ends on an existing one. Tried first in the “full island” performance test, then adopted as a real rule for players and NPCs (checked by the server)." },
    "Simulation als Daten im GameState, Darstellung baut jeder Client aus den Daten nach": { title: "Simulation as data in the GameState, every client rebuilds the visuals from the data", why: "Claude's decision (brief: decide yourself), following the user's rules file: the simulation knows no actors, only records; so the monthly tick stays cheap, the game state replicates by itself, and the visuals can later move to instances without touching the rules." },
    "Multiplayer als Listen-Server im laufenden Level, Beitritt per IP": { title: "Multiplayer as a listen server in the running level, join by IP", why: "The simplest way without online services: the host opens port 7777 in the running world (no reload, the island stays), clients get the same seed and build the island themselves. Lobby with district choice, the host starts, NPCs fill the free districts." },
    "Erstes Baufeld frei, jedes weitere per Anhörung; NPC-Bauten ohne Straße im Raster": { title: "First building field free, every further one by hearing; NPC buildings without a road in the grid", why: "So that every game starts right away (founding release) and the committee still counts from the beginning. NPCs do not build roads yet; their buildings stand in the node grid around the field centre – visible, cheap, later replaceable by real NPC roads." },
    "Wertung am Endjahr aus allen vier Kapitalien plus Gebäudewert und Einwohnern": { title: "Scoring at the end year from all four capitals plus building value and residents", why: "In the first test whoever did nothing won (the starting money stayed untouched). So 70 % of the building costs count as wealth, plus influence, reputation, residents and land value, heat subtracts. The weighting is a starting value." },
    "Machtdreieck angenommen: Startzahlen Stück für Stück abstimmen, „Die Spitze zieht Blicke an“ wird ausprobiert": { title: "Triangle of power accepted: tune the starting numbers step by step, “the leader draws attention” will be tried out", why: "The user's review on 05 Nov: the numbers fit as starting values and are adjusted in the game rather than on the drawing board; whether the leader should really accrue heat 50 % faster is only shown by the play test. With that the concept is the working basis for the monthly-tick prototype (V1)." },
    "Politik und Medien gleich stark, die Wirtschaft als dritte Kraft im Hintergrund": { title: "Politics and media equally strong, the economy as the third force in the background", why: "The user wants a cycle in balance: politics and media should be able to influence each other heavily without either side becoming too complex or too heavy; the district economy pays for both (envelopes, campaigns), is steered by both and feeds back. From this the triangle of power with heat as the brake." },
    "Politik-Menü: Kandidaten, Gesetze, Anhörungen, Abstimmungen, Bestechung – Medien-Menü: Sender, Berichte, Kampagnen, Recherchen, Werbung": { title: "Politics menu: candidates, bills, hearings, votes, bribes – Media menu: outlets, stories, campaigns, investigations, ads", why: "The user's brief for the submenus (ring 2 of the radial menu). Tenders as a sixth Politics entry: Claude's proposal, confirmed by the user on 05 Nov – under Politics, not under Finances." },
    "Gebäude-Autopilot: alle Epochen bis 2030 ohne Zwischenfragen": { title: "Building autopilot: all eras up to 2030 without questions in between", why: "The pipeline ran without errors; the user doesn't want to trigger every step personally. Claude researches on the web, writes the image prompt, has the reference sheet generated via ChatGPT (Codex), builds, imports and commits. The user reviews afterwards here in the journal. From 2010 on, towers may grow more (2010 +3…+8, 2030 +4…+12 floors, up to ~150 m) so that a real skyline emerges by 2030." },
    "Zentrum startet nur mit 1950ern; Hochhäuser zweimal sanierbar (1950 → 1970 → 1990)": { title: "City centre starts with 1950s only; towers can be renovated twice (1950 → 1970 → 1990)", why: "The city should visibly age and modernize over the decades; newer versions only appear via the construction site. 1–2 hospitals per city, occasional cafés." },
    "Zentrum: Stadt darf 2 oder 4 Grundstücke zusammenlegen": { title: "City centre: the city may merge 2 or 4 plots", why: "1950s footprints are too small for really big towers; the city modernizes itself, players still don't build there." },
    "Erst Konzept, dann bauen": { title: "Concept first, then build", why: "The economic system carries the whole game; UI and politics/media depend on it." },
    "Layout: Status oben, Bauen unten, Panel am Objekt": { title: "Layout: status at the top, building at the bottom, panel at the object", why: "Almost all city builders use this trio; players know it." },
    "Höhendeckel für Spieler unter den Wolken": { title: "Height cap for players below the clouds", why: "The cloud layer should stay scenery; admins without a cap." },
    "Alles Selbstproduzierbare ist bei der Stadt kaufbar – teurer": { title: "Everything you can produce yourself can be bought from the city – at a higher price", why: "Nobody gets stuck, but own production and contracts pay off." },
    "Gebäude werden saniert, nicht ersetzt": { title: "Buildings are renovated, not replaced", why: "The city stays recognizable over the decades; visible construction sites instead of swapping." },
    "Passanten als eigenes C++-System statt Mass/ZoneGraph": { title: "Pedestrians as an own C++ system instead of Mass/ZoneGraph", why: "The city is only created at runtime." },
    "Innenstadt als gerades Raster mit Hochhäusern aus dem Seed": { title: "City centre as a straight grid with towers from the seed", why: "Contrast to the organic island; players don't build there." },
    "Kein Startfeld je Bezirk – jeder wählt selbst": { title: "No starting field per district – everyone chooses for themselves", why: "The player's first strategic decision." },
    "Rechenkerne in C++": { title: "Compute kernels in C++", why: "Blueprint was too slow for island shape, fields and mesh (stutters of several seconds)." },
    "Insel aus dem Seed statt aus der Karte": { title: "Island from a seed instead of the map", why: "Every game its own island; the map island stays a prototype." },
    "Neuaufbau in Unreal 5.8, Steuerung per MCP": { title: "Rebuild in Unreal 5.8, controlled via MCP", why: "The predecessor (PCG/CitySample) was too hard to control." }
  },

  ideas: {
    "Pressekonferenz im eigenen Bezirksamt": { title: "Press conference in your own district office", text: "Answering a crisis with an apology or a denial while you hold the seat and the district office is built counts as a press conference: a bit more reputation back. Ties services (#42) to the crisis room (#46)." },
    "Journalismus-Fakultät an der Universität": { title: "Journalism faculty at the university", text: "A university in the district brings one better applicant per quarter for reporters, editors and researchers – media districts get a reason to build one." },
    "Titelseite für Wendepunkte": { title: "Front page for turning points", text: "When a bill with your stake falls, a crisis begins or a rival wins a seat, a big newspaper front page appears instead of the toast line – headline, picture of the council and a button into the War Room – the third alert level from the campaign concept.", source: "Night shift 09 Nov" },
    "Wahlnacht Bezirk für Bezirk mit Hochrechnung": { title: "Election night district by district with projections", text: "Election night today shows the winner per office. More exciting: first projections with a range, then the count district by district, your own district last – like the Roll Call, only with percentages.", source: "Night shift 09 Nov" },
    "Gesetze zurücknehmen als Kampagnenziel": { title: "Repealing laws as a campaign goal", text: "Every law of the early years can come back onto the agenda for repeal later – “Repeal the 1955 Smoke ordinance” as a typical goal once you have money and a seat. That turns the opening into a tutorial without tutorial texts." },
    "Bürgerbegehren als vierte Gesetzesquelle": { title: "Citizens' initiatives as the fourth source of laws", text: "From the Referendum Act 1970, citizens' groups put laws to a special vote of the voters when satisfaction on an issue drops low – “Stop the power plant” against the energy baron." },
    "TV-Debatte vor jeder Wahl ab 1960": { title: "TV debate before every election from 1960", text: "A fixed media date: the puppet appears, the candidate's skill plus the spin doctor decide ±5 reputation – a small Roll Call event before election night." },
    "Abgeworbene Reporter nehmen ihr Dossier mit": { title: "Poached reporters take their dossier along", text: "Whoever poaches a rival's investigative reporter with +30 % salary gets his unfinished investigation – leverage included." },
    "Wahlabend Bezirk für Bezirk": { title: "Election night district by district", text: "At elections the districts report one after another (smallest first), running total, “projected” from 70 % counted, your own bets highlighted – the Roll Call tension for elections." },
    "Playbook: gelernte Stimmungen als Karten": { title: "Playbook: learned moods as cards", text: "Every insight from polls, focus groups and debriefs becomes a card with district, era and date; cards age with the era. The player knowledge from Mad Games Tycoon 2 – in the game instead of a wiki." },
    "Stab: Wahlkampfmanager, Pollster, Spin Doctor, Fixer": { title: "Staff: campaign manager, pollster, spin doctor, fixer", text: "People with a skill that sharpen the outlook, make channels cheaper or tricks quieter – like employees in MGT2. Open whether the complexity is worth it." },
    "Boom-Kampagne für den Bezirk": { title: "Boom campaign for the district", text: "The economy as a campaign goal: image + ads for your own district → immigration, land value, hotels. Simple version first; whether contracts and goods become a mini-game of their own is open." },
    "NPC-Straßen und NPC-Lots": { title: "NPC roads and NPC lots", text: "NPC opponents only build in the grid around the field centre today. With roads of their own (planner from the player road building) their districts would look like player districts – and the player could later buy plots there." },
    "Gebäude-Instanzen statt Komponenten": { title: "Building instances instead of components", text: "Player buildings are drawn as static-mesh components per part; from a few thousand buildings one ISM per mesh (like the skyline) pays off, the data stays the same." },
    "Verträge zwischen Spielern": { title: "Contracts between players", text: "Buy power and goods from neighbours instead of dearly from the city – offer in the finance panel, term in months, cancellation as leverage." },
    "Ausschreibungen als Geldhebel": { title: "Tenders as a money lever", text: "City and districts award roads, clinic, power grid, renovation waves; procurement fair or discretionary – the biggest legal and illegal lever, bridge to the construction pillar." },
    "Verbände und Lobbys als NPC-Parteien": { title: "Lobbies as NPC parties", text: "Chamber of commerce, tenants' union, utilities lobby, from 1970 an environmental group: they stand behind votes and can be won over." },
    "Dossiers als Druckmittel": { title: "Dossiers as leverage", text: "Evidence from investigations as cards: publish, file charges or hold – a forced favor without money." },
    "Umfragen und Wahlversprechen": { title: "Polls and campaign promises", text: "Polls show where you stand before the date (expensive, can be manipulated); promises are tracked, broken ones are remembered by the media." },
    "Werbefläche aus Passantenzahlen": { title: "Ad space from pedestrian counts", text: "Billboards at busy junctions earn from the real pedestrian and traffic counts; construction tarps and skyline lettering are the first spaces." },
    "Journalisten sichtbar in der Stadt": { title: "Journalists visible in the city", text: "NPC reporters walk around as pedestrians, sit in the café, photograph your construction site – you can see that someone is digging." },
    "Epochen-Leitgesetz als Spielzug": { title: "The era's flagship bill as a move", text: "Reconstruction 1950, Energy Act 1973, privatisation 1990, Climate Act 2010: players can slow it down, speed it up or water it down – the era shift becomes playable." },
    "Video „Wie die Insel entstand“": { title: "Video “How the island came to be”", text: "Time-lapse from the timeline images and old states photographed afterwards." },
    "Zeitung als Spielmechanik": { title: "Newspaper as a game mechanic", text: "Whoever owns a newspaper steers public mood and investigations." },
    "Baustoff-Boom je Epoche": { title: "Building-material boom per era", text: "Every renovation wave (1965–75 …) drives demand for building materials – a chance for the building-materials district." },
    "Lagevorteile ausgleichen": { title: "Balancing location advantages", text: "Mountain → hydro power, coast → port/tourism, near the centre → offices. Every district gets at least two strengths." },
    "Bürgermeister spielbar?": { title: "Mayor playable?", text: "In the endgame a player could conquer the Centre of Power." },
    "Pendlerströme sichtbar machen": { title: "Making commuter flows visible", text: "Cars and pedestrians into the industrial districts in the morning, back in the evening." }
  },

  // short labels: areas, statuses, tags, idea sources
  terms: {
    "Gebäude": "Buildings", "Landschaft": "Landscape", "Menschen": "People", "Verkehr": "Traffic", "Doku": "Docs", "Konzept": "Concept",
    "Spiel": "Game", "Epochen": "Eras", "UI": "UI", "Wirtschaft": "Economy", "Stadt": "City", "Insel": "Island", "Technik": "Tech",
    "Rückblick": "Look back", "Lots": "Lots", "Straßen": "Roads",
    "Vorschlag": "Proposal", "Entschieden": "Decided", "entschieden": "decided", "Offen": "Open", "Recherche": "Research",
    "teils entschieden": "partly decided", "Layout entschieden": "layout decided",
    "User, 03.11.": "User, 03 Nov", "Ökosystem-Konzept": "Ecosystem concept", "Machtdreieck-Konzept": "Triangle-of-power concept",
    "Spielbare Fassung V1": "Playable version V1", "Kampagnen-Konzept": "Campaign concept", "Kompendium 1950–2030": "Compendium 1950–2030", "Konzepte 11.11.": "Concepts 11 Nov"
  }
};
