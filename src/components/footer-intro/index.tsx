import { Container } from "@components";
import { Button, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import './style.scss'

function Intro() {
  return (
    <section className="footer-intro">
      <Container>
        <div className="footer-intro-wrapper">
          <h2>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
          <div>
            <Input 
              className="footer-intro-input" 
              placeholder="Your email address" 
              prefix={<MailOutlined />}
            />
            <Button className="footer-intro-button">Subscribe</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Intro;
