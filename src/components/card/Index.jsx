import "./style.scss"

export default function Card() {


    return (
        <section className="card">
            <section className="card__info">
                <section className="card_image">{ }</section>
                <section className="card_body">
                    <h1 className="card_name">{ }</h1>
                    <h2 className="card_price">{ }</h2>
                </section>

            </section>
        </section>
    );
};

