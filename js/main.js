//Animation Effect after scroll
const nav = document.querySelector("nav");
const hamburger = document.querySelector("#hamburger-icon i");

const addNavEffect = () => {
  if (window.pageYOffset >= 137) {
    nav.classList.add("slideNav");
    hamburger.classList.add("scrollHamburger");
  } else {
    nav.classList.remove("slideNav");
    hamburger.classList.remove("scrollHamburger");
  }
};

window.addEventListener("scroll", addNavEffect);

//Show offer details
const offerBtn = [...document.querySelectorAll("#offer .offerBtn")];
const offerTitle = document.getElementById("offerTitle");
const offerDesc = document.getElementById("offerDesc");

const offer = [
  {
    title: "Kupony Rabatowe",
    desc:
      "Prowadzę sprzedaż kart okolicznościowych na zabiegi, które mogą być doskonałym prezentem np.urodzinowym."
  },
  {
    title: "10% zniżki za 10 zabiegów",
    desc:
      "Jeżeli wykupisz 10 zabiegów to dostaniesz na nie dodatkowo 10% zniżki."
  },
  {
    title: "Leczenie metodą PNF",
    desc:
      "PNF jest metodą dedykowaną przywracaniu utraconej funkcji. Program rehabilitacji, ustalany jest na podstawie badania i dobierany jest indywidualnie do aktualnych możliwości pacjenta. Posiadam bogaty wachlarz technik, umożliwiających dobranie możliwie efektywnej formy ćwiczeń. Metoda PNF to pewien ogół zasad pracy z pacjentem, który umożliwia efektywne osiągnięcie celu- powrotu do zdrowia."
  },
  {
    title: "Porada Fizjoterapeutyczna",
    desc:
      "Wywiad z pacjentem i dobranie odpowiednich zabiegów i ćwiczeń. Porady są bezpłatne."
  },
  {
    title: "Taping",
    desc:
      "System taśm stosowanych w sporcie i rehabilitacji,zapewniając maksimum komfortu.Poprawiają krążenie krwi,zmniejszają dolegliwości bólowe,stany zapalne,obrzęki,zapobiegają naciągnięciu lub sztywności mięśni."
  },
  {
    title: "Zdrowe stopy",
    desc: "Badanie stopy i dopasowanie wkładek firmy 'Vasil'"
  },
  {
    title: "Wkładki",
    desc:
      "Wkładki dopasowane indywidualnie do stopy.Zadbaj o swoich bliskich i zrób im prezent np. kupując wkładkę."
  },
  {
    title: "Pedicure leczniczy",
    desc:
      "Zabieg oczyszczający paznokcie i podeszwy stóp z modzeli i nagniotków.Porada na temat pielęgnacji paznokci i zapobieganiu szybkiemu narastaniu twardego naskórka."
  }
];

const setOffer = index => {
  const title = offer[index].title;
  const desc = offer[index].desc;
  offerTitle.textContent = title;
  offerDesc.textContent = desc;
};

offerBtn.forEach((btn, index) => {
  btn.addEventListener("click", setOffer.bind(this, index));
});

//Show/Hide Hamburger
const closeNavBtn = document.getElementById("closeNav");
const mobileMenu = document.querySelector(".mobile");

const showMenu = () => {
  mobileMenu.style.display = "block";
};

const hideMenu = () => {
  mobileMenu.style.display = "none";
};

hamburger.addEventListener("click", showMenu);
closeNavBtn.addEventListener("click", hideMenu);

//Show treatments Details
const treatBtn = [...document.querySelectorAll(".treatBtn")];
const treatTitle = document.getElementById("treatTitle");
const treatDesc = document.getElementById("treatDesc");

