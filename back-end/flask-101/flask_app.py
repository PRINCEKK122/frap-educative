"""
.. epigraph::

   It's like asking why is Ludwig van Beethovens' Ninth Symphony beautiful. If you don't see why someone can't tell you.
   I know numbers are beautiful. If they aren't beautiful,
   nothing is.*
   -- Paul Erdos

The Numbers API is for when you *really* must track your **favorite**
**numbers**.

.. warning::
   This implementation does not persist data across sessions.
   Also, if it is run with multiple server processes, their data will not synchronize.
"""
from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello World!"
