"use client"
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { CardHeader } from "@nextui-org/card";

const historyCardFull = () => {
    return (
        <div className="bg-black p-4 rounded-lg">
            <Card className="shadow-md rounded-lg p-4 m-4 bg-gray-800">
                <CardHeader className="text-center text-white">Historia Koła Żbik</CardHeader>
                <CardBody className="p-4">
                    <p className="text-gray-100 leading-6">
                        Gdy milkną wystrzały przesuwającego się na zachód frontu, sądeccy
                        myśliwi zaczynają się grupować z myślą o możliwości wydzierżawienia
                        obwodów łowieckich. Ci którzy zdobyli lub udało się im zarejestrować
                        broń przechowywaną w okresie okupacji czynią starania o jej
                        zarejestrowanie i w Starostwie szukają dróg umożliwiających dzierżawę
                        wybranych wiosek i niektórym się to udaje. Z końcem roku 1947 powstaje
                        na terenie Nowego Sącza pierwsze Koło Łowieckie, które przybiera nazwę
                        „Dunajec”. Jego pierwszymi członkami zostają późniejsi założyciele
                        Koła „Żbik”: Władysław Pajorski, Bolesław Serkowski, Stefan Majcher,
                        Jan Łoboda. Z początkiem roku 1948 Koło Łowieckie „Dunajec” ze względu
                        na przybywającą ilość członków dzieli się na Koło Łowieckie „Szarak” i
                        „Żbik”, a następnie Koło „Szarak” rozdziela się jeszcze na koło
                        „Kolejarz”. W 1950r. powstaje przy Komendzie Powiatowej M.O. Koło
                        Łowieckie „Gwardia”. Pierwszymi członkami Koła „Żbik” są: A. Cięciwa,
                        J. Czorny, S. Gajewski, Z. Gieniec, J. Kalisz, J. Kościółek, J.
                        Łoboda, S. Majcher, W. Pajorski, B. Serkowski, M. Sulicz, J. Syntysz.

                        Na pierwszym walnym zebraniu Koła zostaje podpisany status Koła oraz
                        wybrany pierwszy zarząd w składzie: Władysław Pajorski –
                        przewodniczący zarządu, Bolesław Serkowski – łowczy, natomiast kto był
                        sekretarzem i skarbnikiem brak danych. Koło zostało zarejestrowane w
                        1948r. w Urzędzie Powiatowym w Nowym Sączu i otrzymało nazwę „Żbik” z
                        siedzibą w Nowym Sączu, z przyznaniem obwodów Nr 155, 160, 164 o
                        łącznej powierzchni 16,500ha. W miarę upływu czasu szeregi Koła
                        wzrastały. Myśliwi w nim zrzeszeni budowali tradycję i kulturę
                        łowiecką. Zaczęto powszechnie cenić zdobyte trofea, traktować zbiorowe
                        polowania jako formę spotkań towarzyskich i wypoczynku w naturze.
                        Tereny łowisk sądeckich budzą zainteresowanie myśliwych krajowych i
                        zagranicznych z uwagi na bogate walory łowieckie.
                    </p>
                    <div className="mt-4 mx-auto">
                        <Image src={"/zalozyciele.svg"} alt="Założyciele Koła" />
                    </div>
                    <p className="text-center text-gray-300 mt-2">Założyciele Koła Żbik</p>
                </CardBody>
            </Card>
        </div>
    );
}

export default historyCardFull;
