import click
from flask import Flask

app = Flask(__name__)

@app.cli.command("create_user")
@click.argument("name")
def create_user(name):
    print("Created user, " + name)
