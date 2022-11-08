import Header from "./Header"
import Timeline from "./Timeline"
import Menu from "./Menu"
import config from '../config.json'
import { CSSReset } from "../src/components/CSSReset"

function HomePage() {

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>
    )
}

export default HomePage