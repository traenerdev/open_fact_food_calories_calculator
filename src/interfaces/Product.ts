

export default interface Product{
    _id: string,
    product_name: string,
    brands: string,
    ingredients_text_fr: string,
    abbreviated_product_name_fr: string,
    generic_name_fr: string,
    image_front_url: string,
    nutriments:{
        proteins_100g: number | null,
        carbohydrates_100g: number | null,
        fat_100g: number | null
    },
    quantity: string,


}