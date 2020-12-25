const pages = [
    {
        id: 0,
        name: 'начало',
        nameIcon: `<i class="material-icons my-home-icon">home</i>`,
        link: 'home',
        subPage: null
    },
    {
        id: 1,
        name: 'ПРОДУКТИ',
        nameIcon: 'ПРОДУКТИ',
        link: 'products',
        subPage: [
            {
                id: 0,
                pageId: 1,
                subName: 'Фунгициди',
                link: 'products/fungicides'
            },
            {
                id: 1,
                pageId: 1,
                subName: 'Инсектициди',
                link: 'products/insecticides'
            },
            {
                id: 2,
                pageId: 1,
                subName: 'Акарициди',
                link: 'products/acaricides'
            },
            {
                id: 3,
                pageId: 1,
                subName: 'Нематоциди',
                link: 'products/nematocides'
            },
            {
                id: 4,
                pageId: 1,
                subName: 'Родентициди',
                link: 'products/rodenticides'
            },
            {
                id: 5,
                pageId: 1,
                subName: 'Лимациди',
                link: 'products/limatsides'
            },
            {
                id: 6,
                pageId: 1,
                subName: 'Репеленти',
                link: 'products/repellents'
            },
            {
                id: 7,
                pageId: 1,
                subName: 'Феромони',
                link: 'products/pheromones'
            },
            {
                id: 8,
                pageId: 1,
                subName: 'Хербициди',
                link: 'products/herbicides'
            },
            {
                id: 9,
                pageId: 1,
                subName: 'Десиканти',
                link: 'products/desiccants'
            },
            {
                id: 10,
                pageId: 1,
                subName: 'Растежни регулатори',
                link: 'products/regulators'
            },
        ]
    },
    {
        id: 2,
        name: 'РЕГИСТРИ',
        nameIcon: 'РЕГИСТРИ',
        link: 'registers',
        subPage: [
            {
                id: 0,
                pageId: 2,
                subName: 'фирми',
                link: 'registers/firms'
            },
            {
                id: 1,
                pageId: 2,
                subName: 'Активни Вещества',
                link: 'registers/substances'
            },
            {
                id: 2,
                pageId: 2,
                subName: 'Адюванти',
                link: 'registers/adjuvants'
            },
            {
                id: 3,
                pageId: 3,
                subName: 'Паралелна търговия',
                link: 'registers/parallel-trade'
            },
        ]
    },
    {
        id: 3,
        name: 'КУЛТУРИ',
        nameIcon: 'КУЛТУРИ',
        link: 'crops',
        subPage: null
    },
    {
        id: 4,
        name: 'ПОЛЕЗНО',
        nameIcon: 'ПОЛЕЗНО',
        link: 'practices',
        subPage: [
              {
                id: 0,
                pageId: 4,
                subName: 'законодателство',
                link: 'legislation'
            },
            {
                id: 1,
                pageId: 4,
                subName: 'добри растителнозащитни практики',
                link: 'practices'
            },
            {
                id: 2,
                pageId: 4,
                subName: 'BBCH - стадии на растеж',
                link: 'phases'
            },
            {
                id: 3,
                pageId: 4,
                subName: 'прагове на икономическа вредност',
                link: 'thresholds'
            },
            {
                id: 4,
                pageId: 4,
                subName: 'Формулации',
                link: 'formulations'
            },
            {
                id: 5,
                pageId: 4,
                subName: 'документи',
                link: 'documents'
            },
            {
                id: 6,
                pageId: 4,
                subName: 'калкулатор',
                link: 'calculator'
            }
        ],
    },
    {
        id: 5,
        name: 'КОНТАКТИ',
        nameIcon: 'КОНТАКТИ',
        link: 'contact',
        subPage: null
    }
];

export default pages;
