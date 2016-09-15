#!/usr/bin/env python

from livereload import Server, shell

server = Server()

server.watch("css/*.css")
server.watch("*.html")

server.serve(port=8080, host="localhost", open_url=True)
