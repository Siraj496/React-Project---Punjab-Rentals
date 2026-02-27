import "./Header.css";
import { House, Mail, Phone } from "lucide-react";
const Header = () => {
  return (
    <header className="header">
      <div className="item brand">
        <House className="icon" />
        <span>Punjab Rentals</span>
      </div>
      <div className="item contact">
        <Phone className="icon" />
        <span>+9230012345678</span>
      </div>
      <div className="item contact">
        <Mail className="icon" />
        <span>punjabrentals@gamil.com</span>
      </div>
    </header>
  );
};

export default Header;
