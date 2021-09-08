import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const bookList = {
    "Action and Adventure": [
      {
        name: "Origin",
        author: "Dan Brown",
        description:
          "Origin is a 2017 mystery thriller novel by American author Dan Brown and the fifth installment in his Robert Langdon series, following Inferno. The book was released on October 3, 2017, by Doubleday. The book is predominantly set in Spain and features minor sections in Sharjah and Budapest.",
        rating: "3.9/5"
      },
      {
        name: "Oath of Office",
        author: "Marc Cameron",
        description:
          "Oath of Office is a techno-thriller novel, written by Marc Cameron and published on November 27, 2018. Set in the Tom Clancy universe, President Jack Ryan and The Campus deal with a sinister plot behind a series of protests in Iran, dubbed the Persian Spring.",
        rating: "4.1/5"
      },
      {
        name: "Black Sun",
        author: "Hugh B. Cave",
        description:
          "A thrilling debut set at the height--and in the heart--of Soviet power, with intricately plotted machinations, secrets and surveillance, corrupt politicos and puppet masters in the Politburo, and one devastating weapon. It is the dawn of the 1960s.",
        rating: "4.7/5"
      }
    ],
    Classics: [
      {
        name: "To Kill A Mockingbird",
        author: "Harper Lee",
        description:
          "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize.",
        rating: "4.3/5"
      },
      {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        description:
          "Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. Though it is mostly called a romantic novel, it can also be considered a satirical book.",
        rating: "4.3/5"
      },
      {
        name: "Nineteen Eighty-Four",
        author: "George Orwell",
        description:
          "Nineteen Eighty-Four, often referred to as 1984, is a dystopian social science fiction novel by the English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
        rating: "4.2/5"
      }
    ],
    Fantasy: [
      {
        name: "Blood of Elves",
        author: "Andrzej Sapkowski",
        description:
          "Blood of Elves is the first novel in the Witcher Saga written by the Polish fantasy writer Andrzej Sapkowski, first published in Poland in 1994. It is a sequel to the Witcher short stories collected in the books The Last Wish and Sword of Destiny and is followed by Time of Contempt.",
        rating: "4.1/5"
      },
      {
        name: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        description:
          "The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, a place like Earth at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work.",
        rating: "4.5/5"
      },
      {
        name: "Eragon",
        author: "Christopher Paolini",
        description:
          "Eragon is the first book in The Inheritance Cycle by American fantasy writer Christopher Paolini. Paolini, born in 1983, began writing the novel after graduating from high school at age fifteen. After writing the first draft for a year, Paolini spent a second year rewriting and fleshing out the story and characters.",
        rating: "3.9/5"
      }
    ],
    Lifestyle: [
      {
        name: "The Power of Habit",
        author: "Charles Duhigg",
        description:
          "The Power of Habit: Why We Do What We Do in Life and Business is a book by Charles Duhigg, a New York Times reporter, published in February 2012 by Random House. It explores the science behind habit creation and reformation. The book reached the best seller list for The New York Times, Amazon.com, and USA Today.",
        rating: "4.1/5"
      },
      {
        name: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        description:
          "The Subtle Art of Not Giving a Fuck: A Counterintuitive Approach to Living a Good Life is the second book by blogger and author Mark Manson. In it Manson argues that life's struggles give it meaning, and that the mindless positivity of typical self-help books is neither practical nor helpful.",
        rating: "3.9/5"
      },
      {
        name: "12 Rules for Life",
        author: "Jordan Peterson",
        description:
          "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays in abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
        rating: "3.9/5"
      }
    ]
  };

  const [genreVal, setGenreVal] = useState("Action and Adventure");

  const clickHandler = (genre) => {
    setGenreVal(genre);
  };

  return (
    <div>
      <header
        style={{
          backgroundColor: "blue",
          padding: "20px 10px",
          color: "white",
          textAlign: "center"
        }}
      >
        <h1 style={{ textAlign: "center" }}>Good Reads!</h1>
      </header>
      <div style={{ textAlign: "center" }}>
        {Object.keys(bookList).map((genre) => {
          return (
            <button
              key={genre}
              onClick={() => clickHandler(genre)}
              style={{
                padding: "5px",
                margin: "10px",
                borderRadius: "0.25rem",
                border: "1px solid black"
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ listStyle: "none" }}>
          {bookList[genreVal].map((book) => {
            return (
              <li
                key={book.name}
                style={{
                  border: "1px solid rgb(0,0,0,0.3)",
                  padding: "8px",
                  width: "80%",
                  margin: "20px auto",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  {book.name}
                </div>
                <small>{book.rating}</small>
                <div style={{ fontSize: "1.25rem" }}>{book.author}</div>
                <p style={{ textAlign: "justify" }}>{book.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <footer
        style={{
          backgroundColor: "blue",
          padding: "20px 10px",
          color: "white",
          textAlign: "center"
        }}
      >
        Created in React. &copy; Jeffrin Mathew Benny
      </footer>
    </div>
  );
}
