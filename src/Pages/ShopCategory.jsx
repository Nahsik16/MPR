import React, { useContext } from "react"
import "./Css/ShopCategory.css"
import { ShopContext } from "../Context/ShopContext"
import dropdown_icon from "../Components/assets/dropdown_icon.png"
import Item from "../Components/Items/Item"

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext)
    return (
        <div className="shop-category">
            <img className="shop-category-banner" src={props.banner} alt="" />
            <div className="shop-category-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shop-category-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shop-category-product">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        )
                    } else {
                        return null
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">Load More</div>
        </div>
    )
}

export default ShopCategory
