import Site from "./Site.json"
import Title from "./Components/Title";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Main from "./Components/Main";

export default function Practica2 () {

const links =
    {
        1:'Google.com',
        2:'Facebook.com'
    }

    return (
        <div>
            <Header>
                <Title pageTitle = {Site.pageTitle}/>
            </Header>
            <Main links = {links}>
                <Body pageBody = {Site.pageBody}/>
            </Main>

        </div>

    );
}
