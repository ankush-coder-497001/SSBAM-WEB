import "./Footer.css"

const Footer = () =>{
  return(
    <>
     <footer class="footer">
        <div class="container">
            <div class="footer-section">
                <h3>Follow Us</h3>
                <ul class="social-media">
                    <li><a href="#"><img src="my-fc.png" alt="Facebook"/></a></li>
                    <li><a href="#"><img src="my-in.png" alt="Instagram"/></a></li>
                    <li><a href="#"><img src="my-x.png" alt="Twitter"/></a></li>
                </ul>
            </div>

            <div className="footer-section">
          <h3>Our Location</h3>
          <p>Digma,Banaras Road 497001</p>
          <div 
          className="ifram"
            dangerouslySetInnerHTML={{ __html: `
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14674.129549631212!2d83.1526632993625!3d23.150761515342648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3989a16e28c8a885%3A0xdef4e5df9705ccb6!2sShri%20Sai%20Baba%20Aadarsh%20Mahavidyalaya!5e0!3m2!1sen!2sin!4v1724690624670!5m2!1sen!2sin" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            `}}
          />
        </div>

            <div class="footer-section">
                <h3>Contact Us</h3>
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@college.edu</p>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2024 SSBAM. All Rights Reserved.</p>
            <p>Designed by Ankush Kumar Gupta</p>
        </div>
    </footer>
    </>
  )
}

export default Footer;