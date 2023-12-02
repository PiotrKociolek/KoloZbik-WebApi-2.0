"use client"

import {
        Accordion,
        AccordionItem,
        Table,
        TableHeader,
        TableColumn,
        TableBody,
        TableRow,
        TableCell,
        Card, CardBody
} from "@nextui-org/react";
import HuntingTable from "@/components/tableForCalendar";
import TableForCalendar from "@/components/tableForCalendar";

const HuntingCalendar =()=>{
    return(
            <div className="mx-4">
                    <div className="mx-auto p-4 max-w-screen-xl text-center">
                    <Accordion selectionMode="multiple">

                            <AccordionItem key="1" aria-label="January" title="Kalendarz łowiecki">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">__</TableCell>
                                                            <TableCell className="w-1/3">a) byki – od dnia 21 sierpnia do końca lutego,
                                                                    b) łanie – od dnia 1 września do dnia 15 stycznia,
                                                                    c) cielęta – od dnia 1 września do końca lutego;</TableCell>
                                                    </TableRow>
                                                    <TableRow key="2">
                                                            <TableCell className="w-1/4">Sarna</TableCell>
                                                            <TableCell className="w-1/4">__</TableCell>
                                                            <TableCell className="w-1/3">a)Kozły od 11.05 do 30.09
                                                                    b) Kozy i koźlęta do 15.01
                                                                    </TableCell>
                                                    </TableRow>
                                                    <TableRow key="3">
                                                            <TableCell className="w-1/4">Dzik</TableCell>
                                                            <TableCell className="w-1/4">__</TableCell>
                                                            <TableCell className="w-1/3">a) odyńce, wycinki, przelatki oraz warchlaki, przy czym za warchlaki uznaje się dziki od dnia urodzenia do dnia 31 marca następnego roku kalendarzowego – przez cały rok,
                                                                    b) lochy – cały rok;
                                                            </TableCell>
                                                    </TableRow>
                                                    <TableRow key="4">
                                                            <TableCell className="w-1/4">Borsuk</TableCell>
                                                            <TableCell className="w-1/4">__</TableCell>
                                                            <TableCell className="w-1/3">od dnia 1 września do dnia 30 listopada, a na terenach obwodów łowieckich, w których występuje głuszec lub cietrzew – przez cały rok;
                                                            </TableCell>
                                                    </TableRow>
                                                    <TableRow key="5">
                                                            <TableCell className="w-1/4">                                                    Tchórze i Kuny (Leśne i Domowe)
                                                            </TableCell>
                                                            <TableCell className="w-1/4">__</TableCell>
                                                            <TableCell className="w-1/3">od dnia 1 września do dnia 31 marca, a na terenach obwodów łowieckich, w których występuje głuszec lub cietrzew – przez cały rok;
                                                            </TableCell>
                                                    </TableRow>
                                                    <TableRow key="6">
                                                            <TableCell className="w-1/4"> Krzyżówki, Cyraneczki, Głowienki i Czernice
                                                            </TableCell>
                                                            <TableCell className="w-1/4">__</TableCell>
                                                            <TableCell className="w-1/3">od dnia 15 sierpnia do dnia 21 grudnia
                                                            </TableCell>
                                                    </TableRow>
                                                    <TableRow key="7">
                                                            <TableCell className="w-1/4">  Zające Szaraki i Dzikie Króliki
                                                            </TableCell>
                                                            <TableCell className="w-1/4">__</TableCell>
                                                            <TableCell className="w-1/3">od dnia 1 listopada do dnia 31 grudnia, a w drodze odłowu – do dnia 15 stycznia
                                                            </TableCell>
                                                    </TableRow>
                                                    <TableRow key="8">
                                                            <TableCell className="w-1/4">  Bażanty
                                                            </TableCell>
                                                            <TableCell className="w-1/4">__</TableCell>
                                                            <TableCell className="w-1/3">a) koguty – od dnia 1 października do końca lutego,
                                                                    b) kury – wyłącznie na terenach ośrodków hodowli zwierzyny, gdzie prowadzi się wolierową hodowlę bażanta – od dnia 1 października do dnia 31 stycznia;
                                                            </TableCell>
                                                    </TableRow>
                                                    <TableRow key="9">
                                                            <TableCell className="w-1/4">  Lis
                                                            </TableCell>
                                                            <TableCell className="w-1/4">__</TableCell>
                                                            <TableCell className="w-1/3">od dnia 1 czerwca do dnia 31 marca, a na terenach obwodów łowieckich, w których występuje głuszec lub cietrzew lub prowadzono w ostatnich 2 latach kalendarzowych zasiedlenia zająca, bażanta lub
                                                                    kuropatwy – przez cały rok
                                                            </TableCell>
                                                    </TableRow>
                                                    <TableRow key="10">
                                                            <TableCell className="w-1/4">  Szakal Złocisty
                                                            </TableCell>
                                                            <TableCell className="w-1/4">__</TableCell>
                                                            <TableCell className="w-1/3">od dnia 1 sierpnia do końca lutego, a na terenach obwodów łowieckich, na których występuje głuszec lub cietrzew lub prowadzono w ostatnich dwóch latach kalendarzowych, przed dniem zatwierdzenia rocznego planu łowieckiego na kolejny rok łowiecki, zasiedlenia zająca, bażanta lub kuropatwy - przez cały rok (obowiązuje od 1.03.2019).
                                                            </TableCell>
                                                    </TableRow>


                                            </TableBody>
                                    </Table>
                            </AccordionItem>


                    </Accordion>
                            <Card>
                                    <CardBody>
                                            <p>
                                                    1. Jeżeli początek okresu polowań przypada bezpośrednio po dniu lub dniach wolnych od pracy, okres ten rozpoczyna się pierwszego dnia wolnego od pracy.
                                            </p>

                                            <p>
                                                    2. Jeżeli koniec okresu polowań przypada na dzień poprzedzający dzień wolny od pracy, okres ten upływa z ostatnim dniem wolnym od pracy.
                                            </p>

                                            <p>
                                                    3. Przy ustalaniu okresu polowań, przyjmuje się, że dzień wolny od pracy to niedziele i święta określone w odrębnych przepisach o dniach wolnych od pracy oraz soboty.
                                            </p>

                                            <p>
                                                    4. Polowanie na IGO:
                                                    NA IGO MOŻNA POLOWAĆ TYLKO INDYWIDUALNIE!!!
                                                    NA IGO MOŻNA POLOWAĆ TYLKO KULĄ!!!
                                                    NA IGO NIE POLUJEMY NOCĄ
                                                    <p>
                                                            4.1. Status IGO otrzymały gatunki uznane za obce, inwazyjne oraz stwarzające zagrożenie dla krajów UE w tym Polski.
                                                    </p>
                                                    <p>
                                                            4.2. Przede wszystkim z listy zwierząt łownych skreślono: jelenie sika, jenoty, szopy pracze oraz piżmaki, a w ślad za tym zniesiono okresy polowań na te gatunki. Jednak nie oznacza to, że nie możemy na nie polować.
                                                    </p>
                                                    <p>
                                                            4.3. Od 1 kwietnia 2022 r. na w/w gatunki Łowczowie nie wypisują „Upoważnień do wykonywania polowania indywidualnego”. Myśliwi posiadający ważne „odstrzały” na jakikolwiek gatunek łowny, może odstrzelić dowolną liczbę IGO.
                                                    </p>
                                                    <p>
                                                            4.4. Każdy myśliwy jest zobowiązany do odnotowania każdej odstrzelonej zwierzyny IGO niezwłocznie po zakończeniu polowania, a w przypadku zwierzyny grubej przed podjęciem czynności transportowych w:
                                                            a) książce ewidencji pobytu na polowaniu indywidualnym
                                                            b) sprawozdaniu z wykonywania polowania znajdującym się na tylnej stronie „odstrzału”
                                                    </p>
                                                    <p>
                                                            4.5 W świetle prawa gatunki te przestały być drapieżnikami zatem wolno na nie polować wyłącznie w dzień (czyli od wschodu do zachodu słońca)
                                                    </p>
                                                    <p>
                                                            4.6 NA BYKI JELENIA SIKA MOŻNA POLOWAĆ NIE MAJĄC UPRAWNIEŃ SELEKCJONERSKICH: W świetle obowiązujących uregulowań prawnych jeleń sika nie jest zaliczany do zwierzyny płowej, a więc mogą na nie polować myśliwi, którzy nie posiadają uprawnień selekcjonerskich.
                                                    </p>
                                            </p>
                                    </CardBody>
                            </Card>

                    </div>
            </div>
        );


}
export default HuntingCalendar