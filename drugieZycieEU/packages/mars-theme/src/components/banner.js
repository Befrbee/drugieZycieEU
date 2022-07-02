import {connect, css, styled} from "frontity";

const Banner = ({state,children }) => {
    return (
        <BannerContainer>
            <img src="http://drugiezycie.eu/wp-content/uploads/2022/07/hands.png"/>
            {children }
        </BannerContainer>
    );

}

const BannerContainer = styled.div`
  & img {
    height: auto;
    width: 25%;
    margin-left: 5rem;
  }
`
export default connect(Banner)