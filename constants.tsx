
import { ProjectData } from './types';

export const COLORS = {
  white: '#ffffff',
  stucco: '#E2E2DE',
  ash: '#979086',
  greige: '#B7AC9B',
  onyx: '#1C1C1B',
  walnut: '#6A5D52',
};

export const RAW_DATA: ProjectData = {
  projects: [
    {
      name: "Begonie",
      units: [
        { "nr": "1B.01", "etage": "EG", "zimmer": 4.5, "wohnungsart": "Erstwohnung", "kwl": null, "bgf_m2": 138.8, "anf_loggia_m2": 19.2, "anf_terrasse_m2": null, "anf_umgebung_m2": 200.5, "nf_keller_m2": 16.2, "preis_wohnung_chf": null, "preis_garageplatz_chf": null, "preis_skiraum_chf": null, "preis_dispo_chf": null, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1B01]]", "status_raw": "verkauft", "projekt": "Begonie" },
        { "nr": "1B.02", "etage": "EG", "zimmer": 4.5, "wohnungsart": "Erstwohnung", "kwl": null, "bgf_m2": 138.1, "anf_loggia_m2": 18.7, "anf_terrasse_m2": null, "anf_umgebung_m2": 73.2, "nf_keller_m2": 16.2, "preis_wohnung_chf": 1231000, "preis_garageplatz_chf": 90000, "preis_skiraum_chf": 14000, "preis_dispo_chf": null, "gesamtpreis_chf": 1335000, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1B02]]", "status_raw": "reserviert", "projekt": "Begonie" },
        { "nr": "1B.11", "etage": "1.OG", "zimmer": 4.5, "wohnungsart": "Erstwohnung", "kwl": null, "bgf_m2": 138.8, "anf_loggia_m2": 20.1, "anf_terrasse_m2": null, "anf_umgebung_m2": null, "nf_keller_m2": 15.5, "preis_wohnung_chf": 1353000, "preis_garageplatz_chf": 90000, "preis_skiraum_chf": 12000, "preis_dispo_chf": null, "gesamtpreis_chf": 1455000, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1B11]]", "status_raw": "reserviert", "projekt": "Begonie" },
        { "nr": "1B.12", "etage": "1.OG", "zimmer": 4.5, "wohnungsart": "Erstwohnung", "kwl": null, "bgf_m2": 138.3, "anf_loggia_m2": 20.1, "anf_terrasse_m2": null, "anf_umgebung_m2": null, "nf_keller_m2": 15.4, "preis_wohnung_chf": null, "preis_garageplatz_chf": null, "preis_skiraum_chf": null, "preis_dispo_chf": null, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1B12]]", "status_raw": "verkauft", "projekt": "Begonie" },
        { "nr": "1B.21", "etage": "2.OG", "zimmer": 4.5, "wohnungsart": "Erstwohnung", "kwl": null, "bgf_m2": 138.8, "anf_loggia_m2": 20.1, "anf_terrasse_m2": null, "anf_umgebung_m2": null, "nf_keller_m2": 16.8, "preis_wohnung_chf": 1454000, "preis_garageplatz_chf": 90000, "preis_skiraum_chf": 17000, "preis_dispo_chf": null, "gesamtpreis_chf": 1561000, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1B21]]", "status_raw": null, "projekt": "Begonie" },
        { "nr": "1B.22", "etage": "2.OG", "zimmer": 4.5, "wohnungsart": "Erstwohnung", "kwl": null, "bgf_m2": 138.3, "anf_loggia_m2": 20.1, "anf_terrasse_m2": null, "anf_umgebung_m2": null, "nf_keller_m2": 16.7, "preis_wohnung_chf": null, "preis_garageplatz_chf": null, "preis_skiraum_chf": null, "preis_dispo_chf": null, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1B22]]", "status_raw": "verkauft", "projekt": "Begonie" },
        { "nr": "1B.31", "etage": "Attika", "zimmer": 3.5, "wohnungsart": "Zweitwohnung", "kwl": "X", "bgf_m2": 116.8, "anf_loggia_m2": 25.0, "anf_terrasse_m2": 13.3, "anf_umgebung_m2": null, "nf_keller_m2": 20.5, "preis_wohnung_chf": 2453000, "preis_garageplatz_chf": 95000, "preis_skiraum_chf": 17000, "preis_dispo_chf": 10000, "gesamtpreis_chf": 2575000, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1B31]]", "status_raw": null, "projekt": "Begonie" },
        { "nr": "1B.32", "etage": "Attika", "zimmer": 3.5, "wohnungsart": "Zweitwohnung", "kwl": "X", "bgf_m2": 122.9, "anf_loggia_m2": 25.0, "anf_terrasse_m2": 13.3, "anf_umgebung_m2": null, "nf_keller_m2": 20.6, "preis_wohnung_chf": 2645000, "preis_garageplatz_chf": 90000, "preis_skiraum_chf": 20000, "preis_dispo_chf": 90000, "gesamtpreis_chf": 2845000, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1B32]]", "status_raw": null, "projekt": "Begonie" },
        { "nr": "1B.31+1B.32", "etage": "Attika", "zimmer": 5.5, "wohnungsart": "Zweitwohnung", "kwl": "X", "bgf_m2": 239.7, "anf_loggia_m2": 50.0, "anf_terrasse_m2": 26.6, "anf_umgebung_m2": null, "nf_keller_m2": 41.1, "preis_wohnung_chf": null, "preis_garageplatz_chf": 95000, "preis_skiraum_chf": 20000, "preis_dispo_chf": 90000, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1B31_1B32]]", "status_raw": "auf Anfrage", "projekt": "Begonie" }
      ],
      sold_statement: "Weitere Einheiten in unteren Etagen sind überwiegend als verkauft markiert."
    },
    {
      name: "Abelia",
      units: [
        { "nr": "1A.01", "etage": "EG", "zimmer": 3.5, "wohnungsart": "Erstwohnung", "kwl": null, "bgf_m2": 113.3, "anf_loggia_m2": 17.4, "anf_terrasse_m2": null, "anf_umgebung_m2": 177.5, "nf_keller_m2": 18.0, "preis_wohnung_chf": null, "preis_garageplatz_chf": null, "preis_skiraum_chf": null, "preis_dispo_chf": null, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1A01]]", "status_raw": "verkauft", "projekt": "Abelia" },
        { "nr": "1A.02", "etage": "EG", "zimmer": 2.5, "wohnungsart": "Erstwohnung", "kwl": null, "bgf_m2": 71.5, "anf_loggia_m2": 17.6, "anf_terrasse_m2": null, "anf_umgebung_m2": 54.3, "nf_keller_m2": 12.1, "preis_wohnung_chf": null, "preis_garageplatz_chf": null, "preis_skiraum_chf": null, "preis_dispo_chf": null, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1A02]]", "status_raw": "verkauft", "projekt": "Abelia" },
        { "nr": "1A.03", "etage": "EG", "zimmer": 3.5, "wohnungsart": "Erstwohnung", "kwl": null, "bgf_m2": 112.9, "anf_loggia_m2": 17.4, "anf_terrasse_m2": null, "anf_umgebung_m2": 122.5, "nf_keller_m2": 17.0, "preis_wohnung_chf": null, "preis_garageplatz_chf": null, "preis_skiraum_chf": null, "preis_dispo_chf": null, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1A03]]", "status_raw": "verkauft", "projekt": "Abelia" },
        { "nr": "1A.11", "etage": "1.OG", "zimmer": 3.5, "wohnungsart": "Erstwohnung", "kwl": null, "bgf_m2": 113.3, "anf_loggia_m2": 18.4, "anf_terrasse_m2": null, "anf_umgebung_m2": null, "nf_keller_m2": 17.0, "preis_wohnung_chf": null, "preis_garageplatz_chf": null, "preis_skiraum_chf": null, "preis_dispo_chf": null, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1A11]]", "status_raw": "verkauft", "projekt": "Abelia" },
        { "nr": "1A.12", "etage": "1.OG", "zimmer": 2.5, "wohnungsart": "Zweitwohnung", "kwl": null, "bgf_m2": 71.5, "anf_loggia_m2": 18.3, "anf_terrasse_m2": null, "anf_umgebung_m2": null, "nf_keller_m2": 12.1, "preis_wohnung_chf": null, "preis_garageplatz_chf": null, "preis_skiraum_chf": null, "preis_dispo_chf": null, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1A12]]", "status_raw": "verkauft", "projekt": "Abelia" },
        { "nr": "1A.13", "etage": "1.OG", "zimmer": 3.5, "wohnungsart": "Erstwohnung", "kwl": null, "bgf_m2": 112.9, "anf_loggia_m2": 18.4, "anf_terrasse_m2": null, "anf_umgebung_m2": null, "nf_keller_m2": 15.6, "preis_wohnung_chf": null, "preis_garageplatz_chf": null, "preis_skiraum_chf": null, "preis_dispo_chf": null, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1A13]]", "status_raw": "verkauft", "projekt": "Abelia" },
        { "nr": "1A.21", "etage": "2.OG", "zimmer": 3.5, "wohnungsart": "Zweitwohnung", "kwl": null, "bgf_m2": 113.3, "anf_loggia_m2": 18.4, "anf_terrasse_m2": null, "anf_umgebung_m2": null, "nf_keller_m2": 16.2, "preis_wohnung_chf": null, "preis_garageplatz_chf": null, "preis_skiraum_chf": null, "preis_dispo_chf": null, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1A21]]", "status_raw": "verkauft", "projekt": "Abelia" },
        { "nr": "1A.22", "etage": "2.OG", "zimmer": 2.5, "wohnungsart": "Zweitwohnung", "kwl": "X", "bgf_m2": 71.5, "anf_loggia_m2": 18.3, "anf_terrasse_m2": null, "anf_umgebung_m2": null, "nf_keller_m2": 17.0, "preis_wohnung_chf": null, "preis_garageplatz_chf": null, "preis_skiraum_chf": null, "preis_dispo_chf": null, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1A22]]", "status_raw": "verkauft", "projekt": "Abelia" },
        { "nr": "1A.23", "etage": "2.OG", "zimmer": 3.5, "wohnungsart": "Erstwohnung", "kwl": null, "bgf_m2": 112.9, "anf_loggia_m2": 18.4, "anf_terrasse_m2": null, "anf_umgebung_m2": null, "nf_keller_m2": 15.7, "preis_wohnung_chf": null, "preis_garageplatz_chf": null, "preis_skiraum_chf": null, "preis_dispo_chf": null, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1A23]]", "status_raw": "verkauft", "projekt": "Abelia" },
        { "nr": "1A.31", "etage": "Attika", "zimmer": 3.5, "wohnungsart": "Zweitwohnung", "kwl": "X", "bgf_m2": 135.1, "anf_loggia_m2": 25.0, "anf_terrasse_m2": 10.3, "anf_umgebung_m2": null, "nf_keller_m2": 20.2, "preis_wohnung_chf": 2951000, "preis_garageplatz_chf": 90000, "preis_skiraum_chf": 14000, "preis_dispo_chf": 65000, "gesamtpreis_chf": 3120000, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1A31]]", "status_raw": null, "projekt": "Abelia" },
        { "nr": "1A.32", "etage": "Attika", "zimmer": 3.5, "wohnungsart": "Zweitwohnung", "kwl": "X", "bgf_m2": 141.3, "anf_loggia_m2": 25.0, "anf_terrasse_m2": 10.3, "anf_umgebung_m2": null, "nf_keller_m2": 21.1, "preis_wohnung_chf": 2933000, "preis_garageplatz_chf": 90000, "preis_skiraum_chf": 12000, "preis_dispo_chf": 40000, "gesamtpreis_chf": 3075000, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1A32]]", "status_raw": null, "projekt": "Abelia" },
        { "nr": "1A.31+1A.32", "etage": "Attika", "zimmer": 5.5, "wohnungsart": "Zweitwohnung", "kwl": "X", "bgf_m2": 276.4, "anf_loggia_m2": 50.0, "anf_terrasse_m2": 20.6, "anf_umgebung_m2": null, "nf_keller_m2": 41.3, "preis_wohnung_chf": null, "preis_garageplatz_chf": 90000, "preis_skiraum_chf": 14000, "preis_dispo_chf": 65000, "gesamtpreis_chf": null, "grundriss_pdf_url": "[[GITHUB_PDF_URL_1A31_1A32]]", "status_raw": "auf Anfrage", "projekt": "Abelia" }
      ],
      sold_statement: "Einzelne Einheiten in unteren Etagen sind bereits reserviert oder verkauft."
    }
  ],
  additional_parking: [
    { "nr": "AP01", "etage": "1.UG", "beschreibung": "Aussenparkplatz gedeckt", "preis_chf": null, "status_raw": "verkauft" },
    { "nr": "AP02", "etage": "1.UG", "beschreibung": "Aussenparkplatz gedeckt", "preis_chf": null, "status_raw": "verkauft" }
  ]
};

