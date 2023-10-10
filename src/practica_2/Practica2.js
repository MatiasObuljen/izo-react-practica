import Header from "./Components/Header";
import Main from "./Components/Main";
import Page from "./Components/Page";

export default function Practica2 () { // APP
    const site = {
        pageTitle: 'Unidad 1.2 - Práctica',
        pageBody: 'Implementación de árbol de componentes y propiedades en React.'
    };
    return (
        <div>
            <Page>
                <Header pageTitle={site.pageTitle} />
                <Main 
                    pageBody={site.pageBody} 
                    links={[
                        'https://ideasweb.com.ar/',
                        'https://www.youtube.com/watch?v=AaDqiBHNtvA&themeRefresh=1'
                    ]}
                />

            </Page>
        </div>
    );
}