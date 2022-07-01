const settings = {
  "name": "drugiezycieeu",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
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
          "url": "https://test.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
