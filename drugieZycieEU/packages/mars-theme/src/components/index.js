import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import SocialMedia from "./socialMedia";
import Banner from "./banner";
import { useEffect, useState } from 'react';
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */


const Theme = ({ state }) => {
    const [data,setData] = useState();

    useEffect(()=>{
        //Load data for the mainpage
        if(state.router.link ==="/"){
            const newsData = state.source.get("/category/aktualnosci/");
            setData(newsData);
            return;
        }

        //else load data appropriate to the link
        const data = state.source.get(state.router.link);
        setData(data);
    },[])




  return (
    <>

      {/* Add some metatags to the <head> of the HTML. */}
      <Title/>
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header/>
      </HeadContainer>


      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
          <Switch>
              {/*mainpage*/}
              <div when={state.router.link === "/"}>
                  <Banner >
                      <SocialMedia/>
                  </Banner>

                  {/*News List*/}
                  <List />

                  {/*News*/}
              </div>

              {/*<Loading when={data.isFetching} />*/}
              {/*<PageError when={data.isError}/>*/}
          </Switch>

      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-face: Arial, serif;
   
  }

  :root {
    --primary-color: #004d91;
    --secondary-color: #d5083a;
    --background-color: #f0e1f8;
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--background-color);
  );
`;
