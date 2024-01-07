Feature: To booking tickets
    Scenario: Successful selection on the film "Зверополис"
        Given user is on "https://qamid.tmweb.ru/client/index.php" page
        When user chooses 2 day
        And user chooses "first" film
        And user chooses 5 place on the 1 row
        And user chooses 6 place on the 5 row
        And user click the button
        Then user sees the button with the text: "Получить код бронирования"

    Scenario: Successful selection on the film "Унесенные ветром"
        Given user is on "https://qamid.tmweb.ru/client/index.php" page
        When user chooses 2 day
        And user chooses "second" film
        And user chooses 5 place on the 1 row
        And user chooses 6 place on the 5 row
        And user click the button
        Then user sees the button with the text: "Получить код бронирования"

    Scenario: unsuccessful booking ticket "Зверополис", don't choose a place
        Given user is on "https://qamid.tmweb.ru/client/index.php" page
        When user chooses 2 day
        And user chooses "first" film
        And user click the button
        Then user sees the inactive button "Забронировать"
