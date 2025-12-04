import { Button } from '@alfalab/core-components/button/cssm';
import { Collapse } from '@alfalab/core-components/collapse/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { List } from '@alfalab/core-components/list/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Steps } from '@alfalab/core-components/steps/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import { ChevronUpMIcon } from '@alfalab/icons-glyph/ChevronUpMIcon';
import { HandHeartMIcon } from '@alfalab/icons-glyph/HandHeartMIcon';
import { StarPointerMIcon } from '@alfalab/icons-glyph/StarPointerMIcon';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import adv1 from './assets/adv_1.png';
import adv2 from './assets/adv_2.png';
import adv3 from './assets/adv_3.png';
import adv4 from './assets/adv_4.png';
import hb from './assets/hb.png';
import pre1 from './assets/pre_1.png';
import pre2 from './assets/pre_2.png';
import pre3 from './assets/pre_3.png';
import { LS, LSKeys } from './ls';
import { TICKER_TO_IMAGE } from './stocks';
import { appSt } from './style.css';

import { BulbMIcon } from '@alfalab/icons-glyph/BulbMIcon';

const LINK = 'alfabank://longread?endpoint=v1/adviser/longreads/87469';

const advantages = [
  {
    img: adv1,
    title: 'Бесплатное обслуживание',
    desc: 'Навсегда и безусловий',
  },
  {
    img: adv3,
    title: 'До 3% кэшбэк на все покупки по карте',
    desc: 'Который автоматически инвестируется в фонд с доходностью 16% годовых',
  },
  {
    img: adv2,
    title: 'До 50% кэшбека на 4 категории каждый месяц',
    desc: 'В качестве категорий будут доступны 15 компаний, покупки в которых позволят получить кэшбек в виде акций на брокерский счет',
  },
  {
    img: adv4,
    title: 'Предсказуемые категории кэшбека каждый месяц',
    desc: 'Выбирайте из 15 компаний',
  },
];

const hiw = [
  {
    title: 'Открываете карту',
    desc: 'Стоимость открытия 199₽, далее бесплатно навсегда',
  },
  {
    title: 'Совершаете покупки по карте или стикеру',
    desc: 'С каждой покупки 2-3% будет инвестироваться в фонд. А также получаете до 100% кэшбеком от покупок акциями компаний, торгующихся на москвоской бирже.',
  },
  {
    title: 'Назаметно формируете накопления',
    desc: 'На разные цели, без сложностей.',
  },
];

const items = [
  {
    title: 'Когда хочется начать копить',
    IconComp: BulbMIcon,
  },
  {
    title: 'Когда сложно формировать накопления',
    IconComp: StarPointerMIcon,
  },
  {
    title: 'Когда хочется сформировать финансовую подушку на непредвиденные траты и иные цели',
    IconComp: HandHeartMIcon,
  },
];

const pres = [
  {
    img: pre1,
    title: 'Растущая выгода',
    desc: 'Высокие ставки по категориям кэшбека + растущий фонд денежного рынка',
  },
  {
    img: pre2,
    title: 'Инвестируйте, пока покупаете',
    desc: 'Кэшбек с ежедневных трат инвестируется в акции компаний, где вы покупали',
  },
  {
    img: pre3,
    title: 'Потенциал доходности 20%',
    desc: 'Инвестируйте в рост экономики, а не просто храните деньги',
  },
];

