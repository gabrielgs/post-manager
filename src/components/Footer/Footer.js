import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <button className="btn btn-primary-outline">Cancel Post</button>
        <button className="btn btn-primary">Preview Post before publishing</button>
      </div>
    </footer>
  )
}

export default Footer;