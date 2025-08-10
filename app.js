
const categories = [
      "General Knowledge", "Brain Teasers", "Science", "Math", "Technology",
      "Entertainment", "Geography", "Literature", "Flags", "Did You Know?",
      "History", "Sports", "Movies", "Logic & Reasoning", "Current Affairs",
      "Space", "Inventions", "Art & Culture", "Food & Health", "Mythology"
    ];
    
    

   const allQuestions = {
  "General Knowledge": [
    { q: "What is the capital of France?", options: ["Paris", "Rome", "Berlin", "Madrid"], answer: 0 },
    { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: 1 },
     {
    q: "What is the capital of France?",
    options: ["London", "Paris", "Rome", "Berlin"],
    answer: 1
  },
  {
    q: "Which planet is known as the Red Planet?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: 2
  },
  {
    q: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    q: "Who wrote the Indian National Anthem?",
    options: ["Rabindranath Tagore", "Mahatma Gandhi", "Sarojini Naidu", "Subhas Chandra Bose"],
    answer: 0
  },
  {
    q: "Which is the largest ocean on Earth?",
    options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: 2
  },
  {
    q: "Who invented the telephone?",
    options: ["Edison", "Newton", "Graham Bell", "Einstein"],
    answer: 2
  },
  {
    q: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Won", "Ringgit"],
    answer: 1
  },
  {
    q: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
    answer: 2
  },
  {
    q: "Who was the first man to walk on the moon?",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Kalpana Chawla"],
    answer: 2
  },
  {
    q: "How many states are there in India?",
    options: ["28", "29", "30", "27"],
    answer: 0
  },
  {
    q: "Which instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Altimeter", "Hygrometer"],
    answer: 1
  },
  {
    q: "Which country gifted the Statue of Liberty to the USA?",
    options: ["Germany", "France", "UK", "Spain"],
    answer: 1
  },
  {
    q: "Who discovered gravity?",
    options: ["Einstein", "Galileo", "Newton", "Tesla"],
    answer: 2
  },
  {
    q: "Which is the smallest continent?",
    options: ["Europe", "Australia", "South America", "Antarctica"],
    answer: 1
  },
  {
    q: "What is the boiling point of water in Celsius?",
    options: ["100°C", "90°C", "80°C", "120°C"],
    answer: 0
  },
  {
    q: "Who is known as the Father of the Nation in India?",
    options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
    answer: 2
  },
  {
    q: "Which animal is known as the 'Ship of the Desert'?",
    options: ["Donkey", "Camel", "Horse", "Elephant"],
    answer: 1
  },
  {
    q: "What is the longest river in the world?",
    options: ["Amazon", "Ganges", "Yangtze", "Nile"],
    answer: 3
  }
  ],
  "Science": [
    { q: "What gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: 1 },
    { q: "What is H2O?", options: ["Salt", "Water", "Oxygen", "Hydrogen"], answer: 1 },
     {
    q: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    answer: 1
  },
  {
    q: "Which part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answer: 2
  },
  {
    q: "What is the center of an atom called?",
    options: ["Electron", "Proton", "Nucleus", "Neutron"],
    answer: 2
  },
  {
    q: "Which gas is essential for human respiration?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: 1
  },
  {
    q: "What force keeps us on the ground?",
    options: ["Magnetism", "Electricity", "Friction", "Gravity"],
    answer: 3
  },
  {
    q: "Which organ pumps blood throughout the body?",
    options: ["Lungs", "Brain", "Heart", "Liver"],
    answer: 2
  },
  {
    q: "What is the boiling point of water at sea level?",
    options: ["90°C", "80°C", "100°C", "110°C"],
    answer: 2
  },
  {
    q: "Which vitamin is produced when the skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin D", "Vitamin C"],
    answer: 2
  },
  {
    q: "How many legs does an insect have?",
    options: ["4", "6", "8", "10"],
    answer: 1
  },
  {
    q: "What is the most abundant gas in Earth’s atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 2
  },
  {
    q: "Which planet is known for having rings?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 1
  },
  {
    q: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: 2
  },
  {
    q: "What part of the cell contains DNA?",
    options: ["Cytoplasm", "Nucleus", "Membrane", "Ribosome"],
    answer: 1
  },
  {
    q: "Which gas do plants release during photosynthesis?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    answer: 1
  },
  {
    q: "What is HCl commonly known as?",
    options: ["Salt", "Baking Soda", "Hydrochloric Acid", "Alcohol"],
    answer: 2
  },
  {
    q: "What part of the human body controls movement and thoughts?",
    options: ["Heart", "Brain", "Lungs", "Spinal Cord"],
    answer: 1
  },
  {
    q: "Which blood cells help fight infection?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    answer: 1
  },
  {
    q: "What is the main function of the lungs?",
    options: ["Pump blood", "Filter waste", "Help in digestion", "Exchange gases"],
    answer: 3
  }
  ],
  "Brain Teasers": [
    {
      q: "I speak without a mouth and hear without ears. I have nobody, but I come alive with the wind. What am I?",
      options: ["Echo", "Whistle", "Shadow", "Cloud"],
      answer: 0
    },
    {
      q: "What comes once in a minute, twice in a moment, but never in a thousand years?",
      options: ["Letter M", "A second", "Time", "A blink"],
      answer: 0
    },
     {
    q: "What has to be broken before you can use it?",
    options: ["Mirror", "Egg", "Seal", "Lock"],
    answer: 1
  },
  {
    q: "I speak without a mouth and hear without ears. What am I?",
    options: ["Radio", "Book", "Echo", "Wind"],
    answer: 2
  },
  {
    q: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    options: ["The letter M", "Time", "Sun", "Luck"],
    answer: 0
  },
  {
    q: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    options: ["Tree", "Shadow", "Candle", "Mountain"],
    answer: 2
  },
  {
    q: "Which word is spelled incorrectly in every dictionary?",
    options: ["Incorrectly", "Misspelled", "Wrong", "None"],
    answer: 0
  },
  {
    q: "What gets wetter the more it dries?",
    options: ["Sun", "Towel", "Dryer", "Water"],
    answer: 1
  },
  {
    q: "The more you take, the more you leave behind. What are they?",
    options: ["Memories", "Steps", "Photos", "Secrets"],
    answer: 1
  },
  {
    q: "What can travel around the world while staying in the same corner?",
    options: ["Map", "Stamp", "Compass", "Light"],
    answer: 1
  },
  {
    q: "What has hands but can’t clap?",
    options: ["Clock", "Robot", "Statue", "Doll"],
    answer: 0
  },
  {
    q: "What is full of holes but still holds water?",
    options: ["Net", "Sponge", "Cup", "Bucket"],
    answer: 1
  },
  {
    q: "What is always in front of you but can’t be seen?",
    options: ["Wind", "Air", "Future", "Hope"],
    answer: 2
  },
  {
    q: "If two’s company, and three’s a crowd, what are four and five?",
    options: ["Group", "Numbers", "Nine", "Math"],
    answer: 2
  },
  {
    q: "What five-letter word becomes shorter when you add two letters to it?",
    options: ["Short", "Small", "Tiny", "Minis"],
    answer: 0
  },
  {
    q: "What begins with T, ends with T, and has T in it?",
    options: ["Teapot", "Tent", "Treat", "Tat"],
    answer: 0
  },
  {
    q: "Which month has 28 days?",
    options: ["February", "All of them", "March", "January"],
    answer: 1
  },
  {
    q: "If you’re running in a race and you pass the person in second place, what place are you in?",
    options: ["First", "Second", "Third", "Fourth"],
    answer: 1
  },
  {
    q: "What can you hold in your left hand but not in your right?",
    options: ["Ball", "Your left elbow", "Pen", "Air"],
    answer: 1
  },
  {
    q: "Mary’s father has five daughters – Nana, Nene, Nini, Nono. What is the fifth daughter’s name?",
    options: ["Nunu", "Nana", "Mary", "None"],
    answer: 2
  }
  ],
  "Math": [
  {
    q: "What is the value of π (pi) approximately?",
    options: ["3.14", "2.17", "1.62", "4.13"],
    answer: 0
  },
  {
    q: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    answer: 2
  },
  {
    q: "Solve: 8 × (5 - 2) = ?",
    options: ["16", "24", "32", "40"],
    answer: 1
  },
  {
    q: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    answer: 1
  },
  {
    q: "What is the next prime number after 7?",
    options: ["9", "10", "11", "13"],
    answer: 2
  },
   {
    q: "What is the value of π (pi) approximately?",
    options: ["3.14", "2.17", "1.62", "3.33"],
    answer: 0
  },
  {
    q: "What is 12 × 8?",
    options: ["96", "86", "108", "88"],
    answer: 0
  },
  {
    q: "What is the square root of 144?",
    options: ["10", "12", "14", "16"],
    answer: 1
  },
  {
    q: "What is the next prime number after 7?",
    options: ["9", "10", "11", "13"],
    answer: 2
  },
  {
    q: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    answer: 1
  },
  {
    q: "Solve: 3² + 4² = ?",
    options: ["12", "25", "20", "30"],
    answer: 1
  },
  {
    q: "What is the result of 100 ÷ 4?",
    options: ["20", "30", "25", "40"],
    answer: 2
  },
  {
    q: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answer: 1
  },
  {
    q: "What is 3 factorial (3!)?",
    options: ["3", "6", "9", "12"],
    answer: 1
  },
  {
    q: "What is the sum of the angles in a triangle?",
    options: ["180°", "360°", "90°", "270°"],
    answer: 0
  },
  {
    q: "What is the smallest 2-digit prime number?",
    options: ["11", "10", "13", "17"],
    answer: 0
  },
  {
    q: "What is the missing number in the pattern: 2, 4, 8, 16, __?",
    options: ["20", "24", "32", "30"],
    answer: 2
  },
  {
    q: "What is the perimeter of a square with side length 5 cm?",
    options: ["10 cm", "20 cm", "25 cm", "15 cm"],
    answer: 1
  },
  {
    q: "If a pizza is cut into 8 equal slices and you eat 3, how many are left?",
    options: ["3", "5", "6", "4"],
    answer: 1
  },
  {
    q: "Which number is both a square and a cube?",
    options: ["16", "64", "36", "100"],
    answer: 1
  }
],
"Technology": [
  {
    q: "What does 'HTTP' stand for?",
    options: [
      "Hyper Text Transfer Protocol",
      "High Text Transfer Protocol",
      "Hyperlink Transfer Text Protocol",
      "High Tech Text Protocol"
    ],
    answer: 0
  },
  {
    q: "Which company developed the Windows OS?",
    options: ["Apple", "IBM", "Microsoft", "Google"],
    answer: 2
  },
  {
    q: "What is the brain of the computer called?",
    options: ["Monitor", "CPU", "RAM", "Hard Drive"],
    answer: 1
  },
  {
    q: "Which programming language is primarily used for web development?",
    options: ["C++", "Python", "HTML", "Java"],
    answer: 2
  },
  {
    q: "What is the full form of 'AI'?",
    options: ["Automatic Intelligence", "Advanced Interface", "Artificial Intelligence", "Applied Integration"],
    answer: 2
  },
   {
    q: "What does CPU stand for?",
    options: ["Central Processing Unit", "Central Power Unit", "Computer Processing Unit", "Core Processing Unit"],
    answer: 0
  },
  {
    q: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Elon Musk", "Bill Gates", "Larry Page"],
    answer: 2
  },
  {
    q: "What is the name of the first search engine on the internet?",
    options: ["Google", "Archie", "Yahoo", "Bing"],
    answer: 1
  },
  {
    q: "Which programming language is primarily used for web development?",
    options: ["Python", "C++", "Java", "JavaScript"],
    answer: 3
  },
  {
    q: "What is the full form of HTML?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Making Language", "High Text Markup Language"],
    answer: 1
  },
  {
    q: "Which company developed the Android operating system?",
    options: ["Apple", "Microsoft", "Samsung", "Google"],
    answer: 3
  },
  {
    q: "What does 'www' stand for in a website browser?",
    options: ["World Wide Web", "World Web Wide", "Web World Wide", "Web Wide World"],
    answer: 0
  },
  {
    q: "Which social media platform is known for disappearing messages?",
    options: ["Instagram", "Snapchat", "Facebook", "Twitter"],
    answer: 1
  },
  {
    q: "What does USB stand for?",
    options: ["Universal Serial Bus", "United System Base", "Universal System Box", "Unit System Bus"],
    answer: 0
  },
  {
    q: "What is the name of Apple's mobile operating system?",
    options: ["iOS", "MacOS", "Android", "Windows"],
    answer: 0
  },
  {
    q: "Which of the following is NOT a web browser?",
    options: ["Chrome", "Firefox", "Safari", "Google Docs"],
    answer: 3
  },
  {
    q: "Which technology is used for cryptocurrency?",
    options: ["Blockchain", "AI", "IoT", "Cloud Computing"],
    answer: 0
  },
  {
    q: "What does AI stand for?",
    options: ["Artificial Insight", "Artificial Intelligence", "Automated Interface", "Analog Internet"],
    answer: 1
  },
  {
    q: "What does HTTP stand for?",
    options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transition Protocol", "Hyper Transfer Text Protocol"],
    answer: 0
  },
  {
    q: "Which of the following is a cloud storage service?",
    options: ["Gmail", "YouTube", "Google Drive", "Google Maps"],
    answer: 2
  }
],
"Entertainment": [
  {
    q: "Who played the character 'Iron Man' in the Marvel movies?",
    options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    answer: 1
  },
  {
    q: "Which movie won the Oscar for Best Picture in 2020?",
    options: ["1917", "Joker", "Parasite", "Ford v Ferrari"],
    answer: 2
  },
  {
    q: "Which singer is known as the 'King of Pop'?",
    options: ["Elvis Presley", "Justin Bieber", "Michael Jackson", "Prince"],
    answer: 2
  },
  {
    q: "What is the name of Harry Potter’s pet owl?",
    options: ["Crookshanks", "Fawkes", "Hedwig", "Scabbers"],
    answer: 2
  },
  {
    q: "Which TV show features a coffee shop called Central Perk?",
    options: ["How I Met Your Mother", "The Office", "Friends", "Brooklyn Nine-Nine"],
    answer: 2
  },
  {
    q: "Who played the role of 'Iron Man' in the Marvel Cinematic Universe?",
    options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Tom Holland"],
    answer: 1
  },
  {
    q: "Which movie won Best Picture at the Oscars in 2020?",
    options: ["1917", "Joker", "Parasite", "Ford v Ferrari"],
    answer: 2
  },
  {
    q: "Which singer is known as the 'Queen of Pop'?",
    options: ["Beyoncé", "Adele", "Madonna", "Lady Gaga"],
    answer: 2
  },
  {
    q: "In which year did the first Harry Potter movie release?",
    options: ["2001", "1999", "2003", "2000"],
    answer: 0
  },
  {
    q: "Which TV show features the fictional coffee shop Central Perk?",
    options: ["Friends", "The Office", "How I Met Your Mother", "Brooklyn Nine-Nine"],
    answer: 0
  },
  {
    q: "What is the name of the fictional city where Batman lives?",
    options: ["Metropolis", "Gotham", "Star City", "Central City"],
    answer: 1
  },
  {
    q: "Who directed the movie 'Inception'?",
    options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"],
    answer: 2
  },
  {
    q: "Which K-pop group is known for the song 'Dynamite'?",
    options: ["BLACKPINK", "BTS", "EXO", "TWICE"],
    answer: 1
  },
  {
    q: "What is the highest-grossing movie of all time (as of 2023)?",
    options: ["Titanic", "Avengers: Endgame", "Avatar", "The Lion King"],
    answer: 2
  },
  {
    q: "Who played Jack in the movie 'Titanic'?",
    options: ["Tom Cruise", "Leonardo DiCaprio", "Brad Pitt", "Matt Damon"],
    answer: 1
  },
  {
    q: "Which artist painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Michelangelo", "Vincent van Gogh"],
    answer: 0
  },
  {
    q: "Which superhero can climb walls and swing from webs?",
    options: ["Superman", "Spider-Man", "Iron Man", "Captain America"],
    answer: 1
  },
  {
    q: "Who is the creator of the Star Wars franchise?",
    options: ["George Lucas", "J.J. Abrams", "James Cameron", "Peter Jackson"],
    answer: 0
  },
  {
    q: "Which movie character says, 'I'll be back'?",
    options: ["Rocky", "Terminator", "James Bond", "Indiana Jones"],
    answer: 1
  },
  {
    q: "Which song is famous for the lyrics 'I'm gonna take my horse to the old town road'?",
    options: ["Old Town Road", "Blinding Lights", "Shape of You", "Despacito"],
    answer: 0
  }
],
"Geography": [
  {
    q: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: 3
  },
  {
    q: "Mount Everest lies on the border between which two countries?",
    options: ["India and China", "Nepal and China", "Bhutan and Nepal", "India and Nepal"],
    answer: 1
  },
  {
    q: "Which river is the longest in the world?",
    options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
    answer: 2
  },
  {
    q: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: 2
  },
  {
    q: "Which desert is the largest in the world?",
    options: ["Gobi", "Sahara", "Antarctic", "Kalahari"],
    answer: 2
  },
  {
    q: "What is the largest continent in the world?",
    options: ["Africa", "Asia", "Europe", "North America"],
    answer: 1
  },
  {
    q: "Which country has the most natural lakes?",
    options: ["Canada", "Russia", "USA", "India"],
    answer: 0
  },
  {
    q: "Mount Everest lies on the border of which two countries?",
    options: ["India and Nepal", "China and India", "Nepal and China", "Pakistan and India"],
    answer: 2
  },
  {
    q: "Which is the longest river in the world?",
    options: ["Amazon", "Yangtze", "Mississippi", "Nile"],
    answer: 3
  },
  {
    q: "Which desert is the largest in the world?",
    options: ["Sahara", "Gobi", "Kalahari", "Antarctic"],
    answer: 3
  },
  {
    q: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    answer: 3
  },
  {
    q: "Which country is known as the Land of the Rising Sun?",
    options: ["Thailand", "South Korea", "China", "Japan"],
    answer: 3
  },
  {
    q: "Which U.S. state is known as the 'Sunshine State'?",
    options: ["California", "Texas", "Florida", "Nevada"],
    answer: 2
  },
  {
    q: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: 2
  },
  {
    q: "Which European city is known as the City of Canals?",
    options: ["Paris", "Venice", "Amsterdam", "Vienna"],
    answer: 1
  },
  {
    q: "What is the capital city of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    answer: 1
  },
  {
    q: "Which country does the island of Bali belong to?",
    options: ["Thailand", "Indonesia", "Malaysia", "Philippines"],
    answer: 1
  },
  {
    q: "Which mountain range separates Europe and Asia?",
    options: ["Himalayas", "Andes", "Urals", "Alps"],
    answer: 2
  },
  {
    q: "What is the smallest country in the world by area?",
    options: ["Monaco", "Nauru", "San Marino", "Vatican City"],
    answer: 3
  },
  {
    q: "Which country has the largest population in the world?",
    options: ["USA", "China", "India", "Indonesia"],
    answer: 2
  }
],
"Literature": [
  {
    q: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Mark Twain", "Jane Austen", "Charles Dickens"],
    answer: 0
  },
  {
    q: "Which book series features a school called Hogwarts?",
    options: ["Narnia", "Percy Jackson", "Harry Potter", "Twilight"],
    answer: 2
  },
  {
    q: "Who wrote 'Romeo and Juliet'?",
    options: ["William Wordsworth", "William Shakespeare", "John Milton", "Jane Austen"],
    answer: 1
  },
  {
    q: "Which novel begins with the line 'Call me Ishmael'?",
    options: ["Moby Dick", "The Great Gatsby", "To the Lighthouse", "Frankenstein"],
    answer: 0
  },
  {
    q: "Who is the author of 'Pride and Prejudice'?",
    options: ["Emily Brontë", "Jane Austen", "Mary Shelley", "Charlotte Brontë"],
    answer: 1
  },
  {
    q: "Which book features a boy named Piggy?",
    options: ["The Catcher in the Rye", "Of Mice and Men", "Lord of the Flies", "Great Expectations"],
    answer: 2
  },
  {
    q: "Who wrote 'The Hobbit'?",
    options: ["J.K. Rowling", "T.S. Eliot", "J.R.R. Tolkien", "C.S. Lewis"],
    answer: 2
  },
  {
    q: "In which novel does the character Atticus Finch appear?",
    options: ["To Kill a Mockingbird", "The Grapes of Wrath", "Catch-22", "Little Women"],
    answer: 0
  },
  {
    q: "Which of these books was **not** written by George Orwell?",
    options: ["1984", "Animal Farm", "Brave New World", "Homage to Catalonia"],
    answer: 2
  },
  {
    q: "Which author created the detective Hercule Poirot?",
    options: ["Arthur Conan Doyle", "Agatha Christie", "Raymond Chandler", "Edgar Allan Poe"],
    answer: 1
  },
  {
    q: "What is the pen name of Samuel Langhorne Clemens?",
    options: ["Mark Twain", "George Orwell", "Lewis Carroll", "J.D. Salinger"],
    answer: 0
  },
  {
    q: "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
    options: ["Hamlet", "Othello", "Macbeth", "King Lear"],
    answer: 0
  },
  {
    q: "What type of novel is 'Frankenstein'?",
    options: ["Romantic", "Gothic", "Historical", "Satirical"],
    answer: 1
  },
  {
    q: "Which famous author wrote 'The Divine Comedy'?",
    options: ["Dante Alighieri", "Homer", "Virgil", "Chaucer"],
    answer: 0
  },
  {
    q: "‘The Old Man and the Sea’ is a novella written by?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Jack London", "Mark Twain"],
    answer: 1
  },
  {
    q: "What is the name of Sherlock Holmes' loyal friend?",
    options: ["Watson", "Hudson", "Lestrade", "Moriarty"],
    answer: 0
  },
  {
    q: "Which book features the character Hester Prynne?",
    options: ["The Scarlet Letter", "Jane Eyre", "Rebecca", "The Bell Jar"],
    answer: 0
  },
  {
    q: "Who wrote 'The Road Not Taken'?",
    options: ["Robert Frost", "Walt Whitman", "Emily Dickinson", "Sylvia Plath"],
    answer: 0
  },
  {
    q: "What is the setting of 'The Great Gatsby'?",
    options: ["Los Angeles", "Chicago", "New York", "Paris"],
    answer: 2
  },
  {
    q: "Which of these works is an epic poem?",
    options: ["Paradise Lost", "The Metamorphosis", "Wuthering Heights", "1984"],
    answer: 0
  }
],
"Flags": [
  {
    q: "Which country has a red circle on a white background in its flag?",
    options: ["Japan", "Bangladesh", "Turkey", "Switzerland"],
    answer: 0
  },
  {
    q: "Which country's flag has a maple leaf?",
    options: ["USA", "UK", "Canada", "France"],
    answer: 2
  },
   {
    q: "Which country has a red circle in the center of a white flag?",
    options: ["Japan", "Bangladesh", "Switzerland", "Turkey"],
    answer: 0
  },
  {
    q: "Which country's flag has a maple leaf?",
    options: ["USA", "Canada", "Australia", "Germany"],
    answer: 1
  },
  {
    q: "Which flag features a dragon?",
    options: ["Bhutan", "Wales", "Nepal", "China"],
    answer: 0
  },
  {
    q: "Which country has a green flag with a white crescent and star?",
    options: ["Pakistan", "Saudi Arabia", "Malaysia", "Iran"],
    answer: 0
  },
  {
    q: "The Union Jack is part of which country’s flag?",
    options: ["Australia", "New Zealand", "Fiji", "All of these"],
    answer: 3
  },
  {
    q: "Which country's flag is only one color with no design or emblem?",
    options: ["Libya (old flag)", "Monaco", "Nigeria", "Chad"],
    answer: 0
  },
  {
    q: "What color is not found in the flag of the United States?",
    options: ["Red", "Green", "White", "Blue"],
    answer: 1
  },
  {
    q: "Which flag has a cedar tree on it?",
    options: ["Lebanon", "Iraq", "Iran", "Jordan"],
    answer: 0
  },
  {
    q: "Which country has a red flag with five golden stars in the top left corner?",
    options: ["Vietnam", "China", "North Korea", "Laos"],
    answer: 1
  },
  {
    q: "What shape is at the center of the Indian flag?",
    options: ["Star", "Wheel", "Sun", "Crescent"],
    answer: 1
  },
  {
    q: "Which country's flag is red and white with a leaf in the middle?",
    options: ["Canada", "Japan", "Austria", "Switzerland"],
    answer: 0
  },
  {
    q: "How many stars are on the flag of the United States?",
    options: ["50", "51", "48", "52"],
    answer: 0
  },
  {
    q: "Which European country’s flag is blue with a yellow Nordic cross?",
    options: ["Sweden", "Finland", "Denmark", "Iceland"],
    answer: 0
  },
  {
    q: "Which African country's flag features a black star?",
    options: ["Kenya", "Ghana", "Nigeria", "Uganda"],
    answer: 1
  },
  {
    q: "Which flag has horizontal black, red, and yellow stripes?",
    options: ["Germany", "Belgium", "Spain", "Netherlands"],
    answer: 0
  },
  {
    q: "Which country has the Union Jack in its upper left corner and a large white star on the right?",
    options: ["Australia", "New Zealand", "Fiji", "Tuvalu"],
    answer: 0
  },
  {
    q: "Which country has a flag that features a large yellow star and four smaller ones on a red field?",
    options: ["Vietnam", "North Korea", "China", "Mongolia"],
    answer: 2
  },
  {
    q: "Which country has a flag with a blue triangle and red and white stripes?",
    options: ["Philippines", "Thailand", "Cuba", "Chile"],
    answer: 2
  }
],
"Did You Know?": [
  {
    q: "Did you know? Which is the only mammal that can fly?",
    options: ["Squirrel", "Bat", "Monkey", "Eagle"],
    answer: 1
  },
  {
    q: "Did you know? Which planet spins the fastest?",
    options: ["Earth", "Mars", "Jupiter", "Mercury"],
    answer: 2
  },
   {
    q: "Did you know the Eiffel Tower can grow taller during the summer?",
    options: ["Yes, up to 15 cm", "No, it shrinks", "It remains the same", "It melts slightly"],
    answer: 0
  },
  {
    q: "Did you know honey never spoils?",
    options: ["True", "False", "Only in glass jars", "Only in cold climates"],
    answer: 0
  },
  {
    q: "Which organ can regenerate itself?",
    options: ["Liver", "Heart", "Brain", "Kidney"],
    answer: 0
  },
  {
    q: "Did you know octopuses have how many hearts?",
    options: ["1", "2", "3", "4"],
    answer: 2
  },
  {
    q: "Did you know a day on Venus is longer than its year?",
    options: ["True", "False", "Only in winter", "Only at night"],
    answer: 0
  },
  {
    q: "What is the only letter not in the periodic table?",
    options: ["J", "Q", "X", "Z"],
    answer: 0
  },
  {
    q: "Which animal can survive in space?",
    options: ["Tardigrade", "Cockroach", "Rat", "Octopus"],
    answer: 0
  },
  {
    q: "Did you know bananas are classified as what?",
    options: ["Fruit", "Berry", "Herb", "Vegetable"],
    answer: 1
  },
  {
    q: "How many bones are babies born with?",
    options: ["206", "270", "180", "300"],
    answer: 1
  },
  {
    q: "Did you know sharks are older than dinosaurs?",
    options: ["True", "False", "Same age", "No fossil proof"],
    answer: 0
  },
  {
    q: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Lead", "Zinc", "Aluminum"],
    answer: 0
  },
  {
    q: "Did you know fingerprints are unique even in which animal?",
    options: ["Koalas", "Cats", "Dogs", "Bats"],
    answer: 0
  },
  {
    q: "Which fruit floats in water?",
    options: ["Apple", "Mango", "Banana", "Grapes"],
    answer: 0
  },
  {
    q: "Did you know humans share ~60% DNA with which fruit?",
    options: ["Banana", "Apple", "Orange", "Kiwi"],
    answer: 0
  },
  {
    q: "Which planet rains diamonds?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 2
  },
  {
    q: "Which organ is the heaviest in the human body?",
    options: ["Liver", "Brain", "Heart", "Lungs"],
    answer: 0
  },
  {
    q: "What is the only mammal that can truly fly?",
    options: ["Bat", "Flying squirrel", "Kangaroo", "Sloth"],
    answer: 0
  },
  {
    q: "Did you know water can boil and freeze at the same time?",
    options: ["Yes, at triple point", "No", "Only in labs", "In space only"],
    answer: 0
  }
],
"History": [
  {
    q: "Who was the first President of the United States?",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    answer: 1
  },
  {
    q: "In which year did World War II end?",
    options: ["1945", "1939", "1950", "1918"],
    answer: 0
  },
   {
    q: "Who was the first President of the United States?",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    answer: 1
  },
  {
    q: "In which year did World War II end?",
    options: ["1945", "1939", "1942", "1950"],
    answer: 0
  },
  {
    q: "Who discovered America in 1492?",
    options: ["Marco Polo", "Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan"],
    answer: 2
  },
  {
    q: "Which empire built the Colosseum?",
    options: ["Greek", "Roman", "Ottoman", "Persian"],
    answer: 1
  },
  {
    q: "The Great Wall of China was primarily built to protect against which group?",
    options: ["Japanese", "Indians", "Mongols", "Russians"],
    answer: 2
  },
  {
    q: "Who was the first woman to fly solo across the Atlantic?",
    options: ["Marie Curie", "Amelia Earhart", "Queen Elizabeth I", "Florence Nightingale"],
    answer: 1
  },
  {
    q: "Which war was fought between the North and South regions of the United States?",
    options: ["World War I", "Revolutionary War", "Civil War", "Korean War"],
    answer: 2
  },
  {
    q: "Who was known as the Iron Lady?",
    options: ["Angela Merkel", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
    answer: 1
  },
  {
    q: "What event started World War I?",
    options: [
      "Attack on Pearl Harbor",
      "Assassination of Archduke Franz Ferdinand",
      "Invasion of Poland",
      "Treaty of Versailles"
    ],
    answer: 1
  },
  {
    q: "Who was the leader of Nazi Germany?",
    options: ["Hitler", "Stalin", "Churchill", "Mussolini"],
    answer: 0
  },
  {
    q: "Which country was the first to grant women the right to vote?",
    options: ["USA", "UK", "New Zealand", "Australia"],
    answer: 2
  },
  {
    q: "Which ancient civilization built Machu Picchu?",
    options: ["Aztec", "Inca", "Maya", "Olmec"],
    answer: 1
  },
  {
    q: "The 'Cold War' was primarily between the USA and which country?",
    options: ["Germany", "Japan", "Soviet Union", "China"],
    answer: 2
  },
  {
    q: "Who was the famous Indian leader known for non-violence?",
    options: ["Jawaharlal Nehru", "B.R. Ambedkar", "Mahatma Gandhi", "Sardar Patel"],
    answer: 2
  },
  {
    q: "The Berlin Wall fell in which year?",
    options: ["1989", "1991", "1975", "1961"],
    answer: 0
  },
  {
    q: "Which empire was ruled by Genghis Khan?",
    options: ["Roman", "Persian", "Mongol", "British"],
    answer: 2
  },
  {
    q: "Where did the Industrial Revolution begin?",
    options: ["Germany", "France", "United States", "England"],
    answer: 3
  },
  {
    q: "Who was the first man to step on the moon?",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
    answer: 2
  }
],
"Sports": [
  {
    q: "How many players are there in a football (soccer) team on the field?",
    options: ["10", "11", "9", "12"],
    answer: 1
  },
  {
    q: "Which country has won the most FIFA World Cups?",
    options: ["Germany", "Brazil", "Argentina", "Italy"],
    answer: 1
  },
   {
    q: "How many players are on a soccer team on the field?",
    options: ["9", "10", "11", "12"],
    answer: 2
  },
  {
    q: "Which country won the FIFA World Cup in 2018?",
    options: ["Germany", "Argentina", "France", "Brazil"],
    answer: 2
  },
  {
    q: "How many rings are there on the Olympic flag?",
    options: ["4", "5", "6", "7"],
    answer: 1
  },
  {
    q: "Who holds the record for the most Grand Slam tennis titles?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    answer: 2
  },
  {
    q: "In which sport is the term 'birdie' used?",
    options: ["Tennis", "Golf", "Badminton", "Baseball"],
    answer: 1
  },
  {
    q: "What is the national sport of Canada?",
    options: ["Hockey", "Lacrosse", "Basketball", "Cricket"],
    answer: 1
  },
  {
    q: "Who won the most Olympic gold medals?",
    options: ["Usain Bolt", "Mark Spitz", "Larisa Latynina", "Michael Phelps"],
    answer: 3
  },
  {
    q: "How long is a marathon?",
    options: ["24.2 miles", "26.2 miles", "28.2 miles", "30.2 miles"],
    answer: 1
  },
  {
    q: "In cricket, how many balls are there in an over?",
    options: ["5", "6", "7", "8"],
    answer: 1
  },
  {
    q: "Which sport uses a pommel horse?",
    options: ["Wrestling", "Gymnastics", "Equestrian", "Karate"],
    answer: 1
  },
  {
    q: "Which country has won the most Olympic medals?",
    options: ["Russia", "China", "USA", "Germany"],
    answer: 2
  },
  {
    q: "Who is known as the 'King of Football'?",
    options: ["Pele", "Maradona", "Messi", "Ronaldo"],
    answer: 0
  },
  {
    q: "In which sport would you perform a slam dunk?",
    options: ["Volleyball", "Tennis", "Basketball", "Baseball"],
    answer: 2
  },
  {
    q: "How many holes are there in a standard golf course?",
    options: ["9", "12", "15", "18"],
    answer: 3
  },
  {
    q: "Which country invented table tennis?",
    options: ["Japan", "China", "India", "England"],
    answer: 3
  },
  {
    q: "Who won the ICC Cricket World Cup 2023?",
    options: ["Australia", "India", "England", "New Zealand"],
    answer: 1
  },
  {
    q: "In which sport is the Davis Cup awarded?",
    options: ["Badminton", "Tennis", "Squash", "Table Tennis"],
    answer: 1
  },
  {
    q: "Which athlete is known as the fastest man in the world?",
    options: ["Carl Lewis", "Usain Bolt", "Tyson Gay", "Yohan Blake"],
    answer: 1
  }
],
"Movies": [
  {
    q: "Which movie features the quote 'I'll be back'?",
    options: ["The Matrix", "RoboCop", "Terminator", "Die Hard"],
    answer: 2
  },
  {
    q: "Which animated movie features a talking snowman named Olaf?",
    options: ["Frozen", "Moana", "Tangled", "Encanto"],
    answer: 0
  },
   {
    q: "Which movie won Best Picture at the 2020 Oscars?",
    options: ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"],
    answer: 1
  },
  {
    q: "Who played Iron Man in the Marvel Cinematic Universe?",
    options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Tom Holland"],
    answer: 1
  },
  {
    q: "Which movie features the quote: 'I'm the king of the world!'?",
    options: ["Titanic", "Gladiator", "The Lion King", "Avatar"],
    answer: 0
  },
  {
    q: "Which film franchise is known for the line: 'May the Force be with you'?",
    options: ["Star Trek", "Star Wars", "The Matrix", "Guardians of the Galaxy"],
    answer: 1
  },
  {
    q: "Who directed the movie 'Inception'?",
    options: ["James Cameron", "Christopher Nolan", "Steven Spielberg", "Quentin Tarantino"],
    answer: 1
  },
  {
    q: "Which movie has the most Academy Awards?",
    options: ["Titanic", "Ben-Hur", "The Lord of the Rings: Return of the King", "All of the above"],
    answer: 3
  },
  {
    q: "In which movie does the character 'Forrest Gump' appear?",
    options: ["Cast Away", "Forrest Gump", "Saving Private Ryan", "Green Mile"],
    answer: 1
  },
  {
    q: "What is the highest-grossing movie of all time (as of 2024)?",
    options: ["Avatar", "Avengers: Endgame", "Titanic", "The Lion King"],
    answer: 0
  },
  {
    q: "Which actor voiced the character Woody in Toy Story?",
    options: ["Tom Hanks", "Tim Allen", "Will Smith", "Matt Damon"],
    answer: 0
  },
  {
    q: "What color is the pill Neo takes in The Matrix?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: 0
  },
  {
    q: "Who played the Joker in The Dark Knight?",
    options: ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Jack Nicholson"],
    answer: 0
  },
  {
    q: "Which movie is based on the life of mathematician John Nash?",
    options: ["The Imitation Game", "Good Will Hunting", "A Beautiful Mind", "The Theory of Everything"],
    answer: 2
  },
  {
    q: "Which Indian film was nominated for Best Foreign Language Film at the Oscars?",
    options: ["Lagaan", "RRR", "Dangal", "3 Idiots"],
    answer: 0
  },
  {
    q: "Who directed the 'Pulp Fiction' movie?",
    options: ["Martin Scorsese", "Steven Spielberg", "Quentin Tarantino", "Guy Ritchie"],
    answer: 2
  },
  {
    q: "Which horror film features a killer named Jason?",
    options: ["Scream", "Friday the 13th", "The Conjuring", "Halloween"],
    answer: 1
  },
  {
    q: "Which movie features the character Jack Sparrow?",
    options: ["Peter Pan", "Pirates of the Caribbean", "Jungle Cruise", "Treasure Island"],
    answer: 1
  },
  {
    q: "What is the name of the fictional African country in Black Panther?",
    options: ["Zamunda", "Wakanda", "Naboo", "Kamar-Taj"],
    answer: 1
  },
  {
    q: "Which movie is known for the quote: 'Why so serious?'",
    options: ["Joker", "The Dark Knight", "Deadpool", "Sin City"],
    answer: 1
  }
],
"Logic & Reasoning": [
  {
    q: "If A = 1, B = 2, ..., then what is the value of the word 'BAD'?",
    options: ["7", "9", "6", "8"],
    answer: 0
  },
  {
    q: "Which number comes next in the series: 2, 4, 8, 16, __?",
    options: ["18", "32", "24", "20"],
    answer: 1
  },
   {
    q: "If all roses are flowers and some flowers fade quickly, which of the following is true?",
    options: [
      "All roses fade quickly.",
      "Some roses are not flowers.",
      "Some flowers may not be roses.",
      "No flowers are roses."
    ],
    answer: 2
  },
  {
    q: "What comes next in the series: 2, 4, 8, 16, ?",
    options: ["18", "24", "32", "20"],
    answer: 2
  },
  {
    q: "Mary is older than John. John is older than Alice. Who is the oldest?",
    options: ["Alice", "John", "Mary", "Cannot be determined"],
    answer: 2
  },
  {
    q: "If TOMORROW is coded as UPNQSPXX, how is TODAY coded?",
    options: ["UPEBZ", "UNEBZ", "UPEAX", "UODAZ"],
    answer: 0
  },
  {
    q: "What is the missing number? 1, 4, 9, 16, 25, ?",
    options: ["30", "36", "49", "64"],
    answer: 1
  },
  {
    q: "Which number logically replaces the question mark? 2, 6, 12, 20, ?",
    options: ["30", "28", "26", "24"],
    answer: 3
  },
  {
    q: "A clock seen in a mirror shows 3:15. What is the actual time?",
    options: ["9:45", "8:45", "3:15", "12:45"],
    answer: 1
  },
  {
    q: "Which word does not belong: Apple, Orange, Banana, Carrot?",
    options: ["Apple", "Orange", "Banana", "Carrot"],
    answer: 3
  },
  {
    q: "If 3 cats can catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
    options: ["3", "100", "1", "10"],
    answer: 0
  },
  {
    q: "Complete the series: AZ, BY, CX, ?",
    options: ["DU", "DW", "DV", "DZ"],
    answer: 1
  },
  {
    q: "Which comes next? ACE, BDF, CEH, ?",
    options: ["DFI", "DGI", "EIJ", "DHL"],
    answer: 3
  },
  {
    q: "Which figure does not belong in the group?",
    options: ["Triangle", "Square", "Circle", "Cube"],
    answer: 3
  },
  {
    q: "A is B’s brother. C is B’s sister. D is A’s father. Who is C to D?",
    options: ["Daughter", "Son", "Wife", "Cousin"],
    answer: 0
  },
  {
    q: "If in a code language 'DOG' is written as 'EPH', then 'CAT' is written as?",
    options: ["DBU", "DBV", "CBU", "DBT"],
    answer: 1
  },
  {
    q: "Which number does not belong? 121, 144, 169, 182",
    options: ["121", "144", "169", "182"],
    answer: 3
  },
  {
    q: "Find the odd one out: 2, 3, 5, 7, 11, 14, 17",
    options: ["3", "5", "14", "17"],
    answer: 2
  },
  {
    q: "Which of the following is not a logical fallacy?",
    options: ["Strawman", "Ad hominem", "Appeal to reason", "Slippery slope"],
    answer: 2
  },
  {
    q: "A train 100 meters long is moving at 60 km/h. How long will it take to pass a pole?",
    options: ["3 sec", "6 sec", "12 sec", "10 sec"],
    answer: 1
  }
],
"Current Affairs": [
  {
    q: "Who is the current UN Secretary-General (as of 2025)?",
    options: ["Antonio Guterres", "Ban Ki-moon", "Joe Biden", "Elon Musk"],
    answer: 0
  },
  {
    q: "Which country recently hosted the 2024 Olympics?",
    options: ["Japan", "USA", "France", "Brazil"],
    answer: 2
  },
  {
    q: "Who is the current President of the United States as of 2025?",
    options: ["Joe Biden", "Donald Trump", "Ron DeSantis", "Kamala Harris"],
    answer: 0
  },
  {
    q: "Which country recently launched the Chang'e-6 lunar mission to collect samples?",
    options: ["India", "USA", "China", "Russia"],
    answer: 2
  },
  {
    q: "Which Indian state was the first to implement Uniform Civil Code in 2024?",
    options: ["Uttar Pradesh", "Gujarat", "Uttarakhand", "Maharashtra"],
    answer: 2
  },
  {
    q: "Who won the 2024 ICC Men’s T20 World Cup?",
    options: ["India", "England", "Australia", "South Africa"],
    answer: 0
  },
  {
    q: "What is the name of the AI regulation law passed by the European Union in 2024?",
    options: ["AI Governance Law", "Digital Act", "AI Act", "Tech Ethics Law"],
    answer: 2
  },
  {
    q: "Which country hosted the 2024 Summer Olympics?",
    options: ["Japan", "France", "Brazil", "USA"],
    answer: 1
  },
  {
    q: "Who is the current CEO of Twitter/X as of 2025?",
    options: ["Linda Yaccarino", "Elon Musk", "Parag Agrawal", "Sundar Pichai"],
    answer: 0
  },
  {
    q: "Which country became the newest member of BRICS in 2024?",
    options: ["Egypt", "Turkey", "Argentina", "UAE"],
    answer: 2
  },
  {
    q: "What major health concern saw a resurgence globally in early 2025?",
    options: ["COVID-19", "Bird Flu", "Polio", "Monkeypox"],
    answer: 1
  },
  {
    q: "Which Indian city topped the Smart Cities ranking in 2024?",
    options: ["Ahmedabad", "Surat", "Indore", "Bhopal"],
    answer: 2
  },
  {
    q: "Who won the Nobel Peace Prize in 2024?",
    options: ["Greta Thunberg", "WHO", "Narges Mohammadi", "Volodymyr Zelenskyy"],
    answer: 2
  },
  {
    q: "Which country experienced major wildfires in early 2025 causing international concern?",
    options: ["Australia", "Canada", "Brazil", "Greece"],
    answer: 1
  },
  {
    q: "India recently signed a major space collaboration agreement with which country?",
    options: ["USA", "Russia", "France", "Japan"],
    answer: 0
  },
  {
    q: "Which city will host the G20 Summit in 2025?",
    options: ["Dubai", "Rome", "Cape Town", "Rio de Janeiro"],
    answer: 3
  },
  {
    q: "What is the name of ISRO's upcoming mission to study the Sun?",
    options: ["Aditya-L1", "Surya-1", "Chandrayaan-3", "Helios-ISRO"],
    answer: 0
  },
  {
    q: "Which company became the world’s most valuable company in 2025?",
    options: ["Microsoft", "Apple", "Saudi Aramco", "Google"],
    answer: 0
  },
  {
    q: "Which Indian tech startup became a unicorn in early 2025?",
    options: ["PhysicsWallah", "Zerodha", "KukuFM", "Kaleidofin"],
    answer: 3
  },
  {
    q: "Which Indian athlete broke the national record in javelin throw in 2025?",
    options: ["Neeraj Chopra", "Shivpal Singh", "DP Manu", "Annu Rani"],
    answer: 2
  }
],
"Space": [
  {
    q: "Which planet is known for its rings?",
    options: ["Mars", "Jupiter", "Saturn", "Uranus"],
    answer: 2
  },
  {
    q: "What is the name of our galaxy?",
    options: ["Andromeda", "Milky Way", "Orion", "Nebula"],
    answer: 1
  },
   {
    q: "Which planet is known as the 'Red Planet'?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: 2
  },
  {
    q: "What is the name of the first satellite sent into space?",
    options: ["Apollo 11", "Sputnik 1", "Voyager 1", "Luna 2"],
    answer: 1
  },
  {
    q: "Which is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: 2
  },
  {
    q: "Who was the first human in space?",
    options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Alan Shepard"],
    answer: 1
  },
  {
    q: "What galaxy is Earth located in?",
    options: ["Andromeda", "Whirlpool", "Sombrero", "Milky Way"],
    answer: 3
  },
  {
    q: "What is the name of NASA's most powerful space telescope launched in 2021?",
    options: ["Hubble", "Chandra", "James Webb", "Spitzer"],
    answer: 2
  },
  {
    q: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 1
  },
  {
    q: "What is the name of the boundary marking the edge of Earth’s atmosphere and space?",
    options: ["Van Allen Belt", "Kármán Line", "Exosphere", "Stratosphere"],
    answer: 1
  },
  {
    q: "What is a supernova?",
    options: ["A comet", "A meteor shower", "An exploding star", "A black hole"],
    answer: 2
  },
  {
    q: "Which planet has a day longer than its year?",
    options: ["Mercury", "Venus", "Mars", "Neptune"],
    answer: 1
  },
  {
    q: "Which is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: 1
  },
  {
    q: "Which Indian mission was the first to land on the Moon's south pole?",
    options: ["Mangalyaan", "Chandrayaan-1", "Chandrayaan-3", "Vikram Sarabhai Mission"],
    answer: 2
  },
  {
    q: "Which planet is tilted on its side and spins horizontally?",
    options: ["Saturn", "Neptune", "Uranus", "Pluto"],
    answer: 2
  },
  {
    q: "What is the Sun primarily made of?",
    options: ["Helium and Carbon", "Hydrogen and Oxygen", "Hydrogen and Helium", "Carbon and Nitrogen"],
    answer: 2
  },
  {
    q: "Which moon is the largest in the solar system?",
    options: ["Titan", "Ganymede", "Io", "Europa"],
    answer: 1
  },
  {
    q: "What do we call a rock that enters Earth’s atmosphere and burns up?",
    options: ["Asteroid", "Meteor", "Comet", "Satellite"],
    answer: 1
  },
  {
    q: "What is the term for a star that suddenly increases greatly in brightness?",
    options: ["Pulsar", "Nova", "Quasar", "Neutron Star"],
    answer: 1
  },
  {
    q: "Which spacecraft has traveled the farthest from Earth?",
    options: ["Voyager 2", "New Horizons", "Pioneer 10", "Voyager 1"],
    answer: 3
  }
],
"Inventions": [
  {
    q: "Who invented the light bulb?",
    options: ["Nikola Tesla", "Thomas Edison", "Isaac Newton", "James Watt"],
    answer: 1
  },
  {
    q: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin", "Albert Einstein"],
    answer: 0
  },
   {
    q: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    answer: 0
  },
  {
    q: "Who is credited with inventing the light bulb?",
    options: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Albert Einstein"],
    answer: 2
  },
  {
    q: "Who invented the World Wide Web?",
    options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
    answer: 2
  },
  {
    q: "Which invention is Galileo Galilei associated with?",
    options: ["Steam engine", "Telescope", "Printing press", "Compass"],
    answer: 1
  },
  {
    q: "Who invented the airplane?",
    options: ["The Wright brothers", "Leonardo da Vinci", "Charles Lindbergh", "Amelia Earhart"],
    answer: 0
  },
  {
    q: "Who is considered the father of the computer?",
    options: ["Bill Gates", "Alan Turing", "Charles Babbage", "Steve Wozniak"],
    answer: 2
  },
  {
    q: "Who invented the radio?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
    answer: 3
  },
  {
    q: "What did Johannes Gutenberg invent?",
    options: ["Microscope", "Telescope", "Printing press", "Thermometer"],
    answer: 2
  },
  {
    q: "Who invented the polio vaccine?",
    options: ["Jonas Salk", "Louis Pasteur", "Edward Jenner", "Marie Curie"],
    answer: 0
  },
  {
    q: "Who invented dynamite?",
    options: ["Marie Curie", "Isaac Newton", "Alfred Nobel", "Robert Boyle"],
    answer: 2
  },
  {
    q: "What did Eli Whitney invent?",
    options: ["Cotton gin", "Sewing machine", "Printing press", "Radio"],
    answer: 0
  },
  {
    q: "Who invented the periodic table?",
    options: ["Marie Curie", "Dmitri Mendeleev", "John Dalton", "Robert Boyle"],
    answer: 1
  },
  {
    q: "Who invented the electric battery?",
    options: ["Michael Faraday", "Alessandro Volta", "James Watt", "Nikola Tesla"],
    answer: 1
  },
  {
    q: "Who is credited with inventing the microscope?",
    options: ["Zacharias Janssen", "Antonie van Leeuwenhoek", "Isaac Newton", "Robert Hooke"],
    answer: 0
  },
  {
    q: "Who developed the first successful vaccine?",
    options: ["Edward Jenner", "Louis Pasteur", "Jonas Salk", "Florence Nightingale"],
    answer: 0
  },
  {
    q: "What did James Watt improve upon significantly?",
    options: ["Battery", "Light bulb", "Steam engine", "Airplane"],
    answer: 2
  },
  {
    q: "Who invented the safety elevator?",
    options: ["Henry Ford", "Thomas Edison", "Elisha Otis", "John Logie Baird"],
    answer: 2
  },
  {
    q: "Who invented the television?",
    options: ["Philo Farnsworth", "John Logie Baird", "Nikola Tesla", "Thomas Edison"],
    answer: 1
  }
],
"Art & Culture": [
  {
    q: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Van Gogh", "Leonardo da Vinci", "Picasso"],
    answer: 2
  },
  {
    q: "Which country is famous for its ancient pyramids?",
    options: ["India", "Peru", "Egypt", "Mexico"],
    answer: 2
  },
  {
    q: "Which artist is known for painting the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: 2
  },
  {
    q: "Which museum is the Mona Lisa housed in?",
    options: ["The British Museum", "The Louvre", "The Met", "Uffizi Gallery"],
    answer: 1
  },
  {
    q: "Who painted 'The Starry Night'?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Salvador Dalí"],
    answer: 1
  },
  {
    q: "Which country is famous for its Kabuki theatre?",
    options: ["China", "Japan", "Thailand", "India"],
    answer: 1
  },
  {
    q: "What is the name of the Indian classical dance from Kerala?",
    options: ["Bharatanatyam", "Kathak", "Kathakali", "Odissi"],
    answer: 2
  },
  {
    q: "Which period is known as the rebirth of art and learning in Europe?",
    options: ["Baroque", "Enlightenment", "Renaissance", "Romanticism"],
    answer: 2
  },
  {
    q: "Michelangelo painted the ceiling of which famous building?",
    options: ["The Louvre", "Sistine Chapel", "St. Peter's Basilica", "Pantheon"],
    answer: 1
  },
  {
    q: "Which language is most commonly used in opera?",
    options: ["English", "Italian", "French", "German"],
    answer: 1
  },
  {
    q: "Which artist is known for Cubism?",
    options: ["Salvador Dalí", "Henri Matisse", "Pablo Picasso", "Rembrandt"],
    answer: 2
  },
  {
    q: "What is origami?",
    options: ["Japanese flower arrangement", "Japanese calligraphy", "Japanese paper folding", "Japanese tea ceremony"],
    answer: 2
  },
  {
    q: "Which famous statue is located in Rio de Janeiro, Brazil?",
    options: ["Statue of Liberty", "Christ the Redeemer", "The Thinker", "David"],
    answer: 1
  },
  {
    q: "Who composed the Four Seasons?",
    options: ["Mozart", "Beethoven", "Vivaldi", "Bach"],
    answer: 2
  },
  {
    q: "Which famous playwright wrote 'Romeo and Juliet'?",
    options: ["Christopher Marlowe", "William Shakespeare", "Arthur Miller", "Tennessee Williams"],
    answer: 1
  },
  {
    q: "Which traditional art form uses powdered colors to create designs on floors in India?",
    options: ["Madhubani", "Warli", "Rangoli", "Pattachitra"],
    answer: 2
  },
  {
    q: "Who painted 'The Persistence of Memory'?",
    options: ["Claude Monet", "Salvador Dalí", "Georges Seurat", "Andy Warhol"],
    answer: 1
  },
  {
    q: "Which civilization is known for pyramids and hieroglyphics?",
    options: ["Greek", "Mesopotamian", "Roman", "Egyptian"],
    answer: 3
  },
  {
    q: "Which dance form originated in Spain and is known for its passionate movements?",
    options: ["Salsa", "Tango", "Flamenco", "Ballet"],
    answer: 2
  },
  {
    q: "Which painting technique involves using water-based pigments on freshly applied plaster?",
    options: ["Fresco", "Oil", "Acrylic", "Tempera"],
    answer: 0
  }
],
"Food & Health": [
  {
    q: "Which vitamin is produced when the skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin B"],
    answer: 1
  },
  {
    q: "Which of these is a protein-rich food?",
    options: ["Rice", "Milk", "Apple", "Bread"],
    answer: 1
  },
   {
    q: "Which vitamin is primarily obtained from sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: 3
  },
  {
    q: "Which mineral is essential for healthy bones?",
    options: ["Iron", "Calcium", "Zinc", "Potassium"],
    answer: 1
  },
  {
    q: "Which of the following is considered a superfood?",
    options: ["White bread", "Kale", "Candy", "Soda"],
    answer: 1
  },
  {
    q: "What is the main function of red blood cells?",
    options: ["Fight infection", "Clot blood", "Carry oxygen", "Produce hormones"],
    answer: 2
  },
  {
    q: "Which of these foods is a good source of protein?",
    options: ["Rice", "Chicken", "Sugar", "Lettuce"],
    answer: 1
  },
  {
    q: "What is the term for the healthy bacteria in your gut?",
    options: ["Antibiotics", "Prebiotics", "Probiotics", "Symbiotics"],
    answer: 2
  },
  {
    q: "Which nutrient helps in building and repairing tissues?",
    options: ["Fats", "Carbohydrates", "Proteins", "Vitamins"],
    answer: 2
  },
  {
    q: "Which organ in the body produces insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Stomach"],
    answer: 1
  },
  {
    q: "Which fruit contains the enzyme bromelain?",
    options: ["Mango", "Pineapple", "Apple", "Grapes"],
    answer: 1
  },
  {
    q: "What does BMI stand for?",
    options: ["Body Measure Index", "Body Mass Index", "Bulk Mass Indicator", "Body Metabolism Index"],
    answer: 1
  },
  {
    q: "Which vitamin helps in blood clotting?",
    options: ["Vitamin C", "Vitamin A", "Vitamin K", "Vitamin E"],
    answer: 2
  },
  {
    q: "Which of the following is a whole grain?",
    options: ["White rice", "White bread", "Oats", "Sugar"],
    answer: 2
  },
  {
    q: "Which fat is considered the healthiest?",
    options: ["Saturated fat", "Trans fat", "Unsaturated fat", "Animal fat"],
    answer: 2
  },
  {
    q: "Which of these is an example of a fermented food?",
    options: ["Cheese", "Yogurt", "Butter", "Olive oil"],
    answer: 1
  },
  {
    q: "Which part of the body is affected by anemia?",
    options: ["Bones", "Lungs", "Blood", "Muscles"],
    answer: 2
  },
  {
    q: "Which fruit is known for its high potassium content?",
    options: ["Banana", "Apple", "Orange", "Strawberry"],
    answer: 0
  },
  {
    q: "Which of these is a good source of omega-3 fatty acids?",
    options: ["Beef", "Chicken", "Salmon", "Cheese"],
    answer: 2
  },
  {
    q: "What does dehydration primarily affect?",
    options: ["Muscles", "Skin", "Water levels in the body", "Bones"],
    answer: 2
  }
],
"Mythology": [
  {
    q: "In Greek mythology, who is the king of the gods?",
    options: ["Hades", "Poseidon", "Zeus", "Apollo"],
    answer: 2
  },
  {
    q: "In Hindu mythology, who is the god of destruction?",
    options: ["Vishnu", "Shiva", "Brahma", "Indra"],
    answer: 1
  },
  {
    q: "Who is the king of the gods in Greek mythology?",
    options: ["Apollo", "Zeus", "Poseidon", "Hermes"],
    answer: 1
  },
  {
    q: "In Hindu mythology, who is known as the preserver of the universe?",
    options: ["Brahma", "Vishnu", "Shiva", "Indra"],
    answer: 1
  },
  {
    q: "Thor is a god in which mythology?",
    options: ["Greek", "Norse", "Roman", "Celtic"],
    answer: 1
  },
  {
    q: "Which Egyptian god has the head of a jackal?",
    options: ["Horus", "Ra", "Anubis", "Osiris"],
    answer: 2
  },
  {
    q: "What is the name of the Greek goddess of wisdom?",
    options: ["Aphrodite", "Artemis", "Athena", "Demeter"],
    answer: 2
  },
  {
    q: "Ragnarok is associated with which mythology?",
    options: ["Egyptian", "Hindu", "Norse", "Greek"],
    answer: 2
  },
  {
    q: "Which creature is half man and half bull in Greek mythology?",
    options: ["Cyclops", "Hydra", "Minotaur", "Chimera"],
    answer: 2
  },
  {
    q: "What is the name of the river that souls cross to reach the underworld in Greek mythology?",
    options: ["Nile", "Lethe", "Styx", "Euphrates"],
    answer: 2
  },
  {
    q: "In Roman mythology, who is the god of war?",
    options: ["Mars", "Jupiter", "Pluto", "Neptune"],
    answer: 0
  },
  {
    q: "Which Hindu goddess is known for slaying the demon Mahishasura?",
    options: ["Saraswati", "Lakshmi", "Parvati", "Durga"],
    answer: 3
  },
  {
    q: "Who stole fire from the gods and gave it to humans in Greek mythology?",
    options: ["Hermes", "Prometheus", "Apollo", "Atlas"],
    answer: 1
  },
  {
    q: "Which god rides the eight-legged horse Sleipnir?",
    options: ["Thor", "Freyr", "Odin", "Loki"],
    answer: 2
  },
  {
    q: "In Egyptian mythology, who is the god of the sun?",
    options: ["Thoth", "Ra", "Anubis", "Geb"],
    answer: 1
  },
  {
    q: "Which Greek hero is known for his twelve labors?",
    options: ["Achilles", "Theseus", "Odysseus", "Heracles"],
    answer: 3
  },
  {
    q: "In Hindu mythology, what is the name of the cosmic serpent?",
    options: ["Garuda", "Shesha", "Kaliya", "Takshaka"],
    answer: 1
  },
  {
    q: "Which Roman goddess is equivalent to the Greek goddess Hera?",
    options: ["Diana", "Minerva", "Juno", "Venus"],
    answer: 2
  },
  {
    q: "In Norse mythology, what is the name of the world tree?",
    options: ["Asgard", "Valhalla", "Yggdrasil", "Midgard"],
    answer: 2
  },
  {
    q: "Which Hindu deity is known as the remover of obstacles?",
    options: ["Shiva", "Ganesha", "Vishnu", "Krishna"],
    answer: 1
  }
]
  
};
const avatarOptions = document.querySelectorAll('.avatar-option');
const avatarPreview = document.getElementById('avatarPreview');
const nameInput = document.getElementById('playerName');
const namePreview = document.getElementById('namePreview');
const startBtn = document.getElementById('start-quiz-btn');




