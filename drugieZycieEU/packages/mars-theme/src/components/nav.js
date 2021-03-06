import {connect, styled} from "frontity";
import Link from "./link";


/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({state}) => (
    <NavContainer>
        {state.theme.menu.map(([name, link]) => {
            // Check if the link matched the current page url
            const data = state.source.get(state.router.link);
            const isCurrentPage = data.route === link;

            return (
                <NavItem key={name}>
                    {/* If link url is the current page, add `aria-current` for a11y */}
                    <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
                        {name}
                    </Link>
                </NavItem>
            );
        })}
    </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;


  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  color: var(--primary-color);
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  font-weight: 700;
  display: inline-block;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary-color);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;

  }

  & > a:before {
    content: "["
  }

  & > a:after {
    content: "]"
  }

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */

    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
