import SocialItem from "../MainSocialItem/MainSocialItem"
import "./MainSocialList.css"
import logoFacebook from "../../../assets/logo-facebook.png"
import logoTwitrer from "../../../assets/logo-twitter.png"
import logoInstagram from "../../../assets/logo-instagram.png"

function MainSocialList() {
  const items = [
    {name: "Facebook", logo: logoFacebook},
    {name: "Instagram", logo: logoInstagram},
    {name: "Twitter", logo: logoTwitrer},
  ]

  return (
    <section className="social">
      <h5 className="social__help">Select the social media on which you want to publish</h5>
      <ul className="social__list">
        {
          items.map(item => <SocialItem item={item} key={item.name}/>)
        }
      </ul>
    </section>
  )
}

export default MainSocialList;