const avatarSection = document.getElementById('avatar-section');
const categorySection = document.getElementById('category-list-section');
const categoryList = document.getElementById('categoryList');
let selectedAvatar = 'avatars/avatar1.png';

// Avatar selection
avatarOptions.forEach(avatar => {
  avatar.addEventListener('click', () => {
    avatarOptions.forEach(a => a.classList.remove('selected'));
    avatar.classList.add('selected');
    selectedAvatar = avatar.src;
    avatarPreview.src = selectedAvatar;
  });
});

// Name preview
nameInput.addEventListener('input', () => {
  namePreview.textContent = nameInput.value || "Player Name";
});

// Start quiz
startBtn.addEventListener('click', () => {
  const playerName = nameInput.value.trim();
  if (!playerName) {
    alert("Please enter your name!");
    return;
  }
  
  localStorage.setItem('quizPlayer', JSON.stringify({
    name: playerName,
    avatar: selectedAvatar
  }));

  avatarSection.classList.add("hidden");
  categorySection.classList.remove("hidden");
});

  // Start Quiz button → go to category list
document.getElementById("start-quiz-btn").addEventListener("click", () => {
    if (!selectedAvatar) {
        alert("Please select an avatar before starting the quiz!");
        return;
    }

    document.getElementById("avatar-section").style.display = "none";
    document.getElementById("category-list-section").style.display = "block";
});