const faqs = [
  {
    question: 'Правда, что я могу заказать карту и сразу начать ей пользоваться?',
    answers: [
      'Да, вы сразу можете бесплатно снимать наличные в наших банкоматах и у партнёров и переводить деньги. А ещё оплачивать покупки и копить кэшбэк. Выплатим его, когда получите пластиковую карту',
    ],
  },
  {
    question: 'Как начисляется кэшбек?',
    answers: [
      'Кэшбэк можно получить за покупки по картам, не считая те, что оплатили по СБП. Начисляем его до 10 числа следующего месяца в виде паев фонда “Денежный рынок плюс”. Например, если купили в августе, кэшбэк придёт до 10 сентября. Проверить кэшбэк можно в нашем мобильном приложении и Альфа‑Онлайн в разделе «Кэшбэк и сервисы» — там же сможете перевести его в рублях на свой счёт',
    ],
  },
  {
    question: 'Какой кэшбек по карте?',
    answers: [
      'Каждый месяц вам доступен кэшбек на все покупки 2% . Для клиентов Alfa Only кэшбек составляет 3%.',
      'Мы регулярно запускаем акции с повышенным кэшбэком в категориях на выбор, так можно получить до 30% в акционных категориях за покупки товаров и услуг публичных компаний, чьи акции торгуются на Московской Бирже.',
      'В барабане суперкэшбэка можно получить до 100% на дополнительную категорию.',
    ],
  },
  {
    question: 'За какие транзакции кэшбек не начисляется?',
    list: [
      'за покупку лотерейных билетов, траты в казино и тотализаторах',
      'за снятие наличных',
      'за покупки в финансовых организациях и ломбардах',
      'за переводы на другие карты и счета',
      'за пополнение электронных кошельков и оплату сотовой связи',
      'за оплату товаров и услуг для юрлиц',
      'за оплату стоянки грузового транспорта',
      'за покупку дорожных чеков, драгоценных металлов, паёв и облигаций',
      'за оплату рекламных и бизнес услуг',
      'за покупку подарочных карт',
      'за покупки по виртуальной карте Mastercard Virtual',
      'за покупки в коммерческих целях',
      'за покупки на verkkokauppa.com',
      'за покупки, которые сделали за рубежом (кроме покупок в интернет-магазинах и покупок по премиальной карте, при которых валюты покупки и счёта различаются)',
      'за любые покупки при аресте на счёте',
      'за оплату государственных услуг на единый казначейский счёт (ЕКС) при организации платежей в Федеральной государственной информационной системе «Единый портал государственных и муниципальных услуг (функций)» (ГИС ЕПГУ)',
      'за операции в точках, которые одалживают деньги в обмен на личную собственность, которая остается в точке в качестве обеспечения (ломбарды)',
      'за операции, связанные с перечислением средств на счета в Банке и других банках',
      'за операции, связанные с переплатами (авансовыми платежами)',
      'за покупки облигаций сберегательного займа и платежи по государственному займу',
      'за операции, связанные с платежами в гражданских, социальных и братских ассоциациях, политических организациях и религиозных организациях',
      'за перевод денежных средств с банковских счетов (вкладов) физического лица на специальный счёт оператора финансовой платформы (ОФП) для зачисления в пользу такого физического лица',
    ],
    answers: [
      'Важно: при просроченной задолженности по кредиту кэшбэк будем начислять на бонусный счёт, но списать или потратить его не сможете до погашения долга.',
    ],
  },
  {
    question: 'Есть ли комиссия за снятие наличных?',
    answers: [
      'Без комиссии в банкоматах любых банков можно снимать до 100 000 ₽ в месяц, свыше будет комиссия 1,99% от суммы снятия, минимум 199 ₽. В банкоматах Альфа‑Банка и банков-партнёров — без ограничений.',
    ],
  },
  {
    question: 'Есть ли доставка карты?',
    answers: ['Да, доставка бесплатная по желаемому адресу.'],
  },
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [collapsedItems, setCollapsedItem] = useState<string[]>([]);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    setLoading(true);

    window.gtag('event', '6927_card_activate', { var: 'var2' });
    window.location.replace(LINK);
    setLoading(false);
  };

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Typography.TitleResponsive tag="h1" view="medium" font="system" weight="medium">
            Карта с кэшбеком для инвесторов
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium">Откройте дебетовую карту для накоплений и инвестиций</Typography.Text>
          <img src={hb} alt="HB" height={156} width="100%" style={{ objectFit: 'contain' }} />
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="medium">
          Преимущества
        </Typography.TitleResponsive>

        {advantages.map((adv, index) => (
          <PureCell key={index}>
            <PureCell.Graphics verticalAlign="center">
              <img src={adv.img} width={48} height={48} alt="house" />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.TitleResponsive tag="h4" view="xsmall" font="system" weight="medium">
                  {adv.title}
                </Typography.TitleResponsive>

                <Typography.Text view="primary-small" color="secondary">
                  {adv.desc}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
        ))}

        <div>
          <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="medium">
            Акции за покупки
          </Typography.TitleResponsive>
          <Typography.Text view="primary-small" color="secondary">
            Покупайте товары и услуги публичных компаний, а кэшбек вернется в виде акций этих компаний на брокерский счет
          </Typography.Text>
        </div>

        <div>
          <Swiper style={{ marginLeft: '0' }} spaceBetween={16} slidesPerView="auto">
            {Object.keys(TICKER_TO_IMAGE).map(ticker => (
              <SwiperSlide style={{ maxWidth: 'min-content' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <img src={TICKER_TO_IMAGE[ticker]} width={48} height={48} alt={ticker} />
                  <Typography.Text view="secondary-large">{ticker}</Typography.Text>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="medium">
          Как это работает
        </Typography.TitleResponsive>

        <Steps isVerticalAlign={true} interactive={false} className={appSt.stepStyle}>
          {hiw.map(item => (
            <span key={item.title}>
              <Typography.Text tag="p" defaultMargins={false} view="component-primary">
                {item.title}
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                {item.desc}
              </Typography.Text>
            </span>
          ))}
        </Steps>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="medium">
          Когда подойдет
        </Typography.TitleResponsive>

        {items.map(item => (
          <PureCell className={appSt.cellItem} key={item.title}>
            <PureCell.Graphics>
              <item.IconComp />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-small" weight="bold">
                  {item.title}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
        ))}

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="medium">
          Почему карта инвестора выгоднее:
        </Typography.TitleResponsive>

        {pres.map((adv, index) => (
          <PureCell key={index} className={appSt.preItem}>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-medium">{adv.title}</Typography.Text>

                <Typography.Text view="secondary-large" color="secondary">
                  {adv.desc}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
            <PureCell.Addon>
              <img src={adv.img} width={96} height={96} alt="house" />
            </PureCell.Addon>
          </PureCell>
        ))}

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="medium">
          Дополнительные вопросы
        </Typography.TitleResponsive>

        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              onClick={() => {
                window.gtag('event', '6927_card_faq', { faq: String(index + 1), var: 'var2' });

                setCollapsedItem(items =>
                  items.includes(String(index + 1))
                    ? items.filter(item => item !== String(index + 1))
                    : [...items, String(index + 1)],
                );
              }}
              className={appSt.rowSb}
            >
              <Typography.Text view="primary-medium" weight="medium">
                {faq.question}
              </Typography.Text>
              {collapsedItems.includes(String(index + 1)) ? (
                <div style={{ flexShrink: 0 }}>
                  <ChevronUpMIcon />
                </div>
              ) : (
                <div style={{ flexShrink: 0 }}>
                  <ChevronDownMIcon />
                </div>
              )}
            </div>
            <Collapse expanded={collapsedItems.includes(String(index + 1))}>
              {faq.list && (
                <List tag="ul" marker="•">
                  {faq.list.map((l, lIndex) => (
                    <List.Item key={lIndex}>
                      <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
                        {l}
                      </Typography.Text>
                    </List.Item>
                  ))}
                </List>
              )}
              {faq.answers.map((answerPart, answerIndex) => (
                <Typography.Text key={answerIndex} tag="p" defaultMargins={false} view="primary-medium">
                  {answerPart}
                </Typography.Text>
              ))}
            </Collapse>
          </div>
        ))}
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <Button loading={loading} block view="primary" onClick={submit}>
          Заказать карту за 199₽
        </Button>
      </div>
    </>
  );
};
