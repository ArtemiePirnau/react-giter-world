import logo from "../../public/images/about-logo.png";
import building from "../../public/images/building.svg";
import square from "../../public/images/square.svg";
import cosmetic from "../../public/images/cosmetic.svg";

import { createSlice } from "@reduxjs/toolkit";

const servicesItemsReducer = createSlice({
  name: "servicesItems",
  initialState: {
    servicesItems: [
      {
        id: 0,
        icon: logo,
        title: "Основной акцент деятельности компании",
        subtitle: "Парфюмерия",
        text: "С 2013 года мы создаем парфюмерию и косметику с душой. Потому, что верим – красота спасёт мир! И каждый наш клиент достоин самого лучшего качества товаров и безупречного сервиса, где бы он ни находился. Мы выпускаем первоклассные продукты, доступные каждому. Нам важно дарить радость и менять к лучшему жизнь своих покупателей, поэтому компания постоянно обновляет ассортимент своей продукции. Вот уже много лет неизменный девиз нашей команды – «Роскошь на каждый день».Бережно подобранное экологически чистое сырье и новейшие технологии – залог качества всех наших продуктов. Многоступенчатый контроль, слаженная команда парфюмеров и технологов, ответственный подход к каждому из этапов. Соответствие строгим стандартам мировой сертификации и критериям безопасности.Качество, современность, экологичность и лучшие партнёры — так можно охарактеризовать принципы нашей работы. Пока все ищут безупречное качество, мы его производим.",
      },
      {
        id: 1,
        icon: building,
        title: "Ароматы ",
        subtitle: "Наши ароматы производятся на известных парфюмерных фабриках",
        text: "Компания Concept Aromatique основана в 1994 году как семейный бизнес в долине Грасса, Прованс, Франция. Сегодня, генеральный директор компании Frederic De Los Rios. Парфюмерная лаборатория и производственные мощности Concept Aromatique сосредоточены во Франции, в городе Montauroux (Монторо, Прованс).За 25 лет работы Concept Aromatique заработала репутацию надежного производителя и ответственного бизнес-партнера. Компания обеспечивает строгий многоступенчатый контроль качества готовой продукции и высокий уровень исходного сырья. Вся продукция Concept Aromatique обладает международными сертификатами качества.Кредо компании: Мы создаем духи с душой!",
      },
      {
        id: 2,
        icon: square,
        title: "Продукты ",
        subtitle:
          "Конечный продукт разливается и упаковывается на фабрике Fon Cosmetics в Стамбуле (Турция).",
        text: "Fon Cosmetic — одна из ведущих компаний производителей парфюмерии и косметики. расположенная в Стамбуле с 1985 года.Располагается на площади 10 000м². Компания экспортирует свою продукцию в более, чем 50стран мира.Fon Cosmetics производит высококачественные, инновационные, экологически чистые продукты, используя передовые технологии и современный подход.",
      },
      {
        id: 3,
        icon: cosmetic,
        title: "Производство ",
        subtitle: "Производство косметической линии Diana Giter.",
        text: "Косметическая линия Diana Giter разработана и производится Лабораторией «Живая Косметика» эксклюзивно для Indigo Holding. Лаборатория «Живая косметика» является частью научно производственного объединения ТЕХКОН, известного производителя биологически активных ингредиентов для косметической и фармацевтической промышленностей.НПО «Техкон» с 1975 года, занимается разработкой технологий по выделению БАВ из природных источников и производством высококачественных косметических продуктов. Современный ТЕХКОН является известным производителем натуральных ингредиентов, которые используют в своих изделиях более 70 российских и зарубежных косметических и фармацевтических компаний.",
      },
    ],
  },
  reducers: {},
});

export default servicesItemsReducer.reducer;
