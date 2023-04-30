import { loginEndpoint } from "../spotify";
import "./login.css";

const Login = () => {
  return (
    <div className="login-page">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpQo0pnCPENZC7BgQE01BCotDcBaDmiyEJA&usqp=CAU"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
};

export default Login;
