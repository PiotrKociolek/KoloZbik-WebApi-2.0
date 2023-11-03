"use client"

import {Accordion, AccordionItem} from "@nextui-org/react";

const BecomeMember =()=>{
    return(

        <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1"  title="1. Dla czego warto zostać myśliwym?">
                <div>Myśliwym warto zostać z wielu powodów. Po pierwsze, polowanie to nie tylko tradycja, ale także sposób na przyczynienie się do ochrony przyrody. Myśliwi odgrywają ważną rolę w monitorowaniu populacji dzikich zwierząt i zarządzaniu ekosystemami. W ten sposób pomagają utrzymać równowagę między gatunkami i zapobiegają przeludnieniu i związanym z nim problemom środowiskowym. Po drugie, polowanie pozwala nawiązać silną więź z naturą i lepiej zrozumieć jej funkcjonowanie. Jest to również okazja do spędzania czasu na świeżym powietrzu, aktywności fizycznej i kontaktu z dziką przyrodą. Ponadto polowanie to sposób na pozyskanie świeżego, naturalnego mięsa, które jest atrakcyjne dla wielu osób zainteresowanych zdrową dietą. Ostatecznie bycie myśliwym wiąże się z uczestnictwem w społeczności, w której można dzielić się wiedzą, doświadczeniem i pasją z innymi entuzjastami dzikiej przyrody i łowiectwa.</div>

            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 1"  title="2. Złóż wniosek o staż">
              <><p>Kolejnym krokiem jest złożenie podania o przyjęcie na roczny staż do koła łowieckiego.</p></>
                <><p>Ze stażu zwolnione są osoby spełniajace jeden z warunków: posiadają wykształcenie wyższe lub średnie leśne,
                    posiadają inne wyższe wykształcenie o specialnosci łowieckiej,
                    są strażnikami łowieckimi pełniącymi swoją funkcje przez conajmniej 2 lata,
                    cudzoziemcy i obywatele polscy którzy posiadają uprawnienia łowieckie w innym kraju,
                    osoby które utraciły członkowstwo w PZŁ.
                </p></>

            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 1"  title="3. Kurs i egzamin na podstawowe uprawnienia łowieckie">
                <><p>Po odbyciu rocznego stażu kandydat może przystąpić do kursu organizowanego przez Zarząd Okręgowy PZŁ. Podczas kursu zdobędzie niezbędną wiedze.</p>
                <p>Egzamin składa się z 3 części: teorytycznej-pisemnej, teorytycznej-ustnej oraz egzaminu strzeleckiego</p></>
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 1"  title="4. Członkowstwo w PZŁ i złożenie wniosku o przyjęcie do koła">
                <><p>Następnym krokiem jest złożenie deklaracji członkowskiej i opłacenie wpisowego do PZŁ, a następnie złożenie podania o przyjęcie do koła</p></>
            </AccordionItem>
        </Accordion>

    )
}
export default BecomeMember