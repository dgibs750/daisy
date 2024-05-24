import * as C from './style';
import Link from "next/link";
import { format } from "date-fns";


const CollectionsCard = (_props: any) => {

    let config = _props.config;

    let launchDate: String;
    let launchPrice: String;
    let collectionSize: String;

    if (config.date != null) {
        launchDate = format(config.date, "MM/dd");
    } else {
        launchDate = 'TBA';
    }

    if (config.price != null) {
        launchPrice = config.price;
    } else {
        launchPrice = 'TBA';
    }

    if (config.size != null) {
        collectionSize = config.size;
    } else {
        collectionSize = 'TBA';
    }

    return (
        <C.Container>
            <Link href={{
                pathname: `/mint/${config.collection_address}`,
                query: {
                    data: JSON.stringify(config)
                }
            }}
                as={`/mint/${config.collection_address}`}
                style={{ textDecoration: 'none' }}
            >
                <C.Card>
                    <C.NftImage src={config.launchImage} alt="Avatar" />
                    <C.CardContainer>
                        <C.Title>{config.name}</C.Title>
                        <C.DetailsRow>
                            <C.DetailsColumn>
                                <C.LDetailFooter>
                                    Date
                                </C.LDetailFooter>
                                <C.LDetails>
                                    {launchDate}
                                </C.LDetails>
                            </C.DetailsColumn>
                            <C.DetailsColumn>
                                <C.LDetailFooter>
                                    Size
                                </C.LDetailFooter>
                                <C.LDetails>
                                    {collectionSize}
                                </C.LDetails>
                            </C.DetailsColumn>
                            <C.DetailsColumn>
                                <C.RDetailFooter>
                                    Price
                                </C.RDetailFooter>
                                <C.RDetails>
                                    {launchPrice} <C.Currency>Sei</C.Currency>
                                </C.RDetails>
                            </C.DetailsColumn>
                        </C.DetailsRow>
                    </C.CardContainer>
                </C.Card>
            </Link>
        </C.Container>
    )

}

export default CollectionsCard