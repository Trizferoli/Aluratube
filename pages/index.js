import Header from "./Header"
import Timeline from "./Timeline"
import config from '../config.json'

function HomePage() {

    return (
        <>
            <Header />
            <Timeline playlists={config.playlists} />
        </>
    )
}

export default HomePage