import styles from "../components/SecondMessage.module.css"
import IMG1 from "../assets/Images/img1.png"
import IMG2 from "../assets/Images/img2.png"
import Location from "../assets/Images/loaction.png"
import Phone from "../assets/Images/phone.png"
import Email from "../assets/Images/email.png"
function SecondMessage(){
    return(
        <>
        
          <div>
          <h1>Send Us a Message</h1>
          <p>Please send us your requirements and we will get back to you at the earliest</p>
        
          <div className={styles.Name}>
            <div>
              <p> First Name</p>
            </div>
            <div>
              <p> Last Name</p>
            </div>
          </div>
        
          <div className={styles.ButtonRow}>
            <button></button>
            <button></button>
          </div>

          <div className={styles.Name}>
            <div>
              <p> Email Address</p>
            </div>
            <div>
              <p> Phone Number</p>
            </div>
          </div>
        
          <div className={styles.ButtonRow}>
            <button></button>
            <button></button>
          </div>
        
          <div className={styles.Name}>
            <div>
              <p> Company Name</p>
            </div>
            <div>
              <p> Country</p>
            </div>
          </div>
        
          <div className={styles.ButtonRow}>
            <button></button>
            <button></button>
          </div>
        
          <div>
            <p className={styles.LeftAlign}> Description</p>
            <div className={styles.TextArea}></div>
          </div>
        
          <div>
            <p className={styles.LeftAlign}>🔗 Attach File</p>
            <div className={styles.FileBox}>
                <img src={IMG2} width={100}/>
                <br/>
               <p>Click to upload files</p>  
              <p>Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
            </div>    
          </div>
        </div>

{/* -------------------------------------------------------------------------------------------------------- */}

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

      
      <div>
        <h1>Contact Information</h1>
        <p>Fill out the form and we will get back soon</p>
      
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
      
        <div className={styles.Name}>
          <div>
            <p>✉️ Email Address</p>
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
          <p className={styles.LeftAlign}>🌐 Select Country</p>
          <div className={styles.InputBox}></div>
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
        ↗️ 
      </div>
      
      </div>
          <br/> <br/>
      <div className={styles.Location}>
        <div>
          <img src={Location} width={25}/>
          <h2>Address</h2>
          <p>123 Business street</p>
          <p>City,state  12345</p>
        </div>
        <div>
          <img src={Phone} width={25} />
          <h2>Phone</h2>
          <p>+1 (555) 123-4567</p>
        </div>
        <div>
           <img src={Email} width={25} />
          <h2>Email</h2>
          <p>contact@company.com</p>
        </div>
      </div>

      <div>
             <h2>Company</h2>
             <p>Building the future, one stop at a time</p>
             <img src={IMG1} width={60}/>
             <br/> <br/>
             <p>@2024 company. All right reserved</p>
      </div>  
        </>
    )
}

export default SecondMessage