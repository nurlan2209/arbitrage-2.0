import React, { createContext, useContext, useState } from "react";

const translations = {
  ru: {
    page_title_main: "Главная | Международный центр Арбитражных решений",
    logo_text: "Международный центр Арбитражных решений",
    nav_main: "Главная",
    nav_about: "О нас",
    nav_documents: "Документы",
    nav_reglament: "Регламент",
    nav_sborahi: "Положение о сборах",
    nav_reestr: "Реестр арбитров",
    nav_sogl: "Типовое соглашение",
    nav_obrazcy: "Образцы документов",
    nav_raspiski: "Расписка",
    nav_arbitrazh_sogl: "Арбитражное соглашение",
    nav_universal_ogovorka: "Универсальная арбитражная оговорка",
    nav_pogashenie: "Соглашение о погашении",
    nav_isk_edin_arbitr: "Иск с единоличным арбитром",
    nav_otzyv_isk: "Отзыв на иск",
    nav_poroznom: "Порядок ознакомления",
    nav_porpod: "Порядок подачи иска",
    nav_porrasarb: "Порядок рассмотрения дел",
    nav_schema: "Этапы прохождения дела", // <-- НОВЫЙ ПЕРЕВОД
    nav_news: "Новости",
    nav_contacts: "Контакты",
    hero_title: "(Арбитраж МЦАР) Международный центр Арбитражных решений",
    hero_subtitle:
      "Разрешаем гражданско-правовые споры с применением законодательства РК — внутри страны и за её пределами. Для физических и юридических лиц — вне зависимости от места жительства или нахождения сторон.",
    hero_button_about: "Подробнее о нас",
    hero_button_reestr: "Реестр арбитров",
    hero_slogan: "Мы не решаем, кто прав, мы решаем, как двигаться дальше.",
    hero_card1_title: "Председатель Арбитража",
    main_welcome: "Добро пожаловать на наш сайт",
    main_law_text:
      "Международный центр Арбитражных решений образован в соответствии с требованиями закона Республики Казахстан за №488 от 08.04.2016г. «Об арбитраже»",
    main_arbiters:
      "Споры рассматривают арбитры ранее проработавшие в суде судьями",
    main_cases: "Арбитраж рассматривает следующие дела:",
    main_cases_list:
      "Жилищные; земельные; трудовые; взыскание долга; взыскание коммунальных услуг; банковские, по договорам займа, залога; по договорным обязательствам хозяйствующих субъектов; по возмещению вреда (имущественный, вред здоровью, причиненный в результате ДТП) и другие споры, вытекающие из гражданско-правовых отношений и договоров (сделок)",
    main_consent: "Спор рассматривается с согласия сторон",
    main_consent_text:
      "или при наличии арбитражной оговорки в договорах о рассмотрении спора в нашем Арбитраже",
    main_location: "Спор рассматривается независимо от места проживания",
    main_location_text: "или нахождения сторон, а также в онлайн режиме",
    main_fee: "Арбитражный сбор",
    main_fee_text:
      "по всем вышеуказанным спорам составляет для физических лиц 2%, для юридических лиц 5% от суммы иска, но не менее 20 МРП",
    main_decision: "Решение Арбитража вступает в законную силу сразу",
    main_decision_text:
      "и исполняется частным или государственным судебным исполнителем",
    main_timeframe: "Спор рассматривается в течение одного месяца",
    about_title: "О нашей компании",
    about_intro: "Институт арбитражного разбирательства",
    about_p1:
      "При осуществлении предпринимательской деятельности, зачастую возникают ситуации, когда приходится сталкиваться с рядом проблем юридического характера, разрешение которых возможно только в порядке гражданского судопроизводства.",
    about_p2:
      "В современном мире как показал международный опыт, наряду с судами общей юрисдикции (государственными судами), альтернативной формой разрешения споров и разногласий, возникающих из договорных и иных гражданско-правовых отношений, зачастую выступает институт арбитражного разбирательства.",
    about_p3:
      "В Республике Казахстан институт арбитражного разбирательства получил свое практические применение в результате принятия Закона №88-V от 08.04.16 г. «Об арбитраже».",
    about_p4:
      "Таким образом, арбитражное разбирательство представляет собой коммерческий арбитражный суд, избираемый сторонами, независимо от форм собственности (АО, ТОО, ИП, физ. лицо) для разрешения имущественных и связанных с ними неимущественных споров, тем самым является современным и цивилизованным способом разрешить спор между деловыми партнерами.",
    about_general_info:
      "Общая информация относительно «Международный центр Арбитражных решений»",
    about_p5:
      "ТОО «Международный центр арбитражных решении» является коммерческим юридическим лицом, осуществляющим функции постоянно действующего арбитража.",
    about_p6:
      "Арбитраж образован в соответствии с требованиями Закона, в своей деятельности руководствуется положениями Закона, Регламента Арбитража, иными внутренними нормативными документами Арбитража.",
    about_p7:
      "Реестр арбитров Арбитража включает более 50 арбитров, состоит из высококвалифицированных юристов, имеющих многолетний практический опыт работы в судебной системе, правоохранительных органах РК.",
    about_p8:
      "Целью Арбитража является эффективное, оперативное и объективное рассмотрение гражданско-правовых (договорных) споров при участии независимых и опытных профессионалов своего дела.",
    about_mission_title: "Наша миссия",
    about_mission_text:
      "Обеспечение справедливого и беспристрастного разрешения споров в рамках установленной юрисдикции, с соблюдением всех принципов правосудия и защиты интересов всех сторон.",
    about_team_title: "Опытная команда",
    about_team_desc: "Профессиональные юристы с многолетним опытом",
    about_solutions_title: "Точные решения",
    about_solutions_desc: "Индивидуальный подход к каждому делу",
    about_recognition_title: "Признание",
    about_recognition_desc: "Высокие стандарты качества и профессионализма",
    about_reliability_title: "Надежность",
    about_reliability_desc: "Гарантированное соблюдение всех процедур",
    about_why_choose_title: "Почему выбирают нас?",
    about_years_experience: "лет опыта работы",
    about_successful_cases: "успешных дел",
    about_satisfied_clients: "довольных клиентов",
    news_title: "Новости компании",
    news_p1:
      "Здесь будет лента новостей. Каждую новость можно оформить как отдельный блок.",
    contact_title: "Контактная информация",
    contact_form_title: "Связаться с нами",
    contact_address: "Наш адрес: г. Астана, Проспект Туран, дом 83/1, офис 122",
    contact_work_hour: "Режим работы",
    our_contact: "Наши контакты",
    name_form: "Имя *",
    contact_phone: "Телефоны",
    contact_phone_form: "Телефон",
    message_form: "Сообщение *",
    contact_t_address: "Адрес",
    contact_email_main: "Email для связи: arbitragerk.kz@gmail.com",
    send_message: "Отправить сообщение",
    footer_copyright:
      "© 2025 Международный центр Арбитражных решений. Все права защищены.",
    working_hours: "Режим работы",
    contact_info: "Контактная информация",
    location: "Местоположение",
    weekdays: "Пн - Пт",
    weekend: "Сб - Вс",
    work_time: "9:00 - 18:00",
    weekend_text: "Выходной",
    contact_email_form: "Email *",
    contact_email_placeholder: "your@email.com",
    contact_phone_placeholder: "+7 (___) ___-__-__",
    contact_form_notice_title: "Обратите внимание:",
    contact_form_notice_desc:
      "Мы отвечаем на все обращения в течение 24 часов в рабочие дни.",
    contact_methods_title: "Способы связи",
    contact_methods_desc:
      "Выберите удобный для вас способ получения консультации",
    contact_method1_title: "Телефонная консультация",
    contact_method1_desc: "Получите быструю консультацию по телефону",
    contact_method2_title: "Email консультация",
    contact_method2_desc: "Отправьте подробный запрос на электронную почту",
    contact_method3_title: "Личная встреча",
    contact_method3_desc: "Посетите наш офис для детальной консультации",

    pogashenie_title: "Соглашение о погашении задолженности",
    pogashenie_subtitle:
      "Шаблон для урегулирования долговых обязательств с арбитражной оговоркой",
    pogashenie_benefit1_title: "Юридическая защита",
    pogashenie_benefit1_desc:
      "Гарантирует права кредитора в случае просрочки выплаты.",
    pogashenie_benefit2_title: "Четкие условия",
    pogashenie_benefit2_desc:
      "Определяет точные сроки и сумму для избежания разногласий.",
    pogashenie_benefit3_title: "Арбитражная оговорка",
    pogashenie_benefit3_desc:
      "Включает пункт о разрешении споров в Арбитраже г. Астана.",
    pogashenie_benefit4_title: "Экономия времени",
    pogashenie_benefit4_desc:
      "Готовый шаблон для быстрого оформления договоренностей.",
    pogashenie_info_title: "Информация о документе",
    pogashenie_info_name: "Соглашение о погашении задолженности",
    pogashenie_info_status: "Рекомендуемый шаблон",
    pogashenie_info_format: "PDF документ",
    pogashenie_info_purpose_title: "Назначение документа",
    pogashenie_info_purpose_desc:
      "Фиксация договоренностей о сроках и порядке выплаты долга.",
    pogashenie_section1_title: "Предмет соглашения",
    pogashenie_section1_desc:
      "Стороны признают и соглашаются с наличием и размером задолженности.",
    pogashenie_section2_title: "Порядок погашения",
    pogashenie_section2_desc:
      "Устанавливается конкретный срок, до которого долг должен быть полностью выплачен.",
    pogashenie_section3_title: "Ответственность сторон",
    pogashenie_section3_desc:
      "Предусмотрены штрафные санкции в размере 1% за каждый день просрочки.",
    pogashenie_section4_title: "Разрешение споров",
    pogashenie_section4_desc:
      "Все споры по данному соглашению подлежат разрешению в 'Арбитраже города Астана'.",
    pogashenie_contact_title: "Нужна помощь с оформлением соглашения?",
    pogashenie_contact_desc:
      "Наши юристы помогут адаптировать данный шаблон под вашу ситуацию.",

    // Переводы для реестра арбитров
    reestr_title: "Реестр арбитров",
    reestr_subtitle: "Список аккредитованных арбитров центра",
    reestr_info_title: "Информация о документе",
    reestr_info_name:
      "Реестр арбитров Международного центра арбитражных решений",
    reestr_info_status: "Действующий документ",
    reestr_info_format: "PDF документ",
    reestr_info_language: "Русский",
    reestr_info_updated: "Последнее обновление",
    reestr_section1_title: "Квалифицированные арбитры",
    reestr_section1_desc:
      "Список арбитров с указанием специализации и опыта работы",
    reestr_section2_title: "Судейский опыт",
    reestr_section2_desc:
      "Арбитры с опытом работы судьями в государственных судах",
    reestr_section3_title: "Специализация арбитров",
    reestr_section3_desc:
      "Области права и типы споров, которые рассматривают арбитры",
    reestr_section4_title: "Контактная информация",
    reestr_section4_desc: "Способы связи с арбитрами для назначения на дела",
    reestr_contact_title: "Нужна помощь в выборе арбитра?",
    reestr_contact_desc:
      "Наши специалисты помогут подобрать арбитра с учетом специфики вашего спора",
    reestr_stats_total: "Всего арбитров",
    reestr_stats_judges: "Бывших судей",
    reestr_stats_experience: "Средний опыт работы",
    reestr_stats_specializations: "Специализаций",

    // Переводы для типового соглашения
    sogl_title: "Типовое соглашение",
    sogl_subtitle: "Образец арбитражного соглашения",
    sogl_info_title: "Информация о документе",
    sogl_info_name: "Типовое арбитражное соглашение",
    sogl_info_status: "Действующий документ",
    sogl_info_format: "PDF документ",
    sogl_info_language: "Русский",
    sogl_info_purpose: "Назначение документа",
    sogl_section1_title: "Структура соглашения",
    sogl_section1_desc: "Основные разделы и пункты арбитражного соглашения",
    sogl_section2_title: "Условия применения",
    sogl_section2_desc: "Когда и как использовать типовое соглашение",
    sogl_section3_title: "Правовые основания",
    sogl_section3_desc: "Законодательная база для арбитражных соглашений",
    sogl_section4_title: "Рекомендации по заполнению",
    sogl_section4_desc: "Практические советы по адаптации соглашения",
    sogl_contact_title: "Нужна помощь с составлением соглашения?",
    sogl_contact_desc:
      "Наши юристы помогут адаптировать типовое соглашение под ваши конкретные потребности",
    sogl_benefits_title: "Преимущества использования",
    sogl_benefit1: "Соответствие законодательству РК",
    sogl_benefit2: "Проверенная юридическая практика",
    sogl_benefit3: "Готовый к использованию шаблон",
    sogl_benefit4: "Возможность индивидуальной адаптации",

    // --- НАЧАЛО: Переводы для страницы образцов документов ---
    obrazcy_title: "Образцы документов",
    obrazcy_subtitle: "Документы с рекомендуемой арбитражной оговоркой",
    obrazcy_benefit1_title: "Проверенные формулировки",
    obrazcy_benefit1: "Юридически выверенные тексты для минимизации рисков.",
    obrazcy_benefit2_title: "Соответствие требованиям",
    obrazcy_benefit2: "Гарантия соответствия арбитражному законодательству.",
    obrazcy_benefit3_title: "Экономия времени",
    obrazcy_benefit3: "Готовые шаблоны для быстрого включения в договоры.",
    obrazcy_benefit4_title: "Снижение рисков",
    obrazcy_benefit4:
      "Четкие формулировки для предотвращения споров о подсудности.",
    obrazcy_info_title: "Информация о документе",
    obrazcy_info_name:
      "Образцы документов с рекомендуемой арбитражной оговоркой",
    obrazcy_info_status: "Действующий документ",
    obrazcy_info_format: "PDF документ",
    obrazcy_info_purpose: "Назначение документа",
    obrazcy_info_purpose_value:
      "Готовые шаблоны договоров с арбитражными оговорками",
    obrazcy_section1_title: "Типы договоров",
    obrazcy_section1_desc:
      "Различные виды договоров с включенными арбитражными оговорками.",
    obrazcy_section2_title: "Рекомендуемые формулировки",
    obrazcy_section2_desc: "Проверенные варианты арбитражных оговорок.",
    obrazcy_section3_title: "Практические примеры",
    obrazcy_section3_desc:
      "Конкретные образцы для различных сфер деятельности.",
    obrazcy_section4_title: "Адаптация под нужды",
    obrazcy_section4_desc: "Как изменить оговорку с учетом специфики бизнеса.",
    obrazcy_notice_title: "Рекомендации по использованию",
    obrazcy_notice_desc:
      "Данные образцы документов являются рекомендательными и должны быть адаптированы под конкретные условия вашего бизнеса. Обязательно проконсультируйтесь с юристом перед включением арбитражных оговорок в договоры.",
    obrazcy_contact_title: "Нужна помощь с договором?",
    obrazcy_contact_desc:
      "Наши юристы помогут грамотно включить арбитражную оговорку в ваши договоры.",
    obrazcy_feature1: "15+ готовых типов договоров с оговорками",
    obrazcy_feature2: "Проверенные формулировки для разных сфер",
    obrazcy_feature3: "Рекомендации по адаптации под ваш бизнес",
    obrazcy_feature4: "Консультации юристов по внедрению",
    // --- КОНЕЦ: Переводы для страницы образцов документов ---

    // Переводы для страницы Положения о сборах
    sborahi_title: "Положение о сборах",
    sborahi_subtitle: "Арбитражные расходы и сборы",
    sborahi_info_title: "Информация о документе",
    sborahi_info_name: "Положение об арбитражных расходах и сборах",
    sborahi_info_status: "Действующий документ",
    sborahi_info_format: "PDF документ",
    sborahi_info_language: "Русский",
    sborahi_section1_title: "Арбитражные сборы",
    sborahi_section1_desc:
      "Размеры и порядок уплаты сборов за рассмотрение споров",
    sborahi_section2_title: "Расходы сторон",
    sborahi_section2_desc:
      "Компенсация расходов на представителей и экспертизы",
    sborahi_section3_title: "Льготы и скидки",
    sborahi_section3_desc: "Условия предоставления льгот при уплате сборов",
    sborahi_contact_title: "Вопросы по сборам и расходам?",
    sborahi_contact_desc:
      "Получите подробную консультацию по размерам арбитражных сборов и порядку их уплаты",

    // --- НАЧАЛО: Переводы для страницы Иска с единоличным арбитром ---
    isk_edin_arbitr_title: "Образец искового заявления",
    isk_edin_arbitr_subtitle:
      "Шаблон для подачи иска с рассмотрением единоличным арбитром",
    isk_benefit1_title: "Четкая структура",
    isk_benefit1_desc:
      "Готовый шаблон искового заявления для быстрой подготовки.",
    isk_benefit2_title: "Единоличный арбитр",
    isk_benefit2_desc:
      "Ускоряет процесс рассмотрения спора, назначается председателем.",
    isk_benefit3_title: "Онлайн-участие",
    isk_benefit3_desc:
      "Шаблон включает ходатайство об участии в онлайн-режиме.",
    isk_benefit4_title: "Готовые формулировки",
    isk_benefit4_desc:
      "Помогает правильно изложить требования и обстоятельства дела.",
    isk_info_title: "Информация о документе",
    isk_info_name: "Образец искового заявления с единоличным арбитром",
    isk_info_status: "Рекомендуемый шаблон",
    isk_info_purpose_title: "Назначение документа",
    isk_info_purpose_desc: "Подача искового заявления в арбитраж.",
    isk_section1_title: "Реквизиты сторон",
    isk_section1_desc:
      "Полная информация об истце, ответчике и их представителях.",
    isk_section2_title: "Описание спора",
    isk_section2_desc: "Изложение обстоятельств дела и оснований для иска.",
    isk_section3_title: "Исковые требования",
    isk_section3_desc:
      "Четко сформулированные требования к ответчику, включая суммы.",
    isk_section4_title: "Процессуальные ходатайства",
    isk_section4_desc:
      "Запросы о назначении арбитра и проведении заседаний онлайн.",
    field_format_value: "PDF документ",
    // --- КОНЕЦ: Переводы для страницы Иска с единоличным арбитром ---

    // --- НАЧАЛО: Переводы для страницы Отзыва на иск ---
    otzyv_isk_title: "Отзыв на исковое заявление",
    otzyv_isk_subtitle:
      "Шаблон для подготовки отзыва на иск с единоличным арбитром",
    otzyv_benefit1_title: "Готовая структура",
    otzyv_benefit1_desc: "Экономит время на подготовку документа.",
    otzyv_benefit2_title: "Аргументированная позиция",
    otzyv_benefit2_desc: "Помогает четко изложить свои возражения по иску.",
    otzyv_benefit3_title: "Процессуальные просьбы",
    otzyv_benefit3_desc:
      "Включает ходатайства об ознакомлении с материалами дела.",
    otzyv_benefit4_title: "Снижение рисков",
    otzyv_benefit4_desc: "Помогает избежать ошибок при составлении отзыва.",
    otzyv_info_title: "Информация о документе",
    otzyv_info_name: "Отзыв на исковое заявление",
    otzyv_info_status: "Рекомендуемый шаблон",
    otzyv_info_purpose_title: "Назначение документа",
    otzyv_info_purpose_desc:
      "Представление своей позиции по полученному исковому заявлению.",
    otzyv_section1_title: "Вводная часть",
    otzyv_section1_desc: "Указание номера дела, сторон и реквизитов арбитража.",
    otzyv_section2_title: "Возражения по существу",
    otzyv_section2_desc:
      "Подробное изложение аргументов против требований истца.",
    otzyv_section3_title: "Доказательства",
    otzyv_section3_desc:
      "Перечень прилагаемых документов, подтверждающих позицию.",
    otzyv_section4_title: "Просительная часть",
    otzyv_section4_desc:
      "Формулировка просьбы к арбитражу, например, отказать в иске.",
    // --- КОНЕЦ: Переводы для страницы Отзыва на иск ---

    // --- НАЧАЛО: Переводы для страницы Порядка ознакомления ---
    poroznom_title: "Порядок ознакомления с материалами дела",
    poroznom_subtitle: "Правила и шаги для доступа к материалам дела",
    poroznom_benefit1_title: "Прозрачность процесса",
    poroznom_benefit1_desc: "Обеспечивает право сторон на доступ к информации.",
    poroznom_benefit2_title: "Подача заявления",
    poroznom_benefit2_desc: "Простой и понятный процесс подачи заявления.",
    poroznom_benefit3_title: "Удобное время",
    poroznom_benefit3_desc:
      "Согласование времени для ознакомления с материалами.",
    poroznom_benefit4_title: "Конфиденциальность",
    poroznom_benefit4_desc: "Соблюдение правил конфиденциальности.",
    poroznom_info_title: "Информация о документе",
    poroznom_info_name: "Порядок ознакомления с материалами дела",
    poroznom_info_status: "Действующий документ",
    poroznom_info_purpose_title: "Назначение документа",
    poroznom_info_purpose_desc:
      "Регулирование процедуры доступа сторон к материалам арбитражного дела.",
    poroznom_section1_title: "Подача заявления",
    poroznom_section1_desc:
      "Кто и в какой форме может подать заявление на ознакомление.",
    poroznom_section2_title: "Сроки рассмотрения",
    poroznom_section2_desc:
      "В какие сроки арбитраж рассматривает заявление и назначает время.",
    poroznom_section3_title: "Процедура ознакомления",
    poroznom_section3_desc:
      "Правила поведения в ходе ознакомления, возможность копирования.",
    poroznom_section4_title: "Ограничения",
    poroznom_section4_desc:
      "Случаи, когда доступ к материалам дела может быть ограничен.",
    // --- КОНЕЦ: Переводы для страницы Порядка ознакомления ---

    // --- НАЧАЛО: Переводы для страницы Порядка подачи иска ---
    porpod_title: "Порядок подачи исковых заявлений",
    porpod_subtitle: "Правила и шаги для подачи иска в арбитраж",
    porpod_benefit1_title: "Четкие инструкции",
    porpod_benefit1_desc: "Пошаговое руководство по подаче искового заявления.",
    porpod_benefit2_title: "Электронная подача",
    porpod_benefit2_desc: "Возможность подачи документов в электронном виде.",
    porpod_benefit3_title: "Соблюдение сроков",
    porpod_benefit3_desc:
      "Информация о процессуальных сроках для подачи документов.",
    porpod_benefit4_title: "Требования к документам",
    porpod_benefit4_desc: "Перечень и формат необходимых документов.",
    porpod_info_title: "Информация о документе",
    porpod_info_name: "Порядок подачи и приема исковых заявлений",
    porpod_info_status: "Действующий документ",
    porpod_info_purpose_title: "Назначение документа",
    porpod_info_purpose_desc:
      "Регулирование процедуры подачи и приема исковых заявлений в арбитраж.",
    porpod_section1_title: "Форма и содержание",
    porpod_section1_desc:
      "Требования к оформлению и содержанию искового заявления.",
    porpod_section2_title: "Способы подачи",
    porpod_section2_desc:
      "Возможные способы подачи: лично, по почте, в электронном виде.",
    porpod_section3_title: "Прилагаемые документы",
    porpod_section3_desc:
      "Обязательный перечень документов, прилагаемых к иску.",
    porpod_section4_title: "Принятие или возврат",
    porpod_section4_desc:
      "Основания для принятия искового заявления к производству или его возврата.",
    // --- КОНЕЦ: Переводы для страницы Порядка подачи иска ---

    // --- НАЧАЛО: Переводы для страницы Порядка рассмотрения дел ---
    porrasarb_title: "Порядок рассмотрения арбитражных дел",
    porrasarb_subtitle: "Этапы и процедуры рассмотрения споров в арбитраже",
    porrasarb_benefit1_title: "Эффективность",
    porrasarb_benefit1_desc: "Оптимизированные процедуры для быстрого решения.",
    porrasarb_benefit2_title: "Конфиденциальность",
    porrasarb_benefit2_desc: "Закрытый характер разбирательства.",
    porrasarb_benefit3_title: "Гибкость",
    porrasarb_benefit3_desc:
      "Возможность адаптации процедуры под нужды сторон.",
    porrasarb_benefit4_title: "Исполнимость решений",
    porrasarb_benefit4_desc: "Решения арбитража имеют юридическую силу.",
    porrasarb_info_title: "Информация о документе",
    porrasarb_info_name: "Порядок рассмотрения арбитражных дел",
    porrasarb_info_status: "Действующий документ",
    porrasarb_info_purpose_title: "Назначение документа",
    porrasarb_info_purpose_desc:
      "Описание этапов арбитражного разбирательства от начала до вынесения решения.",
    porrasarb_section1_title: "Подготовка к разбирательству",
    porrasarb_section1_desc:
      "Формирование состава арбитража, обмен документами.",
    porrasarb_section2_title: "Слушание дела",
    porrasarb_section2_desc:
      "Порядок проведения заседаний, представление доказательств.",
    porrasarb_section3_title: "Вынесение решения",
    porrasarb_section3_desc:
      "Процедура принятия и оглашения решения арбитража.",
    porrasarb_section4_title: "Завершение производства",
    porrasarb_section4_desc:
      "Прекращение разбирательства и исполнение решения.",
    // --- КОНЕЦ: Переводы для страницы Порядка рассмотрения дел ---

    // --- НАЧАЛО: Переводы для страницы Этапы прохождения дела ---
    schema_title: "Этапы прохождения арбитражного дела",
    schema_subtitle: "Наглядная схема процесса арбитражного разбирательства",
    schema_benefit1_title: "Наглядность",
    schema_benefit1_desc: "Простая и понятная схема всего процесса.",
    schema_benefit2_title: "Ключевые этапы",
    schema_benefit2_desc: "Выделение основных стадий разбирательства.",
    schema_benefit3_title: "Сроки",
    schema_benefit3_desc: "Ориентировочные сроки для каждого этапа.",
    schema_benefit4_title: "Действия сторон",
    schema_benefit4_desc: "Что требуется от истца и ответчика на каждом шаге.",
    schema_info_title: "Информация о документе",
    schema_info_name: "Этапы прохождения арбитражного дела",
    schema_info_status: "Информационная схема",
    schema_info_purpose_title: "Назначение документа",
    schema_info_purpose_desc:
      "Визуализация процесса арбитражного разбирательства для лучшего понимания.",
    // --- КОНЕЦ: Переводы для страницы Этапы прохождения дела ---

    // Общие переводы для документов
    document_view: "Просмотр документа",
    document_loading: "Загрузка документа...",
    document_download: "Скачать PDF",
    document_consultation_needed: "Нужна консультация по регламенту?",
    document_consultation_desc:
      "Наши специалисты готовы ответить на ваши вопросы о процедуре арбитражного разбирательства",
    field_name: "Название",
    field_version: "Версия",
    field_format: "Формат",
    field_language: "Язык",
    field_status: "Статус",
    reglament_section1_title: "I. Общие положения",
    reglament_section1_desc:
      "Принципы работы, структура и полномочия арбитража",
    reglament_section2_title: "II. Арбитражное разбирательство",
    reglament_section2_desc:
      "Процедуры подачи документов, сроки и языки судебного разбирательства",
    reglament_section3_title: "III. Начало разбирательства",
    reglament_section3_desc:
      "Порядок приема заявлений и формирования состава арбитража",
    reglament_section4_title: "IV. Порядок рассмотрения",
    reglament_section4_desc:
      "Компетенция арбитража, сроки и правила разрешения споров",
    reglament_section5_title: "V. Арбитражное решение",
    reglament_section5_desc:
      "Принятие, форма и исправление арбитражных решений",
    reglament_section6_title: "VI. Исполнение решений",
    reglament_section6_desc: "Добровольное и принудительное исполнение решений",

    nav_group_procedures: "Основные документы и процедуры",
    nav_group_samples: "Образцы и шаблоны",
  },
  en: {
    page_title_main: "Home | International Center for Arbitration Solutions",
    logo_text: "International Center for Arbitration Solutions",
    nav_main: "Home",
    nav_about: "About Us",
    nav_raspiski: "Receipt",
    nav_arbitrazh_sogl: "Arbitration Agreement",
    nav_universal_ogovorka: "Universal Arbitration Clause",
    nav_documents: "Documents",
    nav_reglament: "Regulations",
    nav_sborahi: "Fee Provisions",
    nav_reestr: "Registry of Arbitrators",
    nav_sogl: "Standard Agreement",
    nav_obrazcy: "Document Samples",
    nav_pogashenie: "Repayment Agreement",
    nav_isk_edin_arbitr: "Claim with Sole Arbitrator",
    nav_otzyv_isk: "Response to Claim",
    nav_poroznom: "Case materials review",
    nav_porpod: "Claim submission procedure",
    nav_porrasarb: "Case review procedure",
    nav_schema: "Arbitration case stages", // <-- NEW TRANSLATION
    nav_news: "News",
    nav_contacts: "Contacts",
    hero_title:
      "Arbitration(ICAS) International Center for Arbitration Solutions",
    hero_subtitle:
      "We resolve civil law disputes with the application of the legislation of the Republic of Kazakhstan — inside and outside the country. For individuals and legal entities — regardless of the place of residence or location of the parties.",
    hero_button_about: "Learn More About Us",
    hero_button_reestr: "Registry of Arbitrators",
    hero_slogan:
      "We don’t decide who’s right — we decide how to move forward.",
    hero_card1_title: "Chairman of Arbitration",
    main_welcome: "Welcome to our website",
    main_law_text:
      "International Center for Arbitration Solutions was established in accordance with the requirements of the Law of the Republic of Kazakhstan No. 488 dated April 8, 2016 'On Arbitration'",
    main_arbiters:
      "Disputes are considered by arbitrators who previously worked as judges in court",
    main_cases: "Arbitration considers the following cases:",
    main_cases_list:
      "Housing; land; labor; debt collection; collection of utilities; banking, loan agreements, pledges; contractual obligations of business entities; compensation for damages (property, health damage caused as a result of traffic accidents) and other disputes arising from civil law relations and contracts (transactions)",
    main_consent: "The dispute is considered with the consent of the parties",
    main_consent_text:
      "or in the presence of an arbitration clause in contracts for dispute resolution in our Arbitration",
    main_location:
      "The dispute is considered regardless of the place of residence",
    main_location_text: "or location of the parties, as well as online",
    main_fee: "Arbitration fee",
    main_fee_text:
      "for all the above disputes is 2% for individuals, 5% for legal entities of the claim amount, but not less than 20 MCI",
    main_decision:
      "The Arbitration decision comes into legal force immediately",
    main_decision_text: "and is executed by a private or state bailiff",
    main_timeframe: "The dispute is considered within one month",
    about_title: "About Our Company",
    about_intro: "Institute of Arbitration Proceedings",
    about_p1:
      "When conducting business activities, situations often arise when one has to face a number of legal problems, the resolution of which is possible only through civil proceedings.",
    about_p2:
      "In the modern world, as international experience has shown, along with courts of general jurisdiction (state courts), an alternative form of resolving disputes and disagreements arising from contractual and other civil law relations is often the institute of arbitration proceedings.",
    about_p3:
      "In the Republic of Kazakhstan, the institute of arbitration proceedings found its practical application as a result of the adoption of Law No. 88-V dated April 8, 2016 'On Arbitration'.",
    about_p4:
      "Thus, arbitration proceedings represent a commercial arbitration court, chosen by the parties, regardless of forms of ownership (JSC, LLP, IE, individuals) for resolving property and related non-property disputes, thereby being a modern and civilized way to resolve disputes between business partners.",
    about_general_info:
      "General information about 'International Center for Arbitration Solutions'",
    about_p5:
      "LLP 'International Center for Arbitration Solutions' is a commercial legal entity that performs the functions of a permanent arbitration.",
    about_p6:
      "The Arbitration is formed in accordance with the requirements of the Law, in its activities it is guided by the provisions of the Law, the Arbitration Regulations, and other internal regulatory documents of the Arbitration.",
    about_p7:
      "The register of arbitrators of the Arbitration includes more than 50 arbitrators, consisting of highly qualified lawyers with many years of practical experience in the judicial system and law enforcement agencies of the Republic of Kazakhstan.",
    about_p8:
      "The purpose of the Arbitration is effective, prompt and objective consideration of civil law (contractual) disputes with the participation of independent and experienced professionals.",
    about_mission_title: "Our Mission",
    about_mission_text:
      "Ensuring fair and impartial resolution of disputes within the established jurisdiction, with compliance with all principles of justice and protection of the interests of all parties.",
    about_team_title: "Experienced Team",
    about_team_desc: "Professional lawyers with many years of experience",
    about_solutions_title: "Precise Solutions",
    about_solutions_desc: "Individual approach to each case",
    about_recognition_title: "Recognition",
    about_recognition_desc: "High standards of quality and professionalism",
    about_reliability_title: "Reliability",
    about_reliability_desc: "Guaranteed compliance with all procedures",
    about_why_choose_title: "Why choose us?",
    about_years_experience: "years of experience",
    about_successful_cases: "successful cases",
    about_satisfied_clients: "satisfied clients",
    news_title: "Company News",
    news_p1:
      "Here will be the news feed. Each news item can be designed as a separate block.",
    contact_title: "Contact Information",
    contact_phone: "Contacts",
    contact_address: "Astana, Turan Avenue, 83/1, office 122",
    contact_work_hour: "Working hours",
    contact_form_title: "Contact us",
    our_contact: "Our contacts",
    contact_phone_form: "Phone",
    message_form: "Message *",
    name_form: "Name *",
    contact_t_address: "Address",
    send_message: "Send message",
    contact_email_main: "Email for contact: arbitragerk.kz@gmail.com",
    footer_copyright:
      "© 2025 International Center for Arbitration Decisions. All rights reserved.",
    working_hours: "Working Hours",
    contact_info: "Contact Information",
    location: "Location",
    weekdays: "Mon - Fri",
    weekend: "Sat - Sun",
    work_time: "9:00 AM - 6:00 PM",
    weekend_text: "Closed",
    contact_email_form: "Email *",
    contact_email_placeholder: "your@email.com",
    contact_phone_placeholder: "+7 (___) ___-__-__",
    contact_form_notice_title: "Please note:",
    contact_form_notice_desc:
      "We respond to all inquiries within 24 hours on business days.",
    contact_methods_title: "Ways to get in touch",
    contact_methods_desc: "Choose a convenient way to get a consultation",
    contact_method1_title: "Phone consultation",
    contact_method1_desc: "Get a quick consultation by phone",
    contact_method2_title: "Email consultation",
    contact_method2_desc: "Send a detailed request by email",
    contact_method3_title: "Personal meeting",
    contact_method3_desc: "Visit our office for a detailed consultation",

    pogashenie_title: "Debt Repayment Agreement",
    pogashenie_subtitle:
      "Template for settling debt obligations with an arbitration clause",
    pogashenie_benefit1_title: "Legal Protection",
    pogashenie_benefit1_desc:
      "Guarantees the creditor's rights in case of late payment.",
    pogashenie_benefit2_title: "Clear Terms",
    pogashenie_benefit2_desc:
      "Defines exact deadlines and amounts to avoid disagreements.",
    pogashenie_benefit3_title: "Arbitration Clause",
    pogashenie_benefit3_desc:
      "Includes a clause for dispute resolution in the Arbitration of Astana.",
    pogashenie_benefit4_title: "Time Saving",
    pogashenie_benefit4_desc:
      "A ready-made template for quickly formalizing agreements.",
    pogashenie_info_title: "Document Information",
    pogashenie_info_name: "Debt Repayment Agreement",
    pogashenie_info_status: "Recommended template",
    pogashenie_info_format: "PDF document",
    pogashenie_info_purpose_title: "Document Purpose",
    pogashenie_info_purpose_desc:
      "To formalize agreements on the terms and procedure for debt repayment.",
    pogashenie_section1_title: "Subject of the Agreement",
    pogashenie_section1_desc:
      "The parties acknowledge and agree to the existence and amount of the debt.",
    pogashenie_section2_title: "Repayment Procedure",
    pogashenie_section2_desc:
      "A specific deadline is set by which the debt must be fully repaid.",
    pogashenie_section3_title: "Liability of the Parties",
    pogashenie_section3_desc:
      "Penalties of 1% for each day of delay are provided.",
    pogashenie_section4_title: "Dispute Resolution",
    pogashenie_section4_desc:
      "All disputes under this agreement are to be resolved in the 'Arbitration of the city of Astana'",
    pogashenie_contact_title: "Need help drafting an agreement?",
    pogashenie_contact_desc:
      "Our lawyers can help adapt this template to your situation.",

    // Переводы для реестра арбитров
    reestr_title: "Registry of Arbitrators",
    reestr_subtitle: "List of accredited arbitrators of the center",
    reestr_info_title: "Document information",
    reestr_info_name:
      "Registry of Arbitrators of the International Center for Arbitration Solutions",
    reestr_info_status: "Active document",
    reestr_info_format: "PDF document",
    reestr_info_language: "Russian",
    reestr_info_updated: "Last updated",
    reestr_section1_title: "Qualified Arbitrators",
    reestr_section1_desc:
      "List of arbitrators with specialization and work experience",
    reestr_section2_title: "Judicial Experience",
    reestr_section2_desc:
      "Arbitrators with experience as judges in state courts",
    reestr_section3_title: "Arbitrator Specialization",
    reestr_section3_desc:
      "Areas of law and types of disputes handled by arbitrators",
    reestr_section4_title: "Contact Information",
    reestr_section4_desc: "Ways to contact arbitrators for case appointments",
    reestr_contact_title: "Need help choosing an arbitrator?",
    reestr_contact_desc:
      "Our specialists will help you select an arbitrator based on the specifics of your dispute",
    reestr_stats_total: "Total arbitrators",
    reestr_stats_judges: "Former judges",
    reestr_stats_experience: "Average work experience",
    reestr_stats_specializations: "Specializations",

    // Переводы для типового соглашения
    sogl_title: "Standard Agreement",
    sogl_subtitle: "Arbitration agreement template",
    sogl_info_title: "Document information",
    sogl_info_name: "Standard arbitration agreement",
    sogl_info_status: "Active document",
    sogl_info_format: "PDF document",
    sogl_info_language: "Russian",
    sogl_info_purpose: "Document purpose",
    sogl_section1_title: "Agreement structure",
    sogl_section1_desc:
      "Main sections and clauses of the arbitration agreement",
    sogl_section2_title: "Terms of use",
    sogl_section2_desc: "When and how to use the standard agreement",
    sogl_section3_title: "Legal basis",
    sogl_section3_desc: "Legislative framework for arbitration agreements",
    sogl_section4_title: "Completion recommendations",
    sogl_section4_desc: "Practical advice on adapting the agreement",
    sogl_contact_title: "Need help drafting an agreement?",
    sogl_contact_desc:
      "Our lawyers will help adapt the standard agreement to your specific needs",
    sogl_benefits_title: "Benefits of use",
    sogl_benefit1: "Compliance with RK legislation",
    sogl_benefit2: "Proven legal practice",
    sogl_benefit3: "Ready-to-use template",
    sogl_benefit4: "Individual adaptation capability",

    // --- START: Translations for Document Samples page ---
    obrazcy_title: "Document Samples",
    obrazcy_subtitle: "Documents with recommended arbitration clauses",
    obrazcy_benefit1_title: "Verified Wording",
    obrazcy_benefit1: "Legally sound texts to minimize risks.",
    obrazcy_benefit2_title: "Compliance with Requirements",
    obrazcy_benefit2: "Guarantee of compliance with arbitration legislation.",
    obrazcy_benefit3_title: "Time Saving",
    obrazcy_benefit3: "Ready-made templates for quick inclusion in contracts.",
    obrazcy_benefit4_title: "Risk Reduction",
    obrazcy_benefit4: "Clear wording to prevent jurisdiction disputes.",
    obrazcy_info_title: "Document Information",
    obrazcy_info_name: "Document samples with recommended arbitration clause",
    obrazcy_info_status: "Active document",
    obrazcy_info_format: "PDF document",
    obrazcy_info_purpose: "Document Purpose",
    obrazcy_info_purpose_value:
      "Ready-made contract templates with arbitration clauses",
    obrazcy_section1_title: "Contract Types",
    obrazcy_section1_desc:
      "Various types of contracts with included arbitration clauses.",
    obrazcy_section2_title: "Recommended Wording",
    obrazcy_section2_desc: "Proven versions of arbitration clauses.",
    obrazcy_section3_title: "Practical Examples",
    obrazcy_section3_desc: "Specific samples for different areas of activity.",
    obrazcy_section4_title: "Adaptation to Needs",
    obrazcy_section4_desc:
      "How to modify the clause considering business specifics.",
    obrazcy_notice_title: "Recommendations for Use",
    obrazcy_notice_desc:
      "These document samples are for guidance only and should be adapted to the specific conditions of your business. Be sure to consult with a lawyer before including arbitration clauses in contracts.",
    obrazcy_contact_title: "Need help with a contract?",
    obrazcy_contact_desc:
      "Our lawyers will help you correctly include an arbitration clause in your contracts.",
    obrazcy_feature1: "15+ ready-made contract types with clauses",
    obrazcy_feature2: "Verified wording for different spheres",
    obrazcy_feature3: "Recommendations for adapting to your business",
    obrazcy_feature4: "Legal consultations on implementation",
    // --- END: Translations for Document Samples page ---

    // Переводы для страницы Положения о сборах
    sborahi_title: "Fee Provisions",
    sborahi_subtitle: "Arbitration costs and fees",
    sborahi_info_title: "Document information",
    sborahi_info_name: "Provisions on arbitration costs and fees",
    sborahi_info_status: "Active document",
    sborahi_info_format: "PDF document",
    sborahi_info_language: "Russian",
    sborahi_section1_title: "Arbitration fees",
    sborahi_section1_desc:
      "Amounts and procedure for payment of fees for dispute resolution",
    sborahi_section2_title: "Party expenses",
    sborahi_section2_desc:
      "Compensation of expenses for representatives and expertise",
    sborahi_section3_title: "Benefits and discounts",
    sborahi_section3_desc: "Conditions for granting benefits when paying fees",
    sborahi_contact_title: "Questions about fees and expenses?",
    sborahi_contact_desc:
      "Get detailed consultation on arbitration fee amounts and payment procedures",

    // --- START: Translations for Claim with Sole Arbitrator page ---
    isk_edin_arbitr_title: "Statement of Claim Sample",
    isk_edin_arbitr_subtitle:
      "Template for filing a claim to be heard by a sole arbitrator",
    isk_benefit1_title: "Clear Structure",
    isk_benefit1_desc:
      "A ready-made statement of claim template for quick preparation.",
    isk_benefit2_title: "Sole Arbitrator",
    isk_benefit2_desc:
      "Speeds up the dispute resolution process, appointed by the chairman.",
    isk_benefit3_title: "Online Participation",
    isk_benefit3_desc:
      "The template includes a motion for online participation.",
    isk_benefit4_title: "Ready-made Wording",
    isk_benefit4_desc:
      "Helps to correctly state the claims and circumstances of the case.",
    isk_info_title: "Document Information",
    isk_info_name: "Statement of Claim Sample with a Sole Arbitrator",
    isk_info_status: "Recommended template",
    isk_info_purpose_title: "Document Purpose",
    isk_info_purpose_desc: "Filing a statement of claim with the arbitration.",
    isk_section1_title: "Party Details",
    isk_section1_desc:
      "Complete information about the claimant, respondent, and their representatives.",
    isk_section2_title: "Description of the Dispute",
    isk_section2_desc:
      "Statement of the circumstances of the case and the grounds for the claim.",
    isk_section3_title: "Claims",
    isk_section3_desc:
      "Clearly formulated claims against the respondent, including amounts.",
    isk_section4_title: "Procedural Motions",
    isk_section4_desc:
      "Requests for the appointment of an arbitrator and online hearings.",
    field_format_value: "PDF document",
    // --- END: Translations for Claim with Sole Arbitrator page ---

    // --- START: Translations for Response to Claim page ---
    otzyv_isk_title: "Response to the Statement of Claim",
    otzyv_isk_subtitle:
      "Template for preparing a response to a claim with a sole arbitrator",
    otzyv_benefit1_title: "Ready Structure",
    otzyv_benefit1_desc: "Saves time on document preparation.",
    otzyv_benefit2_title: "Argued Position",
    otzyv_benefit2_desc: "Helps to clearly state your objections to the claim.",
    otzyv_benefit3_title: "Procedural Requests",
    otzyv_benefit3_desc: "Includes requests to review the case materials.",
    otzyv_benefit4_title: "Risk Reduction",
    otzyv_benefit4_desc: "Helps to avoid mistakes when drafting a response.",
    otzyv_info_title: "Document Information",
    otzyv_info_name: "Response to the Statement of Claim",
    otzyv_info_status: "Recommended template",
    otzyv_info_purpose_title: "Document Purpose",
    otzyv_info_purpose_desc:
      "Presenting one's position on the received statement of claim.",
    otzyv_section1_title: "Introductory Part",
    otzyv_section1_desc:
      "Indication of the case number, parties and details of the arbitration.",
    otzyv_section2_title: "Substantive Objections",
    otzyv_section2_desc:
      "A detailed statement of the arguments against the claimant's demands.",
    otzyv_section3_title: "Evidence",
    otzyv_section3_desc:
      "A list of attached documents supporting the position.",
    otzyv_section4_title: "Request Part",
    otzyv_section4_desc:
      "Formulation of a request to the arbitration, for example, to dismiss the claim.",
    // --- END: Translations for Response to Claim page ---

    // --- START: Translations for Case materials review page ---
    poroznom_title: "Procedure for reviewing case materials",
    poroznom_subtitle: "Rules and steps for accessing case materials",
    poroznom_benefit1_title: "Process Transparency",
    poroznom_benefit1_desc:
      "Ensures the right of the parties to access information.",
    poroznom_benefit2_title: "Filing an application",
    poroznom_benefit2_desc: "A simple and clear application process.",
    poroznom_benefit3_title: "Convenient time",
    poroznom_benefit3_desc: "Coordination of time for reviewing materials.",
    poroznom_benefit4_title: "Confidentiality",
    poroznom_benefit4_desc: "Compliance with confidentiality rules.",
    poroznom_info_title: "Document Information",
    poroznom_info_name: "Procedure for reviewing case materials",
    poroznom_info_status: "Active document",
    poroznom_info_purpose_title: "Document Purpose",
    poroznom_info_purpose_desc:
      "Regulation of the procedure for parties' access to arbitration case materials.",
    poroznom_section1_title: "Filing an application",
    poroznom_section1_desc: "Who and in what form can apply for review.",
    poroznom_section2_title: "Review periods",
    poroznom_section2_desc:
      "The time limits within which the arbitration considers the application and sets a time.",
    poroznom_section3_title: "Review procedure",
    poroznom_section3_desc:
      "Rules of conduct during the review, the possibility of copying.",
    poroznom_section4_title: "Restrictions",
    poroznom_section4_desc:
      "Cases where access to case materials may be restricted.",
    // --- END: Translations for Case materials review page ---

    // --- START: Translations for Claim submission procedure page ---
    porpod_title: "Procedure for filing statements of claim",
    porpod_subtitle: "Rules and steps for filing a claim with the arbitration",
    porpod_benefit1_title: "Clear instructions",
    porpod_benefit1_desc: "Step-by-step guide to filing a statement of claim.",
    porpod_benefit2_title: "Electronic filing",
    porpod_benefit2_desc: "Possibility of filing documents electronically.",
    porpod_benefit3_title: "Compliance with deadlines",
    porpod_benefit3_desc:
      "Information on procedural deadlines for filing documents.",
    porpod_benefit4_title: "Document requirements",
    porpod_benefit4_desc: "List and format of required documents.",
    porpod_info_title: "Document Information",
    porpod_info_name: "Procedure for filing and accepting statements of claim",
    porpod_info_status: "Active document",
    porpod_info_purpose_title: "Document Purpose",
    porpod_info_purpose_desc:
      "Regulation of the procedure for filing and accepting statements of claim in arbitration.",
    porpod_section1_title: "Form and content",
    porpod_section1_desc:
      "Requirements for the design and content of the statement of claim.",
    porpod_section2_title: "Filing methods",
    porpod_section2_desc:
      "Possible filing methods: in person, by mail, electronically.",
    porpod_section3_title: "Attached documents",
    porpod_section3_desc: "Mandatory list of documents attached to the claim.",
    porpod_section4_title: "Acceptance or return",
    porpod_section4_desc:
      "Grounds for accepting a statement of claim for proceedings or returning it.",
    // --- END: Translations for Claim submission procedure page ---

    // --- START: Translations for Case review procedure page ---
    porrasarb_title: "Procedure for reviewing arbitration cases",
    porrasarb_subtitle:
      "Stages and procedures for resolving disputes in arbitration",
    porrasarb_benefit1_title: "Efficiency",
    porrasarb_benefit1_desc: "Streamlined procedures for a quick resolution.",
    porrasarb_benefit2_title: "Confidentiality",
    porrasarb_benefit2_desc: "The private nature of the proceedings.",
    porrasarb_benefit3_title: "Flexibility",
    porrasarb_benefit3_desc:
      "The ability to adapt the procedure to the needs of the parties.",
    porrasarb_benefit4_title: "Enforceability of decisions",
    porrasarb_benefit4_desc: "Arbitration awards are legally binding.",
    porrasarb_info_title: "Document Information",
    porrasarb_info_name: "Procedure for reviewing arbitration cases",
    porrasarb_info_status: "Active document",
    porrasarb_info_purpose_title: "Document Purpose",
    porrasarb_info_purpose_desc:
      "Description of the stages of arbitration proceedings from the beginning to the issuance of a decision.",
    porrasarb_section1_title: "Preparation for the hearing",
    porrasarb_section1_desc:
      "Formation of the arbitral tribunal, exchange of documents.",
    porrasarb_section2_title: "Case hearing",
    porrasarb_section2_desc:
      "Procedure for holding hearings, presenting evidence.",
    porrasarb_section3_title: "Making a decision",
    porrasarb_section3_desc:
      "The procedure for adopting and announcing the arbitration award.",
    porrasarb_section4_title: "Completion of proceedings",
    porrasarb_section4_desc:
      "Termination of the proceedings and enforcement of the award.",
    // --- END: Translations for Case review procedure page ---

    // --- START: Translations for Arbitration case stages page ---
    schema_title: "Stages of an arbitration case",
    schema_subtitle: "A visual diagram of the arbitration proceedings process",
    schema_benefit1_title: "Clarity",
    schema_benefit1_desc: "A simple and clear diagram of the entire process.",
    schema_benefit2_title: "Key stages",
    schema_benefit2_desc: "Highlighting the main stages of the proceedings.",
    schema_benefit3_title: "Timelines",
    schema_benefit3_desc: "Estimated timelines for each stage.",
    schema_benefit4_title: "Actions of the parties",
    schema_benefit4_desc:
      "What is required from the claimant and respondent at each step.",
    schema_info_title: "Document Information",
    schema_info_name: "Stages of an arbitration case",
    schema_info_status: "Information diagram",
    schema_info_purpose_title: "Document Purpose",
    schema_info_purpose_desc:
      "Visualization of the arbitration process for better understanding.",
    // --- END: Translations for Arbitration case stages page ---

    // Общие переводы для документов
    document_view: "Document view",
    document_loading: "Loading document...",
    document_download: "Download PDF",
    document_consultation_needed: "Need consultation on regulations?",
    document_consultation_desc:
      "Our specialists are ready to answer your questions about arbitration procedures",
    field_name: "Name",
    field_version: "Version",
    field_format: "Format",
    field_language: "Language",
    field_status: "Status",
    reglament_section1_title: "I. General Provisions",
    reglament_section1_desc:
      "Principles of operation, structure, and powers of the arbitration",
    reglament_section2_title: "II. Arbitral Proceedings",
    reglament_section2_desc:
      "Procedures for filing documents, deadlines, and languages of the proceedings",
    reglament_section3_title: "III. Commencement of Proceedings",
    reglament_section3_desc:
      "Procedure for accepting applications and forming the arbitral tribunal",
    reglament_section4_title: "IV. Procedure of Examination",
    reglament_section4_desc:
      "Jurisdiction of the arbitration, timeframes, and rules for dispute resolution",
    reglament_section5_title: "V. Arbitral Award",
    reglament_section5_desc:
      "Adoption, form, and correction of arbitral awards",
    reglament_section6_title: "VI. Enforcement of Awards",
    reglament_section6_desc: "Voluntary and compulsory enforcement of awards",

    nav_group_procedures: "Core Documents & Procedures",
    nav_group_samples: "Samples & Templates",
  },
  kz: {
    page_title_main: "Басты бет | Арбитраждық шешімдердің халықаралық орталығы",
    logo_text: "Арбитраждық шешімдердің халықаралық орталығы",
    nav_main: "Басты бет",
    nav_about: "Біз туралы",
    nav_documents: "Құжаттар",
    nav_raspiski: "Расписка",
    nav_arbitrazh_sogl: "Арбитраждық келісім",
    nav_universal_ogovorka: "Бірыңғай арбитраждық шарт",
    nav_reglament: "Регламент",
    nav_sborahi: "Алымдар туралы ереже",
    nav_reestr: "Арбитрлер тізілімі",
    nav_sogl: "Үлгі келісім",
    nav_obrazcy: "Құжат үлгілері",
    nav_pogashenie: "Борышты өтеу туралы келісім",
    nav_isk_edin_arbitr: "Жалғыз арбитрмен талап арыз",
    nav_otzyv_isk: "Талап арызға пікір",
    nav_poroznom: "Іс материалдарымен танысу",
    nav_porpod: "Талап арыз беру тәртібі",
    nav_porrasarb: "Істерді қарау тәртібі",
    nav_schema: "Істің өту кезеңдері", // <-- ЖАҢА АУДАРМА
    nav_news: "Жаңалықтар",
    nav_contacts: "Байланыс",
    hero_title: "Арбитраж(АШХО) Арбитраждық шешімдердің халықаралық орталығы",
    hero_subtitle:
      "Азаматтық-құқықтық дауларды ҚР заңнамасын қолдану арқылы — ел ішінде және одан тыс жерлерде шешеміз. Жеке және заңды тұлғалар үшін — тұрғылықты жеріне немесе тараптардың орналасқан жеріне қарамастан.",
    hero_button_about: "Біз туралы толығырақ",
    hero_slogan:
      "Біз кім дұрыс екенін шешпейміз, біз қалай алға жылжу керегін шешеміз.",
    hero_button_reestr: "Арбитрлер тізілімі",
    hero_card1_title: "Арбитраж төрағасы",
    main_welcome: "Біздің сайтқа қош келдіңіз",
    main_law_text:
      "Арбитраждық шешімдердің халықаралық орталығы Қазақстан Республикасының 2016 жылғы 8 сәуірдегі №488 «Арбитраж туралы» заңының талаптарына сәйкес құрылған",
    main_arbiters:
      "Дауларды бұрын сотта судья болып жұмыс істеген арбитрлер қарайды",
    main_cases: "Арбитраж мынадай істерді қарайды:",
    main_cases_list:
      "Тұрғын үй; жер; еңбек; борышты өндіру; коммуналдық қызметтерді өндіру; банктік, қарыз шарттары бойынша, кепілдік; шаруашылық субъектілерінің шарттық міндеттемелері; зиянды өтеу (мүліктік, жол-көлік оқиғасы нәтижесінде денсаулыққа келтірілген зиян) және азаматтық-құқықтық қатынастар мен шарттардан (мәмілелерден) туындайтын басқа дау-дамайлар",
    main_consent: "Дау тараптардың келісімімен қаралады",
    main_consent_text:
      "немесе біздің Арбитражда дауды қарау туралы шарттарда арбитраждық ескерту болған кезде",
    main_location: "Дау тараптардың тұрғылықты жері",
    main_location_text:
      "немесе орналасқан жеріне қарамастан, сондай-ақ онлайн режимінде қаралады",
    main_fee: "Төрелік алым",
    main_fee_text:
      "жоғарыда аталған барлық дауларға жеке тұлғалар үшін 2%, заңды тұлғалар үшін талап сомасының 5% құрайды, бірақ 20 ЕСК-дан кем емес",
    main_decision: "Арбитраж шешімі бірден заңды күшіне енеді",
    main_decision_text:
      "және жеке немесе мемлекеттік сот орындаушысы орындайды",
    main_timeframe: "Дау бір ай ішінде қаралады",
    about_title: "Біздің компания туралы",
    about_intro: "Арбитраждық сот төрелігінің институты",
    about_p1:
      "Кәсіпкерлік қызметті жүзеге асыру кезінде көбінесе құқықтық сипаттағы бірқатар мәселелермен кездесуге тура келетін жағдайлар туындайды, оларды шешу тек азаматтық сот ісін жүргізу тәртібінде ғана мүмкін болады.",
    about_p2:
      "Заманауи әлемде халықаралық тәжірибе көрсеткендей, жалпы юрисдикция соттарымен (мемлекеттік соттар) қатар, шарттық және өзге де азаматтық-құқықтық қатынастардан туындайтын дау-дамайлар мен келіспеушіліктерді шешудің балама түрі ретінде көбінесе арбитраждық сот төрелігінің институты қызмет етеді.",
    about_p3:
      "Қазақстан Республикасында арбитраждық сот төрелігінің институты 2016 жылғы 8 сәуірдегі №88-V «Арбитраж туралы» Заңын қабылдау нәтижесінде өзінің практикалық қолданысын тапты.",
    about_p4:
      "Осылайша, арбитраждық сот төрелігі меншік нысанына қарамастан (АҚ, ЖШС, ЖК, жеке тұлға) тараптармен таңдалатын, мүліктік және олармен байланысты мүліктік емес дауларды шешу үшін коммерциялық арбитраждық сотты білдіреді, осылайша іскерлік серіпкерлер арасындағы дауды шешудің заманауи және өркениетті тәсілі болып табылады.",
    about_general_info:
      "«Арбитраждық шешімдердің халықаралық орталығы» туралы жалпы ақпарат",
    about_p5:
      "«Арбитраждық шешімдердің халықаралық орталығы» ЖШС тұрақты әрекет ететін арбитраж функцияларын жүзеге асыратын коммерциялық заңды тұлға болып табылады.",
    about_p6:
      "Арбитраж Заңның талаптарына сәйкес құрылған, өз қызметінде Заң ережелерімен, Арбитраж регламентімен, Арбитраждың өзге де ішкі нормативтік құжаттарымен басшылыққа алады.",
    about_p7:
      "Арбитраждың арбитрлер тізіліміне 50-ден астам арбитр кіреді, сот жүйесінде, ҚР құқық қорғау органдарында көп жылдық практикалық жұмыс тәжірибесі бар жоғары білікті заңгерлерден тұрады.",
    about_p8:
      "Арбитраждың мақсаты тәуелсіз және тәжірибелі кәсіпқойлардың қатысуымен азаматтық-құқықтық (шарттық) дауларды тиімді, жедел және объективті қарау болып табылады.",
    about_mission_title: "Біздің миссиямыз",
    about_mission_text:
      "Белгіленген юрисдикция шеңберінде дауларды әділ және бейтарап шешуді қамтамасыз ету, барлық әділет принциптерін сақтау және барлық тараптардың мүдделерін қорғау.",
    about_team_title: "Тәжірибелі команда",
    about_team_desc: "Көп жылдық тәжірибесі бар кәсіби заңгерлер",
    about_solutions_title: "Нақты шешімдер",
    about_solutions_desc: "Әрбір іске жеке көзқарас",
    about_recognition_title: "Тану",
    about_recognition_desc: "Сапа мен кәсіпқойлықтың жоғары стандарттары",
    about_reliability_title: "Сенімділік",
    about_reliability_desc: "Барлық процедураларды сақтауға кепілдік",
    about_why_choose_title: "Неліктен бізді таңдайды?",
    about_years_experience: "жыл жұмыс тәжірибесі",
    about_successful_cases: "табысты іс",
    about_satisfied_clients: "қанағаттанған клиент",
    news_title: "Компания жаңалықтары",
    news_p1:
      "Мұнда жаңалықтар легі болады. Әрбір жаңалықты жеке блок ретінде рәсімдеуге болады.",
    contact_title: "Байланыс ақпараты",
    contact_phone: "Нөмірлер",
    contact_address: "Астана қ., Тұран даңғылы, 83/1 үй, 122 кеңсе",
    contact_work_hour: "Жұмыс уақыты",
    contact_form_title: "Бізбен хабарласыңыз",
    our_contact: "Байланыс",
    contact_t_address: "Мекен-жай",
    name_form: "Аты *",
    message_form: "Хабар *",
    contact_phone_form: "Телефон",
    send_message: "Хабарлама жіберу",
    contact_email_main: "Байланыс үшін Email: arbitragerk.kz@gmail.com",
    footer_copyright:
      "© 2025 Арбитраждық шешімдердің халықаралық орталығы. Барлық құқықтар қорғалған.",
    working_hours: "Жұмыс режимі",
    contact_info: "Байланыс ақпараты",
    location: "Орналасқан жері",
    weekdays: "Дс - Жм",
    weekend: "Сб - Жс",
    work_time: "9:00 - 18:00",
    weekend_text: "Демалыс",
    contact_email_form: "Email *",
    contact_email_placeholder: "your@email.com",
    contact_phone_placeholder: "+7 (___) ___-__-__",
    contact_form_notice_title: "Назар аударыңыз:",
    contact_form_notice_desc:
      "Біз барлық өтініштерге жұмыс күндері 24 сағат ішінде жауап береміз.",
    contact_methods_title: "Байланыс тәсілдері",
    contact_methods_desc: "Кеңес алудың ыңғайлы тәсілін таңдаңыз",
    contact_method1_title: "Телефон арқылы кеңес алу",
    contact_method1_desc: "Телефон арқылы жылдам кеңес алыңыз",
    contact_method2_title: "Email арқылы кеңес алу",
    contact_method2_desc: "Электрондық пошта арқылы толық сұрау жіберіңіз",
    contact_method3_title: "Жеке кездесу",
    contact_method3_desc: "Толық кеңес алу үшін біздің кеңсеге келіңіз",

    pogashenie_title: "Қарызды өтеу туралы келісім",
    pogashenie_subtitle:
      "Арбитраждық ескертпесі бар борыштық міндеттемелерді реттеуге арналған үлгі",
    pogashenie_benefit1_title: "Заңды қорғау",
    pogashenie_benefit1_desc:
      "Төлем кешіктірілген жағдайда кредитордың құқықтарына кепілдік береді.",
    pogashenie_benefit2_title: "Анық шарттар",
    pogashenie_benefit2_desc:
      "Келіспеушіліктерді болдырмау үшін нақты мерзімдер мен соманы анықтайды.",
    pogashenie_benefit3_title: "Арбитраждық ескертпе",
    pogashenie_benefit3_desc:
      "Астана қаласының Арбитражында дауларды шешу туралы тармақты қамтиды.",
    pogashenie_benefit4_title: "Уақытты үнемдеу",
    pogashenie_benefit4_desc:
      "Келісімдерді жылдам рәсімдеуге арналған дайын үлгі.",
    pogashenie_info_title: "Құжат туралы ақпарат",
    pogashenie_info_name: "Қарызды өтеу туралы келісім",
    pogashenie_info_status: "Ұсынылатын үлгі",
    pogashenie_info_format: "PDF құжаты",
    pogashenie_info_purpose_title: "Құжаттың мақсаты",
    pogashenie_info_purpose_desc:
      "Борышты төлеу мерзімдері мен тәртібі туралы келісімдерді бекіту.",
    pogashenie_section1_title: "Келісімнің мәні",
    pogashenie_section1_desc:
      "Тараптар қарыздың бар екенін және мөлшерін мойындайды және келіседі.",
    pogashenie_section2_title: "Өтеу тәртібі",
    pogashenie_section2_desc:
      "Қарыз толықтай өтелуі тиіс нақты мерзім белгіленеді.",
    pogashenie_section3_title: "Тараптардың жауапкершілігі",
    pogashenie_section3_desc:
      "Мерзімі өткен әрбір күн үшін 1% мөлшерінде айыппұл санкциялары қарастырылған.",
    pogashenie_section4_title: "Дауларды шешу",
    pogashenie_section4_desc:
      "Осы келісім бойынша барлық даулар 'Астана қаласының Арбитражында' шешілуге жатады.",
    pogashenie_contact_title: "Келісімді рәсімдеуге көмек керек пе?",
    pogashenie_contact_desc:
      "Біздің заңгерлер осы үлгіні сіздің жағдайыңызға бейімдеуге көмектеседі.",

    // Переводы для реестра арбитров
    reestr_title: "Арбитрлер тізілімі",
    reestr_subtitle: "Орталықтың аккредитталған арбитрлерінің тізімі",
    reestr_info_title: "Құжат туралы ақпарат",
    reestr_info_name:
      "Арбитраждық шешімдердің халықаралық орталығының арбитрлер тізілімі",
    reestr_info_status: "Қолданыстағы құжат",
    reestr_info_format: "PDF құжат",
    reestr_info_language: "Орыс тілі",
    reestr_info_updated: "Соңғы жаңарту",
    reestr_section1_title: "Білікті арбитрлер",
    reestr_section1_desc:
      "Мамандануы мен жұмыс тәжірибесі көрсетілген арбитрлер тізімі",
    reestr_section2_title: "Сот тәжірибесі",
    reestr_section2_desc:
      "Мемлекеттік соттарда судья болып жұмыс істеген тәжірибесі бар арбитрлер",
    reestr_section3_title: "Арбитрлердің мамандануы",
    reestr_section3_desc: "Арбитрлер қарайтын құқық салалары мен дау түрлері",
    reestr_section4_title: "Байланыс ақпараты",
    reestr_section4_desc:
      "Істерге тағайындау үшін арбитрлермен байланысу жолдары",
    reestr_contact_title: "Арбитр таңдауда көмек керек пе?",
    reestr_contact_desc:
      "Біздің мамандар сіздің дауыңыздың ерекшелігін ескере отырып арбитр таңдауға көмектеседі",
    reestr_stats_total: "Барлығы арбитрлер",
    reestr_stats_judges: "Бұрынғы судьялар",
    reestr_stats_experience: "Орташа жұмыс тәжірибесі",
    reestr_stats_specializations: "Мамандықтар",

    // Переводы для типового соглашения
    sogl_title: "Үлгі келісім",
    sogl_subtitle: "Арбитраждық келісім үлгісі",
    sogl_info_title: "Құжат туралы ақпарат",
    sogl_info_name: "Үлгі арбитраждық келісім",
    sogl_info_status: "Қолданыстағы құжат",
    sogl_info_format: "PDF құжат",
    sogl_info_language: "Орыс тілі",
    sogl_info_purpose: "Құжаттың мақсаты",
    sogl_section1_title: "Келісім құрылымы",
    sogl_section1_desc:
      "Арбитраждық келісімнің негізгі бөлімдері мен тармақтары",
    sogl_section2_title: "Қолдану шарттары",
    sogl_section2_desc: "Үлгі келісімді қашан және қалай пайдалану керек",
    sogl_section3_title: "Құқықтық негіздер",
    sogl_section3_desc: "Арбитраждық келісімдерге арналған заң негізі",
    sogl_section4_title: "Толтыру ұсыныстары",
    sogl_section4_desc: "Келісімді бейімдеу бойынша практикалық кеңестер",
    sogl_contact_title: "Келісім жасауда көмек керек пе?",
    sogl_contact_desc:
      "Біздің заңгерлер үлгі келісімді сіздің нақты қажеттіліктеріңізге бейімдеуге көмектеседі",
    sogl_benefits_title: "Пайдалану артықшылықтары",
    sogl_benefit1: "ҚР заңнамасына сәйкестік",
    sogl_benefit2: "Дәлелденген құқықтық практика",
    sogl_benefit3: "Пайдалануға дайын үлгі",
    sogl_benefit4: "Жеке бейімдеу мүмкіндігі",

    // --- БАСТАУ: Құжат үлгілері бетіне арналған аудармалар ---
    obrazcy_title: "Құжат үлгілері",
    obrazcy_subtitle: "Ұсынылған арбитраждық ескертумен құжаттар",
    obrazcy_benefit1_title: "Тексерілген тұжырымдамалар",
    obrazcy_benefit1:
      "Тәуекелдерді азайту үшін заңды түрде тексерілген мәтіндер.",
    obrazcy_benefit2_title: "Талаптарға сәйкестік",
    obrazcy_benefit2: "Арбитраж заңнамасына сәйкестік кепілдігі.",
    obrazcy_benefit3_title: "Уақытты үнемдеу",
    obrazcy_benefit3: "Шарттарға жылдам қосуға арналған дайын үлгілер.",
    obrazcy_benefit4_title: "Тәуекелдерді азайту",
    obrazcy_benefit4:
      "Соттылық туралы дауларды болдырмау үшін нақты тұжырымдамалар.",
    obrazcy_info_title: "Құжат туралы ақпарат",
    obrazcy_info_name: "Ұсынылған арбитраждық ескертумен құжат үлгілері",
    obrazcy_info_status: "Қолданыстағы құжат",
    obrazcy_info_format: "PDF құжат",
    obrazcy_info_purpose: "Құжаттың мақсаты",
    obrazcy_info_purpose_value:
      "Арбитраждық ескертулері бар дайын шарт үлгілері",
    obrazcy_section1_title: "Шарт түрлері",
    obrazcy_section1_desc: "Арбитраждық ескертулері бар әртүрлі шарт түрлері.",
    obrazcy_section2_title: "Ұсынылған тұжырымдамалар",
    obrazcy_section2_desc: "Арбитраждық ескертулердің дәлелденген нұсқалары.",
    obrazcy_section3_title: "Практикалық мысалдар",
    obrazcy_section3_desc: "Әртүрлі қызмет салалары үшін нақты үлгілер.",
    obrazcy_section4_title: "Қажеттіліктерге бейімдеу",
    obrazcy_section4_desc:
      "Бизнес ерекшеліктеріне сай ескертуді қалай өзгерту керек.",
    obrazcy_notice_title: "Пайдалану бойынша ұсыныстар",
    obrazcy_notice_desc:
      "Бұл құжат үлгілері ұсыныс ретінде берілген және сіздің бизнесіңіздің нақты шарттарына бейімделуі керек. Шарттарға арбитраждық ескертулерді қосар алдында міндетті түрде заңгермен кеңесіңіз.",
    obrazcy_contact_title: "Шартпен көмек керек пе?",
    obrazcy_contact_desc:
      "Біздің заңгерлер сіздің шарттарыңызға арбитраждық ескертуді дұрыс қосуға көмектеседі.",
    obrazcy_feature1: "15+ ескертулері бар дайын шарт түрлері",
    obrazcy_feature2: "Әр түрлі салалар үшін тексерілген тұжырымдамалар",
    obrazcy_feature3: "Сіздің бизнесіңізге бейімделу бойынша ұсыныстар",
    obrazcy_feature4: "Енгізу бойынша заңгерлердің кеңестері",
    // --- АЯҚТАЛУ: Құжат үлгілері бетіне арналған аудармалар ---

    // Переводы для страницы Положения о сборах
    sborahi_title: "Алымдар туралы ереже",
    sborahi_subtitle: "Арбитраждық шығындар мен алымдар",
    sborahi_info_title: "Құжат туралы ақпарат",
    sborahi_info_name: "Арбитраждық шығындар мен алымдар туралы ереже",
    sborahi_info_status: "Қолданыстағы құжат",
    sborahi_info_format: "PDF құжат",
    sborahi_info_language: "Орыс тілі",
    sborahi_section1_title: "Арбитраждық алымдар",
    sborahi_section1_desc:
      "Дауларды қарау үшін алымдарды төлеу мөлшері мен тәртібі",
    sborahi_section2_title: "Тараптардың шығындары",
    sborahi_section2_desc:
      "Өкілдер мен сараптамаларға жұмсалған шығындарды өтеу",
    sborahi_section3_title: "Жеңілдіктер мен жеңілдіктер",
    sborahi_section3_desc: "Алымдарды төлеу кезінде жеңілдіктер беру шарттары",
    sborahi_contact_title: "Алымдар мен шығындар бойынша сұрақтар?",
    sborahi_contact_desc:
      "Арбитраждық алымдардың мөлшері мен оларды төлеу тәртібі бойынша толық кеңес алыңыз",

    // --- БАСТАУ: Жалғыз арбитрмен талап арыз бетіне арналған аудармалар ---
    isk_edin_arbitr_title: "Талап арыз үлгісі",
    isk_edin_arbitr_subtitle:
      "Жалғыз арбитрдің қарауына талап арыз беруге арналған үлгі",
    isk_benefit1_title: "Анық құрылым",
    isk_benefit1_desc: "Жылдам дайындалуға арналған дайын талап арыз үлгісі.",
    isk_benefit2_title: "Жалғыз арбитр",
    isk_benefit2_desc:
      "Дауды қарау процесін жылдамдатады, төраға тағайындайды.",
    isk_benefit3_title: "Онлайн-қатысу",
    isk_benefit3_desc: "Үлгіде онлайн-режимде қатысу туралы өтініш бар.",
    isk_benefit4_title: "Дайын тұжырымдамалар",
    isk_benefit4_desc:
      "Талаптар мен істің мән-жайын дұрыс баяндауға көмектеседі.",
    isk_info_title: "Құжат туралы ақпарат",
    isk_info_name: "Жалғыз арбитрмен талап арыз үлгісі",
    isk_info_status: "Ұсынылатын үлгі",
    isk_info_purpose_title: "Құжаттың мақсаты",
    isk_info_purpose_desc: "Арбитражға талап арыз беру.",
    isk_section1_title: "Тараптардың деректемелері",
    isk_section1_desc:
      "Талапкер, жауапкер және олардың өкілдері туралы толық ақпарат.",
    isk_section2_title: "Даудың сипаттамасы",
    isk_section2_desc: "Істің мән-жайы мен талап арыз негіздерін баяндау.",
    isk_section3_title: "Талап арыз талаптары",
    isk_section3_desc: "Жауапкерге қойылатын нақты тұжырымдалған талаптар.",
    isk_section4_title: "Процессуалдық өтініштер",
    isk_section4_desc:
      "Арбитрді тағайындау және отырыстарды онлайн өткізу туралы сұраулар.",
    field_format_value: "PDF құжат",
    // --- АЯҚТАЛУ: Жалғыз арбитрмен талап арыз бетіне арналған аудармалар ---

    // --- БАСТАУ: Талап арызға пікір бетіне арналған аудармалар ---
    otzyv_isk_title: "Талап арызға пікір",
    otzyv_isk_subtitle:
      "Жалғыз арбитрмен талап арызға пікір дайындауға арналған үлгі",
    otzyv_benefit1_title: "Дайын құрылым",
    otzyv_benefit1_desc: "Құжатты дайындауға уақытты үнемдейді.",
    otzyv_benefit2_title: "Дәлелді ұстаным",
    otzyv_benefit2_desc:
      "Талап арыз бойынша өз қарсылықтарын нақты баяндауға көмектеседі.",
    otzyv_benefit3_title: "Процессуалдық өтініштер",
    otzyv_benefit3_desc:
      "Іс материалдарымен танысу туралы өтініштерді қамтиды.",
    otzyv_benefit4_title: "Тәуекелдерді азайту",
    otzyv_benefit4_desc:
      "Пікірді құрастыру кезінде қателіктерді болдырмауға көмектеседі.",
    otzyv_info_title: "Құжат туралы ақпарат",
    otzyv_info_name: "Талап арызға пікір",
    otzyv_info_status: "Ұсынылатын үлгі",
    otzyv_info_purpose_title: "Құжаттың мақсаты",
    otzyv_info_purpose_desc: "Алынған талап арыз бойынша өз ұстанымын білдіру.",
    otzyv_section1_title: "Кіріспе бөлім",
    otzyv_section1_desc:
      "Іс нөмірін, тараптарды және арбитраждың деректемелерін көрсету.",
    otzyv_section2_title: "Мәні бойынша қарсылықтар",
    otzyv_section2_desc:
      "Талапкердің талаптарына қарсы дәлелдерді егжей-тегжейлі баяндау.",
    otzyv_section3_title: "Дәлелдемелер",
    otzyv_section3_desc:
      "Ұстанымды растайтын қоса берілген құжаттардың тізбесі.",
    otzyv_section4_title: "Өтініш бөлімі",
    otzyv_section4_desc:
      "Арбитражға өтінішті тұжырымдау, мысалы, талап арызды қанағаттандырудан бас тарту.",
    // --- АЯҚТАЛУ: Талап арызға пікір бетіне арналған аудармалар ---

    // --- БАСТАУ: Іс материалдарымен танысу тәртібі бетіне арналған аудармалар ---
    poroznom_title: "Іс материалдарымен танысу тәртібі",
    poroznom_subtitle: "Іс материалдарына қол жеткізу ережелері мен қадамдары",
    poroznom_benefit1_title: "Процестің ашықтығы",
    poroznom_benefit1_desc:
      "Тараптардың ақпаратқа қол жеткізу құқығын қамтамасыз етеді.",
    poroznom_benefit2_title: "Өтініш беру",
    poroznom_benefit2_desc: "Қарапайым және түсінікті өтініш беру процесі.",
    poroznom_benefit3_title: "Ыңғайлы уақыт",
    poroznom_benefit3_desc: "Материалдармен танысу уақытын келісу.",
    poroznom_benefit4_title: "Құпиялылық",
    poroznom_benefit4_desc: "Құпиялылық ережелерін сақтау.",
    poroznom_info_title: "Құжат туралы ақпарат",
    poroznom_info_name: "Іс материалдарымен танысу тәртібі",
    poroznom_info_status: "Қолданыстағы құжат",
    poroznom_info_purpose_title: "Құжаттың мақсаты",
    poroznom_info_purpose_desc:
      "Тараптардың арбитраждық іс материалдарына қол жеткізу процедурасын реттеу.",
    poroznom_section1_title: "Өтініш беру",
    poroznom_section1_desc:
      "Кім және қандай нысанда танысуға өтініш бере алады.",
    poroznom_section2_title: "Қарау мерзімдері",
    poroznom_section2_desc:
      "Арбитраж өтінішті қандай мерзімде қарайды және уақытты белгілейді.",
    poroznom_section3_title: "Танысу процедурасы",
    poroznom_section3_desc:
      "Танысу барысындағы мінез-құлық ережелері, көшіру мүмкіндігі.",
    poroznom_section4_title: "Шектеулер",
    poroznom_section4_desc:
      "Іс материалдарына қол жеткізу шектелуі мүмкін жағдайлар.",
    // --- АЯҚТАЛУ: Іс материалдарымен танысу тәртібі бетіне арналған аудармалар ---

    // --- БАСТАУ: Талап арыз беру тәртібі бетіне арналған аудармалар ---
    porpod_title: "Талап арыз беру тәртібі",
    porpod_subtitle: "Арбитражға талап арыз беру ережелері мен қадамдары",
    porpod_benefit1_title: "Анық нұсқаулар",
    porpod_benefit1_desc: "Талап арыз беру бойынша қадамдық нұсқаулық.",
    porpod_benefit2_title: "Электрондық тапсыру",
    porpod_benefit2_desc: "Құжаттарды электронды түрде тапсыру мүмкіндігі.",
    porpod_benefit3_title: "Мерзімдерді сақтау",
    porpod_benefit3_desc:
      "Құжаттарды тапсыру үшін процессуалдық мерзімдер туралы ақпарат.",
    porpod_benefit4_title: "Құжаттарға қойылатын талаптар",
    porpod_benefit4_desc: "Қажетті құжаттардың тізбесі мен форматы.",
    porpod_info_title: "Құжат туралы ақпарат",
    porpod_info_name: "Талап арыздарды беру және қабылдау тәртібі",
    porpod_info_status: "Қолданыстағы құжат",
    porpod_info_purpose_title: "Құжаттың мақсаты",
    porpod_info_purpose_desc:
      "Арбитражға талап арыздарды беру және қабылдау процедурасын реттеу.",
    porpod_section1_title: "Нысаны мен мазмұны",
    porpod_section1_desc:
      "Талап арыздың ресімделуіне және мазмұнына қойылатын талаптар.",
    porpod_section2_title: "Тапсыру тәсілдері",
    porpod_section2_desc:
      "Мүмкін болатын тапсыру тәсілдері: жеке, пошта арқылы, электронды түрде.",
    porpod_section3_title: "Қоса берілген құжаттар",
    porpod_section3_desc:
      "Талап арызға қоса берілетін міндетті құжаттар тізбесі.",
    porpod_section4_title: "Қабылдау немесе қайтару",
    porpod_section4_desc:
      "Талап арызды іс жүргізуге қабылдау немесе оны қайтару негіздері.",
    // --- АЯҚТАЛУ: Талап арыз беру тәртібі бетіне арналған аудармалар ---

    // --- БАСТАУ: Істерді қарау тәртібі бетіне арналған аудармалар ---
    porrasarb_title: "Арбитраждық істерді қарау тәртібі",
    porrasarb_subtitle: "Арбитражда дауларды қарау кезеңдері мен рәсімдері",
    porrasarb_benefit1_title: "Тиімділік",
    porrasarb_benefit1_desc:
      "Жылдам шешім қабылдау үшін оңтайландырылған рәсімдер.",
    porrasarb_benefit2_title: "Құпиялылық",
    porrasarb_benefit2_desc: "Талқылаудың жабық сипаты.",
    porrasarb_benefit3_title: "Икемділік",
    porrasarb_benefit3_desc:
      "Рәсімді тараптардың қажеттіліктеріне бейімдеу мүмкіндігі.",
    porrasarb_benefit4_title: "Шешімдердің орындалуы",
    porrasarb_benefit4_desc: "Арбитраждық шешімдердің заңды күші бар.",
    porrasarb_info_title: "Құжат туралы ақпарат",
    porrasarb_info_name: "Арбитраждық істерді қарау тәртібі",
    porrasarb_info_status: "Қолданыстағы құжат",
    porrasarb_info_purpose_title: "Құжаттың мақсаты",
    porrasarb_info_purpose_desc:
      "Арбитраждық талқылау кезеңдерін басынан бастап шешім шығарылғанға дейін сипаттау.",
    porrasarb_section1_title: "Талқылауға дайындық",
    porrasarb_section1_desc:
      "Арбитраж құрамын қалыптастыру, құжаттармен алмасу.",
    porrasarb_section2_title: "Істі тыңдау",
    porrasarb_section2_desc:
      "Отырыстарды өткізу тәртібі, дәлелдемелерді ұсыну.",
    porrasarb_section3_title: "Шешім шығару",
    porrasarb_section3_desc:
      "Арбитраждық шешімді қабылдау және жариялау рәсімі.",
    porrasarb_section4_title: "Іс жүргізуді аяқтау",
    porrasarb_section4_desc: "Талқылауды тоқтату және шешімді орындау.",
    // --- АЯҚТАЛУ: Істерді қарау тәртібі бетіне арналған аудармалар ---

    // --- БАСТАУ: Істің өту кезеңдері бетіне арналған аудармалар ---
    schema_title: "Арбитраждық істің өту кезеңдері",
    schema_subtitle: "Арбитраждық талқылау процесінің көрнекі сызбасы",
    schema_benefit1_title: "Көрнекілік",
    schema_benefit1_desc: "Барлық процестің қарапайым және түсінікті сызбасы.",
    schema_benefit2_title: "Негізгі кезеңдер",
    schema_benefit2_desc: "Талқылаудың негізгі сатыларын бөліп көрсету.",
    schema_benefit3_title: "Мерзімдер",
    schema_benefit3_desc: "Әрбір кезең үшін болжамды мерзімдер.",
    schema_benefit4_title: "Тараптардың әрекеттері",
    schema_benefit4_desc:
      "Әрбір қадамда талапкер мен жауапкерден не талап етіледі.",
    schema_info_title: "Құжат туралы ақпарат",
    schema_info_name: "Арбитраждық істің өту кезеңдері",
    schema_info_status: "Ақпараттық сызба",
    schema_info_purpose_title: "Құжаттың мақсаты",
    schema_info_purpose_desc:
      "Жақсырақ түсіну үшін арбитраждық талқылау процесін визуализациялау.",
    // --- АЯҚТАЛУ: Істің өту кезеңдері бетіне арналған аудармалар ---

    // Общие переводы для документов
    document_view: "Құжатты қарау",
    document_loading: "Құжат жүктелуде...",
    document_download: "PDF жүктеп алу",
    document_consultation_needed: "Регламент бойынша кеңес керек пе?",
    document_consultation_desc:
      "Біздің мамандар арбитраждық процедуралар туралы сұрақтарыңызға жауап беруге дайын",
    // Переводы для регламента
    reglament_subtitle: "Арбитраждық сот төрелігінің ережелері",
    reglament_info_title: "Құжат туралы ақпарат",
    reglament_info_name: "Астана қ. Арбитражының регламенті",
    reglament_info_version: "14.02.2019 ж. өзгерістер",
    reglament_info_format: "PDF құжат, 17 бет",
    reglament_info_language: "Орыс тілі",
    reglament_section1_title: "I. Жалпы ережелер",
    reglament_section1_desc:
      "Арбитраждың жұмыс принциптері, құрылымы және өкілеттіктері",
    reglament_section2_title: "II. Арбитраждық сот төрелігі",
    reglament_section2_desc:
      "Құжаттар беру процедуралары, мерзімдер және сот тілдері",
    reglament_section3_title: "III. Сот төрелігін бастау",
    reglament_section3_desc:
      "Өтінімдерді қабылдау және арбитраж құрамын қалыптастыру тәртібі",
    reglament_section4_title: "IV. Қарау тәртібі",
    reglament_section4_desc:
      "Арбитраждың құзыреті, мерзімдер және дауларды шешу ережелері",
    reglament_section5_title: "V. Арбитраж шешімі",
    reglament_section5_desc:
      "Арбитраждық шешімдерді қабылдау, нысаны және түзету",
    reglament_section6_title: "VI. Шешімдерді орындау",
    reglament_section6_desc: "Шешімдерді ерікті және мәжбүрлі орындау",
    // Общие поля
    field_name: "Атауы",
    field_version: "Нұсқа",
    field_format: "Пішім",
    field_language: "Тіл",
    field_status: "Мәртебе",

    nav_group_procedures: "Негізгі құжаттар мен рәсімдер",
    nav_group_samples: "Үлгілер мен шаблондар",
  },
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("ru");

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        t,
        translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
