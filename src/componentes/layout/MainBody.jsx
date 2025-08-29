import Title from "../common/Title";
import Subtitle from "../common/Subtitle";

function MainBody({ children }) {
  return (
      <div className="main-body">
        <Title>Bienvenido al E-Commerce</Title>
        <Subtitle>Tu tienda Favorita 👨🏻‍💻👩🏾‍💻</Subtitle>
        {children}
      </div>
  );
}

export default MainBody;