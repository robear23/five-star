import { Cake, Heart, PartyPopper, HeartHandshake, LucideIcon } from "lucide-react";

export interface MenuDef {
  id: string;
  name: string;
  price: string;
  note?: string;
  items: string[];
}

export interface MenuCategory {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  menus: MenuDef[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "weddings",
    slug: "weddings",
    title: "Wedding Menus",
    shortTitle: "Weddings",
    description:
      "Elegant, bespoke wedding catering that reflects your unique day, from relaxed buffets to show-stopping platters.",
    icon: Heart,
    menus: [
      {
        id: "wedding-menu-1",
        name: "Wedding Menu 1",
        price: "£8.95 per head",
        items: [
          "Selection of sandwiches, brown & white, with a variety of fillings",
          "Tuna mayo & chicken tikka wraps",
          "Cheese & pineapple / grapes",
          "Cumberland sausage rolls / cheese pastries",
          "Mini quiche",
          "Cocktail sausage & bacon",
          "Crudités with homemade houmous dip",
          "Melton Mowbray pork pies served with pickle & mustard",
          "Samosas served with chutney & mint sauce",
          "Goujons served with sour cream & chive dip",
          "Crisps & bites with salsa dip",
          "Tiers of mini cakes, mini trifles",
        ],
      },
      {
        id: "wedding-menu-2",
        name: "Wedding Menu 2",
        price: "£9.75 per head",
        items: [
          "Selection of bridge rolls, brown & white bread, with a wide variety of fillings",
          "Mini wrap selection",
          "Mixed vol au vents",
          "Cheese, grapes / pineapple",
          "Cocktail sausage rolls / cheese pastries",
          "Crisps & savoury bites served with salsa dip",
          "Vegetable spring rolls served with sweet chilli dip",
          "Chicken satay sticks",
          "Onion bhajis served with mango chutney",
          "Crudités served with houmous",
          "Mini cake selection, mini trifles",
        ],
      },
      {
        id: "wedding-menu-3",
        name: "Wedding Menu 3",
        price: "£14.95 per head",
        items: [
          "Mini prawn cocktail pots / mini melon medley pots",
          "Selection of bridge rolls, brown & white, with a wide variety of fillings",
          "Sticky satay sticks served with sour cream & chive dip",
          "Cheese, grapes / pineapple",
          "Mini Melton Mowbray pork pies served with pickle",
          "Chicken tikka wraps / tuna savoury wraps",
          "Vegetable spring rolls served with sweet chilli dip",
          "Mozzarella sticks",
          "Chicken & meat samosa served with chutney",
          "Cocktail sausages",
          "Crudités with houmous dip",
          "Homemade coleslaw & pasta salad dish",
          "Tiers of mini cakes inc. trifles",
          "Gateaux, cheesecake",
        ],
      },
      {
        id: "wedding-menu-4",
        name: "Wedding Menu 4",
        price: "£18.00 per head",
        items: [
          "Mini filled sub rolls: red salmon & cucumber, mature cheddar & red onion, roast turkey & stuffing, roast beef, egg mayonnaise & cress",
          "Cream cheese & smoked salmon vol au vents, pâté vol au vents",
          "Seasoned chicken drumsticks",
          "Crudités served with guacamole",
          "Meat samosa served with chutney",
          "Hand-cooked crisp selection",
          "Homemade crunchy coleslaw",
          "New potato salad",
          "Seafood platter",
          "Charcuterie meat platter",
          "Breads with dipping oils",
          "Cheese board with grapes & celery",
          "Fresh fruit kebabs, deep-filled chocolate fudge cake, New York cheesecake",
        ],
      },
    ],
  },
  {
    id: "parties",
    slug: "parties",
    title: "Party Menus",
    shortTitle: "Parties",
    description:
      "Birthdays, anniversaries and celebrations of every kind — vibrant spreads that let you enjoy the party.",
    icon: PartyPopper,
    menus: [
      {
        id: "party-menu-h",
        name: "Party Menu H",
        price: "£7.95 per head",
        items: [
          "Selection of sandwiches on brown, white & seeded bread with a wide variety of fillings",
          "Chicken goujons served with sour cream & chive dip",
          "Cheese, grapes / pineapple",
          "Cumberland sausage rolls",
          "Wedges of pork pie",
          "Mini spring rolls served with sweet chilli dip",
          "Savoury eggs",
          "Vegetable samosa",
          "Crisps & bites served with homemade salsa dip",
          "Cocktail sausages",
          "Mini cakes",
        ],
      },
      {
        id: "party-menu-j",
        name: "Party Menu J",
        price: "£8.95 per head",
        items: [
          "Selection of sandwiches, brown & white, with a wide variety of fillings",
          "Sticky chicken sticks",
          "Cheese, grapes / pineapple",
          "Cumberland sausage rolls & cocktail cheese pastries",
          "Mini Melton Mowbray pork pies",
          "Mini pizza selection",
          "Sections of homemade scotch eggs",
          "Crisps & bites served with homemade salsa dip",
          "Cocktail sausage & bacon",
          "Mini vol au vents",
          "Vegetable samosa served with chutney",
          "Tiers of mini cakes",
        ],
      },
      {
        id: "party-menu-k",
        name: "Party Menu K",
        price: "£14.95 per head",
        items: [
          "Mini prawn cocktail pots / mini melon medley pots",
          "Selection of bridge rolls, brown & white, with a wide variety of fillings",
          "Sticky satay sticks served with sour cream & chive dip",
          "Cheese, grapes / pineapple",
          "Mini Melton Mowbray pork pies served with pickle & mustard",
          "Chicken tikka wraps / tuna savoury wraps",
          "Vegetable spring rolls served with sweet chilli dip",
          "Vegetable samosa served with chutney",
          "Crisps & bites served with homemade salsa dip",
          "Cocktail sausage & bacon",
          "Crudités with houmous dip",
          "Homemade coleslaw",
          "Pakora with chutney",
          "Mini cakes, trifles",
        ],
      },
      {
        id: "party-menu-l",
        name: "Party Menu L",
        price: "£15.95 per head",
        items: [
          "Mini filled sub rolls: red salmon & cucumber, mature cheddar & red onion, roast turkey & stuffing, roast beef, egg mayonnaise & cress",
          "Cream cheese & smoked salmon vol au vents",
          "Slices of homemade Spanish quiche",
          "Jerk chicken drumsticks",
          "Crudités served with guacamole dip",
          "Lamb samosa",
          "Hand-cooked crisp selection",
          "Homemade crunchy coleslaw",
          "New potato salad",
          "Seafood platter",
          "Cheese & grapes",
          "Fresh fruit kebabs",
          "Mini trifles",
          "Cheese board",
        ],
      },
    ],
  },
  {
    id: "christenings",
    slug: "christenings",
    title: "Christening Menus",
    shortTitle: "Christenings",
    description:
      "Warm, welcoming spreads for one of life's most treasured celebrations, suited to family and guests of all ages.",
    icon: Cake,
    menus: [
      {
        id: "christening-menu-a",
        name: "Christening Menu A",
        price: "Price on request",
        items: [
          "Selection of sandwiches on brown, white & seeded bread",
          "Crisps & bites with salsa dip",
          "Sticky chicken sticks",
          "Cheese & grapes, cheese & pineapple",
          "Mini vegetable samosa",
          "Crudités served with dips",
          "Cumberland sausage rolls",
          "Sections of scotch eggs",
          "Mixed vol au vents",
          "Mini spring rolls with sweet chilli dip",
          "Tiers of mini cakes",
        ],
      },
      {
        id: "christening-menu-b",
        name: "Christening Menu B",
        price: "£9.95 per head",
        items: [
          "Mini sub rolls, brown & white, with a wide variety of fillings",
          "Crudités with houmous dip",
          "Vegetable samosa",
          "Cocktail sausage & bacon",
          "Chicken goujons served with sour cream & chive dip",
          "Cheese & onion pastries / sausage rolls",
          "Mini Melton Mowbray pork pies served with pickle & mustard",
          "Mini quiche",
          "Cheese, grapes / pineapple",
          "Trifles, tiers of cakes",
        ],
      },
      {
        id: "christening-menu-c",
        name: "Christening Menu C",
        price: "£12.95 per head",
        items: [
          "Selection of sandwiches on brown & white bread with a wide variety of fillings",
          "Tandoori-flavoured chicken drumsticks",
          "Cheese, grapes / pineapple",
          "Wedges of pork pie",
          "Cocktail pastries",
          "Vegetable spring rolls served with sweet chilli dip",
          "Hand-cooked crisps",
          "Mini quiche selection",
          "Coleslaw & potato salad",
          "Mini pizza",
          "Chicken samosa",
          "Smoked salmon & cream cheese vol au vents",
          "Chocolate fudge cake, trifle & cheesecake",
        ],
      },
    ],
  },
  {
    id: "wakes",
    slug: "wakes",
    title: "Wake Menus",
    shortTitle: "Wakes",
    description:
      "Respectful, reliable catering to help you honour a loved one, delivered with quiet professionalism.",
    icon: HeartHandshake,
    menus: [
      {
        id: "wake-menu-1",
        name: "Wake Menu 1",
        price: "£7.75 per head",
        items: [
          "Chicken goujons served with sour cream & chive dip",
          "Crudités served with houmous dip",
          "Selection of sandwiches with a wide variety of fillings, served on white, wholemeal & seeded bread",
          "Crisps, nachos & pringles served with a homemade salsa dip",
          "Mini vegetable spring rolls served with sweet chilli dip",
          "Mini quiche",
          "Cocktail sausage rolls",
          "Wedges of pork pie served with pickle",
          "Mini savoury eggs",
          "Cocktail sausage & bacon",
          "Mini cakes & traditional fruit cake",
        ],
      },
      {
        id: "wake-menu-2",
        name: "Wake Menu 2",
        price: "£8.75 per head",
        items: [
          "Seasoned roast chicken drumsticks",
          "Crudités served with houmous dip",
          "Selection of sandwiches with a wide variety of fillings, white & wholemeal bread",
          "Bowls of hand-cooked crisps",
          "Mini vegetable spring rolls served with sweet chilli dip",
          "Mini quiche selection",
          "Cocktail sausage rolls",
          "Mini Melton Mowbray pork pies served with pickle",
          "Cocktail sausage & bacon",
          "Homemade scotch eggs",
          "Tiers of mini cakes, traditional fruit cake",
        ],
      },
      {
        id: "wake-menu-3",
        name: "Wake Menu 3",
        price: "£4.95 per head",
        note: "Minimum numbers apply. Can be added to a cold buffet.",
        items: [
          "Hot roast pulled pork served in gravy",
          "With soft white baps",
          "Stuffing, apple sauce & mustard",
        ],
      },
    ],
  },
];

export const allMenus: (MenuDef & { categorySlug: string; categoryTitle: string })[] =
  menuCategories.flatMap((category) =>
    category.menus.map((menu) => ({
      ...menu,
      categorySlug: category.slug,
      categoryTitle: category.title,
    }))
  );
