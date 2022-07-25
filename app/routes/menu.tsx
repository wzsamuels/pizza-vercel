const menuItems = [
  {
    category: 'Appetizers',
    items: [
      {
        name: 'Cheesy Bread Sticks',
        price: '3.99',
        description: 'Slow toasted with sesame seeds and free-ranged butter.'
      },
      {
        name: 'Chicken Wings',
        price: '6.99',
        description: 'Heirloom chicken smothered with a powerful buffalo sauce made from ' +
        'secret desert spices.'
      }
    ]
  },
  {
    category: 'Salads',
    items: [
      {
        name: 'Caesar Salad',
        price: '5.49',
        description: 'Crisp Romaine lettuce, garlic croutons, and shredded Parmesan cheese.'
      },
      {
        name: 'Cactus Salad', price: '6.49', description: 'Cactus leaves, tomatoes, green onions, and cilantro.'
      },
    ]
  },
  {
    category: 'Pizzas',
    items: [
      {
        name: 'Cheese Pizza', price: '12.99', description: 'Hand kneaded dough, fresh crushed tomato sauce, and eight kinds of ' +
          'creamy cheese.'},
      {
        name: 'Pepperoni Pizza', price: '14.99', description: 'Our delicious pizza covered with caved-aged pepperoni.'},
      {
        name: 'Veggie Pizza', price :'13.99', description: 'Seasonal desert vegetables from our own garden heaped on ' +
          'plant-based cheese and whole wheat dough.'},
    ]
  }
]

export default function MenuRoute () {
  return (
    <div className="flex flex-col items-center justify-center text-3xl">
      { menuItems.map(category =>
        <div className="mb-8 w-full max-w-[500px]">
          <h2 className="text-4xl text-center font-bold">{category.category}</h2>
          { category.items.map(item =>
            <div className="ml-8 ">
              <h3 className="text-lg flex my-4 justify-between font-['Montserrat']">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </h3>
              <p className="text-base font-['Cabin']">
                {item.description}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}