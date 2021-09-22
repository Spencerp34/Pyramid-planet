import turkeyHat from '../shopImages/TurkeyHat.PNG'
import spicyNug from '../shopImages/spicyNug.png'
import beeoludis from '../shopImages/Beeoludis.PNG'
import purplePorcupine from '../shopImages/purplePorcupine.jpg'
import inspiring from '../shopImages/inspiring.jpg'
import monopoly from '../shopImages/monopoly.png'
import leggingsGrey from '../shopImages/leggingsGrey.jpg'
import leggingsPink from '../shopImages/leggingsPink.jpg'
import sweatpants from '../shopImages/sweatpants.jpg'
import tiffany from '../shopImages/tiffany.PNG'

const products = [
    {
        name: "Spicy nug that Mac took a bite out of.",
        images: [spicyNug],
        price: 999.99,
        inStock: false
    },
    {
        name: "Corby's Turkey Hat",
        images: [turkeyHat],
        price: 24.99,
        inStock: false
    },
    {
        name: "A visit from Beeoludis",
        images: [beeoludis],
        price: 666.00,
        inStock: false
    },
    {
        name: "Purple Porcupine Vinyl Sticker",
        images: [purplePorcupine],
        price: 5.99,
        inStock: false
    },
    {
        name: "Crappy aspirations",
        images: [inspiring],
        price: 0.02,
        inStock: false
    },
    {
        name: "A good ol' slurpin",
        images: [tiffany],
        price: 7.25,
        inStock: true
    },
    {
        name: "#findyourtruerile shirt",
        images: [monopoly],
        price: 15.99,
        inStock: false
    },
    {
        name: "Life has no meaning (unisex)",
        images: [leggingsPink, leggingsGrey],
        price: 32.99,
        inStock: false
    },
    {
        name: "Redeeming Butt",
        images: [sweatpants],
        price: 0,
        inStock: true
    },
]

export default products