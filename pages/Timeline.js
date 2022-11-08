

function Timeline(propriedades) {
    const playlistNames = Object.keys(propriedades.playlists);
    return (
        <>
            <div>
                {playlistNames.map((name) => {
                    const videos = propriedades.playlists[name];
                    return videos.map((video) => {
                        return (
                            <section>
                                <h2>{name}</h2>
                                <div>
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>{video.title}</span>
                                    </a>
                                </div>
                            </section>
                        )

                    })
                })}
            </div>
        </>
    )
}

export default Timeline;