const treat = [
  {
    title: "Bepłatne badanie stóp",
    desc:
      "Objawia się obrzękiem i bolesnym wykrzywieniem stawu śródstopno-paliczkowego palucha.Jest to deformacja często spowodowana chodzeniem w waskich(zwężających się z przodu)butach i w szpilkach.Halluxy mogą występować rodzinnie ,ale wiele jest spowodowanych wąskimi butami.9 na 10 występuje u kobiet ubiera za wąskie buty."
  },
  {
    title: "Ćwiczenia korekcyjne",
    desc:
      "Ćwiczenia korekcyjne mają na celu likwidację wady lub zahamowanie jej dalszego rozwoju, a tym samym przywrócenie prawidłowej postawy ciała."
  },
  {
    title: "Dobieranie odpowiedniej władki ortopedyczne",
    desc:
      "Badanie i dobór wkładek ortopedycznych firmy Vasil,a także zlecenie odpowiednich ćwiczeń odpowiednich pod jednostkę chorobową np.płaskostopie, płaskostopie podłużne, poprzeczne, koślawość i szpotawość kolan."
  },
  {
    title: "Drenaż limfatyczny kończyn dolnych",
    desc:
      "Leczniczy masaż pompująco-ugniatający, który usprawnia działanie limfy. Limfa pełni istotną rolę w mechanizmie obronnym organizmu. Drenaż limfatyczny ma też za zadanie likwidować obrzęki zastoinowe (zwłaszcza nóg, np. żylaki, cellulit), usuwać zbędne produkty przemiany materii, a także oczyszczać cały organizm.Większe efekty przy zastosowaniu preparatów z Forever Clean 9(w sprzedaży)."
  },
  {
    title: "Freedom-forever",
    desc:
      "Jest to super produkt przeznaczony dla wszystkich,którzy pragną zachować sprawność ruchową przez długie lata.Pomaga pielęgnować młodzieńczą elastyczność stawów i więzadeł niezależnie od wieku.Pomocny zapobieganiu kontuzjom sportowym.Zawiera substancje naturalnie występujące w stawach.Źródło biosiarki.1litr"
  },
  {
    title: "Klamra metalowa na wrastający paznokieć",
    desc:
      "Klamry metalowe bardzo sprawdzają się przy wrastających paznokciach.Po założeniu klamry efekt jest natychmiastowy,ponieważ klamra metalowa wyprowadza paznokieć z wału paznokciowego,przez co likwiduje ból.Paznokieć po odpowiedniej pielęgnacji rośnie bez zmian deformacji.Polecam,ponieważ obywa się bez interwecji lekarza."
  },
  {
    title: "Koloroterapia",
    desc:
      "Koloroterapia pomaga w niwelowaniu problemów, z którymi boryka sie każdy organizm człowieka. Każda barwa posiada specyficzne właściwości zarówno psychologiczne, intuicyjne czy witalne, jak i lecznicze. Działaniem kolorów można stymulować krążenie, dotleniać organizm, niszczyć bakterie i wirusy, podwyższać lub obniżać ciśnienie krwi, rozszerzać lub zwężać naczynia krwionośne, regulować przemiane materii, aktywizować układ immunologiczny, a nawet poprawia prace mózgu. Co wiecej, za pomocą światłoterapii, niekoniecznie kolorowej, można zwalczyć wieczorny wilczy apetyt i cheć picia alkoholu. Liczba seansów zależy od tego jak bardzo usiłujemy poprawić sylwetkę. Niektórym łasuchom potrzeba codziennych seansów. Innym wystarczy jeden na dwa dni, i średnio do 12 tygodni"
  },
  {
    title: "Kuracja antycellulitowa",
    desc:
      "Zadaniem masażu jest rozbicie podskórnej tkanki tłuszczowej, usunięcie toksyn z organizmu, polepszenie ukrwienia skóry i mięśni – przyspieszenie przemiany materii. Masaż przeplatany masażem drenująco-odprężającym, dającym uczucie lekkości, sprawdza się przy obrzękach oraz uczuciu ciężkich nóg przy zabużeniach krążeniowo-naczyniowych. Ma walory lecznicze oraz poprawiający wygląd."
  },
  {
    title: "Masaż bańką chińską",
    desc:
      "Zadaniem masażu jest rozbicie podskórnej tkanki tłuszczowej, usunięcie toksyn z organizmu, polepszenie ukrwienia skóry i mięśni – przyspieszenie przemiany materii.Większe efekty uzyskamy przy użyciu preparatów firmy forever już u nas w sprzedaży.Pragniesz mieć piękne ciało szybko i bez wysiłku? Umów się na masaż prózniowy. Bańka chińska zapewni ci: szupłe uda, jędrne pośladki, jędrne pośladki."
  },
  {
    title: "Masaż kamieniami bazaltowymi",
    desc:
      "Masaż gorącymi kamieniami ma działanie relaksacyjne, witalizujące i lecznicze na cały organizm, doskonale likwiduje wszelkie spięcia i bóle mięśni, zwłaszcza po długim wysiłku fizycznym. Połączenie ciepłych kamieni bazaltowych z odpowiednimi technikami masażu relaksacyjnego, masażu limfatycznego i akupresury jest zbawienne dla zmęczonego, zestresowanego ciała i umysłu współczesnego człowieka, relaksując i regenerując całe ciało i umysł. Zastosowanie wyjątkowego ciepła kamieni poprawia krążenie i metabolizm, oczyszcza organizm z toksyn. Cele masażu: ogólne rozluźnienie, duże przekrwienie miejscowe i ogólne, podniesienie podstawowej przemiany materii, ogólne oczyszczenie organizmu, zwiększenie procesów wymiany tkankowej,podniesienie progu odczuwania bólu."
  },
  {
    title: "Masaż klasyczny całego ciała",
    desc:
      "Masaż klasyczny jest formą oddziaływania mechanicznego poprzez głaskanie, wyciskanie, rozcieranie, oklepywanie oraz uciski, które wywierają wpływ na skóre, mieśnie i narządy wewnetrzne. Wymienione bodźce wywołują naturalne odczyny fizjologiczne pobudzając układ krwionośny i chłonny, oddechowy, relaksując układ nerwowy w konsekwencji wspomaga przemiane materii oraz wydajność organizmu."
  },
  {
    title: "Masaż kregosłupa leczniczy",
    desc:
      "Miejscem szczególnie narażonym na powstanie zmian zwyrodnieniowych przez przez przeciążenia jest okolica ledźwiowo-krzyżowa kregosłupa. Zmiany te powodują nacisk na korzenie nerwowe wychodzące z rdzenia kregowego. Celem masażu jest rozluźnienie mieśni przykregosłupowych oraz aparatu wiezadłowego i przywrócenie prawidłowego ich napiecia. Ból może być objawem zapaleń, nacisków na nerwy bądź objawowo chorób nerek. Doraźnie zalecany masaż nie może być wykonywany bez konsultacji z lekarzem i dokładnym zdiagnozowaniu przyczyny bólu."
  },
  {
    title: "Masaż odchudzający głęboki",
    desc:
      "Masaż odchudzający wspomaga właściwą kuracje do redukcji nadwagi. Daje dobre efekty w połączeniu z dietą i odpowiednio dobranymi ćwiczeniami. Polega on na rozbijaniu tkanki tłuszczowej i podwyższaniu przemiany materii. W masowanych okolicach wpływa on na zmianę konsystencji i przyspiesza spalanie tłuszczu w organizmie. Jest on wykonywany z większą siłą niż masaż klasyczny (na granicy bolesności) i w szybkim tempie. Można go stosować co drugi dzień."
  },
  {
    title: "Masaż relaksacyjny",
    desc:
      "Masaż relaksacyjny stosowany jest w przypadkach przemeczenia (apatii) pacjenta. Dla osób chcących osiągnąć głeboki relaks po długich stanach stresu bądź wysiłku fizycznego, muszą przeznaczyć dłuższy czas w zależności na ile były poddane długotrwałemu stanowi napiecia."
  },
  {
    title: "masaż z maską czekoladową",
    desc:
      "Masaż relaksujący połączony z olejkami eterycznymi z przepiękną nutą zapachową. Masaż całego ciała wraz z masażem twarzy i maską czekoladową.Zabieg głęboko relaksujący."
  },
  {
    title: "Masaż z peelingiem",
    desc:
      "Peelingi całego ciała to najszybsza metoda uzyskania zdrowej, niezwykle gładkiej, zadbanej i pachnącej skóry. Masaże peelingujące głęboko oczyszczają skórę, usuwają martwy naskórek, pobudzają krążenie krwi. Odbudowują strukturę skóry. Skutecznie wspomagają odchudzanie. Dodatkowo odżywiają i nawilżają skórę, łagodzą podrażnienia. Działają silnie przeciwrodnikowo. Masaż z peelingiem potęguje efekty, przyspiesza i utrwala zmiany."
  },
  {
    title: "Peclavus-special",
    desc:
      "Skoncentrowany płyn do profesionalnej pielęgnacji skóry i paznokci,zapobiegania i zwalczania grzybicy.Pielęgnuje i poprawia wygląd skóry i paznokci Składniki aktywne:zawiera mikrosrebro,wyciąg z aloesu,gliceryna,olejek z drzewa herbacianego,olejek z lawendy,liść gożdzików,szałwii.20ml."
  },
  {
    title: "pedicure leczniczy",
    desc:
      "Przeprowadzenie całej pielęgnacji paznokci i stopy frezarka pyłochłonną."
  },
  {
    title: "Taping",
    desc:
      "Taping jest to system taśm stosowanych w sporcie i rehabilitacji. Zapewniają pacjentowi maksimum komfortu.Poprawiają krążenie krwi, zmniejszają dolegliwości bólowe, stany zapalne, obrzęki, zapobiegają naciągnięciu lub sztywności mięśni."
  },
  {
    title: "Voucher Walentykowy",
    desc:
      "Serdecznie Państwa zapraszamy do zakupu vocherów walentykowych na dowolny zabieg. Znakomity prezent dla bliskiej osoby."
  }
];

const setTreat = index => {
  treatTitle.textContent = treat[index].title;
  treatDesc.textContent = treat[index].desc;
};

treatBtn.forEach((btn, index) => {
  btn.addEventListener("click", setTreat.bind(this, index));
});

//Gallery
$(document).ready(function() {
  $("#lightgallery").lightGallery({
    controls: true
  });
});
