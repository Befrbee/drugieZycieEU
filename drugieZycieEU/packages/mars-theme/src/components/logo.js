import {connect, styled} from "frontity";
import Link from "./link";


const Logo = ({state}) => {
    return (
        <Container>
            <Link link={"/"}>
                <img src="http://drugiezycie.eu/wp-content/uploads/2022/07/logo-svg.svg"/>
            </Link>

            <div>
                <h1>DRUGIE ŻYCIE</h1>
                <h2>FRESENIUS MEDICAL CARE</h2>
            </div>
        </Container>
    );
};


export default connect(Logo);


const Container = styled.div`
  display: flex;
  color: var(--primary-color);
  align-items: center;
  column-gap: 1rem;

  & h1 {
    margin: unset;
    font-size: 1.5rem;
  }

  & h2 {
    margin: unset;
    font-size: 1rem;
    font-weight: 200;
  }


  & img {
    height: 3.5rem;
    width: auto;
  }
  & img:hover {
    transform: scale(1.1);
  }

`;






