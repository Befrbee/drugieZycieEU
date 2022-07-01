
// Zakładki (miejsca na stronie)
// Wyeksponowane logo i social media (FB, YT, IG)
// Aktualności (newsy, sprawy organizacyjne)
// Nasze sukcesy (najbardziej spektakularne akcje)
// Poprzednie kampanie (Historia dla każdego województwa)
// Drugie życie w mediach (publikacje medialne – osadzanie linków, które od strony użytkowników wyglądają jak artykuły/filmy)
// Do pobrania (oświadczenie woli, plakat, może foldery z poprzednich lat?)
// Kontakt (plus formularz)
// Patroni (sekcja z logotypami)
//
// (plus RODO)

import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};

export default marsTheme;
