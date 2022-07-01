import {connect, styled} from "frontity";
import {SocialIcon} from "react-social-icons";

const SocialMedia = ({state}) => {
    return (<>

            <h1>DRUGIE ŻYCIE</h1>
        <h2>ZNAJDŹ NAS NA SOCIAL MEDIA</h2>
        <Container>
            <InnerContainer>
              <SocialIcon url="https://www.facebook.com/kampaniaspolecznadrugiezycie"/>
            </InnerContainer>
        </Container>
    </>

);
}


const Container = styled.div`

`;

const InnerContainer = styled.div`

`;

export default connect(SocialMedia)