// Category click → Start quiz for that category
  categoryList.addEventListener("click", (e) => {
    if (e.target.classList.contains("category-item")) {
      const selectedCategory = e.target.textContent;
      categoryScreen.style.display = "none";
      quizScreen.style.display = "block";
      startQuiz(selectedCategory);
    }
  });

  function startQuiz(category) {
    console.log(`Starting quiz for category: ${category}`);
    // Your quiz loading logic here
  }
;


    const home = document.getElementById("home");
    const quiz = document.getElementById("quiz");
    const result = document.getElementById("result");
    const questionText = document.getElementById("questionText");
    const optionsDiv = document.getElementById("options");
    const feedback = document.getElementById("feedback");
    const scoreDisplay = document.getElementById("score");
    const summaryList = document.getElementById("summary");
    
    const categoryTitle = document.getElementById("categoryTitle");


    let timer;           // Holds the interval reference
let timeLeft = 15;   // Time in seconds for each question
const timerDisplay = document.getElementById("timer"); // The timer element in HTML

    let currentCategory = "";
    let questions = [];
    let currentIndex = 0;
    let score = 0;
    let userAnswers = [];

    
    categories.forEach(cat => {
      const li = document.createElement("li");
      li.textContent = cat;
      li.onclick = () => startQuiz(cat);
      categoryList.appendChild(li);
    });

    function startQuiz(category) {
      if (!allQuestions[category]) return alert("No questions added yet for " + category);
      currentCategory = category;
      questions = allQuestions[category];
      currentIndex = 0;
      score = 0;
      userAnswers = [];
      home.classList.add("hidden");
      quiz.classList.remove("hidden");
      categoryTitle.textContent = category;
      showQuestion();
    }

    function startRandomQuiz() {
      const random = categories[Math.floor(Math.random() * categories.length)];
      startQuiz(random);
    }

   function showQuestion() {
  const current = questions[currentIndex];
  questionText.textContent = current.q;
  optionsDiv.innerHTML = "";
  feedback.textContent = "";

  current.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      stopTimer(); // stop timer once answer is chosen
      submitAnswer(i);
    };
    optionsDiv.appendChild(btn);
  });

  stopTimer(); // clear previous timer
  startTimer(); // start fresh timer for each question
}

