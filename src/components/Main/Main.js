import SocialList from "./MainSocialList/MainSocialList"
import PostCard from "./PostCard/PostCard"
import "./Main.css"

function Main () {

  return (
    <main className="main">
      <SocialList />
      <PostCard />
    </main>
  )
}

export default Main;