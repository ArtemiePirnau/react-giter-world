import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
i18n
    .use(Backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            ru: {
                translation: {
                    // header component
                    mainpagelink: "Главная",
                    productspagelink: "Продукты",
                    aboutpagelink: "О нас",
                    contactspagelink: "Контакты",
                    cart: "Корзина",
                    // discover component
                    discovertitle: "Открой для себя любимый",
                    discoversubtitle: "Аромат",
                    discovertext: "Откройте для себя Giter - ведущий европейский бренд парфюмерии и косметики.Наши изысканные продукты, созданные ведущими производителями из Франции, Италии, Испании, Германии, Швейцарии и Турции, удивят вас своим качеством и доступной ценой.Присоединяйтесь к нашей инновационной команде и откройте для себя неограниченные возможности, которые дает Giter.",
                    // services component
                    servicestitle: "Услуги",
                    servicessubtitle: "Специализируется на",
                    servicesparfumetitle: "Парфюм",
                    servicesparfumetext: "Откройте для себя нашу парфюмерию: качественные ароматы без больших затрат.",
                    servicesmascaratitle: "Тушь для ресниц",
                    servicesmascaratext: "Откройте для себя нашу коллекцию туши для ресниц: качественные продукты без высоких цен.",
                    servicescreamtitle: "Тональный крем.",
                    servicescreamtext: "Откройте для себя нашу коллекцию тональных кремов: качественные продукты без высоких цен.",
                    // parfumery slider component
                    productsparfumerytitle: "Продукты",
                    productsparfumerysubtitle: "Парфюмерия",
                    // questions component
                    questionstitle: "Часто задаваемые вопросы",
                    questionssubtitle: "Вопросы",
                    questionsitemtitle1: "Чем занимается наша компания ?",
                    questionsitemtext1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,",
                    questionsitemtitle2: "Почему иммено Giter World ?",
                    questionsitemtext2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,",
                    // cosmetics component
                    cosmeticstitle: "Продукты",
                    cosmeticssubtitle: "Косметика",
                    // about component
                    abouttitle: "Больше информации",
                    aboutsubtitle: "О продуктах",
                    abouttext: "Наши изысканные продукты, созданные ведущими производителями из Франции, Италии, Испании, Германии, Швейцарии и Турции, удивят вас своим качеством и доступной ценой.Присоединяйтесь к нашей инновационной команде и откройте для себя неограниченные возможности, которые дает Giter.",
                    aboutitem1: "Качество",
                    aboutitem2: "Аромат",
                    aboutitem3: "Цена",
                    // catalog component
                    catalogtitle: "Все что хочешь",
                    catalogsubtitle: "Каталог",
                    cataloglabel: "Выбери свою судьбу",
                    cataloglink1: "Парфюмерия",
                    cataloglink2: "Косметика",
                    // services component
                    servicesitemtitle1: "Основной акцент деятельности компании",
                    servicesitemsubtitle1: "Парфюмерия",
                    servicesitemtext1: "С 2013 года мы создаем парфюмерию и косметику с душой. Потому, что верим – красота спасёт мир! И каждый наш клиент достоин самого лучшего качества товаров и безупречного сервиса, где бы он ни находился. Мы выпускаем первоклассные продукты, доступные каждому. Нам важно дарить радость и менять к лучшему жизнь своих покупателей, поэтому компания постоянно обновляет ассортимент своей продукции. Вот уже много лет неизменный девиз нашей команды – «Роскошь на каждый день».Бережно подобранное экологически чистое сырье и новейшие технологии – залог качества всех наших продуктов. Многоступенчатый контроль, слаженная команда парфюмеров и технологов, ответственный подход к каждому из этапов. Соответствие строгим стандартам мировой сертификации и критериям безопасности.Качество, современность, экологичность и лучшие партнёры — так можно охарактеризовать принципы нашей работы. Пока все ищут безупречное качество, мы его производим.",
                    servicesitemtitle2: "Ароматы",
                    servicesitemsubtitle2: "Наши ароматы производятся на известных парфюмерных фабриках",
                    servicesitemtext2: "Компания Concept Aromatique основана в 1994 году как семейный бизнес в долине Грасса, Прованс, Франция. Сегодня, генеральный директор компании Frederic De Los Rios. Парфюмерная лаборатория и производственные мощности Concept Aromatique сосредоточены во Франции, в городе Montauroux (Монторо, Прованс).За 25 лет работы Concept Aromatique заработала репутацию надежного производителя и ответственного бизнес-партнера. Компания обеспечивает строгий многоступенчатый контроль качества готовой продукции и высокий уровень исходного сырья. Вся продукция Concept Aromatique обладает международными сертификатами качества.Кредо компании: Мы создаем духи с душой!",
                    servicesitemtitle3: "Продукты",
                    servicesitemsubtitle3: "Конечный продукт разливается и упаковывается на фабрике Fon Cosmetics в Стамбуле (Турция).",
                    servicesitemtext3: "Fon Cosmetic — одна из ведущих компаний производителей парфюмерии и косметики. расположенная в Стамбуле с 1985 года.Располагается на площади 10 000м². Компания экспортирует свою продукцию в более, чем 50стран мира.Fon Cosmetics производит высококачественные, инновационные, экологически чистые продукты, используя передовые технологии и современный подход.",
                    servicesitemtitle4: "Производство",
                    servicesitemsubtitle4: "Производство косметической линии Diana Giter.",
                    servicesitemtext4: "Косметическая линия Diana Giter разработана и производится Лабораторией «Живая Косметика» эксклюзивно для Indigo Holding. Лаборатория «Живая косметика» является частью научно производственного объединения ТЕХКОН, известного производителя биологически активных ингредиентов для косметической и фармацевтической промышленностей.НПО «Техкон» с 1975 года, занимается разработкой технологий по выделению БАВ из природных источников и производством высококачественных косметических продуктов. Современный ТЕХКОН является известным производителем натуральных ингредиентов, которые используют в своих изделиях более 70 российских и зарубежных косметических и фармацевтических компаний.",
                    // contacts component
                    contactstitle: "Контакты",
                    contactssubtitle: "Напиши сообщение",
                    contactstext: "Напишите нам сообщение, как мы можем сделать эту платформу лучше. Напишите нам свое честное мнение об этой платформе.Главное, чтобы клиент был доволен!",
                    contactsname: "Имя",
                    contactsemail: "Почта",
                    contactsmessage: "Сообщение",
                    contactsbtn: "Отправить сообщение",
                    contactsaddress: "Адрес",
                    contactsaddresslabel: "*адрес должен быть здесь.",
                    contactsphone: "Телефон",
                }
            },
            ro: {
                translation: {
                    // header component
                    mainpagelink: "Principala",
                    productspagelink: "Produse",
                    aboutpagelink: "Despre noi",
                    contactspagelink: "Contacte",
                    cart: "Cos",
                    // discover component
                    discovertitle: "Descoperă-ți preferatul",
                    discoversubtitle: "Aromat",
                    discovertext: "Descoperiți Giter - marca europeană lider de parfumerie și cosmetice.Produsele noastre rafinate, create de producători de top din Franța, Italia, Spania, Germania, Elveția și Turcia, vă vor surprinde cu calitatea și prețul lor accesibil. Alăturați-vă echipei noastre inovatoare și descoperiți nelimitat caracteristici pe care le oferă Giter.",
                    // services component
                    servicestitle: "Servicii",
                    servicessubtitle: "Ne specializam in",
                    servicesparfumetitle: "Parfum",
                    servicesparfumetext: "Descoperiți parfumeria noastră: parfumuri de calitate fără costuri mari.",
                    servicesmascaratitle: "Rimel pentru gene",
                    servicesmascaratext: "Descoperiți colecția noastră de rimel: produse de calitate fără prețuri mari.",
                    servicescreamtitle: "Cremă tonală.",
                    servicescreamtext: "Descoperiți colecția noastră de creme tonale: produse de calitate fără prețuri mari.",
                    // parfumery slider component
                    productsparfumerytitle: "Produse",
                    productsparfumerysubtitle: "Parfumerie",
                    // questions component

                    questionstitle: "FAQ",
                    questionssubtitle: "Întrebări",
                    questionsitemtitle1: "Cu ce se ocupa compania noastra ?",
                    questionsitemtext1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,",
                    questionsitemtitle2: "De ce Giter World ?",
                    questionsitemtext2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,",
                    cosmeticstitle: "Produse",
                    cosmeticssubtitle: "Cosmetica",
                    abouttitle: "Informatie",
                    aboutsubtitle: "Despre produse",
                    abouttext: "Produsele noastre rafinate, create de producători de top din Franța, Italia, Spania, Germania, Elveția și Turcia, vă vor surprinde prin calitatea și prețul lor accesibil. Alăturați-vă echipei noastre inovatoare și descoperiți posibilitățile nelimitate pe care le oferă Giter.",
                    aboutitem1: "Calitate",
                    aboutitem2: "Aromă",
                    aboutitem3: "Preț",
                    // catalog component
                    catalogtitle: "Tot ce doresti",
                    catalogsubtitle: "Catalog",
                    cataloglabel: "Alege-ți soarta",
                    cataloglink1: "Parfumerie",
                    cataloglink2: "Produse cosmetice",
                    //services component
                    servicesitemtitle1: "Obiectivul principal al companiei",
                    servicesitemsubtitle1: "Parfumerie",
                    servicesitemtext1: "Din 2013, creăm parfumuri și cosmetice cu suflet. Pentru că credem că frumusețea va salva lumea! Și fiecare dintre clienții noștri merită cea mai bună calitate a mărfurilor și servicii impecabile, oriunde s-ar afla. Producem produse de primă clasă disponibile tuturor. Este important pentru noi să oferim bucurie și să schimbăm viețile clienților noștri în bine, astfel încât compania își actualizează în mod constant gama de produse. De mulți ani, motto-ul neschimbat al echipei noastre este „Lux pentru fiecare zi.” Materiile prime ecologice atent selectate și cele mai noi tehnologii sunt garanția calității tuturor produselor noastre. Control în mai multe etape, o echipă bine coordonată de parfumieri și tehnologi, o abordare responsabilă a fiecărei etape. Respectarea standardelor stricte de certificare mondială și criterii de siguranță.Calitate, modernitate, prietenos cu mediul și cei mai buni parteneri - așa putem caracteriza principiile muncii noastre. În timp ce toată lumea caută o calitate impecabilă, noi o producem.",
                    servicesitemtitle2: "Parfumuri",
                    servicesitemsubtitle2: "Parfumurile noastre sunt produse de renumite fabrici de parfumuri",
                    servicesitemtext2: "Concept Aromatique a fost fondată în 1994 ca o afacere de familie în Valea Grasse, Provence, Franța. Astăzi, CEO al Frederic De Los Rios. Laboratorul de parfumuri și unitățile de producție ale Concept Aromatique sunt concentrate în Franța, în orașul Montauroux (Montoro, Provence).De 25 de ani de funcționare, Concept Aromatique și-a câștigat reputația de producător de încredere și partener de afaceri responsabil. Compania asigură un control strict al calității în mai multe etape al produselor finite și un nivel ridicat de materii prime. Toate produsele Concept Aromatique au certificate internationale de calitate Credo-ul companiei: Cream parfumuri cu suflet!",
                    servicesitemtitle3: "Produse",
                    servicesitemsubtitle3: "Produsul final este îmbuteliat și ambalat la fabrica Fon Cosmetics din Istanbul, Turcia.",
                    servicesitemtext3: "Fon Cosmetic este una dintre cele mai importante companii de parfumerie și cosmetice. situat în Istanbul din 1985. Întins pe o suprafață de 10.000 m². Compania își exportă produsele în peste 50 de țări din întreaga lume.Fon Cosmetics produce produse de înaltă calitate, inovatoare, ecologice, folosind tehnologie avansată și o abordare modernă.",
                    servicesitemtitle4: "Productie",
                    servicesitemsubtitle4: "Productie linie cosmetica Diana Giter.",
                    servicesitemtext4: "Linia de cosmetice Diana Giter este dezvoltată și produsă de Living Cosmetics Laboratory exclusiv pentru Indigo Holding. Laboratorul „Live Cosmetics” face parte din asociația de cercetare și producție TEHKON, un cunoscut producător de ingrediente biologic active pentru industria cosmetică și farmaceutică. NPO „Techkon” din 1975, dezvoltă tehnologii pentru izolarea substanțelor biologic active din surse naturale și producerea de produse cosmetice de înaltă calitate. Modern TECHKON este un producător binecunoscut de ingrediente naturale, care sunt utilizate în produsele lor de peste 70 de companii cosmetice și farmaceutice ruse și străine..",
                    // contacts component
                    contactstitle: "Contacts",
                    contactssubtitle: "Scrie-ți un mesaj",
                    contactstext: "Trimite-ne un mesaj despre cum putem îmbunătăți această platformă. Scrie-ne părerea ta sinceră despre această platformă Principalul lucru este că clientul este mulțumit!",
                    contactsname: "Nume",
                    contactsemail: "Poșta electronică",
                    contactsmessage: "Mesaj",
                    contactsbtn: "Transmite mesaj",
                    contactsaddress: "Adresa",
                    contactsaddresslabel: "*adresa ar trebui să fie aici.",
                    contactsphone: "Telefon",
                }
            },
        },
        lng: "ru", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });