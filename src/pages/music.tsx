import * as React from "react";
import { Container } from "react-bootstrap";

const Music = () => {
    return (
        <Container fluid id="music" className="py-3">
            <Container>
                <h2>Music</h2>
                <p>I am currently engaged in several musical projects:</p>
                <h3>Astrolabio</h3>
                <p>
                    Find my music as Astrolabio on{" "}
                    <a href="https://astrolabio.bandcamp.com/" target="_blank">
                        Bandcamp
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://soundcloud.com/astrolabio1"
                        target="_blank"
                    >
                        Soundcloud
                    </a>
                    .
                </p>
                {/* <iframe
                    style={{ border: 0, width: "100%", height: "120px" }}
                    src="https://bandcamp.com/EmbeddedPlayer/album=1373177927/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                    seamless
                >
                    <a href="https://astrolabio.bandcamp.com/album/vac-o">
                        Vacío by Astrolabio
                    </a>
                </iframe> */}
                <hr />
                <h3>Spiritual Advisor</h3>
                <p>
                    Find my music as Spiritual Advisor also on{" "}
                    <a
                        href="https://spiritualadvisoruk.bandcamp.com/"
                        target="_blank"
                    >
                        Bandcamp
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://soundcloud.com/spiritualadvisoruk"
                        target="_blank"
                    >
                        Soundcloud
                    </a>
                    .
                </p>
                {/* <iframe
                    style={{ border: 0, width: "100%", height: "120px" }}
                    src="https://bandcamp.com/EmbeddedPlayer/album=3654796707/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                    seamless
                >
                    <a href="https://spiritualadvisoruk.bandcamp.com/album/delusion">
                        Delusion by Spiritual Advisor
                    </a>
                </iframe> */}
                <hr />
                <h3>YOLO</h3>
                <p>
                    My band, YOLO, hasn't recorded yet, but we're working on it!
                </p>
                <p>
                    Follow us on{" "}
                    <a
                        href="https://instagram.com/yolo______theeband"
                        target="_blank"
                    >
                        Instagram
                    </a>
                    .
                </p>
                <hr />
                <h3>DJ mixes</h3>
                <p>
                    Finally, I'm starting to put out some mixes on{" "}
                    <a href="https://soundcloud.com/eeveezayas" target="_blank">
                        Soundcloud
                    </a>
                    .
                </p>
                <iframe
                    width="100%"
                    height="166"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346379259&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
                <div
                    style={{
                        fontSize: "10px",
                        color: "#cccccc",
                        lineBreak: "anywhere",
                        wordBreak: "normal",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        fontFamily:
                            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                        fontWeight: 100,
                    }}
                >
                    <a
                        href="https://soundcloud.com/eeveezayas"
                        title="EEVEE ZAYAS"
                        target="_blank"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                    >
                        EEVEE ZAYAS
                    </a>{" "}
                    ·{" "}
                    <a
                        href="https://soundcloud.com/eeveezayas/queue-is-the-name-of-the-game"
                        title="Queue Is The Name Of The Game"
                        target="_blank"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                    >
                        Queue Is The Name Of The Game
                    </a>
                </div>
            </Container>
        </Container>
    );
};

export default Music;
