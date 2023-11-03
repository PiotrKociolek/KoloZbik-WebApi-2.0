"use client"

import {Accordion, AccordionItem, Button, Input, Tab, Tabs} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";

const UserPanel =()=>{
return(
    <div className="mx-auto max-w-xl">
        <Accordion variant="splitted">
        <AccordionItem key="1" aria-label="Accordion 1" title="Dodaj Użytkownika">
            <Input placeholder="Podaj Imię"/>
            <Input placeholder="Podaj Nazwisko"/>
            <Input placeholder="Podaj Mail"/>
            <Input placeholder="Podaj Nazwę Użytkownika"/>
            <>Wybierz rolę</>
            <Tabs color="success" aria-label="Tabs colors" radius="full">
                <Tab key="Członek" title="Członek"/>
                <Tab key="Moderator" title="Moderator"/>
                <Tab key="Admin" title="Admin"/>
            </Tabs>
            <Button>Zatwierdź </Button>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Zmień Uprawnienia">
            <div>
               <Input placeholder="Podaj Użytkownika"/>

                <Button>Zatwierdź </Button>
                </div>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Usuń Użytkownika">
            <Input placeholder="Podaj Użytkownika"/>
            <Button color="danger">USUŃ</Button>

        </AccordionItem>
    </Accordion>
    </div>
   )

}
export default UserPanel