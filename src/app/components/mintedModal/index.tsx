import React, { useEffect } from "react"
import * as C from "./style"

const MintedModal = (props: any, config: any) => {

    return (
        <C.Modal>
            <C.Overlay onClick={props.close}></C.Overlay>
            <C.Dialog>
                <C.BgPink />
                <C.BgBlue />
                <C.DialogHeader>
                    <C.DialogTitle></C.DialogTitle>
                    <C.CloseButton onClick={props.close}>&times;</C.CloseButton>
                </C.DialogHeader>
                <C.DialogBody>

                    {props.mints.length === 1 && (
                        <C.NftSingle>
                            <C.Nft>
                                <C.NftImage src={typeof props.mints[0].data === "undefined" ? `${props.tokenUri}/${props.mints[0]}.png` : props.mints[0].data.image}></C.NftImage>
                                <C.NftTitle>
                                    {typeof props.mints[0].data === "undefined" ? (props.name + ' #' + props.mints[0]) : props.mints[0].data.name}
                                </C.NftTitle>
                            </C.Nft>
                        </C.NftSingle>
                    )}

                    {props.mints.length > 1 && (
                        <C.Nfts>
                            {props.mints.map((mint: any, i:number) => (
                                <C.Nft key={i}>
                                    <C.NftImage src={typeof mint.data === "undefined" ? `${props.tokenUri}/${mint}.png` : mint.data.image}></C.NftImage>
                                    <C.NftTitle>
                                        {typeof mint.data === "undefined" ? (props.name + ' #' + mint) : mint.data.name}
                                    </C.NftTitle>
                                </C.Nft>
                            ))}
                        </C.Nfts>
                    )}

                    <C.Bottom>

                        <C.Title>
                            Minted!
                        </C.Title>

                        <C.Button onClick={props.close}>
                            OK
                        </C.Button>
                    </C.Bottom>

                </C.DialogBody>

            </C.Dialog>
        </C.Modal>
    )

}

export default MintedModal