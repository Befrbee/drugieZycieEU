import {connect, css, styled} from "frontity";
import {SocialIcon} from "react-social-icons";

const SocialMedia = ({state}) => {
    return (<Container>
            <TextContainer>
                <h1>DRUGIE ŻYCIE</h1>

                <span>ZNAJDŹ NAS NA <b>SOCIAL MEDIA</b></span>
            </TextContainer>

            <InnerContainer>
                <SocialIcon url="https://www.facebook.com/kampaniaspolecznadrugiezycie"/>
                <SocialIcon url="https://www.youtube.com/channel/UCW0VdLrXoV1fNp8HgwPqp6w"/>
                <SocialIcon url="https://www.instagram.com/"/>
                <span id="divider"/>
                <CountContainer>
                        <h1>1'898</h1>
                        <h2> FOLLOWERS</h2>
                </CountContainer>
            </InnerContainer>

        </Container>


    );
}

const CountContainer = styled.div`
  & h1 {
    font-size: 3.5rem;
    margin: unset;
  }
    & h2{
      font-size: 1rem;
      font-weight: 600;
      margin: unset;
      margin-left: 8px
    }
  
`
const TextContainer = styled.div`
  color: var(--primary-color);

  & h1 {
    margin: unset;
    font-size: 7.5rem;
    font-weight: 600;
  }

  & span {
    margin-left: 5px;
    font-size: 1.3rem;
  }

`

const Container = styled.div`
  background-color: white;
  padding: 1rem 8% 2rem 2rem;
`


const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  margin-top: 1.5rem;

  & #divider {
    display: block;
    height: 90px;
    width: 5px;
    background-color: var(--primary-color);
    opacity: 0.8;
  }

` ;





export default connect(SocialMedia)