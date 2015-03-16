function searchContentFilm(str,films){
    var currentContainer = document.getElementsByClassName('info-film')[0]
    var currentFilm;
    for(var i=0;i<films.length;i++) {
        if (str.slice(0,-7)==films[i].name){
            currentFilm=films[i];
        }
    }
    var elementUl=document.createElement('ul');
    for(var key in currentFilm) {
        var elementLi = document.createElement('li');
        elementLi.className = 'title-value';
        var elementSpanTitle = document.createElement('span');

        var elementSpanDescription = elementSpanTitle.cloneNode();
        elementSpanTitle.innerHTML = key;
        elementSpanDescription.innerHTML = currentFilm[key];
        elementLi.appendChild(elementSpanTitle);
        elementLi.appendChild(elementSpanDescription);
        elementUl.appendChild(elementLi);
    }
    currentContainer.appendChild(elementUl)
}
function searchCommentFilms(str,commentFilms,createNewCollection,newArgumentsArgs){

    var comments;
    for (var i=0; i<commentFilms.length; i++) {
        var currentCommentList=commentFilms[i];
        for (var key in currentCommentList) {
            var nameFilm=currentCommentList[key]
            if (str.slice(0, -7) == nameFilm) {
                comments = currentCommentList.comment;
                if(createNewCollection){
                    currentCommentList.comment =comments.concat(newArgumentsArgs);
                    localStorage.dataComments = JSON.stringify(commentFilms);
                }
            break
            }
        }
    }
    console.log(commentFilms);
    return comments
}
window.onload = function (e) {
    var films = [
        {
            name:'Побег из Шоушенка',
            'Год': 1994,
            'Страна': 'США',
            'Слоган': '«Страх - это кандалы. Надежда - это свобода»',
            'Режиссер': 'Фрэнк Дарабонт',
            'Сценарий': 'Фрэнк Дарабонт, Стивен Кинг',
            'Продюсер': 'Ники Марвин, Лиз Глоцер, Дэвид В. Лестер',
            'Оператор': 'Роджер Дикинс',
            'Композитор': 'Томас Ньюман',
            'Жанр': 'Драма, Криминал',
            'Бюджет': '$25 000 000',
            'Сборы в мире': '$59 841 469',
            'Зрители': '8.66 млн',
            'Премьера': '10 сентября 1994',
            'Возраст': 'Зрителям, достигшим 16 лет',
            'Время': '142 мин. / 02:22',
            'Описание': ' Успешный банкир Энди Дюфрейн обвинен в убийстве собственной жены и ее любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решетки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, вооруженный живым умом и добройдушой, отказывается мириться с приговором судьбы и начинает разрабатывать невероятно дерзкий план своего освобождения.'
        },{
            name:'Зеленая миля',
            'Год': 1999,
            'Страна': 'США',
            'Слоган': '«Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них»',
            'Режиссер': 'Фрэнк Дарабонт',
            'Сценарий': 'Фрэнк Дарабонт, Стивен Кинг',
            'Продюсер': 'Ники Марвин, Лиз Глоцер, Дэвид В. Лестер',
            'Оператор': 'Дэвид Тэттерсолл',
            'Композитор': 'Томас Ньюман',
            'Жанр': 'фэнтези, драма, криминал, детектив, ...',
            'Бюджет': '$60 000 000',
            'Сборы в мире': '$286 801 374',
            'Зрители': '26 млн',
            'Премьера': '6 декабря 1999',
            'Возраст': 'Зрителям, достигшим 16 лет',
            'Время': '189 мин. / 03:09',
            'Описание': 'Обвиненный в страшном преступлении, Джон Коффи оказывается в блоке смертников тюрьмы «Холодная гора». Вновь прибывший обладал поразительным ростом и был пугающе спокоен, что, впрочем, никак не влияло на отношение к нему начальника блока Пола Эджкомба, привыкшего исполнять приговор. Гигант удивил всех позже, когда выяснилось, что он обладает невероятной магической силой…'

        },
        {
            name:'Форрест Гамп',
            'Год': 1994,
            'Страна': 'США',
            'Слоган': '«Мир уже никогда не будет прежним, после того как вы увидите его глазами Форреста Гампа»',
            'Режиссер': 'Роберт Земекис',
            'Сценарий': 'Эрик Рот, Уинстон Грум',
            'Продюсер': 'Венди Файнерман, Стив Старки, Стив Тиш',
            'Оператор': 'Дон Бёрджесс',
            'Композитор': 'Алан Сильвестри',
            'Жанр': 'драма, мелодрама',
            'Бюджет': '$55 000 000',
            'Сборы в мире': '$677 386 686',
            'Зрители': ' 78.5 млн,  ',
            'Премьера': '23 июня 1994',
            'Возраст': 'Зрителям, достигшим 16 лет',
            'Время': '142 мин. / 02:22',
            'Описание': ' Успешный банкир Энди Дюфрейн обвинен в убийстве собственной жены и ее любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решетки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, вооруженный живым умом и добройдушой, отказывается мириться с приговором судьбы и начинает разрабатывать невероятно дерзкий план своего освобождения.'

        },
        {
            name:'Список Шиндлера',
            'Год': 1993,
            'Страна': 'США',
            'Слоган': '«Этот список - жизнь»',
            'Режиссер': 'Стивен Спилберг',
            'Сценарий': 'Стивен Зеллиан, Томас Кенилли',
            'Продюсер': 'Бранко Лустиг, Джералд Р. Молен, Стивен Спилберг',
            'Оператор': 'Януш Камински',
            'Композитор': 'Джон Уильямс',
            'Жанр': 'драма, биография, история',
            'Бюджет': '$22 000 000',
            'Сборы в мире': ' $321 265 768',
            'Зрители': '38.66 млн',
            'Премьера': '30 ноября 1993',
            'Возраст': 'Зрителям, достигшим 16 лет',
            'Время': '195 мин. / 03:15',
            'Описание': 'Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.'

        },{
            name:'Леон',
            'Год': 1994,
            'Страна': 'Франция',
            'Слоган': '«Вы не можете остановить того, кого не видно»',
            'Режиссер': 'Люк Бессон',
            'Сценарий': 'Люк Бессон',
            'Продюсер': 'Клод Бессон, Джон Гарлэнд, Бернард Гренет',
            'Оператор': 'Тьерри Арбогаст',
            'Композитор': 'Эрик Серра',
            'Жанр': 'триллер, драма, криминал',
            'Бюджет': 'FRF 115 000 000',
            'Сборы в мире': '$19 501 238',
            'Зрители': '7.66 млн',
            'Премьера': '14 сентября 1994',
            'Возраст': 'Зрителям, достигшим 16 лет',
            'Время': '133 мин. / 02:13',
            'Описание': 'Профессиональный убийца Леон, не знающий пощады и жалости, знакомится со своей очаровательной соседкой Матильдой, семью которой расстреливают полицейские, замешанные в торговле наркотиками. Благодаря этому знакомству он впервые испытывает чувство любви, но…'

        },{
            name:'Бойцовский клуб',
            'Год': 1999,
            'Страна': 'США, Германия',
            'Слоган': '«Интриги. Хаос. Мыло»',
            'Режиссер': 'Дэвид Финчер',
            'Сценарий': 'Джим Улс, Чак Паланик',
            'Продюсер': 'Росс Грэйсон Белл, Арт Линсон, Сиан Чаффин,',
            'Оператор': 'Джефф Кроненвет',
            'Композитор': 'Даст Бразерс, Джон Кинг, Майкл Симпсон',
            'Жанр': 'триллер, драма, криминал',
            'Бюджет': '$63 000 000',
            'Сборы в мире': ' $100 853 753',
            'Зрители': '8.66 млн',
            'Премьера': '10 сентября 1999',
            'Возраст': 'Зрителям, достигшим 18 лет',
            'Время': '131 мин. / 02:11',
            'Описание': 'Терзаемый хронической бессонницей и отчаянно пытающийся вырваться из мучительно скучной жизни, клерк встречает некоего Тайлера Дардена, харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а саморазрушение — единственное, ради чего стоит жить.Пройдет немного времени, и вот уже главные герои лупят друг друга почем зря на стоянке перед баром, и очищающий мордобой доставляет им высшее блаженство. Приобщая других мужчин к простым радостям физической жестокости, они основывают тайный Бойцовский Клуб, который имеет огромный успех. Но в концовке фильма всех ждет шокирующее открытие, которое может привести к непредсказуемым событиям…'

        }
    ];

    var currentStatelocalStorage = localStorage;
    var currentFilm = localStorage.nameFilm;
    searchContentFilm(currentFilm,films);
    var container = document.getElementsByClassName('tdlDiv')[0];
    var elementLi = document.createElement('li');
    var elementUl = document.createElement('ul');
    var commentsList = document.getElementById('comments-list');
    var arrayComment = [];
    if (commentsList) {
        elementUl = commentsList;
    }
    elementUl.id = 'comments-list';
    if (currentStatelocalStorage.dataComments && currentStatelocalStorage.dataComments.length){
        var arrayComments = JSON.parse(currentStatelocalStorage.dataComments);
        var commentForFilm=searchCommentFilms(currentFilm,arrayComments);
        if(commentForFilm) {
            if (typeof(commentForFilm) == "string") {
                elementLi.innerHTML = commentForFilm;
                elementUl.appendChild(elementLi);
                container.appendChild(elementUl);
            } else {
                for (var i = 0; i < commentForFilm.length; i++) {
                    elementLi = document.createElement('li');
                    elementLi.innerHTML = commentForFilm[i];
                    elementUl.appendChild(elementLi);
                }
                container.appendChild(elementUl);
            }
        }
    }
    window.onbeforeunload = function (e) {
        if (arrayComment.length) {
            if (currentStatelocalStorage.dataComments) {
                var currentStateStorage=JSON.parse(localStorage.dataComments);
                if(!searchCommentFilms(currentFilm,currentStateStorage,true,arrayComment)){
                    currentStateStorage.push({title: currentFilm.slice(0,-7), comment: arrayComment})
                    localStorage.dataComments=JSON.stringify(currentStateStorage);
                }
                } else {
                localStorage.dataComments = JSON.stringify([{
                    title: currentFilm.slice(0,-7), comment: arrayComment
                }]);
                arrayComment = [];
            }
        }
    };
    function comments() {
        var userInput = document.getElementById('userInput');

        userInput.onkeypress = function (e) {
            if (e.keyCode != 13) {
                return;
            }
            if(this.value){
            var userComment = this.value;
            this.value = '';
            if (localStorage.dataComments && localStorage.dataComments.length) {
                var elementLi = document.createElement('li');
                //var currantStateStorage = JSON.parse(localStorage.dataComments);
                var commentsList = document.getElementById('comments-list');
                if(arrayComment[0]==arrayComment[1]) {
                    arrayComment.pop();
                }
                arrayComment.push(userComment);
                elementLi.innerHTML = userComment;
                if(commentsList){
                    commentsList.appendChild(elementLi);
                }else{
                    var elementLi = document.createElement('li');
                    elementLi.innerHTML = userComment;
                    elementUl.appendChild(elementLi);
                    container.appendChild(elementUl);
                    arrayComment.push(userComment);
                }

            } else {
                var elementLi = document.createElement('li');
                elementLi.innerHTML = userComment;
                elementUl.appendChild(elementLi);
                container.appendChild(elementUl);
                arrayComment.push(userComment);
            }
        }
        }
        arrayComment=[];
        userComment=null;
    }

    comments();
};




