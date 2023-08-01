describe('Проверка сайта Ситилинк ', () => {

    it('should have right title - the fancy generator way', () => {
        browser.url('https://www.citilink.ru/?_action=autologin&_success_login=1');
        browser.waitForVisible('h3.e114sczy0');
    }

    )
})