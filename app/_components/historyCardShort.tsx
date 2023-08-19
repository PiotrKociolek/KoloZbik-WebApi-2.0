'use client'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HistoryCardShort = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/zalozyciele.svg" className="founders" />
            <Card.Body>
                <Card.Title><h1>Historia Koła</h1></Card.Title>
                <Card.Text style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    Gdy milkną wystrzały przesuwającego się na zachód frontu, sądeccy myśliwi zaczynają się grupować z myślą o możliwości wydzierżawienia obwodów łowieckich.
                    Ci którzy zdobyli lub udało się im zarejestrować broń przechowywaną w okresie okupacji czynią starania o jej zarejestrowanie i w Starostwie szukają dróg umożliwiających dzierżawę wybranych wiosek i niektórym się to udaje.
                    Z końcem roku 1947 powstaje na terenie Nowego Sącza pierwsze Koło Łowieckie, które przybiera nazwę „Dunajec”. Jego pierwszymi członkami zostają późniejsi założyciele Koła „Żbik”: Władysław Pajorski, Bolesław Serkowski, Stefan Majcher, Jan Łoboda.

                </Card.Text>
                <Button href="/history" variant="outline-success">Czytaj więcej</Button>
            </Card.Body>
        </Card>
    );
};

export default HistoryCardShort;
