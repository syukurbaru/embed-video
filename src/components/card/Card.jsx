import ReactPlayer from "react-player";
import "./card.css";

function Card() {
  return (
    <div className="containerCard">
      <div className="sideLeft">
        <div className="playerWrapper">
          <ReactPlayer
            width="100%"
            height="95%"
            url="https://www.youtube.com/embed/T7jSgu3tIAo"
          />
          <div className="titleVideoUtama">Youtube</div>
        </div>
      </div>
      <div className="sideRight">
        <div className="playerWrapper-2">
          <ReactPlayer
            width="55%"
            height="100%"
            url="https://www.dailymotion.com/embed/video/x884c83"
          />
          <div className="content">
            <div className="titleVideo">Daily Motion</div>
            <div className="description">
              Facebook adalah platform media sosial yang berkembang
            </div>
          </div>
        </div>
        <div className="playerWrapper-2">
          <ReactPlayer
            width="55%"
            height="100%"
            url="https://fb.watch/dPHuiVQaOu/"
          />
          <div className="content">
            <div className="titleVideo">Facebook</div>
            <div className="description">
              Facebook adalah platform media sosial yang berkembang
            </div>
          </div>
        </div>
        <div className="playerWrapper-2">
          <ReactPlayer
            width="55%"
            height="100%"
            url="https://vimeo.com/68481134"
          />
          <div className="content">
            <div className="titleVideo">Vimeo</div>
            <div className="description">
              Vimeo adalah platform media sosial yang berkembang
            </div>
          </div>
        </div>
        <div className="playerWrapper-2">
          <ReactPlayer
            width="55%"
            height="100%"
            url="https://www.dailymotion.com/embed/video/x884c83"
          />
          <div className="content">
            <div className="titleVideo">Daily Motion</div>
            <div className="description">
              Facebook adalah platform media sosial yang berkembang
            </div>
          </div>
        </div>
        <div className="playerWrapper-2">
          <ReactPlayer
            width="55%"
            height="100%"
            url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
          />
          <div className="content">
            <div className="titleVideo">Streaming Video</div>
            <div className="description">
              Streaming Video adalah platform media sosial yang berkembang
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
