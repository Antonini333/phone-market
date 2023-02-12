import "../../styles/components/card.scss"

export const Card = ({item}) => {

    return (
        <div>
            <div className="c-card">
                <div className="c-card__image">
                    <img src={item?.imgUrl} alt="product"/>
                </div>
                <div className="c-card__model">
                    {item.brand} {item?.model}
                </div>
                <div className="c-card__price">
                    {item?.price}
                </div>

            </div>
        </div>
    )
}

export default Card