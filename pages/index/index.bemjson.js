({
    block: 'b-page',
    title: 'Some silly index page',
    content: [
        {
            block: 'myblock',
            content: [
                {
                    block: 'static-text',
                    content: [
                        { elem: 'header', content: 'Тема: «Космический спектральный класс: основные моменты»' },
                        { elem: 'para', content: [ 'Расстояния планет от Солнца возрастают приблизительно в геометрической прогрессии (правило Тициуса — Боде): ', { elem: 'code', content: 'г = 0,4 + 0,3 · 2n (а.е.)' } ] },
                        { elem: 'para', content: 'Аргумент перигелия притягивает вращательный радиант, однако большинство спутников движутся вокруг своих планет в ту же сторону, в какую вращаются планеты.' },
                        {
                            elem: 'list',
                            content: {
                                block: 'ulist',
                                content: [
                                    { elem: 'item', content: 'List item 1' },
                                    { elem: 'item', content: 'List item 2' },
                                    { elem: 'item', content: 'List item 3' },
                                ]
                            }
                        },
                        { elem: 'para', content: 'Ось оценивает астероидный Млечный Путь – это скорее индикатор, чем примета. Метеорит дает случайный годовой параллакс, а время ожидания ответа составило бы 80 миллиардов лет.' },
                        {
                            elem: 'list',
                            content: {
                                block: 'olist',
                                content: [
                                    { elem: 'item', content: 'Ordered list item 1' },
                                    { elem: 'item', content: 'Ordered list item 2=====>' },
                                    { elem: 'item', content: 'Ordered list item 3' },
                                    { elem: 'item', content: 'Ordered list item 4 list item 4' }
                                ]
                            }
                        },
                        { elem: 'param', content: [ 'Стоимость: ', { block: 'price', content: 500010 }, { block: 'cy', mods: { type: 'rur' }, content: 'руб.' } ] }
                    ]
                }
            ]
        }
    ]
})
