Feature: To booking tickets
    Scenario: Successful selection on the film "Зверополис"
        Given user is on "https://qamid.tmweb.ru/client/index.php" page
        When user chooses 2 day
        When user chooses "first" film Zveropolis
        When user chooses 5 place on the 1 row
        When user chooses another 4 place on the 3 row
        When user click the button
        Then user sees the button with the text: "Получить код бронирования"

    Scenario: Successful selection on the film "Унесенные ветром"
        Given user is on "https://qamid.tmweb.ru/client/index.php" page
        When user chooses 2 day
        When user chooses "second" film
        When user chooses 5 place on the 1 row
        When user chooses another 4 place on the 3 row
        When user click the button
        Then user sees the button with the text: "Получить код бронирования"

    Scenario: unsuccessful booking ticket "Зверополис", don't choose a place
        Given user is on "https://qamid.tmweb.ru/client/index.php" page
        When user chooses 2 day
        When user chooses "first" film
        When user click the button
        Then user sees the inactive button "Забронировать"