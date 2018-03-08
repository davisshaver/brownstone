export const Header = ({ logo, text }) => 
<div>
  <img src={logo} />
  <h1>{text}</h1>
  <style jsx>{`
    div {
      background: #595959;
      padding: 10px 20px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      flex: 0 1 auto;
      max-height: 200px;
    }
    h1 {
      flex: 1 1 auto;
      text-align: center;
      color: #fff;
    }
  `}</style>
</div>

export default Header;