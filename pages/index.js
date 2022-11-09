import React from "react";
import Header from "./Header"
import Timeline from "./Timeline"
import Menu from "../src/components/Menu/Index";
import config from '../config.json'
import { CSSReset } from "../src/components/CSSReset"

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState('');
    console.log(config.playlists)
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu
                    valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}
                />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
            </div>
        </>
    )
}

export default HomePage