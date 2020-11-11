import "./PostCard.css"
import postImage from  "../../../assets/post-image.jpg"

function PostCard () {
  return (
    <section className="post-card">
      <article className="post-card__item">
        <h3 className="post-card__title">Bakery day</h3>
        <img className="post-card__image" src={postImage} alt="post"/>
        <div className="post-card__actions">
          <input type="text" placeholder="Write your post message"/>
          <button>
            Edit Image
          </button>
        </div>
        <div className="post-card__reactions">
          <svg  className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            0 /
            <span> 250</span>
          </div>
        </div>
      </article>
    </section>
  )
}

export default PostCard