function startTimer() {
  timeLeft = 15;
  timerDisplay.textContent = `Time left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function handleTimeout() {
  feedback.textContent = "Time's up!";
  const correct = questions[currentIndex].answer;
  const buttons = optionsDiv.querySelectorAll("button");
  
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add("correct");
  });

  userAnswers.push({
    q: questions[currentIndex].q,
    correct: questions[currentIndex].options[correct],
    chosen: "No Answer"
  });

  // Delay before moving to next question
  setTimeout(nextQuestion, 1500);
}

function loadQuestion() {
  stopTimer(); // clear previous timer

  const question = questions[currentQuestionIndex];
  // show question text and options here...

  startTimer(); // start fresh timer
}



    function submitAnswer(selected) {
      const correct = questions[currentIndex].answer;
      const buttons = optionsDiv.querySelectorAll("button");

      buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) btn.classList.add("correct");
        if (i === selected && selected !== correct) btn.classList.add("incorrect");
      });

      feedback.textContent = selected === correct ? "Correct!" : "Wrong!";
      if (selected === correct) score++;
      userAnswers.push({ q: questions[currentIndex].q, correct: questions[currentIndex].options[correct], chosen: questions[currentIndex].options[selected] });
    }

    function nextQuestion() {
      currentIndex++;
      if (currentIndex < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }

    function showResult() {
      quiz.classList.add("hidden");
      result.classList.remove("hidden");
      scoreDisplay.textContent = `You scored ${score} out of ${questions.length}`;
      summaryList.innerHTML = "";
      userAnswers.forEach(ans => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${ans.q}</strong><br>Correct: ${ans.correct}<br>Your Answer: ${ans.chosen}`;
        summaryList.appendChild(li);
      });
    }

    function goHome() {
      result.classList.add("hidden");
      home.classList.remove("hidden");
    }


    function updateStats(score) {
    let player = JSON.parse(localStorage.getItem("quizPlayer"));
    if (player) {
        player.stats.gamesPlayed += 1;
        if (score > player.stats.highScore) {
            player.stats.highScore = score;
        }
        localStorage.setItem("quizPlayer", JSON.stringify(player));
    }
}
function showStats() {
    const player = JSON.parse(localStorage.getItem("quizPlayer"));
    if (player) {
        alert(`${player.name}'s Stats:\nGames Played: ${player.stats.gamesPlayed}\nHigh Score: ${player.stats.highScore}`);
    }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.log('Service Worker registration failed:', err));
}

   
