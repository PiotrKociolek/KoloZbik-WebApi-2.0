"use client"

import {Accordion,AccordionItem,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import HuntingTable from "@/components/tableForCalendar";
import TableForCalendar from "@/components/tableForCalendar";

const HuntingCalendar =()=>{
    return(
            <div className="mx-4">
                    <div className="mx-auto p-4 max-w-screen-xl text-center">
                    <Accordion selectionMode="multiple">

                            <AccordionItem key="1" aria-label="January" title="Styczeń">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">miejsce na ikonę</TableCell>
                                                            <TableCell className="w-1/3">a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                    </Table>
                            </AccordionItem>

                            <AccordionItem key="2" aria-label="February" title="Luty">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">miejsce na ikonę</TableCell>
                                                            <TableCell className="w-1/3">a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                    </Table>
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="March" title="Marzec">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">miejsce na ikonę</TableCell>
                                                            <TableCell className="w-1/3">a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                    </Table>
                            </AccordionItem>
                            <AccordionItem key="4" aria-label="April" title="Kwiecień">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">miejsce na ikonę</TableCell>
                                                            <TableCell className="w-1/3">a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                    </Table>
                            </AccordionItem>
                            <AccordionItem key="5" aria-label="May" title="Maj">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">miejsce na ikonę</TableCell>
                                                            <TableCell className="w-1/3">a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                    </Table>
                            </AccordionItem>
                            <AccordionItem key="6" aria-label="June" title="Czerwiec">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">miejsce na ikonę</TableCell>
                                                            <TableCell className="w-1/3">a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                    </Table>
                            </AccordionItem>
                            <AccordionItem key="7" aria-label="July" title="Lipiec">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">miejsce na ikonę</TableCell>
                                                            <TableCell className="w-1/3">a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                    </Table>

                            </AccordionItem>
                            <AccordionItem key="8" aria-label="August" title="Sierpień">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">miejsce na ikonę</TableCell>
                                                            <TableCell className="w-1/3">a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                    </Table>
                            </AccordionItem>
                            <AccordionItem key="9" aria-label="September" title="Wrzesień">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">miejsce na ikonę</TableCell>
                                                            <TableCell className="w-1/3">a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                    </Table>
                            </AccordionItem>
                            <AccordionItem key="10" aria-label="October" title="Październik">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">miejsce na ikonę</TableCell>
                                                            <TableCell className="w-1/3">a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                    </Table>
                            </AccordionItem>
                            <AccordionItem key="11" aria-label="November" title="Listopad">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">miejsce na ikonę</TableCell>
                                                            <TableCell className="w-1/3">a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                    </Table>
                            </AccordionItem>
                            <AccordionItem key="12" aria-label="December" title="Grudzień">
                                    <Table className="mx-auto" isStriped aria-label="Example static collection table">
                                            <TableHeader>
                                                    <TableColumn className="w-1/4">Gatunek</TableColumn>
                                                    <TableColumn className="w-1/4">Ikona</TableColumn>
                                                    <TableColumn>Opis</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow key="1">
                                                            <TableCell className="w-1/4">Jeleń Szlachetny</TableCell>
                                                            <TableCell className="w-1/4">miejsce na ikonę</TableCell>
                                                            <TableCell className="w-1/3">a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                                                    </TableRow>
                                            </TableBody>
                                    </Table>

                            </AccordionItem>
                    </Accordion>

            </div>
            </div>
        );


}
export default HuntingCalendar