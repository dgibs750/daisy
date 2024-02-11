import React, { useEffect } from "react"
import * as C from './style';
import Link from "next/link";

const CollectionsCard = (config: any) => {
    return (
        <Link href={{
            pathname: `/mint/${config.collection_address}`,
            query: {
                data: JSON.stringify(config)
            }
        }}
            as={`/mint/${config.collection_address}`}
        >
            <C.Card>
                <C.NftImage src={config.launchImage} alt="Avatar" />
                <C.CardContainer>
                    <C.Title>{config.name}</C.Title>
                </C.CardContainer>
            </C.Card>
        </Link>
    )

}

export default CollectionsCard