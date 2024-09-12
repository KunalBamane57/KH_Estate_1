import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import {
    faGlobe,
    faCaretDown,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Languagebar = () => {
  return (
    <div>
              <Dialog>
                <DialogTrigger>
                  <div className="language_change hidden md:flex items-center border border-slate-500 rounded-full px-4 py-2">
                    <span className="text-xl">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        style={{ color:"#676565" }}
                      />
                    </span>{" "}
                    &#160; &#160;
                    <h4 className="text-md">
                      English &#160;{" "}
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        style={{ color:"#676565" }}
                      />
                    </h4>
                  </div>
                </DialogTrigger>
                <DialogContent className="lg:max-w-[1000px] h-[600px] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-normal text-md">
                      <div className="options flex flex-row border-b-2 pb-2">
                        <div className="language">Language & Region</div> &nbsp;
                        &nbsp;
                        <div className="Currency text-neutral-500">
                          Currency
                        </div>
                      </div>
                    </DialogTitle>
                    <DialogHeader className="text-2xl pt-5">
                      Suggested Languages & Regions
                    </DialogHeader>
                    <DialogDescription className="suggested_lang">
                      <div className="sugg_lang flex gap-[100px] py-5 pb-10">
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          United Kingdom
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          United States
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">हिंदी</span>
                          <br />
                          भारत
                        </div>
                      </div>
                    </DialogDescription>
                    <DialogHeader className="text-2xl">
                      Choose a Language and Region
                    </DialogHeader>
                    <DialogDescription className="choose_lang">
                      <div className="sugg_lang grid grid-cols-5 gap-4 py-5 max-h-[600px]">
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          India
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Azərbaycanca</span>
                          <br />
                          Azərbaycan
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Bahasa Indonesia</span>
                          <br />
                          Indonesia
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Bosanski</span>
                          <br />
                          Bosna i Hercegovina
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Català</span>
                          <br />
                          Espanya
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Česky</span>
                          <br />
                          Česká republika
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Crnogorski</span>
                          <br />
                          Crna Gora
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Dansk</span>
                          <br />
                          Danmark
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Deutsch</span>
                          <br />
                          Deutschland
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Deutsch</span>
                          <br />
                          Österreich
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Deutsch</span>
                          <br />
                          Schweiz
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Deutsch</span>
                          <br />
                          Luxemburg
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Eesti</span>
                          <br />
                          Eesti
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          Australia
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          Canada
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          Ireland
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          New Zealand
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          Singapore
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Argentina
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Bolivia
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Chile
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Colombia
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Costa Rica
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Ecuador
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          El Salvador
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          España
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Estados Unidos
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Guatemala
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Honduras
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          México
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Nicaragua
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Panamá
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Paraguay
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Perú
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Uruguay
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Venezuela
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Français</span>
                          <br />
                          Belgique
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Français</span>
                          <br />
                          Canada
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Français</span>
                          <br />
                          France
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Français</span>
                          <br />
                          Luxembourg
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Français</span>
                          <br />
                          Suisse
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Italiano</span>
                          <br />
                          Italia
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Italiano</span>
                          <br />
                          Svizzera
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Magyar</span>
                          <br />
                          Magyarország
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Nederlands</span>
                          <br />
                          België
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Nederlands</span>
                          <br />
                          Nederland
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Norsk</span>
                          <br />
                          Norge
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Polski</span>
                          <br />
                          Polska
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Português</span>
                          <br />
                          Brasil
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Português</span>
                          <br />
                          Portugal
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
    </div>
  )
}

export default Languagebar
