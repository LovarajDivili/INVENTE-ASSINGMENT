import './index.css'
import VideoPlayer from 'react-video-js-player'

const VideoDetails = props => {
  const {blogData} = props
  const {title, URL} = blogData
  return (
    <div className="item-container">
      <p className="item-title">{title}</p>
      <div>
        <VideoPlayer
          src={URL}
          alt={title}
          height="350"
          width="1000"
          className="video_container"
        />
      </div>
    </div>
  )
}

export default VideoDetails
