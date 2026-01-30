
import React, { useState, useMemo } from 'react';
import { RAW_DATA, SEO_PACK, GALLERY_IMAGES } from './constants';
import { Unit } from './types';
import { formatCHF, getStatusColor, getStatusLabel } from './utils';

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className={`mb-10 md:mb-16 ${light ? 'text-white' : 'text-onyx'}`}>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 md:mb-6 leading-tight tracking-tight text-balance">{title}</h2>
    {subtitle && <p className={`max-w-2xl text-base md:text-xl font-light ${light ? 'text-stucco/80' : 'text-ash'}`}>{subtitle}</p>}
  </div>
);

const Button = ({ label, variant = 'primary', onClick, className = '', type = 'button' }: { label: string, variant?: 'primary' | 'secondary' | 'outline', onClick?: () => void, className?: string, type?: 'button' | 'submit' }) => {
  const base = "px-6 md:px-8 py-3.5 md:py-4 rounded-none transition-all duration-300 font-medium tracking-[0.15em] uppercase text-[9px] md:text-[10px] inline-flex items-center justify-center active:scale-[0.96] select-none touch-manipulation";
  const variants = {
    primary: "bg-walnut text-white hover:bg-onyx hover:-translate-y-0.5 shadow-sm hover:shadow-xl",
    secondary: "bg-stucco text-onyx hover:bg-ash hover:text-white",
    outline: "border border-ash/40 text-onyx hover:border-onyx hover:bg-onyx hover:text-white"
  };
  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {label}
    </button>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'Begonie' | 'Abelia'>('Begonie');
  const [roomFilter, setRoomFilter] = useState<number | 'all'>('all');
  const [floorFilter, setFloorFilter] = useState<string | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<string | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<string | 'all'>('all');
  
  const [showExposeModal, setShowExposeModal] = useState(false);
  const [exposeStep, setExposeStep] = useState<'form' | 'success'>('form');
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  const floorWeights: Record<string, number> = { 'Attika': 0, '2.OG': 1, '1.OG': 2, 'EG': 3 };

  const filteredUnits = useMemo(() => {
    const project = RAW_DATA.projects.find(p => p.name === activeTab);
    if (!project) return [];
    
    let list = project.units.filter(u => {
      const matchRooms = roomFilter === 'all' || u.zimmer === roomFilter;
      const matchFloor = floorFilter === 'all' || u.etage === floorFilter;
      const matchType = typeFilter === 'all' || u.wohnungsart === typeFilter;
      const matchStatus = statusFilter === 'all' || (statusFilter === 'open' ? u.status_raw === null : u.status_raw === statusFilter);
      return matchRooms && matchFloor && matchType && matchStatus;
    });

    return list.sort((a, b) => {
      const wa = floorWeights[a.etage] ?? 99;
      const wb = floorWeights[b.etage] ?? 99;
      if (wa !== wb) return wa - wb;
      return a.nr.localeCompare(b.nr);
    });
  }, [activeTab, roomFilter, floorFilter, typeFilter, statusFilter]);

  const availableUnits = useMemo(() => {
    const allUnits: Unit[] = [];
    RAW_DATA.projects.forEach(p => {
      p.units.forEach(u => {
        if (u.status_raw !== 'verkauft' && u.status_raw !== 'reserviert') {
          allUnits.push(u);
        }
      });
    });
    return allUnits.sort((a, b) => {
      if (a.projekt !== b.projekt) return a.projekt.localeCompare(b.projekt);
      return a.nr.localeCompare(b.nr);
    });
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-onyx selection:bg-greige selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-stucco shadow-sm md:shadow-none">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="font-serif text-lg md:text-2xl tracking-tighter leading-none">ABELIA & BEGONIE</span>
            <span className="text-[7px] md:text-[9px] tracking-[0.2em] text-ash uppercase mt-0.5 md:mt-1 font-bold">Davos Dorf | Flüelastrasse</span>
          </div>
          <Button label="Besichtigung" onClick={() => scrollTo('kontakt')} className="hidden sm:flex !py-2.5 !px-5" />
          <button onClick={() => scrollTo('kontakt')} className="sm:hidden text-walnut p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/521FSD_Flueelastrasse_Davos_Aussen_2_V3_240806_1a-scaled.jpg" 
            alt="Alpine Luxury Architecture" 
            className="w-full h-full object-cover scale-105 filter brightness-[0.8] md:brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 via-onyx/30 to-transparent md:from-onyx/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 via-transparent to-transparent md:hidden" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-walnut text-[8px] md:text-[10px] tracking-widest uppercase font-bold mb-4 md:mb-6 drop-shadow-md">Neubau-Projekt Davos</span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-6 md:mb-8 leading-[1.1] tracking-tight text-balance drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              Build Your <br/>Alpine Dream.
            </h1>
            <p className="text-lg md:text-2xl mb-8 md:mb-12 font-light text-stucco/90 leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Exklusive Attika-Residenzen im Edelrohbau. Gestalten Sie Ihre Sky Lounge individuell über den Dächern von Davos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <Button label="Besichtigung anfragen" onClick={() => scrollTo('kontakt')} className="w-full sm:w-auto" />
              <Button 
                label="Exposé herunterladen" 
                variant="outline" 
                className="w-full sm:w-auto backdrop-blur-sm !border-white/40 !text-white hover:!bg-white hover:!text-onyx hover:!border-white hover:shadow-2xl" 
                onClick={() => setShowExposeModal(true)} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="konzept" className="py-16 md:py-24 bg-stucco">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
            {[
              { label: 'Attikas & Zweitwohnung', title: 'Sky Lounge Vision', desc: 'Attikas mit Loggien and zusätzlichen Dachterrassen. Panoramablick garantiert.' },
              { label: 'Edelrohbau', title: 'Individualisierung', desc: 'Maximale Freiheit beim Innenausbau. Erschaffen Sie Ihr Unikat in den Alpen.' },
              { label: 'Top Infrastruktur', title: 'Davos Dorf Zentrum', desc: '400m zum Bahnhof, gegenüber der Busstopps, 650m zur Parsennbahn.' }
            ].map((item, i) => (
              <div key={i} className="group cursor-default">
                <p className="text-walnut text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-3 md:mb-4">{item.label}</p>
                <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 group-hover:text-walnut transition-colors">{item.title}</h3>
                <p className="text-ash text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Module */}
      <section id="preise" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Verfügbarkeit & Preise" 
            subtitle="Übersicht aller Einheiten in den Häusern Abelia und Begonie. Zweitwohnungen und Erstwohnungen verfügbar." 
          />
          
          <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-12 border-b border-stucco pb-8 md:pb-10 overflow-hidden">
            {/* Horizontal Scrollable Filters on Mobile */}
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <p className="text-[8px] uppercase tracking-widest text-ash font-bold ml-1">Projekt wählen</p>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                  {['Begonie', 'Abelia'].map((p) => (
                    <button key={p} onClick={() => setActiveTab(p as any)}
                      className={`whitespace-nowrap flex-shrink-0 px-5 py-2 text-[9px] md:text-[10px] uppercase tracking-widest font-bold transition-all border ${activeTab === p ? 'bg-onyx text-white border-onyx shadow-md' : 'bg-stucco/30 text-ash border-transparent hover:text-onyx'}`}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[8px] uppercase tracking-widest text-ash font-bold ml-1">Zimmer & Etage</p>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                  <div className="flex bg-stucco/20 p-1 rounded-sm flex-shrink-0">
                    {['all', 'EG', '1.OG', '2.OG', 'Attika'].map((f) => (
                      <button key={f} onClick={() => setFloorFilter(f)}
                        className={`px-3 py-1.5 text-[8px] md:text-[10px] uppercase tracking-widest font-bold transition-all ${floorFilter === f ? 'bg-white shadow-sm text-onyx' : 'text-ash'}`}>
                        {f === 'all' ? 'Alle' : f}
                      </button>
                    ))}
                  </div>
                  <div className="flex bg-stucco/20 p-1 rounded-sm flex-shrink-0">
                    {['all', 2.5, 3.5, 4.5, 5.5].map((z) => (
                      <button key={z} onClick={() => setRoomFilter(z as any)}
                        className={`px-3 py-1.5 text-[8px] md:text-[10px] uppercase tracking-widest font-bold transition-all ${roomFilter === z ? 'bg-white shadow-sm text-onyx' : 'text-ash'}`}>
                        {z === 'all' ? 'Alle' : `${z} Zi.`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table (Desktop) */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-ash/20 text-[10px] uppercase tracking-[0.2em] text-ash font-bold">
                  <th className="pb-6 w-20">Nr.</th>
                  <th className="pb-6">Etage</th>
                  <th className="pb-6">Zimmer</th>
                  <th className="pb-6">Typ</th>
                  <th className="pb-6">BGF m²</th>
                  <th className="pb-6">Status</th>
                  <th className="pb-6">Preis</th>
                  <th className="pb-6 text-right">PDF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stucco text-sm">
                {filteredUnits.length > 0 ? filteredUnits.map((u) => (
                  <tr key={u.nr} className={`group hover:bg-stucco/20 transition-all duration-300 ${u.status_raw === 'verkauft' ? 'opacity-40' : ''}`}>
                    <td className="py-6 font-bold">{u.nr}</td>
                    <td className="py-6">{u.etage}</td>
                    <td className="py-6">{u.zimmer} Zi.</td>
                    <td className="py-6 text-ash">{u.wohnungsart}</td>
                    <td className="py-6 text-ash">{u.bgf_m2} m²</td>
                    <td className="py-6">
                      <span className={`px-3 py-1 text-[9px] uppercase tracking-widest font-bold rounded-full border ${getStatusColor(u.status_raw)}`}>
                        {getStatusLabel(u.status_raw)}
                      </span>
                    </td>
                    <td className="py-6 font-bold">{formatCHF(u.gesamtpreis_chf)}</td>
                    <td className="py-6 text-right">
                      {u.status_raw === 'auf Anfrage' ? (
                        <button onClick={() => scrollTo('kontakt')} className="bg-walnut text-white text-[9px] px-3 py-1 uppercase tracking-widest font-bold">Kontakt</button>
                      ) : (
                        <a href={u.grundriss_pdf_url} target="_blank" rel="noreferrer" className="text-ash hover:text-walnut underline uppercase text-[9px] font-bold tracking-widest">Plan</a>
                      )}
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={8} className="py-20 text-center text-ash italic">Keine Einheiten gefunden.</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Optimized Cards (Mobile/Tablet) */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredUnits.map((u) => (
              <div key={u.nr} className={`bg-white border border-stucco/60 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between ${u.status_raw === 'verkauft' ? 'opacity-50 grayscale' : ''}`}>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-2 py-0.5 text-[7px] uppercase tracking-widest font-bold rounded-full border ${getStatusColor(u.status_raw)}`}>
                      {getStatusLabel(u.status_raw)}
                    </span>
                    <span className="text-[10px] text-ash font-bold uppercase tracking-widest">{u.projekt}</span>
                  </div>
                  <h4 className="text-xl font-serif leading-tight">{u.nr} <span className="text-ash font-sans text-sm ml-1">/ {u.etage}</span></h4>
                  <p className="text-[9px] text-ash uppercase tracking-widest mt-1.5 font-medium">{u.wohnungsart} • {u.zimmer} Zimmer</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-stucco/40">
                    <div>
                      <p className="text-ash text-[8px] uppercase tracking-widest mb-0.5">Wohnfläche</p>
                      <p className="font-semibold text-sm">{u.bgf_m2} m²</p>
                    </div>
                    <div className="text-right">
                      <p className="text-ash text-[8px] uppercase tracking-widest mb-0.5">Preis</p>
                      <p className="font-bold text-sm text-walnut">{formatCHF(u.gesamtpreis_chf)}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-8">
                   <a href={u.grundriss_pdf_url} target="_blank" rel="noreferrer" className="flex-1 text-center py-3 border border-ash/40 text-[8px] uppercase tracking-widest font-bold hover:bg-onyx hover:text-white transition-colors">Grundriss</a>
                   <button onClick={() => scrollTo('kontakt')} className="flex-1 bg-walnut text-white py-3 text-[8px] uppercase tracking-widest font-bold hover:bg-onyx transition-colors">Anfragen</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-16 md:py-24 bg-stucco/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Projektgalerie" 
            subtitle="Erkunden Sie die Architektur, die luxuriöse Innenausstattung und die atemberaubende alpine Umgebung von Davos." 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <div 
                key={i} 
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-onyx shadow-sm md:shadow-md"
                onClick={() => setSelectedGalleryImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent md:opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-6">
                  <span className="text-walnut text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold mb-1 md:mb-2">{img.category}</span>
                  <h4 className="text-white text-base md:text-lg font-serif">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="lage" className="py-16 md:py-24 bg-onyx text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-square sm:aspect-video lg:aspect-square group overflow-hidden">
             <img 
               src="https://raw.githubusercontent.com/yathur-hub/abeliabegonie-brandassets/main/Drohnenaufnahme-1.jpg" 
               alt="Davos Panorama View" 
               className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" 
             />
             <div className="absolute inset-0 bg-onyx/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div>
            <SectionHeading light title="Davos Dorf: Urban & Alpin zugleich" subtitle="Eine erstklassige Ganzjahres-Destination. Zentral gelegen an der Flüelastrasse." />
            <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
              <div>
                <h5 className="text-walnut text-[10px] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-walnut rounded-full"></span>
                  Verbindungen
                </h5>
                <ul className="space-y-3 text-stucco/70 text-sm">
                  <li className="flex justify-between">Bahnhof Davos Dorf: <span className="text-white">400m</span></li>
                  <li className="flex justify-between">Parsennbahn: <span className="text-white">650m</span></li>
                  <li className="flex justify-between">Busstopps: <span className="text-white">Direkt vis-à-vis</span></li>
                </ul>
              </div>
              <div>
                <h5 className="text-walnut text-[10px] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-walnut rounded-full"></span>
                  Infrastruktur
                </h5>
                <ul className="space-y-3 text-stucco/70 text-sm">
                  <li>Migros, Coop, Spar (Gehdistanz)</li>
                  <li>Bünda Übungslift, Langlaufloipen</li>
                  <li>Restaurants & Cafés im Umkreis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details / Tech */}
      <section id="details" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Nachhaltigkeit & Technik" subtitle="Abelia & Begonie setzen auf zukunftssichere Gebäudetechnik." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {[
              { title: 'Wärmepumpe', desc: 'Grundwasserwärmepumpe für nachhaltiges Heizen.' },
              { title: 'Solarpanels', desc: 'Photovoltaikanlage auf den Dächern.' },
              { title: 'Raumklima', desc: 'Kontrollierte Wohnungslüftung (KWL) für frische Bergluft.' },
              { title: 'Privatsphäre', desc: 'Eigene Waschküchen und grosszügige Skiräume.' }
            ].map((d, i) => (
              <div key={i} className="group">
                <div className="w-10 h-10 border border-stucco flex items-center justify-center text-[10px] font-bold mb-5 md:mb-6 group-hover:border-walnut group-hover:text-walnut transition-colors">0{i+1}</div>
                <h4 className="text-lg font-serif mb-3 md:mb-4 uppercase tracking-wider">{d.title}</h4>
                <p className="text-ash text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle & Connectivity Section */}
      <section className="py-16 md:py-24 bg-white border-t border-stucco/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <h3 className="text-3xl sm:text-4xl font-serif mb-6 md:mb-8 text-onyx leading-snug">
                Attraktiv und bequem für Alltage und Ferientage
              </h3>
              <div className="space-y-6 text-ash leading-relaxed font-light text-base md:text-lg">
                <p>
                  Am Ortsanfang von Davos Dorf, direkt am Eingang zum Flüelatal, wohnen Sie verkehrsgünstig und dennoch schnell angebunden. Zwei Bushaltestellen liegen direkt gegenüber, der Bahnhof Davos Dorf ist 400 Meter entfernt. Geschäfte und Restaurants erreichen Sie in rund 400 Metern zu Fuss.
                </p>
                <p>
                  Kindergarten und Schule sind 800 Meter entfernt, wichtige Arbeitgeber wie das Lawinenforschungszentrum und das Physikalisch-Meteorologische Observatorium Davos in nächster Umgebung.
                </p>
                <p>
                  Für Freizeit und Sport liegt vieles nah: Parsennbahn 650 Meter oder zwei Busstopps, Loipen und Übungslift zu Fuss, der Davosersee ganzjährig für Spaziergänge und Jogging. Wander und Bikewege sowie der Adventure Park Davos Färich ergänzen das Angebot.
                </p>
              </div>
            </div>
            
            <div className="lg:sticky lg:top-24">
              <div 
                className="overflow-hidden group shadow-xl md:shadow-2xl cursor-pointer relative aspect-video sm:aspect-[16/10] md:aspect-auto"
                onClick={() => setSelectedGalleryImage("https://abelia-begonie.ch/wp-content/uploads/2024/11/Lage_neu.png")}
              >
                <img 
                  src="https://abelia-begonie.ch/wp-content/uploads/2024/11/Lage_neu.png" 
                  alt="Lageplan Abelia & Begonie Davos" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-onyx/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 p-4 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-5 h-5 text-onyx" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-5 md:mt-6 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-walnut"></div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-walnut">Infrastruktur & Umgebung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-onyx text-white p-6 md:p-20 overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-walnut/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-20">
              <div>
                <SectionHeading light title="Besichtigung anfragen" subtitle="Wir führen Sie gerne durch den Edelrohbau vor Ort." />
                <div className="mt-8 md:mt-12 space-y-6 text-stucco/80 text-sm md:text-base">
                  <div className="flex gap-4">
                    <span className="text-walnut font-bold uppercase text-[10px] tracking-widest shrink-0 mt-1">Lage</span>
                    <p>Flüelastrasse, 7260 Davos Dorf</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-walnut font-bold uppercase text-[10px] tracking-widest shrink-0 mt-1">Info</span>
                    <p>Ein Erwerb durch Personen im Ausland ist für diese Einheiten möglich (Zweitwohnungen).</p>
                  </div>
                </div>
              </div>
              <div className="bg-white text-onyx p-6 md:p-12 shadow-xl">
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-ash font-bold">Vorname*</label>
                      <input required type="text" className="w-full border-b border-stucco p-2 focus:border-walnut outline-none text-sm bg-transparent" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-ash font-bold">Nachname*</label>
                      <input required type="text" className="w-full border-b border-stucco p-2 focus:border-walnut outline-none text-sm bg-transparent" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-ash font-bold">E-Mail*</label>
                    <input required type="email" className="w-full border-b border-stucco p-2 focus:border-walnut outline-none text-sm bg-transparent" />
                  </div>
                  
                  <div className="space-y-1 relative">
                    <label className="text-[9px] uppercase tracking-widest text-ash font-bold">Interesse an Einheit*</label>
                    <select required className="w-full border-b border-stucco p-2 focus:border-walnut outline-none text-sm bg-transparent appearance-none cursor-pointer pr-8">
                      <option value="" disabled selected>Bitte wählen...</option>
                      <option value="General inquiry">Allgemeine Anfrage</option>
                      {availableUnits.map(u => (
                        <option key={u.nr} value={u.nr}>
                          {u.projekt} {u.nr} ({u.zimmer} Zi., {u.etage})
                        </option>
                      ))}
                    </select>
                    <div className="absolute bottom-2.5 right-0 flex items-center px-1 pointer-events-none text-ash">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-ash font-bold">Nachricht</label>
                    <textarea rows={3} className="w-full border-b border-stucco p-2 focus:border-walnut outline-none text-sm resize-none bg-transparent"></textarea>
                  </div>

                  {formStatus === 'success' ? (
                    <div className="bg-green-50 text-green-800 p-4 text-xs font-bold text-center border border-green-100 animate-in fade-in slide-in-from-bottom-2">Herzlichen Dank. Wir setzen uns zeitnah mit Ihnen in Verbindung.</div>
                  ) : (
                    <Button type="submit" label="Termin vereinbaren" className="w-full" />
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stucco pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
            <div className="space-y-6">
              <span className="font-serif text-2xl md:text-3xl tracking-tighter block">ABELIA & BEGONIE</span>
              <p className="text-[9px] md:text-[10px] text-ash leading-relaxed max-w-xs uppercase tracking-widest font-medium">Exklusive Luxus-Residenzen in Davos Dorf. Ein Neubau-Projekt für gehobene Ansprüche.</p>
            </div>

            <div className="space-y-4">
              <h5 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-walnut">Bauherrschaft</h5>
              <div className="text-xs md:text-sm space-y-2">
                <p className="font-semibold">R. Kunz Immobilien AG</p>
                <p className="text-ash">7270 Davos Platz</p>
                <p><a href="mailto:info@rki.ch" className="text-ash hover:text-walnut transition-colors underline underline-offset-4 decoration-ash/30">info@rki.ch</a></p>
                <p><a href="https://rki.ch" target="_blank" rel="noopener noreferrer" className="text-ash hover:text-walnut transition-colors">www.rki.ch</a></p>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-walnut">Architektur</h5>
              <div className="text-xs md:text-sm space-y-2">
                <p className="font-semibold">Stefan Caviezel GmbH</p>
                <p className="text-ash">7270 Davos Platz</p>
                <p><a href="mailto:info@stefancaviezel.ch" className="text-ash hover:text-walnut transition-colors underline underline-offset-4 decoration-ash/30">info@stefancaviezel.ch</a></p>
                <p><a href="https://stefancaviezel.ch" target="_blank" rel="noopener noreferrer" className="text-ash hover:text-walnut transition-colors">www.stefancaviezel.ch</a></p>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-walnut">Verkauf</h5>
              <div className="text-xs md:text-sm space-y-2">
                <p className="font-semibold">Guyan + Co. AG</p>
                <p className="text-ash">7270 Davos Platz</p>
                <p><a href="mailto:immo@guyan.ch" className="text-ash hover:text-walnut transition-colors underline underline-offset-4 decoration-ash/30">immo@guyan.ch</a></p>
                <p className="text-ash">Tel. +41 (0) 81 415 40 00</p>
                <p><a href="https://guyan.ch" target="_blank" rel="noopener noreferrer" className="text-ash hover:text-walnut transition-colors font-medium">www.guyan.ch</a></p>
              </div>
            </div>
          </div>

          <div className="pt-8 md:pt-12 border-t border-ash/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] md:text-[10px] text-ash uppercase tracking-widest font-bold text-center md:text-left">
              © {new Date().getFullYear()} Abelia & Begonie Davos Dorf. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 md:gap-8 text-[9px] md:text-[10px] text-ash uppercase tracking-widest font-bold">
               <a href="#" className="hover:text-walnut transition-colors">Datenschutz</a>
               <a href="#" className="hover:text-walnut transition-colors">Impressum</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Optimized Sticky Bottom (Mobile Only) */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full z-[150] bg-white/95 backdrop-blur-md border-t border-stucco px-4 py-4 grid grid-cols-2 gap-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] pb-safe">
         <Button label="Besichtigung" onClick={() => scrollTo('kontakt')} className="!px-3" />
         <Button label="Exposé" variant="secondary" onClick={() => setShowExposeModal(true)} className="!px-3 shadow-none border border-stucco" />
      </div>

      {/* Modal Overlay */}
      {showExposeModal && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-6 bg-onyx/90 backdrop-blur-md transition-all">
          <div className="relative bg-white max-w-xl w-full p-8 md:p-16 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button onClick={() => setShowExposeModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 text-ash hover:text-onyx p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {exposeStep === 'form' ? (
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-2xl md:text-3xl font-serif text-balance">Verkaufsunterlagen anfordern</h3>
                <p className="text-ash text-sm md:text-base font-light">Geben Sie Ihre E-Mail Adresse ein, um das vollständige Exposé als PDF zu erhalten.</p>
                <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); setExposeStep('success'); }}>
                   <input required type="email" className="w-full border-b border-stucco p-3 focus:border-walnut outline-none text-sm bg-transparent" placeholder="E-Mail Adresse*" />
                   <Button type="submit" label="Digitales Exposé anfordern" className="w-full" />
                </form>
              </div>
            ) : (
              <div className="text-center space-y-6 md:space-y-8 py-4">
                <div className="w-16 h-16 bg-walnut/10 text-walnut rounded-full flex items-center justify-center mx-auto">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif">Versand gestartet</h3>
                <p className="text-ash text-sm md:text-base font-light">Wir haben Ihnen den Download-Link an Ihre E-Mail gesendet. Schauen Sie bitte auch in Ihren Spam-Ordner.</p>
                <div className="pt-4 space-y-3">
                  <Button label="Fenster schliessen" onClick={() => { setShowExposeModal(false); setExposeStep('form'); }} className="w-full !variant-outline" />
                  <button onClick={() => { setShowExposeModal(false); scrollTo('kontakt'); setExposeStep('form'); }} className="text-[10px] uppercase tracking-widest font-bold text-walnut hover:underline pt-2 block mx-auto">Fragen zum Projekt?</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Gallery Lightbox */}
      {selectedGalleryImage && (
        <div 
          className="fixed inset-0 z-[600] flex items-center justify-center bg-onyx/98 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-walnut p-3">
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img 
            src={selectedGalleryImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300" 
          />
        </div>
      )}

    </div>
  );
}
