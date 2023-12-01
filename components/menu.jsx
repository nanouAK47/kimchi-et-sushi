"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { playfair } from "./fonts";

export default function Menu() {
  return (
    <section className="flex flex-col bg-primary bg-menu bg-cover" id="menu">
      <h1 className={`${playfair.className} title-white text-center p-8`}>
        Menu / メニュー
      </h1>

      <Tabs selectedTabClassName="button-menu-active">
        <TabList className="overflow-scroll flex gap-1 mb-10">
          <Tab className="button-menu">Entrées</Tab>
          <Tab className="button-menu">Accompagnement</Tab>
          <Tab className="button-menu">Sushis</Tab>
          <Tab className="button-menu">Makis</Tab>
          <Tab className="button-menu">Kimchi</Tab>
          <Tab className="button-menu">Temakis</Tab>
          <Tab className="button-menu">Sashimis</Tab>
          <Tab className="button-menu">California Rolls</Tab>
          <Tab className="button-menu">Saumon Rolls</Tab>
          <Tab className="button-menu">Spring Rolls</Tab>
          <Tab className="button-menu">Plateaux</Tab>
          <Tab className="button-menu">Cuisine vapeur</Tab>
          <Tab className="button-menu">Ramen sautées</Tab>
          <Tab className="button-menu">Riz</Tab>
        </TabList>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>Entrées</h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Nems au porc (4 pièces)
              </h3>
            </div>

            <p className="subtitle-description">7,00€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Nems aux crevettes (4 pièces)
              </h3>
            </div>

            <p className="subtitle-description">8,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Nems aux poulets (4 pièces)
              </h3>
            </div>

            <p className="subtitle-description">8,00€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Samoussas aux boeufs (4 pièces)
              </h3>
            </div>

            <p className="subtitle-description">8,00€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Beignets de crevettes (5 pièces)
              </h3>
            </div>

            <p className="subtitle-description">12,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Gyoza au poulet (5 pièces)
              </h3>
            </div>

            <p className="subtitle-description">6,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Gyoza aux crevettes (5 pièces)
              </h3>
            </div>

            <p className="subtitle-description">7,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Gyoza végétariens (5 pièces)
              </h3>
            </div>

            <p className="subtitle-description">5,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Rouleaux printemps (2 pièces)
              </h3>
            </div>

            <p className="subtitle-description">6,50€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>Accompagnement</h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Soupe Miso
              </h3>
            </div>

            <p className="subtitle-description">3,50€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>
            Sushis (2 pièces)
          </h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Thon
            </h3>

            <p className="subtitle-description">4,00€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Saumon
            </h3>

            <p className="subtitle-description">3,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Crevettes
            </h3>

            <p className="subtitle-description">3,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Omelette
            </h3>

            <p className="subtitle-description">3,00€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>
            Makis (8 pièces)
          </h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Avocat
            </h3>

            <p className="subtitle-description">5,00€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col">
              <h3 className={`${playfair.className} subtitle-description`}>
                Végétarien
              </h3>
              <p className="text-white">
                concombre, betterave, tomates confites
              </p>
            </div>

            <p className="subtitle-description">5,00€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Thon
            </h3>

            <p className="subtitle-description">6,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Saumon
            </h3>

            <p className="subtitle-description">6,00€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Saumon fumé, cheese
            </h3>

            <p className="subtitle-description">6,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Chirashi
            </h3>

            <p className="subtitle-description">13,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Poke Bowl Kani
            </h3>

            <p className="subtitle-description">14,50€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>Kimchi</h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Chou fermenté aux piments et aux épices
            </h3>

            <p className="subtitle-description">4,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Salade de Wakame
            </h3>

            <p className="subtitle-description">4,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Salade de choux
            </h3>

            <p className="subtitle-description">3,50€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>
            Temakis (1 pièce)
          </h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Saumon, avocat, coriandre, sésame
            </h3>

            <p className="subtitle-description">4,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Thon, avocat, menthe, sésame, salade
            </h3>

            <p className="subtitle-description">4,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Thon cuit, mayonnaise, salade, avocat, sésame
            </h3>

            <p className="subtitle-description">4,00€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>
            Sashimi (10 pièces)
          </h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Thon
            </h3>

            <p className="subtitle-description">13,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Saumon
            </h3>

            <p className="subtitle-description">12,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Mixte
            </h3>

            <p className="subtitle-description">13,00€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>
            California Rolls (8 pièces)
          </h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Crevettes tempura, concombre, sauce chili, mayonnaise, épices
            </h3>

            <p className="subtitle-description">7,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Foie gras, confiture de figues, concombre
            </h3>

            <p className="subtitle-description">11,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Gambas royale, mayonnaise, citron vert, coriandre, menthe
            </h3>

            <p className="subtitle-description">14,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Confit de thon, avocat
            </h3>

            <p className="subtitle-description">7,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Thon, avocat
            </h3>

            <p className="subtitle-description">7,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Saumon (cheese ou avocat)
            </h3>

            <p className="subtitle-description">7,50€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>
            Saumon Rolls (8 pièces)
          </h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Saumon fumé, cheese
            </h3>

            <p className="subtitle-description">9,00€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Saumon fumée, cheese, avocat, coriandre
            </h3>

            <p className="subtitle-description">9,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Omelette roll, saumon fumé, avocat, cheese, menthe
            </h3>

            <p className="subtitle-description">9,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Omelette roll, saumon frais, avocat, cheese, menthe
            </h3>

            <p className="subtitle-description">8,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Saumon frais, cheese
            </h3>

            <p className="subtitle-description">8,00€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Saumon frais, cheese, avocat, coriandre
            </h3>

            <p className="subtitle-description">8,50€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>
            Spring Rolls (8 pièces)
          </h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Gambas royale, salade, coriandre, menthe, concombre
            </h3>

            <p className="subtitle-description">14,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Saumon épicé, cheese, avocat
            </h3>

            <p className="subtitle-description">7,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <h3 className={`${playfair.className} subtitle-description`}>
              Végétarien, concombre, betterave, tomates confites
            </h3>

            <p className="subtitle-description">6,00€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>Plateaux</h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Crazy California (25 pièces)
              </h3>
              <p className="text-white">
                1 salade de choux, 8 cali saumon avocat, 8 cali thon cuit
                avocat, 8 cali tempura crevettes
              </p>
            </div>
            <p className="subtitle-description">19,50€</p>
          </div>

          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Tendance (25 pièces)
              </h3>
              <p className="text-white">
                1 salade de choux, 8 makis saumon, 8 springs rolls saumon avocat
                épicé, 8 cali végétariens
              </p>
            </div>
            <p className="subtitle-description">17,50€</p>
          </div>

          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Calories (25 pièces)
              </h3>
              <p className="text-white">
                1 salade de choux, 2 sushis balls saumon, 2 sushis thon, 2
                sushis crevettes, 2 sushis omelette, 8 makis saumon, 8 cali thon
                avocat
              </p>
            </div>
            <p className="subtitle-description">24,50€</p>
          </div>

          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Romantique (32 pièces)
              </h3>
              <p className="text-white">
                2 soupes miso, 2 salades de choux, 8 cali foie gras, 8 cali
                saumon avocat en forme de coeur, 8 rainbow rolls végétariens, 2
                sashimis saumon, 2 sashimis thon
              </p>
            </div>
            <p className="subtitle-description">39,50€</p>
          </div>

          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Veggies (25 pièces)
              </h3>
              <p className="text-white">
                8 makis végétariens, 8 spring rolls avocat cheese, 8 rainbow
                rolls végétariens, 1 soupe miso
              </p>
            </div>
            <p className="subtitle-description">17,50€</p>
          </div>

          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Aux 2 voyages gastronomiques (50 pièces)
              </h3>
              <p className="text-white">
                2 soupes miso, 2 salades de choux, 8 cali tempura crevettes, 8
                cali saumon, 8 makis saumon, 8 cali thon confit avocat, 2
                temakis saumon, 4 sushis saumon épicés, 4 sushis thon, 4 sushis
                omelette
              </p>
            </div>
            <p className="subtitle-description">59,00€</p>
          </div>

          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Prestige Diabolique (54 pièces)
              </h3>
              <p className="text-white">
                2 soupes miso, 2 salades de choux, 8 cali foie gras, 8 cali
                gambas royale, 8 cali saumon avocat, 8 makis thon, 4 temakis, 6
                sashimis saumon, 4 sushis saumon, 4 sushis thon
              </p>
            </div>
            <p className="subtitle-description">69,00€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>Cuisine Vapeur</h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Bouchées au porc (5 pièces)
              </h3>
            </div>

            <p className="subtitle-description">6,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Bouchées aux crevettes (5 pièces)
              </h3>
            </div>

            <p className="subtitle-description">7,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Ha-kao aux crevettes (5 pièces)
              </h3>
            </div>

            <p className="subtitle-description">7,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Assortiment vapeur (10 pièces)
              </h3>
            </div>

            <p className="subtitle-description">12,50€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>Ramens</h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Ramen aux légumes
              </h3>
            </div>

            <p className="subtitle-description">8,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Ramen aux boeufs
              </h3>
            </div>

            <p className="subtitle-description">14,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Ramen aux poulets
              </h3>
            </div>

            <p className="subtitle-description">13,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Ramen aux crevettes
              </h3>
            </div>

            <p className="subtitle-description">15,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Ramen aux saumons
              </h3>
            </div>

            <p className="subtitle-description">15,50€</p>
          </div>
        </TabPanel>

        <TabPanel className="px-8">
          <h2 className={`${playfair.className} title-menu`}>Riz</h2>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Riz vinaigrette
              </h3>
            </div>

            <p className="subtitle-description">3,50€</p>
          </div>
          <div className="flex justify-between my-5 border-b border-[#ffffff33]">
            <div className="flex flex-col items-start text-start">
              <h3 className={`${playfair.className} subtitle-description`}>
                Riz cantonais
              </h3>
            </div>

            <p className="subtitle-description">6,00€</p>
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
}
