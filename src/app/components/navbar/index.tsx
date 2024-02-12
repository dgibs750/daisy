import * as C from "./style";
import Link from "next/link";
import { Tooltip } from 'react-tooltip';

const NavBar = () => {
    return (
        <C.Header>
            <Link
                href={'/'}
                style={{ textDecoration: 'none' }}
            >
                <C.Logo src="/images/DAISY_Logo-Explore-06.svg" />
            </Link>
            <C.HeaderButtonContainer>
                <Link 
                    href={''}
                    aria-disabled={true}
                    pointer-event="none"
                    data-tooltip-id="unavailable-tooltip"
                    data-tooltip-content="Coming Soon."
                    data-tooltip-offset={-10}
                    style={{ textDecoration: 'none' }}
                >
                    <C.NavSelection>Launchpad</C.NavSelection>
                </Link>
                <Link
                    href={''}
                    aria-disabled={true}
                    pointer-event="none"
                    data-tooltip-id="unavailable-tooltip"
                    data-tooltip-content="Coming Soon."
                    data-tooltip-offset={-10}
                    style={{ textDecoration: 'none' }}
                >
                    <C.NavSelection>Auctions</C.NavSelection>
                </Link>
                <Link
                    href={''}
                    aria-disabled={true}
                    pointer-event="none"
                    data-tooltip-id="unavailable-tooltip"
                    data-tooltip-content="Coming Soon."
                    data-tooltip-offset={-10}
                    style={{ textDecoration: 'none' }}
                >
                    <C.NavSelection>Generator</C.NavSelection>
                </Link>
                <Link
                    href={''}
                    aria-disabled={true}
                    pointer-event="none"
                    data-tooltip-id="unavailable-tooltip"
                    data-tooltip-content="Coming Soon."
                    data-tooltip-offset={-10}
                    style={{ textDecoration: 'none' }}
                >
                    <C.NavSelection>Anton</C.NavSelection>
                </Link>
                <Tooltip id="unavailable-tooltip" place="bottom" />
                <Link href={'https://airtable.com/app7iJdlG5RS4GicU/shrnTwmhJTBJIVHz7'} target="_blank" style={{ textDecoration: 'none' }}>
                    <C.ApplyButton>Apply Here</C.ApplyButton>
                </Link>
            </C.HeaderButtonContainer>
        </C.Header>
    )
}

export default NavBar;