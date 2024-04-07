describe('Автотест логина и пароля', function () {
    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');//ввели правильный логин
         cy.get('#pass').type('iLoveqastudio1');//ввели правильный пароль
         cy.get('#loginButton').click();// Нажали войти
         cy.get('#messageHeader').should('be.visible');// Проверка что текст виден
         cy.get('#messageHeader').contains('Авторизация прошла успешно');// Совпадение текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Наличие кнопки крестик
        })
        
    it('Забыли пароль?', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();// Нажали Забыли пароль?
         cy.get('#mailForgot').type('ivanov@mail.ru');//ввели логин
          cy.get('#restoreEmailButton').click();// Нажали Отправить код
          cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// Совпадение текста  
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');   // Наличие кнопки крестик
        })

    it('Ввести правильный логин и НЕ правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');//ввели правильный логин
        cy.get('#pass').type('qastudio1');//ввели  НЕ правильный пароль
         cy.get('#loginButton').click();// Нажали войти
         cy.get('#messageHeader').should('be.visible');// Проверка что текст виден
         cy.get('#messageHeader').contains('Такого логина или пароля нет');// Совпадение текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Наличие кнопки крестик
      })    
      
      it('Ввести НЕ правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('ger@dolnikov.ru');//ввели правильный логин
        cy.get('#pass').type('iLoveqastudio1');//ввели  НЕ правильный пароль
         cy.get('#loginButton').click();// Нажали войти
         cy.get('#messageHeader').should('be.visible');// Проверка что текст виден
         cy.get('#messageHeader').contains('Такого логина или пароля нет');// Совпадение текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Наличие кнопки крестик
      })    

      it('Ввести логин без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');//ввели правильный логин
        cy.get('#pass').type('iLoveqastudio1');//ввели  НЕ правильный пароль
         cy.get('#loginButton').click();// Нажали войти
         cy.get('#messageHeader').should('be.visible');// Проверка что текст виден
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// Совпадение текста
         })    

         it('Приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('GerMan@Dolnikov.ru');//ввели правильный логин
            cy.get('#pass').type('iLoveqastudio1');//ввели правильный пароль
            cy.get('#loginButton').click();// Нажали войти
            cy.get('#messageHeader').should('be.visible');// Проверка что текст виден
            cy.get('#messageHeader').contains('Авторизация прошла успешно');// Совпадение текста
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Наличие кнопки крестик
           })

        });
describe('Покупка аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/'); // переходим на сайт https://pokemonbattle.me/
        cy.get('input[type="email"]').type('yarutovvovan@yandex.ru'); // вводим логин
        cy.get('input[type="password"]').type('ASDwsx456852@'); // вводим пароль
        cy.get('.auth__button').click(); // нажимаем кнопку Подтвердить
        cy.wait(5000);
        cy.get('.header__btns > [href="/shop"]').click(); // нажимаем кнопку Магазин
        cy.get('.available > button').first().click(); // кликаем по кнопке Купить у первого доступного аватара
        cy.get('.credit').type('4620869113632996'); // вводим номер карты
        cy.get('.k_input_ccv').type('125'); // вводим CVV карты
        cy.get('.k_input_date').type('1225'); // вводим срок действия карты
        cy.get('.k_input_name').type('NAME'); // вводим имя владельца действия карты
        cy.get('.pay-btn').click(); // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456'); // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click(); // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
    });
});
          