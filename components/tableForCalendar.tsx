"use client"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const HuntingTable =()=>{
    return(
        <Table isStriped aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Gatunek</TableColumn>
                <TableColumn>Ikona</TableColumn>
                <TableColumn>Opis</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Jeleń Szlachetny</TableCell>
                    <TableCell>miejsce na ikone</TableCell>
                    <TableCell>a) Byki: W drugim roku życia: od 21 sierpnia do końca lutego,</TableCell>
                </TableRow>
            </TableBody>
        </Table>)
}
export default HuntingTable()