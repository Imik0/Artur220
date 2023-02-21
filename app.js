const express = require('express')

const app = express()

app.set('view engine','ejs')

app.use('/contact', function (request, response) {
    response.render('contact', {
        title: 'Мои контакты',
        emailsVisible: true,
        emails: ['gavgav@mycorp.com', 'mioaw@mycorp.com'],
        phone: '+13372281488',
    })
})
app.use('/fio', function (request, response) {
    response.render('fio', {
        f: 'Цист',
        i: 'Яна',
        p: '+13372281488',
        m: 'I am quite a cheeky guy I dont sleep much because I usually go and grab a drink with da bois and then party in our padik all night drinking jaguar I once worked at a convinience store as a guard but I accidentally broke a kids arm while stopping him from stealing candy so I had to resign',
        s: 'I have a red diploma in university tik tok and can do default dance from the hit game Fortnite',
        l: 'Russian,English,Kazakh(not so much)',
    })
})
app.use('/homePage', function (request, response) {
    response.render('homePage')
})
app.listen(5000)    