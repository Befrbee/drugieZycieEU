const settings = {
  "name": "drugiezycieeu",
  "state": {
    "frontity": {
      "url": "https://serwer1305496.home.pl/autoinstalator/wordpress1",
      "title": "Kampania drugie życie",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "AKTUALNOŚĆI",
              "/#news"
            ],
            [
              "NASZE SUKCESY",
              "/#success"
            ],
            [
              "MEDIA",
              "/#media"
            ],
            [
              "PATRONI",
              "/#patrons"
            ],
            [
              "KONTAKT",
              "/tag/contact/"
            ],
            [
              "DO POBRANIA",
              "/downloads/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://serwer1305496.home.pl/autoinstalator/wordpress1"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
