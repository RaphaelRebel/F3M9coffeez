import "./Card.css";

const Card = (props) => {

   let cardImage = <img src={"/img/" + props.cardImg} alt="Een kop koffie dat ingeschonken word" />;

    if(props.cardImg === undefined){
        cardImage = <img src="/img/pexels-chevanon-photography-324028.jpg" alt="" />;
    }

    return(
        <>
        <article class="card">
            <figure class="card__figure">
                {cardImage}
            </figure>
            <section class="card__section">
                <p>{props.cardText || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum libero eum aliquid animi commodi iste sapiente autem omni."}</p>
            </section>
        </article>
        </>
    );
}

export default Card

