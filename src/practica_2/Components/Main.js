export default function Main( { children , links } ) {

    let l1 = links["1"]
    let l2 = links["2"]

    return (
        <div>
            {children}
            <menu>
                <nav>
                    {l1}
                </nav>
                <ul>
                    {l2}
                </ul>
            </menu>

        </div>
    )
}