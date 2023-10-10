import BlogPost from "./BlogPost";
import Body from "./Body";

export default function Main ({ pageBody, links }) {
    return (
        <main>
            <nav>
                <ul>
                    { links.map((link) => (
                        <li>
                            <a href={ link }>{ link }</a>
                        </li>
                    ))}
                    <br/>
                    <br/>
                </ul>
            </nav>
            <div className="main-body">
                <Body body={pageBody} />
            </div>
            <p>El patrimonio neto es igual a la suma de los activos más los resultados positivos</p>
            <BlogPost 
                title={'Aburrida cita de sábado'}
                body={'Como de costumbre, el canalla se impuso sobre la lepra'}
            />
        </main>
    )
}