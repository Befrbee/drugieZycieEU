import {connect, css, styled} from "frontity";

const Banner = ({state,children }) => {
    return (
        <BannerContainer>
            <img src="http://drugiezycie.eu/wp-content/uploads/2022/07/hands.png"/>
            {children}
            <CircleContainer/>
        </BannerContainer>
    );

}

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
  & img {
    height: auto;
    width: 25%;
    margin-left: 5rem;
    
  }
`
const CircleContainer = styled.div`
  background-color:white;
  position: absolute;
  left: -4rem;
  top: 40rem;
  width: 60rem;
  height: 10rem;
  border-radius: 40%;
  `
export default connect(Banner)