export const GALLERY_IMAGES = [
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Attika_A_Wohnen_Essen_1_251212_1a-scaled.jpg", title: "Attika A Wohnen", category: "Attika Vision" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Attika_A_Wohnen_Essen_2_251212_1a-scaled.jpg", title: "Attika A Essen", category: "Attika Vision" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Attika_A_Wohnen_Essen_3_251212_1a-scaled.jpg", title: "Attika A Panorama", category: "Attika Vision" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Attika_B_Wohnen_Essen_1_251212_1a-scaled.jpg", title: "Attika B Wohnen", category: "Attika Vision" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Attika_B_Wohnen_Essen_2_251212_1a-scaled.jpg", title: "Attika B Detail", category: "Attika Vision" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Attika_B_Wohnen_Essen_3_251212_1a-scaled.jpg", title: "Attika B Lounge", category: "Attika Vision" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Attika_B_Wohnen_Essen_4_251212_1a-scaled.jpg", title: "Attika B Ausblick", category: "Attika Vision" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Aussen_2_V3_240806_1a-scaled.jpg", title: "Aussenansicht Projekt", category: "Architektur" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Vogelperspektive_1_V3_240808_1a_1-scaled.jpg", title: "Vogelperspektive", category: "Architektur" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Whg_A_Wohnen_Essen_2_240709_1a-scaled.jpg", title: "Wohnung A Interieur", category: "Interieur" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Whg_B_Wohnen_Essen_1_240709_1a-scaled.jpg", title: "Wohnung B Interieur", category: "Interieur" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Whg_B_Wohnen_Essen_2_240709_1a-scaled.jpg", title: "Wohnung B Detail", category: "Interieur" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Whg_C_Terrasse_1_240709_1a-scaled.jpg", title: "Terrasse Wohneinheit", category: "Aussenraum" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Whg_D_Wohnen_Essen_1_240709_1a-scaled.jpg", title: "Wohnung D Interieur", category: "Interieur" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/Ausbauidee-1.jpg", title: "Ausbauidee Modern", category: "Ausbauideen" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/Ausbauidee-2.png", title: "Ausbauidee Alpin", category: "Ausbauideen" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/Ausbauidee-3.jpg", title: "Ausbauidee Loft", category: "Ausbauideen" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/Ausbauidee-4.jpg", title: "Ausbauidee Gemütlich", category: "Ausbauideen" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/Drohnenaufnahme-1.jpg", title: "Davos Panorama", category: "Umgebung" },
  { url: "https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/Drone-Begonie-Richtung-Saleza-Abend.png", title: "Abendstimmung Begonie", category: "Umgebung" }
];

export const SEO_PACK = {
  metaTitle: "Abelia & Begonie | Exklusive Luxus-Attikas Davos Dorf",
  metaDescription: "Besichtigen Sie High-End Zweitwohnungen in Davos Dorf. Edelrohbau für individuelle Gestaltung. Jetzt Sky Lounge Attika anfragen.",
  keywords: [
    "Neubau Davos", "Attikawohnung Davos", "Zweitwohnung Graubünden", 
    "Luxusimmobilien Davos", "Abelia Begonie Davos", "Immobilien Davos Dorf",
    "Ski Residenz Davos", "Davos Dorf Attika kaufen"
  ]
};
