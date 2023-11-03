"use client"

import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";

const FilesTable =()=>{
    return(
        <Table>
            <TableHeader>
                <TableColumn>Nazwa Pliku</TableColumn>
                <TableColumn>Ikonka</TableColumn>
                <TableColumn><></></TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Podanie o przyjęcie do Koła</TableCell>
                    <TableCell><></></TableCell>
                    <TableCell>Pobierz</TableCell>
                </TableRow>

                <TableRow key="2">
                    <TableCell>Podanie o zawieszenie członkowstwa</TableCell>
                    <TableCell><></></TableCell>
                    <TableCell>Pobierz</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
export default FilesTable