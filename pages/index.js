import Header from "./Header"
import Timeline from "./Timeline"
import Menu from "./Menu"
import config from '../config.json'
import { CSSReset } from "../src/components/CSSReset"

function HomePage() {

    return (
        <>
            <Menu />
            <CSSReset />
            <Header />
            <Timeline playlists={config.playlists} />
        </>
    )
}

export default HomePage