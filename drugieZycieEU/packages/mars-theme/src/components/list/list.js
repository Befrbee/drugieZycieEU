import {connect, styled, decode} from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({state}) => {
    // Get the data of the current list.
    const data = state.source.get(state.router.link);

    return (
        <Container>
            <h1>AKTUALNOŚCI</h1>
            <InnerContainer1/>
            <InnerContainer2/>
            <InnerContainer3/>
        </Container>
    );
};

export default connect(List);



const Container = styled.section`
  width: 800px;
  height: 800px;
  position: absolute;

`;


