import styles from "./Message.module.css"
import FirstImage from "../assets/Images/img1.png"
function MessageComponent(){
    return(
        <>
   <div>
  <h1>Send Us a Message</h1>
  <p>Please send us your requirements and we will get back to you at the earliest</p>

  <div className={styles.Name}>
    <div>
      <p>👤 First Name</p>
    </div>
    <div>
      <p>👤 Last Name</p>
    </div>
  </div>

  <div className={styles.ButtonRow}>
    <button></button>
    <button></button>
  </div>

  <div>
    <p className={styles.LeftAlign}>✉️ Email Address</p>
    <div className={styles.InputBox}></div>
  </div>

  <div className={styles.Name}>
    <div>
      <p>☎️ Phone Number</p>
    </div>
    <div>
      <p>🚋 Company Name</p>
    </div>
  </div>

  <div className={styles.ButtonRow}>
    <button></button>
    <button></button>
  </div>

  <div>
    <p className={styles.LeftAlign}>🌐 Country</p>
    <div className={styles.InputBox}></div>
  </div>

  <div>
    <p className={styles.LeftAlign}>📑 Description</p>
    <div className={styles.TextArea}></div>
  </div>

  <div>
    <p className={styles.LeftAlign}>🔗 Attach File</p>
    <div className={styles.FileBox}>No File Chosen</div>
    <p>Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
  </div>
</div>
    
        {/* //---------------------------------------------------------------------------------------------------------------------// */}
        
      <div className={styles.container}>
        <div className={styles.companyBox}>Company</div>
        <div className={styles.navbar}>
          <div className={styles.navItem}>Home</div>
          <div className={styles.navItem}>About Us</div>
          <div className={styles.navItem}>Services</div>
          <div className={styles.navItem}>Contact</div>
        </div>
      </div>

      <div className={styles.headerSection}>
        <h1>About Us</h1>
        <p>Get to know your company and connect with us through our contact form</p>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.story}>
          <h1>Our Story</h1>
          <p>
            We are a forward-thinking company dedicated to delivering exceptional solutions that drive
            success for our clients. With years of experience and a passion for innovation, we've built
            a reputation for excellence in our industry.
          </p>
          <p>
            Our team of experts combines creativity with technical expertise to provide comprehensive
            services that meet the evolving needs of businesses worldwide.
          </p>

          <div>
            <div className={styles.stats}>
              <h3 className={styles.statItem}>500+</h3>
              <h3 className={styles.statItem}>50+</h3>
              <h3 className={styles.statItem}>10+</h3>
            </div>
            <div className={styles.stats}>
              <h5 className={styles.statLabel}>Projects</h5>
              <h5 className={styles.statLabel}>Team Members</h5>
              <h5 className={styles.statLabel}>Years</h5>
            </div>
          </div>
        </div>

        <div className={styles.imageBox}>
          <img
            src="https://i.pinimg.com/736x/05/a5/01/05a501c22bce851c1f0f0d74d83a57fb.jpg"
            alt="Team working"
            width={450}
            height={400}
          />
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}

      <div style={{textAlign:"center"}}>
           <h1>Get In Touch</h1>
           <p> Fill out the form below and we will get back to you as soon as possible</p>
      </div>

<div>
  <h1>Send Us a Message</h1>
  <p>Please send us your requirements and we will get back to you at the earliest</p>

  <div className={styles.Name}>
    <div>
      <p>👤 First Name</p>
    </div>
    <div>
      <p>👤 Last Name</p>
    </div>
  </div>

  <div className={styles.ButtonRow}>
    <button></button>
    <button></button>
  </div>

  <div>
    <p className={styles.LeftAlign}>✉️ Email Address</p>
    <div className={styles.InputBox}></div>
  </div>

  <div className={styles.Name}>
    <div>
      <p>☎️ Phone Number</p>
    </div>
    <div>
      <p>🚋 Company Name</p>
    </div>
  </div>

  <div className={styles.ButtonRow}>
    <button></button>
    <button></button>
  </div>

  <div>
    <p className={styles.LeftAlign}>🌐 Country</p>
    <div className={styles.InputBox}></div>
  </div>

  <div>
    <p className={styles.LeftAlign}>📑 Description</p>
    <div className={styles.TextArea}></div>
  </div>

  <div>
    <p className={styles.LeftAlign}>🔗 Attach File</p>
    <div className={styles.FileBox}>No File Chosen</div>
  </div>
  <br/> <br/>
  <div
    style={{
    border: "1px solid blue",
    borderRadius: "5px",
    height: "50px",
    textAlign: "center",
    paddingTop: "10px",
    backgroundColor: "blue",
    color: "white",
    cursor: "pointer"
  }}
>
  ↗️ Submit Form
</div>

</div>

<div className={styles.footer}>
  <div>
    <h4>Company</h4>
    <p>Building the future through</p>
    <p>innovation and excellence.</p>
  </div>
  <div>
    <h4>Quick Links</h4>
    <p>Home</p>
    <p>About</p>
    <p>Services</p>
    <p>Contact</p>
  </div>
  <div>
    <h4>Contact Info</h4>
    <p>✉️info@company.com</p>
    <p>📞+1(555)123-4567</p>
    <p>Ϙ123 Business St,city</p>
  </div>
  <div>
    <h3>Follow us</h3>
    <img src={FirstImage}/>
  </div>

</div>
      </>
    )
}

export default MessageComponent