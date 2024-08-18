# Movie Search Application

A simple movie search application built using Node.js, Express, Handlebars (hbs), and the OMDb API. This application allows users to search for movies and view details like the title, release year, plot, and more.

## Features

- Search for movies by title.
- Display movie details including title, year, plot, genre, and more.
- Responsive and user-friendly interface.

## Technologies Used

- **Frontend**: Handlebars (hbs), Tailwind CSS
- **Backend**: Node.js, Express
- **API**: OMDb API (for fetching movie data)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Amalkrishnanvp/Movie-Search-Application.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd "Movie Search Application"
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Set up your environment variables**
   Create a .env file in the root directory and add your OMDb API key:

   ```env
   API_KEY=your_omdb_api_key
   ```

5. **Run the project**

   ```bash
   node app.js
   ```

6. **Open your web browser and go to http://localhost:3000**

## How It Works

- The user inputs a movie title in the search bar.
- The application makes a request to the server and the server will request to OMDb API using the entered title.
- The results are displayed on the page with movie details.

## Project Structure

Here’s an overview of the project structure for the Movie Search Application:

```plaintext
Movie-Search-Application/
│
├── public/
│   ├── images/
│   │   ├── a.jpg           # Image file
│   │   └── star.png        # Image file
│   ├── javascripts/
│   │   └── main.js         # JavaScript file for client-side functionality
│   └── stylesheets/
│       └── style.css       # CSS file for styling
│
├── routes/
│   ├── index.js            # Route handling for index
│   ├── search.js           # Route handling for search functionality
│   └── users.js            # Route handling for user-related actions
│
├── src/
│   └── input.css           # Additional CSS file for styling
│
├── views/
│   ├── index.hbs           # Handlebars template for the index page
│   └── layout.hbs          # Handlebars layout template
│
├── .env                    # Environment variables file (not committed to version control)
├── app.js                  # Main application file
└── README.md               # Project documentation
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- **[Express](https://expressjs.com/)**: For providing a robust and flexible server framework to handle HTTP requests and server-side logic.
- **[Handlebars](https://handlebarsjs.com/)**: For enabling efficient and dynamic templating to render HTML views.
- **[Tailwind CSS](https://tailwindcss.com/)**: For offering a utility-first CSS framework to create responsive and customizable designs.
- **[OMDb API](https://www.omdbapi.com/)**: For supplying movie data and information to enhance the application's functionality.

## Contact

For any questions, contact Amalkrishnanvp17@gmail.com
