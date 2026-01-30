
export type UnitStatus = 'verkauft' | 'reserviert' | 'auf Anfrage' | null;

export interface Unit {
  nr: string;
  etage: string;
  zimmer: number;
  wohnungsart: string;
  kwl: string | null;
  bgf_m2: number;
  anf_loggia_m2: number;
  anf_terrasse_m2: number | null;
  anf_umgebung_m2: number | null;
  nf_keller_m2: number;
  preis_wohnung_chf: number | null;
  preis_garageplatz_chf: number | null;
  preis_skiraum_chf: number | null;
  preis_dispo_chf: number | null;
  gesamtpreis_chf: number | null;
  grundriss_pdf_url: string;
  status_raw: UnitStatus;
  projekt: 'Begonie' | 'Abelia';
}

export interface ProjectData {
  projects: {
    name: 'Begonie' | 'Abelia';
    units: Unit[];
    sold_statement?: string;
  }[];
  additional_parking: {
    nr: string;
    etage: string;
    beschreibung: string;
    preis_chf: number | null;
    status_raw: UnitStatus;
  }[];
}
