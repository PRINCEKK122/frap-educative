from sqlalchemy import create_engine, Column, types
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# the triple slashes below indicates that the file is relative, while absolute ones uses four forward slashes
connection_string = "sqlite:///database.db"

db = create_engine(connection_string)  # this line is for connecting to the database
base = declarative_base()
Session = sessionmaker(db)
session = Session()


class Book(base):
    __tablename__ = "books"
    id = Column(types.Integer, primary_key=True)
    author = Column(types.String(length=50))
    title = Column(types.String(length=120), nullable=False)
    available = Column(types.Boolean, nullable=False)


base.metadata.create_all(db)

# creating a single entity
book1 = Book(author="Kurt Vonnegut", title="Player Piano", available=True)
session.add(book1)  # add one book

# creating multiple entities
session.add_all(
    [  # add a list of books
        Book(author="Annie Dillard", title="Pilgrim at Tinker Creek", available=False),
        Book(author="Lewis Carroll", title="Alice in Wonderland", available=True),
        Book(author="Kurt Vonnegut", title="Sirens of Titan", available=True),
    ]
)

session.commit()

for book in session.query(Book):
    print(book.id, book.title, book.available)


# updating an entity
# book1.available = False
# session.commit()

# deleting an entity
session.delete(book1)
session.commit()

