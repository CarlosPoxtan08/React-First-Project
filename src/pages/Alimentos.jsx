import styles from './Alimentos.module.css';
import FoodCategory from '../components/food/FoodCategory';
import FoodCard from '../components/food/FoodCard';

// ── Data ──────────────────────────────────────────────────
const bebidas = [
    {
        name: 'Coca-Cola Grande',
        description: 'Refresco de cola frío en vaso grande con hielo.',
        price: '$65',
        emoji: '🥤',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80',
    },
    {
        name: 'Limonada Natural',
        description: 'Limonada fresca preparada con limones naturales.',
        price: '$55',
        emoji: '🍋',
        image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=400&q=80',
    },
    {
        name: 'Agua Mineral',
        description: 'Agua mineral sin gas, fría y refrescante.',
        price: '$35',
        emoji: '💧',
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80',
    },
];

const comestibles = [
    {
        name: 'Hot Dog Clásico',
        description: 'Salchicha de puerco en pan suave con mostaza y catsup.',
        price: '$85',
        emoji: '🌭',
        image: 'https://images.unsplash.com/photo-1612392062798-6b9b5d54b54e?w=400&q=80',
    },
    {
        name: 'Nachos con Queso',
        description: 'Totopos crujientes bañados en queso fundido caliente.',
        price: '$95',
        emoji: '🧀',
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80',
    },
    {
        name: 'Pizza Personal',
        description: 'Pizza de queso con pepperoni, calentita y dorada.',
        price: '$120',
        emoji: '🍕',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
    },
];

const snacks = [
    {
        name: 'Palomitas Grandes',
        description: 'Palomitas esponjosas de maíz con mantequilla.',
        price: '$75',
        emoji: '🍿',
        image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=400&q=80',
    },
    {
        name: 'Gummy Bears',
        description: 'Ositos de gomila sabores surtidos, bolsa mediana.',
        price: '$45',
        emoji: '🐻',
        image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&q=80',
    },
    {
        name: 'Chocolate Crunch',
        description: 'Barra de chocolate con cereal crujiente.',
        price: '$40',
        emoji: '🍫',
        image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&q=80',
    },
];

function Alimentos() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <div className={styles.hero}>
                <span className={styles.heroEmoji}>🍿</span>
                <h1 className={styles.heroTitle}>Alimentos</h1>
                <p className={styles.heroSubtitle}>
                    Disfruta tus películas con los mejores snacks y bebidas del cine
                </p>
            </div>

            {/* Categories */}
            <div className={styles.content}>
                <FoodCategory
                    title="Bebidas"
                    icon="🥤"
                    items={bebidas.map((item) => (
                        <FoodCard key={item.name} {...item} />
                    ))}
                />

                <div className={styles.separator} />

                <FoodCategory
                    title="Comestibles"
                    icon="🍔"
                    items={comestibles.map((item) => (
                        <FoodCard key={item.name} {...item} />
                    ))}
                />

                <div className={styles.separator} />

                <FoodCategory
                    title="Snacks & Dulces"
                    icon="🍬"
                    items={snacks.map((item) => (
                        <FoodCard key={item.name} {...item} />
                    ))}
                />
            </div>
        </div>
    );
}

export default Alimentos;
