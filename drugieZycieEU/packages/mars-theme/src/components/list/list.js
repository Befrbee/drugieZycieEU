import {connect, styled, decode} from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({state}) => {
    // // Get the data of the current list.
    // const data = state.source.get("/category/aktualnosci/");

    return (
        <Container>
            <h1>AKTUALNOŚCI</h1>
            {/*{data.items && data.items.map(({ type, id }) => {*/}
            {/*    const item = state.source[type][id];*/}
            {/*    // // Render one Item component for each one.*/}
            {/*    // return <Item key={item.id} item={item} />;*/}
            {/*})}*/}
        </Container>
    );
};

export default connect(List);



const Container = styled.section`
  
  background-color: white;
  width: 100%;
  

`;


