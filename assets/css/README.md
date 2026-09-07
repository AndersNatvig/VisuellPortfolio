# CSS-struktur

## Filansvar

- **main.css**: Felles designsystem. Typografi, farger, grunnoppsett, navigasjon, knapper, bokser, tabeller, kolonner og footer. Eksisterende regler for andre sider er beholdt.
- **home.css**: Kun oppsettet i index.html. Reglene er avgrenset med .home-page.
- **kommunikasjonsstrategi-npf.css**: Kun NPF-caset. Reglene er avgrenset med .npf-post.
- **four-columns.css**: Eksisterende variant for sider som trenger fire prosjektkolonner. Beholdes for kompatibilitet; brukes ikke av de to sidene ovenfor.
- **noscript.css**: Eksisterende reservevisning når JavaScript er deaktivert. Beholdes i noscript-elementet.
- **fontawesome-all.min.css**: Ikonbibliotek importert av main.css. Endres ikke som del av vanlig designarbeid.

## Lastrekkefølge

Landingssiden:

```html
<link rel="stylesheet" href="assets/css/main.css" />
<link rel="stylesheet" href="assets/css/home.css" />
<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
```

NPF-siden følger samme rekkefølge, med kommunikasjonsstrategi-npf.css som sidefil.

## Ved videre arbeid

1. Endre main.css når endringen skal gjelde det felles designsystemet. Kontroller også sider uten sidefil, for eksempel strategi.html, innhold.html og elements.html.
2. Legg sidens særskilte oppsett i sidefilen. Bruk en klasse på body eller sidens hovedartikkel for å avgrense reglene.
3. Ikke kopier hele main.css til en ny sidefil, og ikke legg nye style-blokker i HTML.
4. Opprett bare en sidefil når siden faktisk trenger overstyringer. Sider med samme oppsett kan dele en tilleggsfil.
5. Behold rekkefølgen på reglene og mediespørringene når CSS flyttes. Overstyringer lastes etter grunnlaget.
6. Relative url()-stier i CSS regnes fra CSS-filens mappe, ikke HTML-filen.
7. Kontroller smal og bred visning, navigasjon, lenker og lesbarhet ved designendringer.

## Denne oppryddingen

CSS fra de to HTML-filenes style-blokker er flyttet uten å endre deklarasjonene eller rekkefølgen. I main.css er en overskrevet kolonnebredde og en gjentatt fontstørrelse fjernet, og to tilstøtende regler for samme avsnittselektor samlet. Innhold, prosjektlenker og det avtalte designet er beholdt.
