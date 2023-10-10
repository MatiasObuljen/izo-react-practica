import Title from "./Title";

export default function Header ({ pageTitle }) {
    return (
        <div className="page-header"><Title title={pageTitle} /></div>
    )
    
}