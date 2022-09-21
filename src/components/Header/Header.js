import "./header.css";

const Header = (props) => {
    return(
        <header class="header">
            <h1 class="header__h1">{props.bigTitle || "Default big title"}</h1>
            <h2 class="header__h2">{props.smallTitle || "Defalt small title"}</h2>
            <button class="header__btn">{props.buttonText}</button>
        </header>
    );
}

export default Header